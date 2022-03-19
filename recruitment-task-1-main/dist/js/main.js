(() => {
    var e, r, n, t, o, i, c, a = {
        620: (e, r, n) => {
            "use strict";
            n(51), n(555), n(737), n(518), n(851), n(786), n(889), n(343), n(369), n(577), n(895), n(250), n(790), n(98), n(813), n(724), n(7), n(488), n(589)
        }, 51: (e, r, n) => {
            e.exports = n.p + "img/eye1.png"
        }, 555: (e, r, n) => {
            e.exports = n.p + "img/eye2.png"
        }, 737: (e, r, n) => {
            e.exports = n.p + "img/eye3.png"
        }, 518: (e, r, n) => {
            e.exports = n.p + "img/eye4.png"
        }, 724: (e, r, n) => {
            e.exports = n.p + "img/get_prod1.png"
        }, 7: (e, r, n) => {
            e.exports = n.p + "img/get_prod2.png"
        }, 488: (e, r, n) => {
            e.exports = n.p + "img/get_prod3.png"
        }, 589: (e, r, n) => {
            e.exports = n.p + "img/get_prod4.png"
        }, 813: (e, r, n) => {
            e.exports = n.p + "img/getlook.png"
        }, 851: (e, r, n) => {
            e.exports = n.p + "img/header.png"
        }, 786: (e, r, n) => {
            e.exports = n.p + "img/logo.png"
        }, 889: (e, r, n) => {
            e.exports = n.p + "img/person.png"
        }, 369: (e, r, n) => {
            e.exports = n.p + "img/poster.png"
        }, 577: (e, r, n) => {
            e.exports = n.p + "img/prod1.png"
        }, 895: (e, r, n) => {
            e.exports = n.p + "img/prod2.png"
        }, 250: (e, r, n) => {
            e.exports = n.p + "img/prod3.png"
        }, 343: (e, r, n) => {
            e.exports = n.p + "img/prod_bg.png"
        }, 790: (e, r, n) => {
            e.exports = n.p + "img/quote.png"
        }, 98: (e, r, n) => {
            e.exports = n.p + "img/tips.png"
        }, 783: (e, r, n) => {
            "use strict";
            var t = n(618), o = Object.create(null), i = "undefined" == typeof document, c = Array.prototype.forEach;

            function a() {
            }

            function d(e, r) {
                if (!r) {
                    if (!e.href) return;
                    r = e.href.split("?")[0]
                }
                if (l(r) && !1 !== e.isLoaded && r && r.indexOf(".css") > -1) {
                    e.visited = !0;
                    var n = e.cloneNode();
                    n.isLoaded = !1, n.addEventListener("load", (function () {
                        n.isLoaded || (n.isLoaded = !0, e.parentNode.removeChild(e))
                    })), n.addEventListener("error", (function () {
                        n.isLoaded || (n.isLoaded = !0, e.parentNode.removeChild(e))
                    })), n.href = "".concat(r, "?").concat(Date.now()), e.nextSibling ? e.parentNode.insertBefore(n, e.nextSibling) : e.parentNode.appendChild(n)
                }
            }
            
            function s() {
                var e = document.querySelectorAll("link");
                c.call(e, (function (e) {
                    !0 !== e.visited && d(e)
                }))
            }

            function l(e) {
                return !!/^https?:/i.test(e)
            }

            e.exports = function (e, r) {
                if (i) return console.log("no window.document found, will not HMR CSS"), a;
                var n, p, u = function (e) {
                    var r = o[e];
                    if (!r) {
                        if (document.currentScript) r = document.currentScript.src; else {
                            var n = document.getElementsByTagName("script"), i = n[n.length - 1];
                            i && (r = i.src)
                        }
                        o[e] = r
                    }
                    return function (e) {
                        if (!r) return null;
                        var n = r.split(/([^\\/]+)\.js$/), o = n && n[1];
                        return o && e ? e.split(",").map((function (e) {
                            var n = new RegExp("".concat(o, "\\.js$"), "g");
                            return t(r.replace(n, "".concat(e.replace(/{fileName}/g, o), ".css")))
                        })) : [r.replace(".js", ".css")]
                    }
                }(e);
                return n = function () {
                    var e = u(r.filename), n = function (e) {
                        if (!e) return !1;
                        var r = document.querySelectorAll("link"), n = !1;
                        return c.call(r, (function (r) {
                            if (r.href) {
                                var o = function (e, r) {
                                    var n;
                                    return e = t(e, {stripWWW: !1}), r.some((function (t) {
                                        e.indexOf(r) > -1 && (n = t)
                                    })), n
                                }(r.href, e);
                                l(o) && !0 !== r.visited && o && (d(r, o), n = !0)
                            }
                        })), n
                    }(e);
                    if (r.locals) return console.log("[HMR] Detected local css modules. Reload all css"), void s();
                    n ? console.log("[HMR] css reload %s", e.join(" ")) : (console.log("[HMR] Reload all css"), s())
                }, 50, p = 0, function () {
                    var e = this, r = arguments, t = function () {
                        return n.apply(e, r)
                    };
                    clearTimeout(p), p = setTimeout(t, 50)
                }
            }
        }, 618: e => {
            "use strict";
            e.exports = function (e) {
                if (e = e.trim(), /^data:/i.test(e)) return e;
                var r = -1 !== e.indexOf("//") ? e.split("//")[0] + "//" : "",
                    n = e.replace(new RegExp(r, "i"), "").split("/"), t = n[0].toLowerCase().replace(/\.$/, "");
                return n[0] = "", r + t + n.reduce((function (e, r) {
                    switch (r) {
                        case"..":
                            e.pop();
                            break;
                        case".":
                            break;
                        default:
                            e.push(r)
                    }
                    return e
                }), []).join("/")
            }
        }, 739: (e, r, n) => {
            "use strict";
            var t = n(783)(e.id, {publicPath: "../", locals: !1});
            e.hot.dispose(t), e.hot.accept(void 0, t)
        }
    }, d = {};

    function s(e) {
        var r = d[e];
        if (void 0 !== r) {
            if (void 0 !== r.error) throw r.error;
            return r.exports
        }
        var n = d[e] = {id: e, exports: {}};
        try {
            var t = {id: e, module: n, factory: a[e], require: s};
            s.i.forEach((function (e) {
                e(t)
            })), n = t.module, t.factory.call(n.exports, n, n.exports, t.require)
        } catch (e) {
            throw n.error = e, e
        }
        return n.exports
    }

    s.m = a, s.c = d, s.i = [], s.hu = e => e + "." + s.h() + ".hot-update.js", s.miniCssF = e => "css/main.469fcd45308f0f91ff59.css", s.hmrF = () => "main." + s.h() + ".hot-update.json", s.h = () => "8b6038d50b8c5d2fc0e1", s.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), s.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), e = {}, r = "loreal-signature:", s.l = (n, t, o, i) => {
        if (e[n]) e[n].push(t); else {
            var c, a;
            if (void 0 !== o) for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                var p = d[l];
                if (p.getAttribute("src") == n || p.getAttribute("data-webpack") == r + o) {
                    c = p;
                    break
                }
            }
            c || (a = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.setAttribute("data-webpack", r + o), c.src = n), e[n] = [t];
            var u = (r, t) => {
                c.onerror = c.onload = null, clearTimeout(f);
                var o = e[n];
                if (delete e[n], c.parentNode && c.parentNode.removeChild(c), o && o.forEach((e => e(t))), r) return r(t)
            }, f = setTimeout(u.bind(null, void 0, {type: "timeout", target: c}), 12e4);
            c.onerror = u.bind(null, c.onerror), c.onload = u.bind(null, c.onload), a && document.head.appendChild(c)
        }
    }, (() => {
        var e, r, n, t, o = {}, i = s.c, c = [], a = [], d = "idle";

        function l(e) {
            d = e;
            for (var r = [], n = 0; n < a.length; n++) r[n] = a[n].call(null, e);
            return Promise.all(r)
        }

        function p(e) {
            if (0 === r.length) return e();
            var n = r;
            return r = [], Promise.all(n).then((function () {
                return p(e)
            }))
        }

        function u(e) {
            if ("idle" !== d) throw new Error("check() is only allowed in idle status");
            return l("check").then(s.hmrM).then((function (t) {
                return t ? l("prepare").then((function () {
                    var o = [];
                    return r = [], n = [], Promise.all(Object.keys(s.hmrC).reduce((function (e, r) {
                        return s.hmrC[r](t.c, t.r, t.m, e, n, o), e
                    }), [])).then((function () {
                        return p((function () {
                            return e ? h(e) : l("ready").then((function () {
                                return o
                            }))
                        }))
                    }))
                })) : l(m() ? "ready" : "idle").then((function () {
                    return null
                }))
            }))
        }

        function f(e) {
            return "ready" !== d ? Promise.resolve().then((function () {
                throw new Error("apply() is only allowed in ready status")
            })) : h(e)
        }

        function h(e) {
            e = e || {}, m();
            var r = n.map((function (r) {
                return r(e)
            }));
            n = void 0;
            var o = r.map((function (e) {
                return e.error
            })).filter(Boolean);
            if (o.length > 0) return l("abort").then((function () {
                throw o[0]
            }));
            var i = l("dispose");
            r.forEach((function (e) {
                e.dispose && e.dispose()
            }));
            var c, a = l("apply"), d = function (e) {
                c || (c = e)
            }, s = [];
            return r.forEach((function (e) {
                if (e.apply) {
                    var r = e.apply(d);
                    if (r) for (var n = 0; n < r.length; n++) s.push(r[n])
                }
            })), Promise.all([i, a]).then((function () {
                return c ? l("fail").then((function () {
                    throw c
                })) : t ? h(e).then((function (e) {
                    return s.forEach((function (r) {
                        e.indexOf(r) < 0 && e.push(r)
                    })), e
                })) : l("idle").then((function () {
                    return s
                }))
            }))
        }

        function m() {
            if (t) return n || (n = []), Object.keys(s.hmrI).forEach((function (e) {
                t.forEach((function (r) {
                    s.hmrI[e](r, n)
                }))
            })), t = void 0, !0
        }

        s.hmrD = o, s.i.push((function (h) {
            var m, g, v, y, b = h.module, E = function (n, t) {
                var o = i[t];
                if (!o) return n;
                var a = function (r) {
                    if (o.hot.active) {
                        if (i[r]) {
                            var a = i[r].parents;
                            -1 === a.indexOf(t) && a.push(t)
                        } else c = [t], e = r;
                        -1 === o.children.indexOf(r) && o.children.push(r)
                    } else console.warn("[HMR] unexpected require(" + r + ") from disposed module " + t), c = [];
                    return n(r)
                }, s = function (e) {
                    return {
                        configurable: !0, enumerable: !0, get: function () {
                            return n[e]
                        }, set: function (r) {
                            n[e] = r
                        }
                    }
                };
                for (var u in n) Object.prototype.hasOwnProperty.call(n, u) && "e" !== u && Object.defineProperty(a, u, s(u));
                return a.e = function (e) {
                    return function (e) {
                        switch (d) {
                            case"ready":
                                return l("prepare"), r.push(e), p((function () {
                                    return l("ready")
                                })), e;
                            case"prepare":
                                return r.push(e), e;
                            default:
                                return e
                        }
                    }(n.e(e))
                }, a
            }(h.require, h.id);
            b.hot = (m = h.id, g = b, y = {
                _acceptedDependencies: {},
                _acceptedErrorHandlers: {},
                _declinedDependencies: {},
                _selfAccepted: !1,
                _selfDeclined: !1,
                _selfInvalidated: !1,
                _disposeHandlers: [],
                _main: v = e !== m,
                _requireSelf: function () {
                    c = g.parents.slice(), e = v ? void 0 : m, s(m)
                },
                active: !0,
                accept: function (e, r, n) {
                    if (void 0 === e) y._selfAccepted = !0; else if ("function" == typeof e) y._selfAccepted = e; else if ("object" == typeof e && null !== e) for (var t = 0; t < e.length; t++) y._acceptedDependencies[e[t]] = r || function () {
                    }, y._acceptedErrorHandlers[e[t]] = n; else y._acceptedDependencies[e] = r || function () {
                    }, y._acceptedErrorHandlers[e] = n
                },
                decline: function (e) {
                    if (void 0 === e) y._selfDeclined = !0; else if ("object" == typeof e && null !== e) for (var r = 0; r < e.length; r++) y._declinedDependencies[e[r]] = !0; else y._declinedDependencies[e] = !0
                },
                dispose: function (e) {
                    y._disposeHandlers.push(e)
                },
                addDisposeHandler: function (e) {
                    y._disposeHandlers.push(e)
                },
                removeDisposeHandler: function (e) {
                    var r = y._disposeHandlers.indexOf(e);
                    r >= 0 && y._disposeHandlers.splice(r, 1)
                },
                invalidate: function () {
                    switch (this._selfInvalidated = !0, d) {
                        case"idle":
                            n = [], Object.keys(s.hmrI).forEach((function (e) {
                                s.hmrI[e](m, n)
                            })), l("ready");
                            break;
                        case"ready":
                            Object.keys(s.hmrI).forEach((function (e) {
                                s.hmrI[e](m, n)
                            }));
                            break;
                        case"prepare":
                        case"check":
                        case"dispose":
                        case"apply":
                            (t = t || []).push(m)
                    }
                },
                check: u,
                apply: f,
                status: function (e) {
                    if (!e) return d;
                    a.push(e)
                },
                addStatusHandler: function (e) {
                    a.push(e)
                },
                removeStatusHandler: function (e) {
                    var r = a.indexOf(e);
                    r >= 0 && a.splice(r, 1)
                },
                data: o[m]
            }, e = void 0, y), b.parents = c, b.children = [], c = [], h.require = E
        })), s.hmrC = {}, s.hmrI = {}
    })(), (() => {
        var e;
        s.g.importScripts && (e = s.g.location + "");
        var r = s.g.document;
        if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
            var n = r.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), s.p = e + "../"
    })(), n = (e, r, n, t) => {
        var o = document.createElement("link");
        return o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = i => {
            if (o.onerror = o.onload = null, "load" === i.type) n(); else {
                var c = i && ("load" === i.type ? "missing" : i.type), a = i && i.target && i.target.href || r,
                    d = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                d.code = "CSS_CHUNK_LOAD_FAILED", d.type = c, d.request = a, o.parentNode.removeChild(o), t(d)
            }
        }, o.href = r, document.head.appendChild(o), o
    }, t = (e, r) => {
        for (var n = document.getElementsByTagName("link"), t = 0; t < n.length; t++) {
            var o = (c = n[t]).getAttribute("data-href") || c.getAttribute("href");
            if ("stylesheet" === c.rel && (o === e || o === r)) return c
        }
        var i = document.getElementsByTagName("style");
        for (t = 0; t < i.length; t++) {
            var c;
            if ((o = (c = i[t]).getAttribute("data-href")) === e || o === r) return c
        }
    }, o = [], i = [], c = e => ({
        dispose: () => {
            for (var e = 0; e < o.length; e++) {
                var r = o[e];
                r.parentNode && r.parentNode.removeChild(r)
            }
            o.length = 0
        }, apply: () => {
            for (var e = 0; e < i.length; e++) i[e].rel = "stylesheet";
            i.length = 0
        }
    }), s.hmrC.miniCss = (e, r, a, d, l, p) => {
        l.push(c), e.forEach((e => {
            var r = s.miniCssF(e), c = s.p + r, a = t(r, c);
            a && d.push(new Promise(((r, t) => {
                var d = n(e, c, (() => {
                    d.as = "style", d.rel = "preload", r()
                }), t);
                o.push(a), i.push(d)
            })))
        }))
    }, (() => {
        var e, r, n, t, o = s.hmrS_jsonp = s.hmrS_jsonp || {179: 0}, i = {};

        function c(e) {
            return new Promise(((r, n) => {
                i[e] = r;
                var t = s.p + s.hu(e), o = new Error;
                s.l(t, (r => {
                    if (i[e]) {
                        i[e] = void 0;
                        var t = r && ("load" === r.type ? "missing" : r.type), c = r && r.target && r.target.src;
                        o.message = "Loading hot update chunk " + e + " failed.\n(" + t + ": " + c + ")", o.name = "ChunkLoadError", o.type = t, o.request = c, n(o)
                    }
                }))
            }))
        }

        function a(i) {
            function c(e) {
                for (var r = [e], n = {}, t = r.map((function (e) {
                    return {chain: [e], id: e}
                })); t.length > 0;) {
                    var o = t.pop(), i = o.id, c = o.chain, d = s.c[i];
                    if (d && (!d.hot._selfAccepted || d.hot._selfInvalidated)) {
                        if (d.hot._selfDeclined) return {type: "self-declined", chain: c, moduleId: i};
                        if (d.hot._main) return {type: "unaccepted", chain: c, moduleId: i};
                        for (var l = 0; l < d.parents.length; l++) {
                            var p = d.parents[l], u = s.c[p];
                            if (u) {
                                if (u.hot._declinedDependencies[i]) return {
                                    type: "declined",
                                    chain: c.concat([p]),
                                    moduleId: i,
                                    parentId: p
                                };
                                -1 === r.indexOf(p) && (u.hot._acceptedDependencies[i] ? (n[p] || (n[p] = []), a(n[p], [i])) : (delete n[p], r.push(p), t.push({
                                    chain: c.concat([p]),
                                    id: p
                                })))
                            }
                        }
                    }
                }
                return {type: "accepted", moduleId: e, outdatedModules: r, outdatedDependencies: n}
            }

            function a(e, r) {
                for (var n = 0; n < r.length; n++) {
                    var t = r[n];
                    -1 === e.indexOf(t) && e.push(t)
                }
            }

            s.f && delete s.f.jsonpHmr, e = void 0;
            var d = {}, l = [], p = {}, u = function (e) {
                console.warn("[HMR] unexpected require(" + e.id + ") to disposed module")
            };
            for (var f in r) if (s.o(r, f)) {
                var h, m = r[f], g = !1, v = !1, y = !1, b = "";
                switch ((h = m ? c(f) : {
                    type: "disposed",
                    moduleId: f
                }).chain && (b = "\nUpdate propagation: " + h.chain.join(" -> ")), h.type) {
                    case"self-declined":
                        i.onDeclined && i.onDeclined(h), i.ignoreDeclined || (g = new Error("Aborted because of self decline: " + h.moduleId + b));
                        break;
                    case"declined":
                        i.onDeclined && i.onDeclined(h), i.ignoreDeclined || (g = new Error("Aborted because of declined dependency: " + h.moduleId + " in " + h.parentId + b));
                        break;
                    case"unaccepted":
                        i.onUnaccepted && i.onUnaccepted(h), i.ignoreUnaccepted || (g = new Error("Aborted because " + f + " is not accepted" + b));
                        break;
                    case"accepted":
                        i.onAccepted && i.onAccepted(h), v = !0;
                        break;
                    case"disposed":
                        i.onDisposed && i.onDisposed(h), y = !0;
                        break;
                    default:
                        throw new Error("Unexception type " + h.type)
                }
                if (g) return {error: g};
                if (v) for (f in p[f] = m, a(l, h.outdatedModules), h.outdatedDependencies) s.o(h.outdatedDependencies, f) && (d[f] || (d[f] = []), a(d[f], h.outdatedDependencies[f]));
                y && (a(l, [h.moduleId]), p[f] = u)
            }
            r = void 0;
            for (var E, w = [], x = 0; x < l.length; x++) {
                var _ = l[x], I = s.c[_];
                I && (I.hot._selfAccepted || I.hot._main) && p[_] !== u && !I.hot._selfInvalidated && w.push({
                    module: _,
                    require: I.hot._requireSelf,
                    errorHandler: I.hot._selfAccepted
                })
            }
            return {
                dispose: function () {
                    var e;
                    n.forEach((function (e) {
                        delete o[e]
                    })), n = void 0;
                    for (var r, t = l.slice(); t.length > 0;) {
                        var i = t.pop(), c = s.c[i];
                        if (c) {
                            var a = {}, p = c.hot._disposeHandlers;
                            for (x = 0; x < p.length; x++) p[x].call(null, a);
                            for (s.hmrD[i] = a, c.hot.active = !1, delete s.c[i], delete d[i], x = 0; x < c.children.length; x++) {
                                var u = s.c[c.children[x]];
                                u && (e = u.parents.indexOf(i)) >= 0 && u.parents.splice(e, 1)
                            }
                        }
                    }
                    for (var f in d) if (s.o(d, f) && (c = s.c[f])) for (E = d[f], x = 0; x < E.length; x++) r = E[x], (e = c.children.indexOf(r)) >= 0 && c.children.splice(e, 1)
                }, apply: function (e) {
                    for (var r in p) s.o(p, r) && (s.m[r] = p[r]);
                    for (var n = 0; n < t.length; n++) t[n](s);
                    for (var o in d) if (s.o(d, o)) {
                        var c = s.c[o];
                        if (c) {
                            E = d[o];
                            for (var a = [], u = [], f = [], h = 0; h < E.length; h++) {
                                var m = E[h], g = c.hot._acceptedDependencies[m], v = c.hot._acceptedErrorHandlers[m];
                                if (g) {
                                    if (-1 !== a.indexOf(g)) continue;
                                    a.push(g), u.push(v), f.push(m)
                                }
                            }
                            for (var y = 0; y < a.length; y++) try {
                                a[y].call(null, E)
                            } catch (r) {
                                if ("function" == typeof u[y]) try {
                                    u[y](r, {moduleId: o, dependencyId: f[y]})
                                } catch (n) {
                                    i.onErrored && i.onErrored({
                                        type: "accept-error-handler-errored",
                                        moduleId: o,
                                        dependencyId: f[y],
                                        error: n,
                                        originalError: r
                                    }), i.ignoreErrored || (e(n), e(r))
                                } else i.onErrored && i.onErrored({
                                    type: "accept-errored",
                                    moduleId: o,
                                    dependencyId: f[y],
                                    error: r
                                }), i.ignoreErrored || e(r)
                            }
                        }
                    }
                    for (var b = 0; b < w.length; b++) {
                        var x = w[b], _ = x.module;
                        try {
                            x.require(_)
                        } catch (r) {
                            if ("function" == typeof x.errorHandler) try {
                                x.errorHandler(r, {moduleId: _, module: s.c[_]})
                            } catch (n) {
                                i.onErrored && i.onErrored({
                                    type: "self-accept-error-handler-errored",
                                    moduleId: _,
                                    error: n,
                                    originalError: r
                                }), i.ignoreErrored || (e(n), e(r))
                            } else i.onErrored && i.onErrored({
                                type: "self-accept-errored",
                                moduleId: _,
                                error: r
                            }), i.ignoreErrored || e(r)
                        }
                    }
                    return l
                }
            }
        }

        self.webpackHotUpdateloreal_signature = (e, n, o) => {
            for (var c in n) s.o(n, c) && (r[c] = n[c]);
            o && t.push(o), i[e] && (i[e](), i[e] = void 0)
        }, s.hmrI.jsonp = function (e, o) {
            r || (r = {}, t = [], n = [], o.push(a)), s.o(r, e) || (r[e] = s.m[e])
        }, s.hmrC.jsonp = function (i, d, l, p, u, f) {
            u.push(a), e = {}, n = d, r = l.reduce((function (e, r) {
                return e[r] = !1, e
            }), {}), t = [], i.forEach((function (r) {
                s.o(o, r) && void 0 !== o[r] && (p.push(c(r)), e[r] = !0)
            })), s.f && (s.f.jsonpHmr = function (r, n) {
                e && !s.o(e, r) && s.o(o, r) && void 0 !== o[r] && (n.push(c(r)), e[r] = !0)
            })
        }, s.hmrM = () => {
            if ("undefined" == typeof fetch) throw new Error("No browser support: need fetch API");
            return fetch(s.p + s.hmrF()).then((e => {
                if (404 !== e.status) {
                    if (!e.ok) throw new Error("Failed to fetch update manifest " + e.statusText);
                    return e.json()
                }
            }))
        }
    })(), s(620), s(739)
})();
