(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5286: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 396));
    },
    3604: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          Header: function () {
            return y;
          },
          Links: function () {
            return b;
          },
        });
      var a = s(3827),
        l = s(703),
        r = s(8792),
        i = s(2684),
        n = s(4090),
        o = s(2605),
        c = s(3167),
        d = s(1367);
      function x() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, d.m6)((0, c.W)(t));
      }
      let f = (e) => {
        let { shouldScaleBackground: t = !0, ...s } = e;
        return (0, a.jsx)(o.d.Root, { shouldScaleBackground: t, ...s });
      };
      f.displayName = "Drawer";
      let m = o.d.Trigger,
        h = o.d.Portal,
        p = o.d.Close,
        u = n.forwardRef((e, t) => {
          let { className: s, ...l } = e;
          return (0, a.jsx)(o.d.Overlay, {
            ref: t,
            className: x("fixed inset-0 z-50 bg-black/80", s),
            ...l,
          });
        });
      u.displayName = o.d.Overlay.displayName;
      let g = n.forwardRef((e, t) => {
        let { className: s, children: l, ...r } = e;
        return (0, a.jsxs)(h, {
          children: [
            (0, a.jsx)(u, {}),
            (0, a.jsx)(o.d.Content, {
              ref: t,
              className: x(
                "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] bg-background",
                s
              ),
              ...r,
              children: l,
            }),
          ],
        });
      });
      g.displayName = "DrawerContent";
      let j = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: x("grid gap-1.5 p-4 text-center sm:text-left", t),
          ...s,
        });
      };
      (j.displayName = "DrawerHeader"),
        (n.forwardRef((e, t) => {
          let { className: s, ...l } = e;
          return (0, a.jsx)(o.d.Title, {
            ref: t,
            className: x(
              "text-lg font-semibold leading-none tracking-tight",
              s
            ),
            ...l,
          });
        }).displayName = o.d.Title.displayName),
        (n.forwardRef((e, t) => {
          let { className: s, ...l } = e;
          return (0, a.jsx)(o.d.Description, {
            ref: t,
            className: x("text-sm text-muted-foreground", s),
            ...l,
          });
        }).displayName = o.d.Description.displayName);
      var w = s(1709),
        v = s(2840);
      let y = (e) => {
          let { mode: t = "home", animated: s = !0 } = e;
          return (0, a.jsxs)("header", {
            className: "w-full text-white",
            children: [
              (0, a.jsx)("div", {
                className: "".concat(
                  "home" === t ? "absolute top-5 z-[100]" : "h-20",
                  " hidden w-full justify-center py-2 md:flex"
                ),
                children: (0, a.jsx)("div", {
                  className: "flex w-4/5 justify-center",
                  children: s
                    ? (0, a.jsx)(i.E.div, {
                        className:
                          "text-bold flex w-full flex-row items-center justify-between gap-4 font-sundayBest text-xl",
                        transition: { duration: 1, delay: 1 },
                        initial: { scale: 0, opacity: 0 },
                        whileInView: { scale: 1, opacity: 1 },
                        children: (0, a.jsx)(b, { mode: t }),
                      })
                    : (0, a.jsx)("div", {
                        className:
                          "text-bold flex w-full flex-row items-center justify-between gap-4 font-sundayBest text-xl",
                        children: (0, a.jsx)(b, { mode: t }),
                      }),
                }),
              }),
              (0, a.jsx)("div", {
                className: "flex w-full justify-between p-3 md:hidden ".concat(
                  "home" === t ? "absolute top-0" : "h-20"
                ),
                children: (0, a.jsx)(N, {}),
              }),
            ],
          });
        },
        b = (e) => {
          let { mode: t = "home" } = e,
            s = (e, t) =>
              (0, a.jsx)(r.default, {
                href: "".concat(e),
                className: "rounded-md px-3 text-sm hover:scale-105",
                children: t,
              }),
            n = () => (0, a.jsx)("div", { className: "h-4 w-px bg-white" });
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r.default, {
                href: "/",
                children: (0, a.jsx)(i.E.div, {
                  whileHover: { rotateY: [0, 90, 0] },
                  children: (0, a.jsx)("img", {
                    src: "/images/coin.png",
                    alt: "logo",
                    width: 60,
                    height: 60,
                  }),
                }),
              }),
              // (0, a.jsxs)("div", {
              //   className:
              //     "flex flex-row items-center gap-4 rounded-full ".concat(
              //       "home" === t ? "bg-black" : "bg-none",
              //       " px-5 py-2"
              //     ),
              //   children: [
              //     "home" === t &&
              //       (0, a.jsxs)(a.Fragment, {
              //         children: [
              //           // s("#about", "About"),
              //           // (0, a.jsx)(n, {}),
              //           // s("#chewynomics", "Chewynomics"),
              //           // (0, a.jsx)(n, {}),
              //           // s("#howget", "How to Get"),
              //         ],
              //       }),
              //     "other" === t &&
              //       (0, a.jsx)(a.Fragment, { children: s("/", "Home") }),
              //   ],
              // }),
            ],
          });
        },
        N = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(r.default, {
                href: "/",
                children: (0, a.jsx)(l.default, {
                  src: "/images/coin.png",
                  alt: "logo",
                  width: 50,
                  height: 50,
                }),
              }),
              (0, a.jsxs)(f, {
                direction: "top",
                children: [
                  (0, a.jsx)(m, {
                    children: (0, a.jsx)("div", {
                      className:
                        "flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#85C9BC]",
                      children: (0, a.jsx)(w.bqP, { size: 30, color: "white" }),
                    }),
                  }),
                  (0, a.jsxs)(g, {
                    className: "h-full w-full rounded-none bg-black text-white",
                    children: [
                      (0, a.jsxs)(j, {
                        className: "flex justify-between p-3",
                        children: [
                          (0, a.jsx)(i.E.div, {
                            whileHover: { rotateY: [0, 90, 0] },
                            children: (0, a.jsx)(l.default, {
                              src: "/images/coin.png",
                              alt: "logo",
                              width: 50,
                              height: 50,
                            }),
                          }),
                          (0, a.jsx)(p, {
                            children: (0, a.jsx)("button", {
                              className:
                                "flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#85C9BC]",
                              children: (0, a.jsx)(v.IOM, {
                                size: 30,
                                color: "white",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("section", {
                        className: "mt-16 flex flex-col items-center gap-4",
                        children: [
                          // (0, a.jsx)(r.default, {
                          //   href: "/",
                          //   className:
                          //     "rounded-md px-3 font-sundayBest text-2xl hover:scale-105",
                          //   children: "CHEWY",
                          // }),
                          // (0, a.jsx)(r.default, {
                          //   href: "#chewynomics",
                          //   className:
                          //     "rounded-md px-3 font-sundayBest text-xl hover:scale-105",
                          //   children: "Chewynomics",
                          // }),
                          // (0, a.jsx)(r.default, {
                          //   href: "#howget",
                          //   className:
                          //     "rounded-md px-3 font-sundayBest text-xl hover:scale-105",
                          //   children: "How to Get",
                          // }),

                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
    },
    396: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return S;
          },
        });
      var a = s(3827),
        l = s(4090),
        r = s(8993),
        i = s(5364),
        n = s(2684),
        o = s(5274),
        c = s(3696),
        d = s(703);
      let x = [
          { url: "layer_1_blackfill.webp", speed: 0, z: 60, force: 1 },
          { url: "layer_2.webp", speed: 0.4, z: 40, force: 0.5 },
          { url: "layer_3.webp", speed: 0.3, z: 30, force: 0.5 },
          { url: "layer_4.webp", speed: 0.2, z: 20, force: 0.3 },
          { url: "layer_5.webp", speed: 0.25, z: 10, force: 0.3 },
          { url: "layer_6.webp", speed: 0.4, z: 0, force: 0 },
        ],
        f = (e) => {
          let { text: t } = e,
            s = Array.from(t),
            l = {
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: { type: "spring", damping: 12, stiffness: 100 },
              },
              hidden: {
                opacity: 0,
                x: -20,
                y: 10,
                transition: { type: "spring", damping: 12, stiffness: 100 },
              },
            };
          return (0, a.jsx)(n.E.div, {
            variants: {
              hidden: { opacity: 0 },
              visible: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1;
                return {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.04 * e },
                };
              },
            },
            initial: "hidden",
            whileInView: "visible",
            children: s.map((e, t) =>
              (0, a.jsx)(
                n.E.span,
                { variants: l, children: " " === e ? "\xa0" : e },
                t
              )
            ),
          });
        },
        m = () =>
          (0, a.jsxs)("div", {
            className:
              "flex w-full flex-col items-center justify-around gap-8 bg-black font-bellota md:flex-row md:gap-0",
            id: "about",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex w-full max-w-xl flex-col items-start justify-center gap-4 p-4",
                children: [
                  (0, a.jsx)("div", {
                    className: "flex w-full flex-col",
                    children: (0, a.jsx)("h1", {
                      className:
                        "my-4 font-sundayBest text-[2rem] font-extrabold md:text-left md:text-[4rem]",
                      children: (0, a.jsx)(f, { text: "Hello, Chewy" }),
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "max-w-sm text-lg md:max-w-xl md:text-left md:text-xl",
                    children:
                      "Chewy the bull celebrates those who kept chewing and embraced the spirit of resilience in the crypto community.",
                  }),
                  (0, a.jsx)("p", {
                    className:
                      "max-w-sm text-xl font-bold md:max-w-xl md:text-left md:text-2xl",
                    children: "The bull keeps chewing!",
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className:
                  "relative mb-20 flex aspect-square w-3/5 items-center justify-center md:mb-0 md:w-1/2",
                children: (0, a.jsxs)("div", {
                  className:
                    "flex aspect-square w-[31.25rem] items-center justify-center",
                  children: [
                    (0, a.jsx)(n.E.div, {
                      className: "relative z-20 aspect-square w-full",
                      transition: { duration: 1, delay: 0.25 },
                      initial: { rotateY: 0 },
                      whileInView: { rotateY: [0, 90, 0] },
                      whileHover: { rotateY: [0, 90, 0] },
                      children: (0, a.jsx)("img", {
                        src: "/images/coin.png",
                        alt: "Chewy Token",
                        fill: !0,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute left-1/2 top-1/2 aspect-square w-[16rem] -translate-x-1/2 -translate-y-1/2 animate-pulse md:w-[31.25rem]",
                      children: (0, a.jsx)(d.default, {
                        src: "/images/coin/Bling_grouped.svg",
                        alt: "Stars",
                        fill: !0,
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "absolute left-1/2 top-1/2 aspect-square w-[22rem] -translate-x-1/2 -translate-y-1/2 md:w-[43.75rem]",
                      children: (0, a.jsx)("img", {
                        src: "/images/coin/Rings-thin.png",
                        alt: "Rings",
                        fill: !0,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
      var h = s(3604);
      function p() {
        let e = (0, l.useRef)(null),
          { scrollYProgress: t } = (0, r.v)({ target: e }),
          { height: s, width: n } = (function () {
            let [e, t] = (0, l.useState)({ width: 0, height: 0 });
            return (
              (0, l.useEffect)(() => {
                let e = () => {
                  t({ width: window.innerWidth, height: window.innerHeight });
                };
                return (
                  window.addEventListener("resize", e),
                  e(),
                  () => window.removeEventListener("resize", e)
                );
              }, []),
              e
            );
          })(),
          d = (0, l.useRef)([]);
        (0, i.W)(t, "change", () => {
          j();
        }),
          (0, l.useEffect)(() => {
            let e = new o.Z();
            requestAnimationFrame(function t(s) {
              e.raf(s), requestAnimationFrame(t);
            });
          });
        let f = (0, l.useRef)(0),
          p = (0, l.useRef)(0),
          g = (e) => {
            let { clientX: t } = e;
            (p.current = (t / n - 0.5) * 0.06),
              f.current || (f.current = requestAnimationFrame(j));
          },
          j = () => {
            let e = t.get();
            d.current.forEach((t, a) => {
              if (t && x[a]) {
                var l, r, i, o;
                let d =
                    s *
                    (null !==
                      (i =
                        null === (l = x[a]) || void 0 === l
                          ? void 0
                          : l.speed) && void 0 !== i
                      ? i
                      : 0) *
                    e,
                  f =
                    null !==
                      (o =
                        null === (r = x[a]) || void 0 === r
                          ? void 0
                          : r.force) && void 0 !== o
                      ? o
                      : 0;
                c.ZP.set(t, { x: p.current * f * n, y: d });
              }
            }),
              p.current > 0
                ? (f.current = requestAnimationFrame(j))
                : (cancelAnimationFrame(f.current), (f.current = 0));
          };
        return (0, a.jsxs)("div", {
          ref: e,
          className:
            "relative flex flex-col items-center justify-center overflow-hidden text-white",
          onMouseMove: (e) => {
            g(e);
          },
          children: [
            (0, a.jsx)("div", {
              className: "relative aspect-[1.64/1] w-screen",
              children: x.map((e, t) =>
                (0, a.jsx)(
                  u,
                  { layer: e, i: t, ref: (e) => ((d.current[t] = e), e) },
                  t
                )
              ),
            }),
            (0, a.jsx)(h.Header, { mode: "home", animated: !0 }),
            (0, a.jsx)("div", {
              className: "relative z-[100] flex h-[1000px] w-full",
              children: (0, a.jsx)(m, {}),
            }),
          ],
        });
      }
      let u = (0, l.forwardRef)((e, t) => {
        let { layer: s, i: l } = e;
        return (0, a.jsx)(
          n.E.div,
          {
            className:
              "pointer-events-none absolute -left-[3%] top-0 h-full w-[107%]",
            style: { zIndex: s.z },
            ref: t,
            children: (0, a.jsx)("img", {
              src: "/images/parallax/".concat(s.url),
              alt: "layer".concat(l + 1),
              fill: !0,
            }),
          },
          l
        );
      });
      function g() {
        return (0, a.jsxs)("div", {
          className: "flex w-screen flex-col text-white",
          children: [
            (0, a.jsx)("div", {
              className: "pointer-events-none relative aspect-[0.56] w-full",
              children: (0, a.jsx)("img", {
                src: "/images/mobile.png",
                alt: "Chewy",
                fill: !0,
              }),
            }),
            (0, a.jsx)(h.Header, { mode: "home", animated: !1 }),
          ],
        });
      }
      function j() {
        return (0, a.jsx)("div", {
          className: "flex h-screen w-screen items-center justify-center",
          children: (0, a.jsx)("div", {
            className: "relative aspect-[1.21/1] h-40",
            children: (0, a.jsx)("img", {
              src: "/images/loading.gif",
              alt: "Loading",
              fill: !0,
            }),
          }),
        });
      }
      u.displayName = "Layer";
      var w = s(8792),
        v = s(2362),
        y = s(1399),
        b = (e) => {
          let { text: t } = e,
            [s, r] = (0, l.useState)(!1),
            i = async () => {
              await navigator.clipboard.writeText(t),
                r(!0),
                setTimeout(() => {
                  r(!1);
                }, 1e3);
            };
          return (0, a.jsx)("button", {
            onClick: i,
            children: s
              ? (0, a.jsx)(y.Zlo, { size: 20, color: "#38CD97" })
              : (0, a.jsx)(y.Dup, { size: 20 }),
          });
        };
      let N = () =>
          (0, a.jsxs)("div", {
            className:
              "relative flex w-screen flex-col  bg-[#FC6571] font-bellota text-xl",
            children: [
              (0, a.jsx)("div", {
                className:
                  "absolute -top-8 left-1/2 flex w-full -translate-x-1/2 flex-row items-center justify-center gap-2 md:-top-10 md:w-[500px] md:gap-4",
                children: (0, a.jsx)("div", {
                  className:
                    "flex flex-row gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm font-bold md:px-4 md:py-3",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center gap-3",
                    children: [
                      (0, a.jsx)(w.default, {
                        href: "https://etherscan.io/token/0xcomingsoon",
                        target: "_blank",
                        className:
                          "font-sundayBest text-xs hover:text-neutral-300",
                        children: "$CHEWY Contract Address",
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex flex-row gap-5",
                        children: [
                          (0, a.jsxs)("p", {
                            className:
                              "flex flex-row items-center justify-center gap-2 font-sundayBest text-xs",
                            children: [
                              "Copy",
                              (0, a.jsx)(b, {
                                text: "0xcomingsoon",
                              }),
                            ],
                          }),
                          (0, a.jsxs)(w.default, {
                            href: "https://etherscan.io/token/0xcomingsoon",
                            target: "_blank",
                            className:
                              "flex flex-row items-center justify-center gap-2 font-sundayBest text-xs",
                            children: ["View", (0, a.jsx)(y.z5B, { size: 20 })],
                            
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-around gap-4 py-12 md:flex-row md:gap-0 md:py-24",
                id: "howget",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex max-w-xl flex-col justify-center gap-4 p-4 md:gap-6",
                    children: [
                      (0, a.jsx)("h1", {
                        className:
                          "my-4 font-sundayBest text-[2rem] tracking-wider drop-shadow-[0px_8px_0px_var(--tw-shadow-color)] md:my-10 md:text-[4rem]",
                        children: (0, a.jsx)(f, { text: "Get $CHEWY" }),
                      }),
                      (0, a.jsx)("p", {
                        className: "font-bellota text-lg font-bold md:text-2xl",
                        children: "Available on Ethereum",
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "overflow-wrap break-words font-bellota text-lg md:text-xl",
                        children:
                          "To buy $CHEWY, download the Metamask wallet, purchase $ETH from an exchange or bridge. Then swap $ETH for $CHEWY on Uniswap!",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-row items-center justify-start gap-2 font-sundayBest text-xs md:gap-4 md:text-sm",
                        children: [
                          (0, a.jsxs)(w.default, {
                            className:
                              "flex flex-row items-center justify-center gap-2 text-nowrap rounded-full bg-[#5e8f83] px-4 py-2 hover:bg-white hover:text-black",
                            href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon&chain=mainnet",
                            target: "_blank",
                            children: ["Buy", (0, a.jsx)(v.gjK, { size: 20 })],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "relative m-4 flex aspect-square w-11/12 max-w-xl flex-row items-center justify-center overflow-clip rounded-xl",
                    children: (0, a.jsx)("img", {
                      src: "/images/mugshot.gif",
                      alt: "Mugshot",
                      fill: !0,
                    }),
                  }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "relative h-12 w-[1200px] overflow-hidden md:w-full",
                children: (0, a.jsx)("img", {
                  src: "/images/black_break_bot-2.png",
                  alt: "Break",
                  fill: !0,
                }),
              }),
            ],
          }),
        _ = (e) => {
          let { iconSize: t } = e;
          return (0, a.jsxs)("div", {
            className: "flex flex-row items-center gap-4",
            children: [
              (0, a.jsx)(w.default, {
                href: "https://x.com/chewy_ether",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:scale-110",
                children: (0, a.jsx)(d.default, {
                  src: "/icons/Social_icon_X.svg",
                  width: t,
                  height: t,
                  alt: "X",
                }),
              }),
              (0, a.jsx)(w.default, {
                href: "https://t.me/chewy_eth_portal",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:scale-110",
                children: (0, a.jsx)(d.default, {
                  src: "/icons/Social_icon_telegram.svg",
                  width: t,
                  height: t,
                  alt: "Telegram",
                }),
              }),
              (0, a.jsx)(w.default, {
                href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:scale-110",
                children: (0, a.jsx)(d.default, {
                  src: "/icons/Social_icon_dextools.svg",
                  width: t,
                  height: t,
                  alt: "Dextools",
                }),
              }),
              (0, a.jsx)(w.default, {
                href: "https://dexscreener.com/ethereum/0xcomingsoon",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:scale-110",
                children: (0, a.jsx)(d.default, {
                  src: "/icons/dexscreener.svg",
                  width: t,
                  height: t,
                  alt: "DEXScreener",
                }),
              }),
            ],
          });
        };
      var k = s(1142);
      let C = () =>
        (0, a.jsxs)("footer", {
          className: "w-screen",
          children: [
            (0, a.jsxs)("div", {
              className:
                "mt-4 grid w-screen grid-cols-1 items-center justify-center bg-black font-sundayBest text-[30px] font-semibold text-white md:grid-cols-3 md:justify-around",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "order-2 flex flex-col items-center justify-center gap-0 md:order-1 md:flex-row md:items-start",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center gap-4 px-2 py-4 text-2xl md:items-start md:gap-6 md:px-6 md:py-6 md:text-4xl",
                    children: [
                      // (0, a.jsx)(w.default, {
                      //   href: "#chewynomics",
                      //   children: "Chewynomics",
                      // }),
                      // (0, a.jsx)(w.default, {
                      //   href: "#howget",
                      //   children: "How To Get",
                      // }),
                      // (0, a.jsx)(w.default, {
                      //   href: "/claim",
                      //   children: "Claim",
                      // }),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "order-3 flex flex-col items-center justify-end md:order-2",
                  children: (0, a.jsx)("div", {
                    className: "relative aspect-square w-72",
                    children: (0, a.jsx)("img", {
                      src: "/images/bottom_page_chewy.png",
                      fill: !0,
                      alt: "Yes Chewy",
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "order-1 flex flex-row items-start justify-center p-4 md:order-3 md:p-6",
                  children: (0, a.jsx)(_, { iconSize: 45 }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className:
                "text-md z-10 mt-0 flex items-center justify-center border-t-2 border-neutral-400 bg-black font-bellota font-semibold text-neutral-400",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "flex items-center justify-center p-2 md:w-1/2 md:p-4",
                  children: (0, a.jsx)("p", {
                    children: "\xa9 2025 Chewy Token • All Rights Reserved",
                  }),
                }),
              ],
            }),
          ],
        });
      var z = s(1348),
        E = s(9878);
      let B = [
          {
            title: "Future Airdrops", 
            description:
              "Chewy wants communities of all shapes and sizes to just chew it.",
            unlock: "4 Year Linear Unlock",
            percentage: "20%",
          },
          {
            title: "Dev & Grants",
            description:
              "Chewy wants to support the builders and creators who make the crypto space so vibrant.",
            unlock: "4 Year Linear Unlock",
            percentage: "10%",
          },
          {
            title: "Liquidity",
            description: "Chewy recongizes the importance of proper hydration.",
            percentage: "5%",
          },
          {
            title: "Marketing & Partnerships ",
            description:
              "Chewy wants to spread the word and make sure everyone knows about the glass chewers.",
            unlock: "4 Year Linear Unlock",
            percentage: "10%",
          },
          {
            title: "Early Contributors",
            description:
              "Chewy has a soft spot for those who aggressively chew glass and has gone to great lengths to align Chewy's interests with theirs.",
            unlock: "2 Year Linear Unlock",
            percentage: "20%",
          },
          {
            title: "Initial Airdrops",
            description:
              "Chewy wants to unite, so Chewy will drop tokens to some of the strongest communities regardless of chain.",
            percentage: "35%",
          },
        ],
        H = {
          initial: {
            translateY: 0,
            opacity: 1,
            transition: {
              translateY: { duration: 0.5, delay: 0.1 },
              opacity: { duration: 0, delay: 0.1 },
            },
          },
          hover: {
            translateY: -64,
            opacity: 1,
            transition: {
              translateY: { duration: 0.5, delay: 0.1 },
              opacity: { duration: 0, delay: 0.1 },
            },
          },
          active: {
            translateY: -64,
            opacity: 1,
            transition: {
              translateY: { duration: 0.5, delay: 0.1 },
              opacity: { duration: 0, delay: 0.1 },
            },
          },
        },
        A = () => {
          var e, t, s, r, i;
          let [o, c] = (0, l.useState)(0),
            x =
              null == B
                ? void 0
                : null === (e = B[o - 1]) || void 0 === e
                ? void 0
                : e.title,
            m =
              null == B
                ? void 0
                : null === (t = B[o - 1]) || void 0 === t
                ? void 0
                : t.description,
            h =
              null == B
                ? void 0
                : null === (s = B[o - 1]) || void 0 === s
                ? void 0
                : s.percentage,
            p =
              null !==
                (i =
                  null == B
                    ? void 0
                    : null === (r = B[o - 1]) || void 0 === r
                    ? void 0
                    : r.unlock) && void 0 !== i
                ? i
                : null,
            [u, g] = (0, l.useState)({ bottom: "initial", left: "initial" }),
            j = (0, l.useMemo)(
              () => [
                { bottom: "440px", left: "70px" },
                { bottom: "410px", left: "145px" },
                { bottom: "360px", left: "215px" },
                { bottom: "405px", left: "280px" },
                { bottom: "470px", left: "360px" },
                { bottom: "495px", left: "435px" },
              ],
              []
            );
          (0, l.useEffect)(() => {
            var e;
            g(
              null !== (e = j[o - 1]) && void 0 !== e
                ? e
                : { bottom: "380px", left: "75px" }
            );
          }, [o, j]);
          let { price: w } = (function (e) {
              let [t, s] = (0, l.useState)(null),
                [a, r] = (0, l.useState)(!1),
                [i, n] = (0, l.useState)(null);
              return (
                (0, l.useEffect)(() => {
                  r(!0),
                    fetch(e)
                      .then((e) => {
                        if (!e.ok) throw Error("Failed to fetch token price");
                        return e.json();
                      })
                      .then((e) => {
                        var t;
                        s(
                          null === (t = e.pairs[0]) || void 0 === t
                            ? void 0
                            : t.priceUsd
                        );
                      })
                      .catch((e) => {
                        n(e.message);
                      })
                      .finally(() => {
                        r(!1);
                      });
                }, [e]),
                { price: t, isLoading: a, error: i }
              );
            })(
              "https://api.dexscreener.com/latest/dex/tokens/0xc26a8eda1c3ab69a157815183ddda88c89d6758ee491dd1647a70af2907ce074::coin::Chewy"
            ),
            v = Math.floor(1e12 * Number(w));
          return (0, a.jsxs)("div", {
            className: "w-screen bg-[#6A5A6D] font-bellota text-xl",
            children: [
              (0, a.jsx)("div", {
                className:
                  "relative h-12 w-[1200px] -translate-x-[60%] overflow-hidden md:w-full md:translate-x-0",
                children: (0, a.jsx)("img", {
                  src: "/images/black_break_top-2.png",
                  alt: "Break",
                  fill: !0,
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-center justify-center pb-24 pt-12 md:flex-row md:justify-around md:py-48",
                id: "chewynomics",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex scale-[70%] flex-col md:scale-[100%] lg:scale-[120%]",
                    children: [
                      (0, a.jsx)(z.M, {
                        children: (0, a.jsxs)(
                          n.E.div,
                          {
                            className: "absolute aspect-[1.21/1] h-28",
                            initial: {
                              opacity: 0,
                              bottom: "380px",
                              left: "75px",
                            },
                            animate: {
                              opacity: 1,
                              bottom: u.bottom,
                              left: u.left,
                            },
                            exit: { opacity: 0 },
                            transition: { duration: 0.5 },
                            children: [
                              (0, a.jsx)("img", {
                                src: "/images/graph/chew_indicator.gif",
                                alt: "Chew",
                                fill: !0,
                              }),
                              (0, a.jsx)(E.TKA, {
                                className: "absolute left-12 top-[100%]",
                                size: 32,
                              }),
                            ],
                          },
                          "chew-indicator"
                        ),
                      }),
                      (0, a.jsx)("div", { className: "h-[100px] w-full" }),
                      (0, a.jsx)("div", {
                        className: "flex flex-row items-baseline",
                        children: (0, a.jsxs)("div", {
                          className: "relative h-[392.5px] w-[600px]",
                          onMouseLeave: () => c(0),
                          children: [
                            (0, a.jsxs)(n.E.div, {
                              className:
                                "absolute bottom-[23.5px] left-[86px] z-[60] flex h-[319px] w-[93px] flex-col gap-8",
                              variants: H,
                              initial: "initial",
                              whileHover: "hover",
                              animate: 1 === o ? "active" : "initial",
                              onMouseEnter: () => c(1),
                              onClick: () => c(1),
                              children: [
                                (0, a.jsx)("img", {
                                  src: "/images/graph/export_glass_graph_1_color.png",
                                  alt: "Glass",
                                  fill: !0,
                                }),
                                " ",
                                (0, a.jsx)("div", {
                                  className:
                                    "hidden h-[100px]  translate-y-[300px] md:block",
                                }),
                              ],
                            }),
                            (0, a.jsxs)(n.E.div, {
                              className:
                                "absolute bottom-[23.5px] left-[159px] z-50 flex h-[280.5px] w-[92.5px] flex-col",
                              variants: H,
                              initial: "initial",
                              whileHover: "hover",
                              animate: 2 === o ? "active" : "initial",
                              onMouseEnter: () => c(2),
                              onClick: () => c(2),
                              children: [
                                (0, a.jsx)("img", {
                                  src: "/images/graph/export_glass_graph_2_color.png",
                                  alt: "Glass",
                                  fill: !0,
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "hidden h-[80px]  translate-y-[280px] md:block",
                                }),
                              ],
                            }),
                            (0, a.jsxs)(n.E.div, {
                              className:
                                "absolute bottom-[23.5px] left-[230px] z-40 h-[231.5px] w-[92.5px] flex-col",
                              variants: H,
                              initial: "initial",
                              whileHover: "hover",
                              animate: 3 === o ? "active" : "initial",
                              onMouseEnter: () => c(3),
                              onClick: () => c(3),
                              children: [
                                (0, a.jsx)("img", {
                                  src: "/images/graph/export_glass_graph_3_color.png",
                                  alt: "Glass",
                                  fill: !0,
                                }),
                                " ",
                                (0, a.jsx)("div", {
                                  className:
                                    "hidden h-[80px]  translate-y-[230px] md:block",
                                }),
                              ],
                            }),
                            (0, a.jsxs)(n.E.div, {
                              className:
                                "absolute bottom-[23.5px] left-[303px] z-30 h-[264px] w-[93px] flex-col",
                              variants: H,
                              initial: "initial",
                              whileHover: "hover",
                              animate: 4 === o ? "active" : "initial",
                              onMouseEnter: () => c(4),
                              onClick: () => c(4),
                              children: [
                                (0, a.jsx)("img", {
                                  src: "/images/graph/export_glass_graph_4_color.png",
                                  alt: "Glass",
                                  fill: !0,
                                }),
                                " ",
                                (0, a.jsx)("div", {
                                  className:
                                    "hidden h-[80px] translate-y-[260px] md:block",
                                }),
                              ],
                            }),
                            (0, a.jsxs)(n.E.div, {
                              className:
                                "absolute bottom-[23.5px] left-[375.5px] z-20 h-[339.5px] w-[92.5px] flex-col",
                              variants: H,
                              initial: "initial",
                              whileHover: "hover",
                              animate: 5 === o ? "active" : "initial",
                              onMouseEnter: () => c(5),
                              onClick: () => c(5),
                              children: [
                                (0, a.jsx)("img", {
                                  src: "/images/graph/export_glass_graph_5_color.png",
                                  alt: "Glass",
                                  fill: !0,
                                }),
                                " ",
                                (0, a.jsx)("div", {
                                  className:
                                    "hidden h-[80px] translate-y-[340px] md:block",
                                }),
                              ],
                            }),
                            (0, a.jsxs)(n.E.div, {
                              className:
                                "absolute bottom-[23.5px] left-[448px] h-[369px] w-[92px] flex-col",
                              variants: H,
                              initial: "initial",
                              whileHover: "hover",
                              animate: 6 === o ? "active" : "initial",
                              onMouseEnter: () => c(6),
                              onClick: () => c(6),
                              children: [
                                (0, a.jsx)("img", {
                                  src: "/images/graph/export_glass_graph_6_color.png",
                                  alt: "Glass",
                                  fill: !0,
                                }),
                                " ",
                                (0, a.jsx)("div", {
                                  className:
                                    "hidden h-[100px] translate-y-[350px] md:block",
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className: "".concat(
                                6 === o && "-translate-y-[64px]",
                                " pointer-events-none z-10 transition-transform delay-100 duration-500"
                              ),
                              children: (0, a.jsx)("img", {
                                src: "/images/graph/default_glass_6.png",
                                alt: "Glass",
                                fill: !0,
                                className: "hidden ".concat(
                                  6 === o && "opacity-0",
                                  " pointer-events-none z-10 transition-opacity delay-500 duration-0"
                                ),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "".concat(
                                5 === o && "-translate-y-[64px]",
                                " pointer-events-none z-20 transition-transform delay-100 duration-0"
                              ),
                              children: (0, a.jsx)("img", {
                                src: "/images/graph/default_glass_5.png",
                                alt: "Glass",
                                fill: !0,
                                className: "hidden ".concat(
                                  5 === o && "opacity-0",
                                  " pointer-events-none z-20 transition-opacity delay-500 duration-0"
                                ),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "".concat(
                                4 === o && "-translate-y-[64px]",
                                " pointer-events-none z-30 transition-transform delay-100 duration-500"
                              ),
                              children: (0, a.jsx)("img", {
                                src: "/images/graph/default_glass_4.png",
                                alt: "Glass",
                                fill: !0,
                                className: "hidden ".concat(
                                  4 === o && "opacity-0",
                                  " pointer-events-none z-30 transition-opacity delay-500 duration-0"
                                ),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "".concat(
                                3 === o && "-translate-y-[64px]",
                                " pointer-events-none z-40 transition-transform delay-100 duration-500"
                              ),
                              children: (0, a.jsx)("img", {
                                src: "/images/graph/default_glass_3.png",
                                alt: "Glass",
                                fill: !0,
                                className: "hidden ".concat(
                                  3 === o && "opacity-0",
                                  " pointer-events-none z-40 transition-opacity delay-500 duration-0"
                                ),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "".concat(
                                2 === o && "-translate-y-[64px]",
                                " pointer-events-none z-50 transition-transform delay-100 duration-500"
                              ),
                              children: (0, a.jsx)("img", {
                                src: "/images/graph/default_glass_2.png",
                                alt: "Glass",
                                fill: !0,
                                className: "hidden ".concat(
                                  2 === o && "opacity-0",
                                  " pointer-events-none z-50 transition-opacity delay-500 duration-0"
                                ),
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "".concat(
                                1 === o && "-translate-y-[64px]",
                                " pointer-events-none z-[60] transition-transform delay-100 duration-500"
                              ),
                              children: (0, a.jsx)("img", {
                                src: "/images/graph/default_glass_1.png",
                                alt: "Glass",
                                fill: !0,
                                className: "hidden ".concat(
                                  1 === o && "opacity-0",
                                  " pointer-events-none z-[60] transition-opacity delay-500 duration-0"
                                ),
                              }),
                            }),
                            (0, a.jsx)("img", {
                              src: "/images/graph/graph_shadow.png",
                              alt: "Glass",
                              fill: !0,
                              className: "pointer-events-none",
                            }),
                            (0, a.jsx)("img", {
                              src: "/images/graph/broken_glass_front_bits.png",
                              alt: "Glass",
                              fill: !0,
                              className: "pointer-events-none z-[100]",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "-my-10 flex flex-col items-center justify-around md:my-0",
                    children: (0, a.jsx)("div", {
                      className:
                        "flex max-w-xl flex-col justify-center gap-2 p-4 md:w-[600px] md:gap-4",
                      children:
                        0 === o
                          ? (0, a.jsxs)("div", {
                              className:
                                "flex flex-col justify-center gap-4 md:gap-6",
                              children: [
                                (0, a.jsx)("h1", {
                                  className:
                                    "my-4 font-sundayBest text-[2rem] tracking-wider drop-shadow-[0px_8px_0px_var(--tw-shadow-color)] md:my-8 md:text-[4rem]",
                                  children: (0, a.jsx)(f, {
                                    text: "Chewynomics",
                                  }),
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "overflow-wrap break-words text-xl",
                                  children:
                                    "Chewy has been busy. Hover what's left of the glass to see the token distribution details.",
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex flex-col gap-0",
                                  children: [
                                    (0, a.jsx)("h1", {
                                      className:
                                        "mb-4 font-sundayBest text-[1rem] tracking-wider md:text-[2rem]",
                                      children: "Key Stats",
                                    }),
                                    (0, a.jsxs)("p", {
                                      children: [
                                        (0, a.jsx)("b", { children: "Ticker:" }),
                                        " $",
                                        "CHEWY"
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      children: [
                                        (0, a.jsx)("b", {
                                          children: "Max Supply:",
                                        }),
                                        " ",
                                        (1000000000).toLocaleString(),
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      children: [
                                        (0, a.jsx)("b", {
                                          children: "TAX:",
                                        }),
                                        " $",
                                        "0/0",
                                      ],
                                    }),
                                    (0, a.jsxs)("p", {
                                      children: [
                                        (0, a.jsx)("b", { children: "Ownership:" }),
                                        " ",
                                        'Renounced',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsxs)("h1", {
                                  className:
                                    "font-sundayBest text-[1.35rem] leading-[3rem] tracking-wider drop-shadow-[0px_8px_0px_var(--tw-shadow-color)] md:text-[2rem] md:leading-[4rem]",
                                  children: [h, " - ", x],
                                }),
                                (0, a.jsx)("p", {
                                  className:
                                    "overflow-wrap break-words font-bellota text-lg md:text-xl ",
                                  children: m,
                                }),
                                p &&
                                  (0, a.jsx)("p", {
                                    className:
                                      "font-bellota text-lg font-extrabold",
                                    children: p,
                                  }),
                              ],
                            }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function S() {
        let [e, t] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            let e = setTimeout(() => {
              t(!0);
            }, 2e3);
            return () => clearTimeout(e);
          }, []),
          (0, a.jsxs)("main", {
            className:
              "flex flex-col items-center justify-center overflow-hidden bg-black text-white",
            children: [
              e &&
                (0, a.jsx)(l.Suspense, {
                  fallback: (0, a.jsx)(j, {}),
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                      (0, a.jsx)("div", {
                        className: "hidden md:block",
                        children: (0, a.jsx)(p, {}),
                      }),
                      (0, a.jsxs)("div", {
                        className: "block w-screen md:hidden",
                        children: [(0, a.jsx)(g, {}), (0, a.jsx)(m, {})],
                      }),
                      (0, a.jsx)(A, {}),
                      (0, a.jsx)(N, {}),
                      (0, a.jsx)(C, {}),
                    ],
                  }),
                }),
              !e && (0, a.jsx)(j, {}),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(
      0,
      [212, 706, 422, 217, 240, 699, 922, 749, 836, 757, 971, 69, 744],
      function () {
        return e((e.s = 5286));
      }
    ),
      (_N_E = e.O());
  },
]);
