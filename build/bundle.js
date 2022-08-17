
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
    'use strict';

    /* eslint-disable */
    /*
    dester builds:
    __src__/shared/index.ts
    __src__/utils/is.ts
    __src__/utils/other.ts
    __src__/utils/thens.ts
    __src__/utils/subscribe.ts
    __src__/attrs.ts
    __src__/listen.ts
    __src__/resize.ts
    __src__/ReaseStorage.ts
    __src__/main.ts
    __src__/global.ts
    __src__/window.ts
    index.ts
    */
    var e = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }, t = "undefined" != typeof window, r = {}, n = e => e && e._ && e._.ir === r, s = Array.isArray, o = e => "function" == typeof e, a = e => null != e && o(e.then), i = e => null != e && o(e.subscribe), f = Object, d = f.defineProperty, c = f.getPrototypeOf, v = f.getOwnPropertyDescriptor, p = () => {}, g = () => p, _ = e => e, E = (e, t, r) => {
        e.then((e => {
            b(e, t, r);
        }));
    }, b = (e, t, r) => {
        a(e) ? e.then((e => {
            b(e, t, r);
        })) : t(e, r);
    }, m = (e, t, r) => {
        if (e.length) for (var n = [], s = [ e.length ], o = s[0]; o-- > 0; ) b(e[o], T, [ n, o, s, t, r ]); else t([], r);
    }, T = (e, t) => {
        t[0][t[1]] = e, --t[2][0] || t[3](t[0], t[4]);
    }, L = (e, t, r) => {
        var n = () => {
            t = p;
        }, s = [], o = e.subscribe((e => {
            if (s.push(e), 1 === s.length) {
                for (var o = 0; o < s.length; o++) t(s[o], r, n);
                s = [];
            }
        }));
        return n = () => {
            t = p, o && (o.unsubscribe ? o.unsubscribe() : o()), o = null;
        }, t === p && n(), n;
    }, y = (e, t, r) => {
        var n = p, s = p, o = () => {
            t = p, n(), s();
        };
        return s = L(e, ((e, a, i) => {
            s = i, n(), n = w(e, ((e, s, a) => {
                n = a, t(e, r, o);
            }));
        })), o;
    }, w = (e, t, r) => {
        if (a(e)) e = R(e); else if (!i(e)) return t(e, r, p), p;
        return y(e, t, r);
    }, R = e => ({
        subscribe: (t, r) => {
            var n = () => {
                t = p;
            };
            return E(e, (e => {
                t(e, r, n);
            })), n;
        }
    }), M = (e, t) => ({
        subscribe: (r, n) => {
            var s = p, o = p, a = () => {
                r = p, s(), o();
            };
            return o = L(O(e), ((e, i, l) => {
                o = l, s(), s = w(t(e), ((e, t, o) => {
                    s = o, r(e, n, a);
                }));
            })), a;
        }
    }), O = e => ({
        subscribe: (t, r) => {
            e = e.slice();
            for (var n = [], s = {}, o = [ 0 ], a = () => {
                for (var e in s) s[e]();
            }, i = e.length, l = 0; l < i; l++) s[l] = w(e[l], k, [ l, i, n, s, o, [ !1 ], t, r, a ]);
            return a;
        }
    }), k = (e, [t, r, n, s, o, a, i, l, h], u) => {
        n[t] = e, s[t] = u, (o[0] === r || a[0] !== (a[0] = !0) && ++o[0] === r) && i(n.slice(0), l, h);
    }, S = /^style--/, A = /^class--/, C = e => e, $ = e => {
        switch (typeof e) {
          case "string":
            return e;

          case "object":
            var t = "", r = "";
            if (s(e)) for (var n, o = e.length; o-- > 0; ) (n = $(e[o])) && (t += r + n, r = " "); else if (e) for (var a in e) e[a] && (t += r + a, 
            r = " ");
            return t;

          default:
            return "";
        }
    }, H = {}, I = e => H[e] || (H[e] = e.replace(/([A-Z])/g, "-$1").toLowerCase()), U = e => {
        switch (typeof e) {
          case "string":
            return e;

          case "object":
            var t = "";
            if (s(e)) for (var r, n = 0; n < e.length; n++) (r = U(e[n])) && (t += r + (";" === r[r.length - 1] ? "" : ";")); else if (e) for (var o in e) null != e[o] && (t += I(o) + ":" + e[o] + ";");
            return t;

          default:
            return "";
        }
    }, F = (e, t, r) => {
        r ? e.classList.add(t) : e.classList.remove(t);
    }, G = [ (e, t, r, n) => {
        if (r ? e.setAttribute(t, r) : e.removeAttribute(t), n._.ac) for (var s in n._.ac) F(e, s, n._.ac[s]);
        (e => {
            e.home._is.css && !e.home._is.css[2] && e.node && e.node.classList.add(e.home._is.css[1]);
        })(n);
    }, $ ], W = [ (e, t, r, n) => {
        if (r ? e.setAttribute(t, r) : e.removeAttribute(t), n._.as) for (var s in n._.as) e.style[s] = n._.as[s];
    }, U ], P = [ (e, t, r, n) => {
        F(e, t = t.slice(7), n._.ac[t] = r);
    }, C ], x = [ (e, t, r, n) => {
        e.style[t = t.slice(7)] = n._.as[t] = r;
    }, C ], j = [ (e, t, r) => {
        "_" === t[0] || D(e.localName, t, e).set ? e[t] = r : null == r || "" === r ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
    }, C ], z = (e, t) => "class" === e ? G : "style" === e ? W : A.test(e) ? (t.ac || (t.ac = {}), 
    P) : S.test(e) ? (t.as || (t.as = {}), x) : j, X = {}, D = (e, t, r) => (X[e] || (X[e] = {}))[t] || (X[e][t] = v(c(r), t) || {}), q = (() => {
        if (!t) return g;
        var e = e => {
            e.preventDefault();
        }, r = e => {
            e.stopPropagation();
        }, n = (e, t) => function(r) {
            for (var n = 0; n < e.length; n++) e[n].call(this, r, t);
        }, o = e => function(t) {
            t.target === this && e.call(this, t);
        }, a = e => function(t) {
            t.isTrusted && e.call(this, t);
        }, i = (e, t, r) => function(n) {
            ((e, t) => {
                var r = t;
                for (var n in h) {
                    if (!(h[n][0] in e) && !(h[n][1] in e)) break;
                    r--;
                }
                return !r;
            })(t, r) && e.call(this, n);
        }, l = [], h = {}, u = () => {
            u = p, document.addEventListener("keyup", (e => {
                delete h[e.code + e.key];
            }), !1), document.addEventListener("keydown", (e => {
                h[e.code + e.key] = [ e.code, e.key ];
                for (var t = 0; t < l.length; t++) l[t][0].length ? l[t][1].call(document.body, e) : l.splice(t--, 1);
            }), !1);
        };
        return (t, h, f, d) => {
            for (var c, v, p = s(f) ? f.slice() : [ f ], g = n(p, d), _ = {}, E = 0, b = () => {
                p.length = 0, c && t.removeEventListener(c, g, y);
            }, m = !1, N = !1, T = h.split(/[^a-z\d]+/i), L = T.length; L--; ) if (v = T[L]) switch (v) {
              case "once":
                p.push(b);
                break;

              case "passive":
                m = !0;
                break;

              case "capture":
                N = !0;
                break;

              case "self":
                g = o(g);
                break;

              case "trusted":
                g = a(g);
                break;

              case "stop":
                p.unshift(r);
                break;

              case "prevent":
                p.unshift(e);
                break;

              default:
                1 === v.length || /[A-Z]/.test(v[0]) ? v in _ || (_[v] = !0, E++) : L || (c = v);
            }
            var y = {
                passive: m,
                capture: N
            };
            return E && (u(), g = i(g, _, E)), c ? t.addEventListener(c = T[0], g, y) : l.push([ p, g ]), 
            b;
        };
    })(), B = (e, t) => r => q(r.node, e, t, r), J = (e, t, r) => {
        e._value = t;
        var n = e._;
        n.break = !0;
        var s, a, i, l = n.items, h = n.queue;
        if (h.push({
            f: r,
            n: t
        }), 1 === h.length) {
            for (var u, f = 0; f < h.length; f++) if ((u = h[f].f) || f > h.length - 2) {
                n.break = !1;
                for (var d = h[f], c = 0; c < l.length; c++) if ((u || (s = l[c].o, a = d.n, i = void 0, 
                !((e, t) => e == e ? e === t : t != t)(s, a) || null != (i = a) && "object" == typeof i || o(a))) && l[c].s(e._value = l[c].o = d.n), 
                !u && n.break) {
                    l[c].o = e._value;
                    break;
                }
            }
            n.queue = [];
        }
        return e;
    };

    class ReaseStorage {
        constructor(e, t, r, n) {
            this._ = {
                items: [],
                queue: [],
                mwSet: r || (r = _),
                mwGet: n || _,
                onRun: t || p,
                onEnd: p,
                break: !1
            }, this._value = r(e, this);
        }
        get on() {
            return this._.items.length > 0;
        }
        get value() {
            return this._value;
        }
        get() {
            return this._.mwGet(this._value, this);
        }
        set(e) {
            return J(this, this._.mwSet(e, this), !1);
        }
        next(e) {
            return J(this, this._.mwSet(e, this), !0);
        }
        clear() {
            for (var e = this._.items, t = e.length; t-- > 0; ) e[t].u();
            return this;
        }
        subscribe(e, t) {
            var r = {
                s: n => {
                    e(n, t, r.u);
                },
                u: () => {
                    if (r.s !== p) {
                        for (var e = s.length; e-- > 0; ) if (s[e].s === r.s) {
                            s.splice(e, 1);
                            break;
                        }
                        r.s = r.u = p, s.length || n.onEnd(this);
                    }
                },
                o: {}
            }, n = this._, s = n.items;
            return s.length || (n.onEnd = n.onRun(this) || p), s.push(r), n.queue.length || r.s(r.o = this._value), 
            r.u;
        }
    }

    var K = ReaseStorage.prototype;

    d(K, "$", {
        get: K.get,
        set: K.set
    });

    for (var Q = function(e, t) {
        d(K, e[t], {
            value: function() {
                var r = this.get();
                return r = null != r && r[e[t]] ? r[e[t]](arguments) : r, t ? r + "" : r;
            }
        });
    }, V = [ "valueOf", "toString", "toJSON" ], ee = 3; ee-- > 0; ) Q(V, ee);

    var te, re, ne, oe = M, ae = {
        ROOT: "ROOT",
        COMPONENT: "COMPONENT",
        ELEMENT: "ELEMENT",
        ELEMENT_DYNAMIC: "ELEMENT_DYNAMIC",
        FRAGMENT: "FRAGMENT",
        SLOT: "SLOT",
        TEXT: "TEXT",
        EXPRESSION: "EXPRESSION",
        COMMENT: "COMMENT",
        HTML: "HTML",
        RULES: {
            TAG: "RULE_TAG",
            IF: "RULE_IF",
            ELIF: "RULE_ELIF",
            ELSE: "RULE_ELSE",
            WATCH: "RULE_WATCH",
            AWAIT: "RULE_AWAIT",
            THEN: "RULE_THEN",
            FOR: "RULE_FOR"
        }
    }, ie = e => {
        ne = e, te = e.high, re = e.home;
    }, le = e => {
        ne = e.parent;
    }, he = () => {
        ne = null;
    };

    function fe(e) {
        var t = n(this) ? this : ne;
        if (!n(t)) throw e;
        t.on ? (t._.od || (t._.od = [])).push(e) : e(t);
    }

    var de, ve = () => ne, pe = e => {
        if (e._.esu) for (var t, r = e._.esu; r.length; ) (t = r.pop()) && o(t = t.destroy || t) && (ie(e), 
        t(e));
    }, ge = {
        3: [],
        8: []
    }, _e = /^(?:input|style|script)$/i, Ee = (e, t) => {
        var r = e.nodeType;
        if (3 === r || 8 === r) ge[r].length < t && ge[r].push(e); else if (1 === r && !_e.test(e.localName) && ((r = e.localName + e.namespaceURI) in ge || (ge[r] = []), 
        ge[r].length < t)) {
            for (var n = e.childNodes, s = n.length; s-- > 0; ) e.removeChild(n[s]);
            e.value && (e.value = null), e.type && (e.type = null), ge[r].push(e);
        }
    }, be = e => {
        if (e._.od) for (;e._.od.length; ) e._.od.pop()(e);
    }, me = e => {
        if (e && e.on) {
            e.on = !1, pe(e), be(e), we(e), e._.ods && e._.ods();
            var t = e.node;
            t && t.parentNode && t.parentNode.removeChild(t), Ne(e), t && Ee(t, 25), e._.$ && (e._.$ = 1, 
            Ce(e));
        }
    }, Ne = e => {
        for (;e.children.length; ) me(e.children.pop());
    }, Te = (e, t) => {
        e._.ods = t, e.on || e._.ods();
    }, Le = e => t => {
        if (t.root.node) for (var r, n, s = t; ;) if (r = (s = s.parent).node) {
            1 === r.nodeType ? (e(t, r), r.appendChild(t.node)) : (e(t, r = (n = r).parentNode), 
            r.insertBefore(t.node, n));
            break;
        }
    }, ye = e => {
        var t, r, n, s = e.attrs;
        for (var o in e.props) if (r = s[o] = {
            is: null,
            _is: t = e.props[o],
            high: e.high,
            _: {
                $: 0,
                u: p
            }
        }, i(t) || a(t) && (t = R(t), 1)) {
            if (Ae(r), r._.u = y(t, ((e, [t, r, n, s], o) => {
                r._.u = o, t.on ? r.is !== (r.is = e = s[1](e)) && t.node && s[0](t.node, n, e, t) : o(), 
                Ce(r);
            }), [ e, r, o, z(o, e._) ]), !e.on) {
                r._.u();
                break;
            }
        } else n = z(o, e._), r.is = t = n[1](t), e.node && n[0](e.node, o, t, e);
    }, we = e => {
        var t = e.attrs;
        if (t) {
            e.attrs = null;
            var r = e.node;
            for (var n in t) r && (r.hasAttribute(n) ? r.removeAttribute(n) : n in r && (r[n] = null)), 
            t[n]._.u(), Ce(t[n]);
        }
    }, Re = (de = Le(((t, r) => {
        var n = e[t.is] || r.namespaceURI, s = t.is + n, o = s in ge && ge[s].pop();
        if (o) for (var a = o.attributes, i = a.length; i-- > 0; ) o.removeAttribute(a[i].name); else o = document.createElementNS(n, t.is);
        t.node = o, (e => {
            if (e.use) for (var t = e._.esu || (e._.esu = []), r = 0; r < e.use.length; r++) if (ie(e), 
            t.push(e.use[r](e)), !e.on) {
                pe(e);
                break;
            }
        })(t), ye(t), ie(t);
    })), e => {
        e.attrs = {}, de(e), e.node || ye(e);
    }), Me = Le((e => {
        ge[3].length ? (e.node = ge[3].pop()).data = "" : e.node = document.createTextNode("");
    })), Oe = Le((e => {
        ge[3].length ? (e.node = ge[3].pop()).data = e.is : e.node = document.createTextNode(e.is);
    })), Se = (e, t, n, s, o, a) => ne = ne.children[ne.children.push({
        type: e,
        name: a,
        is: n,
        _is: t,
        node: null,
        props: s,
        use: o,
        root: ne.root,
        home: re,
        high: te,
        parent: ne,
        children: [],
        slots: null,
        attrs: null,
        on: ne.on,
        pub: {},
        _: {
            ir: r,
            $: 0
        }
    }) - 1], Ae = e => {
        e.high._.$++, e._.$++;
    }, Ce = e => {
        if (e && e._.$ > 0) if (e._.$--, e.type !== ae.COMPONENT && e.type !== ae.ROOT) Ce(e.high); else if (0 === e._.$) {
            e._.$ = NaN;
            var t = e._.oc;
            if (t) {
                for (var r = [], n = 0; n < t.length && (ie(e), r.push(t[n](e)), e.on); n++) ;
                he(), m(r, ((e, t) => {
                    if (t.on) {
                        for (var r = e.length; r--; ) o(e[r]) && fe(e[r]);
                        Ce(t.high);
                    } else for (var n = e.length; n--; ) o(e[n]) && (ie(t), e[n](t));
                    he();
                }), e);
            } else Ce(e.high);
        }
    }, $e = e => {
        if (ne.on && void 0 !== e && "" !== e) {
            var t = Se(ae.EXPRESSION, e, "");
            Oe(t), Ae(t), Te(t, w(e, ((e, t, r) => {
                t.on ? (Ne(t), o(e) && (ie(t), e = e.call(t), he()), e = void 0 === e ? "" : "" + e, 
                t.is !== (t.is = e) && t.node && (t.node.data = e)) : r(), Ce(t);
            }), t)), le(t);
        }
    }, He = e => {
        ne.on && void 0 !== e && "" !== e && (Oe(Se(ae.TEXT, e, "" + e)), le(ne));
    }, Xe = (e, t) => {
        t && !(t[1] in e.css) && (o(t[0]) && (t[0] = t[0]()), e.css[t[1]] = "", e._.$++, 
        e._.od.push(w(t[0], ((e, [t, r, n, s, o], a) => {
            if (t.on) {
                if (s[0] !== (s[0] = e) && (n || (e = e.replace(/(\.[^\s>+,~{}();'"`]+)(?=[^{}();'"`]*{)/g, "$1." + r)), 
                t.css[r] = e, t.node)) {
                    var i = o[0] || (o[0] = document.getElementById(r) || (e => {
                        var t = document.createElement("style");
                        return t.id = e, document.head.appendChild(t), t;
                    })(r));
                    i.textContent = e;
                }
            } else a();
            Ce(t);
        }), [ e, t[1], t[2], [ "" ], [ null ] ])));
    }, De = e => {
        var t = ne;
        t.slots = e, Ae(t), te = re = t, t.is.call(t, t.props), Ce(t), te = t.high, re = t.home, 
        le(t);
    }, qe = (e, t, r) => ne.on ? (Se(ae.COMPONENT, e, e, t || {}, r, e.name), Xe(ne.root, e.css), 
    De) : p, Be = () => {
        var e = ne;
        (e => {
            if (e._.esu) for (var t, r = e._.esu, n = 0; n < r.length; n++) if ((t = r[n]) && o(t = t.created) && (ie(e), 
            t(e), !e.on)) {
                pe(e);
                break;
            }
        })(e), le(e);
    }, Ye = (e, t, r) => ne.on ? (Re(Se(ae.ELEMENT, e, e, t || {}, r)), Be) : p, Ve = (e, t) => t > 0 ? !e : e, et = e => {
        var t = ne;
        Ae(t), Te(t, L(O(t.parent._.if), ((e, [t, r, n], s) => {
            t.on ? t.is !== (t.is = e.every(Ve)) && (t.is ? (ie(t), r.call(t, e[n]), he()) : (be(t), 
            Ne(t))) : s(), Ce(t);
        }), [ t, e, t.parent._.if.length - 1 ])), le(t);
    }, tt = (e, t, r) => ne.on ? (Me(Se(ae.RULES.IF, e, !1, t, r)), ne.parent._.if = [ e ], 
    et) : p, rt = (e, t, r) => ne.on ? (Me(Se(ae.RULES.ELIF, e, !1, t, r)), ne.parent._.if = [ e, ...ne.parent._.if || [ !0 ] ], 
    et) : p, nt = (e, t) => ne.on ? (Me(Se(ae.RULES.ELSE, null, !1, e, t)), ne.parent._.if = [ !0, ...ne.parent._.if || [ !0 ] ], 
    et) : p, vt = e => {
        if (e.parentNode && e.parentNode.removeChild(e), e.childNodes) for (var t = e.childNodes, r = t.length; r-- > 0; ) vt(t[r]);
        Ee(e, 999);
    }, pt = (e, [t, r, n, s, o]) => {
        var a = ne, i = te, l = re;
        if (o && t.node) for (var h, u = t.node.childNodes, f = u.length; f-- > 0; ) "script" !== (h = u[f]).localName && "style" !== h.localName && vt(h);
        te = re = ne = t, t._.$++, qe(r, n, s)((fe((e => {
            e.root.node = null, me(e.root);
        })), [])), Ce(t), ne = a, te = i, re = l;
    }, gt = (e, {hydrate: t = !0, target: r = null, pub: n = {}, props: s = {}, use: o, beforeCreated: a = null, onCreated: i = null} = {}) => {
        var l = ne;
        ne = {
            on: !0,
            _: {},
            children: []
        };
        var h = Se(ae.ROOT, null, null, {}, void 0);
        h.css = {}, h.high = h.home = h.parent = null, h.pub = n, h.node = r, h.root = h, 
        i && (h._.oc = [ i ]), fe((e => {
            e.node = null;
        })), ne = l;
        var u = [ h, e, s, o, t ];
        a ? b(a(h), pt, u) : pt(0, u);
    }, _t = (e, t) => {
        if (n(e) || n(e = ve())) return e;
        throw "not external " + t.name;
    }, Et = (e, t, r, n) => new ReaseStorage(e, t, r, n), bt = function e(t, r, n, s) {
        var o = _t(this, e), a = Et(t, r, n, s);
        return fe.call(o, (() => {
            a.clear();
        })), a;
    }, wt = t ? window : {
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
    }, Rt = 0, Mt = () => {
        Ht.$ = It.$ = Ut.$ = Ft.$ = -1;
    }, Ot = () => {
        setTimeout(Mt);
    }, kt = t ? () => (Rt++ || window.addEventListener("resize", Ot), () => {
        --Rt || window.removeEventListener("resize", Ot);
    }) : g, St = () => wt.innerWidth, At = () => wt.innerHeight, Ct = () => wt.outerWidth, $t = () => wt.outerHeight, Ht = Et(0, kt, St, St), It = Et(0, kt, At, At), Ut = Et(0, kt, Ct, Ct), Ft = Et(0, kt, $t, $t);

    /* eslint-disable @typescript-eslint/explicit-function-return-type */

    let needChange$DEGREES = true;
    const $DEGREES = Et(0);
    const change$DEGREES = () => { $DEGREES.$ = Math.random() * 360; };

    function Title(
      
      { title }


    ) {
      if (needChange$DEGREES) {
        needChange$DEGREES = false;
        const SI = setInterval(change$DEGREES, 2500);
        fe(() => { clearInterval(SI), needChange$DEGREES = true; });
      }
      
      (
          Ye("h1", { class: "title" })(
        He(title)
      )

      );
    }
    Title.css =   [() => /*r2.$*/oe([$DEGREES], (_$0) => (`
.title {
  text-align: center;
  transition: color 2s;
  color: hsl(${_$0[0]}, 80%, 50%);
}
`)), "c27bcoaf8", true];

    /* eslint-disable @typescript-eslint/explicit-function-return-type */

    // document.addEventListener('keydown', (e) => { console.log(e) })

    const counter = () => {
      const $count = bt(0);

      const increment_1 = () => { $count.$++; };
      const decrement_1 = () => { $count.$--; };

      const increment_10 = () => { $count.$ += 10; };
      const decrement_10 = () => { $count.$ -= 10; }

      ;(
          Ye("div")(
        Ye("h2")(
          He("Counter")
        ),
        Ye("div", { "style--color": /*r2.$*/oe([$count], (_$0) => (_$0[0] > 0 ? 'green' : _$0[0] < 0 ? 'red' : 'gray')) })(
          He("Count: "),
          $e(/*r1.$*/$count)
        ),
        Ye("div")(
          Ye("small")(
            He("When the button 'Shift' is pressed, the value will change by 10")
          )
        ),
        Ye("br")(),
        Ye("div")(
          Ye("button", {}, [B('click', increment_1), B('ArrowUp', increment_1), B('click-Shift', increment_10), B('ArrowUp-Shift', increment_10)])(
            He("Increment (ArrowUp)")
          ),
          Ye("button", {}, [B('click', decrement_1), B('ArrowDown', decrement_1), B('click-Shift', decrement_10), B('ArrowDown-Shift', decrement_10)])(
            He("Decrement (ArrowDown)")
          )
        ),
        tt(/*r2.$*/oe([$count], (_$0) => (_$0[0] > 0)))(() => {
          Ye("p")(
            He("Count greater than 0")
          );
        }),
        rt(/*r2.$*/oe([$count], (_$0) => (_$0[0] < 0)))(() => {
          Ye("p")(
            He("Count less than 0")
          );
        }),
        nt()(() => {
                  Ye("p")(
            He("Count is 0")
          );

          })
      )

      );
    };

    function App(
      
    ) {
      // console.log(this);

      (
          qe(Title, { title: document.title })([])

      );

      counter();
    }

    // import * as rease from 'rease'

    gt(App, {
      target: document.body,

      beforeCreated: () => {
        console.time('ReaseApp');
      },
      onCreated: () => {
        console.timeEnd('ReaseApp');
      }
    });

})();
