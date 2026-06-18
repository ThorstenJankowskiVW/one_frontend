"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = require("react-dom/client");
var _linkedContext = require("./linked-context.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var context = (0, _linkedContext.createLinkedLaunchContext)();
function LinkedHero() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "linked-hero"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("groupui-tag", null, "React Shell"), /*#__PURE__*/_react["default"].createElement("groupui-headline", {
    heading: "h1"
  }, "Linked Integration"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "hero-lead"
  }, "Loose coupling through explicit system handover.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "linked-system-strip",
    "aria-label": "System handover"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "system-badge system-badge-host"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Host"), /*#__PURE__*/_react["default"].createElement("strong", null, "React Shell")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "system-arrow",
    "aria-hidden": "true"
  }, "\u2192"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "system-badge system-badge-target"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Target"), /*#__PURE__*/_react["default"].createElement("strong", null, "Angular App"))));
}
function JourneyCards() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "linked-journey",
    "aria-label": "Customer journey"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "journey-card journey-card-active"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Step 1"), /*#__PURE__*/_react["default"].createElement("strong", null, "Dashboard with a case"), /*#__PURE__*/_react["default"].createElement("p", null, "The React shell shows the case and offers a follow-up action.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "journey-card"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Step 2"), /*#__PURE__*/_react["default"].createElement("strong", null, "Explicit launch"), /*#__PURE__*/_react["default"].createElement("p", null, "The button opens a modal popup before leaving the host.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "journey-card"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Step 3"), /*#__PURE__*/_react["default"].createElement("strong", null, "Target system opened"), /*#__PURE__*/_react["default"].createElement("p", null, "The browser navigates to a separate Angular app page.")));
}
function DashboardCard(_ref) {
  var onLaunch = _ref.onLaunch;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "system-card system-card-host"
  }, /*#__PURE__*/_react["default"].createElement("groupui-tag", null, "Host"), /*#__PURE__*/_react["default"].createElement("groupui-headline", {
    heading: "h3"
  }, "React Shell Dashboard"), /*#__PURE__*/_react["default"].createElement("groupui-text", null, "Case ", context.caseId, " is visible in the host application."), /*#__PURE__*/_react["default"].createElement("dl", {
    className: "compact-list"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("dt", null, "Customer"), /*#__PURE__*/_react["default"].createElement("dd", null, context.customerId)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("dt", null, "Vehicle"), /*#__PURE__*/_react["default"].createElement("dd", null, context.vehicleId)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("dt", null, "Status"), /*#__PURE__*/_react["default"].createElement("dd", null, context.status))), /*#__PURE__*/_react["default"].createElement("groupui-button", {
    id: "linked-edit-follow-up",
    onClick: onLaunch
  }, "Edit follow-up step"));
}
function TargetPlaceholder() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "system-card system-card-target"
  }, /*#__PURE__*/_react["default"].createElement("groupui-tag", null, "Target"), /*#__PURE__*/_react["default"].createElement("groupui-headline", {
    heading: "h3"
  }, "Angular App"), /*#__PURE__*/_react["default"].createElement("groupui-text", null, "The target is launched explicitly. It is not embedded in the React shell."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "target-placeholder"
  }, /*#__PURE__*/_react["default"].createElement("strong", null, "Case Follow-Up App"), /*#__PURE__*/_react["default"].createElement("span", null, "Opened only after context handover")));
}
function ContextPanel() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "context-panel linked-context-panel",
    "aria-label": "Transfer payload"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("groupui-text", {
    weight: "bold"
  }, "Transfer payload"), /*#__PURE__*/_react["default"].createElement("p", null, "Only the fields needed for the linked handover are shown here.")), /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify((0, _linkedContext.linkedTransferPayload)(context), null, 2)));
}
function LinkedLaunchModal(_ref2) {
  var isOpen = _ref2.isOpen,
    onClose = _ref2.onClose,
    onOpenTarget = _ref2.onOpenTarget;
  var _React$useState = _react["default"].useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    note = _React$useState2[0],
    setNote = _React$useState2[1];
  var modalRef = _react["default"].useRef(null);
  var payload = (0, _linkedContext.linkedTransferPayload)(context);
  _react["default"].useEffect(function () {
    if (isOpen && modalRef.current && !modalRef.current.open) {
      modalRef.current.showModal();
    }
    if (!isOpen && modalRef.current && modalRef.current.open) {
      modalRef.current.close();
    }
  }, [isOpen]);
  if (!isOpen) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("dialog", {
    ref: modalRef,
    className: "g-modal g-modal-centered"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "linked-modal-content"
  }, /*#__PURE__*/_react["default"].createElement("groupui-tag", null, "Explicit system handover"), /*#__PURE__*/_react["default"].createElement("groupui-headline", {
    heading: "h3"
  }, "Target system opened"), /*#__PURE__*/_react["default"].createElement("groupui-text", null, "The React shell is launching the Angular app as a separate page. The target is not embedded."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "launch-details"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "launch-detail-row"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Application"), /*#__PURE__*/_react["default"].createElement("strong", null, "Case Follow-Up App")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "launch-detail-row"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Technology"), /*#__PURE__*/_react["default"].createElement("strong", null, "Angular")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "launch-detail-row"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Integration"), /*#__PURE__*/_react["default"].createElement("strong", null, "Linked Launchpad")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "launch-detail-row"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Transport"), /*#__PURE__*/_react["default"].createElement("strong", null, "URL / serialized context"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-system-strip",
    "aria-label": "Host and target"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "system-badge system-badge-host"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Host"), /*#__PURE__*/_react["default"].createElement("strong", null, "React Shell")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "system-arrow",
    "aria-hidden": "true"
  }, "\u2192"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "system-badge system-badge-target"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Target"), /*#__PURE__*/_react["default"].createElement("strong", null, "Angular App"))), /*#__PURE__*/_react["default"].createElement("groupui-headline", {
    heading: "h4"
  }, "Context received"), /*#__PURE__*/_react["default"].createElement("dl", {
    className: "context-key-values"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("dt", null, "caseId"), /*#__PURE__*/_react["default"].createElement("dd", null, payload.caseId)), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("dt", null, "customerId"), /*#__PURE__*/_react["default"].createElement("dd", null, context.customerId))), /*#__PURE__*/_react["default"].createElement("groupui-headline", {
    heading: "h4"
  }, "Transfer payload"), /*#__PURE__*/_react["default"].createElement("pre", null, JSON.stringify(payload, null, 2)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-form"
  }, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("span", null, "Follow-up note"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Example: call customer tomorrow",
    value: note,
    onChange: function onChange(event) {
      return setNote(event.target.value);
    }
  })), /*#__PURE__*/_react["default"].createElement("groupui-button", {
    onClick: function onClick() {
      return onOpenTarget(note);
    }
  }, "Open Angular App")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "action-row right"
  }, /*#__PURE__*/_react["default"].createElement("groupui-button", {
    variant: "secondary",
    onClick: onClose
  }, "Close"))));
}
function App() {
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    modalOpen = _React$useState4[0],
    setModalOpen = _React$useState4[1];
  var openTarget = function openTarget(note) {
    var targetContext = (0, _linkedContext.createLinkedLaunchContext)({
      sourceStep: 'target-opened',
      followUpNote: note
    });
    var url = "".concat(window.location.origin).concat(window.location.pathname.replace('linked-host.html', 'linked-target.html'), "?context=").concat(encodeURIComponent(JSON.stringify(targetContext)));
    window.location.href = url;
  };
  return /*#__PURE__*/_react["default"].createElement("main", {
    className: "linked-page"
  }, /*#__PURE__*/_react["default"].createElement(LinkedHero, null), /*#__PURE__*/_react["default"].createElement(JourneyCards, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "linked-dashboard"
  }, /*#__PURE__*/_react["default"].createElement(DashboardCard, {
    onLaunch: function onLaunch() {
      return setModalOpen(true);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "system-boundary",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "System boundary")), /*#__PURE__*/_react["default"].createElement(TargetPlaceholder, null)), /*#__PURE__*/_react["default"].createElement(ContextPanel, null), /*#__PURE__*/_react["default"].createElement(LinkedLaunchModal, {
    isOpen: modalOpen,
    onClose: function onClose() {
      return setModalOpen(false);
    },
    onOpenTarget: openTarget
  }));
}
(0, _client.createRoot)(document.querySelector('#root')).render(/*#__PURE__*/_react["default"].createElement(App, null));
