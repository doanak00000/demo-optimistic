import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useNavigation
} from "/build/_shared/chunk-77WJR3R3.js";
import {
  createHotContext
} from "/build/_shared/chunk-BVOO4DQT.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var React = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
  import.meta.hot.lastModified = "1757563375881.8694";
}
function meta() {
  return [{
    charset: "utf-8"
  }, {
    title: "Remix Progressive Demo"
  }, {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }];
}
function Navbar() {
  _s();
  const navigation = useNavigation();
  const location = useLocation();
  const [pendingHref, setPendingHref] = React.useState(null);
  React.useEffect(() => {
    if (navigation.state === "idle")
      setPendingHref(null);
  }, [navigation.state]);
  function handleClick(_e, to) {
    setPendingHref(to);
  }
  function navClass(to) {
    const isActive = location.pathname === to;
    const isPending = pendingHref === to && navigation.state !== "idle";
    return `nav-link ${isActive || isPending ? "active" : ""} ${isPending ? "pending" : ""}`;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { style: {
    padding: "0.5rem 1rem",
    display: "flex",
    gap: "1rem"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: (e) => handleClick(e, "/"), className: navClass("/"), to: "/", children: "Home" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: (e) => handleClick(e, "/codebase"), className: navClass("/codebase"), to: "/codebase", prefetch: "intent", children: "Codebase" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { onClick: (e) => handleClick(e, "/docs"), className: navClass("/docs"), to: "/docs", prefetch: "intent", children: "Docs" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    navigation.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { style: {
      marginLeft: 12
    }, children: "Loading\u2026" }, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 99,
      columnNumber: 38
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
_s(Navbar, "f1B+Wjxfgnp2AfM6a6flsf4OKLo=", false, function() {
  return [useNavigation, useLocation];
});
_c = Navbar;
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 123,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 116,
    columnNumber: 10
  }, this);
}
_c2 = App;
var _c;
var _c2;
$RefreshReg$(_c, "Navbar");
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-3HFTUHVW.js.map
