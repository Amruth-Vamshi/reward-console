(window.webpackJsonp = window.webpackJsonp || []).push([
  [9, 4],
  {
    248: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3),
        i = n(27);
      t.default = function(e) {
        var t = e.campaign,
          n = e.history;
        return r.createElement(
          i.Widget,
          {
            styleName: "gx-card-full",
            extra: r.createElement("i", {
              className: "icon icon-setting gx-text-grey gx-fs-xl"
            })
          },
          r.createElement(
            o.Row,
            { type: "flex", justify: "center" },
            r.createElement(
              o.Col,
              null,
              r.createElement("h2", null, t.name ? t.name : "No Title")
            )
          ),
          r.createElement(
            o.Row,
            { type: "flex", justify: "center" },
            r.createElement(
              o.Col,
              null,
              r.createElement("p", { className: "gx-text-grey" }, t.status)
            )
          ),
          r.createElement(
            o.Row,
            { type: "flex", justify: "center" },
            r.createElement(
              o.Col,
              null,
              r.createElement(o.Tag, null, " ", t.organization.name, " "),
              r.createElement(o.Tag, null, " ", t.application.name, " ")
            )
          ),
          r.createElement(
            o.Row,
            { style: { paddingTop: "2%" }, type: "flex", justify: "center" },
            r.createElement(
              o.Col,
              null,
              "ACTIVE" == t.status
                ? r.createElement(
                    o.Button,
                    {
                      type: "primary",
                      onClick: function() {
                        console.log("clicked"),
                          n.push("/refinex/campaign/" + t.id + "/edit");
                      }
                    },
                    "Edit"
                  )
                : r.createElement(
                    o.Button,
                    {
                      type: "primary",
                      onClick: function() {
                        console.log("clicked"),
                          n.push("/refinex/campaign/" + t.id + "/edit");
                      }
                    },
                    "Continue Editing"
                  )
            )
          )
        );
      };
    },
    249: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(n(0)),
        i = r(n(250)),
        l = r(n(257));
      n(260),
        (t.CampaignPriority = function(e) {
          e.buttons;
          var t = e.promptText,
            n = e.tootTipText,
            a = e.prioritySelectionTitle,
            r = e.priorityButtonText,
            s = e.testControlTitle,
            u = e.testControlPercentage,
            c = e.testControlPercentageEditText,
            p = e.priorityNumberInvalidErrorMessage,
            d = e.onTestAndControlEdit,
            m = e.handleChange,
            f = e.priorityChosen,
            h = e.HideTestConstrol;
          e.text, e.onClick;
          return o.default.createElement(
            o.Fragment,
            null,
            o.default.createElement(
              "div",
              {
                style: { padding: 15 },
                className: "campaignPriorityContainerStyle prioritySection"
              },
              o.default.createElement(i.default, {
                priorityChosen: f,
                prioritySelectionTitle: a,
                priorityButtonText: r,
                priorityNumberInvalidErrorMessage: p,
                onClick: m
              })
            ),
            h
              ? null
              : o.default.createElement(
                  "div",
                  { className: "campaignPriorityContainerStyle" },
                  o.default.createElement(l.default, {
                    testControlTitle: s,
                    testControlPercentage: u,
                    promptText: t,
                    tootTipText: n,
                    testControlPercentageEditText: c,
                    onTestAndControlEdit: d
                  })
                )
          );
        });
    },
    250: function(e, t, n) {
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
        l = n(3);
      n(251);
      var s = o(n(253)),
        u = l.Typography.Text,
        c = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.displayError = function(e) {
                var t;
                n.setState((((t = {})[e] = !0), t), function() {
                  setTimeout(function() {
                    var t;
                    n.setState((((t = {})[e] = !1), t));
                  }, 4e3);
                });
              }),
              (n.validateCampaignPriority = function(e) {
                var t = e.target.value;
                (!Number.isNaN(t) && t > 0 && t <= n.state.maxPriority) ||
                "" === t
                  ? (n.setState({ priorityChosen: t }), n.props.onClick(e))
                  : n.displayError("priorityNumberError");
              }),
              (n.handleButtonGroup = function(e) {
                var t = e.target.value;
                n.props.onClick(e), n.setState({ priorityChosen: t });
              }),
              (n.state = {
                priorityChosen: n.props.priorityChosen
                  ? parseInt(n.props.priorityChosen)
                  : 3,
                priorityNumberError: !1,
                maxPriority: n.props.maxPriority
                  ? parseInt(n.props.maxPriority)
                  : 99
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.prioritySelectionTitle,
                n = e.priorityButtonText,
                a = e.priorityNumberInvalidErrorMessage,
                r = (e.selectedPriorityButton, this.state),
                o = r.priorityChosen,
                c = r.priorityNumberError;
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(u, null, t),
                i.createElement(
                  "div",
                  { className: "prioritySelectionContainer" },
                  i.createElement(s.default, {
                    selectedPriorityButton: o,
                    handleChange: this.handleButtonGroup,
                    maxPriority: this.state.maxPriority
                  }),
                  i.createElement(l.Input, {
                    style: { marginLeft: 10 },
                    className: "prioritySelectionInputStyle",
                    placeholder: n,
                    onChange: this.validateCampaignPriority,
                    value: o,
                    type: "number"
                  })
                ),
                c && i.createElement(l.Alert, { message: a, type: "error" })
              );
            }),
            t
          );
        })(i.Component);
      t.default = c;
    },
    251: function(e, t, n) {},
    253: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3),
        i = n(254);
      n(255);
      t.default = function(e) {
        var t = e.selectedPriorityButton,
          n = void 0 === t ? 3 : t,
          a = e.handleChange,
          l = e.maxPriority,
          s = void 0 === l ? 99 : l,
          u = i.toNumber(n);
        return (
          u || (u = 1),
          r.createElement(
            o.Radio.Group,
            {
              defaultValue: 0 !== u ? u : 3,
              value: 0 !== u ? u : 3,
              buttonStyle: "solid",
              onChange:
                a ||
                function(e) {
                  console.log(e);
                }
            },
            u > 2 &&
              r.createElement(
                o.Radio.Button,
                { className: "allButtonStyle", value: u - 2 },
                u ? u - 2 : 1
              ),
            u > 1 &&
              r.createElement(
                o.Radio.Button,
                { className: "allButtonStyle", value: u - 1 },
                u ? u - 1 : 2
              ),
            r.createElement(
              o.Radio.Button,
              { className: "allButtonStyle", value: u || 3 },
              u || 3
            ),
            u + 1 <= s
              ? r.createElement(
                  o.Radio.Button,
                  { className: "allButtonStyle", value: u + 1 },
                  u ? u + 1 : 4
                )
              : "",
            u + 2 <= s &&
              r.createElement(
                o.Radio.Button,
                { className: "allButtonStyle", value: u + 2 },
                u ? u + 2 : 5
              )
          )
        );
      };
    },
    254: function(e, t, n) {
      "use strict";
      var a = this;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.toNumber = function(e) {
          var t = parseFloat(e);
          return !isNaN(t) && isFinite(e) ? t : 0;
        }),
        (t.removeProp = function(e, t) {
          for (var n in e)
            if ("object" == typeof e[n]) {
              e[n];
              delete e.property;
              var r = a.removeProp(e[n], t);
              e[n] = r;
            } else n === t && delete e[n];
          return e;
        });
    },
    255: function(e, t, n) {},
    257: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      n(258);
      var i = o.Typography.Text;
      t.default = function(e) {
        var t = e.testControlTitle,
          n = e.promptText,
          a = e.tootTipText,
          l = e.testControlPercentage,
          s = e.testControlPercentageEditText,
          u = e.onTestAndControlEdit;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            { className: "testControlContainer" },
            r.createElement(i, null, t),
            r.createElement(
              o.Tooltip,
              { title: n },
              r.createElement("span", { className: "tooltipTextStyle" }, a)
            )
          ),
          r.createElement(
            "div",
            { className: "testControlPercentageStyle" },
            r.createElement(i, null, l),
            r.createElement(
              o.Button,
              {
                className: "testAndControlButtonStyle",
                type: "link",
                onClick: u
              },
              s
            )
          )
        );
      };
    },
    258: function(e, t, n) {},
    260: function(e, t, n) {},
    262: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = o(n(0)),
        s = n(3),
        u = i(n(5)),
        c = s.Form.create({ name: "form_in_modal" })(
          (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.checkStart = function(e, n, a) {
                  var r = t.props.form.validateFields;
                  t.props.edit && a(),
                    n.valueOf() < u.default()
                      ? a("start time should not be less than present time")
                      : (r(["endTime"], { force: !0 }), a());
                }),
                (t.checkEnd = function(e, n, a) {
                  n || a(), t.props.edit && a();
                  var r = n;
                  console.log("value", n);
                  var o = (0, t.props.form.getFieldValue)("startTime");
                  r.valueOf() < o.valueOf()
                    ? a("end time should not be less than start time")
                    : a();
                }),
                t
              );
            }
            return (
              a(t, e),
              (t.prototype.render = function() {
                var e,
                  t = this.props,
                  n = t.form,
                  a = t.onFormNext,
                  o = t.wrappedComponentRef,
                  i = t.formValues,
                  c = void 0 === i ? {} : i,
                  p = (t.text, t.edit, u.default().add(10, "m"));
                0 != Object.keys(c).length &&
                  ((p = u.default(c.startTime)), (e = u.default(c.endTime)));
                var d = n.getFieldDecorator,
                  m = { labelCol: { span: 15 }, wrapperCol: { span: 18 } },
                  f = { wrapperCol: { span: 18 }, labelCol: { span: 18 } };
                return l.createElement(
                  s.Form,
                  { layout: "vertical", ref: o, onSubmit: a },
                  l.createElement(
                    s.Form.Item,
                    r({ label: "Campaign name" }, m),
                    d("name", {
                      initialValue:
                        "" +
                        (0 != Object.keys(c).length && c.name ? c.name : ""),
                      rules: [
                        {
                          transform: function(e) {
                            return e.trim();
                          }
                        },
                        { required: !0, message: "Name is required" }
                      ]
                    })(
                      l.createElement(s.Input, {
                        required: !0,
                        maxLength: 80,
                        size: "large"
                      })
                    )
                  ),
                  l.createElement(
                    s.Form.Item,
                    r({ label: "Description" }, m),
                    d("description", {
                      initialValue:
                        "" +
                        (0 != Object.keys(c).length && c.description
                          ? c.description
                          : "")
                    })(
                      l.createElement(s.Input, {
                        type: "textarea",
                        size: "large"
                      })
                    )
                  ),
                  l.createElement(
                    s.Form.Item,
                    r(
                      {
                        style: {
                          display: "inline-block",
                          width: "calc(50% - 12px)"
                        },
                        label: "Start date"
                      },
                      f
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
                      l.createElement(s.DatePicker, {
                        showTime: !0,
                        format: "DD-MM-YYYY HH:mm:ss"
                      })
                    )
                  ),
                  l.createElement(
                    s.Form.Item,
                    r(
                      {
                        style: {
                          display: "inline-block",
                          width: "calc(50% - 12px)"
                        },
                        label: "End date"
                      },
                      f
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
                      l.createElement(s.DatePicker, {
                        showTime: !0,
                        format: "DD-MM-YYYY HH:mm:ss"
                      })
                    )
                  )
                );
              }),
              t
            );
          })(l.Component)
        );
      t.default = c;
    },
    263: function(e, t, n) {
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
        i = n(3);
      n(264);
      var l = r(n(1)),
        s = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.limitRange = function(e) {
                e >= n.props.maxValueAllowed &&
                  (n.props.onTestValueChange(e),
                  n.props.onControlValueChange(100 - e));
              }),
              (n.state = {}),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.testValue,
                n = e.controlValue;
              return o.createElement(
                "div",
                null,
                o.createElement(i.Slider, {
                  marks: {
                    0: {
                      style: { left: "10%", width: "100%" },
                      label: "Test Group: " + (t || 95)
                    },
                    100: {
                      style: { left: "90%", width: "100%" },
                      label: "Control Group: " + (n || 5)
                    }
                  },
                  value: t || 95,
                  onChange: this.limitRange
                })
              );
            }),
            t
          );
        })(o.Component);
      (s.propTypes = {
        testValue: l.number,
        controlValue: l.number,
        maxValueAllowed: l.number
      }),
        (s.defaultProps = {
          testValue: 95,
          controlValue: 5,
          maxValueAllowed: 75
        }),
        (t.default = s);
    },
    264: function(e, t, n) {},
    266: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      n(267);
      t.default = function(e) {
        var t = e.title,
          n = e.visible,
          a = e.handleCancel,
          i = e.handleOk,
          l = e.popupContent,
          s = e.buttonText,
          u = e.handleOnClick;
        return r.createElement(
          o.Modal,
          {
            visible: n,
            title: t,
            onOk: i,
            onCancel: a,
            footer: [
              r.createElement(
                "div",
                { className: "popupFooterStyle" },
                r.createElement(
                  o.Button,
                  { key: "submit", type: "primary", size: "large", onClick: u },
                  s
                )
              )
            ]
          },
          l
        );
      };
    },
    267: function(e, t, n) {},
    269: function(e, t, n) {
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
        i = n(3);
      n(270);
      var l = i.Select.Option,
        s = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.UNSAFE_componentWillReceiveProps = function(e) {
                var t = n.state.errors;
                n.setState({ errors: e.errors ? e.errors : t });
              }),
              (n.state = {
                values: n.props.values ? n.props.values : [""],
                errors: n.props.errors ? n.props.errors : {}
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.addClick = function() {
              var e = this.state.values;
              console.log(e[e.length - 1]),
                "" != e[e.length - 1] &&
                  this.setState({ values: this.state.values.concat([""]) });
            }),
            (t.prototype.handleChange = function(e, t) {
              var n = this.state.values.slice();
              n.find(function(e) {
                return e == t;
              }) ||
                ((n[e] = t),
                this.setState({ values: n }),
                this.props.onValuesSelected(n)),
                (n[0] && "" != n[0]) || (this.state.errors.segment = "");
            }),
            (t.prototype.removeClick = function(e, t) {
              var n = this.state.values.slice();
              -1 !== e &&
                (n.splice(e, 1),
                this.setState({ values: n }),
                this.props.onValuesSelected(n));
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.segmentSelectionData;
              return o.createElement(
                o.Fragment,
                null,
                this.state.values.map(function(n, a) {
                  return o.createElement(
                    "div",
                    { key: a, className: "selectSegmentBoxContainer" },
                    o.createElement(
                      i.Select,
                      {
                        showSearch: !0,
                        placeholder: "Choose from the list",
                        value: n || void 0,
                        style: { width: "50%" },
                        getPopupContainer: function(e) {
                          return e.parentNode;
                        },
                        optionFilterProp: "children",
                        onChange: e.handleChange.bind(e, a)
                      },
                      t &&
                        t.map(function(e, t) {
                          return o.createElement(
                            l,
                            { key: t, value: e.id },
                            " ",
                            e.name
                          );
                        })
                    ),
                    o.createElement(i.Icon, {
                      type: "close",
                      onClick: e.removeClick.bind(e, a)
                    })
                  );
                }),
                o.createElement(
                  "div",
                  { style: { color: "Red", marginTop: 10 } },
                  this.state.errors.segment,
                  " "
                ),
                o.createElement(
                  i.Button,
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
        })(o.Component);
      t.default = s;
    },
    270: function(e, t, n) {},
    272: function(e, t, n) {
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
        r =
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
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = r(n(394)),
        l = o(n(0)),
        s = o(n(1));
      n(273);
      for (var u = n(3).Select.Option, c = [], p = 10; p < 36; p++)
        c.push(
          l.createElement(u, { key: p.toString(36) + p }, p.toString(36) + p)
        );
      var d = (function(e) {
        function t() {
          var t = (null !== e && e.apply(this, arguments)) || this;
          return (
            (t.removeProp = function(e, n) {
              for (var a in e)
                if ("object" == typeof e[a]) {
                  e[a];
                  delete e.property;
                  var r = t.removeProp(e[a], n);
                  e[a] = r;
                } else a === n && delete e[a];
              return e;
            }),
            (t.renameQueryProperties = function(e) {
              var n = JSON.stringify(e),
                a = {
                  field: "attributeName",
                  value: "attributeValue",
                  operator: "expressionType"
                };
              n = n.replace(/field|value|operator/gi, function(e) {
                return a[e];
              });
              var r = JSON.parse(n);
              t.props.onQueryChange(r, e);
            }),
            (t.handleMultiSelect = function(e) {}),
            t
          );
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.operators,
              n = e.fields,
              a = e.query;
            return l.createElement(
              "div",
              { className: "flex-box-outer" },
              l.createElement("hr", null),
              l.createElement(
                "div",
                { className: "flex-box" },
                l.createElement(
                  "div",
                  { className: "scroll" },
                  l.createElement(i.default, {
                    fields: n,
                    controlClassnames: { fields: "form-control" },
                    onQueryChange: this.renameQueryProperties,
                    operators: t,
                    query: a
                  })
                )
              )
            );
          }),
          t
        );
      })(l.Component);
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
    273: function(e, t, n) {},
    275: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      t.default = function(e) {
        var t = e.columns,
          n = e.data,
          a = e.onChange,
          i = e.pagination,
          l = e.loading,
          s = e.rowKey;
        return r.createElement(o.Table, {
          className: "gx-table-responsive",
          dataSource: n,
          onChange: a,
          columns: t,
          pagination: i,
          loading: l,
          rowKey: s
        });
      };
    },
    276: function(e, t, n) {
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
        i = n(3).Input.Search,
        l = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.onChange = function(e, t) {
              var n = [];
              (n =
                "" !== t.target.value
                  ? e.filter(function(e) {
                      var n = e.name.toLowerCase(),
                        a = t.target.value.toLowerCase();
                      return n.includes(a);
                    })
                  : e),
                this.props.onFilteredList(n);
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.placeHolder,
                n = e.data;
              return o.createElement(
                "div",
                { className: "gx-search-bar gx-lt-icon-search-bar" },
                o.createElement(
                  "div",
                  { className: "gx-form-group" },
                  o.createElement(i, {
                    style: { width: 200 },
                    placeholder: t,
                    allowClear: !0,
                    onChange: this.onChange.bind(this, n)
                  })
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = l;
    },
    277: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      n(278);
      var i = a(n(1)),
        l = function(e) {
          var t = e.children;
          return r.createElement(
            o.Row,
            { className: "campaignHeaderStyle" },
            t
          );
        };
      (l.propTypes = { isOnlyTitle: i.bool, children: i.object }),
        (l.defaultProps = { isOnlyTitle: !1, children: {} }),
        (t.default = l);
    },
    278: function(e, t, n) {},
    280: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      n(281);
      t.default = function(e) {
        var t = e.nextButtonText,
          n = e.loading,
          a = e.saveDraftText,
          i = e.saveDraftButtonClass,
          l = e.nextButtonClass,
          s = e.saveDraft,
          u = e.goToPage2;
        return r.createElement(
          "div",
          { className: "" },
          r.createElement(
            o.Button,
            { loading: n, className: l, onClick: u, type: "primary" },
            t
          ),
          a &&
            r.createElement(
              o.Button,
              { className: i, onClick: s, type: "link" },
              a
            )
        );
      };
    },
    281: function(e, t, n) {},
    283: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      n(284);
      var i = o.Steps.Step;
      t.default = function(e) {
        var t = e.stepData,
          n = e.current,
          a = e.onChange;
        e.onClick;
        return r.createElement(
          o.Steps,
          {
            onChange: a,
            className: "stepsStyle",
            size: "small",
            labelPlacement: "vertical",
            current: n
          },
          t &&
            t.map(function(e, t) {
              return r.createElement(i, {
                key: "col-" + t,
                title: e.title,
                status: e.status
              });
            })
        );
      };
    },
    284: function(e, t, n) {},
    286: function(e, t, n) {
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
        l = n(3),
        s = l.Typography.Title,
        u = o(n(5));
      n(287);
      var c = (function(e) {
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
          a(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.campaign,
              n = e.audience,
              a = e.offer,
              r = e.communication,
              o = e.view,
              c = e.totalAudienceCount,
              p = u.default(),
              d = u.default(t.startTime),
              m = u.default(t.endTime),
              f = "";
            if (p < d) {
              var h = u.default.duration(p.diff(d)).humanize();
              f = "To Start";
            } else if (p < m) {
              h = u.default.duration(p.diff(m)).humanize();
              f = "To End";
            } else f = "Completed";
            var g = u.default(t.startTime).format("DD-MMM-YYYY HH:mm:ss"),
              y = u.default(t.endTime).format("DD-MMM-YYYY HH:mm:ss");
            return (
              console.log(this.props),
              i.createElement(
                "div",
                { className: "campaignOverview" },
                !1 === o
                  ? i.createElement(
                      s,
                      { level: 3, className: "gx-text-grey" },
                      "Overview"
                    )
                  : "",
                i.createElement(
                  "div",
                  { style: { margin: "20px 10px 20px 30px" } },
                  i.createElement(
                    l.Row,
                    null,
                    i.createElement(
                      l.Col,
                      { style: { paddingLeft: 0 }, sm: 24, md: 16 },
                      i.createElement(
                        "div",
                        { className: "cpName" },
                        " ",
                        t.name,
                        " "
                      ),
                      i.createElement(
                        "div",
                        { className: "cpDec mb-15" },
                        null != t.description ? t.description : ""
                      ),
                      i.createElement(
                        "div",
                        { className: "cpDaysLeft mb-30" },
                        i.createElement(
                          "b",
                          { style: { textTransform: "capitalize" } },
                          h || ""
                        ),
                        "  ",
                        "Completed" == f
                          ? i.createElement(
                              "div",
                              null,
                              i.createElement(l.Icon, {
                                style: { color: "#00b707" },
                                type: "check-circle",
                                theme: "filled"
                              }),
                              "   ",
                              f
                            )
                          : f
                      )
                    ),
                    i.createElement(
                      l.Col,
                      { sm: 24, md: 8 },
                      i.createElement(
                        "div",
                        { className: "divCenterVertical" },
                        o && "Completed" != f
                          ? "DRAFT" == t.campaignStatus
                            ? i.createElement(
                                l.Button,
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
                            : i.createElement(
                                "div",
                                null,
                                ("LIVE" == t.campaignStatus ||
                                  "PAUSE" == t.campaignStatus) &&
                                  i.createElement(
                                    l.Button,
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
                  i.createElement(
                    "div",
                    { className: "mb-25" },
                    i.createElement(
                      l.Row,
                      null,
                      i.createElement(
                        l.Col,
                        { className: "mb-10", md: 24, lg: 8 },
                        "Start date    :   ",
                        g
                      ),
                      i.createElement(
                        l.Col,
                        { className: "mb-10", md: 24, lg: 8 },
                        "End date    :   ",
                        y
                      ),
                      i.createElement(
                        l.Col,
                        { className: "mb-10", md: 24, lg: 8 },
                        i.createElement(l.Progress, {
                          style: {
                            width: "250px",
                            margin: "0px 5px 0px 5px",
                            color: "#654665"
                          },
                          percent: Math.round(
                            (u.default().diff(u.default(t.startTime), "hours") /
                              u
                                .default(t.endTime)
                                .diff(u.default(t.startTime), "hours")) *
                              100
                          ),
                          showInfo: !0,
                          status: "active"
                        })
                      )
                    )
                  ),
                  t.feedbackForm
                    ? i.createElement(
                        "div",
                        { className: "mb-25" },
                        i.createElement("h3", null, "Form "),
                        i.createElement(
                          l.Row,
                          null,
                          i.createElement(
                            l.Col,
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
                  n && n.length
                    ? i.createElement(
                        "div",
                        { className: "mb-25" },
                        i.createElement(
                          l.Row,
                          null,
                          i.createElement(
                            l.Col,
                            {
                              className: "AudienceTitle",
                              sm: 16,
                              md: 12,
                              xl: 10,
                              xxl: 9
                            },
                            i.createElement("h3", null, "Audience")
                          ),
                          i.createElement(
                            l.Col,
                            null,
                            "Total Reach : ",
                            c || "6412",
                            " "
                          )
                        ),
                        n.map(function(e, t) {
                          return i.createElement(
                            l.Row,
                            { key: t, style: { marginBottom: 10 } },
                            i.createElement(
                              l.Col,
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
                            i.createElement(l.Col, {
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
                  a &&
                    i.createElement(
                      "div",
                      { className: "mb-25" },
                      i.createElement("h3", null, "Offer"),
                      i.createElement(
                        l.Row,
                        null,
                        i.createElement(
                          l.Col,
                          {
                            xs: 24,
                            sm: 24,
                            md: 17,
                            xl: 14,
                            xxl: 12,
                            className: "offerBg"
                          },
                          a.name
                        )
                      )
                    ),
                  r &&
                    i.createElement(
                      "div",
                      { className: "mb-25" },
                      i.createElement("h3", null, "Communication"),
                      i.createElement(
                        l.Row,
                        null,
                        i.createElement(
                          l.Col,
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
      })(i.Component);
      t.default = c;
    },
    287: function(e, t, n) {},
    289: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(3),
        i = r(n(0)),
        l = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return i.default.createElement(
                o.Button,
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
        })(i.default.Component);
      t.default = l;
    },
    290: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = n(3),
        i = r(n(0)),
        l = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return i.default.createElement(o.Icon, {
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
        })(i.default.Component);
      t.default = l;
    },
    291: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(417)),
        l = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.onChange = function(e) {
                console.log("Content change:", e), n.setState({ str: e });
              }),
              (n.state = { str: "This is editable text" }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                "div",
                null,
                o.default.createElement(
                  i.default,
                  { editable: { onChange: this.onChange } },
                  this.state.str
                ),
                o.default.createElement(
                  i.default,
                  { copyable: !0 },
                  "This is a copyable text."
                ),
                o.default.createElement(
                  i.default,
                  { copyable: { text: "Hello, Ant Design!" } },
                  "Replace copy text."
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = l;
    },
    292: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(418)),
        l = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                "div",
                null,
                o.default.createElement(i.default, null, "Ant Design"),
                o.default.createElement("br", null),
                o.default.createElement(
                  i.default,
                  { type: "secondary" },
                  "Ant Design"
                ),
                o.default.createElement("br", null),
                o.default.createElement(
                  i.default,
                  { type: "warning" },
                  "Ant Design"
                ),
                o.default.createElement("br", null),
                o.default.createElement(
                  i.default,
                  { type: "danger" },
                  "Ant Design"
                ),
                o.default.createElement("br", null),
                o.default.createElement(
                  i.default,
                  { disabled: !0 },
                  "Ant Design"
                ),
                o.default.createElement("br", null),
                o.default.createElement(i.default, { mark: !0 }, "Ant Design"),
                o.default.createElement("br", null),
                o.default.createElement(i.default, { code: !0 }, "Ant Design"),
                o.default.createElement("br", null),
                o.default.createElement(
                  i.default,
                  { underline: !0 },
                  "Ant Design"
                ),
                o.default.createElement("br", null),
                o.default.createElement(
                  i.default,
                  { delete: !0 },
                  "Ant Design"
                ),
                o.default.createElement("br", null),
                o.default.createElement(i.default, { strong: !0 }, "Ant Design")
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = l;
    },
    293: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(419)),
        l = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                "div",
                null,
                o.default.createElement(i.default, null, "h1. Ant Design"),
                o.default.createElement(
                  i.default,
                  { level: 2 },
                  "h2. Ant Design"
                ),
                o.default.createElement(
                  i.default,
                  { level: 3 },
                  "h3. Ant Design"
                ),
                o.default.createElement(
                  i.default,
                  { level: 4 },
                  "h4. Ant Design"
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = l;
    },
    294: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32));
      n(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return o.default.createElement(
              "div",
              { className: "basic-main" },
              o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  l.default,
                  { className: "basic-box", span: 12 },
                  "col-12"
                ),
                o.default.createElement(
                  l.default,
                  { className: "basic-box", span: 12 },
                  "col-12"
                )
              ),
              o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  l.default,
                  { className: "basic-box", span: 8 },
                  "col-8"
                ),
                o.default.createElement(
                  l.default,
                  { className: "basic-box", span: 8 },
                  "col-8"
                ),
                o.default.createElement(
                  l.default,
                  { className: "basic-box", span: 8 },
                  "col-8"
                )
              ),
              o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  l.default,
                  { className: "basic-box", span: 6 },
                  "col-6"
                ),
                o.default.createElement(
                  l.default,
                  { className: "basic-box", span: 6 },
                  "col-6"
                ),
                o.default.createElement(
                  l.default,
                  { className: "basic-box", span: 6 },
                  "col-6"
                ),
                o.default.createElement(
                  l.default,
                  { className: "basic-box", span: 6 },
                  "col-6"
                )
              )
            );
          }),
          t
        );
      })(o.default.Component);
      t.default = s;
    },
    296: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32));
      n(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return o.default.createElement(
              "div",
              { className: "gutter-main" },
              o.default.createElement(
                i.default,
                { gutter: 16 },
                o.default.createElement(
                  l.default,
                  { className: "gutter-row", span: 6 },
                  o.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                o.default.createElement(
                  l.default,
                  { className: "gutter-row", span: 6 },
                  o.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                o.default.createElement(
                  l.default,
                  { className: "gutter-row", span: 6 },
                  o.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                o.default.createElement(
                  l.default,
                  { className: "gutter-row", span: 6 },
                  o.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                )
              ),
              o.default.createElement(
                i.default,
                { gutter: [{ xs: 8, sm: 16, md: 24, lg: 32 }, 20] },
                o.default.createElement(
                  l.default,
                  { className: "gutter-row", span: 6 },
                  o.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                o.default.createElement(
                  l.default,
                  { className: "gutter-row", span: 6 },
                  o.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                o.default.createElement(
                  l.default,
                  { className: "gutter-row", span: 6 },
                  o.default.createElement(
                    "div",
                    { className: "gutter-box" },
                    "col-6"
                  )
                ),
                o.default.createElement(
                  l.default,
                  { className: "gutter-row", span: 6 },
                  o.default.createElement(
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
      })(o.default.Component);
      t.default = s;
    },
    297: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32));
      n(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return o.default.createElement(
              "div",
              null,
              o.default.createElement(
                i.default,
                null,
                o.default.createElement(l.default, { span: 8 }, "col-8"),
                o.default.createElement(
                  l.default,
                  { span: 8, offset: 8 },
                  "col-8"
                )
              ),
              o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  l.default,
                  { span: 6, offset: 6 },
                  "col-6 col-offset-6"
                ),
                o.default.createElement(
                  l.default,
                  { span: 6, offset: 6 },
                  "col-6 col-offset-6"
                )
              ),
              o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  l.default,
                  { span: 12, offset: 6 },
                  "col-12 col-offset-6"
                )
              )
            );
          }),
          t
        );
      })(o.default.Component);
      t.default = s;
    },
    298: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32));
      n(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return o.default.createElement(
              "div",
              null,
              o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  l.default,
                  { span: 18, push: 6 },
                  "col-18 col-push-6"
                ),
                o.default.createElement(
                  l.default,
                  { span: 6, pull: 18 },
                  "col-6 col-pull-18"
                )
              )
            );
          }),
          t
        );
      })(o.default.Component);
      t.default = s;
    },
    299: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32));
      n(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return o.default.createElement(
              "div",
              null,
              o.default.createElement("p", null, "sub-element align left"),
              o.default.createElement(
                i.default,
                { type: "flex", justify: "start" },
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4")
              ),
              o.default.createElement("p", null, "sub-element align center"),
              o.default.createElement(
                i.default,
                { type: "flex", justify: "center" },
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4")
              ),
              o.default.createElement("p", null, "sub-element align right"),
              o.default.createElement(
                i.default,
                { type: "flex", justify: "end" },
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4")
              ),
              o.default.createElement(
                "p",
                null,
                "sub-element monospaced arrangement"
              ),
              o.default.createElement(
                i.default,
                { type: "flex", justify: "space-between" },
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4")
              ),
              o.default.createElement("p", null, "sub-element align full"),
              o.default.createElement(
                i.default,
                { type: "flex", justify: "space-around" },
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4"),
                o.default.createElement(l.default, { span: 4 }, "col-4")
              )
            );
          }),
          t
        );
      })(o.default.Component);
      t.default = s;
    },
    30: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(248));
      t.ManageCampaignCard = r.default;
      var o = n(249);
      t.CampaignPriority = o.CampaignPriority;
      var i = a(n(262));
      t.BasicInfoForm = i.default;
      var l = a(n(263));
      t.BasicSlider = l.default;
      var s = a(n(266));
      t.Popup = s.default;
      var u = a(n(269));
      t.AddAndDeleteSelectDynamically = u.default;
      var c = a(n(272));
      t.WalkinQueryBuilder = c.default;
      var p = a(n(275));
      t.SortableDataTable = p.default;
      var d = a(n(276));
      t.InstantSearch = d.default;
      var m = a(n(277));
      t.CampaignHeader = m.default;
      var f = a(n(280));
      t.CampaignFooter = f.default;
      var h = a(n(283));
      t.Stepper = h.default;
      var g = a(n(286));
      t.campaignOverview = g.default;
      var y = a(n(289));
      t.CustomButton = y.default;
      var v = a(n(290));
      t.CustomIcon = v.default;
      var _ = a(n(291));
      t.CustomParagraph = _.default;
      var E = a(n(292));
      t.CustomText = E.default;
      var b = a(n(293));
      t.CustomTitle = b.default;
      var C = a(n(294));
      t.BasicGrid = C.default;
      var S = a(n(296));
      t.GutterGrid = S.default;
      var T = a(n(297));
      t.ColumnOffsetGrid = T.default;
      var x = a(n(298));
      t.SortGrid = x.default;
      var O = a(n(299));
      t.FlexLayoutGrid = O.default;
      var w = a(n(300));
      t.FlexAlignmentGrid = w.default;
      var I = a(n(301));
      t.FlexOrderGrid = I.default;
      var A = a(n(302));
      t.ResponsiveGrid = A.default;
      var N = a(n(303));
      t.MoreResponsiveGrid = N.default;
      var P = a(n(304));
      t.PlaygroundGrid = P.default;
      var k = a(n(305));
      t.BasicLayout = k.default;
      var F = a(n(306));
      t.HeaderContentFooterLayout = F.default;
      var D = a(n(309));
      t.HeaderSider2Layout = D.default;
      var M = a(n(310));
      t.HeaderSiderLayout = M.default;
      var j = a(n(311));
      t.SiderLayout = j.default;
      var R = a(n(312));
      t.CustomTriggerLayout = R.default;
      var q = a(n(313));
      t.ResponsiveLayout = q.default;
      var $ = a(n(314));
      t.FixedHeaderLayout = $.default;
      var V = a(n(315));
      t.FixedSiderLayout = V.default;
      var L = a(n(316));
      t.ColumnLayout = L.default;
      var B = a(n(317));
      t.InfoText = B.default;
      var Q = a(n(318));
      t.CustomList = Q.default;
      var U = a(n(320));
      t.Image = U.default;
      var z = a(n(321));
      t.Header = z.default;
      var H = a(n(322));
      t.WHeader = H.default;
      var G = a(n(325));
      t.EditableFormTable = G.default;
      var Y = a(n(326));
      t.FileUploader = Y.default;
      var K = a(n(329));
      t.OfferBasicInfoForm = K.default;
      var W = a(n(333));
      t.OfferRedemptionRulesForm = W.default;
      var X = a(n(336));
      t.CollapseSidebar = X.default;
      var J = a(n(339));
      t.CounterCard = J.default;
      var Z = a(n(340));
      t.MultipleCounterCard = Z.default;
      var ee = a(n(341));
      t.HoverText = ee.default;
    },
    300: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32));
      n(34);
      var s = function(e) {
          return o.default.createElement(
            "p",
            { className: "height-" + e.value },
            e.children
          );
        },
        u = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                "div",
                null,
                o.default.createElement("p", null, "Align Top"),
                o.default.createElement(
                  i.default,
                  { type: "flex", justify: "center", align: "top" },
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 100 }, "col-4")
                  ),
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 50 }, "col-4")
                  ),
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 120 }, "col-4")
                  ),
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 80 }, "col-4")
                  )
                ),
                o.default.createElement("p", null, "Align Center"),
                o.default.createElement(
                  i.default,
                  { type: "flex", justify: "space-around", align: "middle" },
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 100 }, "col-4")
                  ),
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 50 }, "col-4")
                  ),
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 120 }, "col-4")
                  ),
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 80 }, "col-4")
                  )
                ),
                o.default.createElement("p", null, "Align Bottom"),
                o.default.createElement(
                  i.default,
                  { type: "flex", justify: "space-between", align: "bottom" },
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 100 }, "col-4")
                  ),
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 50 }, "col-4")
                  ),
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 120 }, "col-4")
                  ),
                  o.default.createElement(
                    l.default,
                    { span: 4 },
                    o.default.createElement(s, { value: 80 }, "col-4")
                  )
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = u;
    },
    301: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32));
      n(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return o.default.createElement(
              "div",
              null,
              o.default.createElement(
                i.default,
                { type: "flex" },
                o.default.createElement(
                  l.default,
                  { span: 6, order: 4 },
                  "1 col-order-4"
                ),
                o.default.createElement(
                  l.default,
                  { span: 6, order: 3 },
                  "2 col-order-3"
                ),
                o.default.createElement(
                  l.default,
                  { span: 6, order: 2 },
                  "3 col-order-2"
                ),
                o.default.createElement(
                  l.default,
                  { span: 6, order: 1 },
                  "4 col-order-1"
                )
              )
            );
          }),
          t
        );
      })(o.default.Component);
      t.default = s;
    },
    302: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32));
      n(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return o.default.createElement(
              i.default,
              null,
              o.default.createElement(
                l.default,
                { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                "Col"
              ),
              o.default.createElement(
                l.default,
                { xs: 20, sm: 16, md: 12, lg: 8, xl: 4 },
                "Col"
              ),
              o.default.createElement(
                l.default,
                { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
                "Col"
              )
            );
          }),
          t
        );
      })(o.default.Component);
      t.default = s;
    },
    303: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32));
      n(34);
      var s = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return o.default.createElement(
              i.default,
              null,
              o.default.createElement(
                l.default,
                { xs: { span: 5, offset: 1 }, lg: { span: 6, offset: 2 } },
                "Col"
              ),
              o.default.createElement(
                l.default,
                { xs: { span: 11, offset: 1 }, lg: { span: 6, offset: 2 } },
                "Col"
              ),
              o.default.createElement(
                l.default,
                { xs: { span: 5, offset: 1 }, lg: { span: 6, offset: 2 } },
                "Col"
              )
            );
          }),
          t
        );
      })(o.default.Component);
      t.default = s;
    },
    304: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(31)),
        l = r(n(32)),
        s = r(n(420));
      n(34);
      var u = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (
            (n.gutters = {}),
            (n.vgutters = {}),
            (n.colCounts = {}),
            (n.onGutterChange = function(e) {
              n.setState({ gutterKey: e });
            }),
            (n.onVGutterChange = function(e) {
              n.setState({ vgutterKey: e });
            }),
            (n.onColCountChange = function(e) {
              n.setState({ colCountKey: e });
            }),
            (n.state = { gutterKey: 1, vgutterKey: 1, colCountKey: 2 }),
            [8, 16, 24, 32, 40, 48].forEach(function(e, t) {
              n.gutters[t] = e;
            }),
            [8, 16, 24, 32, 40, 48].forEach(function(e, t) {
              n.vgutters[t] = e;
            }),
            [2, 3, 4, 6, 8, 12].forEach(function(e, t) {
              n.colCounts[t] = e;
            }),
            n
          );
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            for (
              var e = this.state,
                t = e.gutterKey,
                n = e.vgutterKey,
                a = e.colCountKey,
                r = [],
                u = this.colCounts[a],
                c = "",
                p = 0;
              p < u;
              p++
            )
              r.push(
                o.default.createElement(
                  l.default,
                  { key: p.toString(), span: 24 / u },
                  o.default.createElement("div", null, "Column")
                )
              ),
                (c += "  <Col span={" + 24 / u + "} />\n");
            return o.default.createElement(
              "div",
              null,
              o.default.createElement(
                "div",
                { style: { marginBottom: 16 } },
                o.default.createElement(
                  "span",
                  { style: { marginRight: 6 } },
                  "Horizontal Gutter (px): "
                ),
                o.default.createElement(
                  "div",
                  { style: { width: "50%" } },
                  o.default.createElement(s.default, {
                    min: 0,
                    max: Object.keys(this.gutters).length - 1,
                    value: t,
                    onChange: this.onGutterChange,
                    marks: this.gutters,
                    step: null
                  })
                ),
                o.default.createElement(
                  "span",
                  { style: { marginRight: 6 } },
                  "Vertical Gutter (px): "
                ),
                o.default.createElement(
                  "div",
                  { style: { width: "50%" } },
                  o.default.createElement(s.default, {
                    min: 0,
                    max: Object.keys(this.vgutters).length - 1,
                    value: n,
                    onChange: this.onVGutterChange,
                    marks: this.vgutters,
                    step: null
                  })
                ),
                o.default.createElement(
                  "span",
                  { style: { marginRight: 6 } },
                  "Column Count:"
                ),
                o.default.createElement(
                  "div",
                  { style: { width: "50%" } },
                  o.default.createElement(s.default, {
                    min: 0,
                    max: Object.keys(this.colCounts).length - 1,
                    value: a,
                    onChange: this.onColCountChange,
                    marks: this.colCounts,
                    step: null
                  })
                )
              ),
              o.default.createElement(
                i.default,
                { gutter: [this.gutters[t], this.vgutters[n]] },
                r
              ),
              o.default.createElement(
                i.default,
                { gutter: [this.gutters[t], this.vgutters[n]] },
                r
              ),
              o.default.createElement(
                "pre",
                null,
                "<Row gutter={[" +
                  this.gutters[t] +
                  ", " +
                  this.vgutters[n] +
                  "]}>\n" +
                  c +
                  "</Row>"
              ),
              o.default.createElement(
                "pre",
                null,
                "<Row gutter={[" +
                  this.gutters[t] +
                  ", " +
                  this.vgutters[n] +
                  "]}>\n" +
                  c +
                  "</Row>"
              )
            );
          }),
          t
        );
      })(o.default.Component);
      t.default = u;
    },
    305: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(39)),
        l = i.default.Header,
        s = i.default.Footer,
        u = i.default.Sider,
        c = i.default.Content,
        p = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                "div",
                null,
                o.default.createElement(
                  i.default,
                  null,
                  o.default.createElement(l, null, "Header"),
                  o.default.createElement(c, null, "Content"),
                  o.default.createElement(s, null, "Footer")
                ),
                o.default.createElement(
                  i.default,
                  null,
                  o.default.createElement(l, null, "Header"),
                  o.default.createElement(
                    i.default,
                    null,
                    o.default.createElement(u, null, "Sider"),
                    o.default.createElement(c, null, "Content")
                  ),
                  o.default.createElement(s, null, "Footer")
                ),
                o.default.createElement(
                  i.default,
                  null,
                  o.default.createElement(l, null, "Header"),
                  o.default.createElement(
                    i.default,
                    null,
                    o.default.createElement(c, null, "Content"),
                    o.default.createElement(u, null, "Sider")
                  ),
                  o.default.createElement(s, null, "Footer")
                ),
                o.default.createElement(
                  i.default,
                  null,
                  o.default.createElement(u, null, "Sider"),
                  o.default.createElement(
                    i.default,
                    null,
                    o.default.createElement(l, null, "Header"),
                    o.default.createElement(c, null, "Content"),
                    o.default.createElement(s, null, "Footer")
                  )
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = p;
    },
    306: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(39)),
        l = r(n(57)),
        s = r(n(41));
      n(307);
      var u = i.default.Header,
        c = i.default.Footer,
        p = (i.default.Sider, i.default.Content),
        d = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                i.default,
                { className: "layout" },
                o.default.createElement(
                  u,
                  null,
                  o.default.createElement("div", { className: "logo" }),
                  o.default.createElement(
                    s.default,
                    {
                      theme: "dark",
                      mode: "horizontal",
                      defaultSelectedKeys: ["2"],
                      style: { lineHeight: "64px" }
                    },
                    o.default.createElement(
                      s.default.Item,
                      { key: "1" },
                      "nav 1"
                    ),
                    o.default.createElement(
                      s.default.Item,
                      { key: "2" },
                      "nav 2"
                    ),
                    o.default.createElement(
                      s.default.Item,
                      { key: "3" },
                      "nav 3"
                    )
                  )
                ),
                o.default.createElement(
                  p,
                  { style: { padding: "0 50px" } },
                  o.default.createElement(
                    l.default,
                    { style: { margin: "16px 0" } },
                    o.default.createElement(l.default.Item, null, "Home"),
                    o.default.createElement(l.default.Item, null, "List"),
                    o.default.createElement(l.default.Item, null, "App")
                  ),
                  o.default.createElement(
                    "div",
                    {
                      style: { background: "#fff", padding: 24, minHeight: 280 }
                    },
                    "Content"
                  )
                ),
                o.default.createElement(
                  c,
                  { style: { textAlign: "center" } },
                  "Ant Design ©2018 Created by Ant UED"
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = d;
    },
    307: function(e, t, n) {},
    309: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(39)),
        l = r(n(41)),
        s = r(n(57)),
        u = r(n(25)),
        c = l.default.SubMenu,
        p = i.default.Header,
        d = (i.default.Footer, i.default.Sider),
        m = i.default.Content,
        f = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  p,
                  { className: "header" },
                  o.default.createElement("div", { className: "logo" }),
                  o.default.createElement(
                    l.default,
                    {
                      theme: "dark",
                      mode: "horizontal",
                      defaultSelectedKeys: ["2"],
                      style: { lineHeight: "64px" }
                    },
                    o.default.createElement(
                      l.default.Item,
                      { key: "1" },
                      "nav 1"
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "2" },
                      "nav 2"
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "3" },
                      "nav 3"
                    )
                  )
                ),
                o.default.createElement(
                  i.default,
                  null,
                  o.default.createElement(
                    d,
                    { width: 200, style: { background: "#fff" } },
                    o.default.createElement(
                      l.default,
                      {
                        mode: "inline",
                        defaultSelectedKeys: ["1"],
                        defaultOpenKeys: ["sub1"],
                        style: { height: "100%", borderRight: 0 }
                      },
                      o.default.createElement(
                        c,
                        {
                          key: "sub1",
                          title: o.default.createElement(
                            "span",
                            null,
                            o.default.createElement(u.default, {
                              type: "user"
                            }),
                            "subnav 1"
                          )
                        },
                        o.default.createElement(
                          l.default.Item,
                          { key: "1" },
                          "option1"
                        ),
                        o.default.createElement(
                          l.default.Item,
                          { key: "2" },
                          "option2"
                        ),
                        o.default.createElement(
                          l.default.Item,
                          { key: "3" },
                          "option3"
                        ),
                        o.default.createElement(
                          l.default.Item,
                          { key: "4" },
                          "option4"
                        )
                      ),
                      o.default.createElement(
                        c,
                        {
                          key: "sub2",
                          title: o.default.createElement(
                            "span",
                            null,
                            o.default.createElement(u.default, {
                              type: "laptop"
                            }),
                            "subnav 2"
                          )
                        },
                        o.default.createElement(
                          l.default.Item,
                          { key: "5" },
                          "option5"
                        ),
                        o.default.createElement(
                          l.default.Item,
                          { key: "6" },
                          "option6"
                        ),
                        o.default.createElement(
                          l.default.Item,
                          { key: "7" },
                          "option7"
                        ),
                        o.default.createElement(
                          l.default.Item,
                          { key: "8" },
                          "option8"
                        )
                      ),
                      o.default.createElement(
                        c,
                        {
                          key: "sub3",
                          title: o.default.createElement(
                            "span",
                            null,
                            o.default.createElement(u.default, {
                              type: "notification"
                            }),
                            "subnav 3"
                          )
                        },
                        o.default.createElement(
                          l.default.Item,
                          { key: "9" },
                          "option9"
                        ),
                        o.default.createElement(
                          l.default.Item,
                          { key: "10" },
                          "option10"
                        ),
                        o.default.createElement(
                          l.default.Item,
                          { key: "11" },
                          "option11"
                        ),
                        o.default.createElement(
                          l.default.Item,
                          { key: "12" },
                          "option12"
                        )
                      )
                    )
                  ),
                  o.default.createElement(
                    i.default,
                    { style: { padding: "0 24px 24px" } },
                    o.default.createElement(
                      s.default,
                      { style: { margin: "16px 0" } },
                      o.default.createElement(s.default.Item, null, "Home"),
                      o.default.createElement(s.default.Item, null, "List"),
                      o.default.createElement(s.default.Item, null, "App")
                    ),
                    o.default.createElement(
                      m,
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
        })(o.default.Component);
      t.default = f;
    },
    310: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(39)),
        l = r(n(41)),
        s = r(n(57)),
        u = r(n(25)),
        c = l.default.SubMenu,
        p = i.default.Header,
        d = i.default.Footer,
        m = i.default.Sider,
        f = i.default.Content,
        h = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  p,
                  { className: "header" },
                  o.default.createElement("div", { className: "logo" }),
                  o.default.createElement(
                    l.default,
                    {
                      theme: "dark",
                      mode: "horizontal",
                      defaultSelectedKeys: ["2"],
                      style: { lineHeight: "64px" }
                    },
                    o.default.createElement(
                      l.default.Item,
                      { key: "1" },
                      "nav 1"
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "2" },
                      "nav 2"
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "3" },
                      "nav 3"
                    )
                  )
                ),
                o.default.createElement(
                  f,
                  { style: { padding: "0 50px" } },
                  o.default.createElement(
                    s.default,
                    { style: { margin: "16px 0" } },
                    o.default.createElement(s.default.Item, null, "Home"),
                    o.default.createElement(s.default.Item, null, "List"),
                    o.default.createElement(s.default.Item, null, "App")
                  ),
                  o.default.createElement(
                    i.default,
                    { style: { padding: "24px 0", background: "#fff" } },
                    o.default.createElement(
                      m,
                      { width: 200, style: { background: "#fff" } },
                      o.default.createElement(
                        l.default,
                        {
                          mode: "inline",
                          defaultSelectedKeys: ["1"],
                          defaultOpenKeys: ["sub1"],
                          style: { height: "100%" }
                        },
                        o.default.createElement(
                          c,
                          {
                            key: "sub1",
                            title: o.default.createElement(
                              "span",
                              null,
                              o.default.createElement(u.default, {
                                type: "user"
                              }),
                              "subnav 1"
                            )
                          },
                          o.default.createElement(
                            l.default.Item,
                            { key: "1" },
                            "option1"
                          ),
                          o.default.createElement(
                            l.default.Item,
                            { key: "2" },
                            "option2"
                          ),
                          o.default.createElement(
                            l.default.Item,
                            { key: "3" },
                            "option3"
                          ),
                          o.default.createElement(
                            l.default.Item,
                            { key: "4" },
                            "option4"
                          )
                        ),
                        o.default.createElement(
                          c,
                          {
                            key: "sub2",
                            title: o.default.createElement(
                              "span",
                              null,
                              o.default.createElement(u.default, {
                                type: "laptop"
                              }),
                              "subnav 2"
                            )
                          },
                          o.default.createElement(
                            l.default.Item,
                            { key: "5" },
                            "option5"
                          ),
                          o.default.createElement(
                            l.default.Item,
                            { key: "6" },
                            "option6"
                          ),
                          o.default.createElement(
                            l.default.Item,
                            { key: "7" },
                            "option7"
                          ),
                          o.default.createElement(
                            l.default.Item,
                            { key: "8" },
                            "option8"
                          )
                        ),
                        o.default.createElement(
                          c,
                          {
                            key: "sub3",
                            title: o.default.createElement(
                              "span",
                              null,
                              o.default.createElement(u.default, {
                                type: "notification"
                              }),
                              "subnav 3"
                            )
                          },
                          o.default.createElement(
                            l.default.Item,
                            { key: "9" },
                            "option9"
                          ),
                          o.default.createElement(
                            l.default.Item,
                            { key: "10" },
                            "option10"
                          ),
                          o.default.createElement(
                            l.default.Item,
                            { key: "11" },
                            "option11"
                          ),
                          o.default.createElement(
                            l.default.Item,
                            { key: "12" },
                            "option12"
                          )
                        )
                      )
                    ),
                    o.default.createElement(
                      f,
                      { style: { padding: "0 24px", minHeight: 280 } },
                      "Content"
                    )
                  )
                ),
                o.default.createElement(
                  d,
                  { style: { textAlign: "center" } },
                  "Ant Design ©2018 Created by Ant UED"
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = h;
    },
    311: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(39)),
        l = r(n(41)),
        s = r(n(57)),
        u = r(n(25)),
        c = l.default.SubMenu,
        p = i.default.Header,
        d = i.default.Footer,
        m = i.default.Sider,
        f = i.default.Content,
        h = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.onCollapse = function(e) {
                console.log(e), n.setState({ collapsed: e });
              }),
              (n.state = { collapsed: !1 }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                i.default,
                { style: { minHeight: "100vh" } },
                o.default.createElement(
                  m,
                  {
                    collapsible: !0,
                    collapsed: this.state.collapsed,
                    onCollapse: this.onCollapse
                  },
                  o.default.createElement("div", { className: "logo" }),
                  o.default.createElement(
                    l.default,
                    {
                      theme: "dark",
                      defaultSelectedKeys: ["1"],
                      mode: "inline"
                    },
                    o.default.createElement(
                      l.default.Item,
                      { key: "1" },
                      o.default.createElement(u.default, { type: "pie-chart" }),
                      o.default.createElement("span", null, "Option 1")
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "2" },
                      o.default.createElement(u.default, { type: "desktop" }),
                      o.default.createElement("span", null, "Option 2")
                    ),
                    o.default.createElement(
                      c,
                      {
                        key: "sub1",
                        title: o.default.createElement(
                          "span",
                          null,
                          o.default.createElement(u.default, { type: "user" }),
                          o.default.createElement("span", null, "User")
                        )
                      },
                      o.default.createElement(
                        l.default.Item,
                        { key: "3" },
                        "Tom"
                      ),
                      o.default.createElement(
                        l.default.Item,
                        { key: "4" },
                        "Bill"
                      ),
                      o.default.createElement(
                        l.default.Item,
                        { key: "5" },
                        "Alex"
                      )
                    ),
                    o.default.createElement(
                      c,
                      {
                        key: "sub2",
                        title: o.default.createElement(
                          "span",
                          null,
                          o.default.createElement(u.default, { type: "team" }),
                          o.default.createElement("span", null, "Team")
                        )
                      },
                      o.default.createElement(
                        l.default.Item,
                        { key: "6" },
                        "Team 1"
                      ),
                      o.default.createElement(
                        l.default.Item,
                        { key: "8" },
                        "Team 2"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "9" },
                      o.default.createElement(u.default, { type: "file" }),
                      o.default.createElement("span", null, "File")
                    )
                  )
                ),
                o.default.createElement(
                  i.default,
                  null,
                  o.default.createElement(p, {
                    style: { background: "#fff", padding: 0 }
                  }),
                  o.default.createElement(
                    f,
                    { style: { margin: "0 16px" } },
                    o.default.createElement(
                      s.default,
                      { style: { margin: "16px 0" } },
                      o.default.createElement(s.default.Item, null, "User"),
                      o.default.createElement(s.default.Item, null, "Bill")
                    ),
                    o.default.createElement(
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
                  o.default.createElement(
                    d,
                    { style: { textAlign: "center" } },
                    "Ant Design ©2018 Created by Ant UED"
                  )
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = h;
    },
    312: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(39)),
        l = r(n(41)),
        s = r(n(25)),
        u = (l.default.SubMenu, i.default.Header),
        c = (i.default.Footer, i.default.Sider),
        p = i.default.Content,
        d = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.toggle = function() {
                n.setState({ collapsed: !n.state.collapsed });
              }),
              (n.state = { collapsed: !1 }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  c,
                  {
                    trigger: null,
                    collapsible: !0,
                    collapsed: this.state.collapsed
                  },
                  o.default.createElement("div", { className: "logo" }),
                  o.default.createElement(
                    l.default,
                    {
                      theme: "dark",
                      mode: "inline",
                      defaultSelectedKeys: ["1"]
                    },
                    o.default.createElement(
                      l.default.Item,
                      { key: "1" },
                      o.default.createElement(s.default, { type: "user" }),
                      o.default.createElement("span", null, "nav 1")
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "2" },
                      o.default.createElement(s.default, {
                        type: "video-camera"
                      }),
                      o.default.createElement("span", null, "nav 2")
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "3" },
                      o.default.createElement(s.default, { type: "upload" }),
                      o.default.createElement("span", null, "nav 3")
                    )
                  )
                ),
                o.default.createElement(
                  i.default,
                  null,
                  o.default.createElement(
                    u,
                    { style: { background: "#fff", padding: 0 } },
                    o.default.createElement(s.default, {
                      className: "trigger",
                      type: this.state.collapsed ? "menu-unfold" : "menu-fold",
                      onClick: this.toggle
                    })
                  ),
                  o.default.createElement(
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
        })(o.default.Component);
      t.default = d;
    },
    313: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(39)),
        l = r(n(41)),
        s = r(n(25)),
        u = i.default.Header,
        c = i.default.Footer,
        p = i.default.Sider,
        d = i.default.Content,
        m = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                i.default,
                null,
                o.default.createElement(
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
                  o.default.createElement("div", { className: "logo" }),
                  o.default.createElement(
                    l.default,
                    {
                      theme: "dark",
                      mode: "inline",
                      defaultSelectedKeys: ["4"]
                    },
                    o.default.createElement(
                      l.default.Item,
                      { key: "1" },
                      o.default.createElement(s.default, { type: "user" }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 1"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "2" },
                      o.default.createElement(s.default, {
                        type: "video-camera"
                      }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 2"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "3" },
                      o.default.createElement(s.default, { type: "upload" }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 3"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "4" },
                      o.default.createElement(s.default, { type: "user" }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 4"
                      )
                    )
                  )
                ),
                o.default.createElement(
                  i.default,
                  null,
                  o.default.createElement(u, {
                    style: { background: "#fff", padding: 0 }
                  }),
                  o.default.createElement(
                    d,
                    { style: { margin: "24px 16px 0" } },
                    o.default.createElement(
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
                  o.default.createElement(
                    c,
                    { style: { textAlign: "center" } },
                    "Ant Design ©2018 Created by Ant UED"
                  )
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = m;
    },
    314: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(39)),
        l = r(n(41)),
        s = r(n(57)),
        u = i.default.Header,
        c = i.default.Footer,
        p = i.default.Content,
        d = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  u,
                  { style: { position: "fixed", zIndex: 1, width: "100%" } },
                  o.default.createElement("div", { className: "logo" }),
                  o.default.createElement(
                    l.default,
                    {
                      theme: "dark",
                      mode: "horizontal",
                      defaultSelectedKeys: ["2"],
                      style: { lineHeight: "64px" }
                    },
                    o.default.createElement(
                      l.default.Item,
                      { key: "1" },
                      "nav 1"
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "2" },
                      "nav 2"
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "3" },
                      "nav 3"
                    )
                  )
                ),
                o.default.createElement(
                  p,
                  { style: { padding: "0 50px", marginTop: 64 } },
                  o.default.createElement(
                    s.default,
                    { style: { margin: "16px 0" } },
                    o.default.createElement(s.default.Item, null, "Home"),
                    o.default.createElement(s.default.Item, null, "List"),
                    o.default.createElement(s.default.Item, null, "App")
                  ),
                  o.default.createElement(
                    "div",
                    {
                      style: { background: "#fff", padding: 24, minHeight: 380 }
                    },
                    "Content"
                  )
                ),
                o.default.createElement(
                  c,
                  { style: { textAlign: "center" } },
                  "Ant Design ©2018 Created by Ant UED"
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = d;
    },
    315: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(39)),
        l = r(n(41)),
        s = r(n(25)),
        u = i.default.Sider,
        c = i.default.Header,
        p = i.default.Footer,
        d = i.default.Content,
        m = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                i.default,
                null,
                o.default.createElement(
                  u,
                  {
                    style: {
                      overflow: "auto",
                      height: "100vh",
                      position: "fixed",
                      left: 0
                    }
                  },
                  o.default.createElement("div", { className: "logo" }),
                  o.default.createElement(
                    l.default,
                    {
                      theme: "dark",
                      mode: "inline",
                      defaultSelectedKeys: ["4"]
                    },
                    o.default.createElement(
                      l.default.Item,
                      { key: "1" },
                      o.default.createElement(s.default, { type: "user" }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 1"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "2" },
                      o.default.createElement(s.default, {
                        type: "video-camera"
                      }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 2"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "3" },
                      o.default.createElement(s.default, { type: "upload" }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 3"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "4" },
                      o.default.createElement(s.default, { type: "bar-chart" }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 4"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "5" },
                      o.default.createElement(s.default, { type: "cloud-o" }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 5"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "6" },
                      o.default.createElement(s.default, {
                        type: "appstore-o"
                      }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 6"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "7" },
                      o.default.createElement(s.default, { type: "team" }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 7"
                      )
                    ),
                    o.default.createElement(
                      l.default.Item,
                      { key: "8" },
                      o.default.createElement(s.default, { type: "shop" }),
                      o.default.createElement(
                        "span",
                        { className: "nav-text" },
                        "nav 8"
                      )
                    )
                  )
                ),
                o.default.createElement(
                  i.default,
                  { style: { marginLeft: 200 } },
                  o.default.createElement(c, {
                    style: { background: "#fff", padding: 0 }
                  }),
                  o.default.createElement(
                    d,
                    { style: { margin: "24px 16px 0", overflow: "initial" } },
                    o.default.createElement(
                      "div",
                      {
                        style: {
                          padding: 24,
                          background: "#fff",
                          textAlign: "center"
                        }
                      },
                      "...",
                      o.default.createElement("br", null),
                      "Really",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "long",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "...",
                      o.default.createElement("br", null),
                      "content"
                    )
                  ),
                  o.default.createElement(
                    p,
                    { style: { textAlign: "center" } },
                    "Ant Design ©2018 Created by Ant UED"
                  )
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = m;
    },
    316: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = r(n(32)),
        l = r(n(31)),
        s = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              for (var e = [], t = 0; t < this.props.cstyle.length; t++)
                e.push(
                  o.default.createElement(i.default, {
                    style: this.props.cstyle[t],
                    span: this.props.cstyle[t].span
                  })
                );
              return o.default.createElement(
                "div",
                null,
                o.default.createElement(l.default, null, e)
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = s;
    },
    317: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = n(3).Typography.Text,
        l = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement(
                "div",
                { style: this.props.containerStyle },
                o.default.createElement(
                  i,
                  { type: "secondary", style: this.props.headerStyle },
                  this.props.header
                ),
                o.default.createElement(
                  i,
                  { style: this.props.textStyle },
                  this.props.text
                )
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = l;
    },
    318: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = n(3),
        l = n(30),
        s = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = { data: t.data }), n;
          }
          return (
            a(t, e),
            (t.prototype.renderImage = function(e) {
              return e.image
                ? o.default.createElement(
                    i.Col,
                    { span: this.props.imageSpan },
                    o.default.createElement(l.Image, {
                      scaleType: this.props.imageScaleType,
                      height: this.props.imageHeight,
                      width: this.props.imageWidth,
                      source: e.image,
                      alternate_text: "image-placeholder",
                      style: this.props.imageStyle
                    })
                  )
                : o.default.createElement(
                    i.Col,
                    { span: this.props.imageSpan },
                    o.default.createElement(l.Image, {
                      scaleType: this.props.imageScaleType,
                      height: this.props.imageHeight,
                      width: this.props.imageWidth,
                      source: n(319),
                      alternate_text: "image-placeholder",
                      style: this.props.imageStyle
                    })
                  );
            }),
            (t.prototype.renderContent = function(e) {
              return o.default.createElement(
                i.Col,
                {
                  span: this.props.contentSpan,
                  style: this.props.contentStyle
                },
                o.default.createElement(
                  i.Row,
                  null,
                  e.title ? e.title : "Title"
                ),
                o.default.createElement(
                  i.Row,
                  null,
                  e.subTitle ? e.subTitle : "SubTitle"
                )
              );
            }),
            (t.prototype.renderAction = function(e) {
              return e.actionable
                ? o.default.createElement(
                    i.Col,
                    {
                      span: this.props.actionSpan,
                      style: this.props.actionStyle
                    },
                    o.default.createElement(
                      l.CustomButton,
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
                : o.default.createElement(
                    i.Col,
                    {
                      span: this.props.actionSpan,
                      style: this.props.actionStyle
                    },
                    o.default.createElement(
                      i.Row,
                      null,
                      e.actionableTitle ? e.actionableTitle : "actionableTitle"
                    ),
                    o.default.createElement(
                      i.Row,
                      null,
                      e.actionableSubTitle
                        ? e.actionableSubTitle
                        : "actionableSubTitle"
                    )
                  );
            }),
            (t.prototype.render = function() {
              var e = this;
              return o.default.createElement(i.List, {
                itemLayout: "horizontal",
                dataSource: this.state.data,
                renderItem: function(t) {
                  return o.default.createElement(
                    i.List.Item,
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
        })(o.default.Component);
      t.default = s;
    },
    319: function(e, t, n) {
      e.exports = n.p + "walkin.5173b2b3.png";
    },
    320: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement("img", {
                src: this.props.source,
                height: this.props.height,
                width: this.props.width,
                style: { objectFit: this.props.scaleType },
                alt: this.props.alternate_text
              });
            }),
            t
          );
        })(o.default.Component);
      t.default = i;
    },
    321: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.default.createElement("div", null, this.props.children);
            }),
            t
          );
        })(o.default.Component);
      t.default = i;
    },
    322: function(e, t, n) {
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
      var o = r(n(0));
      n(323);
      var i = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.title,
              n = e.styleName,
              a = e.extra;
            return o.createElement(
              "div",
              { className: "wHeaderStyle " + n, style: { width: "100%" } },
              o.createElement(
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
              o.createElement(
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
                a,
                " "
              )
            );
          }),
          t
        );
      })(o.Component);
      t.default = i;
    },
    323: function(e, t, n) {},
    325: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__rest) ||
          function(e, t) {
            var n = {};
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) &&
                t.indexOf(a) < 0 &&
                (n[a] = e[a]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var r = 0;
              for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                t.indexOf(a[r]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                  (n[a[r]] = e[a[r]]);
            }
            return n;
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
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = i(n(0)),
        s = n(3),
        u = l.createContext({}),
        c = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.getInput = function() {
                return "number" === t.props.inputType
                  ? l.createElement(s.InputNumber, null)
                  : l.createElement(s.Input, null);
              }),
              (t.renderCell = function(e) {
                var n = e.getFieldDecorator,
                  a = t.props,
                  i = a.editing,
                  u = a.dataIndex,
                  c = a.title,
                  p = (a.inputType, a.record),
                  d = (a.index, a.children),
                  m = o(a, [
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
                  l.createElement(
                    "td",
                    r({}, m),
                    i
                      ? l.createElement(
                          s.Form.Item,
                          { style: { margin: 0 } },
                          n(u, {
                            rules: [
                              {
                                required: !0,
                                message: "Please Input " + c + "!"
                              }
                            ],
                            initialValue: p[u]
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
            a(t, e),
            (t.prototype.render = function() {
              return l.createElement(u.Consumer, null, this.renderCell);
            }),
            t
          );
        })(l.Component),
        p = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.isEditing = function(e) {
                return e.key === n.state.editingKey;
              }),
              (n.cancel = function() {
                n.setState({ editingKey: "" });
              }),
              (n.columns = function() {
                return n.props.tableHeaders.concat([
                  {
                    title: "OPERATION",
                    dataIndex: "operation",
                    render: function(e, t) {
                      var a = n.state.editingKey;
                      return n.isEditing(t)
                        ? l.createElement(
                            "span",
                            null,
                            l.createElement(u.Consumer, null, function(e) {
                              return l.createElement(
                                "a",
                                {
                                  onClick: function() {
                                    return n.save(e, t.key);
                                  },
                                  style: { marginRight: 8 }
                                },
                                "Save"
                              );
                            }),
                            l.createElement(
                              s.Popconfirm,
                              {
                                title: "Sure to cancel?",
                                onConfirm: function() {
                                  return n.cancel();
                                }
                              },
                              l.createElement("a", null, "Cancel")
                            )
                          )
                        : l.createElement(
                            "a",
                            {
                              className: "" !== a ? "avoid-click" : null,
                              onClick: function() {
                                return n.edit(t.key);
                              }
                            },
                            "Edit"
                          );
                    }
                  }
                ]);
              }),
              (n.state = { data: [], editingKey: "", loading: !0 }),
              n
            );
          }
          return (
            a(t, e),
            (t.getDerivedStateFromProps = function(e, t) {
              return e.loading !== t.loading
                ? { data: e.tableData, loading: e.loading }
                : null;
            }),
            (t.prototype.save = function(e, t) {
              var n = this;
              e.validateFields(function(e, a) {
                if (!e) {
                  var o = n.state.data.slice(),
                    i = o.findIndex(function(e) {
                      return t === e.key;
                    });
                  if (i > -1) {
                    var l = o[i];
                    o.splice(i, 1, r({}, l, a)),
                      n.props.onChangeData(r({}, l, a), i),
                      n.setState({ data: o, editingKey: "" });
                  } else o.push(a), n.setState({ data: o, editingKey: "" });
                }
              });
            }),
            (t.prototype.edit = function(e) {
              this.setState({ editingKey: e });
            }),
            (t.prototype.render = function() {
              var e = this,
                t = { body: { cell: c } },
                n = this.columns().map(function(t) {
                  return t.editable
                    ? r({}, t, {
                        onCell: function(n) {
                          return {
                            record: n,
                            inputType: "text" === t.dataIndex,
                            dataIndex: t.dataIndex,
                            title: t.title,
                            editing: e.isEditing(n)
                          };
                        }
                      })
                    : t;
                });
              return l.createElement(
                u.Provider,
                { value: this.props.form },
                l.createElement(s.Table, {
                  loading: this.state.loading,
                  components: t,
                  bordered: !0,
                  dataSource: this.state.data,
                  columns: n,
                  pagination: { onChange: this.cancel }
                })
              );
            }),
            t
          );
        })(l.Component),
        d = s.Form.create()(p);
      t.default = d;
    },
    326: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
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
      var i = o(n(0)),
        l = n(3);
      n(327);
      var s = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n.state = {}), n;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.visible,
              n = e.handleOk,
              a = e.handleCancel,
              o = e.fileList,
              s = e.uploadProps,
              u = e.title;
            return i.createElement(
              "div",
              null,
              i.createElement(
                l.Modal,
                {
                  width: "500px",
                  key: "model",
                  visible: t,
                  okText: "Submit",
                  title: u,
                  onOk: n,
                  onCancel: a
                },
                i.createElement(
                  l.Upload,
                  r({}, s, { fileList: o }),
                  i.createElement(
                    l.Button,
                    null,
                    i.createElement(l.Icon, { type: "upload" }),
                    " Upload"
                  )
                )
              )
            );
          }),
          t
        );
      })(i.Component);
      t.default = s;
    },
    327: function(e, t, n) {},
    329: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = o(n(0)),
        s = n(0),
        u = n(3);
      u.Input.TextArea;
      n(330);
      var c = i(n(5)),
        p = u.Select.Option,
        d = (u.DatePicker.RangePicker, i(n(332))),
        m = u.Form.create({ name: "offer_basic_info" })(
          (function(e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.state = {
                  values: [{ product: "", productItem: "" }],
                  productDropDown: {
                    showProductList: !0,
                    showCategoryList: !1,
                    showBrandList: !1
                  }
                }),
                n
              );
            }
            return (
              a(t, e),
              (t.prototype.addClick = function() {
                var e = this.state.values;
                e.push({ id: e.length + 1, product: "", productItem: "" }),
                  this.setState({ values: e });
              }),
              (t.prototype.handleProductChange = function(e, t) {
                var n = this.state.values.slice();
                (n[e].product = t),
                  this.setState({ values: n }),
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
                var n = this.state.values.slice();
                (n[e].productItem = t), this.setState({ values: n });
              }),
              (t.prototype.removeClick = function(e, t) {
                var n = this.state.values.slice();
                n.splice(e, 1), this.setState({ values: n });
              }),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.offerTypeData,
                  n = e.handleOfferTypeChange,
                  a = e.offerTypeStatus,
                  o = e.transactionTimeData,
                  i = e.locationData,
                  m = e.productData,
                  f = e.handleTransactionTimeChange,
                  h = e.transactionTimeStatus,
                  g = e.cartValueConditionData,
                  y = e.wrappedComponentRef,
                  v = e.form,
                  _ = e.products,
                  E = (e.handleLocationChange, e.locationArray),
                  b = e.productItems,
                  C = e.onSelectOneValuesSelected,
                  S = e.onSelectTwoValuesSelected,
                  T = e.formValues,
                  x = e.locationValues,
                  O = e.productValues,
                  w = (e.couponDefaultValue, e.onCouponChange),
                  I = e.couponTypeSelected,
                  A = e.couponInputLabel,
                  N = e.onCouponLabelChange,
                  P = e.checked,
                  k = e.OnNoCouponCodeChange,
                  F = e.couponTypeData,
                  D = (this.state.productDropDown, v.getFieldDecorator);
                return l.createElement(
                  u.Form,
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
                  l.createElement(
                    u.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Offer Type"
                    },
                    D("offerType", {
                      initialValue:
                        "" + (0 != Object.keys(T).length ? T.offerType : ""),
                      rules: [
                        { required: !0, message: "Please input offer type!" }
                      ]
                    })(
                      l.createElement(
                        u.Select,
                        {
                          placeholder: "Select an offer type",
                          onChange: n,
                          getPopupContainer: function(e) {
                            return e.parentNode;
                          }
                        },
                        t &&
                          t.map(function(e, t) {
                            return l.createElement(
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
                  a.showList
                    ? l.createElement(
                        u.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(65% - 12px)"
                          },
                          label: "Value"
                        },
                        D("offerTypeValue", {
                          initialValue:
                            "" +
                            (0 != Object.keys(T).length
                              ? T.offerTypeValue
                              : "All")
                        })(
                          l.createElement(
                            u.Select,
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
                            _ &&
                              _.map(function(e, t) {
                                return l.createElement(
                                  p,
                                  { key: t, value: e.code },
                                  " ",
                                  e.name
                                );
                              })
                          )
                        )
                      )
                    : l.createElement(
                        u.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(20% - 12px)"
                          },
                          label: "Value"
                        },
                        D("offerTypeValue", {
                          initialValue:
                            "" +
                            (0 != Object.keys(T).length
                              ? T.offerTypeValue
                              : ""),
                          rules: [
                            {
                              required: !0,
                              message: "Please input offer Value"
                            }
                          ]
                        })(
                          l.createElement(u.Input, {
                            type: "number",
                            addonBefore: !0 === a.showRupee ? "Rs." : "",
                            addonAfter:
                              !0 === a.showPercent
                                ? l.createElement(u.Icon, {
                                    type: "percentage"
                                  })
                                : "",
                            max: a.showPercent ? 100 : 1 / 0,
                            min: 0
                          })
                        )
                      ),
                  l.createElement(
                    u.Form.Item,
                    {
                      style: { width: "calc(100% - 22px)" },
                      label: "Offer Name"
                    },
                    D("offerName", {
                      initialValue:
                        "" + (0 != Object.keys(T).length ? T.offerName : ""),
                      rules: [
                        {
                          transform: function(e) {
                            return e.trim();
                          }
                        },
                        { required: !0, message: "Please input offer name!" }
                      ]
                    })(l.createElement(u.Input, null))
                  ),
                  l.createElement(
                    u.Form.Item,
                    { label: "Product" },
                    l.createElement(d.default, {
                      onSelectOneValuesSelected: function(e, t) {
                        C(e, "product", t);
                      },
                      onSelectTwoValuesSelected: function(e) {
                        S(e, "productValues");
                      },
                      data_1: m,
                      data_2: b,
                      form: this.props.form,
                      productValues: O,
                      defaultSelectOneValue: "product_category",
                      defaultSelectTwoValue: ["all"]
                    })
                  ),
                  l.createElement(
                    u.Form.Item,
                    { label: "Location" },
                    l.createElement(d.default, {
                      onSelectOneValuesSelected: function(e, t) {
                        C(e, "location", t);
                      },
                      onSelectTwoValuesSelected: function(e) {
                        S(e, "locationValues");
                      },
                      data_1: i,
                      data_2: E,
                      locationValues: x,
                      defaultSelectOneValue: "location_store",
                      defaultSelectTwoValue: ["all"]
                    })
                  ),
                  l.createElement(
                    u.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Condition"
                    },
                    D("transactionTime", {
                      initialValue:
                        "" +
                        (0 != Object.keys(T).length ? T.transactionTime : "")
                    })(
                      l.createElement(
                        u.Select,
                        {
                          getPopupContainer: function(e) {
                            return e.parentNode;
                          },
                          placeholder: "Select a transaction time",
                          onChange: f
                        },
                        o &&
                          o.map(function(e, t) {
                            return l.createElement(
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
                    l.createElement(
                      s.Fragment,
                      null,
                      l.createElement(
                        u.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(31% - 12px)"
                          },
                          label: "No. Of Transaction"
                        },
                        D("noOfTransaction", {
                          initialValue:
                            "" +
                            (0 != Object.keys(T).length
                              ? T.noOfTransaction
                              : "")
                        })(l.createElement(u.Input, { type: "number", min: 0 }))
                      ),
                      l.createElement(
                        u.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            marginTop: "20px",
                            width: "calc(5% - 12px)"
                          }
                        },
                        l.createElement(
                          "div",
                          { style: { marginTop: 12 } },
                          "In"
                        )
                      ),
                      l.createElement(
                        u.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(31% - 12px)"
                          },
                          label: "No. Of Days"
                        },
                        D("noOfDays", {
                          initialValue:
                            "" + (0 != Object.keys(T).length ? T.noOfDays : "")
                        })(l.createElement(u.Input, { type: "number", min: 0 }))
                      )
                    ),
                  h &&
                    !0 === h.showDayPart &&
                    l.createElement(
                      s.Fragment,
                      null,
                      l.createElement(
                        u.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(33% - 12px)"
                          },
                          label: "Start Time"
                        },
                        D("startTime", {
                          initialValue: c.default(T.startTime)
                        })(
                          l.createElement(u.TimePicker, {
                            style: { width: "100%" },
                            use12Hours: !0,
                            format: "h:mm:ss a"
                          })
                        )
                      ),
                      l.createElement(
                        u.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(33% - 12px)"
                          },
                          label: "End Time"
                        },
                        D("endTime", { initialValue: c.default(T.endTime) })(
                          l.createElement(u.TimePicker, {
                            style: { width: "100%" },
                            use12Hours: !0,
                            format: "h:mm:ss a"
                          })
                        )
                      )
                    ),
                  h &&
                    !0 === h.showCartValue &&
                    l.createElement(
                      s.Fragment,
                      null,
                      l.createElement(
                        u.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(33.5% - 12px)"
                          },
                          label: "Operator"
                        },
                        D("cartValueCondition", {
                          initialValue:
                            "" +
                            (0 != Object.keys(T).length && T.cartValueCondition
                              ? T.cartValueCondition
                              : "")
                        })(
                          l.createElement(
                            u.Select,
                            {
                              getPopupContainer: function(e) {
                                return e.parentNode;
                              }
                            },
                            g &&
                              g.map(function(e, t) {
                                return l.createElement(
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
                      l.createElement(
                        u.Form.Item,
                        {
                          style: {
                            display: "inline-block",
                            width: "calc(33.5% - 12px)"
                          },
                          label: "Value"
                        },
                        D("cartValue", {
                          initialValue:
                            "" +
                            (0 != Object.keys(T).length && T.cartValue
                              ? T.cartValue
                              : "")
                        })(l.createElement(u.Input, { type: "number", min: 0 }))
                      )
                    ),
                  l.createElement(
                    u.Form.Item,
                    { style: { width: "calc(35% - 12px)" }, label: "Coupon" },
                    D("couponType", {
                      initialValue:
                        "" + (0 != Object.keys(T).length ? T.couponType : ""),
                      rules: [
                        { required: !0, message: "Please input coupon type!" }
                      ]
                    })(
                      l.createElement(
                        u.Radio.Group,
                        { onChange: w },
                        F &&
                          F.map(function(e, t) {
                            return l.createElement(
                              u.Radio,
                              { key: t, value: e.value },
                              " ",
                              e.title,
                              " "
                            );
                          })
                      )
                    )
                  ),
                  1 == I &&
                    l.createElement(
                      u.Form.Item,
                      {
                        style: {
                          marginLeft: "15px",
                          width: "calc(65% - 12px)"
                        },
                        label: "Enter Coupon Label"
                      },
                      D("couponLabel", {
                        initialValue:
                          "" +
                          (0 != Object.keys(T).length ? T.couponLabel : ""),
                        rules: [
                          {
                            required: !0,
                            message: "Please input coupon label!"
                          }
                        ]
                      })(
                        l.createElement(u.Input, {
                          placeholder: A,
                          onChange: N
                        })
                      )
                    ),
                  2 == I &&
                    l.createElement(
                      u.Form.Item,
                      {
                        style: { marginLeft: "15px", width: "calc(65% - 12px)" }
                      },
                      l.createElement(
                        u.Checkbox,
                        { checked: P, onChange: k },
                        "Auto apply coupon code"
                      )
                    )
                );
              }),
              t
            );
          })(l.Component)
        );
      t.default = m;
    },
    330: function(e, t, n) {},
    332: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
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
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = n(3),
        s = o(n(353)),
        u = o(n(99)),
        c = i(n(0)),
        p = l.Select.Option;
      var d = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this,
            a = n.props,
            r = a.data_1,
            o = a.data_2,
            i = a.defaultSelectOneValue,
            l = a.defaultSelectTwoValue,
            s = n.getDefaultSelectedValue(r, i),
            u = n.getDefaultSelectedValue(o, l);
          return (
            (n.state = {
              selectTwoData: [],
              items: [
                {
                  valueOne: s,
                  valueTwo: u ? u.slice() : [],
                  onOneChange: n.handleSelectOneChange.bind(n, 0),
                  onTwoChange: n.handleSelectTwoChange.bind(n, 0)
                }
              ]
            }),
            n
          );
        }
        return (
          a(t, e),
          (t.prototype.addClick = function() {
            var e = this.props,
              t = e.data_1,
              n =
                (e.data_2,
                e.defaultSelectTwoValue,
                e.defaultSelectOneValue,
                this.state.items);
            (!n.length || "" != n[n.length - 1].valueOne) &&
              n.length != t.length &&
              this.setState({
                items: this.state.items.concat([
                  {
                    valueOne: "",
                    valueTwo: [],
                    onOneChange: this.handleSelectOneChange.bind(
                      this,
                      n.length
                    ),
                    onTwoChange: this.handleSelectTwoChange.bind(this, n.length)
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
            var n = this.state.items;
            n.find(function(e) {
              return e.valueOne == t;
            }) ||
              ((n[e].valueOne = t),
              (n[e].valueTwo = []),
              this.setState({ items: n }),
              this.props.onSelectOneValuesSelected(t, this.state.items));
          }),
          (t.prototype.handleSelectTwoChange = function(e, t) {
            var n = this;
            this.setState(
              function(n) {
                return r({}, n, {
                  items: n.items
                    .slice(0, e)
                    .concat(
                      [r({}, n.items[e], { valueTwo: t })],
                      n.items.slice(e + 1)
                    )
                });
              },
              function() {
                n.props.onSelectTwoValuesSelected(n.state.items);
              }
            );
          }),
          (t.prototype.getDefaultSelectedValue = function(e, t) {
            var n = s.default(e, function(e) {
              return e.value === t;
            });
            return -1 !== n ? e && e[n].value : null;
          }),
          (t.prototype.render = function() {
            var e = this,
              t = this.props,
              n = t.data_1,
              a = t.data_2,
              r = (t.productValues, t.locationValues, this.state.items);
            return c.default.createElement(
              c.Fragment,
              null,
              c.default.createElement(
                "div",
                { style: { marginTop: -7 } },
                u.default(r, function(t, r) {
                  var o = t.valueOne,
                    i = t.valueTwo,
                    s = t.onOneChange,
                    u = t.onTwoChange;
                  return c.default.createElement(
                    "div",
                    {
                      key: "select-" + r,
                      className: "selectSegmentBoxContainer"
                    },
                    c.default.createElement(
                      l.Select,
                      {
                        value: o || "",
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
                      n &&
                        n.map(function(e, t) {
                          return c.default.createElement(
                            p,
                            { key: t, value: e.value },
                            "  ",
                            e.title,
                            " "
                          );
                        })
                    ),
                    c.default.createElement(
                      l.Select,
                      {
                        showSearch: !0,
                        mode: "multiple",
                        value: i || "",
                        onChange: u,
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
                      a &&
                        a.map(function(e, t) {
                          return c.default.createElement(
                            p,
                            { key: t, value: e.value },
                            "  ",
                            e.title,
                            " "
                          );
                        })
                    ),
                    c.default.createElement(l.Icon, {
                      type: "close",
                      onClick: e.removeClick.bind(e, r)
                    })
                  );
                }),
                c.default.createElement(
                  l.Button,
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
      })(c.default.Component);
      t.default = d;
    },
    333: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(334);
      var i = n(3),
        l = o(n(0)),
        s = i.Select.Option,
        u = i.Form.create({ name: "offer_redemption_rule" })(
          (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              a(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.cappingData,
                  n = e.wrappedComponentRef,
                  a = e.form,
                  o = e.formValues,
                  u = a.getFieldDecorator;
                return l.default.createElement(
                  i.Form,
                  r(
                    {},
                    {
                      labelCol: { xs: { span: 24 }, sm: { span: 24 } },
                      wrapperCol: { xs: { span: 24 }, sm: { span: 24 } }
                    },
                    {
                      className: "offerRedemptionForm",
                      style: { padding: "20px 50px" },
                      ref: n,
                      layout: "vertical"
                    }
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Usage Limit"
                    },
                    u("redemption_usage_limit", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length
                          ? o.redemption_usage_limit
                          : "")
                    })(
                      l.default.createElement(i.Input, {
                        type: "number",
                        min: 0
                      })
                    )
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    {
                      className: "textPaddingTop",
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      }
                    },
                    l.default.createElement(
                      "span",
                      null,
                      "Defined as maximum number of times an offer can be used collectively by target segment"
                    )
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Usage Limit At Customer Level"
                    },
                    u("redemption_usage_limit_at_customer", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length
                          ? o.redemption_usage_limit_at_customer
                          : "")
                    })(l.default.createElement(i.Input, { type: "number" }))
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    {
                      className: "textPaddingTop",
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      }
                    },
                    l.default.createElement(
                      "span",
                      null,
                      "Maximum no. of times offer can be used by a customer. Ex: User cannot use the offer once used"
                    )
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Time Limit"
                    },
                    u("redemption_time_limit", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length
                          ? o.redemption_time_limit
                          : "")
                    })(
                      l.default.createElement(i.Input, {
                        type: "number",
                        min: 0,
                        addonAfter: l.default.createElement(
                          i.Select,
                          {
                            getPopupContainer: function(e) {
                              return e.parentNode;
                            },
                            defaultValue: "/day",
                            style: { width: 100 },
                            onChange: this.props.timeLimitTypeChange
                          },
                          l.default.createElement(s, { value: "/day" }, "/Day"),
                          l.default.createElement(
                            s,
                            { value: "/week" },
                            "/Week"
                          ),
                          l.default.createElement(
                            s,
                            { value: "/month" },
                            "/Month"
                          )
                        )
                      })
                    )
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    {
                      className: "textPaddingTop",
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      }
                    },
                    l.default.createElement(
                      "span",
                      null,
                      "Maximum no. of times an offer can be used within a time duration"
                    )
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    null,
                    l.default.createElement(
                      "h3",
                      { style: { marginTop: 22 } },
                      "Capping"
                    ),
                    l.default.createElement(
                      "span",
                      null,
                      "Max discount, cashback or points and no. of items for an offer"
                    )
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Type"
                    },
                    u("type", {
                      initialValue:
                        "" + (0 != Object.keys(o).length ? o.type : ""),
                      rules: [
                        { required: !0, message: "Please select capping type" }
                      ]
                    })(
                      l.default.createElement(
                        i.Select,
                        {
                          placeholder: "Select a type",
                          getPopupContainer: function(e) {
                            return e.parentNode;
                          }
                        },
                        t &&
                          t.map(function(e, t) {
                            return l.default.createElement(
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
                  l.default.createElement(
                    i.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      },
                      label: "Value"
                    },
                    u("cappingValue", {
                      initialValue:
                        "" + (0 != Object.keys(o).length ? o.cappingValue : "")
                    })(
                      l.default.createElement(i.Input, {
                        type: "number",
                        min: 0
                      })
                    )
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    {
                      style: {
                        display: "inline-block",
                        width: "calc(35% - 12px)"
                      },
                      label: "Limit on Sku's"
                    },
                    u("redemption_limit_sku_number", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length
                          ? o.redemption_limit_sku_number
                          : "")
                    })(
                      l.default.createElement(i.Input, {
                        type: "number",
                        min: 0
                      })
                    )
                  ),
                  l.default.createElement(
                    i.Form.Item,
                    {
                      className: "textPaddingTop",
                      style: {
                        display: "inline-block",
                        width: "calc(65% - 12px)"
                      }
                    },
                    l.default.createElement(
                      "span",
                      null,
                      "Offer is applicable only on X number of SKU's"
                    )
                  )
                );
              }),
              t
            );
          })(l.default.Component)
        );
      t.default = u;
    },
    334: function(e, t, n) {},
    336: function(e, t, n) {
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
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l,
        s,
        u,
        c = o(n(0)),
        p = n(67),
        d = n(14),
        m = i(n(38)),
        f = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                a = t.width,
                r = t.themeType,
                o = t.navCollapsed,
                i = this.props.navStyle;
              return (
                a < p.TAB_SIZE &&
                  i === p.NAV_STYLE_FIXED &&
                  (i = p.NAV_STYLE_DRAWER),
                c.createElement(
                  "div",
                  {
                    style: this.props.style,
                    className: "gx-layout-sider-header " + this.props.className,
                    onClick: function() {
                      i === p.NAV_STYLE_DRAWER
                        ? e.props.toggleCollapsedSideNav({
                            variables: { navCollapsed: !o }
                          })
                        : i === p.NAV_STYLE_FIXED
                        ? e.props.onNavStyleChange({
                            variables: { navStyle: p.NAV_STYLE_MINI_SIDEBAR }
                          })
                        : i === p.NAV_STYLE_NO_HEADER_MINI_SIDEBAR
                        ? e.props.toggleCollapsedSideNav({
                            variables: { navCollapsed: !o }
                          })
                        : e.props.onNavStyleChange({
                            variables: { navStyle: p.NAV_STYLE_FIXED }
                          });
                    }
                  },
                  i === p.NAV_STYLE_FIXED || i === p.NAV_STYLE_MINI_SIDEBAR
                    ? c.createElement(
                        "div",
                        { className: "gx-linebar" },
                        c.createElement("img", {
                          style:
                            i === p.NAV_STYLE_MINI_SIDEBAR
                              ? { padding: "10px" }
                              : { padding: "5px", marginTop: "7px" },
                          src: i === p.NAV_STYLE_MINI_SIDEBAR ? n(337) : n(338)
                        })
                      )
                    : null,
                  c.createElement(
                    "div",
                    { className: "gx-site-logo" },
                    i === p.NAV_STYLE_NO_HEADER_MINI_SIDEBAR && a >= p.TAB_SIZE
                      ? c.createElement("div", null, "Collapse Sidebar")
                      : r === p.THEME_TYPE_LITE
                      ? c.createElement("div", null, "Collapse Sidebar")
                      : c.createElement(
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
        })(c.Component),
        h = m.default(
          l ||
            (l = r(
              [
                "\n  query settings @client {\n    settings {\n      navStyle\n      themeType\n      width\n      navCollapsed\n    }\n  }\n"
              ],
              [
                "\n  query settings @client {\n    settings {\n      navStyle\n      themeType\n      width\n      navCollapsed\n    }\n  }\n"
              ]
            ))
        ),
        g = m.default(
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
        y = m.default(
          u ||
            (u = r(
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
      )(f);
    },
    337: function(e, t, n) {
      e.exports = n.p + "ic_right_arrow.71f2ed50.png";
    },
    338: function(e, t, n) {
      e.exports = n.p + "ic_left_arrow.e11e899a.png";
    },
    339: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(0)),
        o = n(3);
      t.default = function(e) {
        var t = e.title,
          n = e.subTitle,
          a = e.titleColor,
          i = e.subtitleColor,
          l = e.showComaprison;
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
              o.Row,
              null,
              r.default.createElement(
                o.Col,
                { span: 10 },
                r.default.createElement(
                  "div",
                  {
                    style: {
                      color: a,
                      fontSize: "28px",
                      paddingLeft: "10px",
                      fontWeight: 500
                    }
                  },
                  t
                )
              ),
              !0 === l &&
                r.default.createElement(
                  o.Col,
                  { span: 14, style: { textAlign: "end" } },
                  r.default.createElement(
                    "div",
                    { style: { marginRight: "10px", paddingTop: "6px" } },
                    r.default.createElement(
                      "span",
                      { style: { fontSize: "18px", color: "#2E2E2E" } },
                      r.default.createElement(o.Icon, {
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
                  color: i,
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
                n
              )
            )
          )
        );
      };
    },
    34: function(e, t, n) {},
    340: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(0)),
        o = n(3);
      t.default = function(e) {
        var t = e.title,
          n = e.textColor,
          a = e.valueColor,
          i = e.counterArray;
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
                  color: n,
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
              i.map(function(e, t) {
                return r.default.createElement(
                  o.Row,
                  {
                    key: t,
                    style: {
                      fontSize: "12px",
                      color: n,
                      marginTop: "2px",
                      paddingRight: "1px",
                      paddingBottom: "2px",
                      width: "100%",
                      paddingLeft: "10px"
                    }
                  },
                  r.default.createElement(o.Col, { span: 20 }, e.title),
                  r.default.createElement(
                    o.Col,
                    {
                      span: 4,
                      style: {
                        color: a,
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
    341: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.handleMouseHover = n.handleMouseHover.bind(n)),
              (n.state = { isHovering: !1 }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.handleMouseHover = function() {
              this.setState(this.toggleHoverState);
            }),
            (t.prototype.toggleHoverState = function(e) {
              return { isHovering: !e.isHovering };
            }),
            (t.prototype.render = function() {
              return o.default.createElement(
                "div",
                {
                  onMouseEnter: this.handleMouseHover,
                  onMouseLeave: this.handleMouseHover
                },
                this.state.isHovering
                  ? o.default.createElement(
                      "span",
                      { style: { color: "#038FDE", cursor: "pointer" } },
                      this.props.children
                    )
                  : o.default.createElement("span", null, this.props.children)
              );
            }),
            t
          );
        })(o.default.Component);
      t.default = i;
    },
    342: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.NEW_CAMPAIGN = "/refinex/feedback/create"),
        (t.CAMPAIGN_TYPE = "FEEDBACK"),
        (t.TEMPLATE_STYLE = "MUSTACHE"),
        (t.NEW_SEGMENT = "/refinex/segment/newSegment"),
        (t.SEGMENT_LIST = "/refinex/segment/segmentList"),
        (t.DEFAULT_QUEUE = "REFINEX_EVENTS_QUEUE"),
        (t.DEFAULT_ACTIVE_STATUS = "ACTIVE"),
        (t.DEFAULT_INACTIVE_STATUS = "INACTIVE"),
        (t.DEFAULT_REFINEX_CAMPAIGN = "FEEDBACK"),
        (t.CAMPAIGN_DASHBOARD = "/refinex/feedback/view"),
        (t.SHOULD_EDIT = ["DRAFT"]);
    },
    358: function(e, t, n) {},
    359: function(e, t, n) {},
    374: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      n(359);
      var i = n(30);
      t.default = function(e) {
        var t = e.audienceTitle,
          n = e.segmentSubTitle,
          a = e.onValuesSelected,
          l = e.segmentSelectionData,
          s = e.uploadCsvText,
          u = e.uploadProps,
          c = e.segmentFilterText,
          p = e.segmentFilterSubText,
          d = e.attributeData,
          m = e.logQuery,
          f = e.selectedSegments,
          h = e.ruleQuery,
          g = e.audienceCount,
          y = e.errors,
          v = e.showModal,
          _ = e.handleCancel,
          E = e.visible,
          b = e.handleOk,
          C = e.fileList;
        return r.createElement(
          "div",
          null,
          r.createElement(
            "div",
            null,
            r.createElement("h3", { className: "gx-text-grey" }, t),
            r.createElement(
              "div",
              null,
              r.createElement(
                "p",
                {
                  style: { paddingTop: "20px", width: "50%" },
                  className: "gx-text-grey gx-mb-1"
                },
                n,
                r.createElement(
                  "span",
                  { style: { float: "right" } },
                  "  Potential Reach : ",
                  r.createElement("b", null, g),
                  " "
                )
              ),
              r.createElement(i.AddAndDeleteSelectDynamically, {
                onValuesSelected: a,
                segmentSelectionData: l,
                values: f,
                errors: y
              }),
              s &&
                r.createElement(
                  "span",
                  null,
                  "or   ",
                  r.createElement(
                    "i",
                    { className: "gx-text-primary gx-pointer", onClick: v },
                    s
                  )
                ),
              r.createElement(i.FileUploader, {
                visible: E,
                handleOk: b,
                handleCancel: _,
                fileList: C,
                uploadProps: u
              })
            ),
            r.createElement(
              "div",
              { style: { marginTop: "50px" } },
              r.createElement(
                o.Divider,
                {
                  className: "audienceDivider",
                  style: { color: "#000000" },
                  orientation: "left"
                },
                r.createElement("p", { className: "gx-text-grey gx-mb-2" }, c)
              ),
              r.createElement("p", { className: "gx-text-grey gx-mb-1" }, p),
              r.createElement(i.WalkinQueryBuilder, {
                fields: d,
                onQueryChange: m,
                query: h
              })
            )
          )
        );
      };
    },
    430: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3),
        i = n(455);
      t.default = function(e) {
        var t = e.subTitle,
          n = e.onChange,
          a = e.communicationData,
          l = e.defaultValue,
          s = e.value,
          u = e.getScheduleData,
          c = (e.OnCommunicationFormNext, e.commWrappedComponentRef),
          p = e.communicationFormValues,
          d = e.pushFormData,
          m = e.pushFormRef,
          f = e.emailFormRef,
          h = e.emailFormData,
          g = e.onFormNext,
          y = e.scheduleData,
          v = e.schedule,
          _ = e.campaign,
          E = e.scheduleSaveMark,
          b = e.saveSchedule,
          C = e.attributeData,
          S = e.linkTypeSelect;
        e.form;
        return r.createElement(
          "div",
          null,
          r.createElement("h3", { className: "gx-text-grey gx-mb-1" }, t),
          r.createElement(
            o.Row,
            null,
            r.createElement(
              o.Col,
              { sm: 24, md: 13, lg: 13, xl: 13, xxl: 14 },
              console.log(s),
              r.createElement(
                o.Radio.Group,
                {
                  buttonStyle: "solid",
                  defaultValue: l,
                  onChange: n,
                  style: { paddingTop: "20px" },
                  value: s
                },
                a &&
                  a.map(function(e, t) {
                    return r.createElement(
                      o.Radio.Button,
                      { key: t, value: e.value },
                      e.title
                    );
                  })
              ),
              "SMS" == s &&
                r.createElement(i.SMSForm, {
                  wrappedComponentRef: c,
                  formValues: p,
                  linkTypeSelect: S,
                  attributeData: C,
                  onFormNext: g
                }),
              "PUSH" == s &&
                r.createElement(i.PushNotificationForm, {
                  wrappedComponentRef: m,
                  formValues: d,
                  onFormNext: g
                }),
              "EMAIL" == s &&
                r.createElement(i.Email, {
                  wrappedComponentRef: f,
                  formValues: h,
                  onFormNext: g
                })
            ),
            v &&
              r.createElement(
                o.Col,
                { sm: 24, md: 11, lg: 11, xl: 11, xxl: 10 },
                r.createElement(
                  "div",
                  { style: { padding: 10 } },
                  r.createElement(i.Schedule, {
                    saved: E,
                    scheduleData: y,
                    saveSchedule: b,
                    campaign: _,
                    getScheduleData: u
                  })
                )
              )
          )
        );
      };
    },
    446: function(e, t, n) {
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
        l = r(n(0)),
        s = n(3),
        u = n(30),
        c = (s.Typography.Text, o(n(668))),
        p = o(n(38)),
        d = n(14),
        m = p.default(
          i ||
            (i = a(
              [
                "\n  query auth @client {\n     auth {\n      userId\n      organizationId\n    }\n  }\n"
              ],
              [
                "\n  query auth @client {\n     auth {\n      userId\n      organizationId\n    }\n  }\n"
              ]
            ))
        );
      t.default = d.compose(d.graphql(m, { name: "auth" }))(function(e) {
        var t = e.subTitle,
          n = e.onFormNext,
          a = e.saveFormRef,
          r = e.formValues,
          o = e.textAndControlText,
          i = (e.promptText, e.toolTipText),
          p = e.prioritySelectionTitle,
          d = e.priorityButtonText,
          m = e.testControlTitle,
          f = e.testControlPercentage,
          h = e.handleButtonGroupChange,
          g = e.testControlPercentageEditText,
          y = e.onPriorityButtonClick,
          v = e.priorityNumberInvalidErrorMessage,
          _ = e.onTestAndControlEdit,
          E =
            (e.showTestAndControl,
            e.handleOk,
            e.popupTitle,
            e.handleCancel,
            e.applyTestControlChange,
            e.popupbodyText),
          b =
            (e.controlValue,
            e.maxValueAllowed,
            e.onTestValueChange,
            e.onControlValueChange,
            e.popupButtonText,
            e.testValue,
            e.auth),
          C = e.setFeedbackForm,
          S = e.formName,
          T = e.edit,
          x = e.showFeedbackFormType;
        return l.createElement(
          "div",
          { style: { minHeight: "100%" } },
          l.createElement(
            "div",
            { style: { minHeight: "10%" } },
            l.createElement("h3", { className: "gx-text-grey" }, t)
          ),
          l.createElement(
            s.Row,
            { style: { marginTop: 32 } },
            l.createElement(
              s.Col,
              { sm: 24, md: 14, style: { marginBottom: 15 } },
              l.createElement(u.BasicInfoForm, {
                onFormNext: n,
                wrappedComponentRef: a,
                formValues: r,
                edit: T
              })
            ),
            l.createElement(
              s.Col,
              { sm: 24, md: 10 },
              l.createElement(u.CampaignPriority, {
                HideTestConstrol: !0,
                text: o,
                promptText: E,
                tootTipText: i,
                prioritySelectionTitle: p,
                priorityButtonText: d,
                testControlTitle: m,
                testControlPercentage: f,
                handleChange: h,
                testControlPercentageEditText: g,
                onClick: y,
                priorityNumberInvalidErrorMessage: v,
                onTestAndControlEdit: _
              })
            )
          ),
          x
            ? l.createElement(
                "div",
                {
                  style: {
                    marginBottom: 0,
                    width: "100vw",
                    background: "#ECECEC",
                    padding: "20px"
                  }
                },
                l.createElement(
                  s.Row,
                  { gutter: 16 },
                  l.createElement(
                    "h3",
                    {
                      className: "gx-text-grey",
                      style: { marginBottom: "30px", margin: "32px" }
                    },
                    "Choose template"
                  ),
                  l.createElement(
                    s.Col,
                    { span: 24 },
                    l.createElement(c.default, {
                      auth: b,
                      formName: S,
                      setFeedbackForm: C
                    })
                  )
                )
              )
            : null
        );
      });
    },
    448: function(e, t, n) {
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
        l = n(3),
        s = l.Typography.Title,
        u = n(676),
        c = o(n(680)),
        p = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return i.createElement(
                l.Row,
                {
                  style: {
                    margin: "1rem",
                    height: "-webkit-fill-available",
                    paddingBottom: "5rem",
                    overflowX: "scroll"
                  }
                },
                i.createElement(
                  l.Row,
                  null,
                  i.createElement(
                    l.Col,
                    { span: 24 },
                    i.createElement(
                      s,
                      { level: 3, className: "gx-text-grey" },
                      "Triggers"
                    )
                  )
                ),
                i.createElement(l.Divider, null),
                i.createElement(
                  l.Col,
                  { span: 24 },
                  i.createElement(u.EventTypeForm, {
                    unlinkCampaignFromApplication: this.props
                      .unlinkCampaignFromApplication,
                    selectedApplication: this.props.selectedApplication,
                    linkCampaignToApplication: this.props
                      .linkCampaignToApplication,
                    application: this.props.applications,
                    event: this.props.eventValues,
                    onEventTypeEdited: this.props.onEventTypeEdited
                  })
                ),
                i.createElement(l.Divider, null),
                i.createElement(
                  l.Col,
                  { span: 24 },
                  i.createElement(c.default, {
                    query: this.props.query,
                    attributeData: this.props.attributeData,
                    logQuery: this.props.logQuery
                  })
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = p;
    },
    449: function(e, t, n) {
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
        l = n(3),
        s = o(n(681)),
        u = o(n(694)),
        c = n(16),
        p = n(14),
        d = n(27),
        m = n(55),
        f = l.Tabs.TabPane,
        h = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.match,
                n = e.campaign,
                a = t.params.id ? t.params.id : n.id;
              return i.createElement(
                p.Query,
                {
                  displayName: "feedbackForm",
                  query: m.GET_FEEDBACK_FORM,
                  variables: { campaignId: a },
                  fetchPolicy: "network-only"
                },
                function(e) {
                  e.client;
                  var t = e.data,
                    n = e.loading,
                    a = (e.error, e.refetch);
                  if (n) return i.createElement(d.CircularProgress, null);
                  if (t && t.campaign) {
                    var r =
                      t.campaign && t.campaign.feedbackForm
                        ? t.campaign.feedbackForm
                        : {};
                    return i.createElement(
                      p.Query,
                      {
                        query: m.GET_QUESTIONNAIRE,
                        variables: r.questionnaireRoot
                          ? { questionId: r.questionnaireRoot.id }
                          : { questionId: "" },
                        displayName: "questionnaire",
                        fetchPolicy: "network-only"
                      },
                      function(e) {
                        var n = e.data,
                          r = e.refetch;
                        e.error;
                        return i.createElement(
                          l.Tabs,
                          {
                            size: "large",
                            animated: { inkBar: !1, tabPane: !0 },
                            defaultActiveKey: "1"
                          },
                          i.createElement(
                            f,
                            { tab: "Build", key: "1" },
                            i.createElement(s.default, {
                              feedbackForm: t.campaign.feedbackForm,
                              refetchFeedbackForm: a,
                              questionnaire:
                                n && n.questionHierarchy
                                  ? n.questionHierarchy
                                  : [],
                              refetchQuestionnaire: r
                            })
                          ),
                          i.createElement(
                            f,
                            { tab: "Design", key: "2" },
                            i.createElement(u.default, {
                              feedbackForm: t.campaign.feedbackForm,
                              refetchFeedbackForm: a,
                              questionnaire:
                                n && n.questionHierarchy
                                  ? n.questionHierarchy
                                  : [],
                              refetchQuestionnaire: r
                            })
                          )
                        );
                      }
                    );
                  }
                  return i.createElement(d.CircularProgress, null);
                }
              );
            }),
            t
          );
        })(i.Component);
      t.default = c.withRouter(h);
    },
    450: function(e, t, n) {
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
        i = n(27),
        l = n(14),
        s = n(3),
        u = n(55),
        c = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setCurrentQuestion = function() {
                var e = n.props.questionToEdit,
                  t = e.questionText,
                  a = (e.type, e.rangeMax),
                  r = e.rangeMin;
                n.props.form.setFieldsValue({
                  questionText: t,
                  type: n.props.questionType,
                  range: [r, a]
                });
              }),
              (n.getTreeNodes = function(e) {
                var t = s.TreeSelect.TreeNode,
                  a = [];
                for (var r in e) {
                  var i = null;
                  e.hasOwnProperty(r) &&
                    (i =
                      "object" == typeof e[r]
                        ? o.createElement(
                            t,
                            { title: r, value: r, key: r },
                            n.getTreeNodes(e[r])
                          )
                        : o.createElement(t, { value: r, title: r, key: r })),
                    a.push(i);
                }
                return a;
              }),
              (n.triggerPopup = function(e, t, a) {
                var r = a.preValue,
                  o = a.triggerValue;
                n.props.form.setFieldsValue({ type: o }),
                  r &&
                    r.value !== o &&
                    n.setState({
                      popUpVisible: !0,
                      newTypeValue: o || n.state.newTypeValue
                    });
              }),
              (n.confirmTypeChange = function() {
                var e = n.state.newTypeValue;
                n.props.form.setFieldsValue({ type: e }),
                  n.setState({ popUpVisible: !1, validationStatus: "success" }),
                  n.props.onQuestionTypeEdit(e);
              }),
              (n.closeTypeChange = function() {
                n.props.form.setFieldsValue({
                  type: n.props.questionToEdit.type
                }),
                  n.setState({ popUpVisible: !1, validationStatus: "success" });
              }),
              (n.showSubCategory = function(e) {
                n.setState({ showSubCategory: !0, subCategory: e });
              }),
              (n.subCatMenu = function() {
                var e = n.state.subCategory;
                s.Form.Item;
                return n.getTreeNodes(e);
              }),
              (n.getQuestionTypes = function() {
                var e = n.props.questionTypesQuery.questionTypes;
                return n.getTreeNodes(e);
              }),
              (n.onChangeMandatory = function(e) {
                console.log(e);
              }),
              (n.onChangeBranchLogic = function(e) {
                console.log(e);
              }),
              (n.state = {
                showSubCategory: !1,
                subCategory: {},
                popUpVisible: !1,
                newTypeValue: null,
                validationStatus: "success"
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {
              this.setCurrentQuestion();
            }),
            (t.prototype.componentDidUpdate = function(e) {
              this.props.questionToEdit.id !== e.questionToEdit.id &&
                this.setCurrentQuestion();
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.questionToEdit, e.questionType, e.form),
                n = (e.questionTypesQuery.questionTypes, t.getFieldDecorator),
                a = s.Form.Item;
              return o.createElement(
                i.ErrorBoundary,
                null,
                o.createElement(
                  s.Row,
                  { style: { height: "6rem" } },
                  o.createElement(
                    s.Col,
                    { span: 24 },
                    o.createElement(
                      s.Form,
                      { layout: "inline" },
                      o.createElement(
                        a,
                        null,
                        o.createElement(
                          a,
                          null,
                          o.createElement(
                            s.Popconfirm,
                            {
                              title:
                                "Changing question type will delete the existing choices, continue?",
                              visible: this.state.popUpVisible,
                              onConfirm: this.confirmTypeChange,
                              onCancel: this.closeTypeChange,
                              okText: "Yes",
                              cancelText: "No"
                            },
                            o.createElement(
                              a,
                              { validateStatus: this.state.validationStatus },
                              o.createElement("p", null, "Question Type"),
                              n("type", {
                                rules: [{ required: !0 }],
                                getValueFromEvent: this.triggerPopup
                              })(
                                o.createElement(
                                  s.TreeSelect,
                                  { placeholder: "Please select" },
                                  this.getQuestionTypes()
                                )
                              )
                            )
                          )
                        ),
                        o.createElement(
                          a,
                          null,
                          o.createElement(
                            a,
                            { validateStatus: this.state.validationStatus },
                            o.createElement("p", null, "Related to"),
                            n("type", {
                              rules: [{ required: !0 }],
                              getValueFromEvent: this.triggerPopup
                            })(
                              o.createElement(
                                s.TreeSelect,
                                { placeholder: "Please select" },
                                this.getQuestionTypes()
                              )
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
        })(o.Component),
        p = s.Form.create({ name: "FormHeader" })(c);
      t.default = l.compose(
        l.graphql(u.QUESTION_TYPES, {
          name: "questionTypesQuery",
          options: { fetchPolicy: "cache-first" }
        })
      )(p);
    },
    451: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = o(n(0)),
        s = n(27),
        u = i(n(202)),
        c = n(14),
        p = n(3),
        d = n(55),
        m = { RATING_SCALE: "RATING_SCALE", OPINION_SCALE: "OPINION_SCALE" },
        f = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setCurrentQuestion = function() {
                var e = n.props.questionToEdit,
                  t = e.questionText,
                  a = e.type,
                  r = e.rangeMax,
                  o = e.rangeMin;
                n.props.form.setFieldsValue({
                  questionText: t,
                  type: a,
                  range: [o, r]
                });
              }),
              (n.getTreeNodes = function(e) {
                var t = p.TreeSelect.TreeNode,
                  a = [];
                for (var r in e) {
                  var o = null;
                  e.hasOwnProperty(r) &&
                    ((o =
                      "object" == typeof e[r]
                        ? l.createElement(
                            t,
                            { title: r, value: r, key: r, selectable: !1 },
                            n.getTreeNodes(e[r])
                          )
                        : l.createElement(t, { value: r, title: r, key: r })),
                    a.push(o));
                }
                return a;
              }),
              (n.getQuestionTypes = function() {
                var e = n.props.questionTypesQuery.questionTypes;
                return n.getTreeNodes(e);
              }),
              (n.submitQuestion = function(e) {
                e.preventDefault(),
                  console.log(n.props.onQuestionSubmitted),
                  n.props.onQuestionSubmitted();
              }),
              (n.triggerPopup = function(e, t, a) {
                var r = a.preValue,
                  o = a.triggerValue;
                n.props.form.setFieldsValue({ type: o }),
                  r &&
                    r.value !== o &&
                    n.setState({ popUpVisible: !0, newTypeValue: o });
              }),
              (n.confirmTypeChange = function() {
                var e = n.state.newTypeValue;
                n.props.form.setFieldsValue({ type: e }), n.closeTypeChange();
              }),
              (n.closeTypeChange = function() {
                n.setState({
                  popUpVisible: !1,
                  newTypeValue: null,
                  validationStatus: "success"
                });
              }),
              (n.state = {
                popUpVisible: !1,
                newTypeValue: null,
                validationStatus: "success",
                showButton: !1
              }),
              (n.handleClickThrottled = u.default(n.submitQuestion, 1e3)),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {
              this.setCurrentQuestion();
            }),
            (t.prototype.componentWillUnmount = function() {
              this.handleClickThrottled.cancel();
            }),
            (t.prototype.componentDidUpdate = function(e) {
              this.props.questionToEdit.id !== e.questionToEdit.id &&
                this.setCurrentQuestion();
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.questionToEdit, e.form),
                n = e.style,
                a = t.getFieldDecorator,
                o = t.isFieldsTouched,
                i = p.Form.Item,
                u =
                  (p.Input.TextArea, { suffix: l.createElement("span", null) });
              return (
                (o(["questionText"]) || o(["range"])) &&
                  (u = {
                    suffix: l.createElement(
                      p.Tooltip,
                      { title: "Update Question" },
                      l.createElement(
                        p.Button,
                        {
                          onClick: this.submitQuestion,
                          type: "primary",
                          style: { margin: "auto" },
                          size: "small"
                        },
                        "Update"
                      )
                    )
                  }),
                l.createElement(
                  s.ErrorBoundary,
                  null,
                  l.createElement(
                    p.Row,
                    { style: n },
                    l.createElement(
                      p.Col,
                      { span: 24 },
                      l.createElement(
                        p.Form,
                        {
                          labelCol: { span: 6 },
                          wrapperCol: { span: 16 },
                          onSubmit: this.submitQuestion
                        },
                        l.createElement(
                          i,
                          { label: "Question Text" },
                          a("questionText", { rules: [{ required: !0 }] })(
                            l.createElement(p.Input, r({}, u))
                          )
                        ),
                        l.createElement(
                          i,
                          {
                            label: "Range",
                            style: m[this.props.questionToEdit.type]
                              ? {}
                              : { display: "none" }
                          },
                          a("range", {
                            initialValue: [
                              this.props.questionToEdit.rangeMin,
                              this.props.questionToEdit.rangeMax
                            ]
                          })(l.createElement(p.Slider, { range: !0 }))
                        ),
                        l.createElement(
                          i,
                          { wrapperCol: { offset: 18 } },
                          l.createElement(p.Button, {
                            type: "primary",
                            style: { position: "absolute", left: "-99999px" }
                          })
                        )
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(l.Component),
        h = p.Form.create({
          name: "QuestionForm",
          onValuesChange: function(e, t) {
            e.onQuestionEdited(t);
          }
        })(f);
      t.default = c.compose(
        c.graphql(d.QUESTION_TYPES, {
          name: "questionTypesQuery",
          options: { fetchPolicy: "cache-first" }
        })
      )(h);
    },
    452: function(e, t, n) {
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
        l = o(n(688)),
        s = n(27),
        u = n(3),
        c = o(n(1274));
      n(689);
      var p = {
          SINGLE_ANSWER: !0,
          MULTIPLE_ANSWER: !0,
          RATING_SCALE: !0,
          OPINION_SCALE: !0,
          RANKING: !0,
          DICHOTOMOUS: !0,
          TEXT: !0
        },
        d = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.handleClick = function(e) {
                e.preventDefault(),
                  c.default(
                    ["RATING_SCALE", "OPINION_SCALE", "RANKING"],
                    n.props.questionToEdit.type
                  )
                    ? n.setState({ visible: !0 })
                    : n.props.addChoice();
              }),
              (n.onChange = function(e) {
                console.log(e), n.setState({ inputValue: e });
              }),
              (n.CancelModal = function() {
                n.setState({ visible: !1 });
              }),
              (n.hideModal = function() {
                var e = {
                  rangeStart: n.state.inputValue[0],
                  rangeEnd: n.state.inputValue[1]
                };
                n.setState({ visible: !1 }), n.props.addChoice(null, e);
              }),
              (n.getChoiceRows = function() {
                return (
                  n.props.questionToEdit.choices
                    ? (n.props.questionToEdit.choices =
                        n.props.questionToEdit.choices)
                    : (n.props.questionToEdit.choices = []),
                  n.props.questionToEdit.choices.map(function(e) {
                    return i.createElement(
                      u.Row,
                      { gutter: 12, style: { marginTop: "1%" }, key: e.id },
                      i.createElement(
                        u.Col,
                        { span: 24 },
                        i.createElement(
                          s.CardBox,
                          null,
                          i.createElement(l.default, {
                            choice: e,
                            questionnaire: n.props.questionnaire,
                            questionType: n.props.questionToEdit.type,
                            removeChoice: n.props.removeChoice,
                            addNewQuestion: n.props.addNewQuestion,
                            onChoiceEdited: n.props.onChoiceEdited,
                            submitChoice: n.props.submitChoice,
                            onLinkChoiceToQuestion:
                              n.props.onLinkChoiceToQuestion
                          })
                        )
                      )
                    );
                  })
                );
              }),
              (n.state = { visible: !1, inputValue: "" }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props.isChoiceLoading,
                t =
                  (this.state.inputValue,
                  i.createElement(u.Icon, {
                    type: "loading",
                    style: { fontSize: 50 },
                    spin: !0
                  }));
              return p[this.props.questionToEdit.type]
                ? i.createElement(
                    s.ErrorBoundary,
                    null,
                    i.createElement(
                      u.Row,
                      null,
                      i.createElement(
                        u.Modal,
                        {
                          title: "Please select the range for this choice",
                          visible: this.state.visible,
                          onOk: this.hideModal,
                          onCancel: this.CancelModal,
                          okText: "Save"
                        },
                        i.createElement(
                          u.Row,
                          null,
                          i.createElement(
                            u.Col,
                            { span: 16 },
                            i.createElement(u.Slider, {
                              range: !0,
                              min: this.props.questionToEdit.rangeMin,
                              max: this.props.questionToEdit.rangeMax,
                              onChange: this.onChange,
                              defaultValue: [0, 5]
                            })
                          )
                        )
                      ),
                      i.createElement(
                        u.Col,
                        { span: 24 },
                        i.createElement("h2", null, "Configure choices")
                      )
                    ),
                    e
                      ? i.createElement(
                          "div",
                          { className: "divCenter" },
                          i.createElement(u.Spin, {
                            size: "large",
                            indicator: t
                          }),
                          " "
                        )
                      : this.getChoiceRows(),
                    i.createElement(
                      u.Row,
                      null,
                      i.createElement(
                        u.Col,
                        { span: 24 },
                        i.createElement(
                          u.Row,
                          { type: "flex", justify: "center" },
                          i.createElement(
                            u.Col,
                            null,
                            i.createElement(
                              u.Button,
                              { type: "dashed", onClick: this.handleClick },
                              i.createElement(u.Icon, { type: "plus" }),
                              " Add Choice"
                            )
                          )
                        )
                      )
                    )
                  )
                : null;
            }),
            t
          );
        })(i.Component);
      t.default = d;
    },
    453: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      n(717);
      t.default = function(e) {
        var t = e.children;
        return r.createElement(
          o.Row,
          { className: "RefineXCampaignHeaderStyle" },
          t
        );
      };
    },
    454: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3),
        i = o.Steps.Step;
      t.default = function(e) {
        var t = e.current,
          n = e.onChange,
          a = e.StepperData;
        return r.createElement(
          o.Steps,
          {
            current: t,
            onChange: n,
            size: "small",
            labelPlacement: "vertical"
          },
          a.map(function(e, t) {
            return r.createElement(i, { title: e.title, key: t });
          })
        );
      };
    },
    455: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(456));
      t.SMSForm = r.default;
      var o = a(n(457));
      t.PushNotificationForm = o.default;
      var i = a(n(458));
      t.Email = i.default;
      var l = a(n(459));
      t.Schedule = l.default;
    },
    456: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
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
      var i = o(n(0)),
        l = n(3),
        s = l.Input.TextArea,
        u = l.Select.Option,
        c = l.Form.Item,
        p = {
          name: "file",
          action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          headers: { authorization: "authorization-text" },
          onChange: function(e) {
            "uploading" !== e.file.status && console.log(e.file, e.fileList),
              "done" === e.file.status
                ? l.message.success(e.file.name + " file uploaded successfully")
                : "error" === e.file.status &&
                  l.message.error(e.file.name + " file upload failed.");
          }
        },
        d = l.Form.create({
          name: "form_in_modal",
          mapPropsToFields: function(e) {
            return {
              smsBody: l.Form.createFormField({ value: e.formValues.smsBody }),
              smsTag: l.Form.createFormField({ value: e.formValues.smsTag })
            };
          }
        })(
          (function(e) {
            function t() {
              var t = (null !== e && e.apply(this, arguments)) || this;
              return (
                (t.state = { visible: !1, linkType: "" }),
                (t.hide = function() {
                  return t.setState({ visible: !1 });
                }),
                (t.handleVisibleChange = function(e) {
                  t.setState({ visible: e });
                }),
                (t.handleTypeChange = function(e) {
                  console.log("handleTypeChange", e),
                    t.props.linkTypeSelect(e),
                    t.setState({ visible: !1, linkType: "" });
                }),
                (t.popupContent = function() {
                  return i.createElement(
                    "div",
                    null,
                    i.createElement(
                      l.Select,
                      {
                        getPopupContainer: function(e) {
                          return e.parentNode;
                        },
                        style: { width: "100%" },
                        value: t.state.linkType,
                        autoFocus: !0,
                        placeholder: "Select Type",
                        optionFilterProp: "children",
                        onChange: function(e) {
                          return t.handleTypeChange(e);
                        },
                        showSearch: !0,
                        filterOption: function(e, t) {
                          return (
                            t.props.children
                              .toLowerCase()
                              .indexOf(e.toLowerCase()) >= 0
                          );
                        }
                      },
                      t.props.attributeData &&
                        t.props.attributeData.map(function(e) {
                          return i.createElement(u, { value: e.name }, e.label);
                        })
                    )
                  );
                }),
                t
              );
            }
            return (
              a(t, e),
              (t.prototype.render = function() {
                var e = this,
                  t = this.props,
                  n = t.form,
                  a = t.onFormNext,
                  o = t.wrappedComponentRef,
                  u =
                    (t.text,
                    this.props.formValues ? this.props.formValues : {}),
                  d = n.getFieldDecorator,
                  m = { labelCol: { span: 24 }, wrapperCol: { span: 24 } };
                return (
                  console.log(">>>", this.props.formValues.smsBody),
                  i.createElement(
                    l.Form,
                    {
                      style: { paddingTop: "20px" },
                      layout: "vertical",
                      ref: o,
                      onSubmit: a
                    },
                    i.createElement(
                      c,
                      r({ label: "SMS tag" }, m),
                      d("smsTag", {
                        initialValue:
                          "" +
                          (0 != Object.keys(u).length && u.smsTag
                            ? u.smsTag
                            : ""),
                        rules: [
                          { required: !0, message: "SMS tag is required" }
                        ]
                      })(
                        i.createElement(l.Input, {
                          name: "smsTag",
                          onChange: function(t) {
                            e.props.formValues.smsTag = t.target.value;
                          }
                        })
                      )
                    ),
                    i.createElement(
                      c,
                      r({ label: "SMS body" }, m),
                      d("smsBody", {
                        initialValue:
                          "" +
                          (0 != Object.keys(u).length && u.smsBody
                            ? u.smsBody
                            : ""),
                        rules: [
                          { required: !0, message: "SMS body is required" }
                        ]
                      })(
                        i.createElement(s, {
                          rows: 3,
                          name: "smsBody",
                          onChange: function(t) {
                            e.props.formValues.smsBody = t.target.value;
                          }
                        })
                      ),
                      i.createElement(
                        "div",
                        { style: { float: "right" } },
                        i.createElement(
                          l.Popover,
                          {
                            title: "Select Link Type",
                            trigger: "click",
                            content: this.popupContent(),
                            visible: this.state.visible,
                            onVisibleChange: this.handleVisibleChange
                          },
                          i.createElement(
                            l.Button,
                            { style: { margin: 0 } },
                            "</>"
                          )
                        )
                      )
                    ),
                    i.createElement(
                      c,
                      { style: { paddingLeft: "16px" } },
                      i.createElement(
                        l.Upload,
                        r({}, p),
                        i.createElement(l.Button, null, "Upload and link file")
                      )
                    )
                  )
                );
              }),
              t
            );
          })(i.Component)
        );
      t.default = d;
    },
    457: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
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
      var i = o(n(0)),
        l = n(3),
        s = l.Input.TextArea,
        u = l.Form.create({ name: "form_in_modal" })(
          (function(e) {
            function t() {
              return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
              a(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.form,
                  n = e.onFormNext,
                  a = e.wrappedComponentRef,
                  o = e.formValues,
                  u = (e.text, t.getFieldDecorator),
                  c = { labelCol: { span: 24 }, wrapperCol: { span: 24 } };
                return i.createElement(
                  l.Form,
                  {
                    style: { paddingTop: "20px", paddingBottom: "20px" },
                    layout: "vertical",
                    ref: a,
                    onSubmit: n
                  },
                  i.createElement(
                    l.Form.Item,
                    r({ label: "Notification tag" }, c),
                    u("notificationTag", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length ? o.notificationTag : ""),
                      rules: [
                        {
                          required: !0,
                          message: "Notification tag is required"
                        }
                      ]
                    })(i.createElement(l.Input, null))
                  ),
                  i.createElement(
                    l.Form.Item,
                    r({ label: "Title for notification" }, c),
                    u("notificationTitle", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length ? o.notificationTitle : ""),
                      rules: [
                        {
                          required: !0,
                          message: "Notification title is required"
                        }
                      ]
                    })(i.createElement(l.Input, null))
                  ),
                  i.createElement(
                    l.Form.Item,
                    r({ label: "Notification body" }, c),
                    u("notificationBody", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length ? o.notificationBody : ""),
                      rules: [
                        {
                          required: !0,
                          message: "Notification body is required"
                        }
                      ]
                    })(i.createElement(s, { rows: 3 }))
                  ),
                  i.createElement(
                    l.Form.Item,
                    { style: { paddingLeft: "16px" } },
                    i.createElement(
                      l.Upload,
                      r({}, this.props.uploadProps),
                      i.createElement(l.Button, null, "Attach image")
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
    458: function(e, t, n) {
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
        i = n(3),
        l = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.form, e.onFormNext),
                n = e.wrappedComponentRef,
                a = e.formValues,
                r = (e.text, this.props.form.getFieldDecorator);
              return o.createElement(
                i.Form,
                { layout: "vertical", ref: n, onSubmit: t },
                o.createElement(
                  i.Form.Item,
                  { label: "Subject" },
                  r("email_subject", {
                    initialValue:
                      "" +
                      (0 != Object.keys(a).length && a.email_subject
                        ? a.email_subject
                        : ""),
                    rules: [
                      { required: !0, message: "Please enter Email Subject!" }
                    ]
                  })(
                    o.createElement(i.Input, {
                      prefix: o.createElement(i.Icon, {
                        type: "mail",
                        style: { color: "rgba(0,0,0,.25)" }
                      }),
                      placeholder: "Enter Email Subject"
                    })
                  )
                ),
                o.createElement(
                  i.Form.Item,
                  { label: "Compose" },
                  r("email_body", {
                    initialValue:
                      "" +
                      (0 != Object.keys(a).length && a.email_body
                        ? a.email_body
                        : ""),
                    rules: [
                      { required: !0, message: "Please enter Email body!" }
                    ]
                  })(
                    o.createElement(i.Input.TextArea, {
                      rows: 6,
                      placeholder: "Enter Email body"
                    })
                  )
                ),
                o.createElement(
                  i.Form.Item,
                  null,
                  r("upload", { valuePropName: "fileList" })(
                    o.createElement(
                      i.Upload,
                      {
                        name: "logo",
                        action: "/upload.do",
                        listType: "picture"
                      },
                      o.createElement(
                        i.Button,
                        null,
                        o.createElement(i.Icon, { type: "upload" }),
                        " Attach Media"
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(o.Component),
        s = i.Form.create({ name: "EmailForm" })(l);
      t.default = s;
    },
    459: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = o(n(0));
      n(460);
      var s = n(3),
        u = i(n(5)),
        c = [
          "SUNDAY",
          "MONDAY",
          "TUESDAY",
          "WEDNESDAY",
          "THURSDAY",
          "FRIDAY",
          "SATURDAY"
        ],
        p = {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 7 },
            md: { span: 24 },
            lg: { span: 24 },
            xl: { span: 7 }
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 17 },
            md: { span: 24 },
            lg: { span: 24 },
            xl: { span: 17 }
          }
        },
        d = s.Select.Option,
        m = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.daySelected = function(e) {
                return n.state.repeatOn[e] ? "primary" : "default";
              }),
              (n.dClick = function(e) {
                var t = n.state,
                  a = t.repeatOn,
                  r = t.errors;
                (r.repeatOn = ""),
                  (a[e] = !a[e]),
                  n.setState({ repeatOn: a, errors: r, saved: !1 });
              }),
              (n.handleChange = function(e) {
                n.setState({ noOfOccurances: e, saved: !1 });
              }),
              (n.saveSchedule = function() {
                var e = {};
                if (
                  ("WEEKLY" == n.state.repeatType &&
                    !n.state.repeatOn.find(function(e) {
                      return e;
                    }) &&
                    (e.repeatOn = "select atleast one day"),
                  (n.state.time && "" != n.state.time) ||
                    (e.time = "* this field is mandatory"),
                  0 !== Object.keys(e).length)
                )
                  n.setState({ errors: e });
                else {
                  var t = n.state,
                    a = t.repeatType,
                    r = t.time,
                    o = t.repeatOn,
                    i = t.end,
                    l = t.noOfOccurances,
                    s = [],
                    u = { repeatType: a, time: r };
                  "WEEKLY" == a &&
                    (o.map(function(e, t) {
                      return e && s.push(c[t]);
                    }),
                    (u.days = s)),
                    "afterOccurrences" == i
                      ? (u.noOfOccurances = l)
                      : (u.endTime = n.props.campaign.endTime),
                    n.props.saveSchedule(u);
                }
              }),
              (n.UNSAFE_componentWillReceiveProps = function(e) {
                n.setState({ saved: e.saved });
              }),
              (n.onChangeTime = function(e, t) {
                (n.state.errors.time = ""), n.setState({ time: e, saved: !1 });
              }),
              (n.handleOnEndChange = function(e) {
                n.setState({ end: e, saved: !1 });
              }),
              (n.handleTypeChange = function(e) {
                n.setState({ repeatType: e, saved: !1 });
              }),
              (n.state = {
                errors: {},
                repeatType: "DAILY",
                time: "",
                repeatOn: [!1, !1, !1, !1, !1, !1, !1],
                end: "onEndDate",
                noOfOccurances: 10,
                saved: n.props.saved
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {
              if (
                (console.log(this.props.scheduleData), this.props.scheduleData)
              ) {
                var e = this.state,
                  t = e.repeatOn,
                  n = e.end,
                  a = this.props.scheduleData,
                  r = a.repeatType,
                  o = a.time,
                  i = a.noOfOccurances,
                  l = a.days;
                "WEEKLY" == r &&
                  l &&
                  (t = c.map(function(e) {
                    return l.includes(e);
                  })),
                  (n = i ? "afterOccurrences" : "onEndDate"),
                  (i = i || 10),
                  this.setState({
                    repeatType: r,
                    time: o,
                    repeatOn: t,
                    end: n,
                    noOfOccurances: i
                  });
              }
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.campaign;
              return l.createElement(
                "div",
                null,
                l.createElement(
                  s.Card,
                  { className: "scheduleCard" },
                  l.createElement(
                    s.Row,
                    null,
                    l.createElement(
                      "p",
                      { style: { fontSize: 20 } },
                      "Schedule"
                    )
                  ),
                  this.props.campaign &&
                    l.createElement(
                      "p",
                      { className: "campDate" },
                      " Campaign Date:    ",
                      l.createElement(
                        "b",
                        null,
                        u.default(t.startTime).format("DD MMM YY HH:mm") +
                          " - " +
                          u.default(t.endTime).format("DD MMM YY HH:mm"),
                        " "
                      )
                    ),
                  l.createElement(
                    s.Form,
                    {
                      ref: this.props.wrappedComponentRef,
                      onSubmit: this.props.submit
                    },
                    l.createElement(
                      s.Form.Item,
                      r({ label: "Repeat Every" }, p),
                      l.createElement(
                        s.Select,
                        {
                          getPopupContainer: function(e) {
                            return e.parentNode;
                          },
                          value: this.state.repeatType,
                          className: "scheduleType",
                          placeholder: "Select Type",
                          optionFilterProp: "children",
                          onChange: function(t) {
                            return e.handleTypeChange(t);
                          },
                          filterOption: function(e, t) {
                            return (
                              t.props.children
                                .toLowerCase()
                                .indexOf(e.toLowerCase()) >= 0
                            );
                          }
                        },
                        l.createElement(d, { value: "DAILY" }, "Daily"),
                        l.createElement(d, { value: "WEEKLY" }, "Weekly")
                      )
                    ),
                    "WEEKLY" == this.state.repeatType &&
                      l.createElement(
                        s.Form.Item,
                        r({ style: { marginTop: 10 }, label: "Repeat On" }, p),
                        l.createElement(
                          "div",
                          null,
                          l.createElement(
                            "div",
                            null,
                            l.createElement(
                              s.Button,
                              {
                                className: "dBtn",
                                onClick: function() {
                                  return e.dClick(0);
                                },
                                type: this.daySelected(0),
                                shape: "circle"
                              },
                              " S "
                            ),
                            l.createElement(
                              s.Button,
                              {
                                className: "dBtn",
                                onClick: function() {
                                  return e.dClick(1);
                                },
                                type: this.daySelected(1),
                                shape: "circle"
                              },
                              " M "
                            ),
                            l.createElement(
                              s.Button,
                              {
                                className: "dBtn",
                                onClick: function() {
                                  return e.dClick(2);
                                },
                                type: this.daySelected(2),
                                shape: "circle"
                              },
                              " T "
                            ),
                            l.createElement(
                              s.Button,
                              {
                                className: "dBtn",
                                onClick: function() {
                                  return e.dClick(3);
                                },
                                type: this.daySelected(3),
                                shape: "circle"
                              },
                              " W "
                            ),
                            l.createElement(
                              s.Button,
                              {
                                className: "dBtn",
                                onClick: function() {
                                  return e.dClick(4);
                                },
                                type: this.daySelected(4),
                                shape: "circle"
                              },
                              " T "
                            ),
                            l.createElement(
                              s.Button,
                              {
                                className: "dBtn",
                                onClick: function() {
                                  return e.dClick(5);
                                },
                                type: this.daySelected(5),
                                shape: "circle"
                              },
                              " F "
                            ),
                            l.createElement(
                              s.Button,
                              {
                                className: "dBtn",
                                onClick: function() {
                                  return e.dClick(6);
                                },
                                type: this.daySelected(6),
                                shape: "circle"
                              },
                              " S "
                            )
                          ),
                          l.createElement(
                            "span",
                            { style: { color: "Red" } },
                            this.state.errors.repeatOn
                          )
                        )
                      ),
                    l.createElement(
                      s.Form.Item,
                      r({ label: "@ Time" }, p),
                      l.createElement(s.TimePicker, {
                        className: "scheduleTime",
                        value: this.state.time,
                        use12Hours: !0,
                        format: "h:mm a",
                        onChange: this.onChangeTime
                      }),
                      l.createElement(
                        "div",
                        { style: { color: "Red" } },
                        this.state.errors.time
                      )
                    ),
                    l.createElement(
                      s.Form.Item,
                      r({ style: { marginTop: 5 }, label: "Ends" }, p),
                      l.createElement(
                        s.Select,
                        {
                          getPopupContainer: function(e) {
                            return e.parentNode;
                          },
                          value: this.state.end,
                          className: "scheduleEnd",
                          placeholder: "Select Type",
                          optionFilterProp: "children",
                          onChange: function(t) {
                            return e.handleOnEndChange(t);
                          },
                          filterOption: function(e, t) {
                            return (
                              t.props.children
                                .toLowerCase()
                                .indexOf(e.toLowerCase()) >= 0
                            );
                          }
                        },
                        l.createElement(
                          d,
                          { value: "onEndDate" },
                          "On End Date"
                        ),
                        l.createElement(
                          d,
                          { value: "afterOccurrences" },
                          "After Occurrences"
                        )
                      ),
                      "afterOccurrences" == this.state.end &&
                        l.createElement(s.InputNumber, {
                          max: 1e3,
                          min: 1,
                          value: this.state.noOfOccurances,
                          onChange: function(t) {
                            return e.handleChange(t);
                          },
                          style: { width: 70 }
                        }),
                      l.createElement(
                        "span",
                        { style: { color: "Red" } },
                        this.state.errors.end
                      )
                    ),
                    l.createElement(
                      s.Row,
                      {
                        type: "flex",
                        justify: "space-around",
                        className: "saveRow"
                      },
                      l.createElement(
                        s.Col,
                        {
                          style: { justifyContent: "center", flex: "auto" },
                          span: 8
                        },
                        this.state.saved
                          ? l.createElement(
                              "span",
                              { className: "saveMark divCenterVertical" },
                              " ",
                              l.createElement(s.Icon, {
                                type: "check-circle",
                                theme: "filled"
                              }),
                              "    Saved"
                            )
                          : ""
                      ),
                      l.createElement(
                        s.Col,
                        { span: 8 },
                        l.createElement(
                          s.Button,
                          {
                            onClick: function() {
                              return e.saveSchedule();
                            },
                            style: { marginBottom: 0, float: "right" },
                            type: "primary",
                            shape: "round"
                          },
                          " Save "
                        )
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = m;
    },
    460: function(e, t, n) {},
    462: function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      (t.data03 = [
        { name: "Android", value: 400 },
        { name: "IOS", value: 300 }
      ]),
        (t.data01 = [
          { name: "Group A", value: 400 },
          { name: "Group B", value: 300 },
          { name: "Group C", value: 300 },
          { name: "Group D", value: 200 }
        ]),
        (t.data02 = [
          { name: "A1", value: 100 },
          { name: "A2", value: 300 },
          { name: "B1", value: 100 },
          { name: "B2", value: 80 },
          { name: "B3", value: 40 },
          { name: "B4", value: 30 },
          { name: "B5", value: 50 },
          { name: "C1", value: 100 },
          { name: "C2", value: 200 },
          { name: "D1", value: 150 },
          { name: "D2", value: 50 }
        ]),
        (t.default = [
          { name: "Android", value: 400 },
          { name: "IOS", value: 300 },
          { name: "PC", value: 278 }
        ]),
        (t.data04 = [
          { name: "NPS Score", uv: 26, price: 26, fill: "#003366" }
        ]),
        (t.data05 = [
          { name: "Store", negative: 4e3, positive: 2400, neutral: 2400 },
          { name: "Staff", negative: 3e3, positive: 1398, neutral: 2210 },
          { name: "Product", negative: 2e3, positive: 9800, neutral: 2290 },
          { name: "Stock", negative: 2780, positive: 3908, neutral: 2e3 }
        ]);
    },
    55: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o,
        i,
        l,
        s,
        u,
        c,
        p,
        d,
        m,
        f,
        h,
        g,
        y,
        v,
        _,
        E,
        b,
        C,
        S,
        T,
        x,
        O,
        w,
        I,
        A,
        N,
        P,
        k,
        F,
        D,
        M,
        j,
        R,
        q,
        $,
        V,
        L,
        B,
        Q,
        U,
        z,
        H,
        G,
        Y,
        K,
        W,
        X,
        J,
        Z,
        ee,
        te,
        ne,
        ae,
        re,
        oe,
        ie,
        le,
        se,
        ue,
        ce,
        pe,
        de,
        me,
        fe,
        he = r(n(38));
      (t.allSegments = he.default(
        o ||
          (o = a(
            [
              "\n  query segments($org_id: ID!) {\n    segments(status: ACTIVE, organization_id: $org_id) {\n      id\n      name\n      segmentType\n      status\n      rule {\n        id\n        ruleConfiguration\n      }\n    }\n  }\n"
            ],
            [
              "\n  query segments($org_id: ID!) {\n    segments(status: ACTIVE, organization_id: $org_id) {\n      id\n      name\n      segmentType\n      status\n      rule {\n        id\n        ruleConfiguration\n      }\n    }\n  }\n"
            ]
          ))
      )),
        (t.EVENT_TYPES_FOR_APPLICATION = he.default(
          i ||
            (i = a(
              [
                "\n  query eventTypesForApplication($appId: ID!) {\n    eventTypesForApplication(appId: $appId) {\n      id\n      code\n      status\n      application {\n        id\n      }\n      events {\n        id\n      }\n      eventSubscriptions {\n        id\n        triggerAction\n        customAction {\n          id\n          request\n          response\n          status\n        }\n      }\n    }\n  }\n"
              ],
              [
                "\n  query eventTypesForApplication($appId: ID!) {\n    eventTypesForApplication(appId: $appId) {\n      id\n      code\n      status\n      application {\n        id\n      }\n      events {\n        id\n      }\n      eventSubscriptions {\n        id\n        triggerAction\n        customAction {\n          id\n          request\n          response\n          status\n        }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.ACTION_DEFINATIONS = he.default(
          l ||
            (l = a(
              [
                "\n  query actionDefinitions(\n    $organizationId: ID\n    $name: String\n    $type: String\n    $status: String\n  ) {\n    actionDefinitions(\n      organizationId: $organizationId\n      name: $name\n      type: $type\n      status: $status\n    ) {\n      id\n      name\n      type\n      status\n    }\n  }\n"
              ],
              [
                "\n  query actionDefinitions(\n    $organizationId: ID\n    $name: String\n    $type: String\n    $status: String\n  ) {\n    actionDefinitions(\n      organizationId: $organizationId\n      name: $name\n      type: $type\n      status: $status\n    ) {\n      id\n      name\n      type\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.ACTIONS = he.default(
          s ||
            (s = a(
              [
                "\n  query actions(\n    $organizationId: ID\n    $actionDefinationName: String\n    $status: String\n  ) {\n    actions(\n      organizationId: $organizationId\n      actionDefinationName: $actionDefinationName\n      status: $status\n    ) {\n      id\n      request\n      response\n      status\n      actionDefination {\n        id\n        name\n        type\n        status\n      }\n      organization {\n        id\n        name\n      }\n    }\n  }\n"
              ],
              [
                "\n  query actions(\n    $organizationId: ID\n    $actionDefinationName: String\n    $status: String\n  ) {\n    actions(\n      organizationId: $organizationId\n      actionDefinationName: $actionDefinationName\n      status: $status\n    ) {\n      id\n      request\n      response\n      status\n      actionDefination {\n        id\n        name\n        type\n        status\n      }\n      organization {\n        id\n        name\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_EVENT_SUBSCRIPTION_ = he.default(
          u ||
            (u = a(
              [
                "\n  mutation createEventSubscription(\n    $eventTypeId: ID!\n    $triggerAction: TriggerActionEnum!\n    $customActionId: ID\n  ) {\n    createEventSubscription(\n      eventTypeId: $eventTypeId\n      triggerAction: $triggerAction\n      customActionId: $customActionId\n    ) {\n      id\n      status\n      sync\n      eventType {\n        id\n        code\n        status\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation createEventSubscription(\n    $eventTypeId: ID!\n    $triggerAction: TriggerActionEnum!\n    $customActionId: ID\n  ) {\n    createEventSubscription(\n      eventTypeId: $eventTypeId\n      triggerAction: $triggerAction\n      customActionId: $customActionId\n    ) {\n      id\n      status\n      sync\n      eventType {\n        id\n        code\n        status\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.EVENT_TYPES = he.default(
          c ||
            (c = a(
              [
                "\n  query eventTypes($status: STATUS!) {\n    eventTypes(status: $status) {\n      id\n      type\n      format\n      schema\n      status\n    }\n  }\n"
              ],
              [
                "\n  query eventTypes($status: STATUS!) {\n    eventTypes(status: $status) {\n      id\n      type\n      format\n      schema\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.disableSegment = he.default(
          p ||
            (p = a(
              [
                "\n  mutation disableSegment($id: ID!) {\n    disableSegment(id: $id) {\n      id\n      name\n    }\n  }\n"
              ],
              [
                "\n  mutation disableSegment($id: ID!) {\n    disableSegment(id: $id) {\n      id\n      name\n    }\n  }\n"
              ]
            ))
        )),
        (t.LINK_CAMPAIGN_TO_APPLICATION = he.default(
          d ||
            (d = a(
              [
                "\n  mutation linkCampaignToApplication($campaignId: ID!, $applicationId: ID!) {\n    linkCampaignToApplication(\n      campaignId: $campaignId\n      applicationId: $applicationId\n    ) {\n      id\n      name\n      description\n      startTime\n      endTime\n    }\n  }\n"
              ],
              [
                "\n  mutation linkCampaignToApplication($campaignId: ID!, $applicationId: ID!) {\n    linkCampaignToApplication(\n      campaignId: $campaignId\n      applicationId: $applicationId\n    ) {\n      id\n      name\n      description\n      startTime\n      endTime\n    }\n  }\n"
              ]
            ))
        )),
        (t.UNLINK_CAMPAIGN_FROM_APPLICATION = he.default(
          m ||
            (m = a(
              [
                "\n  mutation unlinkCampaignFromApplication(\n    $campaignId: ID!\n    $applicationId: ID!\n  ) {\n    unlinkCampaignFromApplication(\n      campaignId: $campaignId\n      applicationId: $applicationId\n    ) {\n      id\n      name\n      description\n      startTime\n      endTime\n    }\n  }\n"
              ],
              [
                "\n  mutation unlinkCampaignFromApplication(\n    $campaignId: ID!\n    $applicationId: ID!\n  ) {\n    unlinkCampaignFromApplication(\n      campaignId: $campaignId\n      applicationId: $applicationId\n    ) {\n      id\n      name\n      description\n      startTime\n      endTime\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_APP = he.default(
          f ||
            (f = a(
              [
                "\n  mutation createApplication($organizationId: ID!, $input: ApplicationInput!) {\n    createApplication(organizationId: $organizationId, input: $input) {\n      id\n      name\n      platform\n      organization {\n        id\n        name\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation createApplication($organizationId: ID!, $input: ApplicationInput!) {\n    createApplication(organizationId: $organizationId, input: $input) {\n      id\n      name\n      platform\n      organization {\n        id\n        name\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.createSegment = he.default(
          h ||
            (h = a(
              [
                "\n  mutation createSegment(\n    $name: String!\n    $segmentType: SEGMENT_TYPE!\n    $organization_id: ID!\n    $application_id: ID!\n    $rule_id: ID!\n    $status: STATUS!\n  ) {\n    createSegment(\n      input: {\n        name: $name\n        segmentType: $segmentType\n        status: $status\n        organization_id: $organization_id\n        application_id: $application_id\n        rule_id: $rule_id\n      }\n    ) {\n      id\n      name\n    }\n  }\n"
              ],
              [
                "\n  mutation createSegment(\n    $name: String!\n    $segmentType: SEGMENT_TYPE!\n    $organization_id: ID!\n    $application_id: ID!\n    $rule_id: ID!\n    $status: STATUS!\n  ) {\n    createSegment(\n      input: {\n        name: $name\n        segmentType: $segmentType\n        status: $status\n        organization_id: $organization_id\n        application_id: $application_id\n        rule_id: $rule_id\n      }\n    ) {\n      id\n      name\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_EVENT_SUBSCRIPTION = he.default(
          g ||
            (g = a(
              [
                "\n  mutation createEventSubscription($input: CreateEventSubscriptionInput) {\n    createEventSubscription(input: $input) {\n      id\n      name\n      status\n    }\n  }\n"
              ],
              [
                "\n  mutation createEventSubscription($input: CreateEventSubscriptionInput) {\n    createEventSubscription(input: $input) {\n      id\n      name\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.UPDATE_EVENT_SUBSCRIPTION = he.default(
          y ||
            (y = a(
              [
                "\n  mutation updateEventSubscriptionStatus(\n    $input: UpdateEventSubscriptionStatusInput\n  ) {\n    updateEventSubscriptionStatus(input: $input) {\n      id\n      name\n      status\n    }\n  }\n"
              ],
              [
                "\n  mutation updateEventSubscriptionStatus(\n    $input: UpdateEventSubscriptionStatusInput\n  ) {\n    updateEventSubscriptionStatus(input: $input) {\n      id\n      name\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.createRule = he.default(
          v ||
            (v = a(
              [
                "\n  mutation createRule($input: CreateRuleInput!) {\n    createRule(input: $input) {\n      id\n      name\n      description\n      status\n      type\n      ruleConfiguration\n      ruleExpression\n    }\n  }\n"
              ],
              [
                "\n  mutation createRule($input: CreateRuleInput!) {\n    createRule(input: $input) {\n      id\n      name\n      description\n      status\n      type\n      ruleConfiguration\n      ruleExpression\n    }\n  }\n"
              ]
            ))
        )),
        (t.updateRule = he.default(
          _ ||
            (_ = a(
              [
                "\n  mutation updateRule($id: ID!, $input: UpdateRuleInput!) {\n    updateRule(id: $id, input: $input) {\n      id\n      name\n      description\n      status\n      type\n    }\n  }\n"
              ],
              [
                "\n  mutation updateRule($id: ID!, $input: UpdateRuleInput!) {\n    updateRule(id: $id, input: $input) {\n      id\n      name\n      description\n      status\n      type\n    }\n  }\n"
              ]
            ))
        )),
        (t.communications = he.default(
          E ||
            (E = a(
              [
                "\n  query communications(\n    $entityId: ID!\n    $entityType: COMMUNICATION_ENTITY_TYPE\n    $organization_id: ID!\n  ) {\n    communications(\n      entityId: $entityId\n      entityType: $entityType\n      organization_id: $organization_id\n      status: ACTIVE\n    ) {\n      id\n      entityId\n      entityType\n      messageTemplate {\n        id\n        name\n        messageFormat\n        templateBodyText\n        templateSubjectText\n      }\n    }\n  }\n"
              ],
              [
                "\n  query communications(\n    $entityId: ID!\n    $entityType: COMMUNICATION_ENTITY_TYPE\n    $organization_id: ID!\n  ) {\n    communications(\n      entityId: $entityId\n      entityType: $entityType\n      organization_id: $organization_id\n      status: ACTIVE\n    ) {\n      id\n      entityId\n      entityType\n      messageTemplate {\n        id\n        name\n        messageFormat\n        templateBodyText\n        templateSubjectText\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.audiences = he.default(
          b ||
            (b = a(
              [
                "\n  query audiences($campaign_id: ID, $organization_id: ID!, $segment_id: ID) {\n    audiences(\n      campaign_id: $campaign_id\n      organization_id: $organization_id\n      segment_id: $segment_id\n      status: ACTIVE\n    ) {\n      id\n      segment {\n        id\n        name\n        rule {\n          id\n          name\n          type\n        }\n        status\n      }\n    }\n  }\n"
              ],
              [
                "\n  query audiences($campaign_id: ID, $organization_id: ID!, $segment_id: ID) {\n    audiences(\n      campaign_id: $campaign_id\n      organization_id: $organization_id\n      segment_id: $segment_id\n      status: ACTIVE\n    ) {\n      id\n      segment {\n        id\n        name\n        rule {\n          id\n          name\n          type\n        }\n        status\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.createCommunication = he.default(
          C ||
            (C = a(
              [
                "\n  mutation createCommunication($input: CreateCommunicationInput!) {\n    createCommunication(input: $input) {\n      id\n      entityId\n      entityType\n      messageTemplate {\n        id\n        name\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation createCommunication($input: CreateCommunicationInput!) {\n    createCommunication(input: $input) {\n      id\n      entityId\n      entityType\n      messageTemplate {\n        id\n        name\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.updateCommunication = he.default(
          S ||
            (S = a(
              [
                "\n  mutation updateCommunication($input: UpdateCommunicationInput!) {\n    updateCommunication(input: $input) {\n      id\n      entityId\n      entityType\n      isScheduled\n      firstScheduleDateTime\n      isRepeatable\n      lastProcessedDateTime\n      commsChannelName\n      status\n    }\n  }\n"
              ],
              [
                "\n  mutation updateCommunication($input: UpdateCommunicationInput!) {\n    updateCommunication(input: $input) {\n      id\n      entityId\n      entityType\n      isScheduled\n      firstScheduleDateTime\n      isRepeatable\n      lastProcessedDateTime\n      commsChannelName\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.LINK_CHOICE_TO_QUESTION = he.default(
          T ||
            (T = a(
              [
                "\n  mutation linkChoiceToQuestion($choiceId: ID!, $questionId: ID!) {\n    linkChoiceToQuestion(choiceId: $choiceId, questionId: $questionId) {\n      id\n      fromQuestion {\n        id\n        questionText\n        type\n      }\n      choiceText\n      rangeStart\n      rangeEnd\n    }\n  }\n"
              ],
              [
                "\n  mutation linkChoiceToQuestion($choiceId: ID!, $questionId: ID!) {\n    linkChoiceToQuestion(choiceId: $choiceId, questionId: $questionId) {\n      id\n      fromQuestion {\n        id\n        questionText\n        type\n      }\n      choiceText\n      rangeStart\n      rangeEnd\n    }\n  }\n"
              ]
            ))
        )),
        (t.createMessageTemplate = he.default(
          x ||
            (x = a(
              [
                "\n  mutation createMessageTemplate($input: CreateMessageTemplateInput!) {\n    createMessageTemplate(input: $input) {\n      id\n      name\n      description\n      messageFormat\n      templateBodyText\n      templateSubjectText\n      templateStyle\n    }\n  }\n"
              ],
              [
                "\n  mutation createMessageTemplate($input: CreateMessageTemplateInput!) {\n    createMessageTemplate(input: $input) {\n      id\n      name\n      description\n      messageFormat\n      templateBodyText\n      templateSubjectText\n      templateStyle\n    }\n  }\n"
              ]
            ))
        )),
        (t.updateMessageTemplate = he.default(
          O ||
            (O = a(
              [
                "\n  mutation updateMessageTemplate($input: UpdateMessageTemplateInput!) {\n    updateMessageTemplate(input: $input) {\n      id\n      name\n      description\n      messageFormat\n      templateBodyText\n      templateSubjectText\n      templateStyle\n      status\n    }\n  }\n"
              ],
              [
                "\n  mutation updateMessageTemplate($input: UpdateMessageTemplateInput!) {\n    updateMessageTemplate(input: $input) {\n      id\n      name\n      description\n      messageFormat\n      templateBodyText\n      templateSubjectText\n      templateStyle\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.createAudience = he.default(
          w ||
            (w = a(
              [
                "\n  mutation createAudience($input: createAudienceInput!) {\n    createAudience(input: $input) {\n      id\n      campaign {\n        id\n        name\n        audienceFilterRule {\n          id\n          name\n        }\n      }\n      segment {\n        id\n        name\n        segmentType\n      }\n      status\n    }\n  }\n"
              ],
              [
                "\n  mutation createAudience($input: createAudienceInput!) {\n    createAudience(input: $input) {\n      id\n      campaign {\n        id\n        name\n        audienceFilterRule {\n          id\n          name\n        }\n      }\n      segment {\n        id\n        name\n        segmentType\n      }\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.updateAudiencesWithCampaignId = he.default(
          I ||
            (I = a(
              [
                "\n  mutation updateAudiencesWithCampaignId($campaignId: ID, $segments: [ID]!) {\n    createAudienceForCampaign(campaignId: $campaignId, segments: $segments) {\n      id\n      campaign {\n        id\n      }\n      segment {\n        id\n        name\n        segmentType\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation updateAudiencesWithCampaignId($campaignId: ID, $segments: [ID]!) {\n    createAudienceForCampaign(campaignId: $campaignId, segments: $segments) {\n      id\n      campaign {\n        id\n      }\n      segment {\n        id\n        name\n        segmentType\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.attributes = he.default(
          A ||
            (A = a(
              [
                "\n  query ruleAttributes($input: SearchRuleAttributeInput!) {\n    ruleAttributes(input: $input) {\n      id\n      attributeName\n      description\n      attributeValueType\n      status\n    }\n  }\n"
              ],
              [
                "\n  query ruleAttributes($input: SearchRuleAttributeInput!) {\n    ruleAttributes(input: $input) {\n      id\n      attributeName\n      description\n      attributeValueType\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.allFeedbackForms = he.default(
          N ||
            (N = a(
              [
                "\n  query feedbackForms {\n    feedbackForms {\n      id\n      title\n      customerFeedbacks {\n        id\n      }\n      campaign {\n        id\n        status\n        name\n      }\n    }\n  }\n"
              ],
              [
                "\n  query feedbackForms {\n    feedbackForms {\n      id\n      title\n      customerFeedbacks {\n        id\n      }\n      campaign {\n        id\n        status\n        name\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.allRuleAttributes = he.default(
          P ||
            (P = a(
              [
                "\n  query ruleAttributes($org_id: ID!) {\n    ruleAttributes(input: { status: ACTIVE, organizationId: $org_id }) {\n      id\n      attributeName\n      attributeValueType\n      status\n    }\n  }\n"
              ],
              [
                "\n  query ruleAttributes($org_id: ID!) {\n    ruleAttributes(input: { status: ACTIVE, organizationId: $org_id }) {\n      id\n      attributeName\n      attributeValueType\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.UPDATE_CAMPAIGN = he.default(
          k ||
            (k = a(
              [
                "\n  mutation updateCampaign($id: ID!, $input: CampaignUpdateInput) {\n    updateCampaign(id: $id, input: $input) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      campaignType\n      status\n      feedbackForm {\n        id\n        title\n      }\n      audienceFilterRule {\n        id\n        name\n        description\n        type\n        ruleConfiguration\n        ruleExpression\n      }\n      triggerRule {\n        id\n        name\n        description\n        type\n        ruleConfiguration\n        ruleExpression\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation updateCampaign($id: ID!, $input: CampaignUpdateInput) {\n    updateCampaign(id: $id, input: $input) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      campaignType\n      status\n      feedbackForm {\n        id\n        title\n      }\n      audienceFilterRule {\n        id\n        name\n        description\n        type\n        ruleConfiguration\n        ruleExpression\n      }\n      triggerRule {\n        id\n        name\n        description\n        type\n        ruleConfiguration\n        ruleExpression\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.DISABLE_CAMPAIGN = he.default(
          F ||
            (F = a(
              [
                "\n  mutation disableCampaign($id: ID!) {\n    disableCampaign(id: $id) {\n      id\n      name\n      description\n    }\n  }\n"
              ],
              [
                "\n  mutation disableCampaign($id: ID!) {\n    disableCampaign(id: $id) {\n      id\n      name\n      description\n    }\n  }\n"
              ]
            ))
        )),
        (t.EVENT_SUBSCRIPTION = he.default(
          D ||
            (D = a(
              [
                "\n  query eventSubscriptions(\n    $event_type: String\n    $organization_id: ID\n    $application_id: ID\n    $status: STATUS\n  ) {\n    eventSubscriptions(\n      event_type: $event_type\n      organization_id: $organization_id\n      application_id: $application_id\n      status: $status\n    ) {\n      id\n      name\n      event_type {\n        id\n        type\n        status\n      }\n    }\n  }\n"
              ],
              [
                "\n  query eventSubscriptions(\n    $event_type: String\n    $organization_id: ID\n    $application_id: ID\n    $status: STATUS\n  ) {\n    eventSubscriptions(\n      event_type: $event_type\n      organization_id: $organization_id\n      application_id: $application_id\n      status: $status\n    ) {\n      id\n      name\n      event_type {\n        id\n        type\n        status\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.campaigns = he.default(
          M ||
            (M = a(
              [
                "\n  query campaigns(\n    $status: STATUS!\n    $campaignType: [String]\n    $organization_id: ID\n  ) {\n    campaigns(\n      status: $status\n      campaignType: $campaignType\n      organization_id: $organization_id\n    ) {\n      id\n      name\n      description\n      status\n      campaignStatus\n      startTime\n      endTime\n      campaignType\n      priority\n      createdBy\n      lastModifiedBy\n      createdTime\n      lastModifiedTime\n      organization {\n        id\n        name\n      }\n      application {\n        id\n        name\n      }\n      audienceFilterRule {\n        id\n        name\n        ruleConfiguration\n        ruleExpression\n      }\n    }\n  }\n"
              ],
              [
                "\n  query campaigns(\n    $status: STATUS!\n    $campaignType: [String]\n    $organization_id: ID\n  ) {\n    campaigns(\n      status: $status\n      campaignType: $campaignType\n      organization_id: $organization_id\n    ) {\n      id\n      name\n      description\n      status\n      campaignStatus\n      startTime\n      endTime\n      campaignType\n      priority\n      createdBy\n      lastModifiedBy\n      createdTime\n      lastModifiedTime\n      organization {\n        id\n        name\n      }\n      application {\n        id\n        name\n      }\n      audienceFilterRule {\n        id\n        name\n        ruleConfiguration\n        ruleExpression\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.UPDATE_FEEDBACK_UI_CONFIG = he.default(
          j ||
            (j = a(
              [
                "\n  mutation updateFeedbackUIConfig(\n    $feedbackFormId: ID!\n    $feedbackUIConfig: FeedbackUIConfigUpdateInput\n  ) {\n    updateFeedbackUIConfig(\n      feedbackFormId: $feedbackFormId\n      feedbackUIConfig: $feedbackUIConfig\n    ) {\n      id\n      layoutCode\n      backgroundColor\n      accentColor\n      transition\n      logoUrl\n      formStructure\n      headerText\n      exitMessage\n      buttonText\n    }\n  }\n"
              ],
              [
                "\n  mutation updateFeedbackUIConfig(\n    $feedbackFormId: ID!\n    $feedbackUIConfig: FeedbackUIConfigUpdateInput\n  ) {\n    updateFeedbackUIConfig(\n      feedbackFormId: $feedbackFormId\n      feedbackUIConfig: $feedbackUIConfig\n    ) {\n      id\n      layoutCode\n      backgroundColor\n      accentColor\n      transition\n      logoUrl\n      formStructure\n      headerText\n      exitMessage\n      buttonText\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_CAMPAIGN = he.default(
          R ||
            (R = a(
              [
                "\n  mutation createCampaign($input: CampaingAddInput) {\n    createCampaign(input: $input) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n    }\n  }\n"
              ],
              [
                "\n  mutation createCampaign($input: CampaingAddInput) {\n    createCampaign(input: $input) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_CAMPAIGN = he.default(
          q ||
            (q = a(
              [
                "\n  query campaign($id: ID!) {\n    campaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n        name\n        status\n        ruleConfiguration\n      }\n      application {\n        id\n        name\n      }\n      audienceFilterRule {\n        id\n        name\n        status\n        ruleConfiguration\n      }\n      campaignType\n      status\n      feedbackForm {\n        id\n        title\n      }\n    }\n  }\n"
              ],
              [
                "\n  query campaign($id: ID!) {\n    campaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n        name\n        status\n        ruleConfiguration\n      }\n      application {\n        id\n        name\n      }\n      audienceFilterRule {\n        id\n        name\n        status\n        ruleConfiguration\n      }\n      campaignType\n      status\n      feedbackForm {\n        id\n        title\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.feedbackForm = he.default(
          $ ||
            ($ = a(
              [
                "\n  query getFeedbackForm($feedbackFormId: ID!) {\n    getFeedbackForm(feedbackFormId: $feedbackFormId) {\n      id\n      title\n      campaign {\n        id\n        name\n        description\n        startTime\n        endTime\n        status\n        campaignType\n        triggerRule {\n          id\n          name\n          description\n          status\n          type\n        }\n      }\n    }\n  }\n"
              ],
              [
                "\n  query getFeedbackForm($feedbackFormId: ID!) {\n    getFeedbackForm(feedbackFormId: $feedbackFormId) {\n      id\n      title\n      campaign {\n        id\n        name\n        description\n        startTime\n        endTime\n        status\n        campaignType\n        triggerRule {\n          id\n          name\n          description\n          status\n          type\n        }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.allAudience = he.default(
          V ||
            (V = a(
              [
                "\n  query audiences($org_id: ID!, $app_id: ID!, $camp_id: ID!) {\n    audiences(\n      organization_id: $org_id\n      application_id: $app_id\n      campaign_id: $camp_id\n      status: ACTIVE\n    ) {\n      id\n      campaign {\n        id\n        name\n      }\n      status\n    }\n  }\n"
              ],
              [
                "\n  query audiences($org_id: ID!, $app_id: ID!, $camp_id: ID!) {\n    audiences(\n      organization_id: $org_id\n      application_id: $app_id\n      campaign_id: $camp_id\n      status: ACTIVE\n    ) {\n      id\n      campaign {\n        id\n        name\n      }\n      status\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREAT_BLANK_QUESITON = he.default(
          L ||
            (L = a(
              [
                "\n  mutation createQuestionnaire(\n    $feedbackFormId: ID!\n    $questionnaireInput: QuestionInput\n  ) {\n    createQuestionnaire(\n      feedbackFormId: $feedbackFormId\n      input: $questionnaireInput\n    ) {\n      id\n      questionText\n      type\n      rangeMin\n      rangeMax\n    }\n  }\n"
              ],
              [
                "\n  mutation createQuestionnaire(\n    $feedbackFormId: ID!\n    $questionnaireInput: QuestionInput\n  ) {\n    createQuestionnaire(\n      feedbackFormId: $feedbackFormId\n      input: $questionnaireInput\n    ) {\n      id\n      questionText\n      type\n      rangeMin\n      rangeMax\n    }\n  }\n"
              ]
            ))
        )),
        (t.EDIT_QUESTION = he.default(
          B ||
            (B = a(
              [
                "\n  mutation editQuestion($editQuestionInput: EditQuestionInput) {\n    editQuestion(input: $editQuestionInput) {\n      id\n      questionText\n      rangeMin\n      rangeMax\n      type\n    }\n  }\n"
              ],
              [
                "\n  mutation editQuestion($editQuestionInput: EditQuestionInput) {\n    editQuestion(input: $editQuestionInput) {\n      id\n      questionText\n      rangeMin\n      rangeMax\n      type\n    }\n  }\n"
              ]
            ))
        )),
        (t.ADD_QUESTION = he.default(
          Q ||
            (Q = a(
              [
                "\n  mutation addQuestion($choiceId: ID!, $input: QuestionInput) {\n    addQuestion(choiceId: $choiceId, input: $input) {\n      id\n      questionText\n      rangeMin\n      rangeMax\n      type\n      choices {\n        id\n        choiceText\n        rangeStart\n        rangeEnd\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation addQuestion($choiceId: ID!, $input: QuestionInput) {\n    addQuestion(choiceId: $choiceId, input: $input) {\n      id\n      questionText\n      rangeMin\n      rangeMax\n      type\n      choices {\n        id\n        choiceText\n        rangeStart\n        rangeEnd\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.EDIT_CHOICE = he.default(
          U ||
            (U = a(
              [
                "\n  mutation addChoice($input: EditChoiceInput) {\n    editChoice(input: $input) {\n      id\n      choiceText\n      rangeStart\n      rangeEnd\n    }\n  }\n"
              ],
              [
                "\n  mutation addChoice($input: EditChoiceInput) {\n    editChoice(input: $input) {\n      id\n      choiceText\n      rangeStart\n      rangeEnd\n    }\n  }\n"
              ]
            ))
        )),
        (t.ADD_CHOICE = he.default(
          z ||
            (z = a(
              [
                "\n  mutation addChoice($questionId: ID!, $input: ChoiceInput) {\n    addChoice(questionId: $questionId, input: $input) {\n      id\n      choiceText\n      rangeStart\n      rangeEnd\n    }\n  }\n"
              ],
              [
                "\n  mutation addChoice($questionId: ID!, $input: ChoiceInput) {\n    addChoice(questionId: $questionId, input: $input) {\n      id\n      choiceText\n      rangeStart\n      rangeEnd\n    }\n  }\n"
              ]
            ))
        )),
        (t.REMOVE_CHOICE = he.default(
          H ||
            (H = a(
              [
                "\n  mutation removeChoice($id: ID!) {\n    removeChoice(id: $id) {\n      choiceText\n    }\n  }\n"
              ],
              [
                "\n  mutation removeChoice($id: ID!) {\n    removeChoice(id: $id) {\n      choiceText\n    }\n  }\n"
              ]
            ))
        )),
        (t.QUESTION_TYPES = he.default(
          G ||
            (G = a(
              ["\n  query questionTypes {\n    questionTypes\n  }\n"],
              ["\n  query questionTypes {\n    questionTypes\n  }\n"]
            ))
        )),
        (t.GET_QUESTIONNAIRE = he.default(
          Y ||
            (Y = a(
              [
                "\n  query getQuestionnaireHierarchy($questionId: ID!) {\n    questionHierarchy(questionId: $questionId) {\n      id\n      questionText\n      type\n      rangeMax\n      rangeMin\n      fromChoice {\n        id\n        choiceText\n\n        rangeStart\n        rangeEnd\n      }\n      feedbackCategory {\n        id\n        title\n      }\n      choices {\n        id\n        choiceText\n        rangeStart\n        rangeEnd\n        toQuestion {\n          id\n          questionText\n          type\n          rangeMax\n          rangeMin\n          feedbackCategory {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"
              ],
              [
                "\n  query getQuestionnaireHierarchy($questionId: ID!) {\n    questionHierarchy(questionId: $questionId) {\n      id\n      questionText\n      type\n      rangeMax\n      rangeMin\n      fromChoice {\n        id\n        choiceText\n\n        rangeStart\n        rangeEnd\n      }\n      feedbackCategory {\n        id\n        title\n      }\n      choices {\n        id\n        choiceText\n        rangeStart\n        rangeEnd\n        toQuestion {\n          id\n          questionText\n          type\n          rangeMax\n          rangeMin\n          feedbackCategory {\n            id\n            title\n          }\n        }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_FEEDBACK_FORM = he.default(
          K ||
            (K = a(
              [
                "\n  query getFeedbackForm($campaignId: ID!) {\n    campaign(id: $campaignId) {\n      id\n      feedbackForm {\n        id\n        title\n        questionnaireRoot {\n          id\n          questionText\n          rangeMax\n          rangeMin\n          type\n        }\n      }\n    }\n  }\n"
              ],
              [
                "\n  query getFeedbackForm($campaignId: ID!) {\n    campaign(id: $campaignId) {\n      id\n      feedbackForm {\n        id\n        title\n        questionnaireRoot {\n          id\n          questionText\n          rangeMax\n          rangeMin\n          type\n        }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_CAMPAIGNS = he.default(
          W ||
            (W = a(
              [
                "\n  query getCampaign($userId: ID!) {\n    user(id: $userId) {\n      id\n      createdCampaigns {\n        id\n        name\n        description\n        startTime\n        endTime\n        status\n        campaignType\n        organization {\n          name\n        }\n        application {\n          id\n          name\n          platform\n        }\n      }\n    }\n  }\n"
              ],
              [
                "\n  query getCampaign($userId: ID!) {\n    user(id: $userId) {\n      id\n      createdCampaigns {\n        id\n        name\n        description\n        startTime\n        endTime\n        status\n        campaignType\n        organization {\n          name\n        }\n        application {\n          id\n          name\n          platform\n        }\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.ADD_APPLICATION = he.default(
          X ||
            (X = a(
              [
                "\n  mutation addApplication($organizationId: ID!, $input: ApplicationInput!) {\n    createApplication(organizationId: $organizationId, input: $input) {\n      id\n      name\n      description\n    }\n  }\n"
              ],
              [
                "\n  mutation addApplication($organizationId: ID!, $input: ApplicationInput!) {\n    createApplication(organizationId: $organizationId, input: $input) {\n      id\n      name\n      description\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_FEEDBACK_FORM = he.default(
          J ||
            (J = a(
              [
                "\n  mutation createFeedbackForm($campaignId: ID!, $formName: String) {\n    createFeedbackForm(campaignId: $campaignId, input: { title: $formName }) {\n      campaign {\n        id\n        name\n      }\n      title\n    }\n  }\n"
              ],
              [
                "\n  mutation createFeedbackForm($campaignId: ID!, $formName: String) {\n    createFeedbackForm(campaignId: $campaignId, input: { title: $formName }) {\n      campaign {\n        id\n        name\n      }\n      title\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_CHILD_ORGANIZATIONS = he.default(
          Z ||
            (Z = a(
              [
                "\n  query organizationHierarchy($organizationId: ID!) {\n    organizationHierarchy(rootId: $organizationId)\n  }\n"
              ],
              [
                "\n  query organizationHierarchy($organizationId: ID!) {\n    organizationHierarchy(rootId: $organizationId)\n  }\n"
              ]
            ))
        )),
        (t.GET_APPLICATIONS = he.default(
          ee ||
            (ee = a(
              [
                "\n  query getApplications($organizationId: ID!) {\n    organization(id: $organizationId) {\n      applications {\n        id\n        name\n        description\n        platform\n      }\n    }\n  }\n"
              ],
              [
                "\n  query getApplications($organizationId: ID!) {\n    organization(id: $organizationId) {\n      applications {\n        id\n        name\n        description\n        platform\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.LAUNCH_CAMPAIGN = he.default(
          te ||
            (te = a(
              [
                "\n  mutation launchCampaign($id: ID!) {\n    launchCampaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n      }\n      campaignType\n      priority\n      campaignStatus\n    }\n  }\n"
              ],
              [
                "\n  mutation launchCampaign($id: ID!) {\n    launchCampaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n      }\n      campaignType\n      priority\n      campaignStatus\n    }\n  }\n"
              ]
            ))
        )),
        (t.PAUSE_CAMPAIGN = he.default(
          ne ||
            (ne = a(
              [
                "\n  mutation pauseCampaign($id: ID!) {\n    pauseCampaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n      }\n      campaignType\n      priority\n      campaignStatus\n    }\n  }\n"
              ],
              [
                "\n  mutation pauseCampaign($id: ID!) {\n    pauseCampaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n      }\n      campaignType\n      priority\n      campaignStatus\n    }\n  }\n"
              ]
            ))
        )),
        (t.UNPAUSE_CAMPAIGN = he.default(
          ae ||
            (ae = a(
              [
                "\n  mutation unpauseCampaign($id: ID!) {\n    unpauseCampaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n      }\n      campaignType\n      priority\n      campaignStatus\n    }\n  }\n"
              ],
              [
                "\n  mutation unpauseCampaign($id: ID!) {\n    unpauseCampaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n      }\n      campaignType\n      priority\n      campaignStatus\n    }\n  }\n"
              ]
            ))
        )),
        (t.ABANDON_CAMPAIGN = he.default(
          re ||
            (re = a(
              [
                "\n  mutation abandonCampaign($id: ID!) {\n    abandonCampaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n      }\n      campaignType\n      priority\n      campaignStatus\n    }\n  }\n"
              ],
              [
                "\n  mutation abandonCampaign($id: ID!) {\n    abandonCampaign(id: $id) {\n      id\n      name\n      description\n      startTime\n      endTime\n      status\n      triggerRule {\n        id\n      }\n      campaignType\n      priority\n      campaignStatus\n    }\n  }\n"
              ]
            ))
        )),
        (t.GET_CAMPAIGN_DASHBOARD = he.default(
          oe ||
            (oe = a(
              [
                "\n  query campaign($id: ID!) {\n    campaign(id: $id) {\n      id\n      name\n      description\n      status\n      campaignStatus\n      startTime\n      endTime\n      campaignType\n      priority\n      createdBy\n      lastModifiedBy\n      createdTime\n      lastModifiedTime\n      organization {\n        id\n        name\n      }\n      application {\n        id\n        name\n      }\n      audienceFilterRule {\n        id\n        name\n        ruleConfiguration\n        ruleExpression\n      }\n    }\n  }\n"
              ],
              [
                "\n  query campaign($id: ID!) {\n    campaign(id: $id) {\n      id\n      name\n      description\n      status\n      campaignStatus\n      startTime\n      endTime\n      campaignType\n      priority\n      createdBy\n      lastModifiedBy\n      createdTime\n      lastModifiedTime\n      organization {\n        id\n        name\n      }\n      application {\n        id\n        name\n      }\n      audienceFilterRule {\n        id\n        name\n        ruleConfiguration\n        ruleExpression\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.AUDIENCES = he.default(
          ie ||
            (ie = a(
              [
                "\n  query audiences($campaign_id: ID, $organization_id: ID, $segment_id: ID) {\n    audiences(\n      campaign_id: $campaign_id\n      organization_id: $organization_id\n      segment_id: $segment_id\n      status: ACTIVE\n    ) {\n      id\n      segment {\n        id\n        name\n        rule {\n          id\n          name\n          type\n        }\n        status\n      }\n    }\n  }\n"
              ],
              [
                "\n  query audiences($campaign_id: ID, $organization_id: ID, $segment_id: ID) {\n    audiences(\n      campaign_id: $campaign_id\n      organization_id: $organization_id\n      segment_id: $segment_id\n      status: ACTIVE\n    ) {\n      id\n      segment {\n        id\n        name\n        rule {\n          id\n          name\n          type\n        }\n        status\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.EVENT_SUBSCRITPION_FOR_EVENT_TYPE = he.default(
          le ||
            (le = a(
              [
                "\n  query eventSubscriptionsForEventType($eventTypeId: ID!) {\n    eventSubscriptionsForEventType(eventTypeId: $eventTypeId) {\n      id\n      eventType {\n        id\n        code\n        description\n        status\n        application {\n          id\n          name\n          description\n        }\n      }\n      status\n      triggerAction\n    }\n  }\n"
              ],
              [
                "\n  query eventSubscriptionsForEventType($eventTypeId: ID!) {\n    eventSubscriptionsForEventType(eventTypeId: $eventTypeId) {\n      id\n      eventType {\n        id\n        code\n        description\n        status\n        application {\n          id\n          name\n          description\n        }\n      }\n      status\n      triggerAction\n    }\n  }\n"
              ]
            ))
        )),
        (t.EVENT_TYPE_FOR_APPLICATION = he.default(
          se ||
            (se = a(
              [
                "\n  query eventTypesForApplication($appId: ID!) {\n    eventTypesForApplication(appId: $appId) {\n      id\n      code\n      description\n      status\n      application {\n        id\n        name\n        description\n      }\n    }\n  }\n"
              ],
              [
                "\n  query eventTypesForApplication($appId: ID!) {\n    eventTypesForApplication(appId: $appId) {\n      id\n      code\n      description\n      status\n      application {\n        id\n        name\n        description\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.CREATE_EVENT_TYPE = he.default(
          ue ||
            (ue = a(
              [
                "\n  mutation createEventType(\n    $code: String!\n    $description: String\n    $applicationId: ID!\n  ) {\n    createEventType(\n      code: $code\n      description: $description\n      applicationId: $applicationId\n    ) {\n      id\n      code\n      description\n      status\n      application {\n        id\n        name\n        description\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation createEventType(\n    $code: String!\n    $description: String\n    $applicationId: ID!\n  ) {\n    createEventType(\n      code: $code\n      description: $description\n      applicationId: $applicationId\n    ) {\n      id\n      code\n      description\n      status\n      application {\n        id\n        name\n        description\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.AUDIENCE_COUNT = he.default(
          ce ||
            (ce = a(
              [
                "\n\tquery audienceCount($segments:[ID], $organizationId:ID!){\n\t\taudienceCount(segments:$segments, organizationId:$organizationId){\n\t\t\tcount\n\t\t}\n\t}\n"
              ],
              [
                "\n\tquery audienceCount($segments:[ID], $organizationId:ID!){\n\t\taudienceCount(segments:$segments, organizationId:$organizationId){\n\t\t\tcount\n\t\t}\n\t}\n"
              ]
            ))
        )),
        (t.TOTAL_AUDIENCE_COUNT = he.default(
          pe ||
            (pe = a(
              [
                "\n\tquery totalAudienceCountForCampaign($campaignId:ID!){\n\t\ttotalAudienceCountForCampaign(campaignId:$campaignId){\n    \t\tcount\n  \t\t}\n\t}\n"
              ],
              [
                "\n\tquery totalAudienceCountForCampaign($campaignId:ID!){\n\t\ttotalAudienceCountForCampaign(campaignId:$campaignId){\n    \t\tcount\n  \t\t}\n\t}\n"
              ]
            ))
        )),
        (t.REFINEX_SEND_TEST_FEEDBACK = he.default(
          de ||
            (de = a(
              [
                "\n  mutation refineXSendFeedbackByInput(\n    $campaignId: String!\n    $forTest: Boolean\n    $customer: EventCustomerInput\n    $customerDevice: EventCustomerDeviceInput\n  ) {\n    refineXSendFeedbackByInput(\n      campaignId: $campaignId\n      forTest: $forTest\n      customer: $customer\n      customerDevice: $customerDevice\n    )\n  }\n"
              ],
              [
                "\n  mutation refineXSendFeedbackByInput(\n    $campaignId: String!\n    $forTest: Boolean\n    $customer: EventCustomerInput\n    $customerDevice: EventCustomerDeviceInput\n  ) {\n    refineXSendFeedbackByInput(\n      campaignId: $campaignId\n      forTest: $forTest\n      customer: $customer\n      customerDevice: $customerDevice\n    )\n  }\n"
              ]
            ))
        )),
        (t.CREATE_EVENT_SUBSCRIPTIONS = he.default(
          me ||
            (me = a(
              [
                "\n  mutation createEventSubscription(\n    $eventTypeId: ID!\n    $triggerAction: TriggerActionEnum!\n    $customActionId: ID\n  ) {\n    createEventSubscription(\n      eventTypeId: $eventTypeId\n      triggerAction: $triggerAction\n      customActionId: $customActionId\n    ) {\n      id\n      triggerAction\n      status\n      sync\n      eventType {\n        id\n        code\n        description\n      }\n    }\n  }\n"
              ],
              [
                "\n  mutation createEventSubscription(\n    $eventTypeId: ID!\n    $triggerAction: TriggerActionEnum!\n    $customActionId: ID\n  ) {\n    createEventSubscription(\n      eventTypeId: $eventTypeId\n      triggerAction: $triggerAction\n      customActionId: $customActionId\n    ) {\n      id\n      triggerAction\n      status\n      sync\n      eventType {\n        id\n        code\n        description\n      }\n    }\n  }\n"
              ]
            ))
        )),
        (t.SEND_FEEDBACK_MESSAGE = he.default(
          fe ||
            (fe = a(
              [
                "\n  mutation refineXSendFeedbackByInput(\n    $campaignId: String!\n    $customer: EventCustomerInput\n    $forTest: Boolean\n    $customerDevice: EventCustomerDeviceInput\n  ) {\n    refineXSendFeedbackByInput(\n      campaignId: $campaignId\n      customer: $customer\n      forTest: $forTest\n      customerDevice: $customerDevice\n    )\n  }\n"
              ],
              [
                "\n  mutation refineXSendFeedbackByInput(\n    $campaignId: String!\n    $customer: EventCustomerInput\n    $forTest: Boolean\n    $customerDevice: EventCustomerDeviceInput\n  ) {\n    refineXSendFeedbackByInput(\n      campaignId: $campaignId\n      customer: $customer\n      forTest: $forTest\n      customerDevice: $customerDevice\n    )\n  }\n"
              ]
            ))
        ));
    },
    645: function(e, t, n) {
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
        l = o(n(646)),
        s = n(16);
      n(814);
      var u = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return i.createElement(
              "div",
              null,
              i.createElement(s.Route, {
                path: "" + this.props.match.url,
                component: l.default
              })
            );
          }),
          t
        );
      })(i.Component);
      t.default = u;
    },
    646: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(n(0)),
        i = n(16),
        l = r(n(647)),
        s = r(n(652)),
        u = r(n(664)),
        c = r(n(726)),
        p = r(n(727)),
        d = r(n(730)),
        m = r(n(737));
      n(812);
      t.default = function(e) {
        var t = e.match;
        return o.createElement(
          "div",
          { className: "RefineX-Main" },
          o.createElement(
            i.Switch,
            null,
            o.createElement(i.Redirect, {
              exact: !0,
              from: t.url + "/",
              to: t.url + "/dashboard"
            }),
            o.createElement(i.Route, {
              path: t.url + "/dashboard",
              component: s.default
            }),
            o.createElement(i.Route, {
              path: t.url + "/feedback",
              component: u.default
            }),
            o.createElement(i.Route, {
              path: t.url + "/segment/segmentList",
              component: c.default
            }),
            o.createElement(i.Route, {
              path: t.url + "/issueTag",
              component: m.default
            }),
            o.createElement(i.Route, {
              path: t.url + "/segment/newSegment",
              component: p.default
            }),
            o.createElement(i.Route, {
              path: t.url + "/apps",
              component: l.default
            }),
            o.createElement(i.Route, {
              path: t.url + "/analytics",
              component: d.default
            })
          )
        );
      };
    },
    647: function(e, t, n) {
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
        l = n(16),
        s = o(n(648)),
        u = o(n(650));
      n(358);
      var c = (function(e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          a(t, e),
          (t.prototype.render = function() {
            return i.createElement(
              "div",
              { className: "RefineX-Main" },
              i.createElement(
                l.Switch,
                null,
                i.createElement(l.Route, {
                  exact: !0,
                  path: this.props.match.url,
                  component: u.default
                }),
                i.createElement(l.Route, {
                  exact: !0,
                  path: this.props.match.url + "/create",
                  component: s.default
                })
              )
            );
          }),
          t
        );
      })(i.Component);
      t.default = c;
    },
    648: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
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
      var i = o(n(0)),
        l = n(3);
      n(358);
      var s = n(37),
        u = n(55),
        c = o(n(33)),
        p = n(14),
        d = l.Select.Option,
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
        f = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.choosePlatform = function(e, t) {
                n.setState({ platform: e.target.name });
              }),
              (n.getAppDetails = function(e) {
                console.log("APPDATA>>>", e),
                  n.setState({
                    id: e.id,
                    appName: e.appName,
                    description: e.discription,
                    platform: e.platform,
                    organizationId: e.org_id,
                    update: !0
                  });
              }),
              (n.handleOnChange = function(e) {
                var t;
                n.setState((((t = {})[e.target.name] = e.target.value), t));
              }),
              (n.onChange = function(e, t) {
                n.setState({ organizationId: e });
              }),
              (n.handleSubmit = function() {
                var e = {};
                "" == n.state.appName.trim() &&
                  (e.appName = "* this field is mandatory"),
                  "" == n.state.organizationId &&
                    (e.organizationId = "* this field is mandatory"),
                  0 !== Object.keys(e).length
                    ? (n.setState({ errors: e }),
                      console.log("Errors in submition" + e))
                    : n.state.update
                    ? (n.setState({ loading: !0 }),
                      n.props.client
                        .mutate({
                          mutation: s.UPDATE_APP,
                          variables: {
                            input: {
                              id: n.state.id,
                              name: n.state.appName,
                              description: n.state.description,
                              platform: n.state.platform
                            }
                          }
                        })
                        .then(function(e) {
                          console.log("Results", e),
                            n.setState({ loading: !1 }),
                            n.props.history.push("/refinex/apps");
                        })
                        .catch(function(e) {
                          console.log("Failed to get Places Details" + e),
                            n.setState({ loading: !1 });
                        }))
                    : (n.setState({ loading: !0 }),
                      n.props.client
                        .mutate({
                          mutation: u.CREATE_APP,
                          variables: {
                            organizationId: n.state.organizationId,
                            input: {
                              name: n.state.appName,
                              description: n.state.description,
                              platform: n.state.platform
                            }
                          }
                        })
                        .then(function(e) {
                          console.log("Results", e),
                            n.setState({ loading: !1 }),
                            n.props.history.push("/refinex/apps");
                        })
                        .catch(function(e) {
                          e.graphQLErrors[0].message &&
                            (n.setState({ loading: !1 }),
                            l.message.warn(e.graphQLErrors[0].message)),
                            n.setState({ loading: !1 });
                        }));
              }),
              (n.state = {
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
                organizationId: "",
                userId: "",
                org_id: ""
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {}),
            (t.prototype.UNSAFE_componentWillMount = function() {
              var e = this,
                t = localStorage.getItem("jwt"),
                n = c.decode(t),
                a = n.id,
                r = n.org_id;
              this.setState({ userId: a, org_id: r }),
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
                r
                  ? this.props.client
                      .query({
                        query: s.GET_ALL_APPS_OF_ORGANIZATION,
                        variables: { id: r },
                        fetchPolicy: "network-only"
                      })
                      .then(function(t) {
                        console.log(t.data);
                        var n = [];
                        !(function e(t, n) {
                          n.push({ name: t.name, id: t.id }),
                            t &&
                              t.children &&
                              t.children.map(function(t) {
                                return e(t, n);
                              });
                        })(t.data.organization, n),
                          e.setState({ organizations: n });
                      })
                      .catch(function(e) {
                        console.log("Failed to get User Details" + e);
                      })
                  : console.log("Error getting JwtData");
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state,
                n =
                  (t.firstName,
                  t.lastName,
                  this.state.organizations.map(function(e, t) {
                    return i.createElement(d, { key: t, value: e.id }, e.name);
                  }));
              return i.createElement(
                "div",
                { className: "gx-card" },
                i.createElement(
                  "div",
                  {
                    className: "gx-card-body",
                    style: {
                      backgroundColor: "#ffffff",
                      height: "90vh",
                      minHeight: "700px"
                    }
                  },
                  i.createElement(
                    "div",
                    { style: { height: "100%" } },
                    i.createElement(
                      "div",
                      { className: "divCenter" },
                      i.createElement(
                        l.Col,
                        { sm: 18, md: 13, lg: 13, xl: 12 },
                        i.createElement(
                          "div",
                          { style: { textAlign: "center" } },
                          i.createElement(
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
                            i.createElement("b", null, "RefineX")
                          )
                        ),
                        i.createElement(
                          l.Form,
                          { className: "appForm" },
                          i.createElement(
                            l.Form.Item,
                            r({}, m, { label: "App Name" }),
                            i.createElement(l.Input, {
                              id: "myInput",
                              placeholder: "App Name",
                              value: this.state.appName,
                              size: "large",
                              name: "appName",
                              onChange: function(t) {
                                return e.handleOnChange(t);
                              }
                            }),
                            i.createElement(
                              "span",
                              { style: { color: "Red" } },
                              this.state.errors.appName
                            )
                          ),
                          this.state.update
                            ? ""
                            : i.createElement(
                                l.Form.Item,
                                r({}, m, { label: "Industry" }),
                                i.createElement(
                                  l.Select,
                                  {
                                    showSearch: !0,
                                    size: "large",
                                    style: { width: "100%" },
                                    placeholder: "Select Industy",
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
                                  n
                                ),
                                i.createElement(
                                  "span",
                                  { style: { color: "Red" } },
                                  this.state.errors.organizationId
                                )
                              ),
                          i.createElement(
                            l.Form.Item,
                            r({}, m, { label: "Description (Optional)" }),
                            i.createElement(l.Input, {
                              required: !0,
                              placeholder: "Description (Optional)",
                              value: this.state.description,
                              size: "large",
                              name: "description",
                              onChange: function(t) {
                                return e.handleOnChange(t);
                              }
                            }),
                            i.createElement(
                              "span",
                              { style: { color: "Red" } },
                              this.state.errors.description
                            )
                          ),
                          i.createElement(
                            "div",
                            {
                              style: { overflow: "hidden", textAlign: "center" }
                            },
                            i.createElement(
                              l.Button,
                              {
                                onClick: function() {
                                  return e.handleSubmit();
                                },
                                loading: this.state.loading,
                                className: "buttonPrimary",
                                style: {
                                  textAlign: "center",
                                  width: "200px",
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
        })(i.Component);
      t.default = p.compose(p.withApollo)(f);
    },
    650: function(e, t, n) {
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
        l = n(3),
        s = o(n(651)),
        u = n(37),
        c = r(n(33));
      n(358);
      var p = n(14),
        d =
          (l.Input.TextArea,
          (function(e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.addApp = function() {
                  n.props.history.push("/refinex/apps/create");
                }),
                (n.test = function() {
                  n.setState({ visible: !0 });
                }),
                (n.handleCancel = function() {
                  n.setState({ visible: !1 });
                }),
                (n.getAppsList = function(e) {
                  n.props.client
                    .query({
                      query: u.GET_ALL_APPS_OF_ORGANIZATION,
                      variables: { id: e.org_id },
                      fetchPolicy: "no-cache"
                    })
                    .then(function(e) {
                      var t = [];
                      !(function e(t, n) {
                        t &&
                          t.applications &&
                          t.applications.map(function(e) {
                            return n.push({
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
                              return e(t, n);
                            });
                      })(e.data.organization, t),
                        n.setState({ appsList: t, spin: !1 });
                    })
                    .catch(function(e) {
                      n.setState({ spin: !1 }),
                        console.log("Failed to get User Details" + e);
                    });
                }),
                (n.deleteApp = function(e) {
                  n.props.client
                    .mutate({ mutation: u.DELETE_APP, variables: { id: e } })
                    .then(function(e) {})
                    .catch(function(e) {
                      n.setState({ spin: !1 }),
                        console.log("Failed to Delete App" + e);
                    });
                }),
                (n.genereteToken = function(e, t) {
                  n.props.client
                    .mutate({
                      mutation: u.GENERATE_API_KEY,
                      variables: { id: t, env: "PROD" }
                    })
                    .then(function(t) {
                      var a = n.state.appsList;
                      (a[e].appKey = t.data.generateAPIKey.api_key),
                        n.setState({ appsList: a });
                    })
                    .catch(function(e) {
                      console.log("Failed" + e);
                    });
                }),
                (n.state = { visible: !1, appsList: [], spin: !1 }),
                n
              );
            }
            return (
              a(t, e),
              (t.prototype.UNSAFE_componentWillMount = function() {
                this.setState({ spin: !0 });
                var e = c.decode(localStorage.getItem("jwt"));
                e
                  ? this.getAppsList(e)
                  : (this.setState({ spin: !1 }),
                    console.log("Error getting JwtData"));
              }),
              (t.prototype.render = function() {
                var e = this;
                this.state.appsList && this.state.appsList;
                return i.createElement(
                  "div",
                  { style: { minHeight: "100vh" } },
                  i.createElement(
                    l.Row,
                    { className: "headerRow1" },
                    i.createElement(
                      "div",
                      { style: { width: "100%" } },
                      i.createElement(
                        "span",
                        { style: { fontSize: 25 } },
                        "Apps"
                      ),
                      i.createElement(
                        "div",
                        { style: { float: "right", flexFlow: "right" } },
                        i.createElement(
                          l.Button,
                          {
                            style: { margin: 0 },
                            onClick: function() {
                              return e.addApp();
                            },
                            className: "buttonPrimary"
                          },
                          "Create Application"
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
                          i.createElement(l.Spin, { size: "large" })
                        ),
                        i.createElement("br", null),
                        " ",
                        i.createElement("br", null),
                        " ",
                        i.createElement("br", null)
                      )
                    : this.state.appsList.length
                    ? i.createElement(
                        "div",
                        { style: { marginTop: "10px" } },
                        i.createElement(
                          l.Row,
                          { className: "placeTableHeaders" },
                          i.createElement(l.Col, { span: 6 }, "Name"),
                          i.createElement(l.Col, { span: 6 }, "Description"),
                          i.createElement(l.Col, { span: 6 }, "Key"),
                          i.createElement(l.Col, { span: 1 })
                        ),
                        this.state.appsList.map(function(t, n) {
                          return i.createElement(s.default, {
                            genereteToken: e.genereteToken,
                            history: e.props.history,
                            deleteApp: e.deleteApp,
                            test: e.test,
                            key: n,
                            index: n,
                            data: t
                          });
                        })
                      )
                    : i.createElement(
                        "div",
                        null,
                        i.createElement(
                          "div",
                          { style: { margin: 80, fontSize: 25 } },
                          i.createElement(
                            "div",
                            { className: "divCenter" },
                            i.createElement("div", null, "No Apps Found")
                          ),
                          i.createElement(
                            "div",
                            { className: "divCenter" },
                            i.createElement(
                              l.Button,
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
                      )
                );
              }),
              t
            );
          })(i.Component));
      t.default = p.withApollo(d);
    },
    651: function(e, t, n) {
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
        i = n(3);
      n(358);
      var l = ["Edit", "Delete"],
        s = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.menus = function() {
                return o.createElement(
                  i.Menu,
                  {
                    onClick: function(e) {
                      "Delete" === e.key
                        ? n.props.deleteApp(n.props.data.id)
                        : "Edit" === e.key &&
                          (sessionStorage.setItem(
                            "AppData",
                            JSON.stringify(n.props.data)
                          ),
                          n.props.history.push("/refinex/apps/create"));
                    }
                  },
                  " ",
                  l.map(function(e) {
                    return o.createElement(
                      i.Menu.Item,
                      { key: e },
                      "  ",
                      e,
                      "  "
                    );
                  })
                );
              }),
              (n.copy = function() {
                var e = document.getElementById(n.props.data.appKey);
                e.select(),
                  document.execCommand("copy"),
                  console.log("Copied Key: " + e.value);
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.data;
              return o.createElement(
                i.Card,
                { className: "placesListCard" },
                o.createElement(
                  i.Row,
                  null,
                  o.createElement(
                    i.Col,
                    { span: 6 },
                    o.createElement(
                      "div",
                      { className: "divCenterVertical" },
                      o.createElement(
                        "div",
                        null,
                        o.createElement(
                          i.Row,
                          null,
                          o.createElement(
                            "span",
                            { style: { color: "black", marginBottom: 5 } },
                            t.appName
                          )
                        )
                      )
                    )
                  ),
                  o.createElement(
                    i.Col,
                    { span: 6 },
                    o.createElement(
                      "div",
                      {
                        style: { width: "100%" },
                        className: "divCenterVertical"
                      },
                      o.createElement(
                        "span",
                        { className: "gx-text-truncate gx-contact-name" },
                        t.discription
                      )
                    )
                  ),
                  o.createElement(
                    i.Col,
                    { span: 6 },
                    t.appKey
                      ? o.createElement(i.Input, {
                          size: "large",
                          value: t.appKey,
                          id: t.appKey,
                          suffix: o.createElement(
                            i.Tooltip,
                            { title: "Copy" },
                            o.createElement(i.Icon, {
                              type: "copy",
                              onClick: function() {
                                return e.copy();
                              },
                              theme: "twoTone"
                            })
                          )
                        })
                      : o.createElement(
                          "div",
                          { className: "divCenterVertical" },
                          o.createElement(
                            i.Button,
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
                  o.createElement(
                    i.Col,
                    { style: { paddingLeft: 0 }, span: 1 },
                    o.createElement(
                      "div",
                      { className: "gx-module-contact-right divCenter" },
                      o.createElement(
                        i.Dropdown,
                        {
                          overlay: this.menus(),
                          placement: "bottomRight",
                          trigger: ["click"]
                        },
                        o.createElement("i", {
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
        })(o.Component);
      t.default = s;
    },
    652: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(n(0)),
        i = n(16),
        l = r(n(653));
      t.default = function(e) {
        var t = e.match;
        return o.createElement(
          i.Switch,
          null,
          o.createElement(i.Route, {
            exact: !0,
            path: t.url,
            component: l.default
          })
        );
      };
    },
    653: function(e, t, n) {
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
        l = n(3),
        s = n(27),
        u = o(n(5));
      n(654);
      var c = n(14),
        p = n(37),
        d = n(30),
        m = o(n(656)),
        f = o(n(657)),
        h = o(n(658)),
        g = o(n(659)),
        y = o(n(663)),
        v = l.Select.Option,
        _ = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.getMetrics = function(e, t) {
                n.setState({ spin: !0 }),
                  n.props.client
                    .query({
                      query: p.GET_ANALYTICS,
                      variables: {
                        org_id: e,
                        product: "REFINEX",
                        dates: { from: n.state.startDate, to: t }
                      },
                      fetchPolicy: "no-cache"
                    })
                    .then(function(e) {
                      console.log(">>>", e),
                        n.formatData(e),
                        n.setState({ spin: !1 });
                    })
                    .catch(function(e) {
                      n.setState({ spin: !1 }),
                        console.log("Failed to get User Details" + e);
                    });
              }),
              (n.formatData = function(e) {
                var t = n.state,
                  a = t.totalCampaigns,
                  r = t.totalFeedbacks,
                  o = t.totalForms,
                  i = t.totalQuestions,
                  l = t.totalChoices,
                  s = t.customerCount,
                  u = t.customers,
                  c = t.totalRefinexEvents,
                  p = t.complains;
                console.log("Service analytics data..", e.data.analytics),
                  e.data.analytics.map(function(e) {
                    "TOTAL_CAMPAIGNS" === e.name
                      ? (a = e.total)
                      : "TOTAL_FEEDBACKS" === e.name
                      ? (r = e.total)
                      : "TOTAL_FORMS" === e.name
                      ? (o = e.total)
                      : "TOTAL_QUESTIONS" === e.name
                      ? (i = e.total)
                      : "TOTAL_CHOICES" === e.name
                      ? (l = e.total)
                      : "CUSTOMER_COUNTS" == e.name
                      ? ((s = e.total), (u = [{ count: 0 }].concat(e.response)))
                      : "REFINEX_EVENTS" == e.name && (c = e.response);
                  }),
                  n.setState({
                    totalCampaigns: a,
                    totalFeedbacks: r,
                    totalForms: o,
                    totalQuestions: i,
                    totalChoices: l,
                    customerCount: s,
                    customers: u,
                    totalRefinexEvents: c,
                    complains: p,
                    spin: !1
                  });
              }),
              (n.state = {
                totalCampaigns: 0,
                totalFeedbacks: 0,
                totalForms: 0,
                totalQuestions: 0,
                totalChoices: 0,
                totalRefinexEvents: [],
                customers: [],
                popularPlaces: [],
                complains: [],
                customerCount: 0,
                org_id: "",
                startDate: u.default().subtract(30, "months"),
                endDate: u.default(),
                errors: {},
                spin: !1,
                filterCustomerValue: "all_customers",
                filterDateValue: "last_month"
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              console.log("This.state...", this.state);
            }),
            (t.prototype.createSurvey = function() {
              l.message.warn("Function not attached yet!");
            }),
            (t.prototype.viewDraftedSurvey = function() {
              l.message.warn("Function to view drafted survey's not linked!");
            }),
            (t.prototype.handleCustomerChange = function(e) {
              console.log("selected Customer Filter :  " + e),
                this.setState({ filterCustomerValue: e });
            }),
            (t.prototype.handleDateChange = function(e) {
              console.log("selected Date Filter :  " + e),
                this.setState({ filterDateValue: e });
            }),
            (t.prototype.render = function() {
              var e = this;
              i.createElement(l.Icon, {
                type: "loading",
                style: { fontSize: 100 },
                spin: !0
              });
              return i.createElement(
                s.Auxiliary,
                null,
                i.createElement(
                  "div",
                  {
                    style: { minHeight: "100vh", backgroundColor: "#F2F2F2" },
                    className: "gx-main-content-wrapper"
                  },
                  i.createElement(
                    l.Row,
                    null,
                    i.createElement(
                      l.Col,
                      { sm: 24, md: 18, xl: 20 },
                      i.createElement(
                        "span",
                        {
                          className: "gx-d-none gx-d-sm-flex",
                          style: {
                            width: "100%",
                            fontSize: 24,
                            color: "#5B5B5B"
                          }
                        },
                        "Dashboard"
                      )
                    ),
                    i.createElement(
                      l.Col,
                      { sm: 0, md: 6, xl: 4, style: { textAlign: "end" } },
                      i.createElement(
                        l.Button,
                        {
                          type: "primary",
                          onClick: function() {
                            e.createSurvey();
                          }
                        },
                        "Create Survey"
                      )
                    )
                  ),
                  i.createElement(
                    l.Row,
                    { style: { paddingBottom: "20px" } },
                    i.createElement(
                      l.Col,
                      { span: 12 },
                      i.createElement(
                        l.Row,
                        null,
                        i.createElement(
                          l.Col,
                          { xl: 12, lg: 12, md: 12, sm: 24, xs: 24 },
                          i.createElement(d.CounterCard, {
                            showComaprison: !1,
                            titleColor: "#545454",
                            subtitleColor: "#999999",
                            title: "+37",
                            subTitle: "Net Promoter Score"
                          })
                        ),
                        i.createElement(
                          l.Col,
                          { xl: 12, lg: 12, md: 12, sm: 24, xs: 24 },
                          i.createElement(d.MultipleCounterCard, {
                            textColor: "#999999",
                            valueColor: "#000",
                            title: "NPS",
                            counterArray: [
                              { title: "New Customers", value: "+3" },
                              { title: "Existing Customers", value: "+5" }
                            ]
                          })
                        )
                      )
                    ),
                    i.createElement(
                      l.Col,
                      { span: 12 },
                      i.createElement(
                        l.Row,
                        null,
                        i.createElement(
                          l.Col,
                          { xl: 12, lg: 12, md: 12, sm: 24, xs: 24 },
                          i.createElement(d.CounterCard, {
                            showComaprison: !1,
                            titleColor: "#545454",
                            subtitleColor: "#999999",
                            title: "06.36",
                            subTitle: "Customer Satisfaction Score"
                          })
                        ),
                        i.createElement(
                          l.Col,
                          { xl: 12, lg: 12, md: 12, sm: 24, xs: 24 },
                          i.createElement(d.MultipleCounterCard, {
                            textColor: "#999999",
                            valueColor: "#000",
                            title: "CSAT",
                            counterArray: [
                              { title: "New Customers", value: "0.35" },
                              { title: "Existing Customers", value: "0.20" }
                            ]
                          })
                        )
                      )
                    )
                  ),
                  i.createElement(
                    l.Row,
                    {
                      style: {
                        backgroundColor: "#FFF",
                        height: "40px",
                        marginLeft: "1px",
                        marginRight: "1px"
                      }
                    },
                    i.createElement(
                      "div",
                      { style: { textAlign: "end", width: "100%" } },
                      i.createElement(
                        l.Select,
                        {
                          size: "small",
                          defaultValue: "all_customers",
                          value: this.state.filterCustomerValue,
                          style: { width: 180, padding: "9px" },
                          onChange: function(t) {
                            e.handleCustomerChange(t);
                          }
                        },
                        i.createElement(
                          v,
                          { value: "all_customers" },
                          "All Customers"
                        ),
                        i.createElement(
                          v,
                          { value: "new_customers" },
                          "New Customers"
                        ),
                        i.createElement(
                          v,
                          { value: "existing_customers" },
                          "Existing Customers"
                        )
                      ),
                      i.createElement(
                        l.Select,
                        {
                          size: "small",
                          defaultValue: "last_week",
                          value: this.state.filterDateValue,
                          style: { width: 150, padding: "9px" },
                          onChange: function(t) {
                            e.handleDateChange(t);
                          }
                        },
                        i.createElement(v, { value: "last_week" }, "Last Week"),
                        i.createElement(
                          v,
                          { value: "last_month" },
                          "Last Month"
                        ),
                        i.createElement(
                          v,
                          { value: "last_6_months" },
                          "Last 6 Months"
                        )
                      )
                    )
                  ),
                  i.createElement(
                    l.Row,
                    {
                      style: {
                        marginLeft: "1px",
                        backgroundColor: "#FFF",
                        marginRight: "1px"
                      }
                    },
                    i.createElement(
                      l.Col,
                      { span: 12 },
                      i.createElement(f.default, {
                        chartType: "nps",
                        strokeColor: "#038FDE",
                        title: "NPS",
                        backgroundColor: "#FFF",
                        showRange: !0
                      }),
                      i.createElement(
                        "div",
                        null,
                        i.createElement(
                          l.Row,
                          {
                            style: {
                              backgroundColor: "#FFF",
                              marginRight: "1px",
                              paddingTop: "8px",
                              paddingBottom: "8px"
                            }
                          },
                          i.createElement(
                            l.Col,
                            {
                              span: 8,
                              style: {
                                textAlign: "start",
                                fontWeight: "bold",
                                fontSize: "14px"
                              }
                            },
                            "NPS Distribution %"
                          )
                        ),
                        i.createElement(
                          l.Row,
                          {
                            style: {
                              height: "18px",
                              backgroundColor: "#FFF",
                              marginRight: "1px"
                            }
                          },
                          i.createElement(
                            l.Col,
                            { span: 6, offset: 2 },
                            i.createElement(
                              l.Row,
                              null,
                              i.createElement("div", {
                                style: {
                                  backgroundColor: "#46CB92",
                                  height: "12px",
                                  width: "12px"
                                }
                              }),
                              i.createElement(
                                "span",
                                {
                                  style: {
                                    fontSize: "12px",
                                    color: "#333333",
                                    paddingLeft: "2px"
                                  }
                                },
                                "Promoter"
                              )
                            )
                          ),
                          i.createElement(
                            l.Col,
                            { span: 6 },
                            i.createElement(
                              l.Row,
                              null,
                              i.createElement("div", {
                                style: {
                                  backgroundColor: "#FCAD78",
                                  height: "12px",
                                  width: "12px"
                                }
                              }),
                              i.createElement(
                                "span",
                                {
                                  style: {
                                    fontSize: "12px",
                                    color: "#333333",
                                    paddingLeft: "2px"
                                  }
                                },
                                "Neutrals"
                              )
                            )
                          ),
                          i.createElement(
                            l.Col,
                            { span: 6 },
                            i.createElement(
                              l.Row,
                              null,
                              i.createElement("div", {
                                style: {
                                  backgroundColor: "#E96B81",
                                  height: "12px",
                                  width: "12px"
                                }
                              }),
                              i.createElement(
                                "span",
                                {
                                  style: {
                                    fontSize: "12px",
                                    color: "#333333",
                                    paddingLeft: "2px"
                                  }
                                },
                                "Detractors"
                              )
                            )
                          )
                        ),
                        i.createElement(
                          l.Row,
                          {
                            style: {
                              backgroundColor: "#FFF",
                              marginRight: "1px",
                              padding: "5px 16px 18px 5px"
                            }
                          },
                          i.createElement(m.default, null)
                        )
                      )
                    ),
                    i.createElement(
                      l.Col,
                      { span: 12 },
                      i.createElement(f.default, {
                        chartType: "csat",
                        strokeColor: "#292961",
                        title: "CSAT",
                        backgroundColor: "#FFF",
                        showRange: !1
                      }),
                      i.createElement(g.default, {
                        title: "CSAT",
                        backgroundColor: "#FFF"
                      })
                    )
                  ),
                  i.createElement(
                    l.Row,
                    { style: { marginTop: "20px", paddingBottom: "20px" } },
                    i.createElement(
                      l.Col,
                      { span: 12 },
                      i.createElement(
                        l.Row,
                        null,
                        i.createElement(
                          l.Col,
                          { xl: 12, lg: 12, md: 12, sm: 24, xs: 24 },
                          i.createElement(d.CounterCard, {
                            showComaprison: !1,
                            titleColor: "#038FDE",
                            subtitleColor: "#707070",
                            title: "7",
                            subTitle: "Total Surveys"
                          })
                        ),
                        i.createElement(
                          l.Col,
                          { xl: 12, lg: 12, md: 12, sm: 24, xs: 24 },
                          i.createElement(d.CounterCard, {
                            showComaprison: !1,
                            titleColor: "#46CB92",
                            subtitleColor: "#707070",
                            title: "4",
                            subTitle: "Live Surveys"
                          })
                        )
                      ),
                      i.createElement(
                        l.Row,
                        { style: { marginTop: "21px" } },
                        i.createElement(
                          l.Col,
                          { xl: 12, lg: 12, md: 12, sm: 24, xs: 24 },
                          i.createElement(d.CounterCard, {
                            showComaprison: !1,
                            titleColor: "#FCAD78",
                            subtitleColor: "#707070",
                            title: "3",
                            subTitle: "Upcoming Surveys"
                          })
                        ),
                        i.createElement(
                          l.Col,
                          { xl: 12, lg: 12, md: 12, sm: 24, xs: 24 },
                          i.createElement(d.CounterCard, {
                            showComaprison: !0,
                            titleColor: "#2E2E2E",
                            subtitleColor: "#707070",
                            title: "120",
                            subTitle: "Total Responses"
                          })
                        )
                      )
                    ),
                    i.createElement(
                      l.Col,
                      { span: 12 },
                      i.createElement(
                        "div",
                        { style: { backgroundColor: "#FFF", height: "231px" } },
                        i.createElement(
                          l.Row,
                          {
                            style: {
                              backgroundColor: "#FFF",
                              marginRight: "1px",
                              marginLeft: "1px",
                              paddingTop: "8px",
                              paddingBottom: "8px"
                            }
                          },
                          i.createElement(
                            l.Col,
                            {
                              span: 8,
                              style: {
                                textAlign: "start",
                                fontWeight: "bold",
                                fontSize: "14px"
                              }
                            },
                            "Live Survey Result"
                          )
                        ),
                        i.createElement(
                          l.Row,
                          {
                            style: {
                              backgroundColor: "#FFF",
                              marginLeft: "1px",
                              marginRight: "1px",
                              paddingTop: "8px",
                              paddingBottom: "8px"
                            }
                          },
                          i.createElement(h.default, null)
                        )
                      )
                    )
                  ),
                  i.createElement(
                    l.Row,
                    {
                      style: {
                        marginLeft: "1px",
                        marginRight: "1px",
                        paddingBottom: "20px"
                      }
                    },
                    i.createElement(
                      l.Row,
                      {
                        style: {
                          backgroundColor: "#FFF",
                          paddingTop: "14px",
                          paddingBottom: "14px",
                          width: "100%",
                          marginLeft: "1px"
                        }
                      },
                      i.createElement(
                        l.Col,
                        {
                          span: 16,
                          style: {
                            textAlign: "start",
                            fontWeight: "bold",
                            fontSize: "14px",
                            alignSelf: "center",
                            height: "30px"
                          }
                        },
                        "Survey List"
                      ),
                      i.createElement(
                        l.Col,
                        {
                          span: 8,
                          style: {
                            textAlign: "end",
                            alignSelf: "center",
                            height: "30px"
                          }
                        },
                        i.createElement(
                          l.Button,
                          {
                            style: { color: "#E96B81" },
                            type: "danger",
                            size: "small",
                            ghost: !0,
                            onClick: function() {
                              e.viewDraftedSurvey();
                            }
                          },
                          "4 surveys in draft"
                        )
                      )
                    ),
                    i.createElement(y.default, null)
                  )
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = c.withApollo(_);
    },
    654: function(e, t, n) {},
    656: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(347),
        i = [
          { day: "27/11", promoters: 4e3, neutrals: 2400, detractors: 2400 },
          { day: "28/11", promoters: 3e3, neutrals: 1398, detractors: 2210 },
          { day: "29/11", promoters: 2e3, neutrals: 9800, detractors: 2290 },
          { day: "30/11", promoters: 2780, neutrals: 3908, detractors: 2e3 },
          { day: "01/12", promoters: 1890, neutrals: 4800, detractors: 2181 },
          { day: "02/12", promoters: 2390, neutrals: 3800, detractors: 2500 },
          { day: "03/12", promoters: 3490, neutrals: 4300, detractors: 2100 }
        ],
        l = function(e, t) {
          return void 0 === t && (t = 0), (100 * e).toFixed(t) + "%";
        },
        s = function(e) {
          var t = e.payload,
            n = e.label,
            a = t.reduce(function(e, t) {
              return e + t.value;
            }, 0);
          return r.createElement(
            "div",
            { className: "customized-tooltip-content" },
            r.createElement(
              "p",
              { className: "total" },
              n + " (Total: " + a + ")"
            ),
            r.createElement(
              "ul",
              { className: "list" },
              t.map(function(e, t) {
                return r.createElement(
                  "li",
                  { key: "item-" + t, style: { color: e.color } },
                  e.name +
                    ": " +
                    e.value +
                    "(" +
                    (function(e, t) {
                      return l(t > 0 ? e / t : 0, 2);
                    })(e.value, a) +
                    ")"
                );
              })
            )
          );
        };
      t.default = function() {
        return r.createElement(
          o.ResponsiveContainer,
          { width: "100%", height: 200 },
          r.createElement(
            o.AreaChart,
            {
              data: i,
              stackOffset: "expand",
              margin: { top: 10, right: 0, left: -15, bottom: 0 }
            },
            r.createElement(o.XAxis, { dataKey: "day" }),
            r.createElement(o.YAxis, { tickFormatter: l }),
            r.createElement(o.CartesianGrid, { strokeDasharray: "3 3" }),
            r.createElement(o.Tooltip, { content: s }),
            r.createElement(o.Area, {
              dataKey: "detractors",
              stackId: "1",
              fillOpacity: 1,
              stroke: "#E96B81",
              fill: "#E96B8133"
            }),
            r.createElement(o.Area, {
              dataKey: "neutrals",
              stackId: "1",
              fillOpacity: 1,
              stroke: "#46CB92",
              fill: "#FCAD7833"
            }),
            r.createElement(o.Area, {
              dataKey: "promoters",
              stackId: "1",
              fillOpacity: 1,
              stroke: "#b3b3b3",
              fill: "#46CB9226"
            })
          )
        );
      };
    },
    657: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(347),
        i = n(3),
        l = [
          { name: "27/11", csat: 0, nps: -100, amt: 2400 },
          { name: "28/11", csat: 3.5, nps: -45, amt: 2210 },
          { name: "29/11", csat: 9, nps: 56, amt: 2290 },
          { name: "30/11", csat: 7, nps: 69, amt: 2e3 },
          { name: "01/12", csat: 4, nps: 47, amt: 2181 },
          { name: "02/12", csat: 5.2, nps: 86, amt: 2500 },
          { name: "03/12", csat: 6, nps: 95, amt: 2100 }
        ];
      t.default = function(e) {
        return r.createElement(
          "div",
          { style: { width: "100%" } },
          r.createElement(
            i.Row,
            {
              style: {
                backgroundColor: e.backgroundColor,
                marginRight: "1px",
                paddingTop: "8px",
                paddingBottom: "8px"
              }
            },
            r.createElement(
              i.Col,
              {
                span: 15,
                style: {
                  textAlign: "start",
                  fontWeight: "bold",
                  fontSize: "14px"
                }
              },
              e.title
            ),
            !0 === e.showRange &&
              r.createElement(
                i.Col,
                { span: 9 },
                r.createElement(
                  "div",
                  { style: { textAlign: "end" } },
                  r.createElement(
                    "div",
                    {
                      style: {
                        float: "left",
                        paddingLeft: "1px",
                        paddingRight: "1px"
                      }
                    },
                    r.createElement(
                      "span",
                      { style: { color: "#666666", fontSize: "14px" } },
                      "Max"
                    ),
                    " ",
                    r.createElement(i.Icon, {
                      type: "caret-up",
                      style: { color: "#46CB92" }
                    }),
                    " ",
                    r.createElement(
                      "span",
                      { style: { color: "#333333", fontSize: "14px" } },
                      "42"
                    )
                  ),
                  r.createElement(
                    "div",
                    {
                      style: {
                        float: "right",
                        paddingLeft: "1px",
                        paddingRight: "1px"
                      }
                    },
                    r.createElement(
                      "span",
                      { style: { color: "#666666", fontSize: "14px" } },
                      "Min"
                    ),
                    " ",
                    r.createElement(i.Icon, {
                      type: "caret-down",
                      style: { color: "#E96B81" }
                    }),
                    " ",
                    r.createElement(
                      "span",
                      { style: { color: "#333333", fontSize: "14px" } },
                      "57"
                    )
                  )
                )
              )
          ),
          r.createElement(
            i.Row,
            {
              style: {
                backgroundColor: e.backgroundColor,
                marginRight: "1px",
                padding: "5px 16px 18px 5px"
              }
            },
            r.createElement(
              o.ResponsiveContainer,
              { width: "100%", height: 200 },
              r.createElement(
                o.LineChart,
                {
                  data: l,
                  margin: { top: 10, right: 0, left: -15, bottom: 0 }
                },
                r.createElement(o.XAxis, { dataKey: "name" }),
                r.createElement(o.YAxis, null),
                r.createElement(o.CartesianGrid, { strokeDasharray: "3 3" }),
                r.createElement(o.Tooltip, null),
                r.createElement(o.Line, {
                  dataKey: e.chartType,
                  stroke: e.strokeColor,
                  fill: e.strokeColor
                })
              )
            )
          )
        );
      };
    },
    658: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3),
        i = [
          { title: "Survey Completion Rate", value: "86.56%" },
          { title: "Responses", value: "0.87k" },
          { title: "Partial Responses", value: "113" },
          { title: "Avg Time Taken", value: "5.04" }
        ];
      t.default = function() {
        return r.createElement(o.List, {
          style: { width: "100%" },
          itemLayout: "horizontal",
          dataSource: i,
          renderItem: function(e) {
            return r.createElement(
              o.List.Item,
              { style: { marginRight: "16px", marginLeft: "20px" } },
              r.createElement(
                o.Row,
                { style: { width: "100%" } },
                r.createElement(
                  o.Col,
                  { span: 20, style: { color: "#2E2E2E" } },
                  e.title
                ),
                r.createElement(
                  o.Col,
                  { span: 4, style: { textAlign: "end", color: "#2E2E2E" } },
                  e.value
                )
              )
            );
          }
        });
      };
    },
    659: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3),
        i = [
          {
            title: "Promoters",
            color: "#46CB92",
            percent: 55,
            iconComponent: n(660)
          },
          {
            title: "Neutrals",
            color: "#FCAD78",
            percent: 20,
            iconComponent: n(661)
          },
          {
            title: "Detractors",
            color: "#E96B81",
            percent: 35,
            iconComponent: n(662)
          }
        ];
      t.default = function(e) {
        return r.createElement(
          "div",
          { style: { width: "100%" } },
          r.createElement(
            o.Row,
            {
              style: {
                backgroundColor: e.backgroundColor,
                marginLeft: "1px",
                paddingTop: "8px",
                paddingBottom: "8px"
              }
            },
            r.createElement(
              o.Col,
              {
                span: 8,
                style: {
                  textAlign: "start",
                  fontWeight: "bold",
                  fontSize: "14px"
                }
              },
              e.title
            )
          ),
          r.createElement(o.Row, {
            style: {
              height: "18px",
              backgroundColor: e.backgroundColor,
              marginLeft: "1px"
            }
          }),
          r.createElement(
            o.Row,
            {
              style: {
                backgroundColor: e.backgroundColor,
                marginLeft: "1px",
                padding: "5px 16px 18px 5px"
              }
            },
            r.createElement(
              "div",
              { style: { width: "100%" } },
              r.createElement(
                o.Col,
                { span: 24 },
                i.map(function(e, t) {
                  return r.createElement(
                    o.Row,
                    {
                      key: t,
                      style: { paddingTop: "15px", paddingBottom: "15px" }
                    },
                    r.createElement(
                      o.Col,
                      { span: 4 },
                      r.createElement("img", {
                        src: e.iconComponent,
                        style: {
                          height: "42px",
                          width: "42px",
                          marginTop: "-10px"
                        }
                      })
                    ),
                    r.createElement(
                      o.Col,
                      { span: 20 },
                      r.createElement(o.Progress, {
                        type: "line",
                        showInfo: !0,
                        strokeColor: e.color,
                        percent: e.percent
                      })
                    )
                  );
                })
              )
            )
          )
        );
      };
    },
    660: function(e, t, n) {
      e.exports = n.p + "happy.ea9b269c.svg";
    },
    661: function(e, t, n) {
      e.exports = n.p + "neutral.545c0ddb.svg";
    },
    662: function(e, t, n) {
      e.exports = n.p + "unhappy.a633ba06.svg";
    },
    663: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3),
        i = [
          { title: "Survey", dataIndex: "survey", key: "survey" },
          {
            title: "Created Date",
            dataIndex: "created_date",
            key: "created_date"
          },
          { title: "Questions", dataIndex: "questions", key: "questions" },
          ,
          {
            title: "Respondents",
            dataIndex: "respondents",
            key: "respondents"
          },
          {
            title: "Completion Rate",
            key: "c_rate",
            dataIndex: "c_rate",
            render: function(e) {
              return r.createElement(
                "span",
                null,
                e >= 80
                  ? r.createElement(
                      "span",
                      { style: { color: "#46CB92" } },
                      e,
                      "%"
                    )
                  : e > 30 && e < 80
                  ? r.createElement(
                      "span",
                      { style: { color: "#FCAD78" } },
                      e,
                      "%"
                    )
                  : r.createElement(
                      "span",
                      { style: { color: "#E96B81" } },
                      e,
                      "%"
                    )
              );
            }
          },
          {
            title: "Avg. Time taken to complete",
            dataIndex: "time_taken",
            key: "time_taken"
          }
        ],
        l = [
          {
            key: "1",
            survey: "Customer Feedback Survey",
            created_date: "03 Nov, 19",
            questions: "10",
            respondents: "01",
            c_rate: 100,
            time_taken: "3.45"
          },
          {
            key: "2",
            survey: "Customer Demographic Survey",
            created_date: "15 Oct, 19",
            questions: "10",
            respondents: "05",
            c_rate: 100,
            time_taken: "5.83"
          },
          {
            key: "3",
            survey: "Customer Satisfaction Survey",
            created_date: "1 Oct, 19",
            questions: "14",
            respondents: "100",
            c_rate: 76,
            time_taken: "5.32"
          },
          {
            key: "4",
            survey: "Employee Engagement Survey",
            created_date: "31 Sep, 19",
            questions: "42",
            respondents: "10",
            c_rate: 30,
            time_taken: "4.00"
          },
          {
            key: "5",
            survey: "Product Quality Survey",
            created_date: "18 Oct, 19",
            questions: "10",
            respondents: "15",
            c_rate: 89,
            time_taken: "2.58"
          },
          {
            key: "6",
            survey: "Product Satisfaction Survey",
            created_date: "10 Oct, 19",
            questions: "10",
            respondents: "13",
            c_rate: 70,
            time_taken: "3.68"
          }
        ];
      t.default = function() {
        return r.createElement(
          "div",
          { style: { width: "100%", backgroundColor: "#FFF" } },
          r.createElement(o.Table, {
            columns: i,
            dataSource: l,
            pagination: !1
          })
        );
      };
    },
    664: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(n(0)),
        i = n(16),
        l = r(n(665)),
        s = r(n(719)),
        u = r(n(722)),
        c = r(n(725));
      t.default = function(e) {
        var t = e.match;
        return o.createElement(
          "div",
          { className: "RefineX-Main" },
          o.createElement(
            i.Switch,
            null,
            o.createElement(i.Redirect, {
              exact: !0,
              from: t.url + "/",
              to: t.url + "/overview"
            }),
            o.createElement(i.Route, {
              path: t.url + "/:id/edit",
              component: l.default
            }),
            o.createElement(i.Route, {
              path: t.url + "/create",
              component: s.default
            }),
            o.createElement(i.Route, {
              path: t.url + "/overview",
              exact: !0,
              component: u.default
            }),
            o.createElement(i.Route, {
              path: t.url + "/view/:id",
              exact: !0,
              component: c.default
            })
          )
        );
      };
    },
    665: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__awaiter) ||
          function(e, t, n, a) {
            return new (n || (n = Promise))(function(r, o) {
              function i(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                try {
                  s(a.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                e.done
                  ? r(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(i, l);
              }
              s((a = a.apply(e, t || [])).next());
            });
          },
        i =
          (this && this.__generator) ||
          function(e, t) {
            var n,
              a,
              r,
              o,
              i = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1];
                  return r[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function() {
                  return this;
                }),
              o
            );
            function l(o) {
              return function(l) {
                return (function(o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((n = 1),
                        a &&
                          (r =
                            2 & o[0]
                              ? a.return
                              : o[0]
                              ? a.throw || ((r = a.return) && r.call(a), 0)
                              : a.next) &&
                          !(r = r.call(a, o[1])).done)
                      )
                        return r;
                      switch (((a = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                        case 0:
                        case 1:
                          r = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (a = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!r || (o[1] > r[0] && o[1] < r[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < r[1]) {
                            (i.label = r[1]), (r = o);
                            break;
                          }
                          if (r && i.label < r[2]) {
                            (i.label = r[2]), i.ops.push(o);
                            break;
                          }
                          r[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = t.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (a = 0);
                    } finally {
                      n = r = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
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
          },
        s =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(666);
      var u = l(n(0)),
        c = n(3),
        p = s(n(446)),
        d = s(n(374)),
        m = n(30);
      n(359);
      var f = s(n(671)),
        h = s(n(448)),
        g = n(30),
        y = s(n(449)),
        v = s(n(453)),
        _ = n(14),
        E = s(n(454)),
        b = s(n(375)),
        C = s(n(5)),
        S = n(55),
        T = n(27),
        x = s(n(33)),
        O = n(342),
        w = n(37),
        I = s(n(1276)),
        A = [
          { value: "SMS", title: "SMS" },
          { value: "PUSH", title: "Push Notification" },
          { value: "EMAIL", title: "Email" }
        ],
        N = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.onEventTypeEdited = function(e) {
                console.log(
                  "top level values of event type",
                  e,
                  n.state.eventValues
                );
                var t = { event: e.event };
                n.setState({ eventValues: t });
              }),
              (n.success = function(e) {
                c.message.success(e);
              }),
              (n.error = function(e) {
                c.message.error(e);
              }),
              (n.warning = function(e) {
                c.message.warning(e);
              }),
              (n.createEvenetSubscription = function() {
                var e = x.default.decode(localStorage.getItem("jwt")).org_id,
                  t = {
                    queue: O.DEFAULT_QUEUE,
                    meta: {},
                    application_id: n.props.campaign.campaign.application.id,
                    organization_id: e,
                    event_type_id: n.state.eventValues.event,
                    description: "",
                    name: Math.random()
                      .toString(36)
                      .substring(7)
                  };
                n.props
                  .createEventSubscription({ variables: { input: t } })
                  .then(function(e) {
                    return o(n, void 0, void 0, function() {
                      var t;
                      return i(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return (
                              console.log(e.data.createEventSubscription),
                              e.data.createEventSubscription.status !==
                              O.DEFAULT_INACTIVE_STATUS
                                ? [3, 2]
                                : [
                                    4,
                                    this.props.updateEventSubscription({
                                      variables: {
                                        input: {
                                          id: e.data.createEventSubscription.id,
                                          status: O.DEFAULT_ACTIVE_STATUS
                                        }
                                      }
                                    })
                                  ]
                            );
                          case 1:
                            t = n.sent();
                            try {
                              console.log(t);
                            } catch (e) {
                              console.log(e);
                            }
                            n.label = 2;
                          case 2:
                            return [2];
                        }
                      });
                    });
                  })
                  .catch(function(e) {
                    console.log(e);
                  });
              }),
              (n.onTestAndControlEdit = function() {
                n.setState({ showTestAndControl: !1 });
              }),
              (n.onChange = function(e) {
                n.setState({ current: e });
              }),
              (n.logQuery = function(e, t) {
                n.setState({ query: e, oldQueryTriggers: t });
              }),
              (n.logQueryAudience = function(e, t) {
                n.setState({ query: e, oldQueryAudience: t });
              }),
              (n.onValuesSelected = function(e) {
                n.setState({ selectedSegments: e }),
                  console.log("Selected Segment : ", e);
              }),
              (n.onFormNext = function(e) {
                var t = n.state,
                  a = (t.formValues, t.selectedSegments);
                if (
                  (n.setState({ loading: !0 }),
                  2 == n.state.current &&
                    (null == n.props.campaign.campaign.audienceFilterRule
                      ? n.ruleQuery(n.state.current)
                      : n.updateRule(n.state.current),
                    "Undefined" != a &&
                      n.updateAudiencesWithCampaignId(n.state.current, a)),
                  3 == n.state.current &&
                    (void 0 !== n.state.eventValues.event &&
                      n.createEvenetSubscription(),
                    null == n.props.campaign.campaign.triggerRule
                      ? n.ruleQuery(n.state.current)
                      : n.updateRule(n.state.current)),
                  4 == n.state.current)
                ) {
                  var r = n.state,
                    o = r.communicationFormValues,
                    i = r.communicationSelected;
                  console.log(
                    "saveEmailFormRef",
                    n.pushFormRef,
                    n.formRef1,
                    n.emailFormRef
                  ),
                    ("PUSH" === i
                      ? n.pushFormRef &&
                        n.pushFormRef.props &&
                        n.pushFormRef.props.form
                      : "SMS" === i
                      ? n.formRef1 && n.formRef1.props && n.formRef1.props.form
                      : n.emailFormRef &&
                        n.emailFormRef.props &&
                        n.emailFormRef.props.form
                    ).validateFields(function(e, t) {
                      e
                        ? n.setState({ loading: !1 })
                        : ("SMS" == n.state.communicationSelected
                            ? ((o.templateSubjectText = t.smsTag),
                              (o.templateBodyText = t.smsBody))
                            : "EMAIL" == n.state.communicationSelected
                            ? ((o.templateSubjectText = t.email_subject),
                              (o.templateBodyText = t.email_body))
                            : ((o.templateSubjectText = t.notificationTitle),
                              (o.templateBodyText = t.notificationBody)),
                          n.setState({ communicationFormValues: o }),
                          n.createCommunicationMutation(n.state.current, o));
                    });
                }
                var l = n.formRef && n.formRef.props && n.formRef.props.form;
                l
                  ? l.validateFields(function(t, a) {
                      if (t) n.setState({ loading: !1 });
                      else
                        switch (
                          (n.props.campaign &&
                            n.props.campaign.campaign &&
                            C.default(
                              n.props.campaign.campaign.startTime
                            ).isSame(a.startTime) &&
                            delete a.startTime,
                          n.props.campaign &&
                            n.props.campaign.campaign &&
                            C.default(n.props.campaign.campaign.endTime).isSame(
                              a.endTime
                            ) &&
                            delete a.endTime,
                          n.setState({ formValues: a, current: e }),
                          e)
                        ) {
                          case 1:
                            n.onCampaignUpdate(a);
                        }
                    })
                  : n.setState({ current: e, loading: !1 });
              }),
              (n.a = function() {
                var e = n.state.current;
                return function() {
                  return (e += 1);
                };
              }),
              (n.updateAudiencesWithCampaignId = function(e, t) {
                n.props
                  .updateAudiencesWithCampaignIdWithSegments({
                    variables: {
                      campaignId: n.props.campaign.campaign.id,
                      segments: t
                    }
                  })
                  .then(function(e) {
                    console.log(
                      "updateAudiencesWithCampaignIdWithSegments...",
                      e
                    );
                  })
                  .catch(function(e) {
                    console.log(
                      "Error while updateAudiencesWithCampaignIdWithSegments",
                      e
                    );
                  });
              }),
              (n.createAudience = function(e, t) {
                var a = x.default.decode(localStorage.getItem("jwt")).org_id,
                  r = {
                    campaign_id: n.props.campaign.campaign.id,
                    segment_id: t,
                    organization_id: a,
                    application_id: n.props.campaign.campaign.application.id,
                    status: O.DEFAULT_ACTIVE_STATUS
                  };
                n.props
                  .audience({ variables: { input: r } })
                  .then(function(e) {
                    console.log("Audience..", e);
                  })
                  .catch(function(e) {
                    console.log("Error while creating audience..", e);
                  });
              }),
              (n.createCommunicationMutation = function(e, t) {
                var a = x.default.decode(localStorage.getItem("jwt")).org_id,
                  l = !1,
                  s = r({}, t, { organization_id: a });
                if (
                  ((s = I.default(s, [
                    "organization_id",
                    "templateBodyText",
                    "templateSubjectText"
                  ])),
                  n.state.communicationId.smsid &&
                    "SMS" === n.state.communicationSelected &&
                    ((l = !0), (s.id = n.state.communicationId.smsid)),
                  n.state.communicationId.pushid &&
                    "PUSH" === n.state.communicationSelected &&
                    ((l = !0), (s.id = n.state.communicationId.pushid)),
                  n.state.communicationId.emailid &&
                    "EMAIL" === n.state.communicationSelected &&
                    ((l = !0), (s.id = n.state.communicationId.emailid)),
                  l)
                )
                  n.props
                    .updateMessageTemplate({ variables: { input: s } })
                    .then(function(e) {
                      return o(n, void 0, void 0, function() {
                        return i(this, function(e) {
                          return (
                            console.log(
                              "UpdateMessageTemplateData...",
                              S.updateMessageTemplate
                            ),
                            [2]
                          );
                        });
                      });
                    })
                    .catch(function(e) {
                      console.log(
                        "Error while updating messageTemptae for communication",
                        e
                      );
                    });
                else {
                  var u = r(
                    {
                      name:
                        n.props.campaign.campaign.name +
                        "_" +
                        Math.random()
                          .toString(36)
                          .substring(2),
                      description: "",
                      messageFormat: n.state.communicationSelected
                    },
                    s,
                    {
                      templateStyle: O.TEMPLATE_STYLE,
                      status: O.DEFAULT_ACTIVE_STATUS
                    }
                  );
                  n.props
                    .messageTemplate({ variables: { input: u } })
                    .then(function(e) {
                      return o(n, void 0, void 0, function() {
                        var t, n, a;
                        return i(this, function(r) {
                          switch (r.label) {
                            case 0:
                              return (
                                (t = x.default.decode(
                                  localStorage.getItem("jwt")
                                ).org_id),
                                (n = {
                                  entityId: this.props.campaign.campaign.id,
                                  entityType: "CAMPAIGN",
                                  messageTemplateId:
                                    e.data.createMessageTemplate.id,
                                  isScheduled: !0,
                                  isRepeatable: !1,
                                  organization_id: t,
                                  status: O.DEFAULT_ACTIVE_STATUS,
                                  firstScheduleDateTime: this.props.campaign
                                    .campaign.startTime,
                                  commsChannelName: "Test",
                                  campaign_id: this.props.campaign.campaign.id
                                }),
                                [
                                  4,
                                  this.props.communication({
                                    variables: { input: n }
                                  })
                                ]
                              );
                            case 1:
                              return (
                                (a = r.sent()),
                                console.log("createCommunication", a),
                                {
                                  communication_id: parseInt(
                                    a.data.createCommunication.id
                                  )
                                },
                                [2]
                              );
                          }
                        });
                      });
                    })
                    .catch(function(e) {
                      console.log("Error creating for message template", e);
                    });
                }
                n.setState({ loading: !1 });
              }),
              (n.communicationHandler = function() {
                return o(n, void 0, void 0, function() {
                  var e,
                    t,
                    n,
                    a = this;
                  return i(this, function(r) {
                    return (
                      (e = this.state),
                      (t = e.communicationFormValues),
                      (n = e.communicationSelected),
                      console.log(
                        "saveEmailFormRef",
                        this.pushFormRef,
                        this.formRef1,
                        this.emailFormRef
                      ),
                      ("PUSH" === n
                        ? this.pushFormRef &&
                          this.pushFormRef.props &&
                          this.pushFormRef.props.form
                        : "SMS" === n
                        ? this.formRef1 &&
                          this.formRef1.props &&
                          this.formRef1.props.form
                        : this.emailFormRef &&
                          this.emailFormRef.props &&
                          this.emailFormRef.props.form
                      ).validateFields(function(e, n) {
                        e
                          ? a.setState({ loading: !1 })
                          : ("SMS" == a.state.communicationSelected
                              ? ((t.templateSubjectText = n.smsTag),
                                (t.templateBodyText = n.smsBody))
                              : "EMAIL" == a.state.communicationSelected
                              ? ((t.templateSubjectText = n.email_subject),
                                (t.templateBodyText = n.email_body))
                              : ((t.templateSubjectText = n.notificationTitle),
                                (t.templateBodyText = n.notificationBody)),
                            a.setState({ communicationFormValues: t }),
                            a.createCommunicationMutation(a.state.current, t));
                      }),
                      [2]
                    );
                  });
                });
              }),
              (n.sendTestCommunication = function(e, t, a) {
                return o(n, void 0, void 0, function() {
                  var n;
                  return i(this, function(r) {
                    switch (r.label) {
                      case 0:
                        return (
                          (n = this.props.campaign.campaign),
                          [4, this.communicationHandler()]
                        );
                      case 1:
                        r.sent(), (r.label = 2);
                      case 2:
                        return (
                          r.trys.push([2, 4, , 5]),
                          [
                            4,
                            this.props.sendTestCommunication({
                              variables: {
                                campaignId: n.id,
                                customer: { phoneNumber: e, email: t },
                                customerDevice: { fcmToken: a },
                                forTest: !0
                              }
                            })
                          ]
                        );
                      case 3:
                        return r.sent(), [2, !0];
                      case 4:
                        return r.sent(), [2, !1];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (n.saveDraft = function(e) {
                n.props.history.push("/refinex/feedback"),
                  n.props.history.push({
                    pathname: "/refinex/feedback",
                    state: { tabKey: "4" }
                  });
              }),
              (n.onPage1SaveDraft = function() {
                n.props.history.push({
                  pathname: "/refinex/feedback/overview",
                  state: {
                    showPopup: !0,
                    message: "Feedback saved in draft state"
                  }
                });
              }),
              (n.updateRule = function(e) {
                var t,
                  a = { ruleConfiguration: n.state.query };
                2 == e && (t = n.props.campaign.campaign.audienceFilterRule.id),
                  3 == e && (t = n.props.campaign.campaign.triggerRule.id),
                  n.props
                    .updateRule({ variables: { id: t, input: a } })
                    .then(function(e) {
                      console.log("Updating rule..", e);
                    })
                    .catch(function(e) {
                      console.log("Error whilw updating..", e);
                    });
              }),
              (n.ruleQuery = function(e) {
                var t = x.default.decode(localStorage.getItem("jwt")).org_id,
                  a = {
                    name: Math.random()
                      .toString(36)
                      .substring(7),
                    description: "",
                    type: "SIMPLE",
                    organizationId: t,
                    status: O.DEFAULT_ACTIVE_STATUS,
                    ruleConfiguration: n.state.query
                  };
                n.props
                  .rule({ variables: { input: a } })
                  .then(function(t) {
                    if ((console.log("Trigger Rule data...", t), 2 == e))
                      var a = { audienceFilterRule: t.data.createRule.id };
                    if (3 == e) t.data.createRule.id;
                    n.props
                      .updateCampaign({
                        variables: {
                          id: n.props.campaign.campaign.id,
                          input: a
                        }
                      })
                      .then(function(e) {
                        console.log("Update campaign data..", e);
                      });
                  })
                  .catch(function(e) {
                    console.log("Error creating the question", e);
                  });
              }),
              (n.onCampaignUpdate = function(e) {
                console.log("formValues", e),
                  n.props
                    .updateCampaign({
                      variables: { id: n.props.campaign.campaign.id, input: e }
                    })
                    .then(function(e) {
                      console.log(e),
                        n.setState(function(e) {
                          return r({}, e, { loading: !1 });
                        });
                    })
                    .catch(function(e) {
                      console.log(e),
                        n.setState(function(e) {
                          return r({}, e, { loading: !1 });
                        });
                    });
              }),
              (n.saveFormRef = function(e) {
                n.formRef = e;
              }),
              (n.setFeedbackForm = function(e, t) {
                n.setState({ formName: e });
              }),
              (n.onControlValueChange = function(e) {
                n.setState({ controlValue: e });
              }),
              (n.onTestValueChange = function(e) {
                n.setState({ testValue: e });
              }),
              (n.applyTestControlChange = function() {
                var e = n.state,
                  t = e.testValue,
                  a = e.controlValue;
                n.setState({
                  testControlSelected: t + " % - " + a + "%",
                  showTestAndControl: !1
                });
              }),
              (n.handleButtonGroupChange = function(e) {
                var t;
                n.setState((((t = {})[e.target.name] = e.target.value), t));
              }),
              (n.onCommunicationChange = function(e) {
                n.setState({ communicationSelected: e.target.value });
              }),
              (n.commWrappedComponentRef = function(e) {
                console.log("commWrappedComponentRef", e), (n.formRef1 = e);
              }),
              (n.saveEmailFormRef = function(e) {
                console.log("saveEmailFormRef", e), (n.emailFormRef = e);
              }),
              (n.savePushFormRef = function(e) {
                console.log("savePushFormRef", e), (n.pushFormRef = e);
              }),
              (n.linkCampaignToApplication = function(e) {
                return o(n, void 0, void 0, function() {
                  var t, n, a;
                  return i(this, function(r) {
                    switch (r.label) {
                      case 0:
                        (t = this.props.campaign.campaign), (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 4, , 5]),
                          [
                            4,
                            this.props.linkCampaignToApplication({
                              variables: { campaignId: t.id, applicationId: e }
                            })
                          ]
                        );
                      case 2:
                        return (
                          (n = r.sent()), [4, this.props.campaign.refetch()]
                        );
                      case 3:
                        return (
                          r.sent(),
                          this.success(
                            "Successfully linked Campaign to application"
                          ),
                          console.log(n),
                          [3, 5]
                        );
                      case 4:
                        return (a = r.sent()), console.log(a), [3, 5];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (n.unlinkCampaignFromApplication = function(e) {
                return o(n, void 0, void 0, function() {
                  var t, n;
                  return i(this, function(a) {
                    switch (a.label) {
                      case 0:
                        (t = this.props.campaign.campaign), (a.label = 1);
                      case 1:
                        return (
                          a.trys.push([1, 4, , 5]),
                          [
                            4,
                            this.props.unlinkCampaignFromApplication({
                              variables: { campaignId: t.id, applicationId: e }
                            })
                          ]
                        );
                      case 2:
                        return a.sent(), [4, this.props.campaign.refetch()];
                      case 3:
                        return (
                          a.sent(),
                          this.success(
                            "Successfully unlinked Campaign from application"
                          ),
                          [3, 5]
                        );
                      case 4:
                        return (n = a.sent()), console.log(n), [3, 5];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (n.getContainer = function() {
                var e = n.props.campaign.campaign,
                  t = { id: 1, combinator: "and", rules: [] },
                  a = { id: 1, combinator: "and", rules: [] };
                if (e && e.triggerRule) {
                  t = e.triggerRule.ruleConfiguration;
                  var r = {
                    ruleAttributeId: "field",
                    attributeValue: "value",
                    expressionType: "operator"
                  };
                  (t = (t = JSON.stringify(t)).replace(
                    /ruleAttributeId|attributeValue|expressionType/gi,
                    function(e) {
                      return r[e];
                    }
                  )),
                    (t = JSON.parse(t));
                }
                if (e && e.audienceFilterRule) {
                  a = e.audienceFilterRule.ruleConfiguration;
                  r = {
                    ruleAttributeId: "field",
                    attributeValue: "value",
                    expressionType: "operator"
                  };
                  (a = (a = JSON.stringify(a)).replace(
                    /ruleAttributeId|attributeValue|expressionType/gi,
                    function(e) {
                      return r[e];
                    }
                  )),
                    (a = JSON.parse(a));
                }
                var o =
                    n.props.allAttributes &&
                    n.props.allAttributes.ruleAttributes &&
                    n.props.allAttributes.ruleAttributes.map(function(e) {
                      return { name: e.id, id: e.id, label: e.attributeName };
                    }),
                  i = n.state,
                  l = (i.formValues, i.query, i.showTestAndControl),
                  s = i.testValue,
                  m = i.controlValue,
                  v = i.testControlSelected;
                switch (n.state.current) {
                  case 0:
                    return u.createElement(p.default, {
                      setFeedbackForm: n.setFeedbackForm,
                      subTitle: "Basic information",
                      formName: e.feedbackForm
                        ? e.feedbackForm.title
                        : "default",
                      onFormNext: n.onFormNext,
                      saveFormRef: n.saveFormRef,
                      formValues: n.props.campaign.campaign,
                      testAndControlText: "Test & Control",
                      promptText: "prompt text",
                      toolTipText: "what is test and control?",
                      prioritySelectionTitle: "Survey Priority",
                      priorityButtonText: "Custom no",
                      testControlTitle: "Test & Control",
                      testControlPercentage: v || "95% - 5%",
                      handleButtonGroupChange: n.handleButtonGroupChange,
                      testControlPercentageEditText: "Edit",
                      onPriorityButtonClick: "onPriorityButtonClick",
                      priorityNumberInvalidErrorMessage:
                        "Enter a value between 6 and 99",
                      onTestAndControlEdit: n.onTestAndControlEdit,
                      showTestAndControl: l,
                      popupTitle: "Test & Control",
                      applyTestControlChange: n.applyTestControlChange,
                      popupbodyText:
                        "Divide customers selected for a specific audience into local test and local control\n            groups",
                      controlValue: m,
                      testValue: s,
                      maxValueAllowed: 75,
                      onTestValueChange: n.onTestValueChange,
                      onControlValueChange: n.onControlValueChange,
                      popupButtonText: "apply",
                      campaign: n.props.campaign.campaign,
                      edit: !0,
                      showFeedbackFormType: !1
                    });
                  case 1:
                    return u.createElement(y.default, {
                      campaign: e,
                      feedbackForm: e.feedbackForm
                    });
                  case 2:
                    return u.createElement(
                      T.CustomScrollbars,
                      null,
                      n.props.segmentList.loading
                        ? u.createElement(c.Spin, null)
                        : u.createElement(d.default, {
                            audienceTitle: "Audience",
                            segmentSubTitle: "Segment",
                            audienceCount: n.state.audienceCount,
                            onValuesSelected: function() {
                              return n.onValuesSelected;
                            },
                            selectedSegments: n.state.selectedSegments,
                            segmentSelectionData: n.props.segmentList.segments,
                            uploadCsvText: "Upload CSV",
                            segmentFilterText: "Filter",
                            segmentFilterSubText: "Campaign applies to :",
                            attributeData: o,
                            logQuery: n.logQueryAudience,
                            ruleQuery: n.state.oldQueryAudience
                              ? n.state.oldQueryAudience
                              : a
                          })
                    );
                  case 3:
                    return u.createElement(h.default, {
                      unlinkCampaignFromApplication:
                        n.unlinkCampaignFromApplication,
                      selectedApplication: e.application
                        ? e.application.id
                        : "",
                      linkCampaignToApplication: n.linkCampaignToApplication,
                      onEventTypeEdited: n.onEventTypeEdited,
                      eventValues: n.state.eventValues,
                      query: n.state.oldQueryTriggers
                        ? n.state.oldQueryTriggers
                        : t,
                      attributeData: o,
                      applications:
                        n.props.allApplications.organization.applications,
                      logQuery: n.logQuery
                    });
                  case 4:
                    return u.createElement(
                      T.CustomScrollbars,
                      null,
                      u.createElement(f.default, {
                        subTitle: "Communication",
                        onChange: n.onCommunicationChange,
                        communicationData: A,
                        defaultValue: n.state.communicationSelected,
                        value: n.state.communicationSelected,
                        commWrappedComponentRef: n.commWrappedComponentRef,
                        communicationFormValues:
                          n.state.communicationFormValues,
                        campaign: n.state.formValues,
                        OnCommunicationFormNext: n.onFormNext,
                        emailFormRef: n.saveEmailFormRef,
                        emailFormData: n.state.emailForm,
                        pushFormRef: n.savePushFormRef,
                        pushFormData: n.state.pushForm,
                        onFormNext: n.onFormNext,
                        testCommunication: n.sendTestCommunication
                      })
                    );
                  default:
                    return u.createElement(
                      T.CustomScrollbars,
                      null,
                      u.createElement(g.campaignOverview, {
                        campaign: n.props.campaign.campaign,
                        communication:
                          n.props.allCommunications.communications &&
                          n.props.allCommunications.communications.length > 0
                            ? n.props.allCommunications.communications[0]
                                .messageTemplate.messageFormat
                            : n.state.communicationSelected
                      })
                    );
                }
              }),
              (n.state = {
                communicationId: "",
                current: 0,
                priorityChosen: "",
                priorityNumberError: !1,
                showTestAndControl: !1,
                testValue: 95,
                controlValue: 5,
                oldQueryTriggers: null,
                oldQueryAudience: null,
                testControlSelected: "",
                communicationSelected: "SMS",
                communicationFormValues: {},
                emailForm: {},
                pushForm: {},
                formValues: {},
                campaign: {},
                segmentList: {},
                attributeData: {},
                eventValues: {},
                formName: "",
                selectedSegments: [],
                query: { combinator: "and", rules: [] },
                loading: !1,
                audienceCount: 0,
                stepperData: [
                  { title: "Basic Info" },
                  { title: "Form" },
                  { title: "Audience" },
                  { title: "Trigger" },
                  { title: "Communication" },
                  { title: "Overview" }
                ]
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {
              console.log("component mounted...");
              var e = this.props.location;
              e &&
                e.state &&
                e.state.current &&
                this.setState({ current: e.state.current });
            }),
            (t.prototype.componentDidUpdate = function(e) {
              if (
                this.props.allAudiences.loading !== e.allAudiences.loading &&
                this.props.allAudiences.audiences
              ) {
                var t = [];
                this.props.allAudiences.audiences.map(function(e) {
                  return t.push(e.segment.id);
                }),
                  this.setState({ selectedSegments: t });
              }
              if (
                this.props.allCommunications.loading !==
                e.allCommunications.loading
              ) {
                var n = this.state.communicationFormValues,
                  a = {};
                this.props.allCommunications.communications &&
                  this.props.allCommunications.communications.map(function(e) {
                    "SMS" == e.messageTemplate.messageFormat
                      ? ((a.smsid = e.messageTemplate.id),
                        (n.smsTag = e.messageTemplate.templateSubjectText),
                        (n.smsBody = e.messageTemplate.templateBodyText))
                      : "PUSH" == e.messageTemplate.messageFormat
                      ? ((a.pushid = e.messageTemplate.id),
                        (n.notificationTitle =
                          e.messageTemplate.templateSubjectText),
                        (n.notificationBody =
                          e.messageTemplate.templateBodyText))
                      : ((a.emailid = e.messageTemplate.id),
                        (n.email_subject =
                          e.messageTemplate.templateSubjectText),
                        (n.email_body = e.messageTemplate.templateBodyText));
                  }),
                  this.setState({
                    communicationFormValues: n,
                    communicationId: a
                  });
              }
            }),
            (t.prototype.getAudience = function(e) {
              x.default.decode(localStorage.getItem("jwt")).org_id;
              console.log(this.props);
            }),
            (t.prototype.goToNextPage = function(e) {
              var t = this,
                n = this.state.formValues;
              if (b.default(n)) {
                var a =
                  this.formRef && this.formRef.props && this.formRef.props.form;
                a &&
                  a.validateFields(function(n, a) {
                    n || t.setState({ formValues: a, current: e });
                  });
              } else this.setState({ current: e });
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state,
                n = t.current,
                a = t.stepperData,
                r = this.props.campaign,
                o = u.createElement(c.Icon, {
                  type: "loading",
                  style: { fontSize: 50 },
                  spin: !0
                });
              if (n > 5) {
                var i = "4";
                (i = C.default(this.props.campaign.campaign.startTime).isAfter(
                  C.default()
                )
                  ? "2"
                  : C.default(this.props.campaign.campaign.endTime).isBefore(
                      C.default()
                    )
                  ? "3"
                  : "4"),
                  this.props.history.push({
                    pathname: "/refinex/feedback/overview",
                    state: {
                      tabKey: i,
                      showPopup: !0,
                      message: "Feedback form successfully created"
                    }
                  });
              }
              return u.createElement(
                "div",
                null,
                u.createElement(v.default, {
                  children: u.createElement(
                    u.Fragment,
                    null,
                    u.createElement(
                      c.Col,
                      { sm: 5, md: 6, lg: 8, xl: 8, xxl: 13 },
                      u.createElement(
                        "h3",
                        {
                          className:
                            "gx-text-grey paddingLeftStyle campaignHeaderTitleStyle"
                        },
                        "Create Survey"
                      )
                    ),
                    u.createElement(
                      c.Col,
                      { sm: 19, md: 18, lg: 16, xl: 16, xxl: 11 },
                      u.createElement(E.default, {
                        StepperData: a,
                        current: n,
                        onChange: this.goToNextPage.bind(this)
                      })
                    )
                  )
                }),
                u.createElement(
                  "div",
                  { className: "stepperContainerRefineX" },
                  u.createElement(
                    "div",
                    {
                      style: { margin: "20px 20px 20px 30px", height: "70vh" }
                    },
                    this.state.loading
                      ? u.createElement(
                          "div",
                          { className: "divCenter" },
                          u.createElement(c.Spin, {
                            size: "large",
                            indicator: o
                          }),
                          " "
                        )
                      : u.createElement(
                          u.Fragment,
                          null,
                          r.loading
                            ? u.createElement(
                                "div",
                                { className: "divCenter" },
                                u.createElement(c.Spin, {
                                  size: "large",
                                  indicator: o
                                }),
                                " "
                              )
                            : this.getContainer()
                        )
                  )
                ),
                u.createElement(
                  "div",
                  {
                    className: "campFooterRefinex",
                    style: { position: "absolute", width: "100%" }
                  },
                  u.createElement(
                    "div",
                    {
                      className: "gx-card-body",
                      style: { background: "#FFFFFF" }
                    },
                    u.createElement(m.CampaignFooter, {
                      loading: this.state.loading,
                      nextButtonText: n > 4 ? "Finalize" : "Save and Next",
                      saveDraftText: 0 === n || n > 4 ? "" : "Save Draft",
                      saveDraft: function() {
                        return e.saveDraft(n + 1);
                      },
                      goToPage2: this.onFormNext.bind(this, n + 1)
                    })
                  )
                )
              );
            }),
            t
          );
        })(u.Component);
      t.default = _.compose(
        _.graphql(w.GET_ALL_APPS_OF_ORGANIZATION, {
          name: "allApplications",
          options: function(e) {
            return {
              variables: {
                id: x.default.decode(localStorage.getItem("jwt")).org_id
              },
              fetchPolicy: "cache-and-network"
            };
          }
        }),
        _.graphql(S.GET_CAMPAIGN, {
          name: "campaign",
          options: function(e) {
            return {
              variables: { id: e.match.params.id },
              fetchPolicy: "network-only"
            };
          }
        }),
        _.graphql(S.allSegments, {
          name: "segmentList",
          options: function(e) {
            return {
              variables: {
                org_id: x.default.decode(localStorage.getItem("jwt")).org_id,
                status: O.DEFAULT_ACTIVE_STATUS
              },
              fetchPolicy: "cache-and-network"
            };
          }
        }),
        _.graphql(S.createRule, { name: "rule" }),
        _.graphql(S.updateRule, { name: "updateRule" }),
        _.graphql(S.UPDATE_CAMPAIGN, { name: "updateCampaign" }),
        _.graphql(S.attributes, {
          name: "allAttributes",
          options: function(e) {
            var t = x.default.decode(localStorage.getItem("jwt")).org_id;
            return {
              variables: {
                input: { status: O.DEFAULT_ACTIVE_STATUS, organizationId: t }
              }
            };
          }
        }),
        _.graphql(S.LINK_CAMPAIGN_TO_APPLICATION, {
          name: "linkCampaignToApplication"
        }),
        _.graphql(S.UNLINK_CAMPAIGN_FROM_APPLICATION, {
          name: "unlinkCampaignFromApplication"
        }),
        _.graphql(S.createCommunication, { name: "communication" }),
        _.graphql(S.createMessageTemplate, { name: "messageTemplate" }),
        _.graphql(S.createAudience, { name: "audience" }),
        _.graphql(S.updateAudiencesWithCampaignId, {
          name: "updateAudiencesWithCampaignIdWithSegments"
        }),
        _.graphql(S.updateCommunication, { name: "updateCommunication" }),
        _.graphql(S.updateMessageTemplate, { name: "updateMessageTemplate" }),
        _.graphql(S.CREATE_EVENT_SUBSCRIPTION, {
          name: "createEventSubscription"
        }),
        _.graphql(S.UPDATE_EVENT_SUBSCRIPTION, {
          name: "updateEventSubscription"
        }),
        _.graphql(S.SEND_FEEDBACK_MESSAGE, { name: "sendTestCommunication" }),
        _.graphql(S.communications, {
          name: "allCommunications",
          options: function(e) {
            var t = x.default.decode(localStorage.getItem("jwt")).org_id;
            return {
              variables: {
                entityId: e.match.params.id,
                entityType: "CAMPAIGN",
                organization_id: t,
                status: O.DEFAULT_ACTIVE_STATUS
              },
              fetchPolicy: "network-only"
            };
          }
        }),
        _.graphql(S.audiences, {
          name: "allAudiences",
          options: function(e) {
            var t = x.default.decode(localStorage.getItem("jwt")).org_id;
            return {
              variables: {
                status: O.DEFAULT_ACTIVE_STATUS,
                campaign_id: e.match.params.id,
                organization_id: t
              },
              fetchPolicy: "network-only"
            };
          }
        })
      )(N);
    },
    666: function(e, t, n) {},
    668: function(e, t, n) {
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
        i = n(3),
        l = n(27),
        s = n(14),
        u = n(55);
      n(669);
      var c = (function(e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (
            (n.createFeedbackCampaign = function(e, t) {
              n.setState({ formName: e }), n.props.setFeedbackForm(e);
            }),
            (n.state = { showModal: !1, formName: "default" }),
            n
          );
        }
        return (
          a(t, e),
          (t.prototype.componentDidMount = function() {
            this.setState({ formName: this.props.formName });
          }),
          (t.prototype.render = function() {
            this.props.auth;
            return o.createElement(
              l.ErrorBoundary,
              null,
              o.createElement(
                "div",
                null,
                o.createElement(
                  i.Row,
                  null,
                  o.createElement(
                    i.Col,
                    { span: 24 },
                    o.createElement(
                      i.Row,
                      { gutter: 12, type: "flex" },
                      o.createElement(
                        i.Col,
                        {
                          span: 4,
                          onClick: this.createFeedbackCampaign.bind(
                            this,
                            "default"
                          )
                        },
                        o.createElement(
                          l.CardBox,
                          {
                            style: { cursor: "pointer" },
                            styleName:
                              "gx-card-full " +
                              ("default" == this.state.formName
                                ? "selected_form"
                                : "not_selected")
                          },
                          o.createElement(
                            i.Row,
                            {
                              type: "flex",
                              style: { height: "8rem" },
                              justify: "center"
                            },
                            o.createElement(i.Empty, {
                              description: "Blank Feedback"
                            })
                          )
                        )
                      ),
                      o.createElement(
                        i.Col,
                        { span: 4 },
                        o.createElement(
                          l.CardBox,
                          {
                            style: {
                              cursor: "pointer",
                              backgroundColor: "#e6e6e6"
                            },
                            styleName:
                              "gx-card-full " +
                              ("product feedback" == this.state.formName
                                ? "selected_form"
                                : "not_selected"),
                            heading: ""
                          },
                          o.createElement(
                            i.Row,
                            {
                              type: "flex",
                              style: { height: "8rem" },
                              justify: "center"
                            },
                            o.createElement(i.Empty, {
                              description: "Product Feedback"
                            })
                          )
                        )
                      ),
                      o.createElement(
                        i.Col,
                        { span: 4 },
                        o.createElement(
                          l.CardBox,
                          {
                            style: {
                              cursor: "pointer",
                              backgroundColor: "#e6e6e6"
                            },
                            styleName:
                              "gx-card-full " +
                              ("customer survey" == this.state.formName
                                ? "selected_form"
                                : "not_selected"),
                            heading: ""
                          },
                          o.createElement(
                            i.Row,
                            {
                              type: "flex",
                              style: { height: "8rem" },
                              justify: "center"
                            },
                            o.createElement(i.Empty, {
                              description: "Customer Survey"
                            })
                          )
                        )
                      ),
                      o.createElement(
                        i.Col,
                        { span: 4 },
                        o.createElement(
                          l.CardBox,
                          {
                            style: {
                              cursor: "pointer",
                              backgroundColor: "#e6e6e6"
                            },
                            styleName:
                              "gx-card-full " +
                              ("employee feedback" == this.state.formName
                                ? "selected_form"
                                : "not_selected"),
                            heading: ""
                          },
                          o.createElement(
                            i.Row,
                            {
                              type: "flex",
                              style: { height: "8rem" },
                              justify: "center"
                            },
                            o.createElement(i.Empty, {
                              description: "Employee Feedback"
                            })
                          )
                        )
                      ),
                      o.createElement(
                        i.Col,
                        { span: 4 },
                        o.createElement(
                          l.CardBox,
                          {
                            style: {
                              cursor: "pointer",
                              backgroundColor: "#e6e6e6"
                            },
                            styleName:
                              "gx-card-full " +
                              ("user feedback" == this.state.formName
                                ? "selected_form"
                                : "not_selected"),
                            heading: ""
                          },
                          o.createElement(
                            i.Row,
                            {
                              type: "flex",
                              style: { height: "8rem" },
                              justify: "center"
                            },
                            o.createElement(i.Empty, {
                              description: "User Feedback"
                            })
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
      t.default = s.compose(
        s.graphql(u.CREATE_FEEDBACK_FORM, { name: "createFeedbackForm" })
      )(c);
    },
    669: function(e, t, n) {},
    671: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(n(0)),
        i = n(3),
        l = r(n(672)),
        s = r(n(673)),
        u = r(n(674)),
        c = (i.Tabs.TabPane, i.Typography.Title, r(n(675)));
      t.default = function(e) {
        var t = e.subTitle,
          n = e.onChange,
          a = e.communicationData,
          r = e.defaultValue,
          p = e.value,
          d = (e.OnCommunicationFormNext, e.commWrappedComponentRef),
          m = e.communicationFormValues,
          f = (e.pushFormData, e.pushFormRef),
          h = e.emailFormRef,
          g = (e.emailFormData, e.onFormNext),
          y =
            (e.schedule,
            e.campaign,
            e.scheduleSaveMark,
            e.saveSchedule,
            e.form,
            e.testCommunication);
        return o.createElement(
          "div",
          null,
          o.createElement("h3", { className: "gx-text-grey gx-mb-1" }, t),
          o.createElement(
            i.Row,
            null,
            o.createElement(
              i.Col,
              { sm: 24, md: 13, lg: 13, xl: 13, xxl: 14 },
              console.log(p),
              o.createElement(
                i.Radio.Group,
                {
                  buttonStyle: "solid",
                  defaultValue: r,
                  onChange: n,
                  style: { paddingTop: "20px" },
                  value: p
                },
                a &&
                  a.map(function(e, t) {
                    return o.createElement(
                      i.Radio.Button,
                      { key: t, value: e.value },
                      e.title
                    );
                  })
              ),
              o.createElement(
                "div",
                { style: { marginTop: "20px" } },
                "SMS" == p &&
                  o.createElement(l.default, {
                    wrappedComponentRef: d,
                    formValues: m,
                    onFormNext: g
                  }),
                "PUSH" == p &&
                  o.createElement(u.default, {
                    wrappedComponentRef: f,
                    formValues: m,
                    onFormNext: g
                  }),
                "EMAIL" == p &&
                  o.createElement(s.default, {
                    wrappedComponentRef: h,
                    formValues: m,
                    onFormNext: g
                  })
              )
            ),
            o.createElement(
              i.Col,
              { sm: 24, md: 9, lg: 9, xl: 9, xxl: 8 },
              o.createElement(
                "div",
                { style: { padding: 30 } },
                o.createElement(c.default, {
                  testCommunication: y,
                  text: "Test " + p.toLowerCase() + " notification",
                  label:
                    "Enter your " +
                    ("SMS" == p
                      ? "phone number"
                      : "EMAIL" == p
                      ? "email address"
                      : "fcm token"),
                  name: p,
                  placeholder:
                    "SMS" == p
                      ? "phone number"
                      : "EMAIL" == p
                      ? "email"
                      : "FCM token"
                })
              )
            )
          )
        );
      };
    },
    672: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
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
      var i = o(n(0)),
        l = n(3),
        s = l.Input.TextArea,
        u = {
          name: "file",
          action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          headers: { authorization: "authorization-text" },
          onChange: function(e) {
            "uploading" !== e.file.status && console.log(e.file, e.fileList),
              "done" === e.file.status
                ? l.message.success(e.file.name + " file uploaded successfully")
                : "error" === e.file.status &&
                  l.message.error(e.file.name + " file upload failed.");
          }
        },
        c = l.Form.create({ name: "form_in_modal" })(
          (function(e) {
            function t(t) {
              return e.call(this, t) || this;
            }
            return (
              a(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.form,
                  n = e.onFormNext,
                  a = e.wrappedComponentRef,
                  o = e.formValues,
                  c = (e.text, t.getFieldDecorator),
                  p = { labelCol: { span: 24 }, wrapperCol: { span: 24 } };
                return i.createElement(
                  l.Form,
                  {
                    style: { paddingTop: "20px" },
                    layout: "vertical",
                    ref: a,
                    onSubmit: n
                  },
                  i.createElement(
                    l.Form.Item,
                    r({ label: "SMS tag" }, p),
                    c("smsTag", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length && o.smsTag
                          ? o.smsTag
                          : ""),
                      rules: [{ required: !0, message: "SMS tag is required" }]
                    })(i.createElement(l.Input, null))
                  ),
                  i.createElement(
                    l.Form.Item,
                    r({ label: "SMS body" }, p),
                    c("smsBody", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length && o.smsBody
                          ? o.smsBody
                          : ""),
                      rules: [{ required: !0, message: "SMS body is required" }]
                    })(i.createElement(s, { rows: 3 }))
                  ),
                  i.createElement(
                    l.Form.Item,
                    { style: { paddingLeft: "16px" } },
                    i.createElement(
                      l.Upload,
                      r({}, u),
                      i.createElement(l.Button, null, "Upload and link file")
                    )
                  )
                );
              }),
              t
            );
          })(i.Component)
        );
      t.default = c;
    },
    673: function(e, t, n) {
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
        i = n(3),
        l = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.form, e.onFormNext),
                n = e.wrappedComponentRef,
                a = e.formValues,
                r = (e.text, this.props.form.getFieldDecorator);
              return o.createElement(
                i.Form,
                {
                  style: { paddingTop: "20px" },
                  layout: "vertical",
                  ref: n,
                  onSubmit: t
                },
                o.createElement(
                  i.Form.Item,
                  { label: "Subject" },
                  r("email_subject", {
                    initialValue:
                      "" +
                      (0 != Object.keys(a).length && a.email_subject
                        ? a.email_subject
                        : ""),
                    rules: [
                      { required: !0, message: "Please enter Email Subject!" }
                    ]
                  })(
                    o.createElement(i.Input, {
                      prefix: o.createElement(i.Icon, {
                        type: "mail",
                        style: { color: "rgba(0,0,0,.25)" }
                      }),
                      placeholder: "Enter Email Subject"
                    })
                  )
                ),
                o.createElement(
                  i.Form.Item,
                  { label: "Compose" },
                  r("email_body", {
                    initialValue:
                      "" +
                      (0 != Object.keys(a).length && a.email_body
                        ? a.email_body
                        : ""),
                    rules: [
                      { required: !0, message: "Please enter Email body!" }
                    ]
                  })(
                    o.createElement(i.Input.TextArea, {
                      rows: 6,
                      placeholder: "Enter Email body"
                    })
                  )
                ),
                o.createElement(
                  i.Form.Item,
                  null,
                  r("upload", { valuePropName: "fileList" })(
                    o.createElement(
                      i.Upload,
                      {
                        name: "logo",
                        action: "/upload.do",
                        listType: "picture"
                      },
                      o.createElement(
                        i.Button,
                        null,
                        o.createElement(i.Icon, { type: "upload" }),
                        " Attach Media"
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(o.Component),
        s = i.Form.create({ name: "EmailForm" })(l);
      t.default = s;
    },
    674: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
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
      var i = o(n(0)),
        l = n(3),
        s = l.Input.TextArea,
        u = l.Form.create({ name: "form_in_modal" })(
          (function(e) {
            function t(t) {
              return e.call(this, t) || this;
            }
            return (
              a(t, e),
              (t.prototype.render = function() {
                var e = this.props,
                  t = e.form,
                  n = e.onFormNext,
                  a = e.wrappedComponentRef,
                  o = e.formValues,
                  u = (e.text, t.getFieldDecorator),
                  c = { labelCol: { span: 24 }, wrapperCol: { span: 24 } };
                return i.createElement(
                  l.Form,
                  {
                    style: { paddingTop: "20px", paddingBottom: "20px" },
                    layout: "vertical",
                    ref: a,
                    onSubmit: n
                  },
                  i.createElement(
                    l.Form.Item,
                    r({ label: "Notification tag" }, c),
                    u("notificationTag", {
                      initialValue: "",
                      rules: [
                        {
                          required: !0,
                          message: "Notification tag is required"
                        }
                      ]
                    })(i.createElement(l.Input, null))
                  ),
                  i.createElement(
                    l.Form.Item,
                    r({ label: "Title for notification" }, c),
                    u("notificationTitle", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length ? o.notificationBody : ""),
                      rules: [
                        {
                          required: !0,
                          message: "Notification title is required"
                        }
                      ]
                    })(i.createElement(l.Input, null))
                  ),
                  i.createElement(
                    l.Form.Item,
                    r({ label: "Notification body" }, c),
                    u("notificationBody", {
                      initialValue:
                        "" +
                        (0 != Object.keys(o).length ? o.notificationBody : ""),
                      rules: [
                        {
                          required: !0,
                          message: "Notification body is required"
                        }
                      ]
                    })(i.createElement(s, { rows: 3 }))
                  ),
                  i.createElement(
                    l.Form.Item,
                    { style: { paddingLeft: "16px" } },
                    i.createElement(
                      l.Upload,
                      r({}, this.props.uploadProps),
                      i.createElement(l.Button, null, "Attach image")
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
    675: function(e, t, n) {
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
        r =
          (this && this.__awaiter) ||
          function(e, t, n, a) {
            return new (n || (n = Promise))(function(r, o) {
              function i(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                try {
                  s(a.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                e.done
                  ? r(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(i, l);
              }
              s((a = a.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function(e, t) {
            var n,
              a,
              r,
              o,
              i = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1];
                  return r[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function() {
                  return this;
                }),
              o
            );
            function l(o) {
              return function(l) {
                return (function(o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((n = 1),
                        a &&
                          (r =
                            2 & o[0]
                              ? a.return
                              : o[0]
                              ? a.throw || ((r = a.return) && r.call(a), 0)
                              : a.next) &&
                          !(r = r.call(a, o[1])).done)
                      )
                        return r;
                      switch (((a = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                        case 0:
                        case 1:
                          r = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (a = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!r || (o[1] > r[0] && o[1] < r[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < r[1]) {
                            (i.label = r[1]), (r = o);
                            break;
                          }
                          if (r && i.label < r[2]) {
                            (i.label = r[2]), i.ops.push(o);
                            break;
                          }
                          r[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = t.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (a = 0);
                    } finally {
                      n = r = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
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
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = i(n(0)),
        s = n(3),
        u = n(27),
        c = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.onChange = function(e) {
                switch (
                  (console.log(e.target.name, e.target.value), e.target.name)
                ) {
                  case "EMAIL":
                    n.setState({
                      phoneNumber: "",
                      fcmToken: "",
                      email: e.target.value
                    });
                    break;
                  case "PUSH":
                    n.setState({
                      phoneNumber: "",
                      fcmToken: e.target.value,
                      email: ""
                    });
                    break;
                  case "SMS":
                  default:
                    n.setState({
                      phoneNumber: e.target.value,
                      fcmToken: "",
                      email: ""
                    });
                }
              }),
              (n.getValue = function() {
                switch ((console.log(n.props.name), n.props.name)) {
                  case "EMAIL":
                    return n.state.email;
                  case "PUSH":
                    return n.state.fcmToken;
                  case "SMS":
                  default:
                    return n.state.phoneNumber;
                }
              }),
              (n.testComms = function() {
                return r(n, void 0, void 0, function() {
                  return o(this, function(e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          this.props.testCommunication(
                            this.state.phoneNumber,
                            this.state.email,
                            this.state.fcmToken
                          )
                        ];
                      case 1:
                        return (
                          e.sent() &&
                            s.message.success(
                              "Communication successfully sent!"
                            ),
                          [2]
                        );
                    }
                  });
                });
              }),
              (n.state = { phoneNumber: "", fcmToken: "", email: "" }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return l.createElement(
                u.Widget,
                {
                  style: { backgroundColor: "#FAFAFA" },
                  title: l.createElement(
                    "h1",
                    { className: "gx-text-primary gx-text-capitalize gx-mb-0" },
                    this.props.text
                  )
                },
                l.createElement(
                  s.Form,
                  { className: "gx-signup-form gx-form-row0 gx-mb-0" },
                  l.createElement(
                    "div",
                    { className: "gx-mb-2" },
                    l.createElement("label", null, this.props.label)
                  ),
                  l.createElement(
                    "div",
                    { className: "gx-mb-3" },
                    l.createElement(s.Input, {
                      value: this.getValue(),
                      name: this.props.name,
                      onChange: this.onChange,
                      placeholder: this.props.placeholder
                    })
                  ),
                  l.createElement(
                    s.Button,
                    {
                      onClick: this.testComms,
                      type: "primary",
                      className: "gx-mb-0",
                      htmlType: "submit"
                    },
                    "Send"
                  )
                )
              );
            }),
            t
          );
        })(l.Component);
      t.default = c;
    },
    676: function(e, t, n) {
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
        l = n(14),
        s = n(3),
        u = n(55),
        c = o(n(677)),
        p = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.confirm = function() {
                var e = n.state.showEvents,
                  t = n.props,
                  a = (t.event, t.selectedApplication);
                n.setState({ visible: !1 }),
                  !0 === e && a
                    ? (a && n.props.unlinkCampaignFromApplication(a),
                      n.setState({ showEvents: !1 }))
                    : n.setState({ showEvents: !0 });
              }),
              (n.cancel = function() {
                n.setState({ visible: !1, showEvents: !0 });
              }),
              (n.onChange = function(e) {
                n.handleVisibleChange(e);
              }),
              (n.getApplicationOptions = function() {
                return n.props.application.map(function(e) {
                  return i.createElement(
                    s.Select.Option,
                    { style: { margin: "13px" }, value: e.id, key: e.id },
                    e.name
                  );
                });
              }),
              (n.handleVisibleChange = function(e) {
                n.state.showEvents;
                var t = n.props;
                t.event, t.selectedApplication;
                e
                  ? n.state.showEvents
                    ? n.setState({ visible: e })
                    : n.confirm()
                  : n.setState({ visible: e });
              }),
              (n.getOptions = function() {
                return n.props.eventType.eventTypesForApplication.map(function(
                  e
                ) {
                  return i.createElement(
                    s.Select.Option,
                    { value: e.id, key: e.id },
                    e.type
                  );
                });
              }),
              (n.state = { showEvents: !1, visible: !1 }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {
              console.log(this.props);
            }),
            (t.prototype.UNSAFE_componentWillMount = function() {
              var e = this.props,
                t = (e.event, e.selectedApplication);
              t &&
                (this.props.eventType({ variables: { appId: t } }),
                this.setState({ showEvents: !0 }));
            }),
            (t.prototype.render = function() {
              console.log("this.props inside app", this.props);
              var e = this.state.showEvents;
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  s.Popconfirm,
                  {
                    title:
                      "Are you sure you want to unlink this application from campaign?",
                    visible: this.state.visible,
                    onVisibleChange: this.handleVisibleChange,
                    onConfirm: this.confirm,
                    onCancel: this.cancel,
                    okText: "Yes",
                    cancelText: "No"
                  },
                  i.createElement(s.Switch, {
                    defaultChecked: this.state.showEvents,
                    checked: this.state.showEvents
                  })
                ),
                i.createElement(
                  "span",
                  { className: "gx-text-grey", style: { marginLeft: "1rem" } },
                  "Enable Triggers/Events for your App"
                ),
                e
                  ? i.createElement(c.default, {
                      applications: this.props.application
                    })
                  : null
              );
            }),
            t
          );
        })(i.Component),
        d = l.withApollo(p);
      t.EventTypeForm = s.Form.create({
        name: "EventType",
        onValuesChange: function(e, t) {
          console.log("values", t),
            t.event
              ? e.onEventTypeEdited(t)
              : e.selectedApplication !== t.application &&
                (e.linkCampaignToApplication(t.application),
                e.client
                  .query({
                    query: u.EVENT_TYPES_FOR_APPLICATION,
                    variables: { appId: e.selectedApplication }
                  })
                  .then(function(e) {
                    return console.log("data", e);
                  })
                  .catch(function(e) {
                    return console.log("err", e);
                  }));
        },
        mapPropsToFields: function(e) {
          e.event;
          var t = e.selectedApplication;
          t &&
            e.client
              .query({
                query: u.EVENT_TYPES_FOR_APPLICATION,
                variables: { appId: t }
              })
              .then(function(e) {
                return console.log("data", e);
              })
              .catch(function(e) {
                return console.log("err", e);
              });
        }
      })(d);
    },
    677: function(e, t, n) {
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
        i = n(14);
      n(678);
      var l = n(55),
        s = n(3),
        u = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.getOptions = function() {
                return o.default.createElement(
                  s.Select.Option,
                  { key: 1, value: 1 },
                  "Hello"
                );
              }),
              (n.getApplicationOptions = function() {
                return n.props.applications.map(function(e) {
                  return o.default.createElement(
                    s.Select.Option,
                    { style: { margin: "13px" }, value: e.id, key: e.id },
                    e.name
                  );
                });
              }),
              (n.state = {}),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props.form.getFieldDecorator;
              return (
                console.log(this.props),
                o.default.createElement(
                  s.Row,
                  { style: { marginTop: "2rem" } },
                  o.default.createElement(
                    s.Col,
                    { span: 24 },
                    o.default.createElement(
                      s.Row,
                      null,
                      o.default.createElement(
                        s.Col,
                        { span: 6 },
                        o.default.createElement("h2", null, "App")
                      ),
                      o.default.createElement(
                        s.Col,
                        { span: 12 },
                        o.default.createElement(
                          s.Form,
                          {
                            layout: "vertical",
                            onSubmit: function() {
                              return console.log("submit");
                            }
                          },
                          o.default.createElement(
                            s.Form.Item,
                            { label: "Choose an App" },
                            e("application", {
                              rules: [
                                {
                                  required: !0,
                                  message: "Please select an event type!"
                                }
                              ]
                            })(
                              o.default.createElement(
                                s.Select,
                                {
                                  style: { width: 250 },
                                  notFoundContent: this.props.eventType.loading
                                    ? o.default.createElement(s.Spin, {
                                        size: "small"
                                      })
                                    : null,
                                  placeholder: "Select an Application"
                                },
                                o.default.createElement(
                                  s.Select.Option,
                                  { key: "addnewApplication" },
                                  o.default.createElement(
                                    "div",
                                    {
                                      style: {
                                        padding: "8px",
                                        cursor: "pointer"
                                      }
                                    },
                                    o.default.createElement(
                                      s.Button,
                                      {
                                        style: { margin: "auto", left: "15%" }
                                      },
                                      " ",
                                      o.default.createElement(s.Icon, {
                                        type: "plus"
                                      }),
                                      " Add new App",
                                      " "
                                    )
                                  ),
                                  o.default.createElement(s.Divider, {
                                    style: { margin: "4px 0" }
                                  })
                                ),
                                this.props.eventType.loading
                                  ? o.default.createElement(
                                      s.Select.Option,
                                      { value: "loading", key: "999999" },
                                      "loading"
                                    )
                                  : this.getApplicationOptions()
                              )
                            )
                          )
                        )
                      )
                    ),
                    o.default.createElement(s.Divider, {
                      style: { color: "white" }
                    }),
                    o.default.createElement(
                      s.Row,
                      null,
                      o.default.createElement(
                        s.Col,
                        { span: 6 },
                        o.default.createElement("h2", null, "Event")
                      ),
                      o.default.createElement(
                        s.Col,
                        { span: 12 },
                        o.default.createElement(
                          s.Form,
                          {
                            layout: "vertical",
                            onSubmit: function() {
                              return console.log("submit");
                            }
                          },
                          o.default.createElement(
                            s.Form.Item,
                            { label: "Choose an event type" },
                            e("event", {
                              rules: [
                                {
                                  required: !0,
                                  message: "Please select an event type!"
                                }
                              ]
                            })(
                              o.default.createElement(
                                s.Select,
                                {
                                  style: { width: 500 },
                                  notFoundContent: this.props.eventType.loading
                                    ? o.default.createElement(s.Spin, {
                                        size: "small"
                                      })
                                    : null,
                                  placeholder: "Select an Event"
                                },
                                this.props.eventType.loading
                                  ? o.default.createElement(
                                      s.Select.Option,
                                      { value: "loading", key: "999999" },
                                      "loading"
                                    )
                                  : this.getOptions()
                              )
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
        })(o.Component),
        c = s.Form.create({
          name: "Events",
          onValuesChange: function(e, t) {
            console.log(t);
          },
          mapPropsToFields: function(e) {}
        })(u);
      t.default = i.compose(
        i.graphql(l.EVENT_TYPE_FOR_APPLICATION, { name: "eventType" }),
        i.graphql(l.EVENT_SUBSCRITPION_FOR_EVENT_TYPE, {
          name: "eventSubscrptionForEvent"
        }),
        i.graphql(l.CREATE_EVENT_TYPE, { name: "createEventTYpe" }),
        i.graphql(l.CREATE_EVENT_SUBSCRIPTIONS, {
          name: "createEventSubscription"
        })
      )(c);
    },
    678: function(e, t, n) {},
    680: function(e, t, n) {
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
        i = n(3),
        l = n(30),
        s = 0,
        u = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.removeFields = function(e) {
                var t = n.props.form,
                  a = t.getFieldValue("keys");
                1 !== a.length &&
                  t.setFieldsValue({
                    keys: a.filter(function(t) {
                      return t !== e;
                    })
                  });
              }),
              (n.addFields = function() {
                var e = n.props.form,
                  t = e.getFieldValue("keys").concat(s++);
                e.setFieldsValue({ keys: t });
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.props.form,
                n = t.getFieldDecorator,
                a = t.getFieldValue;
              n("keys", { initialValue: [] });
              var r = a("keys"),
                s = r.map(function(t, a) {
                  return o.createElement(
                    i.Form.Item,
                    { key: t },
                    o.createElement(
                      i.Form.Item,
                      null,
                      n("attribute [" + t + "]", {
                        rules: [
                          {
                            required: !0,
                            message: "Please select an attribute type!"
                          }
                        ]
                      })(
                        o.createElement(
                          i.Select,
                          {
                            style: { width: 100 },
                            placeholder: "Select an attribute"
                          },
                          o.createElement(
                            i.Select.Option,
                            { value: "ccd_event" },
                            "NAME"
                          ),
                          o.createElement(
                            i.Select.Option,
                            { value: "ccd_event2" },
                            "AGE"
                          )
                        )
                      )
                    ),
                    o.createElement(
                      i.Form.Item,
                      null,
                      n("attribute_exp [" + t + "]", {
                        rules: [
                          {
                            required: !0,
                            message: "Please select an attribute type!"
                          }
                        ]
                      })(
                        o.createElement(
                          i.Select,
                          {
                            style: { width: 100 },
                            placeholder: "Select an attribute"
                          },
                          o.createElement(
                            i.Select.Option,
                            { value: "equal_to" },
                            "EQUALS_TO"
                          ),
                          o.createElement(
                            i.Select.Option,
                            { value: "less_then" },
                            "LESS_THEN"
                          )
                        )
                      )
                    ),
                    o.createElement(
                      i.Form.Item,
                      null,
                      n("attribute_value [" + t + "]", {
                        rules: [
                          {
                            required: !0,
                            message: "Please select an attribute value!"
                          }
                        ]
                      })(o.createElement(i.Input, null))
                    ),
                    r.length > 1
                      ? o.createElement(i.Icon, {
                          className: "dynamic-delete-button",
                          type: "minus-circle-o",
                          onClick: function() {
                            return e.removeFields(t);
                          }
                        })
                      : null
                  );
                });
              return o.createElement(
                i.Row,
                { style: { marginTop: "1rem" } },
                o.createElement(
                  i.Col,
                  { span: 6 },
                  o.createElement("h2", null, "Filter")
                ),
                o.createElement(
                  i.Col,
                  { span: 14 },
                  o.createElement(
                    i.Form,
                    {
                      layout: "inline",
                      onSubmit: function() {
                        return console.log("submit");
                      }
                    },
                    s,
                    o.createElement(l.WalkinQueryBuilder, {
                      query: this.props.query,
                      fields: this.props.attributeData,
                      onQueryChange: this.props.logQuery
                    })
                  )
                )
              );
            }),
            t
          );
        })(o.Component),
        c = i.Form.create({
          name: "Filter",
          onFieldsChange: function(e, t) {
            console.log(t);
          },
          onValuesChange: function(e, t) {
            console.log("values", t);
          }
        })(u);
      t.default = c;
    },
    681: function(e, t, n) {
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
        r =
          (this && this.__awaiter) ||
          function(e, t, n, a) {
            return new (n || (n = Promise))(function(r, o) {
              function i(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                try {
                  s(a.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                e.done
                  ? r(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(i, l);
              }
              s((a = a.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function(e, t) {
            var n,
              a,
              r,
              o,
              i = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1];
                  return r[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function() {
                  return this;
                }),
              o
            );
            function l(o) {
              return function(l) {
                return (function(o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((n = 1),
                        a &&
                          (r =
                            2 & o[0]
                              ? a.return
                              : o[0]
                              ? a.throw || ((r = a.return) && r.call(a), 0)
                              : a.next) &&
                          !(r = r.call(a, o[1])).done)
                      )
                        return r;
                      switch (((a = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                        case 0:
                        case 1:
                          r = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (a = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!r || (o[1] > r[0] && o[1] < r[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < r[1]) {
                            (i.label = r[1]), (r = o);
                            break;
                          }
                          if (r && i.label < r[2]) {
                            (i.label = r[2]), i.ops.push(o);
                            break;
                          }
                          r[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = t.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (a = 0);
                    } finally {
                      n = r = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
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
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(682);
      var s = i(n(0)),
        u = l(n(684)),
        c = n(14),
        p = n(3),
        d = l(n(692)),
        m = l(n(693)),
        f = n(55),
        h = l(n(375)),
        g = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.listRef = s.createRef()),
              (n.success = function(e) {
                p.message.success(e, 5);
              }),
              (n.error = function(e) {
                p.message.error(e, 5);
              }),
              (n.onQuestionSelected = function(e) {
                console.log("this.props.questionnaire", n.props.questionnaire),
                  n.setState(function(t) {
                    return {
                      questionToEdit: n.props.questionnaire[e],
                      questionIndex: e,
                      addQuestion: !1,
                      choiceData: null,
                      choiceToAddQuestion: null,
                      questionTypeSelector: null
                    };
                  });
              }),
              (n.onLinkChoiceToQuestion = function(e, t) {
                n.setState({ isChoiceLoading: !0, isQuestionLoading: !0 }),
                  console.log("choiceId,QuestionId", t, e),
                  n.props
                    .linkChoieToQuestion({
                      variables: { choiceId: t, questionId: e }
                    })
                    .then(function(e) {
                      return r(n, void 0, void 0, function() {
                        return o(this, function(e) {
                          switch (e.label) {
                            case 0:
                              return (
                                this.success(
                                  "Choice successfully linked to question "
                                ),
                                [4, this.props.refetchQuestionnaire()]
                              );
                            case 1:
                              return (
                                e.sent(),
                                console.log(
                                  "questionnaire",
                                  this.props.questionnaire
                                ),
                                this.setState({
                                  isChoiceLoading: !1,
                                  isQuestionLoading: !1,
                                  questionToEdit: this.props.questionnaire[
                                    this.state.questionIndex
                                  ]
                                }),
                                [2]
                              );
                          }
                        });
                      });
                    })
                    .catch(function(e) {
                      n.error(
                        "Some error occured while linking! Please try again"
                      ),
                        n.setState({
                          isChoiceLoading: !1,
                          isQuestionLoading: !1
                        });
                    });
              }),
              (n.onNewQuestionAdd = function(e) {
                var t = n.state.choiceToAddQuestion;
                n.props
                  .addQuestion({
                    variables: {
                      choiceId: t.id,
                      input: {
                        questionText: "click here to edit",
                        type: e,
                        rangeMax: 10,
                        rangeMin: 1
                      }
                    }
                  })
                  .then(function(t) {
                    return r(n, void 0, void 0, function() {
                      return o(this, function(n) {
                        switch (n.label) {
                          case 0:
                            return (
                              console.log(t),
                              this.setState({
                                questionTypeSelector: e,
                                addQuestion: !1,
                                questionToEdit: t.data.addQuestion
                              }),
                              [4, this.props.refetchQuestionnaire()]
                            );
                          case 1:
                            return (
                              n.sent(),
                              this.onQuestionSelected(this.state.questionIndex),
                              [2]
                            );
                        }
                      });
                    });
                  })
                  .catch(function(e) {
                    console.log("Error creating the question", e);
                  });
              }),
              (n.onQuestionTypeSelector = function(e) {
                if (
                  (n.setState({ isQuestionLoading: !0 }),
                  0 !== n.props.questionnaire.length)
                ) {
                  var t = n.state.choiceToAddQuestion;
                  h.default(t)
                    ? (p.message.error("Please select a question"),
                      n.setState({ isQuestionLoading: !1, loading: !1 }))
                    : n.props
                        .addQuestion({
                          variables: {
                            choiceId: t.id,
                            input: {
                              questionText: "click here to edit",
                              type: e,
                              rangeMax: 10,
                              rangeMin: 1
                            }
                          }
                        })
                        .then(function(t) {
                          return r(n, void 0, void 0, function() {
                            return o(this, function(n) {
                              switch (n.label) {
                                case 0:
                                  return (
                                    console.log(t),
                                    [4, this.props.refetchQuestionnaire()]
                                  );
                                case 1:
                                  return (
                                    n.sent(),
                                    "TEXT" == e
                                      ? this.addChoice(t.addQuestion.id, null)
                                      : this.setState({
                                          isQuestionLoading: !1,
                                          addQuestion: !1
                                        }),
                                    [2]
                                  );
                              }
                            });
                          });
                        })
                        .catch(function(e) {
                          n.setState({ isQuestionLoading: !1 }),
                            console.log("Error creating the question", e);
                        });
                } else n.createRootQuestionnaire(e);
              }),
              (n.createRootQuestionnaire = function(e) {
                return r(n, void 0, void 0, function() {
                  var t, n, a;
                  return o(this, function(r) {
                    switch (r.label) {
                      case 0:
                        this.setState({ isQuestionLoading: !0 }),
                          (t = this.props.feedbackForm),
                          (r.label = 1);
                      case 1:
                        return (
                          r.trys.push([1, 4, , 5]),
                          [
                            4,
                            this.props.createQuestionnaire({
                              variables: {
                                feedbackFormId: t.id,
                                questionnaireInput: {
                                  questionText: "Click here to edit",
                                  type: e,
                                  rangeMax: 10,
                                  rangeMin: 1
                                }
                              }
                            })
                          ]
                        );
                      case 2:
                        return (
                          (n = r.sent()),
                          console.log(n),
                          [4, this.props.refetchFeedbackForm()]
                        );
                      case 3:
                        return (
                          r.sent(),
                          "TEXT" == e
                            ? this.addChoice(n.createQuestionnaire.id, null)
                            : this.setState({ isQuestionLoading: !1 }),
                          [3, 5]
                        );
                      case 4:
                        return (
                          (a = r.sent()),
                          this.setState({ isQuestionLoading: !1 }),
                          console.log("Error in creating questionnaire", a),
                          console.log(a),
                          [3, 5]
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (n.onNewQuestionAdded = function(e) {
                (e.type = n.state.questionTypeSelector),
                  n.props
                    .addQuestion({
                      variables: {
                        choiceId: "",
                        input: {
                          questionText: "  ",
                          type: e.type,
                          rangeMax: 10,
                          rangeMin: 1,
                          choices: []
                        }
                      }
                    })
                    .then(function(t) {
                      console.log(t),
                        n.props.refetchQuestionnaire(),
                        n.setState({
                          questionTypeSelector: e.type,
                          addQuestion: !1,
                          questionData: e,
                          questionToEdit: t.data.addQuestion
                        });
                    })
                    .catch(function(e) {
                      console.log("Error creating the question", e);
                    });
              }),
              (n.onNewChoiceAdd = function(e) {
                n.setState({ choiceData: e });
              }),
              (n.onChoiceSubmitted = function(e) {
                console.log("editedChoice", e),
                  n.setState({ isChoiceLoading: !0 }),
                  n.props
                    .editChoice({
                      variables: {
                        input: {
                          id: e.id,
                          choiceText: e.choiceText,
                          rangeStart: e.rangeStart,
                          rangeEnd: e.rangeEnd
                        }
                      }
                    })
                    .then(function(e) {
                      return r(n, void 0, void 0, function() {
                        return o(this, function(t) {
                          switch (t.label) {
                            case 0:
                              return (
                                console.log(e),
                                [4, this.props.refetchQuestionnaire()]
                              );
                            case 1:
                              return (
                                t.sent(),
                                this.onQuestionSelected(
                                  this.state.questionIndex
                                ),
                                this.setState({ isChoiceLoading: !1 }),
                                [2]
                              );
                          }
                        });
                      });
                    })
                    .catch(function(e) {
                      console.log(e);
                    });
              }),
              (n.onQuestionSubmitted = function(e) {
                return r(n, void 0, void 0, function() {
                  var t,
                    n,
                    a,
                    i,
                    l,
                    s = this;
                  return o(this, function(u) {
                    return (
                      this.setState({ isQuestionLoading: !0 }),
                      (t = e.type),
                      (n = e.questionText),
                      (a = e.rangeMax),
                      (i = e.rangeMin),
                      (l = {
                        id: this.state.questionToEdit.id,
                        type: t,
                        questionText: n,
                        rangeMax: a,
                        rangeMin: i
                      }),
                      this.props
                        .editQuestion({ variables: { editQuestionInput: l } })
                        .then(function(e) {
                          return r(s, void 0, void 0, function() {
                            return o(this, function(e) {
                              switch (e.label) {
                                case 0:
                                  return [4, this.props.refetchQuestionnaire()];
                                case 1:
                                  return (
                                    e.sent(),
                                    this.listRef.current.resetAfterIndex(
                                      this.state.questionIndex,
                                      !0
                                    ),
                                    this.setState({ isQuestionLoading: !1 }),
                                    [2]
                                  );
                              }
                            });
                          });
                        })
                        .catch(function(e) {
                          s.setState({ isQuestionLoading: !1 }), console.log(e);
                        }),
                      [2]
                    );
                  });
                });
              }),
              (n.addNewQuestion = function(e) {
                return (
                  void 0 === e && (e = null),
                  r(n, void 0, void 0, function() {
                    return o(this, function(t) {
                      return (
                        this.props.feedbackForm,
                        this.setState({
                          addQuestion: !0,
                          choiceToAddQuestion: e
                        }),
                        [2]
                      );
                    });
                  })
                );
              }),
              (n.addChoice = function(e, t) {
                n.setState({ isChoiceLoading: !0 });
                var a = 1,
                  i = 10;
                t && ((a = t.rangeStart), (i = t.rangeEnd)),
                  n.props
                    .addChoice({
                      variables: {
                        questionId: n.state.questionToEdit
                          ? n.state.questionToEdit.id
                          : e,
                        input: { choiceText: "", rangeStart: a, rangeEnd: i }
                      }
                    })
                    .then(function(e) {
                      return r(n, void 0, void 0, function() {
                        return o(this, function(t) {
                          switch (t.label) {
                            case 0:
                              return (
                                console.log(e),
                                this.setState({ choiceData: e.data.addChoice }),
                                [4, this.props.refetchQuestionnaire()]
                              );
                            case 1:
                              return (
                                t.sent(),
                                this.onQuestionSelected(
                                  this.state.questionIndex
                                ),
                                this.setState({ isChoiceLoading: !1 }),
                                [2]
                              );
                          }
                        });
                      });
                    })
                    .catch(function(e) {
                      n.setState({ isChoiceLoading: !1 }), console.log(e);
                    });
              }),
              (n.removeChoice = function(e) {
                console.log("removing choice", e),
                  n.setState({ isChoiceLoading: !0 }),
                  n.props
                    .removeChoice({ variables: { id: e.id } })
                    .then(function(e) {
                      return r(n, void 0, void 0, function() {
                        return o(this, function(t) {
                          switch (t.label) {
                            case 0:
                              return (
                                console.log(e),
                                [4, this.props.refetchQuestionnaire()]
                              );
                            case 1:
                              return (
                                t.sent(),
                                this.onQuestionSelected(
                                  this.state.questionIndex
                                ),
                                this.setState({ isChoiceLoading: !1 }),
                                [2]
                              );
                          }
                        });
                      });
                    });
              }),
              (n.state = {
                questionToEdit: null,
                loading: !0,
                questionIndex: null,
                addQuestion: !1,
                choiceToAddQuestion: null,
                questionTypeSelector: null,
                choiceData: null,
                questionnaire: null,
                isChoiceLoading: !1,
                isQuestionLoading: !1,
                questionData: null
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidUpdate = function(e) {
              console.log("prevProps", e, this.props);
            }),
            (t.prototype.render = function() {
              var e = s.createElement(p.Icon, {
                  type: "loading",
                  style: { fontSize: 50 },
                  spin: !0
                }),
                t = this.state,
                n = (t.questionIndex, t.addQuestion),
                a = t.choiceData,
                r = t.questionTypeSelector,
                o = t.choiceToAddQuestion,
                i = t.questionToEdit,
                l = t.isChoiceLoading,
                c = t.isQuestionLoading;
              return s.createElement(
                p.Row,
                { className: "QuestionnaireArea" },
                s.createElement(
                  p.Col,
                  { span: 8 },
                  c
                    ? s.createElement(
                        "div",
                        { className: "divCenter" },
                        s.createElement(p.Spin, {
                          size: "large",
                          indicator: e
                        }),
                        " "
                      )
                    : s.createElement(d.default, {
                        createRootQuestionnaire: this.createRootQuestionnaire,
                        questionnaire: this.props.questionnaire,
                        onQuestionSelected: this.onQuestionSelected,
                        addNewQuestion: this.addNewQuestion,
                        isQuestionLoading: c,
                        reference: this.listRef
                      })
                ),
                s.createElement(
                  p.Col,
                  { span: 16, className: "QuestionType" },
                  this.props.questionnaire.length > 0
                    ? h.default(i) || n
                      ? s.createElement(m.default, {
                          onQuestionTypeSelector: this.onQuestionTypeSelector
                        })
                      : s.createElement(u.default, {
                          questionnaire: this.props.questionnaire,
                          questionToEdit: i,
                          onQuestionSubmitted: this.onQuestionSubmitted,
                          addChoice: this.addChoice,
                          removeChoice: this.removeChoice,
                          addNewQuestion: this.addNewQuestion,
                          choiceData: a,
                          questionType: r,
                          choiceToAddQuestion: o,
                          onChoiceSubmitted: this.onChoiceSubmitted,
                          isChoiceLoading: l,
                          isQuestionLoading: c,
                          onLinkChoiceToQuestion: this.onLinkChoiceToQuestion
                        })
                    : n || h.default(i)
                    ? s.createElement(m.default, {
                        onQuestionTypeSelector: this.onQuestionTypeSelector
                      })
                    : s.createElement(u.default, {
                        questionnaire: this.props.questionnaire,
                        questionToEdit: i,
                        onQuestionSubmitted: this.createRootQuestionnaire,
                        addChoice: this.addChoice,
                        removeChoice: this.removeChoice,
                        addNewQuestion: this.addNewQuestion,
                        choiceData: a,
                        questionType: r,
                        choiceToAddQuestion: o,
                        onChoiceSubmitted: this.onChoiceSubmitted,
                        isChoiceLoading: l,
                        isQuestionLoading: c,
                        onLinkChoiceToQuestion: this.onLinkChoiceToQuestion
                      })
                )
              );
            }),
            t
          );
        })(s.Component);
      t.default = c.compose(
        c.graphql(f.EDIT_QUESTION, { name: "editQuestion" }),
        c.graphql(f.CREAT_BLANK_QUESITON, { name: "createQuestionnaire" }),
        c.graphql(f.ADD_QUESTION, { name: "addQuestion" }),
        c.graphql(f.ADD_CHOICE, { name: "addChoice" }),
        c.graphql(f.REMOVE_CHOICE, { name: "removeChoice" }),
        c.graphql(f.EDIT_CHOICE, { name: "editChoice" }),
        c.graphql(f.LINK_CHOICE_TO_QUESTION, { name: "linkChoieToQuestion" })
      )(g);
    },
    682: function(e, t, n) {},
    684: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(685);
      var l = n(3),
        s = o(n(0)),
        u = i(n(687)),
        c = i(n(691)),
        p = { RATING_SCALE: "RATING_SCALE", OPINION_SCALE: "OPINION_SCALE" },
        d = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.onChoiceEdited = function(e, t) {
                console.log("values of choices", e),
                  p[e.type] &&
                    ((e.rangeStart = e.range[0]), (e.rangeEnd = e.range[1])),
                  delete e.range;
                var a = r({}, t, e);
                n.setState({
                  choiceToEdit: Object.assign(n.state.choiceToEdit, a)
                });
              }),
              (n.onQuestionTypeEdit = function(e) {
                console.log(
                  "this.state.questionToEdit",
                  n.state.questionToEdit
                );
                var t = r({}, n.props.questionToEdit, { type: e });
                p[t.type]
                  ? ((t.rangeMin = 1), (t.rangeMax = 10))
                  : delete t.range,
                  n.setState({ questionToEdit: t, showButton: !0 }),
                  n.props.onQuestionSubmitted(t);
              }),
              (n.onQuestionEdited = function(e) {
                e.range &&
                  ((e.rangeMin = e.range[0]), (e.rangeMax = e.range[1])),
                  n.setState({
                    questionToEdit: Object.assign(n.state.questionToEdit, e),
                    showButton: !0
                  });
              }),
              (n.onChoiceSubmitted = function() {
                var e = n.state.choiceToEdit;
                console.log("choiceToEdit", e), n.props.onChoiceSubmitted(e);
              }),
              (n.onQuestionSubmitted = function() {
                console.log("questionToEdit", n.state.questionToEdit),
                  console.log(n.state.questionToEdit),
                  n.props.onQuestionSubmitted(n.state.questionToEdit);
              }),
              (n.state = {
                questionToEdit: {},
                choiceToEdit: {},
                showButton: !1
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.questionToEdit,
                n = e.addChoice,
                a = e.removeChoice,
                r = e.choiceData,
                o = e.addNewQuestion,
                i = e.questionType,
                p = e.choiceToAddQuestion,
                d = e.isChoiceLoading,
                m = e.isQuestionLoading,
                f = e.questionnaire,
                h = e.onLinkChoiceToQuestion;
              return s.createElement(
                l.Row,
                { style: { height: "100%", overflowX: "scroll" } },
                s.createElement(
                  l.Col,
                  { span: 24 },
                  null != i && null != p
                    ? s.createElement(c.default, {
                        onQuestionTypeEdit: this.onQuestionTypeEdit,
                        showButton: this.state.showButton,
                        questionnaire: f,
                        onQuestionEdited: this.onQuestionEdited,
                        onQuestionSubmitted: this.onQuestionSubmitted,
                        onChoiceEdited: this.onChoiceEdited,
                        questionToEdit: t,
                        addChoice: n,
                        removeChoice: a,
                        addNewQuestion: o,
                        choiceData: r,
                        questionType: i,
                        choiceToAddQuestion: p,
                        submitChoice: this.onChoiceSubmitted,
                        isChoiceLoading: d,
                        isQuestionLoading: m,
                        onLinkChoiceToQuestion: h
                      })
                    : s.createElement(u.default, {
                        onQuestionTypeEdit: this.onQuestionTypeEdit,
                        showButton: this.state.showButton,
                        questionnaire: f,
                        onQuestionEdited: this.onQuestionEdited,
                        onQuestionSubmitted: this.onQuestionSubmitted,
                        onChoiceEdited: this.onChoiceEdited,
                        questionToEdit: t,
                        addChoice: n,
                        removeChoice: a,
                        addNewQuestion: o,
                        choiceData: r,
                        submitChoice: this.onChoiceSubmitted,
                        isChoiceLoading: d,
                        isQuestionLoading: m,
                        onLinkChoiceToQuestion: h
                      })
                )
              );
            }),
            t
          );
        })(s.Component);
      t.default = d;
    },
    685: function(e, t, n) {},
    687: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(n(0)),
        i = n(3),
        l = r(n(450)),
        s = r(n(451)),
        u = r(n(452));
      t.default = function(e) {
        var t = e.onQuestionEdited,
          n = e.onQuestionSubmitted,
          a = e.questionToEdit,
          r = e.addChoice,
          c = e.removeChoice,
          p = e.addNewQuestion,
          d = e.choiceData,
          m = e.onChoiceEdited,
          f = e.submitChoice,
          h = e.isChoiceLoading,
          g = e.questionnaire,
          y = e.onLinkChoiceToQuestion,
          v = e.showButton,
          _ = e.onQuestionTypeEdit;
        return (
          console.log(g),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              i.Row,
              null,
              o.createElement(
                i.Col,
                { span: 24 },
                o.createElement(l.default, {
                  onQuestionTypeEdit: _,
                  onQuestionEdited: t,
                  questionToEdit: a,
                  questionType: a.type
                })
              ),
              o.createElement(
                i.Col,
                { span: 24 },
                o.createElement(
                  i.Row,
                  null,
                  o.createElement(
                    i.Col,
                    { span: 24 },
                    o.createElement(s.default, {
                      showButton: v,
                      onQuestionEdited: t,
                      onQuestionSubmitted: n,
                      questionToEdit: a,
                      style: { marginTop: "4%" }
                    })
                  )
                ),
                o.createElement(
                  i.Row,
                  null,
                  o.createElement(
                    i.Col,
                    { span: 24 },
                    o.createElement(u.default, {
                      questionnaire: g,
                      questionToEdit: a,
                      onChoiceEdited: m,
                      addChoice: r,
                      removeChoice: c,
                      addNewQuestion: p,
                      choiceData: d,
                      submitChoice: f,
                      isChoiceLoading: h,
                      onLinkChoiceToQuestion: y
                    })
                  )
                )
              )
            )
          )
        );
      };
    },
    688: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
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
      var i = o(n(0)),
        l = n(27),
        s = n(3),
        u = s.Select.Option,
        c = function() {
          return i.default.createElement("span", null, "Multi Choice");
        },
        p = function() {
          return i.default.createElement("span", null, "Rating Choice");
        },
        d = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.setFieldValues = function() {
                var e = n.props.choice;
                n.props.form.setFieldsValue({
                  choiceText: e.choiceText.trim()
                });
              }),
              (n.onSubmit = function(e) {
                e.preventDefault(),
                  console.log("here", n.props.choice),
                  n.props.submitChoice();
              }),
              (n.onChange = function(e, t) {
                console.log("choiceId,questionId", e, t),
                  "addNewQuestion" == t
                    ? n.props.addNewQuestion(e)
                    : n.props.onLinkChoiceToQuestion(t, e.id);
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {
              this.setFieldValues();
            }),
            (t.prototype.render = function() {
              var e = this.props,
                t = (e.questionType, e.removeChoice),
                n = e.choice,
                a = (e.addNewQuestion, e.form),
                o = e.questionnaire,
                d = (c(), c(), p(), p(), c(), c(), a.getFieldDecorator),
                m = a.isFieldsTouched,
                f = s.Form.Item,
                h = {},
                g = n.toQuestion;
              g && (h = { defaultValue: g.id });
              var y = { suffix: i.default.createElement("span", null) };
              return (
                m(["choiceText"]) &&
                  (y = {
                    suffix: i.default.createElement(
                      s.Button,
                      {
                        onClick: this.onSubmit,
                        type: "primary",
                        style: { margin: "auto" },
                        size: "small"
                      },
                      "Update"
                    )
                  }),
                i.default.createElement(
                  l.ErrorBoundary,
                  null,
                  i.default.createElement(
                    s.Row,
                    null,
                    i.default.createElement(
                      s.Col,
                      { span: 10 },
                      i.default.createElement(
                        s.Tooltip,
                        { title: "Choice Text" },
                        i.default.createElement(
                          s.Form,
                          {
                            labelCol: { span: 24 },
                            wrapperCol: { span: 24 },
                            onSubmit: this.onSubmit
                          },
                          i.default.createElement(
                            f,
                            null,
                            d("choiceText", { rules: [{ required: !0 }] })(
                              i.default.createElement(
                                s.Input,
                                r({ size: "large" }, y)
                              )
                            )
                          )
                        )
                      )
                    ),
                    i.default.createElement(
                      s.Col,
                      { span: 10 },
                      i.default.createElement(
                        s.Tooltip,
                        { title: "Added Question for this choice" },
                        i.default.createElement(
                          s.Select,
                          r({ placeholder: "Choose or add next question" }, h, {
                            onChange: this.onChange.bind(this, n),
                            style: { width: "100%" },
                            size: "large",
                            dropdownRender: function(e) {
                              return i.default.createElement("div", null, e);
                            }
                          }),
                          i.default.createElement(
                            u,
                            { key: "addNewQuestion" },
                            i.default.createElement(
                              "div",
                              { style: { padding: "8px", cursor: "pointer" } },
                              i.default.createElement(
                                s.Button,
                                { style: { margin: "auto", left: "15%" } },
                                " ",
                                i.default.createElement(s.Icon, {
                                  type: "plus"
                                }),
                                " Add new Question "
                              )
                            ),
                            i.default.createElement(s.Divider, {
                              style: { margin: "4px 0" }
                            })
                          ),
                          o.map(function(e) {
                            return i.default.createElement(
                              u,
                              {
                                style: { marginTop: "2px" },
                                key: e.id,
                                value: e.id
                              },
                              e.questionText
                            );
                          })
                        )
                      )
                    ),
                    i.default.createElement(
                      s.Col,
                      { span: 2 },
                      i.default.createElement(
                        s.Tooltip,
                        { title: "Remove choice" },
                        i.default.createElement(s.Button, {
                          onClick: function() {
                            return t(n);
                          },
                          type: "ghost",
                          shape: "circle",
                          icon: "close"
                        })
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component),
        m = s.Form.create({
          name: "ChoiceInput",
          onValuesChange: function(e, t) {
            e.onChoiceEdited(t, e.choice);
          }
        })(d);
      t.default = m;
    },
    689: function(e, t, n) {},
    691: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(n(0)),
        i = n(3),
        l = r(n(450)),
        s = r(n(451)),
        u = r(n(452));
      t.default = function(e) {
        var t = e.onQuestionEdited,
          n = e.onQuestionSubmitted,
          a = e.questionToEdit,
          r = e.addChoice,
          c = e.removeChoice,
          p = e.addNewQuestion,
          d = e.choiceData,
          m = e.questionType,
          f = (e.choiceToAddQuestion, e.submitChoice),
          h = e.isChoiceLoading,
          g = e.questionnaire,
          y = e.onLinkChoiceToQuestion,
          v = e.showButton,
          _ = e.onQuestionTypeEdit;
        return (
          console.log("new question addition", f),
          o.createElement(
            o.Fragment,
            null,
            o.createElement(
              i.Col,
              { span: 24 },
              o.createElement(l.default, {
                onQuestionTypeEdit: function() {
                  return _;
                },
                onQuestionEdited: function() {
                  return t;
                },
                questionToEdit: a,
                questionType: m
              })
            ),
            o.createElement(
              i.Col,
              { span: 22 },
              o.createElement(
                i.Col,
                { span: 24 },
                o.createElement(s.default, {
                  showButton: v,
                  onQuestionEdited: t,
                  onQuestionSubmitted: n,
                  questionToEdit: a,
                  style: { marginTop: "4%" }
                })
              ),
              o.createElement(
                i.Col,
                { span: 24 },
                o.createElement(u.default, {
                  onLinkChoiceToQuestion: y,
                  questionnaire: g,
                  questionToEdit: a,
                  addChoice: r,
                  removeChoice: c,
                  addNewQuestion: p,
                  choiceData: d,
                  submitChoice: f,
                  isChoiceLoading: h
                })
              )
            )
          )
        );
      };
    },
    692: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = o(n(0)),
        s = i(n(1275)),
        u = n(1333),
        c = n(27),
        p = n(3),
        d = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.getTextHeightWidth = function(e, t, a, r) {
                var o = document.createElement("div"),
                  i = document.createElement("div");
                (i.innerHTML = e),
                  i.setAttribute("style", "width:" + a + "px"),
                  (i.id = r + "-randomDiv"),
                  (o.style.width = a),
                  (o.style.opacity = -1),
                  o.append(i),
                  document.body.append(o);
                var l = document.getElementById(r + "-randomDiv"),
                  s = n.getStyle(l, "height");
                return o.remove(), Math.floor(s.replace(/[a-zA-Z]+/, ""));
              }),
              (n.getItemSize = function(e, t, a) {
                var r = n.props.questionnaire,
                  o = n.getTextHeightWidth(r[a].questionText, e, t, a);
                return o < 50 ? (o = 80) : (o += 80), o;
              }),
              (n.toggleClick = function(e) {
                n.props.questionnaire;
                n.props.onQuestionSelected(e);
              }),
              (n.getRow = function(e, t) {
                var a = n.props.questionnaire;
                return l.createElement(
                  "div",
                  { style: r({}, t) },
                  l.createElement(
                    c.CardBox,
                    null,
                    l.createElement(
                      "div",
                      {
                        onClick: function() {
                          n.toggleClick(e);
                        },
                        style: { cursor: "pointer" }
                      },
                      a[e].questionText
                    )
                  )
                );
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.getStyle = function(e, t) {
              var n = "";
              return (
                console.log("oElm", document.defaultView.getComputedStyle(e)),
                document.defaultView && document.defaultView.getComputedStyle
                  ? (n = document.defaultView
                      .getComputedStyle(e)
                      .getPropertyValue(t))
                  : e.currentStyle &&
                    ((t = t.replace(/\-(\w)/g, function(e, t) {
                      return t.toUpperCase();
                    })),
                    (n = e.currentStyle[t])),
                n
              );
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.props,
                n = (t.addNewQuestion, t.questionnaire);
              return l.createElement(
                c.ErrorBoundary,
                null,
                l.createElement(s.default, null, function(t) {
                  var a = t.height,
                    r = t.width;
                  return n.length > 0
                    ? l.createElement(
                        p.Row,
                        { style: { height: a, width: r } },
                        l.createElement(
                          p.Col,
                          { span: 24 },
                          l.createElement(
                            p.Row,
                            { type: "flex" },
                            l.createElement(
                              u.VariableSizeList,
                              {
                                estimatedItemSize: 120,
                                height: a,
                                itemCount: n.length,
                                itemSize: e.getItemSize.bind(e, a, r),
                                ref: e.props.reference,
                                width: r,
                                style: { paddingBottom: "6rem" }
                              },
                              function(t) {
                                var n = t.index,
                                  a = t.style;
                                return e.getRow(n, a);
                              }
                            )
                          )
                        )
                      )
                    : l.createElement(
                        p.Row,
                        { style: { height: a, width: r } },
                        l.createElement(
                          p.Col,
                          { span: 24 },
                          l.createElement(
                            p.Row,
                            { type: "flex", justify: "center" },
                            l.createElement(
                              p.Col,
                              null,
                              l.createElement(
                                p.Button,
                                {
                                  type: "dashed",
                                  onClick: function(t) {
                                    t.preventDefault(),
                                      e.props.addNewQuestion();
                                  }
                                },
                                l.createElement(p.Icon, { type: "plus" }),
                                " CreateQuestionnaire"
                              )
                            )
                          )
                        )
                      );
                })
              );
            }),
            t
          );
        })(l.Component);
      t.default = d;
    },
    693: function(e, t, n) {
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
        i = n(14),
        l = n(3),
        s = n(55),
        u = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.getTreeNodes = function(e) {
                l.TreeSelect.TreeNode;
                var t = [];
                for (var a in e) {
                  var r = null;
                  e.hasOwnProperty(a) &&
                    ((r = "object" == typeof e[a] ? n.getTreeNodes(e[a]) : a),
                    t.push(r));
                }
                return t;
              }),
              (n.state = { data: [] }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {
              var e = this.props.questionTypesQuery.questionTypes,
                t = this.getTreeNodes(e).flat(5);
              this.setState({ data: t });
            }),
            (t.prototype.componentDidUpdate = function(e) {
              if (
                this.props.questionTypesQuery.loading !==
                e.questionTypesQuery.loading
              ) {
                var t = this.props.questionTypesQuery.questionTypes,
                  n = this.getTreeNodes(t).flat(5);
                this.setState({ data: n });
              }
            }),
            (t.prototype.onCardClick = function(e) {
              this.unSupportedQuestionType(e)
                ? l.message.warn("Sorry, Question Type not supported yet!")
                : this.props.onQuestionTypeSelector(e);
            }),
            (t.prototype.unSupportedQuestionType = function(e) {
              return (
                "DICHOTOMOUS" === e ||
                "IMAGE" === e ||
                "VIDEO" === e ||
                "AUDIO" === e ||
                "NUMERIC" === e
              );
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state.data;
              console.log(this.props);
              var n = o.createElement(l.Icon, {
                type: "loading",
                style: { fontSize: 50 },
                spin: !0
              });
              return o.createElement(
                l.Row,
                { style: { height: "100%", overflowX: "scroll" } },
                this.props.questionTypesQuery.loading
                  ? o.createElement(
                      "div",
                      { className: "divCenter" },
                      o.createElement(l.Spin, { size: "large", indicator: n }),
                      " "
                    )
                  : o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(
                        l.Col,
                        { style: { margin: "1rem" }, span: 22 },
                        "Question Type"
                      ),
                      o.createElement(
                        l.Col,
                        { span: 22 },
                        o.createElement(l.List, {
                          grid: { gutter: 16, column: 3 },
                          dataSource: t,
                          renderItem: function(t) {
                            return o.createElement(
                              l.List.Item,
                              null,
                              o.createElement(
                                l.Card,
                                {
                                  style: {
                                    cursor: "pointer",
                                    backgroundColor: e.unSupportedQuestionType(
                                      t
                                    )
                                      ? "#e6e6e6"
                                      : "#FFF"
                                  },
                                  onClick: function(n) {
                                    return e.onCardClick(t);
                                  }
                                },
                                t.replace("_", " ")
                              )
                            );
                          }
                        })
                      )
                    )
              );
            }),
            t
          );
        })(o.Component);
      t.default = i.compose(
        i.graphql(s.QUESTION_TYPES, {
          name: "questionTypesQuery",
          options: { fetchPolicy: "cache-first" }
        })
      )(u);
    },
    694: function(e, t, n) {
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
        l = n(3),
        s = o(n(695)),
        u = o(n(715)),
        c = n(14),
        p = n(55),
        d = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.goTopreviousQuestion = function() {
                var e = n.state.counter - 1;
                e < 0
                  ? n.setState({ isFirstQuestion: !0 })
                  : n.setState({
                      counter: e,
                      isFirstQuestion: !1,
                      isLastQuestion: !1
                    });
              }),
              (n.onTransitionChange = function(e) {
                n.setState({ transition: e });
              }),
              (n.onLayoutChange = function(e) {
                n.setState({ layoutCode: e });
              }),
              (n.onFormStructureChange = function(e) {
                n.setState({ formStructure: e });
              }),
              (n.onColorUpdate = function(e) {
                n.setState({ backgroundColor: e });
              }),
              (n.onAccentColorUpdate = function(e) {
                n.setState({ accentColor: e });
              }),
              (n.nextQuestion = function() {
                var e = n.state.counter + 1;
                e >= n.props.questionnaire.length
                  ? n.setState({ isLastQuestion: !0 })
                  : n.setState({
                      counter: e,
                      isLastQuestion: !1,
                      isFirstQuestion: !1
                    });
              }),
              (n.state = {
                counter: 0,
                isLastQuestion: !1,
                isFirstQuestion: !1,
                backgroundColor: "#891732",
                accentColor: "#891732",
                transition: "",
                formStructure: "",
                headerText: "",
                exitMessage: "",
                buttonText: "Next",
                layoutCode: ""
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props.questionnaire,
                t = this.state,
                n = t.counter,
                a = t.isLastQuestion,
                r = t.isFirstQuestion,
                o = t.backgroundColor,
                c = t.accentColor,
                p = t.buttonText,
                d = t.exitMessage,
                m = t.formStructure,
                f = t.headerText,
                h = t.layoutCode,
                g = t.transition;
              return e && e[n]
                ? i.createElement(
                    l.Row,
                    null,
                    i.createElement(
                      l.Col,
                      { span: 17 },
                      i.createElement(s.default, {
                        accentColor: c,
                        buttonText: p,
                        exitMessage: d,
                        formStructure: m,
                        headerText: f,
                        layoutCode: h,
                        transition: g,
                        color: o,
                        isFirstQuestion: r,
                        question: e[n],
                        nextQuestion: this.nextQuestion,
                        goTopreviousQuestion: this.goTopreviousQuestion,
                        isLastQuestion: a
                      })
                    ),
                    i.createElement(
                      l.Col,
                      {
                        span: 7,
                        style: { height: "inherit", overflow: "scroll" }
                      },
                      i.createElement(u.default, {
                        onAccentColorUpdate: this.onAccentColorUpdate,
                        onFormStructureChange: this.onFormStructureChange,
                        onLayoutChange: this.onLayoutChange,
                        onTransitionChange: function() {},
                        onCOlorUpdate: this.onColorUpdate
                      })
                    )
                  )
                : i.createElement(l.Spin, null);
            }),
            t
          );
        })(i.Component);
      t.default = c.compose(
        c.graphql(p.UPDATE_FEEDBACK_UI_CONFIG, {
          name: "updateFeedbackUiConfig"
        })
      )(d);
    },
    695: function(e, t, n) {
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
        l = n(3),
        s = o(n(696)),
        u = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.warning = function() {}),
              (t.newWarning = function() {
                l.message.warning("This is first question");
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.question,
                n = e.nextQuestion,
                a = e.isLastQuestion,
                r = e.goTopreviousQuestion,
                o = e.isFirstQuestion,
                u = e.color;
              return (
                console.log(a),
                i.createElement(
                  l.Row,
                  { gutter: 16, style: { backgroundColor: "white" } },
                  i.createElement(
                    l.Col,
                    { span: 24 },
                    i.createElement(
                      l.Card,
                      null,
                      i.createElement(
                        l.Row,
                        null,
                        i.createElement(l.Col, { span: 8 }),
                        i.createElement(
                          l.Col,
                          { span: 12 },
                          i.createElement(s.default, {
                            color: u,
                            isFirstQuestion: o,
                            question: t,
                            nextQuestion: n,
                            goTopreviousQuestion: r,
                            isLastQuestion: a
                          })
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
      t.default = u;
    },
    696: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var i = r(n(0)),
        l = n(3),
        s = o(n(698)),
        u = n(705),
        c = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.warning = function() {}),
              (n.newWarning = function() {
                l.message.warning("This is first question");
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.question,
                n = e.nextQuestion,
                a = e.isLastQuestion,
                r = e.goTopreviousQuestion,
                o = e.isFirstQuestion,
                c = e.color;
              return i.createElement(
                u.Nexus5,
                null,
                i.createElement(
                  l.Row,
                  null,
                  i.createElement(
                    l.Col,
                    { style: { width: "100%", height: "100%" } },
                    a ? this.warning() : null,
                    o ? this.newWarning() : null,
                    i.createElement(s.default, {
                      color: c,
                      question: t,
                      nextQuestion: n,
                      goTopreviousQuestion: r
                    })
                  )
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = c;
    },
    698: function(e, t, n) {
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
        l = n(3),
        s = l.Layout.Header;
      l.Layout.Content, l.Layout.Footer;
      n(699);
      var u = o(n(701)),
        c = o(n(702)),
        p = o(n(703)),
        d = o(n(704)),
        m = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.goBack = function() {
                n.props.goTopreviousQuestion();
              }),
              (n.onHandleNext = function(e) {
                n.props.nextQuestion();
              }),
              (n.onChange = function(e) {
                console.log("radio checked", e.target.value),
                  n.setState({ value: e.target.value });
              }),
              (n.onChangeMultiple = function(e) {
                console.log("checked = ", e);
              }),
              (n.onChangeText = function(e) {
                var t = e.target.value;
                n.setState({ textValue: t });
              }),
              (n.handleChangeRate = function(e) {
                n.setState({ rateValue: e });
              }),
              (n.getChoices = function(e) {
                var t = {
                  display: "block",
                  height: "40px",
                  lineHeight: "40px",
                  width: "50px"
                };
                switch (e.type) {
                  case "SINGLE_ANSWER":
                    return i.createElement(u.default, {
                      question: e,
                      onChange: n.onChange,
                      radioStyle: t,
                      value: n.state.value
                    });
                  case "TEXT":
                    return i.createElement(p.default, {
                      value: n.state.textValue,
                      onChange: n.onChangeText
                    });
                  case "MULTIPLE_ANSWER":
                    return i.createElement(c.default, {
                      question: e,
                      onChange: n.onChangeMultiple,
                      radioStyle: t
                    });
                  case "RATING_SCALE":
                    return i.createElement(d.default, {
                      character: "star",
                      question: e,
                      onChange: n.handleChangeRate,
                      value: n.state.rateValue
                    });
                  case "OPINION_SCALE":
                    return i.createElement(d.default, {
                      character: "smile",
                      question: e,
                      onChange: n.handleChangeRate,
                      value: n.state.rateValue
                    });
                }
              }),
              (n.state = {
                backgroundColor: "#891732",
                transitions: "vertical",
                logo: "",
                templateStructure: 1,
                title: "This will be title",
                subtitle: "This will be subtitle",
                value: 1,
                buttonColor: "red",
                textValue: "",
                rateValue: 0
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this.state,
                t =
                  (e.backgroundColor,
                  e.templateStructure,
                  e.transitions,
                  e.logo,
                  e.subtitle,
                  e.title,
                  e.buttonColor,
                  this.props),
                n = t.question,
                a = t.color;
              return i.createElement(
                l.Layout,
                {
                  className: "layout",
                  style: { height: "100%", backgroundColor: "white" }
                },
                i.createElement(
                  s,
                  { style: { backgroundColor: a } },
                  i.createElement(
                    l.Button,
                    {
                      style: { backgroundColor: a, border: "0px" },
                      onClick: this.goBack
                    },
                    i.createElement(l.Icon, { type: "left" })
                  ),
                  i.createElement("div", { className: "logo" })
                ),
                i.createElement(
                  "div",
                  {
                    style: {
                      minHeight: "31rem",
                      padding: "0 40px",
                      marginTop: "10px"
                    }
                  },
                  i.createElement(
                    l.Row,
                    null,
                    i.createElement(
                      l.Col,
                      { style: { marginTop: "10px" } },
                      i.createElement(
                        "h3",
                        { style: { textAlign: "center" } },
                        n ? n.questionText : ""
                      )
                    )
                  ),
                  i.createElement(
                    l.Row,
                    null,
                    i.createElement(
                      l.Col,
                      { style: { marginTop: "10px" } },
                      this.getChoices(n)
                    )
                  )
                ),
                i.createElement(
                  "footer",
                  null,
                  i.createElement(
                    "div",
                    { className: "error-text" },
                    "error message"
                  ),
                  i.createElement(
                    "div",
                    { style: { width: "60%", float: "right" } },
                    i.createElement(
                      l.Button,
                      {
                        style: { width: "100%", backgroundColor: a },
                        onClick: this.onHandleNext
                      },
                      "Next"
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = m;
    },
    699: function(e, t, n) {},
    701: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      t.default = function(e) {
        var t = e.question,
          n = e.value,
          a = e.radioStyle,
          i = e.onChange;
        return r.createElement(
          o.Radio.Group,
          { onChange: i, value: n },
          t.choices.map(function(e) {
            return r.createElement(
              o.Radio,
              { style: a, key: e.id, value: e.id },
              e.choiceText
            );
          })
        );
      };
    },
    702: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      t.default = function(e) {
        var t = e.question,
          n = e.value,
          a = e.radioStyle,
          i = e.onChange;
        return r.createElement(
          o.Checkbox.Group,
          { onChange: i, value: n },
          t.choices.map(function(e) {
            return r.createElement(
              o.Checkbox,
              { style: a, key: e.id, value: e.id },
              e.choiceText
            );
          })
        );
      };
    },
    703: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3).Input.TextArea;
      t.default = function(e) {
        e.question;
        var t = e.value,
          n = (e.radioStyle, e.onChange);
        return r.createElement(o, {
          value: t,
          onChange: n,
          autosize: { minRows: 3, maxRows: 5 }
        });
      };
    },
    704: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(3);
      t.default = function(e) {
        var t = e.question,
          n = e.value,
          a = (e.radioStyle, e.onChange),
          i = e.character;
        return r.createElement(
          o.Row,
          null,
          r.createElement(
            o.Col,
            { span: 24 },
            r.createElement(
              "span",
              null,
              r.createElement(o.Rate, {
                character: r.createElement(o.Icon, {
                  type: i || "star",
                  theme: "filled"
                }),
                tooltips: ["terrible", "bad", "normal", "good", "wonderful"],
                onChange: a,
                value: n,
                count: t.rangeMax - 1
              })
            )
          )
        );
      };
    },
    705: function(e, t, n) {
      "use strict";
      var a =
        (this && this.__importDefault) ||
        function(e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = a(n(706));
      t.Iphone5c = r.default;
      var o = a(n(707));
      t.IphoneX = o.default;
      var i = a(n(708));
      t.Nexus5 = i.default;
      var l = a(n(709));
      t.Iphone8 = l.default;
      var s = a(n(710));
      t.Iphone8plus = s.default;
      var u = a(n(711));
      t.HtcOne = u.default;
      var c = a(n(712));
      t.MacBookPro = c.default;
      var p = a(n(713));
      t.Galaxys5 = p.default;
      var d = a(n(714));
      t.Lumia920 = d.default;
    },
    706: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "marvel-device iphone5c green" },
                o.createElement("div", { className: "top-bar" }),
                o.createElement("div", { className: "sleep" }),
                o.createElement("div", { className: "volume" }),
                o.createElement("div", { className: "camera" }),
                o.createElement("div", { className: "sensor" }),
                o.createElement("div", { className: "speaker" }),
                o.createElement(
                  "div",
                  { className: "screen" },
                  this.props.children
                ),
                o.createElement("div", { className: "home" }),
                o.createElement("div", { className: "bottom-bar" })
              );
            }),
            t
          );
        })(o.Component);
      t.default = i;
    },
    707: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "marvel-device iphone-x" },
                o.createElement(
                  "div",
                  { className: "notch" },
                  o.createElement("div", { className: "camera" }),
                  o.createElement("div", { className: "speaker" })
                ),
                o.createElement("div", { className: "top-bar" }),
                o.createElement("div", { className: "sleep" }),
                o.createElement("div", { className: "bottom-bar" }),
                o.createElement("div", { className: "volume" }),
                o.createElement(
                  "div",
                  { className: "overflow" },
                  o.createElement("div", { className: "shadow shadow--tr" }),
                  o.createElement("div", { className: "shadow shadow--tl" }),
                  o.createElement("div", { className: "shadow shadow--br" }),
                  o.createElement("div", { className: "shadow shadow--bl" })
                ),
                o.createElement("div", { className: "inner-shadow" }),
                o.createElement(
                  "div",
                  { className: "screen" },
                  this.props.children
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = i;
    },
    708: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "marvel-device nexus5" },
                o.createElement("div", { className: "top-bar" }),
                o.createElement("div", { className: "sleep" }),
                o.createElement("div", { className: "volume" }),
                o.createElement("div", { className: "camera" }),
                o.createElement(
                  "div",
                  { className: "screen" },
                  this.props.children
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = i;
    },
    709: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "marvel-device iphone8 silver" },
                o.createElement("div", { className: "top-bar" }),
                o.createElement("div", { className: "sleep" }),
                o.createElement("div", { className: "volume" }),
                o.createElement("div", { className: "camera" }),
                o.createElement("div", { className: "sensor" }),
                o.createElement("div", { className: "speaker" }),
                o.createElement(
                  "div",
                  { className: "screen" },
                  this.props.children
                ),
                o.createElement("div", { className: "home" }),
                o.createElement("div", { className: "bottom-bar" })
              );
            }),
            t
          );
        })(o.Component);
      t.default = i;
    },
    710: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "marvel-device iphone8plus black" },
                o.createElement("div", { className: "top-bar" }),
                o.createElement("div", { className: "sleep" }),
                o.createElement("div", { className: "volume" }),
                o.createElement("div", { className: "camera" }),
                o.createElement("div", { className: "sensor" }),
                o.createElement("div", { className: "speaker" }),
                o.createElement(
                  "div",
                  { className: "screen" },
                  this.props.children
                ),
                o.createElement("div", { className: "home" }),
                o.createElement("div", { className: "bottom-bar" })
              );
            }),
            t
          );
        })(o.Component);
      t.default = i;
    },
    711: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "marvel-device htc-one" },
                o.createElement("div", { className: "top-bar" }),
                o.createElement("div", { className: "camera" }),
                o.createElement("div", { className: "sensor" }),
                o.createElement("div", { className: "speaker" }),
                o.createElement(
                  "div",
                  { className: "screen" },
                  this.props.children
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = i;
    },
    712: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "marvel-device macbook" },
                o.createElement("div", { className: "top-bar" }),
                o.createElement("div", { className: "camera" }),
                o.createElement(
                  "div",
                  { className: "screen" },
                  this.props.children
                ),
                o.createElement("div", { className: "bottom-bar" })
              );
            }),
            t
          );
        })(o.Component);
      t.default = i;
    },
    713: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "marvel-device s5 white landscape" },
                o.createElement("div", { className: "top-bar" }),
                o.createElement("div", { className: "sleep" }),
                o.createElement("div", { className: "camera" }),
                o.createElement("div", { className: "sensor" }),
                o.createElement("div", { className: "speaker" }),
                o.createElement(
                  "div",
                  { className: "screen" },
                  this.props.children
                ),
                o.createElement("div", { className: "home" })
              );
            }),
            t
          );
        })(o.Component);
      t.default = i;
    },
    714: function(e, t, n) {
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
      Object.defineProperty(t, "__esModule", { value: !0 }), n(79);
      var o = r(n(0)),
        i = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return o.createElement(
                "div",
                { className: "marvel-device lumia920 yellow" },
                o.createElement("div", { className: "top-bar" }),
                o.createElement("div", { className: "volume" }),
                o.createElement("div", { className: "camera" }),
                o.createElement("div", { className: "speaker" }),
                o.createElement(
                  "div",
                  { className: "screen" },
                  this.props.children
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = i;
    },
    715: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = o(n(0)),
        s = n(3),
        u = i(n(716)),
        c = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.onColorChange = function(e) {
                n.setState({ color: e }), n.props.onCOlorUpdate(e);
              }),
              (n.onChange = function(e) {
                n.setState(function(t) {
                  var n;
                  return r(
                    {},
                    t,
                    (((n = {})[e.target.name] = e.target.value), n)
                  );
                });
              }),
              (n.state = {
                template: "",
                transition: "",
                layout: "",
                color: ""
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return l.createElement(
                s.Row,
                { gutter: 16 },
                l.createElement(
                  s.Col,
                  { span: 24 },
                  l.createElement(
                    s.Card,
                    {
                      style: { backgroundColor: "#EAECEB", minHeight: "100vh" }
                    },
                    l.createElement(
                      s.Row,
                      null,
                      l.createElement(
                        s.Col,
                        { span: 24 },
                        l.createElement("h5", null, "Template Structure"),
                        l.createElement(
                          s.Radio.Group,
                          {
                            name: "template",
                            onChange: this.onChange,
                            value: this.state.template
                          },
                          l.createElement(
                            s.Radio,
                            { value: "one per Page" },
                            "one per Page"
                          ),
                          l.createElement(
                            s.Radio,
                            { value: "Long Form" },
                            "Long Form"
                          )
                        )
                      )
                    ),
                    l.createElement(s.Divider, null),
                    l.createElement(
                      s.Row,
                      null,
                      l.createElement(
                        s.Col,
                        { span: 24 },
                        l.createElement("h5", null, "Transition"),
                        l.createElement(
                          s.Radio.Group,
                          {
                            name: "transition",
                            onChange: this.onChange,
                            value: this.state.transition
                          },
                          l.createElement(
                            s.Radio,
                            { value: "Horizontal" },
                            "Horizontal"
                          ),
                          l.createElement(
                            s.Radio,
                            { value: "Vertical" },
                            "Vertical"
                          )
                        )
                      )
                    ),
                    l.createElement(s.Divider, null),
                    l.createElement(s.Divider, null),
                    l.createElement(
                      s.Row,
                      null,
                      l.createElement(
                        s.Col,
                        { span: 24 },
                        l.createElement("h5", null, "Layout"),
                        l.createElement(
                          s.Radio.Group,
                          {
                            name: "layout",
                            onChange: this.onChange,
                            value: this.state.layout
                          },
                          l.createElement(
                            s.Radio,
                            { value: "Style 1" },
                            "Style 1"
                          ),
                          l.createElement(
                            s.Radio,
                            { value: "Style 2" },
                            "Style 2"
                          )
                        )
                      )
                    ),
                    l.createElement(s.Divider, null),
                    l.createElement(
                      s.Row,
                      null,
                      l.createElement(
                        s.Col,
                        { span: 24 },
                        l.createElement("h5", null, "Color"),
                        l.createElement(
                          s.Radio.Group,
                          {
                            name: "color",
                            onChange: this.onChange,
                            value: this.state.color
                          },
                          l.createElement(
                            "span",
                            null,
                            "Backgroundcolor  ",
                            l.createElement(u.default, {
                              colorChange: this.onColorChange
                            })
                          ),
                          l.createElement(
                            "span",
                            null,
                            "Accent ",
                            l.createElement(u.default, null)
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
        })(l.Component);
      t.default = c;
    },
    716: function(e, t, n) {
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
        l = o(n(44)),
        s = n(617),
        u = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.handleClick = function() {
                n.setState({ displayColorPicker: !n.state.displayColorPicker }),
                  n.props.colorChange(n.state.hex);
              }),
              (n.handleClose = function() {
                n.setState({ displayColorPicker: !1 });
              }),
              (n.handleChange = function(e) {
                n.setState({ color: e.rgb, hex: e.hex }),
                  n.props.colorChange(e.hex);
              }),
              (n.state = {
                displayColorPicker: !1,
                color: { r: "241", g: "112", b: "19", a: "1" },
                hex: ""
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = l.default({
                default: {
                  color: {
                    width: "36px",
                    height: "14px",
                    borderRadius: "2px",
                    background:
                      "rgba(" +
                      this.state.color.r +
                      ", " +
                      this.state.color.g +
                      ", " +
                      this.state.color.b +
                      ", " +
                      this.state.color.a +
                      ")"
                  },
                  swatch: {
                    padding: "5px",
                    background: "#fff",
                    borderRadius: "1px",
                    boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
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
                  }
                }
              });
              return i.createElement(
                "div",
                null,
                i.createElement(
                  "div",
                  { style: e.swatch, onClick: this.handleClick },
                  i.createElement("div", { style: e.color })
                ),
                this.state.displayColorPicker
                  ? i.createElement(
                      "div",
                      { style: e.popover },
                      i.createElement("div", {
                        style: e.cover,
                        onClick: this.handleClose
                      }),
                      i.createElement(s.SketchPicker, {
                        color: this.state.color,
                        onChange: this.handleChange
                      })
                    )
                  : null
              );
            }),
            t
          );
        })(i.Component);
      t.default = u;
    },
    717: function(e, t, n) {},
    719: function(e, t, n) {
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
        o =
          (this && this.__assign) ||
          function() {
            return (o =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        i =
          (this && this.__awaiter) ||
          function(e, t, n, a) {
            return new (n || (n = Promise))(function(r, o) {
              function i(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                try {
                  s(a.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                e.done
                  ? r(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(i, l);
              }
              s((a = a.apply(e, t || [])).next());
            });
          },
        l =
          (this && this.__generator) ||
          function(e, t) {
            var n,
              a,
              r,
              o,
              i = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1];
                  return r[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function() {
                  return this;
                }),
              o
            );
            function l(o) {
              return function(l) {
                return (function(o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((n = 1),
                        a &&
                          (r =
                            2 & o[0]
                              ? a.return
                              : o[0]
                              ? a.throw || ((r = a.return) && r.call(a), 0)
                              : a.next) &&
                          !(r = r.call(a, o[1])).done)
                      )
                        return r;
                      switch (((a = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                        case 0:
                        case 1:
                          r = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (a = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!r || (o[1] > r[0] && o[1] < r[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < r[1]) {
                            (i.label = r[1]), (r = o);
                            break;
                          }
                          if (r && i.label < r[2]) {
                            (i.label = r[2]), i.ops.push(o);
                            break;
                          }
                          r[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = t.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (a = 0);
                    } finally {
                      n = r = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
              };
            }
          },
        s =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        u =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }), n(720);
      var c = s(n(0)),
        p = n(3),
        d = u(n(446)),
        m = u(n(374)),
        f = n(30);
      n(359);
      var h,
        g = u(n(430)),
        y = u(n(448)),
        v = n(30),
        _ = u(n(449)),
        E = u(n(453)),
        b = u(n(38)),
        C = n(14),
        S = u(n(454)),
        T = u(n(375)),
        x = n(55),
        O = n(342),
        w = u(n(33)),
        I = n(37),
        A = n(27),
        N = [
          { value: "SMS", title: "SMS" },
          { value: "EMAIL", title: "EMAIL" }
        ],
        P = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.onTestAndControlEdit = function() {
                n.setState({ showTestAndControl: !0 });
              }),
              (n.onChange = function(e) {
                n.setState({ current: e });
              }),
              (n.createFeedbackForm = function(e) {
                return i(n, void 0, void 0, function() {
                  var t, n, a, r;
                  return l(this, function(o) {
                    switch (o.label) {
                      case 0:
                        (t = this.state.formName),
                          (n = this.props.client),
                          (o.label = 1);
                      case 1:
                        return (
                          o.trys.push([1, 3, , 4]),
                          [
                            4,
                            n.mutate({
                              mutation: x.CREATE_FEEDBACK_FORM,
                              variables: { campaignId: e, formName: t }
                            })
                          ]
                        );
                      case 2:
                        return (a = o.sent()), console.log(a), [2, a];
                      case 3:
                        return (r = o.sent()), console.log(r), [3, 4];
                      case 4:
                        return [2];
                    }
                  });
                });
              }),
              (n.createCampaign = function(e) {
                return i(n, void 0, void 0, function() {
                  var t, n, a, r, i, s, u, c, p;
                  return l(this, function(l) {
                    switch (l.label) {
                      case 0:
                        (t = this.props.client),
                          (n = this.state),
                          (a = n.priorityChosen),
                          (r = n.controlValue),
                          (i = w.default.decode(localStorage.getItem("jwt"))
                            .org_id),
                          (s = o({}, e, {
                            priority: parseInt(a),
                            campaignControlPercent: parseInt(r),
                            organization_id: i,
                            campaignType: O.CAMPAIGN_TYPE
                          })),
                          this.setState({ loading: !0 }),
                          (l.label = 1);
                      case 1:
                        return (
                          l.trys.push([1, 4, , 5]),
                          [
                            4,
                            t.mutate({
                              mutation: x.CREATE_CAMPAIGN,
                              variables: { input: s }
                            })
                          ]
                        );
                      case 2:
                        return (
                          (u = l.sent()),
                          console.log("createCampaign...", u),
                          [4, this.createFeedbackForm(u.data.createCampaign.id)]
                        );
                      case 3:
                        return (
                          (c = l.sent()),
                          this.setState({
                            loading: !1,
                            campaign: u.data.createCampaign,
                            feedbackForm: c.data.createFeedbackForm
                          }),
                          u.data.createCampaign.id &&
                            this.props.history.push({
                              pathname:
                                "/refinex/feedback/" +
                                u.data.createCampaign.id +
                                "/edit",
                              state: { current: this.state.current + 1 }
                            }),
                          [3, 5]
                        );
                      case 4:
                        return (p = l.sent()), console.log(p), [3, 5];
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (n.ruleQuery = function(e) {
                var t = w.default.decode(localStorage.getItem("jwt")).org_id,
                  a = {
                    name: Math.random()
                      .toString(36)
                      .substring(7),
                    description: "",
                    type: "SIMPLE",
                    organizationId: t,
                    status: "ACTIVE",
                    ruleConfiguration: JSON.stringify(n.state.query)
                  };
                n.props
                  .rule({ variables: { input: a } })
                  .then(function(t) {
                    if ((console.log("Trigger Rule data...", t), 2 == e))
                      var a = { audienceFilterRule: t.data.createRule.id };
                    if (3 == e) t.data.createRule.id;
                    n.props
                      .updateCampaign({
                        variables: { id: n.state.campaign.id, input: a }
                      })
                      .then(function(e) {
                        console.log("Update campaign data..", e);
                      });
                  })
                  .catch(function(e) {
                    console.log("Error creating the question", e);
                  });
              }),
              (n.createCommunicationMutation = function(e, t) {
                console.log("message format..", n.state.communicationSelected);
                var a = w.default.decode(localStorage.getItem("jwt")).org_id,
                  r = {
                    name: n.props.campaign.campaign.name,
                    description: "",
                    messageFormat: n.state.communicationSelected,
                    templateBodyText:
                      "SMS" == n.state.communicationSelected
                        ? t.smsBody
                        : t.email_body,
                    templateSubjectText:
                      "SMS" == n.state.communicationSelected
                        ? t.smsTag
                        : t.email_subject,
                    templateStyle: O.TEMPLATE_STYLE,
                    organization_id: a,
                    status: "ACTIVE"
                  };
                n.props
                  .messageTemplate({ variables: { input: r } })
                  .then(function(e) {
                    console.log("MessageTemplate data..", e);
                    var t = w.default.decode(localStorage.getItem("jwt"))
                        .org_id,
                      a = {
                        entityId: n.props.campaign.campaign.id,
                        entityType: "Campaign",
                        messageTemplateId: e.data.createMessageTemplate.id,
                        isScheduled: !0,
                        isRepeatable: !1,
                        organization_id: t,
                        status: "ACTIVE",
                        firstScheduleDateTime:
                          n.props.campaign.campaign.startTime,
                        commsChannelName: "Test"
                      };
                    n.props
                      .communication({ variables: { input: a } })
                      .then(function(e) {
                        console.log("Communication data..", e),
                          console.log(
                            "this.setState...",
                            e.data.createCommunication
                          ),
                          n.setState({
                            communications: e.data.createCommunication
                          });
                      })
                      .catch(function(e) {
                        console.log("Error creating for communication", e);
                      });
                  })
                  .catch(function(e) {
                    console.log("Error creating for message template", e);
                  });
              }),
              (n.onFormNext = function(e) {
                console.log("e", e), e.preventDefault();
              }),
              (n.saveFormRef = function(e) {
                n.formRef = e;
              }),
              (n.onControlValueChange = function(e) {
                n.setState({ controlValue: e });
              }),
              (n.onTestValueChange = function(e) {
                n.setState({ testValue: e });
              }),
              (n.applyTestControlChange = function() {
                var e = n.state,
                  t = e.testValue,
                  a = e.controlValue;
                n.setState({
                  testControlSelected: t + " % - " + a + "%",
                  showTestAndControl: !1
                });
              }),
              (n.onPriorityButtonClick = function(e) {
                e.preventDefault();
              }),
              (n.handleButtonGroupChange = function(e) {
                console.log(e), n.setState({ priorityChosen: e.target.value });
              }),
              (n.setFeedbackForm = function(e, t) {
                console.log(e), n.setState({ formName: e });
              }),
              (n.getContainer = function() {
                var e = n.state,
                  t = e.formValues,
                  a = e.showTestAndControl,
                  r = e.testValue,
                  o = e.controlValue,
                  i = e.testControlSelected,
                  l = e.campaign,
                  s = e.feedbackForm,
                  u = e.formName;
                console.log("This.state...", n.state);
                var p =
                  n.props.allAttributes &&
                  n.props.allAttributes.ruleAttributes &&
                  n.props.allAttributes.ruleAttributes.map(function(e) {
                    return {
                      name: e.attributeName,
                      id: e.id,
                      label: e.attributeName
                    };
                  });
                switch (n.state.current) {
                  case 0:
                    return c.createElement(d.default, {
                      setFeedbackForm: n.setFeedbackForm,
                      subTitle: "Basic information",
                      formName: u,
                      onFormNext: n.onFormNext,
                      saveFormRef: n.saveFormRef,
                      formValues: t,
                      testAndControlText: "Test & Control",
                      promptText: "prompt text",
                      toolTipText: "what is test and control?",
                      prioritySelectionTitle: "Survey Priority",
                      priorityButtonText: "Custom no",
                      testControlTitle: "Test & Control",
                      testControlPercentage: i || "95% - 5%",
                      handleButtonGroupChange: n.handleButtonGroupChange,
                      testControlPercentageEditText: "Edit",
                      onPriorityButtonClick: n.onPriorityButtonClick,
                      priorityNumberInvalidErrorMessage:
                        "Enter a value between 6 and 99",
                      onTestAndControlEdit: n.onTestAndControlEdit,
                      showTestAndControl: a,
                      popupTitle: "Test & Control",
                      handleOk: function() {
                        return console.log("okay");
                      },
                      handleCancel: function() {
                        return console.log("cancel");
                      },
                      applyTestControlChange: n.applyTestControlChange,
                      popupbodyText:
                        "Divide customers selected for a specific audience into local test and local control\n            groups",
                      controlValue: o,
                      testValue: r,
                      maxValueAllowed: 75,
                      onTestValueChange: n.onTestValueChange,
                      onControlValueChange: n.onControlValueChange,
                      popupButtonText: "apply",
                      showFeedbackFormType: !0
                    });
                  case 1:
                    return c.createElement(_.default, {
                      campaign: l,
                      feedbackForm: s
                    });
                  case 2:
                    return c.createElement(
                      A.CustomScrollbars,
                      null,
                      c.createElement(m.default, {
                        audienceTitle: "Audience",
                        segmentSubTitle: "Segment",
                        onValuesSelected: function() {
                          return console.log("value selected");
                        },
                        segmentSelectionData: n.props.segmentList.segments,
                        uploadCsvText: "Upload CSV",
                        segmentFilterText: "Filter",
                        segmentFilterSubText: "Campaign applies to :",
                        attributeData: p,
                        logQuery: function(e) {
                          return console.log(e);
                        }
                      })
                    );
                  case 3:
                    return c.createElement(y.default, {
                      applications:
                        n.props.allApplications.organization.applications,
                      attributeData: p,
                      logQuery: function(e) {
                        return console.log(e);
                      }
                    });
                  case 4:
                    return c.createElement(g.default, {
                      subTitle: "Communication",
                      onChange: function() {
                        return console.log("communication change");
                      },
                      communicationData: N,
                      defaultValue: n.state.communicationSelected,
                      value: n.state.communicationSelected,
                      commWrappedComponentRef: function() {
                        return console.log("reference");
                      },
                      communicationFormValues: n.state.communicationFormValues,
                      emailFormRef: function() {
                        return console.log("reference");
                      },
                      emailFormData: n.state.communicationFormValues,
                      onFormNext: n.onFormNext
                    });
                  default:
                    return c.createElement(v.campaignOverview, {
                      campaign: n.state.campaign,
                      communication: n.state.communication
                    });
                }
              }),
              (n.state = {
                communication: "",
                communications: "",
                feedbackForm: "",
                current: 0,
                loading: !1,
                priorityChosen: 3,
                priorityNumberError: !1,
                showTestAndControl: !1,
                testValue: 95,
                controlValue: 5,
                testControlSelected: "",
                communicationSelected: "SMS",
                communicationFormValues: {},
                formValues: {},
                campaign: {},
                segmentList: {},
                attributeData: {},
                query: { id: "1", combinator: "and", rules: [] },
                formName: "default",
                stepperData: [
                  { title: "Basic Info" },
                  { title: "Form" },
                  { title: "Audience" },
                  { title: "Trigger" },
                  { title: "Communication" },
                  { title: "Overview" }
                ]
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {
              var e = this.props.location;
              if (
                e &&
                e.state &&
                e.state.campaignSelected &&
                "" !== e.state.campaignSelected.name
              ) {
                var t = o({}, e.state.campaignSelected, {
                  name: e.state.campaignSelected.name + " copy 1"
                });
                this.setState({ campaign: t, formValues: t });
              }
            }),
            (t.prototype.goToNextPage = function(e) {
              var t = this,
                n = this.state.formValues;
              if (
                (2 == this.state.current && this.ruleQuery(this.state.current),
                3 == this.state.current && this.ruleQuery(this.state.current),
                T.default(n))
              ) {
                var a =
                  this.formRef && this.formRef.props && this.formRef.props.form;
                if (a) {
                  var r = a.getFieldValue("name"),
                    o = a.getFieldValue("startTime"),
                    s = a.getFieldValue("endTime");
                  if (0 === r.length || void 0 === r || null === r)
                    return void p.message.warning("Survey name is mandatory");
                  if (void 0 === o || null === o)
                    return void p.message.warning("Start Date is mandatory");
                  if (void 0 === s || null === s)
                    return void p.message.warning("End Date is mandatory");
                  a.validateFields(function(n, a) {
                    return i(t, void 0, void 0, function() {
                      return l(this, function(t) {
                        switch (t.label) {
                          case 0:
                            return n ? [2] : [3, 1];
                          case 1:
                            switch (e) {
                              case 1:
                                return [3, 2];
                            }
                            return [3, 4];
                          case 2:
                            return [4, this.createCampaign(a)];
                          case 3:
                            t.sent(), (t.label = 4);
                          case 4:
                            this.setState({ formValues: a, current: e }),
                              (t.label = 5);
                          case 5:
                            return [2];
                        }
                      });
                    });
                  });
                }
              } else this.setState({ current: e });
            }),
            (t.prototype.render = function() {
              var e = this.state,
                t = e.current,
                n = e.stepperData;
              e.loading;
              return c.createElement(
                "div",
                null,
                c.createElement(E.default, {
                  children: c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(
                      p.Col,
                      { sm: 5, md: 6, lg: 8, xl: 8, xxl: 13 },
                      c.createElement(
                        "h3",
                        {
                          className:
                            "gx-text-grey paddingLeftStyle campaignHeaderTitleStyle"
                        },
                        "Create Survey"
                      )
                    ),
                    c.createElement(
                      p.Col,
                      { sm: 19, md: 18, lg: 16, xl: 16, xxl: 11 },
                      c.createElement(S.default, {
                        StepperData: n,
                        current: t,
                        onChange: this.goToNextPage.bind(this)
                      })
                    )
                  )
                }),
                c.createElement(
                  "div",
                  { className: "stepperContainer" },
                  c.createElement(
                    "div",
                    {
                      style: { margin: "20px 20px 20px 30px", height: "68vh" }
                    },
                    this.getContainer()
                  )
                ),
                c.createElement(
                  "div",
                  {
                    className: "campFooterRefinex",
                    style: { position: "absolute", width: "100%" }
                  },
                  c.createElement(
                    "div",
                    {
                      className: "gx-card-body",
                      style: { background: "#FFFFFF" }
                    },
                    c.createElement(f.CampaignFooter, {
                      loading: this.state.loading,
                      nextButtonText: t > 4 ? "Launch" : "Save and Next",
                      saveDraftText: 0 === t ? "" : "Save Draft",
                      saveDraft: function() {
                        return console.log("save to draft");
                      },
                      goToPage2: this.goToNextPage.bind(this, t + 1)
                    })
                  )
                )
              );
            }),
            t
          );
        })(c.Component),
        k = b.default(
          h ||
            (h = r(
              [
                "\n  query auth {\n    auth @client{\n      userId\n      organizationId\n    }\n  }\n"
              ],
              [
                "\n  query auth {\n    auth @client{\n      userId\n      organizationId\n    }\n  }\n"
              ]
            ))
        );
      t.default = C.compose(
        C.graphql(I.GET_ALL_APPS_OF_ORGANIZATION, {
          name: "allApplications",
          options: function(e) {
            return {
              variables: {
                id: w.default.decode(localStorage.getItem("jwt")).org_id
              },
              fetchPolicy: "cache-and-network"
            };
          }
        }),
        C.graphql(x.allSegments, {
          name: "segmentList",
          options: function(e) {
            return {
              variables: {
                org_id: w.default.decode(localStorage.getItem("jwt")).org_id,
                status: "ACTIVE"
              },
              fetchPolicy: "cache-and-network"
            };
          }
        }),
        C.graphql(x.createRule, { name: "rule" }),
        C.graphql(x.UPDATE_CAMPAIGN, { name: "updateCampaign" }),
        C.graphql(x.createCommunication, { name: "communication" }),
        C.graphql(x.createMessageTemplate, { name: "messageTemplate" }),
        C.graphql(x.attributes, {
          name: "allAttributes",
          options: function(e) {
            return {
              variables: {
                input: {
                  status: "ACTIVE",
                  organizationId: "577bddb7-17df-4884-b16f-8b5db5b00b95"
                }
              }
            };
          }
        }),
        C.graphql(k, { name: "auth" }),
        C.graphql(x.ADD_APPLICATION, { name: "addApplication" }),
        C.withApollo
      )(P);
    },
    720: function(e, t, n) {},
    722: function(e, t, n) {
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
        r =
          (this && this.__awaiter) ||
          function(e, t, n, a) {
            return new (n || (n = Promise))(function(r, o) {
              function i(e) {
                try {
                  s(a.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                try {
                  s(a.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                e.done
                  ? r(e.value)
                  : new n(function(t) {
                      t(e.value);
                    }).then(i, l);
              }
              s((a = a.apply(e, t || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function(e, t) {
            var n,
              a,
              r,
              o,
              i = {
                label: 0,
                sent: function() {
                  if (1 & r[0]) throw r[1];
                  return r[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: l(0), throw: l(1), return: l(2) }),
              "function" == typeof Symbol &&
                (o[Symbol.iterator] = function() {
                  return this;
                }),
              o
            );
            function l(o) {
              return function(l) {
                return (function(o) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; i; )
                    try {
                      if (
                        ((n = 1),
                        a &&
                          (r =
                            2 & o[0]
                              ? a.return
                              : o[0]
                              ? a.throw || ((r = a.return) && r.call(a), 0)
                              : a.next) &&
                          !(r = r.call(a, o[1])).done)
                      )
                        return r;
                      switch (((a = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                        case 0:
                        case 1:
                          r = o;
                          break;
                        case 4:
                          return i.label++, { value: o[1], done: !1 };
                        case 5:
                          i.label++, (a = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = i.ops.pop()), i.trys.pop();
                          continue;
                        default:
                          if (
                            !(r = (r = i.trys).length > 0 && r[r.length - 1]) &&
                            (6 === o[0] || 2 === o[0])
                          ) {
                            i = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!r || (o[1] > r[0] && o[1] < r[3]))
                          ) {
                            i.label = o[1];
                            break;
                          }
                          if (6 === o[0] && i.label < r[1]) {
                            (i.label = r[1]), (r = o);
                            break;
                          }
                          if (r && i.label < r[2]) {
                            (i.label = r[2]), i.ops.push(o);
                            break;
                          }
                          r[2] && i.ops.pop(), i.trys.pop();
                          continue;
                      }
                      o = t.call(e, i);
                    } catch (e) {
                      (o = [6, e]), (a = 0);
                    } finally {
                      n = r = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, l]);
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
        l =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var s = i(n(0)),
        u = n(16),
        c = n(55),
        p = n(3),
        d = l(n(5)),
        m = n(14),
        f = n(30),
        h = n(27);
      n(723);
      var g = n(342),
        y = i(n(33)),
        v = i(n(376)),
        _ = p.Tabs.TabPane,
        E = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.success = function() {
                p.message.success(n.state.popupmessage, 5),
                  n.setState({ showPopUp: !1, popupmessage: "" });
              }),
              (n.setInitialValues = function() {
                var e = n.props,
                  t = e.campaigns;
                e.loading;
                n.setState({ allCampaigns: t, loading: !1 }, function() {
                  n.onTabChange(n.state.key);
                });
              }),
              (n.onNewCampaign = function() {
                n.props.history.push({ pathname: g.NEW_CAMPAIGN });
              }),
              (n.handleChange = function(e, t, a) {
                n.setState({ sortedInfo: a });
              }),
              (n.onDeleteContact = function(e) {
                return r(n, void 0, void 0, function() {
                  var t;
                  return o(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return (
                          console.log("delete", e),
                          this.setState({ loading: !0 }),
                          [
                            4,
                            this.props.disableCampaign({
                              variables: { id: e.id }
                            })
                          ]
                        );
                      case 1:
                        n.sent(), (n.label = 2);
                      case 2:
                        return (
                          n.trys.push([2, 4, , 5]), [4, this.props.refetch()]
                        );
                      case 3:
                        return n.sent(), this.setState({ loading: !1 }), [3, 5];
                      case 4:
                        return (
                          (t = n.sent()),
                          this.setState({ loading: !1 }),
                          console.log(t),
                          [3, 5]
                        );
                      case 5:
                        return [2];
                    }
                  });
                });
              }),
              (n.onDuplicateContact = function(e) {
                console.log("dupl", e);
                var t = n.props,
                  a = t.history;
                t.match;
                console.log(n.props),
                  a.push({
                    pathname: g.NEW_CAMPAIGN + "/" + e.id,
                    state: { campaignSelected: e }
                  });
              }),
              (n.showMatrics = function(e) {
                console.log("matrics", e),
                  n.props.history.push({
                    pathname: g.CAMPAIGN_DASHBOARD + "/" + e.id,
                    state: { campaignSelected: e }
                  });
              }),
              (n.menus = function(e) {
                console.log("record", e);
                p.Menu.Item;
                return s.createElement(
                  p.Menu,
                  {
                    onClick: function(t) {
                      "duplicate" === t.key
                        ? n.onDuplicateContact(e)
                        : "edit" === t.key
                        ? n.props.history.push(
                            "/refinex/feedback/" + e.id + "/edit"
                          )
                        : "view" === t.key
                        ? n.showMatrics(e)
                        : n.onDeleteContact(e);
                    }
                  },
                  s.createElement(
                    p.Menu.Item,
                    { key: "view" },
                    s.createElement(p.Icon, { type: "eye" }),
                    " View"
                  ),
                  v.includes(e.campaignStatus, g.SHOULD_EDIT)
                    ? s.createElement(
                        p.Menu.Item,
                        { key: "edit" },
                        s.createElement(p.Icon, { type: "edit" }),
                        " Edit"
                      )
                    : null,
                  s.createElement(
                    p.Menu.Item,
                    { key: "duplicate" },
                    s.createElement(p.Icon, { type: "copy" }),
                    " Duplicate"
                  ),
                  s.createElement(
                    p.Menu.Item,
                    { key: "delete" },
                    s.createElement(p.Icon, { type: "delete" }),
                    " Delete"
                  )
                );
              }),
              (n.onCampaignFilteredList = function(e) {
                console.log("new list", e), n.setState({ filtered: e });
              }),
              (n.onTabChange = function(e) {
                n.setState({ key: e });
                var t = n.state.allCampaigns;
                if (t && !(t.length < 1)) {
                  if (2 == e) {
                    var a = t.filter(function(e) {
                      if ("ACTIVE" == e.status)
                        return (
                          "PRE_LIVE_PROCESSING" == e.campaignStatus ||
                          ("LIVE" == e.campaignStatus &&
                            d.default(e.startTime).isAfter(d.default()))
                        );
                    });
                    n.setState({ data: a, filtered: null });
                  }
                  if (3 == e) {
                    var r = t.filter(function(e) {
                      if ("ACTIVE" == e.status)
                        return (
                          d.default(e.endTime).isBefore(d.default()) &&
                          "LIVE" == e.campaignStatus
                        );
                    });
                    n.setState({ data: r, filtered: null });
                  }
                  if (4 == e) {
                    var o = t.filter(function(e) {
                      return "DRAFT" == e.campaignStatus;
                    });
                    n.setState({ data: o, filtered: null });
                  }
                  if (5 == e) {
                    o = t.filter(function(e) {
                      return "PAUSE" == e.campaignStatus;
                    });
                    n.setState({ data: o, filtered: null });
                  }
                  if (1 == e) {
                    var i = t.filter(function(e) {
                      if ("ACTIVE" == e.status)
                        return (
                          "LIVE" == e.campaignStatus &&
                          d.default().isBetween(e.startTime, e.endTime)
                        );
                    });
                    n.setState({ data: i, filtered: null });
                  }
                }
              }),
              (n.state = {
                filteredInfo: "",
                sortedInfo: null,
                filtered: null,
                allCampaigns: null,
                data: null,
                loading: !1,
                showPopUp: !1,
                popupmessage: "",
                key: n.props.location.state
                  ? n.props.location.state.tabKey
                  : "1"
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.componentDidMount = function() {
              var e = this.props,
                t = (e.campaigns, e.loading);
              this.setState({ loading: t });
            }),
            (t.prototype.componentDidUpdate = function(e) {
              this.props.loading !== e.loading &&
                (this.setInitialValues(), console.log(this.props));
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state,
                n = t.sortedInfo,
                a = t.filteredInfo,
                r = t.filtered,
                o = t.data,
                i = t.loading;
              t.showPopUp && this.success(), (n = n || {}), (a = a || {});
              var l = [],
                u = {
                  position: "bottom",
                  total: (l = null != r ? r : o) ? l.length : 0,
                  defaultPageSize: 5,
                  showTotal: function(e, t) {
                    return t[0] + "-" + t[1] + " of " + e + " items";
                  }
                },
                c = [
                  {
                    title: "Name",
                    dataIndex: "name",
                    key: "name",
                    sorter: function(e, t) {
                      return e.name !== t.name ? (e.name < t.name ? -1 : 1) : 0;
                    },
                    sortOrder: "name" === n.columnKey && n.order
                  },
                  {
                    title: "Start date & end date",
                    dataIndex: "startTime",
                    key: "startTime",
                    render: function(e, t) {
                      var n = d.default(),
                        a = d.default(e),
                        r = d.default(t.endTime);
                      return s.createElement(
                        "div",
                        null,
                        d.default(e).format("DD-MM-YYYY"),
                        s.createElement(p.Progress, {
                          style: { width: "35%", margin: "0px 5px 0px 5px" },
                          percent: Math.round(((n - a) / (r - a)) * 100),
                          showInfo: !1
                        }),
                        d.default(t.endTime).format("DD-MM-YYYY")
                      );
                    }
                  },
                  {
                    title: "",
                    key: "action",
                    render: function(t, n) {
                      return s.createElement(
                        "div",
                        { className: "gx-module-contact-right" },
                        s.createElement(
                          p.Dropdown,
                          {
                            overlay: e.menus(n),
                            placement: "bottomRight",
                            trigger: ["click"]
                          },
                          s.createElement("i", {
                            className: "gx-icon-btn icon icon-ellipse-v"
                          })
                        )
                      );
                    }
                  }
                ];
              return s.createElement(
                "div",
                { style: { minHeight: "100vh", margin: "1 2px" } },
                s.createElement(
                  "div",
                  null,
                  s.createElement(f.CampaignHeader, {
                    children: s.createElement(
                      s.Fragment,
                      null,
                      s.createElement(
                        p.Col,
                        { span: 12 },
                        s.createElement(
                          "h3",
                          {
                            className:
                              "gx-text-grey paddingLeftStyle campaignHeaderTitleStyle"
                          },
                          "Surveys"
                        )
                      ),
                      s.createElement(
                        p.Col,
                        { className: "searchInputStyle", span: 12 },
                        s.createElement(
                          p.Button,
                          { type: "primary", onClick: this.onNewCampaign },
                          "Create Survey"
                        )
                      )
                    )
                  })
                ),
                s.createElement(
                  "div",
                  { className: "RefineX-campaignList" },
                  s.createElement(
                    h.Widget,
                    {
                      title: "Survey List",
                      style: { margin: "22px" },
                      styleName: "gx-card-tabs",
                      extra: s.createElement(f.InstantSearch, {
                        placeHolder: "Search Survey",
                        data: o,
                        onFilteredList: this.onCampaignFilteredList
                      })
                    },
                    s.createElement(
                      p.Tabs,
                      {
                        defaultActiveKey: this.state.key ? this.state.key : "1",
                        onChange: this.onTabChange
                      },
                      s.createElement(
                        _,
                        { tab: "Live", key: "1" },
                        s.createElement(f.SortableDataTable, {
                          data: l,
                          onChange: this.handleChange,
                          columns: c,
                          pagination: u,
                          loading: i
                        })
                      ),
                      s.createElement(
                        _,
                        { tab: "Upcoming", key: "2" },
                        s.createElement(f.SortableDataTable, {
                          data: l,
                          onChange: this.handleChange,
                          columns: c,
                          pagination: u,
                          loading: i
                        })
                      ),
                      s.createElement(
                        _,
                        { tab: "Completed", key: "3" },
                        s.createElement(f.SortableDataTable, {
                          data: l,
                          onChange: this.handleChange,
                          columns: c,
                          pagination: u,
                          loading: i
                        })
                      ),
                      s.createElement(
                        _,
                        { tab: "Draft", key: "4" },
                        s.createElement(f.SortableDataTable, {
                          data: l,
                          onChange: this.handleChange,
                          columns: c,
                          pagination: u,
                          loading: i
                        })
                      ),
                      s.createElement(
                        _,
                        { tab: "Paused", key: "5" },
                        s.createElement(f.SortableDataTable, {
                          data: l,
                          onChange: this.handleChange,
                          columns: c,
                          pagination: u,
                          loading: i
                        })
                      )
                    )
                  )
                )
              );
            }),
            t
          );
        })(s.Component);
      t.default = u.withRouter(
        m.compose(
          m.graphql(c.DISABLE_CAMPAIGN, { name: "disableCampaign" }),
          m.graphql(c.campaigns, {
            options: function() {
              var e = y.decode(localStorage.getItem("jwt")).org_id;
              return {
                variables: {
                  status: g.DEFAULT_ACTIVE_STATUS,
                  campaignType: [g.DEFAULT_REFINEX_CAMPAIGN],
                  organization_id: e
                },
                fetchPolicy: "network-only"
              };
            },
            props: function(e) {
              var t = e.data,
                n = t.loading,
                a = t.error,
                r = t.campaigns,
                o = t.refetch;
              return {
                loading: n,
                campaigns: r,
                error: a,
                refetch: o,
                changeStatus: function(e) {
                  var t = y.decode(localStorage.getItem("jwt")).org_id,
                    n = {
                      status: e,
                      campaignType: g.DEFAULT_REFINEX_CAMPAIGN,
                      organization_id: t
                    };
                  o(n);
                }
              };
            }
          })
        )(E)
      );
    },
    723: function(e, t, n) {},
    725: function(e, t, n) {
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
        l = n(30),
        s = n(3),
        u = n(55),
        c = n(14),
        p = n(16),
        d = o(n(5)),
        m = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.launchCampaign = function() {
                n.setState({ loading: !0 }),
                  n.props
                    .launchCampaign({
                      variables: {
                        id: n.props.location.state.campaignSelected.id
                      }
                    })
                    .then(function(e) {
                      console.log("campaign data..", e),
                        s.message.success("Campaign Launched"),
                        d
                          .default(
                            n.props.location.state.campaignSelected.startTime
                          )
                          .isAfter(d.default())
                          ? n.props.history.push({
                              pathname: "/refinex/feedback/overview",
                              state: { tabKey: "2" }
                            })
                          : d
                              .default(
                                n.props.location.state.campaignSelected.endTime
                              )
                              .isBefore(d.default())
                          ? n.props.history.push({
                              pathname: "/refinex/feedback/overview",
                              state: { tabKey: "3" }
                            })
                          : n.props.history.push({
                              pathname: "/refinex/feedback/overview",
                              state: { patabKey: "3" }
                            });
                    })
                    .catch(function(e) {
                      console.log("Error Update campaign", e),
                        n.setState({ loading: !1 });
                    });
              }),
              (n.pauseCampaign = function() {
                console.log("Pause calling"),
                  n.setState({ loading: !0 }),
                  n.props
                    .pauseCampaign({
                      variables: {
                        id: n.props.location.state.campaignSelected.id
                      }
                    })
                    .then(function(e) {
                      console.log("campaign data..", e),
                        s.message.success("Campaign Paused"),
                        d
                          .default()
                          .isBetween(
                            n.props.location.state.campaignSelected.startTime,
                            n.props.location.state.campaignSelected.endTime
                          )
                          ? n.props.history.push({
                              pathname: "/refinex/feedback/overview",
                              state: { tabKey: "5" }
                            })
                          : n.props.history.push({
                              pathname: "/refinex/feedback/overview",
                              state: { tabKey: "2" }
                            });
                    })
                    .catch(function(e) {
                      console.log("Error Update campaign", e),
                        n.setState({ loading: !1 });
                    });
              }),
              (n.unpauseCampaign = function() {
                console.log("Pause calling"),
                  n.setState({ loading: !0 }),
                  n.props
                    .unpauseCampaign({
                      variables: {
                        id: n.props.location.state.campaignSelected.id
                      }
                    })
                    .then(function(e) {
                      console.log("campaign data..", e),
                        s.message.success("Campaign unPaused"),
                        d
                          .default()
                          .isBetween(
                            n.props.location.state.campaignSelected.startTime,
                            n.props.location.state.campaignSelected.endTime
                          )
                          ? n.props.history.push("/refinex/feedback/overview")
                          : n.props.history.push({
                              pathname: "/refinex/feedback/overview",
                              state: { tabKey: "2" }
                            });
                    })
                    .catch(function(e) {
                      console.log("Error Update campaign", e),
                        n.setState({ loading: !1 });
                    });
              }),
              (n.abandonCampaign = function() {
                console.log("Pause calling"),
                  n.setState({ loading: !0 }),
                  n.props
                    .abandonCampaign({
                      variables: {
                        id: n.props.location.state.campaignSelected.id
                      }
                    })
                    .then(function(e) {
                      console.log("campaign data..", e),
                        s.message.success("Abandon campaign"),
                        d
                          .default()
                          .isBetween(
                            n.props.location.state.campaignSelected.startTime,
                            n.props.location.state.campaignSelected.endTime
                          )
                          ? n.props.history.push("/refinex/feedback/overview")
                          : n.props.history.push({
                              pathname: "/refinex/feedback/overview",
                              state: { tabKey: "2" }
                            });
                    })
                    .catch(function(e) {
                      console.log("Error Update campaign", e),
                        n.setState({ loading: !1 });
                    });
              }),
              (n.state = { loading: !1 }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              console.log("this.props....", this.props),
                console.log("this.state....", this.state);
              var e = this.props.allAudiences.audiences,
                t = this.state.loading;
              return i.createElement(
                "div",
                { style: { minHeight: "100vh" } },
                i.createElement(l.CampaignHeader, {
                  children: i.createElement(
                    s.Col,
                    { span: 12 },
                    i.createElement(
                      "h2",
                      {
                        className:
                          "gx-text-grey paddingLeftStyle campaignHeaderTitleStyle"
                      },
                      "Campaign Dashboard"
                    )
                  )
                }),
                i.createElement(
                  "div",
                  { className: "gx-card", style: { margin: 22 } },
                  i.createElement(
                    "div",
                    { className: "gx-card-body" },
                    i.createElement(l.campaignOverview, {
                      view: !0,
                      loading: t,
                      campaign: this.props.location.state
                        ? this.props.location.state.campaignSelected
                        : "",
                      launchCampaign: this.launchCampaign,
                      pauseCampaign: this.pauseCampaign,
                      unpauseCampaign: this.unpauseCampaign,
                      audience: e
                    })
                  )
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = p.withRouter(
        c.compose(
          c.graphql(u.GET_CAMPAIGN_DASHBOARD, {
            name: "campaign",
            options: function(e) {
              return {
                variables: { id: e.match.params.id },
                fetchPolicy: "cache-and-network"
              };
            }
          }),
          c.graphql(u.LAUNCH_CAMPAIGN, { name: "launchCampaign" }),
          c.graphql(u.PAUSE_CAMPAIGN, { name: "pauseCampaign" }),
          c.graphql(u.UNPAUSE_CAMPAIGN, { name: "unpauseCampaign" }),
          c.graphql(u.ABANDON_CAMPAIGN, { name: "abandonCampaign" }),
          c.graphql(u.AUDIENCES, {
            name: "allAudiences",
            options: function(e) {
              return {
                variables: { status: "ACTIVE", campaign_id: e.match.params.id },
                fetchPolicy: "network-only"
              };
            }
          })
        )(m)
      );
    },
    726: function(e, t, n) {
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
        i = n(16),
        l = n(55),
        s = n(14),
        u = n(342),
        c = n(3),
        p = n(30),
        d = n(27),
        m = r(n(33)),
        f = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.handleChange = function(e, t, a) {
                n.setState({ sortedInfo: a });
              }),
              (n.onNewSegment = function() {
                var e = n.props,
                  t = e.history;
                e.match;
                t.push({ pathname: u.NEW_SEGMENT });
              }),
              (n.onDeleteContact = function(e) {
                n.props.client
                  .mutate({
                    mutation: l.disableSegment,
                    variables: { id: e.id }
                  })
                  .then(function(e) {
                    e.data;
                    (0, n.props.refetchSegments)();
                  })
                  .catch(function(e) {
                    console.log("err", e);
                  });
              }),
              (n.onDuplicateContact = function(e) {
                var t = n.props,
                  a = t.history;
                t.match;
                console.log(e),
                  a.push({
                    pathname: u.NEW_SEGMENT + "/" + e.id,
                    state: { segmentSelected: e }
                  });
              }),
              (n.menus = function(e) {
                return o.createElement(
                  c.Menu,
                  {
                    onClick: function(t) {
                      "duplicate" === t.key
                        ? n.onDuplicateContact(e)
                        : n.onDeleteContact(e);
                    }
                  },
                  o.createElement(
                    c.Menu.Item,
                    { key: "duplicate" },
                    "Duplicate"
                  ),
                  o.createElement(c.Menu.Item, { key: "delete" }, "Delete")
                );
              }),
              (n.onSegmentFilteredList = function(e) {
                n.setState({ filtered: e });
              }),
              (n.state = {
                sortedInfo: null,
                filtered: null,
                spinner: !1,
                filteredInfo: ""
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = this,
                t = this.state,
                n = t.sortedInfo,
                a = t.filteredInfo,
                r = t.filtered,
                i = this.props.segments;
              (n = n || {}), (a = a || {});
              var l = [];
              l = null != r ? r : i;
              var s = [
                {
                  title: "Segment Name",
                  dataIndex: "name",
                  key: "name",
                  sorter: function(e, t) {
                    return e.name !== t.name ? (e.name < t.name ? -1 : 1) : 0;
                  },
                  sortOrder: "name" === n.columnKey && n.order
                },
                {
                  title: "Segment type",
                  dataIndex: "segmentType",
                  key: "segmentType",
                  sorter: function(e, t) {
                    return e.segmentType - t.segmentType;
                  },
                  sortOrder: "segmentType" === n.columnKey && n.order
                },
                { title: "Status", dataIndex: "status", key: "status" },
                {
                  title: "",
                  key: "action",
                  render: function(t, n) {
                    return o.createElement(
                      "div",
                      { className: "gx-module-contact-right" },
                      o.createElement(
                        c.Dropdown,
                        {
                          overlay: e.menus(n),
                          placement: "bottomRight",
                          trigger: ["click"]
                        },
                        o.createElement("i", {
                          className: "gx-icon-btn icon icon-ellipse-v"
                        })
                      )
                    );
                  }
                }
              ];
              return o.createElement(
                d.ErrorBoundary,
                null,
                o.createElement(
                  "div",
                  { style: { minHeight: "100vh" } },
                  o.createElement(
                    "div",
                    { style: { margin: "1 32px" } },
                    o.createElement(p.CampaignHeader, {
                      children: o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          c.Col,
                          { span: 12 },
                          o.createElement(
                            "h3",
                            {
                              className:
                                "gx-text-grey paddingLeftStyle campaignHeaderTitleStyle"
                            },
                            "Segments"
                          )
                        ),
                        o.createElement(
                          c.Col,
                          {
                            style: {
                              display: "flex",
                              justifyContent: "flex-end"
                            },
                            span: 12
                          },
                          o.createElement(
                            c.Button,
                            { type: "primary", onClick: this.onNewSegment },
                            "Create Segment"
                          )
                        )
                      )
                    })
                  ),
                  o.createElement(
                    c.Card,
                    { style: { margin: "32px" } },
                    o.createElement(
                      "div",
                      { style: { marginBottom: "24px" } },
                      o.createElement(p.InstantSearch, {
                        placeHolder: "Search segment",
                        data: i,
                        onFilteredList: this.onSegmentFilteredList
                      })
                    ),
                    o.createElement(p.SortableDataTable, {
                      loading: this.props.loading,
                      data: l,
                      onChange: this.handleChange,
                      columns: s
                    })
                  )
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = i.withRouter(
        s.compose(
          s.graphql(l.allSegments, {
            options: function(e) {
              return {
                variables: {
                  org_id: m.decode(localStorage.getItem("jwt")).org_id,
                  status: "ACTIVE"
                },
                forceFetch: !0,
                fetchPolicy: "network-only"
              };
            },
            props: function(e) {
              var t = e.data,
                n = t.loading,
                a = t.error,
                r = t.segments,
                o = t.refetch;
              return {
                loading: n,
                segments: r,
                error: a,
                refetchSegments: function(e) {
                  var t = m.decode(localStorage.getItem("jwt")).org_id;
                  o({ variables: { org_id: t, status: "ACTIVE" } });
                }
              };
            }
          })
        )(s.withApollo(f))
      );
    },
    727: function(e, t, n) {
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
        i = n(3),
        l = n(16),
        s = n(14),
        u = n(55);
      n(728);
      var c = n(342),
        p = n(30),
        d = n(27),
        m = r(n(33)),
        f = n(37),
        h = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.logQuery = function(e) {
                n.setState({ query: e, newSegmentError: !1 });
              }),
              (n.onChange = function(e) {
                n.setState({ value: e.target.value });
              }),
              (n.displayError = function(e, t) {
                var a;
                n.setState(
                  (((a = {})[e] = !0), (a.segmentErrorMessage = t), a),
                  function() {
                    setTimeout(function() {
                      var t;
                      n.setState(
                        (((t = {})[e] = !1), (t.segmentErrorMessage = ""), t)
                      );
                    }, 4e3);
                  }
                );
              }),
              (n.onNewSegment = function() {
                var e = n.state,
                  t = e.value,
                  a = e.query;
                if ("" !== t) {
                  var r = n.props.client;
                  console.log(
                    n.props.allApplications.organization.applications[0]
                  ),
                    console.log(m.decode(localStorage.getItem("jwt")));
                  var o = m.decode(localStorage.getItem("jwt")).org_id;
                  r.mutate({
                    mutation: u.createRule,
                    variables: {
                      input: {
                        name: Math.random()
                          .toString(36)
                          .substring(7),
                        description: "",
                        type: "SIMPLE",
                        organizationId: o,
                        status: "ACTIVE",
                        ruleConfiguration: JSON.stringify(a)
                      }
                    }
                  })
                    .then(function(e) {
                      var t = e.data;
                      console.log("rule", t),
                        r
                          .mutate({
                            mutation: u.createSegment,
                            variables: {
                              name: n.state.value,
                              segmentType: "CUSTOM",
                              organization_id: o,
                              application_id:
                                n.props.allApplications.organization
                                  .applications[0].id,
                              rule_id: t.createRule.id,
                              status: "ACTIVE"
                            }
                          })
                          .then(function(e) {
                            e.data;
                            n.props.history.push({ pathname: c.SEGMENT_LIST });
                          })
                          .catch(function(e) {
                            n.displayError(
                              "newSegmentError",
                              "Segment name already present"
                            );
                          });
                    })
                    .catch(function(e) {
                      console.log("error1 : ", e),
                        n.displayError(
                          "newSegmentError",
                          "Not a valid segment"
                        );
                    });
                } else
                  n.displayError(
                    "newSegmentError",
                    "Please provide a segment name"
                  );
              }),
              (n.UNSAFE_componentWillMount = function() {
                var e = n.props,
                  t = e.location;
                e.match;
                if (t && t.state && t.state.segmentSelected) {
                  var a = JSON.stringify(
                      t.state.segmentSelected.rule.ruleConfiguration
                    ),
                    r = {
                      attributeName: "field",
                      attributeValue: "value",
                      expressionType: "operator"
                    };
                  if (
                    ((a = a.replace(
                      /attributeName|attributeValue|expressionType/gi,
                      function(e) {
                        return r[e];
                      }
                    )),
                    n.setState({ query: JSON.parse(a) }),
                    "" !== t.state.segmentSelected.name)
                  )
                    if (t.state.segmentSelected.name.includes("copy")) {
                      var o = t.state.segmentSelected.name.split("-", 2);
                      console.log(Number(o[1]) + 1);
                      var i = o[0] + " " + (Number(o[1]) + 1);
                      n.setState({ value: i, isDuplicateSegment: !0 });
                    } else
                      n.setState({
                        value: t.state.segmentSelected.name + " copy-1",
                        isDuplicateSegment: !0
                      });
                }
              }),
              (n.state = {
                value: "",
                query: { id: "1", combinator: "and", rules: [] },
                newSegmentError: !1,
                isDuplicateSegment: !1,
                segmentErrorMessage: ""
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              console.log(this.props);
              var e = this.state,
                t = e.value,
                n = e.newSegmentError,
                a = e.query,
                r = e.isDuplicateSegment,
                l = e.segmentErrorMessage,
                s = this.props.attributes,
                u = s.loading,
                c = s.error,
                m = s.ruleAttributes,
                f = o.createElement(i.Icon, {
                  type: "loading",
                  style: { fontSize: 100 },
                  spin: !0
                });
              if (u)
                return o.createElement(
                  "div",
                  { style: { minHeight: "100vh" } },
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
                    o.createElement(i.Spin, { size: "large", indicator: f })
                  ),
                  " ",
                  o.createElement("br", null),
                  " ",
                  o.createElement("br", null),
                  " ",
                  o.createElement("br", null)
                );
              if (c) return o.createElement("p", null, c.message);
              var h =
                m.length > 0 &&
                m.map(function(e) {
                  return {
                    name: e.attributeName,
                    key: e.id,
                    label: e.attributeName
                  };
                });
              return o.createElement(
                d.ErrorBoundary,
                null,
                o.createElement(
                  "div",
                  { style: { minHeight: "100vh" } },
                  o.createElement(
                    "div",
                    { style: { margin: "1 32px" } },
                    o.createElement(p.CampaignHeader, {
                      children: o.createElement(
                        i.Col,
                        { span: 12 },
                        o.createElement(
                          "h3",
                          {
                            className:
                              "gx-text-grey paddingLeftStyle campaignHeaderTitleStyle"
                          },
                          r ? "Duplicate segment" : "New Segment"
                        )
                      )
                    })
                  ),
                  o.createElement(
                    "div",
                    { style: { margin: "32px" } },
                    o.createElement(
                      "p",
                      { className: "gx-text-grey gx-mb-1" },
                      "Segment Name"
                    ),
                    o.createElement(i.Input, {
                      defaultValue: r ? t : "Enter segment name",
                      style: { width: "50%", marginBottom: "40px" },
                      value: t,
                      onChange: this.onChange
                    }),
                    o.createElement(p.WalkinQueryBuilder, {
                      fields: h,
                      onQueryChange: this.logQuery,
                      query: a
                    })
                  ),
                  n && o.createElement(i.Alert, { message: l, type: "error" }),
                  o.createElement(
                    "div",
                    { className: "segmentFooterButton" },
                    o.createElement(
                      i.Button,
                      {
                        type: "primary",
                        className: "campaignFooterStyle",
                        onClick: this.onNewSegment
                      },
                      "Create segment"
                    )
                  )
                )
              );
            }),
            t
          );
        })(o.Component);
      t.default = l.withRouter(
        s.compose(
          s.graphql(u.attributes, {
            name: "attributes",
            options: function(e) {
              return {
                variables: {
                  input: {
                    organizationId: m.decode(localStorage.getItem("jwt"))
                      .org_id,
                    status: c.DEFAULT_ACTIVE_STATUS
                  }
                },
                fetchPolicy: "cache-and-network"
              };
            }
          }),
          s.graphql(f.GET_ALL_APPS_OF_ORGANIZATION, {
            name: "allApplications",
            options: function(e) {
              return {
                variables: { id: m.decode(localStorage.getItem("jwt")).org_id },
                fetchPolicy: "cache-and-network"
              };
            }
          })
        )(s.withApollo(h))
      );
    },
    728: function(e, t, n) {},
    730: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(n(0)),
        i = n(16),
        l = r(n(731));
      t.default = function(e) {
        var t = e.match;
        return o.createElement(
          i.Switch,
          null,
          o.createElement(i.Route, {
            exact: !0,
            path: t.url,
            component: l.default
          })
        );
      };
    },
    731: function(e, t, n) {
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
        l = n(3),
        s = n(27),
        u = n(14),
        c = n(37),
        p = o(n(5)),
        d = r(n(33)),
        m = o(n(732)),
        f = o(n(734)),
        h = o(n(736)),
        g = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.disabledDate = function(e) {
                if (!e) return !1;
                var t = p.default();
                return (
                  t.hour(0), t.minute(0), t.second(0), e.valueOf() > t.valueOf()
                );
              }),
              (n.disableEndDate = function(e) {
                if (!e) return !1;
                var t = p.default(n.state.startDate).add(1, "day");
                return (
                  t.hour(0),
                  t.minute(0),
                  t.second(0),
                  e.valueOf() <= t.valueOf() || p.default() < e
                );
              }),
              (n.handleChange2 = function(e) {
                var t = p.default(e).format("YYYY-MM-DD"),
                  a = new Date(t + " 5:30:00").toISOString();
                console.log("newd", a),
                  n.setState({ startDate: a, endDate: "" }),
                  "" !== a && (n.state.errors.startDate = "");
              }),
              (n.handleChange3 = function(e) {
                var t = p.default(e).format("YYYY-MM-DD"),
                  a = new Date(t + " 5:30:00").toISOString();
                n.setState({ endDate: a }),
                  n.getMetrics(n.state.org_id, a),
                  "" !== a && (n.state.errors.endDate = "");
              }),
              (n.getMetrics = function(e, t) {
                n.setState({ spin: !0 }),
                  n.props.client
                    .query({
                      query: c.GET_ANALYTICS,
                      variables: {
                        org_id: e,
                        product: "REFINEX",
                        dates: { from: n.state.startDate, to: t }
                      },
                      fetchPolicy: "no-cache"
                    })
                    .then(function(e) {
                      console.log(">>>...", e),
                        n.formatData(e),
                        n.setState({ spin: !1 });
                    })
                    .catch(function(e) {
                      n.setState({ spin: !1 }),
                        console.log("Failed to get User Details" + e);
                    });
              }),
              (n.formatData = function(e) {
                var t = n.state,
                  a = t.HOUR_OF_DAY_VS_EVENT_COUNT,
                  r = t.DAY_OF_WEEK_VS_EVENT_COUNT,
                  o = t.TOP_QUESTION;
                console.log("Service analytics data..", n.state),
                  e.data.analytics.map(function(e) {
                    "HOUR_OF_DAY_VS_EVENT_COUNT" === e.name
                      ? (a = e.response)
                      : "DAY_OF_WEEK_VS_EVENT_COUNT" === e.name
                      ? (r = e.response)
                      : "TOP_QUESTION" === e.name && (o = e.response);
                  }),
                  n.setState({
                    HOUR_OF_DAY_VS_EVENT_COUNT: a,
                    DAY_OF_WEEK_VS_EVENT_COUNT: r,
                    TOP_QUESTION: o,
                    spin: !1
                  });
              }),
              (n.handleChange = function(e) {
                console.log("selected " + e);
              }),
              (n.state = {
                HOUR_OF_DAY_VS_EVENT_COUNT: 0,
                DAY_OF_WEEK_VS_EVENT_COUNT: 0,
                TOP_QUESTION: 0,
                startDate: p.default().subtract(30, "day"),
                endDate: p.default(),
                org_id: "",
                errors: {},
                spin: !1
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.UNSAFE_componentWillMount = function() {
              console.log("This.state...", this.state);
              var e = d.decode(localStorage.getItem("jwt")),
                t = (e.id, e.org_id);
              this.getMetrics(t, this.state.endDate);
            }),
            (t.prototype.render = function() {
              console.log("Analytics..", this.state);
              l.Select.Option,
                this.state.HOUR_OF_DAY_VS_EVENT_COUNT,
                this.state.DAY_OF_WEEK_VS_EVENT_COUNT,
                this.state.TOP_QUESTION;
              return i.createElement(
                "div",
                { style: { backgroundColor: "white", minHeight: "100vh" } },
                i.createElement(
                  s.Auxiliary,
                  null,
                  i.createElement(
                    "div",
                    { className: "gx-main-content" },
                    i.createElement(
                      "div",
                      {
                        style: { margin: "20px" },
                        className:
                          "ant-row-flex gx-justify-content-between gx-mb-1 gx-mb-sm-4 gx-dash-search"
                      },
                      i.createElement(
                        "h2",
                        { className: "h2 gx-mb-3 gx-mb-sm-1 gx-mr-2" },
                        "Analytics"
                      ),
                      i.createElement(
                        l.Button,
                        { type: "primary", size: "large" },
                        "Download",
                        i.createElement(l.Icon, { type: "down" })
                      )
                    ),
                    i.createElement(
                      "div",
                      null,
                      i.createElement(m.default, null)
                    ),
                    i.createElement(
                      "div",
                      { style: { marginTop: "20px" } },
                      i.createElement(f.default, null)
                    ),
                    i.createElement(
                      "div",
                      { style: { marginTop: "20px" } },
                      i.createElement(h.default, null)
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = u.withApollo(g);
    },
    732: function(e, t, n) {
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
        l = n(3),
        s = n(27),
        u = o(n(733)),
        c = (function(e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              var e = l.Select.Option;
              return i.createElement(
                s.Widget,
                {
                  title: "Overall Report",
                  style: {
                    backgroundColor: "#e6e6e6",
                    margin: "0px 30px 0px 30px"
                  },
                  styleName: "gx-card-tabs",
                  extra: i.createElement(
                    "div",
                    { className: "ant-row-flex gx-px-2 gx-pt-2" },
                    i.createElement(
                      "div",
                      { className: "gx-ml-auto" },
                      i.createElement(
                        l.Select,
                        {
                          className: "gx-mb-2 gx-select-lg",
                          defaultValue: "month",
                          onChange: function() {
                            return console.log("a");
                          }
                        },
                        i.createElement(e, { value: "month" }, "Monthly"),
                        i.createElement(e, { value: "week" }, "Weekly"),
                        i.createElement(e, { value: "year" }, "Yearly")
                      )
                    )
                  )
                },
                i.createElement(
                  l.Row,
                  null,
                  i.createElement(
                    l.Col,
                    { lg: 13, md: 13, sm: 24, xs: 24 },
                    i.createElement(
                      l.Row,
                      null,
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "179,626"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Request Sent"
                        )
                      ),
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "159,626"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Clicks Opened"
                        )
                      ),
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "159,000"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Response Rate"
                        )
                      ),
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "50.02%"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Completion Rate"
                        )
                      ),
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "41.02%"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Avg. Time for Completion"
                        )
                      )
                    )
                  ),
                  i.createElement(
                    l.Col,
                    { lg: 11, md: 11, sm: 24, xs: 24 },
                    i.createElement(
                      "div",
                      { style: { marginLeft: "5rem" } },
                      i.createElement(u.default, null)
                    )
                  )
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = c;
    },
    733: function(e, t, n) {
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
        l = n(347),
        s = o(n(462)),
        u = function(e) {
          var t = Math.PI / 180,
            n = e.cx,
            a = e.cy,
            r = e.midAngle,
            o = e.innerRadius,
            s = e.outerRadius,
            u = e.startAngle,
            c = e.endAngle,
            p = e.fill,
            d = e.payload,
            m = e.percent,
            f = e.value,
            h = Math.sin(-t * r),
            g = Math.cos(-t * r),
            y = n + (s + 10) * g,
            v = a + (s + 10) * h,
            _ = n + (s + 30) * g,
            E = a + (s + 30) * h,
            b = _ + 22 * (g >= 0 ? 1 : -1),
            C = E,
            S = g >= 0 ? "start" : "end";
          return i.createElement(
            "g",
            null,
            i.createElement(
              "text",
              { x: n, y: a, dy: 8, textAnchor: "middle", fill: p },
              d.name
            ),
            i.createElement(l.Sector, {
              cx: n,
              cy: a,
              innerRadius: o,
              outerRadius: s,
              startAngle: u,
              endAngle: c,
              fill: p
            }),
            i.createElement(l.Sector, {
              cx: n,
              cy: a,
              startAngle: u,
              endAngle: c,
              innerRadius: s + 6,
              outerRadius: s + 10,
              fill: p
            }),
            i.createElement("path", {
              d: "M" + y + "," + v + "L" + _ + "," + E + "L" + b + "," + C,
              stroke: p,
              fill: "none"
            }),
            i.createElement("circle", {
              cx: b,
              cy: C,
              r: 2,
              fill: p,
              stroke: "none"
            }),
            i.createElement(
              "text",
              {
                x: b + 12 * (g >= 0 ? 1 : -1),
                y: C,
                textAnchor: S,
                fill: "#333"
              },
              "" + f
            ),
            i.createElement(
              "text",
              {
                x: b + 12 * (g >= 0 ? 1 : -1),
                y: C,
                dy: 18,
                textAnchor: S,
                fill: "#999"
              },
              (100 * m).toFixed(2) + "%"
            )
          );
        },
        c = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = { activeIndex: 0 }), n;
          }
          return (
            a(t, e),
            (t.prototype.onPieEnter = function(e, t) {
              this.setState({ activeIndex: t });
            }),
            (t.prototype.render = function() {
              return i.createElement(
                l.ResponsiveContainer,
                { width: "100%", height: 300 },
                i.createElement(
                  l.PieChart,
                  null,
                  i.createElement(l.Pie, {
                    dataKey: "value",
                    activeIndex: this.state.activeIndex,
                    activeShape: u,
                    onMouseEnter: this.onPieEnter.bind(this),
                    data: s.default,
                    innerRadius: 60,
                    outerRadius: 80,
                    fill: "#003366"
                  })
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = c;
    },
    734: function(e, t, n) {
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
        l = n(3),
        s = n(27),
        u = o(n(735)),
        c = (function(e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.handleChange = function(e) {
                console.log(e);
              }),
              t
            );
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              for (
                var e = l.Typography.Text, t = l.Select.Option, n = [], a = 10;
                a < 36;
                a++
              )
                n.push(
                  i.createElement(
                    t,
                    { key: a.toString(36) + a, value: a },
                    "CCD Feedback" + a
                  )
                );
              return i.createElement(
                s.Widget,
                {
                  title: "Individual Form Report",
                  style: {
                    backgroundColor: "white",
                    margin: "0px 30px 0px 30px"
                  },
                  styleName: "gx-card-tabs",
                  extra: i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      l.Row,
                      null,
                      i.createElement(
                        "div",
                        { className: "ant-row-flex gx-px-2 gx-pt-2" },
                        i.createElement(
                          "div",
                          { className: "gx-ml-auto" },
                          i.createElement(
                            e,
                            { style: { marginRight: "15px" }, disabled: !0 },
                            "Filter by"
                          ),
                          i.createElement(
                            l.Select,
                            {
                              className: "gx-mb-2 gx-select-lg",
                              defaultValue: "month",
                              onChange: this.handleChange
                            },
                            i.createElement(t, { value: "month" }, "Age 25-35")
                          )
                        )
                      ),
                      i.createElement(
                        "div",
                        { className: "ant-row-flex gx-px-2 gx-pt-2" },
                        i.createElement(
                          "div",
                          { className: "gx-ml-auto" },
                          i.createElement(
                            l.Select,
                            {
                              className: "gx-mb-2 gx-select-lg",
                              defaultValue: "month",
                              onChange: this.handleChange
                            },
                            i.createElement(t, { value: "month" }, "Monthly"),
                            i.createElement(t, { value: "week" }, "Weekly"),
                            i.createElement(t, { value: "year" }, "Yearly")
                          )
                        )
                      )
                    )
                  )
                },
                i.createElement(
                  l.Row,
                  null,
                  i.createElement(
                    l.Col,
                    { lg: 13, md: 13, sm: 24, xs: 24 },
                    i.createElement(
                      "div",
                      { className: "gx-mb-2  gx-pt-2" },
                      i.createElement(
                        e,
                        { disabled: !0, style: { marginBottom: "15px" } },
                        "Choose Form"
                      )
                    ),
                    i.createElement(
                      "div",
                      null,
                      i.createElement(
                        l.Select,
                        {
                          defaultValue: "CCD Feedback 1",
                          style: { width: "100%" },
                          onChange: this.handleChange
                        },
                        n
                      )
                    )
                  )
                ),
                i.createElement(
                  l.Row,
                  null,
                  i.createElement(
                    l.Col,
                    { lg: 13, md: 13, sm: 24, xs: 24 },
                    i.createElement(
                      l.Row,
                      null,
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "179,626"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Request Sent"
                        )
                      ),
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "112,221"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Clicks Opened"
                        )
                      ),
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "171,211"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Response Rate"
                        )
                      ),
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "70.01%"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Completion Rate"
                        )
                      ),
                      i.createElement(
                        l.Col,
                        {
                          style: { marginTop: "4rem" },
                          lg: 8,
                          md: 8,
                          sm: 12,
                          xs: 12
                        },
                        i.createElement(
                          "div",
                          { className: "ant-row-flex" },
                          i.createElement(
                            "h2",
                            {
                              className:
                                "gx-mr-2 gx-mb-0 gx-fs-xxxl gx-font-weight-medium"
                            },
                            "22%"
                          )
                        ),
                        i.createElement(
                          "p",
                          {
                            style: { marginTop: "1rem" },
                            className: "gx-text-grey"
                          },
                          "Avg. Time for Completion"
                        )
                      )
                    )
                  ),
                  i.createElement(
                    l.Col,
                    { lg: 11, md: 11, sm: 24, xs: 24 },
                    i.createElement(
                      "div",
                      { style: { marginLeft: "10rem" } },
                      i.createElement(l.Progress, {
                        type: "dashboard",
                        width: 250,
                        gapDegree: 100,
                        percent: 25,
                        format: function(t) {
                          return i.createElement(
                            i.Fragment,
                            null,
                            i.createElement("p", null),
                            i.createElement(
                              e,
                              { style: { fontSize: "25px" } },
                              t
                            ),
                            i.createElement("br", null),
                            i.createElement(
                              e,
                              { style: { fontSize: "25px" } },
                              "NPS rate"
                            )
                          );
                        }
                      })
                    )
                  )
                ),
                i.createElement(
                  l.Row,
                  { style: { marginTop: "10px" } },
                  i.createElement(
                    l.Col,
                    { lg: 12, md: 13, sm: 24, xs: 24 },
                    i.createElement(
                      l.Row,
                      null,
                      i.createElement(
                        l.Col,
                        { lg: 12, md: 12, sm: 24, xs: 24 },
                        i.createElement(e, null, "Device Split-")
                      ),
                      i.createElement(l.Col, { lg: 12, md: 12, sm: 24, xs: 24 })
                    ),
                    i.createElement(
                      l.Row,
                      null,
                      i.createElement(
                        l.Col,
                        { lg: 20, md: 20, sm: 24, xs: 24 },
                        i.createElement(e, null, "Audience Split-")
                      )
                    )
                  ),
                  i.createElement(
                    l.Col,
                    { lg: 12, md: 11, sm: 24, xs: 24 },
                    i.createElement(
                      "div",
                      { className: "gx-mb-2  gx-pt-2" },
                      i.createElement(
                        e,
                        { style: { marginBottom: "15px" } },
                        "Issue Tag Response"
                      )
                    ),
                    i.createElement(u.default, null)
                  )
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = c;
    },
    735: function(e, t, n) {
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
      var r = a(n(0)),
        o = n(347),
        i = n(462);
      t.default = function() {
        return r.createElement(
          o.ResponsiveContainer,
          { width: "100%", height: 400 },
          r.createElement(
            o.BarChart,
            {
              data: i.data05,
              margin: { top: 10, right: 0, left: -15, bottom: 0 }
            },
            r.createElement(o.XAxis, { dataKey: "name" }),
            r.createElement(o.YAxis, null),
            r.createElement(o.Tooltip, null),
            r.createElement(o.Legend, null),
            r.createElement(o.Bar, {
              dataKey: "negative",
              stackId: "a",
              fill: "#003366"
            }),
            r.createElement(o.Bar, {
              dataKey: "positive",
              stackId: "a",
              fill: "#FE9E15"
            }),
            r.createElement(o.Bar, {
              dataKey: "neutral",
              stackId: "a",
              fill: "#b056dd"
            })
          )
        );
      };
    },
    736: function(e, t, n) {
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
        r =
          (this && this.__assign) ||
          function() {
            return (r =
              Object.assign ||
              function(e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        o =
          (this && this.__importStar) ||
          function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          },
        i =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = o(n(0)),
        s = n(3),
        u = n(27),
        c = i(n(5)),
        p = s.Select.Option,
        d =
          (s.Form.Item,
          (function(e) {
            function t(t) {
              var n = e.call(this, t) || this;
              return (
                (n.onChangeDate = function(e, t, a) {
                  var r = n.state.data.map(function(t) {
                    return t.id === e.id && (t.date = c.default(a)), t;
                  });
                  n.setState({ data: r });
                }),
                (n.handleSwitchChange = function(e, t) {
                  var a = n.state.data.map(function(n) {
                    return n.id === e.id && (n.enabled = t), n;
                  });
                  n.setState({ data: a });
                }),
                (n.updateCommunication = function() {
                  var e = n.state.data;
                  console.log("data", e);
                }),
                (n.onOk = function(e) {
                  console.log("onOk: ", e);
                }),
                (n.onBlur = function() {
                  console.log("blur");
                }),
                (n.onFocus = function() {
                  console.log("focus");
                }),
                (n.onSearch = function(e) {
                  console.log("search:", e);
                }),
                (n.onInputChange = function(e, t) {
                  var a = n.state.data.map(function(n) {
                    return n.id === e.id && (n.recipients = t.target.value), n;
                  });
                  n.setState({ data: a });
                }),
                (n.onChange = function(e, t) {
                  var a = n.state.data.map(function(n) {
                    return n.id === e.id && (n.frequency = t), n;
                  });
                  n.setState({ data: a });
                }),
                (n.handleToggle = function(e) {
                  return function(t) {
                    n.setState(function(n) {
                      var a;
                      return r({}, n, (((a = {})[e] = t), a));
                    });
                  };
                }),
                (n.handleAdd = function() {
                  var e = n.state,
                    t = e.data,
                    a = e.count,
                    r = {
                      id: a + 1,
                      enabled: !0,
                      recipients: "",
                      date: c.default(),
                      frequency: ""
                    };
                  n.setState({ data: t.concat([r]), count: a + 1 });
                }),
                (n.state = {
                  bordered: !1,
                  loading: !1,
                  pagination: "",
                  size: "default",
                  title: void 0,
                  showHeader: !0,
                  scroll: void 0,
                  hasData: !0,
                  data: [],
                  count: 1
                }),
                n
              );
            }
            return (
              a(t, e),
              (t.prototype.componentDidMount = function() {
                var e = [
                    {
                      id: "1",
                      enabled: !1,
                      recipients: "sachin@getwalk.in",
                      date: c.default("12/12/2013"),
                      frequency: "month"
                    }
                  ],
                  t = e.length;
                this.setState({ data: e, count: t });
              }),
              (t.prototype.render = function() {
                var e = this,
                  t = this.state,
                  n = t.data,
                  a = [
                    {
                      key: "1",
                      dataIndex: "enabled",
                      width: 140,
                      render: function(t, n) {
                        return l.createElement(
                          "div",
                          { style: { marginBottom: 10 } },
                          l.createElement(s.Switch, {
                            defaultChecked: !0,
                            checked: t,
                            onChange: e.handleSwitchChange.bind(e, n)
                          })
                        );
                      }
                    },
                    {
                      title: "Recipients",
                      dataIndex: "recipients",
                      key: "2",
                      width: 300,
                      render: function(t, n) {
                        return l.createElement(
                          "div",
                          { style: { marginBottom: 10 } },
                          l.createElement(s.Input, {
                            onChange: e.onInputChange.bind(e, n),
                            addonBefore: "To",
                            value: t
                          })
                        );
                      }
                    },
                    {
                      title: "Date & Time",
                      dataIndex: "date",
                      key: "3",
                      width: 300,
                      render: function(t, n) {
                        return l.createElement(
                          "div",
                          { style: { marginBottom: 10 } },
                          l.createElement(s.DatePicker, {
                            value: t,
                            showTime: !0,
                            placeholder: "Select Time",
                            onChange: e.onChangeDate.bind(e, n),
                            onOk: e.onOk
                          })
                        );
                      }
                    },
                    {
                      title: "Frequency",
                      dataIndex: "frequency",
                      key: "4",
                      width: 360,
                      render: function(t, n) {
                        return l.createElement(
                          "div",
                          { style: { marginBottom: 10 } },
                          l.createElement(
                            s.Select,
                            {
                              value: t,
                              showSearch: !0,
                              style: { width: 200 },
                              placeholder: "Select Frequency",
                              optionFilterProp: "children",
                              onChange: e.onChange.bind(e, n),
                              onFocus: e.onFocus,
                              onBlur: e.onBlur,
                              onSearch: e.onSearch,
                              filterOption: function(e, t) {
                                return (
                                  t.props.children
                                    .toLowerCase()
                                    .indexOf(e.toLowerCase()) >= 0
                                );
                              }
                            },
                            l.createElement(
                              p,
                              { value: "month" },
                              "Every Month"
                            ),
                            l.createElement(p, { value: "week" }, "Every Week")
                          )
                        );
                      }
                    }
                  ];
                return l.createElement(
                  u.Widget,
                  {
                    title: "Send Report Schedule",
                    style: {
                      backgroundColor: "white",
                      margin: "0px 30px 30px 30px"
                    },
                    styleName: "gx-card-tabs",
                    extra: l.createElement(
                      "div",
                      { className: "ant-row-flex gx-px-2 gx-pt-2" },
                      l.createElement(
                        "div",
                        { className: "gx-ml-auto" },
                        l.createElement(
                          s.Button,
                          {
                            onClick: this.updateCommunication,
                            type: "primary",
                            size: "large"
                          },
                          "Update"
                        )
                      )
                    )
                  },
                  l.createElement(
                    s.Row,
                    null,
                    l.createElement(
                      s.Col,
                      null,
                      l.createElement(
                        "div",
                        { style: { width: "100%" } },
                        l.createElement(
                          s.Table,
                          r({ style: { width: "75vw" } }, this.state, {
                            columns: a,
                            dataSource: t.hasData ? n : null
                          })
                        ),
                        l.createElement(
                          s.Button,
                          {
                            onClick: this.handleAdd,
                            icon: "plus",
                            style: {
                              marginBottom: 16,
                              marginLeft: 150,
                              marginTop: 10
                            }
                          },
                          "Add"
                        )
                      )
                    )
                  )
                );
              }),
              t
            );
          })(l.Component));
      t.default = d;
    },
    737: function(e, t, n) {
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
        r =
          (this && this.__importDefault) ||
          function(e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = a(n(0)),
        i = n(16),
        l = r(n(738));
      t.default = function(e) {
        var t = e.match;
        return o.createElement(
          i.Switch,
          null,
          o.createElement(i.Route, {
            exact: !0,
            path: t.url,
            component: l.default
          })
        );
      };
    },
    738: function(e, t, n) {
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
        l = n(3),
        s = n(27),
        u = n(14),
        c = o(n(739)),
        p = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (n.state = {}), n;
          }
          return (
            a(t, e),
            (t.prototype.render = function() {
              return i.createElement(
                s.Auxiliary,
                null,
                i.createElement(
                  "div",
                  {
                    style: { minHeight: "100vh", backgroundColor: "#F2F2F2" },
                    className: "gx-main-content-wrapper"
                  },
                  i.createElement(
                    l.Row,
                    null,
                    i.createElement(
                      l.Col,
                      { sm: 24, md: 18, xl: 20 },
                      i.createElement(
                        "span",
                        {
                          className: "gx-d-none gx-d-sm-flex",
                          style: {
                            width: "100%",
                            fontSize: 24,
                            color: "#5B5B5B"
                          }
                        },
                        "Issue Tags"
                      )
                    )
                  ),
                  i.createElement(
                    l.Row,
                    {
                      style: {
                        marginLeft: "1px",
                        height: "500px",
                        marginRight: "1px",
                        paddingBottom: "20px"
                      }
                    },
                    i.createElement(c.default, null)
                  )
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = u.withApollo(p);
    },
    739: function(e, t, n) {
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
        l = r(n(1332));
      n(1279);
      var s = n(3),
        u = o(n(915)),
        c = n(30),
        p =
          (s.Select.Option,
          [
            {
              id: 1,
              title: "Overall Experience",
              children: [
                {
                  id: 3,
                  title: "Store",
                  children: [
                    { id: 5, title: "Ambience", children: [] },
                    { id: 7, title: "Billing", children: [] },
                    { id: 8, title: "Cleanliness", children: [] }
                  ]
                },
                { id: 4, title: "Staff", children: [] },
                { id: 6, title: "Stock", children: [] }
              ]
            },
            { id: 2, title: "Service Experience", children: [] }
          ]),
        d = (function(e) {
          function t(t) {
            var n = e.call(this, t) || this;
            return (
              (n.onTitleChange = function(e) {
                var t = e.target.value;
                n.setState({ nodeTitle: t });
              }),
              (n.state = {
                treeData: [],
                nodeTitle: "",
                visible: !1,
                nodeData: {}
              }),
              n
            );
          }
          return (
            a(t, e),
            (t.prototype.onCancelNewNode = function() {
              this.setState({ visible: !1, nodeTitle: "" });
            }),
            (t.prototype.createNewNode = function() {
              var e = this.state.nodeData.path,
                t = !1;
              1 === e.length && (t = !0);
              var n = {
                  id: "Value",
                  title: this.state.nodeTitle,
                  isDirectory: !0,
                  expanded: !0,
                  type: "nodeValue",
                  children: []
                },
                a = l.changeNodeAtPath({
                  treeData: this.state.treeData,
                  path: e,
                  newNode: n,
                  getNodeKey: function(e) {
                    return e.treeIndex;
                  },
                  ignoreCollapsed: !0
                });
              if (t) {
                var r = a;
                r.push({
                  id: "value",
                  title: "Add Node",
                  type: "newNode",
                  expanded: !0,
                  children: []
                }),
                  this.setState({
                    visible: !1,
                    nodeTitle: "",
                    nodeData: {},
                    treeData: r
                  });
              } else
                this.setState({
                  visible: !1,
                  nodeTitle: "",
                  nodeData: {},
                  treeData: a
                });
            }),
            (t.prototype.convertedNodes = function() {
              var e = this.convertNodes(p);
              this.setState({ treeData: e });
            }),
            (t.prototype.convertNodes = function(e) {
              var t = this,
                n = [];
              return (
                e.forEach(function(e) {
                  n.push({
                    id: e.id,
                    title: e.title,
                    type: "nodeValue",
                    expanded: !0,
                    children:
                      0 === e.children.length ? [] : t.convertNodes(e.children)
                  });
                }),
                n.push({
                  id: 0,
                  title: "Add Node",
                  type: "newNode",
                  expanded: !0,
                  children: []
                }),
                n
              );
            }),
            (t.prototype.getCleanedData = function() {
              var e = this.cleanData(this.state.treeData);
              console.log("Cleaned Data : ", e);
            }),
            (t.prototype.cleanData = function(e) {
              var t = this,
                n = [];
              return (
                e.forEach(function(e) {
                  "newNode" !== e.type &&
                    n.push({
                      id: e.id,
                      title: e.title,
                      children:
                        0 === e.children.length ? [] : t.cleanData(e.children)
                    });
                }),
                n
              );
            }),
            (t.prototype.renderNode = function(e) {
              var t = this,
                n = e.node;
              e.path;
              return "nodeValue" === n.type
                ? i.createElement(
                    s.Row,
                    null,
                    i.createElement(
                      s.Col,
                      {
                        onClick: function() {
                          t.addNewNode(e);
                        },
                        span: 10,
                        style: { fontSize: "12px", paddingTop: "5px" }
                      },
                      i.createElement(c.HoverText, null, n.title)
                    ),
                    i.createElement(
                      s.Col,
                      {
                        span: 14,
                        style: { marginRight: "-227px", paddingLeft: "218px" }
                      },
                      i.createElement(
                        "div",
                        {
                          onClick: function() {
                            t.removeNode(e);
                          }
                        },
                        i.createElement(s.Icon, { type: "close" })
                      )
                    )
                  )
                : "newNode" === n.type
                ? i.createElement(
                    "div",
                    {
                      onClick: function() {
                        t.setState({ nodeData: e, visible: !0 });
                      }
                    },
                    i.createElement(
                      s.Col,
                      {
                        span: 24,
                        style: {
                          fontSize: "12px",
                          paddingTop: "5px",
                          width: "100%"
                        }
                      },
                      n.title
                    )
                  )
                : void 0;
            }),
            (t.prototype.addNewNode = function(e) {
              var t = !1;
              if (
                (e.node.children.forEach(function(e) {
                  "newNode" === e.type && (t = !0);
                }),
                !t)
              ) {
                var n = l.addNodeUnderParent({
                  treeData: this.state.treeData,
                  newNode: {
                    title: "Add Node",
                    isDirectory: !0,
                    expanded: !0,
                    type: "newNode",
                    children: []
                  },
                  expandParent: !0,
                  parentKey: e ? e.treeIndex : void 0,
                  getNodeKey: function(e) {
                    return e.treeIndex;
                  }
                });
                this.setState({ treeData: n.treeData });
              }
            }),
            (t.prototype.removeNode = function(e) {
              var t = e.path;
              if (1 !== t.length) {
                var n = l.removeNodeAtPath({
                  treeData: this.state.treeData,
                  path: t,
                  getNodeKey: function(e) {
                    return e.treeIndex;
                  }
                });
                this.setState({ treeData: n });
              } else s.message.warn("Sorry, You cannot delete parent tag.");
            }),
            (t.prototype.render = function() {
              var e = this,
                t = this.state,
                n = t.visible,
                a = t.treeData,
                r = t.nodeTitle;
              return i.createElement(
                "div",
                { style: { height: "auto", width: "100%" } },
                i.createElement(l.default, {
                  canDrag: !1,
                  treeData: a,
                  onChange: function(t) {
                    return e.setState({ treeData: t });
                  },
                  nodeContentRenderer: u.default,
                  generateNodeProps: function(t) {
                    return {
                      title: i.createElement("div", null, e.renderNode(t))
                    };
                  }
                }),
                i.createElement(
                  s.Button,
                  {
                    onClick: function() {
                      e.convertedNodes();
                    }
                  },
                  "Reset"
                ),
                i.createElement(
                  s.Button,
                  {
                    onClick: function() {
                      e.getCleanedData();
                    }
                  },
                  "Clean Data"
                ),
                i.createElement(
                  s.Modal,
                  {
                    title: "Enter Tag Name",
                    visible: n,
                    onCancel: function() {
                      e.onCancelNewNode();
                    },
                    onOk: function() {
                      return e.createNewNode();
                    },
                    width: "500px"
                  },
                  i.createElement(s.Input, {
                    placeholder: "",
                    value: r,
                    onChange: this.onTitleChange,
                    style: {
                      fontWeight: 300,
                      fontSize: "12px",
                      marginTop: "10px"
                    }
                  })
                )
              );
            }),
            t
          );
        })(i.Component);
      t.default = d;
    },
    79: function(e, t, n) {},
    810: function(e, t, n) {},
    812: function(e, t, n) {},
    814: function(e, t, n) {},
    915: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a);
      n(1), Object.assign;
      function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(" ");
      }
      n(810);
      var i =
        Object.assign ||
        function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var a in n)
              Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
          return e;
        };
      var l = r.a.createElement("div", { className: "rst__moveHandle" }),
        s = (function(e) {
          function t() {
            return (
              (function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
              (function(e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              })(this, e.apply(this, arguments))
            );
          }
          return (
            (function(e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function, not " +
                    typeof t
                );
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              })),
                t &&
                  (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : (e.__proto__ = t));
            })(t, e),
            (t.prototype.render = function() {
              var e = this.props,
                t = e.scaffoldBlockPxWidth,
                n = e.toggleChildrenVisibility,
                a = e.connectDragPreview,
                s = e.connectDragSource,
                u = e.isDragging,
                c = e.canDrop,
                p = e.canDrag,
                d = e.node,
                m = e.title,
                f = e.subtitle,
                h = e.draggedNode,
                g = e.path,
                y = e.treeIndex,
                v = e.isSearchMatch,
                _ = e.isSearchFocus,
                E = e.buttons,
                b = e.className,
                C = e.style,
                S = e.didDrop,
                T = (e.treeId, e.isOver, e.parentNode, e.rowDirection),
                x = (function(e, t) {
                  var n = {};
                  for (var a in e)
                    t.indexOf(a) >= 0 ||
                      (Object.prototype.hasOwnProperty.call(e, a) &&
                        (n[a] = e[a]));
                  return n;
                })(e, [
                  "scaffoldBlockPxWidth",
                  "toggleChildrenVisibility",
                  "connectDragPreview",
                  "connectDragSource",
                  "isDragging",
                  "canDrop",
                  "canDrag",
                  "node",
                  "title",
                  "subtitle",
                  "draggedNode",
                  "path",
                  "treeIndex",
                  "isSearchMatch",
                  "isSearchFocus",
                  "buttons",
                  "className",
                  "style",
                  "didDrop",
                  "treeId",
                  "isOver",
                  "parentNode",
                  "rowDirection"
                ]),
                O = m || d.title,
                w = f || d.subtitle,
                I = "rtl" === T ? "rst__rtl" : null,
                A = "nodeValue" === d.type,
                N = void 0;
              p &&
                (N =
                  "function" == typeof d.children && d.expanded
                    ? r.a.createElement(
                        "div",
                        { className: "rst__loadingHandle" },
                        r.a.createElement(
                          "div",
                          { className: "rst__loadingCircle" },
                          [].concat(new Array(12)).map(function(e, t) {
                            return r.a.createElement("div", {
                              key: t,
                              className: o("rst__loadingCirclePoint", I)
                            });
                          })
                        )
                      )
                    : s(l, { dropEffect: "copy" }));
              var P =
                  h &&
                  (function e(t, n) {
                    return (
                      !!t.children &&
                      "function" != typeof t.children &&
                      t.children.some(function(t) {
                        return t === n || e(t, n);
                      })
                    );
                  })(h, d),
                k = !S && u,
                F = { left: -0.5 * t };
              return (
                "rtl" === T && (F = { right: -0.5 * t }),
                r.a.createElement(
                  "div",
                  i({ style: { height: "100%" } }, x),
                  n &&
                    d.children &&
                    (d.children.length > 0 ||
                      "function" == typeof d.children) &&
                    r.a.createElement(
                      "div",
                      null,
                      r.a.createElement("button", {
                        type: "button",
                        "aria-label": d.expanded ? "Collapse" : "Expand",
                        className: o(
                          d.expanded
                            ? "rst__collapseButton"
                            : "rst__expandButton",
                          I
                        ),
                        style: F,
                        onClick: function() {
                          return n({ node: d, path: g, treeIndex: y });
                        }
                      }),
                      d.expanded &&
                        !u &&
                        r.a.createElement("div", {
                          style: { width: t },
                          className: o("rst__lineChildren", I)
                        })
                    ),
                  r.a.createElement(
                    "div",
                    { className: o("rst__rowWrapper", I) },
                    a(
                      r.a.createElement(
                        "div",
                        {
                          className: o(
                            "rst__row",
                            k && "rst__rowLandingPad",
                            k && !c && "rst__rowCancelPad",
                            v && "rst__rowSearchMatch",
                            _ && "rst__rowSearchFocus",
                            I,
                            b
                          ),
                          style: i({ opacity: P ? 0.5 : 1 }, C)
                        },
                        N,
                        r.a.createElement(
                          "div",
                          {
                            className: A
                              ? o(
                                  "rst__rowContents",
                                  !p && "rst__rowContentsDragDisabled",
                                  I
                                )
                              : o(
                                  "rst__addRowContents",
                                  !p && "rst__addRowContentsDragDisabled",
                                  I
                                )
                          },
                          r.a.createElement(
                            "div",
                            { className: o("rst__rowLabel", I) },
                            r.a.createElement(
                              "span",
                              {
                                className: o(
                                  "rst__rowTitle",
                                  d.subtitle && "rst__rowTitleWithSubtitle"
                                )
                              },
                              "function" == typeof O
                                ? O({ node: d, path: g, treeIndex: y })
                                : O
                            ),
                            w &&
                              r.a.createElement(
                                "span",
                                { className: "rst__rowSubtitle" },
                                "function" == typeof w
                                  ? w({ node: d, path: g, treeIndex: y })
                                  : w
                              )
                          ),
                          r.a.createElement(
                            "div",
                            { className: "rst__rowToolbar" },
                            E.map(function(e, t) {
                              return r.a.createElement(
                                "div",
                                { key: t, className: "rst__toolbarButton" },
                                e
                              );
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
        })(a.Component);
      s.defaultProps = {
        isSearchMatch: !1,
        isSearchFocus: !1,
        canDrag: !1,
        toggleChildrenVisibility: null,
        buttons: [],
        className: "",
        style: {},
        parentNode: null,
        draggedNode: null,
        canDrop: !1,
        title: null,
        subtitle: null,
        rowDirection: "ltr"
      };
      t.default = s;
    }
  },
  [[645, 2, 0, 1]]
]);
//# sourceMappingURL=walkinRefineX.f3a7ee95.js.map
