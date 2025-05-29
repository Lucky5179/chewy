(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [433],
  {
    9941: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function s(t, e, n, s, o) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var a = new i(n, s || t, o),
          u = r ? r + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], a])
              : t._events[u].push(a)
            : ((t._events[u] = a), t._eventsCount++),
          t
        );
      }
      function o(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function a() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (a.prototype.eventNames = function () {
          var t,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (t = this._events))
            e.call(t, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (a.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, s = n.length, o = Array(s); i < s; i++)
            o[i] = n[i].fn;
          return o;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (a.prototype.emit = function (t, e, n, i, s, o) {
          var a = r ? r + t : t;
          if (!this._events[a]) return !1;
          var u,
            l,
            c = this._events[a],
            h = arguments.length;
          if (c.fn) {
            switch ((c.once && this.removeListener(t, c.fn, void 0, !0), h)) {
              case 1:
                return c.fn.call(c.context), !0;
              case 2:
                return c.fn.call(c.context, e), !0;
              case 3:
                return c.fn.call(c.context, e, n), !0;
              case 4:
                return c.fn.call(c.context, e, n, i), !0;
              case 5:
                return c.fn.call(c.context, e, n, i, s), !0;
              case 6:
                return c.fn.call(c.context, e, n, i, s, o), !0;
            }
            for (l = 1, u = Array(h - 1); l < h; l++) u[l - 1] = arguments[l];
            c.fn.apply(c.context, u);
          } else {
            var d,
              f = c.length;
            for (l = 0; l < f; l++)
              switch (
                (c[l].once && this.removeListener(t, c[l].fn, void 0, !0), h)
              ) {
                case 1:
                  c[l].fn.call(c[l].context);
                  break;
                case 2:
                  c[l].fn.call(c[l].context, e);
                  break;
                case 3:
                  c[l].fn.call(c[l].context, e, n);
                  break;
                case 4:
                  c[l].fn.call(c[l].context, e, n, i);
                  break;
                default:
                  if (!u)
                    for (d = 1, u = Array(h - 1); d < h; d++)
                      u[d - 1] = arguments[d];
                  c[l].fn.apply(c[l].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, r) {
          return s(this, t, e, r, !1);
        }),
        (a.prototype.once = function (t, e, r) {
          return s(this, t, e, r, !0);
        }),
        (a.prototype.removeListener = function (t, e, n, i) {
          var s = r ? r + t : t;
          if (!this._events[s]) return this;
          if (!e) return o(this, s), this;
          var a = this._events[s];
          if (a.fn)
            a.fn !== e ||
              (i && !a.once) ||
              (n && a.context !== n) ||
              o(this, s);
          else {
            for (var u = 0, l = [], c = a.length; u < c; u++)
              (a[u].fn !== e ||
                (i && !a[u].once) ||
                (n && a[u].context !== n)) &&
                l.push(a[u]);
            l.length
              ? (this._events[s] = 1 === l.length ? l[0] : l)
              : o(this, s);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && o(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = r),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    699: function (t, e, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(4090),
        i =
          "function" == typeof Object.is
            ? Object.is
            : function (t, e) {
                return (
                  (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
                );
              },
        s = n.useState,
        o = n.useEffect,
        a = n.useLayoutEffect,
        u = n.useDebugValue;
      function l(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
          var r = e();
          return !i(t, r);
        } catch (t) {
          return !0;
        }
      }
      var c =
        void 0 === window.document || void 0 === window.document.createElement
          ? function (t, e) {
              return e();
            }
          : function (t, e) {
              var r = e(),
                n = s({ inst: { value: r, getSnapshot: e } }),
                i = n[0].inst,
                c = n[1];
              return (
                a(
                  function () {
                    (i.value = r), (i.getSnapshot = e), l(i) && c({ inst: i });
                  },
                  [t, r, e]
                ),
                o(
                  function () {
                    return (
                      l(i) && c({ inst: i }),
                      t(function () {
                        l(i) && c({ inst: i });
                      })
                    );
                  },
                  [t]
                ),
                u(r),
                r
              );
            };
      e.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c;
    },
    2999: function (t, e, r) {
      "use strict";
      t.exports = r(699);
    },
    3763: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
          fontStyle: "normal",
        },
        className: "__className_aaf875",
        variable: "__variable_aaf875",
      };
    },
    3462: function (t, e, r) {
      "use strict";
      r.d(e, {
        x: function () {
          return s;
        },
      });
      var n = r(3433),
        i = "Martian",
        s = class {
          async connect() {
            try {
              var t;
              let e = await (null === (t = this.provider) || void 0 === t
                ? void 0
                : t.connect());
              if (!e) throw "".concat(i, " Address Info Error");
              return e;
            } catch (t) {
              throw t;
            }
          }
          async account() {
            var t;
            let e = await (null === (t = this.provider) || void 0 === t
              ? void 0
              : t.account());
            if (!e) throw "".concat(i, " Account Error");
            return e;
          }
          async disconnect() {
            try {
              var t;
              await (null === (t = this.provider) || void 0 === t
                ? void 0
                : t.disconnect());
            } catch (t) {
              throw t;
            }
          }
          async signAndSubmitTransaction(t, e) {
            try {
              var r, n, i;
              let s = await this.account(),
                o = await (null === (n = this.provider) || void 0 === n
                  ? void 0
                  : n.generateTransaction(s.address, t, {
                      ...e,
                      max_gas_amount:
                        null == e
                          ? void 0
                          : null === (r = e.max_gas_amount) || void 0 === r
                          ? void 0
                          : r.toString(),
                    }));
              if (!o) throw Error("Cannot generate transaction");
              let a = await (null === (i = this.provider) || void 0 === i
                ? void 0
                : i.signAndSubmitTransaction(o));
              if (!a) throw Error("No response");
              return { hash: a };
            } catch (t) {
              throw t;
            }
          }
          async signAndSubmitBCSTransaction(t, e) {
            try {
              var r;
              let i = new n.Ce.Serializer();
              t.serialize(i);
              let s = await (null === (r = this.provider) || void 0 === r
                ? void 0
                : r.signAndSubmitBCSTransaction(i.getBytes().toString(), e));
              if (s.code) throw Error(s.message);
              return { hash: s };
            } catch (t) {
              throw t.message;
            }
          }
          async signTransaction(t, e) {
            try {
              var r, n;
              let i = await this.account(),
                s = await (null === (r = this.provider) || void 0 === r
                  ? void 0
                  : r.generateTransaction(i.address, t, e));
              if (!s) throw Error("Cannot generate transaction");
              let o = await (null === (n = this.provider) || void 0 === n
                ? void 0
                : n.signTransaction(s));
              if (!o) throw Error("No response");
              return o;
            } catch (t) {
              throw t;
            }
          }
          async signMessage(t) {
            try {
              var e;
              "object" != typeof t || t.nonce;
              let r = await (null === (e = this.provider) || void 0 === e
                ? void 0
                : e.signMessage(t));
              if (r) return r;
              throw "".concat(i, " Sign Message failed");
            } catch (t) {
              throw t.message;
            }
          }
          async onNetworkChange(t) {
            try {
              var e;
              let r = async (e) => {
                t({ name: e, chainId: void 0, api: void 0 });
              };
              await (null === (e = this.provider) || void 0 === e
                ? void 0
                : e.onNetworkChange(r));
            } catch (t) {
              throw t.message;
            }
          }
          async onAccountChange(t) {
            try {
              var e;
              let r = async (e) => {
                if (null == e ? void 0 : e.publicKey) t({ ...e });
                else {
                  let e = await this.connect();
                  t({ ...e });
                }
              };
              await (null === (e = this.provider) || void 0 === e
                ? void 0
                : e.onAccountChange(r));
            } catch (t) {
              throw (console.log(t), t.message);
            }
          }
          async network() {
            try {
              var t;
              let e = await (null === (t = this.provider) || void 0 === t
                ? void 0
                : t.network());
              if (!e) throw "".concat(i, " Network Error");
              return {
                name: e,
                chainId: this.networkToChainId[e.toLowerCase()],
              };
            } catch (t) {
              throw t;
            }
          }
          constructor() {
            (this.networkToChainId = { mainnet: 1, testnet: 2, devnet: 43 }),
              (this.name = i),
              (this.url =
                "https://chrome.google.com/webstore/detail/martian-wallet/efbglgofoippbgcjepnhiblaibcnclgk"),
              (this.icon =
                "data:image/png;base64,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"),
              (this.provider = window.martian);
          }
        };
    },
    3845: function (t, e, r) {
      "use strict";
      r.d(e, {
        N: function () {
          return l;
        },
      }),
        r(3433),
        r(9941),
        r(4774),
        r(3663);
      var n,
        i,
        s =
          (((n = s || {}).Installed = "Installed"),
          (n.NotDetected = "NotDetected"),
          (n.Loadable = "Loadable"),
          (n.Unsupported = "Unsupported"),
          n),
        o =
          (((i = o || {}).Mainnet = "mainnet"),
          (i.Testnet = "testnet"),
          (i.Devnet = "devnet"),
          i),
        a = {
          "Aptos mainnet": o.Mainnet,
          "Aptos testnet": o.Testnet,
          "Aptos devnet": o.Devnet,
        },
        u = "Pontem",
        l = class {
          deeplinkProvider(t) {
            return "pontem-wallet://link?url=".concat(t.url);
          }
          async connect() {
            var t;
            try {
              let e = await (null == (t = this.provider)
                ? void 0
                : t.connect());
              if (!e) throw "".concat(u, " Address Info Error");
              return e;
            } catch (t) {
              throw t;
            }
          }
          async account() {
            var t, e, r;
            let n = await (null == (t = this.provider) ? void 0 : t.account());
            if (!n) throw "".concat(u, " Account Error");
            let i = "";
            return (
              (null == (e = this.provider) ? void 0 : e.publicKey) &&
                (i = await (null == (r = this.provider)
                  ? void 0
                  : r.publicKey())),
              { ...n, publicKey: i }
            );
          }
          async disconnect() {
            var t;
            try {
              await (null == (t = this.provider) ? void 0 : t.disconnect());
            } catch (t) {
              throw t;
            }
          }
          async signAndSubmitTransaction(t, e) {
            var r, n, i;
            try {
              if (!(null == (r = this.provider) ? void 0 : r.signAndSubmit))
                throw "".concat(u, " Sign and Submit failed");
              let s = await (null == (i = this.provider)
                ? void 0
                : i.signAndSubmit(t, {
                    ...e,
                    max_gas_amount:
                      null == (n = null == e ? void 0 : e.max_gas_amount)
                        ? void 0
                        : n.toString(),
                  }));
              if (!s || !s.success) throw Error("No response");
              if (null == s ? void 0 : s.code)
                throw Error(null == s ? void 0 : s.message);
              return { hash: s.result.hash };
            } catch (t) {
              throw t.message;
            }
          }
          async signMessage(t) {
            var e;
            try {
              "object" != typeof t || t.nonce;
              let r = await (null == (e = this.provider)
                ? void 0
                : e.signMessage(t));
              if (r) return r;
              throw "".concat(u, " Sign Message failed");
            } catch (t) {
              throw t.message;
            }
          }
          async network() {
            var t, e, r;
            try {
              let n = await (null == (t = this.provider)
                ? void 0
                : t.network());
              if (!n) throw "".concat(u, " Network Error");
              if ("object" == typeof n && (null == n ? void 0 : n.name))
                return {
                  name: a[n.name],
                  chainId:
                    null !== (e = null == n ? void 0 : n.chainId) &&
                    void 0 !== e
                      ? e
                      : void 0,
                  api:
                    null !== (r = null == n ? void 0 : n.api) && void 0 !== r
                      ? r
                      : void 0,
                };
              return n;
            } catch (t) {
              throw t;
            }
          }
          async onNetworkChange(t) {
            var e;
            try {
              let r = async (e) => {
                if (null == e ? void 0 : e.name) {
                  var r, n;
                  t({
                    name: a[e.name],
                    chainId:
                      null !== (r = null == e ? void 0 : e.chainId) &&
                      void 0 !== r
                        ? r
                        : void 0,
                    api:
                      null !== (n = null == e ? void 0 : e.api) && void 0 !== n
                        ? n
                        : void 0,
                  });
                }
                (null == e ? void 0 : e.networkName) &&
                  t({ name: e.networkName, chainId: void 0, api: void 0 });
              };
              await (null == (e = this.provider)
                ? void 0
                : e.onNetworkChange(r));
            } catch (t) {
              throw t.message;
            }
          }
          async onAccountChange(t) {
            var e;
            try {
              let r = async (e) => {
                if (null == e ? void 0 : e.publicKey)
                  t({ publicKey: e.publicKey, address: e.address });
                else {
                  let e = await this.connect();
                  t({
                    address: null == e ? void 0 : e.address,
                    publicKey: null == e ? void 0 : e.publicKey,
                  });
                }
              };
              await (null == (e = this.provider)
                ? void 0
                : e.onAccountChange(r));
            } catch (t) {
              throw t.message;
            }
          }
          constructor() {
            (this.name = u),
              (this.url = "https://onelink.to/t3sae5"),
              (this.icon =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDBDOC4wNzMwNCAwIDAgOC4wNzEzOSAwIDE3Ljk5NjNDMCAyNS4xMjk4IDQuMTczMTYgMzEuMzEwOCAxMC4yMDc2IDM0LjIyMDNWMzQuMjM1MUgxMC4yMzcyQzEyLjU4NiAzNS4zNjQ5IDE1LjIyMjggMzYgMTggMzZDMjcuOTI3IDM2IDM2IDI3LjkyODYgMzYgMTguMDAzN0MzNiA4LjA3MTM4IDI3LjkyNyAwIDE4IDBaTTE4IDEuNDc2OTJDMjcuMTA3MSAxLjQ3NjkyIDM0LjUyMjggOC44OTEwOCAzNC41MjI4IDE3Ljk5NjNDMzQuNTIyOCAyMC42MTA1IDMzLjkwOTcgMjMuMDkxNyAzMi44MjQgMjUuMjkyM0MzMC40NDU2IDI0LjE0MDMgMjguMDMwNCAyMy4yODM3IDI1LjU5MjkgMjIuNzAwM1Y4LjkyMDYyQzI1LjU5MjkgOC40NDA2MiAyNS4yMTYyIDguMDU2NjIgMjQuNzQzNSA4LjA1NjYySDIxLjcxNTJIMTQuMDg1NEgxMS4wNTdDMTAuNTkxNyA4LjA1NjYyIDEwLjIwNzYgOC40NDA2MiAxMC4yMDc2IDguOTIwNjJWMjIuNzY2OEM3Ljg0NDA3IDIzLjM1MDIgNS40OTUyOCAyNC4xOTIgMy4xODM0MiAyNS4yOTk3QzIuMDkwMjcgMjMuMDkxNyAxLjQ3NzIzIDIwLjYxNzggMS40NzcyMyAxNy45OTYzQzEuNDc3MjMgOC44OTEwOCA4Ljg5MjkgMS40NzY5MiAxOCAxLjQ3NjkyWk00LjEzNjIzIDI2Ljk2MTJDNi4wOTM1NiAyNS45OTM4IDguMTI0NzQgMjUuMjQ4IDEwLjIxNSAyNC43MzExVjMyLjU1ODhDNy43NDA2NiAzMS4yMzY5IDUuNjUwMzkgMjkuMzAyMiA0LjEzNjIzIDI2Ljk2MTJaTTE0LjA4NTQgMzQuMDQzMVYxNS42MDM3QzE0LjA4NTQgMTMuNDY5NSAxNS44MzU5IDExLjcwNDYgMTcuOTI2MSAxMS43MDQ2QzIwLjAxNjQgMTEuNzA0NiAyMS43MTUyIDEzLjQzMjYgMjEuNzE1MiAxNS41NTk0QzIxLjcxNTIgMTUuNTc0MiAyMS43MDc4IDE1LjU4ODkgMjEuNzA3OCAxNS42MDM3SDIxLjcxNTJWMjIuMDIwOUMxOS45MzUyIDIxLjgxNDIgMTguMTQ3NyAyMS43NDc3IDE2LjM2MDMgMjEuODQzN0wxNC44OTA0IDIzLjk3NzhDMTcuMTgwMSAyMy43ODU4IDE5LjQxMDcgMjMuODAwNiAyMS42MTE4IDI0LjA1MTdDMjEuNjM0IDI0LjA1MTcgMjEuNjQ4NyAyNC4wNTE3IDIxLjY3MDkgMjQuMDU5MUMyMS42ODU3IDI0LjA1OTEgMjEuNzAwNSAyNC4wNTkxIDIxLjcyMjYgMjQuMDY2NUMyMi4xMDY3IDI0LjExMDggMjMuNTAyNyAyNC4yODggMjQuNzgwNSAyNC42MDU1TDIxLjcyMjYgMjUuNjQ2OFYzNC4xMDIyQzIwLjUyNjEgMzQuMzc1NCAxOS4yODUyIDM0LjUzMDUgMTguMDE0OCAzNC41MzA1QzE2LjY0ODMgMzQuNTE1NyAxNS4zNDEgMzQuMzQ1OCAxNC4wODU0IDM0LjA0MzFaTTI1LjU4NTYgMzIuNjYyMlYyNC43NjhDMjcuNjY4NCAyNS4yOTIzIDI5LjcyOTIgMjYuMDYwMyAzMS43OTczIDI3LjA2NDZDMzAuMjQ2MiAyOS40MjAzIDI4LjEwNDIgMzEuMzU1MSAyNS41ODU2IDMyLjY2MjJaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMjIyXzE2NzApIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMjIyXzE2NzAiIHgxPSIxNy45OTk3IiB5MT0iMzYuNzc4OSIgeDI9IjE3Ljk5OTciIHkyPSItNS41MTk3OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMDg1OCIgc3RvcC1jb2xvcj0iIzhEMjlDMSIvPgo8c3RvcCBvZmZzZXQ9IjAuMjM4MyIgc3RvcC1jb2xvcj0iIzk0MkJCQiIvPgo8c3RvcCBvZmZzZXQ9IjAuNDY2NyIgc3RvcC1jb2xvcj0iI0E5MkZBQyIvPgo8c3RvcCBvZmZzZXQ9IjAuNzQxMyIgc3RvcC1jb2xvcj0iI0NBMzc5MyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGMDNGNzciLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"),
              (this.provider = window.pontem);
          }
        };
    },
    3597: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return o;
        },
      });
      var n = r(6761),
        i = r(1678);
      class s extends n.l {
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var t;
            null == (t = this.cleanup) || t.call(this), (this.cleanup = void 0);
          }
        }
        setEventListener(t) {
          var e;
          (this.setup = t),
            null == (e = this.cleanup) || e.call(this),
            (this.cleanup = t((t) => {
              "boolean" == typeof t ? this.setFocused(t) : this.onFocus();
            }));
        }
        setFocused(t) {
          this.focused !== t && ((this.focused = t), this.onFocus());
        }
        onFocus() {
          this.listeners.forEach((t) => {
            let { listener: e } = t;
            e();
          });
        }
        isFocused() {
          return "boolean" == typeof this.focused
            ? this.focused
            : "undefined" == typeof document ||
                [void 0, "visible", "prerender"].includes(
                  document.visibilityState
                );
        }
        constructor() {
          super(),
            (this.setup = (t) => {
              if (!i.sk && window.addEventListener) {
                let e = () => t();
                return (
                  window.addEventListener("visibilitychange", e, !1),
                  window.addEventListener("focus", e, !1),
                  () => {
                    window.removeEventListener("visibilitychange", e),
                      window.removeEventListener("focus", e);
                  }
                );
              }
            });
        }
      }
      let o = new s();
    },
    4284: function (t, e, r) {
      "use strict";
      function n() {
        return {
          onFetch: (t) => {
            t.fetchFn = () => {
              var e, r, n, o, a, u;
              let l;
              let c =
                  null == (e = t.fetchOptions)
                    ? void 0
                    : null == (r = e.meta)
                    ? void 0
                    : r.refetchPage,
                h =
                  null == (n = t.fetchOptions)
                    ? void 0
                    : null == (o = n.meta)
                    ? void 0
                    : o.fetchMore,
                d = null == h ? void 0 : h.pageParam,
                f = (null == h ? void 0 : h.direction) === "forward",
                p = (null == h ? void 0 : h.direction) === "backward",
                y = (null == (a = t.state.data) ? void 0 : a.pages) || [],
                v = (null == (u = t.state.data) ? void 0 : u.pageParams) || [],
                g = v,
                m = !1,
                b = (e) => {
                  Object.defineProperty(e, "signal", {
                    enumerable: !0,
                    get: () => {
                      var e, r;
                      return (
                        null != (e = t.signal) && e.aborted
                          ? (m = !0)
                          : null == (r = t.signal) ||
                            r.addEventListener("abort", () => {
                              m = !0;
                            }),
                        t.signal
                      );
                    },
                  });
                },
                A =
                  t.options.queryFn ||
                  (() =>
                    Promise.reject(
                      "Missing queryFn for queryKey '" +
                        t.options.queryHash +
                        "'"
                    )),
                w = (t, e, r, n) => (
                  (g = n ? [e, ...g] : [...g, e]), n ? [r, ...t] : [...t, r]
                ),
                C = (e, r, n, i) => {
                  if (m) return Promise.reject("Cancelled");
                  if (void 0 === n && !r && e.length) return Promise.resolve(e);
                  let s = {
                    queryKey: t.queryKey,
                    pageParam: n,
                    meta: t.options.meta,
                  };
                  return b(s), Promise.resolve(A(s)).then((t) => w(e, n, t, i));
                };
              if (y.length) {
                if (f) {
                  let e = void 0 !== d,
                    r = e ? d : i(t.options, y);
                  l = C(y, e, r);
                } else if (p) {
                  let e = void 0 !== d,
                    r = e ? d : s(t.options, y);
                  l = C(y, e, r, !0);
                } else {
                  g = [];
                  let e = void 0 === t.options.getNextPageParam;
                  l =
                    !c || !y[0] || c(y[0], 0, y)
                      ? C([], e, v[0])
                      : Promise.resolve(w([], v[0], y[0]));
                  for (let r = 1; r < y.length; r++)
                    l = l.then((n) => {
                      if (!c || !y[r] || c(y[r], r, y)) {
                        let s = e ? v[r] : i(t.options, n);
                        return C(n, e, s);
                      }
                      return Promise.resolve(w(n, v[r], y[r]));
                    });
                }
              } else l = C([]);
              return l.then((t) => ({ pages: t, pageParams: g }));
            };
          },
        };
      }
      function i(t, e) {
        return null == t.getNextPageParam
          ? void 0
          : t.getNextPageParam(e[e.length - 1], e);
      }
      function s(t, e) {
        return null == t.getPreviousPageParam
          ? void 0
          : t.getPreviousPageParam(e[0], e);
      }
      function o(t, e) {
        if (t.getNextPageParam && Array.isArray(e)) {
          let r = i(t, e);
          return null != r && !1 !== r;
        }
      }
      function a(t, e) {
        if (t.getPreviousPageParam && Array.isArray(e)) {
          let r = s(t, e);
          return null != r && !1 !== r;
        }
      }
      r.d(e, {
        Gm: function () {
          return n;
        },
        Qy: function () {
          return o;
        },
        ZF: function () {
          return a;
        },
      });
    },
    5899: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return n;
        },
      });
      let n = console;
    },
    4654: function (t, e, r) {
      "use strict";
      r.d(e, {
        R: function () {
          return u;
        },
        m: function () {
          return a;
        },
      });
      var n = r(5899),
        i = r(9522),
        s = r(3864),
        o = r(4500);
      class a extends s.F {
        setOptions(t) {
          (this.options = { ...this.defaultOptions, ...t }),
            this.updateCacheTime(this.options.cacheTime);
        }
        get meta() {
          return this.options.meta;
        }
        setState(t) {
          this.dispatch({ type: "setState", state: t });
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            this.mutationCache.notify({
              type: "observerAdded",
              mutation: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          (this.observers = this.observers.filter((e) => e !== t)),
            this.scheduleGc(),
            this.mutationCache.notify({
              type: "observerRemoved",
              mutation: this,
              observer: t,
            });
        }
        optionalRemove() {
          this.observers.length ||
            ("loading" === this.state.status
              ? this.scheduleGc()
              : this.mutationCache.remove(this));
        }
        continue() {
          var t, e;
          return null !=
            (t = null == (e = this.retryer) ? void 0 : e.continue())
            ? t
            : this.execute();
        }
        async execute() {
          var t, e, r, n, i, s, a, u, l, c, h, d, f, p, y, v, g, m, b, A;
          let w = "loading" === this.state.status;
          try {
            if (!w) {
              this.dispatch({
                type: "loading",
                variables: this.options.variables,
              }),
                await (null == (l = (c = this.mutationCache.config).onMutate)
                  ? void 0
                  : l.call(c, this.state.variables, this));
              let t = await (null == (h = (d = this.options).onMutate)
                ? void 0
                : h.call(d, this.state.variables));
              t !== this.state.context &&
                this.dispatch({
                  type: "loading",
                  context: t,
                  variables: this.state.variables,
                });
            }
            let f = await (() => {
              var t;
              return (
                (this.retryer = (0, o.Mz)({
                  fn: () =>
                    this.options.mutationFn
                      ? this.options.mutationFn(this.state.variables)
                      : Promise.reject("No mutationFn found"),
                  onFail: (t, e) => {
                    this.dispatch({
                      type: "failed",
                      failureCount: t,
                      error: e,
                    });
                  },
                  onPause: () => {
                    this.dispatch({ type: "pause" });
                  },
                  onContinue: () => {
                    this.dispatch({ type: "continue" });
                  },
                  retry: null != (t = this.options.retry) ? t : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
                })),
                this.retryer.promise
              );
            })();
            return (
              await (null == (t = (e = this.mutationCache.config).onSuccess)
                ? void 0
                : t.call(e, f, this.state.variables, this.state.context, this)),
              await (null == (r = (n = this.options).onSuccess)
                ? void 0
                : r.call(n, f, this.state.variables, this.state.context)),
              await (null == (i = (s = this.mutationCache.config).onSettled)
                ? void 0
                : i.call(
                    s,
                    f,
                    null,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await (null == (a = (u = this.options).onSettled)
                ? void 0
                : a.call(u, f, null, this.state.variables, this.state.context)),
              this.dispatch({ type: "success", data: f }),
              f
            );
          } catch (t) {
            try {
              throw (
                (await (null == (f = (p = this.mutationCache.config).onError)
                  ? void 0
                  : f.call(
                      p,
                      t,
                      this.state.variables,
                      this.state.context,
                      this
                    )),
                await (null == (y = (v = this.options).onError)
                  ? void 0
                  : y.call(v, t, this.state.variables, this.state.context)),
                await (null == (g = (m = this.mutationCache.config).onSettled)
                  ? void 0
                  : g.call(
                      m,
                      void 0,
                      t,
                      this.state.variables,
                      this.state.context,
                      this
                    )),
                await (null == (b = (A = this.options).onSettled)
                  ? void 0
                  : b.call(
                      A,
                      void 0,
                      t,
                      this.state.variables,
                      this.state.context
                    )),
                t)
              );
            } finally {
              this.dispatch({ type: "error", error: t });
            }
          }
        }
        dispatch(t) {
          (this.state = ((e) => {
            switch (t.type) {
              case "failed":
                return {
                  ...e,
                  failureCount: t.failureCount,
                  failureReason: t.error,
                };
              case "pause":
                return { ...e, isPaused: !0 };
              case "continue":
                return { ...e, isPaused: !1 };
              case "loading":
                return {
                  ...e,
                  context: t.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: !(0, o.Kw)(this.options.networkMode),
                  status: "loading",
                  variables: t.variables,
                };
              case "success":
                return {
                  ...e,
                  data: t.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...e,
                  data: void 0,
                  error: t.error,
                  failureCount: e.failureCount + 1,
                  failureReason: t.error,
                  isPaused: !1,
                  status: "error",
                };
              case "setState":
                return { ...e, ...t.state };
            }
          })(this.state)),
            i.V.batch(() => {
              this.observers.forEach((e) => {
                e.onMutationUpdate(t);
              }),
                this.mutationCache.notify({
                  mutation: this,
                  type: "updated",
                  action: t,
                });
            });
        }
        constructor(t) {
          super(),
            (this.defaultOptions = t.defaultOptions),
            (this.mutationId = t.mutationId),
            (this.mutationCache = t.mutationCache),
            (this.logger = t.logger || n._),
            (this.observers = []),
            (this.state = t.state || u()),
            this.setOptions(t.options),
            this.scheduleGc();
        }
      }
      function u() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
        };
      }
    },
    9522: function (t, e, r) {
      "use strict";
      r.d(e, {
        V: function () {
          return i;
        },
      });
      var n = r(1678);
      let i = (function () {
        let t = [],
          e = 0,
          r = (t) => {
            t();
          },
          i = (t) => {
            t();
          },
          s = (i) => {
            e
              ? t.push(i)
              : (0, n.A4)(() => {
                  r(i);
                });
          },
          o = () => {
            let e = t;
            (t = []),
              e.length &&
                (0, n.A4)(() => {
                  i(() => {
                    e.forEach((t) => {
                      r(t);
                    });
                  });
                });
          };
        return {
          batch: (t) => {
            let r;
            e++;
            try {
              r = t();
            } finally {
              --e || o();
            }
            return r;
          },
          batchCalls: (t) =>
            function () {
              for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
                r[n] = arguments[n];
              s(() => {
                t(...r);
              });
            },
          schedule: s,
          setNotifyFunction: (t) => {
            r = t;
          },
          setBatchNotifyFunction: (t) => {
            i = t;
          },
        };
      })();
    },
    1507: function (t, e, r) {
      "use strict";
      r.d(e, {
        N: function () {
          return a;
        },
      });
      var n = r(6761),
        i = r(1678);
      let s = ["online", "offline"];
      class o extends n.l {
        onSubscribe() {
          this.cleanup || this.setEventListener(this.setup);
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var t;
            null == (t = this.cleanup) || t.call(this), (this.cleanup = void 0);
          }
        }
        setEventListener(t) {
          var e;
          (this.setup = t),
            null == (e = this.cleanup) || e.call(this),
            (this.cleanup = t((t) => {
              "boolean" == typeof t ? this.setOnline(t) : this.onOnline();
            }));
        }
        setOnline(t) {
          this.online !== t && ((this.online = t), this.onOnline());
        }
        onOnline() {
          this.listeners.forEach((t) => {
            let { listener: e } = t;
            e();
          });
        }
        isOnline() {
          return "boolean" == typeof this.online
            ? this.online
            : "undefined" == typeof navigator ||
                void 0 === navigator.onLine ||
                navigator.onLine;
        }
        constructor() {
          super(),
            (this.setup = (t) => {
              if (!i.sk && window.addEventListener) {
                let e = () => t();
                return (
                  s.forEach((t) => {
                    window.addEventListener(t, e, !1);
                  }),
                  () => {
                    s.forEach((t) => {
                      window.removeEventListener(t, e);
                    });
                  }
                );
              }
            });
        }
      }
      let a = new o();
    },
    9057: function (t, e, r) {
      "use strict";
      r.d(e, {
        S: function () {
          return v;
        },
      });
      var n = r(1678),
        i = r(5899),
        s = r(9522),
        o = r(4500),
        a = r(3864);
      class u extends a.F {
        get meta() {
          return this.options.meta;
        }
        setOptions(t) {
          (this.options = { ...this.defaultOptions, ...t }),
            this.updateCacheTime(this.options.cacheTime);
        }
        optionalRemove() {
          this.observers.length ||
            "idle" !== this.state.fetchStatus ||
            this.cache.remove(this);
        }
        setData(t, e) {
          let r = (0, n.oE)(this.state.data, t, this.options);
          return (
            this.dispatch({
              data: r,
              type: "success",
              dataUpdatedAt: null == e ? void 0 : e.updatedAt,
              manual: null == e ? void 0 : e.manual,
            }),
            r
          );
        }
        setState(t, e) {
          this.dispatch({ type: "setState", state: t, setStateOptions: e });
        }
        cancel(t) {
          var e;
          let r = this.promise;
          return (
            null == (e = this.retryer) || e.cancel(t),
            r ? r.then(n.ZT).catch(n.ZT) : Promise.resolve()
          );
        }
        destroy() {
          super.destroy(), this.cancel({ silent: !0 });
        }
        reset() {
          this.destroy(), this.setState(this.initialState);
        }
        isActive() {
          return this.observers.some((t) => !1 !== t.options.enabled);
        }
        isDisabled() {
          return this.getObserversCount() > 0 && !this.isActive();
        }
        isStale() {
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            this.observers.some((t) => t.getCurrentResult().isStale)
          );
        }
        isStaleByTime() {
          let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return (
            this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !(0, n.Kp)(this.state.dataUpdatedAt, t)
          );
        }
        onFocus() {
          var t;
          let e = this.observers.find((t) => t.shouldFetchOnWindowFocus());
          e && e.refetch({ cancelRefetch: !1 }),
            null == (t = this.retryer) || t.continue();
        }
        onOnline() {
          var t;
          let e = this.observers.find((t) => t.shouldFetchOnReconnect());
          e && e.refetch({ cancelRefetch: !1 }),
            null == (t = this.retryer) || t.continue();
        }
        addObserver(t) {
          this.observers.includes(t) ||
            (this.observers.push(t),
            this.clearGcTimeout(),
            this.cache.notify({
              type: "observerAdded",
              query: this,
              observer: t,
            }));
        }
        removeObserver(t) {
          this.observers.includes(t) &&
            ((this.observers = this.observers.filter((e) => e !== t)),
            this.observers.length ||
              (this.retryer &&
                (this.abortSignalConsumed
                  ? this.retryer.cancel({ revert: !0 })
                  : this.retryer.cancelRetry()),
              this.scheduleGc()),
            this.cache.notify({
              type: "observerRemoved",
              query: this,
              observer: t,
            }));
        }
        getObserversCount() {
          return this.observers.length;
        }
        invalidate() {
          this.state.isInvalidated || this.dispatch({ type: "invalidate" });
        }
        fetch(t, e) {
          var r, i, s, a;
          if ("idle" !== this.state.fetchStatus) {
            if (this.state.dataUpdatedAt && null != e && e.cancelRefetch)
              this.cancel({ silent: !0 });
            else if (this.promise)
              return (
                null == (s = this.retryer) || s.continueRetry(), this.promise
              );
          }
          if ((t && this.setOptions(t), !this.options.queryFn)) {
            let t = this.observers.find((t) => t.options.queryFn);
            t && this.setOptions(t.options);
          }
          let u = (0, n.G9)(),
            l = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
            c = (t) => {
              Object.defineProperty(t, "signal", {
                enumerable: !0,
                get: () => {
                  if (u) return (this.abortSignalConsumed = !0), u.signal;
                },
              });
            };
          c(l);
          let h = {
            fetchOptions: e,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: () =>
              this.options.queryFn
                ? ((this.abortSignalConsumed = !1), this.options.queryFn(l))
                : Promise.reject(
                    "Missing queryFn for queryKey '" +
                      this.options.queryHash +
                      "'"
                  ),
          };
          c(h),
            null == (r = this.options.behavior) || r.onFetch(h),
            (this.revertState = this.state),
            ("idle" === this.state.fetchStatus ||
              this.state.fetchMeta !==
                (null == (i = h.fetchOptions) ? void 0 : i.meta)) &&
              this.dispatch({
                type: "fetch",
                meta: null == (a = h.fetchOptions) ? void 0 : a.meta,
              });
          let d = (t) => {
            if (
              (((0, o.DV)(t) && t.silent) ||
                this.dispatch({ type: "error", error: t }),
              !(0, o.DV)(t))
            ) {
              var e, r, n, i;
              null == (e = (r = this.cache.config).onError) ||
                e.call(r, t, this),
                null == (n = (i = this.cache.config).onSettled) ||
                  n.call(i, this.state.data, t, this);
            }
            this.isFetchingOptimistic || this.scheduleGc(),
              (this.isFetchingOptimistic = !1);
          };
          return (
            (this.retryer = (0, o.Mz)({
              fn: h.fetchFn,
              abort: null == u ? void 0 : u.abort.bind(u),
              onSuccess: (t) => {
                var e, r, n, i;
                if (void 0 === t) {
                  d(Error(this.queryHash + " data is undefined"));
                  return;
                }
                this.setData(t),
                  null == (e = (r = this.cache.config).onSuccess) ||
                    e.call(r, t, this),
                  null == (n = (i = this.cache.config).onSettled) ||
                    n.call(i, t, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
              },
              onError: d,
              onFail: (t, e) => {
                this.dispatch({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.dispatch({ type: "pause" });
              },
              onContinue: () => {
                this.dispatch({ type: "continue" });
              },
              retry: h.options.retry,
              retryDelay: h.options.retryDelay,
              networkMode: h.options.networkMode,
            })),
            (this.promise = this.retryer.promise),
            this.promise
          );
        }
        dispatch(t) {
          (this.state = ((e) => {
            var r, n;
            switch (t.type) {
              case "failed":
                return {
                  ...e,
                  fetchFailureCount: t.failureCount,
                  fetchFailureReason: t.error,
                };
              case "pause":
                return { ...e, fetchStatus: "paused" };
              case "continue":
                return { ...e, fetchStatus: "fetching" };
              case "fetch":
                return {
                  ...e,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null != (r = t.meta) ? r : null,
                  fetchStatus: (0, o.Kw)(this.options.networkMode)
                    ? "fetching"
                    : "paused",
                  ...(!e.dataUpdatedAt && { error: null, status: "loading" }),
                };
              case "success":
                return {
                  ...e,
                  data: t.data,
                  dataUpdateCount: e.dataUpdateCount + 1,
                  dataUpdatedAt: null != (n = t.dataUpdatedAt) ? n : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                  }),
                };
              case "error":
                let i = t.error;
                if ((0, o.DV)(i) && i.revert && this.revertState)
                  return { ...this.revertState, fetchStatus: "idle" };
                return {
                  ...e,
                  error: i,
                  errorUpdateCount: e.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: e.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
              case "invalidate":
                return { ...e, isInvalidated: !0 };
              case "setState":
                return { ...e, ...t.state };
            }
          })(this.state)),
            s.V.batch(() => {
              this.observers.forEach((e) => {
                e.onQueryUpdate(t);
              }),
                this.cache.notify({ query: this, type: "updated", action: t });
            });
        }
        constructor(t) {
          super(),
            (this.abortSignalConsumed = !1),
            (this.defaultOptions = t.defaultOptions),
            this.setOptions(t.options),
            (this.observers = []),
            (this.cache = t.cache),
            (this.logger = t.logger || i._),
            (this.queryKey = t.queryKey),
            (this.queryHash = t.queryHash),
            (this.initialState =
              t.state ||
              (function (t) {
                let e =
                    "function" == typeof t.initialData
                      ? t.initialData()
                      : t.initialData,
                  r = void 0 !== e,
                  n = r
                    ? "function" == typeof t.initialDataUpdatedAt
                      ? t.initialDataUpdatedAt()
                      : t.initialDataUpdatedAt
                    : 0;
                return {
                  data: e,
                  dataUpdateCount: 0,
                  dataUpdatedAt: r ? (null != n ? n : Date.now()) : 0,
                  error: null,
                  errorUpdateCount: 0,
                  errorUpdatedAt: 0,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: null,
                  isInvalidated: !1,
                  status: r ? "success" : "loading",
                  fetchStatus: "idle",
                };
              })(this.options)),
            (this.state = this.initialState),
            this.scheduleGc();
        }
      }
      var l = r(6761);
      class c extends l.l {
        build(t, e, r) {
          var i;
          let s = e.queryKey,
            o = null != (i = e.queryHash) ? i : (0, n.Rm)(s, e),
            a = this.get(o);
          return (
            a ||
              ((a = new u({
                cache: this,
                logger: t.getLogger(),
                queryKey: s,
                queryHash: o,
                options: t.defaultQueryOptions(e),
                state: r,
                defaultOptions: t.getQueryDefaults(s),
              })),
              this.add(a)),
            a
          );
        }
        add(t) {
          this.queriesMap[t.queryHash] ||
            ((this.queriesMap[t.queryHash] = t),
            this.queries.push(t),
            this.notify({ type: "added", query: t }));
        }
        remove(t) {
          let e = this.queriesMap[t.queryHash];
          e &&
            (t.destroy(),
            (this.queries = this.queries.filter((e) => e !== t)),
            e === t && delete this.queriesMap[t.queryHash],
            this.notify({ type: "removed", query: t }));
        }
        clear() {
          s.V.batch(() => {
            this.queries.forEach((t) => {
              this.remove(t);
            });
          });
        }
        get(t) {
          return this.queriesMap[t];
        }
        getAll() {
          return this.queries;
        }
        find(t, e) {
          let [r] = (0, n.I6)(t, e);
          return (
            void 0 === r.exact && (r.exact = !0),
            this.queries.find((t) => (0, n._x)(r, t))
          );
        }
        findAll(t, e) {
          let [r] = (0, n.I6)(t, e);
          return Object.keys(r).length > 0
            ? this.queries.filter((t) => (0, n._x)(r, t))
            : this.queries;
        }
        notify(t) {
          s.V.batch(() => {
            this.listeners.forEach((e) => {
              let { listener: r } = e;
              r(t);
            });
          });
        }
        onFocus() {
          s.V.batch(() => {
            this.queries.forEach((t) => {
              t.onFocus();
            });
          });
        }
        onOnline() {
          s.V.batch(() => {
            this.queries.forEach((t) => {
              t.onOnline();
            });
          });
        }
        constructor(t) {
          super(),
            (this.config = t || {}),
            (this.queries = []),
            (this.queriesMap = {});
        }
      }
      var h = r(4654);
      class d extends l.l {
        build(t, e, r) {
          let n = new h.m({
            mutationCache: this,
            logger: t.getLogger(),
            mutationId: ++this.mutationId,
            options: t.defaultMutationOptions(e),
            state: r,
            defaultOptions: e.mutationKey
              ? t.getMutationDefaults(e.mutationKey)
              : void 0,
          });
          return this.add(n), n;
        }
        add(t) {
          this.mutations.push(t), this.notify({ type: "added", mutation: t });
        }
        remove(t) {
          (this.mutations = this.mutations.filter((e) => e !== t)),
            this.notify({ type: "removed", mutation: t });
        }
        clear() {
          s.V.batch(() => {
            this.mutations.forEach((t) => {
              this.remove(t);
            });
          });
        }
        getAll() {
          return this.mutations;
        }
        find(t) {
          return (
            void 0 === t.exact && (t.exact = !0),
            this.mutations.find((e) => (0, n.X7)(t, e))
          );
        }
        findAll(t) {
          return this.mutations.filter((e) => (0, n.X7)(t, e));
        }
        notify(t) {
          s.V.batch(() => {
            this.listeners.forEach((e) => {
              let { listener: r } = e;
              r(t);
            });
          });
        }
        resumePausedMutations() {
          var t;
          return (
            (this.resuming = (
              null != (t = this.resuming) ? t : Promise.resolve()
            )
              .then(() => {
                let t = this.mutations.filter((t) => t.state.isPaused);
                return s.V.batch(() =>
                  t.reduce(
                    (t, e) => t.then(() => e.continue().catch(n.ZT)),
                    Promise.resolve()
                  )
                );
              })
              .then(() => {
                this.resuming = void 0;
              })),
            this.resuming
          );
        }
        constructor(t) {
          super(),
            (this.config = t || {}),
            (this.mutations = []),
            (this.mutationId = 0);
        }
      }
      var f = r(3597),
        p = r(1507),
        y = r(4284);
      class v {
        mount() {
          this.mountCount++,
            1 === this.mountCount &&
              ((this.unsubscribeFocus = f.j.subscribe(() => {
                f.j.isFocused() &&
                  (this.resumePausedMutations(), this.queryCache.onFocus());
              })),
              (this.unsubscribeOnline = p.N.subscribe(() => {
                p.N.isOnline() &&
                  (this.resumePausedMutations(), this.queryCache.onOnline());
              })));
        }
        unmount() {
          var t, e;
          this.mountCount--,
            0 === this.mountCount &&
              (null == (t = this.unsubscribeFocus) || t.call(this),
              (this.unsubscribeFocus = void 0),
              null == (e = this.unsubscribeOnline) || e.call(this),
              (this.unsubscribeOnline = void 0));
        }
        isFetching(t, e) {
          let [r] = (0, n.I6)(t, e);
          return (
            (r.fetchStatus = "fetching"), this.queryCache.findAll(r).length
          );
        }
        isMutating(t) {
          return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
        }
        getQueryData(t, e) {
          var r;
          return null == (r = this.queryCache.find(t, e))
            ? void 0
            : r.state.data;
        }
        ensureQueryData(t, e, r) {
          let i = (0, n._v)(t, e, r),
            s = this.getQueryData(i.queryKey);
          return s ? Promise.resolve(s) : this.fetchQuery(i);
        }
        getQueriesData(t) {
          return this.getQueryCache()
            .findAll(t)
            .map((t) => {
              let { queryKey: e, state: r } = t;
              return [e, r.data];
            });
        }
        setQueryData(t, e, r) {
          let i = this.queryCache.find(t),
            s = null == i ? void 0 : i.state.data,
            o = (0, n.SE)(e, s);
          if (void 0 === o) return;
          let a = (0, n._v)(t),
            u = this.defaultQueryOptions(a);
          return this.queryCache
            .build(this, u)
            .setData(o, { ...r, manual: !0 });
        }
        setQueriesData(t, e, r) {
          return s.V.batch(() =>
            this.getQueryCache()
              .findAll(t)
              .map((t) => {
                let { queryKey: n } = t;
                return [n, this.setQueryData(n, e, r)];
              })
          );
        }
        getQueryState(t, e) {
          var r;
          return null == (r = this.queryCache.find(t, e)) ? void 0 : r.state;
        }
        removeQueries(t, e) {
          let [r] = (0, n.I6)(t, e),
            i = this.queryCache;
          s.V.batch(() => {
            i.findAll(r).forEach((t) => {
              i.remove(t);
            });
          });
        }
        resetQueries(t, e, r) {
          let [i, o] = (0, n.I6)(t, e, r),
            a = this.queryCache,
            u = { type: "active", ...i };
          return s.V.batch(
            () => (
              a.findAll(i).forEach((t) => {
                t.reset();
              }),
              this.refetchQueries(u, o)
            )
          );
        }
        cancelQueries(t, e, r) {
          let [i, o = {}] = (0, n.I6)(t, e, r);
          return (
            void 0 === o.revert && (o.revert = !0),
            Promise.all(
              s.V.batch(() =>
                this.queryCache.findAll(i).map((t) => t.cancel(o))
              )
            )
              .then(n.ZT)
              .catch(n.ZT)
          );
        }
        invalidateQueries(t, e, r) {
          let [i, o] = (0, n.I6)(t, e, r);
          return s.V.batch(() => {
            var t, e;
            if (
              (this.queryCache.findAll(i).forEach((t) => {
                t.invalidate();
              }),
              "none" === i.refetchType)
            )
              return Promise.resolve();
            let r = {
              ...i,
              type:
                null != (t = null != (e = i.refetchType) ? e : i.type)
                  ? t
                  : "active",
            };
            return this.refetchQueries(r, o);
          });
        }
        refetchQueries(t, e, r) {
          let [i, o] = (0, n.I6)(t, e, r),
            a = Promise.all(
              s.V.batch(() =>
                this.queryCache
                  .findAll(i)
                  .filter((t) => !t.isDisabled())
                  .map((t) => {
                    var e;
                    return t.fetch(void 0, {
                      ...o,
                      cancelRefetch:
                        null == (e = null == o ? void 0 : o.cancelRefetch) || e,
                      meta: { refetchPage: i.refetchPage },
                    });
                  })
              )
            ).then(n.ZT);
          return (null != o && o.throwOnError) || (a = a.catch(n.ZT)), a;
        }
        fetchQuery(t, e, r) {
          let i = (0, n._v)(t, e, r),
            s = this.defaultQueryOptions(i);
          void 0 === s.retry && (s.retry = !1);
          let o = this.queryCache.build(this, s);
          return o.isStaleByTime(s.staleTime)
            ? o.fetch(s)
            : Promise.resolve(o.state.data);
        }
        prefetchQuery(t, e, r) {
          return this.fetchQuery(t, e, r).then(n.ZT).catch(n.ZT);
        }
        fetchInfiniteQuery(t, e, r) {
          let i = (0, n._v)(t, e, r);
          return (i.behavior = (0, y.Gm)()), this.fetchQuery(i);
        }
        prefetchInfiniteQuery(t, e, r) {
          return this.fetchInfiniteQuery(t, e, r).then(n.ZT).catch(n.ZT);
        }
        resumePausedMutations() {
          return this.mutationCache.resumePausedMutations();
        }
        getQueryCache() {
          return this.queryCache;
        }
        getMutationCache() {
          return this.mutationCache;
        }
        getLogger() {
          return this.logger;
        }
        getDefaultOptions() {
          return this.defaultOptions;
        }
        setDefaultOptions(t) {
          this.defaultOptions = t;
        }
        setQueryDefaults(t, e) {
          let r = this.queryDefaults.find(
            (e) => (0, n.yF)(t) === (0, n.yF)(e.queryKey)
          );
          r
            ? (r.defaultOptions = e)
            : this.queryDefaults.push({ queryKey: t, defaultOptions: e });
        }
        getQueryDefaults(t) {
          if (!t) return;
          let e = this.queryDefaults.find((e) => (0, n.to)(t, e.queryKey));
          return null == e ? void 0 : e.defaultOptions;
        }
        setMutationDefaults(t, e) {
          let r = this.mutationDefaults.find(
            (e) => (0, n.yF)(t) === (0, n.yF)(e.mutationKey)
          );
          r
            ? (r.defaultOptions = e)
            : this.mutationDefaults.push({ mutationKey: t, defaultOptions: e });
        }
        getMutationDefaults(t) {
          if (!t) return;
          let e = this.mutationDefaults.find((e) =>
            (0, n.to)(t, e.mutationKey)
          );
          return null == e ? void 0 : e.defaultOptions;
        }
        defaultQueryOptions(t) {
          if (null != t && t._defaulted) return t;
          let e = {
            ...this.defaultOptions.queries,
            ...this.getQueryDefaults(null == t ? void 0 : t.queryKey),
            ...t,
            _defaulted: !0,
          };
          return (
            !e.queryHash &&
              e.queryKey &&
              (e.queryHash = (0, n.Rm)(e.queryKey, e)),
            void 0 === e.refetchOnReconnect &&
              (e.refetchOnReconnect = "always" !== e.networkMode),
            void 0 === e.useErrorBoundary &&
              (e.useErrorBoundary = !!e.suspense),
            e
          );
        }
        defaultMutationOptions(t) {
          return null != t && t._defaulted
            ? t
            : {
                ...this.defaultOptions.mutations,
                ...this.getMutationDefaults(null == t ? void 0 : t.mutationKey),
                ...t,
                _defaulted: !0,
              };
        }
        clear() {
          this.queryCache.clear(), this.mutationCache.clear();
        }
        constructor(t = {}) {
          (this.queryCache = t.queryCache || new c()),
            (this.mutationCache = t.mutationCache || new d()),
            (this.logger = t.logger || i._),
            (this.defaultOptions = t.defaultOptions || {}),
            (this.queryDefaults = []),
            (this.mutationDefaults = []),
            (this.mountCount = 0);
        }
      }
    },
    3864: function (t, e, r) {
      "use strict";
      r.d(e, {
        F: function () {
          return i;
        },
      });
      var n = r(1678);
      class i {
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            (0, n.PN)(this.cacheTime) &&
              (this.gcTimeout = setTimeout(() => {
                this.optionalRemove();
              }, this.cacheTime));
        }
        updateCacheTime(t) {
          this.cacheTime = Math.max(
            this.cacheTime || 0,
            null != t ? t : n.sk ? 1 / 0 : 3e5
          );
        }
        clearGcTimeout() {
          this.gcTimeout &&
            (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
        }
      }
    },
    4500: function (t, e, r) {
      "use strict";
      r.d(e, {
        DV: function () {
          return l;
        },
        Kw: function () {
          return a;
        },
        Mz: function () {
          return c;
        },
      });
      var n = r(3597),
        i = r(1507),
        s = r(1678);
      function o(t) {
        return Math.min(1e3 * 2 ** t, 3e4);
      }
      function a(t) {
        return (null != t ? t : "online") !== "online" || i.N.isOnline();
      }
      class u {
        constructor(t) {
          (this.revert = null == t ? void 0 : t.revert),
            (this.silent = null == t ? void 0 : t.silent);
        }
      }
      function l(t) {
        return t instanceof u;
      }
      function c(t) {
        let e,
          r,
          l,
          c = !1,
          h = 0,
          d = !1,
          f = new Promise((t, e) => {
            (r = t), (l = e);
          }),
          p = () =>
            !n.j.isFocused() || ("always" !== t.networkMode && !i.N.isOnline()),
          y = (n) => {
            d ||
              ((d = !0),
              null == t.onSuccess || t.onSuccess(n),
              null == e || e(),
              r(n));
          },
          v = (r) => {
            d ||
              ((d = !0),
              null == t.onError || t.onError(r),
              null == e || e(),
              l(r));
          },
          g = () =>
            new Promise((r) => {
              (e = (t) => {
                let e = d || !p();
                return e && r(t), e;
              }),
                null == t.onPause || t.onPause();
            }).then(() => {
              (e = void 0), d || null == t.onContinue || t.onContinue();
            }),
          m = () => {
            let e;
            if (!d) {
              try {
                e = t.fn();
              } catch (t) {
                e = Promise.reject(t);
              }
              Promise.resolve(e)
                .then(y)
                .catch((e) => {
                  var r, n;
                  if (d) return;
                  let i = null != (r = t.retry) ? r : 3,
                    a = null != (n = t.retryDelay) ? n : o,
                    u = "function" == typeof a ? a(h, e) : a,
                    l =
                      !0 === i ||
                      ("number" == typeof i && h < i) ||
                      ("function" == typeof i && i(h, e));
                  if (c || !l) {
                    v(e);
                    return;
                  }
                  h++,
                    null == t.onFail || t.onFail(h, e),
                    (0, s.Gh)(u)
                      .then(() => {
                        if (p()) return g();
                      })
                      .then(() => {
                        c ? v(e) : m();
                      });
                });
            }
          };
        return (
          a(t.networkMode) ? m() : g().then(m),
          {
            promise: f,
            cancel: (e) => {
              d || (v(new u(e)), null == t.abort || t.abort());
            },
            continue: () =>
              (null == e ? void 0 : e()) ? f : Promise.resolve(),
            cancelRetry: () => {
              c = !0;
            },
            continueRetry: () => {
              c = !1;
            },
          }
        );
      }
    },
    6761: function (t, e, r) {
      "use strict";
      r.d(e, {
        l: function () {
          return n;
        },
      });
      class n {
        subscribe(t) {
          let e = { listener: t };
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              this.listeners.delete(e), this.onUnsubscribe();
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
        constructor() {
          (this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this));
        }
      }
    },
    1678: function (t, e, r) {
      "use strict";
      r.d(e, {
        A4: function () {
          return S;
        },
        G9: function () {
          return I;
        },
        Gh: function () {
          return O;
        },
        I6: function () {
          return d;
        },
        Kp: function () {
          return l;
        },
        PN: function () {
          return o;
        },
        Rc: function () {
          return u;
        },
        Rm: function () {
          return y;
        },
        SE: function () {
          return s;
        },
        VS: function () {
          return b;
        },
        X7: function () {
          return p;
        },
        ZT: function () {
          return i;
        },
        _v: function () {
          return c;
        },
        _x: function () {
          return f;
        },
        e5: function () {
          return a;
        },
        lV: function () {
          return h;
        },
        oE: function () {
          return E;
        },
        sk: function () {
          return n;
        },
        to: function () {
          return g;
        },
        yF: function () {
          return v;
        },
      });
      let n = "Deno" in window;
      function i() {}
      function s(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function o(t) {
        return "number" == typeof t && t >= 0 && t !== 1 / 0;
      }
      function a(t, e) {
        return t.filter((t) => !e.includes(t));
      }
      function u(t, e, r) {
        let n = t.slice(0);
        return (n[e] = r), n;
      }
      function l(t, e) {
        return Math.max(t + (e || 0) - Date.now(), 0);
      }
      function c(t, e, r) {
        return M(t)
          ? "function" == typeof e
            ? { ...r, queryKey: t, queryFn: e }
            : { ...e, queryKey: t }
          : t;
      }
      function h(t, e, r) {
        return M(t)
          ? "function" == typeof e
            ? { ...r, mutationKey: t, mutationFn: e }
            : { ...e, mutationKey: t }
          : "function" == typeof t
          ? { ...e, mutationFn: t }
          : { ...t };
      }
      function d(t, e, r) {
        return M(t) ? [{ ...e, queryKey: t }, r] : [t || {}, e];
      }
      function f(t, e) {
        let {
          type: r = "all",
          exact: n,
          fetchStatus: i,
          predicate: s,
          queryKey: o,
          stale: a,
        } = t;
        if (M(o)) {
          if (n) {
            if (e.queryHash !== y(o, e.options)) return !1;
          } else {
            if (!m(e.queryKey, o)) return !1;
          }
        }
        if ("all" !== r) {
          let t = e.isActive();
          if (("active" === r && !t) || ("inactive" === r && t)) return !1;
        }
        return (
          ("boolean" != typeof a || e.isStale() === a) &&
          (void 0 === i || i === e.state.fetchStatus) &&
          (!s || !!s(e))
        );
      }
      function p(t, e) {
        let { exact: r, fetching: n, predicate: i, mutationKey: s } = t;
        if (M(s)) {
          if (!e.options.mutationKey) return !1;
          if (r) {
            if (v(e.options.mutationKey) !== v(s)) return !1;
          } else {
            if (!m(e.options.mutationKey, s)) return !1;
          }
        }
        return (
          ("boolean" != typeof n || ("loading" === e.state.status) === n) &&
          (!i || !!i(e))
        );
      }
      function y(t, e) {
        return ((null == e ? void 0 : e.queryKeyHashFn) || v)(t);
      }
      function v(t) {
        return JSON.stringify(t, (t, e) =>
          w(e)
            ? Object.keys(e)
                .sort()
                .reduce((t, r) => ((t[r] = e[r]), t), {})
            : e
        );
      }
      function g(t, e) {
        return m(t, e);
      }
      function m(t, e) {
        return (
          t === e ||
          (typeof t == typeof e &&
            !!t &&
            !!e &&
            "object" == typeof t &&
            "object" == typeof e &&
            !Object.keys(e).some((r) => !m(t[r], e[r])))
        );
      }
      function b(t, e) {
        if ((t && !e) || (e && !t)) return !1;
        for (let r in t) if (t[r] !== e[r]) return !1;
        return !0;
      }
      function A(t) {
        return Array.isArray(t) && t.length === Object.keys(t).length;
      }
      function w(t) {
        if (!C(t)) return !1;
        let e = t.constructor;
        if (void 0 === e) return !0;
        let r = e.prototype;
        return !!(C(r) && r.hasOwnProperty("isPrototypeOf"));
      }
      function C(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function M(t) {
        return Array.isArray(t);
      }
      function O(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      function S(t) {
        O(0).then(t);
      }
      function I() {
        if ("function" == typeof AbortController) return new AbortController();
      }
      function E(t, e, r) {
        return null != r.isDataEqual && r.isDataEqual(t, e)
          ? t
          : "function" == typeof r.structuralSharing
          ? r.structuralSharing(t, e)
          : !1 !== r.structuralSharing
          ? (function t(e, r) {
              if (e === r) return e;
              let n = A(e) && A(r);
              if (n || (w(e) && w(r))) {
                let i = n ? e.length : Object.keys(e).length,
                  s = n ? r : Object.keys(r),
                  o = s.length,
                  a = n ? [] : {},
                  u = 0;
                for (let i = 0; i < o; i++) {
                  let o = n ? i : s[i];
                  (a[o] = t(e[o], r[o])), a[o] === e[o] && u++;
                }
                return i === o && u === i ? e : a;
              }
              return r;
            })(t, e)
          : e;
      }
    },
    4095: function (t, e, r) {
      "use strict";
      r.d(e, {
        NL: function () {
          return a;
        },
        aH: function () {
          return u;
        },
      });
      var n = r(4090);
      let i = n.createContext(void 0),
        s = n.createContext(!1);
      function o(t, e) {
        return (
          t ||
          (e
            ? (window.ReactQueryClientContext ||
                (window.ReactQueryClientContext = i),
              window.ReactQueryClientContext)
            : i)
        );
      }
      let a = function () {
          let { context: t } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            e = n.useContext(o(t, n.useContext(s)));
          if (!e)
            throw Error(
              "No QueryClient set, use QueryClientProvider to set one"
            );
          return e;
        },
        u = (t) => {
          let {
            client: e,
            children: r,
            context: i,
            contextSharing: a = !1,
          } = t;
          n.useEffect(
            () => (
              e.mount(),
              () => {
                e.unmount();
              }
            ),
            [e]
          );
          let u = o(i, a);
          return n.createElement(
            s.Provider,
            { value: !i && a },
            n.createElement(u.Provider, { value: e }, r)
          );
        };
    },
    8953: function (t, e, r) {
      "use strict";
      r.d(e, {
        BJ: function () {
          return E;
        },
        Bm: function () {
          return D;
        },
        gb: function () {
          return S;
        },
        Pq: function () {
          return P;
        },
      });
      class n extends Error {
        constructor(t) {
          super(t),
            (this.name = "ObservableAbortError"),
            Object.setPrototypeOf(this, n.prototype);
        }
      }
      function i(t) {
        let e = {
          subscribe(e) {
            let r = null,
              n = !1,
              i = !1,
              s = !1;
            function o() {
              if (null === r) {
                s = !0;
                return;
              }
              !i &&
                ((i = !0), "function" == typeof r ? r() : r && r.unsubscribe());
            }
            return (
              (r = t({
                next(t) {
                  var r;
                  n || null === (r = e.next) || void 0 === r || r.call(e, t);
                },
                error(t) {
                  var r;
                  n ||
                    ((n = !0),
                    null === (r = e.error) || void 0 === r || r.call(e, t),
                    o());
                },
                complete() {
                  var t;
                  n ||
                    ((n = !0),
                    null === (t = e.complete) || void 0 === t || t.call(e),
                    o());
                },
              })),
              s && o(),
              { unsubscribe: o }
            );
          },
          pipe() {
            for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
              r[n] = arguments[n];
            return (
              0 === r.length
                ? function (t) {
                    return t;
                  }
                : 1 === r.length
                ? r[0]
                : function (t) {
                    return r.reduce((t, e) => e(t), t);
                  }
            )(e);
          },
        };
        return e;
      }
      var s = r(8080);
      function o(t) {
        return !!t && !Array.isArray(t) && "object" == typeof t;
      }
      class a extends Error {
        constructor() {
          super("Unable to transform response from server");
        }
      }
      function u(t, e) {
        let r;
        try {
          r = (function (t, e) {
            if ("error" in t) {
              let r = e.transformer.deserialize(t.error);
              return { ok: !1, error: { ...t, error: r } };
            }
            return {
              ok: !0,
              result: {
                ...t.result,
                ...((!t.result.type || "data" === t.result.type) && {
                  type: "data",
                  data: e.transformer.deserialize(t.result.data),
                }),
              },
            };
          })(t, e);
        } catch (t) {
          throw new a();
        }
        if (
          (!r.ok &&
            (!o(r.error.error) || "number" != typeof r.error.error.code)) ||
          (r.ok && !o(r.result))
        )
          throw new a();
        return r;
      }
      class l extends Error {
        static from(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t instanceof l ||
            (t instanceof Error && "TRPCClientError" === t.name)
            ? (e.meta && (t.meta = { ...t.meta, ...e.meta }), t)
            : o(t) &&
              o(t.error) &&
              "number" == typeof t.error.code &&
              "string" == typeof t.error.message
            ? new l(t.error.message, { ...e, result: t })
            : t instanceof Error
            ? new l(t.message, { ...e, cause: (0, s.sZ)(t) })
            : new l("Unknown error", { ...e, cause: t });
        }
        constructor(t, e) {
          var r, n;
          let i = null == e ? void 0 : e.cause;
          super(t, { cause: i }),
            (this.meta = null == e ? void 0 : e.meta),
            (this.cause = i),
            (this.shape =
              null == e
                ? void 0
                : null === (r = e.result) || void 0 === r
                ? void 0
                : r.error),
            (this.data =
              null == e
                ? void 0
                : null === (n = e.result) || void 0 === n
                ? void 0
                : n.error.data),
            (this.name = "TRPCClientError"),
            Object.setPrototypeOf(this, l.prototype);
        }
      }
      let c = (t) => "function" == typeof t;
      function h(t) {
        var e;
        return {
          url: t.url.toString().replace(/\/$/, ""),
          fetch: t.fetch,
          AbortController: (e = t.AbortController)
            ? e
            : window.AbortController
            ? window.AbortController
            : "undefined" != typeof globalThis && globalThis.AbortController
            ? globalThis.AbortController
            : null,
        };
      }
      let d = { query: "GET", mutation: "POST" };
      function f(t) {
        return "input" in t
          ? t.runtime.transformer.serialize(t.input)
          : (function (t) {
              let e = {};
              for (let r = 0; r < t.length; r++) {
                let n = t[r];
                e[r] = n;
              }
              return e;
            })(t.inputs.map((e) => t.runtime.transformer.serialize(e)));
      }
      let p = (t) => {
          let e = t.url + "/" + t.path,
            r = [];
          if (("inputs" in t && r.push("batch=1"), "query" === t.type)) {
            let e = f(t);
            void 0 !== e &&
              r.push("input=".concat(encodeURIComponent(JSON.stringify(e))));
          }
          return r.length && (e += "?" + r.join("&")), e;
        },
        y = (t) => {
          if ("query" === t.type) return;
          let e = f(t);
          return void 0 !== e ? JSON.stringify(e) : void 0;
        },
        v = (t) =>
          m({
            ...t,
            contentTypeHeader: "application/json",
            getUrl: p,
            getBody: y,
          });
      async function g(t, e) {
        let r = t.getUrl(t),
          n = t.getBody(t),
          { type: i } = t,
          s = await t.headers();
        /* istanbul ignore if -- @preserve */ if ("subscription" === i)
          throw Error("Subscriptions should use wsLink");
        let o = {
          ...(t.contentTypeHeader
            ? { "content-type": t.contentTypeHeader }
            : {}),
          ...(t.batchModeHeader
            ? { "trpc-batch-mode": t.batchModeHeader }
            : {}),
          ...s,
        };
        return (function (t) {
          if (t) return t;
          if (c(window.fetch)) return window.fetch;
          if ("undefined" != typeof globalThis && c(globalThis.fetch))
            return globalThis.fetch;
          throw Error("No fetch implementation found");
        })(t.fetch)(r, {
          method: d[i],
          signal: null == e ? void 0 : e.signal,
          body: n,
          headers: o,
        });
      }
      function m(t) {
        let e = t.AbortController ? new t.AbortController() : null,
          r = {},
          n = !1;
        return {
          promise: new Promise((i, s) => {
            g(t, e)
              .then((t) => ((r.response = t), (n = !0), t.json()))
              .then((t) => {
                (r.responseJSON = t), i({ json: t, meta: r });
              })
              .catch((t) => {
                (n = !0), s(l.from(t, { meta: r }));
              });
          }),
          cancel: () => {
            n || null == e || e.abort();
          },
        };
      }
      let b = () => {
        throw Error(
          "Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new"
        );
      };
      function A(t) {
        let e = null,
          r = null,
          n = () => {
            clearTimeout(r), (r = null), (e = null);
          };
        function i() {
          let r = (function (e) {
            let r = [[]],
              n = 0;
            for (;;) {
              var i, s;
              let o = e[n];
              if (!o) break;
              let a = r[r.length - 1];
              if (o.aborted) {
                null === (i = o.reject) ||
                  void 0 === i ||
                  i.call(o, Error("Aborted")),
                  n++;
                continue;
              }
              if (t.validate(a.concat(o).map((t) => t.key))) {
                a.push(o), n++;
                continue;
              }
              if (0 === a.length) {
                null === (s = o.reject) ||
                  void 0 === s ||
                  s.call(o, Error("Input is too big for a single dispatch")),
                  n++;
                continue;
              }
              r.push([]);
            }
            return r;
          })(e);
          for (let e of (n(), r)) {
            if (!e.length) continue;
            let r = { items: e, cancel: b };
            for (let t of e) t.batch = r;
            let n = (t, e) => {
                var n;
                let i = r.items[t];
                null === (n = i.resolve) || void 0 === n || n.call(i, e),
                  (i.batch = null),
                  (i.reject = null),
                  (i.resolve = null);
              },
              { promise: i, cancel: s } = t.fetch(
                r.items.map((t) => t.key),
                n
              );
            (r.cancel = s),
              i
                .then((t) => {
                  for (let e = 0; e < t.length; e++) {
                    let r = t[e];
                    n(e, r);
                  }
                  for (let t of r.items) {
                    var e;
                    null === (e = t.reject) ||
                      void 0 === e ||
                      e.call(t, Error("Missing result")),
                      (t.batch = null);
                  }
                })
                .catch((t) => {
                  for (let n of r.items) {
                    var e;
                    null === (e = n.reject) || void 0 === e || e.call(n, t),
                      (n.batch = null);
                  }
                });
          }
        }
        return {
          load: function (t) {
            let n = { aborted: !1, key: t, batch: null, resolve: b, reject: b },
              s = new Promise((t, r) => {
                (n.reject = r), (n.resolve = t), e || (e = []), e.push(n);
              });
            return (
              r || (r = setTimeout(i)),
              {
                promise: s,
                cancel: () => {
                  var t;
                  (n.aborted = !0),
                    (null === (t = n.batch) || void 0 === t
                      ? void 0
                      : t.items.every((t) => t.aborted)) &&
                      (n.batch.cancel(), (n.batch = null));
                },
              }
            );
          },
        };
      }
      function w(t) {
        return function (e) {
          var r;
          let n = h(e),
            s = null !== (r = e.maxURLLength) && void 0 !== r ? r : 1 / 0;
          return (r) => {
            let o = (i) => ({
                validate: (t) => {
                  if (s === 1 / 0) return !0;
                  let e = t.map((t) => t.path).join(","),
                    o = t.map((t) => t.input);
                  return (
                    p({ ...n, runtime: r, type: i, path: e, inputs: o })
                      .length <= s
                  );
                },
                fetch: t({ ...n, runtime: r, type: i, opts: e }),
              }),
              a = A(o("query")),
              c = A(o("mutation")),
              h = { query: a, subscription: A(o("subscription")), mutation: c };
            return (t) => {
              let { op: e } = t;
              return i((t) => {
                let n;
                let { promise: i, cancel: s } = h[e.type].load(e);
                return (
                  i
                    .then((e) => {
                      n = e;
                      let i = u(e.json, r);
                      if (!i.ok) {
                        t.error(l.from(i.error, { meta: e.meta }));
                        return;
                      }
                      t.next({ context: e.meta, result: i.result }),
                        t.complete();
                    })
                    .catch((e) => {
                      t.error(l.from(e, { meta: null == n ? void 0 : n.meta }));
                    }),
                  () => {
                    s();
                  }
                );
              });
            };
          };
        };
      }
      function C(t) {
        return (e) => {
          let r = h(e);
          return (n) => (s) => {
            let { op: o } = s;
            return i((i) => {
              let s;
              let { path: a, input: c, type: h } = o,
                { promise: d, cancel: f } = t.requester({
                  ...r,
                  runtime: n,
                  type: h,
                  path: a,
                  input: c,
                  headers: () =>
                    e.headers
                      ? "function" == typeof e.headers
                        ? e.headers({ op: o })
                        : e.headers
                      : {},
                });
              return (
                d
                  .then((t) => {
                    s = t.meta;
                    let e = u(t.json, n);
                    if (!e.ok) {
                      i.error(l.from(e.error, { meta: s }));
                      return;
                    }
                    i.next({ context: t.meta, result: e.result }), i.complete();
                  })
                  .catch((t) => {
                    i.error(l.from(t, { meta: s }));
                  }),
                () => {
                  f();
                }
              );
            });
          };
        };
      }
      w((t) => (e) => {
        let r = e.map((t) => t.path).join(","),
          n = e.map((t) => t.input),
          { promise: i, cancel: s } = v({
            ...t,
            path: r,
            inputs: n,
            headers: () =>
              t.opts.headers
                ? "function" == typeof t.opts.headers
                  ? t.opts.headers({ opList: e })
                  : t.opts.headers
                : {},
          });
        return {
          promise: i.then((t) =>
            (Array.isArray(t.json) ? t.json : e.map(() => t.json)).map((e) => ({
              meta: t.meta,
              json: e,
            }))
          ),
          cancel: s,
        };
      }),
        C({ requester: v });
      let M = {
          css: {
            query: ["72e3ff", "3fb0d8"],
            mutation: ["c5a3fc", "904dfc"],
            subscription: ["ff49e1", "d83fbe"],
          },
          ansi: {
            regular: {
              query: ["\x1b[30;46m", "\x1b[97;46m"],
              mutation: ["\x1b[30;45m", "\x1b[97;45m"],
              subscription: ["\x1b[30;42m", "\x1b[97;42m"],
            },
            bold: {
              query: ["\x1b[1;30;46m", "\x1b[1;97;46m"],
              mutation: ["\x1b[1;30;45m", "\x1b[1;97;45m"],
              subscription: ["\x1b[1;30;42m", "\x1b[1;97;42m"],
            },
          },
        },
        O = (t) => {
          let { c: e = console, colorMode: r = "css" } = t;
          return (t) => {
            let n = t.input,
              i =
                "undefined" != typeof FormData && n instanceof FormData
                  ? Object.fromEntries(n)
                  : n,
              { parts: s, args: o } = (function (t) {
                let { direction: e, type: r, path: n, id: i, input: s } = t,
                  o = [],
                  a = [];
                if ("ansi" === t.colorMode) {
                  let [s, u] = M.ansi.regular[r],
                    [l, c] = M.ansi.bold[r];
                  return (
                    o.push(
                      "up" === e ? s : u,
                      "up" === e ? ">>" : "<<",
                      r,
                      "up" === e ? l : c,
                      "#".concat(i),
                      n,
                      "\x1b[0m"
                    ),
                    "up" === e
                      ? a.push({ input: t.input })
                      : a.push({
                          input: t.input,
                          result:
                            "result" in t.result ? t.result.result : t.result,
                          elapsedMs: t.elapsedMs,
                        }),
                    { parts: o, args: a }
                  );
                }
                let [u, l] = M.css[r],
                  c = "\n    background-color: #"
                    .concat("up" === e ? u : l, "; \n    color: ")
                    .concat(
                      "up" === e ? "black" : "white",
                      ";\n    padding: 2px;\n  "
                    );
                return (
                  o.push(
                    "%c",
                    "up" === e ? ">>" : "<<",
                    r,
                    "#".concat(i),
                    "%c".concat(n, "%c"),
                    "%O"
                  ),
                  a.push(
                    c,
                    "".concat(c, "; font-weight: bold;"),
                    "".concat(c, "; font-weight: normal;")
                  ),
                  "up" === e
                    ? a.push({ input: s, context: t.context })
                    : a.push({
                        input: s,
                        result: t.result,
                        elapsedMs: t.elapsedMs,
                        context: t.context,
                      }),
                  { parts: o, args: a }
                );
              })({ ...t, colorMode: r, input: i });
            e[
              "down" === t.direction &&
              t.result &&
              (t.result instanceof Error || "error" in t.result.result)
                ? "error"
                : "log"
            ].apply(null, [s.join(" ")].concat(o));
          };
        };
      function S() {
        var t;
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { enabled: r = () => !0 } = e,
          n = null !== (t = e.colorMode) && void 0 !== t ? t : "css",
          { logger: s = O({ c: e.console, colorMode: n }) } = e;
        return () => (t) => {
          let { op: e, next: n } = t;
          return i((t) => {
            var i;
            r({ ...e, direction: "up" }) && s({ ...e, direction: "up" });
            let o = Date.now();
            function a(t) {
              let n = Date.now() - o;
              r({ ...e, direction: "down", result: t }) &&
                s({ ...e, direction: "down", elapsedMs: n, result: t });
            }
            return n(e)
              .pipe(
                ((i = {
                  next(t) {
                    a(t);
                  },
                  error(t) {
                    a(t);
                  },
                }),
                (t) => ({
                  subscribe: (e) =>
                    t.subscribe({
                      next(t) {
                        var r, n;
                        null === (r = i.next) || void 0 === r || r.call(i, t),
                          null === (n = e.next) || void 0 === n || n.call(e, t);
                      },
                      error(t) {
                        var r, n;
                        null === (r = i.error) || void 0 === r || r.call(i, t),
                          null === (n = e.error) ||
                            void 0 === n ||
                            n.call(e, t);
                      },
                      complete() {
                        var t, r;
                        null === (t = i.complete) || void 0 === t || t.call(i),
                          null === (r = e.complete) ||
                            void 0 === r ||
                            r.call(e);
                      },
                    }),
                }))
              )
              .subscribe(t);
          });
        };
      }
      class I {
        $request(t) {
          var e;
          let { type: r, input: n, path: s, context: o = {} } = t;
          return ((e = {
            links: this.links,
            op: {
              id: ++this.requestId,
              type: r,
              path: s,
              input: n,
              context: o,
            },
          }),
          i((t) =>
            (function t() {
              let r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : e.op,
                i = e.links[r];
              if (!i)
                throw Error(
                  "No more links to execute - did you forget to add an ending link?"
                );
              return i({ op: n, next: (e) => t(r + 1, e) });
            })().subscribe(t)
          )).pipe((t) => {
            let e = 0,
              r = null,
              n = [];
            return {
              subscribe: (i) => (
                e++,
                n.push(i),
                r ||
                  (r = t.subscribe({
                    next(t) {
                      for (let r of n) {
                        var e;
                        null === (e = r.next) || void 0 === e || e.call(r, t);
                      }
                    },
                    error(t) {
                      for (let r of n) {
                        var e;
                        null === (e = r.error) || void 0 === e || e.call(r, t);
                      }
                    },
                    complete() {
                      for (let e of n) {
                        var t;
                        null === (t = e.complete) || void 0 === t || t.call(e);
                      }
                    },
                  })),
                {
                  unsubscribe() {
                    e--,
                      (function () {
                        if (0 === e && r) {
                          let t = r;
                          (r = null), t.unsubscribe();
                        }
                      })();
                    let t = n.findIndex((t) => t === i);
                    t > -1 && n.splice(t, 1);
                  },
                }
              ),
            };
          });
        }
        requestAsPromise(t) {
          var e;
          let r;
          let { promise: i, abort: s } =
            ((e = this.$request(t)),
            {
              promise: new Promise((t, i) => {
                let s = !1;
                function o() {
                  s ||
                    ((s = !0),
                    i(new n("This operation was aborted.")),
                    a.unsubscribe());
                }
                let a = e.subscribe({
                  next(e) {
                    (s = !0), t(e), o();
                  },
                  error(t) {
                    (s = !0), i(t), o();
                  },
                  complete() {
                    (s = !0), o();
                  },
                });
                r = o;
              }),
              abort: r,
            });
          return new Promise((e, r) => {
            var n;
            null === (n = t.signal) ||
              void 0 === n ||
              n.addEventListener("abort", s),
              i
                .then((t) => {
                  e(t.result.data);
                })
                .catch((t) => {
                  r(l.from(t));
                });
          });
        }
        query(t, e, r) {
          return this.requestAsPromise({
            type: "query",
            path: t,
            input: e,
            context: null == r ? void 0 : r.context,
            signal: null == r ? void 0 : r.signal,
          });
        }
        mutation(t, e, r) {
          return this.requestAsPromise({
            type: "mutation",
            path: t,
            input: e,
            context: null == r ? void 0 : r.context,
            signal: null == r ? void 0 : r.signal,
          });
        }
        subscription(t, e, r) {
          return this.$request({
            type: "subscription",
            path: t,
            input: e,
            context: null == r ? void 0 : r.context,
          }).subscribe({
            next(t) {
              var e, n, i;
              "started" === t.result.type
                ? null === (e = r.onStarted) || void 0 === e || e.call(r)
                : "stopped" === t.result.type
                ? null === (n = r.onStopped) || void 0 === n || n.call(r)
                : null === (i = r.onData) ||
                  void 0 === i ||
                  i.call(r, t.result.data);
            },
            error(t) {
              var e;
              null === (e = r.onError) || void 0 === e || e.call(r, t);
            },
            complete() {
              var t;
              null === (t = r.onComplete) || void 0 === t || t.call(r);
            },
          });
        }
        constructor(t) {
          this.requestId = 0;
          let e = (() => {
            let e = t.transformer;
            return e
              ? "input" in e
                ? t.transformer
                : { input: e, output: e }
              : {
                  input: { serialize: (t) => t, deserialize: (t) => t },
                  output: { serialize: (t) => t, deserialize: (t) => t },
                };
          })();
          (this.runtime = {
            transformer: {
              serialize: (t) => e.input.serialize(t),
              deserialize: (t) => e.output.deserialize(t),
            },
            combinedTransformer: e,
          }),
            (this.links = t.links.map((t) => t(this.runtime)));
        }
      }
      function E(t) {
        return new I(t);
      }
      let j = { query: "query", mutate: "mutation", subscribe: "subscription" },
        N = (t) => j[t];
      function D(t) {
        return (0, s.yh)((e) =>
          t.hasOwnProperty(e)
            ? t[e]
            : "__untypedClient" === e
            ? t
            : (0, s.IX)((r) => {
                let { path: n, args: i } = r,
                  s = [e, ...n],
                  o = N(s.pop()),
                  a = s.join(".");
                return t[o](a, ...i);
              })
        );
      }
      async function x(t) {
        var e;
        let r = null !== (e = t.parse) && void 0 !== e ? e : JSON.parse;
        await Q(
          t.readableStream,
          (e) => {
            var n;
            if (
              (null === (n = t.signal) || void 0 === n ? void 0 : n.aborted) ||
              !e ||
              "}" === e
            )
              return;
            let i = e.indexOf(":"),
              s = e.substring(2, i - 1),
              o = e.substring(i + 1);
            t.onSingle(Number(s), r(o));
          },
          t.textDecoder
        );
      }
      async function Q(t, e, r) {
        let n = "",
          i = (t) => {
            let i = r.decode(t).split("\n");
            if (1 === i.length) n += i[0];
            else if (i.length > 1) {
              e(n + i[0]);
              for (let t = 1; t < i.length - 1; t++) e(i[t]);
              n = i[i.length - 1];
            }
          };
        "getReader" in t
          ? await T(t, i)
          : await new Promise((e) => {
              t.on("data", i), t.on("end", e);
            }),
          e(n);
      }
      async function T(t, e) {
        let r = t.getReader(),
          n = await r.read();
        for (; !n.done; ) e(n.value), (n = await r.read());
      }
      let R = (t, e) => {
          let r = t.AbortController ? new t.AbortController() : null;
          return {
            cancel: () => (null == r ? void 0 : r.abort()),
            promise: g(
              {
                ...t,
                contentTypeHeader: "application/json",
                batchModeHeader: "stream",
                getUrl: p,
                getBody: y,
              },
              r
            ).then(async (n) => {
              if (!n.body) throw Error("Received response without body");
              let i = { response: n };
              return x({
                readableStream: n.body,
                onSingle: e,
                parse: (t) => ({ json: JSON.parse(t), meta: i }),
                signal: null == r ? void 0 : r.signal,
                textDecoder: t.textDecoder,
              });
            }),
          };
        },
        P = w((t) => {
          let e = (function (t) {
            if (t) return t;
            if (window.TextDecoder) return new window.TextDecoder();
            if ("undefined" != typeof globalThis && globalThis.TextDecoder)
              return new globalThis.TextDecoder();
            throw Error("No TextDecoder implementation found");
          })(t.opts.textDecoder);
          return (r, n) => {
            let i = r.map((t) => t.path).join(","),
              s = r.map((t) => t.input),
              { cancel: o, promise: a } = R(
                {
                  ...t,
                  textDecoder: e,
                  path: i,
                  inputs: s,
                  headers: () =>
                    t.opts.headers
                      ? "function" == typeof t.opts.headers
                        ? t.opts.headers({ opList: r })
                        : t.opts.headers
                      : {},
                },
                (t, e) => {
                  n(t, e);
                }
              );
            return { promise: a.then(() => []), cancel: o };
          };
        }),
        k = (t) => {
          if ("input" in t) {
            if (!(t.input instanceof FormData))
              throw Error("Input is not FormData");
            return t.input;
          }
        };
      C({
        requester: (t) => {
          if ("mutation" !== t.type)
            throw Error("We only handle mutations with formdata");
          return m({
            ...t,
            getUrl: () => "".concat(t.url, "/").concat(t.path),
            getBody: k,
          });
        },
      });
    },
    7480: function (t, e, r) {
      "use strict";
      let n;
      r.d(e, {
        ec: function () {
          return Y;
        },
      });
      var i = r(8953),
        s = r(8080);
      function o(t, e) {
        let [r, n] = Array.isArray(t) ? t : [t],
          i = "string" != typeof r || "" === r ? [] : r.split(".");
        return n || (e && "any" !== e)
          ? [
              i,
              {
                ...(void 0 !== n && { input: n }),
                ...(e && "any" !== e && { type: e }),
              },
            ]
          : i.length
          ? [i]
          : [];
      }
      var a = r(1678),
        u = r(9522),
        l = r(3597),
        c = r(6761),
        h = r(4500);
      class d extends c.l {
        bindMethods() {
          (this.remove = this.remove.bind(this)),
            (this.refetch = this.refetch.bind(this));
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.currentQuery.addObserver(this),
            f(this.currentQuery, this.options) && this.executeFetch(),
            this.updateTimers());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return p(
            this.currentQuery,
            this.options,
            this.options.refetchOnReconnect
          );
        }
        shouldFetchOnWindowFocus() {
          return p(
            this.currentQuery,
            this.options,
            this.options.refetchOnWindowFocus
          );
        }
        destroy() {
          (this.listeners = new Set()),
            this.clearStaleTimeout(),
            this.clearRefetchInterval(),
            this.currentQuery.removeObserver(this);
        }
        setOptions(t, e) {
          let r = this.options,
            n = this.currentQuery;
          if (
            ((this.options = this.client.defaultQueryOptions(t)),
            (0, a.VS)(r, this.options) ||
              this.client
                .getQueryCache()
                .notify({
                  type: "observerOptionsUpdated",
                  query: this.currentQuery,
                  observer: this,
                }),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled)
          )
            throw Error("Expected enabled to be a boolean");
          this.options.queryKey || (this.options.queryKey = r.queryKey),
            this.updateQuery();
          let i = this.hasListeners();
          i && y(this.currentQuery, n, this.options, r) && this.executeFetch(),
            this.updateResult(e),
            i &&
              (this.currentQuery !== n ||
                this.options.enabled !== r.enabled ||
                this.options.staleTime !== r.staleTime) &&
              this.updateStaleTimeout();
          let s = this.computeRefetchInterval();
          i &&
            (this.currentQuery !== n ||
              this.options.enabled !== r.enabled ||
              s !== this.currentRefetchInterval) &&
            this.updateRefetchInterval(s);
        }
        getOptimisticResult(t) {
          let e = this.client.getQueryCache().build(this.client, t),
            r = this.createResult(e, t);
          return (
            t.keepPreviousData ||
              (void 0 !== t.placeholderData
                ? !r.isPlaceholderData
                : (0, a.VS)(this.getCurrentResult(), r)) ||
              ((this.currentResult = r),
              (this.currentResultOptions = this.options),
              (this.currentResultState = this.currentQuery.state)),
            r
          );
        }
        getCurrentResult() {
          return this.currentResult;
        }
        trackResult(t) {
          let e = {};
          return (
            Object.keys(t).forEach((r) => {
              Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: () => (this.trackedProps.add(r), t[r]),
              });
            }),
            e
          );
        }
        getCurrentQuery() {
          return this.currentQuery;
        }
        remove() {
          this.client.getQueryCache().remove(this.currentQuery);
        }
        refetch() {
          let { refetchPage: t, ...e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.fetch({ ...e, meta: { refetchPage: t } });
        }
        fetchOptimistic(t) {
          let e = this.client.defaultQueryOptions(t),
            r = this.client.getQueryCache().build(this.client, e);
          return (
            (r.isFetchingOptimistic = !0),
            r.fetch().then(() => this.createResult(r, e))
          );
        }
        fetch(t) {
          var e;
          return this.executeFetch({
            ...t,
            cancelRefetch: null == (e = t.cancelRefetch) || e,
          }).then(() => (this.updateResult(), this.currentResult));
        }
        executeFetch(t) {
          this.updateQuery();
          let e = this.currentQuery.fetch(this.options, t);
          return (null != t && t.throwOnError) || (e = e.catch(a.ZT)), e;
        }
        updateStaleTimeout() {
          if (
            (this.clearStaleTimeout(),
            a.sk ||
              this.currentResult.isStale ||
              !(0, a.PN)(this.options.staleTime))
          )
            return;
          let t = (0, a.Kp)(
            this.currentResult.dataUpdatedAt,
            this.options.staleTime
          );
          this.staleTimeoutId = setTimeout(() => {
            this.currentResult.isStale || this.updateResult();
          }, t + 1);
        }
        computeRefetchInterval() {
          var t;
          return "function" == typeof this.options.refetchInterval
            ? this.options.refetchInterval(
                this.currentResult.data,
                this.currentQuery
              )
            : null != (t = this.options.refetchInterval) && t;
        }
        updateRefetchInterval(t) {
          this.clearRefetchInterval(),
            (this.currentRefetchInterval = t),
            !a.sk &&
              !1 !== this.options.enabled &&
              (0, a.PN)(this.currentRefetchInterval) &&
              0 !== this.currentRefetchInterval &&
              (this.refetchIntervalId = setInterval(() => {
                (this.options.refetchIntervalInBackground || l.j.isFocused()) &&
                  this.executeFetch();
              }, this.currentRefetchInterval));
        }
        updateTimers() {
          this.updateStaleTimeout(),
            this.updateRefetchInterval(this.computeRefetchInterval());
        }
        clearStaleTimeout() {
          this.staleTimeoutId &&
            (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
        }
        clearRefetchInterval() {
          this.refetchIntervalId &&
            (clearInterval(this.refetchIntervalId),
            (this.refetchIntervalId = void 0));
        }
        createResult(t, e) {
          let r;
          let n = this.currentQuery,
            i = this.options,
            s = this.currentResult,
            o = this.currentResultState,
            u = this.currentResultOptions,
            l = t !== n,
            c = l ? t.state : this.currentQueryInitialState,
            d = l ? this.currentResult : this.previousQueryResult,
            { state: p } = t,
            {
              dataUpdatedAt: g,
              error: m,
              errorUpdatedAt: b,
              fetchStatus: A,
              status: w,
            } = p,
            C = !1,
            M = !1;
          if (e._optimisticResults) {
            let r = this.hasListeners(),
              s = !r && f(t, e),
              o = r && y(t, n, e, i);
            (s || o) &&
              ((A = (0, h.Kw)(t.options.networkMode) ? "fetching" : "paused"),
              g || (w = "loading")),
              "isRestoring" === e._optimisticResults && (A = "idle");
          }
          if (
            e.keepPreviousData &&
            !p.dataUpdatedAt &&
            null != d &&
            d.isSuccess &&
            "error" !== w
          )
            (r = d.data), (g = d.dataUpdatedAt), (w = d.status), (C = !0);
          else if (e.select && void 0 !== p.data) {
            if (
              s &&
              p.data === (null == o ? void 0 : o.data) &&
              e.select === this.selectFn
            )
              r = this.selectResult;
            else
              try {
                (this.selectFn = e.select),
                  (r = e.select(p.data)),
                  (r = (0, a.oE)(null == s ? void 0 : s.data, r, e)),
                  (this.selectResult = r),
                  (this.selectError = null);
              } catch (t) {
                this.selectError = t;
              }
          } else r = p.data;
          if (void 0 !== e.placeholderData && void 0 === r && "loading" === w) {
            let t;
            if (
              null != s &&
              s.isPlaceholderData &&
              e.placeholderData === (null == u ? void 0 : u.placeholderData)
            )
              t = s.data;
            else if (
              ((t =
                "function" == typeof e.placeholderData
                  ? e.placeholderData()
                  : e.placeholderData),
              e.select && void 0 !== t)
            )
              try {
                (t = e.select(t)), (this.selectError = null);
              } catch (t) {
                this.selectError = t;
              }
            void 0 !== t &&
              ((w = "success"),
              (r = (0, a.oE)(null == s ? void 0 : s.data, t, e)),
              (M = !0));
          }
          this.selectError &&
            ((m = this.selectError),
            (r = this.selectResult),
            (b = Date.now()),
            (w = "error"));
          let O = "fetching" === A,
            S = "loading" === w,
            I = "error" === w;
          return {
            status: w,
            fetchStatus: A,
            isLoading: S,
            isSuccess: "success" === w,
            isError: I,
            isInitialLoading: S && O,
            data: r,
            dataUpdatedAt: g,
            error: m,
            errorUpdatedAt: b,
            failureCount: p.fetchFailureCount,
            failureReason: p.fetchFailureReason,
            errorUpdateCount: p.errorUpdateCount,
            isFetched: p.dataUpdateCount > 0 || p.errorUpdateCount > 0,
            isFetchedAfterMount:
              p.dataUpdateCount > c.dataUpdateCount ||
              p.errorUpdateCount > c.errorUpdateCount,
            isFetching: O,
            isRefetching: O && !S,
            isLoadingError: I && 0 === p.dataUpdatedAt,
            isPaused: "paused" === A,
            isPlaceholderData: M,
            isPreviousData: C,
            isRefetchError: I && 0 !== p.dataUpdatedAt,
            isStale: v(t, e),
            refetch: this.refetch,
            remove: this.remove,
          };
        }
        updateResult(t) {
          let e = this.currentResult,
            r = this.createResult(this.currentQuery, this.options);
          if (
            ((this.currentResultState = this.currentQuery.state),
            (this.currentResultOptions = this.options),
            (0, a.VS)(r, e))
          )
            return;
          this.currentResult = r;
          let n = { cache: !0 };
          (null == t ? void 0 : t.listeners) !== !1 &&
            (() => {
              if (!e) return !0;
              let { notifyOnChangeProps: t } = this.options,
                r = "function" == typeof t ? t() : t;
              if ("all" === r || (!r && !this.trackedProps.size)) return !0;
              let n = new Set(null != r ? r : this.trackedProps);
              return (
                this.options.useErrorBoundary && n.add("error"),
                Object.keys(this.currentResult).some(
                  (t) => this.currentResult[t] !== e[t] && n.has(t)
                )
              );
            })() &&
            (n.listeners = !0),
            this.notify({ ...n, ...t });
        }
        updateQuery() {
          let t = this.client.getQueryCache().build(this.client, this.options);
          if (t === this.currentQuery) return;
          let e = this.currentQuery;
          (this.currentQuery = t),
            (this.currentQueryInitialState = t.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (null == e || e.removeObserver(this), t.addObserver(this));
        }
        onQueryUpdate(t) {
          let e = {};
          "success" === t.type
            ? (e.onSuccess = !t.manual)
            : "error" !== t.type || (0, h.DV)(t.error) || (e.onError = !0),
            this.updateResult(e),
            this.hasListeners() && this.updateTimers();
        }
        notify(t) {
          u.V.batch(() => {
            var e, r, n, i, s, o, a, u;
            t.onSuccess
              ? (null == (e = (r = this.options).onSuccess) ||
                  e.call(r, this.currentResult.data),
                null == (n = (i = this.options).onSettled) ||
                  n.call(i, this.currentResult.data, null))
              : t.onError &&
                (null == (s = (o = this.options).onError) ||
                  s.call(o, this.currentResult.error),
                null == (a = (u = this.options).onSettled) ||
                  a.call(u, void 0, this.currentResult.error)),
              t.listeners &&
                this.listeners.forEach((t) => {
                  let { listener: e } = t;
                  e(this.currentResult);
                }),
              t.cache &&
                this.client
                  .getQueryCache()
                  .notify({
                    query: this.currentQuery,
                    type: "observerResultsUpdated",
                  });
          });
        }
        constructor(t, e) {
          super(),
            (this.client = t),
            (this.options = e),
            (this.trackedProps = new Set()),
            (this.selectError = null),
            this.bindMethods(),
            this.setOptions(e);
        }
      }
      function f(t, e) {
        return (
          (!1 !== e.enabled &&
            !t.state.dataUpdatedAt &&
            !("error" === t.state.status && !1 === e.retryOnMount)) ||
          (t.state.dataUpdatedAt > 0 && p(t, e, e.refetchOnMount))
        );
      }
      function p(t, e, r) {
        if (!1 !== e.enabled) {
          let n = "function" == typeof r ? r(t) : r;
          return "always" === n || (!1 !== n && v(t, e));
        }
        return !1;
      }
      function y(t, e, r, n) {
        return (
          !1 !== r.enabled &&
          (t !== e || !1 === n.enabled) &&
          (!r.suspense || "error" !== t.state.status) &&
          v(t, r)
        );
      }
      function v(t, e) {
        return t.isStaleByTime(e.staleTime);
      }
      var g = r(4090);
      let m = r(2999).useSyncExternalStore,
        b = g.createContext(
          ((n = !1),
          {
            clearReset: () => {
              n = !1;
            },
            reset: () => {
              n = !0;
            },
            isReset: () => n,
          })
        ),
        A = () => g.useContext(b);
      var w = r(4095);
      let C = g.createContext(!1),
        M = () => g.useContext(C);
      function O(t, e) {
        return "function" == typeof t ? t(...e) : !!t;
      }
      C.Provider;
      let S = (t, e) => {
          (t.suspense || t.useErrorBoundary) &&
            !e.isReset() &&
            (t.retryOnMount = !1);
        },
        I = (t) => {
          g.useEffect(() => {
            t.clearReset();
          }, [t]);
        },
        E = (t) => {
          let {
            result: e,
            errorResetBoundary: r,
            useErrorBoundary: n,
            query: i,
          } = t;
          return (
            e.isError && !r.isReset() && !e.isFetching && O(n, [e.error, i])
          );
        },
        j = (t) => {
          t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3);
        },
        N = (t, e) => t.isLoading && t.isFetching && !e,
        D = (t, e, r) => (null == t ? void 0 : t.suspense) && N(e, r),
        x = (t, e, r) =>
          e
            .fetchOptimistic(t)
            .then((e) => {
              let { data: r } = e;
              null == t.onSuccess || t.onSuccess(r),
                null == t.onSettled || t.onSettled(r, null);
            })
            .catch((e) => {
              r.clearReset(),
                null == t.onError || t.onError(e),
                null == t.onSettled || t.onSettled(void 0, e);
            });
      function Q(t, e) {
        let r = (0, w.NL)({ context: t.context }),
          n = M(),
          i = A(),
          s = r.defaultQueryOptions(t);
        (s._optimisticResults = n ? "isRestoring" : "optimistic"),
          s.onError && (s.onError = u.V.batchCalls(s.onError)),
          s.onSuccess && (s.onSuccess = u.V.batchCalls(s.onSuccess)),
          s.onSettled && (s.onSettled = u.V.batchCalls(s.onSettled)),
          j(s),
          S(s, i),
          I(i);
        let [o] = g.useState(() => new e(r, s)),
          a = o.getOptimisticResult(s);
        if (
          (m(
            g.useCallback(
              (t) => {
                let e = n ? () => void 0 : o.subscribe(u.V.batchCalls(t));
                return o.updateResult(), e;
              },
              [o, n]
            ),
            () => o.getCurrentResult(),
            () => o.getCurrentResult()
          ),
          g.useEffect(() => {
            o.setOptions(s, { listeners: !1 });
          }, [s, o]),
          D(s, a, n))
        )
          throw x(s, o, i);
        if (
          E({
            result: a,
            errorResetBoundary: i,
            useErrorBoundary: s.useErrorBoundary,
            query: o.getCurrentQuery(),
          })
        )
          throw a.error;
        return s.notifyOnChangeProps ? a : o.trackResult(a);
      }
      var T = r(4654);
      class R extends c.l {
        bindMethods() {
          (this.mutate = this.mutate.bind(this)),
            (this.reset = this.reset.bind(this));
        }
        setOptions(t) {
          var e;
          let r = this.options;
          (this.options = this.client.defaultMutationOptions(t)),
            (0, a.VS)(r, this.options) ||
              this.client
                .getMutationCache()
                .notify({
                  type: "observerOptionsUpdated",
                  mutation: this.currentMutation,
                  observer: this,
                }),
            null == (e = this.currentMutation) || e.setOptions(this.options);
        }
        onUnsubscribe() {
          if (!this.hasListeners()) {
            var t;
            null == (t = this.currentMutation) || t.removeObserver(this);
          }
        }
        onMutationUpdate(t) {
          this.updateResult();
          let e = { listeners: !0 };
          "success" === t.type
            ? (e.onSuccess = !0)
            : "error" === t.type && (e.onError = !0),
            this.notify(e);
        }
        getCurrentResult() {
          return this.currentResult;
        }
        reset() {
          (this.currentMutation = void 0),
            this.updateResult(),
            this.notify({ listeners: !0 });
        }
        mutate(t, e) {
          return (
            (this.mutateOptions = e),
            this.currentMutation && this.currentMutation.removeObserver(this),
            (this.currentMutation = this.client
              .getMutationCache()
              .build(this.client, {
                ...this.options,
                variables: void 0 !== t ? t : this.options.variables,
              })),
            this.currentMutation.addObserver(this),
            this.currentMutation.execute()
          );
        }
        updateResult() {
          let t = this.currentMutation
              ? this.currentMutation.state
              : (0, T.R)(),
            e = {
              ...t,
              isLoading: "loading" === t.status,
              isSuccess: "success" === t.status,
              isError: "error" === t.status,
              isIdle: "idle" === t.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          this.currentResult = e;
        }
        notify(t) {
          u.V.batch(() => {
            if (this.mutateOptions && this.hasListeners()) {
              var e, r, n, i, s, o, a, u;
              t.onSuccess
                ? (null == (e = (r = this.mutateOptions).onSuccess) ||
                    e.call(
                      r,
                      this.currentResult.data,
                      this.currentResult.variables,
                      this.currentResult.context
                    ),
                  null == (n = (i = this.mutateOptions).onSettled) ||
                    n.call(
                      i,
                      this.currentResult.data,
                      null,
                      this.currentResult.variables,
                      this.currentResult.context
                    ))
                : t.onError &&
                  (null == (s = (o = this.mutateOptions).onError) ||
                    s.call(
                      o,
                      this.currentResult.error,
                      this.currentResult.variables,
                      this.currentResult.context
                    ),
                  null == (a = (u = this.mutateOptions).onSettled) ||
                    a.call(
                      u,
                      void 0,
                      this.currentResult.error,
                      this.currentResult.variables,
                      this.currentResult.context
                    ));
            }
            t.listeners &&
              this.listeners.forEach((t) => {
                let { listener: e } = t;
                e(this.currentResult);
              });
          });
        }
        constructor(t, e) {
          super(),
            (this.client = t),
            this.setOptions(e),
            this.bindMethods(),
            this.updateResult();
        }
      }
      function P() {}
      var k = r(4284);
      class q extends d {
        bindMethods() {
          super.bindMethods(),
            (this.fetchNextPage = this.fetchNextPage.bind(this)),
            (this.fetchPreviousPage = this.fetchPreviousPage.bind(this));
        }
        setOptions(t, e) {
          super.setOptions({ ...t, behavior: (0, k.Gm)() }, e);
        }
        getOptimisticResult(t) {
          return (t.behavior = (0, k.Gm)()), super.getOptimisticResult(t);
        }
        fetchNextPage() {
          let { pageParam: t, ...e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.fetch({
            ...e,
            meta: { fetchMore: { direction: "forward", pageParam: t } },
          });
        }
        fetchPreviousPage() {
          let { pageParam: t, ...e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.fetch({
            ...e,
            meta: { fetchMore: { direction: "backward", pageParam: t } },
          });
        }
        createResult(t, e) {
          var r, n, i, s, o, a;
          let { state: u } = t,
            l = super.createResult(t, e),
            { isFetching: c, isRefetching: h } = l,
            d =
              c &&
              (null == (r = u.fetchMeta)
                ? void 0
                : null == (n = r.fetchMore)
                ? void 0
                : n.direction) === "forward",
            f =
              c &&
              (null == (i = u.fetchMeta)
                ? void 0
                : null == (s = i.fetchMore)
                ? void 0
                : s.direction) === "backward";
          return {
            ...l,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: (0, k.Qy)(e, null == (o = u.data) ? void 0 : o.pages),
            hasPreviousPage: (0, k.ZF)(
              e,
              null == (a = u.data) ? void 0 : a.pages
            ),
            isFetchingNextPage: d,
            isFetchingPreviousPage: f,
            isRefetching: h && !d && !f,
          };
        }
        constructor(t, e) {
          super(t, e);
        }
      }
      class z extends c.l {
        onSubscribe() {
          1 === this.listeners.size &&
            this.observers.forEach((t) => {
              t.subscribe((e) => {
                this.onUpdate(t, e);
              });
            });
        }
        onUnsubscribe() {
          this.listeners.size || this.destroy();
        }
        destroy() {
          (this.listeners = new Set()),
            this.observers.forEach((t) => {
              t.destroy();
            });
        }
        setQueries(t, e) {
          (this.queries = t),
            u.V.batch(() => {
              let t = this.observers,
                r = this.findMatchingObservers(this.queries);
              r.forEach((t) =>
                t.observer.setOptions(t.defaultedQueryOptions, e)
              );
              let n = r.map((t) => t.observer),
                i = Object.fromEntries(n.map((t) => [t.options.queryHash, t])),
                s = n.map((t) => t.getCurrentResult()),
                o = n.some((e, r) => e !== t[r]);
              (t.length !== n.length || o) &&
                ((this.observers = n),
                (this.observersMap = i),
                (this.result = s),
                this.hasListeners() &&
                  ((0, a.e5)(t, n).forEach((t) => {
                    t.destroy();
                  }),
                  (0, a.e5)(n, t).forEach((t) => {
                    t.subscribe((e) => {
                      this.onUpdate(t, e);
                    });
                  }),
                  this.notify()));
            });
        }
        getCurrentResult() {
          return this.result;
        }
        getQueries() {
          return this.observers.map((t) => t.getCurrentQuery());
        }
        getObservers() {
          return this.observers;
        }
        getOptimisticResult(t) {
          return this.findMatchingObservers(t).map((t) =>
            t.observer.getOptimisticResult(t.defaultedQueryOptions)
          );
        }
        findMatchingObservers(t) {
          let e = this.observers,
            r = new Map(e.map((t) => [t.options.queryHash, t])),
            n = t.map((t) => this.client.defaultQueryOptions(t)),
            i = n.flatMap((t) => {
              let e = r.get(t.queryHash);
              return null != e
                ? [{ defaultedQueryOptions: t, observer: e }]
                : [];
            }),
            s = new Set(i.map((t) => t.defaultedQueryOptions.queryHash)),
            o = n.filter((t) => !s.has(t.queryHash)),
            a = new Set(i.map((t) => t.observer)),
            u = e.filter((t) => !a.has(t)),
            l = (t) => {
              let e = this.client.defaultQueryOptions(t),
                r = this.observersMap[e.queryHash];
              return null != r ? r : new d(this.client, e);
            },
            c = o.map((t, e) => {
              if (t.keepPreviousData) {
                let r = u[e];
                if (void 0 !== r)
                  return { defaultedQueryOptions: t, observer: r };
              }
              return { defaultedQueryOptions: t, observer: l(t) };
            });
          return i
            .concat(c)
            .sort(
              (t, e) =>
                n.indexOf(t.defaultedQueryOptions) -
                n.indexOf(e.defaultedQueryOptions)
            );
        }
        onUpdate(t, e) {
          let r = this.observers.indexOf(t);
          -1 !== r &&
            ((this.result = (0, a.Rc)(this.result, r, e)), this.notify());
        }
        notify() {
          u.V.batch(() => {
            this.listeners.forEach((t) => {
              let { listener: e } = t;
              e(this.result);
            });
          });
        }
        constructor(t, e) {
          super(),
            (this.client = t),
            (this.queries = []),
            (this.result = []),
            (this.observers = []),
            (this.observersMap = {}),
            e && this.setQueries(e);
        }
      }
      function L(t, e) {
        return t.length ? (void 0 === e ? [t] : [t, e]) : [];
      }
      let U = ["client", "ssrContext", "ssrState", "abortOnUnmount"],
        F = (0, g.createContext)(null);
      function B(t, e) {
        let [r, n] = t;
        return [r, n, null == e ? void 0 : e.trpc];
      }
      function K(t) {
        let { path: e } = t;
        return (0, g.useMemo)(() => ({ path: e }), [e]);
      }
      function Y(t) {
        var e;
        return (
          (e = (function (t) {
            var e, r, n, l, c;
            let h =
                null !==
                  (l =
                    null ===
                      (r =
                        null !== (n = null == t ? void 0 : t.overrides) &&
                        void 0 !== n
                          ? n
                          : null == t
                          ? void 0
                          : t.unstable_overrides) || void 0 === r
                      ? void 0
                      : null === (e = r.useMutation) || void 0 === e
                      ? void 0
                      : e.onSuccess) && void 0 !== l
                  ? l
                  : (t) => t.originalFn(),
              f =
                null !== (c = null == t ? void 0 : t.context) && void 0 !== c
                  ? c
                  : F,
              p = null == t ? void 0 : t.reactQueryContext;
            function y() {
              return g.useContext(f);
            }
            function v(t, e, r) {
              var n;
              let { queryClient: i, ssrState: s } = y();
              return s &&
                "mounted" !== s &&
                (null === (n = i.getQueryCache().find(o(t, e))) || void 0 === n
                  ? void 0
                  : n.state.status) === "error"
                ? { retryOnMount: !1, ...r }
                : r;
            }
            return {
              Provider: (t) => {
                var e;
                let {
                    abortOnUnmount: r = !1,
                    client: n,
                    queryClient: i,
                    ssrContext: s,
                  } = t,
                  [a, u] = (0, g.useState)(
                    null !== (e = t.ssrState) && void 0 !== e && e
                  );
                return (
                  (0, g.useEffect)(() => {
                    u((t) => !!t && "mounted");
                  }, []),
                  g.createElement(
                    f.Provider,
                    {
                      value: {
                        abortOnUnmount: r,
                        queryClient: i,
                        client: n,
                        ssrContext: null != s ? s : null,
                        ssrState: a,
                        fetchQuery: (0, g.useCallback)(
                          (t, e) =>
                            i.fetchQuery({
                              ...e,
                              queryKey: o(t, "query"),
                              queryFn: () => n.query(...B(t, e)),
                            }),
                          [n, i]
                        ),
                        fetchInfiniteQuery: (0, g.useCallback)(
                          (t, e) =>
                            i.fetchInfiniteQuery({
                              ...e,
                              queryKey: o(t, "infinite"),
                              queryFn: (r) => {
                                let { pageParam: i } = r,
                                  [s, o] = t,
                                  a = { ...o, cursor: i };
                                return n.query(...B([s, a], e));
                              },
                            }),
                          [n, i]
                        ),
                        prefetchQuery: (0, g.useCallback)(
                          (t, e) =>
                            i.prefetchQuery({
                              ...e,
                              queryKey: o(t, "query"),
                              queryFn: () => n.query(...B(t, e)),
                            }),
                          [n, i]
                        ),
                        prefetchInfiniteQuery: (0, g.useCallback)(
                          (t, e) =>
                            i.prefetchInfiniteQuery({
                              ...e,
                              queryKey: o(t, "infinite"),
                              queryFn: (r) => {
                                let { pageParam: i } = r,
                                  [s, o] = t,
                                  a = { ...o, cursor: i };
                                return n.query(...B([s, a], e));
                              },
                            }),
                          [n, i]
                        ),
                        ensureQueryData: (0, g.useCallback)(
                          (t, e) =>
                            i.ensureQueryData({
                              ...e,
                              queryKey: o(t, "query"),
                              queryFn: () => n.query(...B(t, e)),
                            }),
                          [n, i]
                        ),
                        invalidateQueries: (0, g.useCallback)(
                          (t, e, r) =>
                            i.invalidateQueries(
                              { ...e, queryKey: o(t, "any") },
                              r
                            ),
                          [i]
                        ),
                        resetQueries: (0, g.useCallback)(
                          function () {
                            for (
                              var t = arguments.length, e = Array(t), r = 0;
                              r < t;
                              r++
                            )
                              e[r] = arguments[r];
                            let [n, s, a] = e;
                            return i.resetQueries(
                              { ...s, queryKey: o(n, "any") },
                              a
                            );
                          },
                          [i]
                        ),
                        refetchQueries: (0, g.useCallback)(
                          function () {
                            for (
                              var t = arguments.length, e = Array(t), r = 0;
                              r < t;
                              r++
                            )
                              e[r] = arguments[r];
                            let [n, s, a] = e;
                            return i.refetchQueries(
                              { ...s, queryKey: o(n, "any") },
                              a
                            );
                          },
                          [i]
                        ),
                        cancelQuery: (0, g.useCallback)(
                          (t) => i.cancelQueries({ queryKey: o(t, "any") }),
                          [i]
                        ),
                        setQueryData: (0, g.useCallback)(
                          function () {
                            for (
                              var t = arguments.length, e = Array(t), r = 0;
                              r < t;
                              r++
                            )
                              e[r] = arguments[r];
                            let [n, ...s] = e;
                            return i.setQueryData(o(n, "query"), ...s);
                          },
                          [i]
                        ),
                        getQueryData: (0, g.useCallback)(
                          function () {
                            for (
                              var t = arguments.length, e = Array(t), r = 0;
                              r < t;
                              r++
                            )
                              e[r] = arguments[r];
                            let [n, ...s] = e;
                            return i.getQueryData(o(n, "query"), ...s);
                          },
                          [i]
                        ),
                        setInfiniteQueryData: (0, g.useCallback)(
                          function () {
                            for (
                              var t = arguments.length, e = Array(t), r = 0;
                              r < t;
                              r++
                            )
                              e[r] = arguments[r];
                            let [n, ...s] = e;
                            return i.setQueryData(o(n, "infinite"), ...s);
                          },
                          [i]
                        ),
                        getInfiniteQueryData: (0, g.useCallback)(
                          function () {
                            for (
                              var t = arguments.length, e = Array(t), r = 0;
                              r < t;
                              r++
                            )
                              e[r] = arguments[r];
                            let [n, ...s] = e;
                            return i.getQueryData(o(n, "infinite"), ...s);
                          },
                          [i]
                        ),
                      },
                    },
                    t.children
                  )
                );
              },
              createClient: (t) => (0, i.BJ)(t),
              useContext: y,
              useUtils: y,
              useQuery: function (e, r) {
                var n, i, s, u;
                let l = y();
                if (!l)
                  throw Error(
                    "Unable to retrieve application context. Did you forget to wrap your App inside `withTRPC` HoC?"
                  );
                let {
                    abortOnUnmount: c,
                    client: h,
                    ssrState: f,
                    queryClient: g,
                    prefetchQuery: m,
                  } = l,
                  b = g.getQueryDefaults(o(e, "query")),
                  A = v(e, "query", { ...b, ...r }),
                  w =
                    null !==
                      (s =
                        null !==
                          (i =
                            null == r
                              ? void 0
                              : null === (n = r.trpc) || void 0 === n
                              ? void 0
                              : n.abortOnUnmount) && void 0 !== i
                          ? i
                          : null == t
                          ? void 0
                          : t.abortOnUnmount) && void 0 !== s
                      ? s
                      : c,
                  C =
                    ((u = {
                      ...A,
                      queryKey: o(e, "query"),
                      queryFn: (t) => {
                        let r = {
                          ...A,
                          trpc: {
                            ...(null == A ? void 0 : A.trpc),
                            ...(w ? { signal: t.signal } : {}),
                          },
                        };
                        return h.query(...B(e, r));
                      },
                      context: p,
                    }),
                    Q((0, a._v)(u, void 0, void 0), d));
                return (C.trpc = K({ path: e[0] })), C;
              },
              useQueries: (t, e) => {
                let {
                  ssrState: r,
                  queryClient: n,
                  prefetchQuery: i,
                  client: a,
                } = y();
                return (function (t) {
                  let { queries: e, context: r } = t,
                    n = (0, w.NL)({ context: r }),
                    i = M(),
                    s = A(),
                    o = g.useMemo(
                      () =>
                        e.map((t) => {
                          let e = n.defaultQueryOptions(t);
                          return (
                            (e._optimisticResults = i
                              ? "isRestoring"
                              : "optimistic"),
                            e
                          );
                        }),
                      [e, n, i]
                    );
                  o.forEach((t) => {
                    j(t), S(t, s);
                  }),
                    I(s);
                  let [a] = g.useState(() => new z(n, o)),
                    l = a.getOptimisticResult(o);
                  m(
                    g.useCallback(
                      (t) =>
                        i ? () => void 0 : a.subscribe(u.V.batchCalls(t)),
                      [a, i]
                    ),
                    () => a.getCurrentResult(),
                    () => a.getCurrentResult()
                  ),
                    g.useEffect(() => {
                      a.setQueries(o, { listeners: !1 });
                    }, [o, a]);
                  let c = l.some((t, e) => D(o[e], t, i))
                    ? l.flatMap((t, e) => {
                        let r = o[e],
                          n = a.getObservers()[e];
                        if (r && n) {
                          if (D(r, t, i)) return x(r, n, s);
                          N(t, i) && x(r, n, s);
                        }
                        return [];
                      })
                    : [];
                  if (c.length > 0) throw Promise.all(c);
                  let h = a.getQueries(),
                    d = l.find((t, e) => {
                      var r, n;
                      return E({
                        result: t,
                        errorResetBoundary: s,
                        useErrorBoundary:
                          null !=
                            (r =
                              null == (n = o[e])
                                ? void 0
                                : n.useErrorBoundary) && r,
                        query: h[e],
                      });
                    });
                  if (null != d && d.error) throw d.error;
                  return l;
                })({
                  queries: t(
                    (0, s.IX)((t) => {
                      let e = t.path.join("."),
                        [r, n] = t.args;
                      return {
                        queryKey: L(e, r),
                        queryFn: () =>
                          a.query(e, r, null == n ? void 0 : n.trpc),
                        ...n,
                      };
                    })
                  ).map((t) => ({ ...t, queryKey: o(t.queryKey, "query") })),
                  context: e,
                });
              },
              useMutation: function (t, e) {
                let { client: r } = y(),
                  n = (0, w.NL)({ context: p }),
                  i = Array.isArray(t) ? t[0] : t,
                  s = n.getMutationDefaults([i.split(".")]),
                  o = (function (t, e, r) {
                    let n = (0, a.lV)(t, void 0, void 0),
                      i = (0, w.NL)({ context: n.context }),
                      [s] = g.useState(() => new R(i, n));
                    g.useEffect(() => {
                      s.setOptions(n);
                    }, [s, n]);
                    let o = m(
                        g.useCallback(
                          (t) => s.subscribe(u.V.batchCalls(t)),
                          [s]
                        ),
                        () => s.getCurrentResult(),
                        () => s.getCurrentResult()
                      ),
                      l = g.useCallback(
                        (t, e) => {
                          s.mutate(t, e).catch(P);
                        },
                        [s]
                      );
                    if (o.error && O(s.options.useErrorBoundary, [o.error]))
                      throw o.error;
                    return { ...o, mutate: l, mutateAsync: o.mutate };
                  })({
                    ...e,
                    mutationKey: [i.split(".")],
                    mutationFn: (t) => r.mutation(...B([i, t], e)),
                    context: p,
                    onSuccess() {
                      for (
                        var t, r, i = arguments.length, o = Array(i), a = 0;
                        a < i;
                        a++
                      )
                        o[a] = arguments[a];
                      return h({
                        originalFn: () => {
                          var t, r, n;
                          return null !==
                            (n =
                              null == e
                                ? void 0
                                : null === (t = e.onSuccess) || void 0 === t
                                ? void 0
                                : t.call(e, ...o)) && void 0 !== n
                            ? n
                            : null == s
                            ? void 0
                            : null === (r = s.onSuccess) || void 0 === r
                            ? void 0
                            : r.call(s, ...o);
                        },
                        queryClient: n,
                        meta:
                          null !==
                            (r =
                              null !== (t = null == e ? void 0 : e.meta) &&
                              void 0 !== t
                                ? t
                                : null == s
                                ? void 0
                                : s.meta) && void 0 !== r
                            ? r
                            : {},
                      });
                    },
                  });
                return (o.trpc = K({ path: i })), o;
              },
              useSubscription:
                /* istanbul ignore next -- @preserve */ function (t, e) {
                  var r;
                  let n =
                      null === (r = null == e ? void 0 : e.enabled) ||
                      void 0 === r ||
                      r,
                    i = (0, a.yF)(t),
                    { client: s } = y(),
                    o = (0, g.useRef)(e);
                  (o.current = e),
                    (0, g.useEffect)(() => {
                      if (!n) return;
                      let [e, r] = t,
                        i = !1,
                        a = s.subscription(e, null != r ? r : void 0, {
                          onStarted: () => {
                            if (!i) {
                              var t, e;
                              null === (t = (e = o.current).onStarted) ||
                                void 0 === t ||
                                t.call(e);
                            }
                          },
                          onData: (t) => {
                            i || o.current.onData(t);
                          },
                          onError: (t) => {
                            if (!i) {
                              var e, r;
                              null === (e = (r = o.current).onError) ||
                                void 0 === e ||
                                e.call(r, t);
                            }
                          },
                        });
                      return () => {
                        (i = !0), a.unsubscribe();
                      };
                    }, [i, n]);
                },
              useDehydratedState: (t, e) =>
                (0, g.useMemo)(
                  () => (e ? t.runtime.transformer.deserialize(e) : e),
                  [e, t]
                ),
              useInfiniteQuery: function (t, e) {
                var r, n, i;
                let [s, u] = t,
                  {
                    client: l,
                    ssrState: c,
                    prefetchInfiniteQuery: h,
                    queryClient: d,
                    abortOnUnmount: f,
                  } = y(),
                  g = d.getQueryDefaults(o(t, "infinite")),
                  m = v(t, "infinite", { ...g, ...e }),
                  b =
                    null !==
                      (n =
                        null == e
                          ? void 0
                          : null === (r = e.trpc) || void 0 === r
                          ? void 0
                          : r.abortOnUnmount) && void 0 !== n
                      ? n
                      : f,
                  A =
                    ((i = {
                      ...m,
                      queryKey: o(t, "infinite"),
                      queryFn: (t) => {
                        var r;
                        let n = {
                            ...m,
                            trpc: {
                              ...(null == m ? void 0 : m.trpc),
                              ...(b ? { signal: t.signal } : {}),
                            },
                          },
                          i = {
                            ...(null != u ? u : {}),
                            cursor:
                              null !== (r = t.pageParam) && void 0 !== r
                                ? r
                                : null == e
                                ? void 0
                                : e.initialCursor,
                          };
                        return l.query(...B([s, i], n));
                      },
                      context: p,
                    }),
                    Q((0, a._v)(i, void 0, void 0), q));
                return (A.trpc = K({ path: s })), A;
              },
            };
          })(t)),
          (0, s.yh)((t) =>
            "useContext" === t || "useUtils" === t
              ? () => {
                  let t = e.useUtils();
                  return (0, g.useMemo)(
                    () =>
                      (0, s.yh)((e) =>
                        "client" === e
                          ? (0, i.Bm)(t.client)
                          : U.includes(e)
                          ? t[e]
                          : (0, s.IX)((r) => {
                              let { path: n, args: i } = r,
                                s = [e, ...n],
                                o = s.pop(),
                                a = s.join("."),
                                {
                                  queryKey: u,
                                  rest: l,
                                  updater: c,
                                } = ((t) => {
                                  if (
                                    ["setData", "setInfiniteData"].includes(t)
                                  ) {
                                    let [t, e, ...r] = i;
                                    return {
                                      queryKey: L(a, t),
                                      updater: e,
                                      rest: r,
                                    };
                                  }
                                  let [e, ...r] = i;
                                  return { queryKey: L(a, e), rest: r };
                                })(o);
                              return {
                                fetch: () => t.fetchQuery(u, ...l),
                                fetchInfinite: () =>
                                  t.fetchInfiniteQuery(u, ...l),
                                prefetch: () => t.prefetchQuery(u, ...l),
                                prefetchInfinite: () =>
                                  t.prefetchInfiniteQuery(u, ...l),
                                ensureData: () => t.ensureQueryData(u, ...l),
                                invalidate: () => t.invalidateQueries(u, ...l),
                                reset: () => t.resetQueries(u, ...l),
                                refetch: () => t.refetchQueries(u, ...l),
                                cancel: () => t.cancelQuery(u, ...l),
                                setData: () => {
                                  t.setQueryData(u, c, ...l);
                                },
                                setInfiniteData: () => {
                                  t.setInfiniteQueryData(u, c, ...l);
                                },
                                getData: () => t.getQueryData(u),
                                getInfiniteData: () =>
                                  t.getInfiniteQueryData(u),
                              }[o]();
                            })
                      ),
                    [t]
                  );
                }
              : e.hasOwnProperty(t)
              ? e[t]
              : (0, s.IX)((r) => {
                  let n = r.args,
                    i = [t, ...r.path],
                    s = i.pop(),
                    a = i.join(".");
                  if ("useMutation" === s) return e[s](a, ...n);
                  let [u, ...l] = n,
                    c = L(a, u);
                  if ("getQueryKey" === s) {
                    var h;
                    return o(
                      c,
                      null !== (h = l[0]) && void 0 !== h ? h : "any"
                    );
                  }
                  if ("_def" === s) return { path: i };
                  if (s.startsWith("useSuspense")) {
                    let t = l[0] || {},
                      r = e[
                        "useSuspenseQuery" === s
                          ? "useQuery"
                          : "useInfiniteQuery"
                      ](c, { ...t, suspense: !0, enabled: !0 });
                    return [r.data, r];
                  }
                  return e[s](c, ...l);
                })
          )
        );
      }
    },
    8080: function (t, e, r) {
      "use strict";
      function n(t) {
        let e = Object.create(null);
        for (let r in t) e[t[r]] = r;
        return e;
      }
      r.d(e, {
        yh: function () {
          return a;
        },
        IX: function () {
          return o;
        },
        sZ: function () {
          return l;
        },
      });
      let i = {
        PARSE_ERROR: -32700,
        BAD_REQUEST: -32600,
        INTERNAL_SERVER_ERROR: -32603,
        NOT_IMPLEMENTED: -32603,
        UNAUTHORIZED: -32001,
        FORBIDDEN: -32003,
        NOT_FOUND: -32004,
        METHOD_NOT_SUPPORTED: -32005,
        TIMEOUT: -32008,
        CONFLICT: -32009,
        PRECONDITION_FAILED: -32012,
        PAYLOAD_TOO_LARGE: -32013,
        UNPROCESSABLE_CONTENT: -32022,
        TOO_MANY_REQUESTS: -32029,
        CLIENT_CLOSED_REQUEST: -32099,
      };
      n(i), n(i);
      let s = () => {},
        o = (t) =>
          (function t(e, r) {
            return new Proxy(s, {
              get(n, i) {
                if ("string" == typeof i && "then" !== i)
                  return t(e, [...r, i]);
              },
              apply(t, n, i) {
                let s = "apply" === r[r.length - 1];
                return e({
                  args: s ? (i.length >= 2 ? i[1] : []) : i,
                  path: s ? r.slice(0, -1) : r,
                });
              },
            });
          })(t, []),
        a = (t) =>
          new Proxy(s, {
            get(e, r) {
              if ("string" == typeof r && "then" !== r) return t(r);
            },
          });
      class u extends Error {}
      function l(t) {
        if (t instanceof Error) return t;
        let e = typeof t;
        if ("undefined" !== e && "function" !== e && null !== t) {
          if ("object" !== e) return Error(String(t));
          if (t && !Array.isArray(t) && "object" == typeof t) {
            let e = new u();
            for (let r in t) e[r] = t[r];
            return e;
          }
        }
      }
    },
    7846: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return p;
        },
      });
      var n = r(8312),
        i = r(8413),
        s = r(3433);
      function o(t, e) {
        let r = t.bcsToBytes(),
          n = new s.Ce.Deserializer(r);
        return e.deserialize(n);
      }
      async function a(t, e) {
        let r = new n.ScN({
          network: (function (t) {
            switch (null == t ? void 0 : t.name.toLowerCase()) {
              case "mainnet":
                return n.ZcK.MAINNET;
              case "testnet":
                return n.ZcK.TESTNET;
              case "devnet":
                return n.ZcK.DEVNET;
              default:
                throw Error("Invalid network name");
            }
          })(e),
        });
        return o(
          await (0, n.yDq)({ ...t, aptosConfig: r }),
          s.Kj.TransactionPayload
        );
      }
      var u = class extends Error {
          constructor(t, e, r) {
            super(r),
              (this.code = t),
              (this.status = e),
              (this.status = e),
              (this.code = t),
              Object.setPrototypeOf(this, u.prototype);
          }
        },
        l = Object.freeze({
          INTERNAL_ERROR: new u(-30001, "Internal Error", "Internal Error"),
          NO_ACCOUNTS: new u(4e3, "No Accounts", "No accounts found"),
          TIME_OUT: new u(
            4002,
            "Time Out",
            "The prompt timed out without a response. This could be because the user did not respond or because a new request was opened."
          ),
          UNAUTHORIZED: new u(
            4100,
            "Unauthorized",
            "The requested method and/or account has not been authorized by the user."
          ),
          UNSUPPORTED: new u(
            4200,
            "Unsupported",
            "The provider does not support the requested method."
          ),
          USER_REJECTION: new u(
            4001,
            "Rejected",
            "The user rejected the request"
          ),
        });
      function c(t) {
        return (
          t instanceof Error &&
          "Cannot read properties of undefined (reading 'map')" === t.message
        );
      }
      function h(t) {
        if ("code" in t) {
          var e, r;
          throw (
            ((e = t.code),
            null !== (r = Object.values(l).find((t) => t.code === e)) &&
            void 0 !== r
              ? r
              : l.INTERNAL_ERROR)
          );
        }
        throw t;
      }
      function d(t) {
        return {
          maxGasAmount: (null == t ? void 0 : t.max_gas_amount)
            ? Number(null == t ? void 0 : t.max_gas_amount)
            : void 0,
          gasUnitPrice: (null == t ? void 0 : t.gas_unit_price)
            ? Number(null == t ? void 0 : t.gas_unit_price)
            : void 0,
          ...t,
        };
      }
      var f = "Petra",
        p = class {
          deeplinkProvider(t) {
            return "https://petra.app/explore?link=".concat(t.url);
          }
          async connect() {
            let t = await this.provider.connect().catch(h);
            if (!t) throw "".concat(f, " Address Info Error");
            return t;
          }
          async account() {
            let t = await this.provider.account().catch(h);
            if (!t) throw "".concat(f, " Account Error");
            return t;
          }
          async disconnect() {
            return this.provider.disconnect().catch(h);
          }
          async signAndSubmitTransaction(t, e) {
            var r;
            if ("data" in t) {
              let e = {
                expirationTimestamp:
                  null == (r = t.options) ? void 0 : r.expireTimestamp,
                sender: t.sender ? n.kxK.from(t.sender).toString() : void 0,
                ...t.options,
              };
              if ((0, i.rf)(t.data.functionArguments)) {
                let r = await this.network(),
                  n = await a(t.data, r);
                return await this.signAndSubmitBCSTransaction(n, e);
              }
              let s = await (function (t) {
                var e;
                if ("bytecode" in t)
                  throw Error("script payload not supported");
                let r =
                  null == (e = t.typeArguments)
                    ? void 0
                    : e.map((t) => (t instanceof n.O$S ? t.toString() : t));
                return {
                  type: "entry_function_payload",
                  function: t.function,
                  type_arguments: r || [],
                  arguments: t.functionArguments,
                };
              })(t.data);
              return await this.signAndSubmitTransaction(s, e);
            }
            return await this.provider
              .signAndSubmitTransaction(t, e ? d(e) : void 0)
              .catch(h);
          }
          async signAndSubmitBCSTransaction(t, e) {
            if (
              !(
                void 0 === e ||
                0 === Object.keys(e).length ||
                Object.values(e).every((t) => void 0 === t)
              )
            )
              try {
                return await this.provider
                  .signAndSubmitTransaction({ payload: t, options: d(e) })
                  .catch(h);
              } catch (t) {
                if (!c(t)) throw t;
                console.warn(
                  "Options are not supported by your current version of Petra and they will be ignored. Please update to Petra >= 1.2.27.\nIgnored options: ",
                  e
                );
              }
            return await this.provider.signAndSubmitTransaction(t).catch(h);
          }
          async signMessage(t) {
            if ("object" != typeof t || !t.nonce)
              throw "".concat(f, " Invalid signMessage Payload");
            return this.provider.signMessage(t).catch(h);
          }
          async signTransaction(t, e) {
            var r;
            if ("rawTransaction" in t) {
              let i;
              let a = null != e && e,
                u = o(t.rawTransaction, s.Kj.RawTransaction),
                l =
                  null == (r = t.secondarySignerAddresses)
                    ? void 0
                    : r.map((t) => o(t, s.Kj.AccountAddress));
              if (a) {
                let t = await this.account(),
                  e = s.Kj.AccountAddress.fromHex(t.address);
                i = new s.Kj.FeePayerRawTransaction(u, null != l ? l : [], e);
              } else if (t.feePayerAddress) {
                let e = o(t.feePayerAddress, s.Kj.AccountAddress);
                i = new s.Kj.FeePayerRawTransaction(u, null != l ? l : [], e);
              } else i = l ? new s.Kj.MultiAgentRawTransaction(u, l) : u;
              try {
                let { accountAuthenticator: t } = await this.provider
                  .signTransaction({ rawTxn: i })
                  .catch(h);
                return (function (t, e) {
                  let r = s.Ce.bcsToBytes(t),
                    i = new n.ZKs(r);
                  return e.deserialize(i);
                })(t, n.LLd);
              } catch (t) {
                if (c(t))
                  throw Error(
                    "Signing an arbitrary raw transaction is not supported by your current version of Petra. Please update to Petra >= 1.2.27."
                  );
                throw t;
              }
            }
            return await this.provider
              .signTransaction(t, e ? d(e) : void 0)
              .catch(h);
          }
          async onNetworkChange(t) {
            var e;
            null == (e = this.provider) || e.onNetworkChange(t);
          }
          async onAccountChange(t) {
            var e;
            null == (e = this.provider) || e.onAccountChange(t);
          }
          async network() {
            let t = await window.petra.getNetwork().catch(h);
            return { name: t.name, chainId: t.chainId, url: t.url };
          }
          constructor() {
            (this.name = f),
              (this.version = "v2"),
              (this.url =
                "https://chrome.google.com/webstore/detail/petra-aptos-wallet/ejjladinnckdgjemekebdpeokbikhfci"),
              (this.icon =
                "data:image/png;base64,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"),
              (this.provider = window.petra);
          }
        };
    },
    5047: function (t, e, r) {
      "use strict";
      r.d(e, {
        ZP: function () {
          return V;
        },
      });
      class n {
        set(t, e) {
          this.keyToValue.set(t, e), this.valueToKey.set(e, t);
        }
        getByKey(t) {
          return this.keyToValue.get(t);
        }
        getByValue(t) {
          return this.valueToKey.get(t);
        }
        clear() {
          this.keyToValue.clear(), this.valueToKey.clear();
        }
        constructor() {
          (this.keyToValue = new Map()), (this.valueToKey = new Map());
        }
      }
      class i {
        register(t, e) {
          this.kv.getByValue(t) ||
            (e || (e = this.generateIdentifier(t)), this.kv.set(e, t));
        }
        clear() {
          this.kv.clear();
        }
        getIdentifier(t) {
          return this.kv.getByValue(t);
        }
        getValue(t) {
          return this.kv.getByKey(t);
        }
        constructor(t) {
          (this.generateIdentifier = t), (this.kv = new n());
        }
      }
      class s extends i {
        register(t, e) {
          "object" == typeof e
            ? (e.allowProps && this.classToAllowedProps.set(t, e.allowProps),
              super.register(t, e.identifier))
            : super.register(t, e);
        }
        getAllowedProps(t) {
          return this.classToAllowedProps.get(t);
        }
        constructor() {
          super((t) => t.name), (this.classToAllowedProps = new Map());
        }
      }
      function o(t, e) {
        Object.entries(t).forEach((t) => {
          let [r, n] = t;
          return e(n, r);
        });
      }
      function a(t, e) {
        return -1 !== t.indexOf(e);
      }
      function u(t, e) {
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          if (e(n)) return n;
        }
      }
      class l {
        register(t) {
          this.transfomers[t.name] = t;
        }
        findApplicable(t) {
          return (function (t, e) {
            let r = (function (t) {
              if ("values" in Object) return Object.values(t);
              let e = [];
              for (let r in t) t.hasOwnProperty(r) && e.push(t[r]);
              return e;
            })(t);
            if ("find" in r) return r.find(e);
            for (let t = 0; t < r.length; t++) {
              let n = r[t];
              if (e(n)) return n;
            }
          })(this.transfomers, (e) => e.isApplicable(t));
        }
        findByName(t) {
          return this.transfomers[t];
        }
        constructor() {
          this.transfomers = {};
        }
      }
      let c = (t) => Object.prototype.toString.call(t).slice(8, -1),
        h = (t) => void 0 === t,
        d = (t) => null === t,
        f = (t) =>
          "object" == typeof t &&
          null !== t &&
          t !== Object.prototype &&
          (null === Object.getPrototypeOf(t) ||
            Object.getPrototypeOf(t) === Object.prototype),
        p = (t) => f(t) && 0 === Object.keys(t).length,
        y = (t) => Array.isArray(t),
        v = (t) => "string" == typeof t,
        g = (t) => "number" == typeof t && !isNaN(t),
        m = (t) => "boolean" == typeof t,
        b = (t) => t instanceof Map,
        A = (t) => t instanceof Set,
        w = (t) => "Symbol" === c(t),
        C = (t) => "number" == typeof t && isNaN(t),
        M = (t) => m(t) || d(t) || h(t) || g(t) || v(t) || w(t),
        O = (t) => t === 1 / 0 || t === -1 / 0,
        S = (t) => t.replace(/\./g, "\\."),
        I = (t) => t.map(String).map(S).join("."),
        E = (t) => {
          let e = [],
            r = "";
          for (let n = 0; n < t.length; n++) {
            let i = t.charAt(n);
            if ("\\" === i && "." === t.charAt(n + 1)) {
              (r += "."), n++;
              continue;
            }
            if ("." === i) {
              e.push(r), (r = "");
              continue;
            }
            r += i;
          }
          let n = r;
          return e.push(n), e;
        };
      function j(t, e, r, n) {
        return { isApplicable: t, annotation: e, transform: r, untransform: n };
      }
      let N = [
        j(
          h,
          "undefined",
          () => null,
          () => void 0
        ),
        j(
          (t) => "bigint" == typeof t,
          "bigint",
          (t) => t.toString(),
          (t) =>
            "undefined" != typeof BigInt
              ? BigInt(t)
              : (console.error("Please add a BigInt polyfill."), t)
        ),
        j(
          (t) => t instanceof Date && !isNaN(t.valueOf()),
          "Date",
          (t) => t.toISOString(),
          (t) => new Date(t)
        ),
        j(
          (t) => t instanceof Error,
          "Error",
          (t, e) => {
            let r = { name: t.name, message: t.message };
            return (
              e.allowedErrorProps.forEach((e) => {
                r[e] = t[e];
              }),
              r
            );
          },
          (t, e) => {
            let r = Error(t.message);
            return (
              (r.name = t.name),
              (r.stack = t.stack),
              e.allowedErrorProps.forEach((e) => {
                r[e] = t[e];
              }),
              r
            );
          }
        ),
        j(
          (t) => t instanceof RegExp,
          "regexp",
          (t) => "" + t,
          (t) =>
            new RegExp(
              t.slice(1, t.lastIndexOf("/")),
              t.slice(t.lastIndexOf("/") + 1)
            )
        ),
        j(
          A,
          "set",
          (t) => [...t.values()],
          (t) => new Set(t)
        ),
        j(
          b,
          "map",
          (t) => [...t.entries()],
          (t) => new Map(t)
        ),
        j(
          (t) => C(t) || O(t),
          "number",
          (t) => (C(t) ? "NaN" : t > 0 ? "Infinity" : "-Infinity"),
          Number
        ),
        j(
          (t) => 0 === t && 1 / t == -1 / 0,
          "number",
          () => "-0",
          Number
        ),
        j(
          (t) => t instanceof URL,
          "URL",
          (t) => t.toString(),
          (t) => new URL(t)
        ),
      ];
      function D(t, e, r, n) {
        return { isApplicable: t, annotation: e, transform: r, untransform: n };
      }
      let x = D(
          (t, e) => !!w(t) && !!e.symbolRegistry.getIdentifier(t),
          (t, e) => ["symbol", e.symbolRegistry.getIdentifier(t)],
          (t) => t.description,
          (t, e, r) => {
            let n = r.symbolRegistry.getValue(e[1]);
            if (!n) throw Error("Trying to deserialize unknown symbol");
            return n;
          }
        ),
        Q = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
          Uint8ClampedArray,
        ].reduce((t, e) => ((t[e.name] = e), t), {}),
        T = D(
          (t) => ArrayBuffer.isView(t) && !(t instanceof DataView),
          (t) => ["typed-array", t.constructor.name],
          (t) => [...t],
          (t, e) => {
            let r = Q[e[1]];
            if (!r) throw Error("Trying to deserialize unknown typed array");
            return new r(t);
          }
        );
      function R(t, e) {
        return (
          null != t &&
          !!t.constructor &&
          !!e.classRegistry.getIdentifier(t.constructor)
        );
      }
      let P = D(
          R,
          (t, e) => ["class", e.classRegistry.getIdentifier(t.constructor)],
          (t, e) => {
            let r = e.classRegistry.getAllowedProps(t.constructor);
            if (!r) return { ...t };
            let n = {};
            return (
              r.forEach((e) => {
                n[e] = t[e];
              }),
              n
            );
          },
          (t, e, r) => {
            let n = r.classRegistry.getValue(e[1]);
            if (!n)
              throw Error(
                "Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"
              );
            return Object.assign(Object.create(n.prototype), t);
          }
        ),
        k = D(
          (t, e) => !!e.customTransformerRegistry.findApplicable(t),
          (t, e) => [
            "custom",
            e.customTransformerRegistry.findApplicable(t).name,
          ],
          (t, e) => e.customTransformerRegistry.findApplicable(t).serialize(t),
          (t, e, r) => {
            let n = r.customTransformerRegistry.findByName(e[1]);
            if (!n) throw Error("Trying to deserialize unknown custom value");
            return n.deserialize(t);
          }
        ),
        q = [P, x, k, T],
        z = (t, e) => {
          let r = u(q, (r) => r.isApplicable(t, e));
          if (r) return { value: r.transform(t, e), type: r.annotation(t, e) };
          let n = u(N, (r) => r.isApplicable(t, e));
          if (n) return { value: n.transform(t, e), type: n.annotation };
        },
        L = {};
      N.forEach((t) => {
        L[t.annotation] = t;
      });
      let U = (t, e, r) => {
          if (y(e))
            switch (e[0]) {
              case "symbol":
                return x.untransform(t, e, r);
              case "class":
                return P.untransform(t, e, r);
              case "custom":
                return k.untransform(t, e, r);
              case "typed-array":
                return T.untransform(t, e, r);
              default:
                throw Error("Unknown transformation: " + e);
            }
          else {
            let n = L[e];
            if (!n) throw Error("Unknown transformation: " + e);
            return n.untransform(t, r);
          }
        },
        F = (t, e) => {
          let r = t.keys();
          for (; e > 0; ) r.next(), e--;
          return r.next().value;
        };
      function B(t) {
        if (a(t, "__proto__"))
          throw Error("__proto__ is not allowed as a property");
        if (a(t, "prototype"))
          throw Error("prototype is not allowed as a property");
        if (a(t, "constructor"))
          throw Error("constructor is not allowed as a property");
      }
      let K = (t, e) => {
          B(e);
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            if (A(t)) t = F(t, +n);
            else if (b(t)) {
              let i = +n,
                s = 0 == +e[++r] ? "key" : "value",
                o = F(t, i);
              switch (s) {
                case "key":
                  t = o;
                  break;
                case "value":
                  t = t.get(o);
              }
            } else t = t[n];
          }
          return t;
        },
        Y = (t, e, r) => {
          if ((B(e), 0 === e.length)) return r(t);
          let n = t;
          for (let t = 0; t < e.length - 1; t++) {
            let r = e[t];
            if (y(n)) n = n[+r];
            else if (f(n)) n = n[r];
            else if (A(n)) n = F(n, +r);
            else if (b(n)) {
              if (t === e.length - 2) break;
              let i = +r,
                s = 0 == +e[++t] ? "key" : "value",
                o = F(n, i);
              switch (s) {
                case "key":
                  n = o;
                  break;
                case "value":
                  n = n.get(o);
              }
            }
          }
          let i = e[e.length - 1];
          if ((y(n) ? (n[+i] = r(n[+i])) : f(n) && (n[i] = r(n[i])), A(n))) {
            let t = F(n, +i),
              e = r(t);
            t !== e && (n.delete(t), n.add(e));
          }
          if (b(n)) {
            let t = F(n, +e[e.length - 2]);
            switch (0 == +i ? "key" : "value") {
              case "key": {
                let e = r(t);
                n.set(e, n.get(t)), e !== t && n.delete(t);
                break;
              }
              case "value":
                n.set(t, r(n.get(t)));
            }
          }
          return t;
        },
        Z = (t, e) => f(t) || y(t) || b(t) || A(t) || R(t, e),
        G = function (t, e, r, n) {
          var i;
          let s =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : [],
            u =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : [],
            l =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : new Map(),
            c = M(t);
          if (!c) {
            !(function (t, e, r) {
              let n = r.get(t);
              n ? n.push(e) : r.set(t, [e]);
            })(t, s, e);
            let r = l.get(t);
            if (r) return n ? { transformedValue: null } : r;
          }
          if (!Z(t, r)) {
            let e = z(t, r),
              n = e
                ? { transformedValue: e.value, annotations: [e.type] }
                : { transformedValue: t };
            return c || l.set(t, n), n;
          }
          if (a(u, t)) return { transformedValue: null };
          let h = z(t, r),
            d =
              null !== (i = null == h ? void 0 : h.value) && void 0 !== i
                ? i
                : t,
            v = y(d) ? [] : {},
            g = {};
          o(d, (i, a) => {
            if ("__proto__" === a || "constructor" === a || "prototype" === a)
              throw Error(
                "Detected property ".concat(
                  a,
                  ". This is a prototype pollution risk, please remove it from your object."
                )
              );
            let c = G(i, e, r, n, [...s, a], [...u, t], l);
            (v[a] = c.transformedValue),
              y(c.annotations)
                ? (g[a] = c.annotations)
                : f(c.annotations) &&
                  o(c.annotations, (t, e) => {
                    g[S(a) + "." + e] = t;
                  });
          });
          let m = p(g)
            ? { transformedValue: v, annotations: h ? [h.type] : void 0 }
            : { transformedValue: v, annotations: h ? [h.type, g] : g };
          return c || l.set(t, m), m;
        };
      function H(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }
      function W(t) {
        return "Array" === H(t);
      }
      class V {
        serialize(t) {
          let e = new Map(),
            r = G(t, e, this, this.dedupe),
            n = { json: r.transformedValue };
          r.annotations && (n.meta = { ...n.meta, values: r.annotations });
          let i = (function (t, e) {
            let r;
            let n = {};
            return (t.forEach((t) => {
              if (t.length <= 1) return;
              e ||
                (t = t
                  .map((t) => t.map(String))
                  .sort((t, e) => t.length - e.length));
              let [i, ...s] = t;
              0 === i.length ? (r = s.map(I)) : (n[I(i)] = s.map(I));
            }),
            r)
              ? p(n)
                ? [r]
                : [r, n]
              : p(n)
              ? void 0
              : n;
          })(e, this.dedupe);
          return i && (n.meta = { ...n.meta, referentialEqualities: i }), n;
        }
        deserialize(t) {
          let { json: e, meta: r } = t,
            n = (function t(e) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              return W(e)
                ? e.map((e) => t(e, r))
                : !(function (t) {
                    if ("Object" !== H(t)) return !1;
                    let e = Object.getPrototypeOf(t);
                    return (
                      !!e && e.constructor === Object && e === Object.prototype
                    );
                  })(e)
                ? e
                : [
                    ...Object.getOwnPropertyNames(e),
                    ...Object.getOwnPropertySymbols(e),
                  ].reduce((n, i) => {
                    if (W(r.props) && !r.props.includes(i)) return n;
                    let s = t(e[i], r);
                    return (
                      !(function (t, e, r, n, i) {
                        let s = {}.propertyIsEnumerable.call(n, e)
                          ? "enumerable"
                          : "nonenumerable";
                        "enumerable" === s && (t[e] = r),
                          i &&
                            "nonenumerable" === s &&
                            Object.defineProperty(t, e, {
                              value: r,
                              enumerable: !1,
                              writable: !0,
                              configurable: !0,
                            });
                      })(n, i, s, e, r.nonenumerable),
                      n
                    );
                  }, {});
            })(e);
          if (null == r ? void 0 : r.values) {
            var i, s, a;
            (i = n),
              (s = r.values),
              (a = this),
              (function t(e, r) {
                let n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : [];
                if (!e) return;
                if (!y(e)) {
                  o(e, (e, i) => t(e, r, [...n, ...E(i)]));
                  return;
                }
                let [i, s] = e;
                s &&
                  o(s, (e, i) => {
                    t(e, r, [...n, ...E(i)]);
                  }),
                  r(i, n);
              })(s, (t, e) => {
                i = Y(i, e, (e) => U(e, t, a));
              }),
              (n = i);
          }
          return (
            (null == r ? void 0 : r.referentialEqualities) &&
              (n = (function (t, e) {
                function r(e, r) {
                  let n = K(t, E(r));
                  e.map(E).forEach((e) => {
                    t = Y(t, e, () => n);
                  });
                }
                if (y(e)) {
                  let [n, i] = e;
                  n.forEach((e) => {
                    t = Y(t, E(e), () => t);
                  }),
                    i && o(i, r);
                } else o(e, r);
                return t;
              })(n, r.referentialEqualities)),
            n
          );
        }
        stringify(t) {
          return JSON.stringify(this.serialize(t));
        }
        parse(t) {
          return this.deserialize(JSON.parse(t));
        }
        registerClass(t, e) {
          this.classRegistry.register(t, e);
        }
        registerSymbol(t, e) {
          this.symbolRegistry.register(t, e);
        }
        registerCustom(t, e) {
          this.customTransformerRegistry.register({ name: e, ...t });
        }
        allowErrorProps() {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          this.allowedErrorProps.push(...e);
        }
        constructor({ dedupe: t = !1 } = {}) {
          (this.classRegistry = new s()),
            (this.symbolRegistry = new i((t) => {
              var e;
              return null !== (e = t.description) && void 0 !== e ? e : "";
            })),
            (this.customTransformerRegistry = new l()),
            (this.allowedErrorProps = []),
            (this.dedupe = t);
        }
      }
      (V.defaultInstance = new V()),
        (V.serialize = V.defaultInstance.serialize.bind(V.defaultInstance)),
        (V.deserialize = V.defaultInstance.deserialize.bind(V.defaultInstance)),
        (V.stringify = V.defaultInstance.stringify.bind(V.defaultInstance)),
        (V.parse = V.defaultInstance.parse.bind(V.defaultInstance)),
        (V.registerClass = V.defaultInstance.registerClass.bind(
          V.defaultInstance
        )),
        (V.registerSymbol = V.defaultInstance.registerSymbol.bind(
          V.defaultInstance
        )),
        (V.registerCustom = V.defaultInstance.registerCustom.bind(
          V.defaultInstance
        )),
        (V.allowErrorProps = V.defaultInstance.allowErrorProps.bind(
          V.defaultInstance
        )),
        V.serialize,
        V.deserialize,
        V.stringify,
        V.parse,
        V.registerClass,
        V.registerCustom,
        V.registerSymbol,
        V.allowErrorProps;
    },
  },
]);
