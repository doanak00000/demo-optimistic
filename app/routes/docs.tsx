import React from "react";
import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";

function slowText(ms = 2500) {
  return new Promise<string>((res) => setTimeout(() => res("This heavy docs content arrived after a delay."), ms));
}

export async function loader() {
  return defer({ intro: slowText(2500) });
}

export default function Docs() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Docs</h1>
      <p>Small intro is visible right away; long docs stream in below.</p>

      <React.Suspense fallback={<div className="card"><div className="skeleton" style={{width: '100%', height: '6rem'}}></div><p>Loading docs…</p></div>}>
        <Await resolve={data.intro}>
          {(t: string) => (
            <div className="card">
              <p>{t}</p>
            </div>
          )}
        </Await>
      </React.Suspense>
    </div>
  );
}