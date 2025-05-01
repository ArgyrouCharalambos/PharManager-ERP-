var ha = Object.defineProperty;
var fa = (t, e, r) => e in t ? ha(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var $e = (t, e, r) => fa(t, typeof e != "symbol" ? e + "" : e, r);
import pa from "uglify-js";
var Cs = (t) => {
  throw TypeError(t);
}, Ms = (t, e, r) => e.has(t) || Cs("Cannot " + r), da = (t, e, r) => (Ms(t, e, "read from private field"), r ? r.call(t) : e.get(t)), ei = (t, e, r) => e.has(t) ? Cs("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), ti = (t, e, r) => (Ms(t, e, "access private method"), r), bs = typeof global == "object" && global && global.Object === Object && global, ma = typeof self == "object" && self && self.Object === Object && self, Ne = bs || ma || Function("return this")(), Te = Ne.Symbol, ks = Object.prototype, ga = ks.hasOwnProperty, va = ks.toString, mt = Te ? Te.toStringTag : void 0;
function Ea(t) {
  var e = ga.call(t, mt), r = t[mt];
  try {
    t[mt] = void 0;
    var n = !0;
  } catch {
  }
  var i = va.call(t);
  return n && (e ? t[mt] = r : delete t[mt]), i;
}
var Ta = Object.prototype, _a = Ta.toString;
function ya(t) {
  return _a.call(t);
}
var Aa = "[object Null]", Sa = "[object Undefined]", ri = Te ? Te.toStringTag : void 0;
function Xe(t) {
  return t == null ? t === void 0 ? Sa : Aa : ri && ri in Object(t) ? Ea(t) : ya(t);
}
function Oe(t) {
  return t != null && typeof t == "object";
}
var Ra = "[object Symbol]";
function mr(t) {
  return typeof t == "symbol" || Oe(t) && Xe(t) == Ra;
}
function gr(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, i = Array(n); ++r < n; )
    i[r] = e(t[r], r, t);
  return i;
}
var j = Array.isArray, ni = Te ? Te.prototype : void 0, ii = ni ? ni.toString : void 0;
function Ns(t) {
  if (typeof t == "string")
    return t;
  if (j(t))
    return gr(t, Ns) + "";
  if (mr(t))
    return ii ? ii.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Oa = /\s/;
function La(t) {
  for (var e = t.length; e-- && Oa.test(t.charAt(e)); )
    ;
  return e;
}
var Ia = /^\s+/;
function Ca(t) {
  return t && t.slice(0, La(t) + 1).replace(Ia, "");
}
function _e(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var si = NaN, Ma = /^[-+]0x[0-9a-f]+$/i, ba = /^0b[01]+$/i, ka = /^0o[0-7]+$/i, Na = parseInt;
function Pa(t) {
  if (typeof t == "number")
    return t;
  if (mr(t))
    return si;
  if (_e(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = _e(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Ca(t);
  var r = ba.test(t);
  return r || ka.test(t) ? Na(t.slice(2), r ? 2 : 8) : Ma.test(t) ? si : +t;
}
var wa = 1 / 0, xa = 17976931348623157e292;
function Ua(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Pa(t), t === wa || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * xa;
  }
  return t === t ? t : 0;
}
function vr(t) {
  var e = Ua(t), r = e % 1;
  return e === e ? r ? e - r : e : 0;
}
function ut(t) {
  return t;
}
var Da = "[object AsyncFunction]", Fa = "[object Function]", ja = "[object GeneratorFunction]", $a = "[object Proxy]";
function We(t) {
  if (!_e(t))
    return !1;
  var e = Xe(t);
  return e == Fa || e == ja || e == Da || e == $a;
}
var Pr = Ne["__core-js_shared__"], oi = function() {
  var t = /[^.]+$/.exec(Pr && Pr.keys && Pr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ga(t) {
  return !!oi && oi in t;
}
var Ba = Function.prototype, Va = Ba.toString;
function nt(t) {
  if (t != null) {
    try {
      return Va.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Wa = /[\\^$.*+?()[\]{}|]/g, Ka = /^\[object .+?Constructor\]$/, Ha = Function.prototype, za = Object.prototype, qa = Ha.toString, Ya = za.hasOwnProperty, Xa = RegExp(
  "^" + qa.call(Ya).replace(Wa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Qa(t) {
  if (!_e(t) || Ga(t))
    return !1;
  var e = We(t) ? Xa : Ka;
  return e.test(nt(t));
}
function Ja(t, e) {
  return t == null ? void 0 : t[e];
}
function it(t, e) {
  var r = Ja(t, e);
  return Qa(r) ? r : void 0;
}
var on = it(Ne, "WeakMap"), ai = Object.create, Za = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!_e(e))
      return {};
    if (ai)
      return ai(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
}();
function ec(t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
}
function te() {
}
function tc(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
var rc = 800, nc = 16, ic = Date.now;
function sc(t) {
  var e = 0, r = 0;
  return function() {
    var n = ic(), i = nc - (n - r);
    if (r = n, i > 0) {
      if (++e >= rc)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function oc(t) {
  return function() {
    return t;
  };
}
var nr = function() {
  try {
    var t = it(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), ac = nr ? function(t, e) {
  return nr(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: oc(e),
    writable: !0
  });
} : ut, cc = sc(ac);
function Ps(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
function ws(t, e, r, n) {
  for (var i = t.length, s = r + -1; ++s < i; )
    if (e(t[s], s, t))
      return s;
  return -1;
}
function uc(t) {
  return t !== t;
}
function lc(t, e, r) {
  for (var n = r - 1, i = t.length; ++n < i; )
    if (t[n] === e)
      return n;
  return -1;
}
function In(t, e, r) {
  return e === e ? lc(t, e, r) : ws(t, uc, r);
}
function xs(t, e) {
  var r = t == null ? 0 : t.length;
  return !!r && In(t, e, 0) > -1;
}
var hc = 9007199254740991, fc = /^(?:0|[1-9]\d*)$/;
function Er(t, e) {
  var r = typeof t;
  return e = e ?? hc, !!e && (r == "number" || r != "symbol" && fc.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Cn(t, e, r) {
  e == "__proto__" && nr ? nr(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
function Mt(t, e) {
  return t === e || t !== t && e !== e;
}
var pc = Object.prototype, dc = pc.hasOwnProperty;
function Tr(t, e, r) {
  var n = t[e];
  (!(dc.call(t, e) && Mt(n, r)) || r === void 0 && !(e in t)) && Cn(t, e, r);
}
function Mn(t, e, r, n) {
  var i = !r;
  r || (r = {});
  for (var s = -1, o = e.length; ++s < o; ) {
    var c = e[s], a = void 0;
    a === void 0 && (a = t[c]), i ? Cn(r, c, a) : Tr(r, c, a);
  }
  return r;
}
var ci = Math.max;
function mc(t, e, r) {
  return e = ci(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, i = -1, s = ci(n.length - e, 0), o = Array(s); ++i < s; )
      o[i] = n[e + i];
    i = -1;
    for (var c = Array(e + 1); ++i < e; )
      c[i] = n[i];
    return c[e] = r(o), ec(t, this, c);
  };
}
function bn(t, e) {
  return cc(mc(t, e, ut), t + "");
}
var gc = 9007199254740991;
function kn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= gc;
}
function Pe(t) {
  return t != null && kn(t.length) && !We(t);
}
function Us(t, e, r) {
  if (!_e(r))
    return !1;
  var n = typeof e;
  return (n == "number" ? Pe(r) && Er(e, r.length) : n == "string" && e in r) ? Mt(r[e], t) : !1;
}
function vc(t) {
  return bn(function(e, r) {
    var n = -1, i = r.length, s = i > 1 ? r[i - 1] : void 0, o = i > 2 ? r[2] : void 0;
    for (s = t.length > 3 && typeof s == "function" ? (i--, s) : void 0, o && Us(r[0], r[1], o) && (s = i < 3 ? void 0 : s, i = 1), e = Object(e); ++n < i; ) {
      var c = r[n];
      c && t(e, c, n, s);
    }
    return e;
  });
}
var Ec = Object.prototype;
function bt(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || Ec;
  return t === r;
}
function Tc(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var _c = "[object Arguments]";
function ui(t) {
  return Oe(t) && Xe(t) == _c;
}
var Ds = Object.prototype, yc = Ds.hasOwnProperty, Ac = Ds.propertyIsEnumerable, _r = ui(/* @__PURE__ */ function() {
  return arguments;
}()) ? ui : function(t) {
  return Oe(t) && yc.call(t, "callee") && !Ac.call(t, "callee");
};
function Sc() {
  return !1;
}
var Fs = typeof exports == "object" && exports && !exports.nodeType && exports, li = Fs && typeof module == "object" && module && !module.nodeType && module, Rc = li && li.exports === Fs, hi = Rc ? Ne.Buffer : void 0, Oc = hi ? hi.isBuffer : void 0, Ot = Oc || Sc, Lc = "[object Arguments]", Ic = "[object Array]", Cc = "[object Boolean]", Mc = "[object Date]", bc = "[object Error]", kc = "[object Function]", Nc = "[object Map]", Pc = "[object Number]", wc = "[object Object]", xc = "[object RegExp]", Uc = "[object Set]", Dc = "[object String]", Fc = "[object WeakMap]", jc = "[object ArrayBuffer]", $c = "[object DataView]", Gc = "[object Float32Array]", Bc = "[object Float64Array]", Vc = "[object Int8Array]", Wc = "[object Int16Array]", Kc = "[object Int32Array]", Hc = "[object Uint8Array]", zc = "[object Uint8ClampedArray]", qc = "[object Uint16Array]", Yc = "[object Uint32Array]", z = {};
z[Gc] = z[Bc] = z[Vc] = z[Wc] = z[Kc] = z[Hc] = z[zc] = z[qc] = z[Yc] = !0;
z[Lc] = z[Ic] = z[jc] = z[Cc] = z[$c] = z[Mc] = z[bc] = z[kc] = z[Nc] = z[Pc] = z[wc] = z[xc] = z[Uc] = z[Dc] = z[Fc] = !1;
function Xc(t) {
  return Oe(t) && kn(t.length) && !!z[Xe(t)];
}
function yr(t) {
  return function(e) {
    return t(e);
  };
}
var js = typeof exports == "object" && exports && !exports.nodeType && exports, St = js && typeof module == "object" && module && !module.nodeType && module, Qc = St && St.exports === js, wr = Qc && bs.process, qe = function() {
  try {
    var t = St && St.require && St.require("util").types;
    return t || wr && wr.binding && wr.binding("util");
  } catch {
  }
}(), fi = qe && qe.isTypedArray, Nn = fi ? yr(fi) : Xc, Jc = Object.prototype, Zc = Jc.hasOwnProperty;
function $s(t, e) {
  var r = j(t), n = !r && _r(t), i = !r && !n && Ot(t), s = !r && !n && !i && Nn(t), o = r || n || i || s, c = o ? Tc(t.length, String) : [], a = c.length;
  for (var u in t)
    (e || Zc.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    s && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Er(u, a))) && c.push(u);
  return c;
}
function Gs(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var eu = Gs(Object.keys, Object), tu = Object.prototype, ru = tu.hasOwnProperty;
function Bs(t) {
  if (!bt(t))
    return eu(t);
  var e = [];
  for (var r in Object(t))
    ru.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function ye(t) {
  return Pe(t) ? $s(t) : Bs(t);
}
var nu = Object.prototype, iu = nu.hasOwnProperty, de = vc(function(t, e) {
  if (bt(e) || Pe(e)) {
    Mn(e, ye(e), t);
    return;
  }
  for (var r in e)
    iu.call(e, r) && Tr(t, r, e[r]);
});
function su(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
var ou = Object.prototype, au = ou.hasOwnProperty;
function cu(t) {
  if (!_e(t))
    return su(t);
  var e = bt(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !au.call(t, n)) || r.push(n);
  return r;
}
function Vs(t) {
  return Pe(t) ? $s(t, !0) : cu(t);
}
var uu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, lu = /^\w*$/;
function Pn(t, e) {
  if (j(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || mr(t) ? !0 : lu.test(t) || !uu.test(t) || e != null && t in Object(e);
}
var Lt = it(Object, "create");
function hu() {
  this.__data__ = Lt ? Lt(null) : {}, this.size = 0;
}
function fu(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var pu = "__lodash_hash_undefined__", du = Object.prototype, mu = du.hasOwnProperty;
function gu(t) {
  var e = this.__data__;
  if (Lt) {
    var r = e[t];
    return r === pu ? void 0 : r;
  }
  return mu.call(e, t) ? e[t] : void 0;
}
var vu = Object.prototype, Eu = vu.hasOwnProperty;
function Tu(t) {
  var e = this.__data__;
  return Lt ? e[t] !== void 0 : Eu.call(e, t);
}
var _u = "__lodash_hash_undefined__";
function yu(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = Lt && e === void 0 ? _u : e, this;
}
function et(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
et.prototype.clear = hu;
et.prototype.delete = fu;
et.prototype.get = gu;
et.prototype.has = Tu;
et.prototype.set = yu;
function Au() {
  this.__data__ = [], this.size = 0;
}
function Ar(t, e) {
  for (var r = t.length; r--; )
    if (Mt(t[r][0], e))
      return r;
  return -1;
}
var Su = Array.prototype, Ru = Su.splice;
function Ou(t) {
  var e = this.__data__, r = Ar(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Ru.call(e, r, 1), --this.size, !0;
}
function Lu(t) {
  var e = this.__data__, r = Ar(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Iu(t) {
  return Ar(this.__data__, t) > -1;
}
function Cu(t, e) {
  var r = this.__data__, n = Ar(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function Ke(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
Ke.prototype.clear = Au;
Ke.prototype.delete = Ou;
Ke.prototype.get = Lu;
Ke.prototype.has = Iu;
Ke.prototype.set = Cu;
var It = it(Ne, "Map");
function Mu() {
  this.size = 0, this.__data__ = {
    hash: new et(),
    map: new (It || Ke)(),
    string: new et()
  };
}
function bu(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Sr(t, e) {
  var r = t.__data__;
  return bu(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function ku(t) {
  var e = Sr(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Nu(t) {
  return Sr(this, t).get(t);
}
function Pu(t) {
  return Sr(this, t).has(t);
}
function wu(t, e) {
  var r = Sr(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function He(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
He.prototype.clear = Mu;
He.prototype.delete = ku;
He.prototype.get = Nu;
He.prototype.has = Pu;
He.prototype.set = wu;
var xu = "Expected a function";
function wn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(xu);
  var r = function() {
    var n = arguments, i = e ? e.apply(this, n) : n[0], s = r.cache;
    if (s.has(i))
      return s.get(i);
    var o = t.apply(this, n);
    return r.cache = s.set(i, o) || s, o;
  };
  return r.cache = new (wn.Cache || He)(), r;
}
wn.Cache = He;
var Uu = 500;
function Du(t) {
  var e = wn(t, function(n) {
    return r.size === Uu && r.clear(), n;
  }), r = e.cache;
  return e;
}
var Fu = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ju = /\\(\\)?/g, $u = Du(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Fu, function(r, n, i, s) {
    e.push(i ? s.replace(ju, "$1") : n || r);
  }), e;
});
function Gu(t) {
  return t == null ? "" : Ns(t);
}
function Rr(t, e) {
  return j(t) ? t : Pn(t, e) ? [t] : $u(Gu(t));
}
function kt(t) {
  if (typeof t == "string" || mr(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function xn(t, e) {
  e = Rr(e, t);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[kt(e[r++])];
  return r && r == n ? t : void 0;
}
function Bu(t, e, r) {
  var n = t == null ? void 0 : xn(t, e);
  return n === void 0 ? r : n;
}
function Un(t, e) {
  for (var r = -1, n = e.length, i = t.length; ++r < n; )
    t[i + r] = e[r];
  return t;
}
var pi = Te ? Te.isConcatSpreadable : void 0;
function Vu(t) {
  return j(t) || _r(t) || !!(pi && t && t[pi]);
}
function Dn(t, e, r, n, i) {
  var s = -1, o = t.length;
  for (r || (r = Vu), i || (i = []); ++s < o; ) {
    var c = t[s];
    r(c) ? Un(i, c) : n || (i[i.length] = c);
  }
  return i;
}
function Se(t) {
  var e = t == null ? 0 : t.length;
  return e ? Dn(t) : [];
}
var Ws = Gs(Object.getPrototypeOf, Object);
function Ks(t, e, r) {
  var n = -1, i = t.length;
  e < 0 && (e = -e > i ? 0 : i + e), r = r > i ? i : r, r < 0 && (r += i), i = e > r ? 0 : r - e >>> 0, e >>>= 0;
  for (var s = Array(i); ++n < i; )
    s[n] = t[n + e];
  return s;
}
function Wu(t, e, r, n) {
  var i = -1, s = t == null ? 0 : t.length;
  for (n && s && (r = t[++i]); ++i < s; )
    r = e(r, t[i], i, t);
  return r;
}
function Ku() {
  this.__data__ = new Ke(), this.size = 0;
}
function Hu(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function zu(t) {
  return this.__data__.get(t);
}
function qu(t) {
  return this.__data__.has(t);
}
var Yu = 200;
function Xu(t, e) {
  var r = this.__data__;
  if (r instanceof Ke) {
    var n = r.__data__;
    if (!It || n.length < Yu - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new He(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function ke(t) {
  var e = this.__data__ = new Ke(t);
  this.size = e.size;
}
ke.prototype.clear = Ku;
ke.prototype.delete = Hu;
ke.prototype.get = zu;
ke.prototype.has = qu;
ke.prototype.set = Xu;
function Qu(t, e) {
  return t && Mn(e, ye(e), t);
}
var Hs = typeof exports == "object" && exports && !exports.nodeType && exports, di = Hs && typeof module == "object" && module && !module.nodeType && module, Ju = di && di.exports === Hs, mi = Ju ? Ne.Buffer : void 0, gi = mi ? mi.allocUnsafe : void 0;
function Zu(t, e) {
  var r = t.length, n = gi ? gi(r) : new t.constructor(r);
  return t.copy(n), n;
}
function Fn(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, i = 0, s = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (s[i++] = o);
  }
  return s;
}
function zs() {
  return [];
}
var el = Object.prototype, tl = el.propertyIsEnumerable, vi = Object.getOwnPropertySymbols, jn = vi ? function(t) {
  return t == null ? [] : (t = Object(t), Fn(vi(t), function(e) {
    return tl.call(t, e);
  }));
} : zs;
function rl(t, e) {
  return Mn(t, jn(t), e);
}
var nl = Object.getOwnPropertySymbols, il = nl ? function(t) {
  for (var e = []; t; )
    Un(e, jn(t)), t = Ws(t);
  return e;
} : zs;
function qs(t, e, r) {
  var n = e(t);
  return j(t) ? n : Un(n, r(t));
}
function an(t) {
  return qs(t, ye, jn);
}
function sl(t) {
  return qs(t, Vs, il);
}
var cn = it(Ne, "DataView"), un = it(Ne, "Promise"), ct = it(Ne, "Set"), Ei = "[object Map]", ol = "[object Object]", Ti = "[object Promise]", _i = "[object Set]", yi = "[object WeakMap]", Ai = "[object DataView]", al = nt(cn), cl = nt(It), ul = nt(un), ll = nt(ct), hl = nt(on), ve = Xe;
(cn && ve(new cn(new ArrayBuffer(1))) != Ai || It && ve(new It()) != Ei || un && ve(un.resolve()) != Ti || ct && ve(new ct()) != _i || on && ve(new on()) != yi) && (ve = function(t) {
  var e = Xe(t), r = e == ol ? t.constructor : void 0, n = r ? nt(r) : "";
  if (n)
    switch (n) {
      case al:
        return Ai;
      case cl:
        return Ei;
      case ul:
        return Ti;
      case ll:
        return _i;
      case hl:
        return yi;
    }
  return e;
});
var fl = Object.prototype, pl = fl.hasOwnProperty;
function dl(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && pl.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
var ir = Ne.Uint8Array;
function ml(t) {
  var e = new t.constructor(t.byteLength);
  return new ir(e).set(new ir(t)), e;
}
function gl(t, e) {
  var r = t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
var vl = /\w*$/;
function El(t) {
  var e = new t.constructor(t.source, vl.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var Si = Te ? Te.prototype : void 0, Ri = Si ? Si.valueOf : void 0;
function Tl(t) {
  return Ri ? Object(Ri.call(t)) : {};
}
function _l(t, e) {
  var r = t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
var yl = "[object Boolean]", Al = "[object Date]", Sl = "[object Map]", Rl = "[object Number]", Ol = "[object RegExp]", Ll = "[object Set]", Il = "[object String]", Cl = "[object Symbol]", Ml = "[object ArrayBuffer]", bl = "[object DataView]", kl = "[object Float32Array]", Nl = "[object Float64Array]", Pl = "[object Int8Array]", wl = "[object Int16Array]", xl = "[object Int32Array]", Ul = "[object Uint8Array]", Dl = "[object Uint8ClampedArray]", Fl = "[object Uint16Array]", jl = "[object Uint32Array]";
function $l(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case Ml:
      return ml(t);
    case yl:
    case Al:
      return new n(+t);
    case bl:
      return gl(t);
    case kl:
    case Nl:
    case Pl:
    case wl:
    case xl:
    case Ul:
    case Dl:
    case Fl:
    case jl:
      return _l(t);
    case Sl:
      return new n();
    case Rl:
    case Il:
      return new n(t);
    case Ol:
      return El(t);
    case Ll:
      return new n();
    case Cl:
      return Tl(t);
  }
}
function Gl(t) {
  return typeof t.constructor == "function" && !bt(t) ? Za(Ws(t)) : {};
}
var Bl = "[object Map]";
function Vl(t) {
  return Oe(t) && ve(t) == Bl;
}
var Oi = qe && qe.isMap, Wl = Oi ? yr(Oi) : Vl, Kl = "[object Set]";
function Hl(t) {
  return Oe(t) && ve(t) == Kl;
}
var Li = qe && qe.isSet, zl = Li ? yr(Li) : Hl, Ys = "[object Arguments]", ql = "[object Array]", Yl = "[object Boolean]", Xl = "[object Date]", Ql = "[object Error]", Xs = "[object Function]", Jl = "[object GeneratorFunction]", Zl = "[object Map]", eh = "[object Number]", Qs = "[object Object]", th = "[object RegExp]", rh = "[object Set]", nh = "[object String]", ih = "[object Symbol]", sh = "[object WeakMap]", oh = "[object ArrayBuffer]", ah = "[object DataView]", ch = "[object Float32Array]", uh = "[object Float64Array]", lh = "[object Int8Array]", hh = "[object Int16Array]", fh = "[object Int32Array]", ph = "[object Uint8Array]", dh = "[object Uint8ClampedArray]", mh = "[object Uint16Array]", gh = "[object Uint32Array]", W = {};
W[Ys] = W[ql] = W[oh] = W[ah] = W[Yl] = W[Xl] = W[ch] = W[uh] = W[lh] = W[hh] = W[fh] = W[Zl] = W[eh] = W[Qs] = W[th] = W[rh] = W[nh] = W[ih] = W[ph] = W[dh] = W[mh] = W[gh] = !0;
W[Ql] = W[Xs] = W[sh] = !1;
function Yt(t, e, r, n, i, s) {
  var o;
  if (o !== void 0)
    return o;
  if (!_e(t))
    return t;
  var c = j(t);
  if (c)
    return o = dl(t), tc(t, o);
  var a = ve(t), u = a == Xs || a == Jl;
  if (Ot(t))
    return Zu(t);
  if (a == Qs || a == Ys || u && !i)
    return o = u ? {} : Gl(t), rl(t, Qu(o, t));
  if (!W[a])
    return i ? t : {};
  o = $l(t, a), s || (s = new ke());
  var l = s.get(t);
  if (l)
    return l;
  s.set(t, o), zl(t) ? t.forEach(function(p) {
    o.add(Yt(p, e, r, p, t, s));
  }) : Wl(t) && t.forEach(function(p, d) {
    o.set(d, Yt(p, e, r, d, t, s));
  });
  var h = an, m = c ? void 0 : h(t);
  return Ps(m || t, function(p, d) {
    m && (d = p, p = t[d]), Tr(o, d, Yt(p, e, r, d, t, s));
  }), o;
}
var vh = 4;
function oe(t) {
  return Yt(t, vh);
}
function Nt(t) {
  for (var e = -1, r = t == null ? 0 : t.length, n = 0, i = []; ++e < r; ) {
    var s = t[e];
    s && (i[n++] = s);
  }
  return i;
}
var Eh = "__lodash_hash_undefined__";
function Th(t) {
  return this.__data__.set(t, Eh), this;
}
function _h(t) {
  return this.__data__.has(t);
}
function lt(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new He(); ++e < r; )
    this.add(t[e]);
}
lt.prototype.add = lt.prototype.push = Th;
lt.prototype.has = _h;
function Js(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
function $n(t, e) {
  return t.has(e);
}
var yh = 1, Ah = 2;
function Zs(t, e, r, n, i, s) {
  var o = r & yh, c = t.length, a = e.length;
  if (c != a && !(o && a > c))
    return !1;
  var u = s.get(t), l = s.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, m = !0, p = r & Ah ? new lt() : void 0;
  for (s.set(t, e), s.set(e, t); ++h < c; ) {
    var d = t[h], g = e[h];
    if (n)
      var _ = o ? n(g, d, h, e, t, s) : n(d, g, h, t, e, s);
    if (_ !== void 0) {
      if (_)
        continue;
      m = !1;
      break;
    }
    if (p) {
      if (!Js(e, function(y, E) {
        if (!$n(p, E) && (d === y || i(d, y, r, n, s)))
          return p.push(E);
      })) {
        m = !1;
        break;
      }
    } else if (!(d === g || i(d, g, r, n, s))) {
      m = !1;
      break;
    }
  }
  return s.delete(t), s.delete(e), m;
}
function Sh(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, i) {
    r[++e] = [i, n];
  }), r;
}
function Gn(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
var Rh = 1, Oh = 2, Lh = "[object Boolean]", Ih = "[object Date]", Ch = "[object Error]", Mh = "[object Map]", bh = "[object Number]", kh = "[object RegExp]", Nh = "[object Set]", Ph = "[object String]", wh = "[object Symbol]", xh = "[object ArrayBuffer]", Uh = "[object DataView]", Ii = Te ? Te.prototype : void 0, xr = Ii ? Ii.valueOf : void 0;
function Dh(t, e, r, n, i, s, o) {
  switch (r) {
    case Uh:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case xh:
      return !(t.byteLength != e.byteLength || !s(new ir(t), new ir(e)));
    case Lh:
    case Ih:
    case bh:
      return Mt(+t, +e);
    case Ch:
      return t.name == e.name && t.message == e.message;
    case kh:
    case Ph:
      return t == e + "";
    case Mh:
      var c = Sh;
    case Nh:
      var a = n & Rh;
      if (c || (c = Gn), t.size != e.size && !a)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      n |= Oh, o.set(t, e);
      var l = Zs(c(t), c(e), n, i, s, o);
      return o.delete(t), l;
    case wh:
      if (xr)
        return xr.call(t) == xr.call(e);
  }
  return !1;
}
var Fh = 1, jh = Object.prototype, $h = jh.hasOwnProperty;
function Gh(t, e, r, n, i, s) {
  var o = r & Fh, c = an(t), a = c.length, u = an(e), l = u.length;
  if (a != l && !o)
    return !1;
  for (var h = a; h--; ) {
    var m = c[h];
    if (!(o ? m in e : $h.call(e, m)))
      return !1;
  }
  var p = s.get(t), d = s.get(e);
  if (p && d)
    return p == e && d == t;
  var g = !0;
  s.set(t, e), s.set(e, t);
  for (var _ = o; ++h < a; ) {
    m = c[h];
    var y = t[m], E = e[m];
    if (n)
      var T = o ? n(E, y, m, e, t, s) : n(y, E, m, t, e, s);
    if (!(T === void 0 ? y === E || i(y, E, r, n, s) : T)) {
      g = !1;
      break;
    }
    _ || (_ = m == "constructor");
  }
  if (g && !_) {
    var f = t.constructor, v = e.constructor;
    f != v && "constructor" in t && "constructor" in e && !(typeof f == "function" && f instanceof f && typeof v == "function" && v instanceof v) && (g = !1);
  }
  return s.delete(t), s.delete(e), g;
}
var Bh = 1, Ci = "[object Arguments]", Mi = "[object Array]", Ft = "[object Object]", Vh = Object.prototype, bi = Vh.hasOwnProperty;
function Wh(t, e, r, n, i, s) {
  var o = j(t), c = j(e), a = o ? Mi : ve(t), u = c ? Mi : ve(e);
  a = a == Ci ? Ft : a, u = u == Ci ? Ft : u;
  var l = a == Ft, h = u == Ft, m = a == u;
  if (m && Ot(t)) {
    if (!Ot(e))
      return !1;
    o = !0, l = !1;
  }
  if (m && !l)
    return s || (s = new ke()), o || Nn(t) ? Zs(t, e, r, n, i, s) : Dh(t, e, a, r, n, i, s);
  if (!(r & Bh)) {
    var p = l && bi.call(t, "__wrapped__"), d = h && bi.call(e, "__wrapped__");
    if (p || d) {
      var g = p ? t.value() : t, _ = d ? e.value() : e;
      return s || (s = new ke()), i(g, _, r, n, s);
    }
  }
  return m ? (s || (s = new ke()), Gh(t, e, r, n, i, s)) : !1;
}
function Bn(t, e, r, n, i) {
  return t === e ? !0 : t == null || e == null || !Oe(t) && !Oe(e) ? t !== t && e !== e : Wh(t, e, r, n, Bn, i);
}
var Kh = 1, Hh = 2;
function zh(t, e, r, n) {
  var i = r.length, s = i;
  if (t == null)
    return !s;
  for (t = Object(t); i--; ) {
    var o = r[i];
    if (o[2] ? o[1] !== t[o[0]] : !(o[0] in t))
      return !1;
  }
  for (; ++i < s; ) {
    o = r[i];
    var c = o[0], a = t[c], u = o[1];
    if (o[2]) {
      if (a === void 0 && !(c in t))
        return !1;
    } else {
      var l = new ke(), h;
      if (!(h === void 0 ? Bn(u, a, Kh | Hh, n, l) : h))
        return !1;
    }
  }
  return !0;
}
function eo(t) {
  return t === t && !_e(t);
}
function qh(t) {
  for (var e = ye(t), r = e.length; r--; ) {
    var n = e[r], i = t[n];
    e[r] = [n, i, eo(i)];
  }
  return e;
}
function to(t, e) {
  return function(r) {
    return r == null ? !1 : r[t] === e && (e !== void 0 || t in Object(r));
  };
}
function Yh(t) {
  var e = qh(t);
  return e.length == 1 && e[0][2] ? to(e[0][0], e[0][1]) : function(r) {
    return r === t || zh(r, t, e);
  };
}
function Xh(t, e) {
  return t != null && e in Object(t);
}
function ro(t, e, r) {
  e = Rr(e, t);
  for (var n = -1, i = e.length, s = !1; ++n < i; ) {
    var o = kt(e[n]);
    if (!(s = t != null && r(t, o)))
      break;
    t = t[o];
  }
  return s || ++n != i ? s : (i = t == null ? 0 : t.length, !!i && kn(i) && Er(o, i) && (j(t) || _r(t)));
}
function Qh(t, e) {
  return t != null && ro(t, e, Xh);
}
var Jh = 1, Zh = 2;
function ef(t, e) {
  return Pn(t) && eo(e) ? to(kt(t), e) : function(r) {
    var n = Bu(r, t);
    return n === void 0 && n === e ? Qh(r, t) : Bn(e, n, Jh | Zh);
  };
}
function tf(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function rf(t) {
  return function(e) {
    return xn(e, t);
  };
}
function nf(t) {
  return Pn(t) ? tf(kt(t)) : rf(t);
}
function we(t) {
  return typeof t == "function" ? t : t == null ? ut : typeof t == "object" ? j(t) ? ef(t[0], t[1]) : Yh(t) : nf(t);
}
function sf(t, e, r, n) {
  for (var i = -1, s = t == null ? 0 : t.length; ++i < s; ) {
    var o = t[i];
    e(n, o, r(o), t);
  }
  return n;
}
function of(t) {
  return function(e, r, n) {
    for (var i = -1, s = Object(e), o = n(e), c = o.length; c--; ) {
      var a = o[++i];
      if (r(s[a], a, s) === !1)
        break;
    }
    return e;
  };
}
var af = of();
function cf(t, e) {
  return t && af(t, e, ye);
}
function uf(t, e) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Pe(r))
      return t(r, n);
    for (var i = r.length, s = -1, o = Object(r); ++s < i && n(o[s], s, o) !== !1; )
      ;
    return r;
  };
}
var st = uf(cf);
function lf(t, e, r, n) {
  return st(t, function(i, s, o) {
    e(n, i, r(i), o);
  }), n;
}
function hf(t, e) {
  return function(r, n) {
    var i = j(r) ? sf : lf, s = {};
    return i(r, t, we(n), s);
  };
}
var no = Object.prototype, ff = no.hasOwnProperty, Vn = bn(function(t, e) {
  t = Object(t);
  var r = -1, n = e.length, i = n > 2 ? e[2] : void 0;
  for (i && Us(e[0], e[1], i) && (n = 1); ++r < n; )
    for (var s = e[r], o = Vs(s), c = -1, a = o.length; ++c < a; ) {
      var u = o[c], l = t[u];
      (l === void 0 || Mt(l, no[u]) && !ff.call(t, u)) && (t[u] = s[u]);
    }
  return t;
});
function ki(t) {
  return Oe(t) && Pe(t);
}
var pf = 200;
function df(t, e, r, n) {
  var i = -1, s = xs, o = !0, c = t.length, a = [], u = e.length;
  if (!c)
    return a;
  e.length >= pf && (s = $n, o = !1, e = new lt(e));
  e:
    for (; ++i < c; ) {
      var l = t[i], h = l;
      if (l = l !== 0 ? l : 0, o && h === h) {
        for (var m = u; m--; )
          if (e[m] === h)
            continue e;
        a.push(l);
      } else s(e, h, n) || a.push(l);
    }
  return a;
}
var Or = bn(function(t, e) {
  return ki(t) ? df(t, Dn(e, 1, ki, !0)) : [];
});
function ht(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function se(t, e, r) {
  var n = t == null ? 0 : t.length;
  return n ? (e = e === void 0 ? 1 : vr(e), Ks(t, e < 0 ? 0 : e, n)) : [];
}
function Ct(t, e, r) {
  var n = t == null ? 0 : t.length;
  return n ? (e = e === void 0 ? 1 : vr(e), e = n - e, Ks(t, 0, e < 0 ? 0 : e)) : [];
}
function mf(t) {
  return typeof t == "function" ? t : ut;
}
function N(t, e) {
  var r = j(t) ? Ps : st;
  return r(t, mf(e));
}
function gf(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (!e(t[r], r, t))
      return !1;
  return !0;
}
function vf(t, e) {
  var r = !0;
  return st(t, function(n, i, s) {
    return r = !!e(n, i, s), r;
  }), r;
}
function Re(t, e, r) {
  var n = j(t) ? gf : vf;
  return n(t, we(e));
}
function io(t, e) {
  var r = [];
  return st(t, function(n, i, s) {
    e(n, i, s) && r.push(n);
  }), r;
}
function Ae(t, e) {
  var r = j(t) ? Fn : io;
  return r(t, we(e));
}
function Ef(t) {
  return function(e, r, n) {
    var i = Object(e);
    if (!Pe(e)) {
      var s = we(r);
      e = ye(e), r = function(c) {
        return s(i[c], c, i);
      };
    }
    var o = t(e, r, n);
    return o > -1 ? i[s ? e[o] : o] : void 0;
  };
}
var Tf = Math.max;
function _f(t, e, r) {
  var n = t == null ? 0 : t.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : vr(r);
  return i < 0 && (i = Tf(n + i, 0)), ws(t, we(e), i);
}
var ft = Ef(_f);
function Le(t) {
  return t && t.length ? t[0] : void 0;
}
function yf(t, e) {
  var r = -1, n = Pe(t) ? Array(t.length) : [];
  return st(t, function(i, s, o) {
    n[++r] = e(i, s, o);
  }), n;
}
function C(t, e) {
  var r = j(t) ? gr : yf;
  return r(t, we(e));
}
function Ee(t, e) {
  return Dn(C(t, e));
}
var Af = Object.prototype, Sf = Af.hasOwnProperty, Rf = hf(function(t, e, r) {
  Sf.call(t, r) ? t[r].push(e) : Cn(t, r, [e]);
}), Of = Object.prototype, Lf = Of.hasOwnProperty;
function If(t, e) {
  return t != null && Lf.call(t, e);
}
function M(t, e) {
  return t != null && ro(t, e, If);
}
var Cf = "[object String]";
function he(t) {
  return typeof t == "string" || !j(t) && Oe(t) && Xe(t) == Cf;
}
function Mf(t, e) {
  return gr(e, function(r) {
    return t[r];
  });
}
function re(t) {
  return t == null ? [] : Mf(t, ye(t));
}
var bf = Math.max;
function ue(t, e, r, n) {
  t = Pe(t) ? t : re(t), r = r ? vr(r) : 0;
  var i = t.length;
  return r < 0 && (r = bf(i + r, 0)), he(t) ? r <= i && t.indexOf(e, r) > -1 : !!i && In(t, e, r) > -1;
}
function Ni(t, e, r) {
  var n = t == null ? 0 : t.length;
  if (!n)
    return -1;
  var i = 0;
  return In(t, e, i);
}
var kf = "[object Map]", Nf = "[object Set]", Pf = Object.prototype, wf = Pf.hasOwnProperty;
function K(t) {
  if (t == null)
    return !0;
  if (Pe(t) && (j(t) || typeof t == "string" || typeof t.splice == "function" || Ot(t) || Nn(t) || _r(t)))
    return !t.length;
  var e = ve(t);
  if (e == kf || e == Nf)
    return !t.size;
  if (bt(t))
    return !Bs(t).length;
  for (var r in t)
    if (wf.call(t, r))
      return !1;
  return !0;
}
var xf = "[object RegExp]";
function Uf(t) {
  return Oe(t) && Xe(t) == xf;
}
var Pi = qe && qe.isRegExp, Ge = Pi ? yr(Pi) : Uf;
function Be(t) {
  return t === void 0;
}
var Df = "Expected a function";
function Ff(t) {
  if (typeof t != "function")
    throw new TypeError(Df);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !t.call(this);
      case 1:
        return !t.call(this, e[0]);
      case 2:
        return !t.call(this, e[0], e[1]);
      case 3:
        return !t.call(this, e[0], e[1], e[2]);
    }
    return !t.apply(this, e);
  };
}
function jf(t, e, r, n) {
  if (!_e(t))
    return t;
  e = Rr(e, t);
  for (var i = -1, s = e.length, o = s - 1, c = t; c != null && ++i < s; ) {
    var a = kt(e[i]), u = r;
    if (a === "__proto__" || a === "constructor" || a === "prototype")
      return t;
    if (i != o) {
      var l = c[a];
      u = void 0, u === void 0 && (u = _e(l) ? l : Er(e[i + 1]) ? [] : {});
    }
    Tr(c, a, u), c = c[a];
  }
  return t;
}
function $f(t, e, r) {
  for (var n = -1, i = e.length, s = {}; ++n < i; ) {
    var o = e[n], c = xn(t, o);
    r(c, o) && jf(s, Rr(o, t), c);
  }
  return s;
}
function Ie(t, e) {
  if (t == null)
    return {};
  var r = gr(sl(t), function(n) {
    return [n];
  });
  return e = we(e), $f(t, r, function(n, i) {
    return e(n, i[0]);
  });
}
function Gf(t, e, r, n, i) {
  return i(t, function(s, o, c) {
    r = n ? (n = !1, s) : e(r, s, o, c);
  }), r;
}
function me(t, e, r) {
  var n = j(t) ? Wu : Gf, i = arguments.length < 3;
  return n(t, we(e), r, i, st);
}
function Lr(t, e) {
  var r = j(t) ? Fn : io;
  return r(t, Ff(we(e)));
}
function Bf(t, e) {
  var r;
  return st(t, function(n, i, s) {
    return r = e(n, i, s), !r;
  }), !!r;
}
function so(t, e, r) {
  var n = j(t) ? Js : Bf;
  return n(t, we(e));
}
var Vf = 1 / 0, Wf = ct && 1 / Gn(new ct([, -0]))[1] == Vf ? function(t) {
  return new ct(t);
} : te, Kf = 200;
function Hf(t, e, r) {
  var n = -1, i = xs, s = t.length, o = !0, c = [], a = c;
  if (s >= Kf) {
    var u = Wf(t);
    if (u)
      return Gn(u);
    o = !1, i = $n, a = new lt();
  } else
    a = c;
  e:
    for (; ++n < s; ) {
      var l = t[n], h = l;
      if (l = l !== 0 ? l : 0, o && h === h) {
        for (var m = a.length; m--; )
          if (a[m] === h)
            continue e;
        c.push(l);
      } else i(a, h, r) || (a !== c && a.push(h), c.push(l));
    }
  return c;
}
function Wn(t) {
  return t && t.length ? Hf(t) : [];
}
function ln(t) {
  console && console.error && console.error(`Error: ${t}`);
}
function oo(t) {
  console && console.warn && console.warn(`Warning: ${t}`);
}
function ao(t) {
  const e = (/* @__PURE__ */ new Date()).getTime(), r = t();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: r };
}
function co(t) {
  function e() {
  }
  e.prototype = t;
  const r = new e();
  function n() {
    return typeof r.bar;
  }
  return n(), n(), t;
}
function zf(t) {
  return qf(t) ? t.LABEL : t.name;
}
function qf(t) {
  return he(t.LABEL) && t.LABEL !== "";
}
class xe {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), N(this.definition, (r) => {
      r.accept(e);
    });
  }
}
class ge extends xe {
  constructor(e) {
    super([]), this.idx = 1, de(this, Ie(e, (r) => r !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
}
class pt extends xe {
  constructor(e) {
    super(e.definition), this.orgText = "", de(this, Ie(e, (r) => r !== void 0));
  }
}
class fe extends xe {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = !1, de(this, Ie(e, (r) => r !== void 0));
  }
}
class le extends xe {
  constructor(e) {
    super(e.definition), this.idx = 1, de(this, Ie(e, (r) => r !== void 0));
  }
}
class Ue extends xe {
  constructor(e) {
    super(e.definition), this.idx = 1, de(this, Ie(e, (r) => r !== void 0));
  }
}
class De extends xe {
  constructor(e) {
    super(e.definition), this.idx = 1, de(this, Ie(e, (r) => r !== void 0));
  }
}
class ne extends xe {
  constructor(e) {
    super(e.definition), this.idx = 1, de(this, Ie(e, (r) => r !== void 0));
  }
}
class Ce extends xe {
  constructor(e) {
    super(e.definition), this.idx = 1, de(this, Ie(e, (r) => r !== void 0));
  }
}
class Me extends xe {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, de(this, Ie(e, (r) => r !== void 0));
  }
}
class X {
  constructor(e) {
    this.idx = 1, de(this, Ie(e, (r) => r !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}
function Yf(t) {
  return C(t, Xt);
}
function Xt(t) {
  function e(r) {
    return C(r, Xt);
  }
  if (t instanceof ge) {
    const r = {
      type: "NonTerminal",
      name: t.nonTerminalName,
      idx: t.idx
    };
    return he(t.label) && (r.label = t.label), r;
  } else {
    if (t instanceof fe)
      return {
        type: "Alternative",
        definition: e(t.definition)
      };
    if (t instanceof le)
      return {
        type: "Option",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Ue)
      return {
        type: "RepetitionMandatory",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof De)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: t.idx,
        separator: Xt(new X({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof Ce)
      return {
        type: "RepetitionWithSeparator",
        idx: t.idx,
        separator: Xt(new X({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof ne)
      return {
        type: "Repetition",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Me)
      return {
        type: "Alternation",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof X) {
      const r = {
        type: "Terminal",
        name: t.terminalType.name,
        label: zf(t.terminalType),
        idx: t.idx
      };
      he(t.label) && (r.terminalLabel = t.label);
      const n = t.terminalType.PATTERN;
      return t.terminalType.PATTERN && (r.pattern = Ge(n) ? n.source : n), r;
    } else {
      if (t instanceof pt)
        return {
          type: "Rule",
          name: t.name,
          orgText: t.orgText,
          definition: e(t.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
class dt {
  visit(e) {
    const r = e;
    switch (r.constructor) {
      case ge:
        return this.visitNonTerminal(r);
      case fe:
        return this.visitAlternative(r);
      case le:
        return this.visitOption(r);
      case Ue:
        return this.visitRepetitionMandatory(r);
      case De:
        return this.visitRepetitionMandatoryWithSeparator(r);
      case Ce:
        return this.visitRepetitionWithSeparator(r);
      case ne:
        return this.visitRepetition(r);
      case Me:
        return this.visitAlternation(r);
      case X:
        return this.visitTerminal(r);
      case pt:
        return this.visitRule(r);
      /* c8 ignore next 2 */
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
}
function Xf(t) {
  return t instanceof fe || t instanceof le || t instanceof ne || t instanceof Ue || t instanceof De || t instanceof Ce || t instanceof X || t instanceof pt;
}
function sr(t, e = []) {
  return t instanceof le || t instanceof ne || t instanceof Ce ? !0 : t instanceof Me ? so(t.definition, (r) => sr(r, e)) : t instanceof ge && ue(e, t) ? !1 : t instanceof xe ? (t instanceof ge && e.push(t), Re(t.definition, (r) => sr(r, e))) : !1;
}
function Qf(t) {
  return t instanceof Me;
}
function be(t) {
  if (t instanceof ge)
    return "SUBRULE";
  if (t instanceof le)
    return "OPTION";
  if (t instanceof Me)
    return "OR";
  if (t instanceof Ue)
    return "AT_LEAST_ONE";
  if (t instanceof De)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof Ce)
    return "MANY_SEP";
  if (t instanceof ne)
    return "MANY";
  if (t instanceof X)
    return "CONSUME";
  throw Error("non exhaustive match");
}
class Ir {
  walk(e, r = []) {
    N(e.definition, (n, i) => {
      const s = se(e.definition, i + 1);
      if (n instanceof ge)
        this.walkProdRef(n, s, r);
      else if (n instanceof X)
        this.walkTerminal(n, s, r);
      else if (n instanceof fe)
        this.walkFlat(n, s, r);
      else if (n instanceof le)
        this.walkOption(n, s, r);
      else if (n instanceof Ue)
        this.walkAtLeastOne(n, s, r);
      else if (n instanceof De)
        this.walkAtLeastOneSep(n, s, r);
      else if (n instanceof Ce)
        this.walkManySep(n, s, r);
      else if (n instanceof ne)
        this.walkMany(n, s, r);
      else if (n instanceof Me)
        this.walkOr(n, s, r);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, r, n) {
  }
  walkProdRef(e, r, n) {
  }
  walkFlat(e, r, n) {
    const i = r.concat(n);
    this.walk(e, i);
  }
  walkOption(e, r, n) {
    const i = r.concat(n);
    this.walk(e, i);
  }
  walkAtLeastOne(e, r, n) {
    const i = [
      new le({ definition: e.definition })
    ].concat(r, n);
    this.walk(e, i);
  }
  walkAtLeastOneSep(e, r, n) {
    const i = wi(e, r, n);
    this.walk(e, i);
  }
  walkMany(e, r, n) {
    const i = [
      new le({ definition: e.definition })
    ].concat(r, n);
    this.walk(e, i);
  }
  walkManySep(e, r, n) {
    const i = wi(e, r, n);
    this.walk(e, i);
  }
  walkOr(e, r, n) {
    const i = r.concat(n);
    N(e.definition, (s) => {
      const o = new fe({ definition: [s] });
      this.walk(o, i);
    });
  }
}
function wi(t, e, r) {
  return [
    new le({
      definition: [
        new X({ terminalType: t.separator })
      ].concat(t.definition)
    })
  ].concat(e, r);
}
function Pt(t) {
  if (t instanceof ge)
    return Pt(t.referencedRule);
  if (t instanceof X)
    return ep(t);
  if (Xf(t))
    return Jf(t);
  if (Qf(t))
    return Zf(t);
  throw Error("non exhaustive match");
}
function Jf(t) {
  let e = [];
  const r = t.definition;
  let n = 0, i = r.length > n, s, o = !0;
  for (; i && o; )
    s = r[n], o = sr(s), e = e.concat(Pt(s)), n = n + 1, i = r.length > n;
  return Wn(e);
}
function Zf(t) {
  const e = C(t.definition, (r) => Pt(r));
  return Wn(Se(e));
}
function ep(t) {
  return [t.terminalType];
}
const uo = "_~IN~_";
class tp extends Ir {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, r, n) {
  }
  walkProdRef(e, r, n) {
    const i = np(e.referencedRule, e.idx) + this.topProd.name, s = r.concat(n), o = new fe({ definition: s }), c = Pt(o);
    this.follows[i] = c;
  }
}
function rp(t) {
  const e = {};
  return N(t, (r) => {
    const n = new tp(r).startWalking();
    de(e, n);
  }), e;
}
function np(t, e) {
  return t.name + e + uo;
}
function P(t) {
  return t.charCodeAt(0);
}
function Ur(t, e) {
  Array.isArray(t) ? t.forEach(function(r) {
    e.push(r);
  }) : e.push(t);
}
function gt(t, e) {
  if (t[e] === !0)
    throw "duplicate flag " + e;
  t[e], t[e] = !0;
}
function at(t) {
  if (t === void 0)
    throw Error("Internal Error - Should never get here!");
  return !0;
}
function ip() {
  throw Error("Internal Error - Should never get here!");
}
function xi(t) {
  return t.type === "Character";
}
const or = [];
for (let t = P("0"); t <= P("9"); t++)
  or.push(t);
const ar = [P("_")].concat(or);
for (let t = P("a"); t <= P("z"); t++)
  ar.push(t);
for (let t = P("A"); t <= P("Z"); t++)
  ar.push(t);
const Ui = [
  P(" "),
  P("\f"),
  P(`
`),
  P("\r"),
  P("	"),
  P("\v"),
  P("	"),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P(" "),
  P("\u2028"),
  P("\u2029"),
  P(" "),
  P(" "),
  P("　"),
  P("\uFEFF")
], sp = /[0-9a-fA-F]/, jt = /[0-9]/, op = /[1-9]/;
class ap {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const r = this.disjunction();
    this.consumeChar("/");
    const n = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: !1,
      ignoreCase: !1,
      multiLine: !1,
      unicode: !1,
      sticky: !1
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          gt(n, "global");
          break;
        case "i":
          gt(n, "ignoreCase");
          break;
        case "m":
          gt(n, "multiLine");
          break;
        case "u":
          gt(n, "unicode");
          break;
        case "y":
          gt(n, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: n,
      value: r,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], r = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(r) };
  }
  alternative() {
    const e = [], r = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(r) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      // '\b' or '\B'
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      // '(?=' or '(?!'
      case "(":
        this.consumeChar("?");
        let r;
        switch (this.popChar()) {
          case "=":
            r = "Lookahead";
            break;
          case "!":
            r = "NegativeLookahead";
            break;
        }
        at(r);
        const n = this.disjunction();
        return this.consumeChar(")"), {
          type: r,
          value: n,
          loc: this.loc(e)
        };
    }
    return ip();
  }
  quantifier(e = !1) {
    let r;
    const n = this.idx;
    switch (this.popChar()) {
      case "*":
        r = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        r = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        r = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const i = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            r = {
              atLeast: i,
              atMost: i
            };
            break;
          case ",":
            let s;
            this.isDigit() ? (s = this.integerIncludingZero(), r = {
              atLeast: i,
              atMost: s
            }) : r = {
              atLeast: i,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === !0 && r === void 0)
          return;
        at(r);
        break;
    }
    if (!(e === !0 && r === void 0) && at(r))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), r.greedy = !1) : r.greedy = !0, r.type = "Quantifier", r.loc = this.loc(n), r;
  }
  atom() {
    let e;
    const r = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), at(e))
      return e.loc = this.loc(r), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: !0,
      value: [P(`
`), P("\r"), P("\u2028"), P("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, r = !1;
    switch (this.popChar()) {
      case "d":
        e = or;
        break;
      case "D":
        e = or, r = !0;
        break;
      case "s":
        e = Ui;
        break;
      case "S":
        e = Ui, r = !0;
        break;
      case "w":
        e = ar;
        break;
      case "W":
        e = ar, r = !0;
        break;
    }
    if (at(e))
      return { type: "Set", value: e, complement: r };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = P("\f");
        break;
      case "n":
        e = P(`
`);
        break;
      case "r":
        e = P("\r");
        break;
      case "t":
        e = P("	");
        break;
      case "v":
        e = P("\v");
        break;
    }
    if (at(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === !1)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: P("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: P(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: P(e) };
    }
  }
  characterClass() {
    const e = [];
    let r = !1;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), r = !0); this.isClassAtom(); ) {
      const n = this.classAtom();
      if (n.type, xi(n) && this.isRangeDash()) {
        this.consumeChar("-");
        const i = this.classAtom();
        if (i.type, xi(i)) {
          if (i.value < n.value)
            throw Error("Range out of order in character class");
          e.push({ from: n.value, to: i.value });
        } else
          Ur(n.value, e), e.push(P("-")), Ur(i.value, e);
      } else
        Ur(n.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: r, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case "]":
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      // Matches a backspace.
      // (Not to be confused with \b word boundary outside characterClass)
      case "b":
        return this.consumeChar("b"), { type: "Character", value: P("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = !0;
    switch (this.consumeChar("("), this.peekChar(0)) {
      case "?":
        this.consumeChar("?"), this.consumeChar(":"), e = !1;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const r = this.disjunction();
    this.consumeChar(")");
    const n = {
      type: "Group",
      capturing: e,
      value: r
    };
    return e && (n.idx = this.groupIdx), n;
  }
  positiveInteger() {
    let e = this.popChar();
    if (op.test(e) === !1)
      throw Error("Expecting a positive integer");
    for (; jt.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (jt.test(e) === !1)
      throw Error("Expecting an integer");
    for (; jt.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "^":
      // istanbul ignore next
      case "$":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case ".":
      // istanbul ignore next
      case "*":
      // istanbul ignore next
      case "+":
      // istanbul ignore next
      case "?":
      // istanbul ignore next
      case "(":
      // istanbul ignore next
      case ")":
      // istanbul ignore next
      case "[":
      // istanbul ignore next
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: P(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return !0;
      default:
        return !1;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return jt.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return !0;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      // atomEscape
      case "[":
      // characterClass
      // TODO: isAtom must be called before isAssertion - disambiguate
      case "(":
        return !0;
      default:
        return !1;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return !0;
      // '\b' or '\B'
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return !0;
          default:
            return !1;
        }
      // '(?=' or '(?!'
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return !1;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(!0) !== void 0;
    } catch {
      return !1;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  parseHexDigits(e) {
    let r = "";
    for (let n = 0; n < e; n++) {
      const i = this.popChar();
      if (sp.test(i) === !1)
        throw Error("Expecting a HexDecimal digits");
      r += i;
    }
    return { type: "Character", value: parseInt(r, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
}
class Kn {
  visitChildren(e) {
    for (const r in e) {
      const n = e[r];
      e.hasOwnProperty(r) && (n.type !== void 0 ? this.visit(n) : Array.isArray(n) && n.forEach((i) => {
        this.visit(i);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
}
let Qt = {};
const cp = new ap();
function Cr(t) {
  const e = t.toString();
  if (Qt.hasOwnProperty(e))
    return Qt[e];
  {
    const r = cp.pattern(e);
    return Qt[e] = r, r;
  }
}
function up() {
  Qt = {};
}
const lo = "Complement Sets are not supported for first char optimization", cr = `Unable to use "first char" lexer optimizations:
`;
function lp(t, e = !1) {
  try {
    const r = Cr(t);
    return hn(r.value, {}, r.flags.ignoreCase);
  } catch (r) {
    if (r.message === lo)
      e && oo(`${cr}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let n = "";
      e && (n = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), ln(`${cr}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n);
    }
  }
  return [];
}
function hn(t, e, r) {
  switch (t.type) {
    case "Disjunction":
      for (let i = 0; i < t.value.length; i++)
        hn(t.value[i], e, r);
      break;
    case "Alternative":
      const n = t.value;
      for (let i = 0; i < n.length; i++) {
        const s = n[i];
        switch (s.type) {
          case "EndAnchor":
          // A group back reference cannot affect potential starting char.
          // because if a back reference is the first production than automatically
          // the group being referenced has had to come BEFORE so its codes have already been added
          case "GroupBackReference":
          // assertions do not affect potential starting codes
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const o = s;
        switch (o.type) {
          case "Character":
            $t(o.value, e, r);
            break;
          case "Set":
            if (o.complement === !0)
              throw Error(lo);
            N(o.value, (a) => {
              if (typeof a == "number")
                $t(a, e, r);
              else {
                const u = a;
                if (r === !0)
                  for (let l = u.from; l <= u.to; l++)
                    $t(l, e, r);
                else {
                  for (let l = u.from; l <= u.to && l < yt; l++)
                    $t(l, e, r);
                  if (u.to >= yt) {
                    const l = u.from >= yt ? u.from : yt, h = u.to, m = Ye(l), p = Ye(h);
                    for (let d = m; d <= p; d++)
                      e[d] = d;
                  }
                }
              }
            });
            break;
          case "Group":
            hn(o.value, e, r);
            break;
          /* istanbul ignore next */
          default:
            throw Error("Non Exhaustive Match");
        }
        const c = o.quantifier !== void 0 && o.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          o.type === "Group" && fn(o) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
          o.type !== "Group" && c === !1
        )
          break;
      }
      break;
    /* istanbul ignore next */
    default:
      throw Error("non exhaustive match!");
  }
  return re(e);
}
function $t(t, e, r) {
  const n = Ye(t);
  e[n] = n, r === !0 && hp(t, e);
}
function hp(t, e) {
  const r = String.fromCharCode(t), n = r.toUpperCase();
  if (n !== r) {
    const i = Ye(n.charCodeAt(0));
    e[i] = i;
  } else {
    const i = r.toLowerCase();
    if (i !== r) {
      const s = Ye(i.charCodeAt(0));
      e[s] = s;
    }
  }
}
function Di(t, e) {
  return ft(t.value, (r) => {
    if (typeof r == "number")
      return ue(e, r);
    {
      const n = r;
      return ft(e, (i) => n.from <= i && i <= n.to) !== void 0;
    }
  });
}
function fn(t) {
  const e = t.quantifier;
  return e && e.atLeast === 0 ? !0 : t.value ? j(t.value) ? Re(t.value, fn) : fn(t.value) : !1;
}
class fp extends Kn {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = !1;
  }
  visitChildren(e) {
    if (this.found !== !0) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    ue(this.targetCharCodes, e.value) && (this.found = !0);
  }
  visitSet(e) {
    e.complement ? Di(e, this.targetCharCodes) === void 0 && (this.found = !0) : Di(e, this.targetCharCodes) !== void 0 && (this.found = !0);
  }
}
function Hn(t, e) {
  if (e instanceof RegExp) {
    const r = Cr(e), n = new fp(t);
    return n.visit(r), n.found;
  } else
    return ft(e, (r) => ue(t, r.charCodeAt(0))) !== void 0;
}
const tt = "PATTERN", _t = "defaultMode", Gt = "modes";
let ho = typeof new RegExp("(?:)").sticky == "boolean";
function pp(t, e) {
  e = Vn(e, {
    useSticky: ho,
    debug: !1,
    safeMode: !1,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: (E, T) => T()
  });
  const r = e.tracer;
  r("initCharCodeToOptimizedIndexMap", () => {
    Up();
  });
  let n;
  r("Reject Lexer.NA", () => {
    n = Lr(t, (E) => E[tt] === ae.NA);
  });
  let i = !1, s;
  r("Transform Patterns", () => {
    i = !1, s = C(n, (E) => {
      const T = E[tt];
      if (Ge(T)) {
        const f = T.source;
        return f.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        f !== "^" && f !== "$" && f !== "." && !T.ignoreCase ? f : f.length === 2 && f[0] === "\\" && // not a meta character
        !ue([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], f[1]) ? f[1] : e.useSticky ? ji(T) : Fi(T);
      } else {
        if (We(T))
          return i = !0, { exec: T };
        if (typeof T == "object")
          return i = !0, T;
        if (typeof T == "string") {
          if (T.length === 1)
            return T;
          {
            const f = T.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), v = new RegExp(f);
            return e.useSticky ? ji(v) : Fi(v);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let o, c, a, u, l;
  r("misc mapping", () => {
    o = C(n, (E) => E.tokenTypeIdx), c = C(n, (E) => {
      const T = E.GROUP;
      if (T !== ae.SKIPPED) {
        if (he(T))
          return T;
        if (Be(T))
          return !1;
        throw Error("non exhaustive match");
      }
    }), a = C(n, (E) => {
      const T = E.LONGER_ALT;
      if (T)
        return j(T) ? C(T, (f) => Ni(n, f)) : [Ni(n, T)];
    }), u = C(n, (E) => E.PUSH_MODE), l = C(n, (E) => M(E, "POP_MODE"));
  });
  let h;
  r("Line Terminator Handling", () => {
    const E = mo(e.lineTerminatorCharacters);
    h = C(n, (T) => !1), e.positionTracking !== "onlyOffset" && (h = C(n, (T) => M(T, "LINE_BREAKS") ? !!T.LINE_BREAKS : po(T, E) === !1 && Hn(E, T.PATTERN)));
  });
  let m, p, d, g;
  r("Misc Mapping #2", () => {
    m = C(n, fo), p = C(s, Pp), d = me(n, (E, T) => {
      const f = T.GROUP;
      return he(f) && f !== ae.SKIPPED && (E[f] = []), E;
    }, {}), g = C(s, (E, T) => ({
      pattern: s[T],
      longerAlt: a[T],
      canLineTerminator: h[T],
      isCustom: m[T],
      short: p[T],
      group: c[T],
      push: u[T],
      pop: l[T],
      tokenTypeIdx: o[T],
      tokenType: n[T]
    }));
  });
  let _ = !0, y = [];
  return e.safeMode || r("First Char Optimization", () => {
    y = me(n, (E, T, f) => {
      if (typeof T.PATTERN == "string") {
        const v = T.PATTERN.charCodeAt(0), R = Ye(v);
        Dr(E, R, g[f]);
      } else if (j(T.START_CHARS_HINT)) {
        let v;
        N(T.START_CHARS_HINT, (R) => {
          const S = typeof R == "string" ? R.charCodeAt(0) : R, D = Ye(S);
          v !== D && (v = D, Dr(E, D, g[f]));
        });
      } else if (Ge(T.PATTERN))
        if (T.PATTERN.unicode)
          _ = !1, e.ensureOptimizations && ln(`${cr}	Unable to analyze < ${T.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const v = lp(T.PATTERN, e.ensureOptimizations);
          K(v) && (_ = !1), N(v, (R) => {
            Dr(E, R, g[f]);
          });
        }
      else
        e.ensureOptimizations && ln(`${cr}	TokenType: <${T.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), _ = !1;
      return E;
    }, []);
  }), {
    emptyGroups: d,
    patternIdxToConfig: g,
    charCodeToPatternIdxToConfig: y,
    hasCustom: i,
    canBeOptimized: _
  };
}
function dp(t, e) {
  let r = [];
  const n = gp(t);
  r = r.concat(n.errors);
  const i = vp(n.valid), s = i.valid;
  return r = r.concat(i.errors), r = r.concat(mp(s)), r = r.concat(Op(s)), r = r.concat(Lp(s, e)), r = r.concat(Ip(s)), r;
}
function mp(t) {
  let e = [];
  const r = Ae(t, (n) => Ge(n[tt]));
  return e = e.concat(Tp(r)), e = e.concat(Ap(r)), e = e.concat(Sp(r)), e = e.concat(Rp(r)), e = e.concat(_p(r)), e;
}
function gp(t) {
  const e = Ae(t, (i) => !M(i, tt)), r = C(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- missing static 'PATTERN' property",
    type: J.MISSING_PATTERN,
    tokenTypes: [i]
  })), n = Or(t, e);
  return { errors: r, valid: n };
}
function vp(t) {
  const e = Ae(t, (i) => {
    const s = i[tt];
    return !Ge(s) && !We(s) && !M(s, "exec") && !he(s);
  }), r = C(e, (i) => ({
    message: "Token Type: ->" + i.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: J.INVALID_PATTERN,
    tokenTypes: [i]
  })), n = Or(t, e);
  return { errors: r, valid: n };
}
const Ep = /[^\\][$]/;
function Tp(t) {
  class e extends Kn {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitEndAnchor(i) {
      this.found = !0;
    }
  }
  const r = Ae(t, (n) => {
    const i = n.PATTERN;
    try {
      const s = Cr(i), o = new e();
      return o.visit(s), o.found;
    } catch {
      return Ep.test(i.source);
    }
  });
  return C(r, (n) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + n.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: J.EOI_ANCHOR_FOUND,
    tokenTypes: [n]
  }));
}
function _p(t) {
  const e = Ae(t, (r) => r.PATTERN.test(""));
  return C(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' must not match an empty string",
    type: J.EMPTY_MATCH_PATTERN,
    tokenTypes: [r]
  }));
}
const yp = /[^\\[][\^]|^\^/;
function Ap(t) {
  class e extends Kn {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitStartAnchor(i) {
      this.found = !0;
    }
  }
  const r = Ae(t, (n) => {
    const i = n.PATTERN;
    try {
      const s = Cr(i), o = new e();
      return o.visit(s), o.found;
    } catch {
      return yp.test(i.source);
    }
  });
  return C(r, (n) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + n.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: J.SOI_ANCHOR_FOUND,
    tokenTypes: [n]
  }));
}
function Sp(t) {
  const e = Ae(t, (r) => {
    const n = r[tt];
    return n instanceof RegExp && (n.multiline || n.global);
  });
  return C(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: J.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [r]
  }));
}
function Rp(t) {
  const e = [];
  let r = C(t, (i) => me(t, (s, o) => (i.PATTERN.source === o.PATTERN.source && !ue(e, o) && o.PATTERN !== ae.NA && (e.push(o), s.push(o)), s), []));
  r = Nt(r);
  const n = Ae(r, (i) => i.length > 1);
  return C(n, (i) => {
    const s = C(i, (o) => o.name);
    return {
      message: `The same RegExp pattern ->${Le(i).PATTERN}<-has been used in all of the following Token Types: ${s.join(", ")} <-`,
      type: J.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: i
    };
  });
}
function Op(t) {
  const e = Ae(t, (r) => {
    if (!M(r, "GROUP"))
      return !1;
    const n = r.GROUP;
    return n !== ae.SKIPPED && n !== ae.NA && !he(n);
  });
  return C(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: J.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [r]
  }));
}
function Lp(t, e) {
  const r = Ae(t, (n) => n.PUSH_MODE !== void 0 && !ue(e, n.PUSH_MODE));
  return C(r, (n) => ({
    message: `Token Type: ->${n.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${n.PUSH_MODE}<-which does not exist`,
    type: J.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [n]
  }));
}
function Ip(t) {
  const e = [], r = me(t, (n, i, s) => {
    const o = i.PATTERN;
    return o === ae.NA || (he(o) ? n.push({ str: o, idx: s, tokenType: i }) : Ge(o) && Mp(o) && n.push({ str: o.source, idx: s, tokenType: i })), n;
  }, []);
  return N(t, (n, i) => {
    N(r, ({ str: s, idx: o, tokenType: c }) => {
      if (i < o && Cp(s, n.PATTERN)) {
        const a = `Token: ->${c.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: a,
          type: J.UNREACHABLE_PATTERN,
          tokenTypes: [n, c]
        });
      }
    });
  }), e;
}
function Cp(t, e) {
  if (Ge(e)) {
    const r = e.exec(t);
    return r !== null && r.index === 0;
  } else {
    if (We(e))
      return e(t, 0, [], {});
    if (M(e, "exec"))
      return e.exec(t, 0, [], {});
    if (typeof e == "string")
      return e === t;
    throw Error("non exhaustive match");
  }
}
function Mp(t) {
  return ft([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (e) => t.source.indexOf(e) !== -1) === void 0;
}
function Fi(t) {
  const e = t.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${t.source})`, e);
}
function ji(t) {
  const e = t.ignoreCase ? "iy" : "y";
  return new RegExp(`${t.source}`, e);
}
function bp(t, e, r) {
  const n = [];
  return M(t, _t) || n.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + _t + `> property in its definition
`,
    type: J.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), M(t, Gt) || n.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Gt + `> property in its definition
`,
    type: J.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), M(t, Gt) && M(t, _t) && !M(t.modes, t.defaultMode) && n.push({
    message: `A MultiMode Lexer cannot be initialized with a ${_t}: <${t.defaultMode}>which does not exist
`,
    type: J.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), M(t, Gt) && N(t.modes, (i, s) => {
    N(i, (o, c) => {
      if (Be(o))
        n.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${c}>
`,
          type: J.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (M(o, "LONGER_ALT")) {
        const a = j(o.LONGER_ALT) ? o.LONGER_ALT : [o.LONGER_ALT];
        N(a, (u) => {
          !Be(u) && !ue(i, u) && n.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${o.name}> outside of mode <${s}>
`,
            type: J.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), n;
}
function kp(t, e, r) {
  const n = [];
  let i = !1;
  const s = Nt(Se(re(t.modes))), o = Lr(s, (a) => a[tt] === ae.NA), c = mo(r);
  return e && N(o, (a) => {
    const u = po(a, c);
    if (u !== !1) {
      const l = {
        message: xp(a, u),
        type: u.issue,
        tokenType: a
      };
      n.push(l);
    } else
      M(a, "LINE_BREAKS") ? a.LINE_BREAKS === !0 && (i = !0) : Hn(c, a.PATTERN) && (i = !0);
  }), e && !i && n.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: J.NO_LINE_BREAKS_FLAGS
  }), n;
}
function Np(t) {
  const e = {}, r = ye(t);
  return N(r, (n) => {
    const i = t[n];
    if (j(i))
      e[n] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function fo(t) {
  const e = t.PATTERN;
  if (Ge(e))
    return !1;
  if (We(e) || M(e, "exec"))
    return !0;
  if (he(e))
    return !1;
  throw Error("non exhaustive match");
}
function Pp(t) {
  return he(t) && t.length === 1 ? t.charCodeAt(0) : !1;
}
const wp = {
  // implements /\n|\r\n?/g.test
  test: function(t) {
    const e = t.length;
    for (let r = this.lastIndex; r < e; r++) {
      const n = t.charCodeAt(r);
      if (n === 10)
        return this.lastIndex = r + 1, !0;
      if (n === 13)
        return t.charCodeAt(r + 1) === 10 ? this.lastIndex = r + 2 : this.lastIndex = r + 1, !0;
    }
    return !1;
  },
  lastIndex: 0
};
function po(t, e) {
  if (M(t, "LINE_BREAKS"))
    return !1;
  if (Ge(t.PATTERN)) {
    try {
      Hn(e, t.PATTERN);
    } catch (r) {
      return {
        issue: J.IDENTIFY_TERMINATOR,
        errMsg: r.message
      };
    }
    return !1;
  } else {
    if (he(t.PATTERN))
      return !1;
    if (fo(t))
      return { issue: J.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function xp(t, e) {
  if (e.issue === J.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === J.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function mo(t) {
  return C(t, (e) => he(e) ? e.charCodeAt(0) : e);
}
function Dr(t, e, r) {
  t[e] === void 0 ? t[e] = [r] : t[e].push(r);
}
const yt = 256;
let Jt = [];
function Ye(t) {
  return t < yt ? t : Jt[t];
}
function Up() {
  if (K(Jt)) {
    Jt = new Array(65536);
    for (let t = 0; t < 65536; t++)
      Jt[t] = t > 255 ? 255 + ~~(t / 255) : t;
  }
}
function wt(t, e) {
  const r = t.tokenTypeIdx;
  return r === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[r] === !0;
}
function ur(t, e) {
  return t.tokenTypeIdx === e.tokenTypeIdx;
}
let $i = 1;
const go = {};
function xt(t) {
  const e = Dp(t);
  Fp(e), $p(e), jp(e), N(e, (r) => {
    r.isParent = r.categoryMatches.length > 0;
  });
}
function Dp(t) {
  let e = oe(t), r = t, n = !0;
  for (; n; ) {
    r = Nt(Se(C(r, (s) => s.CATEGORIES)));
    const i = Or(r, e);
    e = e.concat(i), K(i) ? n = !1 : r = i;
  }
  return e;
}
function Fp(t) {
  N(t, (e) => {
    Eo(e) || (go[$i] = e, e.tokenTypeIdx = $i++), Gi(e) && !j(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), Gi(e) || (e.CATEGORIES = []), Gp(e) || (e.categoryMatches = []), Bp(e) || (e.categoryMatchesMap = {});
  });
}
function jp(t) {
  N(t, (e) => {
    e.categoryMatches = [], N(e.categoryMatchesMap, (r, n) => {
      e.categoryMatches.push(go[n].tokenTypeIdx);
    });
  });
}
function $p(t) {
  N(t, (e) => {
    vo([], e);
  });
}
function vo(t, e) {
  N(t, (r) => {
    e.categoryMatchesMap[r.tokenTypeIdx] = !0;
  }), N(e.CATEGORIES, (r) => {
    const n = t.concat(e);
    ue(n, r) || vo(n, r);
  });
}
function Eo(t) {
  return M(t, "tokenTypeIdx");
}
function Gi(t) {
  return M(t, "CATEGORIES");
}
function Gp(t) {
  return M(t, "categoryMatches");
}
function Bp(t) {
  return M(t, "categoryMatchesMap");
}
function Vp(t) {
  return M(t, "tokenTypeIdx");
}
const Wp = {
  buildUnableToPopLexerModeMessage(t) {
    return `Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(t, e, r, n, i) {
    return `unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`;
  }
};
var J;
(function(t) {
  t[t.MISSING_PATTERN = 0] = "MISSING_PATTERN", t[t.INVALID_PATTERN = 1] = "INVALID_PATTERN", t[t.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", t[t.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", t[t.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", t[t.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", t[t.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", t[t.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", t[t.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", t[t.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", t[t.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", t[t.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", t[t.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(J || (J = {}));
const At = {
  deferDefinitionErrorsHandling: !1,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: !1,
  safeMode: !1,
  errorMessageProvider: Wp,
  traceInitPerf: !1,
  skipValidations: !1,
  recoveryEnabled: !0
};
Object.freeze(At);
class ae {
  constructor(e, r = At) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (i, s) => {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        const o = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${o}--> <${i}>`);
        const { time: c, value: a } = ao(s), u = c > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${o}<-- <${i}> time: ${c}ms`), this.traceInitIndent--, a;
      } else
        return s();
    }, typeof r == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = de({}, At, r);
    const n = this.config.traceInitPerf;
    n === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof n == "number" && (this.traceInitMaxIdent = n, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let i, s = !0;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === At.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = wp;
        else if (this.config.lineTerminatorCharacters === At.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (r.safeMode && r.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), j(e) ? i = {
          modes: { defaultMode: oe(e) },
          defaultMode: _t
        } : (s = !1, i = oe(e));
      }), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(bp(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(kp(i, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), i.modes = i.modes ? i.modes : {}, N(i.modes, (c, a) => {
        i.modes[a] = Lr(c, (u) => Be(u));
      });
      const o = ye(i.modes);
      if (N(i.modes, (c, a) => {
        this.TRACE_INIT(`Mode: <${a}> processing`, () => {
          if (this.modes.push(a), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(dp(c, o));
          }), K(this.lexerDefinitionErrors)) {
            xt(c);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = pp(c, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: r.positionTracking,
                ensureOptimizations: r.ensureOptimizations,
                safeMode: r.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[a] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[a] = u.charCodeToPatternIdxToConfig, this.emptyGroups = de({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[a] = u.canBeOptimized;
          }
        });
      }), this.defaultMode = i.defaultMode, !K(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const c = C(this.lexerDefinitionErrors, (a) => a.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + c);
      }
      N(this.lexerDefinitionWarning, (c) => {
        oo(c.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (ho ? (this.chopInput = ut, this.match = this.matchWithTest) : (this.updateLastIndex = te, this.match = this.matchWithExec), s && (this.handleModes = te), this.trackStartLines === !1 && (this.computeNewColumn = ut), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = te), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const c = me(this.canModeBeOptimized, (a, u, l) => (u === !1 && a.push(l), a), []);
        if (r.ensureOptimizations && !K(c))
          throw Error(`Lexer Modes: < ${c.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        up();
      }), this.TRACE_INIT("toFastProperties", () => {
        co(this);
      });
    });
  }
  tokenize(e, r = this.defaultMode) {
    if (!K(this.lexerDefinitionErrors)) {
      const n = C(this.lexerDefinitionErrors, (i) => i.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + n);
    }
    return this.tokenizeInternal(e, r);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, r) {
    let n, i, s, o, c, a, u, l, h, m, p, d, g, _, y;
    const E = e, T = E.length;
    let f = 0, v = 0;
    const R = this.hasCustom ? 0 : Math.floor(e.length / 10), S = new Array(R), D = [];
    let Z = this.trackStartLines ? 1 : void 0, F = this.trackStartLines ? 1 : void 0;
    const I = Np(this.emptyGroups), w = this.trackStartLines, x = this.config.lineTerminatorsPattern;
    let k = 0, O = [], $ = [];
    const U = [], G = [];
    Object.freeze(G);
    let q;
    function H() {
      return O;
    }
    function ee(V) {
      const ie = Ye(V), ot = $[ie];
      return ot === void 0 ? G : ot;
    }
    const L = (V) => {
      if (U.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      V.tokenType.PUSH_MODE === void 0) {
        const ie = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(V);
        D.push({
          offset: V.startOffset,
          line: V.startLine,
          column: V.startColumn,
          length: V.image.length,
          message: ie
        });
      } else {
        U.pop();
        const ie = ht(U);
        O = this.patternIdxToConfig[ie], $ = this.charCodeToPatternIdxToConfig[ie], k = O.length;
        const ot = this.canModeBeOptimized[ie] && this.config.safeMode === !1;
        $ && ot ? q = ee : q = H;
      }
    };
    function A(V) {
      U.push(V), $ = this.charCodeToPatternIdxToConfig[V], O = this.patternIdxToConfig[V], k = O.length, k = O.length;
      const ie = this.canModeBeOptimized[V] && this.config.safeMode === !1;
      $ && ie ? q = ee : q = H;
    }
    A.call(this, r);
    let b;
    const Y = this.config.recoveryEnabled;
    for (; f < T; ) {
      a = null;
      const V = E.charCodeAt(f), ie = q(V), ot = ie.length;
      for (n = 0; n < ot; n++) {
        b = ie[n];
        const pe = b.pattern;
        u = null;
        const Fe = b.short;
        if (Fe !== !1 ? V === Fe && (a = pe) : b.isCustom === !0 ? (y = pe.exec(E, f, S, I), y !== null ? (a = y[0], y.payload !== void 0 && (u = y.payload)) : a = null) : (this.updateLastIndex(pe, f), a = this.match(pe, e, f)), a !== null) {
          if (c = b.longerAlt, c !== void 0) {
            const ze = c.length;
            for (s = 0; s < ze; s++) {
              const je = O[c[s]], Je = je.pattern;
              if (l = null, je.isCustom === !0 ? (y = Je.exec(E, f, S, I), y !== null ? (o = y[0], y.payload !== void 0 && (l = y.payload)) : o = null) : (this.updateLastIndex(Je, f), o = this.match(Je, e, f)), o && o.length > a.length) {
                a = o, u = l, b = je;
                break;
              }
            }
          }
          break;
        }
      }
      if (a !== null) {
        if (h = a.length, m = b.group, m !== void 0 && (p = b.tokenTypeIdx, d = this.createTokenInstance(a, f, p, b.tokenType, Z, F, h), this.handlePayload(d, u), m === !1 ? v = this.addToken(S, v, d) : I[m].push(d)), e = this.chopInput(e, h), f = f + h, F = this.computeNewColumn(F, h), w === !0 && b.canLineTerminator === !0) {
          let pe = 0, Fe, ze;
          x.lastIndex = 0;
          do
            Fe = x.test(a), Fe === !0 && (ze = x.lastIndex - 1, pe++);
          while (Fe === !0);
          pe !== 0 && (Z = Z + pe, F = h - ze, this.updateTokenEndLineColumnLocation(d, m, ze, pe, Z, F, h));
        }
        this.handleModes(b, L, A, d);
      } else {
        const pe = f, Fe = Z, ze = F;
        let je = Y === !1;
        for (; je === !1 && f < T; )
          for (e = this.chopInput(e, 1), f++, i = 0; i < k; i++) {
            const Je = O[i], Nr = Je.pattern, Zn = Je.short;
            if (Zn !== !1 ? E.charCodeAt(f) === Zn && (je = !0) : Je.isCustom === !0 ? je = Nr.exec(E, f, S, I) !== null : (this.updateLastIndex(Nr, f), je = Nr.exec(e) !== null), je === !0)
              break;
          }
        if (g = f - pe, F = this.computeNewColumn(F, g), _ = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(E, pe, g, Fe, ze), D.push({
          offset: pe,
          line: Fe,
          column: ze,
          length: g,
          message: _
        }), Y === !1)
          break;
      }
    }
    return this.hasCustom || (S.length = v), {
      tokens: S,
      groups: I,
      errors: D
    };
  }
  handleModes(e, r, n, i) {
    if (e.pop === !0) {
      const s = e.push;
      r(i), s !== void 0 && n.call(this, s);
    } else e.push !== void 0 && n.call(this, e.push);
  }
  chopInput(e, r) {
    return e.substring(r);
  }
  updateLastIndex(e, r) {
    e.lastIndex = r;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, r, n, i, s, o, c) {
    let a, u;
    r !== void 0 && (a = n === c - 1, u = a ? -1 : 0, i === 1 && a === !0 || (e.endLine = s + u, e.endColumn = o - 1 + -u));
  }
  computeNewColumn(e, r) {
    return e + r;
  }
  createOffsetOnlyToken(e, r, n, i) {
    return {
      image: e,
      startOffset: r,
      tokenTypeIdx: n,
      tokenType: i
    };
  }
  createStartOnlyToken(e, r, n, i, s, o) {
    return {
      image: e,
      startOffset: r,
      startLine: s,
      startColumn: o,
      tokenTypeIdx: n,
      tokenType: i
    };
  }
  createFullToken(e, r, n, i, s, o, c) {
    return {
      image: e,
      startOffset: r,
      endOffset: r + c - 1,
      startLine: s,
      endLine: s,
      startColumn: o,
      endColumn: o + c - 1,
      tokenTypeIdx: n,
      tokenType: i
    };
  }
  addTokenUsingPush(e, r, n) {
    return e.push(n), r;
  }
  addTokenUsingMemberAccess(e, r, n) {
    return e[r] = n, r++, r;
  }
  handlePayloadNoCustom(e, r) {
  }
  handlePayloadWithCustom(e, r) {
    r !== null && (e.payload = r);
  }
  matchWithTest(e, r, n) {
    return e.test(r) === !0 ? r.substring(n, e.lastIndex) : null;
  }
  matchWithExec(e, r) {
    const n = e.exec(r);
    return n !== null ? n[0] : null;
  }
}
ae.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
ae.NA = /NOT_APPLICABLE/;
function Rt(t) {
  return To(t) ? t.LABEL : t.name;
}
function To(t) {
  return he(t.LABEL) && t.LABEL !== "";
}
const Kp = "parent", Bi = "categories", Vi = "label", Wi = "group", Ki = "push_mode", Hi = "pop_mode", zi = "longer_alt", qi = "line_breaks", Yi = "start_chars_hint";
function B(t) {
  return Hp(t);
}
function Hp(t) {
  const e = t.pattern, r = {};
  if (r.name = t.name, Be(e) || (r.PATTERN = e), M(t, Kp))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return M(t, Bi) && (r.CATEGORIES = t[Bi]), xt([r]), M(t, Vi) && (r.LABEL = t[Vi]), M(t, Wi) && (r.GROUP = t[Wi]), M(t, Hi) && (r.POP_MODE = t[Hi]), M(t, Ki) && (r.PUSH_MODE = t[Ki]), M(t, zi) && (r.LONGER_ALT = t[zi]), M(t, qi) && (r.LINE_BREAKS = t[qi]), M(t, Yi) && (r.START_CHARS_HINT = t[Yi]), r;
}
const rt = B({ name: "EOF", pattern: ae.NA });
xt([rt]);
function zn(t, e, r, n, i, s, o, c) {
  return {
    image: e,
    startOffset: r,
    endOffset: n,
    startLine: i,
    endLine: s,
    startColumn: o,
    endColumn: c,
    tokenTypeIdx: t.tokenTypeIdx,
    tokenType: t
  };
}
function zp(t, e) {
  return wt(t, e);
}
const _o = {
  buildMismatchTokenMessage({ expected: t, actual: e, previous: r, ruleName: n }) {
    return `Expecting ${To(t) ? `--> ${Rt(t)} <--` : `token of type --> ${t.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: t, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + t.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: t, actual: e, previous: r, customUserDescription: n, ruleName: i }) {
    const s = "Expecting: ", o = `
but found: '` + Le(e).image + "'";
    if (n)
      return s + n + o;
    {
      const c = me(t, (l, h) => l.concat(h), []), a = C(c, (l) => `[${C(l, (h) => Rt(h)).join(", ")}]`), u = `one of these possible Token sequences:
${C(a, (l, h) => `  ${h + 1}. ${l}`).join(`
`)}`;
      return s + u + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: t, actual: e, customUserDescription: r, ruleName: n }) {
    const i = "Expecting: ", s = `
but found: '` + Le(e).image + "'";
    if (r)
      return i + r + s;
    {
      const o = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${C(t, (c) => `[${C(c, (a) => Rt(a)).join(",")}]`).join(" ,")}>`;
      return i + o + s;
    }
  }
};
Object.freeze(_o);
const qp = {
  buildRuleNotFoundError(t, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + t.name + "<-";
  }
}, Ze = {
  buildDuplicateFoundError(t, e) {
    function r(l) {
      return l instanceof X ? l.terminalType.name : l instanceof ge ? l.nonTerminalName : "";
    }
    const n = t.name, i = Le(e), s = i.idx, o = be(i), c = r(i), a = s > 0;
    let u = `->${o}${a ? s : ""}<- ${c ? `with argument: ->${c}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return u = u.replace(/[ \t]+/g, " "), u = u.replace(/\s\s+/g, `
`), u;
  },
  buildNamespaceConflictError(t) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(t) {
    const e = C(t.prefixPath, (n) => Rt(n)).join(", "), r = t.alternation.idx === 0 ? "" : t.alternation.idx;
    return `Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(t) {
    const e = C(t.prefixPath, (i) => Rt(i)).join(", "), r = t.alternation.idx === 0 ? "" : t.alternation.idx;
    let n = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return n = n + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n;
  },
  buildEmptyRepetitionError(t) {
    let e = be(t.repetition);
    return t.repetition.idx !== 0 && (e += t.repetition.idx), `The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(t) {
    return "deprecated";
  },
  buildEmptyAlternationError(t) {
    return `Ambiguous empty alternative: <${t.emptyChoiceIdx + 1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(t) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(t) {
    const e = t.topLevelRule.name, r = C(t.leftRecursionPath, (i) => i.name), n = `${e} --> ${r.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(t) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(t) {
    let e;
    return t.topLevelRule instanceof pt ? e = t.topLevelRule.name : e = t.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`;
  }
};
function Yp(t, e) {
  const r = new Xp(t, e);
  return r.resolveRefs(), r.errors;
}
class Xp extends dt {
  constructor(e, r) {
    super(), this.nameToTopRule = e, this.errMsgProvider = r, this.errors = [];
  }
  resolveRefs() {
    N(re(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const r = this.nameToTopRule[e.nonTerminalName];
    if (r)
      e.referencedRule = r;
    else {
      const n = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: n,
        type: ce.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}
class Qp extends Ir {
  constructor(e, r) {
    super(), this.topProd = e, this.path = r, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
  }
  startWalking() {
    if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = oe(this.path.ruleStack).reverse(), this.occurrenceStack = oe(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, r = []) {
    this.found || super.walk(e, r);
  }
  walkProdRef(e, r, n) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const i = r.concat(n);
      this.updateExpectedNext(), this.walk(e.referencedRule, i);
    }
  }
  updateExpectedNext() {
    K(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}
class Jp extends Qp {
  constructor(e, r) {
    super(e, r), this.path = r, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, r, n) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const i = r.concat(n), s = new fe({ definition: i });
      this.possibleTokTypes = Pt(s), this.found = !0;
    }
  }
}
class Mr extends Ir {
  constructor(e, r) {
    super(), this.topRule = e, this.occurrence = r, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}
class Zp extends Mr {
  walkMany(e, r, n) {
    if (e.idx === this.occurrence) {
      const i = Le(r.concat(n));
      this.result.isEndOfRule = i === void 0, i instanceof X && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkMany(e, r, n);
  }
}
class Xi extends Mr {
  walkManySep(e, r, n) {
    if (e.idx === this.occurrence) {
      const i = Le(r.concat(n));
      this.result.isEndOfRule = i === void 0, i instanceof X && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkManySep(e, r, n);
  }
}
class ed extends Mr {
  walkAtLeastOne(e, r, n) {
    if (e.idx === this.occurrence) {
      const i = Le(r.concat(n));
      this.result.isEndOfRule = i === void 0, i instanceof X && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOne(e, r, n);
  }
}
class Qi extends Mr {
  walkAtLeastOneSep(e, r, n) {
    if (e.idx === this.occurrence) {
      const i = Le(r.concat(n));
      this.result.isEndOfRule = i === void 0, i instanceof X && (this.result.token = i.terminalType, this.result.occurrence = i.idx);
    } else
      super.walkAtLeastOneSep(e, r, n);
  }
}
function pn(t, e, r = []) {
  r = oe(r);
  let n = [], i = 0;
  function s(c) {
    return c.concat(se(t, i + 1));
  }
  function o(c) {
    const a = pn(s(c), e, r);
    return n.concat(a);
  }
  for (; r.length < e && i < t.length; ) {
    const c = t[i];
    if (c instanceof fe || c instanceof ge)
      return o(c.definition);
    if (c instanceof le)
      n = o(c.definition);
    else if (c instanceof Ue) {
      const a = c.definition.concat([
        new ne({
          definition: c.definition
        })
      ]);
      return o(a);
    } else if (c instanceof De) {
      const a = [
        new fe({ definition: c.definition }),
        new ne({
          definition: [new X({ terminalType: c.separator })].concat(c.definition)
        })
      ];
      return o(a);
    } else if (c instanceof Ce) {
      const a = c.definition.concat([
        new ne({
          definition: [new X({ terminalType: c.separator })].concat(c.definition)
        })
      ]);
      n = o(a);
    } else if (c instanceof ne) {
      const a = c.definition.concat([
        new ne({
          definition: c.definition
        })
      ]);
      n = o(a);
    } else {
      if (c instanceof Me)
        return N(c.definition, (a) => {
          K(a.definition) === !1 && (n = o(a.definition));
        }), n;
      if (c instanceof X)
        r.push(c.terminalType);
      else
        throw Error("non exhaustive match");
    }
    i++;
  }
  return n.push({
    partialPath: r,
    suffixDef: se(t, i)
  }), n;
}
function yo(t, e, r, n) {
  const i = "EXIT_NONE_TERMINAL", s = [i], o = "EXIT_ALTERNATIVE";
  let c = !1;
  const a = e.length, u = a - n - 1, l = [], h = [];
  for (h.push({
    idx: -1,
    def: t,
    ruleStack: [],
    occurrenceStack: []
  }); !K(h); ) {
    const m = h.pop();
    if (m === o) {
      c && ht(h).idx <= u && h.pop();
      continue;
    }
    const p = m.def, d = m.idx, g = m.ruleStack, _ = m.occurrenceStack;
    if (K(p))
      continue;
    const y = p[0];
    if (y === i) {
      const E = {
        idx: d,
        def: se(p),
        ruleStack: Ct(g),
        occurrenceStack: Ct(_)
      };
      h.push(E);
    } else if (y instanceof X)
      if (d < a - 1) {
        const E = d + 1, T = e[E];
        if (r(T, y.terminalType)) {
          const f = {
            idx: E,
            def: se(p),
            ruleStack: g,
            occurrenceStack: _
          };
          h.push(f);
        }
      } else if (d === a - 1)
        l.push({
          nextTokenType: y.terminalType,
          nextTokenOccurrence: y.idx,
          ruleStack: g,
          occurrenceStack: _
        }), c = !0;
      else
        throw Error("non exhaustive match");
    else if (y instanceof ge) {
      const E = oe(g);
      E.push(y.nonTerminalName);
      const T = oe(_);
      T.push(y.idx);
      const f = {
        idx: d,
        def: y.definition.concat(s, se(p)),
        ruleStack: E,
        occurrenceStack: T
      };
      h.push(f);
    } else if (y instanceof le) {
      const E = {
        idx: d,
        def: se(p),
        ruleStack: g,
        occurrenceStack: _
      };
      h.push(E), h.push(o);
      const T = {
        idx: d,
        def: y.definition.concat(se(p)),
        ruleStack: g,
        occurrenceStack: _
      };
      h.push(T);
    } else if (y instanceof Ue) {
      const E = new ne({
        definition: y.definition,
        idx: y.idx
      }), T = y.definition.concat([E], se(p)), f = {
        idx: d,
        def: T,
        ruleStack: g,
        occurrenceStack: _
      };
      h.push(f);
    } else if (y instanceof De) {
      const E = new X({
        terminalType: y.separator
      }), T = new ne({
        definition: [E].concat(y.definition),
        idx: y.idx
      }), f = y.definition.concat([T], se(p)), v = {
        idx: d,
        def: f,
        ruleStack: g,
        occurrenceStack: _
      };
      h.push(v);
    } else if (y instanceof Ce) {
      const E = {
        idx: d,
        def: se(p),
        ruleStack: g,
        occurrenceStack: _
      };
      h.push(E), h.push(o);
      const T = new X({
        terminalType: y.separator
      }), f = new ne({
        definition: [T].concat(y.definition),
        idx: y.idx
      }), v = y.definition.concat([f], se(p)), R = {
        idx: d,
        def: v,
        ruleStack: g,
        occurrenceStack: _
      };
      h.push(R);
    } else if (y instanceof ne) {
      const E = {
        idx: d,
        def: se(p),
        ruleStack: g,
        occurrenceStack: _
      };
      h.push(E), h.push(o);
      const T = new ne({
        definition: y.definition,
        idx: y.idx
      }), f = y.definition.concat([T], se(p)), v = {
        idx: d,
        def: f,
        ruleStack: g,
        occurrenceStack: _
      };
      h.push(v);
    } else if (y instanceof Me)
      for (let E = y.definition.length - 1; E >= 0; E--) {
        const T = y.definition[E], f = {
          idx: d,
          def: T.definition.concat(se(p)),
          ruleStack: g,
          occurrenceStack: _
        };
        h.push(f), h.push(o);
      }
    else if (y instanceof fe)
      h.push({
        idx: d,
        def: y.definition.concat(se(p)),
        ruleStack: g,
        occurrenceStack: _
      });
    else if (y instanceof pt)
      h.push(td(y, d, g, _));
    else
      throw Error("non exhaustive match");
  }
  return l;
}
function td(t, e, r, n) {
  const i = oe(r);
  i.push(t.name);
  const s = oe(n);
  return s.push(1), {
    idx: e,
    def: t.definition,
    ruleStack: i,
    occurrenceStack: s
  };
}
var Q;
(function(t) {
  t[t.OPTION = 0] = "OPTION", t[t.REPETITION = 1] = "REPETITION", t[t.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", t[t.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", t[t.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", t[t.ALTERNATION = 5] = "ALTERNATION";
})(Q || (Q = {}));
function Ao(t) {
  if (t instanceof le || t === "Option")
    return Q.OPTION;
  if (t instanceof ne || t === "Repetition")
    return Q.REPETITION;
  if (t instanceof Ue || t === "RepetitionMandatory")
    return Q.REPETITION_MANDATORY;
  if (t instanceof De || t === "RepetitionMandatoryWithSeparator")
    return Q.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (t instanceof Ce || t === "RepetitionWithSeparator")
    return Q.REPETITION_WITH_SEPARATOR;
  if (t instanceof Me || t === "Alternation")
    return Q.ALTERNATION;
  throw Error("non exhaustive match");
}
function rd(t, e, r, n, i, s) {
  const o = qn(t, e, r), c = Oo(o) ? ur : wt;
  return s(o, n, c, i);
}
function nd(t, e, r, n, i, s) {
  const o = Yn(t, e, i, r), c = Oo(o) ? ur : wt;
  return s(o[0], c, n);
}
function id(t, e, r, n) {
  const i = t.length, s = Re(t, (o) => Re(o, (c) => c.length === 1));
  if (e)
    return function(o) {
      const c = C(o, (a) => a.GATE);
      for (let a = 0; a < i; a++) {
        const u = t[a], l = u.length, h = c[a];
        if (!(h !== void 0 && h.call(this) === !1))
          e: for (let m = 0; m < l; m++) {
            const p = u[m], d = p.length;
            for (let g = 0; g < d; g++) {
              const _ = this.LA(g + 1);
              if (r(_, p[g]) === !1)
                continue e;
            }
            return a;
          }
      }
    };
  if (s && !n) {
    const o = C(t, (a) => Se(a)), c = me(o, (a, u, l) => (N(u, (h) => {
      M(a, h.tokenTypeIdx) || (a[h.tokenTypeIdx] = l), N(h.categoryMatches, (m) => {
        M(a, m) || (a[m] = l);
      });
    }), a), {});
    return function() {
      const a = this.LA(1);
      return c[a.tokenTypeIdx];
    };
  } else
    return function() {
      for (let o = 0; o < i; o++) {
        const c = t[o], a = c.length;
        e: for (let u = 0; u < a; u++) {
          const l = c[u], h = l.length;
          for (let m = 0; m < h; m++) {
            const p = this.LA(m + 1);
            if (r(p, l[m]) === !1)
              continue e;
          }
          return o;
        }
      }
    };
}
function sd(t, e, r) {
  const n = Re(t, (s) => s.length === 1), i = t.length;
  if (n && !r) {
    const s = Se(t);
    if (s.length === 1 && K(s[0].categoryMatches)) {
      const o = s[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === o;
      };
    } else {
      const o = me(s, (c, a, u) => (c[a.tokenTypeIdx] = !0, N(a.categoryMatches, (l) => {
        c[l] = !0;
      }), c), []);
      return function() {
        const c = this.LA(1);
        return o[c.tokenTypeIdx] === !0;
      };
    }
  } else
    return function() {
      e: for (let s = 0; s < i; s++) {
        const o = t[s], c = o.length;
        for (let a = 0; a < c; a++) {
          const u = this.LA(a + 1);
          if (e(u, o[a]) === !1)
            continue e;
        }
        return !0;
      }
      return !1;
    };
}
class od extends Ir {
  constructor(e, r, n) {
    super(), this.topProd = e, this.targetOccurrence = r, this.targetProdType = n;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, r, n, i) {
    return e.idx === this.targetOccurrence && this.targetProdType === r ? (this.restDef = n.concat(i), !0) : !1;
  }
  walkOption(e, r, n) {
    this.checkIsTarget(e, Q.OPTION, r, n) || super.walkOption(e, r, n);
  }
  walkAtLeastOne(e, r, n) {
    this.checkIsTarget(e, Q.REPETITION_MANDATORY, r, n) || super.walkOption(e, r, n);
  }
  walkAtLeastOneSep(e, r, n) {
    this.checkIsTarget(e, Q.REPETITION_MANDATORY_WITH_SEPARATOR, r, n) || super.walkOption(e, r, n);
  }
  walkMany(e, r, n) {
    this.checkIsTarget(e, Q.REPETITION, r, n) || super.walkOption(e, r, n);
  }
  walkManySep(e, r, n) {
    this.checkIsTarget(e, Q.REPETITION_WITH_SEPARATOR, r, n) || super.walkOption(e, r, n);
  }
}
class So extends dt {
  constructor(e, r, n) {
    super(), this.targetOccurrence = e, this.targetProdType = r, this.targetRef = n, this.result = [];
  }
  checkIsTarget(e, r) {
    e.idx === this.targetOccurrence && this.targetProdType === r && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, Q.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, Q.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, Q.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, Q.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, Q.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, Q.ALTERNATION);
  }
}
function Ji(t) {
  const e = new Array(t);
  for (let r = 0; r < t; r++)
    e[r] = [];
  return e;
}
function Fr(t) {
  let e = [""];
  for (let r = 0; r < t.length; r++) {
    const n = t[r], i = [];
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      i.push(o + "_" + n.tokenTypeIdx);
      for (let c = 0; c < n.categoryMatches.length; c++) {
        const a = "_" + n.categoryMatches[c];
        i.push(o + a);
      }
    }
    e = i;
  }
  return e;
}
function ad(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    if (n === r)
      continue;
    const i = t[n];
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      if (i[o] === !0)
        return !1;
    }
  }
  return !0;
}
function Ro(t, e) {
  const r = C(t, (o) => pn([o], 1)), n = Ji(r.length), i = C(r, (o) => {
    const c = {};
    return N(o, (a) => {
      const u = Fr(a.partialPath);
      N(u, (l) => {
        c[l] = !0;
      });
    }), c;
  });
  let s = r;
  for (let o = 1; o <= e; o++) {
    const c = s;
    s = Ji(c.length);
    for (let a = 0; a < c.length; a++) {
      const u = c[a];
      for (let l = 0; l < u.length; l++) {
        const h = u[l].partialPath, m = u[l].suffixDef, p = Fr(h);
        if (ad(i, p, a) || K(m) || h.length === e) {
          const d = n[a];
          if (dn(d, h) === !1) {
            d.push(h);
            for (let g = 0; g < p.length; g++) {
              const _ = p[g];
              i[a][_] = !0;
            }
          }
        } else {
          const d = pn(m, o + 1, h);
          s[a] = s[a].concat(d), N(d, (g) => {
            const _ = Fr(g.partialPath);
            N(_, (y) => {
              i[a][y] = !0;
            });
          });
        }
      }
    }
  }
  return n;
}
function qn(t, e, r, n) {
  const i = new So(t, Q.ALTERNATION, n);
  return e.accept(i), Ro(i.result, r);
}
function Yn(t, e, r, n) {
  const i = new So(t, r);
  e.accept(i);
  const s = i.result, o = new od(e, t, r).startWalking(), c = new fe({ definition: s }), a = new fe({ definition: o });
  return Ro([c, a], n);
}
function dn(t, e) {
  e: for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (n.length === e.length) {
      for (let i = 0; i < n.length; i++) {
        const s = e[i], o = n[i];
        if (!(s === o || o.categoryMatchesMap[s.tokenTypeIdx] !== void 0))
          continue e;
      }
      return !0;
    }
  }
  return !1;
}
function cd(t, e) {
  return t.length < e.length && Re(t, (r, n) => {
    const i = e[n];
    return r === i || i.categoryMatchesMap[r.tokenTypeIdx];
  });
}
function Oo(t) {
  return Re(t, (e) => Re(e, (r) => Re(r, (n) => K(n.categoryMatches))));
}
function ud(t) {
  const e = t.lookaheadStrategy.validate({
    rules: t.rules,
    tokenTypes: t.tokenTypes,
    grammarName: t.grammarName
  });
  return C(e, (r) => Object.assign({ type: ce.CUSTOM_LOOKAHEAD_VALIDATION }, r));
}
function ld(t, e, r, n) {
  const i = Ee(t, (a) => hd(a, r)), s = Sd(t, e, r), o = Ee(t, (a) => Td(a, r)), c = Ee(t, (a) => dd(a, t, n, r));
  return i.concat(s, o, c);
}
function hd(t, e) {
  const r = new pd();
  t.accept(r);
  const n = r.allProductions, i = Rf(n, fd), s = Ie(i, (o) => o.length > 1);
  return C(re(s), (o) => {
    const c = Le(o), a = e.buildDuplicateFoundError(t, o), u = be(c), l = {
      message: a,
      type: ce.DUPLICATE_PRODUCTIONS,
      ruleName: t.name,
      dslName: u,
      occurrence: c.idx
    }, h = Lo(c);
    return h && (l.parameter = h), l;
  });
}
function fd(t) {
  return `${be(t)}_#_${t.idx}_#_${Lo(t)}`;
}
function Lo(t) {
  return t instanceof X ? t.terminalType.name : t instanceof ge ? t.nonTerminalName : "";
}
class pd extends dt {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
}
function dd(t, e, r, n) {
  const i = [];
  if (me(e, (s, o) => o.name === t.name ? s + 1 : s, 0) > 1) {
    const s = n.buildDuplicateRuleNameError({
      topLevelRule: t,
      grammarName: r
    });
    i.push({
      message: s,
      type: ce.DUPLICATE_RULE_NAME,
      ruleName: t.name
    });
  }
  return i;
}
function md(t, e, r) {
  const n = [];
  let i;
  return ue(e, t) || (i = `Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `, n.push({
    message: i,
    type: ce.INVALID_RULE_OVERRIDE,
    ruleName: t
  })), n;
}
function Io(t, e, r, n = []) {
  const i = [], s = Zt(e.definition);
  if (K(s))
    return [];
  {
    const o = t.name;
    ue(s, t) && i.push({
      message: r.buildLeftRecursionError({
        topLevelRule: t,
        leftRecursionPath: n
      }),
      type: ce.LEFT_RECURSION,
      ruleName: o
    });
    const c = Or(s, n.concat([t])), a = Ee(c, (u) => {
      const l = oe(n);
      return l.push(u), Io(t, u, r, l);
    });
    return i.concat(a);
  }
}
function Zt(t) {
  let e = [];
  if (K(t))
    return e;
  const r = Le(t);
  if (r instanceof ge)
    e.push(r.referencedRule);
  else if (r instanceof fe || r instanceof le || r instanceof Ue || r instanceof De || r instanceof Ce || r instanceof ne)
    e = e.concat(Zt(r.definition));
  else if (r instanceof Me)
    e = Se(C(r.definition, (s) => Zt(s.definition)));
  else if (!(r instanceof X)) throw Error("non exhaustive match");
  const n = sr(r), i = t.length > 1;
  if (n && i) {
    const s = se(t);
    return e.concat(Zt(s));
  } else
    return e;
}
class Xn extends dt {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}
function gd(t, e) {
  const r = new Xn();
  t.accept(r);
  const n = r.alternations;
  return Ee(n, (i) => {
    const s = Ct(i.definition);
    return Ee(s, (o, c) => {
      const a = yo([o], [], wt, 1);
      return K(a) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: t,
            alternation: i,
            emptyChoiceIdx: c
          }),
          type: ce.NONE_LAST_EMPTY_ALT,
          ruleName: t.name,
          occurrence: i.idx,
          alternative: c + 1
        }
      ] : [];
    });
  });
}
function vd(t, e, r) {
  const n = new Xn();
  t.accept(n);
  let i = n.alternations;
  return i = Lr(i, (s) => s.ignoreAmbiguities === !0), Ee(i, (s) => {
    const o = s.idx, c = s.maxLookahead || e, a = qn(o, t, c, s), u = yd(a, s, t, r), l = Ad(a, s, t, r);
    return u.concat(l);
  });
}
class Ed extends dt {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
}
function Td(t, e) {
  const r = new Xn();
  t.accept(r);
  const n = r.alternations;
  return Ee(n, (i) => i.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: t,
        alternation: i
      }),
      type: ce.TOO_MANY_ALTS,
      ruleName: t.name,
      occurrence: i.idx
    }
  ] : []);
}
function _d(t, e, r) {
  const n = [];
  return N(t, (i) => {
    const s = new Ed();
    i.accept(s);
    const o = s.allProductions;
    N(o, (c) => {
      const a = Ao(c), u = c.maxLookahead || e, l = c.idx, h = Yn(l, i, a, u)[0];
      if (K(Se(h))) {
        const m = r.buildEmptyRepetitionError({
          topLevelRule: i,
          repetition: c
        });
        n.push({
          message: m,
          type: ce.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: i.name
        });
      }
    });
  }), n;
}
function yd(t, e, r, n) {
  const i = [], s = me(t, (o, c, a) => (e.definition[a].ignoreAmbiguities === !0 || N(c, (u) => {
    const l = [a];
    N(t, (h, m) => {
      a !== m && dn(h, u) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[m].ignoreAmbiguities !== !0 && l.push(m);
    }), l.length > 1 && !dn(i, u) && (i.push(u), o.push({
      alts: l,
      path: u
    }));
  }), o), []);
  return C(s, (o) => {
    const c = C(o.alts, (a) => a + 1);
    return {
      message: n.buildAlternationAmbiguityError({
        topLevelRule: r,
        alternation: e,
        ambiguityIndices: c,
        prefixPath: o.path
      }),
      type: ce.AMBIGUOUS_ALTS,
      ruleName: r.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function Ad(t, e, r, n) {
  const i = me(t, (s, o, c) => {
    const a = C(o, (u) => ({ idx: c, path: u }));
    return s.concat(a);
  }, []);
  return Nt(Ee(i, (s) => {
    if (e.definition[s.idx].ignoreAmbiguities === !0)
      return [];
    const o = s.idx, c = s.path, a = Ae(i, (u) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[u.idx].ignoreAmbiguities !== !0 && u.idx < o && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      cd(u.path, c)
    ));
    return C(a, (u) => {
      const l = [u.idx + 1, o + 1], h = e.idx === 0 ? "" : e.idx;
      return {
        message: n.buildAlternationPrefixAmbiguityError({
          topLevelRule: r,
          alternation: e,
          ambiguityIndices: l,
          prefixPath: u.path
        }),
        type: ce.AMBIGUOUS_PREFIX_ALTS,
        ruleName: r.name,
        occurrence: h,
        alternatives: l
      };
    });
  }));
}
function Sd(t, e, r) {
  const n = [], i = C(e, (s) => s.name);
  return N(t, (s) => {
    const o = s.name;
    if (ue(i, o)) {
      const c = r.buildNamespaceConflictError(s);
      n.push({
        message: c,
        type: ce.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: o
      });
    }
  }), n;
}
function Rd(t) {
  const e = Vn(t, {
    errMsgProvider: qp
  }), r = {};
  return N(t.rules, (n) => {
    r[n.name] = n;
  }), Yp(r, e.errMsgProvider);
}
function Od(t) {
  return t = Vn(t, {
    errMsgProvider: Ze
  }), ld(t.rules, t.tokenTypes, t.errMsgProvider, t.grammarName);
}
const Co = "MismatchedTokenException", Mo = "NoViableAltException", bo = "EarlyExitException", ko = "NotAllInputParsedException", No = [
  Co,
  Mo,
  bo,
  ko
];
Object.freeze(No);
function lr(t) {
  return ue(No, t.name);
}
class br extends Error {
  constructor(e, r) {
    super(e), this.token = r, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
class Po extends br {
  constructor(e, r, n) {
    super(e, r), this.previousToken = n, this.name = Co;
  }
}
class Ld extends br {
  constructor(e, r, n) {
    super(e, r), this.previousToken = n, this.name = Mo;
  }
}
class Id extends br {
  constructor(e, r) {
    super(e, r), this.name = ko;
  }
}
class Cd extends br {
  constructor(e, r, n) {
    super(e, r), this.previousToken = n, this.name = bo;
  }
}
const jr = {}, wo = "InRuleRecoveryException";
class Md extends Error {
  constructor(e) {
    super(e), this.name = wo;
  }
}
class bd {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = M(e, "recoveryEnabled") ? e.recoveryEnabled : Ve.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = kd);
  }
  getTokenToInsert(e) {
    const r = zn(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return r.isInsertedInRecovery = !0, r;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return !0;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return !0;
  }
  tryInRepetitionRecovery(e, r, n, i) {
    const s = this.findReSyncTokenType(), o = this.exportLexerState(), c = [];
    let a = !1;
    const u = this.LA(1);
    let l = this.LA(1);
    const h = () => {
      const m = this.LA(0), p = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: i,
        actual: u,
        previous: m,
        ruleName: this.getCurrRuleFullName()
      }), d = new Po(p, u, this.LA(0));
      d.resyncedTokens = Ct(c), this.SAVE_ERROR(d);
    };
    for (; !a; )
      if (this.tokenMatcher(l, i)) {
        h();
        return;
      } else if (n.call(this)) {
        h(), e.apply(this, r);
        return;
      } else this.tokenMatcher(l, s) ? a = !0 : (l = this.SKIP_TOKEN(), this.addToResyncTokens(l, c));
    this.importLexerState(o);
  }
  shouldInRepetitionRecoveryBeTried(e, r, n) {
    return !(n === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, r)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, r) {
    const n = this.getCurrentGrammarPath(e, r);
    return this.getNextPossibleTokenTypes(n);
  }
  tryInRuleRecovery(e, r) {
    if (this.canRecoverWithSingleTokenInsertion(e, r))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const n = this.SKIP_TOKEN();
      return this.consumeToken(), n;
    }
    throw new Md("sad sad panda");
  }
  canPerformInRuleRecovery(e, r) {
    return this.canRecoverWithSingleTokenInsertion(e, r) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, r) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || K(r))
      return !1;
    const n = this.LA(1);
    return ft(r, (i) => this.tokenMatcher(n, i)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
  }
  isInCurrentRuleReSyncSet(e) {
    const r = this.getCurrFollowKey(), n = this.getFollowSetFromFollowKey(r);
    return ue(n, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let r = this.LA(1), n = 2;
    for (; ; ) {
      const i = ft(e, (s) => zp(r, s));
      if (i !== void 0)
        return i;
      r = this.LA(n), n++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return jr;
    const e = this.getLastExplicitRuleShortName(), r = this.getLastExplicitRuleOccurrenceIndex(), n = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: r,
      inRule: this.shortRuleNameToFullName(n)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, r = this.RULE_OCCURRENCE_STACK;
    return C(e, (n, i) => i === 0 ? jr : {
      ruleName: this.shortRuleNameToFullName(n),
      idxInCallingRule: r[i],
      inRule: this.shortRuleNameToFullName(e[i - 1])
    });
  }
  flattenFollowSet() {
    const e = C(this.buildFullFollowKeyStack(), (r) => this.getFollowSetFromFollowKey(r));
    return Se(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === jr)
      return [rt];
    const r = e.ruleName + e.idxInCallingRule + uo + e.inRule;
    return this.resyncFollows[r];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, r) {
    return this.tokenMatcher(e, rt) || r.push(e), r;
  }
  reSyncTo(e) {
    const r = [];
    let n = this.LA(1);
    for (; this.tokenMatcher(n, e) === !1; )
      n = this.SKIP_TOKEN(), this.addToResyncTokens(n, r);
    return Ct(r);
  }
  attemptInRepetitionRecovery(e, r, n, i, s, o, c) {
  }
  getCurrentGrammarPath(e, r) {
    const n = this.getHumanReadableRuleStack(), i = oe(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: n,
      occurrenceStack: i,
      lastTok: e,
      lastTokOccurrence: r
    };
  }
  getHumanReadableRuleStack() {
    return C(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}
function kd(t, e, r, n, i, s, o) {
  const c = this.getKeyForAutomaticLookahead(n, i);
  let a = this.firstAfterRepMap[c];
  if (a === void 0) {
    const m = this.getCurrRuleFullName(), p = this.getGAstProductions()[m];
    a = new s(p, i).startWalking(), this.firstAfterRepMap[c] = a;
  }
  let u = a.token, l = a.occurrence;
  const h = a.isEndOfRule;
  this.RULE_STACK.length === 1 && h && u === void 0 && (u = rt, l = 1), !(u === void 0 || l === void 0) && this.shouldInRepetitionRecoveryBeTried(u, l, o) && this.tryInRepetitionRecovery(t, e, r, u);
}
const Nd = 4, Qe = 8, xo = 1 << Qe, Uo = 2 << Qe, mn = 3 << Qe, gn = 4 << Qe, vn = 5 << Qe, er = 6 << Qe;
function $r(t, e, r) {
  return r | e | t;
}
class Pd {
  constructor(e) {
    var r;
    this.maxLookahead = (r = e == null ? void 0 : e.maxLookahead) !== null && r !== void 0 ? r : Ve.maxLookahead;
  }
  validate(e) {
    const r = this.validateNoLeftRecursion(e.rules);
    if (K(r)) {
      const n = this.validateEmptyOrAlternatives(e.rules), i = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), s = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...r,
        ...n,
        ...i,
        ...s
      ];
    }
    return r;
  }
  validateNoLeftRecursion(e) {
    return Ee(e, (r) => Io(r, r, Ze));
  }
  validateEmptyOrAlternatives(e) {
    return Ee(e, (r) => gd(r, Ze));
  }
  validateAmbiguousAlternationAlternatives(e, r) {
    return Ee(e, (n) => vd(n, r, Ze));
  }
  validateSomeNonEmptyLookaheadPath(e, r) {
    return _d(e, r, Ze);
  }
  buildLookaheadForAlternation(e) {
    return rd(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, id);
  }
  buildLookaheadForOptional(e) {
    return nd(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, Ao(e.prodType), sd);
  }
}
class wd {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = M(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Ve.dynamicTokensEnabled, this.maxLookahead = M(e, "maxLookahead") ? e.maxLookahead : Ve.maxLookahead, this.lookaheadStrategy = M(e, "lookaheadStrategy") ? e.lookaheadStrategy : new Pd({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    N(e, (r) => {
      this.TRACE_INIT(`${r.name} Rule Lookahead`, () => {
        const { alternation: n, repetition: i, option: s, repetitionMandatory: o, repetitionMandatoryWithSeparator: c, repetitionWithSeparator: a } = Ud(r);
        N(n, (u) => {
          const l = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${be(u)}${l}`, () => {
            const h = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: r,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), m = $r(this.fullRuleNameToShort[r.name], xo, u.idx);
            this.setLaFuncCache(m, h);
          });
        }), N(i, (u) => {
          this.computeLookaheadFunc(r, u.idx, mn, "Repetition", u.maxLookahead, be(u));
        }), N(s, (u) => {
          this.computeLookaheadFunc(r, u.idx, Uo, "Option", u.maxLookahead, be(u));
        }), N(o, (u) => {
          this.computeLookaheadFunc(r, u.idx, gn, "RepetitionMandatory", u.maxLookahead, be(u));
        }), N(c, (u) => {
          this.computeLookaheadFunc(r, u.idx, er, "RepetitionMandatoryWithSeparator", u.maxLookahead, be(u));
        }), N(a, (u) => {
          this.computeLookaheadFunc(r, u.idx, vn, "RepetitionWithSeparator", u.maxLookahead, be(u));
        });
      });
    });
  }
  computeLookaheadFunc(e, r, n, i, s, o) {
    this.TRACE_INIT(`${o}${r === 0 ? "" : r}`, () => {
      const c = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: r,
        rule: e,
        maxLookahead: s || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: i
      }), a = $r(this.fullRuleNameToShort[e.name], n, r);
      this.setLaFuncCache(a, c);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, r) {
    const n = this.getLastExplicitRuleShortName();
    return $r(n, e, r);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, r) {
    this.lookAheadFuncsCache.set(e, r);
  }
}
class xd extends dt {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
}
const Bt = new xd();
function Ud(t) {
  Bt.reset(), t.accept(Bt);
  const e = Bt.dslMethods;
  return Bt.reset(), e;
}
function Zi(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.endOffset = e.endOffset) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset);
}
function es(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.startColumn = e.startColumn, t.startLine = e.startLine, t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine);
}
function Dd(t, e, r) {
  t.children[r] === void 0 ? t.children[r] = [e] : t.children[r].push(e);
}
function Fd(t, e, r) {
  t.children[e] === void 0 ? t.children[e] = [r] : t.children[e].push(r);
}
const jd = "name";
function Do(t, e) {
  Object.defineProperty(t, jd, {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: e
  });
}
function $d(t, e) {
  const r = ye(t), n = r.length;
  for (let i = 0; i < n; i++) {
    const s = r[i], o = t[s], c = o.length;
    for (let a = 0; a < c; a++) {
      const u = o[a];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
function Gd(t, e) {
  const r = function() {
  };
  Do(r, t + "BaseSemantics");
  const n = {
    visit: function(i, s) {
      if (j(i) && (i = i[0]), !Be(i))
        return this[i.name](i.children, s);
    },
    validateVisitor: function() {
      const i = Vd(this, e);
      if (!K(i)) {
        const s = C(i, (o) => o.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return r.prototype = n, r.prototype.constructor = r, r._RULE_NAMES = e, r;
}
function Bd(t, e, r) {
  const n = function() {
  };
  Do(n, t + "BaseSemanticsWithDefaults");
  const i = Object.create(r.prototype);
  return N(e, (s) => {
    i[s] = $d;
  }), n.prototype = i, n.prototype.constructor = n, n;
}
var En;
(function(t) {
  t[t.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", t[t.MISSING_METHOD = 1] = "MISSING_METHOD";
})(En || (En = {}));
function Vd(t, e) {
  return Wd(t, e);
}
function Wd(t, e) {
  const r = Ae(e, (i) => We(t[i]) === !1), n = C(r, (i) => ({
    msg: `Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,
    type: En.MISSING_METHOD,
    methodName: i
  }));
  return Nt(n);
}
class Kd {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = M(e, "nodeLocationTracking") ? e.nodeLocationTracking : Ve.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = te, this.cstFinallyStateUpdate = te, this.cstPostTerminal = te, this.cstPostNonTerminal = te, this.cstPostRule = te;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = es, this.setNodeLocationFromNode = es, this.cstPostRule = te, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = te, this.setNodeLocationFromNode = te, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Zi, this.setNodeLocationFromNode = Zi, this.cstPostRule = te, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = te, this.setNodeLocationFromNode = te, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = te, this.setNodeLocationFromNode = te, this.cstPostRule = te, this.setInitialNodeLocation = te;
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const r = this.LA(1);
    e.location = {
      startOffset: r.startOffset,
      startLine: r.startLine,
      startColumn: r.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const r = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(r), this.CST_STACK.push(r);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const r = this.LA(0), n = e.location;
    n.startOffset <= r.startOffset ? (n.endOffset = r.endOffset, n.endLine = r.endLine, n.endColumn = r.endColumn) : (n.startOffset = NaN, n.startLine = NaN, n.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const r = this.LA(0), n = e.location;
    n.startOffset <= r.startOffset ? n.endOffset = r.endOffset : n.startOffset = NaN;
  }
  cstPostTerminal(e, r) {
    const n = this.CST_STACK[this.CST_STACK.length - 1];
    Dd(n, r, e), this.setNodeLocationFromToken(n.location, r);
  }
  cstPostNonTerminal(e, r) {
    const n = this.CST_STACK[this.CST_STACK.length - 1];
    Fd(n, r, e), this.setNodeLocationFromNode(n.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (Be(this.baseCstVisitorConstructor)) {
      const e = Gd(this.className, ye(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (Be(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = Bd(this.className, ye(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
}
class Hd {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== !0)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : fr;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const r = this.currIdx + e;
    return r < 0 || this.tokVectorLength <= r ? fr : this.tokVector[r];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}
class zd {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, r, n) {
    return this.consumeInternal(r, e, n);
  }
  subrule(e, r, n) {
    return this.subruleInternal(r, e, n);
  }
  option(e, r) {
    return this.optionInternal(r, e);
  }
  or(e, r) {
    return this.orInternal(r, e);
  }
  many(e, r) {
    return this.manyInternal(e, r);
  }
  atLeastOne(e, r) {
    return this.atLeastOneInternal(e, r);
  }
  CONSUME(e, r) {
    return this.consumeInternal(e, 0, r);
  }
  CONSUME1(e, r) {
    return this.consumeInternal(e, 1, r);
  }
  CONSUME2(e, r) {
    return this.consumeInternal(e, 2, r);
  }
  CONSUME3(e, r) {
    return this.consumeInternal(e, 3, r);
  }
  CONSUME4(e, r) {
    return this.consumeInternal(e, 4, r);
  }
  CONSUME5(e, r) {
    return this.consumeInternal(e, 5, r);
  }
  CONSUME6(e, r) {
    return this.consumeInternal(e, 6, r);
  }
  CONSUME7(e, r) {
    return this.consumeInternal(e, 7, r);
  }
  CONSUME8(e, r) {
    return this.consumeInternal(e, 8, r);
  }
  CONSUME9(e, r) {
    return this.consumeInternal(e, 9, r);
  }
  SUBRULE(e, r) {
    return this.subruleInternal(e, 0, r);
  }
  SUBRULE1(e, r) {
    return this.subruleInternal(e, 1, r);
  }
  SUBRULE2(e, r) {
    return this.subruleInternal(e, 2, r);
  }
  SUBRULE3(e, r) {
    return this.subruleInternal(e, 3, r);
  }
  SUBRULE4(e, r) {
    return this.subruleInternal(e, 4, r);
  }
  SUBRULE5(e, r) {
    return this.subruleInternal(e, 5, r);
  }
  SUBRULE6(e, r) {
    return this.subruleInternal(e, 6, r);
  }
  SUBRULE7(e, r) {
    return this.subruleInternal(e, 7, r);
  }
  SUBRULE8(e, r) {
    return this.subruleInternal(e, 8, r);
  }
  SUBRULE9(e, r) {
    return this.subruleInternal(e, 9, r);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, r, n = pr) {
    if (ue(this.definedRulesNames, e)) {
      const s = {
        message: Ze.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: ce.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(s);
    }
    this.definedRulesNames.push(e);
    const i = this.defineRule(e, r, n);
    return this[e] = i, i;
  }
  OVERRIDE_RULE(e, r, n = pr) {
    const i = md(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(i);
    const s = this.defineRule(e, r, n);
    return this[e] = s, s;
  }
  BACKTRACK(e, r) {
    return function() {
      this.isBackTrackingStack.push(1);
      const n = this.saveRecogState();
      try {
        return e.apply(this, r), !0;
      } catch (i) {
        if (lr(i))
          return !1;
        throw i;
      } finally {
        this.reloadRecogState(n), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return Yf(re(this.gastProductionsCache));
  }
}
class qd {
  initRecognizerEngine(e, r) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = ur, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, M(r, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (j(e)) {
      if (K(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (j(e))
      this.tokensMap = me(e, (s, o) => (s[o.name] = o, s), {});
    else if (M(e, "modes") && Re(Se(re(e.modes)), Vp)) {
      const s = Se(re(e.modes)), o = Wn(s);
      this.tokensMap = me(o, (c, a) => (c[a.name] = a, c), {});
    } else if (_e(e))
      this.tokensMap = oe(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = rt;
    const n = M(e, "modes") ? Se(re(e.modes)) : re(e), i = Re(n, (s) => K(s.categoryMatches));
    this.tokenMatcher = i ? ur : wt, xt(re(this.tokensMap));
  }
  defineRule(e, r, n) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const i = M(n, "resyncEnabled") ? n.resyncEnabled : pr.resyncEnabled, s = M(n, "recoveryValueFunc") ? n.recoveryValueFunc : pr.recoveryValueFunc, o = this.ruleShortNameIdx << Nd + Qe;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[o] = e, this.fullRuleNameToShort[e] = o;
    let c;
    return this.outputCst === !0 ? c = function(...a) {
      try {
        this.ruleInvocationStateUpdate(o, e, this.subruleIdx), r.apply(this, a);
        const u = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(u), u;
      } catch (u) {
        return this.invokeRuleCatch(u, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : c = function(...a) {
      try {
        return this.ruleInvocationStateUpdate(o, e, this.subruleIdx), r.apply(this, a);
      } catch (u) {
        return this.invokeRuleCatch(u, i, s);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(c, { ruleName: e, originalGrammarAction: r });
  }
  invokeRuleCatch(e, r, n) {
    const i = this.RULE_STACK.length === 1, s = r && !this.isBackTracking() && this.recoveryEnabled;
    if (lr(e)) {
      const o = e;
      if (s) {
        const c = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(c))
          if (o.resyncedTokens = this.reSyncTo(c), this.outputCst) {
            const a = this.CST_STACK[this.CST_STACK.length - 1];
            return a.recoveredNode = !0, a;
          } else
            return n(e);
        else {
          if (this.outputCst) {
            const a = this.CST_STACK[this.CST_STACK.length - 1];
            a.recoveredNode = !0, o.partialCstResult = a;
          }
          throw o;
        }
      } else {
        if (i)
          return this.moveToTerminatedState(), n(e);
        throw o;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(Uo, r);
    return this.optionInternalLogic(e, r, n);
  }
  optionInternalLogic(e, r, n) {
    let i = this.getLaFuncFromCache(n), s;
    if (typeof e != "function") {
      s = e.DEF;
      const o = e.GATE;
      if (o !== void 0) {
        const c = i;
        i = () => o.call(this) && c.call(this);
      }
    } else
      s = e;
    if (i.call(this) === !0)
      return s.call(this);
  }
  atLeastOneInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(gn, e);
    return this.atLeastOneInternalLogic(e, r, n);
  }
  atLeastOneInternalLogic(e, r, n) {
    let i = this.getLaFuncFromCache(n), s;
    if (typeof r != "function") {
      s = r.DEF;
      const o = r.GATE;
      if (o !== void 0) {
        const c = i;
        i = () => o.call(this) && c.call(this);
      }
    } else
      s = r;
    if (i.call(this) === !0) {
      let o = this.doSingleRepetition(s);
      for (; i.call(this) === !0 && o === !0; )
        o = this.doSingleRepetition(s);
    } else
      throw this.raiseEarlyExitException(e, Q.REPETITION_MANDATORY, r.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, r], i, gn, e, ed);
  }
  atLeastOneSepFirstInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(er, e);
    this.atLeastOneSepFirstInternalLogic(e, r, n);
  }
  atLeastOneSepFirstInternalLogic(e, r, n) {
    const i = r.DEF, s = r.SEP;
    if (this.getLaFuncFromCache(n).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Qi
      ], o, er, e, Qi);
    } else
      throw this.raiseEarlyExitException(e, Q.REPETITION_MANDATORY_WITH_SEPARATOR, r.ERR_MSG);
  }
  manyInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(mn, e);
    return this.manyInternalLogic(e, r, n);
  }
  manyInternalLogic(e, r, n) {
    let i = this.getLaFuncFromCache(n), s;
    if (typeof r != "function") {
      s = r.DEF;
      const c = r.GATE;
      if (c !== void 0) {
        const a = i;
        i = () => c.call(this) && a.call(this);
      }
    } else
      s = r;
    let o = !0;
    for (; i.call(this) === !0 && o === !0; )
      o = this.doSingleRepetition(s);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, r],
      i,
      mn,
      e,
      Zp,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      o
    );
  }
  manySepFirstInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(vn, e);
    this.manySepFirstInternalLogic(e, r, n);
  }
  manySepFirstInternalLogic(e, r, n) {
    const i = r.DEF, s = r.SEP;
    if (this.getLaFuncFromCache(n).call(this) === !0) {
      i.call(this);
      const o = () => this.tokenMatcher(this.LA(1), s);
      for (; this.tokenMatcher(this.LA(1), s) === !0; )
        this.CONSUME(s), i.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        s,
        o,
        i,
        Xi
      ], o, vn, e, Xi);
    }
  }
  repetitionSepSecondInternal(e, r, n, i, s) {
    for (; n(); )
      this.CONSUME(r), i.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      r,
      n,
      i,
      s
    ], n, er, e, s);
  }
  doSingleRepetition(e) {
    const r = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > r;
  }
  orInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(xo, r), i = j(e) ? e : e.DEF, s = this.getLaFuncFromCache(n).call(this, i);
    if (s !== void 0)
      return i[s].ALT.call(this);
    this.raiseNoAltException(r, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
      const e = this.LA(1), r = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new Id(r, e));
    }
  }
  subruleInternal(e, r, n) {
    let i;
    try {
      const s = n !== void 0 ? n.ARGS : void 0;
      return this.subruleIdx = r, i = e.apply(this, s), this.cstPostNonTerminal(i, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.ruleName), i;
    } catch (s) {
      throw this.subruleInternalError(s, n, e.ruleName);
    }
  }
  subruleInternalError(e, r, n) {
    throw lr(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : n), delete e.partialCstResult), e;
  }
  consumeInternal(e, r, n) {
    let i;
    try {
      const s = this.LA(1);
      this.tokenMatcher(s, e) === !0 ? (this.consumeToken(), i = s) : this.consumeInternalError(e, s, n);
    } catch (s) {
      i = this.consumeInternalRecovery(e, r, s);
    }
    return this.cstPostTerminal(n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.name, i), i;
  }
  consumeInternalError(e, r, n) {
    let i;
    const s = this.LA(0);
    throw n !== void 0 && n.ERR_MSG ? i = n.ERR_MSG : i = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: r,
      previous: s,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new Po(i, r, s));
  }
  consumeInternalRecovery(e, r, n) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    n.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const i = this.getFollowsForInRuleRecovery(e, r);
      try {
        return this.tryInRuleRecovery(e, i);
      } catch (s) {
        throw s.name === wo ? n : s;
      }
    } else
      throw n;
  }
  saveRecogState() {
    const e = this.errors, r = oe(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: r,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, r, n) {
    this.RULE_OCCURRENCE_STACK.push(n), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(r);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), rt);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}
class Yd {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = M(e, "errorMessageProvider") ? e.errorMessageProvider : Ve.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (lr(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: oe(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return oe(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, r, n) {
    const i = this.getCurrRuleFullName(), s = this.getGAstProductions()[i], o = Yn(e, s, r, this.maxLookahead)[0], c = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      c.push(this.LA(u));
    const a = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: c,
      previous: this.LA(0),
      customUserDescription: n,
      ruleName: i
    });
    throw this.SAVE_ERROR(new Cd(a, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, r) {
    const n = this.getCurrRuleFullName(), i = this.getGAstProductions()[n], s = qn(e, i, this.maxLookahead), o = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      o.push(this.LA(u));
    const c = this.LA(0), a = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: s,
      actual: o,
      previous: c,
      customUserDescription: r,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new Ld(a, this.LA(1), c));
  }
}
class Xd {
  initContentAssist() {
  }
  computeContentAssist(e, r) {
    const n = this.gastProductionsCache[e];
    if (Be(n))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return yo([n], r, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const r = Le(e.ruleStack), n = this.getGAstProductions()[r];
    return new Jp(n, e).startWalking();
  }
}
const kr = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(kr);
const ts = !0, rs = Math.pow(2, Qe) - 1, Fo = B({ name: "RECORDING_PHASE_TOKEN", pattern: ae.NA });
xt([Fo]);
const jo = zn(
  Fo,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(jo);
const Qd = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
class Jd {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = !1;
  }
  enableRecording() {
    this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const r = e > 0 ? e : "";
        this[`CONSUME${r}`] = function(n, i) {
          return this.consumeInternalRecord(n, e, i);
        }, this[`SUBRULE${r}`] = function(n, i) {
          return this.subruleInternalRecord(n, e, i);
        }, this[`OPTION${r}`] = function(n) {
          return this.optionInternalRecord(n, e);
        }, this[`OR${r}`] = function(n) {
          return this.orInternalRecord(n, e);
        }, this[`MANY${r}`] = function(n) {
          this.manyInternalRecord(e, n);
        }, this[`MANY_SEP${r}`] = function(n) {
          this.manySepFirstInternalRecord(e, n);
        }, this[`AT_LEAST_ONE${r}`] = function(n) {
          this.atLeastOneInternalRecord(e, n);
        }, this[`AT_LEAST_ONE_SEP${r}`] = function(n) {
          this.atLeastOneSepFirstInternalRecord(e, n);
        };
      }
      this.consume = function(e, r, n) {
        return this.consumeInternalRecord(r, e, n);
      }, this.subrule = function(e, r, n) {
        return this.subruleInternalRecord(r, e, n);
      }, this.option = function(e, r) {
        return this.optionInternalRecord(r, e);
      }, this.or = function(e, r) {
        return this.orInternalRecord(r, e);
      }, this.many = function(e, r) {
        this.manyInternalRecord(e, r);
      }, this.atLeastOne = function(e, r) {
        this.atLeastOneInternalRecord(e, r);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let r = 0; r < 10; r++) {
        const n = r > 0 ? r : "";
        delete e[`CONSUME${n}`], delete e[`SUBRULE${n}`], delete e[`OPTION${n}`], delete e[`OR${n}`], delete e[`MANY${n}`], delete e[`MANY_SEP${n}`], delete e[`AT_LEAST_ONE${n}`], delete e[`AT_LEAST_ONE_SEP${n}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, r) {
    return () => !0;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return fr;
  }
  topLevelRuleRecord(e, r) {
    try {
      const n = new pt({ definition: [], name: e });
      return n.name = e, this.recordingProdStack.push(n), r.call(this), this.recordingProdStack.pop(), n;
    } catch (n) {
      if (n.KNOWN_RECORDER_ERROR !== !0)
        try {
          n.message = n.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw n;
        }
      throw n;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, r) {
    return vt.call(this, le, e, r);
  }
  atLeastOneInternalRecord(e, r) {
    vt.call(this, Ue, r, e);
  }
  atLeastOneSepFirstInternalRecord(e, r) {
    vt.call(this, De, r, e, ts);
  }
  manyInternalRecord(e, r) {
    vt.call(this, ne, r, e);
  }
  manySepFirstInternalRecord(e, r) {
    vt.call(this, Ce, r, e, ts);
  }
  orInternalRecord(e, r) {
    return Zd.call(this, e, r);
  }
  subruleInternalRecord(e, r, n) {
    if (hr(r), !e || M(e, "ruleName") === !1) {
      const c = new Error(`<SUBRULE${ns(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw c.KNOWN_RECORDER_ERROR = !0, c;
    }
    const i = ht(this.recordingProdStack), s = e.ruleName, o = new ge({
      idx: r,
      nonTerminalName: s,
      label: n == null ? void 0 : n.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return i.definition.push(o), this.outputCst ? Qd : kr;
  }
  consumeInternalRecord(e, r, n) {
    if (hr(r), !Eo(e)) {
      const o = new Error(`<CONSUME${ns(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = !0, o;
    }
    const i = ht(this.recordingProdStack), s = new X({
      idx: r,
      terminalType: e,
      label: n == null ? void 0 : n.LABEL
    });
    return i.definition.push(s), jo;
  }
}
function vt(t, e, r, n = !1) {
  hr(r);
  const i = ht(this.recordingProdStack), s = We(e) ? e : e.DEF, o = new t({ definition: [], idx: r });
  return n && (o.separator = e.SEP), M(e, "MAX_LOOKAHEAD") && (o.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(o), s.call(this), i.definition.push(o), this.recordingProdStack.pop(), kr;
}
function Zd(t, e) {
  hr(e);
  const r = ht(this.recordingProdStack), n = j(t) === !1, i = n === !1 ? t : t.DEF, s = new Me({
    definition: [],
    idx: e,
    ignoreAmbiguities: n && t.IGNORE_AMBIGUITIES === !0
  });
  M(t, "MAX_LOOKAHEAD") && (s.maxLookahead = t.MAX_LOOKAHEAD);
  const o = so(i, (c) => We(c.GATE));
  return s.hasPredicates = o, r.definition.push(s), N(i, (c) => {
    const a = new fe({ definition: [] });
    s.definition.push(a), M(c, "IGNORE_AMBIGUITIES") ? a.ignoreAmbiguities = c.IGNORE_AMBIGUITIES : M(c, "GATE") && (a.ignoreAmbiguities = !0), this.recordingProdStack.push(a), c.ALT.call(this), this.recordingProdStack.pop();
  }), kr;
}
function ns(t) {
  return t === 0 ? "" : `${t}`;
}
function hr(t) {
  if (t < 0 || t > rs) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${rs + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = !0, e;
  }
}
class em {
  initPerformanceTracer(e) {
    if (M(e, "traceInitPerf")) {
      const r = e.traceInitPerf, n = typeof r == "number";
      this.traceInitMaxIdent = n ? r : 1 / 0, this.traceInitPerf = n ? r > 0 : r;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = Ve.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, r) {
    if (this.traceInitPerf === !0) {
      this.traceInitIndent++;
      const n = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n}--> <${e}>`);
      const { time: i, value: s } = ao(r), o = i > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && o(`${n}<-- <${e}> time: ${i}ms`), this.traceInitIndent--, s;
    } else
      return r();
  }
}
function tm(t, e) {
  e.forEach((r) => {
    const n = r.prototype;
    Object.getOwnPropertyNames(n).forEach((i) => {
      if (i === "constructor")
        return;
      const s = Object.getOwnPropertyDescriptor(n, i);
      s && (s.get || s.set) ? Object.defineProperty(t.prototype, i, s) : t.prototype[i] = r.prototype[i];
    });
  });
}
const fr = zn(rt, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(fr);
const Ve = Object.freeze({
  recoveryEnabled: !1,
  maxLookahead: 3,
  dynamicTokensEnabled: !1,
  outputCst: !0,
  errorMessageProvider: _o,
  nodeLocationTracking: "none",
  traceInitPerf: !1,
  skipValidations: !1
}), pr = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: !0
});
var ce;
(function(t) {
  t[t.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", t[t.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", t[t.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", t[t.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", t[t.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", t[t.LEFT_RECURSION = 5] = "LEFT_RECURSION", t[t.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", t[t.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", t[t.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", t[t.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", t[t.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", t[t.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", t[t.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", t[t.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ce || (ce = {}));
class Ut {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = !0;
      const r = this.className;
      this.TRACE_INIT("toFastProps", () => {
        co(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), N(this.definedRulesNames, (i) => {
            const s = this[i].originalGrammarAction;
            let o;
            this.TRACE_INIT(`${i} Rule`, () => {
              o = this.topLevelRuleRecord(i, s);
            }), this.gastProductionsCache[i] = o;
          });
        } finally {
          this.disableRecording();
        }
      });
      let n = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        n = Rd({
          rules: re(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(n);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (K(n) && this.skipValidations === !1) {
          const i = Od({
            rules: re(this.gastProductionsCache),
            tokenTypes: re(this.tokensMap),
            errMsgProvider: Ze,
            grammarName: r
          }), s = ud({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: re(this.gastProductionsCache),
            tokenTypes: re(this.tokensMap),
            grammarName: r
          });
          this.definitionErrors = this.definitionErrors.concat(i, s);
        }
      }), K(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const i = rp(re(this.gastProductionsCache));
        this.resyncFollows = i;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var i, s;
        (s = (i = this.lookaheadStrategy).initialize) === null || s === void 0 || s.call(i, {
          rules: re(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(re(this.gastProductionsCache));
      })), !Ut.DEFER_DEFINITION_ERRORS_HANDLING && !K(this.definitionErrors))
        throw e = C(this.definitionErrors, (i) => i.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, r) {
    this.definitionErrors = [], this.selfAnalysisDone = !1;
    const n = this;
    if (n.initErrorHandler(r), n.initLexerAdapter(), n.initLooksAhead(r), n.initRecognizerEngine(e, r), n.initRecoverable(r), n.initTreeBuilder(r), n.initContentAssist(), n.initGastRecorder(r), n.initPerformanceTracer(r), M(r, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = M(r, "skipValidations") ? r.skipValidations : Ve.skipValidations;
  }
}
Ut.DEFER_DEFINITION_ERRORS_HANDLING = !1;
tm(Ut, [
  bd,
  wd,
  Kd,
  Hd,
  qd,
  zd,
  Yd,
  Xd,
  Jd,
  em
]);
class rm extends Ut {
  constructor(e, r = Ve) {
    const n = oe(r);
    n.outputCst = !0, super(e, n);
  }
}
const $o = B({
  name: "HTML_COMMENT",
  pattern: /<!--[\s\S]*?-->/,
  line_breaks: !0
}), Go = B({
  name: "HTML_CONDITIONAL_COMMENT",
  pattern: /<!\[[\s\S]*?\]>/,
  line_breaks: !0
}), nm = B({
  name: "XML",
  pattern: /<\?xml(?:.|\s)*?\?>/
}), Bo = B({
  name: "CDATA",
  pattern: /<!\[CDATA\[[\s\S]*?]]>/
}), Vo = B({
  name: "DTD",
  pattern: /<!.*?>/
}), Wo = B({
  name: "SCRIPTLET",
  pattern: /<%(.*?)%>|<\?(.*?)\?>/
}), im = B({
  name: "SEA_WS",
  pattern: /[ \t]+/,
  group: ae.SKIPPED
}), Ko = B({
  name: "LINE_BREAK",
  pattern: /\r?\n/
}), Ho = B({
  name: "SCRIPT_OPEN",
  pattern: /<script\b[^>]*>/,
  push_mode: "SCRIPT"
}), zo = B({
  name: "STYLE_OPEN",
  pattern: /<style\b[^>]*>/,
  push_mode: "STYLE"
}), Tn = B({
  name: "TAG_OPEN",
  pattern: /</,
  push_mode: "TAG"
}), qo = B({
  name: "HTML_TEXT",
  pattern: /[^<@]+/,
  line_breaks: !0
}), _n = B({
  name: "TAG_CLOSE",
  pattern: />/,
  pop_mode: !0
}), Yo = B({
  name: "TAG_SLASH_CLOSE",
  pattern: /\/>/,
  pop_mode: !0
}), Xo = B({
  name: "TAG_SLASH",
  pattern: /\//
}), Qo = B({
  name: "TAG_EQUALS",
  pattern: /=/,
  push_mode: "ATTVALUE"
}), tr = B({
  name: "TAG_NAME",
  pattern: /[:@a-zA-Z\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:\.\-@\u00B7\u0300-\u036F\u203F-\u2040.0-9a-zA-Z]*/
}), sm = B({
  name: "TAG_WHITESPACE",
  pattern: /[ \t\r\n]+/,
  group: ae.SKIPPED
}), Jo = B({
  name: "SCRIPT_BODY",
  pattern: /[\s\S]*?<\/script>/,
  pop_mode: !0
}), Zo = B({
  name: "STYLE_BODY",
  pattern: /[\s\S]*?<\/style>/,
  pop_mode: !0
}), ea = B({
  name: "ATTVALUE_VALUE",
  pattern: / *("[^<"]*"|'[^<']*'|[-_./+,?=:#;0-9a-zA-Z]+ ?|#[0-9a-fA-F]+|[0-9]+%?)/,
  pop_mode: !0
}), yn = B({
  name: "EDGE_COMMENT",
  pattern: /{{--[\s\S]*?--}}/,
  line_breaks: !0
}), An = B({
  name: "EDGE_MUSTACHE",
  pattern: /{{[\s\S]*?}}\s*/
}), Sn = B({
  name: "EDGE_SAFE_MUSTACHE",
  pattern: /{{{[\s\S]*?}}}\s*/
}), ta = B({
  name: "EDGE_ESCAPED_MUSTACHE",
  pattern: /@{{[\s\S]*?}}\s*/
}), ra = B({
  name: "EDGE_TAG",
  pattern: /@(?:!?\w+(?:\.\w+)*)\s*(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?/
}), na = B({
  name: "EDGE_TAG_PROP",
  pattern: /@(if|elseif|else|each|flashMessage)\([^)]*\)\s*([\s\S]*?)@end/
}), Rn = {
  defaultMode: "default",
  modes: {
    default: [
      $o,
      Go,
      nm,
      Bo,
      Vo,
      Wo,
      Ko,
      im,
      Ho,
      zo,
      Tn,
      yn,
      ta,
      Sn,
      An,
      ra,
      qo
    ],
    TAG: [
      _n,
      Yo,
      Xo,
      Qo,
      yn,
      Sn,
      An,
      na,
      tr,
      sm
    ],
    SCRIPT: [Jo],
    STYLE: [Zo],
    ATTVALUE: [ea]
  }
}, om = () => {
  const t = [];
  for (const e in Rn.modes)
    t.push(...Rn.modes[e]);
  return t;
}, am = new ae(Rn);
class ia extends rm {
  constructor() {
    super(om());
    const e = this;
    e.RULE("document", () => {
      e.MANY(() => {
        e.SUBRULE(e.content);
      });
    }), e.RULE("content", () => {
      e.OR([
        { ALT: () => e.CONSUME(qo) },
        { ALT: () => e.CONSUME(Ko) },
        { ALT: () => e.SUBRULE(e.element) },
        { ALT: () => e.SUBRULE(e.scriptlet) },
        { ALT: () => e.SUBRULE(e.htmlComment) },
        { ALT: () => e.SUBRULE(e.htmlConditionalComment) },
        { ALT: () => e.SUBRULE(e.cdata) },
        { ALT: () => e.SUBRULE(e.dtd) },
        { ALT: () => e.SUBRULE(e.scriptElement) },
        { ALT: () => e.SUBRULE(e.styleElement) },
        { ALT: () => e.SUBRULE(e.edgeComment) },
        { ALT: () => e.SUBRULE(e.edgeSafeMustache) },
        { ALT: () => e.SUBRULE(e.edgeMustache) },
        { ALT: () => e.SUBRULE(e.edgeEscapedMustache) },
        { ALT: () => e.SUBRULE(e.edgeTag) }
      ]);
    }), e.RULE("element", () => {
      e.OR([
        {
          ALT: () => e.SUBRULE(e.openingTag)
        },
        {
          ALT: () => e.SUBRULE(e.closingTag)
        }
      ]);
    }), e.RULE("openingTag", () => {
      e.CONSUME(Tn), e.CONSUME(tr), e.MANY(() => {
        e.OR([
          { ALT: () => e.SUBRULE(e.edgeTagProp) },
          { ALT: () => e.SUBRULE(e.attribute) },
          { ALT: () => e.SUBRULE(e.edgeSafeMustache) },
          { ALT: () => e.SUBRULE(e.edgeMustache) },
          { ALT: () => e.SUBRULE(e.edgeComment) }
        ]);
      }), e.OR1([
        { ALT: () => e.CONSUME1(Yo) },
        { ALT: () => e.CONSUME1(_n) }
      ]);
    }), e.RULE("attribute", () => {
      e.CONSUME(tr), e.OPTION(() => {
        e.CONSUME(Qo), e.CONSUME(ea);
      });
    }), e.RULE("closingTag", () => {
      e.CONSUME(Tn), e.CONSUME(Xo), e.CONSUME(tr), e.CONSUME(_n);
    }), e.RULE("scriptlet", () => {
      e.CONSUME(Wo);
    }), e.RULE("htmlComment", () => {
      e.CONSUME($o);
    }), e.RULE("htmlConditionalComment", () => {
      e.CONSUME(Go);
    }), e.RULE("cdata", () => {
      e.CONSUME(Bo);
    }), e.RULE("dtd", () => {
      e.CONSUME(Vo);
    }), e.RULE("scriptElement", () => {
      e.CONSUME(Ho), e.CONSUME(Jo);
    }), e.RULE("styleElement", () => {
      e.CONSUME(zo), e.CONSUME(Zo);
    }), e.RULE("edgeComment", () => {
      e.CONSUME(yn);
    }), e.RULE("edgeMustache", () => {
      e.CONSUME(An);
    }), e.RULE("edgeSafeMustache", () => {
      e.CONSUME(Sn);
    }), e.RULE("edgeEscapedMustache", () => {
      e.CONSUME(ta);
    }), e.RULE("edgeTag", () => {
      e.CONSUME(ra);
    }), e.RULE("edgeTagProp", () => {
      e.CONSUME(na);
    }), this.performSelfAnalysis();
  }
}
const cm = new ia(), um = cm.getBaseCstVisitorConstructor();
var On, rr, Ln;
class lm extends um {
  constructor() {
    super(), ei(this, rr), ei(this, On, /* @__PURE__ */ new Set([
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
      // Below are for SVGs
      "animateMotion",
      "animateTransform",
      "animate",
      "circle",
      "ellipse",
      "feGaussianBlur",
      "feDropShadow",
      "feOffset",
      "feBlend",
      "feColorMatrix",
      "feComposite",
      "feDisplacementMap",
      "feFlood",
      "feImage",
      "feMergeNode",
      "feMorphology",
      "fePointLight",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "image",
      "line",
      "mpath",
      "path",
      "polygon",
      "polyline",
      "rect",
      "set",
      "stop",
      "use",
      "view"
    ])), this.validateVisitor();
  }
  document(e) {
    const r = e.content[0].startOffset, n = e.content[e.content.length - 1].endOffset;
    return {
      type: "document",
      children: e.content.map((i) => this.visit(i)),
      start: r,
      end: n
    };
  }
  content(e) {
    if (e.HTML_TEXT)
      return {
        type: "htmlText",
        value: e.HTML_TEXT[0].image,
        start: e.HTML_TEXT[0].startOffset,
        end: e.HTML_TEXT[0].endOffset
      };
    if (e.LINE_BREAK)
      return {
        type: "linebreak",
        value: e.LINE_BREAK[0].image,
        start: e.LINE_BREAK[0].startOffset,
        end: e.LINE_BREAK[0].endOffset
      };
    const r = e.element || e.scriptlet || e.htmlComment || e.htmlConditionalComment || e.cdata || e.dtd || e.scriptElement || e.styleElement || e.edgeComment || e.edgeMustache || e.edgeSafeMustache || e.edgeEscapedMustache || e.edgeTag || e.htmlText;
    return this.visit(r);
  }
  element(e) {
    return e.openingTag ? this.visit(e.openingTag) : e.selfClosingTag ? this.visit(e.selfClosingTag) : this.visit(e.closingTag);
  }
  openingTag(e) {
    const r = e.TAG_NAME[0].image, n = e.edgeSafeMustache ? e.edgeSafeMustache.map((l) => this.visit(l)) : [], i = e.edgeMustache ? e.edgeMustache.map((l) => this.visit(l)) : [], s = e.edgeTagProp ? e.edgeTagProp.map((l) => this.visit(l)) : [], o = e.attribute ? e.attribute.map((l) => this.visit(l)) : [], c = e.edgeComment ? e.edgeComment.map((l) => this.visit(l)) : [], a = e.TAG_NAME[0].startOffset, u = e.TAG_NAME[0].endOffset;
    return ti(this, rr, Ln).call(this, r) || e.TAG_SLASH_CLOSE ? {
      type: "voidTag",
      tagName: r,
      edgeSafeMustaches: n,
      edgeMustaches: i,
      edgeTagProps: s,
      attributes: o,
      comments: c,
      start: a,
      end: u
    } : {
      type: "openingTag",
      tagName: r,
      edgeSafeMustaches: n,
      edgeMustaches: i,
      edgeTagProps: s,
      attributes: o,
      comments: c,
      start: a,
      end: u
    };
  }
  attribute(e) {
    var r, n, i;
    const s = e.TAG_NAME[0].image, o = (i = (n = (r = e.ATTVALUE_VALUE) == null ? void 0 : r[0]) == null ? void 0 : n.image) == null ? void 0 : i.trim(), c = e.TAG_NAME[0].startOffset, a = e.ATTVALUE_VALUE ? e.ATTVALUE_VALUE[0].endOffset : e.TAG_NAME[0].endOffset;
    return { type: "attribute", attributeName: s, attributeValue: o, start: c, end: a };
  }
  closingTag(e) {
    const r = e.TAG_NAME[0].image, n = e.TAG_OPEN[0].startOffset, i = e.TAG_CLOSE[0].endOffset;
    return ti(this, rr, Ln).call(this, r) ? {
      type: "doNotPrint"
    } : { type: "closingTag", tagName: r, start: n, end: i };
  }
  scriptlet(e) {
    const r = e.SCRIPTLET[0].image, n = e.SCRIPTLET[0].startOffset, i = e.SCRIPTLET[0].endOffset;
    return { type: "scriptlet", value: r, start: n, end: i };
  }
  htmlComment(e) {
    const r = e.HTML_COMMENT[0].image, n = e.HTML_COMMENT[0].startOffset, i = e.HTML_COMMENT[0].endOffset;
    return { type: "htmlComment", value: r, start: n, end: i };
  }
  htmlConditionalComment(e) {
    const r = e.HTML_CONDITIONAL_COMMENT[0].image, n = e.HTML_CONDITIONAL_COMMENT[0].startOffset, i = e.HTML_CONDITIONAL_COMMENT[0].endOffset;
    return { type: "htmlConditionalComment", value: r, start: n, end: i };
  }
  cdata(e) {
    const r = e.CDATA[0].image, n = e.CDATA[0].startOffset, i = e.CDATA[0].endOffset;
    return { type: "cdata", value: r, start: n, end: i };
  }
  dtd(e) {
    const r = e.DTD[0].image, n = e.DTD[0].startOffset, i = e.DTD[0].endOffset;
    return { type: "dtd", value: r, start: n, end: i };
  }
  scriptElement(e) {
    const r = e.SCRIPT_OPEN[0].image + e.SCRIPT_BODY[0].image, n = e.SCRIPT_OPEN[0].startOffset, i = e.SCRIPT_BODY[0].endOffset;
    return { type: "scriptElement", value: r, start: n, end: i };
  }
  styleElement(e) {
    const r = e.STYLE_OPEN[0].image + e.STYLE_BODY[0].image, n = e.STYLE_OPEN[0].startOffset, i = e.STYLE_BODY[0].endOffset;
    return { type: "styleElement", value: r, start: n, end: i };
  }
  edgeComment(e) {
    const r = e.EDGE_COMMENT[0].image, n = e.EDGE_COMMENT[0].startOffset, i = e.EDGE_COMMENT[0].endOffset;
    return { type: "edgeComment", value: r, start: n, end: i };
  }
  edgeMustache(e) {
    const r = e.EDGE_MUSTACHE[0].image, n = e.EDGE_MUSTACHE[0].startOffset, i = e.EDGE_MUSTACHE[0].endOffset;
    return { type: "edgeMustache", value: r, start: n, end: i };
  }
  edgeSafeMustache(e) {
    const r = e.EDGE_SAFE_MUSTACHE[0].image, n = e.EDGE_SAFE_MUSTACHE[0].startOffset, i = e.EDGE_SAFE_MUSTACHE[0].endOffset;
    return { type: "edgeSafeMustache", value: r, start: n, end: i };
  }
  edgeEscapedMustache(e) {
    const r = e.EDGE_ESCAPED_MUSTACHE[0].image, n = e.EDGE_ESCAPED_MUSTACHE[0].startOffset, i = e.EDGE_ESCAPED_MUSTACHE[0].endOffset;
    return { type: "edgeEscapedMustache", value: r, start: n, end: i };
  }
  edgeTag(e) {
    const r = e.EDGE_TAG[0].image, n = e.EDGE_TAG[0].startOffset, i = e.EDGE_TAG[0].endOffset;
    return { type: "edgeTag", value: r, start: n, end: i };
  }
  edgeTagProp(e) {
    const r = e.EDGE_TAG_PROP[0].image, n = e.EDGE_TAG_PROP[0].startOffset, i = e.EDGE_TAG_PROP[0].endOffset;
    return { type: "edgeTagProp", value: r, start: n, end: i };
  }
}
On = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakSet(), Ln = function(t) {
  return da(this, On).has(t);
};
const Vt = new ia(), hm = new lm();
function Qn(t) {
  const e = am.tokenize(t);
  Vt.input = e.tokens;
  const r = Vt.document();
  if (Vt.errors.length > 0)
    throw new Error(
      `Parsing Errors Detected: ${JSON.stringify(Vt.errors)}`
    );
  return hm.visit(r);
}
function fm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function pm(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Wt = {}, Gr, is;
function dm() {
  if (is) return Gr;
  is = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
  Gr = function(n, i) {
    i = i || {};
    var s = 1, o = 1;
    function c(L) {
      var A = L.match(/\n/g);
      A && (s += A.length);
      var b = L.lastIndexOf(`
`);
      o = ~b ? L.length - b : o + L.length;
    }
    function a() {
      var L = { line: s, column: o };
      return function(A) {
        return A.position = new u(L), y(), A;
      };
    }
    function u(L) {
      this.start = L, this.end = { line: s, column: o }, this.source = i.source;
    }
    u.prototype.content = n;
    var l = [];
    function h(L) {
      var A = new Error(i.source + ":" + s + ":" + o + ": " + L);
      if (A.reason = L, A.filename = i.source, A.line = s, A.column = o, A.source = n, i.silent)
        l.push(A);
      else
        throw A;
    }
    function m() {
      var L = g();
      return {
        type: "stylesheet",
        stylesheet: {
          source: i.source,
          rules: L,
          parsingErrors: l
        }
      };
    }
    function p() {
      return _(/^{\s*/);
    }
    function d() {
      return _(/^}/);
    }
    function g() {
      var L, A = [];
      for (y(), E(A); n.length && n.charAt(0) != "}" && (L = H() || ee()); )
        L !== !1 && (A.push(L), E(A));
      return A;
    }
    function _(L) {
      var A = L.exec(n);
      if (A) {
        var b = A[0];
        return c(b), n = n.slice(b.length), A;
      }
    }
    function y() {
      _(/^\s*/);
    }
    function E(L) {
      var A;
      for (L = L || []; A = T(); )
        A !== !1 && L.push(A);
      return L;
    }
    function T() {
      var L = a();
      if (!(n.charAt(0) != "/" || n.charAt(1) != "*")) {
        for (var A = 2; n.charAt(A) != "" && (n.charAt(A) != "*" || n.charAt(A + 1) != "/"); ) ++A;
        if (A += 2, n.charAt(A - 1) === "")
          return h("End of comment missing");
        var b = n.slice(2, A - 2);
        return o += 2, c(b), n = n.slice(A), o += 2, L({
          type: "comment",
          comment: b
        });
      }
    }
    function f() {
      var L = _(/^([^{]+)/);
      if (L)
        return e(L[0]).replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function(A) {
          return A.replace(/,/g, "‌");
        }).split(/\s*(?![^(]*\)),\s*/).map(function(A) {
          return A.replace(/\u200C/g, ",");
        });
    }
    function v() {
      var L = a(), A = _(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (A) {
        if (A = e(A[0]), !_(/^:\s*/)) return h("property missing ':'");
        var b = _(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/), Y = L({
          type: "declaration",
          property: A.replace(t, ""),
          value: b ? e(b[0]).replace(t, "") : ""
        });
        return _(/^[;\s]*/), Y;
      }
    }
    function R() {
      var L = [];
      if (!p()) return h("missing '{'");
      E(L);
      for (var A; A = v(); )
        A !== !1 && (L.push(A), E(L));
      return d() ? L : h("missing '}'");
    }
    function S() {
      for (var L, A = [], b = a(); L = _(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/); )
        A.push(L[1]), _(/^,\s*/);
      if (A.length)
        return b({
          type: "keyframe",
          values: A,
          declarations: R()
        });
    }
    function D() {
      var L = a(), b = _(/^@([-\w]+)?keyframes\s*/);
      if (b) {
        var A = b[1], b = _(/^([-\w]+)\s*/);
        if (!b) return h("@keyframes missing name");
        var Y = b[1];
        if (!p()) return h("@keyframes missing '{'");
        for (var V, ie = E(); V = S(); )
          ie.push(V), ie = ie.concat(E());
        return d() ? L({
          type: "keyframes",
          name: Y,
          vendor: A,
          keyframes: ie
        }) : h("@keyframes missing '}'");
      }
    }
    function Z() {
      var L = a(), A = _(/^@supports *([^{]+)/);
      if (A) {
        var b = e(A[1]);
        if (!p()) return h("@supports missing '{'");
        var Y = E().concat(g());
        return d() ? L({
          type: "supports",
          supports: b,
          rules: Y
        }) : h("@supports missing '}'");
      }
    }
    function F() {
      var L = a(), A = _(/^@host\s*/);
      if (A) {
        if (!p()) return h("@host missing '{'");
        var b = E().concat(g());
        return d() ? L({
          type: "host",
          rules: b
        }) : h("@host missing '}'");
      }
    }
    function I() {
      var L = a(), A = _(/^@media *([^{]+)/);
      if (A) {
        var b = e(A[1]);
        if (!p()) return h("@media missing '{'");
        var Y = E().concat(g());
        return d() ? L({
          type: "media",
          media: b,
          rules: Y
        }) : h("@media missing '}'");
      }
    }
    function w() {
      var L = a(), A = _(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
      if (A)
        return L({
          type: "custom-media",
          name: e(A[1]),
          media: e(A[2])
        });
    }
    function x() {
      var L = a(), A = _(/^@page */);
      if (A) {
        var b = f() || [];
        if (!p()) return h("@page missing '{'");
        for (var Y = E(), V; V = v(); )
          Y.push(V), Y = Y.concat(E());
        return d() ? L({
          type: "page",
          selectors: b,
          declarations: Y
        }) : h("@page missing '}'");
      }
    }
    function k() {
      var L = a(), A = _(/^@([-\w]+)?document *([^{]+)/);
      if (A) {
        var b = e(A[1]), Y = e(A[2]);
        if (!p()) return h("@document missing '{'");
        var V = E().concat(g());
        return d() ? L({
          type: "document",
          document: Y,
          vendor: b,
          rules: V
        }) : h("@document missing '}'");
      }
    }
    function O() {
      var L = a(), A = _(/^@font-face\s*/);
      if (A) {
        if (!p()) return h("@font-face missing '{'");
        for (var b = E(), Y; Y = v(); )
          b.push(Y), b = b.concat(E());
        return d() ? L({
          type: "font-face",
          declarations: b
        }) : h("@font-face missing '}'");
      }
    }
    var $ = q("import"), U = q("charset"), G = q("namespace");
    function q(L) {
      var A = new RegExp("^@" + L + "\\s*([^;]+);");
      return function() {
        var b = a(), Y = _(A);
        if (Y) {
          var V = { type: L };
          return V[L] = Y[1].trim(), b(V);
        }
      };
    }
    function H() {
      if (n[0] == "@")
        return D() || I() || w() || Z() || $() || U() || G() || k() || x() || F() || O();
    }
    function ee() {
      var L = a(), A = f();
      return A ? (E(), L({
        type: "rule",
        selectors: A,
        declarations: R()
      })) : h("selector missing");
    }
    return r(m());
  };
  function e(n) {
    return n ? n.replace(/^\s+|\s+$/g, "") : "";
  }
  function r(n, i) {
    var s = n && typeof n.type == "string", o = s ? n : i;
    for (var c in n) {
      var a = n[c];
      Array.isArray(a) ? a.forEach(function(u) {
        r(u, o);
      }) : a && typeof a == "object" && r(a, o);
    }
    return s && Object.defineProperty(n, "parent", {
      configurable: !0,
      writable: !0,
      enumerable: !1,
      value: i || null
    }), n;
  }
  return Gr;
}
var Br, ss;
function sa() {
  if (ss) return Br;
  ss = 1, Br = t;
  function t(e) {
    this.options = e || {};
  }
  return t.prototype.emit = function(e) {
    return e;
  }, t.prototype.visit = function(e) {
    return this[e.type](e);
  }, t.prototype.mapVisit = function(e, r) {
    var n = "";
    r = r || "";
    for (var i = 0, s = e.length; i < s; i++)
      n += this.visit(e[i]), r && i < s - 1 && (n += this.emit(r));
    return n;
  }, Br;
}
var Kt = { exports: {} }, os;
function oa() {
  return os || (os = 1, typeof Object.create == "function" ? Kt.exports = function(e, r) {
    r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }));
  } : Kt.exports = function(e, r) {
    if (r) {
      e.super_ = r;
      var n = function() {
      };
      n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
    }
  }), Kt.exports;
}
var Vr, as;
function mm() {
  if (as) return Vr;
  as = 1;
  var t = sa(), e = oa();
  Vr = r;
  function r(n) {
    t.call(this, n);
  }
  return e(r, t), r.prototype.compile = function(n) {
    return n.stylesheet.rules.map(this.visit, this).join("");
  }, r.prototype.comment = function(n) {
    return this.emit("", n.position);
  }, r.prototype.import = function(n) {
    return this.emit("@import " + n.import + ";", n.position);
  }, r.prototype.media = function(n) {
    return this.emit("@media " + n.media, n.position) + this.emit("{") + this.mapVisit(n.rules) + this.emit("}");
  }, r.prototype.document = function(n) {
    var i = "@" + (n.vendor || "") + "document " + n.document;
    return this.emit(i, n.position) + this.emit("{") + this.mapVisit(n.rules) + this.emit("}");
  }, r.prototype.charset = function(n) {
    return this.emit("@charset " + n.charset + ";", n.position);
  }, r.prototype.namespace = function(n) {
    return this.emit("@namespace " + n.namespace + ";", n.position);
  }, r.prototype.supports = function(n) {
    return this.emit("@supports " + n.supports, n.position) + this.emit("{") + this.mapVisit(n.rules) + this.emit("}");
  }, r.prototype.keyframes = function(n) {
    return this.emit("@" + (n.vendor || "") + "keyframes " + n.name, n.position) + this.emit("{") + this.mapVisit(n.keyframes) + this.emit("}");
  }, r.prototype.keyframe = function(n) {
    var i = n.declarations;
    return this.emit(n.values.join(","), n.position) + this.emit("{") + this.mapVisit(i) + this.emit("}");
  }, r.prototype.page = function(n) {
    var i = n.selectors.length ? n.selectors.join(", ") : "";
    return this.emit("@page " + i, n.position) + this.emit("{") + this.mapVisit(n.declarations) + this.emit("}");
  }, r.prototype["font-face"] = function(n) {
    return this.emit("@font-face", n.position) + this.emit("{") + this.mapVisit(n.declarations) + this.emit("}");
  }, r.prototype.host = function(n) {
    return this.emit("@host", n.position) + this.emit("{") + this.mapVisit(n.rules) + this.emit("}");
  }, r.prototype["custom-media"] = function(n) {
    return this.emit("@custom-media " + n.name + " " + n.media + ";", n.position);
  }, r.prototype.rule = function(n) {
    var i = n.declarations;
    return i.length ? this.emit(n.selectors.join(","), n.position) + this.emit("{") + this.mapVisit(i) + this.emit("}") : "";
  }, r.prototype.declaration = function(n) {
    return this.emit(n.property + ":" + n.value, n.position) + this.emit(";");
  }, Vr;
}
var Wr, cs;
function gm() {
  if (cs) return Wr;
  cs = 1;
  var t = sa(), e = oa();
  Wr = r;
  function r(n) {
    n = n || {}, t.call(this, n), this.indentation = n.indent;
  }
  return e(r, t), r.prototype.compile = function(n) {
    return this.stylesheet(n);
  }, r.prototype.stylesheet = function(n) {
    return this.mapVisit(n.stylesheet.rules, `

`);
  }, r.prototype.comment = function(n) {
    return this.emit(this.indent() + "/*" + n.comment + "*/", n.position);
  }, r.prototype.import = function(n) {
    return this.emit("@import " + n.import + ";", n.position);
  }, r.prototype.media = function(n) {
    return this.emit("@media " + n.media, n.position) + this.emit(
      ` {
` + this.indent(1)
    ) + this.mapVisit(n.rules, `

`) + this.emit(
      this.indent(-1) + `
}`
    );
  }, r.prototype.document = function(n) {
    var i = "@" + (n.vendor || "") + "document " + n.document;
    return this.emit(i, n.position) + this.emit(
      `  {
` + this.indent(1)
    ) + this.mapVisit(n.rules, `

`) + this.emit(
      this.indent(-1) + `
}`
    );
  }, r.prototype.charset = function(n) {
    return this.emit("@charset " + n.charset + ";", n.position);
  }, r.prototype.namespace = function(n) {
    return this.emit("@namespace " + n.namespace + ";", n.position);
  }, r.prototype.supports = function(n) {
    return this.emit("@supports " + n.supports, n.position) + this.emit(
      ` {
` + this.indent(1)
    ) + this.mapVisit(n.rules, `

`) + this.emit(
      this.indent(-1) + `
}`
    );
  }, r.prototype.keyframes = function(n) {
    return this.emit("@" + (n.vendor || "") + "keyframes " + n.name, n.position) + this.emit(
      ` {
` + this.indent(1)
    ) + this.mapVisit(n.keyframes, `
`) + this.emit(
      this.indent(-1) + "}"
    );
  }, r.prototype.keyframe = function(n) {
    var i = n.declarations;
    return this.emit(this.indent()) + this.emit(n.values.join(", "), n.position) + this.emit(
      ` {
` + this.indent(1)
    ) + this.mapVisit(i, `
`) + this.emit(
      this.indent(-1) + `
` + this.indent() + `}
`
    );
  }, r.prototype.page = function(n) {
    var i = n.selectors.length ? n.selectors.join(", ") + " " : "";
    return this.emit("@page " + i, n.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(n.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
  }, r.prototype["font-face"] = function(n) {
    return this.emit("@font-face ", n.position) + this.emit(`{
`) + this.emit(this.indent(1)) + this.mapVisit(n.declarations, `
`) + this.emit(this.indent(-1)) + this.emit(`
}`);
  }, r.prototype.host = function(n) {
    return this.emit("@host", n.position) + this.emit(
      ` {
` + this.indent(1)
    ) + this.mapVisit(n.rules, `

`) + this.emit(
      this.indent(-1) + `
}`
    );
  }, r.prototype["custom-media"] = function(n) {
    return this.emit("@custom-media " + n.name + " " + n.media + ";", n.position);
  }, r.prototype.rule = function(n) {
    var i = this.indent(), s = n.declarations;
    return s.length ? this.emit(n.selectors.map(function(o) {
      return i + o;
    }).join(`,
`), n.position) + this.emit(` {
`) + this.emit(this.indent(1)) + this.mapVisit(s, `
`) + this.emit(this.indent(-1)) + this.emit(`
` + this.indent() + "}") : "";
  }, r.prototype.declaration = function(n) {
    return this.emit(this.indent()) + this.emit(n.property + ": " + n.value, n.position) + this.emit(";");
  }, r.prototype.indent = function(n) {
    return this.level = this.level || 1, n != null ? (this.level += n, "") : Array(this.level).join(this.indentation || "  ");
  }, Wr;
}
var Ht = { exports: {} }, Et = {}, Kr = {}, zt = {}, qt = {}, us;
function vm() {
  if (us) return qt;
  us = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return qt.encode = function(e) {
    if (0 <= e && e < t.length)
      return t[e];
    throw new TypeError("Must be between 0 and 63: " + e);
  }, qt.decode = function(e) {
    var r = 65, n = 90, i = 97, s = 122, o = 48, c = 57, a = 43, u = 47, l = 26, h = 52;
    return r <= e && e <= n ? e - r : i <= e && e <= s ? e - i + l : o <= e && e <= c ? e - o + h : e == a ? 62 : e == u ? 63 : -1;
  }, qt;
}
var ls;
function aa() {
  if (ls) return zt;
  ls = 1;
  var t = vm(), e = 5, r = 1 << e, n = r - 1, i = r;
  function s(c) {
    return c < 0 ? (-c << 1) + 1 : (c << 1) + 0;
  }
  function o(c) {
    var a = (c & 1) === 1, u = c >> 1;
    return a ? -u : u;
  }
  return zt.encode = function(a) {
    var u = "", l, h = s(a);
    do
      l = h & n, h >>>= e, h > 0 && (l |= i), u += t.encode(l);
    while (h > 0);
    return u;
  }, zt.decode = function(a, u, l) {
    var h = a.length, m = 0, p = 0, d, g;
    do {
      if (u >= h)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (g = t.decode(a.charCodeAt(u++)), g === -1)
        throw new Error("Invalid base64 digit: " + a.charAt(u - 1));
      d = !!(g & i), g &= n, m = m + (g << p), p += e;
    } while (d);
    l.value = o(m), l.rest = u;
  }, zt;
}
var Hr = {}, hs;
function Dt() {
  return hs || (hs = 1, function(t) {
    function e(f, v, R) {
      if (v in f)
        return f[v];
      if (arguments.length === 3)
        return R;
      throw new Error('"' + v + '" is a required argument.');
    }
    t.getArg = e;
    var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, n = /^data:.+\,.+$/;
    function i(f) {
      var v = f.match(r);
      return v ? {
        scheme: v[1],
        auth: v[2],
        host: v[3],
        port: v[4],
        path: v[5]
      } : null;
    }
    t.urlParse = i;
    function s(f) {
      var v = "";
      return f.scheme && (v += f.scheme + ":"), v += "//", f.auth && (v += f.auth + "@"), f.host && (v += f.host), f.port && (v += ":" + f.port), f.path && (v += f.path), v;
    }
    t.urlGenerate = s;
    function o(f) {
      var v = f, R = i(f);
      if (R) {
        if (!R.path)
          return f;
        v = R.path;
      }
      for (var S = t.isAbsolute(v), D = v.split(/\/+/), Z, F = 0, I = D.length - 1; I >= 0; I--)
        Z = D[I], Z === "." ? D.splice(I, 1) : Z === ".." ? F++ : F > 0 && (Z === "" ? (D.splice(I + 1, F), F = 0) : (D.splice(I, 2), F--));
      return v = D.join("/"), v === "" && (v = S ? "/" : "."), R ? (R.path = v, s(R)) : v;
    }
    t.normalize = o;
    function c(f, v) {
      f === "" && (f = "."), v === "" && (v = ".");
      var R = i(v), S = i(f);
      if (S && (f = S.path || "/"), R && !R.scheme)
        return S && (R.scheme = S.scheme), s(R);
      if (R || v.match(n))
        return v;
      if (S && !S.host && !S.path)
        return S.host = v, s(S);
      var D = v.charAt(0) === "/" ? v : o(f.replace(/\/+$/, "") + "/" + v);
      return S ? (S.path = D, s(S)) : D;
    }
    t.join = c, t.isAbsolute = function(f) {
      return f.charAt(0) === "/" || r.test(f);
    };
    function a(f, v) {
      f === "" && (f = "."), f = f.replace(/\/$/, "");
      for (var R = 0; v.indexOf(f + "/") !== 0; ) {
        var S = f.lastIndexOf("/");
        if (S < 0 || (f = f.slice(0, S), f.match(/^([^\/]+:\/)?\/*$/)))
          return v;
        ++R;
      }
      return Array(R + 1).join("../") + v.substr(f.length + 1);
    }
    t.relative = a;
    var u = function() {
      var f = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in f);
    }();
    function l(f) {
      return f;
    }
    function h(f) {
      return p(f) ? "$" + f : f;
    }
    t.toSetString = u ? l : h;
    function m(f) {
      return p(f) ? f.slice(1) : f;
    }
    t.fromSetString = u ? l : m;
    function p(f) {
      if (!f)
        return !1;
      var v = f.length;
      if (v < 9 || f.charCodeAt(v - 1) !== 95 || f.charCodeAt(v - 2) !== 95 || f.charCodeAt(v - 3) !== 111 || f.charCodeAt(v - 4) !== 116 || f.charCodeAt(v - 5) !== 111 || f.charCodeAt(v - 6) !== 114 || f.charCodeAt(v - 7) !== 112 || f.charCodeAt(v - 8) !== 95 || f.charCodeAt(v - 9) !== 95)
        return !1;
      for (var R = v - 10; R >= 0; R--)
        if (f.charCodeAt(R) !== 36)
          return !1;
      return !0;
    }
    function d(f, v, R) {
      var S = _(f.source, v.source);
      return S !== 0 || (S = f.originalLine - v.originalLine, S !== 0) || (S = f.originalColumn - v.originalColumn, S !== 0 || R) || (S = f.generatedColumn - v.generatedColumn, S !== 0) || (S = f.generatedLine - v.generatedLine, S !== 0) ? S : _(f.name, v.name);
    }
    t.compareByOriginalPositions = d;
    function g(f, v, R) {
      var S = f.generatedLine - v.generatedLine;
      return S !== 0 || (S = f.generatedColumn - v.generatedColumn, S !== 0 || R) || (S = _(f.source, v.source), S !== 0) || (S = f.originalLine - v.originalLine, S !== 0) || (S = f.originalColumn - v.originalColumn, S !== 0) ? S : _(f.name, v.name);
    }
    t.compareByGeneratedPositionsDeflated = g;
    function _(f, v) {
      return f === v ? 0 : f === null ? 1 : v === null ? -1 : f > v ? 1 : -1;
    }
    function y(f, v) {
      var R = f.generatedLine - v.generatedLine;
      return R !== 0 || (R = f.generatedColumn - v.generatedColumn, R !== 0) || (R = _(f.source, v.source), R !== 0) || (R = f.originalLine - v.originalLine, R !== 0) || (R = f.originalColumn - v.originalColumn, R !== 0) ? R : _(f.name, v.name);
    }
    t.compareByGeneratedPositionsInflated = y;
    function E(f) {
      return JSON.parse(f.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = E;
    function T(f, v, R) {
      if (v = v || "", f && (f[f.length - 1] !== "/" && v[0] !== "/" && (f += "/"), v = f + v), R) {
        var S = i(R);
        if (!S)
          throw new Error("sourceMapURL could not be parsed");
        if (S.path) {
          var D = S.path.lastIndexOf("/");
          D >= 0 && (S.path = S.path.substring(0, D + 1));
        }
        v = c(s(S), v);
      }
      return o(v);
    }
    t.computeSourceURL = T;
  }(Hr)), Hr;
}
var zr = {}, fs;
function ca() {
  if (fs) return zr;
  fs = 1;
  var t = Dt(), e = Object.prototype.hasOwnProperty, r = typeof Map < "u";
  function n() {
    this._array = [], this._set = r ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return n.fromArray = function(s, o) {
    for (var c = new n(), a = 0, u = s.length; a < u; a++)
      c.add(s[a], o);
    return c;
  }, n.prototype.size = function() {
    return r ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, n.prototype.add = function(s, o) {
    var c = r ? s : t.toSetString(s), a = r ? this.has(s) : e.call(this._set, c), u = this._array.length;
    (!a || o) && this._array.push(s), a || (r ? this._set.set(s, u) : this._set[c] = u);
  }, n.prototype.has = function(s) {
    if (r)
      return this._set.has(s);
    var o = t.toSetString(s);
    return e.call(this._set, o);
  }, n.prototype.indexOf = function(s) {
    if (r) {
      var o = this._set.get(s);
      if (o >= 0)
        return o;
    } else {
      var c = t.toSetString(s);
      if (e.call(this._set, c))
        return this._set[c];
    }
    throw new Error('"' + s + '" is not in the set.');
  }, n.prototype.at = function(s) {
    if (s >= 0 && s < this._array.length)
      return this._array[s];
    throw new Error("No element indexed by " + s);
  }, n.prototype.toArray = function() {
    return this._array.slice();
  }, zr.ArraySet = n, zr;
}
var qr = {}, ps;
function Em() {
  if (ps) return qr;
  ps = 1;
  var t = Dt();
  function e(n, i) {
    var s = n.generatedLine, o = i.generatedLine, c = n.generatedColumn, a = i.generatedColumn;
    return o > s || o == s && a >= c || t.compareByGeneratedPositionsInflated(n, i) <= 0;
  }
  function r() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return r.prototype.unsortedForEach = function(i, s) {
    this._array.forEach(i, s);
  }, r.prototype.add = function(i) {
    e(this._last, i) ? (this._last = i, this._array.push(i)) : (this._sorted = !1, this._array.push(i));
  }, r.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, qr.MappingList = r, qr;
}
var ds;
function ua() {
  if (ds) return Kr;
  ds = 1;
  var t = aa(), e = Dt(), r = ca().ArraySet, n = Em().MappingList;
  function i(s) {
    s || (s = {}), this._file = e.getArg(s, "file", null), this._sourceRoot = e.getArg(s, "sourceRoot", null), this._skipValidation = e.getArg(s, "skipValidation", !1), this._sources = new r(), this._names = new r(), this._mappings = new n(), this._sourcesContents = null;
  }
  return i.prototype._version = 3, i.fromSourceMap = function(o) {
    var c = o.sourceRoot, a = new i({
      file: o.file,
      sourceRoot: c
    });
    return o.eachMapping(function(u) {
      var l = {
        generated: {
          line: u.generatedLine,
          column: u.generatedColumn
        }
      };
      u.source != null && (l.source = u.source, c != null && (l.source = e.relative(c, l.source)), l.original = {
        line: u.originalLine,
        column: u.originalColumn
      }, u.name != null && (l.name = u.name)), a.addMapping(l);
    }), o.sources.forEach(function(u) {
      var l = u;
      c !== null && (l = e.relative(c, u)), a._sources.has(l) || a._sources.add(l);
      var h = o.sourceContentFor(u);
      h != null && a.setSourceContent(u, h);
    }), a;
  }, i.prototype.addMapping = function(o) {
    var c = e.getArg(o, "generated"), a = e.getArg(o, "original", null), u = e.getArg(o, "source", null), l = e.getArg(o, "name", null);
    this._skipValidation || this._validateMapping(c, a, u, l), u != null && (u = String(u), this._sources.has(u) || this._sources.add(u)), l != null && (l = String(l), this._names.has(l) || this._names.add(l)), this._mappings.add({
      generatedLine: c.line,
      generatedColumn: c.column,
      originalLine: a != null && a.line,
      originalColumn: a != null && a.column,
      source: u,
      name: l
    });
  }, i.prototype.setSourceContent = function(o, c) {
    var a = o;
    this._sourceRoot != null && (a = e.relative(this._sourceRoot, a)), c != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[e.toSetString(a)] = c) : this._sourcesContents && (delete this._sourcesContents[e.toSetString(a)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, i.prototype.applySourceMap = function(o, c, a) {
    var u = c;
    if (c == null) {
      if (o.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      u = o.file;
    }
    var l = this._sourceRoot;
    l != null && (u = e.relative(l, u));
    var h = new r(), m = new r();
    this._mappings.unsortedForEach(function(p) {
      if (p.source === u && p.originalLine != null) {
        var d = o.originalPositionFor({
          line: p.originalLine,
          column: p.originalColumn
        });
        d.source != null && (p.source = d.source, a != null && (p.source = e.join(a, p.source)), l != null && (p.source = e.relative(l, p.source)), p.originalLine = d.line, p.originalColumn = d.column, d.name != null && (p.name = d.name));
      }
      var g = p.source;
      g != null && !h.has(g) && h.add(g);
      var _ = p.name;
      _ != null && !m.has(_) && m.add(_);
    }, this), this._sources = h, this._names = m, o.sources.forEach(function(p) {
      var d = o.sourceContentFor(p);
      d != null && (a != null && (p = e.join(a, p)), l != null && (p = e.relative(l, p)), this.setSourceContent(p, d));
    }, this);
  }, i.prototype._validateMapping = function(o, c, a, u) {
    if (c && typeof c.line != "number" && typeof c.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(o && "line" in o && "column" in o && o.line > 0 && o.column >= 0 && !c && !a && !u)) {
      if (o && "line" in o && "column" in o && c && "line" in c && "column" in c && o.line > 0 && o.column >= 0 && c.line > 0 && c.column >= 0 && a)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: o,
        source: a,
        original: c,
        name: u
      }));
    }
  }, i.prototype._serializeMappings = function() {
    for (var o = 0, c = 1, a = 0, u = 0, l = 0, h = 0, m = "", p, d, g, _, y = this._mappings.toArray(), E = 0, T = y.length; E < T; E++) {
      if (d = y[E], p = "", d.generatedLine !== c)
        for (o = 0; d.generatedLine !== c; )
          p += ";", c++;
      else if (E > 0) {
        if (!e.compareByGeneratedPositionsInflated(d, y[E - 1]))
          continue;
        p += ",";
      }
      p += t.encode(d.generatedColumn - o), o = d.generatedColumn, d.source != null && (_ = this._sources.indexOf(d.source), p += t.encode(_ - h), h = _, p += t.encode(d.originalLine - 1 - u), u = d.originalLine - 1, p += t.encode(d.originalColumn - a), a = d.originalColumn, d.name != null && (g = this._names.indexOf(d.name), p += t.encode(g - l), l = g)), m += p;
    }
    return m;
  }, i.prototype._generateSourcesContent = function(o, c) {
    return o.map(function(a) {
      if (!this._sourcesContents)
        return null;
      c != null && (a = e.relative(c, a));
      var u = e.toSetString(a);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, u) ? this._sourcesContents[u] : null;
    }, this);
  }, i.prototype.toJSON = function() {
    var o = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (o.file = this._file), this._sourceRoot != null && (o.sourceRoot = this._sourceRoot), this._sourcesContents && (o.sourcesContent = this._generateSourcesContent(o.sources, o.sourceRoot)), o;
  }, i.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Kr.SourceMapGenerator = i, Kr;
}
var Tt = {}, Yr = {}, ms;
function Tm() {
  return ms || (ms = 1, function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function e(r, n, i, s, o, c) {
      var a = Math.floor((n - r) / 2) + r, u = o(i, s[a], !0);
      return u === 0 ? a : u > 0 ? n - a > 1 ? e(a, n, i, s, o, c) : c == t.LEAST_UPPER_BOUND ? n < s.length ? n : -1 : a : a - r > 1 ? e(r, a, i, s, o, c) : c == t.LEAST_UPPER_BOUND ? a : r < 0 ? -1 : r;
    }
    t.search = function(n, i, s, o) {
      if (i.length === 0)
        return -1;
      var c = e(
        -1,
        i.length,
        n,
        i,
        s,
        o || t.GREATEST_LOWER_BOUND
      );
      if (c < 0)
        return -1;
      for (; c - 1 >= 0 && s(i[c], i[c - 1], !0) === 0; )
        --c;
      return c;
    };
  }(Yr)), Yr;
}
var Xr = {}, gs;
function _m() {
  if (gs) return Xr;
  gs = 1;
  function t(n, i, s) {
    var o = n[i];
    n[i] = n[s], n[s] = o;
  }
  function e(n, i) {
    return Math.round(n + Math.random() * (i - n));
  }
  function r(n, i, s, o) {
    if (s < o) {
      var c = e(s, o), a = s - 1;
      t(n, c, o);
      for (var u = n[o], l = s; l < o; l++)
        i(n[l], u) <= 0 && (a += 1, t(n, a, l));
      t(n, a + 1, l);
      var h = a + 1;
      r(n, i, s, h - 1), r(n, i, h + 1, o);
    }
  }
  return Xr.quickSort = function(n, i) {
    r(n, i, 0, n.length - 1);
  }, Xr;
}
var vs;
function ym() {
  if (vs) return Tt;
  vs = 1;
  var t = Dt(), e = Tm(), r = ca().ArraySet, n = aa(), i = _m().quickSort;
  function s(u, l) {
    var h = u;
    return typeof u == "string" && (h = t.parseSourceMapInput(u)), h.sections != null ? new a(h, l) : new o(h, l);
  }
  s.fromSourceMap = function(u, l) {
    return o.fromSourceMap(u, l);
  }, s.prototype._version = 3, s.prototype.__generatedMappings = null, Object.defineProperty(s.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), s.prototype.__originalMappings = null, Object.defineProperty(s.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), s.prototype._charIsMappingSeparator = function(l, h) {
    var m = l.charAt(h);
    return m === ";" || m === ",";
  }, s.prototype._parseMappings = function(l, h) {
    throw new Error("Subclasses must implement _parseMappings");
  }, s.GENERATED_ORDER = 1, s.ORIGINAL_ORDER = 2, s.GREATEST_LOWER_BOUND = 1, s.LEAST_UPPER_BOUND = 2, s.prototype.eachMapping = function(l, h, m) {
    var p = h || null, d = m || s.GENERATED_ORDER, g;
    switch (d) {
      case s.GENERATED_ORDER:
        g = this._generatedMappings;
        break;
      case s.ORIGINAL_ORDER:
        g = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var _ = this.sourceRoot;
    g.map(function(y) {
      var E = y.source === null ? null : this._sources.at(y.source);
      return E = t.computeSourceURL(_, E, this._sourceMapURL), {
        source: E,
        generatedLine: y.generatedLine,
        generatedColumn: y.generatedColumn,
        originalLine: y.originalLine,
        originalColumn: y.originalColumn,
        name: y.name === null ? null : this._names.at(y.name)
      };
    }, this).forEach(l, p);
  }, s.prototype.allGeneratedPositionsFor = function(l) {
    var h = t.getArg(l, "line"), m = {
      source: t.getArg(l, "source"),
      originalLine: h,
      originalColumn: t.getArg(l, "column", 0)
    };
    if (m.source = this._findSourceIndex(m.source), m.source < 0)
      return [];
    var p = [], d = this._findMapping(
      m,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      e.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var g = this._originalMappings[d];
      if (l.column === void 0)
        for (var _ = g.originalLine; g && g.originalLine === _; )
          p.push({
            line: t.getArg(g, "generatedLine", null),
            column: t.getArg(g, "generatedColumn", null),
            lastColumn: t.getArg(g, "lastGeneratedColumn", null)
          }), g = this._originalMappings[++d];
      else
        for (var y = g.originalColumn; g && g.originalLine === h && g.originalColumn == y; )
          p.push({
            line: t.getArg(g, "generatedLine", null),
            column: t.getArg(g, "generatedColumn", null),
            lastColumn: t.getArg(g, "lastGeneratedColumn", null)
          }), g = this._originalMappings[++d];
    }
    return p;
  }, Tt.SourceMapConsumer = s;
  function o(u, l) {
    var h = u;
    typeof u == "string" && (h = t.parseSourceMapInput(u));
    var m = t.getArg(h, "version"), p = t.getArg(h, "sources"), d = t.getArg(h, "names", []), g = t.getArg(h, "sourceRoot", null), _ = t.getArg(h, "sourcesContent", null), y = t.getArg(h, "mappings"), E = t.getArg(h, "file", null);
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    g && (g = t.normalize(g)), p = p.map(String).map(t.normalize).map(function(T) {
      return g && t.isAbsolute(g) && t.isAbsolute(T) ? t.relative(g, T) : T;
    }), this._names = r.fromArray(d.map(String), !0), this._sources = r.fromArray(p, !0), this._absoluteSources = this._sources.toArray().map(function(T) {
      return t.computeSourceURL(g, T, l);
    }), this.sourceRoot = g, this.sourcesContent = _, this._mappings = y, this._sourceMapURL = l, this.file = E;
  }
  o.prototype = Object.create(s.prototype), o.prototype.consumer = s, o.prototype._findSourceIndex = function(u) {
    var l = u;
    if (this.sourceRoot != null && (l = t.relative(this.sourceRoot, l)), this._sources.has(l))
      return this._sources.indexOf(l);
    var h;
    for (h = 0; h < this._absoluteSources.length; ++h)
      if (this._absoluteSources[h] == u)
        return h;
    return -1;
  }, o.fromSourceMap = function(l, h) {
    var m = Object.create(o.prototype), p = m._names = r.fromArray(l._names.toArray(), !0), d = m._sources = r.fromArray(l._sources.toArray(), !0);
    m.sourceRoot = l._sourceRoot, m.sourcesContent = l._generateSourcesContent(
      m._sources.toArray(),
      m.sourceRoot
    ), m.file = l._file, m._sourceMapURL = h, m._absoluteSources = m._sources.toArray().map(function(R) {
      return t.computeSourceURL(m.sourceRoot, R, h);
    });
    for (var g = l._mappings.toArray().slice(), _ = m.__generatedMappings = [], y = m.__originalMappings = [], E = 0, T = g.length; E < T; E++) {
      var f = g[E], v = new c();
      v.generatedLine = f.generatedLine, v.generatedColumn = f.generatedColumn, f.source && (v.source = d.indexOf(f.source), v.originalLine = f.originalLine, v.originalColumn = f.originalColumn, f.name && (v.name = p.indexOf(f.name)), y.push(v)), _.push(v);
    }
    return i(m.__originalMappings, t.compareByOriginalPositions), m;
  }, o.prototype._version = 3, Object.defineProperty(o.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function c() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  o.prototype._parseMappings = function(l, h) {
    for (var m = 1, p = 0, d = 0, g = 0, _ = 0, y = 0, E = l.length, T = 0, f = {}, v = {}, R = [], S = [], D, Z, F, I, w; T < E; )
      if (l.charAt(T) === ";")
        m++, T++, p = 0;
      else if (l.charAt(T) === ",")
        T++;
      else {
        for (D = new c(), D.generatedLine = m, I = T; I < E && !this._charIsMappingSeparator(l, I); I++)
          ;
        if (Z = l.slice(T, I), F = f[Z], F)
          T += Z.length;
        else {
          for (F = []; T < I; )
            n.decode(l, T, v), w = v.value, T = v.rest, F.push(w);
          if (F.length === 2)
            throw new Error("Found a source, but no line and column");
          if (F.length === 3)
            throw new Error("Found a source and line, but no column");
          f[Z] = F;
        }
        D.generatedColumn = p + F[0], p = D.generatedColumn, F.length > 1 && (D.source = _ + F[1], _ += F[1], D.originalLine = d + F[2], d = D.originalLine, D.originalLine += 1, D.originalColumn = g + F[3], g = D.originalColumn, F.length > 4 && (D.name = y + F[4], y += F[4])), S.push(D), typeof D.originalLine == "number" && R.push(D);
      }
    i(S, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = S, i(R, t.compareByOriginalPositions), this.__originalMappings = R;
  }, o.prototype._findMapping = function(l, h, m, p, d, g) {
    if (l[m] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + l[m]);
    if (l[p] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + l[p]);
    return e.search(l, h, d, g);
  }, o.prototype.computeColumnSpans = function() {
    for (var l = 0; l < this._generatedMappings.length; ++l) {
      var h = this._generatedMappings[l];
      if (l + 1 < this._generatedMappings.length) {
        var m = this._generatedMappings[l + 1];
        if (h.generatedLine === m.generatedLine) {
          h.lastGeneratedColumn = m.generatedColumn - 1;
          continue;
        }
      }
      h.lastGeneratedColumn = 1 / 0;
    }
  }, o.prototype.originalPositionFor = function(l) {
    var h = {
      generatedLine: t.getArg(l, "line"),
      generatedColumn: t.getArg(l, "column")
    }, m = this._findMapping(
      h,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(l, "bias", s.GREATEST_LOWER_BOUND)
    );
    if (m >= 0) {
      var p = this._generatedMappings[m];
      if (p.generatedLine === h.generatedLine) {
        var d = t.getArg(p, "source", null);
        d !== null && (d = this._sources.at(d), d = t.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var g = t.getArg(p, "name", null);
        return g !== null && (g = this._names.at(g)), {
          source: d,
          line: t.getArg(p, "originalLine", null),
          column: t.getArg(p, "originalColumn", null),
          name: g
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, o.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(l) {
      return l == null;
    }) : !1;
  }, o.prototype.sourceContentFor = function(l, h) {
    if (!this.sourcesContent)
      return null;
    var m = this._findSourceIndex(l);
    if (m >= 0)
      return this.sourcesContent[m];
    var p = l;
    this.sourceRoot != null && (p = t.relative(this.sourceRoot, p));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var g = p.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(g))
        return this.sourcesContent[this._sources.indexOf(g)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + p))
        return this.sourcesContent[this._sources.indexOf("/" + p)];
    }
    if (h)
      return null;
    throw new Error('"' + p + '" is not in the SourceMap.');
  }, o.prototype.generatedPositionFor = function(l) {
    var h = t.getArg(l, "source");
    if (h = this._findSourceIndex(h), h < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var m = {
      source: h,
      originalLine: t.getArg(l, "line"),
      originalColumn: t.getArg(l, "column")
    }, p = this._findMapping(
      m,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(l, "bias", s.GREATEST_LOWER_BOUND)
    );
    if (p >= 0) {
      var d = this._originalMappings[p];
      if (d.source === m.source)
        return {
          line: t.getArg(d, "generatedLine", null),
          column: t.getArg(d, "generatedColumn", null),
          lastColumn: t.getArg(d, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Tt.BasicSourceMapConsumer = o;
  function a(u, l) {
    var h = u;
    typeof u == "string" && (h = t.parseSourceMapInput(u));
    var m = t.getArg(h, "version"), p = t.getArg(h, "sections");
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    this._sources = new r(), this._names = new r();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = p.map(function(g) {
      if (g.url)
        throw new Error("Support for url field in sections not implemented.");
      var _ = t.getArg(g, "offset"), y = t.getArg(_, "line"), E = t.getArg(_, "column");
      if (y < d.line || y === d.line && E < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = _, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: y + 1,
          generatedColumn: E + 1
        },
        consumer: new s(t.getArg(g, "map"), l)
      };
    });
  }
  return a.prototype = Object.create(s.prototype), a.prototype.constructor = s, a.prototype._version = 3, Object.defineProperty(a.prototype, "sources", {
    get: function() {
      for (var u = [], l = 0; l < this._sections.length; l++)
        for (var h = 0; h < this._sections[l].consumer.sources.length; h++)
          u.push(this._sections[l].consumer.sources[h]);
      return u;
    }
  }), a.prototype.originalPositionFor = function(l) {
    var h = {
      generatedLine: t.getArg(l, "line"),
      generatedColumn: t.getArg(l, "column")
    }, m = e.search(
      h,
      this._sections,
      function(d, g) {
        var _ = d.generatedLine - g.generatedOffset.generatedLine;
        return _ || d.generatedColumn - g.generatedOffset.generatedColumn;
      }
    ), p = this._sections[m];
    return p ? p.consumer.originalPositionFor({
      line: h.generatedLine - (p.generatedOffset.generatedLine - 1),
      column: h.generatedColumn - (p.generatedOffset.generatedLine === h.generatedLine ? p.generatedOffset.generatedColumn - 1 : 0),
      bias: l.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, a.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(l) {
      return l.consumer.hasContentsOfAllSources();
    });
  }, a.prototype.sourceContentFor = function(l, h) {
    for (var m = 0; m < this._sections.length; m++) {
      var p = this._sections[m], d = p.consumer.sourceContentFor(l, !0);
      if (d)
        return d;
    }
    if (h)
      return null;
    throw new Error('"' + l + '" is not in the SourceMap.');
  }, a.prototype.generatedPositionFor = function(l) {
    for (var h = 0; h < this._sections.length; h++) {
      var m = this._sections[h];
      if (m.consumer._findSourceIndex(t.getArg(l, "source")) !== -1) {
        var p = m.consumer.generatedPositionFor(l);
        if (p) {
          var d = {
            line: p.line + (m.generatedOffset.generatedLine - 1),
            column: p.column + (m.generatedOffset.generatedLine === p.line ? m.generatedOffset.generatedColumn - 1 : 0)
          };
          return d;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, a.prototype._parseMappings = function(l, h) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var m = 0; m < this._sections.length; m++)
      for (var p = this._sections[m], d = p.consumer._generatedMappings, g = 0; g < d.length; g++) {
        var _ = d[g], y = p.consumer._sources.at(_.source);
        y = t.computeSourceURL(p.consumer.sourceRoot, y, this._sourceMapURL), this._sources.add(y), y = this._sources.indexOf(y);
        var E = null;
        _.name && (E = p.consumer._names.at(_.name), this._names.add(E), E = this._names.indexOf(E));
        var T = {
          source: y,
          generatedLine: _.generatedLine + (p.generatedOffset.generatedLine - 1),
          generatedColumn: _.generatedColumn + (p.generatedOffset.generatedLine === _.generatedLine ? p.generatedOffset.generatedColumn - 1 : 0),
          originalLine: _.originalLine,
          originalColumn: _.originalColumn,
          name: E
        };
        this.__generatedMappings.push(T), typeof T.originalLine == "number" && this.__originalMappings.push(T);
      }
    i(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), i(this.__originalMappings, t.compareByOriginalPositions);
  }, Tt.IndexedSourceMapConsumer = a, Tt;
}
var Qr = {}, Es;
function Am() {
  if (Es) return Qr;
  Es = 1;
  var t = ua().SourceMapGenerator, e = Dt(), r = /(\r?\n)/, n = 10, i = "$$$isSourceNode$$$";
  function s(o, c, a, u, l) {
    this.children = [], this.sourceContents = {}, this.line = o ?? null, this.column = c ?? null, this.source = a ?? null, this.name = l ?? null, this[i] = !0, u != null && this.add(u);
  }
  return s.fromStringWithSourceMap = function(c, a, u) {
    var l = new s(), h = c.split(r), m = 0, p = function() {
      var E = f(), T = f() || "";
      return E + T;
      function f() {
        return m < h.length ? h[m++] : void 0;
      }
    }, d = 1, g = 0, _ = null;
    return a.eachMapping(function(E) {
      if (_ !== null)
        if (d < E.generatedLine)
          y(_, p()), d++, g = 0;
        else {
          var T = h[m] || "", f = T.substr(0, E.generatedColumn - g);
          h[m] = T.substr(E.generatedColumn - g), g = E.generatedColumn, y(_, f), _ = E;
          return;
        }
      for (; d < E.generatedLine; )
        l.add(p()), d++;
      if (g < E.generatedColumn) {
        var T = h[m] || "";
        l.add(T.substr(0, E.generatedColumn)), h[m] = T.substr(E.generatedColumn), g = E.generatedColumn;
      }
      _ = E;
    }, this), m < h.length && (_ && y(_, p()), l.add(h.splice(m).join(""))), a.sources.forEach(function(E) {
      var T = a.sourceContentFor(E);
      T != null && (u != null && (E = e.join(u, E)), l.setSourceContent(E, T));
    }), l;
    function y(E, T) {
      if (E === null || E.source === void 0)
        l.add(T);
      else {
        var f = u ? e.join(u, E.source) : E.source;
        l.add(new s(
          E.originalLine,
          E.originalColumn,
          f,
          T,
          E.name
        ));
      }
    }
  }, s.prototype.add = function(c) {
    if (Array.isArray(c))
      c.forEach(function(a) {
        this.add(a);
      }, this);
    else if (c[i] || typeof c == "string")
      c && this.children.push(c);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + c
      );
    return this;
  }, s.prototype.prepend = function(c) {
    if (Array.isArray(c))
      for (var a = c.length - 1; a >= 0; a--)
        this.prepend(c[a]);
    else if (c[i] || typeof c == "string")
      this.children.unshift(c);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + c
      );
    return this;
  }, s.prototype.walk = function(c) {
    for (var a, u = 0, l = this.children.length; u < l; u++)
      a = this.children[u], a[i] ? a.walk(c) : a !== "" && c(a, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, s.prototype.join = function(c) {
    var a, u, l = this.children.length;
    if (l > 0) {
      for (a = [], u = 0; u < l - 1; u++)
        a.push(this.children[u]), a.push(c);
      a.push(this.children[u]), this.children = a;
    }
    return this;
  }, s.prototype.replaceRight = function(c, a) {
    var u = this.children[this.children.length - 1];
    return u[i] ? u.replaceRight(c, a) : typeof u == "string" ? this.children[this.children.length - 1] = u.replace(c, a) : this.children.push("".replace(c, a)), this;
  }, s.prototype.setSourceContent = function(c, a) {
    this.sourceContents[e.toSetString(c)] = a;
  }, s.prototype.walkSourceContents = function(c) {
    for (var a = 0, u = this.children.length; a < u; a++)
      this.children[a][i] && this.children[a].walkSourceContents(c);
    for (var l = Object.keys(this.sourceContents), a = 0, u = l.length; a < u; a++)
      c(e.fromSetString(l[a]), this.sourceContents[l[a]]);
  }, s.prototype.toString = function() {
    var c = "";
    return this.walk(function(a) {
      c += a;
    }), c;
  }, s.prototype.toStringWithSourceMap = function(c) {
    var a = {
      code: "",
      line: 1,
      column: 0
    }, u = new t(c), l = !1, h = null, m = null, p = null, d = null;
    return this.walk(function(g, _) {
      a.code += g, _.source !== null && _.line !== null && _.column !== null ? ((h !== _.source || m !== _.line || p !== _.column || d !== _.name) && u.addMapping({
        source: _.source,
        original: {
          line: _.line,
          column: _.column
        },
        generated: {
          line: a.line,
          column: a.column
        },
        name: _.name
      }), h = _.source, m = _.line, p = _.column, d = _.name, l = !0) : l && (u.addMapping({
        generated: {
          line: a.line,
          column: a.column
        }
      }), h = null, l = !1);
      for (var y = 0, E = g.length; y < E; y++)
        g.charCodeAt(y) === n ? (a.line++, a.column = 0, y + 1 === E ? (h = null, l = !1) : l && u.addMapping({
          source: _.source,
          original: {
            line: _.line,
            column: _.column
          },
          generated: {
            line: a.line,
            column: a.column
          },
          name: _.name
        })) : a.column++;
    }), this.walkSourceContents(function(g, _) {
      u.setSourceContent(g, _);
    }), { code: a.code, map: u };
  }, Qr.SourceNode = s, Qr;
}
var Ts;
function _s() {
  return Ts || (Ts = 1, Et.SourceMapGenerator = ua().SourceMapGenerator, Et.SourceMapConsumer = ym().SourceMapConsumer, Et.SourceNode = Am().SourceNode), Et;
}
var Jr = { exports: {} }, ys;
function Sm() {
  return ys || (ys = 1, function(t) {
    (function(e) {
      function r(i) {
        return typeof i == "function" ? i : typeof Buffer == "function" ? function(o) {
          //!! Deliberately using an API that's deprecated in node.js because
          //!! this file is for browsers and we expect them to cope with it.
          //!! Discussion: github.com/node-browser-compat/atob/pull/9
          return new Buffer(o, "base64").toString("binary");
        } : typeof e.base64js == "object" ? function(o) {
          var c = e.base64js.b64ToByteArray(o);
          return Array.prototype.map.call(c, function(a) {
            return String.fromCharCode(a);
          }).join("");
        } : function() {
          throw new Error("You're probably in an old browser or an iOS webworker. It might help to include beatgammit's base64-js.");
        };
      }
      var n = r(e.atob);
      e.atob = n, t && t.exports && (t.exports = n);
    })(window);
  }(Jr)), Jr.exports;
}
const Rm = {}, Om = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rm
}, Symbol.toStringTag, { value: "Module" })), dr = /* @__PURE__ */ pm(Om);
var Zr, As;
function Lm() {
  if (As) return Zr;
  As = 1;
  var t = "%[a-f0-9]{2}", e = new RegExp("(" + t + ")|([^%]+?)", "gi"), r = new RegExp("(" + t + ")+", "gi");
  function n(o, c) {
    try {
      return [decodeURIComponent(o.join(""))];
    } catch {
    }
    if (o.length === 1)
      return o;
    c = c || 1;
    var a = o.slice(0, c), u = o.slice(c);
    return Array.prototype.concat.call([], n(a), n(u));
  }
  function i(o) {
    try {
      return decodeURIComponent(o);
    } catch {
      for (var c = o.match(e) || [], a = 1; a < c.length; a++)
        o = n(c, a).join(""), c = o.match(e) || [];
      return o;
    }
  }
  function s(o) {
    for (var c = {
      "%FE%FF": "��",
      "%FF%FE": "��"
    }, a = r.exec(o); a; ) {
      try {
        c[a[0]] = decodeURIComponent(a[0]);
      } catch {
        var u = i(a[0]);
        u !== a[0] && (c[a[0]] = u);
      }
      a = r.exec(o);
    }
    c["%C2"] = "�";
    for (var l = Object.keys(c), h = 0; h < l.length; h++) {
      var m = l[h];
      o = o.replace(new RegExp(m, "g"), c[m]);
    }
    return o;
  }
  return Zr = function(o) {
    if (typeof o != "string")
      throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof o + "`");
    try {
      return o = o.replace(/\+/g, " "), decodeURIComponent(o);
    } catch {
      return s(o);
    }
  }, Zr;
}
var en, Ss;
function Im() {
  if (Ss) return en;
  Ss = 1;
  var t = Sm(), e = dr, r = dr, n = Lm();
  function i() {
    return Array.prototype.reduce.call(arguments, function(I, w) {
      return e.resolve(I, w);
    });
  }
  function s(I) {
    return r.sep === "\\" ? I.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : I;
  }
  function o(I) {
    return n(I.replace(/\+/g, "%2B"));
  }
  function c(I, w, x) {
    setImmediate(function() {
      I(w, x);
    });
  }
  function a(I, w) {
    try {
      return JSON.parse(I.replace(/^\)\]\}'/, ""));
    } catch (x) {
      throw x.sourceMapData = w, x;
    }
  }
  function u(I, w, x) {
    var k = o(w);
    try {
      return String(I(k));
    } catch (O) {
      throw O.sourceMapData = x, O;
    }
  }
  var l = /[#@] sourceMappingURL=([^\s'"]*)/, h = RegExp(
    `(?:/\\*(?:\\s*\r?
(?://)?)?(?:` + l.source + ")\\s*\\*/|//(?:" + l.source + "))\\s*"
  );
  function m(I) {
    var w = I.match(h);
    return w ? w[1] || w[2] || "" : null;
  }
  function p(I, w, x, k) {
    var O;
    try {
      O = f(I, w);
    } catch (U) {
      return c(k, U);
    }
    if (!O || O.map)
      return c(k, null, O);
    var $ = o(O.url);
    x($, function(U, G) {
      if (U)
        return U.sourceMapData = O, k(U);
      O.map = String(G);
      try {
        O.map = a(O.map, O);
      } catch (q) {
        return k(q);
      }
      k(null, O);
    });
  }
  function d(I, w, x) {
    var k = f(I, w);
    return !k || k.map || (k.map = u(x, k.url, k), k.map = a(k.map, k)), k;
  }
  var g = /^data:([^,;]*)(;[^,;]*)*(?:,(.*))?$/, _ = /^(?:application|text)\/json$/, y = "utf-8";
  function E(I) {
    for (var w = t(I), x = w.length, k = new Uint8Array(x), O = 0; O < x; O++)
      k[O] = w.charCodeAt(O);
    return k;
  }
  function T(I) {
    if (typeof TextDecoder > "u" || typeof Uint8Array > "u")
      return t(I);
    var w = E(I), x = new TextDecoder(y, { fatal: !0 });
    return x.decode(w);
  }
  function f(I, w) {
    w = s(w);
    var x = m(I);
    if (!x)
      return null;
    var k = x.match(g);
    if (k) {
      var O = k[1] || "text/plain", $ = k[2] || "", U = k[3] || "", G = {
        sourceMappingURL: x,
        url: null,
        sourcesRelativeTo: w,
        map: U
      };
      if (!_.test(O)) {
        var q = new Error("Unuseful data uri mime type: " + O);
        throw q.sourceMapData = G, q;
      }
      try {
        G.map = a(
          $ === ";base64" ? T(U) : decodeURIComponent(U),
          G
        );
      } catch (ee) {
        throw ee.sourceMapData = G, ee;
      }
      return G;
    }
    var H = i(w, x);
    return {
      sourceMappingURL: x,
      url: H,
      sourcesRelativeTo: H,
      map: null
    };
  }
  function v(I, w, x, k, O) {
    typeof k == "function" && (O = k, k = {});
    var $ = I.sources ? I.sources.length : 0, U = {
      sourcesResolved: [],
      sourcesContent: []
    };
    if ($ === 0) {
      c(O, null, U);
      return;
    }
    var G = function() {
      $--, $ === 0 && O(null, U);
    };
    D(I, w, k, function(q, H, ee) {
      if (U.sourcesResolved[ee] = q, typeof H == "string")
        U.sourcesContent[ee] = H, c(G, null);
      else {
        var L = o(q);
        x(L, function(A, b) {
          U.sourcesContent[ee] = A || String(b), G();
        });
      }
    });
  }
  function R(I, w, x, k) {
    var O = {
      sourcesResolved: [],
      sourcesContent: []
    };
    return !I.sources || I.sources.length === 0 || D(I, w, k, function($, U, G) {
      if (O.sourcesResolved[G] = $, x !== null)
        if (typeof U == "string")
          O.sourcesContent[G] = U;
        else {
          var q = o($);
          try {
            O.sourcesContent[G] = String(x(q));
          } catch (H) {
            O.sourcesContent[G] = H;
          }
        }
    }), O;
  }
  var S = /\/?$/;
  function D(I, w, x, k) {
    x = x || {}, w = s(w);
    for (var O, $, U, G = 0, q = I.sources.length; G < q; G++)
      U = null, typeof x.sourceRoot == "string" ? U = x.sourceRoot : typeof I.sourceRoot == "string" && x.sourceRoot !== !1 && (U = I.sourceRoot), U === null || U === "" ? O = i(w, I.sources[G]) : O = i(w, U.replace(S, "/"), I.sources[G]), $ = (I.sourcesContent || [])[G], k(O, $, G);
  }
  function Z(I, w, x, k, O) {
    if (typeof k == "function" && (O = k, k = {}), I === null) {
      var $ = w, U = {
        sourceMappingURL: null,
        url: $,
        sourcesRelativeTo: $,
        map: null
      }, G = o($);
      x(G, function(H, ee) {
        if (H)
          return H.sourceMapData = U, O(H);
        U.map = String(ee);
        try {
          U.map = a(U.map, U);
        } catch (L) {
          return O(L);
        }
        q(U);
      });
    } else
      p(I, w, x, function(H, ee) {
        if (H)
          return O(H);
        if (!ee)
          return O(null, null);
        q(ee);
      });
    function q(H) {
      v(H.map, H.sourcesRelativeTo, x, k, function(ee, L) {
        if (ee)
          return O(ee);
        H.sourcesResolved = L.sourcesResolved, H.sourcesContent = L.sourcesContent, O(null, H);
      });
    }
  }
  function F(I, w, x, k) {
    var O;
    if (I === null) {
      var $ = w;
      O = {
        sourceMappingURL: null,
        url: $,
        sourcesRelativeTo: $,
        map: null
      }, O.map = u(x, $, O), O.map = a(O.map, O);
    } else if (O = d(I, w, x), !O)
      return null;
    var U = R(O.map, O.sourcesRelativeTo, x, k);
    return O.sourcesResolved = U.sourcesResolved, O.sourcesContent = U.sourcesContent, O;
  }
  return en = {
    resolveSourceMap: p,
    resolveSourceMapSync: d,
    resolveSources: v,
    resolveSourcesSync: R,
    resolve: Z,
    resolveSync: F,
    parseMapToJSON: a
  }, en;
}
var Rs;
function Cm() {
  return Rs || (Rs = 1, function(t, e) {
    var r = _s().SourceMapGenerator, n = _s().SourceMapConsumer, i = Im(), s = dr, o = dr;
    t.exports = a;
    const c = function(u) {
      return o.sep === "\\" ? u.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/") : u;
    };
    function a(u) {
      u._comment = u.comment, u.map = new r(), u.position = { line: 1, column: 1 }, u.files = {};
      for (var l in e) u[l] = e[l];
    }
    e.updatePosition = function(u) {
      var l = u.match(/\n/g);
      l && (this.position.line += l.length);
      var h = u.lastIndexOf(`
`);
      this.position.column = ~h ? u.length - h : this.position.column + u.length;
    }, e.emit = function(u, l) {
      if (l) {
        var h = c(l.source || "source.css");
        this.map.addMapping({
          source: h,
          generated: {
            line: this.position.line,
            column: Math.max(this.position.column - 1, 0)
          },
          original: {
            line: l.start.line,
            column: l.start.column - 1
          }
        }), this.addFile(h, l);
      }
      return this.updatePosition(u), u;
    }, e.addFile = function(u, l) {
      typeof l.content == "string" && (Object.prototype.hasOwnProperty.call(this.files, u) || (this.files[u] = l.content));
    }, e.applySourceMaps = function() {
      Object.keys(this.files).forEach(function(u) {
        var l = this.files[u];
        if (this.map.setSourceContent(u, l), this.options.inputSourcemaps !== !1) {
          var h = i.resolveSync(
            l,
            u,
            s.readFileSync
          );
          if (h) {
            var m = new n(h.map), p = h.sourcesRelativeTo;
            this.map.applySourceMap(m, u, c(o.dirname(p)));
          }
        }
      }, this);
    }, e.comment = function(u) {
      return /^# sourceMappingURL=/.test(u.comment) ? this.emit("", u.position) : this._comment(u);
    };
  }(Ht, Ht.exports)), Ht.exports;
}
var tn, Os;
function Mm() {
  if (Os) return tn;
  Os = 1;
  var t = mm(), e = gm();
  return tn = function(r, n) {
    n = n || {};
    var i = n.compress ? new t(n) : new e(n);
    if (n.sourcemap) {
      var s = Cm();
      s(i);
      var c = i.compile(r);
      i.applySourceMaps();
      var o = n.sourcemap === "generator" ? i.map : i.map.toJSON();
      return { code: c, map: o };
    }
    var c = i.compile(r);
    return c;
  }, tn;
}
var Ls;
function bm() {
  return Ls || (Ls = 1, Wt.parse = dm(), Wt.stringify = Mm()), Wt;
}
var km = bm();
const Is = /* @__PURE__ */ fm(km), Nm = 2;
let rn = 0;
function Pm(t) {
  return t.type !== "linebreak" ? (rn = 0, !0) : (rn++, rn <= Nm);
}
function wm(t) {
  return t.replace(/{{--(?![\s\n\r\t])/g, "{{-- ").replace(new RegExp("(?<![\\s\\n\\r\\t])--}}", "g"), " --}}");
}
function nn(t) {
  const e = /{{{[^{}]*}}}/g, r = "__TRIPLE_CURLY__", n = [];
  return t = t.replace(e, (i) => {
    const s = `${r}${n.length}`;
    return n.push(i), s;
  }), t = t.replace(/{{\s*/g, "{{ ").replace(/\s*}}/g, " }}"), n.forEach((i, s) => {
    t = t.replace(`${r}${s}`, i);
  }), t;
}
function sn(t) {
  return t.replace(/{{{\s*/g, "{{{ ").replace(/\s*}}}/g, " }}}");
}
function xm(t, e, r, n, i, s) {
  const o = /<style\b[^>]*>([\s\S]*?)<\/style>/gi, c = /{{.*?}}/g, a = /{{{.*?}}}/g, u = /@(?!media|keyframes|supports|font-face|viewport|counter-style|page|document|font-feature-values)(?:!?\w+(?:\.\w+)*)\s*(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?[\s\S]*?@end/g, l = /@(assign|!component|debugger|eval|include|includeIf|inject|stack|svg|let|newError|vite|inertia|dd|dump)\s*(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?/g;
  return t.value.replace(o, (m, p) => {
    let d = [], g = 0;
    p = p.replace(
      a,
      (T) => {
        const f = `__SAFE_MUSTACHE_TAG_${g++}__;`;
        return d.push(T), f;
      }
    ), p = p.replace(
      c,
      (T) => {
        const f = `__MUSTACHE_TAG_${g++}__;`;
        return d.push(T), f;
      }
    ), p = p.replace(
      u,
      (T) => {
        const f = `/*__EDGE_TAG_BLOCK_${g++}__*/`;
        return d.push(T), f;
      }
    ), p = p.replace(
      l,
      (T) => {
        const f = `/*__SINGLE_EDGE_TAG_${g++}__*/`;
        return d.push(T), f;
      }
    );
    const _ = Is.parse(p), y = Is.stringify(_, { indent: n });
    return `${e}<style>
${y.split(`
`).map((T) => `${r}${T}`).join(`
`)}
${e}</style>`.replace(/\/\*__EDGE_TAG_BLOCK_\d+__\*\//g, (T) => {
      const f = d[parseInt(T.match(/\d+/)[0], 10)], v = new Qn(f);
      return new Jn(
        {
          ...i
        },
        s + 2
      ).handlePrint(v).trim();
    }).replace(/__MUSTACHE_TAG_\d+__;/g, (T) => d[parseInt(T.match(/\d+/)[0], 10)]).replace(/__SAFE_MUSTACHE_TAG_\d+__;/g, (T) => d[parseInt(T.match(/\d+/)[0], 10)]).replace(/\/\*__SINGLE_EDGE_TAG_\d+__\*\//g, (T) => d[parseInt(T.match(/\d+/)[0], 10)]);
  });
}
function Um(t, e, r, n, i, s) {
  const o = /<script\b([^>]*)>([\s\S]*?)<\/script>/i, c = /{{.*?}}/g, a = /{{{.*?}}}/g, u = /@(!?\w+(?:\.\w+)*)\s*(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?[\s\S]*?@end/g, l = /@(assign|!component|debugger|eval|include|includeIf|inject|stack|svg|let|newError|vite|inertia|dd|dump)\s*(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?/g, h = t.value.match(o);
  if (!h)
    throw new Error("Invalid <script> tag format");
  const [m, p, d] = h;
  let g = [], _ = 0, y = d.replace(a, (f) => {
    const v = `__SAFE_MUSTACHE_TAG_${_++}__`;
    return g.push(f), v;
  }).replace(c, (f) => {
    const v = `__MUSTACHE_TAG_${_++}__`;
    return g.push(f), v;
  }).replace(u, (f) => {
    const v = `/*__EDGE_TAG_BLOCK_${_++}__*/`;
    return g.push(f), v;
  }).replace(l, (f) => {
    const v = `/*__SINGLE_EDGE_TAG_${_++}__*/`;
    return g.push(f), v;
  });
  const E = pa.minify(
    {
      "file1.js": y
    },
    {
      compress: !1,
      keep_fnames: !0,
      mangle: !1,
      output: {
        beautify: !0,
        comments: "all",
        indent_level: e
      }
    }
  );
  if (E.error)
    throw new Error(JSON.stringify(E.error));
  const T = E.code.replace(/\/\*__EDGE_TAG_BLOCK_\d+__\*\//g, (f) => {
    const v = parseInt(f.match(/\d+/)[0], 10), R = g[v], S = new Qn(R);
    return new Jn(
      {
        ...i
      },
      0
    ).handlePrint(S);
  }).replace(/\/\*__SINGLE_EDGE_TAG_\d+__\*\//g, (f) => {
    const v = parseInt(f.match(/\d+/)[0], 10);
    return g[v];
  }).replace(/__SAFE_MUSTACHE_TAG_\d+__/g, (f) => {
    const v = parseInt(f.match(/\d+/)[0], 10);
    return g[v];
  }).replace(/__MUSTACHE_TAG_\d+__/g, (f) => {
    const v = parseInt(f.match(/\d+/)[0], 10);
    return g[v];
  });
  return `${r}<script${p}>
${T.split(`
`).map((f) => `${n}${f}`).join(`
`)}
${r}<\/script>`;
}
function la(t) {
  const e = t.match(/^\s*/);
  return e ? e[0].length : 0;
}
function Dm(t, e, r) {
  return `${e}${t.value.split(`
`).map((n, i) => {
    if (i === 0)
      return `${n.trim()}`;
    if (i === t.value.split(`
`).length - 1)
      return `${e}${n.trim()}`;
    const s = la(n);
    return `${" ".repeat(Math.max(e.length, s))}${n.trim()}`;
  }).join(`
`).replace(/[^\S\r\n]+$/g, "")}${r ? `
` : ""}`;
}
class Jn {
  constructor(e, r = void 0) {
    $e(this, "options");
    $e(this, "level");
    $e(this, "skipLevelOverride");
    $e(this, "useTabs");
    $e(this, "printWidth");
    $e(this, "tabWidth");
    $e(this, "singleAttributePerLine");
    $e(this, "inlineTags", /* @__PURE__ */ new Set([
      "a",
      "abbr",
      "acronym",
      "b",
      "bdi",
      "bdo",
      "big",
      "br",
      "button",
      "cite",
      "code",
      "data",
      "dfn",
      "em",
      "i",
      "img",
      "input",
      "kbd",
      "label",
      "mark",
      "meter",
      "q",
      "ruby",
      "rp",
      "rt",
      "s",
      "samp",
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "textarea",
      "time",
      "u",
      "var",
      "wbr",
      "feFuncR",
      "feFuncG",
      "feFuncB",
      "feFuncA"
    ]));
    this.options = e, this.level = r ?? 0, this.skipLevelOverride = !!r, this.useTabs = e.useTabs ?? !1, this.printWidth = e.printWidth ?? 80, this.tabWidth = e.tabWidth ?? 4, this.singleAttributePerLine = e.singleAttributePerLine ?? !1;
  }
  isInlineTag(e) {
    return this.inlineTags.has(e);
  }
  getIndent(e, r = "none") {
    const n = e !== void 0 ? Math.max(e, 0) : this.level;
    return this.adjustIndentLevel(r), `${this.useTabs ? "	" : " ".repeat(this.tabWidth * n)}`;
  }
  adjustIndentLevel(e) {
    e === "increase" ? this.level++ : e === "decrease" && this.level--;
  }
  formatMultilineValue(e, r, n = !0) {
    return e.split(`
`).map((i, s, o) => {
      if (s === 0)
        return `${n ? r : ""}${i.trim()}`;
      if (s === o.length - 1) return `${r}${i.trim()}`;
      const c = la(i);
      return `${" ".repeat(Math.max(r.length, c))}${i.trim()}`;
    }).join(`
`);
  }
  formatAttributes(e, r = "") {
    return e.map(
      (n) => n.attributeValue ? `${r}${n.attributeName}=${sn(nn(n.attributeValue)).trim()}` : `${r}${n.attributeName.trim()}`
    ).join(r ? `
` : " ");
  }
  formatEdgeSafeMustacheProps(e, r = "") {
    return e.map(
      (n) => `${r}${sn(n.value).trim()}`
    ).join(r ? `
` : " ");
  }
  formatEdgeMustacheProps(e, r = "") {
    return e.map((n) => `${r}${nn(n.value).trim()}`).join(r ? `
` : " ");
  }
  formatEdgeTagProps(e, r = "") {
    return e.map((n) => `${r}${n.value.trim()}`).join(r ? `
` : " ");
  }
  formatComments(e, r = "") {
    return e.map((n) => `${r}${n.value}`).join(r ? `
` : " ");
  }
  printDocumentNode(e) {
    return this.skipLevelOverride || (this.level = 0), e.children.filter(Pm).map(
      (r, n, i) => this.handlePrint(r, i[n - 1], i[n + 1])
    ).join("");
  }
  printDTDNode(e) {
    return `${this.getIndent()}${e.value}`;
  }
  printStandardNode(e) {
    const r = e.type === "scriptlet";
    return this.formatMultilineValue(
      e.value,
      r ? "" : this.getIndent()
    );
  }
  printScriptElementNode(e) {
    return Um(
      e,
      this.tabWidth,
      this.getIndent(),
      this.getIndent(this.level + 1),
      this.options,
      this.level
    );
  }
  printStyleElementNode(e) {
    return xm(
      e,
      this.getIndent(),
      this.getIndent(this.level + 1),
      this.getIndent(1),
      this.options,
      this.level
    );
  }
  printEdgeComment(e) {
    return this.formatMultilineValue(
      wm(e.value.trim()),
      this.getIndent()
    );
  }
  printEdgeMustacheNode(e, r, n) {
    const i = !((r == null ? void 0 : r.type) === "htmlText" || (r == null ? void 0 : r.type) === "edgeMustache" || (r == null ? void 0 : r.type) === "edgeEscapedMustache" || (r == null ? void 0 : r.type) === "edgeSafeMustache" || ((r == null ? void 0 : r.type) === "openingTag" || (r == null ? void 0 : r.type) === "voidTag" || (r == null ? void 0 : r.type) === "closingTag") && this.isInlineTag(r.tagName)), s = !((n == null ? void 0 : n.type) === "htmlText" || (n == null ? void 0 : n.type) === "edgeMustache" || (n == null ? void 0 : n.type) === "edgeEscapedMustache" || (n == null ? void 0 : n.type) === "edgeSafeMustache" || ((n == null ? void 0 : n.type) === "openingTag" || (n == null ? void 0 : n.type) === "voidTag" || (n == null ? void 0 : n.type) === "closingTag") && this.isInlineTag(n.tagName));
    let o = `${i ? this.getIndent() : ""}`;
    const c = e.type === "edgeSafeMustache" ? sn(e.value) : nn(e.value);
    return o += s ? c.replace(/[\r\n]+/g, "").trimEnd() + `
` : c, o;
  }
  printOpeningNode(e, r, n) {
    let i = this.formatAttributes(e.attributes), s = this.formatEdgeTagProps(e.edgeTagProps), o = this.formatEdgeSafeMustacheProps(
      e.edgeSafeMustaches
    ), c = this.formatEdgeMustacheProps(e.edgeMustaches), a = this.formatComments(e.comments);
    const u = `${i} ${o} ${c} ${s} ${a}`.length, l = this.getIndent(this.level + 1), h = this.getIndent(
      void 0,
      e.type === "openingTag" ? "increase" : "none"
    ), m = this.getIndent(
      e.type === "openingTag" ? this.level - 1 : this.level
    ), p = !this.isInlineTag(e.tagName) && (n == null ? void 0 : n.type) !== "linebreak", d = !(((r == null ? void 0 : r.type) === "htmlText" || (r == null ? void 0 : r.type) === "edgeMustache" || (r == null ? void 0 : r.type) === "edgeEscapedMustache" || (r == null ? void 0 : r.type) === "edgeSafeMustache") && this.isInlineTag(e.tagName));
    if (u > this.printWidth || this.singleAttributePerLine) {
      const _ = e.type == "voidTag" ? "/>" : ">";
      i = this.formatAttributes(e.attributes, l), s = this.formatEdgeTagProps(e.edgeTagProps, l), o = this.formatEdgeSafeMustacheProps(
        e.edgeSafeMustaches,
        l
      ), c = this.formatEdgeMustacheProps(
        e.edgeMustaches,
        l
      ), a = this.formatComments(e.comments, l);
      const y = u - 2 > 0 ? `
${m}` : "";
      return `${d ? h : ""}<${e.tagName}${i ? `
${i}` : ""}${c ? `
${c}` : ""}${o ? `
${o}` : ""}${s ? `
${this.formatMultilineValue(s, l)}` : ""}${a ? `
${this.formatMultilineValue(a, l)}` : ""}${y}${_}${p ? `
` : ""}`;
    }
    const g = e.type == "voidTag" ? " />" : ">";
    return `${d ? h : ""}<${e.tagName}${i ? ` ${i}` : ""}${c ? ` ${c}` : ""}${o ? ` ${o}` : ""}${s ? ` ${this.formatMultilineValue(s, "")}` : ""}${a ? ` ${this.formatMultilineValue(a, "")}` : ""}${g}${p ? `
` : ""}`;
  }
  printClosingNode(e, r, n) {
    const i = !this.isInlineTag(e.tagName) || (r == null ? void 0 : r.type) === "linebreak" || (r == null ? void 0 : r.type) === "edgeTag", s = (r == null ? void 0 : r.type) !== "linebreak" && (r == null ? void 0 : r.type) === "closingTag" && this.isInlineTag(r.tagName) && !this.isInlineTag(e.tagName), o = !this.isInlineTag(e.tagName) && (n == null ? void 0 : n.type) !== "linebreak" && !(((n == null ? void 0 : n.type) === "openingTag" || (n == null ? void 0 : n.type) === "voidTag" || (n == null ? void 0 : n.type) === "closingTag") && this.isInlineTag(n.tagName));
    return `${s ? `
` : ""}${i ? this.getIndent(this.level - 1, "decrease") : this.getIndent(0, "decrease")}</${e.tagName}>${o ? `
` : ""}`;
  }
  printEdgeTagNode(e, r) {
    var o, c;
    let n = "none", i = this.level;
    e.value.includes("@end") ? (n = "decrease", i--) : e.value.includes("@else") ? i-- : e.value.includes("@!") || e.value.includes("@let") || e.value.includes("@svg") || e.value.includes("@assign") || e.value.includes("@inject") || e.value.includes("@eval") || e.value.includes("@debugger") || e.value.includes("@newError") || e.value.includes("@vite") || e.value.includes("@inertia") || e.value.includes("@stack") || e.value.includes("@dd") || e.value.includes("@dump") || (o = e.value.match(/^@include\(.*/)) != null && o.length || (c = e.value.match(/^@includeIf\(.*/)) != null && c.length || !e.value.includes("(") ? n = "none" : n = "increase";
    const s = (r == null ? void 0 : r.type) !== "linebreak" && !e.value.includes(`
`);
    return Dm(
      e,
      this.getIndent(i, n),
      s
    );
  }
  printHtmlTextNode(e, r, n) {
    const i = !((r == null ? void 0 : r.type) === "scriptlet" || (r == null ? void 0 : r.type) === "edgeMustache" || (r == null ? void 0 : r.type) === "edgeSafeMustache" || (r == null ? void 0 : r.type) === "edgeEscapedMustache" || ((r == null ? void 0 : r.type) === "openingTag" || (r == null ? void 0 : r.type) === "voidTag" || (r == null ? void 0 : r.type) === "closingTag") && this.isInlineTag(r.tagName)), s = !((n == null ? void 0 : n.type) === "edgeMustache" || (n == null ? void 0 : n.type) === "edgeSafeMustache" || (n == null ? void 0 : n.type) === "edgeEscapedMustache" || (n == null ? void 0 : n.type) === "htmlText" || ((n == null ? void 0 : n.type) === "openingTag" || (n == null ? void 0 : n.type) === "voidTag" || (n == null ? void 0 : n.type) === "closingTag") && this.isInlineTag(n.tagName) || (n == null ? void 0 : n.type) === "scriptlet"), o = i ? this.getIndent() + e.value : e.value;
    return s ? `${o.trimEnd()}
` : o;
  }
  printLineBreak(e) {
    return e.value;
  }
  handlePrint(e, r = void 0, n = void 0) {
    switch (e.type) {
      case "document":
        return this.printDocumentNode(e);
      case "dtd":
        return this.printDTDNode(e);
      case "htmlComment":
      case "htmlConditionalComment":
      case "cdata":
      case "scriptlet":
        return this.printStandardNode(e);
      case "scriptElement":
        return this.printScriptElementNode(e);
      case "styleElement":
        return this.printStyleElementNode(e);
      case "edgeComment":
        return this.printEdgeComment(e);
      case "edgeMustache":
      case "edgeEscapedMustache":
      case "edgeSafeMustache":
        return this.printEdgeMustacheNode(e, r, n);
      case "openingTag":
      case "voidTag":
        return this.printOpeningNode(e, r, n);
      case "closingTag":
        return this.printClosingNode(e, r, n);
      case "edgeTag":
        return this.printEdgeTagNode(e, n);
      case "htmlText":
        return this.printHtmlTextNode(e, r, n);
      case "linebreak":
        return this.printLineBreak(e);
      default:
        return "";
    }
  }
}
function Fm(t, e) {
  const r = t.getNode();
  return new Jn(e).handlePrint(r);
}
const Gm = [
  {
    name: "EdgeJS",
    parsers: ["edgejs"],
    extensions: [".edge"],
    tmScope: "text.html.edge",
    aceMode: "html",
    linguistLanguageId: 460509620,
    vscodeLanguageIds: ["edge"]
  }
], Bm = {
  edgejs: {
    parse(t) {
      return Qn(t);
    },
    astFormat: "edgejs",
    locStart(t) {
      return t.start;
    },
    locEnd(t) {
      return t.end;
    }
  }
}, Vm = {
  edgejs: {
    print: Fm
  }
}, Wm = {
  useTabs: !1,
  tabWidth: 4,
  printWidth: 80,
  singleAttributePerLine: !1
}, Km = {};
export {
  Wm as defaultOptions,
  Gm as languages,
  Km as options,
  Bm as parsers,
  Vm as printers
};
