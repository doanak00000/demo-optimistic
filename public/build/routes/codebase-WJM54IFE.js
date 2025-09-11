import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Await,
  useLoaderData
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

// app/routes/codebase.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/codebase.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/codebase.tsx"
  );
  import.meta.hot.lastModified = "1757563126747.3037";
}
function CodebaseRoute() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Codebase" }, void 0, false, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Layout renders immediately; heavy data is streamed and shown when ready." }, void 0, false, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Overview" }, void 0, false, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Some quick static overview (fast)." }, void 0, false, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 95,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.default.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "skeleton", style: {
        width: "50%"
      } }, void 0, false, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 100,
        columnNumber: 55
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading repository list\u2026" }, void 0, false, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 102,
        columnNumber: 16
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 100,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: data.repoList, children: (repos) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Repositories" }, void 0, false, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 105,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: repos.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: r.name }, r.id, false, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 107,
        columnNumber: 33
      }, this)) }, void 0, false, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 106,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 104,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.default.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading metrics\u2026" }, void 0, false, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 113,
      columnNumber: 55
    }, this) }, void 0, false, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 113,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: data.metrics, children: (m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { children: "Metrics" }, void 0, false, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 116,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "\u2B50 Stars: ",
        m.stars
      ] }, void 0, true, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 117,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "\u{1F465} Contributors: ",
        m.contributors
      ] }, void 0, true, {
        fileName: "app/routes/codebase.tsx",
        lineNumber: 118,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 115,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/codebase.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/codebase.tsx",
    lineNumber: 91,
    columnNumber: 10
  }, this);
}
_s(CodebaseRoute, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = CodebaseRoute;
var _c;
$RefreshReg$(_c, "CodebaseRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CodebaseRoute as default
};
//# sourceMappingURL=/build/routes/codebase-WJM54IFE.js.map
