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

// app/routes/docs.tsx
var import_react = __toESM(require_react());
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/docs.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/docs.tsx"
  );
  import.meta.hot.lastModified = "1757534982000";
}
function Docs() {
  _s();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Docs" }, void 0, false, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Small intro is visible right away; long docs stream in below." }, void 0, false, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.default.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "skeleton", style: {
        width: "100%",
        height: "6rem"
      } }, void 0, false, {
        fileName: "app/routes/docs.tsx",
        lineNumber: 40,
        columnNumber: 55
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading docs\u2026" }, void 0, false, {
        fileName: "app/routes/docs.tsx",
        lineNumber: 43,
        columnNumber: 16
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 40,
      columnNumber: 33
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Await, { resolve: data.intro, children: (t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "card", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: t }, void 0, false, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 46,
      columnNumber: 15
    }, this) }, void 0, false, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 45,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/docs.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/docs.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_s(Docs, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c = Docs;
var _c;
$RefreshReg$(_c, "Docs");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Docs as default
};
//# sourceMappingURL=/build/routes/docs-PQIFYW7U.js.map
