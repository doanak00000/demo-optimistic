import React from "react";
import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

/**
 * Tạo một Promise sẽ resolve sau một khoảng thời gian delay
 * Hữu ích để mô phỏng các thao tác bất đồng bộ chậm trong quá trình phát triển
 *
 * @template T - Kiểu dữ liệu của giá trị sẽ được resolve
 * @param value - Giá trị sẽ được resolve sau khi delay
 * @param ms - Thời gian delay tính bằng mili giây (mặc định: 3000ms)
 * @returns Promise<T> - Promise sẽ resolve với giá trị đã cho sau khoảng thời gian delay
 */
function slowResolve<T>(value: T, ms = 3000) {
  return new Promise<T>((res) => setTimeout(() => res(value), ms));
}

/**
 * Loader function của Remix để tải dữ liệu cho route
 * Hàm này chạy trên server và trả về dữ liệu được stream bất đồng bộ
 * Sử dụng defer() để cho phép streaming dữ liệu khi nó sẵn sàng
 *
 * @returns Đối tượng chứa metadata và các promise cho dữ liệu bất đồng bộ
 */
export async function loader() {
  // Metadata tĩnh được trả về ngay lập tức
  const meta = { title: "Codebase overview" };
  
  // Dữ liệu repository list - resolve sau 3.5 giây để mô phỏng tải chậm
  const repoList = slowResolve([
    { id: 1, name: "remix-core" },
    { id: 2, name: "ui-kit" },
    { id: 3, name: "analytics" },
  ], 3500);

  // Dữ liệu metrics - resolve sau 4.5 giây (chậm hơn repoList)
  const metrics = slowResolve({ stars: 1234, contributors: 42 }, 4500);

  // Trả về dữ liệu với defer() để cho phép streaming bất đồng bộ
  return defer({ meta, repoList, metrics });
}

/**
 * Component chính của route Codebase
 * Hiển thị giao diện người dùng với dữ liệu được tải bất đồng bộ
 * Sử dụng React.Suspense và Await để xử lý streaming dữ liệu
 *
 * @returns JSX element - Giao diện của trang Codebase
 */
export default function CodebaseRoute() {
  // Lấy dữ liệu từ loader, bao gồm các promise cho dữ liệu bất đồng bộ
  // Lấy dữ liệu từ loader, bao gồm các promise cho dữ liệu bất đồng bộ
  // Sử dụng any để tránh lỗi type với JsonifyObject trong defer()
  const data = useLoaderData<any>();

  return (
    <div>
      <h1>Codebase</h1>
      <p>Layout renders immediately; heavy data is streamed and shown when ready.</p>

      <div className="card">
        <h3>Overview</h3>
        <p>Some quick static overview (fast).</p>
      </div>

      <React.Suspense fallback={<div className="card"><div className="skeleton" style={{width: '50%'}}></div><p>Loading repository list…</p></div>}>
        <Await resolve={data.repoList}>
          {(repos: {id:number;name:string}[]) => (
            <div className="card">
              <h3>Repositories</h3>
              <ul>
                {repos.map(r => <li key={r.id}>{r.name}</li>)}
              </ul>
            </div>
          )}
        </Await>
      </React.Suspense>

      <React.Suspense fallback={<div className="card"><p>Loading metrics…</p></div>}>
        <Await resolve={data.metrics}>
          {(m: {stars:number;contributors:number}) => (
            <div className="card">
              <h3>Metrics</h3>
              <p>⭐ Stars: {m.stars}</p>
              <p>👥 Contributors: {m.contributors}</p>
            </div>
          )}
        </Await>
      </React.Suspense>
    </div>
  );
}