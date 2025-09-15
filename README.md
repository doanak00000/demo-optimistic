Docs: Progressive Data Loading trong Remix (Pending UI + Deferred Data)

1. Vấn đề gốc

Trong SSR truyền thống của Remix:
	•	Khi user click vào navbar → browser chờ server fetch toàn bộ API → server render HTML → trả về.
	•	Nếu API chậm → UI bị block, user thấy “đứng hình”, không có feedback.

Trải nghiệm không mượt, đặc biệt khi gọi nhiều API trong 1 trang.

2. Ý tưởng giải pháp

Để giải quyết, ta áp dụng 3 kỹ thuật chính mà Remix v2 support:

2.1. Pending UI (Optimistic Navigation)
	•	Khi user click nav:
	•	URL đổi ngay.
	•	Navbar active ngay.
	•	Có thể hiện loading indicator (progress bar).
	•	Dùng hook useNavigation() để biết khi nào route đang “pending”.

2.2. Deferred Data
	•	Loader có thể trả về data bằng defer() → một số API trả ngay, một số API (chậm) sẽ resolve sau.
	•	Nhờ vậy, layout & skeleton render ngay, không chờ toàn bộ API.

2.3. Suspense + Fallback (Skeleton UI)
	•	Trong UI, dùng <Suspense fallback> + <Await> để render fallback trong lúc chờ data resolve.
	•	Skeleton/Fallback là UI tạm: có thể là spinner hoặc khung xám giả lập bố cục content.
	•	Khi API resolve → Suspense render nội dung thật.

3. Flow tổng quát
	1.	User click nav → URL đổi, nav active ngay (Pending UI).
	2.	Layout render ngay (SSR trả về khung).
	3.	Các phần data (title, content, chart, report, …) gọi API thông qua defer().
	4.	UI render skeleton/fallback trong lúc chờ API.
	5.	Khi API resolve → Suspense render nội dung thật, skeleton biến mất.

UI progressive: route đổi ngay, data hiển thị dần theo tốc độ API.

4. Utils & Component hỗ trợ

4.1. utils/deferApi.ts

Giúp wrap API call (fake delay hoặc thật).

// utils/deferApi.ts
export async function callApi<T>(fn: () => Promise<T>, delay = 0): Promise<T> {
  if (delay > 0) {
    await new Promise((r) => setTimeout(r, delay));
  }
  return fn();
}

export function wrapDefer<T>(promise: Promise<T>): Promise<T> {
  return promise;
}

4.2. components/Deferred.tsx

Wrapper UI cho Suspense + Await.

// components/Deferred.tsx
import { Suspense } from "react";
import { Await } from "@remix-run/react";

type DeferredProps<T> = {
  data: Promise<T>;
  fallback: React.ReactNode;
  children: (resolved: T) => React.ReactNode;
};

export function Deferred<T>({ data, fallback, children }: DeferredProps<T>) {
  return (
    <Suspense fallback={fallback}>
      <Await resolve={data}>{children}</Await>
    </Suspense>
  );
}

5. Ví dụ thực tế: Dashboard nhiều API

// app/routes/dashboard.tsx
import { defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { callApi, wrapDefer } from "~/utils/deferApi";
import { Deferred } from "~/components/Deferred";

export async function loader() {
  return defer({
    title: callApi(() => Promise.resolve("Dashboard Title"), 1000),
    stats: wrapDefer(callApi(() => Promise.resolve(["User: 120", "Sales: 50"]), 2000)),
    reports: wrapDefer(callApi(() => Promise.resolve(["Report A", "Report B"]), 3000)),
  });
}

export default function Dashboard() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <Deferred data={data.title} fallback={<h2>Loading title...</h2>}>
        {(title) => <h2>{title}</h2>}
      </Deferred>

      <Deferred data={data.stats} fallback={<p>Loading stats...</p>}>
        {(stats) => (
          <ul>
            {stats.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        )}
      </Deferred>

      <Deferred data={data.reports} fallback={<p>Loading reports...</p>}>
        {(reports) => (
          <ul>
            {reports.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        )}
      </Deferred>
    </div>
  );
}

6. Lợi ích
	•	Không block UI: route + layout render ngay.
	•	Trải nghiệm mượt: user thấy skeleton/fallback, biết trang đang load.
	•	Dễ maintain: dùng Deferred component chung, code gọn hơn.
	•	Scalable: nhiều API call vẫn ổn vì mỗi block load độc lập.

7. Checklist khi áp dụng vào real app
	•	Layout (root.tsx) chỉ load data nhẹ.
	•	API quan trọng/SEO thì load trực tiếp, API phụ/nặng thì defer.
	•	Mỗi route chia nhỏ UI block và dùng <Deferred> để hiển thị dần.
	•	Navbar dùng useNavigation() để highlight pending state.
