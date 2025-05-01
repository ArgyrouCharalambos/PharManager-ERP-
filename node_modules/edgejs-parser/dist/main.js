var Or = (t) => {
  throw TypeError(t);
};
var Nr = (t, e, n) => e.has(t) || Or("Cannot " + n);
var Cr = (t, e, n) => (Nr(t, e, "read from private field"), n ? n.call(t) : e.get(t)), mn = (t, e, n) => e.has(t) ? Or("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n);
var An = (t, e, n) => (Nr(t, e, "access private method"), n);
var vs = typeof global == "object" && global && global.Object === Object && global, ia = typeof self == "object" && self && self.Object === Object && self, pe = vs || ia || Function("return this")(), J = pe.Symbol, Ps = Object.prototype, aa = Ps.hasOwnProperty, oa = Ps.toString, st = J ? J.toStringTag : void 0;
function ca(t) {
  var e = aa.call(t, st), n = t[st];
  try {
    t[st] = void 0;
    var r = !0;
  } catch {
  }
  var s = oa.call(t);
  return r && (e ? t[st] = n : delete t[st]), s;
}
var ua = Object.prototype, la = ua.toString;
function ha(t) {
  return la.call(t);
}
var fa = "[object Null]", da = "[object Undefined]", Lr = J ? J.toStringTag : void 0;
function be(t) {
  return t == null ? t === void 0 ? da : fa : Lr && Lr in Object(t) ? ca(t) : ha(t);
}
function oe(t) {
  return t != null && typeof t == "object";
}
var pa = "[object Symbol]";
function Qt(t) {
  return typeof t == "symbol" || oe(t) && be(t) == pa;
}
function Jt(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, s = Array(r); ++n < r; )
    s[n] = e(t[n], n, t);
  return s;
}
var N = Array.isArray, yr = J ? J.prototype : void 0, vr = yr ? yr.toString : void 0;
function Ms(t) {
  if (typeof t == "string")
    return t;
  if (N(t))
    return Jt(t, Ms) + "";
  if (Qt(t))
    return vr ? vr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Ea = /\s/;
function ga(t) {
  for (var e = t.length; e-- && Ea.test(t.charAt(e)); )
    ;
  return e;
}
var Ta = /^\s+/;
function ma(t) {
  return t && t.slice(0, ga(t) + 1).replace(Ta, "");
}
function ee(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Pr = NaN, Aa = /^[-+]0x[0-9a-f]+$/i, Ra = /^0b[01]+$/i, Ia = /^0o[0-7]+$/i, Sa = parseInt;
function _a(t) {
  if (typeof t == "number")
    return t;
  if (Qt(t))
    return Pr;
  if (ee(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ee(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = ma(t);
  var n = Ra.test(t);
  return n || Ia.test(t) ? Sa(t.slice(2), n ? 2 : 8) : Aa.test(t) ? Pr : +t;
}
var Oa = 1 / 0, Na = 17976931348623157e292;
function Ca(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = _a(t), t === Oa || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * Na;
  }
  return t === t ? t : 0;
}
function en(t) {
  var e = Ca(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function Ye(t) {
  return t;
}
var La = "[object AsyncFunction]", ya = "[object Function]", va = "[object GeneratorFunction]", Pa = "[object Proxy]";
function Ne(t) {
  if (!ee(t))
    return !1;
  var e = be(t);
  return e == ya || e == va || e == La || e == Pa;
}
var Rn = pe["__core-js_shared__"], Mr = function() {
  var t = /[^.]+$/.exec(Rn && Rn.keys && Rn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ma(t) {
  return !!Mr && Mr in t;
}
var ka = Function.prototype, xa = ka.toString;
function He(t) {
  if (t != null) {
    try {
      return xa.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var ba = /[\\^$.*+?()[\]{}|]/g, wa = /^\[object .+?Constructor\]$/, Ua = Function.prototype, Fa = Object.prototype, Da = Ua.toString, $a = Fa.hasOwnProperty, Ga = RegExp(
  "^" + Da.call($a).replace(ba, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ba(t) {
  if (!ee(t) || Ma(t))
    return !1;
  var e = Ne(t) ? Ga : wa;
  return e.test(He(t));
}
function Ha(t, e) {
  return t == null ? void 0 : t[e];
}
function Ke(t, e) {
  var n = Ha(t, e);
  return Ba(n) ? n : void 0;
}
var yn = Ke(pe, "WeakMap"), kr = Object.create, Ka = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!ee(e))
      return {};
    if (kr)
      return kr(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
function Wa(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function b() {
}
function ja(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var za = 800, Va = 16, Ya = Date.now;
function Xa(t) {
  var e = 0, n = 0;
  return function() {
    var r = Ya(), s = Va - (r - n);
    if (n = r, s > 0) {
      if (++e >= za)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function qa(t) {
  return function() {
    return t;
  };
}
var Gt = function() {
  try {
    var t = Ke(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Za = Gt ? function(t, e) {
  return Gt(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: qa(e),
    writable: !0
  });
} : Ye, Qa = Xa(Za);
function ks(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function xs(t, e, n, r) {
  for (var s = t.length, i = n + -1; ++i < s; )
    if (e(t[i], i, t))
      return i;
  return -1;
}
function Ja(t) {
  return t !== t;
}
function eo(t, e, n) {
  for (var r = n - 1, s = t.length; ++r < s; )
    if (t[r] === e)
      return r;
  return -1;
}
function Yn(t, e, n) {
  return e === e ? eo(t, e, n) : xs(t, Ja, n);
}
function bs(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && Yn(t, e, 0) > -1;
}
var to = 9007199254740991, no = /^(?:0|[1-9]\d*)$/;
function tn(t, e) {
  var n = typeof t;
  return e = e ?? to, !!e && (n == "number" || n != "symbol" && no.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Xn(t, e, n) {
  e == "__proto__" && Gt ? Gt(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function Tt(t, e) {
  return t === e || t !== t && e !== e;
}
var ro = Object.prototype, so = ro.hasOwnProperty;
function nn(t, e, n) {
  var r = t[e];
  (!(so.call(t, e) && Tt(r, n)) || n === void 0 && !(e in t)) && Xn(t, e, n);
}
function qn(t, e, n, r) {
  var s = !n;
  n || (n = {});
  for (var i = -1, a = e.length; ++i < a; ) {
    var o = e[i], c = void 0;
    c === void 0 && (c = t[o]), s ? Xn(n, o, c) : nn(n, o, c);
  }
  return n;
}
var xr = Math.max;
function io(t, e, n) {
  return e = xr(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, s = -1, i = xr(r.length - e, 0), a = Array(i); ++s < i; )
      a[s] = r[e + s];
    s = -1;
    for (var o = Array(e + 1); ++s < e; )
      o[s] = r[s];
    return o[e] = n(a), Wa(t, this, o);
  };
}
function Zn(t, e) {
  return Qa(io(t, e, Ye), t + "");
}
var ao = 9007199254740991;
function Qn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ao;
}
function Ee(t) {
  return t != null && Qn(t.length) && !Ne(t);
}
function ws(t, e, n) {
  if (!ee(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? Ee(n) && tn(e, n.length) : r == "string" && e in n) ? Tt(n[e], t) : !1;
}
function oo(t) {
  return Zn(function(e, n) {
    var r = -1, s = n.length, i = s > 1 ? n[s - 1] : void 0, a = s > 2 ? n[2] : void 0;
    for (i = t.length > 3 && typeof i == "function" ? (s--, i) : void 0, a && ws(n[0], n[1], a) && (i = s < 3 ? void 0 : i, s = 1), e = Object(e); ++r < s; ) {
      var o = n[r];
      o && t(e, o, r, i);
    }
    return e;
  });
}
var co = Object.prototype;
function mt(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || co;
  return t === n;
}
function uo(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var lo = "[object Arguments]";
function br(t) {
  return oe(t) && be(t) == lo;
}
var Us = Object.prototype, ho = Us.hasOwnProperty, fo = Us.propertyIsEnumerable, rn = br(/* @__PURE__ */ function() {
  return arguments;
}()) ? br : function(t) {
  return oe(t) && ho.call(t, "callee") && !fo.call(t, "callee");
};
function po() {
  return !1;
}
var Fs = typeof exports == "object" && exports && !exports.nodeType && exports, wr = Fs && typeof module == "object" && module && !module.nodeType && module, Eo = wr && wr.exports === Fs, Ur = Eo ? pe.Buffer : void 0, go = Ur ? Ur.isBuffer : void 0, ft = go || po, To = "[object Arguments]", mo = "[object Array]", Ao = "[object Boolean]", Ro = "[object Date]", Io = "[object Error]", So = "[object Function]", _o = "[object Map]", Oo = "[object Number]", No = "[object Object]", Co = "[object RegExp]", Lo = "[object Set]", yo = "[object String]", vo = "[object WeakMap]", Po = "[object ArrayBuffer]", Mo = "[object DataView]", ko = "[object Float32Array]", xo = "[object Float64Array]", bo = "[object Int8Array]", wo = "[object Int16Array]", Uo = "[object Int32Array]", Fo = "[object Uint8Array]", Do = "[object Uint8ClampedArray]", $o = "[object Uint16Array]", Go = "[object Uint32Array]", P = {};
P[ko] = P[xo] = P[bo] = P[wo] = P[Uo] = P[Fo] = P[Do] = P[$o] = P[Go] = !0;
P[To] = P[mo] = P[Po] = P[Ao] = P[Mo] = P[Ro] = P[Io] = P[So] = P[_o] = P[Oo] = P[No] = P[Co] = P[Lo] = P[yo] = P[vo] = !1;
function Bo(t) {
  return oe(t) && Qn(t.length) && !!P[be(t)];
}
function sn(t) {
  return function(e) {
    return t(e);
  };
}
var Ds = typeof exports == "object" && exports && !exports.nodeType && exports, lt = Ds && typeof module == "object" && module && !module.nodeType && module, Ho = lt && lt.exports === Ds, In = Ho && vs.process, ke = function() {
  try {
    var t = lt && lt.require && lt.require("util").types;
    return t || In && In.binding && In.binding("util");
  } catch {
  }
}(), Fr = ke && ke.isTypedArray, Jn = Fr ? sn(Fr) : Bo, Ko = Object.prototype, Wo = Ko.hasOwnProperty;
function $s(t, e) {
  var n = N(t), r = !n && rn(t), s = !n && !r && ft(t), i = !n && !r && !s && Jn(t), a = n || r || s || i, o = a ? uo(t.length, String) : [], c = o.length;
  for (var u in t)
    (e || Wo.call(t, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    tn(u, c))) && o.push(u);
  return o;
}
function Gs(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var jo = Gs(Object.keys, Object), zo = Object.prototype, Vo = zo.hasOwnProperty;
function Bs(t) {
  if (!mt(t))
    return jo(t);
  var e = [];
  for (var n in Object(t))
    Vo.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function te(t) {
  return Ee(t) ? $s(t) : Bs(t);
}
var Yo = Object.prototype, Xo = Yo.hasOwnProperty, V = oo(function(t, e) {
  if (mt(e) || Ee(e)) {
    qn(e, te(e), t);
    return;
  }
  for (var n in e)
    Xo.call(e, n) && nn(t, n, e[n]);
});
function qo(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Zo = Object.prototype, Qo = Zo.hasOwnProperty;
function Jo(t) {
  if (!ee(t))
    return qo(t);
  var e = mt(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !Qo.call(t, r)) || n.push(r);
  return n;
}
function Hs(t) {
  return Ee(t) ? $s(t, !0) : Jo(t);
}
var ec = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tc = /^\w*$/;
function er(t, e) {
  if (N(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Qt(t) ? !0 : tc.test(t) || !ec.test(t) || e != null && t in Object(e);
}
var dt = Ke(Object, "create");
function nc() {
  this.__data__ = dt ? dt(null) : {}, this.size = 0;
}
function rc(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var sc = "__lodash_hash_undefined__", ic = Object.prototype, ac = ic.hasOwnProperty;
function oc(t) {
  var e = this.__data__;
  if (dt) {
    var n = e[t];
    return n === sc ? void 0 : n;
  }
  return ac.call(e, t) ? e[t] : void 0;
}
var cc = Object.prototype, uc = cc.hasOwnProperty;
function lc(t) {
  var e = this.__data__;
  return dt ? e[t] !== void 0 : uc.call(e, t);
}
var hc = "__lodash_hash_undefined__";
function fc(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = dt && e === void 0 ? hc : e, this;
}
function $e(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
$e.prototype.clear = nc;
$e.prototype.delete = rc;
$e.prototype.get = oc;
$e.prototype.has = lc;
$e.prototype.set = fc;
function dc() {
  this.__data__ = [], this.size = 0;
}
function an(t, e) {
  for (var n = t.length; n--; )
    if (Tt(t[n][0], e))
      return n;
  return -1;
}
var pc = Array.prototype, Ec = pc.splice;
function gc(t) {
  var e = this.__data__, n = an(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Ec.call(e, n, 1), --this.size, !0;
}
function Tc(t) {
  var e = this.__data__, n = an(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function mc(t) {
  return an(this.__data__, t) > -1;
}
function Ac(t, e) {
  var n = this.__data__, r = an(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function Ce(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Ce.prototype.clear = dc;
Ce.prototype.delete = gc;
Ce.prototype.get = Tc;
Ce.prototype.has = mc;
Ce.prototype.set = Ac;
var pt = Ke(pe, "Map");
function Rc() {
  this.size = 0, this.__data__ = {
    hash: new $e(),
    map: new (pt || Ce)(),
    string: new $e()
  };
}
function Ic(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function on(t, e) {
  var n = t.__data__;
  return Ic(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Sc(t) {
  var e = on(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function _c(t) {
  return on(this, t).get(t);
}
function Oc(t) {
  return on(this, t).has(t);
}
function Nc(t, e) {
  var n = on(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function Le(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Le.prototype.clear = Rc;
Le.prototype.delete = Sc;
Le.prototype.get = _c;
Le.prototype.has = Oc;
Le.prototype.set = Nc;
var Cc = "Expected a function";
function tr(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Cc);
  var n = function() {
    var r = arguments, s = e ? e.apply(this, r) : r[0], i = n.cache;
    if (i.has(s))
      return i.get(s);
    var a = t.apply(this, r);
    return n.cache = i.set(s, a) || i, a;
  };
  return n.cache = new (tr.Cache || Le)(), n;
}
tr.Cache = Le;
var Lc = 500;
function yc(t) {
  var e = tr(t, function(r) {
    return n.size === Lc && n.clear(), r;
  }), n = e.cache;
  return e;
}
var vc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Pc = /\\(\\)?/g, Mc = yc(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(vc, function(n, r, s, i) {
    e.push(s ? i.replace(Pc, "$1") : r || n);
  }), e;
});
function kc(t) {
  return t == null ? "" : Ms(t);
}
function cn(t, e) {
  return N(t) ? t : er(t, e) ? [t] : Mc(kc(t));
}
function At(t) {
  if (typeof t == "string" || Qt(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function nr(t, e) {
  e = cn(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[At(e[n++])];
  return n && n == r ? t : void 0;
}
function xc(t, e, n) {
  var r = t == null ? void 0 : nr(t, e);
  return r === void 0 ? n : r;
}
function rr(t, e) {
  for (var n = -1, r = e.length, s = t.length; ++n < r; )
    t[s + n] = e[n];
  return t;
}
var Dr = J ? J.isConcatSpreadable : void 0;
function bc(t) {
  return N(t) || rn(t) || !!(Dr && t && t[Dr]);
}
function sr(t, e, n, r, s) {
  var i = -1, a = t.length;
  for (n || (n = bc), s || (s = []); ++i < a; ) {
    var o = t[i];
    n(o) ? rr(s, o) : r || (s[s.length] = o);
  }
  return s;
}
function ie(t) {
  var e = t == null ? 0 : t.length;
  return e ? sr(t) : [];
}
var Ks = Gs(Object.getPrototypeOf, Object);
function Ws(t, e, n) {
  var r = -1, s = t.length;
  e < 0 && (e = -e > s ? 0 : s + e), n = n > s ? s : n, n < 0 && (n += s), s = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var i = Array(s); ++r < s; )
    i[r] = t[r + e];
  return i;
}
function wc(t, e, n, r) {
  var s = -1, i = t == null ? 0 : t.length;
  for (r && i && (n = t[++s]); ++s < i; )
    n = e(n, t[s], s, t);
  return n;
}
function Uc() {
  this.__data__ = new Ce(), this.size = 0;
}
function Fc(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function Dc(t) {
  return this.__data__.get(t);
}
function $c(t) {
  return this.__data__.has(t);
}
var Gc = 200;
function Bc(t, e) {
  var n = this.__data__;
  if (n instanceof Ce) {
    var r = n.__data__;
    if (!pt || r.length < Gc - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new Le(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function de(t) {
  var e = this.__data__ = new Ce(t);
  this.size = e.size;
}
de.prototype.clear = Uc;
de.prototype.delete = Fc;
de.prototype.get = Dc;
de.prototype.has = $c;
de.prototype.set = Bc;
function Hc(t, e) {
  return t && qn(e, te(e), t);
}
var js = typeof exports == "object" && exports && !exports.nodeType && exports, $r = js && typeof module == "object" && module && !module.nodeType && module, Kc = $r && $r.exports === js, Gr = Kc ? pe.Buffer : void 0, Br = Gr ? Gr.allocUnsafe : void 0;
function Wc(t, e) {
  var n = t.length, r = Br ? Br(n) : new t.constructor(n);
  return t.copy(r), r;
}
function ir(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, s = 0, i = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (i[s++] = a);
  }
  return i;
}
function zs() {
  return [];
}
var jc = Object.prototype, zc = jc.propertyIsEnumerable, Hr = Object.getOwnPropertySymbols, ar = Hr ? function(t) {
  return t == null ? [] : (t = Object(t), ir(Hr(t), function(e) {
    return zc.call(t, e);
  }));
} : zs;
function Vc(t, e) {
  return qn(t, ar(t), e);
}
var Yc = Object.getOwnPropertySymbols, Xc = Yc ? function(t) {
  for (var e = []; t; )
    rr(e, ar(t)), t = Ks(t);
  return e;
} : zs;
function Vs(t, e, n) {
  var r = e(t);
  return N(t) ? r : rr(r, n(t));
}
function vn(t) {
  return Vs(t, te, ar);
}
function qc(t) {
  return Vs(t, Hs, Xc);
}
var Pn = Ke(pe, "DataView"), Mn = Ke(pe, "Promise"), Ve = Ke(pe, "Set"), Kr = "[object Map]", Zc = "[object Object]", Wr = "[object Promise]", jr = "[object Set]", zr = "[object WeakMap]", Vr = "[object DataView]", Qc = He(Pn), Jc = He(pt), eu = He(Mn), tu = He(Ve), nu = He(yn), Z = be;
(Pn && Z(new Pn(new ArrayBuffer(1))) != Vr || pt && Z(new pt()) != Kr || Mn && Z(Mn.resolve()) != Wr || Ve && Z(new Ve()) != jr || yn && Z(new yn()) != zr) && (Z = function(t) {
  var e = be(t), n = e == Zc ? t.constructor : void 0, r = n ? He(n) : "";
  if (r)
    switch (r) {
      case Qc:
        return Vr;
      case Jc:
        return Kr;
      case eu:
        return Wr;
      case tu:
        return jr;
      case nu:
        return zr;
    }
  return e;
});
var ru = Object.prototype, su = ru.hasOwnProperty;
function iu(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && su.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var Bt = pe.Uint8Array;
function au(t) {
  var e = new t.constructor(t.byteLength);
  return new Bt(e).set(new Bt(t)), e;
}
function ou(t, e) {
  var n = t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var cu = /\w*$/;
function uu(t) {
  var e = new t.constructor(t.source, cu.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var Yr = J ? J.prototype : void 0, Xr = Yr ? Yr.valueOf : void 0;
function lu(t) {
  return Xr ? Object(Xr.call(t)) : {};
}
function hu(t, e) {
  var n = t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var fu = "[object Boolean]", du = "[object Date]", pu = "[object Map]", Eu = "[object Number]", gu = "[object RegExp]", Tu = "[object Set]", mu = "[object String]", Au = "[object Symbol]", Ru = "[object ArrayBuffer]", Iu = "[object DataView]", Su = "[object Float32Array]", _u = "[object Float64Array]", Ou = "[object Int8Array]", Nu = "[object Int16Array]", Cu = "[object Int32Array]", Lu = "[object Uint8Array]", yu = "[object Uint8ClampedArray]", vu = "[object Uint16Array]", Pu = "[object Uint32Array]";
function Mu(t, e, n) {
  var r = t.constructor;
  switch (e) {
    case Ru:
      return au(t);
    case fu:
    case du:
      return new r(+t);
    case Iu:
      return ou(t);
    case Su:
    case _u:
    case Ou:
    case Nu:
    case Cu:
    case Lu:
    case yu:
    case vu:
    case Pu:
      return hu(t);
    case pu:
      return new r();
    case Eu:
    case mu:
      return new r(t);
    case gu:
      return uu(t);
    case Tu:
      return new r();
    case Au:
      return lu(t);
  }
}
function ku(t) {
  return typeof t.constructor == "function" && !mt(t) ? Ka(Ks(t)) : {};
}
var xu = "[object Map]";
function bu(t) {
  return oe(t) && Z(t) == xu;
}
var qr = ke && ke.isMap, wu = qr ? sn(qr) : bu, Uu = "[object Set]";
function Fu(t) {
  return oe(t) && Z(t) == Uu;
}
var Zr = ke && ke.isSet, Du = Zr ? sn(Zr) : Fu, Ys = "[object Arguments]", $u = "[object Array]", Gu = "[object Boolean]", Bu = "[object Date]", Hu = "[object Error]", Xs = "[object Function]", Ku = "[object GeneratorFunction]", Wu = "[object Map]", ju = "[object Number]", qs = "[object Object]", zu = "[object RegExp]", Vu = "[object Set]", Yu = "[object String]", Xu = "[object Symbol]", qu = "[object WeakMap]", Zu = "[object ArrayBuffer]", Qu = "[object DataView]", Ju = "[object Float32Array]", el = "[object Float64Array]", tl = "[object Int8Array]", nl = "[object Int16Array]", rl = "[object Int32Array]", sl = "[object Uint8Array]", il = "[object Uint8ClampedArray]", al = "[object Uint16Array]", ol = "[object Uint32Array]", y = {};
y[Ys] = y[$u] = y[Zu] = y[Qu] = y[Gu] = y[Bu] = y[Ju] = y[el] = y[tl] = y[nl] = y[rl] = y[Wu] = y[ju] = y[qs] = y[zu] = y[Vu] = y[Yu] = y[Xu] = y[sl] = y[il] = y[al] = y[ol] = !0;
y[Hu] = y[Xs] = y[qu] = !1;
function xt(t, e, n, r, s, i) {
  var a;
  if (a !== void 0)
    return a;
  if (!ee(t))
    return t;
  var o = N(t);
  if (o)
    return a = iu(t), ja(t, a);
  var c = Z(t), u = c == Xs || c == Ku;
  if (ft(t))
    return Wc(t);
  if (c == qs || c == Ys || u && !s)
    return a = u ? {} : ku(t), Vc(t, Hc(a, t));
  if (!y[c])
    return s ? t : {};
  a = Mu(t, c), i || (i = new de());
  var l = i.get(t);
  if (l)
    return l;
  i.set(t, a), Du(t) ? t.forEach(function(p) {
    a.add(xt(p, e, n, p, t, i));
  }) : wu(t) && t.forEach(function(p, T) {
    a.set(T, xt(p, e, n, T, t, i));
  });
  var h = vn, f = o ? void 0 : h(t);
  return ks(f || t, function(p, T) {
    f && (T = p, p = t[T]), nn(a, T, xt(p, e, n, T, t, i));
  }), a;
}
var cl = 4;
function D(t) {
  return xt(t, cl);
}
function Rt(t) {
  for (var e = -1, n = t == null ? 0 : t.length, r = 0, s = []; ++e < n; ) {
    var i = t[e];
    i && (s[r++] = i);
  }
  return s;
}
var ul = "__lodash_hash_undefined__";
function ll(t) {
  return this.__data__.set(t, ul), this;
}
function hl(t) {
  return this.__data__.has(t);
}
function Xe(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new Le(); ++e < n; )
    this.add(t[e]);
}
Xe.prototype.add = Xe.prototype.push = ll;
Xe.prototype.has = hl;
function Zs(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function or(t, e) {
  return t.has(e);
}
var fl = 1, dl = 2;
function Qs(t, e, n, r, s, i) {
  var a = n & fl, o = t.length, c = e.length;
  if (o != c && !(a && c > o))
    return !1;
  var u = i.get(t), l = i.get(e);
  if (u && l)
    return u == e && l == t;
  var h = -1, f = !0, p = n & dl ? new Xe() : void 0;
  for (i.set(t, e), i.set(e, t); ++h < o; ) {
    var T = t[h], I = e[h];
    if (r)
      var O = a ? r(I, T, h, e, t, i) : r(T, I, h, t, e, i);
    if (O !== void 0) {
      if (O)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!Zs(e, function(g, E) {
        if (!or(p, E) && (T === g || s(T, g, n, r, i)))
          return p.push(E);
      })) {
        f = !1;
        break;
      }
    } else if (!(T === I || s(T, I, n, r, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), f;
}
function pl(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, s) {
    n[++e] = [s, r];
  }), n;
}
function cr(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var El = 1, gl = 2, Tl = "[object Boolean]", ml = "[object Date]", Al = "[object Error]", Rl = "[object Map]", Il = "[object Number]", Sl = "[object RegExp]", _l = "[object Set]", Ol = "[object String]", Nl = "[object Symbol]", Cl = "[object ArrayBuffer]", Ll = "[object DataView]", Qr = J ? J.prototype : void 0, Sn = Qr ? Qr.valueOf : void 0;
function yl(t, e, n, r, s, i, a) {
  switch (n) {
    case Ll:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case Cl:
      return !(t.byteLength != e.byteLength || !i(new Bt(t), new Bt(e)));
    case Tl:
    case ml:
    case Il:
      return Tt(+t, +e);
    case Al:
      return t.name == e.name && t.message == e.message;
    case Sl:
    case Ol:
      return t == e + "";
    case Rl:
      var o = pl;
    case _l:
      var c = r & El;
      if (o || (o = cr), t.size != e.size && !c)
        return !1;
      var u = a.get(t);
      if (u)
        return u == e;
      r |= gl, a.set(t, e);
      var l = Qs(o(t), o(e), r, s, i, a);
      return a.delete(t), l;
    case Nl:
      if (Sn)
        return Sn.call(t) == Sn.call(e);
  }
  return !1;
}
var vl = 1, Pl = Object.prototype, Ml = Pl.hasOwnProperty;
function kl(t, e, n, r, s, i) {
  var a = n & vl, o = vn(t), c = o.length, u = vn(e), l = u.length;
  if (c != l && !a)
    return !1;
  for (var h = c; h--; ) {
    var f = o[h];
    if (!(a ? f in e : Ml.call(e, f)))
      return !1;
  }
  var p = i.get(t), T = i.get(e);
  if (p && T)
    return p == e && T == t;
  var I = !0;
  i.set(t, e), i.set(e, t);
  for (var O = a; ++h < c; ) {
    f = o[h];
    var g = t[f], E = e[f];
    if (r)
      var d = a ? r(E, g, f, e, t, i) : r(g, E, f, t, e, i);
    if (!(d === void 0 ? g === E || s(g, E, n, r, i) : d)) {
      I = !1;
      break;
    }
    O || (O = f == "constructor");
  }
  if (I && !O) {
    var m = t.constructor, L = e.constructor;
    m != L && "constructor" in t && "constructor" in e && !(typeof m == "function" && m instanceof m && typeof L == "function" && L instanceof L) && (I = !1);
  }
  return i.delete(t), i.delete(e), I;
}
var xl = 1, Jr = "[object Arguments]", es = "[object Array]", Lt = "[object Object]", bl = Object.prototype, ts = bl.hasOwnProperty;
function wl(t, e, n, r, s, i) {
  var a = N(t), o = N(e), c = a ? es : Z(t), u = o ? es : Z(e);
  c = c == Jr ? Lt : c, u = u == Jr ? Lt : u;
  var l = c == Lt, h = u == Lt, f = c == u;
  if (f && ft(t)) {
    if (!ft(e))
      return !1;
    a = !0, l = !1;
  }
  if (f && !l)
    return i || (i = new de()), a || Jn(t) ? Qs(t, e, n, r, s, i) : yl(t, e, c, n, r, s, i);
  if (!(n & xl)) {
    var p = l && ts.call(t, "__wrapped__"), T = h && ts.call(e, "__wrapped__");
    if (p || T) {
      var I = p ? t.value() : t, O = T ? e.value() : e;
      return i || (i = new de()), s(I, O, n, r, i);
    }
  }
  return f ? (i || (i = new de()), kl(t, e, n, r, s, i)) : !1;
}
function ur(t, e, n, r, s) {
  return t === e ? !0 : t == null || e == null || !oe(t) && !oe(e) ? t !== t && e !== e : wl(t, e, n, r, ur, s);
}
var Ul = 1, Fl = 2;
function Dl(t, e, n, r) {
  var s = n.length, i = s;
  if (t == null)
    return !i;
  for (t = Object(t); s--; ) {
    var a = n[s];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++s < i; ) {
    a = n[s];
    var o = a[0], c = t[o], u = a[1];
    if (a[2]) {
      if (c === void 0 && !(o in t))
        return !1;
    } else {
      var l = new de(), h;
      if (!(h === void 0 ? ur(u, c, Ul | Fl, r, l) : h))
        return !1;
    }
  }
  return !0;
}
function Js(t) {
  return t === t && !ee(t);
}
function $l(t) {
  for (var e = te(t), n = e.length; n--; ) {
    var r = e[n], s = t[r];
    e[n] = [r, s, Js(s)];
  }
  return e;
}
function ei(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Gl(t) {
  var e = $l(t);
  return e.length == 1 && e[0][2] ? ei(e[0][0], e[0][1]) : function(n) {
    return n === t || Dl(n, t, e);
  };
}
function Bl(t, e) {
  return t != null && e in Object(t);
}
function ti(t, e, n) {
  e = cn(e, t);
  for (var r = -1, s = e.length, i = !1; ++r < s; ) {
    var a = At(e[r]);
    if (!(i = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return i || ++r != s ? i : (s = t == null ? 0 : t.length, !!s && Qn(s) && tn(a, s) && (N(t) || rn(t)));
}
function Hl(t, e) {
  return t != null && ti(t, e, Bl);
}
var Kl = 1, Wl = 2;
function jl(t, e) {
  return er(t) && Js(e) ? ei(At(t), e) : function(n) {
    var r = xc(n, t);
    return r === void 0 && r === e ? Hl(n, t) : ur(e, r, Kl | Wl);
  };
}
function zl(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function Vl(t) {
  return function(e) {
    return nr(e, t);
  };
}
function Yl(t) {
  return er(t) ? zl(At(t)) : Vl(t);
}
function ge(t) {
  return typeof t == "function" ? t : t == null ? Ye : typeof t == "object" ? N(t) ? jl(t[0], t[1]) : Gl(t) : Yl(t);
}
function Xl(t, e, n, r) {
  for (var s = -1, i = t == null ? 0 : t.length; ++s < i; ) {
    var a = t[s];
    e(r, a, n(a), t);
  }
  return r;
}
function ql(t) {
  return function(e, n, r) {
    for (var s = -1, i = Object(e), a = r(e), o = a.length; o--; ) {
      var c = a[++s];
      if (n(i[c], c, i) === !1)
        break;
    }
    return e;
  };
}
var Zl = ql();
function Ql(t, e) {
  return t && Zl(t, e, te);
}
function Jl(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!Ee(n))
      return t(n, r);
    for (var s = n.length, i = -1, a = Object(n); ++i < s && r(a[i], i, a) !== !1; )
      ;
    return n;
  };
}
var We = Jl(Ql);
function eh(t, e, n, r) {
  return We(t, function(s, i, a) {
    e(r, s, n(s), a);
  }), r;
}
function th(t, e) {
  return function(n, r) {
    var s = N(n) ? Xl : eh, i = e ? e() : {};
    return s(n, t, ge(r), i);
  };
}
var ni = Object.prototype, nh = ni.hasOwnProperty, lr = Zn(function(t, e) {
  t = Object(t);
  var n = -1, r = e.length, s = r > 2 ? e[2] : void 0;
  for (s && ws(e[0], e[1], s) && (r = 1); ++n < r; )
    for (var i = e[n], a = Hs(i), o = -1, c = a.length; ++o < c; ) {
      var u = a[o], l = t[u];
      (l === void 0 || Tt(l, ni[u]) && !nh.call(t, u)) && (t[u] = i[u]);
    }
  return t;
});
function ns(t) {
  return oe(t) && Ee(t);
}
var rh = 200;
function sh(t, e, n, r) {
  var s = -1, i = bs, a = !0, o = t.length, c = [], u = e.length;
  if (!o)
    return c;
  e.length >= rh && (i = or, a = !1, e = new Xe(e));
  e:
    for (; ++s < o; ) {
      var l = t[s], h = l;
      if (l = l !== 0 ? l : 0, a && h === h) {
        for (var f = u; f--; )
          if (e[f] === h)
            continue e;
        c.push(l);
      } else i(e, h, r) || c.push(l);
    }
  return c;
}
var un = Zn(function(t, e) {
  return ns(t) ? sh(t, sr(e, 1, ns, !0)) : [];
});
function qe(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
function F(t, e, n) {
  var r = t == null ? 0 : t.length;
  return r ? (e = e === void 0 ? 1 : en(e), Ws(t, e < 0 ? 0 : e, r)) : [];
}
function Et(t, e, n) {
  var r = t == null ? 0 : t.length;
  return r ? (e = e === void 0 ? 1 : en(e), e = r - e, Ws(t, 0, e < 0 ? 0 : e)) : [];
}
function ih(t) {
  return typeof t == "function" ? t : Ye;
}
function S(t, e) {
  var n = N(t) ? ks : We;
  return n(t, ih(e));
}
function ah(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (!e(t[n], n, t))
      return !1;
  return !0;
}
function oh(t, e) {
  var n = !0;
  return We(t, function(r, s, i) {
    return n = !!e(r, s, i), n;
  }), n;
}
function ae(t, e, n) {
  var r = N(t) ? ah : oh;
  return r(t, ge(e));
}
function ri(t, e) {
  var n = [];
  return We(t, function(r, s, i) {
    e(r, s, i) && n.push(r);
  }), n;
}
function ne(t, e) {
  var n = N(t) ? ir : ri;
  return n(t, ge(e));
}
function ch(t) {
  return function(e, n, r) {
    var s = Object(e);
    if (!Ee(e)) {
      var i = ge(n);
      e = te(e), n = function(o) {
        return i(s[o], o, s);
      };
    }
    var a = t(e, n, r);
    return a > -1 ? s[i ? e[a] : a] : void 0;
  };
}
var uh = Math.max;
function lh(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var s = n == null ? 0 : en(n);
  return s < 0 && (s = uh(r + s, 0)), xs(t, ge(e), s);
}
var Ze = ch(lh);
function ce(t) {
  return t && t.length ? t[0] : void 0;
}
function hh(t, e) {
  var n = -1, r = Ee(t) ? Array(t.length) : [];
  return We(t, function(s, i, a) {
    r[++n] = e(s, i, a);
  }), r;
}
function A(t, e) {
  var n = N(t) ? Jt : hh;
  return n(t, ge(e));
}
function Q(t, e) {
  return sr(A(t, e));
}
var fh = Object.prototype, dh = fh.hasOwnProperty, ph = th(function(t, e, n) {
  dh.call(t, n) ? t[n].push(e) : Xn(t, n, [e]);
}), Eh = Object.prototype, gh = Eh.hasOwnProperty;
function Th(t, e) {
  return t != null && gh.call(t, e);
}
function R(t, e) {
  return t != null && ti(t, e, Th);
}
var mh = "[object String]";
function W(t) {
  return typeof t == "string" || !N(t) && oe(t) && be(t) == mh;
}
function Ah(t, e) {
  return Jt(e, function(n) {
    return t[n];
  });
}
function w(t) {
  return t == null ? [] : Ah(t, te(t));
}
var Rh = Math.max;
function H(t, e, n, r) {
  t = Ee(t) ? t : w(t), n = n ? en(n) : 0;
  var s = t.length;
  return n < 0 && (n = Rh(s + n, 0)), W(t) ? n <= s && t.indexOf(e, n) > -1 : !!s && Yn(t, e, n) > -1;
}
function rs(t, e, n) {
  var r = t == null ? 0 : t.length;
  if (!r)
    return -1;
  var s = 0;
  return Yn(t, e, s);
}
var Ih = "[object Map]", Sh = "[object Set]", _h = Object.prototype, Oh = _h.hasOwnProperty;
function v(t) {
  if (t == null)
    return !0;
  if (Ee(t) && (N(t) || typeof t == "string" || typeof t.splice == "function" || ft(t) || Jn(t) || rn(t)))
    return !t.length;
  var e = Z(t);
  if (e == Ih || e == Sh)
    return !t.size;
  if (mt(t))
    return !Bs(t).length;
  for (var n in t)
    if (Oh.call(t, n))
      return !1;
  return !0;
}
var Nh = "[object RegExp]";
function Ch(t) {
  return oe(t) && be(t) == Nh;
}
var ss = ke && ke.isRegExp, Se = ss ? sn(ss) : Ch;
function _e(t) {
  return t === void 0;
}
var Lh = "Expected a function";
function yh(t) {
  if (typeof t != "function")
    throw new TypeError(Lh);
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
function vh(t, e, n, r) {
  if (!ee(t))
    return t;
  e = cn(e, t);
  for (var s = -1, i = e.length, a = i - 1, o = t; o != null && ++s < i; ) {
    var c = At(e[s]), u = n;
    if (c === "__proto__" || c === "constructor" || c === "prototype")
      return t;
    if (s != a) {
      var l = o[c];
      u = void 0, u === void 0 && (u = ee(l) ? l : tn(e[s + 1]) ? [] : {});
    }
    nn(o, c, u), o = o[c];
  }
  return t;
}
function Ph(t, e, n) {
  for (var r = -1, s = e.length, i = {}; ++r < s; ) {
    var a = e[r], o = nr(t, a);
    n(o, a) && vh(i, cn(a, t), o);
  }
  return i;
}
function ue(t, e) {
  if (t == null)
    return {};
  var n = Jt(qc(t), function(r) {
    return [r];
  });
  return e = ge(e), Ph(t, n, function(r, s) {
    return e(r, s[0]);
  });
}
function Mh(t, e, n, r, s) {
  return s(t, function(i, a, o) {
    n = r ? (r = !1, i) : e(n, i, a, o);
  }), n;
}
function Y(t, e, n) {
  var r = N(t) ? wc : Mh, s = arguments.length < 3;
  return r(t, ge(e), n, s, We);
}
function ln(t, e) {
  var n = N(t) ? ir : ri;
  return n(t, yh(ge(e)));
}
function kh(t, e) {
  var n;
  return We(t, function(r, s, i) {
    return n = e(r, s, i), !n;
  }), !!n;
}
function si(t, e, n) {
  var r = N(t) ? Zs : kh;
  return r(t, ge(e));
}
var xh = 1 / 0, bh = Ve && 1 / cr(new Ve([, -0]))[1] == xh ? function(t) {
  return new Ve(t);
} : b, wh = 200;
function Uh(t, e, n) {
  var r = -1, s = bs, i = t.length, a = !0, o = [], c = o;
  if (i >= wh) {
    var u = bh(t);
    if (u)
      return cr(u);
    a = !1, s = or, c = new Xe();
  } else
    c = o;
  e:
    for (; ++r < i; ) {
      var l = t[r], h = l;
      if (l = l !== 0 ? l : 0, a && h === h) {
        for (var f = c.length; f--; )
          if (c[f] === h)
            continue e;
        o.push(l);
      } else s(c, h, n) || (c !== o && c.push(h), o.push(l));
    }
  return o;
}
function hr(t) {
  return t && t.length ? Uh(t) : [];
}
function kn(t) {
  console && console.error && console.error(`Error: ${t}`);
}
function ii(t) {
  console && console.warn && console.warn(`Warning: ${t}`);
}
function ai(t) {
  const e = (/* @__PURE__ */ new Date()).getTime(), n = t();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: n };
}
function oi(t) {
  function e() {
  }
  e.prototype = t;
  const n = new e();
  function r() {
    return typeof n.bar;
  }
  return r(), r(), t;
}
function Fh(t) {
  return Dh(t) ? t.LABEL : t.name;
}
function Dh(t) {
  return W(t.LABEL) && t.LABEL !== "";
}
class Te {
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
    e.visit(this), S(this.definition, (n) => {
      n.accept(e);
    });
  }
}
class X extends Te {
  constructor(e) {
    super([]), this.idx = 1, V(this, ue(e, (n) => n !== void 0));
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
class Qe extends Te {
  constructor(e) {
    super(e.definition), this.orgText = "", V(this, ue(e, (n) => n !== void 0));
  }
}
class j extends Te {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = !1, V(this, ue(e, (n) => n !== void 0));
  }
}
class K extends Te {
  constructor(e) {
    super(e.definition), this.idx = 1, V(this, ue(e, (n) => n !== void 0));
  }
}
class me extends Te {
  constructor(e) {
    super(e.definition), this.idx = 1, V(this, ue(e, (n) => n !== void 0));
  }
}
class Ae extends Te {
  constructor(e) {
    super(e.definition), this.idx = 1, V(this, ue(e, (n) => n !== void 0));
  }
}
class U extends Te {
  constructor(e) {
    super(e.definition), this.idx = 1, V(this, ue(e, (n) => n !== void 0));
  }
}
class le extends Te {
  constructor(e) {
    super(e.definition), this.idx = 1, V(this, ue(e, (n) => n !== void 0));
  }
}
class he extends Te {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, V(this, ue(e, (n) => n !== void 0));
  }
}
class M {
  constructor(e) {
    this.idx = 1, V(this, ue(e, (n) => n !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}
function $h(t) {
  return A(t, bt);
}
function bt(t) {
  function e(n) {
    return A(n, bt);
  }
  if (t instanceof X) {
    const n = {
      type: "NonTerminal",
      name: t.nonTerminalName,
      idx: t.idx
    };
    return W(t.label) && (n.label = t.label), n;
  } else {
    if (t instanceof j)
      return {
        type: "Alternative",
        definition: e(t.definition)
      };
    if (t instanceof K)
      return {
        type: "Option",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof me)
      return {
        type: "RepetitionMandatory",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Ae)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: t.idx,
        separator: bt(new M({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof le)
      return {
        type: "RepetitionWithSeparator",
        idx: t.idx,
        separator: bt(new M({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof U)
      return {
        type: "Repetition",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof he)
      return {
        type: "Alternation",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof M) {
      const n = {
        type: "Terminal",
        name: t.terminalType.name,
        label: Fh(t.terminalType),
        idx: t.idx
      };
      W(t.label) && (n.terminalLabel = t.label);
      const r = t.terminalType.PATTERN;
      return t.terminalType.PATTERN && (n.pattern = Se(r) ? r.source : r), n;
    } else {
      if (t instanceof Qe)
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
class Je {
  visit(e) {
    const n = e;
    switch (n.constructor) {
      case X:
        return this.visitNonTerminal(n);
      case j:
        return this.visitAlternative(n);
      case K:
        return this.visitOption(n);
      case me:
        return this.visitRepetitionMandatory(n);
      case Ae:
        return this.visitRepetitionMandatoryWithSeparator(n);
      case le:
        return this.visitRepetitionWithSeparator(n);
      case U:
        return this.visitRepetition(n);
      case he:
        return this.visitAlternation(n);
      case M:
        return this.visitTerminal(n);
      case Qe:
        return this.visitRule(n);
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
function Gh(t) {
  return t instanceof j || t instanceof K || t instanceof U || t instanceof me || t instanceof Ae || t instanceof le || t instanceof M || t instanceof Qe;
}
function Ht(t, e = []) {
  return t instanceof K || t instanceof U || t instanceof le ? !0 : t instanceof he ? si(t.definition, (r) => Ht(r, e)) : t instanceof X && H(e, t) ? !1 : t instanceof Te ? (t instanceof X && e.push(t), ae(t.definition, (r) => Ht(r, e))) : !1;
}
function Bh(t) {
  return t instanceof he;
}
function fe(t) {
  if (t instanceof X)
    return "SUBRULE";
  if (t instanceof K)
    return "OPTION";
  if (t instanceof he)
    return "OR";
  if (t instanceof me)
    return "AT_LEAST_ONE";
  if (t instanceof Ae)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof le)
    return "MANY_SEP";
  if (t instanceof U)
    return "MANY";
  if (t instanceof M)
    return "CONSUME";
  throw Error("non exhaustive match");
}
class hn {
  walk(e, n = []) {
    S(e.definition, (r, s) => {
      const i = F(e.definition, s + 1);
      if (r instanceof X)
        this.walkProdRef(r, i, n);
      else if (r instanceof M)
        this.walkTerminal(r, i, n);
      else if (r instanceof j)
        this.walkFlat(r, i, n);
      else if (r instanceof K)
        this.walkOption(r, i, n);
      else if (r instanceof me)
        this.walkAtLeastOne(r, i, n);
      else if (r instanceof Ae)
        this.walkAtLeastOneSep(r, i, n);
      else if (r instanceof le)
        this.walkManySep(r, i, n);
      else if (r instanceof U)
        this.walkMany(r, i, n);
      else if (r instanceof he)
        this.walkOr(r, i, n);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, n, r) {
  }
  walkProdRef(e, n, r) {
  }
  walkFlat(e, n, r) {
    const s = n.concat(r);
    this.walk(e, s);
  }
  walkOption(e, n, r) {
    const s = n.concat(r);
    this.walk(e, s);
  }
  walkAtLeastOne(e, n, r) {
    const s = [
      new K({ definition: e.definition })
    ].concat(n, r);
    this.walk(e, s);
  }
  walkAtLeastOneSep(e, n, r) {
    const s = is(e, n, r);
    this.walk(e, s);
  }
  walkMany(e, n, r) {
    const s = [
      new K({ definition: e.definition })
    ].concat(n, r);
    this.walk(e, s);
  }
  walkManySep(e, n, r) {
    const s = is(e, n, r);
    this.walk(e, s);
  }
  walkOr(e, n, r) {
    const s = n.concat(r);
    S(e.definition, (i) => {
      const a = new j({ definition: [i] });
      this.walk(a, s);
    });
  }
}
function is(t, e, n) {
  return [
    new K({
      definition: [
        new M({ terminalType: t.separator })
      ].concat(t.definition)
    })
  ].concat(e, n);
}
function It(t) {
  if (t instanceof X)
    return It(t.referencedRule);
  if (t instanceof M)
    return Wh(t);
  if (Gh(t))
    return Hh(t);
  if (Bh(t))
    return Kh(t);
  throw Error("non exhaustive match");
}
function Hh(t) {
  let e = [];
  const n = t.definition;
  let r = 0, s = n.length > r, i, a = !0;
  for (; s && a; )
    i = n[r], a = Ht(i), e = e.concat(It(i)), r = r + 1, s = n.length > r;
  return hr(e);
}
function Kh(t) {
  const e = A(t.definition, (n) => It(n));
  return hr(ie(e));
}
function Wh(t) {
  return [t.terminalType];
}
const ci = "_~IN~_";
class jh extends hn {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, n, r) {
  }
  walkProdRef(e, n, r) {
    const s = Vh(e.referencedRule, e.idx) + this.topProd.name, i = n.concat(r), a = new j({ definition: i }), o = It(a);
    this.follows[s] = o;
  }
}
function zh(t) {
  const e = {};
  return S(t, (n) => {
    const r = new jh(n).startWalking();
    V(e, r);
  }), e;
}
function Vh(t, e) {
  return t.name + e + ci;
}
function _(t) {
  return t.charCodeAt(0);
}
function _n(t, e) {
  Array.isArray(t) ? t.forEach(function(n) {
    e.push(n);
  }) : e.push(t);
}
function it(t, e) {
  if (t[e] === !0)
    throw "duplicate flag " + e;
  t[e], t[e] = !0;
}
function ze(t) {
  if (t === void 0)
    throw Error("Internal Error - Should never get here!");
  return !0;
}
function Yh() {
  throw Error("Internal Error - Should never get here!");
}
function as(t) {
  return t.type === "Character";
}
const Kt = [];
for (let t = _("0"); t <= _("9"); t++)
  Kt.push(t);
const Wt = [_("_")].concat(Kt);
for (let t = _("a"); t <= _("z"); t++)
  Wt.push(t);
for (let t = _("A"); t <= _("Z"); t++)
  Wt.push(t);
const os = [
  _(" "),
  _("\f"),
  _(`
`),
  _("\r"),
  _("	"),
  _("\v"),
  _("	"),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _(" "),
  _("\u2028"),
  _("\u2029"),
  _(" "),
  _(" "),
  _("　"),
  _("\uFEFF")
], Xh = /[0-9a-fA-F]/, yt = /[0-9]/, qh = /[1-9]/;
class Zh {
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
    const n = this.disjunction();
    this.consumeChar("/");
    const r = {
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
          it(r, "global");
          break;
        case "i":
          it(r, "ignoreCase");
          break;
        case "m":
          it(r, "multiLine");
          break;
        case "u":
          it(r, "unicode");
          break;
        case "y":
          it(r, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: r,
      value: n,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], n = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(n) };
  }
  alternative() {
    const e = [], n = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(n) };
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
        let n;
        switch (this.popChar()) {
          case "=":
            n = "Lookahead";
            break;
          case "!":
            n = "NegativeLookahead";
            break;
        }
        ze(n);
        const r = this.disjunction();
        return this.consumeChar(")"), {
          type: n,
          value: r,
          loc: this.loc(e)
        };
    }
    return Yh();
  }
  quantifier(e = !1) {
    let n;
    const r = this.idx;
    switch (this.popChar()) {
      case "*":
        n = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        n = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        n = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const s = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            n = {
              atLeast: s,
              atMost: s
            };
            break;
          case ",":
            let i;
            this.isDigit() ? (i = this.integerIncludingZero(), n = {
              atLeast: s,
              atMost: i
            }) : n = {
              atLeast: s,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === !0 && n === void 0)
          return;
        ze(n);
        break;
    }
    if (!(e === !0 && n === void 0) && ze(n))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), n.greedy = !1) : n.greedy = !0, n.type = "Quantifier", n.loc = this.loc(r), n;
  }
  atom() {
    let e;
    const n = this.idx;
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
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), ze(e))
      return e.loc = this.loc(n), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: !0,
      value: [_(`
`), _("\r"), _("\u2028"), _("\u2029")]
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
    let e, n = !1;
    switch (this.popChar()) {
      case "d":
        e = Kt;
        break;
      case "D":
        e = Kt, n = !0;
        break;
      case "s":
        e = os;
        break;
      case "S":
        e = os, n = !0;
        break;
      case "w":
        e = Wt;
        break;
      case "W":
        e = Wt, n = !0;
        break;
    }
    if (ze(e))
      return { type: "Set", value: e, complement: n };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = _("\f");
        break;
      case "n":
        e = _(`
`);
        break;
      case "r":
        e = _("\r");
        break;
      case "t":
        e = _("	");
        break;
      case "v":
        e = _("\v");
        break;
    }
    if (ze(e))
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
    return this.consumeChar("0"), { type: "Character", value: _("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: _(e) };
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
        return { type: "Character", value: _(e) };
    }
  }
  characterClass() {
    const e = [];
    let n = !1;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), n = !0); this.isClassAtom(); ) {
      const r = this.classAtom();
      if (r.type, as(r) && this.isRangeDash()) {
        this.consumeChar("-");
        const s = this.classAtom();
        if (s.type, as(s)) {
          if (s.value < r.value)
            throw Error("Range out of order in character class");
          e.push({ from: r.value, to: s.value });
        } else
          _n(r.value, e), e.push(_("-")), _n(s.value, e);
      } else
        _n(r.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: n, value: e };
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
        return this.consumeChar("b"), { type: "Character", value: _("\b") };
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
    const n = this.disjunction();
    this.consumeChar(")");
    const r = {
      type: "Group",
      capturing: e,
      value: n
    };
    return e && (r.idx = this.groupIdx), r;
  }
  positiveInteger() {
    let e = this.popChar();
    if (qh.test(e) === !1)
      throw Error("Expecting a positive integer");
    for (; yt.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (yt.test(e) === !1)
      throw Error("Expecting an integer");
    for (; yt.test(this.peekChar(0)); )
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
        return { type: "Character", value: _(e) };
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
    return yt.test(this.peekChar(0));
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
    let n = "";
    for (let s = 0; s < e; s++) {
      const i = this.popChar();
      if (Xh.test(i) === !1)
        throw Error("Expecting a HexDecimal digits");
      n += i;
    }
    return { type: "Character", value: parseInt(n, 16) };
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
class fr {
  visitChildren(e) {
    for (const n in e) {
      const r = e[n];
      e.hasOwnProperty(n) && (r.type !== void 0 ? this.visit(r) : Array.isArray(r) && r.forEach((s) => {
        this.visit(s);
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
let wt = {};
const Qh = new Zh();
function fn(t) {
  const e = t.toString();
  if (wt.hasOwnProperty(e))
    return wt[e];
  {
    const n = Qh.pattern(e);
    return wt[e] = n, n;
  }
}
function Jh() {
  wt = {};
}
const ui = "Complement Sets are not supported for first char optimization", jt = `Unable to use "first char" lexer optimizations:
`;
function ef(t, e = !1) {
  try {
    const n = fn(t);
    return xn(n.value, {}, n.flags.ignoreCase);
  } catch (n) {
    if (n.message === ui)
      e && ii(`${jt}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let r = "";
      e && (r = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), kn(`${jt}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + r);
    }
  }
  return [];
}
function xn(t, e, n) {
  switch (t.type) {
    case "Disjunction":
      for (let s = 0; s < t.value.length; s++)
        xn(t.value[s], e, n);
      break;
    case "Alternative":
      const r = t.value;
      for (let s = 0; s < r.length; s++) {
        const i = r[s];
        switch (i.type) {
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
        const a = i;
        switch (a.type) {
          case "Character":
            vt(a.value, e, n);
            break;
          case "Set":
            if (a.complement === !0)
              throw Error(ui);
            S(a.value, (c) => {
              if (typeof c == "number")
                vt(c, e, n);
              else {
                const u = c;
                if (n === !0)
                  for (let l = u.from; l <= u.to; l++)
                    vt(l, e, n);
                else {
                  for (let l = u.from; l <= u.to && l < ct; l++)
                    vt(l, e, n);
                  if (u.to >= ct) {
                    const l = u.from >= ct ? u.from : ct, h = u.to, f = xe(l), p = xe(h);
                    for (let T = f; T <= p; T++)
                      e[T] = T;
                  }
                }
              }
            });
            break;
          case "Group":
            xn(a.value, e, n);
            break;
          /* istanbul ignore next */
          default:
            throw Error("Non Exhaustive Match");
        }
        const o = a.quantifier !== void 0 && a.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          a.type === "Group" && bn(a) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
          a.type !== "Group" && o === !1
        )
          break;
      }
      break;
    /* istanbul ignore next */
    default:
      throw Error("non exhaustive match!");
  }
  return w(e);
}
function vt(t, e, n) {
  const r = xe(t);
  e[r] = r, n === !0 && tf(t, e);
}
function tf(t, e) {
  const n = String.fromCharCode(t), r = n.toUpperCase();
  if (r !== n) {
    const s = xe(r.charCodeAt(0));
    e[s] = s;
  } else {
    const s = n.toLowerCase();
    if (s !== n) {
      const i = xe(s.charCodeAt(0));
      e[i] = i;
    }
  }
}
function cs(t, e) {
  return Ze(t.value, (n) => {
    if (typeof n == "number")
      return H(e, n);
    {
      const r = n;
      return Ze(e, (s) => r.from <= s && s <= r.to) !== void 0;
    }
  });
}
function bn(t) {
  const e = t.quantifier;
  return e && e.atLeast === 0 ? !0 : t.value ? N(t.value) ? ae(t.value, bn) : bn(t.value) : !1;
}
class nf extends fr {
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
    H(this.targetCharCodes, e.value) && (this.found = !0);
  }
  visitSet(e) {
    e.complement ? cs(e, this.targetCharCodes) === void 0 && (this.found = !0) : cs(e, this.targetCharCodes) !== void 0 && (this.found = !0);
  }
}
function dr(t, e) {
  if (e instanceof RegExp) {
    const n = fn(e), r = new nf(t);
    return r.visit(n), r.found;
  } else
    return Ze(e, (n) => H(t, n.charCodeAt(0))) !== void 0;
}
const Ge = "PATTERN", ot = "defaultMode", Pt = "modes";
let li = typeof new RegExp("(?:)").sticky == "boolean";
function rf(t, e) {
  e = lr(e, {
    useSticky: li,
    debug: !1,
    safeMode: !1,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: (E, d) => d()
  });
  const n = e.tracer;
  n("initCharCodeToOptimizedIndexMap", () => {
    Lf();
  });
  let r;
  n("Reject Lexer.NA", () => {
    r = ln(t, (E) => E[Ge] === G.NA);
  });
  let s = !1, i;
  n("Transform Patterns", () => {
    s = !1, i = A(r, (E) => {
      const d = E[Ge];
      if (Se(d)) {
        const m = d.source;
        return m.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        m !== "^" && m !== "$" && m !== "." && !d.ignoreCase ? m : m.length === 2 && m[0] === "\\" && // not a meta character
        !H([
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
        ], m[1]) ? m[1] : e.useSticky ? ls(d) : us(d);
      } else {
        if (Ne(d))
          return s = !0, { exec: d };
        if (typeof d == "object")
          return s = !0, d;
        if (typeof d == "string") {
          if (d.length === 1)
            return d;
          {
            const m = d.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), L = new RegExp(m);
            return e.useSticky ? ls(L) : us(L);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let a, o, c, u, l;
  n("misc mapping", () => {
    a = A(r, (E) => E.tokenTypeIdx), o = A(r, (E) => {
      const d = E.GROUP;
      if (d !== G.SKIPPED) {
        if (W(d))
          return d;
        if (_e(d))
          return !1;
        throw Error("non exhaustive match");
      }
    }), c = A(r, (E) => {
      const d = E.LONGER_ALT;
      if (d)
        return N(d) ? A(d, (L) => rs(r, L)) : [rs(r, d)];
    }), u = A(r, (E) => E.PUSH_MODE), l = A(r, (E) => R(E, "POP_MODE"));
  });
  let h;
  n("Line Terminator Handling", () => {
    const E = di(e.lineTerminatorCharacters);
    h = A(r, (d) => !1), e.positionTracking !== "onlyOffset" && (h = A(r, (d) => R(d, "LINE_BREAKS") ? !!d.LINE_BREAKS : fi(d, E) === !1 && dr(E, d.PATTERN)));
  });
  let f, p, T, I;
  n("Misc Mapping #2", () => {
    f = A(r, hi), p = A(i, Of), T = Y(r, (E, d) => {
      const m = d.GROUP;
      return W(m) && m !== G.SKIPPED && (E[m] = []), E;
    }, {}), I = A(i, (E, d) => ({
      pattern: i[d],
      longerAlt: c[d],
      canLineTerminator: h[d],
      isCustom: f[d],
      short: p[d],
      group: o[d],
      push: u[d],
      pop: l[d],
      tokenTypeIdx: a[d],
      tokenType: r[d]
    }));
  });
  let O = !0, g = [];
  return e.safeMode || n("First Char Optimization", () => {
    g = Y(r, (E, d, m) => {
      if (typeof d.PATTERN == "string") {
        const L = d.PATTERN.charCodeAt(0), re = xe(L);
        On(E, re, I[m]);
      } else if (N(d.START_CHARS_HINT)) {
        let L;
        S(d.START_CHARS_HINT, (re) => {
          const ye = typeof re == "string" ? re.charCodeAt(0) : re, Ue = xe(ye);
          L !== Ue && (L = Ue, On(E, Ue, I[m]));
        });
      } else if (Se(d.PATTERN))
        if (d.PATTERN.unicode)
          O = !1, e.ensureOptimizations && kn(`${jt}	Unable to analyze < ${d.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const L = ef(d.PATTERN, e.ensureOptimizations);
          v(L) && (O = !1), S(L, (re) => {
            On(E, re, I[m]);
          });
        }
      else
        e.ensureOptimizations && kn(`${jt}	TokenType: <${d.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), O = !1;
      return E;
    }, []);
  }), {
    emptyGroups: T,
    patternIdxToConfig: I,
    charCodeToPatternIdxToConfig: g,
    hasCustom: s,
    canBeOptimized: O
  };
}
function sf(t, e) {
  let n = [];
  const r = of(t);
  n = n.concat(r.errors);
  const s = cf(r.valid), i = s.valid;
  return n = n.concat(s.errors), n = n.concat(af(i)), n = n.concat(gf(i)), n = n.concat(Tf(i, e)), n = n.concat(mf(i)), n;
}
function af(t) {
  let e = [];
  const n = ne(t, (r) => Se(r[Ge]));
  return e = e.concat(lf(n)), e = e.concat(df(n)), e = e.concat(pf(n)), e = e.concat(Ef(n)), e = e.concat(hf(n)), e;
}
function of(t) {
  const e = ne(t, (s) => !R(s, Ge)), n = A(e, (s) => ({
    message: "Token Type: ->" + s.name + "<- missing static 'PATTERN' property",
    type: x.MISSING_PATTERN,
    tokenTypes: [s]
  })), r = un(t, e);
  return { errors: n, valid: r };
}
function cf(t) {
  const e = ne(t, (s) => {
    const i = s[Ge];
    return !Se(i) && !Ne(i) && !R(i, "exec") && !W(i);
  }), n = A(e, (s) => ({
    message: "Token Type: ->" + s.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: x.INVALID_PATTERN,
    tokenTypes: [s]
  })), r = un(t, e);
  return { errors: n, valid: r };
}
const uf = /[^\\][$]/;
function lf(t) {
  class e extends fr {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitEndAnchor(i) {
      this.found = !0;
    }
  }
  const n = ne(t, (s) => {
    const i = s.PATTERN;
    try {
      const a = fn(i), o = new e();
      return o.visit(a), o.found;
    } catch {
      return uf.test(i.source);
    }
  });
  return A(n, (s) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + s.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: x.EOI_ANCHOR_FOUND,
    tokenTypes: [s]
  }));
}
function hf(t) {
  const e = ne(t, (r) => r.PATTERN.test(""));
  return A(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' must not match an empty string",
    type: x.EMPTY_MATCH_PATTERN,
    tokenTypes: [r]
  }));
}
const ff = /[^\\[][\^]|^\^/;
function df(t) {
  class e extends fr {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitStartAnchor(i) {
      this.found = !0;
    }
  }
  const n = ne(t, (s) => {
    const i = s.PATTERN;
    try {
      const a = fn(i), o = new e();
      return o.visit(a), o.found;
    } catch {
      return ff.test(i.source);
    }
  });
  return A(n, (s) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + s.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: x.SOI_ANCHOR_FOUND,
    tokenTypes: [s]
  }));
}
function pf(t) {
  const e = ne(t, (r) => {
    const s = r[Ge];
    return s instanceof RegExp && (s.multiline || s.global);
  });
  return A(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: x.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [r]
  }));
}
function Ef(t) {
  const e = [];
  let n = A(t, (i) => Y(t, (a, o) => (i.PATTERN.source === o.PATTERN.source && !H(e, o) && o.PATTERN !== G.NA && (e.push(o), a.push(o)), a), []));
  n = Rt(n);
  const r = ne(n, (i) => i.length > 1);
  return A(r, (i) => {
    const a = A(i, (c) => c.name);
    return {
      message: `The same RegExp pattern ->${ce(i).PATTERN}<-has been used in all of the following Token Types: ${a.join(", ")} <-`,
      type: x.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: i
    };
  });
}
function gf(t) {
  const e = ne(t, (r) => {
    if (!R(r, "GROUP"))
      return !1;
    const s = r.GROUP;
    return s !== G.SKIPPED && s !== G.NA && !W(s);
  });
  return A(e, (r) => ({
    message: "Token Type: ->" + r.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: x.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [r]
  }));
}
function Tf(t, e) {
  const n = ne(t, (s) => s.PUSH_MODE !== void 0 && !H(e, s.PUSH_MODE));
  return A(n, (s) => ({
    message: `Token Type: ->${s.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${s.PUSH_MODE}<-which does not exist`,
    type: x.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [s]
  }));
}
function mf(t) {
  const e = [], n = Y(t, (r, s, i) => {
    const a = s.PATTERN;
    return a === G.NA || (W(a) ? r.push({ str: a, idx: i, tokenType: s }) : Se(a) && Rf(a) && r.push({ str: a.source, idx: i, tokenType: s })), r;
  }, []);
  return S(t, (r, s) => {
    S(n, ({ str: i, idx: a, tokenType: o }) => {
      if (s < a && Af(i, r.PATTERN)) {
        const c = `Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: c,
          type: x.UNREACHABLE_PATTERN,
          tokenTypes: [r, o]
        });
      }
    });
  }), e;
}
function Af(t, e) {
  if (Se(e)) {
    const n = e.exec(t);
    return n !== null && n.index === 0;
  } else {
    if (Ne(e))
      return e(t, 0, [], {});
    if (R(e, "exec"))
      return e.exec(t, 0, [], {});
    if (typeof e == "string")
      return e === t;
    throw Error("non exhaustive match");
  }
}
function Rf(t) {
  return Ze([
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
  ], (n) => t.source.indexOf(n) !== -1) === void 0;
}
function us(t) {
  const e = t.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${t.source})`, e);
}
function ls(t) {
  const e = t.ignoreCase ? "iy" : "y";
  return new RegExp(`${t.source}`, e);
}
function If(t, e, n) {
  const r = [];
  return R(t, ot) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + ot + `> property in its definition
`,
    type: x.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), R(t, Pt) || r.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Pt + `> property in its definition
`,
    type: x.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), R(t, Pt) && R(t, ot) && !R(t.modes, t.defaultMode) && r.push({
    message: `A MultiMode Lexer cannot be initialized with a ${ot}: <${t.defaultMode}>which does not exist
`,
    type: x.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), R(t, Pt) && S(t.modes, (s, i) => {
    S(s, (a, o) => {
      if (_e(a))
        r.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${i}> at index: <${o}>
`,
          type: x.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (R(a, "LONGER_ALT")) {
        const c = N(a.LONGER_ALT) ? a.LONGER_ALT : [a.LONGER_ALT];
        S(c, (u) => {
          !_e(u) && !H(s, u) && r.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${a.name}> outside of mode <${i}>
`,
            type: x.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), r;
}
function Sf(t, e, n) {
  const r = [];
  let s = !1;
  const i = Rt(ie(w(t.modes))), a = ln(i, (c) => c[Ge] === G.NA), o = di(n);
  return e && S(a, (c) => {
    const u = fi(c, o);
    if (u !== !1) {
      const h = {
        message: Cf(c, u),
        type: u.issue,
        tokenType: c
      };
      r.push(h);
    } else
      R(c, "LINE_BREAKS") ? c.LINE_BREAKS === !0 && (s = !0) : dr(o, c.PATTERN) && (s = !0);
  }), e && !s && r.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: x.NO_LINE_BREAKS_FLAGS
  }), r;
}
function _f(t) {
  const e = {}, n = te(t);
  return S(n, (r) => {
    const s = t[r];
    if (N(s))
      e[r] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
function hi(t) {
  const e = t.PATTERN;
  if (Se(e))
    return !1;
  if (Ne(e))
    return !0;
  if (R(e, "exec"))
    return !0;
  if (W(e))
    return !1;
  throw Error("non exhaustive match");
}
function Of(t) {
  return W(t) && t.length === 1 ? t.charCodeAt(0) : !1;
}
const Nf = {
  // implements /\n|\r\n?/g.test
  test: function(t) {
    const e = t.length;
    for (let n = this.lastIndex; n < e; n++) {
      const r = t.charCodeAt(n);
      if (r === 10)
        return this.lastIndex = n + 1, !0;
      if (r === 13)
        return t.charCodeAt(n + 1) === 10 ? this.lastIndex = n + 2 : this.lastIndex = n + 1, !0;
    }
    return !1;
  },
  lastIndex: 0
};
function fi(t, e) {
  if (R(t, "LINE_BREAKS"))
    return !1;
  if (Se(t.PATTERN)) {
    try {
      dr(e, t.PATTERN);
    } catch (n) {
      return {
        issue: x.IDENTIFY_TERMINATOR,
        errMsg: n.message
      };
    }
    return !1;
  } else {
    if (W(t.PATTERN))
      return !1;
    if (hi(t))
      return { issue: x.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
function Cf(t, e) {
  if (e.issue === x.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === x.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
function di(t) {
  return A(t, (n) => W(n) ? n.charCodeAt(0) : n);
}
function On(t, e, n) {
  t[e] === void 0 ? t[e] = [n] : t[e].push(n);
}
const ct = 256;
let Ut = [];
function xe(t) {
  return t < ct ? t : Ut[t];
}
function Lf() {
  if (v(Ut)) {
    Ut = new Array(65536);
    for (let t = 0; t < 65536; t++)
      Ut[t] = t > 255 ? 255 + ~~(t / 255) : t;
  }
}
function St(t, e) {
  const n = t.tokenTypeIdx;
  return n === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[n] === !0;
}
function zt(t, e) {
  return t.tokenTypeIdx === e.tokenTypeIdx;
}
let hs = 1;
const pi = {};
function _t(t) {
  const e = yf(t);
  vf(e), Mf(e), Pf(e), S(e, (n) => {
    n.isParent = n.categoryMatches.length > 0;
  });
}
function yf(t) {
  let e = D(t), n = t, r = !0;
  for (; r; ) {
    n = Rt(ie(A(n, (i) => i.CATEGORIES)));
    const s = un(n, e);
    e = e.concat(s), v(s) ? r = !1 : n = s;
  }
  return e;
}
function vf(t) {
  S(t, (e) => {
    gi(e) || (pi[hs] = e, e.tokenTypeIdx = hs++), fs(e) && !N(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), fs(e) || (e.CATEGORIES = []), kf(e) || (e.categoryMatches = []), xf(e) || (e.categoryMatchesMap = {});
  });
}
function Pf(t) {
  S(t, (e) => {
    e.categoryMatches = [], S(e.categoryMatchesMap, (n, r) => {
      e.categoryMatches.push(pi[r].tokenTypeIdx);
    });
  });
}
function Mf(t) {
  S(t, (e) => {
    Ei([], e);
  });
}
function Ei(t, e) {
  S(t, (n) => {
    e.categoryMatchesMap[n.tokenTypeIdx] = !0;
  }), S(e.CATEGORIES, (n) => {
    const r = t.concat(e);
    H(r, n) || Ei(r, n);
  });
}
function gi(t) {
  return R(t, "tokenTypeIdx");
}
function fs(t) {
  return R(t, "CATEGORIES");
}
function kf(t) {
  return R(t, "categoryMatches");
}
function xf(t) {
  return R(t, "categoryMatchesMap");
}
function bf(t) {
  return R(t, "tokenTypeIdx");
}
const wf = {
  buildUnableToPopLexerModeMessage(t) {
    return `Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(t, e, n, r, s) {
    return `unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${n} characters.`;
  }
};
var x;
(function(t) {
  t[t.MISSING_PATTERN = 0] = "MISSING_PATTERN", t[t.INVALID_PATTERN = 1] = "INVALID_PATTERN", t[t.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", t[t.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", t[t.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", t[t.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", t[t.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", t[t.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", t[t.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", t[t.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", t[t.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", t[t.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", t[t.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(x || (x = {}));
const ut = {
  deferDefinitionErrorsHandling: !1,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: !1,
  safeMode: !1,
  errorMessageProvider: wf,
  traceInitPerf: !1,
  skipValidations: !1,
  recoveryEnabled: !0
};
Object.freeze(ut);
class G {
  constructor(e, n = ut) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (s, i) => {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        const a = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${a}--> <${s}>`);
        const { time: o, value: c } = ai(i), u = o > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${a}<-- <${s}> time: ${o}ms`), this.traceInitIndent--, c;
      } else
        return i();
    }, typeof n == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = V({}, ut, n);
    const r = this.config.traceInitPerf;
    r === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof r == "number" && (this.traceInitMaxIdent = r, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let s, i = !0;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === ut.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = Nf;
        else if (this.config.lineTerminatorCharacters === ut.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (n.safeMode && n.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), N(e) ? s = {
          modes: { defaultMode: D(e) },
          defaultMode: ot
        } : (i = !1, s = D(e));
      }), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(If(s, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(Sf(s, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), s.modes = s.modes ? s.modes : {}, S(s.modes, (o, c) => {
        s.modes[c] = ln(o, (u) => _e(u));
      });
      const a = te(s.modes);
      if (S(s.modes, (o, c) => {
        this.TRACE_INIT(`Mode: <${c}> processing`, () => {
          if (this.modes.push(c), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(sf(o, a));
          }), v(this.lexerDefinitionErrors)) {
            _t(o);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = rf(o, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: n.positionTracking,
                ensureOptimizations: n.ensureOptimizations,
                safeMode: n.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[c] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[c] = u.charCodeToPatternIdxToConfig, this.emptyGroups = V({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[c] = u.canBeOptimized;
          }
        });
      }), this.defaultMode = s.defaultMode, !v(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const c = A(this.lexerDefinitionErrors, (u) => u.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + c);
      }
      S(this.lexerDefinitionWarning, (o) => {
        ii(o.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (li ? (this.chopInput = Ye, this.match = this.matchWithTest) : (this.updateLastIndex = b, this.match = this.matchWithExec), i && (this.handleModes = b), this.trackStartLines === !1 && (this.computeNewColumn = Ye), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = b), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const o = Y(this.canModeBeOptimized, (c, u, l) => (u === !1 && c.push(l), c), []);
        if (n.ensureOptimizations && !v(o))
          throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        Jh();
      }), this.TRACE_INIT("toFastProperties", () => {
        oi(this);
      });
    });
  }
  tokenize(e, n = this.defaultMode) {
    if (!v(this.lexerDefinitionErrors)) {
      const s = A(this.lexerDefinitionErrors, (i) => i.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + s);
    }
    return this.tokenizeInternal(e, n);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, n) {
    let r, s, i, a, o, c, u, l, h, f, p, T, I, O, g;
    const E = e, d = E.length;
    let m = 0, L = 0;
    const re = this.hasCustom ? 0 : Math.floor(e.length / 10), ye = new Array(re), Ue = [];
    let et = this.trackStartLines ? 1 : void 0, ve = this.trackStartLines ? 1 : void 0;
    const tt = _f(this.emptyGroups), ra = this.trackStartLines, gn = this.config.lineTerminatorsPattern;
    let Nt = 0, Pe = [], nt = [];
    const Ct = [], mr = [];
    Object.freeze(mr);
    let rt;
    function Ar() {
      return Pe;
    }
    function Rr($) {
      const q = xe($), je = nt[q];
      return je === void 0 ? mr : je;
    }
    const sa = ($) => {
      if (Ct.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      $.tokenType.PUSH_MODE === void 0) {
        const q = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage($);
        Ue.push({
          offset: $.startOffset,
          line: $.startLine,
          column: $.startColumn,
          length: $.image.length,
          message: q
        });
      } else {
        Ct.pop();
        const q = qe(Ct);
        Pe = this.patternIdxToConfig[q], nt = this.charCodeToPatternIdxToConfig[q], Nt = Pe.length;
        const je = this.canModeBeOptimized[q] && this.config.safeMode === !1;
        nt && je ? rt = Rr : rt = Ar;
      }
    };
    function Ir($) {
      Ct.push($), nt = this.charCodeToPatternIdxToConfig[$], Pe = this.patternIdxToConfig[$], Nt = Pe.length, Nt = Pe.length;
      const q = this.canModeBeOptimized[$] && this.config.safeMode === !1;
      nt && q ? rt = Rr : rt = Ar;
    }
    Ir.call(this, n);
    let se;
    const Sr = this.config.recoveryEnabled;
    for (; m < d; ) {
      c = null;
      const $ = E.charCodeAt(m), q = rt($), je = q.length;
      for (r = 0; r < je; r++) {
        se = q[r];
        const z = se.pattern;
        u = null;
        const Re = se.short;
        if (Re !== !1 ? $ === Re && (c = z) : se.isCustom === !0 ? (g = z.exec(E, m, ye, tt), g !== null ? (c = g[0], g.payload !== void 0 && (u = g.payload)) : c = null) : (this.updateLastIndex(z, m), c = this.match(z, e, m)), c !== null) {
          if (o = se.longerAlt, o !== void 0) {
            const Me = o.length;
            for (i = 0; i < Me; i++) {
              const Ie = Pe[o[i]], Fe = Ie.pattern;
              if (l = null, Ie.isCustom === !0 ? (g = Fe.exec(E, m, ye, tt), g !== null ? (a = g[0], g.payload !== void 0 && (l = g.payload)) : a = null) : (this.updateLastIndex(Fe, m), a = this.match(Fe, e, m)), a && a.length > c.length) {
                c = a, u = l, se = Ie;
                break;
              }
            }
          }
          break;
        }
      }
      if (c !== null) {
        if (h = c.length, f = se.group, f !== void 0 && (p = se.tokenTypeIdx, T = this.createTokenInstance(c, m, p, se.tokenType, et, ve, h), this.handlePayload(T, u), f === !1 ? L = this.addToken(ye, L, T) : tt[f].push(T)), e = this.chopInput(e, h), m = m + h, ve = this.computeNewColumn(ve, h), ra === !0 && se.canLineTerminator === !0) {
          let z = 0, Re, Me;
          gn.lastIndex = 0;
          do
            Re = gn.test(c), Re === !0 && (Me = gn.lastIndex - 1, z++);
          while (Re === !0);
          z !== 0 && (et = et + z, ve = h - Me, this.updateTokenEndLineColumnLocation(T, f, Me, z, et, ve, h));
        }
        this.handleModes(se, sa, Ir, T);
      } else {
        const z = m, Re = et, Me = ve;
        let Ie = Sr === !1;
        for (; Ie === !1 && m < d; )
          for (e = this.chopInput(e, 1), m++, s = 0; s < Nt; s++) {
            const Fe = Pe[s], Tn = Fe.pattern, _r = Fe.short;
            if (_r !== !1 ? E.charCodeAt(m) === _r && (Ie = !0) : Fe.isCustom === !0 ? Ie = Tn.exec(E, m, ye, tt) !== null : (this.updateLastIndex(Tn, m), Ie = Tn.exec(e) !== null), Ie === !0)
              break;
          }
        if (I = m - z, ve = this.computeNewColumn(ve, I), O = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(E, z, I, Re, Me), Ue.push({
          offset: z,
          line: Re,
          column: Me,
          length: I,
          message: O
        }), Sr === !1)
          break;
      }
    }
    return this.hasCustom || (ye.length = L), {
      tokens: ye,
      groups: tt,
      errors: Ue
    };
  }
  handleModes(e, n, r, s) {
    if (e.pop === !0) {
      const i = e.push;
      n(s), i !== void 0 && r.call(this, i);
    } else e.push !== void 0 && r.call(this, e.push);
  }
  chopInput(e, n) {
    return e.substring(n);
  }
  updateLastIndex(e, n) {
    e.lastIndex = n;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, n, r, s, i, a, o) {
    let c, u;
    n !== void 0 && (c = r === o - 1, u = c ? -1 : 0, s === 1 && c === !0 || (e.endLine = i + u, e.endColumn = a - 1 + -u));
  }
  computeNewColumn(e, n) {
    return e + n;
  }
  createOffsetOnlyToken(e, n, r, s) {
    return {
      image: e,
      startOffset: n,
      tokenTypeIdx: r,
      tokenType: s
    };
  }
  createStartOnlyToken(e, n, r, s, i, a) {
    return {
      image: e,
      startOffset: n,
      startLine: i,
      startColumn: a,
      tokenTypeIdx: r,
      tokenType: s
    };
  }
  createFullToken(e, n, r, s, i, a, o) {
    return {
      image: e,
      startOffset: n,
      endOffset: n + o - 1,
      startLine: i,
      endLine: i,
      startColumn: a,
      endColumn: a + o - 1,
      tokenTypeIdx: r,
      tokenType: s
    };
  }
  addTokenUsingPush(e, n, r) {
    return e.push(r), n;
  }
  addTokenUsingMemberAccess(e, n, r) {
    return e[n] = r, n++, n;
  }
  handlePayloadNoCustom(e, n) {
  }
  handlePayloadWithCustom(e, n) {
    n !== null && (e.payload = n);
  }
  matchWithTest(e, n, r) {
    return e.test(n) === !0 ? n.substring(r, e.lastIndex) : null;
  }
  matchWithExec(e, n) {
    const r = e.exec(n);
    return r !== null ? r[0] : null;
  }
}
G.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
G.NA = /NOT_APPLICABLE/;
function ht(t) {
  return Ti(t) ? t.LABEL : t.name;
}
function Ti(t) {
  return W(t.LABEL) && t.LABEL !== "";
}
const Uf = "parent", ds = "categories", ps = "label", Es = "group", gs = "push_mode", Ts = "pop_mode", ms = "longer_alt", As = "line_breaks", Rs = "start_chars_hint";
function C(t) {
  return Ff(t);
}
function Ff(t) {
  const e = t.pattern, n = {};
  if (n.name = t.name, _e(e) || (n.PATTERN = e), R(t, Uf))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return R(t, ds) && (n.CATEGORIES = t[ds]), _t([n]), R(t, ps) && (n.LABEL = t[ps]), R(t, Es) && (n.GROUP = t[Es]), R(t, Ts) && (n.POP_MODE = t[Ts]), R(t, gs) && (n.PUSH_MODE = t[gs]), R(t, ms) && (n.LONGER_ALT = t[ms]), R(t, As) && (n.LINE_BREAKS = t[As]), R(t, Rs) && (n.START_CHARS_HINT = t[Rs]), n;
}
const Be = C({ name: "EOF", pattern: G.NA });
_t([Be]);
function pr(t, e, n, r, s, i, a, o) {
  return {
    image: e,
    startOffset: n,
    endOffset: r,
    startLine: s,
    endLine: i,
    startColumn: a,
    endColumn: o,
    tokenTypeIdx: t.tokenTypeIdx,
    tokenType: t
  };
}
function Df(t, e) {
  return St(t, e);
}
const mi = {
  buildMismatchTokenMessage({ expected: t, actual: e, previous: n, ruleName: r }) {
    return `Expecting ${Ti(t) ? `--> ${ht(t)} <--` : `token of type --> ${t.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: t, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + t.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: t, actual: e, previous: n, customUserDescription: r, ruleName: s }) {
    const i = "Expecting: ", o = `
but found: '` + ce(e).image + "'";
    if (r)
      return i + r + o;
    {
      const c = Y(t, (f, p) => f.concat(p), []), u = A(c, (f) => `[${A(f, (p) => ht(p)).join(", ")}]`), h = `one of these possible Token sequences:
${A(u, (f, p) => `  ${p + 1}. ${f}`).join(`
`)}`;
      return i + h + o;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: t, actual: e, customUserDescription: n, ruleName: r }) {
    const s = "Expecting: ", a = `
but found: '` + ce(e).image + "'";
    if (n)
      return s + n + a;
    {
      const c = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${A(t, (u) => `[${A(u, (l) => ht(l)).join(",")}]`).join(" ,")}>`;
      return s + c + a;
    }
  }
};
Object.freeze(mi);
const $f = {
  buildRuleNotFoundError(t, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + t.name + "<-";
  }
}, De = {
  buildDuplicateFoundError(t, e) {
    function n(l) {
      return l instanceof M ? l.terminalType.name : l instanceof X ? l.nonTerminalName : "";
    }
    const r = t.name, s = ce(e), i = s.idx, a = fe(s), o = n(s), c = i > 0;
    let u = `->${a}${c ? i : ""}<- ${o ? `with argument: ->${o}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
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
    const e = A(t.prefixPath, (s) => ht(s)).join(", "), n = t.alternation.idx === 0 ? "" : t.alternation.idx;
    return `Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(t) {
    const e = A(t.prefixPath, (s) => ht(s)).join(", "), n = t.alternation.idx === 0 ? "" : t.alternation.idx;
    let r = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return r = r + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, r;
  },
  buildEmptyRepetitionError(t) {
    let e = fe(t.repetition);
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
    const e = t.topLevelRule.name, n = A(t.leftRecursionPath, (i) => i.name), r = `${e} --> ${n.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
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
    return t.topLevelRule instanceof Qe ? e = t.topLevelRule.name : e = t.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`;
  }
};
function Gf(t, e) {
  const n = new Bf(t, e);
  return n.resolveRefs(), n.errors;
}
class Bf extends Je {
  constructor(e, n) {
    super(), this.nameToTopRule = e, this.errMsgProvider = n, this.errors = [];
  }
  resolveRefs() {
    S(w(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const n = this.nameToTopRule[e.nonTerminalName];
    if (n)
      e.referencedRule = n;
    else {
      const r = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: r,
        type: B.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}
class Hf extends hn {
  constructor(e, n) {
    super(), this.topProd = e, this.path = n, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
  }
  startWalking() {
    if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = D(this.path.ruleStack).reverse(), this.occurrenceStack = D(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, n = []) {
    this.found || super.walk(e, n);
  }
  walkProdRef(e, n, r) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const s = n.concat(r);
      this.updateExpectedNext(), this.walk(e.referencedRule, s);
    }
  }
  updateExpectedNext() {
    v(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}
class Kf extends Hf {
  constructor(e, n) {
    super(e, n), this.path = n, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, n, r) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const s = n.concat(r), i = new j({ definition: s });
      this.possibleTokTypes = It(i), this.found = !0;
    }
  }
}
class dn extends hn {
  constructor(e, n) {
    super(), this.topRule = e, this.occurrence = n, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}
class Wf extends dn {
  walkMany(e, n, r) {
    if (e.idx === this.occurrence) {
      const s = ce(n.concat(r));
      this.result.isEndOfRule = s === void 0, s instanceof M && (this.result.token = s.terminalType, this.result.occurrence = s.idx);
    } else
      super.walkMany(e, n, r);
  }
}
class Is extends dn {
  walkManySep(e, n, r) {
    if (e.idx === this.occurrence) {
      const s = ce(n.concat(r));
      this.result.isEndOfRule = s === void 0, s instanceof M && (this.result.token = s.terminalType, this.result.occurrence = s.idx);
    } else
      super.walkManySep(e, n, r);
  }
}
class jf extends dn {
  walkAtLeastOne(e, n, r) {
    if (e.idx === this.occurrence) {
      const s = ce(n.concat(r));
      this.result.isEndOfRule = s === void 0, s instanceof M && (this.result.token = s.terminalType, this.result.occurrence = s.idx);
    } else
      super.walkAtLeastOne(e, n, r);
  }
}
class Ss extends dn {
  walkAtLeastOneSep(e, n, r) {
    if (e.idx === this.occurrence) {
      const s = ce(n.concat(r));
      this.result.isEndOfRule = s === void 0, s instanceof M && (this.result.token = s.terminalType, this.result.occurrence = s.idx);
    } else
      super.walkAtLeastOneSep(e, n, r);
  }
}
function wn(t, e, n = []) {
  n = D(n);
  let r = [], s = 0;
  function i(o) {
    return o.concat(F(t, s + 1));
  }
  function a(o) {
    const c = wn(i(o), e, n);
    return r.concat(c);
  }
  for (; n.length < e && s < t.length; ) {
    const o = t[s];
    if (o instanceof j)
      return a(o.definition);
    if (o instanceof X)
      return a(o.definition);
    if (o instanceof K)
      r = a(o.definition);
    else if (o instanceof me) {
      const c = o.definition.concat([
        new U({
          definition: o.definition
        })
      ]);
      return a(c);
    } else if (o instanceof Ae) {
      const c = [
        new j({ definition: o.definition }),
        new U({
          definition: [new M({ terminalType: o.separator })].concat(o.definition)
        })
      ];
      return a(c);
    } else if (o instanceof le) {
      const c = o.definition.concat([
        new U({
          definition: [new M({ terminalType: o.separator })].concat(o.definition)
        })
      ]);
      r = a(c);
    } else if (o instanceof U) {
      const c = o.definition.concat([
        new U({
          definition: o.definition
        })
      ]);
      r = a(c);
    } else {
      if (o instanceof he)
        return S(o.definition, (c) => {
          v(c.definition) === !1 && (r = a(c.definition));
        }), r;
      if (o instanceof M)
        n.push(o.terminalType);
      else
        throw Error("non exhaustive match");
    }
    s++;
  }
  return r.push({
    partialPath: n,
    suffixDef: F(t, s)
  }), r;
}
function Ai(t, e, n, r) {
  const s = "EXIT_NONE_TERMINAL", i = [s], a = "EXIT_ALTERNATIVE";
  let o = !1;
  const c = e.length, u = c - r - 1, l = [], h = [];
  for (h.push({
    idx: -1,
    def: t,
    ruleStack: [],
    occurrenceStack: []
  }); !v(h); ) {
    const f = h.pop();
    if (f === a) {
      o && qe(h).idx <= u && h.pop();
      continue;
    }
    const p = f.def, T = f.idx, I = f.ruleStack, O = f.occurrenceStack;
    if (v(p))
      continue;
    const g = p[0];
    if (g === s) {
      const E = {
        idx: T,
        def: F(p),
        ruleStack: Et(I),
        occurrenceStack: Et(O)
      };
      h.push(E);
    } else if (g instanceof M)
      if (T < c - 1) {
        const E = T + 1, d = e[E];
        if (n(d, g.terminalType)) {
          const m = {
            idx: E,
            def: F(p),
            ruleStack: I,
            occurrenceStack: O
          };
          h.push(m);
        }
      } else if (T === c - 1)
        l.push({
          nextTokenType: g.terminalType,
          nextTokenOccurrence: g.idx,
          ruleStack: I,
          occurrenceStack: O
        }), o = !0;
      else
        throw Error("non exhaustive match");
    else if (g instanceof X) {
      const E = D(I);
      E.push(g.nonTerminalName);
      const d = D(O);
      d.push(g.idx);
      const m = {
        idx: T,
        def: g.definition.concat(i, F(p)),
        ruleStack: E,
        occurrenceStack: d
      };
      h.push(m);
    } else if (g instanceof K) {
      const E = {
        idx: T,
        def: F(p),
        ruleStack: I,
        occurrenceStack: O
      };
      h.push(E), h.push(a);
      const d = {
        idx: T,
        def: g.definition.concat(F(p)),
        ruleStack: I,
        occurrenceStack: O
      };
      h.push(d);
    } else if (g instanceof me) {
      const E = new U({
        definition: g.definition,
        idx: g.idx
      }), d = g.definition.concat([E], F(p)), m = {
        idx: T,
        def: d,
        ruleStack: I,
        occurrenceStack: O
      };
      h.push(m);
    } else if (g instanceof Ae) {
      const E = new M({
        terminalType: g.separator
      }), d = new U({
        definition: [E].concat(g.definition),
        idx: g.idx
      }), m = g.definition.concat([d], F(p)), L = {
        idx: T,
        def: m,
        ruleStack: I,
        occurrenceStack: O
      };
      h.push(L);
    } else if (g instanceof le) {
      const E = {
        idx: T,
        def: F(p),
        ruleStack: I,
        occurrenceStack: O
      };
      h.push(E), h.push(a);
      const d = new M({
        terminalType: g.separator
      }), m = new U({
        definition: [d].concat(g.definition),
        idx: g.idx
      }), L = g.definition.concat([m], F(p)), re = {
        idx: T,
        def: L,
        ruleStack: I,
        occurrenceStack: O
      };
      h.push(re);
    } else if (g instanceof U) {
      const E = {
        idx: T,
        def: F(p),
        ruleStack: I,
        occurrenceStack: O
      };
      h.push(E), h.push(a);
      const d = new U({
        definition: g.definition,
        idx: g.idx
      }), m = g.definition.concat([d], F(p)), L = {
        idx: T,
        def: m,
        ruleStack: I,
        occurrenceStack: O
      };
      h.push(L);
    } else if (g instanceof he)
      for (let E = g.definition.length - 1; E >= 0; E--) {
        const d = g.definition[E], m = {
          idx: T,
          def: d.definition.concat(F(p)),
          ruleStack: I,
          occurrenceStack: O
        };
        h.push(m), h.push(a);
      }
    else if (g instanceof j)
      h.push({
        idx: T,
        def: g.definition.concat(F(p)),
        ruleStack: I,
        occurrenceStack: O
      });
    else if (g instanceof Qe)
      h.push(zf(g, T, I, O));
    else
      throw Error("non exhaustive match");
  }
  return l;
}
function zf(t, e, n, r) {
  const s = D(n);
  s.push(t.name);
  const i = D(r);
  return i.push(1), {
    idx: e,
    def: t.definition,
    ruleStack: s,
    occurrenceStack: i
  };
}
var k;
(function(t) {
  t[t.OPTION = 0] = "OPTION", t[t.REPETITION = 1] = "REPETITION", t[t.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", t[t.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", t[t.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", t[t.ALTERNATION = 5] = "ALTERNATION";
})(k || (k = {}));
function Ri(t) {
  if (t instanceof K || t === "Option")
    return k.OPTION;
  if (t instanceof U || t === "Repetition")
    return k.REPETITION;
  if (t instanceof me || t === "RepetitionMandatory")
    return k.REPETITION_MANDATORY;
  if (t instanceof Ae || t === "RepetitionMandatoryWithSeparator")
    return k.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (t instanceof le || t === "RepetitionWithSeparator")
    return k.REPETITION_WITH_SEPARATOR;
  if (t instanceof he || t === "Alternation")
    return k.ALTERNATION;
  throw Error("non exhaustive match");
}
function Vf(t, e, n, r, s, i) {
  const a = Er(t, e, n), o = _i(a) ? zt : St;
  return i(a, r, o, s);
}
function Yf(t, e, n, r, s, i) {
  const a = gr(t, e, s, n), o = _i(a) ? zt : St;
  return i(a[0], o, r);
}
function Xf(t, e, n, r) {
  const s = t.length, i = ae(t, (a) => ae(a, (o) => o.length === 1));
  if (e)
    return function(a) {
      const o = A(a, (c) => c.GATE);
      for (let c = 0; c < s; c++) {
        const u = t[c], l = u.length, h = o[c];
        if (!(h !== void 0 && h.call(this) === !1))
          e: for (let f = 0; f < l; f++) {
            const p = u[f], T = p.length;
            for (let I = 0; I < T; I++) {
              const O = this.LA(I + 1);
              if (n(O, p[I]) === !1)
                continue e;
            }
            return c;
          }
      }
    };
  if (i && !r) {
    const a = A(t, (c) => ie(c)), o = Y(a, (c, u, l) => (S(u, (h) => {
      R(c, h.tokenTypeIdx) || (c[h.tokenTypeIdx] = l), S(h.categoryMatches, (f) => {
        R(c, f) || (c[f] = l);
      });
    }), c), {});
    return function() {
      const c = this.LA(1);
      return o[c.tokenTypeIdx];
    };
  } else
    return function() {
      for (let a = 0; a < s; a++) {
        const o = t[a], c = o.length;
        e: for (let u = 0; u < c; u++) {
          const l = o[u], h = l.length;
          for (let f = 0; f < h; f++) {
            const p = this.LA(f + 1);
            if (n(p, l[f]) === !1)
              continue e;
          }
          return a;
        }
      }
    };
}
function qf(t, e, n) {
  const r = ae(t, (i) => i.length === 1), s = t.length;
  if (r && !n) {
    const i = ie(t);
    if (i.length === 1 && v(i[0].categoryMatches)) {
      const o = i[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === o;
      };
    } else {
      const a = Y(i, (o, c, u) => (o[c.tokenTypeIdx] = !0, S(c.categoryMatches, (l) => {
        o[l] = !0;
      }), o), []);
      return function() {
        const o = this.LA(1);
        return a[o.tokenTypeIdx] === !0;
      };
    }
  } else
    return function() {
      e: for (let i = 0; i < s; i++) {
        const a = t[i], o = a.length;
        for (let c = 0; c < o; c++) {
          const u = this.LA(c + 1);
          if (e(u, a[c]) === !1)
            continue e;
        }
        return !0;
      }
      return !1;
    };
}
class Zf extends hn {
  constructor(e, n, r) {
    super(), this.topProd = e, this.targetOccurrence = n, this.targetProdType = r;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, n, r, s) {
    return e.idx === this.targetOccurrence && this.targetProdType === n ? (this.restDef = r.concat(s), !0) : !1;
  }
  walkOption(e, n, r) {
    this.checkIsTarget(e, k.OPTION, n, r) || super.walkOption(e, n, r);
  }
  walkAtLeastOne(e, n, r) {
    this.checkIsTarget(e, k.REPETITION_MANDATORY, n, r) || super.walkOption(e, n, r);
  }
  walkAtLeastOneSep(e, n, r) {
    this.checkIsTarget(e, k.REPETITION_MANDATORY_WITH_SEPARATOR, n, r) || super.walkOption(e, n, r);
  }
  walkMany(e, n, r) {
    this.checkIsTarget(e, k.REPETITION, n, r) || super.walkOption(e, n, r);
  }
  walkManySep(e, n, r) {
    this.checkIsTarget(e, k.REPETITION_WITH_SEPARATOR, n, r) || super.walkOption(e, n, r);
  }
}
class Ii extends Je {
  constructor(e, n, r) {
    super(), this.targetOccurrence = e, this.targetProdType = n, this.targetRef = r, this.result = [];
  }
  checkIsTarget(e, n) {
    e.idx === this.targetOccurrence && this.targetProdType === n && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, k.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, k.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, k.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, k.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, k.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, k.ALTERNATION);
  }
}
function _s(t) {
  const e = new Array(t);
  for (let n = 0; n < t; n++)
    e[n] = [];
  return e;
}
function Nn(t) {
  let e = [""];
  for (let n = 0; n < t.length; n++) {
    const r = t[n], s = [];
    for (let i = 0; i < e.length; i++) {
      const a = e[i];
      s.push(a + "_" + r.tokenTypeIdx);
      for (let o = 0; o < r.categoryMatches.length; o++) {
        const c = "_" + r.categoryMatches[o];
        s.push(a + c);
      }
    }
    e = s;
  }
  return e;
}
function Qf(t, e, n) {
  for (let r = 0; r < t.length; r++) {
    if (r === n)
      continue;
    const s = t[r];
    for (let i = 0; i < e.length; i++) {
      const a = e[i];
      if (s[a] === !0)
        return !1;
    }
  }
  return !0;
}
function Si(t, e) {
  const n = A(t, (a) => wn([a], 1)), r = _s(n.length), s = A(n, (a) => {
    const o = {};
    return S(a, (c) => {
      const u = Nn(c.partialPath);
      S(u, (l) => {
        o[l] = !0;
      });
    }), o;
  });
  let i = n;
  for (let a = 1; a <= e; a++) {
    const o = i;
    i = _s(o.length);
    for (let c = 0; c < o.length; c++) {
      const u = o[c];
      for (let l = 0; l < u.length; l++) {
        const h = u[l].partialPath, f = u[l].suffixDef, p = Nn(h);
        if (Qf(s, p, c) || v(f) || h.length === e) {
          const I = r[c];
          if (Un(I, h) === !1) {
            I.push(h);
            for (let O = 0; O < p.length; O++) {
              const g = p[O];
              s[c][g] = !0;
            }
          }
        } else {
          const I = wn(f, a + 1, h);
          i[c] = i[c].concat(I), S(I, (O) => {
            const g = Nn(O.partialPath);
            S(g, (E) => {
              s[c][E] = !0;
            });
          });
        }
      }
    }
  }
  return r;
}
function Er(t, e, n, r) {
  const s = new Ii(t, k.ALTERNATION, r);
  return e.accept(s), Si(s.result, n);
}
function gr(t, e, n, r) {
  const s = new Ii(t, n);
  e.accept(s);
  const i = s.result, o = new Zf(e, t, n).startWalking(), c = new j({ definition: i }), u = new j({ definition: o });
  return Si([c, u], r);
}
function Un(t, e) {
  e: for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (r.length === e.length) {
      for (let s = 0; s < r.length; s++) {
        const i = e[s], a = r[s];
        if ((i === a || a.categoryMatchesMap[i.tokenTypeIdx] !== void 0) === !1)
          continue e;
      }
      return !0;
    }
  }
  return !1;
}
function Jf(t, e) {
  return t.length < e.length && ae(t, (n, r) => {
    const s = e[r];
    return n === s || s.categoryMatchesMap[n.tokenTypeIdx];
  });
}
function _i(t) {
  return ae(t, (e) => ae(e, (n) => ae(n, (r) => v(r.categoryMatches))));
}
function ed(t) {
  const e = t.lookaheadStrategy.validate({
    rules: t.rules,
    tokenTypes: t.tokenTypes,
    grammarName: t.grammarName
  });
  return A(e, (n) => Object.assign({ type: B.CUSTOM_LOOKAHEAD_VALIDATION }, n));
}
function td(t, e, n, r) {
  const s = Q(t, (c) => nd(c, n)), i = pd(t, e, n), a = Q(t, (c) => ld(c, n)), o = Q(t, (c) => id(c, t, r, n));
  return s.concat(i, a, o);
}
function nd(t, e) {
  const n = new sd();
  t.accept(n);
  const r = n.allProductions, s = ph(r, rd), i = ue(s, (o) => o.length > 1);
  return A(w(i), (o) => {
    const c = ce(o), u = e.buildDuplicateFoundError(t, o), l = fe(c), h = {
      message: u,
      type: B.DUPLICATE_PRODUCTIONS,
      ruleName: t.name,
      dslName: l,
      occurrence: c.idx
    }, f = Oi(c);
    return f && (h.parameter = f), h;
  });
}
function rd(t) {
  return `${fe(t)}_#_${t.idx}_#_${Oi(t)}`;
}
function Oi(t) {
  return t instanceof M ? t.terminalType.name : t instanceof X ? t.nonTerminalName : "";
}
class sd extends Je {
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
function id(t, e, n, r) {
  const s = [];
  if (Y(e, (a, o) => o.name === t.name ? a + 1 : a, 0) > 1) {
    const a = r.buildDuplicateRuleNameError({
      topLevelRule: t,
      grammarName: n
    });
    s.push({
      message: a,
      type: B.DUPLICATE_RULE_NAME,
      ruleName: t.name
    });
  }
  return s;
}
function ad(t, e, n) {
  const r = [];
  let s;
  return H(e, t) || (s = `Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `, r.push({
    message: s,
    type: B.INVALID_RULE_OVERRIDE,
    ruleName: t
  })), r;
}
function Ni(t, e, n, r = []) {
  const s = [], i = Ft(e.definition);
  if (v(i))
    return [];
  {
    const a = t.name;
    H(i, t) && s.push({
      message: n.buildLeftRecursionError({
        topLevelRule: t,
        leftRecursionPath: r
      }),
      type: B.LEFT_RECURSION,
      ruleName: a
    });
    const c = un(i, r.concat([t])), u = Q(c, (l) => {
      const h = D(r);
      return h.push(l), Ni(t, l, n, h);
    });
    return s.concat(u);
  }
}
function Ft(t) {
  let e = [];
  if (v(t))
    return e;
  const n = ce(t);
  if (n instanceof X)
    e.push(n.referencedRule);
  else if (n instanceof j || n instanceof K || n instanceof me || n instanceof Ae || n instanceof le || n instanceof U)
    e = e.concat(Ft(n.definition));
  else if (n instanceof he)
    e = ie(A(n.definition, (i) => Ft(i.definition)));
  else if (!(n instanceof M)) throw Error("non exhaustive match");
  const r = Ht(n), s = t.length > 1;
  if (r && s) {
    const i = F(t);
    return e.concat(Ft(i));
  } else
    return e;
}
class Tr extends Je {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}
function od(t, e) {
  const n = new Tr();
  t.accept(n);
  const r = n.alternations;
  return Q(r, (i) => {
    const a = Et(i.definition);
    return Q(a, (o, c) => {
      const u = Ai([o], [], St, 1);
      return v(u) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: t,
            alternation: i,
            emptyChoiceIdx: c
          }),
          type: B.NONE_LAST_EMPTY_ALT,
          ruleName: t.name,
          occurrence: i.idx,
          alternative: c + 1
        }
      ] : [];
    });
  });
}
function cd(t, e, n) {
  const r = new Tr();
  t.accept(r);
  let s = r.alternations;
  return s = ln(s, (a) => a.ignoreAmbiguities === !0), Q(s, (a) => {
    const o = a.idx, c = a.maxLookahead || e, u = Er(o, t, c, a), l = fd(u, a, t, n), h = dd(u, a, t, n);
    return l.concat(h);
  });
}
class ud extends Je {
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
function ld(t, e) {
  const n = new Tr();
  t.accept(n);
  const r = n.alternations;
  return Q(r, (i) => i.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: t,
        alternation: i
      }),
      type: B.TOO_MANY_ALTS,
      ruleName: t.name,
      occurrence: i.idx
    }
  ] : []);
}
function hd(t, e, n) {
  const r = [];
  return S(t, (s) => {
    const i = new ud();
    s.accept(i);
    const a = i.allProductions;
    S(a, (o) => {
      const c = Ri(o), u = o.maxLookahead || e, l = o.idx, f = gr(l, s, c, u)[0];
      if (v(ie(f))) {
        const p = n.buildEmptyRepetitionError({
          topLevelRule: s,
          repetition: o
        });
        r.push({
          message: p,
          type: B.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: s.name
        });
      }
    });
  }), r;
}
function fd(t, e, n, r) {
  const s = [], i = Y(t, (o, c, u) => (e.definition[u].ignoreAmbiguities === !0 || S(c, (l) => {
    const h = [u];
    S(t, (f, p) => {
      u !== p && Un(f, l) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[p].ignoreAmbiguities !== !0 && h.push(p);
    }), h.length > 1 && !Un(s, l) && (s.push(l), o.push({
      alts: h,
      path: l
    }));
  }), o), []);
  return A(i, (o) => {
    const c = A(o.alts, (l) => l + 1);
    return {
      message: r.buildAlternationAmbiguityError({
        topLevelRule: n,
        alternation: e,
        ambiguityIndices: c,
        prefixPath: o.path
      }),
      type: B.AMBIGUOUS_ALTS,
      ruleName: n.name,
      occurrence: e.idx,
      alternatives: o.alts
    };
  });
}
function dd(t, e, n, r) {
  const s = Y(t, (a, o, c) => {
    const u = A(o, (l) => ({ idx: c, path: l }));
    return a.concat(u);
  }, []);
  return Rt(Q(s, (a) => {
    if (e.definition[a.idx].ignoreAmbiguities === !0)
      return [];
    const c = a.idx, u = a.path, l = ne(s, (f) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[f.idx].ignoreAmbiguities !== !0 && f.idx < c && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      Jf(f.path, u)
    ));
    return A(l, (f) => {
      const p = [f.idx + 1, c + 1], T = e.idx === 0 ? "" : e.idx;
      return {
        message: r.buildAlternationPrefixAmbiguityError({
          topLevelRule: n,
          alternation: e,
          ambiguityIndices: p,
          prefixPath: f.path
        }),
        type: B.AMBIGUOUS_PREFIX_ALTS,
        ruleName: n.name,
        occurrence: T,
        alternatives: p
      };
    });
  }));
}
function pd(t, e, n) {
  const r = [], s = A(e, (i) => i.name);
  return S(t, (i) => {
    const a = i.name;
    if (H(s, a)) {
      const o = n.buildNamespaceConflictError(i);
      r.push({
        message: o,
        type: B.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: a
      });
    }
  }), r;
}
function Ed(t) {
  const e = lr(t, {
    errMsgProvider: $f
  }), n = {};
  return S(t.rules, (r) => {
    n[r.name] = r;
  }), Gf(n, e.errMsgProvider);
}
function gd(t) {
  return t = lr(t, {
    errMsgProvider: De
  }), td(t.rules, t.tokenTypes, t.errMsgProvider, t.grammarName);
}
const Ci = "MismatchedTokenException", Li = "NoViableAltException", yi = "EarlyExitException", vi = "NotAllInputParsedException", Pi = [
  Ci,
  Li,
  yi,
  vi
];
Object.freeze(Pi);
function Vt(t) {
  return H(Pi, t.name);
}
class pn extends Error {
  constructor(e, n) {
    super(e), this.token = n, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}
class Mi extends pn {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = Ci;
  }
}
class Td extends pn {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = Li;
  }
}
class md extends pn {
  constructor(e, n) {
    super(e, n), this.name = vi;
  }
}
class Ad extends pn {
  constructor(e, n, r) {
    super(e, n), this.previousToken = r, this.name = yi;
  }
}
const Cn = {}, ki = "InRuleRecoveryException";
class Rd extends Error {
  constructor(e) {
    super(e), this.name = ki;
  }
}
class Id {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = R(e, "recoveryEnabled") ? e.recoveryEnabled : Oe.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = Sd);
  }
  getTokenToInsert(e) {
    const n = pr(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return n.isInsertedInRecovery = !0, n;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return !0;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return !0;
  }
  tryInRepetitionRecovery(e, n, r, s) {
    const i = this.findReSyncTokenType(), a = this.exportLexerState(), o = [];
    let c = !1;
    const u = this.LA(1);
    let l = this.LA(1);
    const h = () => {
      const f = this.LA(0), p = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: s,
        actual: u,
        previous: f,
        ruleName: this.getCurrRuleFullName()
      }), T = new Mi(p, u, this.LA(0));
      T.resyncedTokens = Et(o), this.SAVE_ERROR(T);
    };
    for (; !c; )
      if (this.tokenMatcher(l, s)) {
        h();
        return;
      } else if (r.call(this)) {
        h(), e.apply(this, n);
        return;
      } else this.tokenMatcher(l, i) ? c = !0 : (l = this.SKIP_TOKEN(), this.addToResyncTokens(l, o));
    this.importLexerState(a);
  }
  shouldInRepetitionRecoveryBeTried(e, n, r) {
    return !(r === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, n)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, n) {
    const r = this.getCurrentGrammarPath(e, n);
    return this.getNextPossibleTokenTypes(r);
  }
  tryInRuleRecovery(e, n) {
    if (this.canRecoverWithSingleTokenInsertion(e, n))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const r = this.SKIP_TOKEN();
      return this.consumeToken(), r;
    }
    throw new Rd("sad sad panda");
  }
  canPerformInRuleRecovery(e, n) {
    return this.canRecoverWithSingleTokenInsertion(e, n) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, n) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || v(n))
      return !1;
    const r = this.LA(1);
    return Ze(n, (i) => this.tokenMatcher(r, i)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
  }
  isInCurrentRuleReSyncSet(e) {
    const n = this.getCurrFollowKey(), r = this.getFollowSetFromFollowKey(n);
    return H(r, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let n = this.LA(1), r = 2;
    for (; ; ) {
      const s = Ze(e, (i) => Df(n, i));
      if (s !== void 0)
        return s;
      n = this.LA(r), r++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return Cn;
    const e = this.getLastExplicitRuleShortName(), n = this.getLastExplicitRuleOccurrenceIndex(), r = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: n,
      inRule: this.shortRuleNameToFullName(r)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, n = this.RULE_OCCURRENCE_STACK;
    return A(e, (r, s) => s === 0 ? Cn : {
      ruleName: this.shortRuleNameToFullName(r),
      idxInCallingRule: n[s],
      inRule: this.shortRuleNameToFullName(e[s - 1])
    });
  }
  flattenFollowSet() {
    const e = A(this.buildFullFollowKeyStack(), (n) => this.getFollowSetFromFollowKey(n));
    return ie(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Cn)
      return [Be];
    const n = e.ruleName + e.idxInCallingRule + ci + e.inRule;
    return this.resyncFollows[n];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, n) {
    return this.tokenMatcher(e, Be) || n.push(e), n;
  }
  reSyncTo(e) {
    const n = [];
    let r = this.LA(1);
    for (; this.tokenMatcher(r, e) === !1; )
      r = this.SKIP_TOKEN(), this.addToResyncTokens(r, n);
    return Et(n);
  }
  attemptInRepetitionRecovery(e, n, r, s, i, a, o) {
  }
  getCurrentGrammarPath(e, n) {
    const r = this.getHumanReadableRuleStack(), s = D(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: r,
      occurrenceStack: s,
      lastTok: e,
      lastTokOccurrence: n
    };
  }
  getHumanReadableRuleStack() {
    return A(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}
function Sd(t, e, n, r, s, i, a) {
  const o = this.getKeyForAutomaticLookahead(r, s);
  let c = this.firstAfterRepMap[o];
  if (c === void 0) {
    const f = this.getCurrRuleFullName(), p = this.getGAstProductions()[f];
    c = new i(p, s).startWalking(), this.firstAfterRepMap[o] = c;
  }
  let u = c.token, l = c.occurrence;
  const h = c.isEndOfRule;
  this.RULE_STACK.length === 1 && h && u === void 0 && (u = Be, l = 1), !(u === void 0 || l === void 0) && this.shouldInRepetitionRecoveryBeTried(u, l, a) && this.tryInRepetitionRecovery(t, e, n, u);
}
const _d = 4, we = 8, xi = 1 << we, bi = 2 << we, Fn = 3 << we, Dn = 4 << we, $n = 5 << we, Dt = 6 << we;
function Ln(t, e, n) {
  return n | e | t;
}
class Od {
  constructor(e) {
    var n;
    this.maxLookahead = (n = e == null ? void 0 : e.maxLookahead) !== null && n !== void 0 ? n : Oe.maxLookahead;
  }
  validate(e) {
    const n = this.validateNoLeftRecursion(e.rules);
    if (v(n)) {
      const r = this.validateEmptyOrAlternatives(e.rules), s = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), i = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...n,
        ...r,
        ...s,
        ...i
      ];
    }
    return n;
  }
  validateNoLeftRecursion(e) {
    return Q(e, (n) => Ni(n, n, De));
  }
  validateEmptyOrAlternatives(e) {
    return Q(e, (n) => od(n, De));
  }
  validateAmbiguousAlternationAlternatives(e, n) {
    return Q(e, (r) => cd(r, n, De));
  }
  validateSomeNonEmptyLookaheadPath(e, n) {
    return hd(e, n, De);
  }
  buildLookaheadForAlternation(e) {
    return Vf(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, Xf);
  }
  buildLookaheadForOptional(e) {
    return Yf(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, Ri(e.prodType), qf);
  }
}
class Nd {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = R(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : Oe.dynamicTokensEnabled, this.maxLookahead = R(e, "maxLookahead") ? e.maxLookahead : Oe.maxLookahead, this.lookaheadStrategy = R(e, "lookaheadStrategy") ? e.lookaheadStrategy : new Od({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    S(e, (n) => {
      this.TRACE_INIT(`${n.name} Rule Lookahead`, () => {
        const { alternation: r, repetition: s, option: i, repetitionMandatory: a, repetitionMandatoryWithSeparator: o, repetitionWithSeparator: c } = Ld(n);
        S(r, (u) => {
          const l = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${fe(u)}${l}`, () => {
            const h = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: n,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), f = Ln(this.fullRuleNameToShort[n.name], xi, u.idx);
            this.setLaFuncCache(f, h);
          });
        }), S(s, (u) => {
          this.computeLookaheadFunc(n, u.idx, Fn, "Repetition", u.maxLookahead, fe(u));
        }), S(i, (u) => {
          this.computeLookaheadFunc(n, u.idx, bi, "Option", u.maxLookahead, fe(u));
        }), S(a, (u) => {
          this.computeLookaheadFunc(n, u.idx, Dn, "RepetitionMandatory", u.maxLookahead, fe(u));
        }), S(o, (u) => {
          this.computeLookaheadFunc(n, u.idx, Dt, "RepetitionMandatoryWithSeparator", u.maxLookahead, fe(u));
        }), S(c, (u) => {
          this.computeLookaheadFunc(n, u.idx, $n, "RepetitionWithSeparator", u.maxLookahead, fe(u));
        });
      });
    });
  }
  computeLookaheadFunc(e, n, r, s, i, a) {
    this.TRACE_INIT(`${a}${n === 0 ? "" : n}`, () => {
      const o = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: n,
        rule: e,
        maxLookahead: i || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: s
      }), c = Ln(this.fullRuleNameToShort[e.name], r, n);
      this.setLaFuncCache(c, o);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, n) {
    const r = this.getLastExplicitRuleShortName();
    return Ln(r, e, n);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, n) {
    this.lookAheadFuncsCache.set(e, n);
  }
}
class Cd extends Je {
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
const Mt = new Cd();
function Ld(t) {
  Mt.reset(), t.accept(Mt);
  const e = Mt.dslMethods;
  return Mt.reset(), e;
}
function Os(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.endOffset = e.endOffset) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset);
}
function Ns(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.startColumn = e.startColumn, t.startLine = e.startLine, t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine);
}
function yd(t, e, n) {
  t.children[n] === void 0 ? t.children[n] = [e] : t.children[n].push(e);
}
function vd(t, e, n) {
  t.children[e] === void 0 ? t.children[e] = [n] : t.children[e].push(n);
}
const Pd = "name";
function wi(t, e) {
  Object.defineProperty(t, Pd, {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: e
  });
}
function Md(t, e) {
  const n = te(t), r = n.length;
  for (let s = 0; s < r; s++) {
    const i = n[s], a = t[i], o = a.length;
    for (let c = 0; c < o; c++) {
      const u = a[c];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
function kd(t, e) {
  const n = function() {
  };
  wi(n, t + "BaseSemantics");
  const r = {
    visit: function(s, i) {
      if (N(s) && (s = s[0]), !_e(s))
        return this[s.name](s.children, i);
    },
    validateVisitor: function() {
      const s = bd(this, e);
      if (!v(s)) {
        const i = A(s, (a) => a.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${i.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }
  };
  return n.prototype = r, n.prototype.constructor = n, n._RULE_NAMES = e, n;
}
function xd(t, e, n) {
  const r = function() {
  };
  wi(r, t + "BaseSemanticsWithDefaults");
  const s = Object.create(n.prototype);
  return S(e, (i) => {
    s[i] = Md;
  }), r.prototype = s, r.prototype.constructor = r, r;
}
var Gn;
(function(t) {
  t[t.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", t[t.MISSING_METHOD = 1] = "MISSING_METHOD";
})(Gn || (Gn = {}));
function bd(t, e) {
  return wd(t, e);
}
function wd(t, e) {
  const n = ne(e, (s) => Ne(t[s]) === !1), r = A(n, (s) => ({
    msg: `Missing visitor method: <${s}> on ${t.constructor.name} CST Visitor.`,
    type: Gn.MISSING_METHOD,
    methodName: s
  }));
  return Rt(r);
}
class Ud {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = R(e, "nodeLocationTracking") ? e.nodeLocationTracking : Oe.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = b, this.cstFinallyStateUpdate = b, this.cstPostTerminal = b, this.cstPostNonTerminal = b, this.cstPostRule = b;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Ns, this.setNodeLocationFromNode = Ns, this.cstPostRule = b, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = b, this.setNodeLocationFromNode = b, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = Os, this.setNodeLocationFromNode = Os, this.cstPostRule = b, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = b, this.setNodeLocationFromNode = b, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = b, this.setNodeLocationFromNode = b, this.cstPostRule = b, this.setInitialNodeLocation = b;
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
    const n = this.LA(1);
    e.location = {
      startOffset: n.startOffset,
      startLine: n.startLine,
      startColumn: n.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const n = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(n), this.CST_STACK.push(n);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const n = this.LA(0), r = e.location;
    r.startOffset <= n.startOffset ? (r.endOffset = n.endOffset, r.endLine = n.endLine, r.endColumn = n.endColumn) : (r.startOffset = NaN, r.startLine = NaN, r.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const n = this.LA(0), r = e.location;
    r.startOffset <= n.startOffset ? r.endOffset = n.endOffset : r.startOffset = NaN;
  }
  cstPostTerminal(e, n) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    yd(r, n, e), this.setNodeLocationFromToken(r.location, n);
  }
  cstPostNonTerminal(e, n) {
    const r = this.CST_STACK[this.CST_STACK.length - 1];
    vd(r, n, e), this.setNodeLocationFromNode(r.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (_e(this.baseCstVisitorConstructor)) {
      const e = kd(this.className, te(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (_e(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = xd(this.className, te(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
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
class Fd {
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
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : Xt;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const n = this.currIdx + e;
    return n < 0 || this.tokVectorLength <= n ? Xt : this.tokVector[n];
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
class Dd {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, n, r) {
    return this.consumeInternal(n, e, r);
  }
  subrule(e, n, r) {
    return this.subruleInternal(n, e, r);
  }
  option(e, n) {
    return this.optionInternal(n, e);
  }
  or(e, n) {
    return this.orInternal(n, e);
  }
  many(e, n) {
    return this.manyInternal(e, n);
  }
  atLeastOne(e, n) {
    return this.atLeastOneInternal(e, n);
  }
  CONSUME(e, n) {
    return this.consumeInternal(e, 0, n);
  }
  CONSUME1(e, n) {
    return this.consumeInternal(e, 1, n);
  }
  CONSUME2(e, n) {
    return this.consumeInternal(e, 2, n);
  }
  CONSUME3(e, n) {
    return this.consumeInternal(e, 3, n);
  }
  CONSUME4(e, n) {
    return this.consumeInternal(e, 4, n);
  }
  CONSUME5(e, n) {
    return this.consumeInternal(e, 5, n);
  }
  CONSUME6(e, n) {
    return this.consumeInternal(e, 6, n);
  }
  CONSUME7(e, n) {
    return this.consumeInternal(e, 7, n);
  }
  CONSUME8(e, n) {
    return this.consumeInternal(e, 8, n);
  }
  CONSUME9(e, n) {
    return this.consumeInternal(e, 9, n);
  }
  SUBRULE(e, n) {
    return this.subruleInternal(e, 0, n);
  }
  SUBRULE1(e, n) {
    return this.subruleInternal(e, 1, n);
  }
  SUBRULE2(e, n) {
    return this.subruleInternal(e, 2, n);
  }
  SUBRULE3(e, n) {
    return this.subruleInternal(e, 3, n);
  }
  SUBRULE4(e, n) {
    return this.subruleInternal(e, 4, n);
  }
  SUBRULE5(e, n) {
    return this.subruleInternal(e, 5, n);
  }
  SUBRULE6(e, n) {
    return this.subruleInternal(e, 6, n);
  }
  SUBRULE7(e, n) {
    return this.subruleInternal(e, 7, n);
  }
  SUBRULE8(e, n) {
    return this.subruleInternal(e, 8, n);
  }
  SUBRULE9(e, n) {
    return this.subruleInternal(e, 9, n);
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
  RULE(e, n, r = qt) {
    if (H(this.definedRulesNames, e)) {
      const a = {
        message: De.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: B.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(a);
    }
    this.definedRulesNames.push(e);
    const s = this.defineRule(e, n, r);
    return this[e] = s, s;
  }
  OVERRIDE_RULE(e, n, r = qt) {
    const s = ad(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(s);
    const i = this.defineRule(e, n, r);
    return this[e] = i, i;
  }
  BACKTRACK(e, n) {
    return function() {
      this.isBackTrackingStack.push(1);
      const r = this.saveRecogState();
      try {
        return e.apply(this, n), !0;
      } catch (s) {
        if (Vt(s))
          return !1;
        throw s;
      } finally {
        this.reloadRecogState(r), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return $h(w(this.gastProductionsCache));
  }
}
class $d {
  initRecognizerEngine(e, n) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = zt, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, R(n, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (N(e)) {
      if (v(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (N(e))
      this.tokensMap = Y(e, (i, a) => (i[a.name] = a, i), {});
    else if (R(e, "modes") && ae(ie(w(e.modes)), bf)) {
      const i = ie(w(e.modes)), a = hr(i);
      this.tokensMap = Y(a, (o, c) => (o[c.name] = c, o), {});
    } else if (ee(e))
      this.tokensMap = D(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = Be;
    const r = R(e, "modes") ? ie(w(e.modes)) : w(e), s = ae(r, (i) => v(i.categoryMatches));
    this.tokenMatcher = s ? zt : St, _t(w(this.tokensMap));
  }
  defineRule(e, n, r) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const s = R(r, "resyncEnabled") ? r.resyncEnabled : qt.resyncEnabled, i = R(r, "recoveryValueFunc") ? r.recoveryValueFunc : qt.recoveryValueFunc, a = this.ruleShortNameIdx << _d + we;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[a] = e, this.fullRuleNameToShort[e] = a;
    let o;
    return this.outputCst === !0 ? o = function(...l) {
      try {
        this.ruleInvocationStateUpdate(a, e, this.subruleIdx), n.apply(this, l);
        const h = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(h), h;
      } catch (h) {
        return this.invokeRuleCatch(h, s, i);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    } : o = function(...l) {
      try {
        return this.ruleInvocationStateUpdate(a, e, this.subruleIdx), n.apply(this, l);
      } catch (h) {
        return this.invokeRuleCatch(h, s, i);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, Object.assign(o, { ruleName: e, originalGrammarAction: n });
  }
  invokeRuleCatch(e, n, r) {
    const s = this.RULE_STACK.length === 1, i = n && !this.isBackTracking() && this.recoveryEnabled;
    if (Vt(e)) {
      const a = e;
      if (i) {
        const o = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(o))
          if (a.resyncedTokens = this.reSyncTo(o), this.outputCst) {
            const c = this.CST_STACK[this.CST_STACK.length - 1];
            return c.recoveredNode = !0, c;
          } else
            return r(e);
        else {
          if (this.outputCst) {
            const c = this.CST_STACK[this.CST_STACK.length - 1];
            c.recoveredNode = !0, a.partialCstResult = c;
          }
          throw a;
        }
      } else {
        if (s)
          return this.moveToTerminatedState(), r(e);
        throw a;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(bi, n);
    return this.optionInternalLogic(e, n, r);
  }
  optionInternalLogic(e, n, r) {
    let s = this.getLaFuncFromCache(r), i;
    if (typeof e != "function") {
      i = e.DEF;
      const a = e.GATE;
      if (a !== void 0) {
        const o = s;
        s = () => a.call(this) && o.call(this);
      }
    } else
      i = e;
    if (s.call(this) === !0)
      return i.call(this);
  }
  atLeastOneInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(Dn, e);
    return this.atLeastOneInternalLogic(e, n, r);
  }
  atLeastOneInternalLogic(e, n, r) {
    let s = this.getLaFuncFromCache(r), i;
    if (typeof n != "function") {
      i = n.DEF;
      const a = n.GATE;
      if (a !== void 0) {
        const o = s;
        s = () => a.call(this) && o.call(this);
      }
    } else
      i = n;
    if (s.call(this) === !0) {
      let a = this.doSingleRepetition(i);
      for (; s.call(this) === !0 && a === !0; )
        a = this.doSingleRepetition(i);
    } else
      throw this.raiseEarlyExitException(e, k.REPETITION_MANDATORY, n.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, n], s, Dn, e, jf);
  }
  atLeastOneSepFirstInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(Dt, e);
    this.atLeastOneSepFirstInternalLogic(e, n, r);
  }
  atLeastOneSepFirstInternalLogic(e, n, r) {
    const s = n.DEF, i = n.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      s.call(this);
      const o = () => this.tokenMatcher(this.LA(1), i);
      for (; this.tokenMatcher(this.LA(1), i) === !0; )
        this.CONSUME(i), s.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        i,
        o,
        s,
        Ss
      ], o, Dt, e, Ss);
    } else
      throw this.raiseEarlyExitException(e, k.REPETITION_MANDATORY_WITH_SEPARATOR, n.ERR_MSG);
  }
  manyInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(Fn, e);
    return this.manyInternalLogic(e, n, r);
  }
  manyInternalLogic(e, n, r) {
    let s = this.getLaFuncFromCache(r), i;
    if (typeof n != "function") {
      i = n.DEF;
      const o = n.GATE;
      if (o !== void 0) {
        const c = s;
        s = () => o.call(this) && c.call(this);
      }
    } else
      i = n;
    let a = !0;
    for (; s.call(this) === !0 && a === !0; )
      a = this.doSingleRepetition(i);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, n],
      s,
      Fn,
      e,
      Wf,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      a
    );
  }
  manySepFirstInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead($n, e);
    this.manySepFirstInternalLogic(e, n, r);
  }
  manySepFirstInternalLogic(e, n, r) {
    const s = n.DEF, i = n.SEP;
    if (this.getLaFuncFromCache(r).call(this) === !0) {
      s.call(this);
      const o = () => this.tokenMatcher(this.LA(1), i);
      for (; this.tokenMatcher(this.LA(1), i) === !0; )
        this.CONSUME(i), s.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        i,
        o,
        s,
        Is
      ], o, $n, e, Is);
    }
  }
  repetitionSepSecondInternal(e, n, r, s, i) {
    for (; r(); )
      this.CONSUME(n), s.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      n,
      r,
      s,
      i
    ], r, Dt, e, i);
  }
  doSingleRepetition(e) {
    const n = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > n;
  }
  orInternal(e, n) {
    const r = this.getKeyForAutomaticLookahead(xi, n), s = N(e) ? e : e.DEF, a = this.getLaFuncFromCache(r).call(this, s);
    if (a !== void 0)
      return s[a].ALT.call(this);
    this.raiseNoAltException(n, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
      const e = this.LA(1), n = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new md(n, e));
    }
  }
  subruleInternal(e, n, r) {
    let s;
    try {
      const i = r !== void 0 ? r.ARGS : void 0;
      return this.subruleIdx = n, s = e.apply(this, i), this.cstPostNonTerminal(s, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.ruleName), s;
    } catch (i) {
      throw this.subruleInternalError(i, r, e.ruleName);
    }
  }
  subruleInternalError(e, n, r) {
    throw Vt(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : r), delete e.partialCstResult), e;
  }
  consumeInternal(e, n, r) {
    let s;
    try {
      const i = this.LA(1);
      this.tokenMatcher(i, e) === !0 ? (this.consumeToken(), s = i) : this.consumeInternalError(e, i, r);
    } catch (i) {
      s = this.consumeInternalRecovery(e, n, i);
    }
    return this.cstPostTerminal(r !== void 0 && r.LABEL !== void 0 ? r.LABEL : e.name, s), s;
  }
  consumeInternalError(e, n, r) {
    let s;
    const i = this.LA(0);
    throw r !== void 0 && r.ERR_MSG ? s = r.ERR_MSG : s = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: n,
      previous: i,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new Mi(s, n, i));
  }
  consumeInternalRecovery(e, n, r) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    r.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const s = this.getFollowsForInRuleRecovery(e, n);
      try {
        return this.tryInRuleRecovery(e, s);
      } catch (i) {
        throw i.name === ki ? r : i;
      }
    } else
      throw r;
  }
  saveRecogState() {
    const e = this.errors, n = D(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: n,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, n, r) {
    this.RULE_OCCURRENCE_STACK.push(r), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(n);
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
    return this.tokenMatcher(this.LA(1), Be);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}
class Gd {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = R(e, "errorMessageProvider") ? e.errorMessageProvider : Oe.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (Vt(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: D(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return D(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, n, r) {
    const s = this.getCurrRuleFullName(), i = this.getGAstProductions()[s], o = gr(e, i, n, this.maxLookahead)[0], c = [];
    for (let l = 1; l <= this.maxLookahead; l++)
      c.push(this.LA(l));
    const u = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: o,
      actual: c,
      previous: this.LA(0),
      customUserDescription: r,
      ruleName: s
    });
    throw this.SAVE_ERROR(new Ad(u, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, n) {
    const r = this.getCurrRuleFullName(), s = this.getGAstProductions()[r], i = Er(e, s, this.maxLookahead), a = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      a.push(this.LA(u));
    const o = this.LA(0), c = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: i,
      actual: a,
      previous: o,
      customUserDescription: n,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new Td(c, this.LA(1), o));
  }
}
class Bd {
  initContentAssist() {
  }
  computeContentAssist(e, n) {
    const r = this.gastProductionsCache[e];
    if (_e(r))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return Ai([r], n, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const n = ce(e.ruleStack), s = this.getGAstProductions()[n];
    return new Kf(s, e).startWalking();
  }
}
const En = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(En);
const Cs = !0, Ls = Math.pow(2, we) - 1, Ui = C({ name: "RECORDING_PHASE_TOKEN", pattern: G.NA });
_t([Ui]);
const Fi = pr(
  Ui,
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
Object.freeze(Fi);
const Hd = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
};
class Kd {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = !1;
  }
  enableRecording() {
    this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const n = e > 0 ? e : "";
        this[`CONSUME${n}`] = function(r, s) {
          return this.consumeInternalRecord(r, e, s);
        }, this[`SUBRULE${n}`] = function(r, s) {
          return this.subruleInternalRecord(r, e, s);
        }, this[`OPTION${n}`] = function(r) {
          return this.optionInternalRecord(r, e);
        }, this[`OR${n}`] = function(r) {
          return this.orInternalRecord(r, e);
        }, this[`MANY${n}`] = function(r) {
          this.manyInternalRecord(e, r);
        }, this[`MANY_SEP${n}`] = function(r) {
          this.manySepFirstInternalRecord(e, r);
        }, this[`AT_LEAST_ONE${n}`] = function(r) {
          this.atLeastOneInternalRecord(e, r);
        }, this[`AT_LEAST_ONE_SEP${n}`] = function(r) {
          this.atLeastOneSepFirstInternalRecord(e, r);
        };
      }
      this.consume = function(e, n, r) {
        return this.consumeInternalRecord(n, e, r);
      }, this.subrule = function(e, n, r) {
        return this.subruleInternalRecord(n, e, r);
      }, this.option = function(e, n) {
        return this.optionInternalRecord(n, e);
      }, this.or = function(e, n) {
        return this.orInternalRecord(n, e);
      }, this.many = function(e, n) {
        this.manyInternalRecord(e, n);
      }, this.atLeastOne = function(e, n) {
        this.atLeastOneInternalRecord(e, n);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let n = 0; n < 10; n++) {
        const r = n > 0 ? n : "";
        delete e[`CONSUME${r}`], delete e[`SUBRULE${r}`], delete e[`OPTION${r}`], delete e[`OR${r}`], delete e[`MANY${r}`], delete e[`MANY_SEP${r}`], delete e[`AT_LEAST_ONE${r}`], delete e[`AT_LEAST_ONE_SEP${r}`];
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
  BACKTRACK_RECORD(e, n) {
    return () => !0;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return Xt;
  }
  topLevelRuleRecord(e, n) {
    try {
      const r = new Qe({ definition: [], name: e });
      return r.name = e, this.recordingProdStack.push(r), n.call(this), this.recordingProdStack.pop(), r;
    } catch (r) {
      if (r.KNOWN_RECORDER_ERROR !== !0)
        try {
          r.message = r.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw r;
        }
      throw r;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, n) {
    return at.call(this, K, e, n);
  }
  atLeastOneInternalRecord(e, n) {
    at.call(this, me, n, e);
  }
  atLeastOneSepFirstInternalRecord(e, n) {
    at.call(this, Ae, n, e, Cs);
  }
  manyInternalRecord(e, n) {
    at.call(this, U, n, e);
  }
  manySepFirstInternalRecord(e, n) {
    at.call(this, le, n, e, Cs);
  }
  orInternalRecord(e, n) {
    return Wd.call(this, e, n);
  }
  subruleInternalRecord(e, n, r) {
    if (Yt(n), !e || R(e, "ruleName") === !1) {
      const o = new Error(`<SUBRULE${ys(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = !0, o;
    }
    const s = qe(this.recordingProdStack), i = e.ruleName, a = new X({
      idx: n,
      nonTerminalName: i,
      label: r == null ? void 0 : r.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return s.definition.push(a), this.outputCst ? Hd : En;
  }
  consumeInternalRecord(e, n, r) {
    if (Yt(n), !gi(e)) {
      const a = new Error(`<CONSUME${ys(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw a.KNOWN_RECORDER_ERROR = !0, a;
    }
    const s = qe(this.recordingProdStack), i = new M({
      idx: n,
      terminalType: e,
      label: r == null ? void 0 : r.LABEL
    });
    return s.definition.push(i), Fi;
  }
}
function at(t, e, n, r = !1) {
  Yt(n);
  const s = qe(this.recordingProdStack), i = Ne(e) ? e : e.DEF, a = new t({ definition: [], idx: n });
  return r && (a.separator = e.SEP), R(e, "MAX_LOOKAHEAD") && (a.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(a), i.call(this), s.definition.push(a), this.recordingProdStack.pop(), En;
}
function Wd(t, e) {
  Yt(e);
  const n = qe(this.recordingProdStack), r = N(t) === !1, s = r === !1 ? t : t.DEF, i = new he({
    definition: [],
    idx: e,
    ignoreAmbiguities: r && t.IGNORE_AMBIGUITIES === !0
  });
  R(t, "MAX_LOOKAHEAD") && (i.maxLookahead = t.MAX_LOOKAHEAD);
  const a = si(s, (o) => Ne(o.GATE));
  return i.hasPredicates = a, n.definition.push(i), S(s, (o) => {
    const c = new j({ definition: [] });
    i.definition.push(c), R(o, "IGNORE_AMBIGUITIES") ? c.ignoreAmbiguities = o.IGNORE_AMBIGUITIES : R(o, "GATE") && (c.ignoreAmbiguities = !0), this.recordingProdStack.push(c), o.ALT.call(this), this.recordingProdStack.pop();
  }), En;
}
function ys(t) {
  return t === 0 ? "" : `${t}`;
}
function Yt(t) {
  if (t < 0 || t > Ls) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${Ls + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = !0, e;
  }
}
class jd {
  initPerformanceTracer(e) {
    if (R(e, "traceInitPerf")) {
      const n = e.traceInitPerf, r = typeof n == "number";
      this.traceInitMaxIdent = r ? n : 1 / 0, this.traceInitPerf = r ? n > 0 : n;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = Oe.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, n) {
    if (this.traceInitPerf === !0) {
      this.traceInitIndent++;
      const r = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${r}--> <${e}>`);
      const { time: s, value: i } = ai(n), a = s > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && a(`${r}<-- <${e}> time: ${s}ms`), this.traceInitIndent--, i;
    } else
      return n();
  }
}
function zd(t, e) {
  e.forEach((n) => {
    const r = n.prototype;
    Object.getOwnPropertyNames(r).forEach((s) => {
      if (s === "constructor")
        return;
      const i = Object.getOwnPropertyDescriptor(r, s);
      i && (i.get || i.set) ? Object.defineProperty(t.prototype, s, i) : t.prototype[s] = n.prototype[s];
    });
  });
}
const Xt = pr(Be, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(Xt);
const Oe = Object.freeze({
  recoveryEnabled: !1,
  maxLookahead: 3,
  dynamicTokensEnabled: !1,
  outputCst: !0,
  errorMessageProvider: mi,
  nodeLocationTracking: "none",
  traceInitPerf: !1,
  skipValidations: !1
}), qt = Object.freeze({
  recoveryValueFunc: () => {
  },
  resyncEnabled: !0
});
var B;
(function(t) {
  t[t.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", t[t.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", t[t.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", t[t.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", t[t.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", t[t.LEFT_RECURSION = 5] = "LEFT_RECURSION", t[t.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", t[t.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", t[t.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", t[t.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", t[t.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", t[t.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", t[t.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", t[t.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(B || (B = {}));
class Ot {
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
      const n = this.className;
      this.TRACE_INIT("toFastProps", () => {
        oi(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), S(this.definedRulesNames, (s) => {
            const a = this[s].originalGrammarAction;
            let o;
            this.TRACE_INIT(`${s} Rule`, () => {
              o = this.topLevelRuleRecord(s, a);
            }), this.gastProductionsCache[s] = o;
          });
        } finally {
          this.disableRecording();
        }
      });
      let r = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        r = Ed({
          rules: w(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(r);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (v(r) && this.skipValidations === !1) {
          const s = gd({
            rules: w(this.gastProductionsCache),
            tokenTypes: w(this.tokensMap),
            errMsgProvider: De,
            grammarName: n
          }), i = ed({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: w(this.gastProductionsCache),
            tokenTypes: w(this.tokensMap),
            grammarName: n
          });
          this.definitionErrors = this.definitionErrors.concat(s, i);
        }
      }), v(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const s = zh(w(this.gastProductionsCache));
        this.resyncFollows = s;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var s, i;
        (i = (s = this.lookaheadStrategy).initialize) === null || i === void 0 || i.call(s, {
          rules: w(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(w(this.gastProductionsCache));
      })), !Ot.DEFER_DEFINITION_ERRORS_HANDLING && !v(this.definitionErrors))
        throw e = A(this.definitionErrors, (s) => s.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, n) {
    this.definitionErrors = [], this.selfAnalysisDone = !1;
    const r = this;
    if (r.initErrorHandler(n), r.initLexerAdapter(), r.initLooksAhead(n), r.initRecognizerEngine(e, n), r.initRecoverable(n), r.initTreeBuilder(n), r.initContentAssist(), r.initGastRecorder(n), r.initPerformanceTracer(n), R(n, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = R(n, "skipValidations") ? n.skipValidations : Oe.skipValidations;
  }
}
Ot.DEFER_DEFINITION_ERRORS_HANDLING = !1;
zd(Ot, [
  Id,
  Nd,
  Ud,
  Fd,
  $d,
  Dd,
  Gd,
  Bd,
  Kd,
  jd
]);
class Vd extends Ot {
  constructor(e, n = Oe) {
    const r = D(n);
    r.outputCst = !0, super(e, r);
  }
}
const Di = C({
  name: "HTML_COMMENT",
  pattern: /<!--[\s\S]*?-->/,
  line_breaks: !0
}), $i = C({
  name: "HTML_CONDITIONAL_COMMENT",
  pattern: /<!\[[\s\S]*?\]>/,
  line_breaks: !0
}), Yd = C({
  name: "XML",
  pattern: /<\?xml(?:.|\s)*?\?>/
}), Gi = C({
  name: "CDATA",
  pattern: /<!\[CDATA\[[\s\S]*?]]>/
}), Bi = C({
  name: "DTD",
  pattern: /<!.*?>/
}), Hi = C({
  name: "SCRIPTLET",
  pattern: /<%(.*?)%>|<\?(.*?)\?>/
}), Xd = C({
  name: "SEA_WS",
  pattern: /[ \t]+/,
  group: G.SKIPPED
}), Ki = C({
  name: "LINE_BREAK",
  pattern: /\r?\n/
}), Wi = C({
  name: "SCRIPT_OPEN",
  pattern: /<script\b[^>]*>/,
  push_mode: "SCRIPT"
}), ji = C({
  name: "STYLE_OPEN",
  pattern: /<style\b[^>]*>/,
  push_mode: "STYLE"
}), Bn = C({
  name: "TAG_OPEN",
  pattern: /</,
  push_mode: "TAG"
}), zi = C({
  name: "HTML_TEXT",
  pattern: /[^<@]+/,
  line_breaks: !0
}), Hn = C({
  name: "TAG_CLOSE",
  pattern: />/,
  pop_mode: !0
}), Vi = C({
  name: "TAG_SLASH_CLOSE",
  pattern: /\/>/,
  pop_mode: !0
}), Yi = C({
  name: "TAG_SLASH",
  pattern: /\//
}), Xi = C({
  name: "TAG_EQUALS",
  pattern: /=/,
  push_mode: "ATTVALUE"
}), $t = C({
  name: "TAG_NAME",
  pattern: /[:@a-zA-Z\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:\.\-@\u00B7\u0300-\u036F\u203F-\u2040.0-9a-zA-Z]*/
}), qd = C({
  name: "TAG_WHITESPACE",
  pattern: /[ \t\r\n]+/,
  group: G.SKIPPED
}), qi = C({
  name: "SCRIPT_BODY",
  pattern: /[\s\S]*?<\/script>/,
  pop_mode: !0
}), Zi = C({
  name: "STYLE_BODY",
  pattern: /[\s\S]*?<\/style>/,
  pop_mode: !0
}), Qi = C({
  name: "ATTVALUE_VALUE",
  pattern: / *("[^<"]*"|'[^<']*'|[-_./+,?=:#;0-9a-zA-Z]+ ?|#[0-9a-fA-F]+|[0-9]+%?)/,
  pop_mode: !0
}), Kn = C({
  name: "EDGE_COMMENT",
  pattern: /{{--[\s\S]*?--}}/,
  line_breaks: !0
}), Wn = C({
  name: "EDGE_MUSTACHE",
  pattern: /{{[\s\S]*?}}\s*/
}), jn = C({
  name: "EDGE_SAFE_MUSTACHE",
  pattern: /{{{[\s\S]*?}}}\s*/
}), Ji = C({
  name: "EDGE_ESCAPED_MUSTACHE",
  pattern: /@{{[\s\S]*?}}\s*/
}), ea = C({
  name: "EDGE_TAG",
  pattern: /@(?:!?\w+(?:\.\w+)*)\s*(?:\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\))?/
}), ta = C({
  name: "EDGE_TAG_PROP",
  pattern: /@(if|elseif|else|each|flashMessage)\([^)]*\)\s*([\s\S]*?)@end/
}), zn = {
  defaultMode: "default",
  modes: {
    default: [
      Di,
      $i,
      Yd,
      Gi,
      Bi,
      Hi,
      Ki,
      Xd,
      Wi,
      ji,
      Bn,
      Kn,
      Ji,
      jn,
      Wn,
      ea,
      zi
    ],
    TAG: [
      Hn,
      Vi,
      Yi,
      Xi,
      Kn,
      jn,
      Wn,
      ta,
      $t,
      qd
    ],
    SCRIPT: [qi],
    STYLE: [Zi],
    ATTVALUE: [Qi]
  }
}, Zd = () => {
  const t = [];
  for (const e in zn.modes)
    t.push(...zn.modes[e]);
  return t;
}, Qd = new G(zn);
class na extends Vd {
  constructor() {
    super(Zd());
    const e = this;
    e.RULE("document", () => {
      e.MANY(() => {
        e.SUBRULE(e.content);
      });
    }), e.RULE("content", () => {
      e.OR([
        { ALT: () => e.CONSUME(zi) },
        { ALT: () => e.CONSUME(Ki) },
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
      e.CONSUME(Bn), e.CONSUME($t), e.MANY(() => {
        e.OR([
          { ALT: () => e.SUBRULE(e.edgeTagProp) },
          { ALT: () => e.SUBRULE(e.attribute) },
          { ALT: () => e.SUBRULE(e.edgeSafeMustache) },
          { ALT: () => e.SUBRULE(e.edgeMustache) },
          { ALT: () => e.SUBRULE(e.edgeComment) }
        ]);
      }), e.OR1([
        { ALT: () => e.CONSUME1(Vi) },
        { ALT: () => e.CONSUME1(Hn) }
      ]);
    }), e.RULE("attribute", () => {
      e.CONSUME($t), e.OPTION(() => {
        e.CONSUME(Xi), e.CONSUME(Qi);
      });
    }), e.RULE("closingTag", () => {
      e.CONSUME(Bn), e.CONSUME(Yi), e.CONSUME($t), e.CONSUME(Hn);
    }), e.RULE("scriptlet", () => {
      e.CONSUME(Hi);
    }), e.RULE("htmlComment", () => {
      e.CONSUME(Di);
    }), e.RULE("htmlConditionalComment", () => {
      e.CONSUME($i);
    }), e.RULE("cdata", () => {
      e.CONSUME(Gi);
    }), e.RULE("dtd", () => {
      e.CONSUME(Bi);
    }), e.RULE("scriptElement", () => {
      e.CONSUME(Wi), e.CONSUME(qi);
    }), e.RULE("styleElement", () => {
      e.CONSUME(ji), e.CONSUME(Zi);
    }), e.RULE("edgeComment", () => {
      e.CONSUME(Kn);
    }), e.RULE("edgeMustache", () => {
      e.CONSUME(Wn);
    }), e.RULE("edgeSafeMustache", () => {
      e.CONSUME(jn);
    }), e.RULE("edgeEscapedMustache", () => {
      e.CONSUME(Ji);
    }), e.RULE("edgeTag", () => {
      e.CONSUME(ea);
    }), e.RULE("edgeTagProp", () => {
      e.CONSUME(ta);
    }), this.performSelfAnalysis();
  }
}
const Jd = new na(), ep = Jd.getBaseCstVisitorConstructor();
var Zt, gt, Vn;
class tp extends ep {
  constructor() {
    super();
    mn(this, gt);
    mn(this, Zt, /* @__PURE__ */ new Set([
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
    ]));
    this.validateVisitor();
  }
  document(n) {
    const r = n.content[0].startOffset, s = n.content[n.content.length - 1].endOffset;
    return {
      type: "document",
      children: n.content.map((i) => this.visit(i)),
      start: r,
      end: s
    };
  }
  content(n) {
    if (n.HTML_TEXT)
      return {
        type: "htmlText",
        value: n.HTML_TEXT[0].image,
        start: n.HTML_TEXT[0].startOffset,
        end: n.HTML_TEXT[0].endOffset
      };
    if (n.LINE_BREAK)
      return {
        type: "linebreak",
        value: n.LINE_BREAK[0].image,
        start: n.LINE_BREAK[0].startOffset,
        end: n.LINE_BREAK[0].endOffset
      };
    const r = n.element || n.scriptlet || n.htmlComment || n.htmlConditionalComment || n.cdata || n.dtd || n.scriptElement || n.styleElement || n.edgeComment || n.edgeMustache || n.edgeSafeMustache || n.edgeEscapedMustache || n.edgeTag || n.htmlText;
    return this.visit(r);
  }
  element(n) {
    return n.openingTag ? this.visit(n.openingTag) : n.selfClosingTag ? this.visit(n.selfClosingTag) : this.visit(n.closingTag);
  }
  openingTag(n) {
    const r = n.TAG_NAME[0].image, s = n.edgeSafeMustache ? n.edgeSafeMustache.map((h) => this.visit(h)) : [], i = n.edgeMustache ? n.edgeMustache.map((h) => this.visit(h)) : [], a = n.edgeTagProp ? n.edgeTagProp.map((h) => this.visit(h)) : [], o = n.attribute ? n.attribute.map((h) => this.visit(h)) : [], c = n.edgeComment ? n.edgeComment.map((h) => this.visit(h)) : [], u = n.TAG_NAME[0].startOffset, l = n.TAG_NAME[0].endOffset;
    return An(this, gt, Vn).call(this, r) || n.TAG_SLASH_CLOSE ? {
      type: "voidTag",
      tagName: r,
      edgeSafeMustaches: s,
      edgeMustaches: i,
      edgeTagProps: a,
      attributes: o,
      comments: c,
      start: u,
      end: l
    } : {
      type: "openingTag",
      tagName: r,
      edgeSafeMustaches: s,
      edgeMustaches: i,
      edgeTagProps: a,
      attributes: o,
      comments: c,
      start: u,
      end: l
    };
  }
  attribute(n) {
    var o, c, u;
    const r = n.TAG_NAME[0].image, s = (u = (c = (o = n.ATTVALUE_VALUE) == null ? void 0 : o[0]) == null ? void 0 : c.image) == null ? void 0 : u.trim(), i = n.TAG_NAME[0].startOffset, a = n.ATTVALUE_VALUE ? n.ATTVALUE_VALUE[0].endOffset : n.TAG_NAME[0].endOffset;
    return { type: "attribute", attributeName: r, attributeValue: s, start: i, end: a };
  }
  closingTag(n) {
    const r = n.TAG_NAME[0].image, s = n.TAG_OPEN[0].startOffset, i = n.TAG_CLOSE[0].endOffset;
    return An(this, gt, Vn).call(this, r) ? {
      type: "doNotPrint"
    } : { type: "closingTag", tagName: r, start: s, end: i };
  }
  scriptlet(n) {
    const r = n.SCRIPTLET[0].image, s = n.SCRIPTLET[0].startOffset, i = n.SCRIPTLET[0].endOffset;
    return { type: "scriptlet", value: r, start: s, end: i };
  }
  htmlComment(n) {
    const r = n.HTML_COMMENT[0].image, s = n.HTML_COMMENT[0].startOffset, i = n.HTML_COMMENT[0].endOffset;
    return { type: "htmlComment", value: r, start: s, end: i };
  }
  htmlConditionalComment(n) {
    const r = n.HTML_CONDITIONAL_COMMENT[0].image, s = n.HTML_CONDITIONAL_COMMENT[0].startOffset, i = n.HTML_CONDITIONAL_COMMENT[0].endOffset;
    return { type: "htmlConditionalComment", value: r, start: s, end: i };
  }
  cdata(n) {
    const r = n.CDATA[0].image, s = n.CDATA[0].startOffset, i = n.CDATA[0].endOffset;
    return { type: "cdata", value: r, start: s, end: i };
  }
  dtd(n) {
    const r = n.DTD[0].image, s = n.DTD[0].startOffset, i = n.DTD[0].endOffset;
    return { type: "dtd", value: r, start: s, end: i };
  }
  scriptElement(n) {
    const r = n.SCRIPT_OPEN[0].image + n.SCRIPT_BODY[0].image, s = n.SCRIPT_OPEN[0].startOffset, i = n.SCRIPT_BODY[0].endOffset;
    return { type: "scriptElement", value: r, start: s, end: i };
  }
  styleElement(n) {
    const r = n.STYLE_OPEN[0].image + n.STYLE_BODY[0].image, s = n.STYLE_OPEN[0].startOffset, i = n.STYLE_BODY[0].endOffset;
    return { type: "styleElement", value: r, start: s, end: i };
  }
  edgeComment(n) {
    const r = n.EDGE_COMMENT[0].image, s = n.EDGE_COMMENT[0].startOffset, i = n.EDGE_COMMENT[0].endOffset;
    return { type: "edgeComment", value: r, start: s, end: i };
  }
  edgeMustache(n) {
    const r = n.EDGE_MUSTACHE[0].image, s = n.EDGE_MUSTACHE[0].startOffset, i = n.EDGE_MUSTACHE[0].endOffset;
    return { type: "edgeMustache", value: r, start: s, end: i };
  }
  edgeSafeMustache(n) {
    const r = n.EDGE_SAFE_MUSTACHE[0].image, s = n.EDGE_SAFE_MUSTACHE[0].startOffset, i = n.EDGE_SAFE_MUSTACHE[0].endOffset;
    return { type: "edgeSafeMustache", value: r, start: s, end: i };
  }
  edgeEscapedMustache(n) {
    const r = n.EDGE_ESCAPED_MUSTACHE[0].image, s = n.EDGE_ESCAPED_MUSTACHE[0].startOffset, i = n.EDGE_ESCAPED_MUSTACHE[0].endOffset;
    return { type: "edgeEscapedMustache", value: r, start: s, end: i };
  }
  edgeTag(n) {
    const r = n.EDGE_TAG[0].image, s = n.EDGE_TAG[0].startOffset, i = n.EDGE_TAG[0].endOffset;
    return { type: "edgeTag", value: r, start: s, end: i };
  }
  edgeTagProp(n) {
    const r = n.EDGE_TAG_PROP[0].image, s = n.EDGE_TAG_PROP[0].startOffset, i = n.EDGE_TAG_PROP[0].endOffset;
    return { type: "edgeTagProp", value: r, start: s, end: i };
  }
}
Zt = new WeakMap(), gt = new WeakSet(), Vn = function(n) {
  return Cr(this, Zt).has(n);
};
const kt = new na(), np = new tp();
function sp(t) {
  const e = Qd.tokenize(t);
  kt.input = e.tokens;
  const n = kt.document();
  if (kt.errors.length > 0)
    throw new Error(
      `Parsing Errors Detected: ${JSON.stringify(kt.errors)}`
    );
  return np.visit(n);
}
export {
  sp as default
};
