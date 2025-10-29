(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/next-js-assignment/src/data/mockThreatData.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"summary":{"emails_scanned":14820,"threats_detected":26,"quarantined_items":18},"threats":[{"id":"th_1a2b3c","timestamp":"2023-10-27T08:45:10Z","type":"Phishing","status":"Quarantined","risk_score":95,"details":{"subject":"Action Required: Your Account Has Been Suspended","sender":"support@microsft.com"}},{"id":"th_4d5e6f","timestamp":"2023-10-27T07:12:30Z","type":"Malware","status":"Blocked","risk_score":82,"details":{"subject":"Scanned Document: invoice_2023.pdf","sender":"scanner@company-printer.com"}},{"id":"th_7g8h9i","timestamp":"2023-10-27T06:55:00Z","type":"Spam","status":"Quarantined","risk_score":40,"details":{"subject":"Exclusive Offer Just For You!","sender":"marketing@deals-unlimited.com"}},{"id":"th_9j8k7l","timestamp":"2023-10-27T04:20:15Z","type":"Phishing","status":"Blocked","risk_score":98,"details":{"subject":"URGENT: Verify Your Bank Details Now","sender":"security@paypa1.com"}}]});}),
"[project]/next-js-assignment/src/components/ThreatFeed/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const FilterBar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "51de4083c36590f07b04902a86a433cc376b9d6e569f7601ffb9d5716468e53e") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51de4083c36590f07b04902a86a433cc376b9d6e569f7601ffb9d5716468e53e";
    }
    const { activeFilter, setActiveFilter } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            "All",
            "Phishing",
            "Malware",
            "Spam"
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const filters = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search by subject or sender...",
            className: "border rounded-md p-2 w-64"
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/FilterBar.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== activeFilter || $[4] !== setActiveFilter) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-4",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-4",
                    children: filters.map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `px-4 py-2 rounded-md ${activeFilter === filter ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`,
                            onClick: ()=>setActiveFilter(filter),
                            children: filter
                        }, filter, false, {
                            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/FilterBar.tsx",
                            lineNumber: 36,
                            columnNumber: 125
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/next-js-assignment/src/components/ThreatFeed/FilterBar.tsx",
                    lineNumber: 36,
                    columnNumber: 70
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/FilterBar.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = activeFilter;
        $[4] = setActiveFilter;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
};
_c = FilterBar;
const __TURBOPACK__default__export__ = FilterBar;
var _c;
__turbopack_context__.k.register(_c, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const SummaryCards = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "bc461e1baf914fb4b9c0f680080150c838dbd2331baee174e8f919b0f49e49cc") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc461e1baf914fb4b9c0f680080150c838dbd2331baee174e8f919b0f49e49cc";
    }
    const { summary } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-medium text-gray-700",
            children: "Emails Scanned"
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== summary.emails_scanned) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow rounded-lg p-4",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-gray-900",
                    children: summary.emails_scanned
                }, void 0, false, {
                    fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
                    lineNumber: 26,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
            lineNumber: 26,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = summary.emails_scanned;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-medium text-gray-700",
            children: "Threats Detected"
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] !== summary.threats_detected) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow rounded-lg p-4",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-gray-900",
                    children: summary.threats_detected
                }, void 0, false, {
                    fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
                    lineNumber: 41,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = summary.threats_detected;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-medium text-gray-700",
            children: "Quarantined Items"
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== summary.quarantined_items) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow rounded-lg p-4",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-gray-900",
                    children: summary.quarantined_items
                }, void 0, false, {
                    fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
                    lineNumber: 56,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = summary.quarantined_items;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t2 || $[11] !== t4 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:flex-row",
            children: [
                t2,
                t4,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t2;
        $[11] = t4;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
};
_c = SummaryCards;
const __TURBOPACK__default__export__ = SummaryCards;
var _c;
__turbopack_context__.k.register(_c, "SummaryCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-js-assignment/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterByType",
    ()=>filterByType,
    "formatTime",
    ()=>formatTime,
    "severity",
    ()=>severity,
    "sortThreats",
    ()=>sortThreats,
    "typeMeta",
    ()=>typeMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
function severity(score) {
    if (score < 40) {
        return {
            label: 'Low',
            badgeClass: 'bg-green-100 text-green-800',
            barClass: 'bg-green-500'
        };
    } else if (score < 70) {
        return {
            label: 'Medium',
            badgeClass: 'bg-yellow-100 text-yellow-800',
            barClass: 'bg-yellow-500'
        };
    } else if (score < 90) {
        return {
            label: 'High',
            badgeClass: 'bg-orange-100 text-orange-800',
            barClass: 'bg-orange-500'
        };
    } else {
        return {
            label: 'Critical',
            badgeClass: 'bg-red-100 text-red-800',
            barClass: 'bg-red-500'
        };
    }
}
function formatTime(iso) {
    const date = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = diff / (1000 * 60 * 60);
    if (hours < 24) {
        const minutes = Math.floor(diff / (1000 * 60));
        if (minutes < 60) {
            return `${minutes} minutes ago`;
        } else {
            return `${Math.floor(hours)} hours ago`;
        }
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'dd MMM yyyy, HH:mm');
    }
}
function typeMeta(type) {
    switch(type){
        case 'Phishing':
            return {
                icon: 'ShieldAlert',
                accentClass: 'text-blue-500'
            };
        case 'Malware':
            return {
                icon: 'Bug',
                accentClass: 'text-red-500'
            };
        case 'Spam':
            return {
                icon: 'MailWarning',
                accentClass: 'text-yellow-500'
            };
        default:
            return {
                icon: 'AlertCircle',
                accentClass: 'text-gray-500'
            };
    }
}
function sortThreats(threats) {
    return threats.sort((a, b)=>{
        if (b.risk_score !== a.risk_score) {
            return b.risk_score - a.risk_score;
        }
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
}
function filterByType(list, active) {
    if (active === 'All') {
        return list;
    }
    return list.filter((item)=>item.type === active);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bug.js [app-client] (ecmascript) <export default as Bug>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MailWarning$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail-warning.js [app-client] (ecmascript) <export default as MailWarning>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dayjs/plugin/relativeTime.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const ThreatItem = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "3fc9d8665520b5d946b2b0bc0a05a1a79675463383f71c204bc3463cb9e1821b") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3fc9d8665520b5d946b2b0bc0a05a1a79675463383f71c204bc3463cb9e1821b";
    }
    const { threat } = t0;
    let t1;
    if ($[1] !== threat.risk_score) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["severity"])(threat.risk_score);
        $[1] = threat.risk_score;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const { label, badgeClass, barClass } = t1;
    let t2;
    if ($[3] !== threat.type) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typeMeta"])(threat.type);
        $[3] = threat.type;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const { icon, accentClass } = t2;
    const IconComponent = icon === "ShieldAlert" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"] : icon === "Bug" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bug$3e$__["Bug"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2d$warning$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MailWarning$3e$__["MailWarning"];
    const t3 = `bg-white shadow rounded-lg p-4 hover:shadow-lg transition-shadow duration-200 border-l-4 ${barClass}`;
    let t4;
    if ($[5] !== threat.details.subject) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-bold text-gray-900 truncate",
            children: threat.details.subject
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = threat.details.subject;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = `${label} Risk: ${threat.risk_score}`;
    const t6 = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeClass}`;
    let t7;
    if ($[7] !== label || $[8] !== t5 || $[9] !== t6 || $[10] !== threat.risk_score) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            role: "status",
            "aria-label": t5,
            className: t6,
            children: [
                label,
                threat.risk_score
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 62,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = label;
        $[8] = t5;
        $[9] = t6;
        $[10] = threat.risk_score;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t4 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center",
            children: [
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t4;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== threat.details.sender) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Sender: ",
                threat.details.sender
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = threat.details.sender;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    let t10;
    if ($[17] !== threat.timestamp) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(threat.timestamp).fromNow();
        $[17] = threat.timestamp;
        $[18] = t10;
    } else {
        t10 = $[18];
    }
    let t11;
    if ($[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: [
                "Time: ",
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11 || $[22] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 text-sm text-gray-500",
            children: [
                t9,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t11;
        $[22] = t9;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    const t13 = `h-4 w-4 ${accentClass}`;
    let t14;
    if ($[24] !== IconComponent || $[25] !== t13 || $[26] !== threat.type) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
            "aria-label": threat.type,
            className: t13
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 116,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = IconComponent;
        $[25] = t13;
        $[26] = threat.type;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== threat.type) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-medium text-gray-700 ml-auto",
            children: threat.type
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = threat.type;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] !== t14 || $[31] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center space-x-2",
                children: [
                    t14,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
                lineNumber: 134,
                columnNumber: 33
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t14;
        $[31] = t15;
        $[32] = t16;
    } else {
        t16 = $[32];
    }
    const t17 = `Risk score: ${threat.risk_score}%`;
    const t18 = `${barClass} h-2 rounded-full`;
    const t19 = `${threat.risk_score}%`;
    let t20;
    if ($[33] !== t19) {
        t20 = {
            width: t19
        };
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== t18 || $[36] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t18,
            style: t20
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t18;
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] !== t17 || $[39] !== t21 || $[40] !== threat.risk_score) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 bg-gray-200 rounded-full h-2",
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": threat.risk_score,
            "aria-label": t17,
            children: t21
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t17;
        $[39] = t21;
        $[40] = threat.risk_score;
        $[41] = t22;
    } else {
        t22 = $[41];
    }
    let t23;
    if ($[42] !== threat.id) {
        t23 = ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Threat ID: ${threat.id} viewed!`);
        };
        $[42] = threat.id;
        $[43] = t23;
    } else {
        t23 = $[43];
    }
    const t24 = `View details for threat ID: ${threat.id}`;
    let t25;
    if ($[44] !== t23 || $[45] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t23,
            className: "mt-4 text-blue-500 hover:text-blue-700",
            "aria-label": t24,
            children: "View Details"
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t23;
        $[45] = t24;
        $[46] = t25;
    } else {
        t25 = $[46];
    }
    let t26;
    if ($[47] !== t12 || $[48] !== t16 || $[49] !== t22 || $[50] !== t25 || $[51] !== t3 || $[52] !== t8) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "article",
            className: t3,
            children: [
                t8,
                t12,
                t16,
                t22,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx",
            lineNumber: 195,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t12;
        $[48] = t16;
        $[49] = t22;
        $[50] = t25;
        $[51] = t3;
        $[52] = t8;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    return t26;
};
_c = ThreatItem;
const __TURBOPACK__default__export__ = ThreatItem;
var _c;
__turbopack_context__.k.register(_c, "ThreatItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-js-assignment/src/components/ThreatFeed/ThreatList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$components$2f$ThreatFeed$2f$ThreatItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/src/components/ThreatFeed/ThreatItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
;
;
;
const ThreatList = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "a88f4c936b7284dc979492ec560ccdf1289fcb2173d78c527ea1bb0430f0687c") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a88f4c936b7284dc979492ec560ccdf1289fcb2173d78c527ea1bb0430f0687c";
    }
    const { threats } = t0;
    if (!threats || threats.length === 0) {
        let t1;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-500 p-4",
                children: "No threats found."
            }, void 0, false, {
                fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatList.tsx",
                lineNumber: 22,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[1] = t1;
        } else {
            t1 = $[1];
        }
        return t1;
    }
    let t1;
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            opacity: 0
        };
        t2 = {
            opacity: 1
        };
        t3 = {
            duration: 0.5
        };
        $[2] = t1;
        $[3] = t2;
        $[4] = t3;
    } else {
        t1 = $[2];
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] !== threats) {
        t4 = threats.map(_temp);
        $[5] = threats;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 sm:px-0",
            initial: t1,
            animate: t2,
            transition: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatList.tsx",
            lineNumber: 60,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t4;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    return t5;
};
_c = ThreatList;
const __TURBOPACK__default__export__ = ThreatList;
function _temp(threat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.5
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$components$2f$ThreatFeed$2f$ThreatItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            threat: threat
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatList.tsx",
            lineNumber: 78,
            columnNumber: 6
        }, this)
    }, threat.id, false, {
        fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatList.tsx",
        lineNumber: 70,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ThreatList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/next-js-assignment/src/components/ThreatFeed/ThreatFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$data$2f$mockThreatData$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/next-js-assignment/src/data/mockThreatData.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$components$2f$ThreatFeed$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/src/components/ThreatFeed/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$components$2f$ThreatFeed$2f$SummaryCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/src/components/ThreatFeed/SummaryCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$components$2f$ThreatFeed$2f$ThreatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/next-js-assignment/src/components/ThreatFeed/ThreatList.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ThreatFeed = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "91377180c5e176b310507f7bd162cad8b1b7a596995952f07b69306881e52eb5") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "91377180c5e176b310507f7bd162cad8b1b7a596995952f07b69306881e52eb5";
    }
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const threatData = __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$data$2f$mockThreatData$2e$json__$28$json$29$__["default"];
    let t0;
    if ($[1] !== activeFilter) {
        const filteredThreats = activeFilter === "All" ? threatData.threats : threatData.threats.filter((threat)=>threat.type === activeFilter);
        t0 = [
            ...filteredThreats
        ].sort(_temp);
        $[1] = activeFilter;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const sortedThreats = t0;
    let t1;
    if ($[3] !== activeFilter) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$components$2f$ThreatFeed$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            activeFilter: activeFilter,
            setActiveFilter: setActiveFilter
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatFeed.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = activeFilter;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$components$2f$ThreatFeed$2f$SummaryCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            summary: threatData.summary
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatFeed.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== sortedThreats) {
        t3 = sortedThreats.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$src$2f$components$2f$ThreatFeed$2f$ThreatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            threats: sortedThreats
        }, void 0, false, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatFeed.tsx",
            lineNumber: 48,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "No threats found."
                }, void 0, false, {
                    fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatFeed.tsx",
                    lineNumber: 48,
                    columnNumber: 107
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "mt-4 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700",
                    onClick: ()=>setActiveFilter("All"),
                    children: "Reset Filter"
                }, void 0, false, {
                    fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatFeed.tsx",
                    lineNumber: 48,
                    columnNumber: 157
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatFeed.tsx",
            lineNumber: 48,
            columnNumber: 78
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = sortedThreats;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t1 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$next$2d$js$2d$assignment$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t1,
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/next-js-assignment/src/components/ThreatFeed/ThreatFeed.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t1;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
};
_s(ThreatFeed, "AZRvGA5qNeOgBNoKkTmonibR1jE=");
_c = ThreatFeed;
const __TURBOPACK__default__export__ = ThreatFeed;
function _temp(a, b) {
    if (b.risk_score !== a.risk_score) {
        return b.risk_score - a.risk_score;
    }
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
}
var _c;
__turbopack_context__.k.register(_c, "ThreatFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=next-js-assignment_src_a9720a3b._.js.map