// app/root.tsx
import * as React from "react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useNavigation,
  useLocation,
} from "@remix-run/react";

/**
 * Meta function của Remix để định nghĩa metadata cho trang
 * Metadata này sẽ được inject vào thẻ <head> của HTML document
 *
 * @returns Mảng các object metadata cho trang web
 */
export function meta() {
  return [
    { charset: "utf-8" },
    { title: "Remix Progressive Demo" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
}

/**
 * Component Navigation bar cho ứng dụng
 * Hiển thị các link điều hướng với trạng thái active và pending
 * Sử dụng useNavigation và useLocation từ Remix để theo dõi trạng thái navigation
 *
 * @returns JSX element - Thanh điều hướng với các link
 */
function Navbar() {
  // Hook Remix để theo dõi trạng thái navigation (idle, loading, submitting)
  const navigation = useNavigation();
  // Hook Remix để lấy thông tin về URL hiện tại
  const location = useLocation();
  // State để theo dõi link đang được click (pending navigation)
  const [pendingHref, setPendingHref] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (navigation.state === "idle") setPendingHref(null);
  }, [navigation.state]);

  /**
   * Xử lý sự kiện click trên navigation link
   * Thiết lập pendingHref để theo dõi link đang được chuyển đến
   *
   * @param _e - React mouse event (không được sử dụng)
   * @param to - Đường dẫn đích của navigation
   */
  function handleClick(_e: React.MouseEvent, to: string) {
    setPendingHref(to);
  }

  /**
   * Hàm helper để tính toán CSS class cho navigation link
   * Dựa trên trạng thái active (trang hiện tại) và pending (đang chuyển trang)
   *
   * @param to - Đường dẫn cần kiểm tra
   * @returns Chuỗi CSS class cho navigation link
   */
  function navClass(to: string) {
    const isActive = location.pathname === to;
    const isPending = pendingHref === to && navigation.state !== "idle";
    return `nav-link ${isActive || isPending ? "active" : ""} ${
      isPending ? "pending" : ""
    }`;
  }

  return (
    <nav style={{ padding: "0.5rem 1rem", display: "flex", gap: "1rem" }}>
      <Link onClick={(e) => handleClick(e, "/")} className={navClass("/")} to="/">
        Home
      </Link>
      <Link
        onClick={(e) => handleClick(e, "/codebase")}
        className={navClass("/codebase")}
        to="/codebase"
        prefetch="intent"
      >
        Codebase
      </Link>
      <Link
        onClick={(e) => handleClick(e, "/docs")}
        className={navClass("/docs")}
        to="/docs"
        prefetch="intent"
      >
        Docs
      </Link>
      {navigation.state !== "idle" ? (
        <span style={{ marginLeft: 12 }}>Loading…</span>
      ) : null}
    </nav>
  );
}

/**
 * Component App chính - Root component của ứng dụng Remix
 * Định nghĩa cấu trúc HTML cơ bản và layout chung cho toàn bộ ứng dụng
 *
 * @returns JSX element - Cấu trúc HTML root của ứng dụng
 */
export default function App() {
  return (
    <html lang="en">
      <head>
        {/* Remix Meta component - inject metadata từ các route meta function */}
        <Meta />
        {/* Remix Links component - inject CSS và các resource links */}
        <Links />
      </head>
      <body>
        {/* Navigation bar chung cho toàn bộ ứng dụng */}
        <Navbar />
        {/* Remix Outlet component - nơi nội dung của route hiện tại sẽ được render */}
        <Outlet />
        {/* Remix ScrollRestoration - tự động khôi phục vị trí scroll khi navigation */}
        <ScrollRestoration />
        {/* Remix Scripts - inject JavaScript bundles */}
        <Scripts />
        {/* LiveReload - hỗ trợ hot reload trong development */}
        <LiveReload />
      </body>
    </html>
  );
}