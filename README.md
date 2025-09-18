Progressive Data Loading in Remix (Pending UI + Deferred Data)

1. Root Problem

In traditional Remix SSR:
	•	When a user clicks on the navbar → the browser waits for the server to fetch all APIs → the server renders HTML → response is returned.
	•	If an API is slow → the UI is blocked, and the user sees a “freeze” with no feedback.

This leads to a choppy experience, especially when multiple APIs are called in a single page.

⸻

2. Solution Idea

To solve this, we apply 3 main techniques supported by Remix v2:

2.1. Pending UI (Optimistic Navigation)
	•	When a user clicks navigation:
	•	The URL changes immediately.
	•	Navbar becomes active immediately.
	•	A loading indicator (e.g., progress bar) can be displayed.
	•	Use the useNavigation() hook to know when a route is “pending”.

2.2. Deferred Data
	•	A loader can return data using defer() → some APIs return immediately, while others (slower ones) resolve later.
	•	This way, the layout & skeleton render immediately without waiting for all APIs.

2.3. Suspense + Fallback (Skeleton UI)
	•	In UI, use <Suspense fallback> + <Await> to render a fallback while waiting for data to resolve.
	•	Skeleton/Fallback is temporary UI: it could be a spinner or gray boxes that mimic the content layout.
	•	Once the API resolves → Suspense renders the real content.

⸻

3. Overall Flow
	1.	User clicks navigation → URL changes, navbar activates instantly (Pending UI).
	2.	Layout renders immediately (SSR returns the frame).
	3.	Data blocks (title, content, chart, report, …) call APIs via defer().
	4.	UI shows skeleton/fallback while waiting for API responses.
	5.	When APIs resolve → Suspense renders real content, skeleton disappears.

Progressive UI: route changes instantly, data displays gradually depending on API speed.

⸻

4. Supporting Utils & Components

4.1. utils/deferApi.ts

Helps wrap API calls (with optional fake delay).

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


⸻

4.2. components/Deferred.tsx

Wrapper UI for Suspense + Await.

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


⸻

5. Real Example: Dashboard with Multiple APIs

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


⸻

6. Benefits
	•	No UI blocking: route + layout render immediately.
	•	Smooth UX: user sees skeleton/fallback, so they know the page is loading.
	•	Easy to maintain: shared Deferred component keeps code clean.
	•	Scalable: multiple API calls are fine because each block loads independently.

⸻

7. Checklist for Real App Usage
	•	root.tsx layout should only load light data.
	•	Critical/SEO APIs should load directly, heavy/secondary ones should use defer.
	•	Split each route’s UI into blocks and use <Deferred> to progressively display.
	•	Navbar uses useNavigation() to highlight pending state.
