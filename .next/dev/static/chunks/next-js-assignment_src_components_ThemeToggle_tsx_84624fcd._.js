(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-js-assignment/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeToggle = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "3cbc83faadb8b0df3d6e21cd0780cd9b22cb14356b6f2a79be82d10daaec4b8c") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3cbc83faadb8b0df3d6e21cd0780cd9b22cb14356b6f2a79be82d10daaec4b8c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = localStorage.getItem("theme") || "light";
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] !== theme) {
        t1 = ()=>{
            localStorage.setItem("theme", theme);
            document.documentElement.style.setProperty("--background", theme === "dark" ? "#0a0a0a" : "#ffffff");
            document.documentElement.style.setProperty("--foreground", theme === "dark" ? "#ededed" : "#000000");
        };
        t2 = [
            theme
        ];
        $[2] = theme;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[5] !== theme) {
        t3 = ()=>{
            setTheme(theme === "light" ? "dark" : "light");
        };
        $[5] = theme;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const toggleTheme = t3;
    const t4 = theme === "light" ? "Dark Mode" : "Light Mode";
    let t5;
    if ($[7] !== t4 || $[8] !== toggleTheme) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleTheme,
            className: "bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded",
            children: t4
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThemeToggle.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
        $[8] = toggleTheme;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    return t5;
};
_s(ThemeToggle, "H1vFnzLrVLxBP4NY7NkrKOQZAdI=");
_c = ThemeToggle;
const __TURBOPACK__default__export__ = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-js-assignment/src/components/ThemeToggle.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/next-js-assignment/src/components/ThemeToggle.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=next-js-assignment_src_components_ThemeToggle_tsx_84624fcd._.js.map