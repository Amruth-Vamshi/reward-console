(window.webpackJsonp = window.webpackJsonp || []).push([
  [8, 4],
  {
    102: function(e, t, a) {
      "use strict";
      var n =
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
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l,
        o,
        i,
        s,
        c,
        u,
        p,
        d,
        f,
        m,
        h = r(a(38));
      (t.GET_ALL_AND_SEARCH_PLACES = h.default(
        l ||
          (l = n(
            [
              "\nquery Places($limit: Int!, $offset: Int!,$search:String){\n  Places(limit:$limit,offset:$offset,search:$search){\n    places{\n      id\n      geofenceName\n      totalHotspot\n      radii\n      address\n      appId\n      orgId\n      location{lat,lng}\n    }\n    pageInfo\n  }\n}"
            ],
            [
              "\nquery Places($limit: Int!, $offset: Int!,$search:String){\n  Places(limit:$limit,offset:$offset,search:$search){\n    places{\n      id\n      geofenceName\n      totalHotspot\n      radii\n      address\n      appId\n      orgId\n      location{lat,lng}\n    }\n    pageInfo\n  }\n}"
            ]
          ))
      )),
        (t.SEARCH_PLACES = h.default(
          o ||
            (o = n(
              [
                "\nquery Places($limit: Int!, $offset: Int!, $search:String){\n  Places(limit:$limit,offset:$offset,search:$search){\n    places{\n      id\n      geofenceName\n      radii\n      address\n      appId\n      orgId\n      location{lat,lng}\n      totalHotspot\n    }\n    pageInfo\n    \n  }\n}"
              ],
              [
                "\nquery Places($limit: Int!, $offset: Int!, $search:String){\n  Places(limit:$limit,offset:$offset,search:$search){\n    places{\n      id\n      geofenceName\n      radii\n      address\n      appId\n      orgId\n      location{lat,lng}\n      totalHotspot\n    }\n    pageInfo\n    \n  }\n}"
              ]
            ))
        )),
        (t.GET_NAERBY_PLACES = h.default(
          i ||
            (i = n(
              [
                "\nquery getNearByPlaces($location:LocationGeometry!, $limit: Int!, $offset: Int!, $distance:Int){\n  getNearByPlaces(limit:$limit,offset:$offset,distance:$distance, locationGeometry:$location){\n    places{\n      id\n      geofenceName\n      radii\n      address\n      appId\n      orgId\n      location{lat,lng}\n    }\n    pageInfo\n    \n  }\n}"
              ],
              [
                "\nquery getNearByPlaces($location:LocationGeometry!, $limit: Int!, $offset: Int!, $distance:Int){\n  getNearByPlaces(limit:$limit,offset:$offset,distance:$distance, locationGeometry:$location){\n    places{\n      id\n      geofenceName\n      radii\n      address\n      appId\n      orgId\n      location{lat,lng}\n    }\n    pageInfo\n    \n  }\n}"
              ]
            ))
        )),
        (t.PLACES_BY_ID = h.default(
          s ||
            (s = n(
              [
                "\nquery place($id:ID!){\n  Place(id:$id){\n    id\n    geofenceName\n    location{lat lng}\n    radii\n    address\n    hotspots{\n      id\n      geofenceName\n      location{lat lng}\n      address\n    }\n  }\n}"
              ],
              [
                "\nquery place($id:ID!){\n  Place(id:$id){\n    id\n    geofenceName\n    location{lat lng}\n    radii\n    address\n    hotspots{\n      id\n      geofenceName\n      location{lat lng}\n      address\n    }\n  }\n}"
              ]
            ))
        )),
        (t.CREATE_GROUP_OF_PLACES = h.default(
          c ||
            (c = n(
              [
                "\nmutation createPlaces($groupName:String!,$places:[PlaceInput]!) {\n  createPlaces(groupName:$groupName,placeInput:$places){\n    places{id}\n    group{\n      id\n      groupName\n    }\n  }\n}"
              ],
              [
                "\nmutation createPlaces($groupName:String!,$places:[PlaceInput]!) {\n  createPlaces(groupName:$groupName,placeInput:$places){\n    places{id}\n    group{\n      id\n      groupName\n    }\n  }\n}"
              ]
            ))
        )),
        (t.CREATE_PLACE = h.default(
          u ||
            (u = n(
              [
                "\nmutation createOrUpdatePlace($places:[PlaceInput]!) {\n  createOrUpdatePlace(placeInput:$places){\n    id\n    hotspots{\n      id\n      geofenceName\n      location{lat lng}\n      address\n    }\n    geofenceName\n    location{lat lng}\n    radii\n    address\n    enabled\n    totalHotspot\n  }\n}"
              ],
              [
                "\nmutation createOrUpdatePlace($places:[PlaceInput]!) {\n  createOrUpdatePlace(placeInput:$places){\n    id\n    hotspots{\n      id\n      geofenceName\n      location{lat lng}\n      address\n    }\n    geofenceName\n    location{lat lng}\n    radii\n    address\n    enabled\n    totalHotspot\n  }\n}"
              ]
            ))
        )),
        (t.DISABLE_PLACES = h.default(
          p ||
            (p = n(
              [
                "\nmutation disableGeofence($id:ID!) {\n  disableGeofence(id:$id){\n      id enabled\n  }\n}"
              ],
              [
                "\nmutation disableGeofence($id:ID!) {\n  disableGeofence(id:$id){\n      id enabled\n  }\n}"
              ]
            ))
        )),
        (t.CREATE_APP = h.default(
          d ||
            (d = n(
              [
                "\nmutation CreateNearXApplication($organizationId:ID!,$input:ApplicationInput!) {\n  CreateNearXApplication(organizationId:$organizationId  ApplicationInput: $input){\n    id  name platform organization{ id name }\n  }\n}"
              ],
              [
                "\nmutation CreateNearXApplication($organizationId:ID!,$input:ApplicationInput!) {\n  CreateNearXApplication(organizationId:$organizationId  ApplicationInput: $input){\n    id  name platform organization{ id name }\n  }\n}"
              ]
            ))
        )),
        (t.GET_CONFIGURATION = h.default(
          f ||
            (f = n(
              [
                "\nquery getConfiguration{\n  getConfiguration{\n    id name key type orgId\n    createdBy\n    createdTime\n    lastModifiedBy\n    lastModifiedTime\n  }\n}"
              ],
              [
                "\nquery getConfiguration{\n  getConfiguration{\n    id name key type orgId\n    createdBy\n    createdTime\n    lastModifiedBy\n    lastModifiedTime\n  }\n}"
              ]
            ))
        )),
        (t.SET_CONFIGURATION = h.default(
          m ||
            (m = n(
              [
                "\nmutation setConfiguration($input: [ConfigInput]!){\n   setConfiguration(configInput:$input){\n    id\n    key\n    type\n    name\n    createdBy\n    createdTime\n    lastModifiedBy\n    lastModifiedTime\n  }\n}"
              ],
              [
                "\nmutation setConfiguration($input: [ConfigInput]!){\n   setConfiguration(configInput:$input){\n    id\n    key\n    type\n    name\n    createdBy\n    createdTime\n    lastModifiedBy\n    lastModifiedTime\n  }\n}"
              ]
            ))
        ));
    },
    116: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__awaiter) ||
          function(e, t, a, n) {
            return new (a || (a = Promise))(function(r, l) {
              function o(e) {
                try {
                  s(n.next(e));
                } catch (e) {
                  l(e);
                }
              }
              function i(e) {
                try {
                  s(n.throw(e));
                } catch (e) {
                  l(e);
                }
              }
              function s(e) {
                e.done
                  ? r(e.value)
                  : new a(function(t) {
                      t(e.value);
                    }).then(o, i);
              }
              s((n = n.apply(e, t || [])).next());
            });
          },
        r =
          (this && this.__generator) ||
          function(e, t) {
            var a,
              n,
              r,
              l,
              o = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1];
                  return r[1];
                },
                trys: [],
                ops: []
              };
            return (
              (l = { next: i(0), throw: i(1), return: i(2) }),
              "function" == typeof Symbol &&
                (l[Symbol.iterator] = function() {
                  return this;
                }),
              l
            );
            function i(l) {
              return function(i) {
                return (function(l) {
                  if (a) throw new TypeError("Generator is already executing.");
                  for (; o; )
                    try {
                      if (
                        ((a = 1),
                        n &&
                          (r =
                            2 & l[0]
                              ? n.return
                              : l[0]
                              ? n.throw || ((r = n.return) && r.call(n), 0)
                              : n.next) &&
                          !(r = r.call(n, l[1])).done)
                      )
                        return r;
                      switch (((n = 0), r && (l = [2 & l[0], r.value]), l[0])) {
                        case 0:
                        case 1:
                          r = l;
                          break;
                        case 4:
                          return o.label++, { value: l[1], done: !1 };
                        case 5:
                          o.label++, (n = l[1]), (l = [0]);
                          continue;
                        case 7:
                          (l = o.ops.pop()), o.trys.pop();
                          continue;
                        default:
                          if (
                            !(r = (r = o.trys).length > 0 && r[r.length - 1]) &&
                            (6 === l[0] || 2 === l[0])
                          ) {
                            o = 0;
                            continue;
                          }
                          if (
                            3 === l[0] &&
                            (!r || (l[1] > r[0] && l[1] < r[3]))
                          ) {
                            o.label = l[1];
                            break;
                          }
                          if (6 === l[0] && o.label < r[1]) {
                            (o.label = r[1]), (r = l);
                            break;
                          }
                          if (r && o.label < r[2]) {
                            (o.label = r[2]), o.ops.push(l);
                            break;
                          }
                          r[2] && o.ops.pop(), o.trys.pop();
                          continue;
                      }
                      l = t.call(e, o);
                    } catch (e) {
                      (l = [6, e]), (n = 0);
                    } finally {
                      a = r = 0;
                    }
                  if (5 & l[0]) throw l[1];
                  return { value: l[0] ? l[1] : void 0, done: !0 };
                })([l, i]);
              };
            }
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          },
        o = this;
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = a(433),
        s = l(a(433)),
        c = l(a(431)),
        u = a(3),
        p = new i.InMemoryCache();
      localStorage.getItem("jwt");
      t.nearXClient = new s.default({
        cache: p,
        uri: c.default.NEARX_GRAPHQL_URL,
        credentials: "same-origin",
        request: function(e) {
          return n(o, void 0, void 0, function() {
            var t;
            return r(this, function(a) {
              switch (a.label) {
                case 0:
                  return [4, localStorage.getItem("jwt")];
                case 1:
                  return (
                    (t = a.sent()),
                    e.setContext({
                      headers: {
                        api_key: "0X3bmLq5sBImabgEXkDVBfnOyUOkD2WN",
                        Host: "dev-api.getwalkin.in",
                        "Access-Control-Allow-Origin": "*",
                        token: t
                      }
                    }),
                    [2]
                  );
              }
            });
          });
        },
        onError: function(e) {
          var t = e.graphQLErrors,
            a = e.networkError;
          t
            ? (console.log(t), t[0].message && u.message.warn(t[0].message))
            : a &&
              (u.message.error(
                "Hey! Regret to inform that we are experiencing some issues. Please check your internet connection or try again after sometime"
              ),
              console.log(a));
        }
      });
    },
    248: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3),
        o = a(27);
      t.default = function(e) {
        var t = e.campaign,
          a = e.history;
        return r.createElement(
          o.Widget,
          {
            styleName: "gx-card-full",
            extra: r.createElement("i", {
              className: "icon icon-setting gx-text-grey gx-fs-xl"
            })
          },
          r.createElement(
            l.Row,
            { type: "flex", justify: "center" },
            r.createElement(
              l.Col,
              null,
              r.createElement("h2", null, t.name ? t.name : "No Title")
            )
          ),
          r.createElement(
            l.Row,
            { type: "flex", justify: "center" },
            r.createElement(
              l.Col,
              null,
              r.createElement("p", { className: "gx-text-grey" }, t.status)
            )
          ),
          r.createElement(
            l.Row,
            { type: "flex", justify: "center" },
            r.createElement(
              l.Col,
              null,
              r.createElement(l.Tag, null, " ", t.organization.name, " "),
              r.createElement(l.Tag, null, " ", t.application.name, " ")
            )
          ),
          r.createElement(
            l.Row,
            { style: { paddingTop: "2%" }, type: "flex", justify: "center" },
            r.createElement(
              l.Col,
              null,
              "ACTIVE" == t.status
                ? r.createElement(
                    l.Button,
                    {
                      type: "primary",
                      onClick: function() {
                        console.log("clicked"),
                          a.push("/refinex/campaign/" + t.id + "/edit");
                      }
                    },
                    "Edit"
                  )
                : r.createElement(
                    l.Button,
                    {
                      type: "primary",
                      onClick: function() {
                        console.log("clicked"),
                          a.push("/refinex/campaign/" + t.id + "/edit");
                      }
                    },
                    "Continue Editing"
                  )
            )
          )
        );
      };
    },
    249: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(a(0)),
        o = r(a(250)),
        i = r(a(257));
      a(260),
        (t.CampaignPriority = function(e) {
          e.buttons;
          var t = e.promptText,
            a = e.tootTipText,
            n = e.prioritySelectionTitle,
            r = e.priorityButtonText,
            s = e.testControlTitle,
            c = e.testControlPercentage,
            u = e.testControlPercentageEditText,
            p = e.priorityNumberInvalidErrorMessage,
            d = e.onTestAndControlEdit,
            f = e.handleChange,
            m = e.priorityChosen,
            h = e.HideTestConstrol;
          e.text, e.onClick;
          return l.default.createElement(
            l.Fragment,
            null,
            l.default.createElement(
              "div",
              {
                style: { padding: 15 },
                className: "campaignPriorityContainerStyle prioritySection"
              },
              l.default.createElement(o.default, {
                priorityChosen: m,
                prioritySelectionTitle: n,
                priorityButtonText: r,
                priorityNumberInvalidErrorMessage: p,
                onClick: f
              })
            ),
            h
              ? null
              : l.default.createElement(
                  "div",
                  { className: "campaignPriorityContainerStyle" },
                  l.default.createElement(i.default, {
                    testControlTitle: s,
                    testControlPercentage: c,
                    promptText: t,
                    tootTipText: a,
                    testControlPercentageEditText: u,
                    onTestAndControlEdit: d
                  })
                )
          );
        });
    },
    250: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3);
      a(251);
      var s = l(a(253)),
        c = i.Typography.Text,
        u = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.displayError = function(e) {
                var t;
                a.setState((((t = {})[e] = !0), t), function() {
                  setTimeout(function() {
                    var t;
                    a.setState((((t = {})[e] = !1), t));
                  }, 4e3);
                });
              }),
              (a.validateCampaignPriority = function(e) {
                var t = e.target.value;
                (!Number.isNaN(t) && t > 0 && t <= a.state.maxPriority) ||
                "" === t
                  ? (a.setState({ priorityChosen: t }), a.props.onClick(e))
                  : a.displayError("priorityNumberError");
              }),
              (a.handleButtonGroup = function(e) {
                var t = e.target.value;
                a.props.onClick(e), a.setState({ priorityChosen: t });
              }),
              (a.state = {
                priorityChosen: a.props.priorityChosen
                  ? parseInt(a.props.priorityChosen)
                  : 3,
                priorityNumberError: !1,
                maxPriority: a.props.maxPriority
                  ? parseInt(a.props.maxPriority)
                  : 99
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.prioritySelectionTitle,
                a = e.priorityButtonText,
                n = e.priorityNumberInvalidErrorMessage,
                r = (e.selectedPriorityButton, this.state),
                l = r.priorityChosen,
                u = r.priorityNumberError;
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(c, null, t),
                o.createElement(
                  "div",
                  { className: "prioritySelectionContainer" },
                  o.createElement(s.default, {
                    selectedPriorityButton: l,
                    handleChange: this.handleButtonGroup,
                    maxPriority: this.state.maxPriority
                  }),
                  o.createElement(i.Input, {
                    style: { marginLeft: 10 },
                    className: "prioritySelectionInputStyle",
                    placeholder: a,
                    onChange: this.validateCampaignPriority,
                    value: l,
                    type: "number"
                  })
                ),
                u && o.createElement(i.Alert, { message: n, type: "error" })
              );
            }),
            t
          );
        })(o.Component);
      t.default = u;
    },
    251: function(e, t, a) {},
    253: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3),
        o = a(254);
      a(255);
      t.default = function(e) {
        var t = e.selectedPriorityButton,
          a = void 0 === t ? 3 : t,
          n = e.handleChange,
          i = e.maxPriority,
          s = void 0 === i ? 99 : i,
          c = o.toNumber(a);
        return (
          c || (c = 1),
          r.createElement(
            l.Radio.Group,
            {
              defaultValue: 0 !== c ? c : 3,
              value: 0 !== c ? c : 3,
              buttonStyle: "solid",
              onChange:
                n ||
                function(e) {
                  console.log(e);
                }
            },
            c > 2 &&
              r.createElement(
                l.Radio.Button,
                { className: "allButtonStyle", value: c - 2 },
                c ? c - 2 : 1
              ),
            c > 1 &&
              r.createElement(
                l.Radio.Button,
                { className: "allButtonStyle", value: c - 1 },
                c ? c - 1 : 2
              ),
            r.createElement(
              l.Radio.Button,
              { className: "allButtonStyle", value: c || 3 },
              c || 3
            ),
            c + 1 <= s
              ? r.createElement(
                  l.Radio.Button,
                  { className: "allButtonStyle", value: c + 1 },
                  c ? c + 1 : 4
                )
              : "",
            c + 2 <= s &&
              r.createElement(
                l.Radio.Button,
                { className: "allButtonStyle", value: c + 2 },
                c ? c + 2 : 5
              )
          )
        );
      };
    },
    254: function(e, t, a) {
      "use strict";
      var n = this;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toNumber = function(e) {
          var t = parseFloat(e);
          return !isNaN(t) && isFinite(e) ? t : 0;
        }),
        (t.removeProp = function(e, t) {
          for (var a in e)
            if ("object" == typeof e[a]) {
              e[a];
              delete e.property;
              var r = n.removeProp(e[a], t);
              e[a] = r;
            } else a === t && delete e[a];
          return e;
        });
    },
    255: function(e, t, a) {},
    257: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3);
      a(258);
      var o = l.Typography.Text;
      t.default = function(e) {
        var t = e.testControlTitle,
          a = e.promptText,
          n = e.tootTipText,
          i = e.testControlPercentage,
          s = e.testControlPercentageEditText,
          c = e.onTestAndControlEdit;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            { className: "testControlContainer" },
            r.createElement(o, null, t),
            r.createElement(
              l.Tooltip,
              { title: a },
              r.createElement("span", { className: "tooltipTextStyle" }, n)
            )
          ),
          r.createElement(
            "div",
            { className: "testControlPercentageStyle" },
            r.createElement(o, null, i),
            r.createElement(
              l.Button,
              {
                className: "testAndControlButtonStyle",
                type: "link",
                onClick: c
              },
              s
            )
          )
        );
      };
    },
    258: function(e, t, a) {},
    260: function(e, t, a) {},
    262: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = l(a(0)),
        s = a(3),
        c = o(a(5)),
        u = s.Form.create({ name: "form_in_modal" })(
          (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.checkStart = function(e, a, n) {
                  var r = t.props.form.validateFields;
                  t.props.edit && n(),
                    a.valueOf() < c.default()
                      ? n("start time should not be less than present time")
                      : (r(["endTime"], { force: !0 }), n());
                }),
                (t.checkEnd = function(e, a, n) {
                  a || n(), t.props.edit && n();
                  var r = a;
                  console.log("value", a);
                  var l = (0, t.props.form.getFieldValue)("startTime");
                  r.valueOf() < l.valueOf()
                    ? n("end time should not be less than start time")
                    : n();
                }),
                t
              );
            }
            return (
              n(t, e),
              (t.prototype.render = function() {
                var e,
                  t = this.props,
                  a = t.form,
                  n = t.onFormNext,
                  l = t.wrappedComponentRef,
                  o = t.formValues,
                  u = void 0 === o ? {} : o,
                  p = (t.text, t.edit, c.default().add(10, "m"));
                0 != Object.keys(u).length &&
                  ((p = c.default(u.startTime)), (e = c.default(u.endTime)));
                var d = a.getFieldDecorator,
                  f = { labelCol: { span: 15 }, wrapperCol: { span: 18 } },
                  m = { wrapperCol: { span: 18 }, labelCol: { span: 18 } };
                return i.createElement(
                  s.Form,
                  { layout: "vertical", ref: l, onSubmit: n },
                  i.createElement(
                    s.Form.Item,
                    r({ label: "Campaign name" }, f),
                    d("name", {
                      initialValue:
                        "" +
                        (0 != Object.keys(u).length && u.name ? u.name : ""),
                      rules: [
                        {
                          transform: function(e) {
                            return e.trim();
                          }
                        },
                        { required: !0, message: "Name is required" }
                      ]
                    })(
                      i.createElement(s.Input, {
                        required: !0,
                        maxLength: 80,
                        size: "large"
                      })
                    )
                  ),
                  i.createElement(
                    s.Form.Item,
                    r({ label: "Description" }, f),
                    d("description", {
                      initialValue:
                        "" +
                        (0 != Object.keys(u).length && u.description
                          ? u.description
                          : "")
                    })(
                      i.createElement(s.Input, {
                        type: "textarea",
                        size: "large"
                      })
                    )
                  ),
                  i.createElement(
                    s.Form.Item,
                    r(
                      {
                        style: {
                          display: "inline-block",
                          width: "calc(50% - 12px)"
                        },
                        label: "Start date"
                      },
                      m
                    ),
                    d("startTime", {
                      initialValue: p,
                      rules: [
                        {
                          type: "object",
                          required: !0,
                          message: "Please select start time!"
                        },
                        { validator: this.checkStart }
                      ]
                    })(
                      i.createElement(s.DatePicker, {
                        showTime: !0,
                        format: "DD-MM-YYYY HH:mm:ss"
                      })
                    )
                  ),
                  i.createElement(
                    s.Form.Item,
                    r(
                      {
                        style: {
                          display: "inline-block",
                          width: "calc(50% - 12px)"
                        },
                        label: "End date"
                      },
                      m
                    ),
                    d("endTime", {
                      initialValue: e,
                      rules: [
                        {
                          type: "object",
                          required: !0,
                          message: "Please select end time!"
                        },
                        { validator: this.checkEnd }
                      ]
                    })(
                      i.createElement(s.DatePicker, {
                        showTime: !0,
                        format: "DD-MM-YYYY HH:mm:ss"
                      })
                    )
                  )
                );
              }),
              t
            );
          })(i.Component)
        );
      t.default = u;
    },
    263: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3);
      a(264);
      var i = r(a(1)),
        s = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.limitRange = function(e) {
                e >= a.props.maxValueAllowed &&
                  (a.props.onTestValueChange(e),
                  a.props.onControlValueChange(100 - e));
              }),
              (a.state = {}),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.testValue,
                a = e.controlValue;
              return l.createElement(
                "div",
                null,
                l.createElement(o.Slider, {
                  marks: {
                    0: {
                      style: { left: "10%", width: "100%" },
                      label: "Test Group: " + (t || 95)
                    },
                    100: {
                      style: { left: "90%", width: "100%" },
                      label: "Control Group: " + (a || 5)
                    }
                  },
                  value: t || 95,
                  onChange: this.limitRange
                })
              );
            }),
            t
          );
        })(l.Component);
      (s.propTypes = {
        testValue: i.number,
        controlValue: i.number,
        maxValueAllowed: i.number
      }),
        (s.defaultProps = {
          testValue: 95,
          controlValue: 5,
          maxValueAllowed: 75
        }),
        (t.default = s);
    },
    264: function(e, t, a) {},
    266: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3);
      a(267);
      t.default = function(e) {
        var t = e.title,
          a = e.visible,
          n = e.handleCancel,
          o = e.handleOk,
          i = e.popupContent,
          s = e.buttonText,
          c = e.handleOnClick;
        return r.createElement(
          l.Modal,
          {
            visible: a,
            title: t,
            onOk: o,
            onCancel: n,
            footer: [
              r.createElement(
                "div",
                { className: "popupFooterStyle" },
                r.createElement(
                  l.Button,
                  { key: "submit", type: "primary", size: "large", onClick: c },
                  s
                )
              )
            ]
          },
          i
        );
      };
    },
    267: function(e, t, a) {},
    269: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3);
      a(270);
      var i = o.Select.Option,
        s = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.UNSAFE_componentWillReceiveProps = function(e) {
                var t = a.state.errors;
                a.setState({ errors: e.errors ? e.errors : t });
              }),
              (a.state = {
                values: a.props.values ? a.props.values : [""],
                errors: a.props.errors ? a.props.errors : {}
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.addClick = function() {
              var e = this.state.values;
              console.log(e[e.length - 1]),
                "" != e[e.length - 1] &&
                  this.setState({ values: this.state.values.concat([""]) });
            }),
            (t.prototype.handleChange = function(e, t) {
              var a = this.state.values.slice();
              a.find(function(e) {
                return e == t;
              }) ||
                ((a[e] = t),
                this.setState({ values: a }),
                this.props.onValuesSelected(a)),
                (a[0] && "" != a[0]) || (this.state.errors.segment = "");
            }),
            (t.prototype.removeClick = function(e, t) {
              var a = this.state.values.slice();
              -1 !== e &&
                (a.splice(e, 1),
                this.setState({ values: a }),
                this.props.onValuesSelected(a));
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.segmentSelectionData;
              return l.createElement(
                l.Fragment,
                null,
                this.state.values.map(function(a, n) {
                  return l.createElement(
                    "div",
                    { key: n, className: "selectSegmentBoxContainer" },
                    l.createElement(
                      o.Select,
                      {
                        showSearch: !0,
                        placeholder: "Choose from the list",
                        value: a || void 0,
                        style: { width: "50%" },
                        getPopupContainer: function(e) {
                          return e.parentNode;
                        },
                        optionFilterProp: "children",
                        onChange: e.handleChange.bind(e, n)
                      },
                      t &&
                        t.map(function(e, t) {
                          return l.createElement(
                            i,
                            { key: t, value: e.id },
                            " ",
                            e.name
                          );
                        })
                    ),
                    l.createElement(o.Icon, {
                      type: "close",
                      onClick: e.removeClick.bind(e, n)
                    })
                  );
                }),
                l.createElement(
                  "div",
                  { style: { color: "Red", marginTop: 10 } },
                  this.state.errors.segment,
                  " "
                ),
                l.createElement(
                  o.Button,
                  {
                    className: "newSegmentAddButton",
                    type: "primary",
                    onClick: this.addClick.bind(this)
                  },
                  " Add "
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = s;
    },
    270: function(e, t, a) {},
    272: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(394)),
        i = l(a(0)),
        s = l(a(1));
      a(273);
      for (var c = a(3).Select.Option, u = [], p = 10; p < 36; p++)
        u.push(
          i.createElement(c, { key: p.toString(36) + p }, p.toString(36) + p)
        );
      var d = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.removeProp = function(e, a) {
              for (var n in e)
                if ("object" == typeof e[n]) {
                  e[n];
                  delete e.property;
                  var r = t.removeProp(e[n], a);
                  e[n] = r;
                } else n === a && delete e[n];
              return e;
            }),
            (t.renameQueryProperties = function(e) {
              var a = JSON.stringify(e),
                n = {
                  field: "attributeName",
                  value: "attributeValue",
                  operator: "expressionType"
                };
              a = a.replace(/field|value|operator/gi, function(e) {
                return n[e];
              });
              var r = JSON.parse(a);
              t.props.onQueryChange(r, e);
            }),
            (t.handleMultiSelect = function(e) {}),
            t
          );
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.operators,
              a = e.fields,
              n = e.query;
            return i.createElement(
              "div",
              { className: "flex-box-outer" },
              i.createElement("hr", null),
              i.createElement(
                "div",
                { className: "flex-box" },
                i.createElement(
                  "div",
                  { className: "scroll" },
                  i.createElement(o.default, {
                    fields: a,
                    controlClassnames: { fields: "form-control" },
                    onQueryChange: this.renameQueryProperties,
                    operators: t,
                    query: n
                  })
                )
              )
            );
          }),
          t
        );
      })(i.Component);
      (d.propTypes = {
        fields: s.arrayOf(
          s.shape({ name: s.string, label: s.string }).isRequired
        ),
        controlElements: s.shape({ valueEditor: s.func }),
        onQueryChange: s.func,
        operators: s.arrayOf(
          s.shape({ name: s.string.isRequired, label: s.string.isRequired })
            .isRequired
        )
      }),
        (d.defaultProps = {
          fields: [{ name: "", label: "" }],
          onQueryChange: function() {},
          valueEditor: function() {},
          operators: [
            { name: "EQUALS", label: "Equal to" },
            { name: "NOT_EQUALS", label: "Not equal to" },
            { name: "GREATER_THAN", label: "Greater than" },
            { name: "LESS_THAN", label: "Less than" },
            { name: "LESS_THAN_OR_EQUAL", label: "Less than or equal to" },
            { name: "GREATER_THAN_OR_EQUAL", label: "Greater than or equal to" }
          ]
        }),
        (t.default = d);
    },
    273: function(e, t, a) {},
    275: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3);
      t.default = function(e) {
        var t = e.columns,
          a = e.data,
          n = e.onChange,
          o = e.pagination,
          i = e.loading,
          s = e.rowKey;
        return r.createElement(l.Table, {
          className: "gx-table-responsive",
          dataSource: a,
          onChange: n,
          columns: t,
          pagination: o,
          loading: i,
          rowKey: s
        });
      };
    },
    276: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3).Input.Search,
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.onChange = function(e, t) {
              var a = [];
              (a =
                "" !== t.target.value
                  ? e.filter(function(e) {
                      var a = e.name.toLowerCase(),
                        n = t.target.value.toLowerCase();
                      return a.includes(n);
                    })
                  : e),
                this.props.onFilteredList(a);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.placeHolder,
                a = e.data;
              return l.createElement(
                "div",
                { className: "gx-search-bar gx-lt-icon-search-bar" },
                l.createElement(
                  "div",
                  { className: "gx-form-group" },
                  l.createElement(o, {
                    style: { width: 200 },
                    placeholder: t,
                    allowClear: !0,
                    onChange: this.onChange.bind(this, a)
                  })
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = i;
    },
    277: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3);
      a(278);
      var o = n(a(1)),
        i = function(e) {
          var t = e.children;
          return r.createElement(
            l.Row,
            { className: "campaignHeaderStyle" },
            t
          );
        };
      (i.propTypes = { isOnlyTitle: o.bool, children: o.object }),
        (i.defaultProps = { isOnlyTitle: !1, children: {} }),
        (t.default = i);
    },
    278: function(e, t, a) {},
    280: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3);
      a(281);
      t.default = function(e) {
        var t = e.nextButtonText,
          a = e.loading,
          n = e.saveDraftText,
          o = e.saveDraftButtonClass,
          i = e.nextButtonClass,
          s = e.saveDraft,
          c = e.goToPage2;
        return r.createElement(
          "div",
          { className: "" },
          r.createElement(
            l.Button,
            { loading: a, className: i, onClick: c, type: "primary" },
            t
          ),
          n &&
            r.createElement(
              l.Button,
              { className: o, onClick: s, type: "link" },
              n
            )
        );
      };
    },
    281: function(e, t, a) {},
    283: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3);
      a(284);
      var o = l.Steps.Step;
      t.default = function(e) {
        var t = e.stepData,
          a = e.current,
          n = e.onChange;
        e.onClick;
        return r.createElement(
          l.Steps,
          {
            onChange: n,
            className: "stepsStyle",
            size: "small",
            labelPlacement: "vertical",
            current: a
          },
          t &&
            t.map(function(e, t) {
              return r.createElement(o, {
                key: "col-" + t,
                title: e.title,
                status: e.status
              });
            })
        );
      };
    },
    284: function(e, t, a) {},
    286: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = i.Typography.Title,
        c = l(a(5));
      a(287);
      var u = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.changeState = function(e) {
              console.log(e.target.innerText),
                "LAUNCH" == e.target.innerText.trim() &&
                  t.props.launchCampaign(),
                "PAUSE" == e.target.innerText.trim() && t.props.pauseCampaign(),
                "UNPAUSE" == e.target.innerText.trim() &&
                  t.props.unpauseCampaign(),
                "FORCE STOP" == e.target.innerText.trim() &&
                  t.props.abandonCampaign();
            }),
            t
          );
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.campaign,
              a = e.audience,
              n = e.offer,
              r = e.communication,
              l = e.view,
              u = e.totalAudienceCount,
              p = c.default(),
              d = c.default(t.startTime),
              f = c.default(t.endTime),
              m = "";
            if (p < d) {
              var h = c.default.duration(p.diff(d)).humanize();
              m = "To Start";
            } else if (p < f) {
              h = c.default.duration(p.diff(f)).humanize();
              m = "To End";
            } else m = "Completed";
            var g = c.default(t.startTime).format("DD-MMM-YYYY HH:mm:ss"),
              y = c.default(t.endTime).format("DD-MMM-YYYY HH:mm:ss");
            return (
              console.log(this.props),
              o.createElement(
                "div",
                { className: "campaignOverview" },
                !1 === l
                  ? o.createElement(
                      s,
                      { level: 3, className: "gx-text-grey" },
                      "Overview"
                    )
                  : "",
                o.createElement(
                  "div",
                  { style: { margin: "20px 10px 20px 30px" } },
                  o.createElement(
                    i.Row,
                    null,
                    o.createElement(
                      i.Col,
                      { style: { paddingLeft: 0 }, sm: 24, md: 16 },
                      o.createElement(
                        "div",
                        { className: "cpName" },
                        " ",
                        t.name,
                        " "
                      ),
                      o.createElement(
                        "div",
                        { className: "cpDec mb-15" },
                        null != t.description ? t.description : ""
                      ),
                      o.createElement(
                        "div",
                        { className: "cpDaysLeft mb-30" },
                        o.createElement(
                          "b",
                          { style: { textTransform: "capitalize" } },
                          h || ""
                        ),
                        "  ",
                        "Completed" == m
                          ? o.createElement(
                              "div",
                              null,
                              o.createElement(i.Icon, {
                                style: { color: "#00b707" },
                                type: "check-circle",
                                theme: "filled"
                              }),
                              "   ",
                              m
                            )
                          : m
                      )
                    ),
                    o.createElement(
                      i.Col,
                      { sm: 24, md: 8 },
                      o.createElement(
                        "div",
                        { className: "divCenterVertical" },
                        l && "Completed" != m
                          ? "DRAFT" == t.campaignStatus
                            ? o.createElement(
                                i.Button,
                                {
                                  shape: "round",
                                  type: "primary",
                                  style: {
                                    width: "200px",
                                    letterSpacing: 1,
                                    height: 40,
                                    fontSize: 20
                                  },
                                  onClick: this.changeState,
                                  loading: this.props.loading
                                },
                                "  LAUNCH  "
                              )
                            : o.createElement(
                                "div",
                                null,
                                ("LIVE" == t.campaignStatus ||
                                  "PAUSE" == t.campaignStatus) &&
                                  o.createElement(
                                    i.Button,
                                    {
                                      type: "primary",
                                      shape: "round",
                                      onClick: this.changeState,
                                      style: {
                                        width: "140px",
                                        letterSpacing: 0,
                                        height: 40,
                                        fontSize: 17
                                      },
                                      loading: this.props.loading
                                    },
                                    "PAUSE" != t.campaignStatus
                                      ? "PAUSE"
                                      : "UNPAUSE"
                                  )
                              )
                          : ""
                      )
                    )
                  ),
                  o.createElement(
                    "div",
                    { className: "mb-25" },
                    o.createElement(
                      i.Row,
                      null,
                      o.createElement(
                        i.Col,
                        { className: "mb-10", md: 24, lg: 8 },
                        "Start date    :   ",
                        g
                      ),
                      o.createElement(
                        i.Col,
                        { className: "mb-10", md: 24, lg: 8 },
                        "End date    :   ",
                        y
                      ),
                      o.createElement(
                        i.Col,
                        { className: "mb-10", md: 24, lg: 8 },
                        o.createElement(i.Progress, {
                          style: {
                            width: "250px",
                            margin: "0px 5px 0px 5px",
                            color: "#654665"
                          },
                          percent: Math.round(
                            (c.default().diff(c.default(t.startTime), "hours") /
                              c
                                .default(t.endTime)
                                .diff(c.default(t.startTime), "hours")) *
                              100
                          ),
                          showInfo: !0,
                          status: "active"
                        })
                      )
                    )
                  ),
                  t.feedbackForm
                    ? o.createElement(
                        "div",
                        { className: "mb-25" },
                        o.createElement("h3", null, "Form "),
                        o.createElement(
                          i.Row,
                          null,
                          o.createElement(
                            i.Col,
                            {
                              xs: 24,
                              sm: 24,
                              md: 17,
                              xl: 14,
                              xxl: 12,
                              className: "overViewBg"
                            },
                            t.feedbackForm ? t.feedbackForm.title : ""
                          )
                        )
                      )
                    : "",
                  a && a.length
                    ? o.createElement(
                        "div",
                        { className: "mb-25" },
                        o.createElement(
                          i.Row,
                          null,
                          o.createElement(
                            i.Col,
                            {
                              className: "AudienceTitle",
                              sm: 16,
                              md: 12,
                              xl: 10,
                              xxl: 9
                            },
                            o.createElement("h3", null, "Audience")
                          ),
                          o.createElement(
                            i.Col,
                            null,
                            "Total Reach : ",
                            u || "6412",
                            " "
                          )
                        ),
                        a.map(function(e, t) {
                          return o.createElement(
                            i.Row,
                            { key: t, style: { marginBottom: 10 } },
                            o.createElement(
                              i.Col,
                              {
                                xs: 24,
                                sm: 16,
                                md: 12,
                                xl: 10,
                                xxl: 9,
                                className: "audBg"
                              },
                              e.segment.name
                            ),
                            o.createElement(i.Col, {
                              xs: 24,
                              sm: 8,
                              md: 5,
                              xl: 4,
                              xxl: 3,
                              className: "audBg"
                            })
                          );
                        })
                      )
                    : "",
                  n &&
                    o.createElement(
                      "div",
                      { className: "mb-25" },
                      o.createElement("h3", null, "Offer"),
                      o.createElement(
                        i.Row,
                        null,
                        o.createElement(
                          i.Col,
                          {
                            xs: 24,
                            sm: 24,
                            md: 17,
                            xl: 14,
                            xxl: 12,
                            className: "offerBg"
                          },
                          n.name
                        )
                      )
                    ),
                  r &&
                    o.createElement(
                      "div",
                      { className: "mb-25" },
                      o.createElement("h3", null, "Communication"),
                      o.createElement(
                        i.Row,
                        null,
                        o.createElement(
                          i.Col,
                          {
                            xs: 24,
                            sm: 24,
                            md: 17,
                            xl: 14,
                            xxl: 12,
                            className: "overViewBg"
                          },
                          r
                        )
                      )
                    )
                )
              )
            );
          }),
          t
        );
      })(o.Component);
      t.default = u;
    },
    287: function(e, t, a) {},
    289: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(3),
        o = r(a(0)),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                l.Button,
                {
                  type: this.props.type,
                  disabled: this.props.disabled,
                  style: this.props.style,
                  onClick: this.props.onClick
                },
                this.props.children
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = i;
    },
    290: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = a(3),
        o = r(a(0)),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(l.Icon, {
                type: this.props.type,
                spin: this.props.spin,
                style: this.props.style,
                rotate: this.props.rotate,
                twoToneColor: this.props.twoToneColor,
                theme: this.props.theme
              });
            }),
            t
          );
        })(o.default.Component);
      t.default = i;
    },
    291: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(417)),
        i = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.onChange = function(e) {
                console.log("Content change:", e), a.setState({ str: e });
              }),
              (a.state = { str: "This is editable text" }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                "div",
                null,
                l.default.createElement(
                  o.default,
                  { editable: { onChange: this.onChange } },
                  this.state.str
                ),
                l.default.createElement(
                  o.default,
                  { copyable: !0 },
                  "This is a copyable text."
                ),
                l.default.createElement(
                  o.default,
                  { copyable: { text: "Hello, Ant Design!" } },
                  "Replace copy text."
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = i;
    },
    292: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(418)),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                "div",
                null,
                l.default.createElement(o.default, null, "Ant Design"),
                l.default.createElement("br", null),
                l.default.createElement(
                  o.default,
                  { type: "secondary" },
                  "Ant Design"
                ),
                l.default.createElement("br", null),
                l.default.createElement(
                  o.default,
                  { type: "warning" },
                  "Ant Design"
                ),
                l.default.createElement("br", null),
                l.default.createElement(
                  o.default,
                  { type: "danger" },
                  "Ant Design"
                ),
                l.default.createElement("br", null),
                l.default.createElement(
                  o.default,
                  { disabled: !0 },
                  "Ant Design"
                ),
                l.default.createElement("br", null),
                l.default.createElement(o.default, { mark: !0 }, "Ant Design"),
                l.default.createElement("br", null),
                l.default.createElement(o.default, { code: !0 }, "Ant Design"),
                l.default.createElement("br", null),
                l.default.createElement(
                  o.default,
                  { underline: !0 },
                  "Ant Design"
                ),
                l.default.createElement("br", null),
                l.default.createElement(
                  o.default,
                  { delete: !0 },
                  "Ant Design"
                ),
                l.default.createElement("br", null),
                l.default.createElement(o.default, { strong: !0 }, "Ant Design")
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = i;
    },
    293: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(419)),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                "div",
                null,
                l.default.createElement(o.default, null, "h1. Ant Design"),
                l.default.createElement(
                  o.default,
                  { level: 2 },
                  "h2. Ant Design"
                ),
                l.default.createElement(
                  o.default,
                  { level: 3 },
                  "h3. Ant Design"
                ),
                l.default.createElement(
                  o.default,
                  { level: 4 },
                  "h4. Ant Design"
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = i;
    },
    294: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32));
      a(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(
              "div",
              { className: "basic-main" },
              l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  i.default,
                  { className: "basic-box", span: 12 },
                  "col-12"
                ),
                l.default.createElement(
                  i.default,
                  { className: "basic-box", span: 12 },
                  "col-12"
                )
              ),
              l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  i.default,
                  { className: "basic-box", span: 8 },
                  "col-8"
                ),
                l.default.createElement(
                  i.default,
                  { className: "basic-box", span: 8 },
                  "col-8"
                ),
                l.default.createElement(
                  i.default,
                  { className: "basic-box", span: 8 },
                  "col-8"
                )
              ),
              l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  i.default,
                  { className: "basic-box", span: 6 },
                  "col-6"
                ),
                l.default.createElement(
                  i.default,
                  { className: "basic-box", span: 6 },
                  "col-6"
                ),
                l.default.createElement(
                  i.default,
                  { className: "basic-box", span: 6 },
                  "col-6"
                ),
                l.default.createElement(
                  i.default,
                  { className: "basic-box", span: 6 },
                  "col-6"
                )
              )
            );
          }),
          t
        );
      })(l.default.Component);
      t.default = s;
    },
    296: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32));
      a(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(
              "div",
              { className: "gutter-main" },
              l.default.createElement(
                o.default,
                { gutter: 16 },
                l.default.createElement(
                  i.default,
                  { className: "gutter-row", span: 6 },
                  l.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                l.default.createElement(
                  i.default,
                  { className: "gutter-row", span: 6 },
                  l.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                l.default.createElement(
                  i.default,
                  { className: "gutter-row", span: 6 },
                  l.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                l.default.createElement(
                  i.default,
                  { className: "gutter-row", span: 6 },
                  l.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                )
              ),
              l.default.createElement(
                o.default,
                { gutter: [{ xs: 8, sm: 16, md: 24, lg: 32 }, 20] },
                l.default.createElement(
                  i.default,
                  { className: "gutter-row", span: 6 },
                  l.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                l.default.createElement(
                  i.default,
                  { className: "gutter-row", span: 6 },
                  l.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                l.default.createElement(
                  i.default,
                  { className: "gutter-row", span: 6 },
                  l.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                l.default.createElement(
                  i.default,
                  { className: "gutter-row", span: 6 },
                  l.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                )
              )
            );
          }),
          t
        );
      })(l.default.Component);
      t.default = s;
    },
    297: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32));
      a(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(
              "div",
              null,
              l.default.createElement(
                o.default,
                null,
                l.default.createElement(i.default, { span: 8 }, "col-8"),
                l.default.createElement(
                  i.default,
                  { span: 8, offset: 8 },
                  "col-8"
                )
              ),
              l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  i.default,
                  { span: 6, offset: 6 },
                  "col-6 col-offset-6"
                ),
                l.default.createElement(
                  i.default,
                  { span: 6, offset: 6 },
                  "col-6 col-offset-6"
                )
              ),
              l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  i.default,
                  { span: 12, offset: 6 },
                  "col-12 col-offset-6"
                )
              )
            );
          }),
          t
        );
      })(l.default.Component);
      t.default = s;
    },
    298: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32));
      a(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(
              "div",
              null,
              l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  i.default,
                  { span: 18, push: 6 },
                  "col-18 col-push-6"
                ),
                l.default.createElement(
                  i.default,
                  { span: 6, pull: 18 },
                  "col-6 col-pull-18"
                )
              )
            );
          }),
          t
        );
      })(l.default.Component);
      t.default = s;
    },
    299: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32));
      a(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(
              "div",
              null,
              l.default.createElement("p", null, "sub-element align left"),
              l.default.createElement(
                o.default,
                { type: "flex", justify: "start" },
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4")
              ),
              l.default.createElement("p", null, "sub-element align center"),
              l.default.createElement(
                o.default,
                { type: "flex", justify: "center" },
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4")
              ),
              l.default.createElement("p", null, "sub-element align right"),
              l.default.createElement(
                o.default,
                { type: "flex", justify: "end" },
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4")
              ),
              l.default.createElement(
                "p",
                null,
                "sub-element monospaced arrangement"
              ),
              l.default.createElement(
                o.default,
                { type: "flex", justify: "space-between" },
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4")
              ),
              l.default.createElement("p", null, "sub-element align full"),
              l.default.createElement(
                o.default,
                { type: "flex", justify: "space-around" },
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4"),
                l.default.createElement(i.default, { span: 4 }, "col-4")
              )
            );
          }),
          t
        );
      })(l.default.Component);
      t.default = s;
    },
    30: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(248));
      t.ManageCampaignCard = r.default;
      var l = a(249);
      t.CampaignPriority = l.CampaignPriority;
      var o = n(a(262));
      t.BasicInfoForm = o.default;
      var i = n(a(263));
      t.BasicSlider = i.default;
      var s = n(a(266));
      t.Popup = s.default;
      var c = n(a(269));
      t.AddAndDeleteSelectDynamically = c.default;
      var u = n(a(272));
      t.WalkinQueryBuilder = u.default;
      var p = n(a(275));
      t.SortableDataTable = p.default;
      var d = n(a(276));
      t.InstantSearch = d.default;
      var f = n(a(277));
      t.CampaignHeader = f.default;
      var m = n(a(280));
      t.CampaignFooter = m.default;
      var h = n(a(283));
      t.Stepper = h.default;
      var g = n(a(286));
      t.campaignOverview = g.default;
      var y = n(a(289));
      t.CustomButton = y.default;
      var _ = n(a(290));
      t.CustomIcon = _.default;
      var E = n(a(291));
      t.CustomParagraph = E.default;
      var v = n(a(292));
      t.CustomText = v.default;
      var b = n(a(293));
      t.CustomTitle = b.default;
      var C = n(a(294));
      t.BasicGrid = C.default;
      var P = n(a(296));
      t.GutterGrid = P.default;
      var O = n(a(297));
      t.ColumnOffsetGrid = O.default;
      var S = n(a(298));
      t.SortGrid = S.default;
      var w = n(a(299));
      t.FlexLayoutGrid = w.default;
      var x = n(a(300));
      t.FlexAlignmentGrid = x.default;
      var A = n(a(301));
      t.FlexOrderGrid = A.default;
      var k = n(a(302));
      t.ResponsiveGrid = k.default;
      var N = n(a(303));
      t.MoreResponsiveGrid = N.default;
      var I = n(a(304));
      t.PlaygroundGrid = I.default;
      var R = n(a(305));
      t.BasicLayout = R.default;
      var D = n(a(306));
      t.HeaderContentFooterLayout = D.default;
      var T = n(a(309));
      t.HeaderSider2Layout = T.default;
      var j = n(a(310));
      t.HeaderSiderLayout = j.default;
      var M = n(a(311));
      t.SiderLayout = M.default;
      var B = n(a(312));
      t.CustomTriggerLayout = B.default;
      var L = n(a(313));
      t.ResponsiveLayout = L.default;
      var F = n(a(314));
      t.FixedHeaderLayout = F.default;
      var H = n(a(315));
      t.FixedSiderLayout = H.default;
      var G = n(a(316));
      t.ColumnLayout = G.default;
      var U = n(a(317));
      t.InfoText = U.default;
      var V = n(a(318));
      t.CustomList = V.default;
      var J = n(a(320));
      t.Image = J.default;
      var K = n(a(321));
      t.Header = K.default;
      var z = n(a(322));
      t.WHeader = z.default;
      var q = n(a(325));
      t.EditableFormTable = q.default;
      var W = n(a(326));
      t.FileUploader = W.default;
      var Y = n(a(329));
      t.OfferBasicInfoForm = Y.default;
      var X = n(a(333));
      t.OfferRedemptionRulesForm = X.default;
      var Q = n(a(336));
      t.CollapseSidebar = Q.default;
      var Z = n(a(339));
      t.CounterCard = Z.default;
      var $ = n(a(340));
      t.MultipleCounterCard = $.default;
      var ee = n(a(341));
      t.HoverText = ee.default;
    },
    300: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32));
      a(34);
      var s = function(e) {
          return l.default.createElement(
            "p",
            { className: "height-" + e.value },
            e.children
          );
        },
        c = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                "div",
                null,
                l.default.createElement("p", null, "Align Top"),
                l.default.createElement(
                  o.default,
                  { type: "flex", justify: "center", align: "top" },
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 100 }, "col-4")
                  ),
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 50 }, "col-4")
                  ),
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 120 }, "col-4")
                  ),
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 80 }, "col-4")
                  )
                ),
                l.default.createElement("p", null, "Align Center"),
                l.default.createElement(
                  o.default,
                  { type: "flex", justify: "space-around", align: "middle" },
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 100 }, "col-4")
                  ),
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 50 }, "col-4")
                  ),
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 120 }, "col-4")
                  ),
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 80 }, "col-4")
                  )
                ),
                l.default.createElement("p", null, "Align Bottom"),
                l.default.createElement(
                  o.default,
                  { type: "flex", justify: "space-between", align: "bottom" },
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 100 }, "col-4")
                  ),
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 50 }, "col-4")
                  ),
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 120 }, "col-4")
                  ),
                  l.default.createElement(
                    i.default,
                    { span: 4 },
                    l.default.createElement(s, { value: 80 }, "col-4")
                  )
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = c;
    },
    301: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32));
      a(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(
              "div",
              null,
              l.default.createElement(
                o.default,
                { type: "flex" },
                l.default.createElement(
                  i.default,
                  { span: 6, order: 4 },
                  "1 col-order-4"
                ),
                l.default.createElement(
                  i.default,
                  { span: 6, order: 3 },
                  "2 col-order-3"
                ),
                l.default.createElement(
                  i.default,
                  { span: 6, order: 2 },
                  "3 col-order-2"
                ),
                l.default.createElement(
                  i.default,
                  { span: 6, order: 1 },
                  "4 col-order-1"
                )
              )
            );
          }),
          t
        );
      })(l.default.Component);
      t.default = s;
    },
    302: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32));
      a(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(
              o.default,
              null,
              l.default.createElement(
                i.default,
                { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                "Col"
              ),
              l.default.createElement(
                i.default,
                { xs: 20, sm: 16, md: 12, lg: 8, xl: 4 },
                "Col"
              ),
              l.default.createElement(
                i.default,
                { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                "Col"
              )
            );
          }),
          t
        );
      })(l.default.Component);
      t.default = s;
    },
    303: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32));
      a(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            return l.default.createElement(
              o.default,
              null,
              l.default.createElement(
                i.default,
                { xs: { span: 5, offset: 1 }, lg: { span: 6, offset: 2 } },
                "Col"
              ),
              l.default.createElement(
                i.default,
                { xs: { span: 11, offset: 1 }, lg: { span: 6, offset: 2 } },
                "Col"
              ),
              l.default.createElement(
                i.default,
                { xs: { span: 5, offset: 1 }, lg: { span: 6, offset: 2 } },
                "Col"
              )
            );
          }),
          t
        );
      })(l.default.Component);
      t.default = s;
    },
    304: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(31)),
        i = r(a(32)),
        s = r(a(420));
      a(34);
      var c = (function(e) {
        function t(t) {
          var a = e.call(this, t) || this;
          return (
            (a.gutters = {}),
            (a.vgutters = {}),
            (a.colCounts = {}),
            (a.onGutterChange = function(e) {
              a.setState({ gutterKey: e });
            }),
            (a.onVGutterChange = function(e) {
              a.setState({ vgutterKey: e });
            }),
            (a.onColCountChange = function(e) {
              a.setState({ colCountKey: e });
            }),
            (a.state = { gutterKey: 1, vgutterKey: 1, colCountKey: 2 }),
            [8, 16, 24, 32, 40, 48].forEach(function(e, t) {
              a.gutters[t] = e;
            }),
            [8, 16, 24, 32, 40, 48].forEach(function(e, t) {
              a.vgutters[t] = e;
            }),
            [2, 3, 4, 6, 8, 12].forEach(function(e, t) {
              a.colCounts[t] = e;
            }),
            a
          );
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            for (
              var e = this.state,
                t = e.gutterKey,
                a = e.vgutterKey,
                n = e.colCountKey,
                r = [],
                c = this.colCounts[n],
                u = "",
                p = 0;
              p < c;
              p++
            )
              r.push(
                l.default.createElement(
                  i.default,
                  { key: p.toString(), span: 24 / c },
                  l.default.createElement("div", null, "Column")
                )
              ),
                (u += "  <Col span={" + 24 / c + "} />\n");
            return l.default.createElement(
              "div",
              null,
              l.default.createElement(
                "div",
                { style: { marginBottom: 16 } },
                l.default.createElement(
                  "span",
                  { style: { marginRight: 6 } },
                  "Horizontal Gutter (px): "
                ),
                l.default.createElement(
                  "div",
                  { style: { width: "50%" } },
                  l.default.createElement(s.default, {
                    min: 0,
                    max: Object.keys(this.gutters).length - 1,
                    value: t,
                    onChange: this.onGutterChange,
                    marks: this.gutters,
                    step: null
                  })
                ),
                l.default.createElement(
                  "span",
                  { style: { marginRight: 6 } },
                  "Vertical Gutter (px): "
                ),
                l.default.createElement(
                  "div",
                  { style: { width: "50%" } },
                  l.default.createElement(s.default, {
                    min: 0,
                    max: Object.keys(this.vgutters).length - 1,
                    value: a,
                    onChange: this.onVGutterChange,
                    marks: this.vgutters,
                    step: null
                  })
                ),
                l.default.createElement(
                  "span",
                  { style: { marginRight: 6 } },
                  "Column Count:"
                ),
                l.default.createElement(
                  "div",
                  { style: { width: "50%" } },
                  l.default.createElement(s.default, {
                    min: 0,
                    max: Object.keys(this.colCounts).length - 1,
                    value: n,
                    onChange: this.onColCountChange,
                    marks: this.colCounts,
                    step: null
                  })
                )
              ),
              l.default.createElement(
                o.default,
                { gutter: [this.gutters[t], this.vgutters[a]] },
                r
              ),
              l.default.createElement(
                o.default,
                { gutter: [this.gutters[t], this.vgutters[a]] },
                r
              ),
              l.default.createElement(
                "pre",
                null,
                "<Row gutter={[" +
                  this.gutters[t] +
                  ", " +
                  this.vgutters[a] +
                  "]}>\n" +
                  u +
                  "</Row>"
              ),
              l.default.createElement(
                "pre",
                null,
                "<Row gutter={[" +
                  this.gutters[t] +
                  ", " +
                  this.vgutters[a] +
                  "]}>\n" +
                  u +
                  "</Row>"
              )
            );
          }),
          t
        );
      })(l.default.Component);
      t.default = c;
    },
    305: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(39)),
        i = o.default.Header,
        s = o.default.Footer,
        c = o.default.Sider,
        u = o.default.Content,
        p = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                "div",
                null,
                l.default.createElement(
                  o.default,
                  null,
                  l.default.createElement(i, null, "Header"),
                  l.default.createElement(u, null, "Content"),
                  l.default.createElement(s, null, "Footer")
                ),
                l.default.createElement(
                  o.default,
                  null,
                  l.default.createElement(i, null, "Header"),
                  l.default.createElement(
                    o.default,
                    null,
                    l.default.createElement(c, null, "Sider"),
                    l.default.createElement(u, null, "Content")
                  ),
                  l.default.createElement(s, null, "Footer")
                ),
                l.default.createElement(
                  o.default,
                  null,
                  l.default.createElement(i, null, "Header"),
                  l.default.createElement(
                    o.default,
                    null,
                    l.default.createElement(u, null, "Content"),
                    l.default.createElement(c, null, "Sider")
                  ),
                  l.default.createElement(s, null, "Footer")
                ),
                l.default.createElement(
                  o.default,
                  null,
                  l.default.createElement(c, null, "Sider"),
                  l.default.createElement(
                    o.default,
                    null,
                    l.default.createElement(i, null, "Header"),
                    l.default.createElement(u, null, "Content"),
                    l.default.createElement(s, null, "Footer")
                  )
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = p;
    },
    306: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(39)),
        i = r(a(57)),
        s = r(a(41));
      a(307);
      var c = o.default.Header,
        u = o.default.Footer,
        p = (o.default.Sider, o.default.Content),
        d = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                o.default,
                { className: "layout" },
                l.default.createElement(
                  c,
                  null,
                  l.default.createElement("div", { className: "logo" }),
                  l.default.createElement(
                    s.default,
                    {
                      theme: "dark",
                      mode: "horizontal",
                      defaultSelectedKeys: ["2"],
                      style: { lineHeight: "64px" }
                    },
                    l.default.createElement(
                      s.default.Item,
                      { key: "1" },
                      "nav 1"
                    ),
                    l.default.createElement(
                      s.default.Item,
                      { key: "2" },
                      "nav 2"
                    ),
                    l.default.createElement(
                      s.default.Item,
                      { key: "3" },
                      "nav 3"
                    )
                  )
                ),
                l.default.createElement(
                  p,
                  { style: { padding: "0 50px" } },
                  l.default.createElement(
                    i.default,
                    { style: { margin: "16px 0" } },
                    l.default.createElement(i.default.Item, null, "Home"),
                    l.default.createElement(i.default.Item, null, "List"),
                    l.default.createElement(i.default.Item, null, "App")
                  ),
                  l.default.createElement(
                    "div",
                    {
                      style: { background: "#fff", padding: 24, minHeight: 280 }
                    },
                    "Content"
                  )
                ),
                l.default.createElement(
                  u,
                  { style: { textAlign: "center" } },
                  "Ant Design ©2018 Created by Ant UED"
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = d;
    },
    307: function(e, t, a) {},
    309: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(39)),
        i = r(a(41)),
        s = r(a(57)),
        c = r(a(25)),
        u = i.default.SubMenu,
        p = o.default.Header,
        d = (o.default.Footer, o.default.Sider),
        f = o.default.Content,
        m = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  p,
                  { className: "header" },
                  l.default.createElement("div", { className: "logo" }),
                  l.default.createElement(
                    i.default,
                    {
                      theme: "dark",
                      mode: "horizontal",
                      defaultSelectedKeys: ["2"],
                      style: { lineHeight: "64px" }
                    },
                    l.default.createElement(
                      i.default.Item,
                      { key: "1" },
                      "nav 1"
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "2" },
                      "nav 2"
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "3" },
                      "nav 3"
                    )
                  )
                ),
                l.default.createElement(
                  o.default,
                  null,
                  l.default.createElement(
                    d,
                    { width: 200, style: { background: "#fff" } },
                    l.default.createElement(
                      i.default,
                      {
                        mode: "inline",
                        defaultSelectedKeys: ["1"],
                        defaultOpenKeys: ["sub1"],
                        style: { height: "100%", borderRight: 0 }
                      },
                      l.default.createElement(
                        u,
                        {
                          key: "sub1",
                          title: l.default.createElement(
                            "span",
                            null,
                            l.default.createElement(c.default, {
                              type: "user"
                            }),
                            "subnav 1"
                          )
                        },
                        l.default.createElement(
                          i.default.Item,
                          { key: "1" },
                          "option1"
                        ),
                        l.default.createElement(
                          i.default.Item,
                          { key: "2" },
                          "option2"
                        ),
                        l.default.createElement(
                          i.default.Item,
                          { key: "3" },
                          "option3"
                        ),
                        l.default.createElement(
                          i.default.Item,
                          { key: "4" },
                          "option4"
                        )
                      ),
                      l.default.createElement(
                        u,
                        {
                          key: "sub2",
                          title: l.default.createElement(
                            "span",
                            null,
                            l.default.createElement(c.default, {
                              type: "laptop"
                            }),
                            "subnav 2"
                          )
                        },
                        l.default.createElement(
                          i.default.Item,
                          { key: "5" },
                          "option5"
                        ),
                        l.default.createElement(
                          i.default.Item,
                          { key: "6" },
                          "option6"
                        ),
                        l.default.createElement(
                          i.default.Item,
                          { key: "7" },
                          "option7"
                        ),
                        l.default.createElement(
                          i.default.Item,
                          { key: "8" },
                          "option8"
                        )
                      ),
                      l.default.createElement(
                        u,
                        {
                          key: "sub3",
                          title: l.default.createElement(
                            "span",
                            null,
                            l.default.createElement(c.default, {
                              type: "notification"
                            }),
                            "subnav 3"
                          )
                        },
                        l.default.createElement(
                          i.default.Item,
                          { key: "9" },
                          "option9"
                        ),
                        l.default.createElement(
                          i.default.Item,
                          { key: "10" },
                          "option10"
                        ),
                        l.default.createElement(
                          i.default.Item,
                          { key: "11" },
                          "option11"
                        ),
                        l.default.createElement(
                          i.default.Item,
                          { key: "12" },
                          "option12"
                        )
                      )
                    )
                  ),
                  l.default.createElement(
                    o.default,
                    { style: { padding: "0 24px 24px" } },
                    l.default.createElement(
                      s.default,
                      { style: { margin: "16px 0" } },
                      l.default.createElement(s.default.Item, null, "Home"),
                      l.default.createElement(s.default.Item, null, "List"),
                      l.default.createElement(s.default.Item, null, "App")
                    ),
                    l.default.createElement(
                      f,
                      {
                        style: {
                          background: "#fff",
                          padding: 24,
                          margin: 0,
                          minHeight: 280
                        }
                      },
                      "Content"
                    )
                  )
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = m;
    },
    310: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(39)),
        i = r(a(41)),
        s = r(a(57)),
        c = r(a(25)),
        u = i.default.SubMenu,
        p = o.default.Header,
        d = o.default.Footer,
        f = o.default.Sider,
        m = o.default.Content,
        h = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  p,
                  { className: "header" },
                  l.default.createElement("div", { className: "logo" }),
                  l.default.createElement(
                    i.default,
                    {
                      theme: "dark",
                      mode: "horizontal",
                      defaultSelectedKeys: ["2"],
                      style: { lineHeight: "64px" }
                    },
                    l.default.createElement(
                      i.default.Item,
                      { key: "1" },
                      "nav 1"
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "2" },
                      "nav 2"
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "3" },
                      "nav 3"
                    )
                  )
                ),
                l.default.createElement(
                  m,
                  { style: { padding: "0 50px" } },
                  l.default.createElement(
                    s.default,
                    { style: { margin: "16px 0" } },
                    l.default.createElement(s.default.Item, null, "Home"),
                    l.default.createElement(s.default.Item, null, "List"),
                    l.default.createElement(s.default.Item, null, "App")
                  ),
                  l.default.createElement(
                    o.default,
                    { style: { padding: "24px 0", background: "#fff" } },
                    l.default.createElement(
                      f,
                      { width: 200, style: { background: "#fff" } },
                      l.default.createElement(
                        i.default,
                        {
                          mode: "inline",
                          defaultSelectedKeys: ["1"],
                          defaultOpenKeys: ["sub1"],
                          style: { height: "100%" }
                        },
                        l.default.createElement(
                          u,
                          {
                            key: "sub1",
                            title: l.default.createElement(
                              "span",
                              null,
                              l.default.createElement(c.default, {
                                type: "user"
                              }),
                              "subnav 1"
                            )
                          },
                          l.default.createElement(
                            i.default.Item,
                            { key: "1" },
                            "option1"
                          ),
                          l.default.createElement(
                            i.default.Item,
                            { key: "2" },
                            "option2"
                          ),
                          l.default.createElement(
                            i.default.Item,
                            { key: "3" },
                            "option3"
                          ),
                          l.default.createElement(
                            i.default.Item,
                            { key: "4" },
                            "option4"
                          )
                        ),
                        l.default.createElement(
                          u,
                          {
                            key: "sub2",
                            title: l.default.createElement(
                              "span",
                              null,
                              l.default.createElement(c.default, {
                                type: "laptop"
                              }),
                              "subnav 2"
                            )
                          },
                          l.default.createElement(
                            i.default.Item,
                            { key: "5" },
                            "option5"
                          ),
                          l.default.createElement(
                            i.default.Item,
                            { key: "6" },
                            "option6"
                          ),
                          l.default.createElement(
                            i.default.Item,
                            { key: "7" },
                            "option7"
                          ),
                          l.default.createElement(
                            i.default.Item,
                            { key: "8" },
                            "option8"
                          )
                        ),
                        l.default.createElement(
                          u,
                          {
                            key: "sub3",
                            title: l.default.createElement(
                              "span",
                              null,
                              l.default.createElement(c.default, {
                                type: "notification"
                              }),
                              "subnav 3"
                            )
                          },
                          l.default.createElement(
                            i.default.Item,
                            { key: "9" },
                            "option9"
                          ),
                          l.default.createElement(
                            i.default.Item,
                            { key: "10" },
                            "option10"
                          ),
                          l.default.createElement(
                            i.default.Item,
                            { key: "11" },
                            "option11"
                          ),
                          l.default.createElement(
                            i.default.Item,
                            { key: "12" },
                            "option12"
                          )
                        )
                      )
                    ),
                    l.default.createElement(
                      m,
                      { style: { padding: "0 24px", minHeight: 280 } },
                      "Content"
                    )
                  )
                ),
                l.default.createElement(
                  d,
                  { style: { textAlign: "center" } },
                  "Ant Design ©2018 Created by Ant UED"
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = h;
    },
    311: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(39)),
        i = r(a(41)),
        s = r(a(57)),
        c = r(a(25)),
        u = i.default.SubMenu,
        p = o.default.Header,
        d = o.default.Footer,
        f = o.default.Sider,
        m = o.default.Content,
        h = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.onCollapse = function(e) {
                console.log(e), a.setState({ collapsed: e });
              }),
              (a.state = { collapsed: !1 }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                o.default,
                { style: { minHeight: "100vh" } },
                l.default.createElement(
                  f,
                  {
                    collapsible: !0,
                    collapsed: this.state.collapsed,
                    onCollapse: this.onCollapse
                  },
                  l.default.createElement("div", { className: "logo" }),
                  l.default.createElement(
                    i.default,
                    {
                      theme: "dark",
                      defaultSelectedKeys: ["1"],
                      mode: "inline"
                    },
                    l.default.createElement(
                      i.default.Item,
                      { key: "1" },
                      l.default.createElement(c.default, { type: "pie-chart" }),
                      l.default.createElement("span", null, "Option 1")
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "2" },
                      l.default.createElement(c.default, { type: "desktop" }),
                      l.default.createElement("span", null, "Option 2")
                    ),
                    l.default.createElement(
                      u,
                      {
                        key: "sub1",
                        title: l.default.createElement(
                          "span",
                          null,
                          l.default.createElement(c.default, { type: "user" }),
                          l.default.createElement("span", null, "User")
                        )
                      },
                      l.default.createElement(
                        i.default.Item,
                        { key: "3" },
                        "Tom"
                      ),
                      l.default.createElement(
                        i.default.Item,
                        { key: "4" },
                        "Bill"
                      ),
                      l.default.createElement(
                        i.default.Item,
                        { key: "5" },
                        "Alex"
                      )
                    ),
                    l.default.createElement(
                      u,
                      {
                        key: "sub2",
                        title: l.default.createElement(
                          "span",
                          null,
                          l.default.createElement(c.default, { type: "team" }),
                          l.default.createElement("span", null, "Team")
                        )
                      },
                      l.default.createElement(
                        i.default.Item,
                        { key: "6" },
                        "Team 1"
                      ),
                      l.default.createElement(
                        i.default.Item,
                        { key: "8" },
                        "Team 2"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "9" },
                      l.default.createElement(c.default, { type: "file" }),
                      l.default.createElement("span", null, "File")
                    )
                  )
                ),
                l.default.createElement(
                  o.default,
                  null,
                  l.default.createElement(p, {
                    style: { background: "#fff", padding: 0 }
                  }),
                  l.default.createElement(
                    m,
                    { style: { margin: "0 16px" } },
                    l.default.createElement(
                      s.default,
                      { style: { margin: "16px 0" } },
                      l.default.createElement(s.default.Item, null, "User"),
                      l.default.createElement(s.default.Item, null, "Bill")
                    ),
                    l.default.createElement(
                      "div",
                      {
                        style: {
                          padding: 24,
                          background: "#fff",
                          minHeight: 360
                        }
                      },
                      "Bill is a cat."
                    )
                  ),
                  l.default.createElement(
                    d,
                    { style: { textAlign: "center" } },
                    "Ant Design ©2018 Created by Ant UED"
                  )
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = h;
    },
    312: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(39)),
        i = r(a(41)),
        s = r(a(25)),
        c = (i.default.SubMenu, o.default.Header),
        u = (o.default.Footer, o.default.Sider),
        p = o.default.Content,
        d = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.toggle = function() {
                a.setState({ collapsed: !a.state.collapsed });
              }),
              (a.state = { collapsed: !1 }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  u,
                  {
                    trigger: null,
                    collapsible: !0,
                    collapsed: this.state.collapsed
                  },
                  l.default.createElement("div", { className: "logo" }),
                  l.default.createElement(
                    i.default,
                    {
                      theme: "dark",
                      mode: "inline",
                      defaultSelectedKeys: ["1"]
                    },
                    l.default.createElement(
                      i.default.Item,
                      { key: "1" },
                      l.default.createElement(s.default, { type: "user" }),
                      l.default.createElement("span", null, "nav 1")
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "2" },
                      l.default.createElement(s.default, {
                        type: "video-camera"
                      }),
                      l.default.createElement("span", null, "nav 2")
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "3" },
                      l.default.createElement(s.default, { type: "upload" }),
                      l.default.createElement("span", null, "nav 3")
                    )
                  )
                ),
                l.default.createElement(
                  o.default,
                  null,
                  l.default.createElement(
                    c,
                    { style: { background: "#fff", padding: 0 } },
                    l.default.createElement(s.default, {
                      className: "trigger",
                      type: this.state.collapsed ? "menu-unfold" : "menu-fold",
                      onClick: this.toggle
                    })
                  ),
                  l.default.createElement(
                    p,
                    {
                      style: {
                        margin: "24px 16px",
                        padding: 24,
                        background: "#fff",
                        minHeight: 280
                      }
                    },
                    "Content"
                  )
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = d;
    },
    313: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(39)),
        i = r(a(41)),
        s = r(a(25)),
        c = o.default.Header,
        u = o.default.Footer,
        p = o.default.Sider,
        d = o.default.Content,
        f = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  p,
                  {
                    breakpoint: "lg",
                    collapsedWidth: "0",
                    onBreakpoint: function(e) {
                      console.log(e);
                    },
                    onCollapse: function(e, t) {
                      console.log(e, t);
                    }
                  },
                  l.default.createElement("div", { className: "logo" }),
                  l.default.createElement(
                    i.default,
                    {
                      theme: "dark",
                      mode: "inline",
                      defaultSelectedKeys: ["4"]
                    },
                    l.default.createElement(
                      i.default.Item,
                      { key: "1" },
                      l.default.createElement(s.default, { type: "user" }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 1"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "2" },
                      l.default.createElement(s.default, {
                        type: "video-camera"
                      }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 2"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "3" },
                      l.default.createElement(s.default, { type: "upload" }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 3"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "4" },
                      l.default.createElement(s.default, { type: "user" }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 4"
                      )
                    )
                  )
                ),
                l.default.createElement(
                  o.default,
                  null,
                  l.default.createElement(c, {
                    style: { background: "#fff", padding: 0 }
                  }),
                  l.default.createElement(
                    d,
                    { style: { margin: "24px 16px 0" } },
                    l.default.createElement(
                      "div",
                      {
                        style: {
                          padding: 24,
                          background: "#fff",
                          minHeight: 360
                        }
                      },
                      "content"
                    )
                  ),
                  l.default.createElement(
                    u,
                    { style: { textAlign: "center" } },
                    "Ant Design ©2018 Created by Ant UED"
                  )
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = f;
    },
    314: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(39)),
        i = r(a(41)),
        s = r(a(57)),
        c = o.default.Header,
        u = o.default.Footer,
        p = o.default.Content,
        d = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  c,
                  { style: { position: "fixed", zIndex: 1, width: "100%" } },
                  l.default.createElement("div", { className: "logo" }),
                  l.default.createElement(
                    i.default,
                    {
                      theme: "dark",
                      mode: "horizontal",
                      defaultSelectedKeys: ["2"],
                      style: { lineHeight: "64px" }
                    },
                    l.default.createElement(
                      i.default.Item,
                      { key: "1" },
                      "nav 1"
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "2" },
                      "nav 2"
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "3" },
                      "nav 3"
                    )
                  )
                ),
                l.default.createElement(
                  p,
                  { style: { padding: "0 50px", marginTop: 64 } },
                  l.default.createElement(
                    s.default,
                    { style: { margin: "16px 0" } },
                    l.default.createElement(s.default.Item, null, "Home"),
                    l.default.createElement(s.default.Item, null, "List"),
                    l.default.createElement(s.default.Item, null, "App")
                  ),
                  l.default.createElement(
                    "div",
                    {
                      style: { background: "#fff", padding: 24, minHeight: 380 }
                    },
                    "Content"
                  )
                ),
                l.default.createElement(
                  u,
                  { style: { textAlign: "center" } },
                  "Ant Design ©2018 Created by Ant UED"
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = d;
    },
    315: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(39)),
        i = r(a(41)),
        s = r(a(25)),
        c = o.default.Sider,
        u = o.default.Header,
        p = o.default.Footer,
        d = o.default.Content,
        f = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                o.default,
                null,
                l.default.createElement(
                  c,
                  {
                    style: {
                      overflow: "auto",
                      height: "100vh",
                      position: "fixed",
                      left: 0
                    }
                  },
                  l.default.createElement("div", { className: "logo" }),
                  l.default.createElement(
                    i.default,
                    {
                      theme: "dark",
                      mode: "inline",
                      defaultSelectedKeys: ["4"]
                    },
                    l.default.createElement(
                      i.default.Item,
                      { key: "1" },
                      l.default.createElement(s.default, { type: "user" }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 1"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "2" },
                      l.default.createElement(s.default, {
                        type: "video-camera"
                      }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 2"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "3" },
                      l.default.createElement(s.default, { type: "upload" }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 3"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "4" },
                      l.default.createElement(s.default, { type: "bar-chart" }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 4"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "5" },
                      l.default.createElement(s.default, { type: "cloud-o" }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 5"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "6" },
                      l.default.createElement(s.default, {
                        type: "appstore-o"
                      }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 6"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "7" },
                      l.default.createElement(s.default, { type: "team" }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 7"
                      )
                    ),
                    l.default.createElement(
                      i.default.Item,
                      { key: "8" },
                      l.default.createElement(s.default, { type: "shop" }),
                      l.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 8"
                      )
                    )
                  )
                ),
                l.default.createElement(
                  o.default,
                  { style: { marginLeft: 200 } },
                  l.default.createElement(u, {
                    style: { background: "#fff", padding: 0 }
                  }),
                  l.default.createElement(
                    d,
                    { style: { margin: "24px 16px 0", overflow: "initial" } },
                    l.default.createElement(
                      "div",
                      {
                        style: {
                          padding: 24,
                          background: "#fff",
                          textAlign: "center"
                        }
                      },
                      "...",
                      l.default.createElement("br", null),
                      "Really",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "long",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "...",
                      l.default.createElement("br", null),
                      "content"
                    )
                  ),
                  l.default.createElement(
                    p,
                    { style: { textAlign: "center" } },
                    "Ant Design ©2018 Created by Ant UED"
                  )
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = f;
    },
    316: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = r(a(32)),
        i = r(a(31)),
        s = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              for (var e = [], t = 0; t < this.props.cstyle.length; t++)
                e.push(
                  l.default.createElement(o.default, {
                    style: this.props.cstyle[t],
                    span: this.props.cstyle[t].span
                  })
                );
              return l.default.createElement(
                "div",
                null,
                l.default.createElement(i.default, null, e)
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = s;
    },
    317: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3).Typography.Text,
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement(
                "div",
                { style: this.props.containerStyle },
                l.default.createElement(
                  o,
                  { type: "secondary", style: this.props.headerStyle },
                  this.props.header
                ),
                l.default.createElement(
                  o,
                  { style: this.props.textStyle },
                  this.props.text
                )
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = i;
    },
    318: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3),
        i = a(30),
        s = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (a.state = { data: t.data }), a;
          }
          return (
            n(t, e),
            (t.prototype.renderImage = function(e) {
              return e.image
                ? l.default.createElement(
                    o.Col,
                    { span: this.props.imageSpan },
                    l.default.createElement(i.Image, {
                      scaleType: this.props.imageScaleType,
                      height: this.props.imageHeight,
                      width: this.props.imageWidth,
                      source: e.image,
                      alternate_text: "image-placeholder",
                      style: this.props.imageStyle
                    })
                  )
                : l.default.createElement(
                    o.Col,
                    { span: this.props.imageSpan },
                    l.default.createElement(i.Image, {
                      scaleType: this.props.imageScaleType,
                      height: this.props.imageHeight,
                      width: this.props.imageWidth,
                      source: a(319),
                      alternate_text: "image-placeholder",
                      style: this.props.imageStyle
                    })
                  );
            }),
            (t.prototype.renderContent = function(e) {
              return l.default.createElement(
                o.Col,
                {
                  span: this.props.contentSpan,
                  style: this.props.contentStyle
                },
                l.default.createElement(
                  o.Row,
                  null,
                  e.title ? e.title : "Title"
                ),
                l.default.createElement(
                  o.Row,
                  null,
                  e.subTitle ? e.subTitle : "SubTitle"
                )
              );
            }),
            (t.prototype.renderAction = function(e) {
              return e.actionable
                ? l.default.createElement(
                    o.Col,
                    {
                      span: this.props.actionSpan,
                      style: this.props.actionStyle
                    },
                    l.default.createElement(
                      i.CustomButton,
                      {
                        type: this.props.actionableButtonType,
                        disabled: !1,
                        style: {},
                        onClick: function() {
                          return console.log("actionable button clicked");
                        }
                      },
                      this.props.actionableButtonText
                    )
                  )
                : l.default.createElement(
                    o.Col,
                    {
                      span: this.props.actionSpan,
                      style: this.props.actionStyle
                    },
                    l.default.createElement(
                      o.Row,
                      null,
                      e.actionableTitle ? e.actionableTitle : "actionableTitle"
                    ),
                    l.default.createElement(
                      o.Row,
                      null,
                      e.actionableSubTitle
                        ? e.actionableSubTitle
                        : "actionableSubTitle"
                    )
                  );
            }),
            (t.prototype.render = function() {
              var e = this;
              return l.default.createElement(o.List, {
                itemLayout: "horizontal",
                dataSource: this.state.data,
                renderItem: function(t) {
                  return l.default.createElement(
                    o.List.Item,
                    null,
                    e.renderImage(t),
                    e.renderContent(t),
                    e.renderAction(t)
                  );
                }
              });
            }),
            t
          );
        })(l.default.Component);
      t.default = s;
    },
    319: function(e, t, a) {
      e.exports = a.p + "walkin.5173b2b3.png";
    },
    320: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement("img", {
                src: this.props.source,
                height: this.props.height,
                width: this.props.width,
                style: { objectFit: this.props.scaleType },
                alt: this.props.alternate_text
              });
            }),
            t
          );
        })(l.default.Component);
      t.default = o;
    },
    321: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return l.default.createElement("div", null, this.props.children);
            }),
            t
          );
        })(l.default.Component);
      t.default = o;
    },
    322: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0));
      a(323);
      var o = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.title,
              a = e.styleName,
              n = e.extra;
            return l.createElement(
              "div",
              { className: "wHeaderStyle " + a, style: { width: "100%" } },
              l.createElement(
                "span",
                {
                  style: {
                    verticalAlign: "middle",
                    float: "left",
                    lineHeight: 2
                  },
                  className: "w-title"
                },
                t
              ),
              l.createElement(
                "div",
                {
                  style: {
                    float: "right",
                    flexFlow: "right",
                    verticalAlign: "middle",
                    lineHeight: 2
                  }
                },
                "  ",
                n,
                " "
              )
            );
          }),
          t
        );
      })(l.Component);
      t.default = o;
    },
    323: function(e, t, a) {},
    325: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__rest) ||
          function(e, t) {
            var a = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (a[n] = e[n]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
                t.indexOf(n[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                  (a[n[r]] = e[n[r]]);
            }
            return a;
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = o(a(0)),
        s = a(3),
        c = i.createContext({}),
        u = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.getInput = function() {
                return "number" === t.props.inputType
                  ? i.createElement(s.InputNumber, null)
                  : i.createElement(s.Input, null);
              }),
              (t.renderCell = function(e) {
                var a = e.getFieldDecorator,
                  n = t.props,
                  o = n.editing,
                  c = n.dataIndex,
                  u = n.title,
                  p = (n.inputType, n.record),
                  d = (n.index, n.children),
                  f = l(n, [
                    "editing",
                    "dataIndex",
                    "title",
                    "inputType",
                    "record",
                    "index",
                    "children"
                  ]);
                return (
                  console.log(t.props),
                  i.createElement(
                    "td",
                    r({}, f),
                    o
                      ? i.createElement(
                          s.Form.Item,
                          { style: { margin: 0 } },
                          a(c, {
                            rules: [
                              {
                                required: !0,
                                message: "Please Input " + u + "!"
                              }
                            ],
                            initialValue: p[c]
                          })(t.getInput())
                        )
                      : d
                  )
                );
              }),
              t
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return i.createElement(c.Consumer, null, this.renderCell);
            }),
            t
          );
        })(i.Component),
        p = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.isEditing = function(e) {
                return e.key === a.state.editingKey;
              }),
              (a.cancel = function() {
                a.setState({ editingKey: "" });
              }),
              (a.columns = function() {
                return a.props.tableHeaders.concat([
                  {
                    title: "OPERATION",
                    dataIndex: "operation",
                    render: function(e, t) {
                      var n = a.state.editingKey;
                      return a.isEditing(t)
                        ? i.createElement(
                            "span",
                            null,
                            i.createElement(c.Consumer, null, function(e) {
                              return i.createElement(
                                "a",
                                {
                                  onClick: function() {
                                    return a.save(e, t.key);
                                  },
                                  style: { marginRight: 8 }
                                },
                                "Save"
                              );
                            }),
                            i.createElement(
                              s.Popconfirm,
                              {
                                title: "Sure to cancel?",
                                onConfirm: function() {
                                  return a.cancel();
                                }
                              },
                              i.createElement("a", null, "Cancel")
                            )
                          )
                        : i.createElement(
                            "a",
                            {
                              className: "" !== n ? "avoid-click" : null,
                              onClick: function() {
                                return a.edit(t.key);
                              }
                            },
                            "Edit"
                          );
                    }
                  }
                ]);
              }),
              (a.state = { data: [], editingKey: "", loading: !0 }),
              a
            );
          }
          return (
            n(t, e),
            (t.getDerivedStateFromProps = function(e, t) {
              return e.loading !== t.loading
                ? { data: e.tableData, loading: e.loading }
                : null;
            }),
            (t.prototype.save = function(e, t) {
              var a = this;
              e.validateFields(function(e, n) {
                if (!e) {
                  var l = a.state.data.slice(),
                    o = l.findIndex(function(e) {
                      return t === e.key;
                    });
                  if (o > -1) {
                    var i = l[o];
                    l.splice(o, 1, r({}, i, n)),
                      a.props.onChangeData(r({}, i, n), o),
                      a.setState({ data: l, editingKey: "" });
                  } else l.push(n), a.setState({ data: l, editingKey: "" });
                }
              });
            }),
            (t.prototype.edit = function(e) {
              this.setState({ editingKey: e });
            }),
            (t.prototype.render = function() {
              var e = this,
                t = { body: { cell: u } },
                a = this.columns().map(function(t) {
                  return t.editable
                    ? r({}, t, {
                        onCell: function(a) {
                          return {
                            record: a,
                            inputType: "text" === t.dataIndex,
                            dataIndex: t.dataIndex,
                            title: t.title,
                            editing: e.isEditing(a)
                          };
                        }
                      })
                    : t;
                });
              return i.createElement(
                c.Provider,
                { value: this.props.form },
                i.createElement(s.Table, {
                  loading: this.state.loading,
                  components: t,
                  bordered: !0,
                  dataSource: this.state.data,
                  columns: a,
                  pagination: { onChange: this.cancel }
                })
              );
            }),
            t
          );
        })(i.Component),
        d = s.Form.create()(p);
      t.default = d;
    },
    326: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = l(a(0)),
        i = a(3);
      a(327);
      var s = (function(e) {
        function t(t) {
          var a = e.call(this, t) || this;
          return (a.state = {}), a;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.visible,
              a = e.handleOk,
              n = e.handleCancel,
              l = e.fileList,
              s = e.uploadProps,
              c = e.title;
            return o.createElement(
              "div",
              null,
              o.createElement(
                i.Modal,
                {
                  width: "500px",
                  key: "model",
                  visible: t,
                  okText: "Submit",
                  title: c,
                  onOk: a,
                  onCancel: n
                },
                o.createElement(
                  i.Upload,
                  r({}, s, { fileList: l }),
                  o.createElement(
                    i.Button,
                    null,
                    o.createElement(i.Icon, { type: "upload" }),
                    " Upload"
                  )
                )
              )
            );
          }),
          t
        );
      })(o.Component);
      t.default = s;
    },
    327: function(e, t, a) {},
    329: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = l(a(0)),
        s = a(0),
        c = a(3);
      c.Input.TextArea;
      a(330);
      var u = o(a(5)),
        p = c.Select.Option,
        d = (c.DatePicker.RangePicker, o(a(332))),
        f = c.Form.create({ name: "offer_basic_info" })(
          (function(e) {
            function t(t) {
              var a = e.call(this, t) || this;
              return (
                (a.state = {
                  values: [{ product: "", productItem: "" }],
                  productDropDown: {
                    showProductList: !0,
                    showCategoryList: !1,
                    showBrandList: !1
                  }
                }),
                a
              );
            }
            return (
              n(t, e),
              (t.prototype.addClick = function() {
                var e = this.state.values;
                e.push({ id: e.length + 1, product: "", productItem: "" }),
                  this.setState({ values: e });
              }),
              (t.prototype.handleProductChange = function(e, t) {
                var a = this.state.values.slice();
                (a[e].product = t),
                  this.setState({ values: a }),
                  "sku" === t &&
                    this.setState(
                      Object.assign(this.state.productDropDown, {
                        showProductList: !0,
                        showCategoryList: !1,
                        showBrandList: !1
                      })
                    ),
                  "category" === t &&
                    this.setState(
                      Object.assign(this.state.productDropDown, {
                        showProductList: !1,
                        showCategoryList: !0,
                        showBrandList: !1
                      })
                    ),
                  "brand" === t &&
                    this.setState(
                      Object.assign(this.state.productDropDown, {
                        showProductList: !1,
                        showCategoryList: !1,
                        showBrandList: !0
                      })
                    );
              }),
              (t.prototype.handleProductItemChange = function(e, t) {
                var a = this.state.values.slice();
                (a[e].productItem = t), this.setState({ values: a });
              }),
              (t.prototype.removeClick = function(e, t) {
                var a = this.state.values.slice();
                a.splice(e, 1), this.setState({ values: a });
              }),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.offerTypeData,
                  a = e.handleOfferTypeChange,
                  n = e.offerTypeStatus,
                  l = e.transactionTimeData,
                  o = e.locationData,
                  f = e.productData,
                  m = e.handleTransactionTimeChange,
                  h = e.transactionTimeStatus,
                  g = e.cartValueConditionData,
                  y = e.wrappedComponentRef,
                  _ = e.form,
                  E = e.products,
                  v = (e.handleLocationChange, e.locationArray),
                  b = e.productItems,
                  C = e.onSelectOneValuesSelected,
                  P = e.onSelectTwoValuesSelected,
                  O = e.formValues,
                  S = e.locationValues,
                  w = e.productValues,
                  x = (e.couponDefaultValue, e.onCouponChange),
                  A = e.couponTypeSelected,
                  k = e.couponInputLabel,
                  N = e.onCouponLabelChange,
                  I = e.checked,
                  R = e.OnNoCouponCodeChange,
                  D = e.couponTypeData,
                  T = (this.state.productDropDown, _.getFieldDecorator);
                return i.createElement(
                  c.Form,
                  r(
                    { className: "offerBasicForm" },
                    {
                      labelCol: { xs: { span: 24 }, sm: { span: 24 } },
                      wrapperCol: { xs: { span: 24 }, sm: { span: 24 } }
                    },
                    {
                      style: { padding: "20px 50px" },
                      ref: y,
                      layout: "vertical"
                    }
                  ),
                  i.createElement(
                    c.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Offer Type"
                    },
                    T("offerType", {
                      initialValue:
                        "" + (0 != Object.keys(O).length ? O.offerType : ""),
                      rules: [
                        { required: !0, message: "Please input offer type!" }
                      ]
                    })(
                      i.createElement(
                        c.Select,
                        {
                          placeholder: "Select an offer type",
                          onChange: a,
                          getPopupContainer: function(e) {
                            return e.parentNode;
                          }
                        },
                        t &&
                          t.map(function(e, t) {
                            return i.createElement(
                              p,
                              { key: t, value: e.value },
                              " ",
                              e.title,
                              " "
                            );
                          })
                      )
                    )
                  ),
                  n.showList
                    ? i.createElement(
                        c.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(65% - 12px)"
                          },
                          label: "Value"
                        },
                        T("offerTypeValue", {
                          initialValue:
                            "" +
                            (0 != Object.keys(O).length
                              ? O.offerTypeValue
                              : "All")
                        })(
                          i.createElement(
                            c.Select,
                            {
                              showSearch: !0,
                              mode: "multiple",
                              style: { width: "100%" },
                              allowClear: !0,
                              placeholder: "Please select",
                              getPopupContainer: function(e) {
                                return e.parentNode;
                              },
                              optionFilterProp: "children",
                              filterOption: function(e, t) {
                                return (
                                  t.props.children
                                    .toString()
                                    .toLowerCase()
                                    .indexOf(e.toLowerCase()) >= 0
                                );
                              }
                            },
                            E &&
                              E.map(function(e, t) {
                                return i.createElement(
                                  p,
                                  { key: t, value: e.code },
                                  " ",
                                  e.name
                                );
                              })
                          )
                        )
                      )
                    : i.createElement(
                        c.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(20% - 12px)"
                          },
                          label: "Value"
                        },
                        T("offerTypeValue", {
                          initialValue:
                            "" +
                            (0 != Object.keys(O).length
                              ? O.offerTypeValue
                              : ""),
                          rules: [
                            {
                              required: !0,
                              message: "Please input offer Value"
                            }
                          ]
                        })(
                          i.createElement(c.Input, {
                            type: "number",
                            addonBefore: !0 === n.showRupee ? "Rs." : "",
                            addonAfter:
                              !0 === n.showPercent
                                ? i.createElement(c.Icon, {
                                    type: "percentage"
                                  })
                                : "",
                            max: n.showPercent ? 100 : 1 / 0,
                            min: 0
                          })
                        )
                      ),
                  i.createElement(
                    c.Form.Item,
                    {
                      style: { width: "calc(100% - 22px)" },
                      label: "Offer Name"
                    },
                    T("offerName", {
                      initialValue:
                        "" + (0 != Object.keys(O).length ? O.offerName : ""),
                      rules: [
                        {
                          transform: function(e) {
                            return e.trim();
                          }
                        },
                        { required: !0, message: "Please input offer name!" }
                      ]
                    })(i.createElement(c.Input, null))
                  ),
                  i.createElement(
                    c.Form.Item,
                    { label: "Product" },
                    i.createElement(d.default, {
                      onSelectOneValuesSelected: function(e, t) {
                        C(e, "product", t);
                      },
                      onSelectTwoValuesSelected: function(e) {
                        P(e, "productValues");
                      },
                      data_1: f,
                      data_2: b,
                      form: this.props.form,
                      productValues: w,
                      defaultSelectOneValue: "product_category",
                      defaultSelectTwoValue: ["all"]
                    })
                  ),
                  i.createElement(
                    c.Form.Item,
                    { label: "Location" },
                    i.createElement(d.default, {
                      onSelectOneValuesSelected: function(e, t) {
                        C(e, "location", t);
                      },
                      onSelectTwoValuesSelected: function(e) {
                        P(e, "locationValues");
                      },
                      data_1: o,
                      data_2: v,
                      locationValues: S,
                      defaultSelectOneValue: "location_store",
                      defaultSelectTwoValue: ["all"]
                    })
                  ),
                  i.createElement(
                    c.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Condition"
                    },
                    T("transactionTime", {
                      initialValue:
                        "" +
                        (0 != Object.keys(O).length ? O.transactionTime : "")
                    })(
                      i.createElement(
                        c.Select,
                        {
                          getPopupContainer: function(e) {
                            return e.parentNode;
                          },
                          placeholder: "Select a transaction time",
                          onChange: m
                        },
                        l &&
                          l.map(function(e, t) {
                            return i.createElement(
                              p,
                              { key: t, value: e.value },
                              " ",
                              e.title,
                              " "
                            );
                          })
                      )
                    )
                  ),
                  h &&
                    !0 === h.showFrequency &&
                    i.createElement(
                      s.Fragment,
                      null,
                      i.createElement(
                        c.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(31% - 12px)"
                          },
                          label: "No. Of Transaction"
                        },
                        T("noOfTransaction", {
                          initialValue:
                            "" +
                            (0 != Object.keys(O).length
                              ? O.noOfTransaction
                              : "")
                        })(i.createElement(c.Input, { type: "number", min: 0 }))
                      ),
                      i.createElement(
                        c.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            marginTop: "20px",
                            width: "calc(5% - 12px)"
                          }
                        },
                        i.createElement(
                          "div",
                          { style: { marginTop: 12 } },
                          "In"
                        )
                      ),
                      i.createElement(
                        c.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(31% - 12px)"
                          },
                          label: "No. Of Days"
                        },
                        T("noOfDays", {
                          initialValue:
                            "" + (0 != Object.keys(O).length ? O.noOfDays : "")
                        })(i.createElement(c.Input, { type: "number", min: 0 }))
                      )
                    ),
                  h &&
                    !0 === h.showDayPart &&
                    i.createElement(
                      s.Fragment,
                      null,
                      i.createElement(
                        c.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(33% - 12px)"
                          },
                          label: "Start Time"
                        },
                        T("startTime", {
                          initialValue: u.default(O.startTime)
                        })(
                          i.createElement(c.TimePicker, {
                            style: { width: "100%" },
                            use12Hours: !0,
                            format: "h:mm:ss a"
                          })
                        )
                      ),
                      i.createElement(
                        c.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(33% - 12px)"
                          },
                          label: "End Time"
                        },
                        T("endTime", { initialValue: u.default(O.endTime) })(
                          i.createElement(c.TimePicker, {
                            style: { width: "100%" },
                            use12Hours: !0,
                            format: "h:mm:ss a"
                          })
                        )
                      )
                    ),
                  h &&
                    !0 === h.showCartValue &&
                    i.createElement(
                      s.Fragment,
                      null,
                      i.createElement(
                        c.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(33.5% - 12px)"
                          },
                          label: "Operator"
                        },
                        T("cartValueCondition", {
                          initialValue:
                            "" +
                            (0 != Object.keys(O).length && O.cartValueCondition
                              ? O.cartValueCondition
                              : "")
                        })(
                          i.createElement(
                            c.Select,
                            {
                              getPopupContainer: function(e) {
                                return e.parentNode;
                              }
                            },
                            g &&
                              g.map(function(e, t) {
                                return i.createElement(
                                  p,
                                  { key: t, value: e.value },
                                  " ",
                                  e.title,
                                  " "
                                );
                              })
                          )
                        )
                      ),
                      i.createElement(
                        c.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(33.5% - 12px)"
                          },
                          label: "Value"
                        },
                        T("cartValue", {
                          initialValue:
                            "" +
                            (0 != Object.keys(O).length && O.cartValue
                              ? O.cartValue
                              : "")
                        })(i.createElement(c.Input, { type: "number", min: 0 }))
                      )
                    ),
                  i.createElement(
                    c.Form.Item,
                    { style: { width: "calc(35% - 12px)" }, label: "Coupon" },
                    T("couponType", {
                      initialValue:
                        "" + (0 != Object.keys(O).length ? O.couponType : ""),
                      rules: [
                        { required: !0, message: "Please input coupon type!" }
                      ]
                    })(
                      i.createElement(
                        c.Radio.Group,
                        { onChange: x },
                        D &&
                          D.map(function(e, t) {
                            return i.createElement(
                              c.Radio,
                              { key: t, value: e.value },
                              " ",
                              e.title,
                              " "
                            );
                          })
                      )
                    )
                  ),
                  1 == A &&
                    i.createElement(
                      c.Form.Item,
                      {
                        style: {
                          marginLeft: "15px",
                          width: "calc(65% - 12px)"
                        },
                        label: "Enter Coupon Label"
                      },
                      T("couponLabel", {
                        initialValue:
                          "" +
                          (0 != Object.keys(O).length ? O.couponLabel : ""),
                        rules: [
                          {
                            required: !0,
                            message: "Please input coupon label!"
                          }
                        ]
                      })(
                        i.createElement(c.Input, {
                          placeholder: k,
                          onChange: N
                        })
                      )
                    ),
                  2 == A &&
                    i.createElement(
                      c.Form.Item,
                      {
                        style: { marginLeft: "15px", width: "calc(65% - 12px)" }
                      },
                      i.createElement(
                        c.Checkbox,
                        { checked: I, onChange: R },
                        "Auto apply coupon code"
                      )
                    )
                );
              }),
              t
            );
          })(i.Component)
        );
      t.default = f;
    },
    330: function(e, t, a) {},
    332: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = a(3),
        s = l(a(353)),
        c = l(a(99)),
        u = o(a(0)),
        p = i.Select.Option;
      var d = (function(e) {
        function t(t) {
          var a = e.call(this, t) || this,
            n = a.props,
            r = n.data_1,
            l = n.data_2,
            o = n.defaultSelectOneValue,
            i = n.defaultSelectTwoValue,
            s = a.getDefaultSelectedValue(r, o),
            c = a.getDefaultSelectedValue(l, i);
          return (
            (a.state = {
              selectTwoData: [],
              items: [
                {
                  valueOne: s,
                  valueTwo: c ? c.slice() : [],
                  onOneChange: a.handleSelectOneChange.bind(a, 0),
                  onTwoChange: a.handleSelectTwoChange.bind(a, 0)
                }
              ]
            }),
            a
          );
        }
        return (
          n(t, e),
          (t.prototype.addClick = function() {
            var e = this.props,
              t = e.data_1,
              a =
                (e.data_2,
                e.defaultSelectTwoValue,
                e.defaultSelectOneValue,
                this.state.items);
            (!a.length || "" != a[a.length - 1].valueOne) &&
              a.length != t.length &&
              this.setState({
                items: this.state.items.concat([
                  {
                    valueOne: "",
                    valueTwo: [],
                    onOneChange: this.handleSelectOneChange.bind(
                      this,
                      a.length
                    ),
                    onTwoChange: this.handleSelectTwoChange.bind(this, a.length)
                  }
                ])
              });
          }),
          (t.prototype.removeClick = function(e) {
            this.setState(function(t) {
              return {
                items: t.items.slice(0, e).concat(t.items.slice(e + 1))
              };
            });
          }),
          (t.prototype.componentDidMount = function() {
            this.props.data_2 &&
              this.setState({ selectTwoData: this.props.data_2 });
          }),
          (t.prototype.handleSelectOneChange = function(e, t) {
            console.log(e, t);
            var a = this.state.items;
            a.find(function(e) {
              return e.valueOne == t;
            }) ||
              ((a[e].valueOne = t),
              (a[e].valueTwo = []),
              this.setState({ items: a }),
              this.props.onSelectOneValuesSelected(t, this.state.items));
          }),
          (t.prototype.handleSelectTwoChange = function(e, t) {
            var a = this;
            this.setState(
              function(a) {
                return r({}, a, {
                  items: a.items
                    .slice(0, e)
                    .concat(
                      [r({}, a.items[e], { valueTwo: t })],
                      a.items.slice(e + 1)
                    )
                });
              },
              function() {
                a.props.onSelectTwoValuesSelected(a.state.items);
              }
            );
          }),
          (t.prototype.getDefaultSelectedValue = function(e, t) {
            var a = s.default(e, function(e) {
              return e.value === t;
            });
            return -1 !== a ? e && e[a].value : null;
          }),
          (t.prototype.render = function() {
            var e = this,
              t = this.props,
              a = t.data_1,
              n = t.data_2,
              r = (t.productValues, t.locationValues, this.state.items);
            return u.default.createElement(
              u.Fragment,
              null,
              u.default.createElement(
                "div",
                { style: { marginTop: -7 } },
                c.default(r, function(t, r) {
                  var l = t.valueOne,
                    o = t.valueTwo,
                    s = t.onOneChange,
                    c = t.onTwoChange;
                  return u.default.createElement(
                    "div",
                    {
                      key: "select-" + r,
                      className: "selectSegmentBoxContainer"
                    },
                    u.default.createElement(
                      i.Select,
                      {
                        value: l || "",
                        onChange: s,
                        getPopupContainer: function(e) {
                          return e.parentNode;
                        },
                        style: {
                          display: "inline-block",
                          width: "calc(35% - 12px)",
                          marginBottom: "0px",
                          paddingRight: 20
                        }
                      },
                      a &&
                        a.map(function(e, t) {
                          return u.default.createElement(
                            p,
                            { key: t, value: e.value },
                            "  ",
                            e.title,
                            " "
                          );
                        })
                    ),
                    u.default.createElement(
                      i.Select,
                      {
                        showSearch: !0,
                        mode: "multiple",
                        value: o || "",
                        onChange: c,
                        getPopupContainer: function(e) {
                          return e.parentNode;
                        },
                        optionFilterProp: "children",
                        filterOption: function(e, t) {
                          return (
                            t.props.children
                              .toString()
                              .toLowerCase()
                              .indexOf(e.toLowerCase()) >= 0
                          );
                        },
                        style: {
                          display: "inline-block",
                          width: "calc(65% - 12px)",
                          marginBottom: "0px",
                          paddingLeft: 10
                        }
                      },
                      n &&
                        n.map(function(e, t) {
                          return u.default.createElement(
                            p,
                            { key: t, value: e.value },
                            "  ",
                            e.title,
                            " "
                          );
                        })
                    ),
                    u.default.createElement(i.Icon, {
                      type: "close",
                      onClick: e.removeClick.bind(e, r)
                    })
                  );
                }),
                u.default.createElement(
                  i.Button,
                  {
                    style: { margin: "0px", paddingLeft: "0px" },
                    type: "link",
                    onClick: this.addClick.bind(this)
                  },
                  " Add "
                )
              )
            );
          }),
          t
        );
      })(u.default.Component);
      t.default = d;
    },
    333: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), a(334);
      var o = a(3),
        i = l(a(0)),
        s = o.Select.Option,
        c = o.Form.create({ name: "offer_redemption_rule" })(
          (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              n(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.cappingData,
                  a = e.wrappedComponentRef,
                  n = e.form,
                  l = e.formValues,
                  c = n.getFieldDecorator;
                return i.default.createElement(
                  o.Form,
                  r(
                    {},
                    {
                      labelCol: { xs: { span: 24 }, sm: { span: 24 } },
                      wrapperCol: { xs: { span: 24 }, sm: { span: 24 } }
                    },
                    {
                      className: "offerRedemptionForm",
                      style: { padding: "20px 50px" },
                      ref: a,
                      layout: "vertical"
                    }
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Usage Limit"
                    },
                    c("redemption_usage_limit", {
                      initialValue:
                        "" +
                        (0 != Object.keys(l).length
                          ? l.redemption_usage_limit
                          : "")
                    })(
                      i.default.createElement(o.Input, {
                        type: "number",
                        min: 0
                      })
                    )
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      className: "textPaddingTop",
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      }
                    },
                    i.default.createElement(
                      "span",
                      null,
                      "Defined as maximum number of times an offer can be used collectively by target segment"
                    )
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Usage Limit At Customer Level"
                    },
                    c("redemption_usage_limit_at_customer", {
                      initialValue:
                        "" +
                        (0 != Object.keys(l).length
                          ? l.redemption_usage_limit_at_customer
                          : "")
                    })(i.default.createElement(o.Input, { type: "number" }))
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      className: "textPaddingTop",
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      }
                    },
                    i.default.createElement(
                      "span",
                      null,
                      "Maximum no. of times offer can be used by a customer. Ex: User cannot use the offer once used"
                    )
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Time Limit"
                    },
                    c("redemption_time_limit", {
                      initialValue:
                        "" +
                        (0 != Object.keys(l).length
                          ? l.redemption_time_limit
                          : "")
                    })(
                      i.default.createElement(o.Input, {
                        type: "number",
                        min: 0,
                        addonAfter: i.default.createElement(
                          o.Select,
                          {
                            getPopupContainer: function(e) {
                              return e.parentNode;
                            },
                            defaultValue: "/day",
                            style: { width: 100 },
                            onChange: this.props.timeLimitTypeChange
                          },
                          i.default.createElement(s, { value: "/day" }, "/Day"),
                          i.default.createElement(
                            s,
                            { value: "/week" },
                            "/Week"
                          ),
                          i.default.createElement(
                            s,
                            { value: "/month" },
                            "/Month"
                          )
                        )
                      })
                    )
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      className: "textPaddingTop",
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      }
                    },
                    i.default.createElement(
                      "span",
                      null,
                      "Maximum no. of times an offer can be used within a time duration"
                    )
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    null,
                    i.default.createElement(
                      "h3",
                      { style: { marginTop: 22 } },
                      "Capping"
                    ),
                    i.default.createElement(
                      "span",
                      null,
                      "Max discount, cashback or points and no. of items for an offer"
                    )
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Type"
                    },
                    c("type", {
                      initialValue:
                        "" + (0 != Object.keys(l).length ? l.type : ""),
                      rules: [
                        { required: !0, message: "Please select capping type" }
                      ]
                    })(
                      i.default.createElement(
                        o.Select,
                        {
                          placeholder: "Select a type",
                          getPopupContainer: function(e) {
                            return e.parentNode;
                          }
                        },
                        t &&
                          t.map(function(e, t) {
                            return i.default.createElement(
                              s,
                              { key: t, value: e.value },
                              " ",
                              e.title,
                              " "
                            );
                          })
                      )
                    )
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      },
                      label: "Value"
                    },
                    c("cappingValue", {
                      initialValue:
                        "" + (0 != Object.keys(l).length ? l.cappingValue : "")
                    })(
                      i.default.createElement(o.Input, {
                        type: "number",
                        min: 0
                      })
                    )
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Limit on Sku's"
                    },
                    c("redemption_limit_sku_number", {
                      initialValue:
                        "" +
                        (0 != Object.keys(l).length
                          ? l.redemption_limit_sku_number
                          : "")
                    })(
                      i.default.createElement(o.Input, {
                        type: "number",
                        min: 0
                      })
                    )
                  ),
                  i.default.createElement(
                    o.Form.Item,
                    {
                      className: "textPaddingTop",
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      }
                    },
                    i.default.createElement(
                      "span",
                      null,
                      "Offer is applicable only on X number of SKU's"
                    )
                  )
                );
              }),
              t
            );
          })(i.default.Component)
        );
      t.default = c;
    },
    334: function(e, t, a) {},
    336: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
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
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
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
        u = l(a(0)),
        p = a(67),
        d = a(14),
        f = o(a(38)),
        m = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                n = t.width,
                r = t.themeType,
                l = t.navCollapsed,
                o = this.props.navStyle;
              return (
                n < p.TAB_SIZE &&
                  o === p.NAV_STYLE_FIXED &&
                  (o = p.NAV_STYLE_DRAWER),
                u.createElement(
                  "div",
                  {
                    style: this.props.style,
                    className: "gx-layout-sider-header " + this.props.className,
                    onClick: function() {
                      o === p.NAV_STYLE_DRAWER
                        ? e.props.toggleCollapsedSideNav({
                            variables: { navCollapsed: !l }
                          })
                        : o === p.NAV_STYLE_FIXED
                        ? e.props.onNavStyleChange({
                            variables: { navStyle: p.NAV_STYLE_MINI_SIDEBAR }
                          })
                        : o === p.NAV_STYLE_NO_HEADER_MINI_SIDEBAR
                        ? e.props.toggleCollapsedSideNav({
                            variables: { navCollapsed: !l }
                          })
                        : e.props.onNavStyleChange({
                            variables: { navStyle: p.NAV_STYLE_FIXED }
                          });
                    }
                  },
                  o === p.NAV_STYLE_FIXED || o === p.NAV_STYLE_MINI_SIDEBAR
                    ? u.createElement(
                        "div",
                        { className: "gx-linebar" },
                        u.createElement("img", {
                          style:
                            o === p.NAV_STYLE_MINI_SIDEBAR
                              ? { padding: "10px" }
                              : { padding: "5px", marginTop: "7px" },
                          src: o === p.NAV_STYLE_MINI_SIDEBAR ? a(337) : a(338)
                        })
                      )
                    : null,
                  u.createElement(
                    "div",
                    { className: "gx-site-logo" },
                    o === p.NAV_STYLE_NO_HEADER_MINI_SIDEBAR && n >= p.TAB_SIZE
                      ? u.createElement("div", null, "Collapse Sidebar")
                      : r === p.THEME_TYPE_LITE
                      ? u.createElement("div", null, "Collapse Sidebar")
                      : u.createElement(
                          "div",
                          { className: "gx-text-white" },
                          "Collapse Sidebar"
                        )
                  )
                )
              );
            }),
            t
          );
        })(u.Component),
        h = f.default(
          i ||
            (i = r(
              [
                "\n  query settings @client {\n    settings {\n      navStyle\n      themeType\n      width\n      navCollapsed\n    }\n  }\n"
              ],
              [
                "\n  query settings @client {\n    settings {\n      navStyle\n      themeType\n      width\n      navCollapsed\n    }\n  }\n"
              ]
            ))
        ),
        g = f.default(
          s ||
            (s = r(
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ],
              [
                "\n  mutation toggleCollapsedSideNav($navCollapsed: Boolean) {\n    toggleCollapsedSideNav(navCollapsed: $navCollapsed) @client\n  }\n"
              ]
            ))
        ),
        y = f.default(
          c ||
            (c = r(
              [
                "\n  mutation onNavStyleChange($navStyle: String) {\n    onNavStyleChange(navStyle: $navStyle) @client\n  }\n"
              ],
              [
                "\n  mutation onNavStyleChange($navStyle: String) {\n    onNavStyleChange(navStyle: $navStyle) @client\n  }\n"
              ]
            ))
        );
      t.default = d.compose(
        d.graphql(h, {
          name: "settings",
          props: function(e) {
            var t = e.settings.settings;
            return {
              navStyle: t.navStyle,
              themeType: t.themeType,
              width: t.width,
              navCollapsed: t.navCollapsed
            };
          }
        }),
        d.graphql(g, { name: "toggleCollapsedSideNav" }),
        d.graphql(y, { name: "onNavStyleChange" })
      )(m);
    },
    337: function(e, t, a) {
      e.exports = a.p + "ic_right_arrow.71f2ed50.png";
    },
    338: function(e, t, a) {
      e.exports = a.p + "ic_left_arrow.e11e899a.png";
    },
    339: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3);
      t.default = function(e) {
        var t = e.title,
          a = e.subTitle,
          n = e.titleColor,
          o = e.subtitleColor,
          i = e.showComaprison;
        return r.default.createElement(
          "div",
          {
            style: {
              backgroundColor: "#FFFFFF ",
              height: "105px",
              borderRadius: "4px"
            }
          },
          r.default.createElement(
            "div",
            { style: { paddingTop: "15px" } },
            r.default.createElement(
              l.Row,
              null,
              r.default.createElement(
                l.Col,
                { span: 10 },
                r.default.createElement(
                  "div",
                  {
                    style: {
                      color: n,
                      fontSize: "28px",
                      paddingLeft: "10px",
                      fontWeight: 500
                    }
                  },
                  t
                )
              ),
              !0 === i &&
                r.default.createElement(
                  l.Col,
                  { span: 14, style: { textAlign: "end" } },
                  r.default.createElement(
                    "div",
                    { style: { marginRight: "10px", paddingTop: "6px" } },
                    r.default.createElement(
                      "span",
                      { style: { fontSize: "18px", color: "#2E2E2E" } },
                      r.default.createElement(l.Icon, {
                        type: "caret-up",
                        style: { color: "#46CB92" }
                      }),
                      "2/"
                    ),
                    r.default.createElement(
                      "span",
                      { style: { fontSize: "10px", color: "#2E2E2E" } },
                      "since yesterday"
                    )
                  )
                )
            ),
            r.default.createElement(
              "div",
              {
                style: {
                  color: o,
                  marginTop: "12px",
                  paddingRight: "1px",
                  paddingBottom: "2px",
                  width: "100%",
                  paddingLeft: "10px"
                }
              },
              r.default.createElement(
                "p",
                { style: { fontWeight: 100, fontSize: "12px" } },
                a
              )
            )
          )
        );
      };
    },
    34: function(e, t, a) {},
    340: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0)),
        l = a(3);
      t.default = function(e) {
        var t = e.title,
          a = e.textColor,
          n = e.valueColor,
          o = e.counterArray;
        return r.default.createElement(
          "div",
          {
            style: {
              backgroundColor: "#FFFFFF ",
              height: "105px",
              borderRadius: "4px"
            }
          },
          r.default.createElement(
            "div",
            { style: { paddingTop: "5px" } },
            r.default.createElement(
              "div",
              {
                style: {
                  color: a,
                  fontSize: "12px",
                  paddingLeft: "10px",
                  marginTop: "5px"
                }
              },
              t
            ),
            r.default.createElement(
              "div",
              { style: { marginTop: "24px" } },
              o.map(function(e, t) {
                return r.default.createElement(
                  l.Row,
                  {
                    key: t,
                    style: {
                      fontSize: "12px",
                      color: a,
                      marginTop: "2px",
                      paddingRight: "1px",
                      paddingBottom: "2px",
                      width: "100%",
                      paddingLeft: "10px"
                    }
                  },
                  r.default.createElement(l.Col, { span: 20 }, e.title),
                  r.default.createElement(
                    l.Col,
                    {
                      span: 4,
                      style: {
                        color: n,
                        textAlign: "end",
                        fontSize: "13px",
                        fontWeight: 500
                      }
                    },
                    e.value
                  )
                );
              })
            )
          )
        );
      };
    },
    341: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.handleMouseHover = a.handleMouseHover.bind(a)),
              (a.state = { isHovering: !1 }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.handleMouseHover = function() {
              this.setState(this.toggleHoverState);
            }),
            (t.prototype.toggleHoverState = function(e) {
              return { isHovering: !e.isHovering };
            }),
            (t.prototype.render = function() {
              return l.default.createElement(
                "div",
                {
                  onMouseEnter: this.handleMouseHover,
                  onMouseLeave: this.handleMouseHover
                },
                this.state.isHovering
                  ? l.default.createElement(
                      "span",
                      { style: { color: "#038FDE", cursor: "pointer" } },
                      this.props.children
                    )
                  : l.default.createElement("span", null, this.props.children)
              );
            }),
            t
          );
        })(l.default.Component);
      t.default = o;
    },
    346: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GOOGLE_API_KEY = "google_api_key"),
        (t.FACEBOOK_API_KEY = "facebook_api_key"),
        (t.RADIUS_1 = "radius-1"),
        (t.RADIUS_2 = "radius-2"),
        (t.RADIUS_3 = "radius-3"),
        (t.TYPE = "console_settings"),
        (t.RADIUS_1_MIN = 30),
        (t.RADIUS_1_MAX = 100),
        (t.RADIUS_2_MAX = 300),
        (t.RADIUS_3_MAX = 500),
        (t.HOTSPOT_RADIUS = 50);
    },
    352: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(27),
        s = a(468),
        c = l(a(469)),
        u = l(a(345)),
        p = a(422),
        d =
          u.default && navigator.geolocation
            ? navigator.geolocation
            : {
                getCurrentPosition: function(e, t) {
                  t("Your browser doesn't support geolocation.");
                }
              },
        f = s.withGoogleMap(function(e) {
          return o.createElement(
            s.GoogleMap,
            { defaultZoom: 20, center: e.center.lat ? e.center : e.myLocation },
            o.createElement("div", null),
            e.mapData.kmlFileUrl &&
              o.createElement(s.KmlLayer, {
                url: e.mapData.kmlFileUrl,
                options: { preserveViewport: !1 }
              }),
            e.mapData.markLoc
              ? o.createElement(s.Marker, {
                  icon: { url: p, scaledSize: new google.maps.Size(30, 60) },
                  position:
                    e.mapData.mark.lat && e.mapData.mark.lng
                      ? e.mapData.mark
                      : e.myLocation
                })
              : "",
            (function(e) {
              return e.map(function(e, t) {
                return o.createElement(
                  "div",
                  { key: t },
                  " ",
                  e.center.lat &&
                    e.center.lng &&
                    o.createElement(
                      "div",
                      null,
                      o.createElement(s.Marker, { position: e.center }),
                      o.createElement(s.Circle, {
                        center: e.center,
                        radius: e.radius[0] ? e.radius[0] : 0,
                        options: {
                          fillColor: "#1DD9FA",
                          fillOpacity: 0.3,
                          strokeColor: "#62A7FF",
                          strokeOpacity: 1,
                          strokeWeight: 1
                        }
                      }),
                      o.createElement(s.Circle, {
                        center: e.center,
                        radius: e.radius[1] ? e.radius[1] : 0,
                        options: {
                          fillColor: "#1DD9FA",
                          fillOpacity: 0.2,
                          strokeColor: "#BA7EFE",
                          strokeOpacity: 1,
                          strokeWeight: 1
                        }
                      }),
                      o.createElement(s.Circle, {
                        center: e.center,
                        radius: e.radius[2] ? e.radius[2] : 0,
                        options: {
                          fillColor: "#FFA6A6",
                          fillOpacity: 0.18,
                          strokeColor: "#FF8686",
                          strokeOpacity: 1,
                          strokeWeight: 1
                        }
                      })
                    )
                );
              });
            })(e.places ? e.places : e.mapData.places),
            e.mapData.searchRadius
              ? o.createElement(s.Circle, {
                  center: e.mapData.mark,
                  radius: e.mapData.searchRadius,
                  options: {
                    fillColor: "#11FFDE",
                    fillOpacity: 0.2,
                    strokeColor: "#C1FF00",
                    strokeOpacity: 1,
                    strokeWeight: 1
                  }
                })
              : "",
            e.mapData.getLoc
              ? o.createElement(c.default, {
                  defaultDrawingMode: google.maps.drawing.OverlayType.MARKER,
                  defaultOptions: { drawingControl: !0 },
                  onMarkerComplete: function(t) {
                    e.setlocationDetails(
                      t.getPosition().lat(),
                      t.getPosition().lng()
                    ),
                      t.setMap(null);
                  }
                })
              : ""
          );
        }),
        m = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.isUnmounted = !1),
              (a.state = { center: { lat: 0.1, lng: 0.1 } }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.componentWillUnmount = function() {
              this.isUnmounted = !0;
            }),
            (t.prototype.UNSAFE_componentWillMount = function() {
              var e = this;
              d.getCurrentPosition(function(t) {
                var a = e.state.center;
                (a = { lat: t.coords.latitude, lng: t.coords.longitude }),
                  e.setState({ center: a });
              });
            }),
            (t.prototype.render = function() {
              return o.createElement(
                i.Auxiliary,
                null,
                o.createElement(f, {
                  loadingElement: o.createElement("div", {
                    style: { height: "100%" }
                  }),
                  containerElement: o.createElement("div", {
                    style: {
                      height: this.props.mapHeight
                        ? this.props.mapHeight
                        : "630px"
                    }
                  }),
                  mapElement: o.createElement("div", {
                    style: { height: "100%" }
                  }),
                  center: this.props.mapData.center,
                  mapData: this.props.mapData,
                  setlocationDetails: this.props.setlocationDetails,
                  myLocation: this.state.center,
                  places: this.props.places
                })
              );
            }),
            t
          );
        })(o.Component);
      t.default = m;
    },
    422: function(e, t, a) {
      e.exports = a.p + "marker-location.a9067598.png";
    },
    426: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = function(e) {
        return e.children;
      };
    },
    431: function(e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "GRAPHQL_URL", function() {
          return n;
        }),
        a.d(t, "NEARX_GRAPHQL_URL", function() {
          return r;
        });
      var n = "https://dev-api.getwalkin.in/core/graphql",
        r = "https://dev-api.getwalkin.in/nearx/graphql",
        l = "default";
      var o = {
        development: {
          env: (l = "production"),
          GRAPHQL_URL: "https://dev-api.getwalkin.in/core/graphql",
          NEARX_GRAPHQL_URL: "https://dev-api.getwalkin.in/nearx_dev/graphql"
        },
        production: {
          env: l,
          GRAPHQL_URL: "https://dev-api.getwalkin.in/core/graphql",
          NEARX_GRAPHQL_URL: "https://dev-api.getwalkin.in/nearx/graphql"
        },
        default: {
          env: l,
          GRAPHQL_URL: "https://dev-api.getwalkin.in/core/graphql",
          NEARX_GRAPHQL_URL: "https://dev-api.getwalkin.in/nearx_dev/graphql"
        }
      };
      t.default = o[l];
    },
    473: function(e, t, a) {},
    474: function(e, t, a) {},
    475: function(e, t, a) {},
    476: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.hp;
              return l.createElement(
                o.Row,
                { gutter: 0, className: "hotspotCard" },
                l.createElement(
                  o.Col,
                  { span: 14 },
                  l.createElement(
                    "div",
                    { className: "divCenterVertical" },
                    l.createElement(
                      "div",
                      null,
                      l.createElement(o.Checkbox, {
                        className: "gx-icon-btn",
                        checked: t.selected,
                        value: "checked",
                        onChange: function(t) {
                          e.props.onPlaceSelect(e.props.index, t);
                        }
                      })
                    ),
                    l.createElement(
                      "span",
                      { style: { marginLeft: 5 } },
                      " ",
                      t.placeName,
                      " "
                    )
                  )
                ),
                l.createElement(
                  o.Col,
                  {
                    style: { float: "right", marginRight: -15 },
                    className: "placeCardLocation",
                    span: 10
                  },
                  l.createElement(
                    o.Row,
                    null,
                    "Latitude:- ",
                    l.createElement(
                      "span",
                      { style: { marginBottom: 5 } },
                      t.center.lat
                        .toString()
                        .slice(0, t.center.lat.toString().indexOf(".") + 8)
                    )
                  ),
                  l.createElement(
                    o.Row,
                    null,
                    "Longitude:- ",
                    l.createElement(
                      "span",
                      null,
                      t.center.lng
                        .toString()
                        .slice(0, t.center.lng.toString().indexOf(".") + 8)
                    )
                  )
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = i;
    },
    860: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(16),
        s = l(a(861)),
        c = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return o.createElement(i.Route, {
                path: "" + this.props.match.url,
                component: s.default
              });
            }),
            t
          );
        })(o.Component);
      t.default = c;
    },
    861: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(16);
      a(473);
      var s = l(a(863)),
        c = l(a(869)),
        u = l(a(874)),
        p = l(a(891)),
        d = l(a(893)),
        f = l(a(899)),
        m = l(a(902)),
        h = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "NearX-Main" },
                o.createElement(
                  i.Switch,
                  null,
                  o.createElement(i.Redirect, {
                    exact: !0,
                    from: "/nearx",
                    to: "/nearx/dashboard"
                  }),
                  o.createElement(i.Route, {
                    path: "/nearx/home",
                    component: s.default
                  }),
                  o.createElement(i.Route, {
                    path: "/nearx/dashboard",
                    component: c.default
                  }),
                  o.createElement(i.Route, {
                    path: "/nearx/places",
                    component: u.default
                  }),
                  o.createElement(i.Route, {
                    path: "/nearx/settings",
                    component: p.default
                  }),
                  o.createElement(i.Route, {
                    path: "/nearx/hooks",
                    component: f.default
                  }),
                  o.createElement(i.Route, {
                    path: "/nearx/apps",
                    component: d.default
                  }),
                  o.createElement(i.Route, {
                    path: "/nearx/testUpload",
                    component: m.default
                  }),
                  o.createElement(i.Redirect, {
                    from: "/nearx/",
                    to: "/nearx/dashboard"
                  })
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = h;
    },
    863: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(a(0)),
        o = a(16),
        i = r(a(864));
      t.default = function(e) {
        e.match;
        return l.createElement(
          o.Switch,
          null,
          l.createElement(o.Redirect, {
            exact: !0,
            from: "/nearx/home",
            to: "/nearx/home/landing"
          }),
          l.createElement(o.Route, {
            path: "/nearx/home/landing",
            component: i.default
          })
        );
      };
    },
    864: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = a(16),
        c = l(a(865)),
        u = l(a(426));
      a(474);
      var p = l(a(867)),
        d = a(868).getNewPlaces,
        f = i.Input.Search,
        m = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.state = {
                places: [
                  {
                    radius1: 0,
                    placeName: "Place",
                    radius2: 0,
                    storeId: "",
                    radius3: 0,
                    noOfRadius: 1,
                    radius: [0],
                    center: { lat: null, lng: null },
                    errors: {}
                  }
                ],
                center: { lat: null, lng: null },
                noOfPlaces: 1,
                errors: {},
                markerPlace: 1,
                getLoc: !1
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = 144;
              return o.createElement(
                u.default,
                null,
                o.createElement(
                  i.Row,
                  { className: "headerRow1" },
                  o.createElement(
                    "div",
                    { style: { width: "100%" } },
                    o.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      o.createElement(
                        "span",
                        { style: { fontSize: 18 } },
                        "DASHBOARD"
                      )
                    ),
                    o.createElement(
                      "div",
                      { style: { float: "right", flexFlow: "right" } },
                      o.createElement(
                        s.Link,
                        { to: "/nearx/places/createplace" },
                        o.createElement(
                          i.Button,
                          { style: { margin: 0 }, className: "buttonPrimary" },
                          "Create Place"
                        )
                      )
                    )
                  )
                ),
                o.createElement(
                  "div",
                  null,
                  o.createElement(
                    "div",
                    { className: "homeMap" },
                    o.createElement(c.default, { mapData: this.state }),
                    " "
                  ),
                  o.createElement(
                    "div",
                    { className: "homeSearch" },
                    o.createElement(f, {
                      required: !0,
                      placeholder: "Search Places From Google",
                      size: "large"
                    })
                  )
                ),
                o.createElement(
                  i.Row,
                  { className: "homeAnalytics" },
                  o.createElement(
                    i.Col,
                    { span: 15 },
                    o.createElement(
                      "div",
                      { className: "gx-card" },
                      o.createElement(
                        "div",
                        { className: "gx-card-body" },
                        o.createElement(
                          i.Row,
                          {
                            style: { minHeight: 100 },
                            className: "homeAnalytics1"
                          },
                          o.createElement(
                            i.Col,
                            { span: 6 },
                            o.createElement("div", { className: "rightVr" }),
                            o.createElement(
                              "div",
                              { className: "cenTitle" },
                              "Total Places"
                            ),
                            o.createElement(
                              "div",
                              { className: "bigNum" },
                              e < 10 ? "0" + e : e
                            )
                          ),
                          o.createElement(
                            i.Col,
                            { span: 6 },
                            o.createElement("div", { className: "rightVr" }),
                            o.createElement(
                              "div",
                              { className: "cenTitle" },
                              "Total Hotspots"
                            ),
                            o.createElement(
                              "div",
                              { className: "bigNum" },
                              e < 10 ? "0" + e : 435
                            )
                          ),
                          o.createElement(
                            i.Col,
                            { span: 6 },
                            o.createElement("div", { className: "rightVr" }),
                            o.createElement(
                              "div",
                              { className: "cenTitle" },
                              "Total Entries"
                            ),
                            o.createElement(
                              "div",
                              { className: "bigNum" },
                              e < 10 ? "0" + e : 5800
                            )
                          ),
                          o.createElement(
                            i.Col,
                            { span: 6 },
                            o.createElement(
                              "div",
                              { className: "cenTitle" },
                              "Total Exit"
                            ),
                            o.createElement(
                              "div",
                              { className: "bigNum" },
                              e < 10 ? "0" + e : 2040
                            )
                          )
                        ),
                        o.createElement("br", null),
                        o.createElement(
                          "div",
                          { className: "homeNewPlaces" },
                          "New Places",
                          o.createElement(
                            i.Row,
                            null,
                            o.createElement(i.Col, { span: 6 }, d[0].name),
                            o.createElement(
                              i.Col,
                              { span: 4 },
                              "Hotspot:",
                              d[0].hotspots
                            ),
                            o.createElement(
                              i.Col,
                              { span: 4 },
                              "Entry: ",
                              d[0].entry
                            ),
                            o.createElement(
                              i.Col,
                              { span: 3 },
                              "Exit: ",
                              d[0].exit
                            ),
                            o.createElement(
                              i.Col,
                              { span: 5 },
                              "Avg Dwell time: ",
                              d[0].avgTime,
                              "min"
                            )
                          ),
                          o.createElement(
                            i.Row,
                            null,
                            o.createElement(i.Col, { span: 6 }, d[0].name),
                            o.createElement(
                              i.Col,
                              { span: 4 },
                              "Hotspot:",
                              d[0].hotspots
                            ),
                            o.createElement(
                              i.Col,
                              { span: 4 },
                              "Entry: ",
                              d[0].entry
                            ),
                            o.createElement(
                              i.Col,
                              { span: 3 },
                              "Exit: ",
                              d[0].exit
                            ),
                            o.createElement(
                              i.Col,
                              { span: 5 },
                              "Avg Dwell time: ",
                              d[0].avgTime,
                              "min"
                            )
                          ),
                          o.createElement(
                            i.Row,
                            null,
                            o.createElement(i.Col, { span: 6 }, d[0].name),
                            o.createElement(
                              i.Col,
                              { span: 4 },
                              "Hotspot:",
                              d[0].hotspots
                            ),
                            o.createElement(
                              i.Col,
                              { span: 4 },
                              "Entry: ",
                              d[0].entry
                            ),
                            o.createElement(
                              i.Col,
                              { span: 3 },
                              "Exit: ",
                              d[0].exit
                            ),
                            o.createElement(
                              i.Col,
                              { span: 5 },
                              "Avg Dwell time: ",
                              d[0].avgTime,
                              "min"
                            )
                          ),
                          o.createElement(
                            "div",
                            {
                              style: {
                                margin: "20px 20px 30px 0px",
                                width: "100%"
                              }
                            },
                            o.createElement(
                              "p",
                              { style: { float: "right", color: "#34bfe2" } },
                              " ",
                              o.createElement("a", { href: "#" }, " View All ")
                            )
                          )
                        )
                      )
                    )
                  ),
                  o.createElement(
                    i.Col,
                    { span: 9 },
                    o.createElement(
                      i.Card,
                      { className: "gx-card", title: "Popular  Places" },
                      o.createElement(p.default, null)
                    )
                  )
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = m;
    },
    865: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(27),
        s = a(468),
        c = l(a(469)),
        u = l(a(345)),
        p = a(422),
        d =
          u.default && navigator.geolocation
            ? navigator.geolocation
            : {
                getCurrentPosition: function(e, t) {
                  t("Your browser doesn't support geolocation.");
                }
              },
        f = s.withGoogleMap(function(e) {
          return o.createElement(
            s.GoogleMap,
            { defaultZoom: 14, center: e.center.lat ? e.center : e.myLocation },
            o.createElement("div", null),
            e.mapData.markLoc
              ? o.createElement(s.Marker, {
                  icon: { url: p, scaledSize: new google.maps.Size(30, 60) },
                  position:
                    e.mapData.mark.lat && e.mapData.mark.lng
                      ? e.mapData.mark
                      : e.myLocation
                })
              : "",
            (function(e) {
              return e.places.map(function(e, t) {
                return o.createElement(
                  "div",
                  { key: t },
                  " ",
                  e.center.lat &&
                    e.center.lng &&
                    o.createElement(
                      "div",
                      null,
                      o.createElement(s.Marker, { position: e.center }),
                      o.createElement(s.Circle, {
                        center: e.center,
                        radius: e.radius[0],
                        options: {
                          fillColor: "#1DD9FA",
                          fillOpacity: 0.3,
                          strokeColor: "#62A7FF",
                          strokeOpacity: 1,
                          strokeWeight: 1
                        }
                      }),
                      o.createElement(s.Circle, {
                        center: e.center,
                        radius: e.radius[1] ? e.radius[1] : 0,
                        options: {
                          fillColor: "#1DD9FA",
                          fillOpacity: 0.2,
                          strokeColor: "#BA7EFE",
                          strokeOpacity: 1,
                          strokeWeight: 1
                        }
                      }),
                      o.createElement(s.Circle, {
                        center: e.center,
                        radius: e.radius[2] ? e.radius[2] : 0,
                        options: {
                          fillColor: "#FFA6A6",
                          fillOpacity: 0.18,
                          strokeColor: "#FF8686",
                          strokeOpacity: 1,
                          strokeWeight: 1
                        }
                      })
                    )
                );
              });
            })(e.mapData),
            e.mapData.searchRadius
              ? o.createElement(s.Circle, {
                  center: e.mapData.mark,
                  radius: e.mapData.searchRadius,
                  options: {
                    fillColor: "#11FFDE",
                    fillOpacity: 0.2,
                    strokeColor: "#C1FF00",
                    strokeOpacity: 1,
                    strokeWeight: 1
                  }
                })
              : "",
            e.mapData.getLoc
              ? o.createElement(c.default, {
                  defaultDrawingMode: google.maps.drawing.OverlayType.MARKER,
                  defaultOptions: { drawingControl: !0 },
                  onMarkerComplete: function(t) {
                    e.setlocationDetails(
                      t.getPosition().lat(),
                      t.getPosition().lng()
                    ),
                      t.setMap(null);
                  }
                })
              : ""
          );
        }),
        m = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.isUnmounted = !1),
              (a.state = { center: { lat: 0.1, lng: 0.1 } }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.componentWillUnmount = function() {
              this.isUnmounted = !0;
            }),
            (t.prototype.UNSAFE_componentWillMount = function() {
              var e = this;
              d.getCurrentPosition(function(t) {
                var a = e.state.center;
                (a = { lat: t.coords.latitude, lng: t.coords.longitude }),
                  e.setState({ center: a }),
                  console.log("My Location  " + a);
              });
            }),
            (t.prototype.render = function() {
              return o.createElement(
                i.Auxiliary,
                null,
                o.createElement(f, {
                  loadingElement: o.createElement("div", {
                    style: { height: "100%" }
                  }),
                  containerElement: o.createElement("div", {
                    style: { height: "350px" }
                  }),
                  mapElement: o.createElement("div", {
                    style: { height: "100%" }
                  }),
                  center: this.props.mapData.center,
                  mapData: this.props.mapData,
                  setlocationDetails: this.props.setlocationDetails,
                  myLocation: this.state.center
                })
              );
            }),
            t
          );
        })(o.Component);
      t.default = m;
    },
    867: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(a(0)),
        o = r(a(505));
      t.default = function() {
        return l.createElement(
          "div",
          { className: "App" },
          l.createElement(o.default.React, {
            style: { width: "100%", height: "300px" },
            options: {
              theme: "light",
              type: "serial",
              startDuration: 2,
              dataProvider: [
                { country: "USA", visits: 4025, color: "#FF0F00" },
                { country: "China", visits: 1882, color: "#FF6600" },
                { country: "Germany", visits: 1322, color: "#FCD202" },
                { country: "UK", visits: 1122, color: "#F8FF01" },
                { country: "France", visits: 1114, color: "#B0DE09" },
                { country: "Italy", visits: 386, color: "#DDDDDD" },
                { country: "Taiwan", visits: 338, color: "#333333" }
              ],
              valueAxes: [{ position: "left", axisAlpha: 0, gridAlpha: 0 }],
              graphs: [
                {
                  balloonText: "[[category]]: <b>[[value]]</b>",
                  colorField: "color",
                  fillAlphas: 0.85,
                  lineAlpha: 0.1,
                  type: "column",
                  topRadius: 1,
                  valueField: "visits"
                }
              ],
              depth3D: 40,
              angle: 30,
              chartCursor: {
                categoryBalloonEnabled: !1,
                cursorAlpha: 0,
                zoomable: !1
              },
              categoryField: "country",
              categoryAxis: {
                gridPosition: "start",
                axisAlpha: 0,
                gridAlpha: 0
              },
              export: { enabled: !0 }
            }
          })
        );
      };
    },
    868: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getNewPlaces = [
          {
            key: "1",
            name: "Big Bazaar koramangala1",
            code: "BZJKJSDNJKN",
            lat: "55.6541651",
            lng: "130.541512",
            hotspots: 14,
            radius: [100, 200, 300],
            entry: 12,
            exit: 11,
            avgTime: 15,
            region:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            key: "1",
            name: "Big Bazaar koramangala2",
            code: "BZJKJSDNJKN",
            lat: "55.6541651",
            lng: "130.541512",
            hotspots: 14,
            radius: [100, 200, 300],
            entry: 12,
            exit: 11,
            avgTime: 15,
            region:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            key: "1",
            name: "Big Bazaar koramangala3",
            code: "BZJKJSDNJKN",
            lat: "55.6541651",
            lng: "130.541512",
            hotspots: 14,
            radius: [100, 200, 300],
            entry: 12,
            exit: 11,
            avgTime: 15,
            region:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            key: "1",
            name: "Big Bazaar koramangala4",
            code: "BZJKJSDNJKN",
            lat: "55.6541651",
            lng: "130.541512",
            hotspots: 14,
            radius: [100, 200, 300],
            entry: 12,
            exit: 11,
            avgTime: 15,
            region:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            key: "1",
            name: "Big Bazaar koramangala5",
            code: "BZJKJSDNJKN",
            lat: "55.6541651",
            lng: "130.541512",
            hotspots: 14,
            radius: [100, 200, 300],
            entry: 12,
            exit: 11,
            avgTime: 15,
            region:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          }
        ]),
        (t.getAllPlaces = [
          {
            id: "1",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            id: "2",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            id: "1",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            id: "2",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            id: "1",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            id: "2",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            id: "1",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            id: "2",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            id: "1",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          },
          {
            id: "2",
            name: "Big Bazaar koramangala",
            code: "BZJKJSDNJKN",
            center: { lat: "55.6541651", lng: "130.541512" },
            hotspots: 14,
            radius: [100, 200, 300],
            address:
              "225 Bills place L20-30 Bills place Brogan Massachusetts chad"
          }
        ]);
    },
    869: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(a(0)),
        o = a(16),
        i = r(a(870));
      t.default = function(e) {
        var t = e.match;
        return (
          console.log(
            "Inside NearX-Routes-index-Dashboard [" + JSON.stringify(t) + "]"
          ),
          l.createElement(
            o.Switch,
            null,
            l.createElement(o.Route, {
              exact: !0,
              path: t.url,
              component: i.default
            })
          )
        );
      };
    },
    870: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = l(a(426)),
        c = a(347),
        u = a(871),
        p = a(27),
        d = l(a(5)),
        f = l(a(872)),
        m = l(a(873)),
        h = r(a(33));
      a(474);
      var g = a(14),
        y = a(37);
      var _ = (function(e) {
        function t(t) {
          var a = e.call(this, t) || this;
          return (
            (a.getMetrics = function(e, t) {
              a.setState({ spin: !0 }),
                a.props.client
                  .query({
                    query: y.GET_ANALYTICS,
                    variables: {
                      org_id: e,
                      product: "NEARX",
                      dates: { from: a.state.startDate, to: t }
                    },
                    fetchPolicy: "no-cache"
                  })
                  .then(function(e) {
                    console.log(">>>", e),
                      a.formatData(e),
                      a.setState({ spin: !1 });
                  })
                  .catch(function(e) {
                    a.setState({ spin: !1 }),
                      console.log("Failed to get User Details" + e);
                  });
            }),
            (a.formatData = function(e) {
              var t = a.state,
                n = t.totalDwell,
                r = t.totalEntries,
                l = t.totalPlaces,
                o = t.totalExits,
                i = t.customerCount,
                s = t.customers,
                c = t.popularPlaces,
                p = t.recentPlaces;
              console.log(u.AnyNear.data.analytics),
                e.data.analytics.map(function(e) {
                  "GEOFENCE_COUNTS" === e.name
                    ? (l = e.total)
                    : "EVENT_ENTRY_COUNTS" === e.name
                    ? (r = e.total)
                    : "EVENT_EXIT_COUNTS" === e.name
                    ? (o = e.total)
                    : "EVENT_DWELL_COUNTS" === e.name
                    ? (n = e.total)
                    : "CUSTOMER_COUNTS" === e.name
                    ? ((i = e.total), (s = [{ count: 0 }].concat(e.response)))
                    : "POPULAR_PLACES" === e.name
                    ? (c = e.response)
                    : "MOST_VISITED_PLACES" === e.name && (p = e.response);
                }),
                a.setState({
                  totalDwell: n,
                  totalEntries: r,
                  totalPlaces: l,
                  totalExits: o,
                  customerCount: i,
                  customers: s,
                  popularPlaces: c,
                  recentPlaces: p,
                  spin: !1
                }),
                console.log("Done");
            }),
            (a.disabledDate = function(e) {
              if (!e) return !1;
              var t = d.default();
              return (
                t.hour(0),
                t.minute(0),
                t.second(0),
                d.default(e).add(1, "day") > d.default()
              );
            }),
            (a.disableEndDate = function(e) {
              if (!e) return !1;
              var t = d.default(a.state.startDate);
              return (
                t.hour(0),
                t.minute(0),
                t.second(0),
                e.valueOf() <= t.valueOf() || d.default().subtract(1, "day") < e
              );
            }),
            (a.handleChange2 = function(e) {
              var t = d.default(e).format("YYYY-MM-DD"),
                n = new Date(t + " 5:30:00").toISOString();
              console.log("newd", n),
                a.setState({ startDate: n, endDate: "" }),
                "" !== n && (a.state.errors.startDate = "");
            }),
            (a.handleChange3 = function(e) {
              var t = d
                  .default(e)
                  .add(1, "day")
                  .format("YYYY-MM-DD"),
                n = new Date(t + " 5:29:59").toISOString();
              a.setState({ endDate: n }),
                a.getMetrics(a.state.org_id, n),
                "" !== n && (a.state.errors.endDate = "");
            }),
            (a.customPopup = function(e) {
              if (e.payload[0])
                return o.createElement(
                  "div",
                  { className: "recharts-default-tooltip tooltipPopup" },
                  o.createElement(
                    "div",
                    null,
                    e.payload[0].payload.Date ? e.payload[0].payload.Date : ""
                  ),
                  o.createElement(
                    "div",
                    { className: "tooltipData" },
                    e.payload[0].dataKey + " : " + e.payload[0].value
                  )
                );
            }),
            (a.state = {
              totalPlaces: 0,
              totalEntries: 0,
              totalExits: 0,
              totalDwell: 0,
              customers: [],
              popularPlaces: [],
              recentPlaces: [],
              customerCount: 0,
              org_id: "",
              startDate: d.default().subtract(30, "day"),
              endDate: (function() {
                var e = d
                    .default()
                    .subtract(1, "day")
                    .format("YYYY-MM-DD"),
                  t = new Date(e + " 23:59:59");
                return console.log("newd", t), t;
              })(),
              errors: {},
              spin: !1
            }),
            a
          );
        }
        return (
          n(t, e),
          (t.prototype.UNSAFE_componentWillMount = function() {
            var e = h.decode(localStorage.getItem("jwt")),
              t = e.id,
              a = e.org_id;
            a && t
              ? (this.setState({ org_id: a }),
                this.getMetrics(a, this.state.endDate))
              : console.log("Error getting JwtData");
          }),
          (t.prototype.render = function() {
            var e = this,
              t = (window.innerWidth, []);
            return (
              (t = this.state.recentPlaces.slice(0, 5)),
              o.createElement(
                s.default,
                null,
                o.createElement(
                  "div",
                  { className: "gx-main-content-wrapper" },
                  o.createElement(
                    i.Row,
                    null,
                    o.createElement(
                      i.Col,
                      { sm: 0, md: 6, xl: 8 },
                      o.createElement(
                        "span",
                        {
                          className: "gx-d-none gx-d-sm-flex",
                          style: {
                            width: "100%",
                            fontSize: 24,
                            color: "#5B5B5B"
                          }
                        },
                        o.createElement(i.Icon, {
                          style: {
                            fontSize: 26,
                            marginRight: 14,
                            color: "#D5003A"
                          },
                          type: "alert",
                          theme: "filled"
                        }),
                        "Dashboard"
                      )
                    ),
                    o.createElement(
                      i.Col,
                      { sm: 24, md: 18, xl: 16 },
                      o.createElement(
                        i.Row,
                        {
                          gutter: 20,
                          type: "flex",
                          justify: "end",
                          style: { marginBottom: 15 }
                        },
                        o.createElement(
                          i.Col,
                          null,
                          o.createElement(i.DatePicker, {
                            onChange: this.handleChange2,
                            value: this.state.startDate
                              ? d.default(this.state.startDate, "YYYY/MM/DD")
                              : null,
                            format: "YYYY/MM/DD",
                            disabledDate: this.disabledDate,
                            name: "startDate",
                            placeholder: "Select Start Date"
                          }),
                          o.createElement(
                            "p",
                            null,
                            this.state.errors.startDate
                          )
                        ),
                        o.createElement(
                          i.Col,
                          null,
                          o.createElement(i.DatePicker, {
                            onChange: this.handleChange3,
                            value: this.state.endDate
                              ? d.default(this.state.endDate, "YYYY/MM/DD")
                              : null,
                            format: "YYYY/MM/DD",
                            disabledDate: this.disableEndDate,
                            name: "endDate",
                            placeholder: "Select End Date"
                          }),
                          o.createElement("p", null, this.state.errors.endDate)
                        )
                      )
                    )
                  ),
                  this.state.spin
                    ? o.createElement(
                        "div",
                        null,
                        " ",
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null),
                        o.createElement(
                          "div",
                          { className: "divCenter" },
                          o.createElement(i.Spin, { size: "large" })
                        ),
                        " ",
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null)
                      )
                    : o.createElement(
                        "div",
                        null,
                        o.createElement(
                          i.Row,
                          null,
                          o.createElement(
                            i.Col,
                            {
                              xl: 6,
                              lg: 6,
                              md: 6,
                              sm: 12,
                              xs: 12,
                              className: "gx-col-full"
                            },
                            o.createElement(p.IconWithTextCard, {
                              cardColor: "cyan",
                              icon: "wall",
                              title: this.state.totalPlaces,
                              subTitle: "Total Places"
                            })
                          ),
                          o.createElement(
                            i.Col,
                            { xl: 6, lg: 6, md: 6, sm: 12, xs: 12 },
                            o.createElement(p.IconWithTextCard, {
                              cardColor: "orange",
                              antIcon: "login",
                              title: this.state.totalEntries,
                              subTitle: "Total Entries"
                            })
                          ),
                          o.createElement(
                            i.Col,
                            { xl: 6, lg: 6, md: 6, sm: 12, xs: 12 },
                            o.createElement(p.IconWithTextCard, {
                              cardColor: "teal",
                              antIcon: "logout",
                              title: this.state.totalExits,
                              subTitle: "Total Exit"
                            })
                          ),
                          o.createElement(
                            i.Col,
                            {
                              xl: 6,
                              lg: 6,
                              md: 6,
                              sm: 12,
                              xs: 12,
                              className: "gx-col-full"
                            },
                            o.createElement(p.IconWithTextCard, {
                              cardColor: "red",
                              icon: "map-street-view",
                              title: this.state.totalDwell,
                              subTitle: "Dwelling customers"
                            })
                          )
                        ),
                        o.createElement(
                          i.Row,
                          null,
                          o.createElement(
                            i.Col,
                            { span: 24 },
                            o.createElement(p.ChartCard, {
                              prize: this.state.customerCount,
                              desc: "Total no. of new customers",
                              children: this.state.customerCount
                                ? o.createElement(
                                    c.ResponsiveContainer,
                                    { width: "100%", height: 130 },
                                    o.createElement(
                                      c.AreaChart,
                                      {
                                        data: this.state.customers,
                                        margin: {
                                          top: 0,
                                          right: 0,
                                          left: 0,
                                          bottom: 0
                                        }
                                      },
                                      o.createElement(c.Tooltip, {
                                        content: function(t) {
                                          return e.customPopup(t);
                                        }
                                      }),
                                      o.createElement(
                                        "defs",
                                        null,
                                        o.createElement(
                                          "linearGradient",
                                          {
                                            id: "color2",
                                            x1: "0",
                                            y1: "0",
                                            x2: "1",
                                            y2: "0"
                                          },
                                          o.createElement("stop", {
                                            offset: "5%",
                                            stopColor: "#4ECDE4",
                                            stopOpacity: 0.9
                                          }),
                                          o.createElement("stop", {
                                            offset: "95%",
                                            stopColor: "#6BEF93",
                                            stopOpacity: 0.9
                                          })
                                        )
                                      ),
                                      o.createElement(c.Area, {
                                        dataKey: "count",
                                        type: "monotone",
                                        strokeWidth: 0.2,
                                        stackId: "2",
                                        stroke: "#4D95F3",
                                        fill: "url(#color2)",
                                        fillOpacity: 1
                                      })
                                    )
                                  )
                                : o.createElement(i.Empty, {
                                    style: { marginBottom: 10 }
                                  })
                            })
                          )
                        ),
                        o.createElement(
                          i.Row,
                          null,
                          o.createElement(
                            i.Col,
                            { xl: 15, lg: 15, md: 24 },
                            o.createElement(
                              "div",
                              { className: "homeNewPlaces" },
                              o.createElement(
                                p.Widget,
                                {
                                  title: "Most Visited Places",
                                  styleName: "gx-card"
                                },
                                t.length
                                  ? t.map(function(e, t) {
                                      return o.createElement(m.default, {
                                        key: t,
                                        place: e
                                      });
                                    })
                                  : o.createElement(i.Empty, null)
                              )
                            )
                          ),
                          o.createElement(
                            i.Col,
                            { xl: 9, lg: 9, md: 24, sm: 24, xs: 24 },
                            o.createElement(
                              "div",
                              { className: "gx-card" },
                              o.createElement(
                                "div",
                                {
                                  style: { paddingBottom: 0 },
                                  className: "gx-card-head"
                                },
                                o.createElement(
                                  "h4",
                                  { className: "gx-card-title" },
                                  "Popular  Places"
                                )
                              ),
                              o.createElement(
                                "div",
                                {
                                  style: { paddingTop: 0 },
                                  className: "gx-card-body"
                                },
                                this.state.popularPlaces.length
                                  ? o.createElement(f.default, {
                                      data: this.state.popularPlaces
                                    })
                                  : o.createElement(i.Empty, null)
                              )
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
      })(o.Component);
      t.default = g.withApollo(_);
    },
    871: function(e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.growthData = [
          { name: "Page A", price: 1200 },
          { name: "Page B", price: 600 },
          { name: "Page C", price: 1200 },
          { name: "Page D", price: 600 },
          { name: "Page D", price: 900 }
        ]),
        (t.growth2Data = [
          { name: "Page A", revenue: 1200 },
          { name: "Page B", revenue: 600 },
          { name: "Page C", revenue: 1200 },
          { name: "Page D", revenue: 600 },
          { name: "Page D", revenue: 900 }
        ]),
        (t.trafficData = [
          { name: "Page A", income: 200 },
          { name: "Page B", income: 900 },
          { name: "Page C", income: 600 },
          { name: "Page D", income: 1600 },
          { name: "Page D", income: 900 }
        ]),
        (t.trafficRaiseData = [
          { name: "Page A", traffic: 200 },
          { name: "Page B", traffic: 900 },
          { name: "Page C", traffic: 600 },
          { name: "Page D", traffic: 1600 },
          { name: "Page D", traffic: 900 }
        ]),
        (t.revenueData = [
          { name: "Page A", revenue: 850 },
          { name: "Page B", revenue: 300 },
          { name: "Page C", revenue: 1100 },
          { name: "Page D", revenue: 600 }
        ]),
        (t.propertiesData = [
          { name: "Page A", properties: 200 },
          { name: "Page B", properties: 1200 },
          { name: "Page C", properties: 600 },
          { name: "Page D", properties: 1600 },
          { name: "Page D", properties: 1e3 },
          { name: "Page H", properties: 2260 },
          { name: "Page K", properties: 800 }
        ]),
        (t.citiesData = [
          { name: "Page A", cities: 200 },
          { name: "Page B", cities: 1200 },
          { name: "Page C", cities: 600 },
          { name: "Page D", cities: 1600 },
          { name: "Page D", cities: 1e3 },
          { name: "Page H", cities: 2260 },
          { name: "Page K", cities: 800 }
        ]),
        (t.visitsData = [
          { name: "Page A", visit: 200 },
          { name: "Page B", visit: 1200 },
          { name: "Page C", visit: 600 },
          { name: "Page D", visit: 1600 },
          { name: "Page D", visit: 1e3 },
          { name: "Page H", visit: 2260 },
          { name: "Page K", visit: 800 }
        ]),
        (t.queriesData = [
          { name: "Page A", queries: 200 },
          { name: "Page B", queries: 1200 },
          { name: "Page C", queries: 600 },
          { name: "Page D", queries: 1600 },
          { name: "Page D", queries: 1e3 },
          { name: "Page H", queries: 2260 },
          { name: "Page K", queries: 800 }
        ]),
        (t.increamentData = [
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 30 },
          { name: "Page A", customer: 0 },
          { name: "Page D", customer: 100 },
          { name: "Page A", customer: 0 },
          { name: "Page H", customer: 60 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page K", customer: 80 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 30 },
          { name: "Page A", customer: 0 },
          { name: "Page D", customer: 100 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page D", customer: 100 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 },
          { name: "Page A", customer: 0 }
        ]),
        (t.increamentRevenueData = [
          { name: "Page A", revenue: 200 },
          { name: "Page B", revenue: 1200 },
          { name: "Page C", revenue: 600 },
          { name: "Page D", revenue: 1600 },
          { name: "Page D", revenue: 1e3 },
          { name: "Page H", revenue: 2260 },
          { name: "Page K", revenue: 800 }
        ]),
        (t.lineData = [
          { name: "Page A", price: 200 },
          { name: "Page B", price: 1100 },
          { name: "Page C", price: 800 },
          { name: "Page D", price: 1700 },
          { name: "Page D", price: 600 },
          { name: "Page D", price: 1800 },
          { name: "Page D", price: 600 }
        ]),
        (t.lineData2 = [
          { name: "Page A", traffic: 200 },
          { name: "Page B", traffic: 1100 },
          { name: "Page C", traffic: 800 },
          { name: "Page D", traffic: 1700 },
          { name: "Page D", traffic: 600 },
          { name: "Page D", traffic: 1800 },
          { name: "Page D", traffic: 600 }
        ]),
        (t.AnyNear = {
          data: {
            analytics: [
              {
                name: "GEOFENCE_COUNTS",
                type: "SCALAR",
                rows: 1,
                response: [{ count: 102 }],
                total: 102
              },
              {
                name: "EVENT_ENTRY_COUNTS",
                type: "SCALAR",
                rows: 1,
                response: [{ count: 780 }],
                total: 780
              },
              {
                name: "EVENT_EXIT_COUNTS",
                type: "SCALAR",
                rows: 1,
                response: [{ count: 208 }],
                total: 208
              },
              {
                name: "EVENT_DWELL_COUNTS",
                type: "SCALAR",
                rows: 1,
                response: [{ count: 2 }],
                total: 2
              },
              {
                name: "CUSTOMER_COUNTS",
                type: "SCALAR",
                rows: 1,
                response: [{ count: "2", Month: "August" }],
                total: 2
              },
              {
                name: "POPULAR_PLACES",
                type: "SCALAR",
                rows: 10,
                response: [
                  { geofence_name: "Walkin Office", count: 511 },
                  { geofence_name: "Karthikeya PG", count: 208 },
                  {
                    geofence_name: "opp. Brand Factory, Cross Roads",
                    count: 52
                  },
                  {
                    geofence_name: "Outside restaurant, Cross Roads",
                    count: 51
                  },
                  { geofence_name: "Sagar Fast Food", count: 46 },
                  {
                    geofence_name: "First WalkIn Technologies Pvt Ltd",
                    count: 37
                  },
                  { geofence_name: "Rahul's Home", count: 24 },
                  { geofence_name: "Anvesh Home", count: 20 },
                  { geofence_name: "AyyapaSwamy temple", count: 19 },
                  { geofence_name: "Harish's Home", count: 18 }
                ],
                total: 986
              },
              {
                name: "MOST_VISITED_PLACES",
                type: "SEQUENCE",
                rows: 10,
                response: [
                  {
                    geofence_name: "Walkin Office",
                    entry_count: 384,
                    exit_count: 45,
                    dwell_count: 82
                  },
                  {
                    geofence_name: "Karthikeya PG",
                    entry_count: 185,
                    exit_count: 3,
                    dwell_count: 20
                  },
                  {
                    geofence_name: "opp. Brand Factory, Cross Roads",
                    entry_count: 27,
                    exit_count: 25,
                    dwell_count: 0
                  },
                  {
                    geofence_name: "Outside restaurant, Cross Roads",
                    entry_count: 24,
                    exit_count: 27,
                    dwell_count: 0
                  },
                  {
                    geofence_name: "First WalkIn Technologies Pvt Ltd",
                    entry_count: 20,
                    exit_count: 4,
                    dwell_count: 13
                  },
                  {
                    geofence_name: "Sagar Fast Food",
                    entry_count: 18,
                    exit_count: 17,
                    dwell_count: 11
                  },
                  {
                    geofence_name: "Anvesh Home",
                    entry_count: 13,
                    exit_count: 0,
                    dwell_count: 7
                  },
                  {
                    geofence_name: "Rahul's Home",
                    entry_count: 10,
                    exit_count: 8,
                    dwell_count: 6
                  },
                  {
                    geofence_name: "AyyapaSwamy temple",
                    entry_count: 10,
                    exit_count: 8,
                    dwell_count: 1
                  },
                  {
                    geofence_name: "Harish's Home",
                    entry_count: 9,
                    exit_count: 9,
                    dwell_count: 0
                  }
                ],
                total: 10
              }
            ]
          },
          extensions: {
            customExtenstion: {
              startTimestamp: "2019-08-26T09:36:14.952Z",
              executionStartTimestamp: "2019-08-26T09:36:14.956Z",
              responseTimestamp: "2019-08-26T09:36:15.838Z",
              durationInMillis: 886
            }
          }
        });
    },
    872: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = l(a(505));
      t.default = function(e) {
        for (
          var t = [],
            a = [
              "#FF0F00",
              "#F8FF01",
              "#04D215",
              "#0D52D1",
              "#CD0D74",
              "#0D8ECF",
              "#8A0CCF",
              "#B0DE09",
              "#DDDDDD",
              "#333333"
            ],
            r = 0;
          r < e.data.length && r < 5;
          r++
        )
          t.push(n({ color: a[r] }, e.data[r]));
        var l = {
          theme: "light",
          type: "serial",
          startDuration: 2,
          dataProvider: t,
          valueAxes: [{ position: "left", axisAlpha: 0, gridAlpha: 0 }],
          graphs: [
            {
              balloonText: "[[category]]: <b>[[value]]</b>",
              colorField: "color",
              fillAlphas: 0.85,
              lineAlpha: 0.1,
              type: "column",
              topRadius: 1,
              valueField: "count"
            }
          ],
          depth3D: 20,
          angle: 30,
          chartCursor: {
            categoryBalloonEnabled: !1,
            cursorAlpha: 0,
            zoomable: !1
          },
          categoryField: "geofence_name",
          categoryAxis: {
            gridPosition: "start",
            axisAlpha: 0,
            gridAlpha: 0,
            labelFunction: function(e, t, a) {
              return e.length > 15 ? e.substring(0, 15) + "..." : e;
            }
          },
          export: { enabled: !0 },
          rotate: !0
        };
        return o.createElement(
          "div",
          { className: "App" },
          o.createElement(i.default.React, {
            style: { width: "100%", height: "320px" },
            options: l
          })
        );
      };
    },
    873: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this.props.place,
                t = e.geofence_name,
                a = (e.hotspots, e.entry_count),
                n = e.exit_count,
                r = e.dwell_count;
              return l.createElement(
                o.Row,
                null,
                l.createElement(
                  o.Col,
                  {
                    xs: 24,
                    sm: 12,
                    style: {
                      color: "black",
                      wordBreak: "break-word",
                      marginBottom: 8
                    }
                  },
                  t
                ),
                l.createElement(
                  o.Col,
                  { xs: 8, sm: 4 },
                  "Entry: ",
                  l.createElement("b", null, a)
                ),
                l.createElement(
                  o.Col,
                  { xs: 8, sm: 4 },
                  "Exit: ",
                  l.createElement("b", null, n)
                ),
                l.createElement(
                  o.Col,
                  { xs: 8, sm: 4 },
                  "Dwell: ",
                  l.createElement("b", null, r)
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = i;
    },
    874: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(a(0)),
        o = a(16),
        i = r(a(875)),
        s = r(a(878));
      t.default = function(e) {
        var t = e.match;
        return l.createElement(
          o.Switch,
          null,
          l.createElement(o.Route, {
            exact: !0,
            path: t.url,
            component: i.default
          }),
          l.createElement(o.Route, {
            path: t.url + "/createplace",
            component: s.default
          })
        );
      };
    },
    875: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = a(16),
        c = a(27);
      a(475);
      var u = a(116),
        p = l(a(877)),
        d = a(102),
        f = i.Input.Search,
        m = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.getPlacesData = function(e, t, n, r) {
                a.setState({ spin: !0 });
                var l = { limit: t, offset: e };
                n && "" !== n.trim() && (l.search = n.trim());
                var o = "" + (r || "cache-first");
                u.nearXClient
                  .query({
                    query: d.GET_ALL_AND_SEARCH_PLACES,
                    variables: l,
                    fetchPolicy: o
                  })
                  .then(function(e) {
                    var t = [];
                    e.data.Places.places.map(function(e) {
                      t.push({
                        id: e.id,
                        name: e.geofenceName,
                        address: e.address,
                        center: e.location,
                        radius: e.radii,
                        hotspots: e.totalHotspot
                      });
                    }),
                      a.setState({
                        places: t,
                        spin: !1,
                        totalPlaces: e.data.Places.pageInfo.total
                      });
                  })
                  .catch(function(e) {
                    a.setState({ spin: !1 }),
                      i.message.error("ERROR"),
                      console.log("Failed to get Places Details" + e);
                  });
              }),
              (a.disablePlace = function(e) {
                u.nearXClient
                  .mutate({ mutation: d.DISABLE_PLACES, variables: { id: e } })
                  .then(function(e) {
                    console.log(e),
                      a.getPlacesData(
                        7 * a.state.offset,
                        7,
                        "",
                        "network-only"
                      );
                  })
                  .catch(function(e) {
                    a.setState({ spin: !1 }),
                      i.message.error("ERROR"),
                      console.log("Failed to get Places Details" + e);
                  });
              }),
              (a.pagination = function(e, t) {
                a.getPlacesData((e - 1) * t, t, a.state.search, "cache-first"),
                  a.setState({ offset: e - 1 });
              }),
              (a.handleSearchSubmit = function() {
                a.getPlacesData(0, 7, a.state.search);
              }),
              (a.handleChange = function(e) {
                var t,
                  n = a.state.errors;
                "" != e.target.value.trim() && (n[e.target.name] = ""),
                  a.setState(
                    (((t = {})[e.target.name] = e.target.value),
                    (t.errors = n),
                    t)
                  );
              }),
              (a.handleSearchChange = function(e) {
                var t;
                "" == e.target.value.trim() && a.getPlacesData(0, 7, ""),
                  a.setState((((t = {})[e.target.name] = e.target.value), t));
              }),
              (a.state = {
                places: [],
                offset: 0,
                totalPlaces: 0,
                search: "",
                errors: {},
                spin: !1
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              this.getPlacesData(0, 7, "", "network-only");
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state.places;
              return (
                console.log(t),
                o.createElement(
                  "div",
                  { style: { margin: 0 } },
                  o.createElement(
                    c.Auxiliary,
                    null,
                    o.createElement(
                      i.Row,
                      { className: "headerRow1" },
                      o.createElement(
                        "div",
                        { style: { width: "100%" } },
                        o.createElement(
                          "span",
                          { style: { fontSize: 25 } },
                          "Places"
                        ),
                        o.createElement(
                          "div",
                          { style: { float: "right", flexFlow: "right" } },
                          o.createElement(
                            s.Link,
                            { to: "/nearx/places/createplace" },
                            o.createElement(
                              i.Button,
                              {
                                style: { margin: 0 },
                                className: "buttonPrimary"
                              },
                              "Create New"
                            )
                          )
                        )
                      )
                    ),
                    o.createElement("br", null),
                    o.createElement(
                      i.Row,
                      { style: { margin: "5px 0px" } },
                      o.createElement(
                        i.Col,
                        { lg: 5, md: 6, sm: 8, xs: 15 },
                        o.createElement(f, {
                          placeholder: "Search Places",
                          value: this.state.search,
                          onSearch: this.handleSearchSubmit,
                          onPressEnter: this.handleSearchSubmit,
                          name: "search",
                          onChange: function(t) {
                            return e.handleSearchChange(t);
                          }
                        }),
                        o.createElement(
                          "span",
                          { style: { color: "Red" } },
                          this.state.errors.search
                        )
                      )
                    ),
                    this.state.spin
                      ? o.createElement(
                          "div",
                          null,
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          o.createElement(
                            "div",
                            { className: "divCenter" },
                            o.createElement(i.Spin, { size: "large" })
                          ),
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null)
                        )
                      : t.length
                      ? o.createElement(
                          "div",
                          null,
                          o.createElement(
                            i.Row,
                            { className: "placeTableHeaders" },
                            o.createElement(i.Col, { span: 5 }, "Name"),
                            o.createElement(i.Col, { span: 6 }, "Address"),
                            o.createElement(i.Col, { span: 5 }, "Radius"),
                            o.createElement(i.Col, { span: 2 }, "Hotspots"),
                            o.createElement(i.Col, { span: 4 }, "Location"),
                            o.createElement(i.Col, { span: 2 })
                          ),
                          t.map(function(t, a) {
                            return o.createElement(p.default, {
                              history: e.props.history,
                              key: a,
                              disablePlace: e.disablePlace,
                              data: t
                            });
                          })
                        )
                      : o.createElement(
                          "div",
                          { style: { margin: 80, fontSize: 25 } },
                          o.createElement(
                            "div",
                            { className: "divCenter" },
                            o.createElement("div", null, "No Places Found")
                          ),
                          o.createElement(
                            "div",
                            { className: "divCenter" },
                            o.createElement(
                              s.Link,
                              { to: "/nearx/places/createplace" },
                              o.createElement(
                                i.Button,
                                {
                                  style: { margin: 22, fontSize: 18 },
                                  className: "buttonPrimary"
                                },
                                "Create New Place"
                              )
                            )
                          )
                        ),
                    o.createElement(
                      "div",
                      { style: { margin: 20 }, className: "divCenter" },
                      o.createElement(i.Pagination, {
                        defaultCurrent: 1,
                        onChange: this.pagination,
                        pageSize: 7,
                        total: this.state.totalPlaces
                      })
                    )
                  )
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = m;
    },
    877: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3),
        i = ["Edit", "Delete"],
        s = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.menus = function() {
                return l.createElement(
                  o.Menu,
                  {
                    onClick: function(e) {
                      "Edit" === e.key
                        ? (sessionStorage.setItem(
                            "placeId",
                            JSON.stringify(t.props.data.id)
                          ),
                          t.props.history.push(
                            "/nearx/places/createplace/manually"
                          ))
                        : "Delete" === e.key &&
                          t.props.disablePlace(t.props.data.id);
                    }
                  },
                  " ",
                  i.map(function(e) {
                    return l.createElement(
                      o.Menu.Item,
                      { key: e },
                      "  ",
                      e,
                      "  "
                    );
                  })
                );
              }),
              t
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this.props.data;
              return l.createElement(
                o.Card,
                { className: "placesListCard" },
                l.createElement(
                  o.Row,
                  null,
                  l.createElement(
                    o.Col,
                    { span: 5 },
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement(
                        "div",
                        null,
                        l.createElement(
                          o.Row,
                          null,
                          l.createElement(
                            "span",
                            { style: { color: "black", marginBottom: 5 } },
                            e.name
                          )
                        ),
                        l.createElement(
                          o.Row,
                          null,
                          l.createElement(
                            "span",
                            { style: { color: "#999999" } },
                            e.code
                          )
                        )
                      )
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 6 },
                    " ",
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement("span", null, e.address)
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 5 },
                    l.createElement(
                      "div",
                      { style: {}, className: "divCenterVertical" },
                      "  ",
                      l.createElement(
                        "span",
                        null,
                        "Radius:  ",
                        e.radius
                          ? l.createElement(
                              "span",
                              { style: { wordBreak: "break-word" } },
                              e.radius[0]
                                ? l.createElement(
                                    "span",
                                    null,
                                    e.radius[0],
                                    "m"
                                  )
                                : "",
                              e.radius[1]
                                ? l.createElement(
                                    "span",
                                    null,
                                    " | ",
                                    e.radius[1],
                                    "m"
                                  )
                                : "",
                              e.radius[2]
                                ? l.createElement(
                                    "span",
                                    null,
                                    " | ",
                                    e.radius[2],
                                    "m"
                                  )
                                : "",
                              " "
                            )
                          : ""
                      )
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 2 },
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement(
                        "span",
                        { className: "hotspot" },
                        e.hotspots < 10 ? "0" + e.hotspots : e.hotspots
                      )
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { className: "placeCardLocation", span: 4 },
                    l.createElement(
                      o.Row,
                      null,
                      "Latitude:-",
                      " ",
                      l.createElement(
                        "span",
                        { style: { marginBottom: 5 } },
                        e.center.lat
                          .toString()
                          .slice(0, e.center.lat.toString().indexOf(".") + 8)
                      )
                    ),
                    l.createElement(
                      o.Row,
                      null,
                      "Longitude:-",
                      " ",
                      l.createElement(
                        "span",
                        null,
                        e.center.lng
                          .toString()
                          .slice(0, e.center.lng.toString().indexOf(".") + 8)
                      )
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 2 },
                    l.createElement(
                      "div",
                      { className: "gx-module-contact-right divCenter" },
                      l.createElement(
                        o.Dropdown,
                        {
                          overlay: this.menus(),
                          placement: "bottomRight",
                          trigger: ["click"]
                        },
                        l.createElement("i", {
                          className: "gx-icon-btn icon icon-ellipse-v"
                        })
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = s;
    },
    878: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__assign) ||
          function() {
            return (n =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(16),
        s = l(a(879));
      t.default = function(e) {
        var t = e.match;
        return o.createElement(
          i.Switch,
          null,
          o.createElement(i.Route, {
            exact: !0,
            path: t.url,
            render: function(e) {
              return o.createElement(s.default, n({}, e, { tab: "1" }));
            }
          }),
          o.createElement(i.Route, {
            exact: !0,
            path: t.url + "/manually",
            render: function(e) {
              return o.createElement(s.default, n({}, e, { tab: "2" }));
            }
          })
        );
      };
    },
    879: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = a(27),
        c = l(a(880)),
        u = l(a(886)),
        p = a(30),
        d = i.Tabs.TabPane,
        f = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.onTabChange = function(e) {
                a.setState({ tab: e });
              }),
              (a.handleChange = function(e) {
                var t = e.fileList.slice();
                (t = (t = t.slice(-1)).map(function(e) {
                  return e.response && (e.url = e.response.url), e;
                })),
                  a.setState({ fileList: t });
              }),
              (a.showModal = function() {
                return a.setState({ visible: !0 });
              }),
              (a.handleOk = function() {
                a.setState({ loading: !0 }),
                  setTimeout(function() {
                    a.setState({ loading: !1, visible: !1 });
                  }, 3e3);
              }),
              (a.handleCancel = function() {
                a.setState({ visible: !1 });
              }),
              (a.state = {
                tab: "1",
                visible: !1,
                visible1: !1,
                fileList: [],
                googleAPIkey: "",
                loading: !1,
                errors: {}
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              this.setState({ tab: this.props.tab });
            }),
            (t.prototype.render = function() {
              var e = this,
                t = {
                  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                  onChange: this.handleChange,
                  multiple: !1
                };
              return o.createElement(
                "div",
                { className: "createPlace" },
                o.createElement(
                  s.Widget,
                  {
                    title: o.createElement(
                      "p",
                      { style: { fontSize: 23 } },
                      "Create Places"
                    ),
                    styleName: "gx-card-tabs headerCard"
                  },
                  o.createElement(
                    i.Tabs,
                    {
                      defaultActiveKey: this.props.tab,
                      activeKey: this.state.tab,
                      onChange: function(t) {
                        return e.onTabChange(t);
                      }
                    },
                    o.createElement(
                      d,
                      { tab: "Search & Create", key: "1" },
                      o.createElement(c.default, {
                        history: this.props.history
                      })
                    ),
                    o.createElement(
                      d,
                      { tab: "Create Custom", key: "2" },
                      o.createElement(u.default, {
                        history: this.props.history
                      })
                    )
                  )
                ),
                o.createElement(p.FileUploader, {
                  visible: this.state.visible,
                  handleOk: this.handleOk,
                  handleCancel: this.handleCancel,
                  fileList: this.state.fileList,
                  uploadProps: t
                })
              );
            }),
            t
          );
        })(o.Component);
      t.default = f;
    },
    880: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = l(a(881)),
        c = a(16),
        u = a(102),
        p = l(a(883)),
        d = a(116),
        f = l(a(506)),
        m = l(a(345));
      a(473);
      var h = a(102),
        g = a(346),
        y =
          m.default && navigator.geolocation
            ? navigator.geolocation
            : {
                getCurrentPosition: function(e, t) {
                  t("Your browser doesn't support geolocation.");
                }
              },
        _ = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.myloc = function() {
                y.getCurrentPosition(function(e) {
                  var t = a.state.center;
                  (t = { lat: e.coords.latitude, lng: e.coords.longitude }),
                    a.setState({ center: t, mark: t, markLoc: !0 });
                });
              }),
              (a.selAll = function(e) {
                var t = a.state,
                  n = t.places,
                  r = t.places1,
                  l = t.selectAll;
                r.map(function(e) {
                  e.selected = !l;
                }),
                  (n = l ? [] : r),
                  a.setState({
                    places: n,
                    places1: r,
                    selectAll: !a.state.selectAll
                  });
              }),
              (a.handleSubmit = function(e) {
                var t = a.state.googleAPIkey,
                  n = {};
                if (
                  ("" == a.state.search.trim() &&
                    (n.search = "* this field is mandatory"),
                  null !== a.state.searchRadius &&
                    NaN !== a.state.searchRadius &&
                    (a.state.searchRadius < 100 &&
                      (n.searchRadius = "Radius should be greater than 100"),
                    (null !== a.state.mark.lat && null !== a.state.mark.lng) ||
                      (n.searchRadius =
                        "Please fill Latitude and Longitude values first")),
                  0 !== Object.keys(n).length)
                )
                  a.setState({ errors: n });
                else {
                  var r = "https://maps.googleapis.com/maps/api/place/";
                  null === a.state.mark.lat || null === a.state.mark.lng
                    ? (r +=
                        "textsearch/json?key=" + t + "&query=" + a.state.search)
                    : ((r +=
                        "nearbysearch/json?location=" +
                        a.state.mark.lat +
                        "," +
                        a.state.mark.lng +
                        "&key=" +
                        t),
                      null !== a.state.searchRadius &&
                      a.state.searchRadius >= 100
                        ? (r += "&radius=" + a.state.searchRadius)
                        : (r += "&rankby=distance"),
                      (r += "&keyword=" + a.state.search)),
                    a.state.type && (r += "&type=" + a.state.type);
                  var l = i.message.loading("Action in progress..", 0);
                  f.default
                    .create({
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*"
                      }
                    })
                    .get("https://cors-anywhere.herokuapp.com/" + r)
                    .then(function(e) {
                      setTimeout(l, 0),
                        e.data.results.length
                          ? (a.formatePlaces(e.data.results),
                            i.message.success(
                              "success: " +
                                e.data.results.length +
                                " Places Found"
                            ))
                          : i.message.warning(
                              e.data.error_message
                                ? e.data.error_message
                                : "No Places Found"
                            );
                    })
                    .catch(function(e) {
                      setTimeout(l, 0),
                        i.message.error("ERROR"),
                        console.log(e);
                    });
                }
              }),
              (a.formatePlaces = function(e) {
                var t = [];
                e.map(function(e) {
                  t.push({
                    image: e.icon,
                    placeName: e.name,
                    address: e.vicinity ? e.vicinity : e.formatted_address,
                    sroreId: e.id,
                    selected: !1,
                    radius: a.state.defaultRadius,
                    center: e.geometry.location,
                    errors: {}
                  });
                }),
                  a.setState({
                    places: [],
                    selectAll: !1,
                    places1: t,
                    center: t[0].center
                  });
              }),
              (a.onPlaceSelect = function(e) {
                var t = a.state,
                  n = t.places1,
                  r = t.selectAll;
                n.filter(function(t) {
                  t.sroreId === e && (t.selected = !t.selected);
                });
                var l = n.filter(function(e) {
                  return e.selected;
                });
                (r = l.length == n.length),
                  a.setState({ places: l, places1: n, selectAll: r });
              }),
              (a.createPlaces = function() {
                a.setState({ loading: !0 }), console.log("Create Places");
                var e = [];
                a.state.places.map(function(t) {
                  e.push({
                    geofenceName: t.placeName,
                    address: t.address,
                    location: t.center,
                    radii: t.radius
                  });
                }),
                  d.nearXClient
                    .mutate({
                      mutation: u.CREATE_GROUP_OF_PLACES,
                      variables: { groupName: a.state.search, places: e }
                    })
                    .then(function(e) {
                      i.message.success("success"),
                        a.props.history.push("/nearx/places"),
                        a.setState({ loading: !1 });
                    })
                    .catch(function(e) {
                      a.setState({ loading: !1 }),
                        console.log("Failed to stote Places Details" + e),
                        i.message.warning("Failed to stote Places Details");
                    });
              }),
              (a.handleOnChange = function(e) {
                var t;
                "" != e.target.value.trim() &&
                  (a.state.errors[e.target.name] = ""),
                  a.setState((((t = {})[e.target.name] = e.target.value), t));
              }),
              (a.changeSearchRadius = function(e) {
                var t = e.target.value,
                  n = {};
                t < 100
                  ? (n.searchRadius = "Radius should be greater than 100")
                  : (null != a.state.mark.lat && null != a.state.mark.lng) ||
                    (n.searchRadius =
                      "Please fill Latitude and Longitude values first"),
                  (0 != t && null != t && NaN != t) || (n.searchRadius = ""),
                  a.setState({
                    searchRadius: parseInt(e.target.value),
                    errors: n
                  });
              }),
              (a.setlocationDetails = function(e, t) {
                var n = a.state.center;
                (n = { lat: e, lng: t }),
                  a.setState({ center: n, mark: n, getLoc: !1, markLoc: !0 });
              }),
              (a.getloc = function(e) {
                return a.setState({ getLoc: !0 });
              }),
              (a.moreOpt = function(e) {
                if (a.state.moreOptions) {
                  a.setState({
                    searchRadius: null,
                    type: null,
                    mark: { lat: null, lng: null },
                    markLoc: !1
                  });
                }
                a.setState({ moreOptions: !a.state.moreOptions });
              }),
              (a.handleCenterChange = function(e, t) {
                var n = e.target.value ? parseFloat(e.target.value) : null,
                  r = a.state,
                  l = r.center,
                  o = r.errors,
                  i = l.lng ? parseFloat(l.lng) : null,
                  s = l.lat ? parseFloat(l.lat) : null,
                  c = !1;
                "lat" == t ? (s = n) : (i = n),
                  a.state.searchRadius > 100 &&
                    (o.searchRadius =
                      null !== s && null !== i
                        ? ""
                        : "Please fill Latitude and Longitude values first"),
                  null != s && (o.latitude = ""),
                  null != i && (o.longitude = ""),
                  (l = { lat: s, lng: i }),
                  null != s && null != i && (c = !0),
                  a.setState({ center: l, mark: l, markLoc: c, errors: o });
              }),
              (a.handleOnTypeChange = function(e) {
                a.setState({ type: e });
              }),
              (a.handleCancel = function() {
                a.setState({ visible: !1 });
              }),
              (a.googleKeyChange = function(e) {
                var t = a.state.errors;
                (t.googleAPIkey = ""),
                  a.setState({ googleAPIkey: e.target.value, errors: t });
              }),
              (a.googleKeySubmit = function() {
                var e = a.state.errors;
                a.setState({ loading1: !0 });
                var t = f.default.create({
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*"
                    }
                  }),
                  n =
                    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=bengaluru&key=" +
                    a.state.googleAPIkey;
                t.get(n)
                  .then(function(t) {
                    if (
                      "The provided API key is invalid." ===
                      t.data.error_message
                    )
                      (e.googleAPIkey = "Invalid API key"),
                        a.setState({ loading1: !1, errors: e }),
                        i.message.warning("Invalid API key");
                    else {
                      a.setState({ loading: !0 });
                      var n = [
                        {
                          name: g.GOOGLE_API_KEY,
                          key: a.state.googleAPIkey,
                          type: g.TYPE
                        }
                      ];
                      d.nearXClient
                        .mutate({
                          mutation: h.SET_CONFIGURATION,
                          variables: { input: n }
                        })
                        .then(function(e) {
                          i.message.success("success"),
                            a.setState({ loading1: !1, visible: !1 });
                        })
                        .catch(function(e) {
                          a.setState({ loading1: !1 }),
                            i.message.warning("ERROR in storing");
                        });
                    }
                  })
                  .catch(function(e) {
                    i.message.error("ERROR"), console.log(e);
                  });
              }),
              (a.state = {
                places: [],
                places1: [],
                center: { lat: null, lng: null },
                mark: { lat: null, lng: null },
                noOfPlaces: 1,
                errors: {},
                markLoc: !1,
                search: "",
                searchRadius: null,
                getLoc: !1,
                moreOptions: !1,
                selectAll: !1,
                loading: !1,
                visible: !1,
                loading1: !1,
                defaultRadius: [g.RADIUS_1_MIN]
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              var e = this,
                t = "",
                a = [g.RADIUS_1_MIN];
              d.nearXClient
                .query({
                  query: h.GET_CONFIGURATION,
                  variables: {},
                  fetchPolicy: "network-only"
                })
                .then(function(n) {
                  console.log("Results", n.data.getConfiguration),
                    n.data.getConfiguration.map(function(e) {
                      e.name === g.GOOGLE_API_KEY && (t = e.key),
                        e.name === g.RADIUS_1 && (a[0] = parseInt(e.key)),
                        e.name === g.RADIUS_2 && (a[1] = parseInt(e.key)),
                        e.name === g.RADIUS_3 && (a[2] = parseInt(e.key));
                    }),
                    "" !== t
                      ? e.setState({ googleAPIkey: t, defaultRadius: a })
                      : e.setState({ visible: !0 });
                })
                .catch(function(e) {
                  return console.log("Failed to get Places Details" + e);
                });
            }),
            (t.prototype.render = function() {
              var e = this;
              return o.createElement(
                "div",
                null,
                o.createElement(
                  i.Row,
                  { style: { float: "none" }, gutter: 1 },
                  o.createElement(
                    i.Col,
                    { xs: 24, sm: 14, span: 14 },
                    o.createElement(s.default, {
                      formData: this.state,
                      handleSubmit: this.handleSubmit,
                      moreOpt: this.moreOpt,
                      selAll: this.selAll,
                      handleOnChange: this.handleOnChange,
                      onPlaceSelect: this.onPlaceSelect
                    }),
                    this.state.places1.length
                      ? o.createElement(
                          i.Affix,
                          {
                            style: {
                              position: "absolute",
                              width: "100%",
                              bottom: 0
                            },
                            offsetBottom: 10
                          },
                          o.createElement(
                            i.Card,
                            { className: "createPlaceCard" },
                            this.state.places.length
                              ? o.createElement(
                                  i.Row,
                                  null,
                                  o.createElement(
                                    i.Col,
                                    { span: 16 },
                                    o.createElement(
                                      "div",
                                      { className: "divCenterVertical" },
                                      " ",
                                      o.createElement(
                                        "span",
                                        null,
                                        "Create places with selected items"
                                      ),
                                      " "
                                    )
                                  ),
                                  o.createElement(
                                    i.Col,
                                    { span: 8 },
                                    " ",
                                    o.createElement(
                                      i.Button,
                                      {
                                        onClick: function() {
                                          return e.createPlaces();
                                        },
                                        style: {
                                          float: "right",
                                          marginBottom: 0
                                        },
                                        loading: this.state.loading,
                                        className: "buttonPrimary"
                                      },
                                      "CREATE"
                                    )
                                  )
                                )
                              : o.createElement(
                                  i.Row,
                                  null,
                                  o.createElement(
                                    i.Col,
                                    { span: 16 },
                                    o.createElement(
                                      "div",
                                      { className: "divCenterVertical" },
                                      " ",
                                      o.createElement(
                                        "span",
                                        null,
                                        "Select some places to create"
                                      ),
                                      " "
                                    )
                                  ),
                                  o.createElement(
                                    i.Col,
                                    { span: 8 },
                                    " ",
                                    o.createElement(
                                      c.Link,
                                      {
                                        to: "/nearx/places/createplace/manually"
                                      },
                                      o.createElement(
                                        i.Button,
                                        {
                                          disabled: !0,
                                          className: "buttonPrimary",
                                          style: {
                                            float: "right",
                                            marginBottom: 0
                                          }
                                        },
                                        "CREATE"
                                      )
                                    )
                                  )
                                )
                          )
                        )
                      : o.createElement(
                          "div",
                          { className: "" },
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          o.createElement(
                            "div",
                            { style: { textAlign: "center" } },
                            o.createElement(i.Icon, {
                              type: "environment",
                              style: {
                                color: "#CACACA",
                                fontSize: 150,
                                marginBottom: 20
                              },
                              theme: "filled"
                            }),
                            o.createElement(
                              "p",
                              null,
                              " Search for restaurants, malls... etc to create place "
                            )
                          )
                        ),
                    o.createElement("div", null)
                  ),
                  o.createElement(
                    i.Col,
                    {
                      xs: 24,
                      sm: 10,
                      style: {
                        height: "100hv",
                        backgroundColor: "rgb(234, 234, 234)"
                      }
                    },
                    o.createElement(p.default, {
                      getloc: this.getloc,
                      data: this.state,
                      handleCenterChange: this.handleCenterChange,
                      changeSearchRadius: this.changeSearchRadius,
                      myloc: this.myloc,
                      setlocationDetails: this.setlocationDetails,
                      handleOnTypeChange: this.handleOnTypeChange
                    }),
                    this.state.moreOptions
                      ? ""
                      : o.createElement(
                          "div",
                          null,
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " ",
                          o.createElement("br", null),
                          " "
                        )
                  )
                ),
                o.createElement(
                  i.Modal,
                  {
                    width: "500px",
                    key: "model1",
                    visible: this.state.visible,
                    onOk: this.googleKeySubmit,
                    onCancel: this.handleCancel,
                    title: "Requires Google API key",
                    footer: [
                      o.createElement(
                        i.Button,
                        {
                          key: "submit",
                          type: "primary",
                          loading: this.state.loading1,
                          onClick: this.googleKeySubmit
                        },
                        "Submit"
                      )
                    ]
                  },
                  o.createElement(
                    "p",
                    null,
                    "Submit your Google API key to search places"
                  ),
                  o.createElement(
                    "div",
                    null,
                    o.createElement(i.Input, {
                      placeholder: "Google API key",
                      value: this.state.googleAPIkey,
                      size: "large",
                      name: "googleAPIkey",
                      onChange: function(t) {
                        return e.googleKeyChange(t);
                      }
                    }),
                    o.createElement(
                      "span",
                      { style: { color: "Red" } },
                      this.state.errors.googleAPIkey
                    )
                  ),
                  o.createElement(
                    "div",
                    { style: { marginRight: 20, marginTop: 15 } },
                    o.createElement(
                      "div",
                      { style: { float: "right" } },
                      o.createElement(
                        "div",
                        {
                          style: { marginBottom: 3, fontSize: 15 },
                          className: "gx-text-primary gx-pointer"
                        },
                        o.createElement(
                          "a",
                          {
                            target: "_blank",
                            href:
                              "https://developers.google.com/maps/documentation/javascript/get-api-key"
                          },
                          "Get Google API key"
                        )
                      )
                    )
                  ),
                  o.createElement("br", null)
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = _;
    },
    881: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = l(a(882)),
        c = i.Input.Search,
        u = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.formData;
              return o.createElement(
                "div",
                { className: "gx-card", style: { marginBottom: 70 } },
                o.createElement(
                  "div",
                  { className: "gx-card-body" },
                  o.createElement(
                    i.Row,
                    null,
                    o.createElement(
                      i.Col,
                      { span: 20 },
                      o.createElement(c, {
                        required: !0,
                        placeholder: "Search Places From Google",
                        value: t.search,
                        size: "large",
                        onSearch: this.props.handleSubmit,
                        onPressEnter: this.props.handleSubmit,
                        name: "search",
                        onChange: function(t) {
                          return e.props.handleOnChange(t);
                        }
                      }),
                      o.createElement(
                        "span",
                        { style: { color: "Red" } },
                        t.errors.search
                      )
                    ),
                    o.createElement(
                      i.Col,
                      { span: 4 },
                      o.createElement(
                        "div",
                        { className: "divCenter" },
                        " ",
                        o.createElement(
                          "p",
                          {
                            onClick: this.props.moreOpt,
                            className: "gx-text-primary gx-pointer"
                          },
                          t.moreOptions ? "Less Options" : "More Options"
                        )
                      )
                    )
                  ),
                  t.places1.length
                    ? o.createElement(
                        "div",
                        null,
                        o.createElement(
                          i.Row,
                          null,
                          o.createElement(
                            "div",
                            {
                              style: {
                                width: "100%",
                                margin: "10px 40px -15px"
                              }
                            },
                            o.createElement(
                              "p",
                              {
                                onClick: this.props.selAll,
                                className: "gx-text-primary gx-pointer",
                                style: { float: "right", fontSize: 16 }
                              },
                              " ",
                              t.selectAll ? "Remove All" : "Select All",
                              " "
                            )
                          )
                        ),
                        t.places1.map(function(t, a) {
                          return o.createElement(s.default, {
                            key: a,
                            onPlaceSelect: e.props.onPlaceSelect,
                            place: t
                          });
                        })
                      )
                    : ""
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = u;
    },
    882: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.place,
                a = t.placeName,
                n = t.sroreId,
                r = t.address,
                i = t.image,
                s = t.selected;
              return l.createElement(
                "div",
                null,
                l.createElement(
                  "div",
                  { className: "gx-contact-item" },
                  l.createElement(
                    "div",
                    { className: "gx-module-list-icon" },
                    l.createElement(
                      "div",
                      { className: "gx-ml-2 gx-d-none gx-d-sm-flex" },
                      null === i || "" === i
                        ? l.createElement(
                            o.Avatar,
                            { size: "large" },
                            " ",
                            a.charAt(0).toUpperCase(),
                            "  "
                          )
                        : l.createElement(o.Avatar, {
                            size: "large",
                            alt: a,
                            src: i
                          })
                    )
                  ),
                  l.createElement(
                    "div",
                    {
                      style: { maxWidth: "calc(100% - 70px)" },
                      className: "gx-module-list-info gx-contact-list-info"
                    },
                    l.createElement(
                      "div",
                      { className: "gx-module-contact-content" },
                      l.createElement(
                        "p",
                        { className: "gx-mb-1" },
                        "  ",
                        l.createElement(
                          "span",
                          { className: "gx-contact-name" },
                          " ",
                          a
                        ),
                        "  "
                      ),
                      l.createElement(
                        "div",
                        { className: "gx-text-muted" },
                        l.createElement(
                          "span",
                          { className: "gx-email gx-d-inline-block gx-mr-2" },
                          "  ",
                          r,
                          " "
                        )
                      )
                    ),
                    l.createElement(
                      "div",
                      { className: "gx-module-contact-right" },
                      l.createElement(o.Checkbox, {
                        className: "gx-icon-btn",
                        checked: s,
                        value: "checkedF",
                        onClick: function() {
                          e.props.onPlaceSelect(n);
                        }
                      })
                    )
                  )
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = i;
    },
    883: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = a(884),
        c = l(a(352)),
        u = i.Select.Option;
      var p = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          n(t, e),
          (t.prototype.render = function() {
            var e = this,
              t = this.props.data,
              a = s.placeTypesArr.map(function(e, t) {
                return o.default.createElement(
                  u,
                  { key: t, value: e.replace(" ", "_").toLowerCase() },
                  e
                );
              });
            return o.default.createElement(
              "div",
              { style: { marginTop: 30 } },
              t.moreOptions
                ? o.default.createElement(
                    "div",
                    null,
                    o.default.createElement(
                      "p",
                      null,
                      o.default.createElement(
                        "span",
                        {
                          onClick: function() {
                            return e.props.getloc();
                          },
                          style: {
                            padding: "30px",
                            whiteSpace: "nowrap",
                            fontSize: "17px"
                          },
                          className: "gx-text-primary gx-pointer"
                        },
                        "Get Location From Map"
                      ),
                      o.default.createElement("span", null, "(or) "),
                      o.default.createElement(
                        "span",
                        {
                          onClick: function() {
                            return e.props.myloc();
                          },
                          style: {
                            padding: "30px",
                            whiteSpace: "nowrap",
                            fontSize: "17px"
                          },
                          className: "gx-text-primary gx-pointer"
                        },
                        "Get Current Location"
                      )
                    ),
                    o.default.createElement(
                      i.Row,
                      {
                        style: { padding: 10, paddingLeft: 30, float: "none" }
                      },
                      o.default.createElement(
                        i.Col,
                        { span: 10 },
                        "Latitude: ",
                        o.default.createElement(i.Input, {
                          required: !0,
                          placeholder: "Latitude",
                          value: t.mark.lat,
                          type: "number",
                          step: "0.0001",
                          name: "latitude",
                          onChange: function(t) {
                            return e.props.handleCenterChange(t, "lat");
                          }
                        }),
                        o.default.createElement(
                          "span",
                          { style: { color: "Red" } },
                          t.errors.latitude
                        )
                      ),
                      o.default.createElement(
                        i.Col,
                        { span: 10 },
                        "Longitude  ",
                        o.default.createElement(i.Input, {
                          required: !0,
                          placeholder: "Longitude",
                          value: t.mark.lng,
                          name: "longitude",
                          type: "number",
                          step: "0.0001",
                          onChange: function(t) {
                            return e.props.handleCenterChange(t, "lng");
                          }
                        }),
                        o.default.createElement(
                          "span",
                          { style: { color: "Red" } },
                          t.errors.longitude
                        )
                      )
                    ),
                    o.default.createElement(
                      i.Row,
                      {
                        style: { padding: 10, paddingLeft: 30, float: "none" }
                      },
                      o.default.createElement(
                        i.Col,
                        { span: 10 },
                        "Search radius: ",
                        o.default.createElement(i.Input, {
                          required: !0,
                          placeholder: "Search Radius",
                          value: t.searchRadius,
                          name: "searchRadius",
                          min: 100,
                          type: "number",
                          step: "1",
                          onChange: function(t) {
                            return e.props.changeSearchRadius(t);
                          }
                        }),
                        o.default.createElement(
                          "span",
                          { style: { color: "Red" } },
                          t.errors.searchRadius
                        )
                      ),
                      o.default.createElement(
                        i.Col,
                        { id: "Sarea", style: { height: "50px" }, span: 10 },
                        "Type:",
                        o.default.createElement(
                          i.Select,
                          {
                            getPopupContainer: function() {
                              return document.getElementById("Sarea");
                            },
                            showSearch: !0,
                            value: t.type,
                            style: { width: "100%" },
                            placeholder: "Select Type",
                            optionFilterProp: "children",
                            onChange: function(t) {
                              return e.props.handleOnTypeChange(t);
                            },
                            filterOption: function(e, t) {
                              return (
                                t.props.children
                                  .toLowerCase()
                                  .indexOf(e.toLowerCase()) >= 0
                              );
                            }
                          },
                          a
                        ),
                        o.default.createElement(
                          "span",
                          { style: { color: "Red" } },
                          t.errors.type
                        )
                      )
                    )
                  )
                : "",
              o.default.createElement(
                "div",
                { style: { padding: 20 } },
                o.default.createElement(c.default, {
                  mapData: this.props.data,
                  setlocationDetails: this.props.setlocationDetails
                })
              )
            );
          }),
          t
        );
      })(o.Component);
      t.default = p;
    },
    884: function(e, t, a) {
      "use strict";
      var n =
        (this && this.__importStar) ||
        function(e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var a in e) Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          return (t.default = e), t;
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(a(0));
      (t.placeTypesArr = [
        "Accounting",
        "Airport",
        "Amusement Park",
        "Aquarium",
        "Art Gallery",
        "ATM",
        "Bakery",
        "Bank",
        "Bar",
        "Beauty Salon",
        "Bicycle Store",
        "Book Store",
        "Bowling Alley",
        "Bus Station",
        "Cafe",
        "Campground",
        "Car Dealer",
        "Car Rental",
        "Car Repair",
        "Car Wash",
        "Casino",
        "Cemetery",
        "Church",
        "City Hall",
        "Clothing Store",
        "Convenience Store",
        "Courthouse",
        "Dentist",
        "Department Store",
        "Doctor",
        "Electrician",
        "Electronics Store",
        "Embassy",
        "Fire Station",
        "Florist",
        "Funeral Home",
        "Furniture Store",
        "Petrol Station",
        "Gas Station",
        "Gym",
        "Hair Care",
        "Hardware Store",
        "Hindu Temple",
        "Home Goods Store",
        "Hospital",
        "Insurance Agency",
        "Jewelry Store",
        "Laundry",
        "Lawyer",
        "Library",
        "Liquor Store",
        "Local Government Office",
        "Locksmith",
        "Lodging",
        "Meal Delivery",
        "Meal Takeaway",
        "Mosque",
        "Movie Rental",
        "Movie Theater",
        "Moving Company",
        "Museum",
        "Night Club",
        "Painter",
        "Park",
        "Parking",
        "Pet Store",
        "Pharmacy",
        "Physiotherapist",
        "Plumber",
        "Police",
        "Post Office",
        "Real Estate Agency",
        "Restaurant",
        "Roofing Contractor",
        "RV Park",
        "School",
        "Shoe Store",
        "Shopping Mall",
        "Spa",
        "Stadium",
        "Storage",
        "Store",
        "Subway Station",
        "Supermarket",
        "Synagogue",
        "Taxi Stand",
        "Train Station",
        "Transit Station",
        "Travel Agency",
        "Veterinary Care",
        "Zoo"
      ]),
        (t.recentList = [
          {
            id: 1,
            avatar: "https://via.placeholder.com/150x150",
            title: "Need a quick support on setting",
            description: [
              r.createElement(
                "span",
                { className: "gx-link", key: 1 },
                "Joy Parish"
              ),
              "  created ticket 15 mins ago"
            ],
            status: 2
          },
          {
            id: 2,
            avatar: "https://via.placeholder.com/150x150",
            title: "Pre-sale query about the product",
            description: [
              r.createElement("span", { className: "gx-link", key: 2 }, "You"),
              " replied 2 days ago"
            ],
            status: 1
          },
          {
            id: 3,
            avatar: "https://via.placeholder.com/150x150",
            title: "Regarding customization service",
            description: [
              r.createElement(
                "span",
                { className: "gx-link", key: 3 },
                "Joy Parish"
              ),
              " replied 2 days ago"
            ],
            status: 4
          }
        ]),
        (t.popularList = [
          {
            id: 1,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "Beach side Villah ",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 3,
            baths: 3,
            area: "1400 m2",
            more: 1
          },
          {
            id: 2,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "Luxury family home at beach side",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 2,
            baths: 2,
            area: "1100 m2",
            more: 2
          },
          {
            id: 3,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "CB Jeni Lifestyle Homes",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 4,
            baths: 1,
            area: "1300 m2",
            more: 4
          }
        ]),
        (t.newJersy = [
          {
            id: 1,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "Luxury family home at beach side",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 3,
            baths: 3,
            area: "1400 m2",
            more: 1
          },
          {
            id: 2,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "CB Jeni Lifestyle Homes",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 2,
            baths: 2,
            area: "1100 m2",
            more: 2
          },
          {
            id: 3,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "Beach side Villah ",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 4,
            baths: 1,
            area: "1300 m2",
            more: 4
          }
        ]),
        (t.colorado = [
          {
            id: 1,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "Luxury family home at beach side",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 3,
            baths: 3,
            area: "1400 m2",
            more: 1
          },
          {
            id: 2,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "Beach side Villah ",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 2,
            baths: 2,
            area: "1100 m2",
            more: 2
          },
          {
            id: 3,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "CB Jeni Lifestyle Homes",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 4,
            baths: 1,
            area: "1300 m2",
            more: 4
          }
        ]),
        (t.albama = [
          {
            id: 1,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "Luxury family home at beach side",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 3,
            baths: 3,
            area: "1400 m2",
            more: 1
          },
          {
            id: 2,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "Beach side Villah ",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 2,
            baths: 2,
            area: "1100 m2",
            more: 2
          },
          {
            id: 3,
            image: "https://via.placeholder.com/1100x750",
            isFeatured: !1,
            title: "CB Jeni Lifestyle Homes",
            subTitle: "South Western Ave",
            name: "John Nash",
            date: "2 days ago",
            prize: "$670,500",
            sqft: "$587/sqft",
            bedrooms: 4,
            baths: 1,
            area: "1300 m2",
            more: 4
          }
        ]),
        (t.placesData = {
          html_attributions: [],
          next_page_token:
            "CpQEAQIAANBT6SUMQTyZvzzbbPEYu4KirZcdudK6MxjTe2DQ94s0PJ00fvEXVCs6jvbdrNHNJcXIuDb43XX00kDHD_qRYN3YkkB12o5wdpavf8LhYlbZBV9VATb6hXrv2jMksuXWyKKbfz4njV6NGA5MvfG95AROP5dOyD5cOu5HroC3skhCk031T7H_5fHKMDv6ToUnYFagK86TAmiPokzM4culdiuhIMDCVfQxYP1FVnB64UQlhpOZnQKNH06WO2k9gUtNOWgpyubLu60L0Z_HH7fedriQZhDrm1Y2pUgKa_Kk5avYx0KulpHDuail98FRZkUHjhh0AH1MMKlZjHSXqsX6aGgtKRWyf1s9aHoUvc0h8UKXB6RPF3AOGpqmv9UHy8sLvlHytXdY_I9GYv8Yau8SzdQfiAD8wqJ_AHjQ1KfA2jj8YmEPGH9ukmMV6s0-ejCixqUDVKwrK1lcLt80YAjrnStz6kGFFEHJYT84CxYG6nVPm75QBRLWvBJXPO9E9nwDi-qGK0l2nDV3hk92fofWjRZFqMh2RhtHuEjt_VGSmO2iHJfXSPV6qF4j8lMM5cWQPcdAEzKz2kT9efSJcutrJKYBqmZT3rIPHbVoplk3Bmt_0hfNEU0m0g2gg-9J0kMnKWY4n8mVx8Ef76IfaPDlMqLQa2NUVw67H-5xQZbBuIT1u95f1vpBx4hi5r0T_zw9bBIQvskqnrF-WN5Qza-yRH1v0hoU8XElBzhgf62uRSnlOJbbffggdkQ",
          results: [
            {
              geometry: {
                location: { lat: 12.9523671, lng: 77.6399725 },
                viewport: {
                  northeast: { lat: 12.95364057989272, lng: 77.64138697989272 },
                  southwest: { lat: 12.95094092010728, lng: 77.63868732010728 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "83270530c5347f31200b6650fa021adb0863e736",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 4608,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/102037026257840611819/photos">nitesh sardana</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAmTnlE9fEe4Rz-J0ieL2kywcT3Cxy2yMUAOculgfEhFyLARr3ew4TAEWPP8Hj3iqFIuGF_v_gM8ePrwx9pWluDP4Kivu8TmjFPHdErY8HqjLH99fujCYhQfWXgtT5AiSAEhBQBI9UWuO77yV2fZGosW30GhSEtFXfUjvCexIGqmcu2bHQMbz2mw",
                  width: 3456
                }
              ],
              place_id: "ChIJuUfPGPgTrjsRt-vUvmsqUtk",
              plus_code: {
                compound_code: "XJ2Q+WX Bengaluru, Karnataka, India",
                global_code: "7J4VXJ2Q+WX"
              },
              price_level: 2,
              rating: 3.7,
              reference: "ChIJuUfPGPgTrjsRt-vUvmsqUtk",
              scope: "GOOGLE",
              types: [
                "cafe",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 171,
              vicinity:
                "Inner Ring Road, Amarjyothi Layout, Next To Mother Earth, Domlur, Domlur, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9055248, lng: 77.6059126 },
                viewport: {
                  northeast: { lat: 12.90692312989272, lng: 77.60727172989273 },
                  southwest: { lat: 12.90422347010728, lng: 77.60457207010728 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "2a1aa34a66a33ed1bc359366c0a5efba18351eb1",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 3120,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/107297114555350475989/photos">jalad kumar srivastava</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAWl1gKGzSadTRb2Ar98Icl2L283fGv5ism-ptA1oI9r1yNIogvfMgmQ_3HIKQepqqvrtWtcrtbURnwkEf32oSvhNEtuvNZn8FycfkrW5VxLlE8PUyftLnMOXAHiD-iarSEhAeb4HJeGt6hRgqX-e6fp44GhSs-sjDDuhcB-ypRvpLIb7w6zm3TQ",
                  width: 4160
                }
              ],
              place_id: "ChIJCau9ThoVrjsRoLq01adr1QU",
              plus_code: {
                compound_code: "WJ44+69 Bengaluru, Karnataka, India",
                global_code: "7J4VWJ44+69"
              },
              price_level: 2,
              rating: 3.9,
              reference: "ChIJCau9ThoVrjsRoLq01adr1QU",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 1244,
              vicinity:
                "590, 445/1, 29Th Main, 2Nd Stage, Btm, BTM Layout, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9125771, lng: 77.6003169 },
                viewport: {
                  northeast: { lat: 12.91407002989272, lng: 77.60148862989271 },
                  southwest: { lat: 12.91137037010728, lng: 77.59878897010726 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "aa4c054fae531a34c754f282d95673b5dc883ab4",
              name: "Café Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 3456,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/110620467891056969299/photos">Akshay Srivastava</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAiVzbgPTixrXe1d_kawQXyJ6If33MXvpUw2-k8TKpS6YNRSKiD34ce3M-M0-BzhIZRazKtQ1UdLQB-rCv7txGWZ7WBDbE_BTwF02iMPteodNuZLTIaS5GaCQC1JvcSC-mEhAE0wAY4XUYHn9GoQk6hZY5GhRPkcBD1jbxFo2Z7h1YXQ0unWJ-cA",
                  width: 4608
                }
              ],
              place_id: "ChIJafXt6AQVrjsRjoou3sADyN0",
              plus_code: {
                compound_code: "WJ72+24 Bengaluru, Karnataka, India",
                global_code: "7J4VWJ72+24"
              },
              price_level: 2,
              rating: 3.9,
              reference: "ChIJafXt6AQVrjsRjoou3sADyN0",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 82,
              vicinity:
                "Shoppers Stop, Bannerghatta Main Rd, BTM Layout, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9718324, lng: 77.59439909999999 },
                viewport: {
                  northeast: { lat: 12.97323787989272, lng: 77.59576952989272 },
                  southwest: { lat: 12.97053822010728, lng: 77.59306987010727 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "74dc60c56d2f33d91b4a52b1e1f6688ef965ae56",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 720,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/116023862257385611192/photos">vinod kumar</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAfD-wuk8qiSwceaJB1kiBXl79VYQwC8MXSaOnF3V7_bUoz93Z3h0bjh8dsYrKChz_6oloGirFDdWqYHCKYSZJ2kbIRWNaalzhLoPUAfGGjIlUzy-b2U2iSF5EQF7dag1CEhB20MTDlm1kA3VOK3YgE0lrGhRxh_JK6GsWFDjZ4Ft1q-O8ocYCZw",
                  width: 1280
                }
              ],
              place_id: "ChIJ-VrecmkWrjsRtN8D7e0Ddcc",
              plus_code: {
                compound_code: "XHCV+PQ Bengaluru, Karnataka, India",
                global_code: "7J4VXHCV+PQ"
              },
              price_level: 2,
              rating: 4.2,
              reference: "ChIJ-VrecmkWrjsRtN8D7e0Ddcc",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 1672,
              vicinity:
                "23/2 Coffee Day Square, Vittal Mallya Rd, Near Cubbon Park, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9310625, lng: 77.63259049999999 },
                viewport: {
                  northeast: { lat: 12.93244417989272, lng: 77.63404442989273 },
                  southwest: { lat: 12.92974452010728, lng: 77.63134477010728 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "7d33503e895efff863fd993a73f5bbec6478bba5",
              name: "Café Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 2160,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/109864493743670412501/photos">Akshay Jain</a>'
                  ],
                  photo_reference:
                    "CmRaAAAADJWldRJi1Ij2LkbHeeUb8f0SLkzznFqBF1lZZEiyU0HhvfWHrR3KDmgA4XZE-Xz1pAqMp1ZZ-1A4O9dJb6zG2YzUtvI5WOvHY8VNYzkO42LHZYXImZ5EEYwx-fPo7XhrEhBScm3aTWx0UY_bE6EqJhrFGhSmDhG9R0yVH-GTjL_HH2LGxxhMYg",
                  width: 1080
                }
              ],
              place_id: "ChIJb61gLmcUrjsRyLoGkQz8dWs",
              plus_code: {
                compound_code: "WJJM+C2 Bengaluru, Karnataka, India",
                global_code: "7J4VWJJM+C2"
              },
              price_level: 2,
              rating: 4,
              reference: "ChIJb61gLmcUrjsRyLoGkQz8dWs",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 354,
              vicinity:
                "777, Jk Ashwath Lakshmi Heritage, 4Th Block Koramangala, Koramangala, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 13.135868, lng: 78.0151516 },
                viewport: {
                  northeast: { lat: 13.13704282989272, lng: 78.01647067989272 },
                  southwest: { lat: 13.13434317010728, lng: 78.01377102010727 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "78743cbbcc455e6dec2f08e06a6bd903f64d1de6",
              name: "Cafe Coffee Day - Kolar Highway",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 1025,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/114144650450740637311/photos">Rajath Kashyap</a>'
                  ],
                  photo_reference:
                    "CmRaAAAA2wRBQ0AncxYzVE1Pe--vgHH1FeNPY_RZ7_8ttv9OlPwPJORBFdXzBXXUN0c7CDAm3Fw0WoANfJFOb4_7R1OwLiOQx0eS4qyO1Q_kJ167e1rU3affJ1A5Foefp0IFJ3fkEhDkYmXj9RH4kNAE-JhizKV7GhQPUSxgfix1CIfbuzMEUlkHxo7Sng",
                  width: 1080
                }
              ],
              place_id: "ChIJPVFdQHf8rTsR2JIeojPGo00",
              plus_code: {
                compound_code: "42P8+83 Kendatti Gollahalli, Karnataka, India",
                global_code: "7J5W42P8+83"
              },
              price_level: 2,
              rating: 4.1,
              reference: "ChIJPVFdQHf8rTsR2JIeojPGo00",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 3636,
              vicinity:
                "Inside Hpcl, Bangalore - Kolar Highway, Kendatti Gollahalli, Kolar"
            },
            {
              geometry: {
                location: { lat: 12.9622748, lng: 77.70145780000001 },
                viewport: {
                  northeast: { lat: 12.96362327989272, lng: 77.70282437989273 },
                  southwest: { lat: 12.96092362010728, lng: 77.70012472010728 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "d1729a367de3f8be2b8d2cff359ab05f5e482ff9",
              name: "The Lounge",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 1152,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/103129047114206153358/photos">A Google User</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAO92gH2RP1p9Onvf-SY765khHi8g7aVJX_SjwkL4rPzIgQtFI-aMS_XP-AhED6Q--B1rE8wW4dOE97eE4zehmmBW9eZiXBaPy1x7Sfiv06yly7p6Wvz2zM3Pd6Z6oYxQ7EhA3CzQOT8um2ChYMu03j4yRGhTdunC-oGMjXod_rwjJOv-9gY4NbQ",
                  width: 864
                }
              ],
              place_id: "ChIJ1X2cbi0SrjsRkPD5wIOLGFk",
              plus_code: {
                compound_code: "XP62+WH Bengaluru, Karnataka, India",
                global_code: "7J4VXP62+WH"
              },
              price_level: 2,
              rating: 3.9,
              reference: "ChIJ1X2cbi0SrjsRkPD5wIOLGFk",
              scope: "GOOGLE",
              types: [
                "cafe",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 470,
              vicinity:
                "Marathahalli Bridge, Outer Ring Rd, Near, Anand Nagar, Aswath Nagar, Marathahalli, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9370848, lng: 77.6917311 },
                viewport: {
                  northeast: { lat: 12.93843032989272, lng: 77.69321222989272 },
                  southwest: { lat: 12.93573067010728, lng: 77.69051257010727 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "ec8fc8594bc3143f0c3a46a4a1933794c040e3d4",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 4608,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/102037026257840611819/photos">nitesh sardana</a>'
                  ],
                  photo_reference:
                    "CmRaAAAA77f0ojhK9klJPMhnziBqnxqfFAEPFSk-j96ZjUeYPLFV1E6qm1X-T_5oZ870pRCJfo7H_uWBB3zr8FOpwHJn7C040plpV4S6DvTZsw7FUOh77t_c-RfXaPdJngvL22tHEhD9mIGFK99bVmsaIt32cXAYGhRZSNYGtj2K2nqYF2_iojz3DZk8kQ",
                  width: 3456
                }
              ],
              place_id: "ChIJU2PW1JMXrjsRY0K-qWHq8ZY",
              plus_code: {
                compound_code: "WMPR+RM Bengaluru, Karnataka, India",
                global_code: "7J4VWMPR+RM"
              },
              price_level: 2,
              rating: 3.8,
              reference: "ChIJU2PW1JMXrjsRY0K-qWHq8ZY",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 47,
              vicinity:
                "Salarpuria Hallmark, Outer Ring Rd, Kadubeesanahalli, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9962087, lng: 77.68855020000001 },
                viewport: {
                  northeast: { lat: 12.99746447989272, lng: 77.69009207989272 },
                  southwest: { lat: 12.99476482010728, lng: 77.68739242010727 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "a65837e7a382e3b03642315007c96d8839dee5e0",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 801,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/114144650450740637311/photos">Rajath Kashyap</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAbqlrCK-oWj3AvnFhf6Mu-9lGeZPfsPjddMRzFtYylFRcEp4fGK94junib4f7F9Gu_beCY3xCFoK7YQuBUPU9BZS8Ukq0ChnR-FDhvIFPtbchjzyf4twkgRZrq2_0vi1rEhBqHQm0stt2Uu1QP_fvHqPZGhSjZkQ5Ls2dFsIPAwm63uJ9G1eVeA",
                  width: 1080
                }
              ],
              place_id: "ChIJmTE2og0RrjsRuZDKwgl9MLU",
              plus_code: {
                compound_code: "XMWQ+FC Bengaluru, Karnataka, India",
                global_code: "7J4VXMWQ+FC"
              },
              price_level: 2,
              rating: 3.4,
              reference: "ChIJmTE2og0RrjsRuZDKwgl9MLU",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 55,
              vicinity:
                "HP, Swamy Vivekananda Rd, B Narayanapura, Mahadevapura, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9639334, lng: 77.7485319 },
                viewport: {
                  northeast: { lat: 12.96529962989272, lng: 77.74982647989272 },
                  southwest: { lat: 12.96259997010728, lng: 77.74712682010728 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "623aff528ba4de065534e132b9ffbdb3a3afebb4",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 4608,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/110164804738902670814/photos">Megha Shetty</a>'
                  ],
                  photo_reference:
                    "CmRaAAAACWN0c3f42fdWRNmODU51LmHRvUnHQk3OYndom8C1CrN6NnT2Q2Beir3rfN5RBL4IaVa7MZfABpNnCMF4GjS0YJaDesmjLunC0t-NgCn7KNcPr272jnDojQw2691vyDoTEhAbm1Pxz8YTOgX_TVvXHVa1GhRzpBr6KbMv-b_Xk3cL9k-oNWaQcQ",
                  width: 3456
                }
              ],
              place_id: "ChIJzcbN0fkNrjsRj77Q031lHNA",
              plus_code: {
                compound_code: "XP7X+HC Bengaluru, Karnataka, India",
                global_code: "7J4VXP7X+HC"
              },
              price_level: 2,
              rating: 3.6,
              reference: "ChIJzcbN0fkNrjsRj77Q031lHNA",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 59,
              vicinity:
                "Whitefield Main Rd, Ramagondanahalli, Whitefield, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9506639, lng: 77.5678358 },
                viewport: {
                  northeast: { lat: 12.95201342989272, lng: 77.56911387989271 },
                  southwest: { lat: 12.94931377010728, lng: 77.56641422010726 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "24126051c88ec4cc63b9d360ff1212d2da9daa54",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 853,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/104021521334966359211/photos">Supreeth M S</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAkcTuomBON2R8c5vLPqvTt8g92RKwXOpiYOqUPTal2MKtIwtHuffmIXrr_xH95pNYac-08MvDB00nPe184pxUcRxQ9eC_1kXADYkFU2QacW_aKIUbufpj8G4K9NnlafI3EhDa60XpRPe1P7muwIACnwLRGhRhd7qrmZC9aiR-08HhP7ou5hchuw",
                  width: 1280
                }
              ],
              place_id: "ChIJFw33TPEVrjsRl0g3xHTRdWw",
              plus_code: {
                compound_code: "XH29+74 Bengaluru, Karnataka, India",
                global_code: "7J4VXH29+74"
              },
              price_level: 2,
              rating: 3.6,
              reference: "ChIJFw33TPEVrjsRl0g3xHTRdWw",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 222,
              vicinity:
                "1, Spc Complex, Opp Bsnl Office,, Bull Temple Rd, Shankarapura, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9765944, lng: 77.5992708 },
                viewport: {
                  northeast: { lat: 12.97794992989272, lng: 77.60061887989272 },
                  southwest: { lat: 12.97525027010728, lng: 77.59791922010729 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "8e4b26d049b5376021e13b9deb395bd844db954a",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 1836,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/116666447348846516566/photos">Nirmala Kolur</a>'
                  ],
                  photo_reference:
                    "CmRaAAAA6QRNTU219ypc56pQugaUmfrg_ok5IufapCTi68gaeEhaHjCHZngCr1tAQtYrLLYPirrnBgp4fmZISl-J0QbmEuaRok1mWQ1RB5U9Qt4BktFwMW6Pjd71TB2OeF-O3L_AEhAvhty59gVeds26IousqVzxGhTu9NvK3axfeJLPAmJTlZoEX211Ww",
                  width: 3264
                }
              ],
              place_id: "ChIJ694PVHwWrjsRZAC3_-suseE",
              plus_code: {
                compound_code: "XHGX+JP Bengaluru, Karnataka, India",
                global_code: "7J4VXHGX+JP"
              },
              price_level: 2,
              rating: 3.7,
              reference: "ChIJ694PVHwWrjsRZAC3_-suseE",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 96,
              vicinity: "Spencer Building, 44, MG Road, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 13.045318, lng: 77.626792 },
                viewport: {
                  northeast: { lat: 13.04651787989272, lng: 77.62823082989273 },
                  southwest: { lat: 13.04381822010728, lng: 77.62553117010728 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "dbe12a15d71730985d167a5c3861c27159866c99",
              name: "Café Coffee Day - Elements Mall",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 4608,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/106755294147260228153/photos">Abhitej Singh</a>'
                  ],
                  photo_reference:
                    "CmRaAAAALJYiuInpguiPUCO1c6UEJA3qbQsIjbKgZBZraD-Mz0m1UFMBrzuMMXXXnHUCyo1qo-1xPi2GZ0kAaHEoGu9V0Q2zZCPH2xqfW0NbsrY5TlJb9mhQwrOKIkf0rAuKUBisEhC6SGN1vQPOnKfTey2kyQfVGhQXJXZSm2R60MbvqD-ivWl0KbfYtQ",
                  width: 3456
                }
              ],
              place_id: "ChIJG5Pd42gXrjsRRqUg7B_8H8E",
              plus_code: {
                compound_code: "2JWG+4P Bengaluru, Karnataka, India",
                global_code: "7J5V2JWG+4P"
              },
              price_level: 2,
              rating: 3.7,
              reference: "ChIJG5Pd42gXrjsRRqUg7B_8H8E",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 180,
              vicinity:
                "Inside Msr Regalia Elements Mall, Ms Ramaiah North City, Thanisandra Main Road, Ms Ramaiah, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9128233, lng: 77.68055629999999 },
                viewport: {
                  northeast: { lat: 12.91411047989272, lng: 77.68186637989271 },
                  southwest: { lat: 12.91141082010728, lng: 77.67916672010728 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "082e7686a6cd6bf6d23e5c4b552319b03fe8735d",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 4608,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/101765060427641554920/photos">Amit Yadav</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAtFfjvtTTF0061abTA_MgTnZPh2IaFTG50slSwvykiJzavam22otM_Db7K3zMbaL-FCL1Kze14ExeduYjhYQPCGfJM_rauxX1VIJ9zsR4I7s12flnlSq32-k6bIvuiF2WEhALFhL2QOx-NVbVJuLqg0nsGhSBwxfyWZ25nQtoXUSGUBYWKy-4NQ",
                  width: 3456
                }
              ],
              place_id: "ChIJh8HHRBITrjsRg6CdAOo25Gs",
              plus_code: {
                compound_code: "WM7J+46 Bengaluru, Karnataka, India",
                global_code: "7J4VWM7J+46"
              },
              price_level: 2,
              rating: 3.7,
              reference: "ChIJh8HHRBITrjsRg6CdAOo25Gs",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 328,
              vicinity:
                "65/1c, Sarjapur Main Rd, Next To Pragathi Motors, Kaikondrahalli, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9257628, lng: 77.5640659 },
                viewport: {
                  northeast: { lat: 12.92715987989272, lng: 77.56550227989273 },
                  southwest: { lat: 12.92446022010728, lng: 77.56280262010728 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "608e932b92dfb6dd44c562f37e49e36d58324b8d",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 4608,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/115521756628872726341/photos">Rocky R</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAOn8QfaFJZFCkmj4jgBcwNOgU2d6CTed49QBNaws5yOdydSdaDBcL_pIuqjBfaf2RbSx0p9nydlMa2TQ_9-7q6T1zGIsCuQUtJhxMbiN9SCjOvgr6o1tvwF-CnVbqQpNZEhCWlkH6hdcbyZEQ-RZVpwNDGhQlNdprjn0_j5I_mF9B1UM6EuQ1RA",
                  width: 3456
                }
              ],
              place_id: "ChIJV1TizYAVrjsRzdLW2C5H5us",
              plus_code: {
                compound_code: "WHG7+8J Bengaluru, Karnataka, India",
                global_code: "7J4VWHG7+8J"
              },
              price_level: 2,
              rating: 3.9,
              reference: "ChIJV1TizYAVrjsRzdLW2C5H5us",
              scope: "GOOGLE",
              types: ["cafe", "point_of_interest", "food", "establishment"],
              user_ratings_total: 266,
              vicinity:
                "1431, 22Nd Cross, 2Nd Stage, Banashankari, Near Bda Complex, 22nd Cross Rd, Banashankari, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9705585, lng: 77.6472805 },
                viewport: {
                  northeast: { lat: 12.97200182989272, lng: 77.64869247989272 },
                  southwest: { lat: 12.96930217010728, lng: 77.64599282010727 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "d065a8bb9ec0641180b62eb1091cfac95f882449",
              name: "Café Coffee Day - 12th Main Road",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 2048,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/113490114144489167184/photos">Zakir Ashraf</a>'
                  ],
                  photo_reference:
                    "CmRaAAAATQaUWykeaZIvbv3KY3XHs3f6cM_T7fpEawUK-5xQ8tm7XtgpIJz7y_ZL64JGs9RD4319_IlpOPKaPRBybWrEkKYXG0ZfxwECOjHXJgF9vapJmuP96aGj3M3Ey12qSv34EhDRyFqgy9wG2HT6Vqh4tYUfGhT963MXAGk0n2NBnb2Q25PTVockVQ",
                  width: 1152
                }
              ],
              place_id: "ChIJhz6k76kWrjsR8BkBAb163oU",
              plus_code: {
                compound_code: "XJCW+6W Bengaluru, Karnataka, India",
                global_code: "7J4VXJCW+6W"
              },
              price_level: 2,
              rating: 4,
              reference: "ChIJhz6k76kWrjsR8BkBAb163oU",
              scope: "GOOGLE",
              types: [
                "cafe",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 1022,
              vicinity:
                "622, 12th Main Rd, 7th Cross, HAL 2nd Stage, Indiranagar, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9123321, lng: 77.6413384 },
                viewport: {
                  northeast: { lat: 12.91362502989272, lng: 77.64268652989271 },
                  southwest: { lat: 12.91092537010728, lng: 77.63998687010726 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "3278994117444460e38964ef3e5d7349a0db74d2",
              name: "Café Coffee Day HSR Layout",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 2448,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/106642824215072687204/photos">Balaji Donthi</a>'
                  ],
                  photo_reference:
                    "CmRaAAAA0cxKJErTLeGAKTfJc35UuEF901SSLVep2StGicbCezJyBDoi82ERQSeWjbdsg5wnVLWn7sC5DQR_Q7wn1ZQIaPGHQC3PPn_OHUM4AZMRmL2C2qQbTVI67b-kzG238QvPEhAIzUZ1sgv0So09znY12SPvGhSfQUNgdSUOY8QODKnsrLNZZVy_Rw",
                  width: 3264
                }
              ],
              place_id: "ChIJS3DNGpAUrjsRgssDjbqSaPE",
              plus_code: {
                compound_code: "WJ6R+WG Bengaluru, Karnataka, India",
                global_code: "7J4VWJ6R+WG"
              },
              price_level: 2,
              rating: 4.1,
              reference: "ChIJS3DNGpAUrjsRgssDjbqSaPE",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 1340,
              vicinity:
                "Ground Floor, No 451, 17th Cross Road, Sector 4, HSR Layout, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9737352, lng: 77.611293 },
                viewport: {
                  northeast: { lat: 12.97512627989272, lng: 77.61254182989272 },
                  southwest: { lat: 12.97242662010728, lng: 77.60984217010729 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "72a0c37b2d83fef653126f2c06ea865fc0cc9be6",
              name: "Café Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 3e3,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/112917566499313404178/photos">Manu Solomon</a>'
                  ],
                  photo_reference:
                    "CmRaAAAAWofGTxdUyUJRRHjIcIguMjY-yAldLg_WuTtIwjMPxPRVAyent1OVBoQtqC_g9UBBujeENoEmgLGsisl34x-0Nv6aZ2u6O4tbMaioqUM_iqsmGw0H-moaacfDxAbLMVtKEhCsU8M_8ZkZpfEaIFBRwDXtGhTCtYKCZ1HZ3YVF4SXDcqAWA8LSCQ",
                  width: 4e3
                }
              ],
              place_id: "ChIJq63s1IYWrjsRFRhSVMPHrfA",
              plus_code: {
                compound_code: "XJF6+FG Bengaluru, Karnataka, India",
                global_code: "7J4VXJF6+FG"
              },
              price_level: 2,
              rating: 3.9,
              reference: "ChIJq63s1IYWrjsRFRhSVMPHrfA",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 130,
              vicinity:
                "Bangalore Central, 47/48, Residency Road, Commissariat Rd, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.9224385, lng: 77.66842609999999 },
                viewport: {
                  northeast: { lat: 12.92375247989272, lng: 77.66979097989271 },
                  southwest: { lat: 12.92105282010728, lng: 77.66709132010728 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "fd2b854b9d0747456aa1a0708e84679ed691db33",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 3456,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/105595903961441009172/photos">Ravish Malhotra</a>'
                  ],
                  photo_reference:
                    "CmRaAAAArx-5cYEAN9Gi8Az5is7p_zvimV3ARfmZo09aImm2N5ppt_XyzsvUp71ESnOQviFvQRwkvMSB2hDSwPbZiWiNoTL4t-tSRNfwQ1Wfjh7sZn3KZy_59WL30GNk28A6ObYtEhBUn2Sd2dUwVzF7qx6qXZ1cGhS11qaER2L_auV6UBPU3y0-4fRXVw",
                  width: 4608
                }
              ],
              place_id: "ChIJL4x7-XYTrjsRxRkE_UhBuYE",
              plus_code: {
                compound_code: "WMC9+X9 Bengaluru, Karnataka, India",
                global_code: "7J4VWMC9+X9"
              },
              price_level: 2,
              rating: 3.9,
              reference: "ChIJL4x7-XYTrjsRxRkE_UhBuYE",
              scope: "GOOGLE",
              types: ["cafe", "point_of_interest", "food", "establishment"],
              user_ratings_total: 690,
              vicinity:
                "Marathahalli - Sarjapur Outer Ring Rd, Iblur Village, Bellandur, Bengaluru"
            },
            {
              geometry: {
                location: { lat: 12.8128962, lng: 77.51097229999999 },
                viewport: {
                  northeast: { lat: 12.81438262989272, lng: 77.51275427989272 },
                  southwest: { lat: 12.81168297010728, lng: 77.51005462010727 }
                }
              },
              icon:
                "https://maps.gstatic.com/mapfiles/place_api/icons/cafe-71.png",
              id: "8c2514cb95ec2e77cabea8059c1268c19c0c7188",
              name: "Cafe Coffee Day",
              opening_hours: { open_now: !0 },
              photos: [
                {
                  height: 3480,
                  html_attributions: [
                    '<a href="https://maps.google.com/maps/contrib/107396985315344181187/photos">Shankar M</a>'
                  ],
                  photo_reference:
                    "CmRaAAAA9Pi_JVtqMSwW62iSctfSFpiV5t2REl-_IKVbw8aKbpSZM8ac-MxRh0GGHhDoBKiRqBdOapdV1HO9H2kLHXqPPuBkskq1HFDGk9vm6eTNtyoUdRuFsoxWaMN0Emf8w1lSEhCMrvMVOVrPRbdtVhjmx0VyGhQ7JyoeVCOQ_8nNHmMGpnXBbotTFg",
                  width: 4640
                }
              ],
              place_id: "ChIJj2vEPAlBrjsRzenNxQsRJ_w",
              plus_code: {
                compound_code: "RG76+59 Bengaluru, Karnataka, India",
                global_code: "7J4VRG76+59"
              },
              price_level: 2,
              rating: 4.1,
              reference: "ChIJj2vEPAlBrjsRzenNxQsRJ_w",
              scope: "GOOGLE",
              types: [
                "cafe",
                "store",
                "restaurant",
                "point_of_interest",
                "food",
                "establishment"
              ],
              user_ratings_total: 1068,
              vicinity:
                "122, Brigade Meadows, Kaggalipura, Kanakapura Road, Opp Anjanya Temple, Udayapur Pst Arcade, Bengaluru"
            }
          ],
          status: "OK"
        });
    },
    886: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = l(a(887)),
        c = l(a(352)),
        u = l(a(345)),
        p = a(116),
        d = a(102),
        f = l(a(888)),
        m = a(346),
        h =
          u.default && navigator.geolocation
            ? navigator.geolocation
            : {
                getCurrentPosition: function(e, t) {
                  t("Your browser doesn't support geolocation.");
                }
              },
        g = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.getPlaceDetails = function(e) {
                p.nearXClient
                  .query({ query: d.PLACES_BY_ID, variables: { id: e } })
                  .then(function(e) {
                    var t = e.data.Place,
                      n = [
                        {
                          id: t.id,
                          placeName: t.geofenceName,
                          address: t.address,
                          center: { lat: t.location.lat, lng: t.location.lng },
                          radius: t.radii,
                          mainPlace: !0,
                          selected: !0,
                          errors: {}
                        }
                      ];
                    t.hotspots.map(function(e) {
                      n.push({
                        id: e.id,
                        placeName: e.geofenceName,
                        address: e.address,
                        center: { lat: e.location.lat, lng: e.location.lng },
                        radius: [m.HOTSPOT_RADIUS],
                        selected: !0,
                        errors: {}
                      });
                    }),
                      a.setState({
                        places: n,
                        places1: n,
                        center: n[0].center
                      });
                  })
                  .catch(function(e) {
                    return console.log("Failed to get Places Details" + e);
                  });
              }),
              (a.addRadius = function(e) {
                var t = a.state.places;
                t[e].radius.push(t[e].radius[t[e].radius.length - 1]),
                  a.setState({ places: t });
              }),
              (a.getGeoLocation = function(e) {
                void 0 === e && (e = 0),
                  h.getCurrentPosition(function(t) {
                    var n = a.state.places;
                    (n[e].center = {
                      lat: t.coords.latitude,
                      lng: t.coords.longitude
                    }),
                      a.setState({ places: n, center: n[0].center });
                  });
              }),
              (a.addHotspot = function() {
                var e = {
                    placeName: "",
                    center: { lat: null, lng: null },
                    errors: {},
                    radius: [m.RADIUS_1_MIN],
                    storeId: ""
                  },
                  t = a.state.places.concat([e]);
                a.setState({ places: t });
              }),
              (a.onPlaceSelect = function(e) {
                var t = a.state.places1;
                t[e].selected = !t[e].selected;
                var n = t.filter(function(e) {
                  return e.selected;
                });
                a.setState({ places: n, places1: t });
              }),
              (a.handleCenterChange = function(e, t, n) {
                var r = a.state.places,
                  l = r[t].center.lng,
                  o = r[t].center.lat;
                "lat" == n
                  ? (o = parseFloat(e.target.value))
                  : (l = parseFloat(e.target.value)),
                  NaN != o && null != o && (r[t].errors.latitude = ""),
                  NaN != l && null != l && (r[t].errors.longitude = ""),
                  (r[t].center = { lat: o, lng: l }),
                  t
                    ? a.setState({ places: r })
                    : a.setState({ places: r, center: r[0].center });
              }),
              (a.getloc = function(e) {
                return a.setState({ getLoc: !0, markerPlace: e });
              }),
              (a.handleOnChange = function(e, t) {
                var n = a.state.places;
                (n[t][e.target.name] = e.target.value),
                  "" != e.target.value.trim() &&
                    (n[t].errors[e.target.name] = ""),
                  a.setState({ places: n });
              }),
              (a.onChangeRadius = function(e, t, n) {
                var r = a.state.places;
                (r[t].radius[n] = e), a.setState({ places: r });
              }),
              (a.setlocationDetails = function(e, t) {
                var n = a.state.places;
                (n[a.state.markerPlace].center = { lat: e, lng: t }),
                  NaN != e &&
                    null != e &&
                    (n[a.state.markerPlace].errors.latitude = ""),
                  NaN != t &&
                    null != t &&
                    (n[a.state.markerPlace].errors.longitude = ""),
                  a.setState({ places: n, getLoc: !1 }),
                  a.state.markerPlace
                    ? a.setState({ places: n, getLoc: !1 })
                    : a.setState({
                        places: n,
                        center: n[0].center,
                        getLoc: !1
                      });
              }),
              (a.handleSubmit = function() {
                var e = 0,
                  t = a.state.places;
                if (
                  (t.map(function(t) {
                    (t.errors = {}),
                      "" == t.placeName.trim() &&
                        (t.errors.placeName = "* Place Name is mandatory"),
                      "" == t.address.trim() &&
                        (t.errors.address = "* Address is mandatory"),
                      (null != t.center.lat && NaN != t.center.lat) ||
                        (t.errors.latitude = "* latitude is mandatory"),
                      (null != t.center.lng && NaN != t.center.lng) ||
                        (t.errors.longitude = "* longitude is mandatory"),
                      0 !== Object.keys(t.errors).length && e++;
                  }),
                  e)
                )
                  a.setState({ places: t }), console.log("Errors in submition");
                else {
                  a.setState({ loading1: !0 });
                  var n = [];
                  a.state.places.map(function(e) {
                    n.push({
                      id: e.id ? e.id : null,
                      geofenceName: e.placeName,
                      address: e.address,
                      location: e.center,
                      radii: e.radius
                    });
                  }),
                    (n[0].mainPlace = !0),
                    p.nearXClient
                      .mutate({
                        mutation: d.CREATE_PLACE,
                        variables: { places: n }
                      })
                      .then(function(e) {
                        i.message.success("success"),
                          a.props.history.push("/nearx/places"),
                          a.setState({ loading1: !1 });
                      })
                      .catch(function(e) {
                        a.setState({ loading1: !1 }),
                          console.log("Failed to store Places Details" + e),
                          i.message.warning("Failed to store Places Details");
                      });
                }
              }),
              (a.submitHotspots = function(e) {
                var t = a.state,
                  n = t.places1,
                  r = t.places;
                (n[0] = r[0]),
                  e.map(function(e) {
                    (e.id &&
                      n.find(function(t) {
                        return e.id === t.id;
                      })) ||
                      n.push(e);
                  });
                var l = n.filter(function(e) {
                  return !0 === e.selected;
                });
                a.setState({ places: l, places1: n, visible: !1 });
              }),
              (a.showModal = function() {
                a.setState({ visible: !0 });
              }),
              (a.deleteRedi = function(e) {
                var t = a.state.places;
                t[e].radius.pop(), a.setState({ places: t });
              }),
              (a.handleOk = function() {
                a.setState({ loading: !0 }),
                  setTimeout(function() {
                    a.setState({ loading: !1, visible: !1 });
                  }, 3e3);
              }),
              (a.handleCancel = function() {
                a.setState({ visible: !1 });
              }),
              (a.state = {
                places: [
                  {
                    id: "",
                    placeName: "",
                    storeId: "",
                    selected: !0,
                    mainPlace: !0,
                    address: "",
                    radius: [m.RADIUS_1_MIN],
                    center: { lat: null, lng: null },
                    errors: {}
                  }
                ],
                places1: [],
                center: { lat: null, lng: null },
                errors: {},
                markerPlace: 1,
                getLoc: !1,
                loading1: !1
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              sessionStorage.getItem("placeId")
                ? this.getPlaceDetails(
                    JSON.parse(sessionStorage.getItem("placeId"))
                  )
                : this.getGeoLocation(0),
                sessionStorage.removeItem("placeId");
            }),
            (t.prototype.render = function() {
              window.innerWidth;
              return o.createElement(
                "div",
                { className: "gx-main-content-wrapper" },
                o.createElement(
                  i.Row,
                  { style: { float: "none" }, gutter: 20 },
                  o.createElement(
                    i.Col,
                    { xs: 24, sm: 12, span: 12 },
                    o.createElement(s.default, {
                      formData: this.state,
                      showModal: this.showModal,
                      getloc: this.getloc,
                      handleSubmit: this.handleSubmit,
                      handleOnChange: this.handleOnChange,
                      deleteRedi: this.deleteRedi,
                      deleteHotspot: this.deleteHotspot,
                      onPlaceSelect: this.onPlaceSelect,
                      addRadius: this.addRadius,
                      onChangeRadius: this.onChangeRadius,
                      handleCenterChange: this.handleCenterChange
                    })
                  ),
                  o.createElement(
                    i.Col,
                    { xs: 24, sm: 12, span: 12 },
                    o.createElement(
                      "div",
                      { className: "gx-card" },
                      o.createElement(
                        "div",
                        { style: { fontSize: 20 }, className: "gx-card-head" },
                        "Geo Location"
                      ),
                      o.createElement(
                        "div",
                        { className: "gx-card-body" },
                        o.createElement(c.default, {
                          mapHeight: "600px",
                          mapData: this.state,
                          setlocationDetails: this.setlocationDetails
                        })
                      )
                    )
                  )
                ),
                o.createElement(
                  i.Modal,
                  {
                    width: "80%",
                    key: "model",
                    visible: this.state.visible,
                    onOk: this.handleOk,
                    onCancel: this.handleCancel,
                    footer: null
                  },
                  o.createElement(f.default, {
                    formData: this.state,
                    submitHotspots: this.submitHotspots
                  })
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = g;
    },
    887: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = l(a(0)),
        s = a(3),
        c = a(27),
        u = o(a(476)),
        p = a(346),
        d = {
          labelCol: { sm: { span: 24 }, md: { span: 7 } },
          wrapperCol: { sm: { span: 24 }, md: { span: 17 } }
        },
        f = {
          labelCol: { md: { span: 24 }, lg: { span: 24 }, xl: { span: 7 } },
          wrapperCol: { md: { span: 24 }, lg: { span: 24 }, xl: { span: 17 } }
        },
        m = {
          labelCol: { sm: { span: 24 }, md: { span: 10 }, xl: { span: 5 } },
          wrapperCol: { md: { span: 24 }, xl: { span: 19 } }
        },
        h = { wrapperCol: { sm: { span: 24 }, md: { span: 23 } } },
        g = {
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 24 },
            xl: { span: 22, offset: 2 }
          }
        },
        y = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.slideMarks = function(e, t) {
                var a = {};
                return (
                  (a[t] = {
                    style: { color: "#f50" },
                    label: i.createElement("strong", null, "" + t)
                  }),
                  (a[e] = "" + e),
                  a
                );
              }),
              (a.createRadius = function(e, t, n) {
                return i.createElement(
                  s.Form.Item,
                  r({ key: t }, f, { label: "Radius " + (t + 1) }),
                  i.createElement(
                    s.Row,
                    null,
                    i.createElement(
                      s.Col,
                      { span: 16 },
                      i.createElement(s.Slider, {
                        min: t ? n.places[e].radius[t - 1] : p.RADIUS_1_MIN,
                        max: p.RADIUS_3_MAX,
                        marks: a.slideMarks(
                          t ? n.places[e].radius[t - 1] : p.RADIUS_1_MIN,
                          p.RADIUS_3_MAX
                        ),
                        onChange: function(n) {
                          return a.props.onChangeRadius(n, e, t);
                        },
                        value:
                          "number" == typeof n.places[e].radius[t]
                            ? n.places[e].radius[t]
                            : t
                            ? n.places[e].radius[t - 1]
                            : p.RADIUS_1_MIN
                      })
                    ),
                    i.createElement(
                      s.Col,
                      { span: 8, style: { whiteSpace: "nowrap" } },
                      i.createElement(
                        "div",
                        { style: { display: "inline-block" } },
                        i.createElement(s.InputNumber, {
                          min: t ? n.places[e].radius[t - 1] : p.RADIUS_1_MIN,
                          max: p.RADIUS_3_MAX,
                          style: { marginLeft: 0 },
                          value:
                            "number" == typeof n.places[e].radius[t]
                              ? n.places[e].radius[t]
                              : t
                              ? n.places[e].radius[t - 1]
                              : p.RADIUS_1_MIN,
                          onChange: function(n) {
                            return a.props.onChangeRadius(n, e, t);
                          }
                        })
                      ),
                      " ",
                      t && t == n.places[e].radius.length - 1
                        ? i.createElement(
                            "div",
                            { style: { display: "inline-block" } },
                            " ",
                            i.createElement(s.Icon, {
                              onClick: function() {
                                return a.props.deleteRedi(e);
                              },
                              type: "close"
                            }),
                            " "
                          )
                        : ""
                    )
                  )
                );
              }),
              (a.radiusArr = function(e, t, n) {
                for (var r = [], l = 0; l < t; l++)
                  r.push(a.createRadius(e, l, n));
                return r;
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              for (
                var e = this, t = this.props.formData, a = [], n = 0;
                n < t.places1.length;
                n++
              )
                a.push(
                  i.createElement(
                    "div",
                    { key: n },
                    n
                      ? i.createElement(u.default, {
                          key: n,
                          index: n,
                          onPlaceSelect: this.props.onPlaceSelect,
                          hp: t.places1[n]
                        })
                      : ""
                  )
                );
              return i.createElement(
                c.Auxiliary,
                null,
                i.createElement(
                  "div",
                  { className: "gx-card" },
                  i.createElement(
                    "div",
                    {
                      className: "gx-card-body",
                      style: { overflow: "hidden" }
                    },
                    i.createElement(
                      "div",
                      null,
                      i.createElement(
                        s.Col,
                        null,
                        i.createElement(
                          s.Form,
                          { onSubmit: this.props.handleSubmit },
                          i.createElement(
                            s.Row,
                            null,
                            i.createElement(
                              "div",
                              { style: { width: "100%", marginBottom: 25 } },
                              i.createElement(s.Icon, {
                                type: "environment",
                                style: { color: "#e20464", fontSize: 18 },
                                theme: "filled"
                              }),
                              i.createElement(
                                "span",
                                { style: { fontSize: 20 } },
                                " Place"
                              )
                            )
                          ),
                          i.createElement(
                            "div",
                            null,
                            i.createElement(
                              s.Form.Item,
                              r({}, d, { label: "Name" }),
                              i.createElement(s.Input, {
                                required: !0,
                                placeholder: "Place Name",
                                value: t.places[0].placeName,
                                name: "placeName",
                                onChange: function(t) {
                                  return e.props.handleOnChange(t, 0);
                                }
                              }),
                              i.createElement(
                                "span",
                                { style: { color: "Red" } },
                                t.places[0].errors.placeName
                              )
                            ),
                            i.createElement(
                              s.Form.Item,
                              r({}, d, { label: "Address" }),
                              i.createElement(s.Input, {
                                required: !0,
                                placeholder: "Address",
                                value: t.places[0].address,
                                name: "address",
                                onChange: function(t) {
                                  return e.props.handleOnChange(t, 0);
                                }
                              }),
                              i.createElement(
                                "span",
                                { style: { color: "Red" } },
                                t.places[0].errors.address
                              )
                            ),
                            i.createElement(
                              s.Form.Item,
                              r({}, g),
                              i.createElement(
                                s.Card,
                                { className: "createPlaceCard" },
                                i.createElement(
                                  "p",
                                  {
                                    onClick: function() {
                                      return e.props.getloc(0);
                                    }
                                  },
                                  i.createElement(
                                    "i",
                                    { className: "gx-pointer gx-text-primary" },
                                    i.createElement(s.Icon, { type: "plus" }),
                                    " ",
                                    "  ",
                                    "Pick Location from map"
                                  )
                                ),
                                i.createElement(
                                  s.Form.Item,
                                  r({}, m, { label: "Location" }),
                                  i.createElement(
                                    s.Row,
                                    { gutter: 1 },
                                    i.createElement(
                                      s.Col,
                                      { md: 24, xl: 12 },
                                      i.createElement(s.Input, {
                                        placeholder: "Latitude",
                                        value: t.places[0].center.lat,
                                        type: "number",
                                        step: "0.0001",
                                        name: "latitude",
                                        onChange: function(t) {
                                          return e.props.handleCenterChange(
                                            t,
                                            0,
                                            "lat"
                                          );
                                        }
                                      }),
                                      i.createElement(
                                        "span",
                                        { style: { color: "Red" } },
                                        t.places[0].errors.latitude
                                      )
                                    ),
                                    i.createElement(
                                      s.Col,
                                      { md: 24, xl: 12 },
                                      i.createElement(s.Input, {
                                        placeholder: "Longitude",
                                        value: t.places[0].center.lng,
                                        name: "longitude",
                                        type: "number",
                                        step: "0.0001",
                                        onChange: function(t) {
                                          return e.props.handleCenterChange(
                                            t,
                                            0,
                                            "lng"
                                          );
                                        }
                                      }),
                                      i.createElement(
                                        "span",
                                        { style: { color: "Red" } },
                                        t.places[0].errors.longitude
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                            this.radiusArr(0, t.places[0].radius.length, t),
                            t.places[0].radius.length >= 3 ||
                              500 ==
                                t.places[0].radius[
                                  t.places[0].radius.length - 1
                                ]
                              ? ""
                              : i.createElement(
                                  s.Form.Item,
                                  r({}, h),
                                  i.createElement(
                                    "div",
                                    { style: { float: "right" } },
                                    i.createElement(
                                      "p",
                                      {
                                        onClick: function() {
                                          return e.props.addRadius(0);
                                        },
                                        style: {
                                          float: "right",
                                          color: "#34bfe2"
                                        }
                                      },
                                      i.createElement(
                                        "a",
                                        { href: "#" },
                                        " + Add Fence "
                                      )
                                    )
                                  )
                                ),
                            i.createElement("br", null),
                            i.createElement("br", null)
                          ),
                          t.places1.length > 1
                            ? i.createElement(
                                "p",
                                null,
                                i.createElement(
                                  "span",
                                  null,
                                  i.createElement(s.Icon, {
                                    type: "environment",
                                    style: { color: "#e20464" },
                                    theme: "filled"
                                  }),
                                  "Hotspot"
                                )
                              )
                            : "",
                          a,
                          i.createElement(
                            "p",
                            null,
                            i.createElement(
                              s.Button,
                              { onClick: this.props.showModal },
                              "Add Hotspot"
                            )
                          ),
                          i.createElement(
                            "div",
                            { style: { overflow: "hidden" } },
                            i.createElement(
                              s.Button,
                              {
                                onClick: this.props.handleSubmit,
                                loading: t.loading1,
                                className: "buttonPrimary",
                                style: { float: "right", marginRight: 20 }
                              },
                              t.places[0].id ? "Update" : "Create"
                            )
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
        })(i.Component);
      t.default = y;
    },
    888: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = l(a(352)),
        c = l(a(889)),
        u = l(a(890)),
        p = a(116),
        d = a(102),
        f = a(14),
        m = a(346),
        h = i.Tabs.TabPane,
        g = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.getPlacesData = function(e, t, n) {
                p.nearXClient
                  .query({
                    query: d.SEARCH_PLACES,
                    variables: { limit: t, offset: e, search: n }
                  })
                  .then(function(e) {
                    var t = a.state.places.slice();
                    e.data.Places.places.map(function(e) {
                      t.find(function(t) {
                        return e.id === t.id;
                      }) ||
                        t.push({
                          id: e.id,
                          placeName: e.geofenceName,
                          address: e.address,
                          center: { lat: e.location.lat, lng: e.location.lng },
                          radius: [m.HOTSPOT_RADIUS],
                          selected: !1
                        });
                    }),
                      a.setState({
                        places1: t,
                        totalPlaces: e.data.Places.pageInfo.total
                      });
                  })
                  .catch(function(e) {
                    return console.log("Failed to get Places Details" + e);
                  });
              }),
              (a.pagination = function(e, t) {
                return a.getPlacesData((e - 1) * t, t, a.state.search);
              }),
              (a.onPlaceSelect = function(e, t) {
                var n = a.state,
                  r = n.places,
                  l = n.places1;
                if (t.target.checked) {
                  ((o = l.splice(e, 1))[0].selected = !0),
                    r.push(o[0]),
                    (l = [o[0]].concat(l)),
                    a.setState({ places: r, places1: l, center: o[0].center });
                } else {
                  var o,
                    i = a.state,
                    s = i.places,
                    c = i.places1;
                  s.splice(e, 1),
                    ((o = c.splice(e, 1))[0].selected = !1),
                    c.push(o[0]),
                    a.setState({ places: s, places1: c });
                }
              }),
              (a.handleSearchSubmit = function() {
                a.getPlacesData(0, 5, a.state.search);
              }),
              (a.handleSubmit1 = function() {
                a.props.submitHotspots(a.state.places);
              }),
              (a.handleSubmit = function() {
                var e = 0,
                  t = a.state.places2;
                if (
                  (t.map(function(t) {
                    (t.errors = {}),
                      "" == t.placeName.trim() &&
                        (t.errors.placeName = "* place Name is mandatory"),
                      "" == t.address.trim() &&
                        (t.errors.address = "* address is mandatory"),
                      (null != t.center.lat && NaN != t.center.lat) ||
                        (t.errors.latitude = "* latitude is mandatory"),
                      (null != t.center.lng && NaN != t.center.lng) ||
                        (t.errors.longitude = "* longitude is mandatory"),
                      0 !== Object.keys(t.errors).length && e++;
                  }),
                  e)
                )
                  a.setState({ places2: t }),
                    console.log("Errors in submition");
                else {
                  a.props.submitHotspots(t);
                  var n = [
                    {
                      placeName: "",
                      address: "",
                      selected: !0,
                      center: { lat: null, lng: null },
                      errors: {},
                      radius: [m.HOTSPOT_RADIUS]
                    }
                  ];
                  a.setState({ places2: n });
                }
              }),
              (a.setlocationDetails = function(e, t) {
                var n = a.state.places2;
                (n[a.state.markerPlace].center = { lat: e, lng: t }),
                  NaN != e &&
                    null != e &&
                    (n[a.state.markerPlace].errors.latitude = ""),
                  NaN != t &&
                    null != t &&
                    (n[a.state.markerPlace].errors.longitude = ""),
                  a.setState({ places2: n, getLoc: !1 }),
                  a.state.markerPlace
                    ? a.setState({ places2: n, getLoc: !1 })
                    : a.setState({
                        places2: n,
                        center: n[0].center,
                        getLoc: !1
                      });
              }),
              (a.addHotspot = function() {
                var e = {
                    placeName: "",
                    address: "",
                    selected: !0,
                    center: { lat: null, lng: null },
                    errors: {},
                    radius: [m.HOTSPOT_RADIUS]
                  },
                  t = a.state.places2.concat([e]);
                a.setState({ places2: t });
              }),
              (a.handleOnChange = function(e, t) {
                var n = a.state.places2;
                (n[t][e.target.name] = e.target.value),
                  "" != e.target.value.trim() &&
                    (n[t].errors[e.target.name] = ""),
                  a.setState({ places2: n });
              }),
              (a.handleChange = function(e) {
                var t,
                  n = a.state.errors;
                "" != e.target.value.trim() && (n[e.target.name] = ""),
                  a.setState((((t = {})[e.target.name] = e.target.value), t));
              }),
              (a.handleCenterChange = function(e, t, n) {
                var r = a.state.places2,
                  l = r[t].center.lng,
                  o = r[t].center.lat;
                "lat" == n
                  ? (o = parseFloat(e.target.value))
                  : (l = parseFloat(e.target.value)),
                  NaN != o && null != o && (r[t].errors.latitude = ""),
                  NaN != l && null != l && (r[t].errors.longitude = ""),
                  (r[t].center = { lat: o, lng: l }),
                  t
                    ? a.setState({ places2: r })
                    : a.setState({ places2: r, center: r[0].center });
              }),
              (a.onTabChange = function(e) {
                return a.setState({ tab: parseInt(e) - 1 });
              }),
              (a.deleteHotspot = function(e) {
                var t = a.state.places2;
                t.splice(e, 1), a.setState({ places2: t });
              }),
              (a.deleteHotspot1 = function(e) {
                var t = a.state.places1;
                t.splice(e, 1), a.setState({ places1: t });
              }),
              (a.getloc = function(e) {
                return a.setState({ getLoc: !0, markerPlace: e });
              }),
              (a.showModal = function() {
                a.setState({ visible: !0 });
              }),
              (a.state = {
                places: [],
                places1: [],
                places2: [
                  {
                    placeName: "",
                    address: "",
                    selected: !0,
                    radius: [m.HOTSPOT_RADIUS],
                    center: { lat: null, lng: null },
                    errors: {}
                  }
                ],
                center: { lat: null, lng: null },
                errors: {},
                markerPlace: 1,
                search: "",
                getLoc: !1,
                totalPlaces: 10
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.componentWillMount = function() {
              this.getPlacesData(0, 5, "");
            }),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                null,
                o.createElement(
                  i.Row,
                  null,
                  o.createElement(
                    i.Col,
                    { span: 12 },
                    o.createElement(
                      i.Tabs,
                      { onChange: this.onTabChange, defaultActiveKey: "1" },
                      o.createElement(
                        h,
                        { tab: "Connect To Existing Hotspot", key: "1" },
                        o.createElement(u.default, {
                          handleChange: this.handleChange,
                          handleSubmit1: this.handleSubmit1,
                          deleteHotspot: this.deleteHotspot1,
                          formData: this.state,
                          handleSearchSubmit: this.handleSearchSubmit,
                          pagination: this.pagination,
                          onPlaceSelect: this.onPlaceSelect
                        })
                      ),
                      o.createElement(
                        h,
                        { tab: "Create Custom", key: "2" },
                        o.createElement(c.default, {
                          addHotspot: this.addHotspot,
                          deleteHotspot: this.deleteHotspot,
                          handleOnChange: this.handleOnChange,
                          getloc: this.getloc,
                          handleCenterChange: this.handleCenterChange,
                          handleSubmit: this.handleSubmit,
                          formData: this.state
                        })
                      )
                    )
                  ),
                  o.createElement(
                    i.Col,
                    { xs: 24, sm: 12, span: 12 },
                    o.createElement(
                      i.Affix,
                      { offsetTop: 125 },
                      o.createElement(
                        "div",
                        { style: { marginTop: 15 } },
                        o.createElement(s.default, {
                          mapHeight: "600px",
                          places: this.state.tab
                            ? this.state.places2
                            : this.state.places,
                          setlocationDetails: this.setlocationDetails,
                          mapData: this.state
                        })
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = f.withApollo(g);
    },
    889: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = l(a(0)),
        i = a(3),
        s = a(27),
        c = {
          labelCol: { sm: { span: 24 }, md: { span: 7 } },
          wrapperCol: { sm: { span: 24 }, md: { span: 17 } }
        },
        u = {
          labelCol: { sm: { span: 24 }, md: { span: 10 }, xl: { span: 5 } },
          wrapperCol: { md: { span: 24 }, xl: { span: 19 } }
        },
        p = {
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 24 },
            xl: { span: 22, offset: 2 }
          }
        },
        d = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              for (
                var e = this,
                  t = this.props.formData,
                  a = [],
                  n = function(n) {
                    a.push(
                      o.createElement(
                        "div",
                        { key: n },
                        o.createElement(
                          "p",
                          null,
                          o.createElement(
                            "span",
                            null,
                            o.createElement(i.Icon, {
                              type: "environment",
                              style: { color: "#e20464" },
                              theme: "filled"
                            }),
                            " Hotspot ",
                            " " + (n + 1)
                          ),
                          o.createElement(i.Icon, {
                            type: "close",
                            onClick: function() {
                              return e.props.deleteHotspot(n);
                            },
                            style: { float: "right", marginRight: 1 }
                          })
                        ),
                        o.createElement(
                          i.Form.Item,
                          r({}, c, { label: "Name" }),
                          o.createElement(i.Input, {
                            required: !0,
                            placeholder: "Place Name",
                            value: t.places2[n].placeName,
                            name: "placeName",
                            onChange: function(t) {
                              return e.props.handleOnChange(t, n);
                            }
                          }),
                          o.createElement(
                            "span",
                            { style: { color: "Red" } },
                            " ",
                            t.places2[n].errors.placeName,
                            " "
                          )
                        ),
                        o.createElement(
                          i.Form.Item,
                          r({}, c, { label: "Address" }),
                          o.createElement(i.Input, {
                            required: !0,
                            placeholder: "Address",
                            value: t.places2[n].address,
                            name: "address",
                            onChange: function(t) {
                              return e.props.handleOnChange(t, n);
                            }
                          }),
                          o.createElement(
                            "span",
                            { style: { color: "Red" } },
                            " ",
                            t.places2[n].errors.address,
                            " "
                          )
                        ),
                        o.createElement(
                          i.Form.Item,
                          r({}, p),
                          o.createElement(
                            i.Card,
                            { className: "createPlaceCard" },
                            o.createElement(
                              "p",
                              {
                                onClick: function() {
                                  return e.props.getloc(n);
                                }
                              },
                              o.createElement(
                                "i",
                                { className: "gx-pointer gx-text-primary" },
                                o.createElement(i.Icon, { type: "plus" }),
                                " ",
                                "  ",
                                "Pick Location from map"
                              )
                            ),
                            o.createElement(
                              i.Form.Item,
                              r({}, u, { label: "Location" }),
                              o.createElement(
                                i.Row,
                                { gutter: 1 },
                                o.createElement(
                                  i.Col,
                                  { md: 24, xl: 12 },
                                  o.createElement(i.Input, {
                                    placeholder: "Latitude",
                                    value: t.places2[n].center.lat,
                                    type: "number",
                                    step: "0.0001",
                                    name: "latitude",
                                    onChange: function(t) {
                                      return e.props.handleCenterChange(
                                        t,
                                        n,
                                        "lat"
                                      );
                                    }
                                  }),
                                  o.createElement(
                                    "span",
                                    { style: { color: "Red" } },
                                    " ",
                                    t.places2[n].errors.latitude,
                                    " "
                                  )
                                ),
                                o.createElement(
                                  i.Col,
                                  { md: 24, xl: 12 },
                                  o.createElement(i.Input, {
                                    placeholder: "Longitude",
                                    value: t.places2[n].center.lng,
                                    name: "longitude",
                                    type: "number",
                                    step: "0.0001",
                                    onChange: function(t) {
                                      return e.props.handleCenterChange(
                                        t,
                                        n,
                                        "lng"
                                      );
                                    }
                                  }),
                                  o.createElement(
                                    "span",
                                    { style: { color: "Red" } },
                                    " ",
                                    t.places2[n].errors.longitude,
                                    " "
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    );
                  },
                  l = 0;
                l < t.places2.length;
                l++
              )
                n(l);
              return o.createElement(
                s.Auxiliary,
                null,
                o.createElement(
                  "div",
                  { className: "gx-card" },
                  o.createElement(
                    "div",
                    {
                      className: "gx-card-body addHpForm",
                      style: { overflow: "hidden" }
                    },
                    o.createElement(
                      "div",
                      null,
                      o.createElement(
                        i.Col,
                        null,
                        o.createElement(
                          i.Form,
                          { onSubmit: this.props.handleSubmit },
                          a
                        ),
                        o.createElement(
                          "p",
                          null,
                          o.createElement(
                            i.Button,
                            { onClick: this.props.addHotspot },
                            "Add Hotspot"
                          )
                        ),
                        o.createElement(
                          "div",
                          { style: { overflow: "hidden" } },
                          o.createElement(
                            i.Button,
                            {
                              disabled: !this.props.formData.places2.length,
                              onClick: this.props.handleSubmit,
                              className: "buttonPrimary",
                              style: { float: "right", marginRight: 20 }
                            },
                            "CREATE"
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
        })(o.Component);
      t.default = d;
    },
    890: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = l(a(476)),
        c = i.Input.Search,
        u = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.formData;
              return o.createElement(
                "div",
                null,
                o.createElement(
                  "div",
                  null,
                  o.createElement(c, {
                    placeholder: "Search Nearby Hotspots",
                    value: t.search,
                    size: "large",
                    name: "search",
                    onSearch: this.props.handleSearchSubmit,
                    onPressEnter: this.props.handleSearchSubmit,
                    onChange: function(t) {
                      return e.props.handleChange(t);
                    }
                  }),
                  o.createElement(
                    "span",
                    { style: { color: "Red" } },
                    t.errors.search
                  )
                ),
                this.props.formData.places1.map(function(t, a) {
                  return o.createElement(s.default, {
                    index: a,
                    onPlaceSelect: e.props.onPlaceSelect,
                    key: a,
                    hp: t
                  });
                }),
                this.props.formData.places1.length
                  ? o.createElement(
                      "div",
                      null,
                      o.createElement(
                        "div",
                        { style: { margin: 20 }, className: "divCenter" },
                        o.createElement(i.Pagination, {
                          defaultCurrent: 1,
                          onChange: this.props.pagination,
                          pageSize: 5,
                          total: t.totalPlaces
                        })
                      ),
                      o.createElement(
                        "div",
                        { style: { overflow: "hidden", marginTop: -10 } },
                        o.createElement(
                          i.Button,
                          {
                            onClick: this.props.handleSubmit1,
                            className: "buttonPrimary",
                            style: { float: "right", marginRight: 20 }
                          },
                          "CREATE"
                        )
                      )
                    )
                  : ""
              );
            }),
            t
          );
        })(o.Component);
      t.default = u;
    },
    891: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(a(0)),
        o = a(16),
        i = r(a(892));
      t.default = function(e) {
        var t = e.match;
        return l.createElement(
          o.Switch,
          null,
          l.createElement(o.Route, {
            exact: !0,
            path: t.url,
            component: i.default
          })
        );
      };
    },
    892: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = l(a(0)),
        s = a(3),
        c = o(a(426)),
        u = a(102),
        p = a(116),
        d = a(346),
        f = o(a(506)),
        m = {
          labelCol: { xs: { span: 24 }, sm: { span: 6 } },
          wrapperCol: { xs: { span: 24 }, sm: { span: 12 } }
        },
        h = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 5 },
            xl: { span: 6 }
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 24 },
            md: { span: 19 },
            xl: { span: 16 }
          }
        },
        g = { wrapperCol: { xs: { span: 24 }, sm: { span: 12, offset: 14 } } },
        y = {
          wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 12, offset: 6 }
          }
        },
        _ = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.slideMarks = function(e, t) {
                var a = {};
                return (
                  (a[t] = {
                    style: { color: "#f50" },
                    label: i.createElement("strong", null, "" + t)
                  }),
                  (a[e] = "" + e),
                  a
                );
              }),
              (a.deleteRedi = function(e) {
                var t = a.state.radius;
                t.pop(), a.setState({ radius: t });
              }),
              (a.createRadius = function(e, t) {
                return i.createElement(
                  s.Form.Item,
                  r({ key: e }, h, { label: "Radius " + (e + 1) }),
                  i.createElement(
                    s.Row,
                    null,
                    i.createElement(
                      s.Col,
                      { span: 15 },
                      i.createElement(s.Slider, {
                        min: e ? a.state.radius[e - 1] : d.RADIUS_1_MIN,
                        max: d.RADIUS_3_MAX,
                        marks: a.slideMarks(
                          e ? a.state.radius[e - 1] : d.RADIUS_1_MIN,
                          d.RADIUS_3_MAX
                        ),
                        onChange: function(t) {
                          return a.onChangeRadius(t, e);
                        },
                        value:
                          "number" == typeof a.state.radius[e]
                            ? a.state.radius[e]
                            : e
                            ? a.state.radius[e - 1]
                            : d.RADIUS_1_MIN
                      })
                    ),
                    i.createElement(
                      s.Col,
                      { span: 9 },
                      i.createElement(
                        "div",
                        { style: { display: "inline-block" } },
                        i.createElement(s.InputNumber, {
                          min: e ? a.state.radius[e - 1] : 0,
                          max: d.RADIUS_3_MAX,
                          style: { marginLeft: 0, marginRight: -30 },
                          value:
                            "number" == typeof a.state.radius[e]
                              ? a.state.radius[e]
                              : e
                              ? a.state.radius[e - 1]
                              : d.RADIUS_1_MIN,
                          onChange: function(t) {
                            return a.onChangeRadius(t, e);
                          }
                        })
                      ),
                      " ",
                      e && e == t - 1
                        ? i.createElement(
                            "div",
                            { style: { display: "inline-block" } },
                            "         ",
                            i.createElement(s.Icon, {
                              onClick: function() {
                                return a.deleteRedi(e);
                              },
                              type: "close"
                            }),
                            " "
                          )
                        : ""
                    )
                  )
                );
              }),
              (a.keysUpdate = function() {
                var e = {},
                  t = [];
                a.setState({ loading: !0 });
                var n = f.default.create({
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*"
                    }
                  }),
                  r =
                    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=bengaluru&key=" +
                    a.state.googleAPIkey;
                n.get(r).then(function(n) {
                  "The provided API key is invalid." === n.data.error_message
                    ? ((e.googleAPIkey = "Invalid API key"),
                      a.setState({ loading: !1, errors: e }),
                      s.message.warning("Invalid API key"))
                    : ((t = [
                        {
                          name: d.GOOGLE_API_KEY,
                          key: a.state.googleAPIkey.trim(),
                          type: d.TYPE
                        }
                      ]),
                      "" != a.state.facebookAPIkey.trim() &&
                        t.push({
                          name: d.FACEBOOK_API_KEY,
                          key: a.state.facebookAPIkey,
                          type: d.TYPE
                        }),
                      p.nearXClient
                        .mutate({
                          mutation: u.SET_CONFIGURATION,
                          variables: { input: t }
                        })
                        .then(function(e) {
                          s.message.success("success"),
                            a.setState({ loading: !1 });
                        })
                        .catch(function(e) {
                          a.setState({ loading: !1 }),
                            console.log("Fail " + e),
                            s.message.warning("ERROR");
                        }));
                });
              }),
              (a.radiusUpdate = function() {
                a.setState({ loading1: !0 });
                var e = a.state.radius,
                  t = [];
                e[0] &&
                  e[0] >= d.RADIUS_1_MIN &&
                  t.push({
                    name: d.RADIUS_1,
                    key: e[0].toString(),
                    type: d.TYPE
                  }),
                  e[1] &&
                    e[1] > e[0] &&
                    t.push({
                      name: d.RADIUS_2,
                      key: e[1].toString(),
                      type: d.TYPE
                    }),
                  e[2] &&
                    e[2] > e[1] &&
                    t.push({
                      name: d.RADIUS_3,
                      key: e[2].toString(),
                      type: d.TYPE
                    }),
                  p.nearXClient
                    .mutate({
                      mutation: u.SET_CONFIGURATION,
                      variables: { input: t }
                    })
                    .then(function(e) {
                      s.message.success("success"),
                        a.setState({ loading1: !1 });
                    })
                    .catch(function(e) {
                      a.setState({ loading1: !1 }),
                        console.log("Fail " + e),
                        s.message.warning("ERROR");
                    });
              }),
              (a.addRadius = function() {
                var e = a.state.radius;
                e.push(e[e.length - 1] + 1), a.setState({ radius: e });
              }),
              (a.radiusArr = function(e) {
                for (var t = [], n = 0; n < e; n++)
                  t.push(a.createRadius(n, e));
                return t;
              }),
              (a.handleOnChange = function(e) {
                var t;
                "" != e.target.value.trim() &&
                  (a.state.errors[e.target.name] = ""),
                  a.setState((((t = {})[e.target.name] = e.target.value), t));
              }),
              (a.onChangeRadius = function(e, t) {
                var n = a.state.radius;
                (n[t] = e), a.setState({ radius: n });
              }),
              (a.state = {
                errors: {},
                googleAPIkey: "",
                facebookAPIkey: "",
                radius: [d.RADIUS_1_MIN],
                loading: !1,
                loading1: !1
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              var e,
                t = this,
                a = "",
                n = [d.RADIUS_1_MIN];
              p.nearXClient
                .query({
                  query: u.GET_CONFIGURATION,
                  variables: {},
                  fetchPolicy: "network-only"
                })
                .then(function(r) {
                  console.log("Results", r.data.getConfiguration),
                    r.data.getConfiguration.map(function(t) {
                      t.name === d.GOOGLE_API_KEY && (e = t.key),
                        t.name === d.FACEBOOK_API_KEY && (a = t.key),
                        t.name === d.RADIUS_1 && (n[0] = parseInt(t.key)),
                        t.name === d.RADIUS_2 && (n[1] = parseInt(t.key)),
                        t.name === d.RADIUS_3 && (n[2] = parseInt(t.key));
                    }),
                    t.setState({
                      googleAPIkey: e,
                      facebookAPIkey: a,
                      radius: n
                    });
                })
                .catch(function(e) {
                  return console.log("Failed to get Places Details" + e);
                });
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state.radius;
              return i.createElement(
                "div",
                { className: "gx-main-content-wrapper" },
                i.createElement(
                  c.default,
                  null,
                  i.createElement(
                    "p",
                    { style: { fontSize: 22 } },
                    " ",
                    i.createElement(s.Icon, {
                      type: "setting",
                      style: { color: "#e20464" },
                      theme: "filled"
                    }),
                    " ",
                    "Settings"
                  ),
                  i.createElement(
                    "div",
                    {
                      className:
                        "gx-card ant-col ant-col-xs-24 ant-col-sm-22 ant-col-md-20 ant-col-xl-18 ant-col-xxl-16"
                    },
                    i.createElement(
                      "div",
                      { className: "gx-card-body" },
                      i.createElement(
                        "div",
                        null,
                        i.createElement(
                          s.Col,
                          null,
                          i.createElement(
                            s.Form,
                            { onSubmit: this.props.handleSubmit },
                            i.createElement(
                              "p",
                              { style: { fontSize: 18, color: "#969696" } },
                              "Authentication Keys"
                            ),
                            i.createElement(
                              s.Form.Item,
                              r({}, m, { label: "Google API key" }),
                              i.createElement(s.Input, {
                                required: !0,
                                placeholder: "Google API key",
                                value: this.state.googleAPIkey,
                                name: "googleAPIkey",
                                onChange: function(t) {
                                  return e.handleOnChange(t);
                                }
                              }),
                              i.createElement(
                                "span",
                                { style: { color: "Red" } },
                                this.state.errors.googleAPIkey
                              ),
                              i.createElement(
                                "div",
                                {
                                  style: {
                                    color: "#34bfe2",
                                    margin: 10,
                                    float: "right"
                                  }
                                },
                                i.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href:
                                      "https://developers.google.com/maps/documentation/javascript/get-api-key"
                                  },
                                  " Get Google API key "
                                )
                              )
                            ),
                            i.createElement(
                              s.Form.Item,
                              r({}, y),
                              i.createElement(
                                s.Button,
                                {
                                  type: "primary",
                                  loading: this.state.loading,
                                  onClick: function() {
                                    return e.keysUpdate();
                                  }
                                },
                                "Update"
                              )
                            ),
                            i.createElement("br", null),
                            i.createElement(
                              "p",
                              { style: { fontSize: 18, color: "#969696" } },
                              "Default Radius"
                            ),
                            this.radiusArr(t.length),
                            t.length >= 3 || 500 == t[t.length - 1]
                              ? ""
                              : i.createElement(
                                  s.Form.Item,
                                  r({}, g),
                                  i.createElement(
                                    "span",
                                    {
                                      onClick: function() {
                                        return e.addRadius();
                                      },
                                      style: { color: "#34bfe2" }
                                    },
                                    i.createElement(
                                      "a",
                                      { href: "#" },
                                      " +Add Radius "
                                    )
                                  )
                                ),
                            i.createElement(
                              s.Form.Item,
                              r({}, y),
                              i.createElement(
                                s.Button,
                                {
                                  type: "primary",
                                  onClick: function() {
                                    return e.radiusUpdate();
                                  },
                                  loading: this.state.loading1
                                },
                                "Update"
                              )
                            ),
                            i.createElement("br", null)
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
        })(i.Component);
      t.default = _;
    },
    893: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(16),
        s = l(a(894)),
        c = l(a(897)),
        u = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                "div",
                null,
                o.default.createElement(
                  i.Switch,
                  null,
                  o.default.createElement(i.Route, {
                    exact: !0,
                    path: this.props.match.url,
                    component: c.default
                  }),
                  o.default.createElement(i.Route, {
                    exact: !0,
                    path: this.props.match.url + "/create",
                    component: s.default
                  })
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = u;
    },
    894: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = l(a(0)),
        i = a(3);
      a(895);
      var s = a(37),
        c = a(116),
        u = a(102),
        p = l(a(33)),
        d = a(14),
        f = i.Select.Option,
        m = {
          labelCol: {
            sm: { span: 24 },
            md: { span: 24 },
            lg: { span: 24 },
            xl: { span: 8 }
          },
          wrapperCol: {
            sm: { span: 24 },
            md: { span: 24 },
            lg: { span: 24 },
            xl: { span: 16 }
          }
        },
        h = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.choosePlatform = function(e) {
                a.setState({ platform: e.target.name });
              }),
              (a.getAppDetails = function(e) {
                console.log("APPDATA>>>", e),
                  a.setState({
                    id: e.id,
                    appName: e.appName,
                    description: e.discription,
                    platform: e.platform,
                    organizationId: e.org_id,
                    update: !0
                  });
              }),
              (a.handleOnChange = function(e) {
                var t;
                a.setState((((t = {})[e.target.name] = e.target.value), t));
              }),
              (a.onChange = function(e, t) {
                a.setState({ organizationId: e });
              }),
              (a.handleSubmit = function() {
                var e = {};
                "" == a.state.appName.trim() &&
                  (e.appName = "* this field is mandatory"),
                  "" == a.state.platform &&
                    (e.platform = "* select your platform"),
                  "" == a.state.organizationId &&
                    (e.organizationId = "* this field is mandatory"),
                  0 !== Object.keys(e).length
                    ? (a.setState({ errors: e }),
                      console.log(
                        "Errors in submition" + Object.keys(e).length
                      ))
                    : a.state.update
                    ? (a.setState({ loading: !0 }),
                      a.props.client
                        .mutate({
                          mutation: s.UPDATE_APP,
                          variables: {
                            input: {
                              id: a.state.id,
                              name: a.state.appName,
                              description: a.state.description,
                              platform: a.state.platform
                            }
                          }
                        })
                        .then(function(e) {
                          console.log("Results", e),
                            a.setState({ loading: !1 }),
                            a.props.history.push("/nearx/apps");
                        })
                        .catch(function(e) {
                          console.log("Failed to get Places Details" + e),
                            a.setState({ loading: !1 });
                        }))
                    : (a.setState({ loading: !0 }),
                      c.nearXClient
                        .mutate({
                          mutation: u.CREATE_APP,
                          variables: {
                            organizationId: a.state.organizationId,
                            input: {
                              name: a.state.appName,
                              description: a.state.description,
                              platform: a.state.platform
                            }
                          }
                        })
                        .then(function(e) {
                          console.log("Results", e),
                            a.setState({ loading: !1 }),
                            a.props.history.push("/nearx/apps");
                        })
                        .catch(function(e) {
                          console.log(
                            "Failed to get Places Details" + e.graphQLErrors
                          ),
                            console.log(
                              e && e.graphQLErrors
                                ? e.graphQLErrors[0].errorCode
                                : "Error in submitting the form"
                            ),
                            e.graphQLErrors[0].message &&
                              i.message.warn(e.graphQLErrors[0].message),
                            a.setState({ loading: !1 });
                        }));
              }),
              (a.state = {
                organizations: [],
                update: !1,
                id: "",
                errors: {},
                loading: !1,
                firstName: "",
                lastName: "",
                appName: "",
                description: "",
                platform: "",
                organizationId: ""
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.componentDidMount = function() {}),
            (t.prototype.UNSAFE_componentWillMount = function() {
              var e = this,
                t = p.decode(localStorage.getItem("jwt")),
                a = t.id,
                n = t.org_id;
              this.setState({ userId: a, org_id: n }),
                sessionStorage.getItem("AppData") &&
                  this.getAppDetails(
                    JSON.parse(sessionStorage.getItem("AppData"))
                  ),
                sessionStorage.removeItem("AppData"),
                a
                  ? this.props.client
                      .query({
                        query: s.USER_DATA,
                        variables: { userId: a },
                        fetchPolicy: "cache-first"
                      })
                      .then(function(t) {
                        console.log(t.data.user),
                          e.setState({
                            firstName: t.data.user.firstName,
                            lastName: t.data.user.lastName
                          });
                      })
                      .catch(function(e) {
                        return console.log("Failed to get User Details" + e);
                      })
                  : console.log("Error getting JwtData"),
                n
                  ? this.props.client
                      .query({
                        query: s.GET_ALL_APPS_OF_ORGANIZATION,
                        variables: { id: n },
                        fetchPolicy: "network-only"
                      })
                      .then(function(t) {
                        console.log(t.data);
                        var a = [];
                        !(function e(t, a) {
                          a.push({ name: t.name, id: t.id }),
                            t &&
                              t.children &&
                              t.children.map(function(t) {
                                return e(t, a);
                              });
                        })(t.data.organization, a),
                          e.setState({ organizations: a });
                      })
                      .catch(function(e) {
                        console.log("Failed to get User Details" + e);
                      })
                  : console.log("Error getting JwtData");
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state,
                a =
                  (t.firstName,
                  t.lastName,
                  this.state.organizations.map(function(e, t) {
                    return o.createElement(f, { key: t, value: e.id }, e.name);
                  }));
              return o.createElement(
                "div",
                { className: "gx-card" },
                o.createElement(
                  "div",
                  {
                    className: "gx-card-body",
                    style: {
                      backgroundColor: "#ffffff",
                      height: "90vh",
                      minHeight: "700px"
                    }
                  },
                  o.createElement(
                    "div",
                    { style: { height: "100%" } },
                    o.createElement(
                      "div",
                      { className: "divCenter" },
                      o.createElement(
                        i.Col,
                        { sm: 18, md: 13, lg: 13, xl: 12 },
                        o.createElement(
                          "div",
                          { style: { textAlign: "center" } },
                          o.createElement(
                            "p",
                            {
                              style: {
                                fontSize: 25,
                                marginBottom: 50,
                                alignContent: "center",
                                justifyContent: "center"
                              }
                            },
                            "Integrate your App with ",
                            o.createElement("b", null, "NearX")
                          )
                        ),
                        o.createElement(
                          i.Form,
                          { className: "appForm" },
                          o.createElement(
                            i.Form.Item,
                            r({}, m, { label: "App Name" }),
                            o.createElement(i.Input, {
                              id: "myInput",
                              placeholder: "App Name",
                              value: this.state.appName,
                              size: "large",
                              name: "appName",
                              onChange: function(t) {
                                return e.handleOnChange(t);
                              }
                            }),
                            o.createElement(
                              "span",
                              { style: { color: "Red" } },
                              this.state.errors.appName
                            )
                          ),
                          o.createElement(
                            i.Form.Item,
                            r({}, m, { label: "Choose Platform" }),
                            o.createElement(
                              i.Button,
                              {
                                name: "Android",
                                onClick: function(t) {
                                  return e.choosePlatform(t);
                                },
                                type:
                                  "Android" === this.state.platform
                                    ? "primary"
                                    : null
                              },
                              o.createElement(i.Icon, {
                                type: "android",
                                theme: "filled"
                              }),
                              " Android",
                              " "
                            ),
                            o.createElement(
                              i.Button,
                              {
                                name: "IOS",
                                onClick: function(t) {
                                  return e.choosePlatform(t);
                                },
                                type:
                                  "IOS" === this.state.platform
                                    ? "primary"
                                    : null
                              },
                              o.createElement(i.Icon, {
                                type: "apple",
                                theme: "filled"
                              }),
                              " IOS",
                              " "
                            ),
                            o.createElement(
                              "span",
                              { style: { color: "Red" } },
                              this.state.errors.platform
                            )
                          ),
                          this.state.update
                            ? ""
                            : o.createElement(
                                i.Form.Item,
                                r({}, m, { label: "Industry" }),
                                o.createElement(
                                  i.Select,
                                  {
                                    showSearch: !0,
                                    size: "large",
                                    style: { width: "100%" },
                                    placeholder: "Select Industy",
                                    getPopupContainer: function(e) {
                                      return e.parentNode;
                                    },
                                    optionFilterProp: "children",
                                    onChange: this.onChange,
                                    filterOption: function(e, t) {
                                      return (
                                        t.props.children
                                          .toLowerCase()
                                          .indexOf(e.toLowerCase()) >= 0
                                      );
                                    }
                                  },
                                  a
                                ),
                                o.createElement(
                                  "span",
                                  { style: { color: "Red" } },
                                  this.state.errors.organizationId
                                )
                              ),
                          o.createElement(
                            i.Form.Item,
                            r({}, m, { label: "Description (Optional)" }),
                            o.createElement(i.Input, {
                              required: !0,
                              placeholder: "Description (Optional)",
                              value: this.state.description,
                              size: "large",
                              name: "description",
                              onChange: function(t) {
                                return e.handleOnChange(t);
                              }
                            }),
                            o.createElement(
                              "span",
                              { style: { color: "Red" } },
                              this.state.errors.description
                            )
                          ),
                          o.createElement(
                            "div",
                            {
                              style: { overflow: "hidden", textAlign: "center" }
                            },
                            o.createElement(
                              i.Button,
                              {
                                onClick: function() {
                                  return e.handleSubmit();
                                },
                                loading: this.state.loading,
                                className: "buttonPrimary",
                                style: {
                                  textAlign: "center",
                                  width: "200px",
                                  float: "none",
                                  margin: "25px 30px 20px 0"
                                }
                              },
                              this.state.update ? "Update App" : "Create App"
                            )
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
        })(o.Component);
      t.default = d.compose(d.withApollo)(h);
    },
    895: function(e, t, a) {},
    897: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(a(0)),
        i = a(3),
        s = l(a(898)),
        c = a(37),
        u = r(a(33)),
        p = a(14),
        d = l(a(431)),
        f = i.Input.TextArea,
        m = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.addApp = function() {
                a.props.history.push("/nearx/apps/create");
              }),
              (a.test = function() {
                a.setState({ visible: !0 });
              }),
              (a.handleCancel = function() {
                a.setState({ visible: !1 });
              }),
              (a.handleOk = function() {}),
              (a.copy = function() {}),
              (a.handleSubmit = function() {}),
              (a.getAppsList = function(e) {
                a.props.client
                  .query({
                    query: c.GET_ALL_APPS_OF_ORGANIZATION,
                    variables: { id: e.org_id },
                    fetchPolicy: "no-cache"
                  })
                  .then(function(e) {
                    var t = [];
                    !(function e(t, a) {
                      t &&
                        t.applications &&
                        t.applications.map(function(e) {
                          return a.push({
                            id: e.id,
                            org_id: t.id,
                            appName: e.name,
                            industry: t.name,
                            platform: e.platform,
                            discription: e.description
                          });
                        }),
                        t &&
                          t.children &&
                          t.children.map(function(t) {
                            return e(t, a);
                          });
                    })(e.data.organization, t),
                      a.setState({ appsList: t, spin: !1 });
                  })
                  .catch(function(e) {
                    a.setState({ spin: !1 }),
                      console.log("Failed to get User Details" + e);
                  });
              }),
              (a.deleteApp = function(e) {
                a.props.client
                  .mutate({ mutation: c.DELETE_APP, variables: { id: e } })
                  .then(function(e) {})
                  .catch(function(e) {
                    a.setState({ spin: !1 }),
                      console.log("Failed to Delete App" + e);
                  });
              }),
              (a.genereteToken = function(e, t) {
                a.props.client
                  .mutate({
                    mutation: c.GENERATE_API_KEY,
                    variables: { id: t, env: d.default.env }
                  })
                  .then(function(t) {
                    var n = a.state.appsList;
                    (n[e].appKey = t.data.generateAPIKey.api_key),
                      a.setState({ appsList: n });
                  })
                  .catch(function(e) {
                    console.log("Failed" + e);
                  });
              }),
              (a.state = { visible: !1, appsList: [], spin: !1 }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              this.setState({ spin: !0 });
              var e = u.decode(localStorage.getItem("jwt"));
              e
                ? this.getAppsList(e)
                : (this.setState({ spin: !1 }),
                  console.log("Error getting JwtData"));
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state.appsList ? this.state.appsList : [];
              return (
                console.log(t),
                o.createElement(
                  "div",
                  null,
                  o.createElement(
                    i.Row,
                    { className: "headerRow1" },
                    o.createElement(
                      "div",
                      { style: { width: "100%" } },
                      o.createElement(
                        "span",
                        { style: { fontSize: 25 } },
                        "Apps"
                      ),
                      o.createElement(
                        "div",
                        { style: { float: "right", flexFlow: "right" } },
                        o.createElement(
                          i.Button,
                          {
                            style: { margin: 0 },
                            onClick: function() {
                              return e.addApp();
                            },
                            className: "buttonPrimary"
                          },
                          "Add App"
                        )
                      )
                    )
                  ),
                  o.createElement("br", null),
                  this.state.spin
                    ? o.createElement(
                        "div",
                        null,
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null),
                        o.createElement(
                          "div",
                          { className: "divCenter" },
                          o.createElement(i.Spin, { size: "large" })
                        ),
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null),
                        " ",
                        o.createElement("br", null)
                      )
                    : this.state.appsList.length
                    ? o.createElement(
                        "div",
                        null,
                        o.createElement(
                          i.Row,
                          { className: "placeTableHeaders" },
                          o.createElement(i.Col, { span: 4 }, "Name"),
                          o.createElement(
                            i.Col,
                            { sm: 4, md: 4, lg: 4, xl: 4, xxl: 5 },
                            "Industry"
                          ),
                          o.createElement(i.Col, { span: 2 }, "Platform"),
                          o.createElement(i.Col, { span: 5 }, "Description"),
                          o.createElement(i.Col, { span: 5 }, "Key"),
                          o.createElement(
                            i.Col,
                            { sm: 3, md: 3, lg: 3, xl: 3, xxl: 2 },
                            "Test"
                          ),
                          o.createElement(i.Col, { span: 1 })
                        ),
                        this.state.appsList.map(function(t, a) {
                          return o.createElement(s.default, {
                            genereteToken: e.genereteToken,
                            history: e.props.history,
                            deleteApp: e.deleteApp,
                            test: e.test,
                            key: a,
                            index: a,
                            data: t
                          });
                        })
                      )
                    : o.createElement(
                        "div",
                        null,
                        o.createElement(
                          "div",
                          { style: { margin: 80, fontSize: 25 } },
                          o.createElement(
                            "div",
                            { className: "divCenter" },
                            o.createElement("div", null, "No Apps Found")
                          ),
                          o.createElement(
                            "div",
                            { className: "divCenter" },
                            o.createElement(
                              i.Button,
                              {
                                onClick: function() {
                                  return e.addApp();
                                },
                                style: { margin: 22, fontSize: 18 },
                                className: "buttonPrimary"
                              },
                              "Create New App"
                            )
                          )
                        )
                      ),
                  o.createElement(
                    i.Modal,
                    {
                      width: "750px",
                      key: "model",
                      title: "Test Your App",
                      visible: this.state.visible,
                      onOk: this.handleOk,
                      onCancel: this.handleCancel,
                      footer: null
                    },
                    o.createElement(
                      "div",
                      null,
                      o.createElement(
                        i.Row,
                        null,
                        o.createElement(
                          i.Col,
                          { span: 16 },
                          o.createElement(
                            "div",
                            null,
                            o.createElement(
                              "div",
                              {
                                style: { marginBottom: 3, fontSize: 15 },
                                className: "gx-text-primary gx-pointer"
                              },
                              o.createElement(
                                "i",
                                null,
                                "How to integrate NearX with your App?"
                              )
                            ),
                            o.createElement(
                              "div",
                              null,
                              'Download the Android SDK and and paste the API key in place of "APP_AUTH_KEY" in SDK. Testing geofence is inactive now.'
                            )
                          )
                        ),
                        o.createElement(
                          i.Col,
                          { span: 8 },
                          o.createElement(
                            "div",
                            {
                              style: { overflow: "hidden", textAlign: "right" }
                            },
                            o.createElement(
                              "div",
                              { style: { textAlign: "center" } },
                              o.createElement(
                                "a",
                                {
                                  target: "_blank",
                                  href:
                                    "https://drive.google.com/open?id=1W3UCxBm3LxSCdWhjvkHZIr_GmcR5Y3Jq"
                                },
                                o.createElement(
                                  i.Button,
                                  {
                                    onClick: this.handleSubmit,
                                    loading: this.state.loading,
                                    className: "buttonPrimary",
                                    style: { margin: "0px 30px 10px 20px" }
                                  },
                                  "Download ARR"
                                )
                              ),
                              o.createElement("div", null, "NearX ARR file"),
                              o.createElement(
                                "div",
                                null,
                                " Integration reference ",
                                o.createElement(
                                  "a",
                                  {
                                    target: "_blank",
                                    href:
                                      "https://nearx.getwalk.in/docs/integrations"
                                  },
                                  "here"
                                )
                              )
                            )
                          )
                        )
                      ),
                      o.createElement("br", null),
                      o.createElement(
                        "i",
                        null,
                        "Testing feature will be coming Soon...."
                      ),
                      o.createElement(
                        "div",
                        { style: { opacity: 0.5 } },
                        o.createElement(
                          i.Row,
                          { style: { marginTop: 30 } },
                          o.createElement(
                            i.Col,
                            { span: 14 },
                            o.createElement(f, {
                              placeholder:
                                "Autosize height with minimum and maximum number of lines",
                              autosize: { minRows: 20, maxRows: 20 }
                            })
                          ),
                          o.createElement(
                            i.Col,
                            { style: { display: "flex" }, span: 10 },
                            o.createElement(
                              "div",
                              {
                                style: {
                                  alignContent: "baseline",
                                  display: "inline-block",
                                  alignSelf: "flex-end"
                                }
                              },
                              o.createElement(
                                i.Timeline,
                                { pending: "...Checking" },
                                o.createElement(
                                  i.Timeline.Item,
                                  {
                                    dot: o.createElement(i.Icon, {
                                      type: "check-circle",
                                      theme: "filled"
                                    }),
                                    color: "green"
                                  },
                                  "Successfully registered Geofences"
                                ),
                                o.createElement(
                                  i.Timeline.Item,
                                  {
                                    dot: o.createElement(i.Icon, {
                                      type: "check-circle",
                                      theme: "filled"
                                    }),
                                    color: "green"
                                  },
                                  "Detected Geofence for hardcoded location"
                                ),
                                o.createElement(
                                  i.Timeline.Item,
                                  {
                                    dot: o.createElement(i.Icon, {
                                      type: "close-circle",
                                      theme: "filled"
                                    }),
                                    color: "red"
                                  },
                                  "Webhook invoked"
                                )
                              )
                            )
                          )
                        ),
                        o.createElement("br", null),
                        o.createElement(
                          i.Row,
                          null,
                          o.createElement(
                            i.Col,
                            null,
                            o.createElement(
                              "i",
                              {
                                style: {
                                  margin: "20px 10px 20px 40px",
                                  fontSize: 20
                                }
                              },
                              "Check Now"
                            )
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
        })(o.Component);
      t.default = p.withApollo(m);
    },
    898: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3),
        i = ["Edit", "Delete"],
        s = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.menus = function() {
                return l.createElement(
                  o.Menu,
                  {
                    onClick: function(e) {
                      "Delete" === e.key
                        ? t.props.deleteApp(t.props.data.id)
                        : "Edit" === e.key &&
                          (sessionStorage.setItem(
                            "AppData",
                            JSON.stringify(t.props.data)
                          ),
                          t.props.history.push("/nearx/apps/create"));
                    }
                  },
                  " ",
                  i.map(function(e) {
                    return l.createElement(
                      o.Menu.Item,
                      { key: e },
                      "  ",
                      e,
                      "  "
                    );
                  })
                );
              }),
              (t.copy = function() {
                var e = document.getElementById(t.props.data.appKey);
                e.select(),
                  document.execCommand("copy"),
                  console.log("Copied Key: " + e.value);
              }),
              t
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.data;
              return l.createElement(
                o.Card,
                { className: "placesListCard" },
                l.createElement(
                  o.Row,
                  null,
                  l.createElement(
                    o.Col,
                    { span: 4 },
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement(
                        "div",
                        null,
                        l.createElement(
                          o.Row,
                          null,
                          l.createElement(
                            "span",
                            { style: { color: "black", marginBottom: 5 } },
                            t.appName
                          )
                        )
                      )
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { sm: 4, md: 4, lg: 4, xl: 4, xxl: 5 },
                    " ",
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement("span", null, t.industry)
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 2 },
                    " ",
                    l.createElement(
                      "div",
                      {
                        style: { fontSize: 40, marginLeft: 10 },
                        className: "divCenterVertical"
                      },
                      t.platform
                        ? "android" === t.platform.toLowerCase()
                          ? l.createElement(o.Icon, {
                              type: "android",
                              theme: "filled"
                            })
                          : l.createElement(o.Icon, {
                              type: "apple",
                              theme: "filled"
                            })
                        : ""
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 5 },
                    l.createElement(
                      "div",
                      {
                        style: { width: "100%" },
                        className: "divCenterVertical"
                      },
                      l.createElement(
                        "span",
                        { className: "gx-text-truncate gx-contact-name" },
                        t.discription
                      )
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 5 },
                    t.appKey
                      ? l.createElement(o.Input, {
                          size: "large",
                          value: t.appKey,
                          id: t.appKey,
                          suffix: l.createElement(
                            o.Tooltip,
                            { title: "Copy" },
                            l.createElement(o.Icon, {
                              type: "copy",
                              onClick: function() {
                                return e.copy();
                              },
                              theme: "twoTone"
                            })
                          )
                        })
                      : l.createElement(
                          "div",
                          { className: "divCenterVertical" },
                          l.createElement(
                            o.Button,
                            {
                              style: { margin: 0 },
                              onClick: function() {
                                return e.props.genereteToken(
                                  e.props.index,
                                  e.props.data.id
                                );
                              }
                            },
                            " Generate Key"
                          ),
                          " "
                        )
                  ),
                  l.createElement(
                    o.Col,
                    { lg: 3, xl: 3, xxl: 2 },
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement(
                        o.Button,
                        {
                          style: { margin: 0 },
                          onClick: function() {
                            return e.props.test();
                          }
                        },
                        " Test App"
                      )
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { style: { paddingLeft: 0 }, span: 1 },
                    l.createElement(
                      "div",
                      { className: "gx-module-contact-right divCenter" },
                      l.createElement(
                        o.Dropdown,
                        {
                          overlay: this.menus(),
                          placement: "bottomRight",
                          trigger: ["click"]
                        },
                        l.createElement("i", {
                          className: "gx-icon-btn icon icon-ellipse-v"
                        })
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = s;
    },
    899: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(a(0)),
        o = a(16),
        i = r(a(900));
      t.default = function(e) {
        var t = e.match;
        return l.createElement(
          o.Switch,
          null,
          l.createElement(o.Route, {
            exact: !0,
            path: t.url,
            component: i.default
          })
        );
      };
    },
    900: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = l(a(0)),
        s = a(3),
        c = a(37),
        u = l(a(33)),
        p = a(14),
        d = (s.Input.TextArea, o(a(901))),
        f = s.Select.Option,
        m = u.decode(localStorage.getItem("jwt")),
        h = {
          labelCol: {
            sm: { span: 24 },
            md: { span: 24 },
            lg: { span: 24 },
            xl: { span: 8 }
          },
          wrapperCol: {
            sm: { span: 24 },
            md: { span: 24 },
            lg: { span: 24 },
            xl: { span: 16 }
          }
        },
        g = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (
              (a.addHook = function() {
                a.setState({ visible: !0, errors: {} });
              }),
              (a.handleCancel = function() {
                a.state.update
                  ? a.setState({
                      visible: !1,
                      errors: {},
                      hookName: "",
                      event: "",
                      update: !1,
                      id: "",
                      headers: "",
                      url: "",
                      method: "",
                      loading: !1
                    })
                  : a.setState({ visible: !1, update: !1 });
              }),
              (a.getWebhooks = function() {
                a.setState({ spin: !0 }),
                  m
                    ? a.props.client
                        .query({
                          query: c.GET_WEBHOOKS,
                          variables: { org_id: m.org_id, status: "ACTIVE" },
                          fetchPolicy: "network-only"
                        })
                        .then(function(e) {
                          console.log(e.data.webhooks),
                            a.setState({
                              hooksList: e.data.webhooks,
                              spin: !1
                            });
                        })
                        .catch(function(e) {
                          a.setState({ spin: !1 }),
                            console.log("Failed to get User Details" + e);
                        })
                    : console.log("Error getting JwtData");
              }),
              (a.onChange = function(e, t) {
                var n = a.state.errors;
                (n.event = ""), a.setState({ event: e, errors: n });
              }),
              (a.onChangeMethod = function(e, t) {
                var n = a.state.errors;
                (n.method = ""), a.setState({ method: e, errors: n });
              }),
              (a.handleOnChange = function(e) {
                var t,
                  n = a.state.errors;
                (n[e.target.name] = ""),
                  a.setState(
                    (((t = {})[e.target.name] = e.target.value),
                    (t.errors = n),
                    t)
                  );
              }),
              (a.deleteHook = function(e) {
                a.props.client
                  .mutate({
                    mutation: c.DELETE_WEBHOOK,
                    variables: { input: { id: e } }
                  })
                  .then(function(e) {
                    console.log("Results", e), a.getWebhooks();
                  })
                  .catch(function(e) {
                    a.setState({ loading: !1 }),
                      console.log("Failed to Delete Hooks" + e);
                  });
              }),
              (a.createHook = function() {
                a.setState({ loading: !0 });
                var e = {};
                "" == a.state.event && (e.event = "* this field is mandatory"),
                  "" == a.state.url.trim() &&
                    (e.url = "* this field is mandatory"),
                  "" == a.state.method &&
                    (e.method = "* this field is mandatory"),
                  0 !== Object.keys(e).length
                    ? (a.setState({ errors: e, loading: !1 }),
                      console.log(
                        "Errors in submition" + Object.keys(e).length
                      ))
                    : a.state.update
                    ? a.props.client
                        .mutate({
                          mutation: c.UPDATE_WEBHOOK,
                          variables: {
                            input: {
                              id: a.state.id,
                              method: a.state.method,
                              url: a.state.url,
                              headers: a.state.headers
                            }
                          }
                        })
                        .then(function(e) {
                          console.log("Results", e),
                            a.handleCancel(),
                            a.getWebhooks();
                        })
                        .catch(function(e) {
                          a.setState({ loading: !1 }),
                            console.log("Failed to get Hooks Details" + e);
                        })
                    : a.props.client
                        .mutate({
                          mutation: c.CREATE_WEBHOOK,
                          variables: {
                            input: {
                              event: a.state.event,
                              method: a.state.method,
                              url: a.state.url,
                              headers: a.state.headers,
                              organization_id: m.org_id
                            }
                          }
                        })
                        .then(function(e) {
                          console.log("Results", e),
                            a.setState({ visible: !1, loading: !1 }),
                            a.getWebhooks();
                        })
                        .catch(function(e) {
                          a.setState({ loading: !1 }),
                            console.log("Failed to get Places Details" + e);
                        });
              }),
              (a.updateHook = function(e) {
                console.log(e),
                  a.setState({
                    loading: !1,
                    update: !0,
                    visible: !0,
                    event: e.event,
                    id: e.id,
                    headers: JSON.stringify(e.headers).toString(),
                    url: e.url,
                    method: e.method
                  });
              }),
              (a.state = {
                visible: !1,
                hooksList: [],
                update: !1,
                spin: !1,
                loading: !1,
                eventTypes: [],
                hookName: "",
                headers: "",
                event: "",
                method: "",
                url: "",
                id: "",
                errors: {}
              }),
              a
            );
          }
          return (
            n(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              var e = this;
              this.getWebhooks(),
                this.props.client
                  .query({
                    query: c.LIST_WEBHOOK_EVENTS,
                    variables: { org_id: m.org_id, status: "ACTIVE" }
                  })
                  .then(function(t) {
                    console.log(t.data.webhookEventTypes),
                      e.setState({ eventTypes: t.data.webhookEventTypes });
                  })
                  .catch(function(e) {
                    return console.log("Failed to get Event Types" + e);
                  });
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state.eventTypes.map(function(e, t) {
                  return i.createElement(
                    f,
                    { key: t, value: e.event },
                    e.event
                  );
                });
              return i.createElement(
                "div",
                null,
                i.createElement(
                  s.Row,
                  { className: "headerRow1" },
                  i.createElement(
                    "div",
                    { style: { width: "100%" } },
                    i.createElement(
                      "span",
                      { style: { fontSize: 25 } },
                      "Web Hooks"
                    ),
                    i.createElement(
                      "div",
                      { style: { float: "right", flexFlow: "right" } },
                      i.createElement(
                        s.Button,
                        {
                          style: { margin: 0 },
                          onClick: function() {
                            return e.addHook();
                          },
                          className: "buttonPrimary"
                        },
                        "Add Hook"
                      )
                    )
                  )
                ),
                i.createElement("br", null),
                this.state.spin
                  ? i.createElement(
                      "div",
                      null,
                      i.createElement("br", null),
                      " ",
                      i.createElement("br", null),
                      " ",
                      i.createElement("br", null),
                      " ",
                      i.createElement("br", null),
                      i.createElement(
                        "div",
                        { className: "divCenter" },
                        i.createElement(s.Spin, { size: "large" })
                      ),
                      i.createElement("br", null),
                      " ",
                      i.createElement("br", null),
                      " ",
                      i.createElement("br", null)
                    )
                  : this.state.hooksList.length
                  ? i.createElement(
                      "div",
                      null,
                      i.createElement(
                        s.Row,
                        { className: "placeTableHeaders" },
                        i.createElement(s.Col, { span: 4 }, "Event"),
                        i.createElement(s.Col, { span: 2 }, "Method"),
                        i.createElement(s.Col, { span: 2 }, "Status"),
                        i.createElement(s.Col, { span: 7 }, "Headers"),
                        i.createElement(s.Col, { span: 7 }, "Url")
                      ),
                      this.state.hooksList.map(function(t, a) {
                        return i.createElement(d.default, {
                          key: a,
                          updateHook: e.updateHook,
                          deleteHook: e.deleteHook,
                          data: t
                        });
                      })
                    )
                  : i.createElement(
                      "div",
                      { style: { margin: 100, fontSize: 25 } },
                      i.createElement(
                        "div",
                        { className: "divCenter" },
                        "No Hooks Present"
                      ),
                      i.createElement(
                        "div",
                        { className: "divCenter" },
                        i.createElement(
                          s.Button,
                          {
                            style: { margin: 30, fontSize: 18 },
                            onClick: function() {
                              return e.addHook();
                            },
                            className: "buttonPrimary"
                          },
                          "Create New Hook"
                        )
                      )
                    ),
                i.createElement(
                  s.Modal,
                  {
                    width: "600px",
                    key: "model1",
                    visible: this.state.visible,
                    onOk: this.createHook,
                    onCancel: this.handleCancel,
                    title: "Create Webhook",
                    footer: null
                  },
                  i.createElement(
                    s.Form,
                    { className: "appForm" },
                    this.state.update
                      ? ""
                      : i.createElement(
                          s.Form.Item,
                          r({}, h, { label: "Event Type" }),
                          i.createElement(
                            s.Select,
                            {
                              showSearch: !0,
                              size: "large",
                              getPopupContainer: function(e) {
                                return e.parentNode;
                              },
                              style: { width: "100%" },
                              placeholder: "Select Event Type",
                              optionFilterProp: "children",
                              onChange: this.onChange
                            },
                            t
                          ),
                          i.createElement(
                            "span",
                            { style: { color: "Red" } },
                            this.state.errors.event
                          )
                        ),
                    i.createElement(
                      s.Form.Item,
                      r({}, h, { label: "Method" }),
                      i.createElement(
                        s.Select,
                        {
                          size: "large",
                          style: { width: "100%" },
                          placeholder: "Select method",
                          optionFilterProp: "children",
                          value: this.state.method,
                          getPopupContainer: function(e) {
                            return e.parentNode;
                          },
                          onChange: this.onChangeMethod
                        },
                        i.createElement(f, { value: "POST" }, "POST"),
                        i.createElement(f, { value: "GET" }, "GET"),
                        i.createElement(f, { value: "PUT" }, "PUT"),
                        i.createElement(f, { value: "DELETE" }, "DELETE")
                      ),
                      i.createElement(
                        "span",
                        { style: { color: "Red" } },
                        this.state.errors.method
                      )
                    ),
                    i.createElement(
                      s.Form.Item,
                      r({}, h, { label: "Headers (Optional)" }),
                      i.createElement(s.Input, {
                        placeholder: "Headers (Optional)",
                        value: this.state.headers,
                        size: "large",
                        name: "headers",
                        onChange: function(t) {
                          return e.handleOnChange(t);
                        }
                      }),
                      i.createElement(
                        "span",
                        { style: { color: "Red" } },
                        this.state.errors.headers
                      )
                    ),
                    i.createElement(
                      s.Form.Item,
                      r({}, h, { label: "URL" }),
                      i.createElement(s.Input, {
                        required: !0,
                        placeholder: "Enter URL",
                        value: this.state.url,
                        size: "large",
                        name: "url",
                        onChange: function(t) {
                          return e.handleOnChange(t);
                        }
                      }),
                      i.createElement(
                        "span",
                        { style: { color: "Red" } },
                        this.state.errors.url
                      )
                    ),
                    i.createElement(
                      "div",
                      { style: { overflow: "hidden", textAlign: "center" } },
                      i.createElement(
                        s.Button,
                        {
                          loading: this.state.loading,
                          onClick: function() {
                            return e.createHook();
                          },
                          className: "buttonPrimary",
                          style: {
                            textAlign: "center",
                            width: "200px",
                            float: "none",
                            margin: "25px 30px 20px 0"
                          }
                        },
                        "Submit"
                      )
                    )
                  ),
                  i.createElement("br", null)
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = p.withApollo(g);
    },
    901: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = r(a(0)),
        o = a(3),
        i = ["Edit", "Delete"],
        s = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.menus = function() {
                return l.createElement(
                  o.Menu,
                  {
                    onClick: function(e) {
                      "Edit" === e.key
                        ? t.props.updateHook(t.props.data)
                        : "Delete" === e.key &&
                          t.props.deleteHook(t.props.data.id);
                    }
                  },
                  " ",
                  i.map(function(e) {
                    return l.createElement(
                      o.Menu.Item,
                      { key: e },
                      "  ",
                      e,
                      "  "
                    );
                  })
                );
              }),
              (t.copy = function() {
                var e = document.getElementById(t.props.data.appKey);
                e.select(),
                  document.execCommand("copy"),
                  console.log("Copied Key: " + e.value);
              }),
              t
            );
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this.props.data;
              return l.createElement(
                o.Card,
                { className: "placesListCard" },
                l.createElement(
                  o.Row,
                  null,
                  l.createElement(
                    o.Col,
                    { span: 4 },
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement(
                        "div",
                        null,
                        l.createElement(
                          o.Row,
                          null,
                          l.createElement(
                            "span",
                            { style: { color: "black", marginBottom: 5 } },
                            e.event
                          )
                        )
                      )
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 2 },
                    " ",
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement("span", null, e.method)
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 2 },
                    " ",
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement("span", null, e.status)
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 7 },
                    " ",
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement("span", null, JSON.stringify(e.headers))
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { span: 8 },
                    " ",
                    l.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      l.createElement(
                        "span",
                        { style: { wordBreak: "break-all" } },
                        e.url
                      )
                    )
                  ),
                  l.createElement(
                    o.Col,
                    { style: { paddingLeft: 0 }, span: 1 },
                    l.createElement(
                      "div",
                      { className: "gx-module-contact-right divCenter" },
                      l.createElement(
                        o.Dropdown,
                        {
                          overlay: this.menus(),
                          placement: "bottomRight",
                          trigger: ["click"]
                        },
                        l.createElement("i", {
                          className: "gx-icon-btn icon icon-ellipse-v"
                        })
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = s;
    },
    902: function(e, t, a) {
      "use strict";
      var n =
          (this && this.__extends) ||
          (function() {
            var e = function(t, a) {
              return (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function(e, t) {
                    e.__proto__ = t;
                  }) ||
                function(e, t) {
                  for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
                })(t, a);
            };
            return function(t, a) {
              function n() {
                this.constructor = t;
              }
              e(t, a),
                (t.prototype =
                  null === a
                    ? Object.create(a)
                    : ((n.prototype = a.prototype), new n()));
            };
          })(),
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, a = 1, n = arguments.length; a < n; a++)
                  for (var r in (t = arguments[a]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        l =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var a in e)
                Object.hasOwnProperty.call(e, a) && (t[a] = e[a]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = l(a(0)),
        i = a(3);
      a(475);
      var s = i.Upload.Dragger,
        c = (function(e) {
          function t(t) {
            var a = e.call(this, t) || this;
            return (a.state = { fileList: [] }), a;
          }
          return (
            n(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = {
                  name: "file",
                  className: "upload-list-csv",
                  multiple: !0,
                  accept: ".csv",
                  beforeUpload: function(e, t) {
                    var a = new FileReader();
                    a.result;
                    return (
                      (a.onload = function() {}),
                      a.readAsBinaryString(e),
                      (e.status = "done"),
                      !1
                    );
                  },
                  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
                  onChange: function(t) {
                    var a = t.fileList.slice();
                    (a = (a = a.slice(-1)).map(function(e) {
                      return e.response && (e.url = e.response.url), e;
                    })),
                      e.setState({ fileList: a });
                  }
                };
              return o.createElement(
                "div",
                null,
                o.createElement(
                  s,
                  r({}, t, { fileList: this.state.fileList }),
                  o.createElement(
                    "p",
                    { className: "ant-upload-drag-icon" },
                    o.createElement(i.Icon, { type: "inbox" })
                  ),
                  o.createElement(
                    "p",
                    { className: "ant-upload-text" },
                    "Click or drag file to this area to upload"
                  ),
                  o.createElement(
                    "p",
                    { className: "ant-upload-hint" },
                    "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"
                  )
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = c;
    }
  },
  [[860, 2, 0, 1]]
]);
//# sourceMappingURL=walkinNearX.91dfeaa1.js.map
