(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    1235: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0));
      t.CircularProgress = function(e) {
        var t = e.className;
        return l.createElement("div", { className: "loader " + t });
      };
    },
    132: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__assign) ||
          function() {
            return (a =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var l in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = n(1700);
      t.CustomScrollbars = function(e) {
        return r.createElement(
          o.Scrollbars,
          a({}, e, {
            autoHide: !0,
            renderTrackHorizontal: function(e) {
              return r.createElement(
                "div",
                a({}, e, {
                  style: { display: "none" },
                  className: "track-horizontal"
                })
              );
            }
          })
        );
      };
    },
    1340: function(e, t) {},
    1436: function(e, t, n) {
      var a = {
        "./af": 958,
        "./af.js": 958,
        "./ar": 959,
        "./ar-dz": 960,
        "./ar-dz.js": 960,
        "./ar-kw": 961,
        "./ar-kw.js": 961,
        "./ar-ly": 962,
        "./ar-ly.js": 962,
        "./ar-ma": 963,
        "./ar-ma.js": 963,
        "./ar-sa": 964,
        "./ar-sa.js": 964,
        "./ar-tn": 965,
        "./ar-tn.js": 965,
        "./ar.js": 959,
        "./az": 966,
        "./az.js": 966,
        "./be": 967,
        "./be.js": 967,
        "./bg": 968,
        "./bg.js": 968,
        "./bm": 969,
        "./bm.js": 969,
        "./bn": 970,
        "./bn.js": 970,
        "./bo": 971,
        "./bo.js": 971,
        "./br": 972,
        "./br.js": 972,
        "./bs": 973,
        "./bs.js": 973,
        "./ca": 974,
        "./ca.js": 974,
        "./cs": 975,
        "./cs.js": 975,
        "./cv": 976,
        "./cv.js": 976,
        "./cy": 977,
        "./cy.js": 977,
        "./da": 978,
        "./da.js": 978,
        "./de": 979,
        "./de-at": 980,
        "./de-at.js": 980,
        "./de-ch": 981,
        "./de-ch.js": 981,
        "./de.js": 979,
        "./dv": 982,
        "./dv.js": 982,
        "./el": 983,
        "./el.js": 983,
        "./en-SG": 984,
        "./en-SG.js": 984,
        "./en-au": 985,
        "./en-au.js": 985,
        "./en-ca": 986,
        "./en-ca.js": 986,
        "./en-gb": 987,
        "./en-gb.js": 987,
        "./en-ie": 988,
        "./en-ie.js": 988,
        "./en-il": 989,
        "./en-il.js": 989,
        "./en-nz": 990,
        "./en-nz.js": 990,
        "./eo": 991,
        "./eo.js": 991,
        "./es": 992,
        "./es-do": 993,
        "./es-do.js": 993,
        "./es-us": 994,
        "./es-us.js": 994,
        "./es.js": 992,
        "./et": 995,
        "./et.js": 995,
        "./eu": 996,
        "./eu.js": 996,
        "./fa": 997,
        "./fa.js": 997,
        "./fi": 998,
        "./fi.js": 998,
        "./fo": 999,
        "./fo.js": 999,
        "./fr": 1e3,
        "./fr-ca": 1001,
        "./fr-ca.js": 1001,
        "./fr-ch": 1002,
        "./fr-ch.js": 1002,
        "./fr.js": 1e3,
        "./fy": 1003,
        "./fy.js": 1003,
        "./ga": 1004,
        "./ga.js": 1004,
        "./gd": 1005,
        "./gd.js": 1005,
        "./gl": 1006,
        "./gl.js": 1006,
        "./gom-latn": 1007,
        "./gom-latn.js": 1007,
        "./gu": 1008,
        "./gu.js": 1008,
        "./he": 1009,
        "./he.js": 1009,
        "./hi": 1010,
        "./hi.js": 1010,
        "./hr": 1011,
        "./hr.js": 1011,
        "./hu": 1012,
        "./hu.js": 1012,
        "./hy-am": 1013,
        "./hy-am.js": 1013,
        "./id": 1014,
        "./id.js": 1014,
        "./is": 1015,
        "./is.js": 1015,
        "./it": 1016,
        "./it-ch": 1017,
        "./it-ch.js": 1017,
        "./it.js": 1016,
        "./ja": 1018,
        "./ja.js": 1018,
        "./jv": 1019,
        "./jv.js": 1019,
        "./ka": 1020,
        "./ka.js": 1020,
        "./kk": 1021,
        "./kk.js": 1021,
        "./km": 1022,
        "./km.js": 1022,
        "./kn": 1023,
        "./kn.js": 1023,
        "./ko": 1024,
        "./ko.js": 1024,
        "./ku": 1025,
        "./ku.js": 1025,
        "./ky": 1026,
        "./ky.js": 1026,
        "./lb": 1027,
        "./lb.js": 1027,
        "./lo": 1028,
        "./lo.js": 1028,
        "./lt": 1029,
        "./lt.js": 1029,
        "./lv": 1030,
        "./lv.js": 1030,
        "./me": 1031,
        "./me.js": 1031,
        "./mi": 1032,
        "./mi.js": 1032,
        "./mk": 1033,
        "./mk.js": 1033,
        "./ml": 1034,
        "./ml.js": 1034,
        "./mn": 1035,
        "./mn.js": 1035,
        "./mr": 1036,
        "./mr.js": 1036,
        "./ms": 1037,
        "./ms-my": 1038,
        "./ms-my.js": 1038,
        "./ms.js": 1037,
        "./mt": 1039,
        "./mt.js": 1039,
        "./my": 1040,
        "./my.js": 1040,
        "./nb": 1041,
        "./nb.js": 1041,
        "./ne": 1042,
        "./ne.js": 1042,
        "./nl": 1043,
        "./nl-be": 1044,
        "./nl-be.js": 1044,
        "./nl.js": 1043,
        "./nn": 1045,
        "./nn.js": 1045,
        "./pa-in": 1046,
        "./pa-in.js": 1046,
        "./pl": 1047,
        "./pl.js": 1047,
        "./pt": 1048,
        "./pt-br": 1049,
        "./pt-br.js": 1049,
        "./pt.js": 1048,
        "./ro": 1050,
        "./ro.js": 1050,
        "./ru": 1051,
        "./ru.js": 1051,
        "./sd": 1052,
        "./sd.js": 1052,
        "./se": 1053,
        "./se.js": 1053,
        "./si": 1054,
        "./si.js": 1054,
        "./sk": 1055,
        "./sk.js": 1055,
        "./sl": 1056,
        "./sl.js": 1056,
        "./sq": 1057,
        "./sq.js": 1057,
        "./sr": 1058,
        "./sr-cyrl": 1059,
        "./sr-cyrl.js": 1059,
        "./sr.js": 1058,
        "./ss": 1060,
        "./ss.js": 1060,
        "./sv": 1061,
        "./sv.js": 1061,
        "./sw": 1062,
        "./sw.js": 1062,
        "./ta": 1063,
        "./ta.js": 1063,
        "./te": 1064,
        "./te.js": 1064,
        "./tet": 1065,
        "./tet.js": 1065,
        "./tg": 1066,
        "./tg.js": 1066,
        "./th": 1067,
        "./th.js": 1067,
        "./tl-ph": 1068,
        "./tl-ph.js": 1068,
        "./tlh": 1069,
        "./tlh.js": 1069,
        "./tr": 1070,
        "./tr.js": 1070,
        "./tzl": 1071,
        "./tzl.js": 1071,
        "./tzm": 1072,
        "./tzm-latn": 1073,
        "./tzm-latn.js": 1073,
        "./tzm.js": 1072,
        "./ug-cn": 1074,
        "./ug-cn.js": 1074,
        "./uk": 1075,
        "./uk.js": 1075,
        "./ur": 1076,
        "./ur.js": 1076,
        "./uz": 1077,
        "./uz-latn": 1078,
        "./uz-latn.js": 1078,
        "./uz.js": 1077,
        "./vi": 1079,
        "./vi.js": 1079,
        "./x-pseudo": 1080,
        "./x-pseudo.js": 1080,
        "./yo": 1081,
        "./yo.js": 1081,
        "./zh-cn": 1082,
        "./zh-cn.js": 1082,
        "./zh-hk": 1083,
        "./zh-hk.js": 1083,
        "./zh-tw": 1084,
        "./zh-tw.js": 1084
      };
      function l(e) {
        var t = r(e);
        return n(t);
      }
      function r(e) {
        var t = a[e];
        if (!(t + 1)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return t;
      }
      (l.keys = function() {
        return Object.keys(a);
      }),
        (l.resolve = r),
        (e.exports = l),
        (l.id = 1436);
    },
    1656: function(e, t) {},
    1662: function(e, t) {},
    1699: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(0)),
        s = n(3),
        c = n(132),
        u = o(n(177)),
        d = o(n(401)),
        m = o(n(178)),
        p = o(n(408)),
        g = o(n(409)),
        f = o(n(410)),
        E = n(16),
        h = o(n(369)),
        x = o(n(38)),
        _ = n(14),
        v = s.Layout.Header,
        y = s.Select.Option,
        N = i.default.createElement(
          s.Menu,
          {
            onClick: function(e) {
              s.message.info("Click on menu item.");
            }
          },
          i.default.createElement(s.Menu.Item, { key: "1" }, "Products"),
          i.default.createElement(s.Menu.Item, { key: "2" }, "Apps"),
          i.default.createElement(s.Menu.Item, { key: "3" }, "Blogs")
        );
      function b(e) {
        console.log("selected " + e);
      }
      var C,
        T,
        S,
        O = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { searchText: "" }),
              (t.languageMenu = function() {
                return i.default.createElement(
                  c.CustomScrollbars,
                  { className: "gx-popover-lang-scroll" },
                  i.default.createElement(
                    "ul",
                    { className: "gx-sub-popover" },
                    u.default.map(function(e) {
                      return i.default.createElement(
                        "li",
                        {
                          className: "gx-media gx-pointer",
                          key: JSON.stringify(e),
                          onClick: function(n) {
                            return t.props.switchLanguage({
                              variables: { locale: e }
                            });
                          }
                        },
                        i.default.createElement("i", {
                          className: "flag flag-24 gx-mr-2 flag-" + e.icon
                        }),
                        i.default.createElement(
                          "span",
                          { className: "gx-language-text" },
                          e.name
                        )
                      );
                    })
                  )
                );
              }),
              (t.updateSearchChatUser = function(e) {
                t.setState({ searchText: e.target.value });
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.locale,
                l = t.navCollapsed;
              return i.default.createElement(
                "div",
                { className: "gx-header-horizontal" },
                i.default.createElement(
                  "div",
                  { className: "gx-header-horizontal-top" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-top-flex" },
                      i.default.createElement(
                        "div",
                        { className: "gx-header-horizontal-top-left" },
                        i.default.createElement("i", {
                          className: "icon icon-alert gx-mr-3"
                        }),
                        i.default.createElement(
                          "p",
                          { className: "gx-mb-0 gx-text-truncate" },
                          i.default.createElement(h.default, {
                            id: "app.announced"
                          })
                        )
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-login-list" },
                        i.default.createElement("li", null, "Login"),
                        i.default.createElement("li", null, "Signup")
                      )
                    )
                  )
                ),
                i.default.createElement(
                  v,
                  { className: "gx-header-horizontal-main" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-main-flex" },
                      i.default.createElement(
                        "div",
                        {
                          className:
                            "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
                        },
                        i.default.createElement("i", {
                          className: "gx-icon-btn icon icon-menu",
                          onClick: function() {
                            e.props.toggleCollapsedSideNav({
                              variables: { navCollapsed: !l }
                            });
                          }
                        })
                      ),
                      i.default.createElement(
                        E.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-block gx-d-lg-none gx-pointer gx-w-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(350) })
                      ),
                      i.default.createElement(
                        E.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(411) })
                      ),
                      i.default.createElement(
                        "div",
                        {
                          className: "gx-header-search gx-d-none gx-d-lg-flex"
                        },
                        i.default.createElement(d.default, {
                          styleName: "gx-lt-icon-search-bar-lg",
                          placeholder: "Search in app...",
                          onChange: this.updateSearchChatUser.bind(this),
                          value: this.state.searchText
                        }),
                        i.default.createElement(
                          s.Select,
                          {
                            defaultValue: "lucy",
                            style: { width: 120 },
                            onChange: b
                          },
                          i.default.createElement(
                            y,
                            { value: "jack" },
                            "Products"
                          ),
                          i.default.createElement(y, { value: "lucy" }, "Apps"),
                          i.default.createElement(
                            y,
                            { value: "Yiminghe" },
                            "Blogs"
                          )
                        )
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-header-notifications gx-ml-auto" },
                        i.default.createElement(
                          "li",
                          {
                            className:
                              "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
                          },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(
                                "div",
                                { className: "gx-d-flex" },
                                i.default.createElement(
                                  s.Dropdown,
                                  { overlay: N },
                                  i.default.createElement(
                                    s.Button,
                                    null,
                                    "Category ",
                                    i.default.createElement(s.Icon, {
                                      type: "down"
                                    })
                                  )
                                ),
                                i.default.createElement(d.default, {
                                  styleName: "gx-popover-search-bar",
                                  placeholder: "Search in app...",
                                  onChange: this.updateSearchChatUser.bind(
                                    this
                                  ),
                                  value: this.state.searchText
                                })
                              ),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-search-new"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-notify" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(p.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-notification"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-msg" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(g.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className: "gx-pointer gx-status-pos gx-d-block"
                              },
                              i.default.createElement("i", {
                                className: "icon icon-chat-new"
                              }),
                              i.default.createElement("span", {
                                className:
                                  "gx-status gx-status-rtl gx-small gx-orange"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-language" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: this.languageMenu(),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className:
                                  "gx-pointer gx-flex-row gx-align-items-center"
                              },
                              i.default.createElement("i", {
                                className: "flag flag-24 flag-" + a.icon
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-user-nav" },
                          i.default.createElement(m.default, null)
                        )
                      )
                    )
                  )
                ),
                i.default.createElement(
                  "div",
                  {
                    className:
                      "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
                  },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-nav-flex" },
                      i.default.createElement(f.default, null),
                      i.default.createElement(
                        "ul",
                        { className: "gx-header-notifications gx-ml-auto" },
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-menu-lines"
                            })
                          )
                        ),
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-setting"
                            })
                          )
                        ),
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-apps-new"
                            })
                          )
                        )
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component),
        A = x.default(
          C ||
            (C = l(
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        icon\n        languageId\n        locale\n        name\n      }\n      navCollapsed\n    }\n  }\n"
              ],
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        icon\n        languageId\n        locale\n        name\n      }\n      navCollapsed\n    }\n  }\n"
              ]
            ))
        ),
        I = x.default(
          T ||
            (T = l(
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ],
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ]
            ))
        ),
        L = x.default(
          S ||
            (S = l(
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ],
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ]
            ))
        );
      t.HorizontalDefaultModule = _.compose(
        _.graphql(A, {
          name: "settings",
          props: function(e) {
            var t = e.settings.settings;
            return { locale: t.locale, navCollapsed: t.navCollapsed };
          }
        }),
        _.graphql(I, { name: "toggleCollapsedSideNav" }),
        _.graphql(L, { name: "switchLanguage" })
      )(O);
    },
    1729: function(e, t) {},
    1731: function(e, t) {},
    1767: function(e, t) {},
    1768: function(e, t) {},
    177: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = [
        { languageId: "english", locale: "en", name: "English", icon: "us" },
        { languageId: "chinese", locale: "zh", name: "Chinese", icon: "cn" },
        { languageId: "spanish", locale: "es", name: "Spanish", icon: "es" },
        { languageId: "french", locale: "fr", name: "French", icon: "fr" },
        { languageId: "italian", locale: "it", name: "Italian", icon: "it" },
        { languageId: "saudi-arabia", locale: "ar", name: "Arabic", icon: "sa" }
      ];
    },
    178: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = l(n(0)),
        i = n(3),
        s = n(14),
        c = n(16),
        u = n(37),
        d = r(n(33)),
        m = n(16),
        p = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.logout = function() {
                console.log("Logout"),
                  sessionStorage.clear(),
                  localStorage.clear(),
                  location.reload();
              }),
              (n.onUrlHistoryPush = function(e) {
                n.props.history.push(e);
              }),
              (n.state = { firstName: "", lastName: "", user: "" }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              var e = this,
                t = d.default.decode(localStorage.getItem("jwt")),
                n = t.id,
                a = t.org_id;
              this.setState({ userId: n, org_id: a }),
                n
                  ? this.props.client
                      .query({
                        query: u.USER_DATA,
                        variables: { userId: n },
                        fetchPolicy: "cache-first"
                      })
                      .then(function(t) {
                        e.setState({
                          user: t.data.user,
                          firstName: t.data.user.firstName,
                          lastName: t.data.user.lastName
                        });
                      })
                      .catch(function(e) {
                        console.log("Failed to get User Details" + e);
                      })
                  : console.log("Error getting JwtData");
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state,
                n = t.firstName,
                a = t.lastName,
                l = t.user,
                r = o.default.createElement(
                  "ul",
                  { className: "gx-user-popover" },
                  o.default.createElement(
                    "li",
                    {
                      onClick: function() {
                        return e.onUrlHistoryPush(
                          "/core/organization/" + e.state.org_id
                        );
                      }
                    },
                    o.default.createElement(
                      c.Link,
                      { to: "/core/organization/" + this.state.org_id },
                      " ",
                      "Organization",
                      " "
                    )
                  ),
                  o.default.createElement(
                    "li",
                    {
                      onClick: function() {
                        return e.onUrlHistoryPush(
                          "/core/settings/developer/webhooks"
                        );
                      }
                    },
                    o.default.createElement(
                      c.Link,
                      { to: "/core/settings/developer" },
                      " Developer Settings "
                    )
                  ),
                  o.default.createElement(
                    "li",
                    {
                      onClick: function() {
                        return e.logout();
                      }
                    },
                    o.default.createElement(
                      c.Link,
                      { to: "/signin" },
                      " Logout "
                    )
                  )
                );
              return o.default.createElement(
                i.Popover,
                {
                  overlayClassName: "gx-popover-horizantal",
                  placement: "bottomRight",
                  content: r
                },
                n
                  ? o.default.createElement(
                      "div",
                      {
                        className:
                          "gx-flex-row gx-align-items-center gx-pointer"
                      },
                      o.default.createElement(
                        "p",
                        {
                          style: { color: "black" },
                          className: "gx-mb-0 gx-d-none gx-d-sm-flex"
                        },
                        n + "  " + (a || " ")
                      ),
                      " ",
                      " ",
                      o.default.createElement(
                        "div",
                        { className: "gx-ml-2" },
                        null === l.image || void 0 === l.image
                          ? o.default.createElement(
                              i.Avatar,
                              {
                                style: { backgroundColor: "#424e88" },
                                size: "large"
                              },
                              o.default.createElement(
                                "span",
                                {
                                  style: { fontSize: 22, fontWeight: "normal" }
                                },
                                n ? n.charAt(0).toUpperCase() : ""
                              )
                            )
                          : o.default.createElement(i.Avatar, {
                              size: "large",
                              alt: n,
                              src: l.image
                            })
                      )
                    )
                  : o.default.createElement(i.Avatar, {
                      src: "https://via.placeholder.com/100x100",
                      className: "gx-avatar gx-pointer",
                      alt: ""
                    })
              );
            }),
            t
          );
        })(o.Component);
      t.default = s.compose(m.withRouter, s.withApollo)(p);
    },
    1824: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(3);
      t.default = function(e) {
        var t = e.notification,
          n = t.icon,
          a = t.image,
          o = t.title,
          i = t.time;
        return l.createElement(
          "li",
          { className: "gx-media" },
          l.createElement(r.Avatar, {
            className: "gx-size-40 gx-mr-3",
            alt: a,
            src: a
          }),
          l.createElement(
            "div",
            { className: "gx-media-body gx-align-self-center" },
            l.createElement("p", { className: "gx-fs-sm gx-mb-0" }, o),
            l.createElement("i", { className: "icon icon-" + n + " gx-pr-2" }),
            " ",
            l.createElement(
              "span",
              { className: "gx-meta-date" },
              l.createElement("small", null, i)
            )
          )
        );
      };
    },
    1825: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notifications = [
          {
            image: "https://via.placeholder.com/150x150",
            title: "Stella Johnson has recently posted an album",
            time: "4:10 PM",
            icon: "thumb-up gx-text-blue"
          },
          {
            image: "https://via.placeholder.com/150x150",
            title: "Alex Brown has shared Martin Guptil's post",
            time: "5:18 PM",
            icon: "chat gx-text-grey"
          },
          {
            image: "https://via.placeholder.com/150x150",
            title:
              "Domnic Brown has sent you a group invitation for Global Health",
            time: "5:36 PM",
            icon: "birthday text-info"
          },
          {
            image: "https://via.placeholder.com/150x150",
            title: "John Smith has birthday today",
            time: "5:54 PM",
            icon: "birthday gx-text-warning"
          },
          {
            image: "https://via.placeholder.com/150x150",
            title: "Chris has updated his profile picture",
            time: "5:25 PM",
            icon: "profile gx-text-grey"
          }
        ]);
    },
    1826: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(3);
      t.default = function(e) {
        var t = e.notification,
          n = t.image,
          a = t.badge,
          o = t.name,
          i = t.time,
          s = t.message;
        return l.createElement(
          "li",
          { className: "gx-media" },
          l.createElement(
            "div",
            { className: "gx-user-thumb gx-mr-3" },
            l.createElement(r.Avatar, {
              className: "gx-size-40",
              alt: n,
              src: n
            }),
            a > 0
              ? l.createElement(
                  "span",
                  {
                    className:
                      "gx-badge gx-badge-danger gx-text-white gx-rounded-circle"
                  },
                  a
                )
              : null
          ),
          l.createElement(
            "div",
            { className: "gx-media-body" },
            l.createElement(
              "div",
              {
                className:
                  "gx-flex-row gx-justify-content-between gx-align-items-center"
              },
              l.createElement(
                "h5",
                { className: "gx-text-capitalize gx-user-name gx-mb-0" },
                l.createElement("span", { className: "gx-link" }, o)
              ),
              l.createElement(
                "span",
                { className: "gx-meta-date" },
                l.createElement("small", null, i)
              )
            ),
            l.createElement("p", { className: "gx-fs-sm" }, s),
            l.createElement(
              "span",
              { className: "gx-btn gx-btn-sm gx-top2 gx-text-muted" },
              l.createElement("i", { className: "icon icon-reply gx-pr-2" }),
              "Reply"
            ),
            l.createElement(
              "span",
              { className: "gx-btn gx-btn-sm gx-top2 gx-text-muted" },
              l.createElement("i", {
                className: "icon icon-custom-view gx-pr-2"
              }),
              "Read"
            )
          )
        );
      };
    },
    1827: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.notifications = [
          {
            id: 1,
            image: "https://via.placeholder.com/150x150",
            name: "Domnic Brown",
            time: "6:19 PM",
            message: "There are many variations of passages of...",
            badge: 5
          },
          {
            id: 2,
            image: "https://via.placeholder.com/150x150",
            name: "John Smith",
            time: "4:18 PM",
            message: "Lorem Ipsum is simply dummy text of the..."
          },
          {
            id: 3,
            image: "https://via.placeholder.com/150x150",
            name: "John Smith",
            time: "7:10 PM",
            message: "The point of using Lorem Ipsum is that it has a...",
            badge: 8
          },
          {
            id: 4,
            image: "https://via.placeholder.com/150x150",
            name: "alex dolgove",
            time: "5:10 PM",
            message: "It is a long established fact that a reader will..."
          },
          {
            id: 5,
            image: "https://via.placeholder.com/150x150",
            name: "Domnic Harris",
            time: "7:35 PM",
            message: "All the Lorem Ipsum generators on the...",
            badge: 3
          }
        ]);
    },
    1828: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(0)),
        s = n(3),
        c = n(132),
        u = o(n(177)),
        d = o(n(401)),
        m = o(n(178)),
        p = o(n(408)),
        g = o(n(409)),
        f = n(16),
        E = o(n(410)),
        h = o(n(369)),
        x = o(n(38)),
        _ = n(14),
        v = s.Layout.Header,
        y = s.Select.Option,
        N = i.default.createElement(
          s.Menu,
          {
            onClick: function(e) {
              s.message.info("Click on menu item.");
            }
          },
          i.default.createElement(s.Menu.Item, { key: "1" }, "Products"),
          i.default.createElement(s.Menu.Item, { key: "2" }, "Apps"),
          i.default.createElement(s.Menu.Item, { key: "3" }, "Blogs")
        );
      function b(e) {
        console.log("selected " + e);
      }
      var C,
        T,
        S,
        O = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { searchText: "" }),
              (t.languageMenu = function() {
                return i.default.createElement(
                  c.CustomScrollbars,
                  { className: "gx-popover-lang-scroll" },
                  i.default.createElement(
                    "ul",
                    { className: "gx-sub-popover" },
                    u.default.map(function(e) {
                      return i.default.createElement(
                        "li",
                        {
                          className: "gx-media gx-pointer",
                          key: JSON.stringify(e),
                          onClick: function(n) {
                            return t.props.switchLanguage({
                              varialbes: { locale: e }
                            });
                          }
                        },
                        i.default.createElement("i", {
                          className: "flag flag-24 gx-mr-2 flag-" + e.icon
                        }),
                        i.default.createElement(
                          "span",
                          { className: "gx-language-text" },
                          e.name
                        )
                      );
                    })
                  )
                );
              }),
              (t.updateSearchChatUser = function(e) {
                t.setState({ searchText: e.target.value });
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.locale,
                l = t.navCollapsed;
              return i.default.createElement(
                "div",
                { className: "gx-header-horizontal gx-header-horizontal-dark" },
                i.default.createElement(
                  "div",
                  { className: "gx-header-horizontal-top" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-top-flex" },
                      i.default.createElement(
                        "div",
                        { className: "gx-header-horizontal-top-left" },
                        i.default.createElement("i", {
                          className: "icon icon-alert gx-mr-3"
                        }),
                        i.default.createElement(
                          "p",
                          { className: "gx-mb-0 gx-text-truncate" },
                          i.default.createElement(h.default, {
                            id: "app.announced"
                          })
                        )
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-login-list" },
                        i.default.createElement("li", null, "Login"),
                        i.default.createElement("li", null, "Signup")
                      )
                    )
                  )
                ),
                i.default.createElement(
                  v,
                  { className: "gx-header-horizontal-main" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-main-flex" },
                      i.default.createElement(
                        "div",
                        {
                          className:
                            "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
                        },
                        i.default.createElement("i", {
                          className: "gx-icon-btn icon icon-menu",
                          onClick: function() {
                            e.props.toggleCollapsedSideNav(!l);
                          }
                        })
                      ),
                      i.default.createElement(
                        f.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(350) })
                      ),
                      i.default.createElement(
                        f.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(412) })
                      ),
                      i.default.createElement(
                        "div",
                        {
                          className: "gx-header-search gx-d-none gx-d-lg-flex"
                        },
                        i.default.createElement(d.default, {
                          styleName: "gx-lt-icon-search-bar-lg",
                          placeholder: "Search in app...",
                          onChange: this.updateSearchChatUser.bind(this),
                          value: this.state.searchText
                        }),
                        i.default.createElement(
                          s.Select,
                          {
                            defaultValue: "lucy",
                            style: { width: 120 },
                            onChange: b
                          },
                          i.default.createElement(
                            y,
                            { value: "jack" },
                            "Products"
                          ),
                          i.default.createElement(y, { value: "lucy" }, "Apps"),
                          i.default.createElement(
                            y,
                            { value: "Yiminghe" },
                            "Blogs"
                          )
                        )
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-header-notifications gx-ml-auto" },
                        i.default.createElement(
                          "li",
                          {
                            className:
                              "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
                          },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(
                                "div",
                                { className: "gx-d-flex" },
                                i.default.createElement(
                                  s.Dropdown,
                                  { overlay: N },
                                  i.default.createElement(
                                    s.Button,
                                    null,
                                    "Category ",
                                    i.default.createElement(s.Icon, {
                                      type: "down"
                                    })
                                  )
                                ),
                                i.default.createElement(d.default, {
                                  styleName: "gx-popover-search-bar",
                                  placeholder: "Search in app...",
                                  onChange: this.updateSearchChatUser.bind(
                                    this
                                  ),
                                  value: this.state.searchText
                                })
                              ),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-search-new"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-notify" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(p.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-notification"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-msg" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(g.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className: "gx-pointer gx-status-pos gx-d-block"
                              },
                              i.default.createElement("i", {
                                className: "icon icon-chat-new"
                              }),
                              i.default.createElement("span", {
                                className:
                                  "gx-status gx-status-rtl gx-small gx-orange"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-language" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: this.languageMenu(),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className:
                                  "gx-pointer gx-flex-row gx-align-items-center"
                              },
                              i.default.createElement("i", {
                                className: "flag flag-24 flag-" + a.icon
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-user-nav" },
                          i.default.createElement(m.default, null)
                        )
                      )
                    )
                  )
                ),
                i.default.createElement(
                  "div",
                  {
                    className:
                      "gx-header-horizontal-nav gx-d-none gx-d-lg-block"
                  },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-nav-flex" },
                      i.default.createElement(E.default, null),
                      i.default.createElement(
                        "ul",
                        { className: "gx-header-notifications gx-ml-auto" },
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-menu-lines"
                            })
                          )
                        ),
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-setting"
                            })
                          )
                        ),
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-apps-new"
                            })
                          )
                        )
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component),
        A = x.default(
          C ||
            (C = l(
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navCollapsed\n    }\n  }\n"
              ],
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navCollapsed\n    }\n  }\n"
              ]
            ))
        ),
        I = x.default(
          T ||
            (T = l(
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ],
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ]
            ))
        ),
        L = x.default(
          S ||
            (S = l(
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ],
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ]
            ))
        );
      t.HorizontalDarkModule = _.compose(
        _.graphql(I, { name: "toggleCollapsedSideNav" }),
        _.graphql(L, { name: "switchLanguage" }),
        _.graphql(A, {
          props: function(e) {
            var t = e.settings.settings;
            return { locale: t.locale, navCollapsed: t.navCollapsed };
          },
          name: "settings"
        })
      )(O);
    },
    1829: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(0)),
        s = n(3),
        c = n(132),
        u = o(n(177)),
        d = o(n(401)),
        m = o(n(178)),
        p = o(n(408)),
        g = o(n(409)),
        f = o(n(410)),
        E = n(16),
        h = o(n(369)),
        x = o(n(38)),
        _ = n(14),
        v = s.Layout.Header,
        y = i.default.createElement(
          s.Menu,
          {
            onClick: function(e) {
              s.message.info("Click on menu item.");
            }
          },
          i.default.createElement(s.Menu.Item, { key: "1" }, "Products"),
          i.default.createElement(s.Menu.Item, { key: "2" }, "Apps"),
          i.default.createElement(s.Menu.Item, { key: "3" }, "Blogs")
        );
      var N,
        b,
        C,
        T = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { searchText: "" }),
              (t.languageMenu = function() {
                return i.default.createElement(
                  c.CustomScrollbars,
                  { className: "gx-popover-lang-scroll" },
                  i.default.createElement(
                    "ul",
                    { className: "gx-sub-popover" },
                    u.default.map(function(e) {
                      return i.default.createElement(
                        "li",
                        {
                          className: "gx-media gx-pointer",
                          key: JSON.stringify(e),
                          onClick: function(n) {
                            return t.props.switchLanguage({
                              variables: { locale: e }
                            });
                          }
                        },
                        i.default.createElement("i", {
                          className: "flag flag-24 gx-mr-2 flag-" + e.icon
                        }),
                        i.default.createElement(
                          "span",
                          { className: "gx-language-text" },
                          e.name
                        )
                      );
                    })
                  )
                );
              }),
              (t.updateSearchChatUser = function(e) {
                t.setState({ searchText: e.target.value });
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.locale,
                l = t.navCollapsed;
              return i.default.createElement(
                "div",
                {
                  className:
                    "gx-header-horizontal gx-header-horizontal-dark gx-inside-header-horizontal"
                },
                i.default.createElement(
                  "div",
                  { className: "gx-header-horizontal-top" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-top-flex" },
                      i.default.createElement(
                        "div",
                        { className: "gx-header-horizontal-top-left" },
                        i.default.createElement("i", {
                          className: "icon icon-alert gx-mr-3"
                        }),
                        i.default.createElement(
                          "p",
                          { className: "gx-mb-0 gx-text-truncate" },
                          i.default.createElement(h.default, {
                            id: "app.announced"
                          })
                        )
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-login-list" },
                        i.default.createElement("li", null, "Login"),
                        i.default.createElement("li", null, "Signup")
                      )
                    )
                  )
                ),
                i.default.createElement(
                  v,
                  { className: "gx-header-horizontal-main" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-main-flex" },
                      i.default.createElement(
                        "div",
                        {
                          className:
                            "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3 6e"
                        },
                        i.default.createElement("i", {
                          className: "gx-icon-btn icon icon-menu",
                          onClick: function() {
                            e.props.toggleCollapsedSideNav(!l);
                          }
                        })
                      ),
                      i.default.createElement(
                        E.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(350) })
                      ),
                      i.default.createElement(
                        E.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(412) })
                      ),
                      i.default.createElement(
                        "div",
                        {
                          className:
                            "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
                        },
                        i.default.createElement(f.default, null)
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-header-notifications gx-ml-auto" },
                        i.default.createElement(
                          "li",
                          { className: "gx-notify gx-notify-search" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(
                                "div",
                                { className: "gx-d-flex" },
                                i.default.createElement(
                                  s.Dropdown,
                                  { overlay: y },
                                  i.default.createElement(
                                    s.Button,
                                    null,
                                    "Category ",
                                    i.default.createElement(s.Icon, {
                                      type: "down"
                                    })
                                  )
                                ),
                                i.default.createElement(d.default, {
                                  styleName: "gx-popover-search-bar",
                                  placeholder: "Search in app...",
                                  onChange: this.updateSearchChatUser.bind(
                                    this
                                  ),
                                  value: this.state.searchText
                                })
                              ),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-search-new"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-notify" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(p.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-notification"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-msg" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(g.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className: "gx-pointer gx-status-pos gx-d-block"
                              },
                              i.default.createElement("i", {
                                className: "icon icon-chat-new"
                              }),
                              i.default.createElement("span", {
                                className:
                                  "gx-status gx-status-rtl gx-small gx-orange"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-language" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: this.languageMenu(),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className:
                                  "gx-pointer gx-flex-row gx-align-items-center"
                              },
                              i.default.createElement("i", {
                                className: "flag flag-24 flag-" + a.icon
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-user-nav" },
                          i.default.createElement(m.default, null)
                        )
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component),
        S = x.default(
          N ||
            (N = l(
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navCollapsed\n    }\n  }\n"
              ],
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navCollapsed\n    }\n  }\n"
              ]
            ))
        ),
        O = x.default(
          b ||
            (b = l(
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ],
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ]
            ))
        ),
        A = x.default(
          C ||
            (C = l(
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ],
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ]
            ))
        );
      t.InsideHeaderModule = _.compose(
        _.graphql(O, { name: "toggleCollapsedSideNav" }),
        _.graphql(A, { name: "switchLanguage" }),
        _.graphql(S, {
          props: function(e) {
            var t = e.settings.settings;
            return { locale: t.locale, navCollapsed: t.navCollapsed };
          },
          name: "settings"
        })
      )(T);
    },
    1830: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(0)),
        s = n(3),
        c = n(132),
        u = o(n(177)),
        d = o(n(401)),
        m = o(n(178)),
        p = o(n(408)),
        g = o(n(409)),
        f = n(67),
        E = o(n(410)),
        h = n(16),
        x = o(n(369)),
        _ = o(n(38)),
        v = n(14),
        y = s.Layout.Header,
        N = s.Select.Option,
        b = i.default.createElement(
          s.Menu,
          {
            onClick: function(e) {
              s.message.info("Click on menu item.");
            }
          },
          i.default.createElement(s.Menu.Item, { key: "1" }, "Products"),
          i.default.createElement(s.Menu.Item, { key: "2" }, "Blog"),
          i.default.createElement(s.Menu.Item, { key: "3" }, "Apps")
        );
      function C(e) {
        console.log("selected " + e);
      }
      var T,
        S,
        O,
        A = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { searchText: "" }),
              (t.languageMenu = function() {
                return i.default.createElement(
                  c.CustomScrollbars,
                  { className: "gx-popover-lang-scroll" },
                  i.default.createElement(
                    "ul",
                    { className: "gx-sub-popover" },
                    u.default.map(function(e) {
                      return i.default.createElement(
                        "li",
                        {
                          className: "gx-media gx-pointer",
                          key: JSON.stringify(e),
                          onClick: function(n) {
                            return t.props.switchLanguage({
                              variables: { locale: e }
                            });
                          }
                        },
                        i.default.createElement("i", {
                          className: "flag flag-24 gx-mr-2 flag-" + e.icon
                        }),
                        i.default.createElement(
                          "span",
                          { className: "gx-language-text" },
                          e.name
                        )
                      );
                    })
                  )
                );
              }),
              (t.updateSearchChatUser = function(e) {
                t.setState({ searchText: e.target.value });
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.width,
                l = t.locale,
                r = t.navCollapsed;
              return i.default.createElement(
                "div",
                {
                  className:
                    "gx-header-horizontal gx-header-horizontal-dark gx-above-header-horizontal"
                },
                i.default.createElement(
                  "div",
                  {
                    className:
                      "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
                  },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-nav-flex" },
                      i.default.createElement(E.default, null),
                      i.default.createElement(
                        "ul",
                        { className: "gx-header-notifications gx-ml-auto" },
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-menu-lines"
                            })
                          )
                        ),
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-setting"
                            })
                          )
                        ),
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-apps-new"
                            })
                          )
                        )
                      )
                    )
                  )
                ),
                i.default.createElement(
                  "div",
                  { className: "gx-header-horizontal-top" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-top-flex" },
                      i.default.createElement(
                        "div",
                        { className: "gx-header-horizontal-top-left" },
                        i.default.createElement("i", {
                          className: "icon icon-alert gx-mr-3"
                        }),
                        i.default.createElement(
                          "p",
                          { className: "gx-mb-0 gx-text-truncate" },
                          i.default.createElement(x.default, {
                            id: "app.announced"
                          })
                        )
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-login-list" },
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(x.default, {
                            id: "app.userAuth.login"
                          })
                        ),
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(x.default, {
                            id: "app.userAuth.signUp"
                          })
                        )
                      )
                    )
                  )
                ),
                i.default.createElement(
                  y,
                  { className: "gx-header-horizontal-main" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-main-flex" },
                      i.default.createElement(
                        "div",
                        {
                          className:
                            "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
                        },
                        i.default.createElement("i", {
                          className: "gx-icon-btn icon icon-menu",
                          onClick: function() {
                            a <= f.TAB_SIZE &&
                              e.props.toggleCollapsedSideNav(!r);
                          }
                        })
                      ),
                      i.default.createElement(
                        h.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(350) })
                      ),
                      i.default.createElement(
                        h.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(412) })
                      ),
                      i.default.createElement(
                        "div",
                        {
                          className: "gx-header-search gx-d-none gx-d-lg-flex"
                        },
                        i.default.createElement(d.default, {
                          styleName: "gx-lt-icon-search-bar-lg",
                          placeholder: "Search in app...",
                          onChange: this.updateSearchChatUser.bind(this),
                          value: this.state.searchText
                        }),
                        i.default.createElement(
                          s.Select,
                          {
                            defaultValue: "lucy",
                            style: { width: 120 },
                            onChange: C
                          },
                          i.default.createElement(
                            N,
                            { value: "jack" },
                            "Products"
                          ),
                          i.default.createElement(N, { value: "lucy" }, "Apps"),
                          i.default.createElement(
                            N,
                            { value: "Yiminghe" },
                            "Blogs"
                          )
                        )
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-header-notifications gx-ml-auto" },
                        i.default.createElement(
                          "li",
                          {
                            className:
                              "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
                          },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(
                                "div",
                                { className: "gx-d-flex" },
                                i.default.createElement(
                                  s.Dropdown,
                                  { overlay: b },
                                  i.default.createElement(
                                    s.Button,
                                    null,
                                    "Category ",
                                    i.default.createElement(s.Icon, {
                                      type: "down"
                                    })
                                  )
                                ),
                                i.default.createElement(d.default, {
                                  styleName: "gx-popover-search-bar",
                                  placeholder: "Search in app...",
                                  onChange: this.updateSearchChatUser.bind(
                                    this
                                  ),
                                  value: this.state.searchText
                                })
                              ),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-search-new"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-notify" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(p.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-notification"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-msg" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(g.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className: "gx-pointer gx-status-pos gx-d-block"
                              },
                              i.default.createElement("i", {
                                className: "icon icon-chat-new"
                              }),
                              i.default.createElement("span", {
                                className:
                                  "gx-status gx-status-rtl gx-small gx-orange"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-language" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: this.languageMenu(),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className:
                                  "gx-pointer gx-flex-row gx-align-items-center"
                              },
                              i.default.createElement("i", {
                                className: "flag flag-24 flag-" + l.icon
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-user-nav" },
                          i.default.createElement(m.default, null)
                        )
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component),
        I = _.default(
          T ||
            (T = l(
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navCollapsed\n      width\n    }\n  }\n"
              ],
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navCollapsed\n      width\n    }\n  }\n"
              ]
            ))
        ),
        L = _.default(
          S ||
            (S = l(
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ],
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ]
            ))
        ),
        k = _.default(
          O ||
            (O = l(
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ],
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ]
            ))
        );
      t.AboveHeaderModule = v.compose(
        v.graphql(L, { name: "toggleCollapsedSideNav" }),
        v.graphql(k, { name: "switchLanguage" }),
        v.graphql(I, {
          props: function(e) {
            var t = e.settings.settings;
            return {
              locale: t.locale,
              navCollapsed: t.navCollapsed,
              width: t.width
            };
          },
          name: "settings"
        })
      )(A);
    },
    1831: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(0)),
        s = n(3),
        c = n(132),
        u = o(n(177)),
        d = o(n(401)),
        m = o(n(178)),
        p = o(n(408)),
        g = o(n(409)),
        f = o(n(410)),
        E = n(16),
        h = o(n(369)),
        x = o(n(38)),
        _ = n(14),
        v = s.Layout.Header,
        y = s.Select.Option,
        N = i.default.createElement(
          s.Menu,
          {
            onClick: function(e) {
              s.message.info("Click on menu item.");
            }
          },
          i.default.createElement(s.Menu.Item, { key: "1" }, "Products"),
          i.default.createElement(s.Menu.Item, { key: "2" }, "Apps"),
          i.default.createElement(s.Menu.Item, { key: "3" }, "Blogs")
        );
      function b(e) {
        console.log("selected " + e);
      }
      var C,
        T,
        S,
        O = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { searchText: "" }),
              (t.languageMenu = function() {
                return i.default.createElement(
                  c.CustomScrollbars,
                  { className: "gx-popover-lang-scroll" },
                  i.default.createElement(
                    "ul",
                    { className: "gx-sub-popover" },
                    u.default.map(function(e) {
                      return i.default.createElement(
                        "li",
                        {
                          className: "gx-media gx-pointer",
                          key: JSON.stringify(e),
                          onClick: function(n) {
                            return t.props.switchLanguage({
                              variables: { locale: e }
                            });
                          }
                        },
                        i.default.createElement("i", {
                          className: "flag flag-24 gx-mr-2 flag-" + e.icon
                        }),
                        i.default.createElement(
                          "span",
                          { className: "gx-language-text" },
                          e.name
                        )
                      );
                    })
                  )
                );
              }),
              (t.updateSearchChatUser = function(e) {
                t.setState({ searchText: e.target.value });
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.locale,
                l = t.navCollapsed;
              return i.default.createElement(
                "div",
                {
                  className:
                    "gx-header-horizontal gx-header-horizontal-dark gx-below-header-horizontal"
                },
                i.default.createElement(
                  "div",
                  { className: "gx-header-horizontal-top" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-top-flex" },
                      i.default.createElement(
                        "div",
                        { className: "gx-header-horizontal-top-left" },
                        i.default.createElement("i", {
                          className: "icon icon-alert gx-mr-3"
                        }),
                        i.default.createElement(
                          "p",
                          { className: "gx-mb-0 gx-text-truncate" },
                          i.default.createElement(h.default, {
                            id: "app.announced"
                          })
                        )
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-login-list" },
                        i.default.createElement("li", null, "Login"),
                        i.default.createElement("li", null, "Signup")
                      )
                    )
                  )
                ),
                i.default.createElement(
                  v,
                  { className: "gx-header-horizontal-main" },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-main-flex" },
                      i.default.createElement(
                        "div",
                        {
                          className:
                            "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
                        },
                        i.default.createElement("i", {
                          className: "gx-icon-btn icon icon-menu",
                          onClick: function() {
                            e.props.toggleCollapsedSideNav(!l);
                          }
                        })
                      ),
                      i.default.createElement(
                        E.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-block gx-d-lg-none gx-pointer gx-mr-xs-3 gx-pt-xs-1 gx-w-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(350) })
                      ),
                      i.default.createElement(
                        E.Link,
                        {
                          to: "/",
                          className:
                            "gx-d-none gx-d-lg-block gx-pointer gx-mr-xs-5 gx-logo"
                        },
                        i.default.createElement("img", { alt: "", src: n(412) })
                      ),
                      i.default.createElement(
                        "div",
                        {
                          className: "gx-header-search gx-d-none gx-d-lg-flex"
                        },
                        i.default.createElement(d.default, {
                          styleName: "gx-lt-icon-search-bar-lg",
                          placeholder: "Search in app...",
                          onChange: this.updateSearchChatUser.bind(this),
                          value: this.state.searchText
                        }),
                        i.default.createElement(
                          s.Select,
                          {
                            defaultValue: "lucy",
                            style: { width: 120 },
                            onChange: b
                          },
                          i.default.createElement(
                            y,
                            { value: "jack" },
                            "Products"
                          ),
                          i.default.createElement(y, { value: "lucy" }, "Apps"),
                          i.default.createElement(
                            y,
                            { value: "Yiminghe" },
                            "Blogs"
                          )
                        )
                      ),
                      i.default.createElement(
                        "ul",
                        { className: "gx-header-notifications gx-ml-auto" },
                        i.default.createElement(
                          "li",
                          {
                            className:
                              "gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none"
                          },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(
                                "div",
                                { className: "gx-d-flex" },
                                i.default.createElement(
                                  s.Dropdown,
                                  { overlay: N },
                                  i.default.createElement(
                                    s.Button,
                                    null,
                                    "Category ",
                                    i.default.createElement(s.Icon, {
                                      type: "down"
                                    })
                                  )
                                ),
                                i.default.createElement(d.default, {
                                  styleName: "gx-popover-search-bar",
                                  placeholder: "Search in app...",
                                  onChange: this.updateSearchChatUser.bind(
                                    this
                                  ),
                                  value: this.state.searchText
                                })
                              ),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-search-new"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-notify" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(p.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              { className: "gx-pointer gx-d-block" },
                              i.default.createElement("i", {
                                className: "icon icon-notification"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-msg" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: i.default.createElement(g.default, null),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className: "gx-pointer gx-status-pos gx-d-block"
                              },
                              i.default.createElement("i", {
                                className: "icon icon-chat-new"
                              }),
                              i.default.createElement("span", {
                                className:
                                  "gx-status gx-status-rtl gx-small gx-orange"
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-language" },
                          i.default.createElement(
                            s.Popover,
                            {
                              overlayClassName: "gx-popover-horizantal",
                              placement: "bottomRight",
                              content: this.languageMenu(),
                              trigger: "click"
                            },
                            i.default.createElement(
                              "span",
                              {
                                className:
                                  "gx-pointer gx-flex-row gx-align-items-center"
                              },
                              i.default.createElement("i", {
                                className: "flag flag-24 flag-" + a.icon
                              })
                            )
                          )
                        ),
                        i.default.createElement(
                          "li",
                          { className: "gx-user-nav" },
                          i.default.createElement(m.default, null)
                        )
                      )
                    )
                  )
                ),
                i.default.createElement(
                  "div",
                  {
                    className:
                      "gx-header-horizontal-nav gx-header-horizontal-nav-curve gx-d-none gx-d-lg-block"
                  },
                  i.default.createElement(
                    "div",
                    { className: "gx-container" },
                    i.default.createElement(
                      "div",
                      { className: "gx-header-horizontal-nav-flex" },
                      i.default.createElement(f.default, null),
                      i.default.createElement(
                        "ul",
                        { className: "gx-header-notifications gx-ml-auto" },
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-menu-lines"
                            })
                          )
                        ),
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-setting"
                            })
                          )
                        ),
                        i.default.createElement(
                          "li",
                          null,
                          i.default.createElement(
                            "span",
                            { className: "gx-pointer gx-d-block" },
                            i.default.createElement("i", {
                              className: "icon icon-apps-new"
                            })
                          )
                        )
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component),
        A = x.default(
          C ||
            (C = l(
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navCollapsed\n    }\n  }\n"
              ],
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navCollapsed\n    }\n  }\n"
              ]
            ))
        ),
        I = x.default(
          T ||
            (T = l(
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ],
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ]
            ))
        ),
        L = x.default(
          S ||
            (S = l(
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ],
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ]
            ))
        );
      t.BelowHeaderModule = _.compose(
        _.graphql(I, { name: "toggleCollapsedSideNav" }),
        _.graphql(L, { name: "switchLanguage" }),
        _.graphql(A, {
          props: function(e) {
            var t = e.settings.settings;
            return { locale: t.locale, navCollapsed: t.navCollapsed };
          },
          name: "settings"
        })
      )(O);
    },
    1832: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(0)),
        s = n(3),
        c = n(16),
        u = n(132),
        d = o(n(177)),
        m = o(n(178)),
        p = n(390);
      n(1833);
      var g,
        f,
        E,
        h = n(67),
        x = n(14),
        _ = o(n(38)),
        v = n(16),
        y = s.Layout.Header,
        N = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { searchText: "" }),
              (t.languageMenu = function() {
                return i.createElement(
                  u.CustomScrollbars,
                  { className: "gx-popover-lang-scroll" },
                  i.createElement(
                    "ul",
                    { className: "gx-sub-popover" },
                    d.default.map(function(e) {
                      return i.createElement(
                        "li",
                        {
                          className: "gx-media gx-pointer",
                          key: JSON.stringify(e),
                          onClick: function(n) {
                            return t.props.switchLanguage({
                              variables: { locale: e }
                            });
                          }
                        },
                        i.createElement("i", {
                          className: "flag flag-24 gx-mr-2 flag-" + e.icon
                        }),
                        i.createElement(
                          "span",
                          { className: "gx-language-text" },
                          e.name
                        )
                      );
                    })
                  )
                );
              }),
              (t.updateSearchChatUser = function(e) {
                t.setState({ searchText: e.target.value });
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.getLocalHeaderStyle = function() {
              switch (this.props.location.pathname.split("/")[1]) {
                case "nearx":
                  return "NearX-Topbar";
                case "hyperx":
                case "core":
                  return "HyperX-Topbar";
                case "refinex":
                  return "RefineX-Topbar";
                default:
                  return "";
              }
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                a = (t.locale, t.width),
                l = t.navCollapsed,
                r = t.navStyle;
              return i.createElement(
                p.Auxiliary,
                null,
                i.createElement(
                  y,
                  { className: this.getLocalHeaderStyle() + " " },
                  r === h.NAV_STYLE_DRAWER ||
                    ((r === h.NAV_STYLE_FIXED ||
                      r === h.NAV_STYLE_MINI_SIDEBAR) &&
                      a < h.TAB_SIZE)
                    ? i.createElement(
                        "div",
                        {
                          className: "gx-linebar gx-mr-3",
                          style: { color: "#ffffff" }
                        },
                        i.createElement("i", {
                          className: "gx-icon-btn icon icon-menu",
                          style: { color: "#000000" },
                          onClick: function() {
                            e.props.toggleCollapsedSideNav({
                              variables: { navCollapsed: !l }
                            });
                          }
                        })
                      )
                    : null,
                  i.createElement(
                    c.Link,
                    {
                      to: "/",
                      className: "gx-d-block gx-d-lg-none gx-pointer"
                    },
                    i.createElement("img", {
                      alt: "",
                      src: n(490),
                      style: { maxWidth: 40 }
                    })
                  ),
                  i.createElement(
                    "ul",
                    { className: "gx-header-notifications gx-ml-auto" },
                    i.createElement(
                      p.Auxiliary,
                      null,
                      i.createElement(
                        "li",
                        { className: "gx-user-nav" },
                        i.createElement(m.default, null)
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component),
        b = _.default(
          g ||
            (g = l(
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navStyle\n      navCollapsed\n      width\n    }\n  }\n"
              ],
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navStyle\n      navCollapsed\n      width\n    }\n  }\n"
              ]
            ))
        ),
        C = _.default(
          f ||
            (f = l(
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ],
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ]
            ))
        ),
        T = _.default(
          E ||
            (E = l(
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ],
              [
                "\n  mutation switchLanguage($locale: LocaleInput) {\n    switchLanguage(locale: $locale) @client\n  }\n"
              ]
            ))
        );
      t.TopbarModule = x.compose(
        v.withRouter,
        x.graphql(C, { name: "toggleCollapsedSideNav" }),
        x.graphql(T, { name: "switchLanguage" }),
        x.graphql(b, {
          props: function(e) {
            var t = e.settings.settings;
            return {
              locale: t.locale,
              navStyle: t.navStyle,
              navCollapsed: t.navCollapsed,
              width: t.width
            };
          },
          name: "settings"
        })
      )(N);
    },
    1833: function(e, t, n) {},
    1835: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.footerText = "Copyright Company Name © 2018");
    },
    1836: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        s,
        c,
        u,
        d,
        m = r(n(0)),
        p = n(3),
        g = o(n(1837)),
        f = n(390),
        E = n(132),
        h = n(67),
        x = n(14),
        _ = o(n(38)),
        v = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            (a.onChangeComplete = function(e, t) {
              var n = a.state.vars;
              (n[e] = t), a.setState({ vars: n });
            }),
              (a.handleColorChange = function(e, t) {
                var n = a.state.vars;
                e && (n[e] = t), console.log("vars: ", n);
              }),
              (a.getColorPicker = function(e) {
                return m.default.createElement(
                  "div",
                  { key: e, className: "gx-media gx-mb-1" },
                  m.default.createElement(
                    "div",
                    { className: "gx-ml-1 gx-mr-4" },
                    m.default.createElement(
                      g.default,
                      {
                        type: "sketch",
                        small: !0,
                        color: a.state.vars[e],
                        position: "bottom",
                        onChangeComplete: function(t) {
                          return a.handleColorChange(e, t);
                        }
                      },
                      m.default.createElement(
                        "span",
                        {
                          className:
                            "gx-pointer gx-text-capitalize gx-media-body"
                        },
                        e.substr(1, e.length).replace(/-/g, " ")
                      )
                    )
                  )
                );
              }),
              (a.resetTheme = function() {
                sessionStorage.setItem("app-theme", "{}"),
                  a.setState({ vars: a.state.initialValue });
              }),
              (a.toggleCustomizer = function() {
                a.setState(function(e) {
                  return { isCustomizerOpened: !e.isCustomizerOpened };
                });
              }),
              (a.onThemeTypeChange = function(e) {
                a.props.setThemeType(e.target.value);
              }),
              (a.onColorSelectionTypeChange = function(e) {
                a.props.setThemeColorSelection(e.target.value);
              }),
              (a.onNavStyleChange = function(e) {
                a.props.onNavStyleChange({ variables: { navStyle: e } });
              }),
              (a.getCustomizerContent = function() {
                var e = Object.keys(a.state.vars).map(function(e) {
                    return a.getColorPicker(e);
                  }),
                  t = a.props,
                  n = t.themeType,
                  l = t.layoutType,
                  r = t.navStyle,
                  o = t.colorSelection;
                return (
                  n === h.THEME_TYPE_DARK
                    ? document.body.classList.add("dark-theme")
                    : document.body.classList.contains("dark-theme") &&
                      document.body.classList.remove("dark-theme"),
                  m.default.createElement(
                    E.CustomScrollbars,
                    { className: "gx-customizer" },
                    m.default.createElement(
                      "div",
                      { className: "gx-customizer-item" },
                      m.default.createElement(
                        "h6",
                        { className: "gx-mb-3 gx-text-uppercase" },
                        "Theme"
                      ),
                      m.default.createElement(
                        p.Radio.Group,
                        { value: n, onChange: a.onThemeTypeChange },
                        m.default.createElement(
                          p.Radio.Button,
                          { value: h.THEME_TYPE_LITE },
                          "Lite"
                        ),
                        m.default.createElement(
                          p.Radio.Button,
                          { value: h.THEME_TYPE_SEMI_DARK },
                          "Semi Dark"
                        ),
                        m.default.createElement(
                          p.Radio.Button,
                          { value: h.THEME_TYPE_DARK },
                          "Dark"
                        )
                      )
                    ),
                    m.default.createElement(
                      "div",
                      { className: "gx-customizer-item" },
                      m.default.createElement(
                        "h6",
                        { className: "gx-mb-3 gx-text-uppercase" },
                        "Colors"
                      ),
                      m.default.createElement(
                        p.Radio.Group,
                        {
                          className: "gx-mb-3",
                          value: o,
                          onChange: a.onColorSelectionTypeChange
                        },
                        m.default.createElement(
                          p.Radio.Button,
                          { value: h.THEME_COLOR_SELECTION_PRESET },
                          "Preset Color Pallets"
                        ),
                        m.default.createElement(
                          p.Radio.Button,
                          { value: h.THEME_COLOR_SELECTION_CUSTOMIZE },
                          "Customize"
                        )
                      ),
                      o === h.THEME_COLOR_SELECTION_CUSTOMIZE
                        ? m.default.createElement(
                            "div",
                            { className: "gx-cus-customiz" },
                            e,
                            m.default.createElement(
                              p.Button,
                              {
                                className: "gx-mb-0",
                                type: "primary",
                                onClick: a.resetTheme
                              },
                              "Reset Theme"
                            )
                          )
                        : a.getPresetColors()
                    ),
                    m.default.createElement(
                      "h6",
                      { className: "gx-mb-3 gx-text-uppercase" },
                      "Nav Style"
                    ),
                    a.getNavStyles(r),
                    m.default.createElement(
                      "h6",
                      { className: "gx-mb-3 gx-text-uppercase" },
                      "Layout"
                    ),
                    a.getLayoutsTypes(l)
                  )
                );
              }),
              (a.handleThemeColor = function(e, t, n, l) {
                var r = a.state.vars;
                (r["@primary-color"] = e),
                  (r["@secondary-color"] = t),
                  (r["@nav-dark-bg"] = l),
                  (r["@nav-dark-text-color"] = n),
                  a.setState({ vars: r });
              }),
              (a.handleLayoutTypes = function(e) {}),
              (a.getPresetColors = function() {
                var e = Object.entries(a.state.vars)[0][1];
                return m.default.createElement(
                  "ul",
                  { className: "gx-color-option gx-list-inline" },
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement("span", {
                      onClick: a.handleThemeColor.bind(
                        a,
                        h.LIGHT_PURPLE,
                        h.LIGHT_PURPLE_SEC,
                        h.LIGHT_PURPLE_DARK_TEXT_COLOR,
                        h.LIGHT_PURPLE_NAV_DARK_BG
                      ),
                      style: {
                        backgroundColor: h.LIGHT_PURPLE_SEC,
                        color: h.LIGHT_PURPLE_DARK_TEXT_COLOR
                      },
                      className:
                        "gx-link gx-color-light-purple " +
                        (e === h.LIGHT_PURPLE && "active")
                    })
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement("span", {
                      onClick: a.handleThemeColor.bind(
                        a,
                        h.RED,
                        h.RED_SEC,
                        h.RED_DARK_TEXT_COLOR,
                        h.RED_NAV_DARK_BG
                      ),
                      style: {
                        backgroundColor: h.RED_SEC,
                        color: h.RED_DARK_TEXT_COLOR
                      },
                      className:
                        "gx-link gx-color-red " + (e === h.RED && "active")
                    })
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement("span", {
                      onClick: a.handleThemeColor.bind(
                        a,
                        h.BLUE,
                        h.BLUE_SEC,
                        h.BLUE_DARK_TEXT_COLOR,
                        h.BLUE_NAV_DARK_BG
                      ),
                      style: {
                        backgroundColor: h.BLUE_SEC,
                        color: h.BLUE_DARK_TEXT_COLOR
                      },
                      className:
                        "gx-link gx-color-blue " + (e === h.BLUE && "active")
                    })
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement("span", {
                      onClick: a.handleThemeColor.bind(
                        a,
                        h.DARK_BLUE,
                        h.DARK_BLUE_SEC,
                        h.DARK_BLUE_DARK_TEXT_COLOR,
                        h.DARK_BLUE_NAV_DARK_BG
                      ),
                      style: {
                        backgroundColor: h.DARK_BLUE_SEC,
                        color: h.DARK_BLUE_DARK_TEXT_COLOR
                      },
                      className:
                        "gx-link gx-color-dark-blue " +
                        (e === h.DARK_BLUE && "active")
                    })
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement("span", {
                      onClick: a.handleThemeColor.bind(
                        a,
                        h.ORANGE,
                        h.ORANGE_SEC,
                        h.ORANGE_DARK_TEXT_COLOR,
                        h.ORANGE_NAV_DARK_BG
                      ),
                      style: {
                        backgroundColor: h.ORANGE_SEC,
                        color: h.ORANGE_DARK_TEXT_COLOR
                      },
                      className:
                        "gx-link gx-color-orange " +
                        (e === h.ORANGE && "active")
                    })
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement("span", {
                      onClick: a.handleThemeColor.bind(
                        a,
                        h.LIGHT_BLUE,
                        h.LIGHT_BLUE_SEC,
                        h.LIGHT_BLUE_DARK_TEXT_COLOR,
                        h.LIGHT_BLUE_NAV_DARK_BG
                      ),
                      style: {
                        backgroundColor: h.LIGHT_BLUE_SEC,
                        color: h.LIGHT_BLUE_DARK_TEXT_COLOR
                      },
                      className:
                        "gx-link gx-color-light-blue " +
                        (e === h.LIGHT_BLUE && "active")
                    })
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement("span", {
                      onClick: a.handleThemeColor.bind(
                        a,
                        h.DEEP_ORANGE,
                        h.DEEP_ORANGE_SEC,
                        h.DEEP_ORANGE_DARK_TEXT_COLOR,
                        h.DEEP_ORANGE_NAV_DARK_BG
                      ),
                      style: {
                        backgroundColor: h.DEEP_ORANGE_SEC,
                        color: h.DEEP_ORANGE_DARK_TEXT_COLOR
                      },
                      className:
                        "gx-link gx-color-deep-orange " +
                        (e === h.DEEP_ORANGE && "active")
                    })
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement("span", {
                      onClick: a.handleThemeColor.bind(
                        a,
                        h.LIGHT_PURPLE_1,
                        h.LIGHT_PURPLE_1_SEC,
                        h.LIGHT_PURPLE_1_DARK_TEXT_COLOR,
                        h.LIGHT_PURPLE_1_NAV_DARK_BG
                      ),
                      style: {
                        backgroundColor: h.LIGHT_PURPLE_1_SEC,
                        color: h.LIGHT_PURPLE_1_DARK_TEXT_COLOR
                      },
                      className:
                        "gx-link gx-color-light-purple1 " +
                        (e === h.LIGHT_PURPLE_1 && "active")
                    })
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement("span", {
                      onClick: a.handleThemeColor.bind(
                        a,
                        h.LIGHT_PURPLE_2,
                        h.LIGHT_PURPLE_2_SEC,
                        h.LIGHT_PURPLE_2_DARK_TEXT_COLOR,
                        h.LIGHT_PURPLE_2_NAV_DARK_BG
                      ),
                      style: {
                        backgroundColor: h.LIGHT_PURPLE_2_SEC,
                        color: h.LIGHT_PURPLE_2_DARK_TEXT_COLOR
                      },
                      className:
                        "gx-link gx-color-light-purple2 " +
                        (e === h.LIGHT_PURPLE_2 && "active")
                    })
                  )
                );
              }),
              (a.getLayoutsTypes = function(e) {
                return m.default.createElement(
                  "ul",
                  { className: "gx-layout-option gx-list-inline" },
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.handleLayoutTypes.bind(
                          a,
                          h.LAYOUT_TYPE_FRAMED
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.LAYOUT_TYPE_FRAMED && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1908),
                        alt: "framed"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.handleLayoutTypes.bind(
                          a,
                          h.LAYOUT_TYPE_FULL
                        ),
                        className:
                          "gx-pointer " + (e === h.LAYOUT_TYPE_FULL && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1909),
                        alt: "full width"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.handleLayoutTypes.bind(
                          a,
                          h.LAYOUT_TYPE_BOXED
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.LAYOUT_TYPE_BOXED && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1910),
                        alt: "boxed"
                      })
                    )
                  )
                );
              }),
              (a.getNavStyles = function(e) {
                return m.default.createElement(
                  "ul",
                  { className: "gx-nav-option gx-list-inline" },
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(a, h.NAV_STYLE_FIXED),
                        className:
                          "gx-pointer " + (e === h.NAV_STYLE_FIXED && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1911),
                        alt: "fixed"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(
                          a,
                          h.NAV_STYLE_MINI_SIDEBAR
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.NAV_STYLE_MINI_SIDEBAR && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1912),
                        alt: "mini sidebar"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(a, h.NAV_STYLE_DRAWER),
                        className:
                          "gx-pointer " + (e === h.NAV_STYLE_DRAWER && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1913),
                        alt: "drawer nav"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(
                          a,
                          h.NAV_STYLE_NO_HEADER_MINI_SIDEBAR
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.NAV_STYLE_NO_HEADER_MINI_SIDEBAR && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1914),
                        alt: "no hader mini sidebar"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(
                          a,
                          h.NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR &&
                            "active")
                      },
                      m.default.createElement("img", {
                        src: n(1915),
                        alt: "vertical no header"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(
                          a,
                          h.NAV_STYLE_DEFAULT_HORIZONTAL
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.NAV_STYLE_DEFAULT_HORIZONTAL && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1916),
                        alt: "default horizontal"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(
                          a,
                          h.NAV_STYLE_DARK_HORIZONTAL
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.NAV_STYLE_DARK_HORIZONTAL && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1917),
                        alt: "dark horizontal"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(
                          a,
                          h.NAV_STYLE_INSIDE_HEADER_HORIZONTAL
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.NAV_STYLE_INSIDE_HEADER_HORIZONTAL &&
                            "active")
                      },
                      m.default.createElement("img", {
                        src: n(1918),
                        alt: "inside header horizontal"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(
                          a,
                          h.NAV_STYLE_BELOW_HEADER
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.NAV_STYLE_BELOW_HEADER && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1919),
                        alt: "below header"
                      })
                    )
                  ),
                  m.default.createElement(
                    "li",
                    null,
                    m.default.createElement(
                      "span",
                      {
                        onClick: a.onNavStyleChange.bind(
                          a,
                          h.NAV_STYLE_ABOVE_HEADER
                        ),
                        className:
                          "gx-pointer " +
                          (e === h.NAV_STYLE_ABOVE_HEADER && "active")
                      },
                      m.default.createElement("img", {
                        src: n(1920),
                        alt: "top to header"
                      })
                    )
                  )
                );
              });
            var l = {
                "@primary-color": "#038fde",
                "@secondary-color": "#fa8c16",
                "@text-color": "#545454",
                "@heading-color": "#535353",
                "@nav-dark-bg": "#003366",
                "@nav-dark-text-color": "#038fdd",
                "@header-text-color": "#262626",
                "@layout-header-background": "#fefefe",
                "@layout-footer-background": "#fffffd",
                "@body-background": "#f5f5f5",
                "@hor-nav-text-color": "#fffffd"
              },
              r = {};
            try {
              r = Object.assign(
                {},
                l,
                JSON.parse(sessionStorage.getItem("app-theme"))
              );
            } finally {
              a.state = { vars: r, initialValue: l, isCustomizerOpened: !1 };
            }
            return a;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return m.default.createElement(
                f.Auxiliary,
                null,
                m.default.createElement(
                  p.Drawer,
                  {
                    placement: "right",
                    closable: !1,
                    onClose: this.toggleCustomizer,
                    visible: this.state.isCustomizerOpened
                  },
                  this.getCustomizerContent()
                ),
                m.default.createElement(
                  "div",
                  { className: "gx-customizer-option" },
                  m.default.createElement(
                    p.Button,
                    {
                      type: "primary",
                      onClick: this.toggleCustomizer.bind(this)
                    },
                    m.default.createElement("i", {
                      className: "icon icon-setting fxicon-hc-spin gx-d-block"
                    })
                  )
                )
              );
            }),
            t
          );
        })(m.Component),
        y = p.Form.create()(v),
        N = _.default(
          i ||
            (i = l(
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navStyle\n      themeType\n      layoutType\n    }\n  }\n"
              ],
              [
                "\n  query settings {\n    settings @client {\n      locale {\n        locale\n        name\n        languageId\n        icon\n      }\n      navStyle\n      themeType\n      layoutType\n    }\n  }\n"
              ]
            ))
        ),
        b = _.default(
          s ||
            (s = l(
              [
                "\n  mutation setThemeType($themeType: String) {\n    setThemeType(themeType: $themeType) @client\n  }\n"
              ],
              [
                "\n  mutation setThemeType($themeType: String) {\n    setThemeType(themeType: $themeType) @client\n  }\n"
              ]
            ))
        ),
        C = _.default(
          c ||
            (c = l(
              [
                "\n  mutation onNavStyleChange($navStyle: String) {\n    onNavStyleChange(navStyle: $navStyle) @client\n  }\n"
              ],
              [
                "\n  mutation onNavStyleChange($navStyle: String) {\n    onNavStyleChange(navStyle: $navStyle) @client\n  }\n"
              ]
            ))
        ),
        T = _.default(
          u ||
            (u = l(
              [
                "\n  mutation onNavStyleChange($layoutType: String) {\n    onLayoutTypeChange(layoutType: $layoutType) @client\n  }\n"
              ],
              [
                "\n  mutation onNavStyleChange($layoutType: String) {\n    onLayoutTypeChange(layoutType: $layoutType) @client\n  }\n"
              ]
            ))
        ),
        S = _.default(
          d ||
            (d = l(
              [
                "\n  mutation setThemeColorSelection($colorSelection: String) {\n    setThemeColorSelection(colorSelection: $colorSelection) @client\n  }\n"
              ],
              [
                "\n  mutation setThemeColorSelection($colorSelection: String) {\n    setThemeColorSelection(colorSelection: $colorSelection) @client\n  }\n"
              ]
            ))
        );
      t.CustomizerModule = x.compose(
        x.graphql(b, { name: "setThemeType" }),
        x.graphql(C, { name: "onNavStyleChange" }),
        x.graphql(T, { name: "onLayoutTypeChange" }),
        x.graphql(S, { name: "setThemeColorSelection" }),
        x.graphql(N, {
          props: function(e) {
            var t = e.settings;
            return {
              themeType: t.themeType,
              width: t.width,
              colorSelection: t.colorSelection,
              navStyle: t.navStyle,
              layoutType: t.layoutType
            };
          },
          name: "settings"
        })
      )(y);
    },
    1837: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__assign) ||
          function() {
            return (l =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var l in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e;
              }).apply(this, arguments);
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = n(617),
        s = function() {},
        c = { chrome: i.ChromePicker, sketch: i.SketchPicker },
        u = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.handleClick = function() {
                n.setState({ displayColorPicker: !n.state.displayColorPicker });
              }),
              (n.handleClose = function() {
                n.setState({ displayColorPicker: !1 });
              }),
              (n.handleChange = function(e) {
                n.setState({ color: e.hex }), n.props.onChange(e.hex, e);
              }),
              (n.handleChangeComplete = function(e) {
                n.setState({ color: e.hex }), n.props.onChangeComplete(e.hex);
              }),
              (n.state = { displayColorPicker: !1, color: t.color }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.UNSAFE_componentWillReceiveProps = function(e) {
              this.setState({ color: e.color });
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.small,
                n = e.type,
                a = e.position,
                r = c[n],
                i = {
                  color: {
                    display: "inline-block",
                    width: t ? "16px" : "120px",
                    height: t ? "16px" : "24px",
                    verticalAlign: "middle",
                    marginRight: "8px",
                    borderRadius: "2px",
                    padding: "2px",
                    boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
                    background: this.state.color
                  },
                  swatch: {
                    padding: "4px",
                    display: "inline-block",
                    cursor: "pointer"
                  },
                  popover: { position: "absolute", zIndex: "2" },
                  cover: {
                    position: "fixed",
                    top: "0px",
                    right: "0px",
                    bottom: "0px",
                    left: "0px"
                  },
                  wrapper: { position: "inherit", zIndex: "100" }
                };
              "top" === a &&
                ((i.wrapper.transform = "translateY(-100%)"),
                (i.wrapper.paddingBottom = 8));
              var s = o.createElement(
                  "div",
                  { style: i.swatch, onClick: this.handleClick },
                  o.createElement("span", { style: i.color }),
                  o.createElement("span", null, " ", this.props.children)
                ),
                u = this.state.displayColorPicker
                  ? o.createElement(
                      "div",
                      { style: i.popover },
                      o.createElement("div", {
                        style: i.cover,
                        onClick: this.handleClose
                      }),
                      o.createElement(
                        "div",
                        { style: i.wrapper },
                        o.createElement(
                          r,
                          l({}, this.props, {
                            color: this.state.color,
                            onChange: this.handleChange,
                            onChangeComplete: this.handleChangeComplete
                          })
                        )
                      )
                    )
                  : null;
              return "top" === a
                ? o.createElement("div", null, u, s)
                : o.createElement("div", null, s, u);
            }),
            (t.defaultProps = {
              onChange: s,
              onChangeComplete: s,
              position: "bottom"
            }),
            t
          );
        })(o.Component);
      t.default = u;
    },
    1908: function(e, t, n) {
      e.exports = n.p + "framed.ed1d1200.png";
    },
    1909: function(e, t, n) {
      e.exports = n.p + "full width.6bd743c7.png";
    },
    1910: function(e, t, n) {
      e.exports = n.p + "boxed.d739a2c2.png";
    },
    1911: function(e, t, n) {
      e.exports = n.p + "fixed.b5ec4d55.png";
    },
    1912: function(e, t, n) {
      e.exports = n.p + "mini sidebar.8cf144bc.png";
    },
    1913: function(e, t, n) {
      e.exports = n.p + "drawer nav.8fc0785e.png";
    },
    1914: function(e, t, n) {
      e.exports = n.p + "no header mini sidebar.cd7abddf.png";
    },
    1915: function(e, t, n) {
      e.exports = n.p + "vertical no header.728bce01.png";
    },
    1916: function(e, t, n) {
      e.exports = n.p + "default horizontal.ce443717.png";
    },
    1917: function(e, t, n) {
      e.exports = n.p + "dark horizontal.c0f067d4.png";
    },
    1918: function(e, t, n) {
      e.exports = n.p + "inside header horizontal.41abce56.png";
    },
    1919: function(e, t, n) {
      e.exports = n.p + "below header.3f84e098.png";
    },
    1920: function(e, t, n) {
      e.exports = n.p + "top to header.ee515d4d.png";
    },
    1921: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i,
        s,
        c = r(n(0)),
        u = o(n(369)),
        d = o(n(38)),
        m = n(14),
        p = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.navCollapsed;
              return c.default.createElement(
                "div",
                { className: "gx-no-header-horizontal" },
                c.default.createElement(
                  "div",
                  {
                    className: "gx-d-block gx-d-lg-none gx-linebar gx-mr-xs-3"
                  },
                  c.default.createElement("i", {
                    className: "gx-icon-btn icon icon-menu",
                    onClick: function() {
                      e.props.toggleCollapsedSideNav(!t);
                    }
                  })
                ),
                c.default.createElement(
                  "div",
                  { className: "gx-no-header-horizontal-top" },
                  c.default.createElement(
                    "div",
                    { className: "gx-no-header-horizontal-top-center" },
                    c.default.createElement("i", {
                      className: "icon icon-alert gx-mr-3"
                    }),
                    c.default.createElement(
                      "p",
                      { className: "gx-mb-0 gx-text-truncate" },
                      c.default.createElement(u.default, {
                        id: "app.announced"
                      })
                    )
                  )
                )
              );
            }),
            t
          );
        })(c.Component),
        g = d.default(
          i ||
            (i = l(
              [
                "\n  query settings {\n    settings @client {\n      navCollapsed\n    }\n  }\n"
              ],
              [
                "\n  query settings {\n    settings @client {\n      navCollapsed\n    }\n  }\n"
              ]
            ))
        ),
        f = d.default(
          s ||
            (s = l(
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ],
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ]
            ))
        );
      t.NoHeaderNotificationModule = m.compose(
        m.graphql(f, { name: "toggleCollapsedSideNav" }),
        m.graphql(g, {
          props: function(e) {
            return { navCollapsed: e.settings.settings.navCollapsed };
          },
          name: "settings"
        })
      )(p);
    },
    1922: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__assign) ||
          function() {
            return (l =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var l in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e;
              }).apply(this, arguments);
          },
        r =
          (this && this.__awaiter) ||
          function(e, t, n, a) {
            return new (n || (n = Promise))(function(l, r) {
              function o(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function i(e) {
                try {
                  s(a.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function s(e) {
                e.done
                  ? l(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(o, i);
              }
              s((a = a.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function(e, t) {
            var n,
              a,
              l,
              r,
              o = {
                label: 0,
                sent: function() {
                  if (1 & l[0]) throw l[1];
                  return l[1];
                },
                trys: [],
                ops: []
              };
            return (
              (r = { next: i(0), throw: i(1), return: i(2) }),
              "function" == typeof Symbol &&
                (r[Symbol.iterator] = function() {
                  return this;
                }),
              r
            );
            function i(r) {
              return function(i) {
                return (function(r) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; o; )
                    try {
                      if (
                        ((n = 1),
                        a &&
                          (l =
                            2 & r[0]
                              ? a.return
                              : r[0]
                              ? a.throw || ((l = a.return) && l.call(a), 0)
                              : a.next) &&
                          !(l = l.call(a, r[1])).done)
                      )
                        return l;
                      switch (((a = 0), l && (r = [2 & r[0], l.value]), r[0])) {
                        case 0:
                        case 1:
                          l = r;
                          break;
                        case 4:
                          return o.label++, { value: r[1], done: !1 };
                        case 5:
                          o.label++, (a = r[1]), (r = [0]);
                          continue;
                        case 7:
                          (r = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !(l = (l = o.trys).length > 0 && l[l.length - 1]) &&
                            (6 === r[0] || 2 === r[0])
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === r[0] &&
                            (!l || (r[1] > l[0] && r[1] < l[3]))
                          ) {
                            o.label = r[1];
                            break;
                          }
                          if (6 === r[0] && o.label < l[1]) {
                            (o.label = l[1]), (l = r);
                            break;
                          }
                          if (l && o.label < l[2]) {
                            (o.label = l[2]), o.ops.push(r);
                            break;
                          }
                          l[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      r = t.call(e, o);
                    } catch (e) {
                      (r = [6, e]), (a = 0);
                    } finally {
                      n = l = 0;
                    }
                  if (5 & r[0]) throw r[1];
                  return { value: r[0] ? r[1] : void 0, done: !0 };
                })([r, i]);
              };
            }
          },
        i =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        s =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = i(n(0)),
        u = s(n(1923)),
        d = s(n(1924));
      n(1929), n(1931);
      var m = n(1235);
      t.asyncComponent = function(e) {
        return (function(t) {
          function n(e) {
            var n = t.call(this, e) || this;
            return (n.state = { component: null }), n;
          }
          return (
            a(n, t),
            (n.prototype.UNSAFE_componentWillMount = function() {
              u.default.start();
            }),
            (n.prototype.componentWillUnmount = function() {
              this.setState({ mounted: !1 });
            }),
            (n.prototype.componentDidMount = function() {
              return r(this, void 0, void 0, function() {
                var t;
                return o(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return this.setState({ mounted: !0 }), [4, e()];
                    case 1:
                      return (
                        (t = n.sent().default),
                        u.default.done(),
                        this.state.mounted &&
                          this.setState({
                            component: c.default.createElement(
                              t,
                              l({}, this.props)
                            )
                          }),
                        [2]
                      );
                  }
                });
              });
            }),
            (n.prototype.render = function() {
              var e =
                this.state.component ||
                c.default.createElement(m.CircularProgress, {
                  className: "gx-loader-400"
                });
              return c.default.createElement(
                d.default,
                { type: "text", rows: 7, ready: null !== e },
                e
              );
            }),
            n
          );
        })(c.Component);
      };
    },
    1933: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(351);
      t.ChartCard = function(e) {
        var t = e.prize,
          n = e.title,
          a = e.children,
          o = e.styleName,
          i = e.desc,
          s = e.icon;
        return l.createElement(
          r.Widget,
          { styleName: "gx-card-full" },
          l.createElement(
            "div",
            { className: "gx-actchart gx-px-3 gx-pt-3" },
            l.createElement(
              "div",
              { className: "ant-row-flex" },
              l.createElement(
                "h2",
                { className: "gx-mb-0 gx-fs-xxl gx-font-weight-medium" },
                t,
                n
                  ? l.createElement(
                      "span",
                      {
                        className:
                          "gx-mb-0 gx-ml-2 gx-pt-xl-2 gx-fs-lg gx-chart-" + o
                      },
                      n,
                      "% ",
                      l.createElement("i", {
                        className: "icon icon-menu-up gx-fs-sm"
                      })
                    )
                  : ""
              ),
              l.createElement("i", {
                className:
                  "icon icon-" +
                  s +
                  " gx-fs-xl gx-ml-auto gx-text-primary gx-fs-xxxl"
              })
            ),
            l.createElement(
              "p",
              { className: "gx-mb-0 gx-fs-sm gx-text-grey" },
              i
            )
          ),
          a
        );
      };
    },
    1934: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(0)),
        o = n(351),
        i = n(3),
        s = l(n(1935));
      t.Portfolio = function() {
        return r.createElement(
          o.Widget,
          null,
          r.createElement(
            "h2",
            { className: "h4 gx-mb-3" },
            "Your Portfolio Balance"
          ),
          r.createElement(
            i.Row,
            null,
            r.createElement(
              i.Col,
              { lg: 12, md: 12, sm: 12, xs: 24 },
              r.createElement(
                "div",
                { className: "ant-row-flex" },
                r.createElement(
                  "h2",
                  {
                    className:
                      "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                  },
                  "$179,626"
                ),
                r.createElement(
                  "h4",
                  { className: "gx-pt-2 gx-chart-up" },
                  "64% ",
                  r.createElement("i", {
                    className: "icon icon-menu-up gx-fs-sm"
                  })
                )
              ),
              r.createElement(
                "p",
                { className: "gx-text-grey" },
                "Overall balance"
              ),
              r.createElement(
                "div",
                { className: "ant-row-flex gx-mb-3 gx-mb-md-2" },
                r.createElement(
                  i.Button,
                  { className: "gx-mr-2", type: "primary" },
                  "Deposit"
                ),
                r.createElement(
                  i.Button,
                  { className: "gx-btn-cyan" },
                  "Withdraw"
                )
              ),
              r.createElement(
                "p",
                {
                  className:
                    "gx-text-primary gx-pointer gx-d-none gx-d-sm-block gx-mb-1"
                },
                r.createElement("i", {
                  className:
                    "icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"
                }),
                " ",
                "Add New Wallet"
              )
            ),
            r.createElement(
              i.Col,
              { lg: 12, md: 12, sm: 12, xs: 24 },
              r.createElement(
                "div",
                { className: "gx-site-dash" },
                r.createElement(
                  "h5",
                  { className: "gx-mb-3" },
                  "Portfolio Distribution"
                ),
                r.createElement(
                  "ul",
                  {
                    className: "gx-line-indicator gx-fs-sm gx-pb-1 gx-pb-sm-0"
                  },
                  r.createElement(
                    "li",
                    null,
                    r.createElement(s.default, {
                      width: "78%",
                      title: "BTC",
                      title2: "8.74",
                      color: "primary",
                      value: "78%"
                    })
                  ),
                  r.createElement(
                    "li",
                    null,
                    r.createElement(s.default, {
                      width: "38%",
                      title: "RPL",
                      title2: "1.23",
                      color: "pink",
                      value: "48%"
                    })
                  ),
                  r.createElement(
                    "li",
                    null,
                    r.createElement(s.default, {
                      width: "24%",
                      title: "LTE",
                      title2: "0.71",
                      color: "orange",
                      value: "34%"
                    })
                  )
                ),
                r.createElement(
                  "p",
                  {
                    className:
                      "gx-text-primary gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3"
                  },
                  r.createElement("i", {
                    className:
                      "icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"
                  }),
                  " ",
                  "Add New Wallet"
                )
              )
            )
          )
        );
      };
    },
    1935: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(0)),
        o = l(n(1)),
        i = n(390),
        s = function(e) {
          var t = e.title,
            n = e.title2,
            a = e.width,
            l = e.value,
            o = e.color;
          return r.createElement(
            i.Auxiliary,
            null,
            r.createElement(
              "div",
              { className: "ant-row-flex" },
              r.createElement("p", { className: "gx-mr-1" }, t),
              r.createElement("p", { className: "gx-text-grey" }, "| ", n)
            ),
            r.createElement(
              "div",
              { className: "gx-line-indi-info" },
              r.createElement("div", {
                className: "gx-line-indi gx-bg-" + o,
                style: { width: 4 * Number.parseInt(a, 10) }
              }),
              r.createElement(
                "span",
                { className: "gx-line-indi-count gx-ml-2" },
                l
              )
            )
          );
        };
      (t.default = s),
        (s.propTypes = {
          title: o.default.string.isRequired,
          width: o.default.string.isRequired,
          value: o.default.string.isRequired,
          color: o.default.string.isRequired
        });
    },
    1936: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(347),
        o = n(3),
        i = n(351),
        s = [
          { name: "", balance: 200 },
          { name: "JAN", balance: 400 },
          { name: "FEB", balance: 150 },
          { name: "MAR", balance: 400 },
          { name: "APR", balance: 1e3 },
          { name: "MAY", balance: 400 },
          { name: "JUN", balance: 1200 },
          { name: "JUL", balance: 1e3 },
          { name: "AUG", balance: 800 },
          { name: "SEP", balance: 750 },
          { name: "OCT", balance: 1500 },
          { name: "NOV", balance: 1e3 },
          { name: "DEC", balance: 1500 },
          { name: "", balance: 500 }
        ],
        c = o.Select.Option;
      t.BalanceHistory = function() {
        return l.createElement(
          i.Widget,
          { styleName: "gx-card-full" },
          l.createElement(
            "div",
            { className: "ant-row-flex gx-px-4 gx-pt-4" },
            l.createElement(
              "h2",
              { className: "h4 gx-mb-3" },
              "Balance History"
            ),
            l.createElement(
              "div",
              { className: "gx-ml-auto" },
              l.createElement(
                o.Select,
                {
                  className: "gx-mb-2 gx-select-sm",
                  defaultValue: "10",
                  onChange: function(e) {
                    console.log("selected " + e);
                  }
                },
                l.createElement(c, { value: "10" }, "Last 10 days"),
                l.createElement(c, { value: "20" }, "Last 20 days"),
                l.createElement(c, { value: "30" }, "Last 30 days")
              )
            )
          ),
          l.createElement(
            r.ResponsiveContainer,
            { width: "100%", height: 180 },
            l.createElement(
              r.AreaChart,
              { data: s, margin: { top: 0, right: 0, left: 0, bottom: 0 } },
              l.createElement(r.Tooltip, null),
              l.createElement(r.XAxis, { dataKey: "name" }),
              l.createElement(
                "defs",
                null,
                l.createElement(
                  "linearGradient",
                  { id: "color15", x1: "0", y1: "0", x2: "0", y2: "1" },
                  l.createElement("stop", {
                    offset: "5%",
                    stopColor: "#38AAE5",
                    stopOpacity: 0.8
                  }),
                  l.createElement("stop", {
                    offset: "95%",
                    stopColor: "#F5FCFD",
                    stopOpacity: 0.8
                  })
                )
              ),
              l.createElement(r.Area, {
                dataKey: "balance",
                strokeWidth: 2,
                stackId: "2",
                stroke: "#10316B",
                fill: "url(#color15)",
                fillOpacity: 1
              })
            )
          )
        );
      };
    },
    2024: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(3),
        o = n(351),
        i = [
          {
            title: "Account Holder Name",
            dataIndex: "image",
            render: function(e, t) {
              return l.createElement(
                "div",
                { className: "gx-flex-row gx-align-items-center" },
                l.createElement("img", {
                  className: "gx-rounded-circle gx-size-30 gx-mr-2",
                  src: e,
                  alt: ""
                }),
                l.createElement("p", { className: "gx-mb-0" }, t.name)
              );
            }
          },
          {
            title: "Last Transfer",
            dataIndex: "transfer",
            render: function(e, t) {
              return l.createElement(
                "span",
                { className: "gx-text-grey" },
                t.transfer
              );
            }
          },
          {
            title: "Action",
            dataIndex: "status",
            render: function(e) {
              return l.createElement(
                "span",
                { className: "gx-text-primary gx-pointer" },
                l.createElement("i", {
                  className: "icon icon-forward gx-fs-sm gx-mr-2"
                }),
                e
              );
            }
          }
        ],
        s = [
          {
            key: "1",
            name: "Jeniffer L.",
            transfer: "2 hrs. ago",
            image: "https://via.placeholder.com/150x150",
            status: "Pay"
          },
          {
            key: "2",
            name: "Jim Green",
            transfer: "17 days ago",
            image: "https://via.placeholder.com/150x150",
            status: "Pay"
          },
          {
            key: "3",
            name: "Joe Black",
            transfer: "1 month ago",
            image: "https://via.placeholder.com/150x150",
            status: "Pay"
          },
          {
            key: "4",
            name: "Mila Alba",
            transfer: "1 month ago",
            image: "https://via.placeholder.com/150x150",
            status: "Pay"
          }
        ];
      t.SendMoney = function() {
        return l.createElement(
          o.Widget,
          {
            title: l.createElement(
              "h2",
              { className: "h4 gx-text-capitalize gx-mb-0" },
              "Send Money to"
            ),
            extra: l.createElement(
              "p",
              {
                className:
                  "gx-text-primary gx-mb-0 gx-pointer gx-d-none gx-d-sm-block"
              },
              l.createElement("i", {
                className:
                  "icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"
              }),
              " ",
              "Add New Account"
            )
          },
          l.createElement(
            "div",
            { className: "gx-table-responsive" },
            l.createElement(r.Table, {
              className: "gx-table-no-bordered",
              columns: i,
              dataSource: s,
              pagination: !1,
              size: "small"
            })
          ),
          l.createElement(
            "p",
            {
              className:
                "gx-text-primary gx-mb-0 gx-pointer gx-d-block gx-d-sm-none gx-mb-0 gx-mt-3"
            },
            l.createElement("i", {
              className:
                "icon icon-add-circle gx-fs-lg gx-d-inline-flex gx-vertical-align-middle"
            }),
            " ",
            "Add New Account"
          )
        );
      };
    },
    2025: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(351),
        o = n(3);
      t.RewardCard = function() {
        return l.createElement(
          r.Widget,
          { styleName: "gx-bg-dark-primary" },
          l.createElement(
            "div",
            {
              className:
                "gx-flex-row gx-justify-content-center gx-mb-3 gx-mb-md-4"
            },
            l.createElement("i", {
              className: "icon icon-refer gx-fs-xlxl gx-text-white"
            })
          ),
          l.createElement(
            "div",
            { className: "gx-text-center" },
            l.createElement(
              "h2",
              { className: "h3 gx-mb-3 gx-text-white" },
              "Reffer and Get Reward"
            ),
            l.createElement(
              "p",
              { className: "gx-text-white gx-mb-3" },
              "Reffer us to your friends and earn bonus when they join."
            ),
            l.createElement(
              o.Button,
              {
                size: "large",
                className: "gx-btn-secondary gx-mt-md-5 gx-mb-1"
              },
              "Invite Friends"
            )
          )
        );
      };
    },
    2026: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(3),
        o = n(351),
        i = r.Select.Option,
        s = r.Form.Item;
      t.CurrencyCalculator = function() {
        function e(e) {
          console.log("selected " + e);
        }
        return l.createElement(
          o.Widget,
          {
            title: l.createElement(
              "h2",
              { className: "h4 gx-mb-0 gx-text-capitalize" },
              "Currency Calculator"
            )
          },
          l.createElement("p", { className: "gx-mb-2" }, "1.87 BTC equals"),
          l.createElement(
            "h1",
            {
              className:
                "gx-mb-2 gx-text-primary gx-font-weight-medium gx-fs-xxl"
            },
            "11466.78 USD"
          ),
          l.createElement(
            "p",
            { className: "gx-text-grey gx-fs-sm gx-mb-3 gx-mb-lg-4" },
            "@ 1 BTC = 6718.72 USD"
          ),
          l.createElement(
            r.Form,
            {
              layout: "inline",
              className: "gx-form-inline-label-up gx-form-inline-currency"
            },
            l.createElement(
              s,
              { label: "From", className: "gx-form-item-one-fourth" },
              l.createElement(
                r.Select,
                { defaultValue: "BTC", onChange: e },
                l.createElement(i, { value: "jack" }, "BTC"),
                l.createElement(i, { value: "lucy" }, "USD")
              )
            ),
            l.createElement(
              s,
              { label: "To", className: "gx-form-item-one-fourth" },
              l.createElement(
                r.Select,
                { defaultValue: "BTC", onChange: e },
                l.createElement(i, { value: "jack" }, "BTC"),
                l.createElement(i, { value: "lucy" }, "USD")
              )
            ),
            l.createElement(
              s,
              { label: "Amount (BTC)", className: "gx-form-item-two-fourth" },
              l.createElement(r.Input, { placeholder: "0.0" })
            ),
            l.createElement(
              s,
              { className: "gx-d-block gx-mb-1" },
              l.createElement(
                r.Button,
                { className: "gx-mb-0", type: "primary" },
                "Transfer Now"
              )
            )
          )
        );
      };
    },
    2027: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = l(n(0)),
        i = n(3),
        s = n(351),
        c = r(n(2028)),
        u = n(1),
        d = n(27),
        m = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.state = { news: [u.any], loader: !1 }),
              (t.handleChange = function(e) {
                e.target.value;
                setTimeout(function() {
                  t.setState({ loader: !1 });
                }, 1500);
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.state,
                t = e.loader,
                n = e.news;
              return o.default.createElement(
                s.Widget,
                null,
                o.default.createElement(
                  "div",
                  {
                    className:
                      "ant-row-flex gx-justify-content-between gx-mb-3 gx-dash-search"
                  },
                  o.default.createElement(
                    "h2",
                    { className: "h4 gx-mb-3 gx-mb-sm-1 gx-mr-2" },
                    "Crypto News"
                  ),
                  o.default.createElement(
                    "div",
                    { className: "gx-mx-sm-2" },
                    o.default.createElement(
                      i.Radio.Group,
                      {
                        className:
                          "gx-radio-group-link gx-radio-group-link-news",
                        defaultValue: 0,
                        onChange: this.handleChange
                      },
                      o.default.createElement(
                        i.Radio.Button,
                        { value: 0, className: "gx-mb-1" },
                        "All"
                      ),
                      o.default.createElement(
                        i.Radio.Button,
                        { value: 1, className: "gx-mb-1" },
                        "Bitcoin"
                      ),
                      o.default.createElement(
                        i.Radio.Button,
                        { value: 2, className: "gx-mb-1" },
                        "Ripple"
                      ),
                      o.default.createElement(
                        i.Radio.Button,
                        { value: 3, className: "gx-mb-1" },
                        "Litecoin"
                      )
                    )
                  ),
                  o.default.createElement(
                    "span",
                    { className: "gx-ml-2 gx-search-icon" },
                    o.default.createElement("i", {
                      className:
                        "icon icon-search-new gx-text-primary gx-fs-xxl gx-pointer"
                    })
                  )
                ),
                t
                  ? o.default.createElement(d.CircularProgress, {
                      className: "gx-loader-400"
                    })
                  : n.map(function(e, t) {
                      return o.default.createElement(c.default, {
                        key: t,
                        data: e
                      });
                    })
              );
            }),
            t
          );
        })(o.Component);
      t.CryptoNews = m;
    },
    2028: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0));
      t.default = function(e) {
        var t = e.data,
          n = t.image,
          a = t.title,
          r = t.subTitle,
          o = t.desc;
        return l.createElement(
          "div",
          { className: "gx-news-item" },
          l.createElement(
            "div",
            { className: "gx-news-thumb" },
            l.createElement("img", {
              className: "gx-width-175 gx-rounded-lg",
              src: n,
              alt: "..."
            })
          ),
          l.createElement(
            "div",
            { className: "gx-news-content" },
            l.createElement("h4", { className: "gx-mt-0" }, a),
            l.createElement("p", { className: "gx-mb-2" }, r),
            l.createElement(
              "div",
              { className: "gx-news-tags-row" },
              l.createElement(
                "div",
                { className: "gx-news-tags-left" },
                l.createElement(
                  "p",
                  { className: "gx-text-grey gx-mb-0 gx-text-truncate" },
                  l.createElement("i", {
                    className:
                      "icon icon-tag-new gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle gx-text-light-grey"
                  }),
                  o
                )
              ),
              l.createElement(
                "div",
                { className: "gx-news-tags-right" },
                l.createElement(
                  "p",
                  { className: "gx-text-primary gx-pointer gx-mb-0" },
                  "Ready Full Story",
                  l.createElement("i", {
                    className:
                      "icon icon-long-arrow-right gx-fs-xl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"
                  })
                )
              )
            )
          )
        );
      };
    },
    2029: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(351),
        o = n(3);
      (t.DownloadMobileApps = function() {
        return l.createElement(
          r.Widget,
          { styleName: "gx-pink-purple-gradient-reverse gx-text-white" },
          l.createElement(
            o.Row,
            null,
            l.createElement(
              o.Col,
              { xl: 16, lg: 14, md: 12, sm: 12, xs: 12 },
              l.createElement("p", null, "Download Mobile Apps"),
              l.createElement(
                "h4",
                { className: "gx-font-weight-semi-bold gx-text-white gx-mb-0" },
                "Now, your account is on your fingers"
              )
            ),
            l.createElement(
              o.Col,
              {
                xl: 8,
                lg: 10,
                md: 12,
                sm: 12,
                xs: 12,
                className: "gx-text-right"
              },
              l.createElement(
                "div",
                {
                  className: "gx-flex-column gx-justify-content-center gx-h-100"
                },
                l.createElement(
                  "span",
                  { className: "gx-mb-2 gx-app-thumb" },
                  l.createElement("img", {
                    src: "https://via.placeholder.com/97x32",
                    alt: "..."
                  })
                ),
                l.createElement(
                  "span",
                  { className: "gx-app-thumb" },
                  l.createElement("img", {
                    src: "https://via.placeholder.com/97x32",
                    alt: "..."
                  })
                )
              )
            )
          )
        );
      }),
        (t.default = t.DownloadMobileApps);
    },
    2030: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(3),
        o = n(351),
        i = [
          { title: "Currency", dataIndex: "currency" },
          { title: "Rate (USD)", dataIndex: "rate" },
          { title: "DATE", dataIndex: "date" },
          {
            title: "FEE",
            dataIndex: "fee",
            render: function(e) {
              return l.createElement("span", { className: "gx-text-red" }, e);
            }
          }
        ],
        s = [
          {
            key: "1",
            currency: "0.24 BTC",
            rate: "1 BTC = $740",
            date: "08.10.17",
            fee: "-$2.33"
          },
          {
            key: "2",
            currency: "0.34 RPL",
            rate: "1 RPL = $80.2",
            date: "08.03.17",
            fee: "-$1.23"
          },
          {
            key: "3",
            currency: "0.24 BTC",
            rate: "1 BTC = $740",
            date: "07.29.17",
            fee: "-$3.22"
          },
          {
            key: "4",
            currency: "0.22 BTC",
            rate: "1 BTC = $740",
            date: "07.28.17",
            fee: "-$3.22"
          },
          {
            key: "5",
            currency: "0.74 LTE",
            rate: "1 LTE = $99",
            date: "05.22.17",
            fee: "-$2.21"
          }
        ];
      (t.OrderHistory = function() {
        return l.createElement(
          o.Widget,
          {
            styleName: "gx-order-history",
            title: l.createElement(
              "h2",
              { className: "h4 gx-text-capitalize gx-mb-0" },
              "Order History"
            ),
            extra: l.createElement(
              "p",
              { className: "gx-text-primary gx-mb-0 gx-pointer" },
              "Detailed History"
            )
          },
          l.createElement(
            "div",
            { className: "gx-table-responsive" },
            l.createElement(r.Table, {
              className: "gx-table-no-bordered",
              columns: i,
              dataSource: s,
              pagination: !1,
              bordered: !1,
              size: "small"
            })
          )
        );
      }),
        (t.default = t.OrderHistory);
    },
    2031: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = a(n(1));
      (t.CardBox = function(e) {
        var t = e.heading,
          n = e.children,
          a = e.styleName,
          r = e.childrenStyle,
          o = e.style;
        return l.createElement(
          "div",
          { style: o, className: "gx-card " + a },
          t &&
            l.createElement(
              "div",
              { className: "gx-card-head" },
              l.createElement("h3", { className: "gx-card-title" }, t)
            ),
          l.createElement("div", { className: "gx-card-body " + r }, n)
        );
      }),
        (t.CardBox.propTypes = { children: r.node.isRequired }),
        (t.CardBox.defaultProps = { styleName: "", childrenStyle: "" });
    },
    2032: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = { hasError: !1 }), n;
          }
          return (
            a(t, e),
            (t.getDerivedStateFromError = function(e) {
              return { hasError: !0 };
            }),
            (t.prototype.componentDidCatch = function(e, t) {
              console.log(e, t);
            }),
            (t.prototype.render = function() {
              return this.state.hasError
                ? r.default.createElement("h1", null, "Something went wrong.")
                : this.props.children;
            }),
            t
          );
        })(r.Component);
      t.ErrorBoundary = o;
    },
    2033: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(3),
        o = n(27);
      t.IconWithTextCard = function(e) {
        var t = e.cardColor,
          n = e.icon,
          a = e.title,
          i = e.antIcon,
          s = e.subTitle;
        e.iconColor;
        return l.createElement(
          o.Widget,
          { styleName: "gx-card-full gx-p-3 gx-bg-" + t + " gx-text-white" },
          l.createElement(
            "div",
            { className: "gx-media gx-align-items-center gx-flex-nowrap" },
            l.createElement(
              "div",
              { className: "gx-mr-2 gx-mr-xxl-4" },
              l.createElement("i", {
                className: "icon icon-" + n + " gx-fs-icon-lg"
              }),
              l.createElement(r.Icon, {
                className: "icon gx-fs-icon-lg",
                type: i
              })
            ),
            l.createElement(
              "div",
              { className: "gx-media-body" },
              l.createElement(
                "h1",
                {
                  className:
                    "gx-fs-xxxl gx-font-weight-semi-bold gx-mb-1 gx-text-white"
                },
                a
              ),
              l.createElement("p", { className: "gx-mb-1" }, s)
            )
          )
        );
      };
    },
    2034: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(0)),
        o = l(n(1));
      (t.WidgetHeader = function(e) {
        var t = e.title,
          n = e.extra,
          a = e.styleName;
        return r.createElement(
          "h2",
          { className: "gx-entry-title " + a },
          t,
          r.createElement(
            "span",
            {
              className:
                "gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"
            },
            n
          )
        );
      }),
        (t.WidgetHeader.defaultProps = { styleName: "" }),
        (t.WidgetHeader.propTypes = {
          title: o.default.node,
          extra: o.default.node
        });
    },
    27: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = n(1699);
      t.HorizontalDefault = a.HorizontalDefaultModule;
      var l = n(1828);
      t.HorizontalDark = l.HorizontalDarkModule;
      var r = n(1829);
      t.InsideHeader = r.InsideHeaderModule;
      var o = n(1830);
      t.AboveHeader = o.AboveHeaderModule;
      var i = n(1831);
      t.BelowHeader = i.BelowHeaderModule;
      var s = n(1832);
      t.Topbar = s.TopbarModule;
      var c = n(1835);
      t.footerText = c.footerText;
      var u = n(1836);
      t.Customizer = u.CustomizerModule;
      var d = n(1921);
      t.NoHeaderNotification = d.NoHeaderNotificationModule;
      var m = n(1922);
      t.asyncComponent = m.asyncComponent;
      var p = n(351);
      t.Widget = p.Widget;
      var g = n(1933);
      t.ChartCard = g.ChartCard;
      var f = n(390);
      t.Auxiliary = f.Auxiliary;
      var E = n(1934);
      t.Portfolio = E.Portfolio;
      var h = n(1936);
      t.BalanceHistory = h.BalanceHistory;
      var x = n(2024);
      t.SendMoney = x.SendMoney;
      var _ = n(2025);
      t.RewardCard = _.RewardCard;
      var v = n(2026);
      t.CurrencyCalculator = v.CurrencyCalculator;
      var y = n(2027);
      t.CryptoNews = y.CryptoNews;
      var N = n(2029);
      t.DownloadMobileApps = N.DownloadMobileApps;
      var b = n(2030);
      t.OrderHistory = b.OrderHistory;
      var C = n(132);
      t.CustomScrollbars = C.CustomScrollbars;
      var T = n(369);
      t.IntlMessages = T.InjectMassageModule;
      var S = n(2031);
      t.CardBox = S.CardBox;
      var O = n(1235);
      t.CircularProgress = O.CircularProgress;
      var A = n(2032);
      t.ErrorBoundary = A.ErrorBoundary;
      var I = n(2033);
      t.IconWithTextCard = I.IconWithTextCard;
      var L = n(2034);
      t.WidgetHeader = L.WidgetHeader;
    },
    350: function(e, t, n) {
      e.exports = n.p + "w-logo.edbbfa16.png";
    },
    351: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = n(3),
        o = a(n(1));
      (t.Widget = function(e) {
        var t = e.title,
          n = e.children,
          a = e.styleName,
          o = e.cover,
          i = e.style,
          s = e.extra,
          c = e.actions;
        return l.createElement(
          r.Card,
          {
            title: t,
            style: i,
            actions: c,
            cover: o,
            className: "gx-card-widget " + a,
            extra: s
          },
          n
        );
      }),
        (t.Widget.defaultProps = { styleName: "" }),
        (t.Widget.propTypes = {
          title: o.node,
          extra: o.node,
          cover: o.node,
          actions: o.node,
          children: o.node.isRequired
        });
    },
    369: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__assign) ||
          function() {
            return (a =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var l in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = l(n(0)),
        o = n(916);
      (t.InjectMassage = function(e) {
        return r.createElement(o.FormattedMessage, a({}, e));
      }),
        (t.InjectMassageModule = o.injectIntl(t.InjectMassage, {
          withRef: !1
        })),
        (t.default = t.InjectMassageModule);
    },
    37: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o,
        i,
        s,
        c,
        u,
        d,
        m,
        p,
        g,
        f,
        E,
        h,
        x,
        _,
        v,
        y,
        N,
        b,
        C,
        T,
        S,
        O,
        A,
        I,
        L,
        k,
        P,
        R,
        w,
        D,
        j,
        $,
        M,
        z,
        U,
        B,
        H,
        G,
        V,
        Y,
        q = l(n(38));
      (t.USER_DATA = q.default(
        r ||
          (r = a(
            [
              "\n  query userData($userId: ID!) {\n    user(id: $userId) {\n      firstName\n      lastName\n      email\n      id\n      # permissionMap(types:[UI])\n      roles {\n        id\n        name\n        # policies { id effect permission resource type }\n      }\n    }\n  }\n"
            ],
            [
              "\n  query userData($userId: ID!) {\n    user(id: $userId) {\n      firstName\n      lastName\n      email\n      id\n      # permissionMap(types:[UI])\n      roles {\n        id\n        name\n        # policies { id effect permission resource type }\n      }\n    }\n  }\n"
            ]
          ))
      )),
        (t.GET_PRODUCTS = q.default(
          o ||
            (o = a(
              [
                "\n  query organization($id: ID!) {\n    organization(id: $id) {\n      id\n      name\n      walkinProducts {\n        id\n        name\n        status\n        description\n        latest_version\n      }\n    }\n  }\n"
              ],
              [
                "\n  query organization($id: ID!) {\n    organization(id: $id) {\n      id\n      name\n      walkinProducts {\n        id\n        name\n        status\n        description\n        latest_version\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_USER = q.default(
          i ||
            (i = a(
              [
                "\n  mutation addUserToOrganization(\n    $Orgid: ID!\n    $rollId: ID!\n    $user: UserCreateInput!\n  ) {\n    addUserToOrganization(\n      organization_id: $Orgid\n      role_id: $rollId\n      userData: $user\n    ) {\n      id\n      email\n      firstName\n      lastName\n      status\n      roles {\n        id\n        name\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation addUserToOrganization(\n    $Orgid: ID!\n    $rollId: ID!\n    $user: UserCreateInput!\n  ) {\n    addUserToOrganization(\n      organization_id: $Orgid\n      role_id: $rollId\n      userData: $user\n    ) {\n      id\n      email\n      firstName\n      lastName\n      status\n      roles {\n        id\n        name\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_APP = q.default(
          s ||
            (s = a(
              [
                "\n  mutation createApplication($organizationId: ID!, $input: ApplicationInput!) {\n    createApplication(organizationId: $organizationId, input: $input) {\n      id\n      name\n      platform\n      organization {\n        id\n        name\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation createApplication($organizationId: ID!, $input: ApplicationInput!) {\n    createApplication(organizationId: $organizationId, input: $input) {\n      id\n      name\n      platform\n      organization {\n        id\n        name\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.UPDATE_APP = q.default(
          c ||
            (c = a(
              [
                "\n  mutation updateApplication($input: ApplicationUpdateInput!) {\n    updateApplication(input: $input) {\n      id\n      name\n      description\n      organization {\n        id\n        name\n      }\n      platform\n    }\n  }\n"
              ],
              [
                "\n  mutation updateApplication($input: ApplicationUpdateInput!) {\n    updateApplication(input: $input) {\n      id\n      name\n      description\n      organization {\n        id\n        name\n      }\n      platform\n    }\n  }\n"
              ]
            ))
        )),
        (t.DELETE_APP = q.default(
          u ||
            (u = a(
              [
                "\n  mutation deleteApplication($id: ID!) {\n    deleteApplication(id: $id)\n  }\n"
              ],
              [
                "\n  mutation deleteApplication($id: ID!) {\n    deleteApplication(id: $id)\n  }\n"
              ]
            ))
        )),
        (t.GET_WEBHOOKS = q.default(
          d ||
            (d = a(
              [
                "\n  query webhooks($org_id: ID!, $event: String, $status: STATUS!) {\n    webhooks(organizationId: $org_id, event: $event, status: $status) {\n      id\n      name\n      organization {\n        name\n        website\n      }\n      event\n      url\n      headers\n      method\n      status\n      enabled\n    }\n  }\n"
              ],
              [
                "\n  query webhooks($org_id: ID!, $event: String, $status: STATUS!) {\n    webhooks(organizationId: $org_id, event: $event, status: $status) {\n      id\n      name\n      organization {\n        name\n        website\n      }\n      event\n      url\n      headers\n      method\n      status\n      enabled\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_WEBHOOK = q.default(
          m ||
            (m = a(
              [
                "\n  mutation createWebhook($input: WebhookAddInput) {\n    createWebhook(input: $input) {\n      id\n      name\n      organization {\n        name\n        website\n      }\n      event\n      url\n      headers\n      method\n      status\n      enabled\n    }\n  }\n"
              ],
              [
                "\n  mutation createWebhook($input: WebhookAddInput) {\n    createWebhook(input: $input) {\n      id\n      name\n      organization {\n        name\n        website\n      }\n      event\n      url\n      headers\n      method\n      status\n      enabled\n    }\n  }\n"
              ]
            ))
        )),
        (t.UPDATE_WEBHOOK = q.default(
          p ||
            (p = a(
              [
                "\n  mutation updateWebhook($input: WebhookUpdateInput!) {\n    updateWebhook(input: $input) {\n      id\n      name\n      organization {\n        name\n        website\n      }\n      event\n      url\n      headers\n      method\n      status\n      enabled\n    }\n  }\n"
              ],
              [
                "\n  mutation updateWebhook($input: WebhookUpdateInput!) {\n    updateWebhook(input: $input) {\n      id\n      name\n      organization {\n        name\n        website\n      }\n      event\n      url\n      headers\n      method\n      status\n      enabled\n    }\n  }\n"
              ]
            ))
        )),
        (t.LIST_WEBHOOK_EVENTS = q.default(
          g ||
            (g = a(
              [
                "\n  query webhookEventTypes($org_id: ID!, $status: STATUS!) {\n    webhookEventTypes(organizationId: $org_id, status: $status) {\n      event\n      id\n      status\n      description\n    }\n  }\n"
              ],
              [
                "\n  query webhookEventTypes($org_id: ID!, $status: STATUS!) {\n    webhookEventTypes(organizationId: $org_id, status: $status) {\n      event\n      id\n      status\n      description\n    }\n  }\n"
              ]
            ))
        )),
        (t.DELETE_WEBHOOK = q.default(
          f ||
            (f = a(
              [
                "\n  mutation deleteWebhook($input: WebhookDeleteInput) {\n    deleteWebhook(input: $input)\n  }\n"
              ],
              [
                "\n  mutation deleteWebhook($input: WebhookDeleteInput) {\n    deleteWebhook(input: $input)\n  }\n"
              ]
            ))
        )),
        (t.GET_ENTITIES = q.default(
          E ||
            (E = a(
              ["\n  query getEntities {\n    entities\n  }\n"],
              ["\n  query getEntities {\n    entities\n  }\n"]
            ))
        )),
        (t.GET_BASIC_ENTITY_FIELDS = q.default(
          h ||
            (h = a(
              [
                "\n  query getBasicEntityFields($entityName: EXTEND_ENTITIES!) {\n    basicFields(entityName: $entityName) {\n      slug\n      label\n      type\n      required\n      defaultValue\n      searchable\n      description\n    }\n  }\n"
              ],
              [
                "\n  query getBasicEntityFields($entityName: EXTEND_ENTITIES!) {\n    basicFields(entityName: $entityName) {\n      slug\n      label\n      type\n      required\n      defaultValue\n      searchable\n      description\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_ENTITY_EXTEND_FIELDS_BY_NAME = q.default(
          x ||
            (x = a(
              [
                "\n  query getEntityExtendFieldsByName($entityName: EXTEND_ENTITIES!) {\n    entityExtendByName(entityName: $entityName) {\n      id\n      entityName\n      description\n      organization {\n        id\n      }\n      fields {\n        id\n        slug\n        help\n        label\n        type\n        choices\n        required\n        defaultValue\n        validator\n        searchable\n        description\n      }\n    }\n  }\n"
              ],
              [
                "\n  query getEntityExtendFieldsByName($entityName: EXTEND_ENTITIES!) {\n    entityExtendByName(entityName: $entityName) {\n      id\n      entityName\n      description\n      organization {\n        id\n      }\n      fields {\n        id\n        slug\n        help\n        label\n        type\n        choices\n        required\n        defaultValue\n        validator\n        searchable\n        description\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.ADD_ENTITY_EXTEND = q.default(
          _ ||
            (_ = a(
              [
                "\n  mutation addEntityExtend($input: AddEntityExtend!) {\n    addEntityExtend(input: $input) {\n      id\n      entityName\n      description\n      organization {\n        id\n      }\n      fields {\n        id\n        slug\n        help\n        label\n        type\n        choices\n        required\n        defaultValue\n        validator\n        searchable\n        description\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation addEntityExtend($input: AddEntityExtend!) {\n    addEntityExtend(input: $input) {\n      id\n      entityName\n      description\n      organization {\n        id\n      }\n      fields {\n        id\n        slug\n        help\n        label\n        type\n        choices\n        required\n        defaultValue\n        validator\n        searchable\n        description\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.ADD_ENTITY_EXTEND_FIELD = q.default(
          v ||
            (v = a(
              [
                "\n  mutation addEntityExtendField($input: AddEntityExtendField!) {\n    addEntityExtendField(input: $input) {\n      id\n      slug\n      help\n      label\n      type\n      choices\n      required\n      defaultValue\n      validator\n      searchable\n      description\n    }\n  }\n"
              ],
              [
                "\n  mutation addEntityExtendField($input: AddEntityExtendField!) {\n    addEntityExtendField(input: $input) {\n      id\n      slug\n      help\n      label\n      type\n      choices\n      required\n      defaultValue\n      validator\n      searchable\n      description\n    }\n  }\n"
              ]
            ))
        )),
        (t.RULES = q.default(
          y ||
            (y = a(
              [
                "\n  query rules($input: SearchRuleInput) {\n    rules(input: $input) {\n      id\n      name\n      description\n      status\n      type\n      ruleConfiguration\n      ruleExpression\n      # organization\n    }\n  }\n"
              ],
              [
                "\n  query rules($input: SearchRuleInput) {\n    rules(input: $input) {\n      id\n      name\n      description\n      status\n      type\n      ruleConfiguration\n      ruleExpression\n      # organization\n    }\n  }\n"
              ]
            ))
        )),
        (t.UPDATE_RULE = q.default(
          N ||
            (N = a(
              [
                "\n  mutation updateRule($id: ID, $input: UpdateRuleInput!) {\n    updateRule(id: $id, input: $input) {\n      id\n      name\n      description\n      status\n      type\n      ruleConfiguration\n      ruleExpression\n    }\n  }\n"
              ],
              [
                "\n  mutation updateRule($id: ID, $input: UpdateRuleInput!) {\n    updateRule(id: $id, input: $input) {\n      id\n      name\n      description\n      status\n      type\n      ruleConfiguration\n      ruleExpression\n    }\n  }\n"
              ]
            ))
        )),
        (t.GENERATE_API_KEY = q.default(
          b ||
            (b = a(
              [
                "\n  mutation generateAPIKey($id: ID!, $env: String) {\n    generateAPIKey(id: $id, environment: $env) {\n      api_key\n    }\n  }\n"
              ],
              [
                "\n  mutation generateAPIKey($id: ID!, $env: String) {\n    generateAPIKey(id: $id, environment: $env) {\n      api_key\n    }\n  }\n"
              ]
            ))
        )),
        (t.ROLES_LIST = q.default(
          C ||
            (C = a(
              [
                "\n  query roles {\n    roles {\n      id\n      name\n      description\n      tags\n      users {\n        id\n        email\n        firstName\n        lastName\n      }\n      policies {\n        id\n        effect\n        resource\n        permission\n        type\n        accessLevel\n      }\n    }\n  }\n"
              ],
              [
                "\n  query roles {\n    roles {\n      id\n      name\n      description\n      tags\n      users {\n        id\n        email\n        firstName\n        lastName\n      }\n      policies {\n        id\n        effect\n        resource\n        permission\n        type\n        accessLevel\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.ROLE = q.default(
          T ||
            (T = a(
              [
                "\n  query role($id: ID!) {\n    role(id: $id) {\n      id\n      name\n      description\n      tags\n      users {\n        id\n        email\n        firstName\n        lastName\n      }\n      policies {\n        id\n        effect\n        resource\n        permission\n        type\n        accessLevel\n      }\n    }\n  }\n"
              ],
              [
                "\n  query role($id: ID!) {\n    role(id: $id) {\n      id\n      name\n      description\n      tags\n      users {\n        id\n        email\n        firstName\n        lastName\n      }\n      policies {\n        id\n        effect\n        resource\n        permission\n        type\n        accessLevel\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.ADD_ROLE = q.default(
          S ||
            (S = a(
              [
                "\n  mutation addRole($input: RoleInput!) {\n    addRole(input: $input) {\n      id\n      name\n    }\n  }\n"
              ],
              [
                "\n  mutation addRole($input: RoleInput!) {\n    addRole(input: $input) {\n      id\n      name\n    }\n  }\n"
              ]
            ))
        )),
        (t.LINK_USER_TO_ROLE = q.default(
          O ||
            (O = a(
              [
                "\n  mutation linkUserToRole($roleId: ID!, $userId: ID!) {\n    linkUserToRole(roleId: $roleId, userId: $userId) {\n      id\n      roles {\n        id\n        name\n        description\n        tags\n        users {\n          id\n          email\n          firstName\n          lastName\n        }\n        policies {\n          id\n          effect\n          resource\n          permission\n          type\n          accessLevel\n        }\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation linkUserToRole($roleId: ID!, $userId: ID!) {\n    linkUserToRole(roleId: $roleId, userId: $userId) {\n      id\n      roles {\n        id\n        name\n        description\n        tags\n        users {\n          id\n          email\n          firstName\n          lastName\n        }\n        policies {\n          id\n          effect\n          resource\n          permission\n          type\n          accessLevel\n        }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.EDIT_POLICY = q.default(
          A ||
            (A = a(
              [
                "\n  mutation editPolicy($input: PolicyEditInput!) {\n    editPolicy(input: $input) {\n      id\n      effect\n      resource\n      permission\n      type\n      accessLevel\n    }\n  }\n"
              ],
              [
                "\n  mutation editPolicy($input: PolicyEditInput!) {\n    editPolicy(input: $input) {\n      id\n      effect\n      resource\n      permission\n      type\n      accessLevel\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_ALL_APPS_OF_ORGANIZATION = q.default(
          I ||
            (I = a(
              [
                "\n  query organization($id: ID!) {\n    organization(id: $id) {\n      id\n      name\n      applications {\n        id\n        name\n        description\n        platform\n        auth_key_hooks\n        organization {\n          id\n          name\n        }\n      }\n      children {\n        id\n        name\n        applications {\n          id\n          name\n          description\n          platform\n          auth_key_hooks\n          organization {\n            id\n            name\n          }\n        }\n        # children {\n        #   id\n        #   name\n        #   applications {\n        #     id\n        #     name\n        #     description\n        #     platform\n        #     auth_key_hooks\n        #     organization {\n        #       id\n        #       name\n        #     }\n        #   }\n        #   children {\n        #     id\n        #     name\n        #     applications {\n        #       id\n        #       name\n        #       description\n        #       platform\n        #       auth_key_hooks\n        #       organization {\n        #         id\n        #         name\n        #       }\n        #     }\n        #     children {\n        #       id\n        #       name\n        #       applications {\n        #         id\n        #         name\n        #         description\n        #         platform\n        #         auth_key_hooks\n        #         organization {\n        #           id\n        #           name\n        #         }\n        #       }\n        #     }\n        #   }\n        # }\n      }\n    }\n  }\n"
              ],
              [
                "\n  query organization($id: ID!) {\n    organization(id: $id) {\n      id\n      name\n      applications {\n        id\n        name\n        description\n        platform\n        auth_key_hooks\n        organization {\n          id\n          name\n        }\n      }\n      children {\n        id\n        name\n        applications {\n          id\n          name\n          description\n          platform\n          auth_key_hooks\n          organization {\n            id\n            name\n          }\n        }\n        # children {\n        #   id\n        #   name\n        #   applications {\n        #     id\n        #     name\n        #     description\n        #     platform\n        #     auth_key_hooks\n        #     organization {\n        #       id\n        #       name\n        #     }\n        #   }\n        #   children {\n        #     id\n        #     name\n        #     applications {\n        #       id\n        #       name\n        #       description\n        #       platform\n        #       auth_key_hooks\n        #       organization {\n        #         id\n        #         name\n        #       }\n        #     }\n        #     children {\n        #       id\n        #       name\n        #       applications {\n        #         id\n        #         name\n        #         description\n        #         platform\n        #         auth_key_hooks\n        #         organization {\n        #           id\n        #           name\n        #         }\n        #       }\n        #     }\n        #   }\n        # }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.USERS = q.default(
          L ||
            (L = a(
              [
                "\n  query users {\n    users {\n      id\n      firstName\n      email\n      roles {\n        id\n        name\n      }\n    }\n  }\n"
              ],
              [
                "\n  query users {\n    users {\n      id\n      firstName\n      email\n      roles {\n        id\n        name\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_ALL_USERS_OF_ORGANIZATION = q.default(
          k ||
            (k = a(
              [
                "\n  query organization($id: ID!) {\n    organization(id: $id) {\n      id\n      name\n      code\n      users {\n        id\n        firstName\n        lastName\n        email\n        roles {\n          name\n          id\n        }\n      }\n      children {\n        id\n        name\n        code\n        users {\n          id\n          firstName\n          lastName\n          email\n          roles {\n            name\n            id\n          }\n        }\n        #   children {\n        #     id\n        #     name\n        #     status\n        #     code\n        #     users {\n        #       id\n        #       firstName\n        #       lastName\n        #       status\n        #       email\n        #       roles {\n        #         name\n        #         id\n        #       }\n        #     }\n        #     children {\n        #       id\n        #       name\n        #       status\n        #       code\n        #       users {\n        #         id\n        #         firstName\n        #         lastName\n        #         status\n        #         email\n        #         roles {\n        #           name\n        #           id\n        #         }\n        #       }\n        #       children {\n        #         id\n        #         name\n        #         status\n        #         code\n        #         users {\n        #           id\n        #           firstName\n        #           lastName\n        #           status\n        #           email\n        #           roles {\n        #             name\n        #             id\n        #           }\n        #         }\n        #         children {\n        #           id\n        #           name\n        #           status\n        #           code\n        #           users {\n        #             id\n        #             firstName\n        #             lastName\n        #             status\n        #             email\n        #             roles {\n        #               name\n        #               id\n        #             }\n        #           }\n        #         }\n        #       }\n        #     }\n        #   }\n      }\n    }\n  }\n"
              ],
              [
                "\n  query organization($id: ID!) {\n    organization(id: $id) {\n      id\n      name\n      code\n      users {\n        id\n        firstName\n        lastName\n        email\n        roles {\n          name\n          id\n        }\n      }\n      children {\n        id\n        name\n        code\n        users {\n          id\n          firstName\n          lastName\n          email\n          roles {\n            name\n            id\n          }\n        }\n        #   children {\n        #     id\n        #     name\n        #     status\n        #     code\n        #     users {\n        #       id\n        #       firstName\n        #       lastName\n        #       status\n        #       email\n        #       roles {\n        #         name\n        #         id\n        #       }\n        #     }\n        #     children {\n        #       id\n        #       name\n        #       status\n        #       code\n        #       users {\n        #         id\n        #         firstName\n        #         lastName\n        #         status\n        #         email\n        #         roles {\n        #           name\n        #           id\n        #         }\n        #       }\n        #       children {\n        #         id\n        #         name\n        #         status\n        #         code\n        #         users {\n        #           id\n        #           firstName\n        #           lastName\n        #           status\n        #           email\n        #           roles {\n        #             name\n        #             id\n        #           }\n        #         }\n        #         children {\n        #           id\n        #           name\n        #           status\n        #           code\n        #           users {\n        #             id\n        #             firstName\n        #             lastName\n        #             status\n        #             email\n        #             roles {\n        #               name\n        #               id\n        #             }\n        #           }\n        #         }\n        #       }\n        #     }\n        #   }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_ANALYTICS = q.default(
          P ||
            (P = a(
              [
                "\n  query analytics($dates: JSON, $org_id: ID!, $product: WALKIN_PRODUCTS!) {\n    analytics(\n      filterValues: $dates\n      organization_id: $org_id\n      walkinProducts: $product\n    ) {\n      name\n      type\n      rows\n      response\n      total\n    }\n  }\n"
              ],
              [
                "\n  query analytics($dates: JSON, $org_id: ID!, $product: WALKIN_PRODUCTS!) {\n    analytics(\n      filterValues: $dates\n      organization_id: $org_id\n      walkinProducts: $product\n    ) {\n      name\n      type\n      rows\n      response\n      total\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_ALL_STORES = q.default(
          R ||
            (R = a(
              [
                "\n  query {\n    stores {\n      id\n      name\n      STATUS\n      externalStoreId\n      code\n      extend\n      state\n      city\n      addressLine1\n      addressLine2\n      pinCode\n      country\n      wifi\n      latitude\n      longitude\n      email\n    }\n  }\n"
              ],
              [
                "\n  query {\n    stores {\n      id\n      name\n      STATUS\n      externalStoreId\n      code\n      extend\n      state\n      city\n      addressLine1\n      addressLine2\n      pinCode\n      country\n      wifi\n      latitude\n      longitude\n      email\n    }\n  }\n"
              ]
            ))
        )),
        (t.STORE = q.default(
          w ||
            (w = a(
              [
                "\n  query store($id: ID!) {\n    store(id: $id) {\n      id\n      name\n      STATUS\n      externalStoreId\n      code\n      extend\n      state\n      city\n      addressLine1\n      addressLine2\n      pinCode\n      country\n      wifi\n      latitude\n      longitude\n      email\n    }\n  }\n"
              ],
              [
                "\n  query store($id: ID!) {\n    store(id: $id) {\n      id\n      name\n      STATUS\n      externalStoreId\n      code\n      extend\n      state\n      city\n      addressLine1\n      addressLine2\n      pinCode\n      country\n      wifi\n      latitude\n      longitude\n      email\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_STORE = q.default(
          D ||
            (D = a(
              [
                "\n  mutation createStore($input: CreateStoreInput!) {\n    createStore(input: $input) {\n      id\n      name\n      STATUS\n      externalStoreId\n      code\n      extend\n      state\n      city\n      addressLine1\n      addressLine2\n      pinCode\n      country\n      wifi\n      latitude\n      longitude\n      email\n    }\n  }\n"
              ],
              [
                "\n  mutation createStore($input: CreateStoreInput!) {\n    createStore(input: $input) {\n      id\n      name\n      STATUS\n      externalStoreId\n      code\n      extend\n      state\n      city\n      addressLine1\n      addressLine2\n      pinCode\n      country\n      wifi\n      latitude\n      longitude\n      email\n    }\n  }\n"
              ]
            ))
        )),
        (t.UPDATE_STORE = q.default(
          j ||
            (j = a(
              [
                "\n  mutation updateStore($input: UpdateStoreInput!) {\n    updateStore(input: $input) {\n      id\n      name\n      STATUS\n      externalStoreId\n      code\n      extend\n      state\n      city\n      addressLine1\n      addressLine2\n      pinCode\n      country\n      wifi\n      latitude\n      longitude\n      email\n    }\n  }\n"
              ],
              [
                "\n  mutation updateStore($input: UpdateStoreInput!) {\n    updateStore(input: $input) {\n      id\n      name\n      STATUS\n      externalStoreId\n      code\n      extend\n      state\n      city\n      addressLine1\n      addressLine2\n      pinCode\n      country\n      wifi\n      latitude\n      longitude\n      email\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_PH_CATEGORIES = q.default(
          $ ||
            ($ = a(
              [
                "\n  query categoriesWithChildren($catalogId: ID!, $categoryCode: String) {\n    categoriesWithChildren(catalogId: $catalogId, categoryCode: $categoryCode) {\n      id\n      name\n      description\n      code\n      catalogId\n      status\n      extend\n      products {\n        id\n        name\n        extend\n        code\n        description\n        imageUrl\n        sku\n        type\n        status\n      }\n      parent {\n        id\n        name\n        description\n        status\n        catalog {\n          id\n          name\n          description\n        }\n      }\n      children {\n        id\n        name\n        description\n        status\n        code\n        extend\n        children {\n          id\n          name\n          extend\n          code\n          description\n          status\n        }\n        products {\n          id\n          name\n          description\n          imageUrl\n          sku\n          type\n          status\n        }\n        catalog {\n          id\n          name\n          description\n        }\n      }\n      catalog {\n        id\n        name\n        description\n      }\n    }\n  }\n"
              ],
              [
                "\n  query categoriesWithChildren($catalogId: ID!, $categoryCode: String) {\n    categoriesWithChildren(catalogId: $catalogId, categoryCode: $categoryCode) {\n      id\n      name\n      description\n      code\n      catalogId\n      status\n      extend\n      products {\n        id\n        name\n        extend\n        code\n        description\n        imageUrl\n        sku\n        type\n        status\n      }\n      parent {\n        id\n        name\n        description\n        status\n        catalog {\n          id\n          name\n          description\n        }\n      }\n      children {\n        id\n        name\n        description\n        status\n        code\n        extend\n        children {\n          id\n          name\n          extend\n          code\n          description\n          status\n        }\n        products {\n          id\n          name\n          description\n          imageUrl\n          sku\n          type\n          status\n        }\n        catalog {\n          id\n          name\n          description\n        }\n      }\n      catalog {\n        id\n        name\n        description\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_PRODUCT_CATEGORIES_BY_CATEGORY_ID = q.default(
          M ||
            (M = a(
              [
                "\n  query productCategoriesByCategoryId($categoryId: ID!) {\n    productCategoriesByCategoryId(categoryId: $categoryId) {\n      id\n      product {\n        id\n        name\n        code\n        description\n        imageUrl\n        sku\n        type\n        status\n        extend\n        variants {\n          id\n          sku\n          product {\n            id\n            name\n            description\n            imageUrl\n            sku\n            type\n            status\n          }\n          optionValues {\n            id\n            value\n            option {\n              id\n              name\n              description\n            }\n          }\n        }\n      }\n      category {\n        id\n        name\n        description\n        code\n        catalogId\n        status\n      }\n    }\n  }\n"
              ],
              [
                "\n  query productCategoriesByCategoryId($categoryId: ID!) {\n    productCategoriesByCategoryId(categoryId: $categoryId) {\n      id\n      product {\n        id\n        name\n        code\n        description\n        imageUrl\n        sku\n        type\n        status\n        extend\n        variants {\n          id\n          sku\n          product {\n            id\n            name\n            description\n            imageUrl\n            sku\n            type\n            status\n          }\n          optionValues {\n            id\n            value\n            option {\n              id\n              name\n              description\n            }\n          }\n        }\n      }\n      category {\n        id\n        name\n        description\n        code\n        catalogId\n        status\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.PRODUCT_SEARCH = q.default(
          z ||
            (z = a(
              [
                "\n  query products($input: ProductSearchInput) {\n    products(input: $input) {\n      id\n      code\n      name\n      description\n      imageUrl\n      sku\n      type\n      status\n      extend\n      variants {\n        id\n        sku\n        product {\n          id\n          name\n          description\n          imageUrl\n          sku\n          type\n          status\n        }\n        optionValues {\n          id\n          value\n          option {\n            id\n            name\n            description\n          }\n        }\n      }\n    }\n  }\n"
              ],
              [
                "\n  query products($input: ProductSearchInput) {\n    products(input: $input) {\n      id\n      code\n      name\n      description\n      imageUrl\n      sku\n      type\n      status\n      extend\n      variants {\n        id\n        sku\n        product {\n          id\n          name\n          description\n          imageUrl\n          sku\n          type\n          status\n        }\n        optionValues {\n          id\n          value\n          option {\n            id\n            name\n            description\n          }\n        }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.UPDATE_PRODUCT = q.default(
          U ||
            (U = a(
              [
                "\n  mutation updateProduct($input: UpdateProductInput!) {\n    updateProduct(input: $input) {\n      id\n      code\n      name\n      description\n      imageUrl\n      sku\n      type\n      status\n      extend\n      variants {\n        id\n        sku\n        product {\n          id\n          name\n          description\n          imageUrl\n          sku\n          type\n          status\n        }\n        optionValues {\n          id\n          value\n          option {\n            id\n            name\n            description\n          }\n        }\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation updateProduct($input: UpdateProductInput!) {\n    updateProduct(input: $input) {\n      id\n      code\n      name\n      description\n      imageUrl\n      sku\n      type\n      status\n      extend\n      variants {\n        id\n        sku\n        product {\n          id\n          name\n          description\n          imageUrl\n          sku\n          type\n          status\n        }\n        optionValues {\n          id\n          value\n          option {\n            id\n            name\n            description\n          }\n        }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_PRODUCT = q.default(
          B ||
            (B = a(
              [
                "\n  mutation createProduct($input: CreateProductInput!) {\n    createProduct(input: $input) {\n      id\n      code\n      name\n      description\n      imageUrl\n      sku\n      type\n      status\n      extend\n      variants {\n        id\n        sku\n        product {\n          id\n          name\n          description\n          imageUrl\n          sku\n          type\n          status\n        }\n        optionValues {\n          id\n          value\n          option {\n            id\n            name\n            description\n          }\n        }\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation createProduct($input: CreateProductInput!) {\n    createProduct(input: $input) {\n      id\n      code\n      name\n      description\n      imageUrl\n      sku\n      type\n      status\n      extend\n      variants {\n        id\n        sku\n        product {\n          id\n          name\n          description\n          imageUrl\n          sku\n          type\n          status\n        }\n        optionValues {\n          id\n          value\n          option {\n            id\n            name\n            description\n          }\n        }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.OPTIONS = q.default(
          H ||
            (H = a(
              [
                "\n  query options {\n    options {\n      id\n      name\n      description\n      optionValues {\n        id\n        value\n      }\n    }\n  }\n"
              ],
              [
                "\n  query options {\n    options {\n      id\n      name\n      description\n      optionValues {\n        id\n        value\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.UPDATE_CATEGORY = q.default(
          G ||
            (G = a(
              [
                "\n  mutation updateCategory($input: UpdateCategoryInput!) {\n    updateCategory(input: $input) {\n      id\n      name\n      catalogId\n      status\n      description\n      code\n      extend\n    }\n  }\n"
              ],
              [
                "\n  mutation updateCategory($input: UpdateCategoryInput!) {\n    updateCategory(input: $input) {\n      id\n      name\n      catalogId\n      status\n      description\n      code\n      extend\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_CATEGORY = q.default(
          V ||
            (V = a(
              [
                "\n  mutation createCategory($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      id\n      name\n      catalogId\n      status\n      description\n      code\n      extend\n    }\n  }\n"
              ],
              [
                "\n  mutation createCategory($input: CreateCategoryInput!) {\n    createCategory(input: $input) {\n      id\n      name\n      catalogId\n      status\n      description\n      code\n      extend\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_BUSINESS_RULE = q.default(
          Y ||
            (Y = a(
              [
                "\n  query businessRule($id: ID!) {\n    businessRule(id: $id) {\n      id\n      ruleLevel\n      ruleType\n      ruleDefaultValue\n    }\n  }\n"
              ],
              [
                "\n  query businessRule($id: ID!) {\n    businessRule(id: $id) {\n      id\n      ruleLevel\n      ruleType\n      ruleDefaultValue\n    }\n  }\n"
              ]
            ))
        ));
    },
    390: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Auxiliary = function(e) {
          return e.children;
        });
    },
    401: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(n(0)),
        r = function(e) {
          var t = e.styleName,
            n = e.placeholder,
            a = e.onChange,
            r = e.value;
          return l.createElement(
            "div",
            { className: "gx-search-bar " + t },
            l.createElement(
              "div",
              { className: "gx-form-group" },
              l.createElement("input", {
                className: "ant-input",
                type: "search",
                placeholder: n,
                onChange: a,
                value: r
              }),
              l.createElement(
                "span",
                { className: "gx-search-icon gx-pointer" },
                l.createElement("i", { className: "icon icon-search" })
              )
            )
          );
        };
      (t.default = r), (r.defaultProps = { styleName: "", value: "" });
    },
    408: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(0)),
        o = l(n(1824)),
        i = n(1825),
        s = n(132),
        c = n(390);
      t.default = function() {
        return r.createElement(
          c.Auxiliary,
          null,
          r.createElement(
            "div",
            { className: "gx-popover-header" },
            r.createElement("h3", { className: "gx-mb-0" }, "Notifications"),
            r.createElement("i", {
              className: "gx-icon-btn icon icon-charvlet-down"
            })
          ),
          r.createElement(
            s.CustomScrollbars,
            { className: "gx-popover-scroll" },
            r.createElement(
              "ul",
              { className: "gx-sub-popover" },
              i.notifications.map(function(e, t) {
                return r.createElement(o.default, { key: t, notification: e });
              })
            )
          )
        );
      };
    },
    409: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(0)),
        o = l(n(1826)),
        i = n(1827),
        s = n(390),
        c = n(132);
      t.default = function() {
        return r.createElement(
          s.Auxiliary,
          null,
          r.createElement(
            "div",
            { className: "gx-popover-header" },
            r.createElement("h3", { className: "gx-mb-0" }, "Messages"),
            r.createElement("i", {
              className: "gx-icon-btn icon icon-charvlet-down"
            })
          ),
          r.createElement(
            c.CustomScrollbars,
            { className: "gx-popover-scroll" },
            r.createElement(
              "ul",
              { className: "gx-sub-popover" },
              i.notifications.map(function(e, t) {
                return r.createElement(o.default, { key: t, notification: e });
              })
            )
          )
        );
      };
    },
    410: function(e, t, n) {
      "use strict";
      var a =
          (this && this.__extends) ||
          (function() {
            var e = function(t, n) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                })(t, n);
            };
            return function(t, n) {
              function a() {
                this.constructor = t;
              }
              e(t, n),
                (t.prototype =
                  null === n
                    ? Object.create(n)
                    : ((a.prototype = n.prototype), new a()));
            };
          })(),
        l =
          (this && this.__makeTemplateObject) ||
          function(e, t) {
            return (
              Object.defineProperty
                ? Object.defineProperty(e, "raw", { value: t })
                : (e.raw = t),
              e
            );
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(0)),
        s = n(3),
        c = o(n(369)),
        u = n(67),
        d = o(n(38)),
        m = n(14),
        p = s.Menu.SubMenu,
        g = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.getNavStyleSubMenuClass = function(e) {
                switch (e) {
                  case u.NAV_STYLE_DEFAULT_HORIZONTAL:
                    return "gx-menu-horizontal gx-submenu-popup-curve";
                  case u.NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
                    return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
                  case u.NAV_STYLE_BELOW_HEADER:
                    return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
                  case u.NAV_STYLE_ABOVE_HEADER:
                    return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
                  default:
                    return "gx-menu-horizontal";
                }
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.pathname,
                n = e.navStyle,
                a = t.substr(1),
                l = a.split("/")[1];
              return i.default.createElement(
                s.Menu,
                { defaultOpenKeys: [l], selectedKeys: [a], mode: "horizontal" },
                i.default.createElement(p, {
                  className: this.getNavStyleSubMenuClass(n),
                  key: "main",
                  title: i.default.createElement(c.default, {
                    id: "sidebar.main"
                  })
                })
              );
            }),
            t
          );
        })(i.Component);
      g.propTypes = {};
      var f,
        E = d.default(
          f ||
            (f = l(
              [
                "\n  query settings @client {\n    settings {\n      themeType\n      navStyle\n      pathname\n      locale {\n        icon\n        languageId\n        locale\n        name\n      }\n    }\n  }\n"
              ],
              [
                "\n  query settings @client {\n    settings {\n      themeType\n      navStyle\n      pathname\n      locale {\n        icon\n        languageId\n        locale\n        name\n      }\n    }\n  }\n"
              ]
            ))
        );
      t.default = m.compose(
        m.graphql(E, {
          name: "settings",
          props: function(e) {
            var t = e.settings.settings;
            return {
              themeType: t.themeType,
              navStyle: t.navStyle,
              pathname: t.pathname,
              locale: t.locale
            };
          }
        })
      )(g);
    },
    411: function(e, t, n) {
      e.exports = n.p + "logo-white.17c3f590.png";
    },
    412: function(e, t, n) {
      e.exports = n.p + "logo.8343dd76.png";
    },
    490: function(e, t, n) {
      e.exports = n.p + "walkin_logo_mini.08354e76.png";
    },
    67: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.THEME_TYPE = "THEME_TYPE"),
        (t.THEME_TYPE_LITE = "THEME_TYPE_LITE"),
        (t.THEME_TYPE_DARK = "THEME_TYPE_DARK"),
        (t.THEME_TYPE_SEMI_DARK = "THEME_TYPE_SEMI_DARK"),
        (t.THEME_COLOR_SELECTION = "THEME_COLOR_SELECTION"),
        (t.THEME_COLOR_SELECTION_PRESET = "THEME_COLOR_SELECTION_PRESET"),
        (t.THEME_COLOR_SELECTION_CUSTOMIZE = "THEME_COLOR_SELECTION_CUSTOMIZE"),
        (t.HORIZONTAL_NAVIGATION = "HORIZONTAL_NAVIGATION"),
        (t.HORIZONTAL_MENU_POSITION = "HORIZONTAL_MENU_POSITION"),
        (t.ABOVE_THE_HEADER = "ABOVE_THE_HEADER"),
        (t.INSIDE_THE_HEADER = "INSIDE_THE_HEADER"),
        (t.BELOW_THE_HEADER = "BELOW_THE_HEADER"),
        (t.VERTICAL_NAVIGATION = "VERTICAL_NAVIGATION"),
        (t.NAV_STYLE_MINI = "NAV_STYLE_MINI"),
        (t.LAYOUT_TYPE = "LAYOUT_TYPE"),
        (t.LAYOUT_TYPE_FRAMED = "LAYOUT_TYPE_FRAMED"),
        (t.LAYOUT_TYPE_BOXED = "LAYOUT_TYPE_BOXED"),
        (t.LAYOUT_TYPE_FULL = "LAYOUT_TYPE_FULL"),
        (t.NAV_STYLE = "NAV_STYLE"),
        (t.NAV_STYLE_FIXED = "NAV_STYLE_FIXED"),
        (t.NAV_STYLE_MINI_SIDEBAR = "NAV_STYLE_MINI_SIDEBAR"),
        (t.NAV_STYLE_DRAWER = "NAV_STYLE_DRAWER"),
        (t.NAV_STYLE_NO_HEADER_MINI_SIDEBAR =
          "NAV_STYLE_NO_HEADER_MINI_SIDEBAR"),
        (t.NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR =
          "NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR"),
        (t.NAV_STYLE_DEFAULT_HORIZONTAL = "NAV_STYLE_DEFAULT_HORIZONTAL"),
        (t.NAV_STYLE_DARK_HORIZONTAL = "NAV_STYLE_DARK_HORIZONTAL"),
        (t.NAV_STYLE_INSIDE_HEADER_HORIZONTAL =
          "NAV_STYLE_INSIDE_HEADER_HORIZONTAL"),
        (t.NAV_STYLE_BELOW_HEADER = "NAV_STYLE_BELOW_HEADER"),
        (t.NAV_STYLE_ABOVE_HEADER = "NAV_STYLE_ABOVE_HEADER"),
        (t.LIGHT_PURPLE = "#8A2BE2"),
        (t.LIGHT_PURPLE_SEC = "#00B378"),
        (t.LIGHT_PURPLE_NAV_DARK_BG = "#32394F"),
        (t.LIGHT_PURPLE_DARK_TEXT_COLOR = "#9799AC"),
        (t.RED = "#FF2B7A"),
        (t.RED_SEC = "#00D9C9"),
        (t.RED_NAV_DARK_BG = "#3C3766"),
        (t.RED_DARK_TEXT_COLOR = "#878BAB"),
        (t.BLUE = "#3DA4E6"),
        (t.BLUE_SEC = "#FCB53B"),
        (t.BLUE_NAV_DARK_BG = "#444342"),
        (t.BLUE_DARK_TEXT_COLOR = "#AAA59A"),
        (t.DARK_BLUE = "#0469B9"),
        (t.DARK_BLUE_SEC = "#17BDE5"),
        (t.DARK_BLUE_NAV_DARK_BG = "#086880"),
        (t.DARK_BLUE_DARK_TEXT_COLOR = "#9DDAE9"),
        (t.ORANGE = "#F18805"),
        (t.ORANGE_SEC = "#F1D065"),
        (t.ORANGE_NAV_DARK_BG = "#272932"),
        (t.ORANGE_DARK_TEXT_COLOR = "#ABA895"),
        (t.LIGHT_BLUE = "#6A95FF"),
        (t.LIGHT_BLUE_SEC = "#59DCFF"),
        (t.LIGHT_BLUE_NAV_DARK_BG = "#1B2642"),
        (t.LIGHT_BLUE_DARK_TEXT_COLOR = "#92A2C8"),
        (t.DEEP_ORANGE = "#F87060"),
        (t.DEEP_ORANGE_SEC = "#70A288"),
        (t.DEEP_ORANGE_NAV_DARK_BG = "#08415C"),
        (t.DEEP_ORANGE_DARK_TEXT_COLOR = "#97B8C7"),
        (t.LIGHT_PURPLE_1 = "#A172E7"),
        (t.LIGHT_PURPLE_1_SEC = "#E14594"),
        (t.LIGHT_PURPLE_1_NAV_DARK_BG = "#182952"),
        (t.LIGHT_PURPLE_1_DARK_TEXT_COLOR = "#8288B4"),
        (t.LIGHT_PURPLE_2 = "#956FE7"),
        (t.LIGHT_PURPLE_2_SEC = "#64D7D6"),
        (t.LIGHT_PURPLE_2_NAV_DARK_BG = "#284C7C"),
        (t.LIGHT_PURPLE_2_DARK_TEXT_COLOR = "#5782BB"),
        (t.TAB_SIZE = 992),
        (t.TAB_SIZE_MAX = 1220);
    }
  }
]);
//# sourceMappingURL=index~shared~walkinComponents~walkinCore~walkinHyperX~walkinNearX~walkinRefineX.d2ab2e74.js.map
