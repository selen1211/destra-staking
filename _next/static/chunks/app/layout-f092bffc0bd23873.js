(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
  35883: function() {},
  89214: function() {},
  85568: function() {},
  52361: function() {},
  94616: function() {},
  9885: function(e, t, n) {
      Promise.resolve().then(n.t.bind(n, 47960, 23)),
      Promise.resolve().then(n.bind(n, 31962)),
      Promise.resolve().then(n.bind(n, 27250)),
      Promise.resolve().then(n.t.bind(n, 99692, 23))
  },
  31962: function(e, t, n) {
      "use strict";
      n.d(t, {
          default: function() {
              return x
          }
      });
      var r = n(57437)
        , c = n(96417)
        , l = n(63761)
        , a = n(89690)
        , s = n(33712)
        , i = n(2265)
        , o = n(69146);
      let d = {
          chainId: 1,
          name: "Ethereum",
          currency: "ETH",
          explorerUrl: "https://etherscan.io",
          rpcUrl: "https://cloudflare-eth.com"
      }
        , u = (0,
      s.u_)({
          metadata: {
              name: "Destra Network",
              description: "Destra Network - DSync",
              url: "https://dns.destra.network",
              icons: ["https://framerusercontent.com/images/tQNGYSsSllQW5duAwVN8RV0JA.png"]
          },
          enableEIP6963: !0,
          enableInjected: !0,
          enableCoinbase: !0,
          rpcUrl: d.rpcUrl,
          defaultChainId: d.chainId
      });
      function h(e) {
          return "0x" + e.toString(16)
      }
      function f(e) {
          let {children: t} = e
            , {open: n, close: r} = (0,
          s.k_)()
            , [c,l] = (0,
          i.useState)(null)
            , [a,u] = (0,
          i.useState)(null)
            , {walletProvider: f} = (0,
          s.B0)();
          (0,
          i.useEffect)( () => {
              if (f) {
                  let e = new o.Q(f);
                  l(e),
                  e.getNetwork().then(e => {
                      u(Number(e.chainId))
                  }
                  ).catch(e => console.error("Failed to get network:", e)),
                  window.ethereum && window.ethereum.on("chainChanged", e => {
                      let t = parseInt(e, 16);
                      u(t),
                      t !== d.chainId && m(d.chainId)
                  }
                  )
              } else
                  console.warn("No wallet provider found.")
          }
          , [f]),
          (0,
          i.useEffect)( () => {
              null !== a && a !== d.chainId && (alert("You are connected to the wrong network. Switching to Ethereum Mainnet."),
              m(d.chainId))
          }
          , [a]);
          let m = async e => {
              if (!c) {
                  console.warn("Provider not available.");
                  return
              }
              try {
                  await c.send("wallet_switchEthereumChain", [{
                      chainId: h(e)
                  }])
              } catch (t) {
                  if (4902 === t.code)
                      try {
                          await c.send("wallet_addEthereumChain", [{
                              chainId: h(e),
                              chainName: "Ethereum Mainnet",
                              rpcUrls: [d.rpcUrl],
                              nativeCurrency: {
                                  name: "ETH",
                                  symbol: "ETH",
                                  decimals: 18
                              },
                              blockExplorerUrls: [d.explorerUrl]
                          }])
                      } catch (e) {
                          console.error("Error adding network:", e)
                      }
                  else
                      console.error("Error switching network:", t)
              }
          }
          ;
          return (0,
          i.useEffect)( () => {
              window.ethereum || f || alert("No Ethereum provider found. Please install a Web3 wallet or use WalletConnect.")
          }
          , [f]),
          t
      }
      (0,
      s.OY)({
          ethersConfig: u,
          chains: [d],
          projectId: "5110b993e11a4855c1ddc1ea94d22c17",
          themeMode: "dark",
          enableAnalytics: !0,
          enableOnramp: !0,
          themeVariables: {
              "--w3m-color-mix": "#111113",
              "--w3m-color-mix-strength": 40
          }
      });
      var m = n(21343);
      function x(e) {
          let {children: t} = e
            , [n] = (0,
          i.useState)( () => new c.f({
              uri: "https://api.studio.thegraph.com/query/69390/destra-storage-nodes-registry/version/latest",
              cache: new l.h,
              defaultOptions: {
                  watchQuery: {
                      fetchPolicy: "network-only"
                  },
                  query: {
                      fetchPolicy: "network-only"
                  }
              }
          }))
            , [s] = (0,
          i.useState)( () => new c.f({
              uri: "https://api.studio.thegraph.com/query/69390/staking-testnet/version/latest",
              cache: new l.h,
              defaultOptions: {
                  watchQuery: {
                      fetchPolicy: "network-only"
                  },
                  query: {
                      fetchPolicy: "network-only"
                  }
              }
          }))
            , [o,d] = (0,
          i.useState)(!1);
          return (0,
          r.jsx)(a.e, {
              client: n,
              children: (0,
              r.jsx)(a.e, {
                  client: s,
                  children: (0,
                  r.jsx)(f, {
                      children: (0,
                      r.jsx)(m.F, {
                          children: t
                      })
                  })
              })
          })
      }
  },
  27250: function(e, t, n) {
      "use strict";
      n.d(t, {
          default: function() {
              return x
          }
      });
      var r = n(57437)
        , c = n(2265)
        , l = n(33145)
        , a = {
          src: "/_next/static/media/logo.636487f6.svg",
          height: 42,
          width: 170,
          blurWidth: 0,
          blurHeight: 0
      }
        , s = {
          src: "/_next/static/media/menu.1cfe0588.svg",
          height: 18,
          width: 22,
          blurWidth: 0,
          blurHeight: 0
      }
        , i = n(32489)
        , o = n(27648)
        , d = n(99376)
        , u = n(36760)
        , h = n.n(u)
        , f = n(33712);
      let m = e => {
          let {href: t, children: n, onClick: c} = e
            , l = (0,
          d.usePathname)()
            , a = h()("py-3 px-1 block", {
              "text-[#fff] border-[#fff] border-b-2 ": l === t,
              "text-[#737373]": l !== t
          });
          return (0,
          r.jsx)("div", {
              onClick: c,
              children: (0,
              r.jsx)(o.default, {
                  className: a,
                  href: t,
                  children: n
              })
          })
      }
      ;
      function x() {
          let[e,t] = (0,
          c.useState)(!1)
            , n = () => {
              t(!e)
          }
            , {open: d} = (0,
          f.k_)()
            , {isConnected: u, address: h} = (0,
          f.Zc)()
            , x = (0,
          c.useRef)(null);
          return (0,
          r.jsxs)("div", {
              children: [(0,
              r.jsxs)("div", {
                  className: "hidden md:flex w-full p-8 mx-auto items-center text-white justify-between ",
                  ref: x,
                  children: [(0,
                  r.jsx)("div", {
                      children: (0,
                      r.jsx)(l.default, {
                          src: a,
                          alt: "logo",
                          className: "z-50",
                          width: 180,
                          height: 40
                      })
                  }), (0,
                  r.jsxs)("div", {
                      className: "flex gap-x-6 text-lg font-bold",
                      children: [(0,
                      r.jsx)(m, {
                          href: "/",
                          children: "Staking"
                      }), (0,
                      r.jsx)(m, {
                          href: "/revenue-projection",
                          children: "Revenue Projection"
                      }), (0,
                      r.jsx)(m, {
                          href: "/incentive-program",
                          children: "Incentive Program"
                      })]
                  }), (0,
                  r.jsx)("button", {
                      className: "flex py-2 px-4 justify-center items-center self-stretch rounded-[32px] bg-[#fff] text-[#FF3838] text-base not-italic font-bold",
                      onClick: () => d(),
                      children: !0 === u ? (0,
                      r.jsx)(r.Fragment, {
                          children: h && "".concat(h.slice(0, 6), "...").concat(h.slice(-4))
                      }) : "Connect"
                  })]
              }), (0,
              r.jsxs)("div", {
                  className: "md:hidden w-full max-w-screen-sm mx-auto flex items-center text-white justify-between py-4 px-4",
                  children: [(0,
                  r.jsx)("div", {
                      children: (0,
                      r.jsx)(l.default, {
                          src: a,
                          alt: "logo",
                          className: "z-50",
                          width: 160,
                          height: 50
                      })
                  }), (0,
                  r.jsx)("div", {
                      onClick: n,
                      className: "cursor-pointer z-50",
                      children: e ? (0,
                      r.jsx)(i.Z, {
                          className: "w-6 h-6"
                      }) : (0,
                      r.jsx)(l.default, {
                          src: s,
                          alt: "menu",
                          width: 24,
                          height: 24
                      })
                  })]
              }), e && (0,
              r.jsxs)("div", {
                  className: "fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40",
                  children: [(0,
                  r.jsxs)("div", {
                      className: "w-full max-w-screen-sm px-4 flex flex-col items-center justify-center text-center",
                      children: [(0,
                      r.jsx)("button", {
                          className: "flex py-2 px-4 mb-4 justify-center items-center rounded-[32px] bg-[#fff] text-[#FF3838] text-base not-italic font-bold",
                          onClick: () => d(),
                          children: !0 === u ? (0,
                          r.jsx)(r.Fragment, {
                              children: h && "".concat(h.slice(0, 6), "...").concat(h.slice(-4))
                          }) : "Connect"
                      }), (0,
                      r.jsxs)("div", {
                          className: "flex flex-col gap-y-3 text-2xl font-bold",
                          children: [(0,
                          r.jsx)(m, {
                              href: "/",
                              onClick: n,
                              children: "Staking"
                          }), (0,
                          r.jsx)(m, {
                              href: "/revenue-projection",
                              onClick: n,
                              children: "Revenue Projection"
                          }), (0,
                          r.jsx)(m, {
                              href: "/incentive-program",
                              onClick: n,
                              children: "Incentive Program"
                          })]
                      })]
                  }), (0,
                  r.jsxs)("div", {
                      className: "flex flex-col items-center gap-y-4 my-6",
                      children: [(0,
                      r.jsx)("p", {
                          className: "text-lg font-medium",
                          children: "FOLLOW US"
                      }), (0,
                      r.jsx)("div", {
                          className: "flex items-center gap-x-3",
                          children: [{
                              name: "x",
                              url: "https://x.com/"
                          }, {
                              name: "tg",
                              url: "https://t.me/"
                          }].map(e => (0,
                          r.jsx)("a", {
                              href: e.url,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0,
                              r.jsx)(l.default, {
                                  src: "/socials/".concat(e.name, ".svg"),
                                  alt: e.name,
                                  className: "w-6 h-6",
                                  width: 24,
                                  height: 24
                              })
                          }, e.name))
                      })]
                  })]
              })]
          })
      }
  },
  21343: function(e, t, n) {
      "use strict";
      n.d(t, {
          F: function() {
              return h
          },
          K: function() {
              return u
          }
      });
      var r = n(57437)
        , c = n(2265)
        , l = n(45810)
        , a = n(41662)
        , s = n(69146)
        , i = n(33712)
        , o = n(90700);
      let d = (0,
      c.createContext)({
          userBalance: "0.00",
          updateBalance: async () => {}
          ,
          userAddress: "",
          signer: null
      })
        , u = () => (0,
      c.useContext)(d)
        , h = e => {
          let {children: t} = e
            , {walletProvider: n} = (0,
          i.B0)()
            , [u,h] = (0,
          c.useState)("0")
            , [f,m] = (0,
          c.useState)("")
            , [x,w] = (0,
          c.useState)(null)
            , [p,b] = (0,
          c.useState)(null)
            , g = async () => {
              if (x && f)
                  try {
                      let e = new l.CH("0xf94e7d0710709388bCe3161C32B4eEA56d3f91CC",["function balanceOf(address account) public view returns (uint256)"],x)
                        , t = await e.balanceOf(f)
                        , n = a.bM(t, 18);
                      h(n)
                  } catch (e) {
                      console.error("Error fetching balance:", e),
                      o.ZP.warning("Failed to fetch token balance")
                  }
          }
          ;
          return (0,
          c.useEffect)( () => {
              (async () => {
                  if (n)
                      try {
                          let e = new s.Q(n);
                          b(e);
                          let t = await e.getSigner();
                          w(t);
                          let r = await t.getAddress();
                          m(r)
                      } catch (e) {
                          console.error("Error connecting to wallet", e)
                      }
              }
              )()
          }
          , [n]),
          (0,
          c.useEffect)( () => {
              if (!p || !f)
                  return;
              let e = async e => {
                  try {
                      let r = await p.getBlock(e);
                      if (r && r.transactions) {
                          let e = r.transactions.map(e => p.getTransaction(e));
                          for (let r of (await Promise.all(e))) {
                              var t, n;
                              if (r && ((null === (t = r.from) || void 0 === t ? void 0 : t.toLowerCase()) === f.toLowerCase() || (null === (n = r.to) || void 0 === n ? void 0 : n.toLowerCase()) === f.toLowerCase())) {
                                  await g();
                                  break
                              }
                          }
                      }
                  } catch (e) {
                      console.error("Error processing block:", e)
                  }
              }
              ;
              return p.on("block", e),
              () => {
                  p.removeListener("block", e)
              }
          }
          , [p, f]),
          (0,
          c.useEffect)( () => {
              x && f && g()
          }
          , [x, f]),
          (0,
          r.jsx)(d.Provider, {
              value: {
                  userBalance: u,
                  updateBalance: g,
                  userAddress: f,
                  signer: x
              },
              children: t
          })
      }
  },
  47960: function() {}
}, function(e) {
  e.O(0, [10, 764, 145, 82, 933, 648, 894, 971, 117, 744], function() {
      return e(e.s = 9885)
  }),
  _N_E = e.O()
}
]);
