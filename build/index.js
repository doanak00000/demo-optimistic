var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), isbotModule = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var React = __toESM(require("react")), import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function meta() {
  return [
    { charset: "utf-8" },
    { title: "Remix Progressive Demo" },
    { name: "viewport", content: "width=device-width,initial-scale=1" }
  ];
}
function Navbar() {
  let navigation = (0, import_react2.useNavigation)(), location = (0, import_react2.useLocation)(), [pendingHref, setPendingHref] = React.useState(null);
  React.useEffect(() => {
    navigation.state === "idle" && setPendingHref(null);
  }, [navigation.state]);
  function handleClick(_e, to) {
    setPendingHref(to);
  }
  function navClass(to) {
    let isActive = location.pathname === to, isPending = pendingHref === to && navigation.state !== "idle";
    return `nav-link ${isActive || isPending ? "active" : ""} ${isPending ? "pending" : ""}`;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { style: { padding: "0.5rem 1rem", display: "flex", gap: "1rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { onClick: (e) => handleClick(e, "/"), className: navClass("/"), to: "/", children: "Home" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        onClick: (e) => handleClick(e, "/codebase"),
        className: navClass("/codebase"),
        to: "/codebase",
        prefetch: "intent",
        children: "Codebase"
      },
      void 0,
      !1,
      {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      import_react2.Link,
      {
        onClick: (e) => handleClick(e, "/docs"),
        className: navClass("/docs"),
        to: "/docs",
        prefetch: "intent",
        children: "Docs"
      },
      void 0,
      !1,
      {
        fileName: "app/root.tsx",
        lineNumber: 87,
        columnNumber: 7
      },
      this
    ),
    navigation.state !== "idle" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { style: { marginLeft: 12 }, children: "Loading\u2026" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Navbar, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}

// app/routes/codebase.tsx
var codebase_exports = {};
__export(codebase_exports, {
  default: () => CodebaseRoute,
  loader: () => loader
});
var import_react3 = __toESM(require("react")), import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function slowResolve(value, ms = 3e3) {
  return new Promise((res) => setTimeout(() => res(value), ms));
}
async function loader() {
  let meta2 = { title: "Codebase overview" }, repoList = slowResolve([
    { id: 1, name: "remix-core" },
    { id: 2, name: "ui-kit" },
    { id: 3, name: "analytics" }
  ], 3500), metrics = slowResolve({ stars: 1234, contributors: 42 }, 4500);
  return (0, import_node2.defer)({ meta: meta2, repoList, metrics });
}
function CodebaseRoute() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Codebase" }, void 0, !1, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Layout renders immediately; heavy data is streamed and shown when ready." }, void 0, !1, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Overview" }, void 0, !1, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Some quick static overview (fast)." }, void 0, !1, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.default.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "skeleton", style: { width: "50%" } }, void 0, !1, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 66,
        columnNumber: 55
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Loading repository list\u2026" }, void 0, !1, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 66,
        columnNumber: 110
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 66,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Await, { resolve: data.repoList, children: (repos) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Repositories" }, void 0, !1, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 70,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: repos.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: r.name }, r.id, !1, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 72,
        columnNumber: 33
      }, this)) }, void 0, !1, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 71,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 69,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 67,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.default.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Loading metrics\u2026" }, void 0, !1, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 79,
      columnNumber: 55
    }, this) }, void 0, !1, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 79,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react4.Await, { resolve: data.metrics, children: (m) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Metrics" }, void 0, !1, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 83,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "\u2B50 Stars: ",
        m.stars
      ] }, void 0, !0, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 84,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "\u{1F465} Contributors: ",
        m.contributors
      ] }, void 0, !0, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/codebase.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Home" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "This is a lightweight page. Click the nav to trigger routes with deferred content." }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/docs.tsx
var docs_exports = {};
__export(docs_exports, {
  default: () => Docs,
  loader: () => loader2
});
var import_react5 = __toESM(require("react")), import_node3 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function slowText(ms = 2500) {
  return new Promise((res) => setTimeout(() => res("This heavy docs content arrived after a delay."), ms));
}
async function loader2() {
  return (0, import_node3.defer)({ intro: slowText(2500) });
}
function Docs() {
  let data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: "Docs" }, void 0, !1, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Small intro is visible right away; long docs stream in below." }, void 0, !1, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.default.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "skeleton", style: { width: "100%", height: "6rem" } }, void 0, !1, {
        fileName: "app/routes/docs.tsx",
        lineNumber: 21,
        columnNumber: 55
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Loading docs\u2026" }, void 0, !1, {
        fileName: "app/routes/docs.tsx",
        lineNumber: 21,
        columnNumber: 127
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 21,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react6.Await, { resolve: data.intro, children: (t) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: t }, void 0, !1, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 25,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-UACNPMKD.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-77WJR3R3.js", "/build/_shared/chunk-BVOO4DQT.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3HFTUHVW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/codebase": { id: "routes/codebase", parentId: "root", path: "codebase", index: void 0, caseSensitive: void 0, module: "/build/routes/codebase-WJM54IFE.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/docs": { id: "routes/docs", parentId: "root", path: "docs", index: void 0, caseSensitive: void 0, module: "/build/routes/docs-PQIFYW7U.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-5P6FNSZ5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "c9e80987", hmr: { runtime: "/build/_shared/chunk-BVOO4DQT.js", timestamp: 1757563376393 }, url: "/build/manifest-C9E80987.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/codebase": {
    id: "routes/codebase",
    parentId: "root",
    path: "codebase",
    index: void 0,
    caseSensitive: void 0,
    module: codebase_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/docs": {
    id: "routes/docs",
    parentId: "root",
    path: "docs",
    index: void 0,
    caseSensitive: void 0,
    module: docs_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
