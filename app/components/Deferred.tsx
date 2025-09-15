// components/Deferred.tsx
import { Suspense } from "react";
import { Await } from "@remix-run/react";

type DeferredProps<T> = {
  data: Promise<T>;            // dữ liệu promise (API call)
  fallback: React.ReactNode;   // UI hiển thị khi chờ
  children: (resolved: T) => React.ReactNode; // UI sau khi resolve
};

export function Deferred<T>({ data, fallback, children }: DeferredProps<T>) {
  return (
    <Suspense fallback={fallback}>
      <Await resolve={data}>{children}</Await>
    </Suspense>
  );
}