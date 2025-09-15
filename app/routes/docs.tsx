// app/routes/dashboard.tsx
import { defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { callApi, wrapDefer } from "../utils/deferApi";
import { Deferred } from "../components/Deferred";

export async function loader() {
  return defer({
    title: callApi(() => Promise.resolve("📊 Dashboard Title"), 1000),
    stats: wrapDefer(callApi(() => Promise.resolve(["User: 120", "Sales: 50"]), 2000)),
    reports: wrapDefer(callApi(() => Promise.resolve(["Report A", "Report B"]), 3000)),
  });
}

export default function Docs() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <Deferred data={data.title} fallback={<h2>⏳ Loading title...</h2>}>
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