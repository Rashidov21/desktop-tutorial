!(function (e) {
  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  var t = {};
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: o,
        });
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (n.p = ""),
    n((n.s = 19));
})({
  19: function (e, n, t) {
    e.exports = t(20);
  },
  20: function (e, n) {
    function t(e, n) {
      var t = n;
      return e && (t = [e]).push(n), t;
    }
    var o = new window.notifications();
    document.addEventListener("DOMContentLoaded", function () {
      var e = document.getElementById("notificationDemo");
      e.addEventListener("submit", function (n) {
        n.preventDefault();
        var r = (function (e) {
            var n = e.elements,
              o = {},
              r = 0,
              u = null;
            for (r = 0; r < n.length; r += 1)
              switch ((u = n[r]).type) {
                case "submit":
                  break;
                case "radio":
                  u.checked && (o[u.name] = u.value);
                  break;
                case "checkbox":
                  u.checked && (o[u.name] = t(o[u.name], u.value));
                  break;
                default:
                  o[u.name] = t(o[u.name], u.value);
              }
            return o;
          })(e),
          u = {
            autoHide: "1" === r.demoAutoHide,
            playSound: "1" === r.demoSound,
            style: r.demoStyle,
            position: r.demoPosition,
          };
        o.fire(r.demoText, u);
      });
    });
  },
});
