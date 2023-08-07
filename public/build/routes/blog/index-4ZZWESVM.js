import {
  blog_default
} from "/build/_shared/chunk-AQ7WHFFJ.js";
import {
  Link,
  React,
  __commonJS,
  __toModule,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-Z35JMVEY.js";

// node_modules/contentful/dist/contentful.browser.min.js
var require_contentful_browser_min = __commonJS({
  "node_modules/contentful/dist/contentful.browser.min.js"(exports, module) {
    init_react();
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.contentful = t() : e.contentful = t();
    }(self, function() {
      return function() {
        var e = { 581: function(e2, t2, n2) {
          e2.exports = function() {
            "use strict";
            var e3 = Function.prototype.toString, t3 = Object.create, r2 = Object.defineProperty, o = Object.getOwnPropertyDescriptor, i = Object.getOwnPropertyNames, s = Object.getOwnPropertySymbols, a = Object.getPrototypeOf, c = Object.prototype, u = c.hasOwnProperty, l = c.propertyIsEnumerable, f = typeof s == "function", p = typeof WeakMap == "function", d = function() {
              if (p)
                return function() {
                  return new WeakMap();
                };
              var e4 = function() {
                function e5() {
                  this._keys = [], this._values = [];
                }
                return e5.prototype.has = function(e6) {
                  return !!~this._keys.indexOf(e6);
                }, e5.prototype.get = function(e6) {
                  return this._values[this._keys.indexOf(e6)];
                }, e5.prototype.set = function(e6, t4) {
                  this._keys.push(e6), this._values.push(t4);
                }, e5;
              }();
              return function() {
                return new e4();
              };
            }(), h = function(n3, r3) {
              var o2 = n3.__proto__ || a(n3);
              if (!o2)
                return t3(null);
              var i2 = o2.constructor;
              if (i2 === r3.Object)
                return o2 === r3.Object.prototype ? {} : t3(o2);
              if (~e3.call(i2).indexOf("[native code]"))
                try {
                  return new i2();
                } catch (e4) {
                }
              return t3(o2);
            }, y = function(e4, t4, n3, r3) {
              var o2 = h(e4, t4);
              for (var i2 in r3.set(e4, o2), e4)
                u.call(e4, i2) && (o2[i2] = n3(e4[i2], r3));
              if (f)
                for (var a2 = s(e4), c2 = 0, p2 = a2.length, d2 = void 0; c2 < p2; ++c2)
                  d2 = a2[c2], l.call(e4, d2) && (o2[d2] = n3(e4[d2], r3));
              return o2;
            }, m = function(e4, t4, n3, a2) {
              var c2 = h(e4, t4);
              a2.set(e4, c2);
              for (var u2 = f ? i(e4).concat(s(e4)) : i(e4), l2 = 0, p2 = u2.length, d2 = void 0, y2 = void 0; l2 < p2; ++l2)
                if ((d2 = u2[l2]) !== "callee" && d2 !== "caller")
                  if (y2 = o(e4, d2)) {
                    y2.get || y2.set || (y2.value = n3(e4[d2], a2));
                    try {
                      r2(c2, d2, y2);
                    } catch (e5) {
                      c2[d2] = y2.value;
                    }
                  } else
                    c2[d2] = n3(e4[d2], a2);
              return c2;
            }, g = Array.isArray, b = Object.getPrototypeOf, v = function() {
              return typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : n2.g !== void 0 ? n2.g : (console && console.error && console.error('Unable to locate global object, returning "this".'), this);
            }();
            function w(e4, t4) {
              var n3 = !(!t4 || !t4.isStrict), r3 = t4 && t4.realm || v, o2 = n3 ? m : y, i2 = function(e5, t5) {
                if (!e5 || typeof e5 != "object")
                  return e5;
                if (t5.has(e5))
                  return t5.get(e5);
                var s2, a2, c2, u2 = e5.__proto__ || b(e5), l2 = u2 && u2.constructor;
                if (!l2 || l2 === r3.Object)
                  return o2(e5, r3, i2, t5);
                if (g(e5)) {
                  if (n3)
                    return m(e5, r3, i2, t5);
                  s2 = new l2(), t5.set(e5, s2);
                  for (var f2 = 0, p2 = e5.length; f2 < p2; ++f2)
                    s2[f2] = i2(e5[f2], t5);
                  return s2;
                }
                if (e5 instanceof r3.Date)
                  return new l2(e5.getTime());
                if (e5 instanceof r3.RegExp)
                  return (s2 = new l2(e5.source, e5.flags || (a2 = e5, c2 = "", a2.global && (c2 += "g"), a2.ignoreCase && (c2 += "i"), a2.multiline && (c2 += "m"), a2.unicode && (c2 += "u"), a2.sticky && (c2 += "y"), c2))).lastIndex = e5.lastIndex, s2;
                if (r3.Map && e5 instanceof r3.Map)
                  return s2 = new l2(), t5.set(e5, s2), e5.forEach(function(e6, n4) {
                    s2.set(n4, i2(e6, t5));
                  }), s2;
                if (r3.Set && e5 instanceof r3.Set)
                  return s2 = new l2(), t5.set(e5, s2), e5.forEach(function(e6) {
                    s2.add(i2(e6, t5));
                  }), s2;
                if (r3.Blob && e5 instanceof r3.Blob)
                  return e5.slice(0, e5.size, e5.type);
                if (r3.Buffer && r3.Buffer.isBuffer(e5))
                  return s2 = r3.Buffer.allocUnsafe ? r3.Buffer.allocUnsafe(e5.length) : new l2(e5.length), t5.set(e5, s2), e5.copy(s2), s2;
                if (r3.ArrayBuffer) {
                  if (r3.ArrayBuffer.isView(e5))
                    return s2 = new l2(e5.buffer.slice(0)), t5.set(e5, s2), s2;
                  if (e5 instanceof r3.ArrayBuffer)
                    return s2 = e5.slice(0), t5.set(e5, s2), s2;
                }
                return typeof e5.then == "function" || e5 instanceof Error || r3.WeakMap && e5 instanceof r3.WeakMap || r3.WeakSet && e5 instanceof r3.WeakSet ? e5 : o2(e5, r3, i2, t5);
              };
              return i2(e4, d());
            }
            return w.default = w, w.strict = function(e4, t4) {
              return w(e4, { isStrict: true, realm: t4 ? t4.realm : void 0 });
            }, w;
          }();
        }, 784: function(e2, t2) {
          function n2(e3, t3) {
            var n3 = [], r2 = [];
            return t3 == null && (t3 = function(e4, t4) {
              return n3[0] === t4 ? "[Circular ~]" : "[Circular ~." + r2.slice(0, n3.indexOf(t4)).join(".") + "]";
            }), function(o, i) {
              if (n3.length > 0) {
                var s = n3.indexOf(this);
                ~s ? n3.splice(s + 1) : n3.push(this), ~s ? r2.splice(s, 1 / 0, o) : r2.push(o), ~n3.indexOf(i) && (i = t3.call(this, o, i));
              } else
                n3.push(i);
              return e3 == null ? i : e3.call(this, o, i);
            };
          }
          (e2.exports = function(e3, t3, r2, o) {
            return JSON.stringify(e3, n2(t3, o), r2);
          }).getSerialize = n2;
        }, 261: function(e2) {
          var t2, n2, r2 = Function.prototype, o = Object.prototype, i = r2.toString, s = o.hasOwnProperty, a = i.call(Object), c = o.toString, u = (t2 = Object.getPrototypeOf, n2 = Object, function(e3) {
            return t2(n2(e3));
          });
          e2.exports = function(e3) {
            if (!function(e4) {
              return !!e4 && typeof e4 == "object";
            }(e3) || c.call(e3) != "[object Object]" || function(e4) {
              var t4 = false;
              if (e4 != null && typeof e4.toString != "function")
                try {
                  t4 = !!(e4 + "");
                } catch (e5) {
                }
              return t4;
            }(e3))
              return false;
            var t3 = u(e3);
            if (t3 === null)
              return true;
            var n3 = s.call(t3, "constructor") && t3.constructor;
            return typeof n3 == "function" && n3 instanceof n3 && i.call(n3) == a;
          };
        }, 451: function(e2) {
          var t2 = Object.prototype.toString, n2 = Array.isArray;
          e2.exports = function(e3) {
            return typeof e3 == "string" || !n2(e3) && function(e4) {
              return !!e4 && typeof e4 == "object";
            }(e3) && t2.call(e3) == "[object String]";
          };
        }, 930: function(e2) {
          "use strict";
          class t2 extends Error {
            constructor() {
              super("Throttled function aborted"), this.name = "AbortError";
            }
          }
          e2.exports = ({ limit: e3, interval: n2, strict: r2 }) => {
            if (!Number.isFinite(e3))
              throw new TypeError("Expected `limit` to be a finite number");
            if (!Number.isFinite(n2))
              throw new TypeError("Expected `interval` to be a finite number");
            const o = new Map();
            let i = 0, s = 0;
            const a = [], c = r2 ? function() {
              const t3 = Date.now();
              if (a.length < e3)
                return a.push(t3), 0;
              const r3 = a.shift() + n2;
              return t3 >= r3 ? (a.push(t3), 0) : (a.push(r3), r3 - t3);
            } : function() {
              const t3 = Date.now();
              return t3 - i > n2 ? (s = 1, i = t3, 0) : (s < e3 ? s++ : (i += n2, s = 1), i - t3);
            };
            return (e4) => {
              const n3 = function(...t3) {
                if (!n3.isEnabled)
                  return (async () => e4.apply(this, t3))();
                let r3;
                return new Promise((n4, i2) => {
                  r3 = setTimeout(() => {
                    n4(e4.apply(this, t3)), o.delete(r3);
                  }, c()), o.set(r3, i2);
                });
              };
              return n3.abort = () => {
                for (const e5 of o.keys())
                  clearTimeout(e5), o.get(e5)(new t2());
                o.clear(), a.splice(0, a.length);
              }, n3.isEnabled = true, n3;
            };
          }, e2.exports.AbortError = t2;
        } }, t = {};
        function n(r2) {
          var o = t[r2];
          if (o !== void 0)
            return o.exports;
          var i = t[r2] = { exports: {} };
          return e[r2].call(i.exports, i, i.exports, n), i.exports;
        }
        n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, { a: t2 }), t2;
        }, n.d = function(e2, t2) {
          for (var r2 in t2)
            n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
        }, n.g = function() {
          if (typeof globalThis == "object")
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if (typeof window == "object")
              return window;
          }
        }(), n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.r = function(e2) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var r = {};
        return function() {
          "use strict";
          function e2(e3, t3) {
            return function() {
              return e3.apply(t3, arguments);
            };
          }
          n.r(r), n.d(r, { createClient: function() {
            return Ft;
          }, createGlobalOptions: function() {
            return dt;
          } });
          const { toString: t2 } = Object.prototype, { getPrototypeOf: o } = Object, i = (s = Object.create(null), (e3) => {
            const n2 = t2.call(e3);
            return s[n2] || (s[n2] = n2.slice(8, -1).toLowerCase());
          });
          var s;
          const a = (e3) => (e3 = e3.toLowerCase(), (t3) => i(t3) === e3), c = (e3) => (t3) => typeof t3 === e3, { isArray: u } = Array, l = c("undefined"), f = a("ArrayBuffer"), p = c("string"), d = c("function"), h = c("number"), y = (e3) => e3 !== null && typeof e3 == "object", m = (e3) => {
            if (i(e3) !== "object")
              return false;
            const t3 = o(e3);
            return !(t3 !== null && t3 !== Object.prototype && Object.getPrototypeOf(t3) !== null || Symbol.toStringTag in e3 || Symbol.iterator in e3);
          }, g = a("Date"), b = a("File"), v = a("Blob"), w = a("FileList"), O = a("URLSearchParams");
          function E(e3, t3, { allOwnKeys: n2 = false } = {}) {
            if (e3 == null)
              return;
            let r2, o2;
            if (typeof e3 != "object" && (e3 = [e3]), u(e3))
              for (r2 = 0, o2 = e3.length; r2 < o2; r2++)
                t3.call(null, e3[r2], r2, e3);
            else {
              const o3 = n2 ? Object.getOwnPropertyNames(e3) : Object.keys(e3), i2 = o3.length;
              let s2;
              for (r2 = 0; r2 < i2; r2++)
                s2 = o3[r2], t3.call(null, e3[s2], s2, e3);
            }
          }
          function S(e3, t3) {
            t3 = t3.toLowerCase();
            const n2 = Object.keys(e3);
            let r2, o2 = n2.length;
            for (; o2-- > 0; )
              if (r2 = n2[o2], t3 === r2.toLowerCase())
                return r2;
            return null;
          }
          const x = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, A = (e3) => !l(e3) && e3 !== x, j = (T = typeof Uint8Array != "undefined" && o(Uint8Array), (e3) => T && e3 instanceof T);
          var T;
          const R = a("HTMLFormElement"), L = (({ hasOwnProperty: e3 }) => (t3, n2) => e3.call(t3, n2))(Object.prototype), k = a("RegExp"), P = (e3, t3) => {
            const n2 = Object.getOwnPropertyDescriptors(e3), r2 = {};
            E(n2, (n3, o2) => {
              t3(n3, o2, e3) !== false && (r2[o2] = n3);
            }), Object.defineProperties(e3, r2);
          }, U = "abcdefghijklmnopqrstuvwxyz", _ = "0123456789", N = { DIGIT: _, ALPHA: U, ALPHA_DIGIT: U + U.toUpperCase() + _ }, C = a("AsyncFunction");
          var B = { isArray: u, isArrayBuffer: f, isBuffer: function(e3) {
            return e3 !== null && !l(e3) && e3.constructor !== null && !l(e3.constructor) && d(e3.constructor.isBuffer) && e3.constructor.isBuffer(e3);
          }, isFormData: (e3) => {
            let t3;
            return e3 && (typeof FormData == "function" && e3 instanceof FormData || d(e3.append) && ((t3 = i(e3)) === "formdata" || t3 === "object" && d(e3.toString) && e3.toString() === "[object FormData]"));
          }, isArrayBufferView: function(e3) {
            let t3;
            return t3 = typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? ArrayBuffer.isView(e3) : e3 && e3.buffer && f(e3.buffer), t3;
          }, isString: p, isNumber: h, isBoolean: (e3) => e3 === true || e3 === false, isObject: y, isPlainObject: m, isUndefined: l, isDate: g, isFile: b, isBlob: v, isRegExp: k, isFunction: d, isStream: (e3) => y(e3) && d(e3.pipe), isURLSearchParams: O, isTypedArray: j, isFileList: w, forEach: E, merge: function e3() {
            const { caseless: t3 } = A(this) && this || {}, n2 = {}, r2 = (r3, o2) => {
              const i2 = t3 && S(n2, o2) || o2;
              m(n2[i2]) && m(r3) ? n2[i2] = e3(n2[i2], r3) : m(r3) ? n2[i2] = e3({}, r3) : u(r3) ? n2[i2] = r3.slice() : n2[i2] = r3;
            };
            for (let e4 = 0, t4 = arguments.length; e4 < t4; e4++)
              arguments[e4] && E(arguments[e4], r2);
            return n2;
          }, extend: (t3, n2, r2, { allOwnKeys: o2 } = {}) => (E(n2, (n3, o3) => {
            r2 && d(n3) ? t3[o3] = e2(n3, r2) : t3[o3] = n3;
          }, { allOwnKeys: o2 }), t3), trim: (e3) => e3.trim ? e3.trim() : e3.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), stripBOM: (e3) => (e3.charCodeAt(0) === 65279 && (e3 = e3.slice(1)), e3), inherits: (e3, t3, n2, r2) => {
            e3.prototype = Object.create(t3.prototype, r2), e3.prototype.constructor = e3, Object.defineProperty(e3, "super", { value: t3.prototype }), n2 && Object.assign(e3.prototype, n2);
          }, toFlatObject: (e3, t3, n2, r2) => {
            let i2, s2, a2;
            const c2 = {};
            if (t3 = t3 || {}, e3 == null)
              return t3;
            do {
              for (i2 = Object.getOwnPropertyNames(e3), s2 = i2.length; s2-- > 0; )
                a2 = i2[s2], r2 && !r2(a2, e3, t3) || c2[a2] || (t3[a2] = e3[a2], c2[a2] = true);
              e3 = n2 !== false && o(e3);
            } while (e3 && (!n2 || n2(e3, t3)) && e3 !== Object.prototype);
            return t3;
          }, kindOf: i, kindOfTest: a, endsWith: (e3, t3, n2) => {
            e3 = String(e3), (n2 === void 0 || n2 > e3.length) && (n2 = e3.length), n2 -= t3.length;
            const r2 = e3.indexOf(t3, n2);
            return r2 !== -1 && r2 === n2;
          }, toArray: (e3) => {
            if (!e3)
              return null;
            if (u(e3))
              return e3;
            let t3 = e3.length;
            if (!h(t3))
              return null;
            const n2 = new Array(t3);
            for (; t3-- > 0; )
              n2[t3] = e3[t3];
            return n2;
          }, forEachEntry: (e3, t3) => {
            const n2 = (e3 && e3[Symbol.iterator]).call(e3);
            let r2;
            for (; (r2 = n2.next()) && !r2.done; ) {
              const n3 = r2.value;
              t3.call(e3, n3[0], n3[1]);
            }
          }, matchAll: (e3, t3) => {
            let n2;
            const r2 = [];
            for (; (n2 = e3.exec(t3)) !== null; )
              r2.push(n2);
            return r2;
          }, isHTMLForm: R, hasOwnProperty: L, hasOwnProp: L, reduceDescriptors: P, freezeMethods: (e3) => {
            P(e3, (t3, n2) => {
              if (d(e3) && ["arguments", "caller", "callee"].indexOf(n2) !== -1)
                return false;
              const r2 = e3[n2];
              d(r2) && (t3.enumerable = false, "writable" in t3 ? t3.writable = false : t3.set || (t3.set = () => {
                throw Error("Can not rewrite read-only method '" + n2 + "'");
              }));
            });
          }, toObjectSet: (e3, t3) => {
            const n2 = {}, r2 = (e4) => {
              e4.forEach((e5) => {
                n2[e5] = true;
              });
            };
            return u(e3) ? r2(e3) : r2(String(e3).split(t3)), n2;
          }, toCamelCase: (e3) => e3.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(e4, t3, n2) {
            return t3.toUpperCase() + n2;
          }), noop: () => {
          }, toFiniteNumber: (e3, t3) => (e3 = +e3, Number.isFinite(e3) ? e3 : t3), findKey: S, global: x, isContextDefined: A, ALPHABET: N, generateString: (e3 = 16, t3 = N.ALPHA_DIGIT) => {
            let n2 = "";
            const { length: r2 } = t3;
            for (; e3--; )
              n2 += t3[Math.random() * r2 | 0];
            return n2;
          }, isSpecCompliantForm: function(e3) {
            return !!(e3 && d(e3.append) && e3[Symbol.toStringTag] === "FormData" && e3[Symbol.iterator]);
          }, toJSONObject: (e3) => {
            const t3 = new Array(10), n2 = (e4, r2) => {
              if (y(e4)) {
                if (t3.indexOf(e4) >= 0)
                  return;
                if (!("toJSON" in e4)) {
                  t3[r2] = e4;
                  const o2 = u(e4) ? [] : {};
                  return E(e4, (e5, t4) => {
                    const i2 = n2(e5, r2 + 1);
                    !l(i2) && (o2[t4] = i2);
                  }), t3[r2] = void 0, o2;
                }
              }
              return e4;
            };
            return n2(e3, 0);
          }, isAsyncFn: C, isThenable: (e3) => e3 && (y(e3) || d(e3)) && d(e3.then) && d(e3.catch) };
          function D(e3, t3, n2, r2, o2) {
            Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e3, this.name = "AxiosError", t3 && (this.code = t3), n2 && (this.config = n2), r2 && (this.request = r2), o2 && (this.response = o2);
          }
          B.inherits(D, Error, { toJSON: function() {
            return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: B.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null };
          } });
          const F = D.prototype, q = {};
          ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e3) => {
            q[e3] = { value: e3 };
          }), Object.defineProperties(D, q), Object.defineProperty(F, "isAxiosError", { value: true }), D.from = (e3, t3, n2, r2, o2, i2) => {
            const s2 = Object.create(F);
            return B.toFlatObject(e3, s2, function(e4) {
              return e4 !== Error.prototype;
            }, (e4) => e4 !== "isAxiosError"), D.call(s2, e3.message, t3, n2, r2, o2), s2.cause = e3, s2.name = e3.name, i2 && Object.assign(s2, i2), s2;
          };
          var I = D;
          function M(e3) {
            return B.isPlainObject(e3) || B.isArray(e3);
          }
          function z(e3) {
            return B.endsWith(e3, "[]") ? e3.slice(0, -2) : e3;
          }
          function W(e3, t3, n2) {
            return e3 ? e3.concat(t3).map(function(e4, t4) {
              return e4 = z(e4), !n2 && t4 ? "[" + e4 + "]" : e4;
            }).join(n2 ? "." : "") : t3;
          }
          const H = B.toFlatObject(B, {}, null, function(e3) {
            return /^is[A-Z]/.test(e3);
          });
          var $ = function(e3, t3, n2) {
            if (!B.isObject(e3))
              throw new TypeError("target must be an object");
            t3 = t3 || new FormData();
            const r2 = (n2 = B.toFlatObject(n2, { metaTokens: true, dots: false, indexes: false }, false, function(e4, t4) {
              return !B.isUndefined(t4[e4]);
            })).metaTokens, o2 = n2.visitor || u2, i2 = n2.dots, s2 = n2.indexes, a2 = (n2.Blob || typeof Blob != "undefined" && Blob) && B.isSpecCompliantForm(t3);
            if (!B.isFunction(o2))
              throw new TypeError("visitor must be a function");
            function c2(e4) {
              if (e4 === null)
                return "";
              if (B.isDate(e4))
                return e4.toISOString();
              if (!a2 && B.isBlob(e4))
                throw new I("Blob is not supported. Use a Buffer instead.");
              return B.isArrayBuffer(e4) || B.isTypedArray(e4) ? a2 && typeof Blob == "function" ? new Blob([e4]) : Buffer.from(e4) : e4;
            }
            function u2(e4, n3, o3) {
              let a3 = e4;
              if (e4 && !o3 && typeof e4 == "object") {
                if (B.endsWith(n3, "{}"))
                  n3 = r2 ? n3 : n3.slice(0, -2), e4 = JSON.stringify(e4);
                else if (B.isArray(e4) && function(e5) {
                  return B.isArray(e5) && !e5.some(M);
                }(e4) || (B.isFileList(e4) || B.endsWith(n3, "[]")) && (a3 = B.toArray(e4)))
                  return n3 = z(n3), a3.forEach(function(e5, r3) {
                    !B.isUndefined(e5) && e5 !== null && t3.append(s2 === true ? W([n3], r3, i2) : s2 === null ? n3 : n3 + "[]", c2(e5));
                  }), false;
              }
              return !!M(e4) || (t3.append(W(o3, n3, i2), c2(e4)), false);
            }
            const l2 = [], f2 = Object.assign(H, { defaultVisitor: u2, convertValue: c2, isVisitable: M });
            if (!B.isObject(e3))
              throw new TypeError("data must be an object");
            return function e4(n3, r3) {
              if (!B.isUndefined(n3)) {
                if (l2.indexOf(n3) !== -1)
                  throw Error("Circular reference detected in " + r3.join("."));
                l2.push(n3), B.forEach(n3, function(n4, i3) {
                  (!(B.isUndefined(n4) || n4 === null) && o2.call(t3, n4, B.isString(i3) ? i3.trim() : i3, r3, f2)) === true && e4(n4, r3 ? r3.concat(i3) : [i3]);
                }), l2.pop();
              }
            }(e3), t3;
          };
          function J(e3) {
            const t3 = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
            return encodeURIComponent(e3).replace(/[!'()~]|%20|%00/g, function(e4) {
              return t3[e4];
            });
          }
          function K(e3, t3) {
            this._pairs = [], e3 && $(e3, this, t3);
          }
          const G = K.prototype;
          G.append = function(e3, t3) {
            this._pairs.push([e3, t3]);
          }, G.toString = function(e3) {
            const t3 = e3 ? function(t4) {
              return e3.call(this, t4, J);
            } : J;
            return this._pairs.map(function(e4) {
              return t3(e4[0]) + "=" + t3(e4[1]);
            }, "").join("&");
          };
          var V = K;
          function X(e3) {
            return encodeURIComponent(e3).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
          }
          function Q(e3, t3, n2) {
            if (!t3)
              return e3;
            const r2 = n2 && n2.encode || X, o2 = n2 && n2.serialize;
            let i2;
            if (i2 = o2 ? o2(t3, n2) : B.isURLSearchParams(t3) ? t3.toString() : new V(t3, n2).toString(r2), i2) {
              const t4 = e3.indexOf("#");
              t4 !== -1 && (e3 = e3.slice(0, t4)), e3 += (e3.indexOf("?") === -1 ? "?" : "&") + i2;
            }
            return e3;
          }
          var Z = class {
            constructor() {
              this.handlers = [];
            }
            use(e3, t3, n2) {
              return this.handlers.push({ fulfilled: e3, rejected: t3, synchronous: !!n2 && n2.synchronous, runWhen: n2 ? n2.runWhen : null }), this.handlers.length - 1;
            }
            eject(e3) {
              this.handlers[e3] && (this.handlers[e3] = null);
            }
            clear() {
              this.handlers && (this.handlers = []);
            }
            forEach(e3) {
              B.forEach(this.handlers, function(t3) {
                t3 !== null && e3(t3);
              });
            }
          }, Y = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, ee = { isBrowser: true, classes: { URLSearchParams: typeof URLSearchParams != "undefined" ? URLSearchParams : V, FormData: typeof FormData != "undefined" ? FormData : null, Blob: typeof Blob != "undefined" ? Blob : null }, isStandardBrowserEnv: (() => {
            let e3;
            return (typeof navigator == "undefined" || (e3 = navigator.product) !== "ReactNative" && e3 !== "NativeScript" && e3 !== "NS") && typeof window != "undefined" && typeof document != "undefined";
          })(), isStandardBrowserWebWorkerEnv: typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", protocols: ["http", "https", "file", "blob", "url", "data"] }, te = function(e3) {
            function t3(e4, n2, r2, o2) {
              let i2 = e4[o2++];
              const s2 = Number.isFinite(+i2), a2 = o2 >= e4.length;
              return i2 = !i2 && B.isArray(r2) ? r2.length : i2, a2 ? (B.hasOwnProp(r2, i2) ? r2[i2] = [r2[i2], n2] : r2[i2] = n2, !s2) : (r2[i2] && B.isObject(r2[i2]) || (r2[i2] = []), t3(e4, n2, r2[i2], o2) && B.isArray(r2[i2]) && (r2[i2] = function(e5) {
                const t4 = {}, n3 = Object.keys(e5);
                let r3;
                const o3 = n3.length;
                let i3;
                for (r3 = 0; r3 < o3; r3++)
                  i3 = n3[r3], t4[i3] = e5[i3];
                return t4;
              }(r2[i2])), !s2);
            }
            if (B.isFormData(e3) && B.isFunction(e3.entries)) {
              const n2 = {};
              return B.forEachEntry(e3, (e4, r2) => {
                t3(function(e5) {
                  return B.matchAll(/\w+|\[(\w*)]/g, e5).map((e6) => e6[0] === "[]" ? "" : e6[1] || e6[0]);
                }(e4), r2, n2, 0);
              }), n2;
            }
            return null;
          };
          const ne = { "Content-Type": void 0 }, re = { transitional: Y, adapter: ["xhr", "http"], transformRequest: [function(e3, t3) {
            const n2 = t3.getContentType() || "", r2 = n2.indexOf("application/json") > -1, o2 = B.isObject(e3);
            if (o2 && B.isHTMLForm(e3) && (e3 = new FormData(e3)), B.isFormData(e3))
              return r2 && r2 ? JSON.stringify(te(e3)) : e3;
            if (B.isArrayBuffer(e3) || B.isBuffer(e3) || B.isStream(e3) || B.isFile(e3) || B.isBlob(e3))
              return e3;
            if (B.isArrayBufferView(e3))
              return e3.buffer;
            if (B.isURLSearchParams(e3))
              return t3.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), e3.toString();
            let i2;
            if (o2) {
              if (n2.indexOf("application/x-www-form-urlencoded") > -1)
                return function(e4, t4) {
                  return $(e4, new ee.classes.URLSearchParams(), Object.assign({ visitor: function(e5, t5, n3, r3) {
                    return ee.isNode && B.isBuffer(e5) ? (this.append(t5, e5.toString("base64")), false) : r3.defaultVisitor.apply(this, arguments);
                  } }, t4));
                }(e3, this.formSerializer).toString();
              if ((i2 = B.isFileList(e3)) || n2.indexOf("multipart/form-data") > -1) {
                const t4 = this.env && this.env.FormData;
                return $(i2 ? { "files[]": e3 } : e3, t4 && new t4(), this.formSerializer);
              }
            }
            return o2 || r2 ? (t3.setContentType("application/json", false), function(e4, t4, n3) {
              if (B.isString(e4))
                try {
                  return (0, JSON.parse)(e4), B.trim(e4);
                } catch (e5) {
                  if (e5.name !== "SyntaxError")
                    throw e5;
                }
              return (0, JSON.stringify)(e4);
            }(e3)) : e3;
          }], transformResponse: [function(e3) {
            const t3 = this.transitional || re.transitional, n2 = t3 && t3.forcedJSONParsing, r2 = this.responseType === "json";
            if (e3 && B.isString(e3) && (n2 && !this.responseType || r2)) {
              const n3 = !(t3 && t3.silentJSONParsing) && r2;
              try {
                return JSON.parse(e3);
              } catch (e4) {
                if (n3) {
                  if (e4.name === "SyntaxError")
                    throw I.from(e4, I.ERR_BAD_RESPONSE, this, null, this.response);
                  throw e4;
                }
              }
            }
            return e3;
          }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: ee.classes.FormData, Blob: ee.classes.Blob }, validateStatus: function(e3) {
            return e3 >= 200 && e3 < 300;
          }, headers: { common: { Accept: "application/json, text/plain, */*" } } };
          B.forEach(["delete", "get", "head"], function(e3) {
            re.headers[e3] = {};
          }), B.forEach(["post", "put", "patch"], function(e3) {
            re.headers[e3] = B.merge(ne);
          });
          var oe = re;
          const ie = B.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), se = Symbol("internals");
          function ae(e3) {
            return e3 && String(e3).trim().toLowerCase();
          }
          function ce(e3) {
            return e3 === false || e3 == null ? e3 : B.isArray(e3) ? e3.map(ce) : String(e3);
          }
          function ue(e3, t3, n2, r2, o2) {
            return B.isFunction(r2) ? r2.call(this, t3, n2) : (o2 && (t3 = n2), B.isString(t3) ? B.isString(r2) ? t3.indexOf(r2) !== -1 : B.isRegExp(r2) ? r2.test(t3) : void 0 : void 0);
          }
          class le {
            constructor(e3) {
              e3 && this.set(e3);
            }
            set(e3, t3, n2) {
              const r2 = this;
              function o2(e4, t4, n3) {
                const o3 = ae(t4);
                if (!o3)
                  throw new Error("header name must be a non-empty string");
                const i3 = B.findKey(r2, o3);
                (!i3 || r2[i3] === void 0 || n3 === true || n3 === void 0 && r2[i3] !== false) && (r2[i3 || t4] = ce(e4));
              }
              const i2 = (e4, t4) => B.forEach(e4, (e5, n3) => o2(e5, n3, t4));
              return B.isPlainObject(e3) || e3 instanceof this.constructor ? i2(e3, t3) : B.isString(e3) && (e3 = e3.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e3.trim()) ? i2(((e4) => {
                const t4 = {};
                let n3, r3, o3;
                return e4 && e4.split("\n").forEach(function(e5) {
                  o3 = e5.indexOf(":"), n3 = e5.substring(0, o3).trim().toLowerCase(), r3 = e5.substring(o3 + 1).trim(), !n3 || t4[n3] && ie[n3] || (n3 === "set-cookie" ? t4[n3] ? t4[n3].push(r3) : t4[n3] = [r3] : t4[n3] = t4[n3] ? t4[n3] + ", " + r3 : r3);
                }), t4;
              })(e3), t3) : e3 != null && o2(t3, e3, n2), this;
            }
            get(e3, t3) {
              if (e3 = ae(e3)) {
                const n2 = B.findKey(this, e3);
                if (n2) {
                  const e4 = this[n2];
                  if (!t3)
                    return e4;
                  if (t3 === true)
                    return function(e5) {
                      const t4 = Object.create(null), n3 = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                      let r2;
                      for (; r2 = n3.exec(e5); )
                        t4[r2[1]] = r2[2];
                      return t4;
                    }(e4);
                  if (B.isFunction(t3))
                    return t3.call(this, e4, n2);
                  if (B.isRegExp(t3))
                    return t3.exec(e4);
                  throw new TypeError("parser must be boolean|regexp|function");
                }
              }
            }
            has(e3, t3) {
              if (e3 = ae(e3)) {
                const n2 = B.findKey(this, e3);
                return !(!n2 || this[n2] === void 0 || t3 && !ue(0, this[n2], n2, t3));
              }
              return false;
            }
            delete(e3, t3) {
              const n2 = this;
              let r2 = false;
              function o2(e4) {
                if (e4 = ae(e4)) {
                  const o3 = B.findKey(n2, e4);
                  !o3 || t3 && !ue(0, n2[o3], o3, t3) || (delete n2[o3], r2 = true);
                }
              }
              return B.isArray(e3) ? e3.forEach(o2) : o2(e3), r2;
            }
            clear(e3) {
              const t3 = Object.keys(this);
              let n2 = t3.length, r2 = false;
              for (; n2--; ) {
                const o2 = t3[n2];
                e3 && !ue(0, this[o2], o2, e3, true) || (delete this[o2], r2 = true);
              }
              return r2;
            }
            normalize(e3) {
              const t3 = this, n2 = {};
              return B.forEach(this, (r2, o2) => {
                const i2 = B.findKey(n2, o2);
                if (i2)
                  return t3[i2] = ce(r2), void delete t3[o2];
                const s2 = e3 ? function(e4) {
                  return e4.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e5, t4, n3) => t4.toUpperCase() + n3);
                }(o2) : String(o2).trim();
                s2 !== o2 && delete t3[o2], t3[s2] = ce(r2), n2[s2] = true;
              }), this;
            }
            concat(...e3) {
              return this.constructor.concat(this, ...e3);
            }
            toJSON(e3) {
              const t3 = Object.create(null);
              return B.forEach(this, (n2, r2) => {
                n2 != null && n2 !== false && (t3[r2] = e3 && B.isArray(n2) ? n2.join(", ") : n2);
              }), t3;
            }
            [Symbol.iterator]() {
              return Object.entries(this.toJSON())[Symbol.iterator]();
            }
            toString() {
              return Object.entries(this.toJSON()).map(([e3, t3]) => e3 + ": " + t3).join("\n");
            }
            get [Symbol.toStringTag]() {
              return "AxiosHeaders";
            }
            static from(e3) {
              return e3 instanceof this ? e3 : new this(e3);
            }
            static concat(e3, ...t3) {
              const n2 = new this(e3);
              return t3.forEach((e4) => n2.set(e4)), n2;
            }
            static accessor(e3) {
              const t3 = (this[se] = this[se] = { accessors: {} }).accessors, n2 = this.prototype;
              function r2(e4) {
                const r3 = ae(e4);
                t3[r3] || (function(e5, t4) {
                  const n3 = B.toCamelCase(" " + t4);
                  ["get", "set", "has"].forEach((r4) => {
                    Object.defineProperty(e5, r4 + n3, { value: function(e6, n4, o2) {
                      return this[r4].call(this, t4, e6, n4, o2);
                    }, configurable: true });
                  });
                }(n2, e4), t3[r3] = true);
              }
              return B.isArray(e3) ? e3.forEach(r2) : r2(e3), this;
            }
          }
          le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), B.freezeMethods(le.prototype), B.freezeMethods(le);
          var fe = le;
          function pe(e3, t3) {
            const n2 = this || oe, r2 = t3 || n2, o2 = fe.from(r2.headers);
            let i2 = r2.data;
            return B.forEach(e3, function(e4) {
              i2 = e4.call(n2, i2, o2.normalize(), t3 ? t3.status : void 0);
            }), o2.normalize(), i2;
          }
          function de(e3) {
            return !(!e3 || !e3.__CANCEL__);
          }
          function he(e3, t3, n2) {
            I.call(this, e3 == null ? "canceled" : e3, I.ERR_CANCELED, t3, n2), this.name = "CanceledError";
          }
          B.inherits(he, I, { __CANCEL__: true });
          var ye = he, me = ee.isStandardBrowserEnv ? { write: function(e3, t3, n2, r2, o2, i2) {
            const s2 = [];
            s2.push(e3 + "=" + encodeURIComponent(t3)), B.isNumber(n2) && s2.push("expires=" + new Date(n2).toGMTString()), B.isString(r2) && s2.push("path=" + r2), B.isString(o2) && s2.push("domain=" + o2), i2 === true && s2.push("secure"), document.cookie = s2.join("; ");
          }, read: function(e3) {
            const t3 = document.cookie.match(new RegExp("(^|;\\s*)(" + e3 + ")=([^;]*)"));
            return t3 ? decodeURIComponent(t3[3]) : null;
          }, remove: function(e3) {
            this.write(e3, "", Date.now() - 864e5);
          } } : { write: function() {
          }, read: function() {
            return null;
          }, remove: function() {
          } };
          function ge(e3, t3) {
            return e3 && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t3) ? function(e4, t4) {
              return t4 ? e4.replace(/\/+$/, "") + "/" + t4.replace(/^\/+/, "") : e4;
            }(e3, t3) : t3;
          }
          var be = ee.isStandardBrowserEnv ? function() {
            const e3 = /(msie|trident)/i.test(navigator.userAgent), t3 = document.createElement("a");
            let n2;
            function r2(n3) {
              let r3 = n3;
              return e3 && (t3.setAttribute("href", r3), r3 = t3.href), t3.setAttribute("href", r3), { href: t3.href, protocol: t3.protocol ? t3.protocol.replace(/:$/, "") : "", host: t3.host, search: t3.search ? t3.search.replace(/^\?/, "") : "", hash: t3.hash ? t3.hash.replace(/^#/, "") : "", hostname: t3.hostname, port: t3.port, pathname: t3.pathname.charAt(0) === "/" ? t3.pathname : "/" + t3.pathname };
            }
            return n2 = r2(window.location.href), function(e4) {
              const t4 = B.isString(e4) ? r2(e4) : e4;
              return t4.protocol === n2.protocol && t4.host === n2.host;
            };
          }() : function() {
            return true;
          };
          function ve(e3, t3) {
            let n2 = 0;
            const r2 = function(e4, t4) {
              e4 = e4 || 10;
              const n3 = new Array(e4), r3 = new Array(e4);
              let o2, i2 = 0, s2 = 0;
              return t4 = t4 !== void 0 ? t4 : 1e3, function(a2) {
                const c2 = Date.now(), u2 = r3[s2];
                o2 || (o2 = c2), n3[i2] = a2, r3[i2] = c2;
                let l2 = s2, f2 = 0;
                for (; l2 !== i2; )
                  f2 += n3[l2++], l2 %= e4;
                if (i2 = (i2 + 1) % e4, i2 === s2 && (s2 = (s2 + 1) % e4), c2 - o2 < t4)
                  return;
                const p2 = u2 && c2 - u2;
                return p2 ? Math.round(1e3 * f2 / p2) : void 0;
              };
            }(50, 250);
            return (o2) => {
              const i2 = o2.loaded, s2 = o2.lengthComputable ? o2.total : void 0, a2 = i2 - n2, c2 = r2(a2);
              n2 = i2;
              const u2 = { loaded: i2, total: s2, progress: s2 ? i2 / s2 : void 0, bytes: a2, rate: c2 || void 0, estimated: c2 && s2 && i2 <= s2 ? (s2 - i2) / c2 : void 0, event: o2 };
              u2[t3 ? "download" : "upload"] = true, e3(u2);
            };
          }
          const we = { http: null, xhr: typeof XMLHttpRequest != "undefined" && function(e3) {
            return new Promise(function(t3, n2) {
              let r2 = e3.data;
              const o2 = fe.from(e3.headers).normalize(), i2 = e3.responseType;
              let s2;
              function a2() {
                e3.cancelToken && e3.cancelToken.unsubscribe(s2), e3.signal && e3.signal.removeEventListener("abort", s2);
              }
              B.isFormData(r2) && (ee.isStandardBrowserEnv || ee.isStandardBrowserWebWorkerEnv ? o2.setContentType(false) : o2.setContentType("multipart/form-data;", false));
              let c2 = new XMLHttpRequest();
              if (e3.auth) {
                const t4 = e3.auth.username || "", n3 = e3.auth.password ? unescape(encodeURIComponent(e3.auth.password)) : "";
                o2.set("Authorization", "Basic " + btoa(t4 + ":" + n3));
              }
              const u2 = ge(e3.baseURL, e3.url);
              function l2() {
                if (!c2)
                  return;
                const r3 = fe.from("getAllResponseHeaders" in c2 && c2.getAllResponseHeaders());
                !function(e4, t4, n3) {
                  const r4 = n3.config.validateStatus;
                  n3.status && r4 && !r4(n3.status) ? t4(new I("Request failed with status code " + n3.status, [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][Math.floor(n3.status / 100) - 4], n3.config, n3.request, n3)) : e4(n3);
                }(function(e4) {
                  t3(e4), a2();
                }, function(e4) {
                  n2(e4), a2();
                }, { data: i2 && i2 !== "text" && i2 !== "json" ? c2.response : c2.responseText, status: c2.status, statusText: c2.statusText, headers: r3, config: e3, request: c2 }), c2 = null;
              }
              if (c2.open(e3.method.toUpperCase(), Q(u2, e3.params, e3.paramsSerializer), true), c2.timeout = e3.timeout, "onloadend" in c2 ? c2.onloadend = l2 : c2.onreadystatechange = function() {
                c2 && c2.readyState === 4 && (c2.status !== 0 || c2.responseURL && c2.responseURL.indexOf("file:") === 0) && setTimeout(l2);
              }, c2.onabort = function() {
                c2 && (n2(new I("Request aborted", I.ECONNABORTED, e3, c2)), c2 = null);
              }, c2.onerror = function() {
                n2(new I("Network Error", I.ERR_NETWORK, e3, c2)), c2 = null;
              }, c2.ontimeout = function() {
                let t4 = e3.timeout ? "timeout of " + e3.timeout + "ms exceeded" : "timeout exceeded";
                const r3 = e3.transitional || Y;
                e3.timeoutErrorMessage && (t4 = e3.timeoutErrorMessage), n2(new I(t4, r3.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED, e3, c2)), c2 = null;
              }, ee.isStandardBrowserEnv) {
                const t4 = (e3.withCredentials || be(u2)) && e3.xsrfCookieName && me.read(e3.xsrfCookieName);
                t4 && o2.set(e3.xsrfHeaderName, t4);
              }
              r2 === void 0 && o2.setContentType(null), "setRequestHeader" in c2 && B.forEach(o2.toJSON(), function(e4, t4) {
                c2.setRequestHeader(t4, e4);
              }), B.isUndefined(e3.withCredentials) || (c2.withCredentials = !!e3.withCredentials), i2 && i2 !== "json" && (c2.responseType = e3.responseType), typeof e3.onDownloadProgress == "function" && c2.addEventListener("progress", ve(e3.onDownloadProgress, true)), typeof e3.onUploadProgress == "function" && c2.upload && c2.upload.addEventListener("progress", ve(e3.onUploadProgress)), (e3.cancelToken || e3.signal) && (s2 = (t4) => {
                c2 && (n2(!t4 || t4.type ? new ye(null, e3, c2) : t4), c2.abort(), c2 = null);
              }, e3.cancelToken && e3.cancelToken.subscribe(s2), e3.signal && (e3.signal.aborted ? s2() : e3.signal.addEventListener("abort", s2)));
              const f2 = function(e4) {
                const t4 = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e4);
                return t4 && t4[1] || "";
              }(u2);
              f2 && ee.protocols.indexOf(f2) === -1 ? n2(new I("Unsupported protocol " + f2 + ":", I.ERR_BAD_REQUEST, e3)) : c2.send(r2 || null);
            });
          } };
          B.forEach(we, (e3, t3) => {
            if (e3) {
              try {
                Object.defineProperty(e3, "name", { value: t3 });
              } catch (e4) {
              }
              Object.defineProperty(e3, "adapterName", { value: t3 });
            }
          });
          function Oe(e3) {
            if (e3.cancelToken && e3.cancelToken.throwIfRequested(), e3.signal && e3.signal.aborted)
              throw new ye(null, e3);
          }
          function Ee(e3) {
            return Oe(e3), e3.headers = fe.from(e3.headers), e3.data = pe.call(e3, e3.transformRequest), ["post", "put", "patch"].indexOf(e3.method) !== -1 && e3.headers.setContentType("application/x-www-form-urlencoded", false), ((e4) => {
              e4 = B.isArray(e4) ? e4 : [e4];
              const { length: t3 } = e4;
              let n2, r2;
              for (let o2 = 0; o2 < t3 && (n2 = e4[o2], !(r2 = B.isString(n2) ? we[n2.toLowerCase()] : n2)); o2++)
                ;
              if (!r2) {
                if (r2 === false)
                  throw new I(`Adapter ${n2} is not supported by the environment`, "ERR_NOT_SUPPORT");
                throw new Error(B.hasOwnProp(we, n2) ? `Adapter '${n2}' is not available in the build` : `Unknown adapter '${n2}'`);
              }
              if (!B.isFunction(r2))
                throw new TypeError("adapter is not a function");
              return r2;
            })(e3.adapter || oe.adapter)(e3).then(function(t3) {
              return Oe(e3), t3.data = pe.call(e3, e3.transformResponse, t3), t3.headers = fe.from(t3.headers), t3;
            }, function(t3) {
              return de(t3) || (Oe(e3), t3 && t3.response && (t3.response.data = pe.call(e3, e3.transformResponse, t3.response), t3.response.headers = fe.from(t3.response.headers))), Promise.reject(t3);
            });
          }
          const Se = (e3) => e3 instanceof fe ? e3.toJSON() : e3;
          function xe(e3, t3) {
            t3 = t3 || {};
            const n2 = {};
            function r2(e4, t4, n3) {
              return B.isPlainObject(e4) && B.isPlainObject(t4) ? B.merge.call({ caseless: n3 }, e4, t4) : B.isPlainObject(t4) ? B.merge({}, t4) : B.isArray(t4) ? t4.slice() : t4;
            }
            function o2(e4, t4, n3) {
              return B.isUndefined(t4) ? B.isUndefined(e4) ? void 0 : r2(void 0, e4, n3) : r2(e4, t4, n3);
            }
            function i2(e4, t4) {
              if (!B.isUndefined(t4))
                return r2(void 0, t4);
            }
            function s2(e4, t4) {
              return B.isUndefined(t4) ? B.isUndefined(e4) ? void 0 : r2(void 0, e4) : r2(void 0, t4);
            }
            function a2(n3, o3, i3) {
              return i3 in t3 ? r2(n3, o3) : i3 in e3 ? r2(void 0, n3) : void 0;
            }
            const c2 = { url: i2, method: i2, data: i2, baseURL: s2, transformRequest: s2, transformResponse: s2, paramsSerializer: s2, timeout: s2, timeoutMessage: s2, withCredentials: s2, adapter: s2, responseType: s2, xsrfCookieName: s2, xsrfHeaderName: s2, onUploadProgress: s2, onDownloadProgress: s2, decompress: s2, maxContentLength: s2, maxBodyLength: s2, beforeRedirect: s2, transport: s2, httpAgent: s2, httpsAgent: s2, cancelToken: s2, socketPath: s2, responseEncoding: s2, validateStatus: a2, headers: (e4, t4) => o2(Se(e4), Se(t4), true) };
            return B.forEach(Object.keys(Object.assign({}, e3, t3)), function(r3) {
              const i3 = c2[r3] || o2, s3 = i3(e3[r3], t3[r3], r3);
              B.isUndefined(s3) && i3 !== a2 || (n2[r3] = s3);
            }), n2;
          }
          const Ae = {};
          ["object", "boolean", "number", "function", "string", "symbol"].forEach((e3, t3) => {
            Ae[e3] = function(n2) {
              return typeof n2 === e3 || "a" + (t3 < 1 ? "n " : " ") + e3;
            };
          });
          const je = {};
          Ae.transitional = function(e3, t3, n2) {
            function r2(e4, t4) {
              return "[Axios v1.4.0] Transitional option '" + e4 + "'" + t4 + (n2 ? ". " + n2 : "");
            }
            return (n3, o2, i2) => {
              if (e3 === false)
                throw new I(r2(o2, " has been removed" + (t3 ? " in " + t3 : "")), I.ERR_DEPRECATED);
              return t3 && !je[o2] && (je[o2] = true, console.warn(r2(o2, " has been deprecated since v" + t3 + " and will be removed in the near future"))), !e3 || e3(n3, o2, i2);
            };
          };
          var Te = { assertOptions: function(e3, t3, n2) {
            if (typeof e3 != "object")
              throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
            const r2 = Object.keys(e3);
            let o2 = r2.length;
            for (; o2-- > 0; ) {
              const i2 = r2[o2], s2 = t3[i2];
              if (s2) {
                const t4 = e3[i2], n3 = t4 === void 0 || s2(t4, i2, e3);
                if (n3 !== true)
                  throw new I("option " + i2 + " must be " + n3, I.ERR_BAD_OPTION_VALUE);
              } else if (n2 !== true)
                throw new I("Unknown option " + i2, I.ERR_BAD_OPTION);
            }
          }, validators: Ae };
          const Re = Te.validators;
          class Le {
            constructor(e3) {
              this.defaults = e3, this.interceptors = { request: new Z(), response: new Z() };
            }
            request(e3, t3) {
              typeof e3 == "string" ? (t3 = t3 || {}).url = e3 : t3 = e3 || {}, t3 = xe(this.defaults, t3);
              const { transitional: n2, paramsSerializer: r2, headers: o2 } = t3;
              let i2;
              n2 !== void 0 && Te.assertOptions(n2, { silentJSONParsing: Re.transitional(Re.boolean), forcedJSONParsing: Re.transitional(Re.boolean), clarifyTimeoutError: Re.transitional(Re.boolean) }, false), r2 != null && (B.isFunction(r2) ? t3.paramsSerializer = { serialize: r2 } : Te.assertOptions(r2, { encode: Re.function, serialize: Re.function }, true)), t3.method = (t3.method || this.defaults.method || "get").toLowerCase(), i2 = o2 && B.merge(o2.common, o2[t3.method]), i2 && B.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e4) => {
                delete o2[e4];
              }), t3.headers = fe.concat(i2, o2);
              const s2 = [];
              let a2 = true;
              this.interceptors.request.forEach(function(e4) {
                typeof e4.runWhen == "function" && e4.runWhen(t3) === false || (a2 = a2 && e4.synchronous, s2.unshift(e4.fulfilled, e4.rejected));
              });
              const c2 = [];
              let u2;
              this.interceptors.response.forEach(function(e4) {
                c2.push(e4.fulfilled, e4.rejected);
              });
              let l2, f2 = 0;
              if (!a2) {
                const e4 = [Ee.bind(this), void 0];
                for (e4.unshift.apply(e4, s2), e4.push.apply(e4, c2), l2 = e4.length, u2 = Promise.resolve(t3); f2 < l2; )
                  u2 = u2.then(e4[f2++], e4[f2++]);
                return u2;
              }
              l2 = s2.length;
              let p2 = t3;
              for (f2 = 0; f2 < l2; ) {
                const e4 = s2[f2++], t4 = s2[f2++];
                try {
                  p2 = e4(p2);
                } catch (e5) {
                  t4.call(this, e5);
                  break;
                }
              }
              try {
                u2 = Ee.call(this, p2);
              } catch (e4) {
                return Promise.reject(e4);
              }
              for (f2 = 0, l2 = c2.length; f2 < l2; )
                u2 = u2.then(c2[f2++], c2[f2++]);
              return u2;
            }
            getUri(e3) {
              return Q(ge((e3 = xe(this.defaults, e3)).baseURL, e3.url), e3.params, e3.paramsSerializer);
            }
          }
          B.forEach(["delete", "get", "head", "options"], function(e3) {
            Le.prototype[e3] = function(t3, n2) {
              return this.request(xe(n2 || {}, { method: e3, url: t3, data: (n2 || {}).data }));
            };
          }), B.forEach(["post", "put", "patch"], function(e3) {
            function t3(t4) {
              return function(n2, r2, o2) {
                return this.request(xe(o2 || {}, { method: e3, headers: t4 ? { "Content-Type": "multipart/form-data" } : {}, url: n2, data: r2 }));
              };
            }
            Le.prototype[e3] = t3(), Le.prototype[e3 + "Form"] = t3(true);
          });
          var ke = Le;
          class Pe {
            constructor(e3) {
              if (typeof e3 != "function")
                throw new TypeError("executor must be a function.");
              let t3;
              this.promise = new Promise(function(e4) {
                t3 = e4;
              });
              const n2 = this;
              this.promise.then((e4) => {
                if (!n2._listeners)
                  return;
                let t4 = n2._listeners.length;
                for (; t4-- > 0; )
                  n2._listeners[t4](e4);
                n2._listeners = null;
              }), this.promise.then = (e4) => {
                let t4;
                const r2 = new Promise((e5) => {
                  n2.subscribe(e5), t4 = e5;
                }).then(e4);
                return r2.cancel = function() {
                  n2.unsubscribe(t4);
                }, r2;
              }, e3(function(e4, r2, o2) {
                n2.reason || (n2.reason = new ye(e4, r2, o2), t3(n2.reason));
              });
            }
            throwIfRequested() {
              if (this.reason)
                throw this.reason;
            }
            subscribe(e3) {
              this.reason ? e3(this.reason) : this._listeners ? this._listeners.push(e3) : this._listeners = [e3];
            }
            unsubscribe(e3) {
              if (!this._listeners)
                return;
              const t3 = this._listeners.indexOf(e3);
              t3 !== -1 && this._listeners.splice(t3, 1);
            }
            static source() {
              let e3;
              return { token: new Pe(function(t3) {
                e3 = t3;
              }), cancel: e3 };
            }
          }
          var Ue = Pe;
          const _e = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
          Object.entries(_e).forEach(([e3, t3]) => {
            _e[t3] = e3;
          });
          var Ne = _e;
          const Ce = function t3(n2) {
            const r2 = new ke(n2), o2 = e2(ke.prototype.request, r2);
            return B.extend(o2, ke.prototype, r2, { allOwnKeys: true }), B.extend(o2, r2, null, { allOwnKeys: true }), o2.create = function(e3) {
              return t3(xe(n2, e3));
            }, o2;
          }(oe);
          Ce.Axios = ke, Ce.CanceledError = ye, Ce.CancelToken = Ue, Ce.isCancel = de, Ce.VERSION = "1.4.0", Ce.toFormData = $, Ce.AxiosError = I, Ce.Cancel = Ce.CanceledError, Ce.all = function(e3) {
            return Promise.all(e3);
          }, Ce.spread = function(e3) {
            return function(t3) {
              return e3.apply(null, t3);
            };
          }, Ce.isAxiosError = function(e3) {
            return B.isObject(e3) && e3.isAxiosError === true;
          }, Ce.mergeConfig = xe, Ce.AxiosHeaders = fe, Ce.formToJSON = (e3) => te(B.isHTMLForm(e3) ? new FormData(e3) : e3), Ce.HttpStatusCode = Ne, Ce.default = Ce;
          var Be = Ce, De = n(581), Fe = n.n(De), qe = n(451), Ie = n.n(qe), Me = n(930), ze = n.n(Me), We = n(261), He = n.n(We);
          function $e(e3, t3) {
            var n2 = Object.keys(e3);
            if (Object.getOwnPropertySymbols) {
              var r2 = Object.getOwnPropertySymbols(e3);
              t3 && (r2 = r2.filter(function(t4) {
                return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
              })), n2.push.apply(n2, r2);
            }
            return n2;
          }
          function Je(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n2 = arguments[t3] != null ? arguments[t3] : {};
              t3 % 2 ? $e(Object(n2), true).forEach(function(t4) {
                Ve(e3, t4, n2[t4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n2)) : $e(Object(n2)).forEach(function(t4) {
                Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n2, t4));
              });
            }
            return e3;
          }
          function Ke(e3) {
            return Ke = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            }, Ke(e3);
          }
          function Ge() {
            Ge = function(e4, t4) {
              return new n2(e4, void 0, t4);
            };
            var e3 = RegExp.prototype, t3 = new WeakMap();
            function n2(e4, r3, o2) {
              var i2 = new RegExp(e4, r3);
              return t3.set(i2, o2 || t3.get(e4)), Xe(i2, n2.prototype);
            }
            function r2(e4, n3) {
              var r3 = t3.get(n3);
              return Object.keys(r3).reduce(function(t4, n4) {
                var o2 = r3[n4];
                if (typeof o2 == "number")
                  t4[n4] = e4[o2];
                else {
                  for (var i2 = 0; e4[o2[i2]] === void 0 && i2 + 1 < o2.length; )
                    i2++;
                  t4[n4] = e4[o2[i2]];
                }
                return t4;
              }, Object.create(null));
            }
            return function(e4, t4) {
              if (typeof t4 != "function" && t4 !== null)
                throw new TypeError("Super expression must either be null or a function");
              e4.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t4 && Xe(e4, t4);
            }(n2, RegExp), n2.prototype.exec = function(t4) {
              var n3 = e3.exec.call(this, t4);
              if (n3) {
                n3.groups = r2(n3, this);
                var o2 = n3.indices;
                o2 && (o2.groups = r2(o2, this));
              }
              return n3;
            }, n2.prototype[Symbol.replace] = function(n3, o2) {
              if (typeof o2 == "string") {
                var i2 = t3.get(this);
                return e3[Symbol.replace].call(this, n3, o2.replace(/\$<([^>]+)>/g, function(e4, t4) {
                  var n4 = i2[t4];
                  return "$" + (Array.isArray(n4) ? n4.join("$") : n4);
                }));
              }
              if (typeof o2 == "function") {
                var s2 = this;
                return e3[Symbol.replace].call(this, n3, function() {
                  var e4 = arguments;
                  return typeof e4[e4.length - 1] != "object" && (e4 = [].slice.call(e4)).push(r2(e4, s2)), o2.apply(this, e4);
                });
              }
              return e3[Symbol.replace].call(this, n3, o2);
            }, Ge.apply(this, arguments);
          }
          function Ve(e3, t3, n2) {
            return (t3 = function(e4) {
              var t4 = function(e5, t5) {
                if (typeof e5 != "object" || e5 === null)
                  return e5;
                var n3 = e5[Symbol.toPrimitive];
                if (n3 !== void 0) {
                  var r2 = n3.call(e5, "string");
                  if (typeof r2 != "object")
                    return r2;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e5);
              }(e4);
              return typeof t4 == "symbol" ? t4 : String(t4);
            }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          function Xe(e3, t3) {
            return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
              return e4.__proto__ = t4, e4;
            }, Xe(e3, t3);
          }
          function Qe(e3, t3) {
            if (e3) {
              if (typeof e3 == "string")
                return Ze(e3, t3);
              var n2 = Object.prototype.toString.call(e3).slice(8, -1);
              return n2 === "Object" && e3.constructor && (n2 = e3.constructor.name), n2 === "Map" || n2 === "Set" ? Array.from(e3) : n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Ze(e3, t3) : void 0;
            }
          }
          function Ze(e3, t3) {
            (t3 == null || t3 > e3.length) && (t3 = e3.length);
            for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++)
              r2[n2] = e3[n2];
            return r2;
          }
          function Ye() {
          }
          var et = function(e3) {
            return new Promise(function(t3) {
              setTimeout(t3, e3);
            });
          }, tt = function(e3) {
            return Math.pow(Math.SQRT2, e3);
          }, nt = Ge(/(\d+)(%)/, { value: 1 });
          function rt(e3) {
            var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 7, n2 = t3;
            if (nt.test(e3)) {
              var r2, o2 = (r2 = e3.match(nt)) === null || r2 === void 0 ? void 0 : r2.groups;
              if (o2 && o2.value) {
                var i2 = parseInt(o2.value) / 100;
                n2 = Math.round(t3 * i2);
              }
            }
            return Math.min(30, Math.max(1, n2));
          }
          function ot(e3, t3) {
            return t3("info", "Throttle request to ".concat(e3, "/s")), ze()({ limit: e3, interval: 1e3, strict: false });
          }
          var it = function(e3) {
            var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto", n2 = e3.defaults.logHandler, r2 = n2 === void 0 ? Ye : n2, o2 = Ie()(t3) ? rt(t3) : rt("auto", t3), i2 = ot(o2, r2), s2 = false, a2 = e3.interceptors.request.use(function(e4) {
              return i2(function() {
                return e4;
              })();
            }, function(e4) {
              return Promise.reject(e4);
            }), c2 = e3.interceptors.response.use(function(n3) {
              if (!s2 && Ie()(t3) && (t3 === "auto" || nt.test(t3)) && n3.headers && n3.headers["x-contentful-ratelimit-second-limit"]) {
                var c3 = parseInt(n3.headers["x-contentful-ratelimit-second-limit"]), u2 = rt(t3, c3);
                u2 !== o2 && (a2 && e3.interceptors.request.eject(a2), o2 = u2, i2 = ot(u2, r2), a2 = e3.interceptors.request.use(function(e4) {
                  return i2(function() {
                    return e4;
                  })();
                }, function(e4) {
                  return Promise.reject(e4);
                })), s2 = true;
              }
              return n3;
            }, function(e4) {
              return Promise.reject(e4);
            });
            return function() {
              e3.interceptors.request.eject(a2), e3.interceptors.response.eject(c2);
            };
          }, st = /^(?!\w+:\/\/)([^\s:]+\.?[^\s:]+)(?::(\d+))?(?!:)$/;
          function at(e3, t3) {
            var n2 = Je(Je({}, { insecure: false, retryOnError: true, logHandler: function(e4, t4) {
              if (e4 === "error" && t4) {
                var n3 = [t4.name, t4.message].filter(function(e5) {
                  return e5;
                }).join(" - ");
                return console.error("[error] ".concat(n3)), void console.error(t4);
              }
              console.log("[".concat(e4, "] ").concat(t4));
            }, headers: {}, httpAgent: false, httpsAgent: false, timeout: 3e4, throttle: 0, basePath: "", adapter: void 0, maxContentLength: 1073741824, maxBodyLength: 1073741824 }), t3);
            if (!n2.accessToken) {
              var r2 = new TypeError("Expected parameter accessToken");
              throw n2.logHandler("error", r2), r2;
            }
            var o2, i2, s2 = n2.insecure ? "http" : "https", a2 = n2.space ? "".concat(n2.space, "/") : "", c2 = n2.defaultHostname, u2 = n2.insecure ? 80 : 443;
            if (n2.host && st.test(n2.host)) {
              var l2 = n2.host.split(":");
              if (l2.length === 2) {
                var f2 = (i2 = 2, function(e4) {
                  if (Array.isArray(e4))
                    return e4;
                }(o2 = l2) || function(e4, t4) {
                  var n3 = e4 == null ? null : typeof Symbol != "undefined" && e4[Symbol.iterator] || e4["@@iterator"];
                  if (n3 != null) {
                    var r3, o3, i3, s3, a3 = [], c3 = true, u3 = false;
                    try {
                      if (i3 = (n3 = n3.call(e4)).next, t4 === 0) {
                        if (Object(n3) !== n3)
                          return;
                        c3 = false;
                      } else
                        for (; !(c3 = (r3 = i3.call(n3)).done) && (a3.push(r3.value), a3.length !== t4); c3 = true)
                          ;
                    } catch (e5) {
                      u3 = true, o3 = e5;
                    } finally {
                      try {
                        if (!c3 && n3.return != null && (s3 = n3.return(), Object(s3) !== s3))
                          return;
                      } finally {
                        if (u3)
                          throw o3;
                      }
                    }
                    return a3;
                  }
                }(o2, i2) || Qe(o2, i2) || function() {
                  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }());
                c2 = f2[0], u2 = f2[1];
              } else
                c2 = l2[0];
            }
            n2.basePath && (n2.basePath = "/".concat(n2.basePath.split("/").filter(Boolean).join("/")));
            var p2 = t3.baseURL || "".concat(s2, "://").concat(c2, ":").concat(u2).concat(n2.basePath, "/spaces/").concat(a2);
            n2.headers.Authorization || typeof n2.accessToken == "function" || (n2.headers.Authorization = "Bearer " + n2.accessToken);
            var d2 = { baseURL: p2, headers: n2.headers, httpAgent: n2.httpAgent, httpsAgent: n2.httpsAgent, proxy: n2.proxy, timeout: n2.timeout, adapter: n2.adapter, maxContentLength: n2.maxContentLength, maxBodyLength: n2.maxBodyLength, logHandler: n2.logHandler, responseLogger: n2.responseLogger, requestLogger: n2.requestLogger, retryOnError: n2.retryOnError }, h2 = e3.create(d2);
            return h2.httpClientParams = t3, h2.cloneWithNewParams = function(n3) {
              return at(e3, Je(Je({}, Fe()(t3)), n3));
            }, n2.onBeforeRequest && h2.interceptors.request.use(n2.onBeforeRequest), typeof n2.accessToken == "function" && function(e4, t4) {
              e4.interceptors.request.use(function(e5) {
                return t4().then(function(t5) {
                  return e5.headers.set("Authorization", "Bearer ".concat(t5)), e5;
                });
              });
            }(h2, n2.accessToken), n2.throttle && it(h2, n2.throttle), function(e4) {
              var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5, n3 = e4.defaults, r3 = n3.responseLogger, o3 = r3 === void 0 ? Ye : r3, i3 = n3.requestLogger, s3 = i3 === void 0 ? Ye : i3;
              e4.interceptors.request.use(function(e5) {
                return s3(e5), e5;
              }, function(e5) {
                return s3(e5), Promise.reject(e5);
              }), e4.interceptors.response.use(function(e5) {
                return o3(e5), e5;
              }, function(n4) {
                var r4 = n4.response, i4 = n4.config;
                if (o3(n4), !i4 || !e4.defaults.retryOnError)
                  return Promise.reject(n4);
                var s4 = i4.attempts || 1;
                if (s4 > t4)
                  return n4.attempts = i4.attempts, Promise.reject(n4);
                var a3 = null, c3 = tt(s4);
                return r4 ? r4.status >= 500 && r4.status < 600 ? a3 = "Server ".concat(r4.status) : r4.status === 429 && (a3 = "Rate limit", r4.headers && n4.response.headers["x-contentful-ratelimit-reset"] && (c3 = r4.headers["x-contentful-ratelimit-reset"])) : a3 = "Connection", a3 ? (c3 = Math.floor(1e3 * c3 + 200 * Math.random() + 500), e4.defaults.logHandler("warning", "".concat(a3, " error occurred. Waiting for ").concat(c3, " ms before retrying...")), i4.attempts = s4 + 1, delete i4.httpAgent, delete i4.httpsAgent, et(c3).then(function() {
                  return e4(i4);
                })) : Promise.reject(n4);
              });
            }(h2, n2.retryLimit), n2.onError && h2.interceptors.response.use(function(e4) {
              return e4;
            }, n2.onError), h2;
          }
          function ct(e3) {
            var t3 = e3.query, n2 = {};
            return delete t3.resolveLinks, n2.params = Fe()(t3), n2;
          }
          function ut(e3) {
            var t3, n2 = function(e4, t4) {
              var n3 = typeof Symbol != "undefined" && e4[Symbol.iterator] || e4["@@iterator"];
              if (!n3) {
                if (Array.isArray(e4) || (n3 = Qe(e4))) {
                  n3 && (e4 = n3);
                  var r3 = 0, o2 = function() {
                  };
                  return { s: o2, n: function() {
                    return r3 >= e4.length ? { done: true } : { done: false, value: e4[r3++] };
                  }, e: function(e5) {
                    throw e5;
                  }, f: o2 };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var i2, s2 = true, a2 = false;
              return { s: function() {
                n3 = n3.call(e4);
              }, n: function() {
                var e5 = n3.next();
                return s2 = e5.done, e5;
              }, e: function(e5) {
                a2 = true, i2 = e5;
              }, f: function() {
                try {
                  s2 || n3.return == null || n3.return();
                } finally {
                  if (a2)
                    throw i2;
                }
              } };
            }(Object.getOwnPropertyNames(e3));
            try {
              for (n2.s(); !(t3 = n2.n()).done; ) {
                var r2 = e3[t3.value];
                r2 && Ke(r2) === "object" && ut(r2);
              }
            } catch (e4) {
              n2.e(e4);
            } finally {
              n2.f();
            }
            return Object.freeze(e3);
          }
          function lt() {
            var e3 = window;
            if (!e3)
              return null;
            var t3 = e3.navigator.userAgent, n2 = e3.navigator.platform;
            return ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(n2) !== -1 ? "macOS" : ["iPhone", "iPad", "iPod"].indexOf(n2) !== -1 ? "iOS" : ["Win32", "Win64", "Windows", "WinCE"].indexOf(n2) !== -1 ? "Windows" : /Android/.test(t3) ? "Android" : /Linux/.test(n2) ? "Linux" : null;
          }
          function ft(e3) {
            return Object.defineProperty(e3, "toPlainObject", { enumerable: false, configurable: false, writable: false, value: function() {
              return Fe()(this);
            } });
          }
          function pt(e3) {
            var t3, n2 = e3.config, r2 = e3.response;
            if (n2 && n2.headers && n2.headers.Authorization) {
              var o2 = "...".concat(n2.headers.Authorization.toString().substr(-5));
              n2.headers.Authorization = "Bearer ".concat(o2);
            }
            if (!He()(r2) || !He()(n2))
              throw e3;
            var i2, s2 = r2 == null ? void 0 : r2.data, a2 = { status: r2 == null ? void 0 : r2.status, statusText: r2 == null ? void 0 : r2.statusText, message: "", details: {} };
            n2 && He()(n2) && (a2.request = { url: n2.url, headers: n2.headers, method: n2.method, payloadData: n2.data }), s2 && Ke(s2) === "object" && ("requestId" in s2 && (a2.requestId = s2.requestId || "UNKNOWN"), "message" in s2 && (a2.message = s2.message || ""), "details" in s2 && (a2.details = s2.details || {}), t3 = (i2 = s2.sys) === null || i2 === void 0 ? void 0 : i2.id);
            var c2 = new Error();
            c2.name = t3 && t3 !== "Unknown" ? t3 : "".concat(r2 == null ? void 0 : r2.status, " ").concat(r2 == null ? void 0 : r2.statusText);
            try {
              c2.message = JSON.stringify(a2, null, "  ");
            } catch (e4) {
              var u2;
              c2.message = (u2 = a2 == null ? void 0 : a2.message) !== null && u2 !== void 0 ? u2 : "";
            }
            throw c2;
          }
          function dt(e3) {
            return function(t3) {
              return Object.assign({}, e3, t3);
            };
          }
          var ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          };
          function yt(e3) {
            if (Array.isArray(e3)) {
              for (var t3 = 0, n2 = Array(e3.length); t3 < e3.length; t3++)
                n2[t3] = e3[t3];
              return n2;
            }
            return Array.from(e3);
          }
          var mt = {}, gt = function(e3, t3) {
            var n2 = t3.entryId, r2 = t3.linkType, o2 = t3.spaceId;
            return o2 ? e3.get(o2 + "!" + r2 + "!" + n2) : e3.get(r2 + "!" + n2);
          }, bt = function e3(t3, n2, r2, o2) {
            if (n2(t3))
              return r2(t3);
            if (t3 && (t3 === void 0 ? "undefined" : ht(t3)) === "object") {
              for (var i2 in t3)
                t3.hasOwnProperty(i2) && (t3[i2] = e3(t3[i2], n2, r2, o2));
              o2 && (t3 = function(e4) {
                if (Array.isArray(e4))
                  return e4.filter(function(e5) {
                    return e5 !== mt;
                  });
                for (var t4 in e4)
                  e4[t4] === mt && delete e4[t4];
                return e4;
              }(t3));
            }
            return t3;
          }, vt = function(e3, t3, n2) {
            var r2 = function(e4, t4) {
              var n3 = t4.sys, r3 = n3.type, o2 = n3.linkType;
              if (r3 === "ResourceLink") {
                var i2 = t4.sys.urn, s2 = /.*:spaces\/([A-Za-z0-9]*)\/entries\/([A-Za-z0-9]*)/;
                if (!s2.test(i2))
                  return mt;
                var a2 = function(e5, t5) {
                  if (Array.isArray(e5))
                    return e5;
                  if (Symbol.iterator in Object(e5))
                    return function(e6, t6) {
                      var n4 = [], r4 = true, o3 = false, i3 = void 0;
                      try {
                        for (var s3, a3 = e6[Symbol.iterator](); !(r4 = (s3 = a3.next()).done) && (n4.push(s3.value), !t6 || n4.length !== t6); r4 = true)
                          ;
                      } catch (e7) {
                        o3 = true, i3 = e7;
                      } finally {
                        try {
                          !r4 && a3.return && a3.return();
                        } finally {
                          if (o3)
                            throw i3;
                        }
                      }
                      return n4;
                    }(e5, t5);
                  throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }(i2.match(s2), 3), c2 = (a2[0], a2[1]), u2 = a2[2], l2 = o2.split(":")[1];
                return gt(e4, { linkType: l2, entryId: u2, spaceId: c2 }) || mt;
              }
              var f2 = t4.sys.id;
              return gt(e4, { linkType: o2, entryId: f2 }) || mt;
            }(e3, t3);
            return r2 === mt ? n2 ? r2 : t3 : r2;
          }, wt = function(e3, t3) {
            if (t3 = t3 || {}, !e3.items)
              return [];
            var n2 = Fe()(e3), r2 = Object.keys(n2.includes || {}).reduce(function(t4, n3) {
              return [].concat(yt(t4), yt(e3.includes[n3]));
            }, []), o2 = [].concat(yt(n2.items), yt(r2)).filter(function(e4) {
              return Boolean(e4.sys);
            }), i2 = new Map(o2.reduce(function(e4, t4) {
              var n3, r3 = (n3 = t4.sys, n3.space ? [n3.type + "!" + n3.id, n3.space.sys.id + "!" + n3.type + "!" + n3.id] : [n3.type + "!" + n3.id]).map(function(e5) {
                return [e5, t4];
              });
              return e4.push.apply(e4, yt(r3)), e4;
            }, []));
            return o2.forEach(function(e4) {
              var n3 = function(e5, t4) {
                return Array.isArray(t4) ? Object.keys(e5).filter(function(e6) {
                  return t4.indexOf(e6) !== -1;
                }).reduce(function(t5, n4) {
                  return t5[n4] = e5[n4], t5;
                }, {}) : e5;
              }(e4, t3.itemEntryPoints);
              Object.assign(e4, bt(n3, function(e5) {
                return (t4 = e5) && t4.sys && t4.sys.type === "Link" || function(e6) {
                  return e6 && e6.sys && e6.sys.type === "ResourceLink";
                }(e5);
                var t4;
              }, function(e5) {
                return vt(i2, e5, t3.removeUnresolved);
              }, t3.removeUnresolved));
            }), n2.items;
          }, Ot = n(784), Et = n.n(Ot);
          function St(e3) {
            return Object.defineProperty(e3, "stringifySafe", { enumerable: false, configurable: false, writable: false, value: function(e4 = null, t3 = "") {
              return Et()(this, e4, t3, (e5, t4) => ({ sys: { type: "Link", linkType: "Entry", id: t4.sys.id, circular: true } }));
            } });
          }
          async function xt(e3, t3, n2) {
            if (!t3 || !t3.initial && !t3.nextSyncToken && !t3.nextPageToken)
              throw new Error("Please provide one of `initial`, `nextSyncToken` or `nextPageToken` parameters for syncing");
            if (t3.content_type && !t3.type)
              t3.type = "Entry";
            else if (t3.content_type && t3.type && t3.type !== "Entry")
              throw new Error("When using the `content_type` filter your `type` parameter cannot be different from `Entry`.");
            const { withoutLinkResolution: r2, withoutUnresolvableLinks: o2, paginate: i2 } = { withoutLinkResolution: false, withoutUnresolvableLinks: false, paginate: true, ...n2 }, s2 = await At(e3, [], t3, { paginate: i2 });
            r2 || (s2.items = wt(s2, { removeUnresolved: o2, itemEntryPoints: ["fields"] }));
            const a2 = function(e4) {
              const t4 = (e5) => (t5, n3) => (n3.sys.type === e5 && t5.push(ft(n3)), t5);
              return { entries: e4.reduce(t4("Entry"), []), assets: e4.reduce(t4("Asset"), []), deletedEntries: e4.reduce(t4("DeletedEntry"), []), deletedAssets: e4.reduce(t4("DeletedAsset"), []) };
            }(s2.items);
            return s2.nextSyncToken && (a2.nextSyncToken = s2.nextSyncToken), s2.nextPageToken && (a2.nextPageToken = s2.nextPageToken), ut((c2 = St(ft(a2))).sys || {}), c2;
            var c2;
          }
          async function At(e3, t3, n2, { paginate: r2 }) {
            const o2 = (i2 = n2).nextPageToken ? { sync_token: i2.nextPageToken } : i2.nextSyncToken ? { sync_token: i2.nextSyncToken } : i2.sync_token ? { sync_token: i2.sync_token } : i2;
            var i2;
            const s2 = (await e3.get("sync", ct({ query: o2 }))).data || {};
            return t3 = t3.concat(s2.items || []), s2.nextPageUrl ? r2 ? (delete o2.initial, o2.sync_token = jt(s2.nextPageUrl), At(e3, t3, o2, { paginate: r2 })) : { items: t3, nextPageToken: jt(s2.nextPageUrl) } : s2.nextSyncUrl ? { items: t3, nextSyncToken: jt(s2.nextSyncUrl) } : { items: [] };
          }
          function jt(e3) {
            const t3 = e3.split("?");
            return t3.length > 0 ? t3[1].replace("sync_token=", "") : "";
          }
          function Tt(e3) {
            const t3 = {};
            let n2 = false;
            for (const r2 in e3)
              Array.isArray(e3[r2]) && (t3[r2] = e3[r2].join(","), n2 = true);
            return n2 ? { ...e3, ...t3 } : e3;
          }
          function Rt(e3) {
            if (!e3.select)
              return e3;
            const t3 = Array.isArray(e3.select) ? e3.select : e3.select.split(",").map((e4) => e4.trim()), n2 = new Set(t3);
            return n2.has("sys") ? e3 : (n2.add("sys.id"), n2.add("sys.type"), { ...e3, select: [...n2].join(",") });
          }
          function Lt(e3, { resolveLinks: t3, removeUnresolved: n2 }) {
            const r2 = St(e3);
            return t3 && (r2.items = wt(r2, { removeUnresolved: n2, itemEntryPoints: ["fields"] })), r2;
          }
          class kt extends Error {
            constructor(e3, t3) {
              super(`Invalid "${e3}" provided, ` + t3), this.name = "ValidationError";
            }
          }
          function Pt(e3, t3) {
            t3 ? function(e4) {
              if (e4.locale)
                throw new kt("locale", "The `locale` parameter is not allowed");
            }(e3) : function(e4) {
              if (e4.locale === "*")
                throw new kt("locale", "The use of locale='*' is no longer supported.To fetch an entry in all existing locales, \n      use client.withAllLocales instead of the locale='*' parameter.");
            }(e3);
          }
          function Ut(e3) {
            if ("resolveLinks" in e3)
              throw new kt("resolveLinks", "The use of the 'resolveLinks' parameter is no longer supported. By default, links are resolved. \n      If you do not want to resolve links, use client.withoutLinkResolution.");
          }
          function _t(e3) {
            if ("removeUnresolved" in e3)
              throw new kt("removeUnresolved", "The use of the 'removeUnresolved' parameter is no longer supported. By default, unresolved links are kept as link objects.\n      If you do not want to include unresolved links, use client.withoutUnresolvableLinks.");
          }
          function Nt(e3) {
            for (const t3 in e3) {
              const n2 = e3[t3];
              if (typeof n2 == "object" && n2 !== null && !Array.isArray(n2))
                throw new Error(`Objects are not supported as value for the "${t3}" query parameter.`);
            }
          }
          class Ct extends Error {
            sys;
            details;
            constructor(e3, t3, n2) {
              super("The resource could not be found."), this.sys = { type: "Error", id: "NotFound" }, this.details = { type: "Entry", id: e3, environment: t3, space: n2 };
            }
          }
          function Bt({ http: e3, getGlobalOptions: t3 }, n2) {
            const r2 = (e4 = "unknown") => new Ct(e4, t3().environment, t3().space), o2 = (e4) => {
              let n3 = e4 === "space" ? t3().spaceBaseUrl : t3().environmentBaseUrl;
              if (!n3)
                throw new Error("Please define baseUrl for " + e4);
              return n3.endsWith("/") || (n3 += "/"), n3;
            };
            async function i2({ context: t4, path: n3, config: r3 }) {
              const i3 = o2(t4);
              try {
                return (await e3.get(i3 + n3, r3)).data;
              } catch (e4) {
                pt(e4);
              }
            }
            async function s2(e4, t4) {
              const { withoutLinkResolution: n3, withoutUnresolvableLinks: r3 } = t4;
              try {
                return Lt(await i2({ context: "environment", path: "entries", config: ct({ query: Tt(Rt(e4)) }) }), { resolveLinks: !n3, removeUnresolved: r3 ?? false });
              } catch (e5) {
                pt(e5);
              }
            }
            return { version: "10.4.1", getSpace: async function() {
              return i2({ context: "space", path: "" });
            }, getContentType: async function(e4) {
              return i2({ context: "environment", path: `content_types/${e4}` });
            }, getContentTypes: async function(e4 = {}) {
              return i2({ context: "environment", path: "content_types", config: ct({ query: e4 }) });
            }, getAsset: async function(e4, t4 = {}) {
              return async function(e5, t5, n3 = { withAllLocales: false, withoutLinkResolution: false, withoutUnresolvableLinks: false }) {
                const { withAllLocales: r3 } = n3;
                Pt(t5, r3), Nt(t5);
                return async function(e6, t6) {
                  try {
                    return i2({ context: "environment", path: `assets/${e6}`, config: ct({ query: Rt(t6) }) });
                  } catch (e7) {
                    pt(e7);
                  }
                }(e5, r3 ? { ...t5, locale: "*" } : t5);
              }(e4, t4, n2);
            }, getAssets: async function(e4 = {}) {
              return async function(e5, t4 = { withAllLocales: false, withoutLinkResolution: false, withoutUnresolvableLinks: false }) {
                const { withAllLocales: n3 } = t4;
                Pt(e5, n3), Nt(e5);
                return async function(e6) {
                  try {
                    return i2({ context: "environment", path: "assets", config: ct({ query: Tt(Rt(e6)) }) });
                  } catch (e7) {
                    pt(e7);
                  }
                }(n3 ? { ...e5, locale: "*" } : e5);
              }(e4, n2);
            }, getTag: async function(e4) {
              return i2({ context: "environment", path: `tags/${e4}` });
            }, getTags: async function(e4 = {}) {
              return Nt(e4), i2({ context: "environment", path: "tags", config: ct({ query: Tt(Rt(e4)) }) });
            }, getLocales: async function(e4 = {}) {
              return Nt(e4), i2({ context: "environment", path: "locales", config: ct({ query: Rt(e4) }) });
            }, parseEntries: function(e4) {
              return function(e5, t4 = { withAllLocales: false, withoutLinkResolution: false, withoutUnresolvableLinks: false }) {
                return function(e6, t5) {
                  const { withoutLinkResolution: n3, withoutUnresolvableLinks: r3 } = t5;
                  return Lt(e6, { resolveLinks: !n3, removeUnresolved: r3 ?? false });
                }(e5, t4);
              }(e4, n2);
            }, sync: async function(r3, o3 = { paginate: true }) {
              return async function(n3, r4, o4 = { withAllLocales: false, withoutLinkResolution: false, withoutUnresolvableLinks: false }) {
                Ut(n3), _t(n3);
                const i3 = { ...r4, ...o4 };
                return function(e4) {
                  e4.defaults.baseURL = t3().environmentBaseUrl;
                }(e3), xt(e3, n3, i3);
              }(r3, o3, n2);
            }, getEntry: async function(e4, t4 = {}) {
              return async function(e5, t5, n3 = { withAllLocales: false, withoutLinkResolution: false, withoutUnresolvableLinks: false }) {
                const { withAllLocales: o3 } = n3;
                return Pt(t5, o3), Ut(t5), _t(t5), Nt(t5), async function(e6, t6, n4) {
                  if (!e6)
                    throw r2(e6);
                  try {
                    const o4 = await s2({ "sys.id": e6, ...t6 }, n4);
                    if (o4.items.length > 0)
                      return o4.items[0];
                    throw r2(e6);
                  } catch (e7) {
                    pt(e7);
                  }
                }(e5, o3 ? { ...t5, locale: "*" } : t5, n3);
              }(e4, t4, n2);
            }, getEntries: async function(e4 = {}) {
              return async function(e5, t4 = { withAllLocales: false, withoutLinkResolution: false, withoutUnresolvableLinks: false }) {
                const { withAllLocales: n3 } = t4;
                return Pt(e5, n3), Ut(e5), _t(e5), Nt(e5), s2(n3 ? { ...e5, locale: "*" } : e5, t4);
              }(e4, n2);
            }, createAssetKey: async function(t4) {
              try {
                const e4 = Math.floor(Date.now() / 1e3);
                !function(e5, t5, n3) {
                  if (n3 = n3 || {}, typeof t5 != "number")
                    throw new kt(e5, `only numeric values are allowed for timestamps, provided type was "${typeof t5}"`);
                  if (n3.maximum && t5 > n3.maximum)
                    throw new kt(e5, `value (${t5}) cannot be further in the future than expected maximum (${n3.maximum})`);
                  if (n3.now && t5 < n3.now)
                    throw new kt(e5, `value (${t5}) cannot be in the past, current time was ${n3.now}`);
                }("expiresAt", t4, { maximum: e4 + 172800, now: e4 });
              } catch (e4) {
                pt(e4);
              }
              return async function({ context: t5, path: n3, data: r3, config: i3 }) {
                const s3 = o2(t5);
                try {
                  return (await e3.post(s3 + n3, r3, i3)).data;
                } catch (e4) {
                  pt(e4);
                }
              }({ context: "environment", path: "asset_keys", data: { expiresAt: t4 } });
            } };
          }
          const Dt = ({ http: e3, getGlobalOptions: t3 }) => {
            function n2(r2) {
              return function({ http: e4, getGlobalOptions: t4 }, n3, r3) {
                const o2 = Bt({ http: e4, getGlobalOptions: t4 }, n3);
                return Object.defineProperty(o2, "withAllLocales", { get: () => r3({ ...n3, withAllLocales: true }) }), Object.defineProperty(o2, "withoutLinkResolution", { get: () => r3({ ...n3, withoutLinkResolution: true }) }), Object.defineProperty(o2, "withoutUnresolvableLinks", { get: () => r3({ ...n3, withoutUnresolvableLinks: true }) }), Object.create(o2);
              }({ http: e3, getGlobalOptions: t3 }, r2, n2);
            }
            return { ...Bt({ http: e3, getGlobalOptions: t3 }, { withoutLinkResolution: false, withAllLocales: false, withoutUnresolvableLinks: false }), get withAllLocales() {
              return n2({ withAllLocales: true, withoutLinkResolution: false, withoutUnresolvableLinks: false });
            }, get withoutLinkResolution() {
              return n2({ withAllLocales: false, withoutLinkResolution: true, withoutUnresolvableLinks: false });
            }, get withoutUnresolvableLinks() {
              return n2({ withAllLocales: false, withoutLinkResolution: false, withoutUnresolvableLinks: true });
            } };
          };
          function Ft(e3) {
            if (!e3.accessToken)
              throw new TypeError("Expected parameter accessToken");
            if (!e3.space)
              throw new TypeError("Expected parameter space");
            Ut(e3), _t(e3);
            const t3 = { resolveLinks: true, removeUnresolved: false, defaultHostname: "cdn.contentful.com", environment: "master", ...e3 }, n2 = function(e4, t4, n3, r3) {
              var o3 = [];
              t4 && o3.push("app ".concat(t4)), n3 && o3.push("integration ".concat(n3)), r3 && o3.push("feature " + r3), o3.push("sdk ".concat(e4));
              var i2 = null;
              try {
                typeof window != "undefined" && "navigator" in window && "product" in window.navigator && window.navigator.product === "ReactNative" ? (i2 = lt(), o3.push("platform ReactNative")) : typeof process == "undefined" || process.browser ? (i2 = lt(), o3.push("platform browser")) : (i2 = function() {
                  var e5 = process.platform || "linux", t5 = process.version || "0.0.0", n4 = { android: "Android", aix: "Linux", darwin: "macOS", freebsd: "Linux", linux: "Linux", openbsd: "Linux", sunos: "Linux", win32: "Windows" };
                  return e5 in n4 ? "".concat(n4[e5] || "Linux", "/").concat(t5) : null;
                }(), o3.push("platform node.js/".concat(process.versions && process.versions.node ? "v".concat(process.versions.node) : process.version)));
              } catch (e5) {
                i2 = null;
              }
              return i2 && o3.push("os ".concat(i2)), "".concat(o3.filter(function(e5) {
                return e5 !== "";
              }).join("; "), ";");
            }("contentful.js/10.4.1", t3.application, t3.integration);
            t3.headers = { ...t3.headers, "Content-Type": "application/vnd.contentful.delivery.v1+json", "X-Contentful-User-Agent": n2 };
            const r2 = at(Be, t3);
            if (!r2.defaults.baseURL)
              throw new Error("Please define a baseURL");
            const o2 = dt({ space: t3.space, environment: t3.environment, spaceBaseUrl: r2.defaults.baseURL, environmentBaseUrl: `${r2.defaults.baseURL}environments/${t3.environment}` });
            return r2.defaults.baseURL = o2({}).environmentBaseUrl, Dt({ http: r2, getGlobalOptions: o2 });
          }
        }(), r;
      }();
    });
  }
});

// browser-route-module:/Users/matvej/dev/remix-blog/app/routes/blog/index.jsx?browser
init_react();

// app/routes/blog/index.jsx
init_react();
var import_contentful = __toModule(require_contentful_browser_min());
function links() {
  return [{ rel: "stylesheet", href: blog_default }];
}
function Blog() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Our latest posts"), posts.map((post) => /* @__PURE__ */ React.createElement("div", {
    className: "card",
    key: post.sys.id
  }, /* @__PURE__ */ React.createElement(Link, {
    to: `/blog/posts/${post.sys.id}`
  }, post.fields.title))));
}
export {
  Blog as default,
  links
};
//# sourceMappingURL=/build/routes/blog/index-4ZZWESVM.js.map