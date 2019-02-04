/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./spec/knockout-classBindingProvider.spec.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/knockout-classBindingProvider.min.js":
/*!***************************************************!*\
  !*** ./dist/knockout-classBindingProvider.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(window, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) {
        n.d(r, i, function (t) {
          return e[t];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 1);
  }([function (e, t, n) {
    (function (e) {
      var n, r, i, o;

      function a(e) {
        return (a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
          return _typeof(e);
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
        })(e);
      }

      o = !0, function (s) {
        var l,
            u = this || (0, eval)("this"),
            d = u.document,
            c = u.navigator,
            p = u.jQuery,
            f = u.JSON;
        l = function l(e) {
          var t = void 0 !== e ? e : {};
          t.exportSymbol = function (e, n) {
            for (var r = e.split("."), i = t, o = 0; o < r.length - 1; o++) {
              i = i[r[o]];
            }

            i[r[r.length - 1]] = n;
          }, t.exportProperty = function (e, t, n) {
            e[t] = n;
          }, t.version = "3.0.0", t.exportSymbol("version", t.version), t.utils = function () {
            var e = function e(_e, t) {
              for (var n in _e) {
                _e.hasOwnProperty(n) && t(n, _e[n]);
              }
            },
                n = {},
                r = {};

            n[c && /Firefox\/2/i.test(c.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"], n.MouseEvents = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave"], e(n, function (e, t) {
              if (t.length) for (var n = 0, i = t.length; n < i; n++) {
                r[t[n]] = e;
              }
            });

            var i = {
              propertychange: !0
            },
                o = d && function () {
              for (var e = 3, t = d.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e", n[0];) {
                ;
              }

              return e > 4 ? e : s;
            }();

            function l(e, n) {
              if ("input" !== t.utils.tagNameLower(e) || !e.type) return !1;
              if ("click" != n.toLowerCase()) return !1;
              var r = e.type;
              return "checkbox" == r || "radio" == r;
            }

            return {
              fieldsIncludedWithJsonPost: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
              arrayForEach: function arrayForEach(e, t) {
                for (var n = 0, r = e.length; n < r; n++) {
                  t(e[n]);
                }
              },
              arrayIndexOf: function arrayIndexOf(e, t) {
                if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(e, t);

                for (var n = 0, r = e.length; n < r; n++) {
                  if (e[n] === t) return n;
                }

                return -1;
              },
              arrayFirst: function arrayFirst(e, t, n) {
                for (var r = 0, i = e.length; r < i; r++) {
                  if (t.call(n, e[r])) return e[r];
                }

                return null;
              },
              arrayRemoveItem: function arrayRemoveItem(e, n) {
                var r = t.utils.arrayIndexOf(e, n);
                r >= 0 && e.splice(r, 1);
              },
              arrayGetDistinctValues: function arrayGetDistinctValues(e) {
                for (var n = [], r = 0, i = (e = e || []).length; r < i; r++) {
                  t.utils.arrayIndexOf(n, e[r]) < 0 && n.push(e[r]);
                }

                return n;
              },
              arrayMap: function arrayMap(e, t) {
                for (var n = [], r = 0, i = (e = e || []).length; r < i; r++) {
                  n.push(t(e[r]));
                }

                return n;
              },
              arrayFilter: function arrayFilter(e, t) {
                for (var n = [], r = 0, i = (e = e || []).length; r < i; r++) {
                  t(e[r]) && n.push(e[r]);
                }

                return n;
              },
              arrayPushAll: function arrayPushAll(e, t) {
                if (t instanceof Array) e.push.apply(e, t);else for (var n = 0, r = t.length; n < r; n++) {
                  e.push(t[n]);
                }
                return e;
              },
              addOrRemoveItem: function addOrRemoveItem(e, n, r) {
                var i = t.utils.arrayIndexOf(t.utils.peekObservable(e), n);
                i < 0 ? r && e.push(n) : r || e.splice(i, 1);
              },
              extend: function extend(e, t) {
                if (t) for (var n in t) {
                  t.hasOwnProperty(n) && (e[n] = t[n]);
                }
                return e;
              },
              objectForEach: e,
              objectMap: function objectMap(e, t) {
                if (!e) return e;
                var n = {};

                for (var r in e) {
                  e.hasOwnProperty(r) && (n[r] = t(e[r], r, e));
                }

                return n;
              },
              emptyDomNode: function emptyDomNode(e) {
                for (; e.firstChild;) {
                  t.removeNode(e.firstChild);
                }
              },
              moveCleanedNodesToContainerElement: function moveCleanedNodesToContainerElement(e) {
                for (var n = t.utils.makeArray(e), r = d.createElement("div"), i = 0, o = n.length; i < o; i++) {
                  r.appendChild(t.cleanNode(n[i]));
                }

                return r;
              },
              cloneNodes: function cloneNodes(e, n) {
                for (var r = 0, i = e.length, o = []; r < i; r++) {
                  var a = e[r].cloneNode(!0);
                  o.push(n ? t.cleanNode(a) : a);
                }

                return o;
              },
              setDomNodeChildren: function setDomNodeChildren(e, n) {
                if (t.utils.emptyDomNode(e), n) for (var r = 0, i = n.length; r < i; r++) {
                  e.appendChild(n[r]);
                }
              },
              replaceDomNodes: function replaceDomNodes(e, n) {
                var r = e.nodeType ? [e] : e;

                if (r.length > 0) {
                  for (var i = r[0], o = i.parentNode, a = 0, s = n.length; a < s; a++) {
                    o.insertBefore(n[a], i);
                  }

                  for (a = 0, s = r.length; a < s; a++) {
                    t.removeNode(r[a]);
                  }
                }
              },
              fixUpContinuousNodeArray: function fixUpContinuousNodeArray(e, t) {
                if (e.length) {
                  for (t = 8 === t.nodeType && t.parentNode || t; e.length && e[0].parentNode !== t;) {
                    e.splice(0, 1);
                  }

                  if (e.length > 1) {
                    var n = e[0],
                        r = e[e.length - 1];

                    for (e.length = 0; n !== r;) {
                      if (e.push(n), !(n = n.nextSibling)) return;
                    }

                    e.push(r);
                  }
                }

                return e;
              },
              setOptionNodeSelectionState: function setOptionNodeSelectionState(e, t) {
                o < 7 ? e.setAttribute("selected", t) : e.selected = t;
              },
              stringTrim: function stringTrim(e) {
                return null === e || e === s ? "" : e.trim ? e.trim() : e.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
              },
              stringTokenize: function stringTokenize(e, n) {
                for (var r = [], i = (e || "").split(n), o = 0, a = i.length; o < a; o++) {
                  var s = t.utils.stringTrim(i[o]);
                  "" !== s && r.push(s);
                }

                return r;
              },
              stringStartsWith: function stringStartsWith(e, t) {
                return e = e || "", !(t.length > e.length) && e.substring(0, t.length) === t;
              },
              domNodeIsContainedBy: function domNodeIsContainedBy(e, t) {
                if (e === t) return !0;
                if (11 === e.nodeType) return !1;
                if (t.contains) return t.contains(3 === e.nodeType ? e.parentNode : e);
                if (t.compareDocumentPosition) return 16 == (16 & t.compareDocumentPosition(e));

                for (; e && e != t;) {
                  e = e.parentNode;
                }

                return !!e;
              },
              domNodeIsAttachedToDocument: function domNodeIsAttachedToDocument(e) {
                return t.utils.domNodeIsContainedBy(e, e.ownerDocument.documentElement);
              },
              anyDomNodeIsAttachedToDocument: function anyDomNodeIsAttachedToDocument(e) {
                return !!t.utils.arrayFirst(e, t.utils.domNodeIsAttachedToDocument);
              },
              tagNameLower: function tagNameLower(e) {
                return e && e.tagName && e.tagName.toLowerCase();
              },
              registerEventHandler: function registerEventHandler(e, n, r) {
                var a = o && i[n];
                if (a || void 0 === p) {
                  if (a || "function" != typeof e.addEventListener) {
                    if (void 0 === e.attachEvent) throw new Error("Browser doesn't support addEventListener or attachEvent");

                    var s = function s(t) {
                      r.call(e, t);
                    },
                        u = "on" + n;

                    e.attachEvent(u, s), t.utils.domNodeDisposal.addDisposeCallback(e, function () {
                      e.detachEvent(u, s);
                    });
                  } else e.addEventListener(n, r, !1);
                } else {
                  if (l(e, n)) {
                    var d = r;

                    r = function r(e, t) {
                      var n = this.checked;
                      t && (this.checked = !0 !== t.checkedStateBeforeEvent), d.call(this, e), this.checked = n;
                    };
                  }

                  p(e).bind(n, r);
                }
              },
              triggerEvent: function triggerEvent(e, t) {
                if (!e || !e.nodeType) throw new Error("element must be a DOM node when calling triggerEvent");

                if (void 0 !== p) {
                  var n = [];
                  l(e, t) && n.push({
                    checkedStateBeforeEvent: e.checked
                  }), p(e).trigger(t, n);
                } else if ("function" == typeof d.createEvent) {
                  if ("function" != typeof e.dispatchEvent) throw new Error("The supplied element doesn't support dispatchEvent");
                  var i = r[t] || "HTMLEvents",
                      o = d.createEvent(i);
                  o.initEvent(t, !0, !0, u, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e), e.dispatchEvent(o);
                } else {
                  if (void 0 === e.fireEvent) throw new Error("Browser doesn't support triggering events");
                  l(e, t) && (e.checked = !0 !== e.checked), e.fireEvent("on" + t);
                }
              },
              unwrapObservable: function unwrapObservable(e) {
                return t.isObservable(e) ? e() : e;
              },
              peekObservable: function peekObservable(e) {
                return t.isObservable(e) ? e.peek() : e;
              },
              toggleDomNodeCssClass: function toggleDomNodeCssClass(e, n, r) {
                if (n) {
                  var i = /\S+/g,
                      o = e.className.match(i) || [];
                  t.utils.arrayForEach(n.match(i), function (e) {
                    t.utils.addOrRemoveItem(o, e, r);
                  }), e.className = o.join(" ");
                }
              },
              setTextContent: function setTextContent(e, n) {
                var r = t.utils.unwrapObservable(n);
                null !== r && r !== s || (r = "");
                var i = t.virtualElements.firstChild(e);
                !i || 3 != i.nodeType || t.virtualElements.nextSibling(i) ? t.virtualElements.setDomNodeChildren(e, [d.createTextNode(r)]) : i.data = r, t.utils.forceRefresh(e);
              },
              setElementName: function setElementName(e, t) {
                if (e.name = t, o <= 7) try {
                  e.mergeAttributes(d.createElement("<input name='" + e.name + "'/>"), !1);
                } catch (e) {}
              },
              forceRefresh: function forceRefresh(e) {
                if (o >= 9) {
                  var t = 1 == e.nodeType ? e : e.parentNode;
                  t.style && (t.style.zoom = t.style.zoom);
                }
              },
              ensureSelectElementIsRenderedCorrectly: function ensureSelectElementIsRenderedCorrectly(e) {
                if (o) {
                  var t = e.style.width;
                  e.style.width = 0, e.style.width = t;
                }
              },
              range: function range(e, n) {
                e = t.utils.unwrapObservable(e), n = t.utils.unwrapObservable(n);

                for (var r = [], i = e; i <= n; i++) {
                  r.push(i);
                }

                return r;
              },
              makeArray: function makeArray(e) {
                for (var t = [], n = 0, r = e.length; n < r; n++) {
                  t.push(e[n]);
                }

                return t;
              },
              isIe6: 6 === o,
              isIe7: 7 === o,
              ieVersion: o,
              getFormFields: function getFormFields(e, n) {
                for (var r = t.utils.makeArray(e.getElementsByTagName("input")).concat(t.utils.makeArray(e.getElementsByTagName("textarea"))), i = "string" == typeof n ? function (e) {
                  return e.name === n;
                } : function (e) {
                  return n.test(e.name);
                }, o = [], a = r.length - 1; a >= 0; a--) {
                  i(r[a]) && o.push(r[a]);
                }

                return o;
              },
              parseJson: function parseJson(e) {
                return "string" == typeof e && (e = t.utils.stringTrim(e)) ? f && f.parse ? f.parse(e) : new Function("return " + e)() : null;
              },
              stringifyJson: function stringifyJson(e, n, r) {
                if (!f || !f.stringify) throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                return f.stringify(t.utils.unwrapObservable(e), n, r);
              },
              postJson: function postJson(n, r, i) {
                var o = (i = i || {}).params || {},
                    s = i.includeFields || this.fieldsIncludedWithJsonPost,
                    l = n;

                if ("object" == a(n) && "form" === t.utils.tagNameLower(n)) {
                  var u = n;
                  l = u.action;

                  for (var c = s.length - 1; c >= 0; c--) {
                    for (var p = t.utils.getFormFields(u, s[c]), f = p.length - 1; f >= 0; f--) {
                      o[p[f].name] = p[f].value;
                    }
                  }
                }

                r = t.utils.unwrapObservable(r);
                var m = d.createElement("form");

                for (var b in m.style.display = "none", m.action = l, m.method = "post", r) {
                  var v = d.createElement("input");
                  v.name = b, v.value = t.utils.stringifyJson(t.utils.unwrapObservable(r[b])), m.appendChild(v);
                }

                e(o, function (e, t) {
                  var n = d.createElement("input");
                  n.name = e, n.value = t, m.appendChild(n);
                }), d.body.appendChild(m), i.submitter ? i.submitter(m) : m.submit(), setTimeout(function () {
                  m.parentNode.removeChild(m);
                }, 0);
              }
            };
          }(), t.exportSymbol("utils", t.utils), t.exportSymbol("utils.arrayForEach", t.utils.arrayForEach), t.exportSymbol("utils.arrayFirst", t.utils.arrayFirst), t.exportSymbol("utils.arrayFilter", t.utils.arrayFilter), t.exportSymbol("utils.arrayGetDistinctValues", t.utils.arrayGetDistinctValues), t.exportSymbol("utils.arrayIndexOf", t.utils.arrayIndexOf), t.exportSymbol("utils.arrayMap", t.utils.arrayMap), t.exportSymbol("utils.arrayPushAll", t.utils.arrayPushAll), t.exportSymbol("utils.arrayRemoveItem", t.utils.arrayRemoveItem), t.exportSymbol("utils.extend", t.utils.extend), t.exportSymbol("utils.fieldsIncludedWithJsonPost", t.utils.fieldsIncludedWithJsonPost), t.exportSymbol("utils.getFormFields", t.utils.getFormFields), t.exportSymbol("utils.peekObservable", t.utils.peekObservable), t.exportSymbol("utils.postJson", t.utils.postJson), t.exportSymbol("utils.parseJson", t.utils.parseJson), t.exportSymbol("utils.registerEventHandler", t.utils.registerEventHandler), t.exportSymbol("utils.stringifyJson", t.utils.stringifyJson), t.exportSymbol("utils.range", t.utils.range), t.exportSymbol("utils.toggleDomNodeCssClass", t.utils.toggleDomNodeCssClass), t.exportSymbol("utils.triggerEvent", t.utils.triggerEvent), t.exportSymbol("utils.unwrapObservable", t.utils.unwrapObservable), t.exportSymbol("utils.objectForEach", t.utils.objectForEach), t.exportSymbol("utils.addOrRemoveItem", t.utils.addOrRemoveItem), t.exportSymbol("unwrap", t.utils.unwrapObservable), Function.prototype.bind || (Function.prototype.bind = function (e) {
            var t = this,
                n = Array.prototype.slice.call(arguments);
            return e = n.shift(), function () {
              return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
            };
          }), t.utils.domData = new function () {
            var e = 0,
                t = "__ko__" + new Date().getTime(),
                n = {};

            function r(r, i) {
              var o = r[t];

              if (!o || "null" === o || !n[o]) {
                if (!i) return s;
                o = r[t] = "ko" + e++, n[o] = {};
              }

              return n[o];
            }

            return {
              get: function get(e, t) {
                var n = r(e, !1);
                return n === s ? s : n[t];
              },
              set: function set(e, t, n) {
                n === s && r(e, !1) === s || (r(e, !0)[t] = n);
              },
              clear: function clear(e) {
                var r = e[t];
                return !!r && (delete n[r], e[t] = null, !0);
              },
              nextKey: function nextKey() {
                return e++ + t;
              }
            };
          }(), t.exportSymbol("utils.domData", t.utils.domData), t.exportSymbol("utils.domData.clear", t.utils.domData.clear), t.utils.domNodeDisposal = new function () {
            var e = t.utils.domData.nextKey(),
                n = {
              1: !0,
              8: !0,
              9: !0
            },
                r = {
              1: !0,
              9: !0
            };

            function i(n, r) {
              var i = t.utils.domData.get(n, e);
              return i === s && r && (i = [], t.utils.domData.set(n, e, i)), i;
            }

            function o(e) {
              var n = i(e, !1);

              if (n) {
                n = n.slice(0);

                for (var a = 0; a < n.length; a++) {
                  n[a](e);
                }
              }

              t.utils.domData.clear(e), "function" == typeof p && "function" == typeof p.cleanData && p.cleanData([e]), r[e.nodeType] && function (e) {
                for (var t, n = e.firstChild; t = n;) {
                  n = t.nextSibling, 8 === t.nodeType && o(t);
                }
              }(e);
            }

            return {
              addDisposeCallback: function addDisposeCallback(e, t) {
                if ("function" != typeof t) throw new Error("Callback must be a function");
                i(e, !0).push(t);
              },
              removeDisposeCallback: function removeDisposeCallback(n, r) {
                var o = i(n, !1);
                o && (t.utils.arrayRemoveItem(o, r), 0 == o.length && function (n) {
                  t.utils.domData.set(n, e, s);
                }(n));
              },
              cleanNode: function cleanNode(e) {
                if (n[e.nodeType] && (o(e), r[e.nodeType])) {
                  var i = [];
                  t.utils.arrayPushAll(i, e.getElementsByTagName("*"));

                  for (var a = 0, s = i.length; a < s; a++) {
                    o(i[a]);
                  }
                }

                return e;
              },
              removeNode: function removeNode(e) {
                t.cleanNode(e), e.parentNode && e.parentNode.removeChild(e);
              }
            };
          }(), t.cleanNode = t.utils.domNodeDisposal.cleanNode, t.removeNode = t.utils.domNodeDisposal.removeNode, t.exportSymbol("cleanNode", t.cleanNode), t.exportSymbol("removeNode", t.removeNode), t.exportSymbol("utils.domNodeDisposal", t.utils.domNodeDisposal), t.exportSymbol("utils.domNodeDisposal.addDisposeCallback", t.utils.domNodeDisposal.addDisposeCallback), t.exportSymbol("utils.domNodeDisposal.removeDisposeCallback", t.utils.domNodeDisposal.removeDisposeCallback), t.utils.parseHtmlFragment = function (e) {
            return void 0 !== p ? function (e) {
              if (p.parseHTML) return p.parseHTML(e) || [];
              var t = p.clean([e]);

              if (t && t[0]) {
                for (var n = t[0]; n.parentNode && 11 !== n.parentNode.nodeType;) {
                  n = n.parentNode;
                }

                n.parentNode && n.parentNode.removeChild(n);
              }

              return t;
            }(e) : function (e) {
              var n = t.utils.stringTrim(e).toLowerCase(),
                  r = d.createElement("div"),
                  i = n.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !n.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!n.indexOf("<td") || !n.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""],
                  o = "ignored<div>" + i[1] + e + i[2] + "</div>";

              for ("function" == typeof u.innerShiv ? r.appendChild(u.innerShiv(o)) : r.innerHTML = o; i[0]--;) {
                r = r.lastChild;
              }

              return t.utils.makeArray(r.lastChild.childNodes);
            }(e);
          }, t.utils.setHtml = function (e, n) {
            if (t.utils.emptyDomNode(e), null !== (n = t.utils.unwrapObservable(n)) && n !== s) if ("string" != typeof n && (n = n.toString()), void 0 !== p) p(e).html(n);else for (var r = t.utils.parseHtmlFragment(n), i = 0; i < r.length; i++) {
              e.appendChild(r[i]);
            }
          }, t.exportSymbol("utils.parseHtmlFragment", t.utils.parseHtmlFragment), t.exportSymbol("utils.setHtml", t.utils.setHtml), t.memoization = function () {
            var e = {};

            function n() {
              return (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
            }

            return {
              memoize: function memoize(t) {
                if ("function" != typeof t) throw new Error("You can only pass a function to ko.memoization.memoize()");
                var r = n() + n();
                return e[r] = t, "\x3c!--[ko_memo:" + r + "]--\x3e";
              },
              unmemoize: function unmemoize(t, n) {
                var r = e[t];
                if (r === s) throw new Error("Couldn't find any memo with ID " + t + ". Perhaps it's already been unmemoized.");

                try {
                  return r.apply(null, n || []), !0;
                } finally {
                  delete e[t];
                }
              },
              unmemoizeDomNodeAndDescendants: function unmemoizeDomNodeAndDescendants(e, n) {
                var r = [];
                !function e(n, r) {
                  if (n) if (8 == n.nodeType) {
                    var i = t.memoization.parseMemoText(n.nodeValue);
                    null != i && r.push({
                      domNode: n,
                      memoId: i
                    });
                  } else if (1 == n.nodeType) for (var o = 0, a = n.childNodes, s = a.length; o < s; o++) {
                    e(a[o], r);
                  }
                }(e, r);

                for (var i = 0, o = r.length; i < o; i++) {
                  var a = r[i].domNode,
                      s = [a];
                  n && t.utils.arrayPushAll(s, n), t.memoization.unmemoize(r[i].memoId, s), a.nodeValue = "", a.parentNode && a.parentNode.removeChild(a);
                }
              },
              parseMemoText: function parseMemoText(e) {
                var t = e.match(/^\[ko_memo\:(.*?)\]$/);
                return t ? t[1] : null;
              }
            };
          }(), t.exportSymbol("memoization", t.memoization), t.exportSymbol("memoization.memoize", t.memoization.memoize), t.exportSymbol("memoization.unmemoize", t.memoization.unmemoize), t.exportSymbol("memoization.parseMemoText", t.memoization.parseMemoText), t.exportSymbol("memoization.unmemoizeDomNodeAndDescendants", t.memoization.unmemoizeDomNodeAndDescendants), t.extenders = {
            throttle: function throttle(e, n) {
              e.throttleEvaluation = n;
              var r = null;
              return t.dependentObservable({
                read: e,
                write: function write(t) {
                  clearTimeout(r), r = setTimeout(function () {
                    e(t);
                  }, n);
                }
              });
            },
            notify: function notify(e, t) {
              e.equalityComparer = "always" == t ? null : r;
            }
          };
          var n = {
            undefined: 1,
            boolean: 1,
            number: 1,
            string: 1
          };

          function r(e, t) {
            return !!(null === e || a(e) in n) && e === t;
          }

          t.exportSymbol("extenders", t.extenders), t.subscription = function (e, n, r) {
            this.target = e, this.callback = n, this.disposeCallback = r, t.exportProperty(this, "dispose", this.dispose);
          }, t.subscription.prototype.dispose = function () {
            this.isDisposed = !0, this.disposeCallback();
          }, t.subscribable = function () {
            this._subscriptions = {}, t.utils.extend(this, t.subscribable.fn), t.exportProperty(this, "subscribe", this.subscribe), t.exportProperty(this, "extend", this.extend), t.exportProperty(this, "getSubscriptionsCount", this.getSubscriptionsCount);
          };
          var i,
              l = "change";
          t.subscribable.fn = {
            subscribe: function subscribe(e, n, r) {
              r = r || l;
              var i = n ? e.bind(n) : e,
                  o = new t.subscription(this, i, function () {
                t.utils.arrayRemoveItem(this._subscriptions[r], o);
              }.bind(this));
              return this._subscriptions[r] || (this._subscriptions[r] = []), this._subscriptions[r].push(o), o;
            },
            notifySubscribers: function notifySubscribers(e, n) {
              if (n = n || l, this.hasSubscriptionsForEvent(n)) try {
                t.dependencyDetection.begin();

                for (var r, i = this._subscriptions[n].slice(0), o = 0; r = i[o]; ++o) {
                  r && !0 !== r.isDisposed && r.callback(e);
                }
              } finally {
                t.dependencyDetection.end();
              }
            },
            hasSubscriptionsForEvent: function hasSubscriptionsForEvent(e) {
              return this._subscriptions[e] && this._subscriptions[e].length;
            },
            getSubscriptionsCount: function getSubscriptionsCount() {
              var e = 0;
              return t.utils.objectForEach(this._subscriptions, function (t, n) {
                e += n.length;
              }), e;
            },
            extend: function extend(e) {
              var n = this;
              return e && t.utils.objectForEach(e, function (e, r) {
                var i = t.extenders[e];
                "function" == typeof i && (n = i(n, r) || n);
              }), n;
            }
          }, t.isSubscribable = function (e) {
            return null != e && "function" == typeof e.subscribe && "function" == typeof e.notifySubscribers;
          }, t.exportSymbol("subscribable", t.subscribable), t.exportSymbol("isSubscribable", t.isSubscribable), t.dependencyDetection = (i = [], {
            begin: function begin(e) {
              i.push(e && {
                callback: e,
                distinctDependencies: []
              });
            },
            end: function end() {
              i.pop();
            },
            registerDependency: function registerDependency(e) {
              if (!t.isSubscribable(e)) throw new Error("Only subscribable things can act as dependencies");

              if (i.length > 0) {
                var n = i[i.length - 1];
                if (!n || t.utils.arrayIndexOf(n.distinctDependencies, e) >= 0) return;
                n.distinctDependencies.push(e), n.callback(e);
              }
            },
            ignore: function ignore(e, t, n) {
              try {
                return i.push(null), e.apply(t, n || []);
              } finally {
                i.pop();
              }
            }
          }), t.observable = function (e) {
            var n = e;

            function r() {
              return arguments.length > 0 ? (r.equalityComparer && r.equalityComparer(n, arguments[0]) || (r.valueWillMutate(), n = arguments[0], o && (r._latestValue = n), r.valueHasMutated()), this) : (t.dependencyDetection.registerDependency(r), n);
            }

            return o && (r._latestValue = n), t.subscribable.call(r), r.peek = function () {
              return n;
            }, r.valueHasMutated = function () {
              r.notifySubscribers(n);
            }, r.valueWillMutate = function () {
              r.notifySubscribers(n, "beforeChange");
            }, t.utils.extend(r, t.observable.fn), t.exportProperty(r, "peek", r.peek), t.exportProperty(r, "valueHasMutated", r.valueHasMutated), t.exportProperty(r, "valueWillMutate", r.valueWillMutate), r;
          }, t.observable.fn = {
            equalityComparer: r
          };
          var m = t.observable.protoProperty = "__ko_proto__";
          t.observable.fn[m] = t.observable, t.hasPrototype = function (e, n) {
            return null !== e && e !== s && e[m] !== s && (e[m] === n || t.hasPrototype(e[m], n));
          }, t.isObservable = function (e) {
            return t.hasPrototype(e, t.observable);
          }, t.isWriteableObservable = function (e) {
            return "function" == typeof e && e[m] === t.observable || !("function" != typeof e || e[m] !== t.dependentObservable || !e.hasWriteFunction);
          }, t.exportSymbol("observable", t.observable), t.exportSymbol("isObservable", t.isObservable), t.exportSymbol("isWriteableObservable", t.isWriteableObservable), t.observableArray = function (e) {
            if ("object" != a(e = e || []) || !("length" in e)) throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
            var n = t.observable(e);
            return t.utils.extend(n, t.observableArray.fn), n.extend({
              trackArrayChanges: !0
            });
          }, t.observableArray.fn = {
            remove: function remove(e) {
              for (var n = this.peek(), r = [], i = "function" != typeof e || t.isObservable(e) ? function (t) {
                return t === e;
              } : e, o = 0; o < n.length; o++) {
                var a = n[o];
                i(a) && (0 === r.length && this.valueWillMutate(), r.push(a), n.splice(o, 1), o--);
              }

              return r.length && this.valueHasMutated(), r;
            },
            removeAll: function removeAll(e) {
              if (e === s) {
                var n = this.peek(),
                    r = n.slice(0);
                return this.valueWillMutate(), n.splice(0, n.length), this.valueHasMutated(), r;
              }

              return e ? this.remove(function (n) {
                return t.utils.arrayIndexOf(e, n) >= 0;
              }) : [];
            },
            destroy: function destroy(e) {
              var n = this.peek(),
                  r = "function" != typeof e || t.isObservable(e) ? function (t) {
                return t === e;
              } : e;
              this.valueWillMutate();

              for (var i = n.length - 1; i >= 0; i--) {
                r(n[i]) && (n[i]._destroy = !0);
              }

              this.valueHasMutated();
            },
            destroyAll: function destroyAll(e) {
              return e === s ? this.destroy(function () {
                return !0;
              }) : e ? this.destroy(function (n) {
                return t.utils.arrayIndexOf(e, n) >= 0;
              }) : [];
            },
            indexOf: function indexOf(e) {
              var n = this();
              return t.utils.arrayIndexOf(n, e);
            },
            replace: function replace(e, t) {
              var n = this.indexOf(e);
              n >= 0 && (this.valueWillMutate(), this.peek()[n] = t, this.valueHasMutated());
            }
          }, t.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
            t.observableArray.fn[e] = function () {
              var t = this.peek();
              this.valueWillMutate(), this.cacheDiffForKnownOperation(t, e, arguments);
              var n = t[e].apply(t, arguments);
              return this.valueHasMutated(), n;
            };
          }), t.utils.arrayForEach(["slice"], function (e) {
            t.observableArray.fn[e] = function () {
              var t = this();
              return t[e].apply(t, arguments);
            };
          }), t.exportSymbol("observableArray", t.observableArray);
          var b = "arrayChange";
          t.extenders.trackArrayChanges = function (e) {
            if (!e.cacheDiffForKnownOperation) {
              var n = !1,
                  r = null,
                  i = 0,
                  o = e.subscribe;
              e.subscribe = e.subscribe = function (a, s, u) {
                return u === b && function () {
                  if (!n) {
                    n = !0;
                    var o = e.notifySubscribers;

                    e.notifySubscribers = function (e, t) {
                      return t && t !== l || ++i, o.apply(this, arguments);
                    };

                    var a = [].concat(e.peek() || []);
                    r = null, e.subscribe(function (n) {
                      if (n = [].concat(n || []), e.hasSubscriptionsForEvent(b)) {
                        var o = function (e, n) {
                          return (!r || i > 1) && (r = t.utils.compareArrays(e, n, {
                            sparse: !0
                          })), r;
                        }(a, n);

                        o.length && e.notifySubscribers(o, b);
                      }

                      a = n, r = null, i = 0;
                    });
                  }
                }(), o.apply(this, arguments);
              }, e.cacheDiffForKnownOperation = function (e, t, o) {
                if (n && !i) {
                  var a = [],
                      s = e.length,
                      l = o.length,
                      u = 0;

                  switch (t) {
                    case "push":
                      u = s;

                    case "unshift":
                      for (var d = 0; d < l; d++) {
                        v("added", o[d], u + d);
                      }

                      break;

                    case "pop":
                      u = s - 1;

                    case "shift":
                      s && v("deleted", e[u], u);
                      break;

                    case "splice":
                      for (var c = Math.min(Math.max(0, o[0] < 0 ? s + o[0] : o[0]), s), p = 1 === l ? s : Math.min(c + (o[1] || 0), s), f = c + l - 2, m = Math.max(p, f), b = (d = c, 2); d < m; ++d, ++b) {
                        d < p && v("deleted", e[d], d), d < f && v("added", o[b], d);
                      }

                      break;

                    default:
                      return;
                  }

                  r = a;
                }

                function v(e, t, n) {
                  a.push({
                    status: e,
                    value: t,
                    index: n
                  });
                }
              };
            }
          }, t.dependentObservable = function (e, n, r) {
            var i,
                l = !1,
                u = !1,
                d = !1,
                c = e;
            if (c && "object" == a(c) ? c = (r = c).read : (r = r || {}, c || (c = r.read)), "function" != typeof c) throw new Error("Pass a function that returns the value of the ko.computed");

            function p() {
              t.utils.arrayForEach(E, function (e) {
                e.dispose();
              }), E = [];
            }

            function f() {
              var e = b.throttleEvaluation;
              e && e >= 0 ? (clearTimeout(S), S = setTimeout(m, e)) : m();
            }

            function m() {
              if (!u) {
                if (x && x()) {
                  if (!d) return _w(), void (l = !0);
                } else d = !1;

                u = !0;

                try {
                  var e = t.utils.arrayMap(E, function (e) {
                    return e.target;
                  });
                  t.dependencyDetection.begin(function (n) {
                    var r;
                    (r = t.utils.arrayIndexOf(e, n)) >= 0 ? e[r] = s : function (e) {
                      E.push(e.subscribe(f));
                    }(n);
                  });

                  for (var r = n ? c.call(n) : c(), a = e.length - 1; a >= 0; a--) {
                    e[a] && E.splice(a, 1)[0].dispose();
                  }

                  l = !0, b.equalityComparer && b.equalityComparer(i, r) || (b.notifySubscribers(i, "beforeChange"), i = r, o && (b._latestValue = i), b.notifySubscribers(i));
                } finally {
                  t.dependencyDetection.end(), u = !1;
                }

                E.length || _w();
              }
            }

            function b() {
              if (arguments.length > 0) {
                if ("function" != typeof g) throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                return g.apply(n, arguments), this;
              }

              return l || m(), t.dependencyDetection.registerDependency(b), i;
            }

            function v() {
              return !l || E.length > 0;
            }

            var g = r.write,
                h = r.disposeWhenNodeIsRemoved || r.disposeWhenNodeIsRemoved || null,
                y = r.disposeWhen || r.disposeWhen,
                x = y,
                _w = p,
                E = [],
                S = null;
            return n || (n = r.owner), b.peek = function () {
              return l || m(), i;
            }, b.getDependenciesCount = function () {
              return E.length;
            }, b.hasWriteFunction = "function" == typeof r.write, b.dispose = function () {
              _w();
            }, b.isActive = v, t.subscribable.call(b), t.utils.extend(b, t.dependentObservable.fn), t.exportProperty(b, "peek", b.peek), t.exportProperty(b, "dispose", b.dispose), t.exportProperty(b, "isActive", b.isActive), t.exportProperty(b, "getDependenciesCount", b.getDependenciesCount), h && (d = !0, h.nodeType && (x = function x() {
              return !t.utils.domNodeIsAttachedToDocument(h) || y && y();
            })), !0 !== r.deferEvaluation && m(), h && v() && (_w = function w() {
              t.utils.domNodeDisposal.removeDisposeCallback(h, _w), p();
            }, t.utils.domNodeDisposal.addDisposeCallback(h, _w)), b;
          }, t.isComputed = function (e) {
            return t.hasPrototype(e, t.dependentObservable);
          };
          var v = t.observable.protoProperty;
          t.dependentObservable[v] = t.observable, t.dependentObservable.fn = {
            equalityComparer: r
          }, t.dependentObservable.fn[v] = t.dependentObservable, t.exportSymbol("dependentObservable", t.dependentObservable), t.exportSymbol("computed", t.dependentObservable), t.exportSymbol("isComputed", t.isComputed), function () {
            function e() {
              this.keys = [], this.values = [];
            }

            t.toJS = function (n) {
              if (0 == arguments.length) throw new Error("When calling ko.toJS, pass the object you want to convert.");
              return function t(n, r, i) {
                i = i || new e();
                var o = !("object" != a(n = r(n)) || null === n || n === s || n instanceof Date || n instanceof String || n instanceof Number || n instanceof Boolean);
                if (!o) return n;
                var l = n instanceof Array ? [] : {};
                return i.save(n, l), function (e, t) {
                  if (e instanceof Array) {
                    for (var n = 0; n < e.length; n++) {
                      t(n);
                    }

                    "function" == typeof e.toJSON && t("toJSON");
                  } else for (var r in e) {
                    t(r);
                  }
                }(n, function (e) {
                  var o = r(n[e]);

                  switch (a(o)) {
                    case "boolean":
                    case "number":
                    case "string":
                    case "function":
                      l[e] = o;
                      break;

                    case "object":
                    case "undefined":
                      var u = i.get(o);
                      l[e] = u !== s ? u : t(o, r, i);
                  }
                }), l;
              }(n, function (e) {
                for (var n = 0; t.isObservable(e) && n < 10; n++) {
                  e = e();
                }

                return e;
              });
            }, t.toJSON = function (e, n, r) {
              var i = t.toJS(e);
              return t.utils.stringifyJson(i, n, r);
            }, e.prototype = {
              constructor: e,
              save: function save(e, n) {
                var r = t.utils.arrayIndexOf(this.keys, e);
                r >= 0 ? this.values[r] = n : (this.keys.push(e), this.values.push(n));
              },
              get: function get(e) {
                var n = t.utils.arrayIndexOf(this.keys, e);
                return n >= 0 ? this.values[n] : s;
              }
            };
          }(), t.exportSymbol("toJS", t.toJS), t.exportSymbol("toJSON", t.toJSON), t.selectExtensions = {
            readValue: function readValue(e) {
              switch (t.utils.tagNameLower(e)) {
                case "option":
                  return !0 === e.__ko__hasDomDataOptionValue__ ? t.utils.domData.get(e, t.bindingHandlers.options.optionValueDomDataKey) : t.utils.ieVersion <= 7 ? e.getAttributeNode("value") && e.getAttributeNode("value").specified ? e.value : e.text : e.value;

                case "select":
                  return e.selectedIndex >= 0 ? t.selectExtensions.readValue(e.options[e.selectedIndex]) : s;

                default:
                  return e.value;
              }
            },
            writeValue: function writeValue(e, n) {
              switch (t.utils.tagNameLower(e)) {
                case "option":
                  switch (a(n)) {
                    case "string":
                      t.utils.domData.set(e, t.bindingHandlers.options.optionValueDomDataKey, s), "__ko__hasDomDataOptionValue__" in e && delete e.__ko__hasDomDataOptionValue__, e.value = n;
                      break;

                    default:
                      t.utils.domData.set(e, t.bindingHandlers.options.optionValueDomDataKey, n), e.__ko__hasDomDataOptionValue__ = !0, e.value = "number" == typeof n ? n : "";
                  }

                  break;

                case "select":
                  "" === n && (n = s), null !== n && n !== s || (e.selectedIndex = -1);

                  for (var r = e.options.length - 1; r >= 0; r--) {
                    if (t.selectExtensions.readValue(e.options[r]) == n) {
                      e.selectedIndex = r;
                      break;
                    }
                  }

                  e.size > 1 || -1 !== e.selectedIndex || (e.selectedIndex = 0);
                  break;

                default:
                  null !== n && n !== s || (n = ""), e.value = n;
              }
            }
          }, t.exportSymbol("selectExtensions", t.selectExtensions), t.exportSymbol("selectExtensions.readValue", t.selectExtensions.readValue), t.exportSymbol("selectExtensions.writeValue", t.selectExtensions.writeValue), t.expressionRewriting = function () {
            var e = ["true", "false", "null", "undefined"],
                n = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
                r = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
                i = /[\])"'A-Za-z0-9_$]+$/,
                o = {
              in: 1,
              return: 1,
              typeof: 1
            };

            function a(e) {
              var n = t.utils.stringTrim(e);
              123 === n.charCodeAt(0) && (n = n.slice(1, -1));
              var a,
                  s,
                  l = [],
                  u = n.match(r),
                  d = 0;

              if (u) {
                u.push(",");

                for (var c, p = 0; c = u[p]; ++p) {
                  var f = c.charCodeAt(0);

                  if (44 === f) {
                    if (d <= 0) {
                      a && l.push(s ? {
                        key: a,
                        value: s.join("")
                      } : {
                        unknown: a
                      }), a = s = d = 0;
                      continue;
                    }
                  } else if (58 === f) {
                    if (!s) continue;
                  } else if (47 === f && p && c.length > 1) {
                    var m = u[p - 1].match(i);
                    m && !o[m[0]] && ((u = (n = n.substr(n.indexOf(c) + 1)).match(r)).push(","), p = -1, c = "/");
                  } else if (40 === f || 123 === f || 91 === f) ++d;else if (41 === f || 125 === f || 93 === f) --d;else if (!a && !s) {
                    a = 34 === f || 39 === f ? c.slice(1, -1) : c;
                    continue;
                  }

                  s ? s.push(c) : s = [c];
                }
              }

              return l;
            }

            var s = {};
            return {
              bindingRewriteValidators: [],
              twoWayBindings: s,
              parseObjectLiteral: a,
              preProcessBindings: function preProcessBindings(r, i) {
                function o(r, i) {
                  var a, c;
                  (c = t.getBindingHandler(r)) && c.preprocess && !(i = c.preprocess(i, r, o)) || (s[r] && (a = function (r) {
                    if (t.utils.arrayIndexOf(e, r) >= 0) return !1;
                    var i = r.match(n);
                    return null !== i && (i[1] ? "Object(" + i[1] + ")" + i[2] : r);
                  }(i)) && u.push("'" + r + "':function(_z){" + a + "=_z}"), d && (i = "function(){return " + i + " }"), l.push("'" + r + "':" + i));
                }

                var l = [],
                    u = [],
                    d = (i = i || {}).valueAccessors,
                    c = "string" == typeof r ? a(r) : r;
                return t.utils.arrayForEach(c, function (e) {
                  o(e.key || e.unknown, e.value);
                }), u.length && o("_ko_property_writers", "{" + u.join(",") + "}"), l.join(",");
              },
              keyValueArrayContainsKey: function keyValueArrayContainsKey(e, t) {
                for (var n = 0; n < e.length; n++) {
                  if (e[n].key == t) return !0;
                }

                return !1;
              },
              writeValueToProperty: function writeValueToProperty(e, n, r, i, o) {
                if (e && t.isObservable(e)) !t.isWriteableObservable(e) || o && e.peek() === i || e(i);else {
                  var a = n.get("_ko_property_writers");
                  a && a[r] && a[r](i);
                }
              }
            };
          }(), t.exportSymbol("expressionRewriting", t.expressionRewriting), t.exportSymbol("expressionRewriting.bindingRewriteValidators", t.expressionRewriting.bindingRewriteValidators), t.exportSymbol("expressionRewriting.parseObjectLiteral", t.expressionRewriting.parseObjectLiteral), t.exportSymbol("expressionRewriting.preProcessBindings", t.expressionRewriting.preProcessBindings), t.exportSymbol("expressionRewriting._twoWayBindings", t.expressionRewriting.twoWayBindings), t.exportSymbol("jsonExpressionRewriting", t.expressionRewriting), t.exportSymbol("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", t.expressionRewriting.preProcessBindings), function () {
            var e = d && "\x3c!--test--\x3e" === d.createComment("test").text,
                n = e ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
                r = e ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/,
                i = {
              ul: !0,
              ol: !0
            };

            function o(t) {
              return 8 == t.nodeType && n.test(e ? t.text : t.nodeValue);
            }

            function a(t) {
              return 8 == t.nodeType && r.test(e ? t.text : t.nodeValue);
            }

            function s(e, t) {
              for (var n = e, r = 1, i = []; n = n.nextSibling;) {
                if (a(n) && 0 == --r) return i;
                i.push(n), o(n) && r++;
              }

              if (!t) throw new Error("Cannot find closing comment tag to match: " + e.nodeValue);
              return null;
            }

            function l(e, t) {
              var n = s(e, t);
              return n ? n.length > 0 ? n[n.length - 1].nextSibling : e.nextSibling : null;
            }

            function u(e) {
              var t = e.firstChild,
                  n = null;
              if (t) do {
                if (n) n.push(t);else if (o(t)) {
                  var r = l(t, !0);
                  r ? t = r : n = [t];
                } else a(t) && (n = [t]);
              } while (t = t.nextSibling);
              return n;
            }

            t.virtualElements = {
              allowedBindings: {},
              childNodes: function childNodes(e) {
                return o(e) ? s(e) : e.childNodes;
              },
              emptyNode: function emptyNode(e) {
                if (o(e)) for (var n = t.virtualElements.childNodes(e), r = 0, i = n.length; r < i; r++) {
                  t.removeNode(n[r]);
                } else t.utils.emptyDomNode(e);
              },
              setDomNodeChildren: function setDomNodeChildren(e, n) {
                if (o(e)) {
                  t.virtualElements.emptyNode(e);

                  for (var r = e.nextSibling, i = 0, a = n.length; i < a; i++) {
                    r.parentNode.insertBefore(n[i], r);
                  }
                } else t.utils.setDomNodeChildren(e, n);
              },
              prepend: function prepend(e, t) {
                o(e) ? e.parentNode.insertBefore(t, e.nextSibling) : e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t);
              },
              insertAfter: function insertAfter(e, n, r) {
                r ? o(e) ? e.parentNode.insertBefore(n, r.nextSibling) : r.nextSibling ? e.insertBefore(n, r.nextSibling) : e.appendChild(n) : t.virtualElements.prepend(e, n);
              },
              firstChild: function firstChild(e) {
                return o(e) ? !e.nextSibling || a(e.nextSibling) ? null : e.nextSibling : e.firstChild;
              },
              nextSibling: function nextSibling(e) {
                return o(e) && (e = l(e)), e.nextSibling && a(e.nextSibling) ? null : e.nextSibling;
              },
              hasBindingValue: o,
              virtualNodeBindingValue: function virtualNodeBindingValue(t) {
                var r = (e ? t.text : t.nodeValue).match(n);
                return r ? r[1] : null;
              },
              normaliseVirtualElementDomStructure: function normaliseVirtualElementDomStructure(e) {
                if (i[t.utils.tagNameLower(e)]) {
                  var n = e.firstChild;
                  if (n) do {
                    if (1 === n.nodeType) {
                      var r = u(n);
                      if (r) for (var o = n.nextSibling, a = 0; a < r.length; a++) {
                        o ? e.insertBefore(r[a], o) : e.appendChild(r[a]);
                      }
                    }
                  } while (n = n.nextSibling);
                }
              }
            };
          }(), t.exportSymbol("virtualElements", t.virtualElements), t.exportSymbol("virtualElements.allowedBindings", t.virtualElements.allowedBindings), t.exportSymbol("virtualElements.emptyNode", t.virtualElements.emptyNode), t.exportSymbol("virtualElements.insertAfter", t.virtualElements.insertAfter), t.exportSymbol("virtualElements.prepend", t.virtualElements.prepend), t.exportSymbol("virtualElements.setDomNodeChildren", t.virtualElements.setDomNodeChildren), t.bindingProvider = function () {
            this.bindingCache = {};
          }, t.utils.extend(t.bindingProvider.prototype, {
            nodeHasBindings: function nodeHasBindings(e) {
              switch (e.nodeType) {
                case 1:
                  return null != e.getAttribute("data-bind");

                case 8:
                  return t.virtualElements.hasBindingValue(e);

                default:
                  return !1;
              }
            },
            getBindings: function getBindings(e, t) {
              var n = this.getBindingsString(e, t);
              return n ? this.parseBindingsString(n, t, e) : null;
            },
            getBindingAccessors: function getBindingAccessors(e, t) {
              var n = this.getBindingsString(e, t);
              return n ? this.parseBindingsString(n, t, e, {
                valueAccessors: !0
              }) : null;
            },
            getBindingsString: function getBindingsString(e, n) {
              switch (e.nodeType) {
                case 1:
                  return e.getAttribute("data-bind");

                case 8:
                  return t.virtualElements.virtualNodeBindingValue(e);

                default:
                  return null;
              }
            },
            parseBindingsString: function parseBindingsString(e, n, r, i) {
              try {
                return function (e, n, r) {
                  var i = e + (r && r.valueAccessors || "");
                  return n[i] || (n[i] = function (e, n) {
                    var r = t.expressionRewriting.preProcessBindings(e, n);
                    return new Function("$context", "$element", "with($context){with($data||{}){return{" + r + "}}}");
                  }(e, r));
                }(e, this.bindingCache, i)(n, r);
              } catch (t) {
                throw t.message = "Unable to parse bindings.\nBindings value: " + e + "\nMessage: " + t.message, t;
              }
            }
          }), t.bindingProvider.instance = new t.bindingProvider(), t.exportSymbol("bindingProvider", t.bindingProvider), function () {
            t.bindingHandlers = {};
            var e = {
              script: !0
            };

            function n(e) {
              return function () {
                return e;
              };
            }

            function r(e) {
              return e();
            }

            function i(e) {
              return t.utils.objectMap(t.dependencyDetection.ignore(e), function (t, n) {
                return function () {
                  return e()[n];
                };
              });
            }

            function o(e, t) {
              return i(this.getBindings.bind(this, e, t));
            }

            function a(e, n, r) {
              var i,
                  o = t.virtualElements.firstChild(n),
                  a = t.bindingProvider.instance,
                  s = a.preprocessNode;

              if (s) {
                for (; i = o;) {
                  o = t.virtualElements.nextSibling(i), s.call(a, i);
                }

                o = t.virtualElements.firstChild(n);
              }

              for (; i = o;) {
                o = t.virtualElements.nextSibling(i), l(e, i, r);
              }
            }

            function l(n, r, i) {
              var o = !0,
                  s = 1 === r.nodeType;
              s && t.virtualElements.normaliseVirtualElementDomStructure(r), (s && i || t.bindingProvider.instance.nodeHasBindings(r)) && (o = c(r, null, n, i).shouldBindDescendants), o && !e[t.utils.tagNameLower(r)] && a(n, r, !s);
            }

            t.getBindingHandler = function (e) {
              return t.bindingHandlers[e];
            }, t.bindingContext = function (e, n, r, i) {
              var o,
                  a = this,
                  l = "function" == typeof e,
                  u = t.dependentObservable(function () {
                var o = l ? e() : e;
                return n ? (n._subscribable && n._subscribable(), t.utils.extend(a, n), u && (a._subscribable = u)) : (a.$parents = [], a.$root = o, a.ko = t), a.$rawData = e, a.$data = o, r && (a[r] = o), i && i(a, n, o), a.$data;
              }, null, {
                disposeWhen: function disposeWhen() {
                  return o && !t.utils.anyDomNodeIsAttachedToDocument(o);
                },
                disposeWhenNodeIsRemoved: !0
              });
              u.isActive() && (a._subscribable = u, u.equalityComparer = null, o = [], u._addNode = function (e) {
                o.push(e), t.utils.domNodeDisposal.addDisposeCallback(e, function (e) {
                  t.utils.arrayRemoveItem(o, e), o.length || (u.dispose(), a._subscribable = u = s);
                });
              });
            }, t.bindingContext.prototype.createChildContext = function (e, n, r) {
              return new t.bindingContext(e, this, n, function (e, t) {
                e.$parentContext = t, e.$parent = t.$data, e.$parents = (t.$parents || []).slice(0), e.$parents.unshift(e.$parent), r && r(e);
              });
            }, t.bindingContext.prototype.extend = function (e) {
              return new t.bindingContext(this.$rawData, this, null, function (n) {
                t.utils.extend(n, "function" == typeof e ? e() : e);
              });
            };
            var d = t.utils.domData.nextKey();

            function c(e, n, i, a) {
              var l,
                  u,
                  c = t.utils.domData.get(e, d);

              if (!n) {
                if (c) throw Error("You cannot apply bindings multiple times to the same element.");
                t.utils.domData.set(e, d, !0);
              }

              if (!c && a && t.storedBindingContextForNode(e, i), n && "function" != typeof n) l = n;else {
                var p = t.bindingProvider.instance,
                    f = p.getBindingAccessors || o;

                if (n || i._subscribable) {
                  var m = t.dependentObservable(function () {
                    return (l = n ? n(i, e) : f.call(p, e, i)) && i._subscribable && i._subscribable(), l;
                  }, null, {
                    disposeWhenNodeIsRemoved: e
                  });
                  l && m.isActive() || (m = null);
                } else l = t.dependencyDetection.ignore(f, p, [e, i]);
              }

              if (l) {
                var b = function b() {
                  return t.utils.objectMap(m ? m() : l, r);
                },
                    v = m ? function (e) {
                  return function () {
                    return r(m()[e]);
                  };
                } : function (e) {
                  return l[e];
                };

                b.get = function (e) {
                  return l[e] && r(v(e));
                }, b.has = function (e) {
                  return e in l;
                };

                var g = function (e) {
                  var n = [],
                      r = {},
                      i = [];
                  return t.utils.objectForEach(e, function o(a) {
                    if (!r[a]) {
                      var s = t.getBindingHandler(a);
                      s && (s.after && (i.push(a), t.utils.arrayForEach(s.after, function (n) {
                        if (e[n]) {
                          if (-1 !== t.utils.arrayIndexOf(i, n)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + i.join(", "));
                          o(n);
                        }
                      }), i.pop()), n.push({
                        key: a,
                        handler: s
                      })), r[a] = !0;
                    }
                  }), n;
                }(l);

                t.utils.arrayForEach(g, function (n) {
                  var r = n.handler.init,
                      o = n.handler.update,
                      a = n.key;
                  8 === e.nodeType && function (e) {
                    if (!t.virtualElements.allowedBindings[e]) throw new Error("The binding '" + e + "' cannot be used with virtual elements");
                  }(a);

                  try {
                    "function" == typeof r && t.dependencyDetection.ignore(function () {
                      var t = r(e, v(a), b, i.$data, i);

                      if (t && t.controlsDescendantBindings) {
                        if (u !== s) throw new Error("Multiple bindings (" + u + " and " + a + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                        u = a;
                      }
                    }), "function" == typeof o && t.dependentObservable(function () {
                      o(e, v(a), b, i.$data, i);
                    }, null, {
                      disposeWhenNodeIsRemoved: e
                    });
                  } catch (e) {
                    throw e.message = 'Unable to process binding "' + a + ": " + l[a] + '"\nMessage: ' + e.message, e;
                  }
                });
              }

              return {
                shouldBindDescendants: u === s
              };
            }

            var p = t.utils.domData.nextKey();

            function f(e) {
              return e && e instanceof t.bindingContext ? e : new t.bindingContext(e);
            }

            t.storedBindingContextForNode = function (e, n) {
              if (2 != arguments.length) return t.utils.domData.get(e, p);
              t.utils.domData.set(e, p, n), n._subscribable && n._subscribable._addNode(e);
            }, t.applyBindingAccessorsToNode = function (e, n, r) {
              return 1 === e.nodeType && t.virtualElements.normaliseVirtualElementDomStructure(e), c(e, n, f(r), !0);
            }, t.applyBindingsToNode = function (e, r, o) {
              var a = f(o);
              return t.applyBindingAccessorsToNode(e, function (e, r, o) {
                return "function" == typeof e ? i(e.bind(null, r, o)) : t.utils.objectMap(e, n);
              }(r, a, e), a);
            }, t.applyBindingsToDescendants = function (e, t) {
              1 !== t.nodeType && 8 !== t.nodeType || a(f(e), t, !0);
            }, t.applyBindings = function (e, t) {
              if (t && 1 !== t.nodeType && 8 !== t.nodeType) throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
              t = t || u.document.body, l(f(e), t, !0);
            }, t.contextFor = function (e) {
              switch (e.nodeType) {
                case 1:
                case 8:
                  var n = t.storedBindingContextForNode(e);
                  if (n) return n;
                  if (e.parentNode) return t.contextFor(e.parentNode);
              }

              return s;
            }, t.dataFor = function (e) {
              var n = t.contextFor(e);
              return n ? n.$data : s;
            }, t.exportSymbol("bindingHandlers", t.bindingHandlers), t.exportSymbol("applyBindings", t.applyBindings), t.exportSymbol("applyBindingsToDescendants", t.applyBindingsToDescendants), t.exportSymbol("applyBindingAccessorsToNode", t.applyBindingAccessorsToNode), t.exportSymbol("applyBindingsToNode", t.applyBindingsToNode), t.exportSymbol("contextFor", t.contextFor), t.exportSymbol("dataFor", t.dataFor);
          }();
          var g = {
            class: "className",
            for: "htmlFor"
          };
          t.bindingHandlers.attr = {
            update: function update(e, n, r) {
              var i = t.utils.unwrapObservable(n()) || {};
              t.utils.objectForEach(i, function (n, r) {
                var i = !1 === (r = t.utils.unwrapObservable(r)) || null === r || r === s;
                i && e.removeAttribute(n), t.utils.ieVersion <= 8 && n in g ? (n = g[n], i ? e.removeAttribute(n) : e[n] = r) : i || e.setAttribute(n, r.toString()), "name" === n && t.utils.setElementName(e, i ? "" : r.toString());
              });
            }
          }, t.bindingHandlers.checked = {
            after: ["value", "attr"],
            init: function init(e, n, r) {
              function i() {
                return r.has("checkedValue") ? t.utils.unwrapObservable(r.get("checkedValue")) : e.value;
              }

              function o() {
                var o = e.checked,
                    a = c ? i() : o;

                if (p && (!l || o)) {
                  var s = t.dependencyDetection.ignore(n);
                  u ? d !== a ? (o && (t.utils.addOrRemoveItem(s, a, !0), t.utils.addOrRemoveItem(s, d, !1)), d = a) : t.utils.addOrRemoveItem(s, a, o) : t.expressionRewriting.writeValueToProperty(s, r, "checked", a, !0);
                }
              }

              var a = "checkbox" == e.type,
                  l = "radio" == e.type;

              if (a || l) {
                var u = a && t.utils.unwrapObservable(n()) instanceof Array,
                    d = u ? i() : s,
                    c = l || u,
                    p = !1;
                l && !e.name && t.bindingHandlers.uniqueName.init(e, function () {
                  return !0;
                }), t.dependentObservable(o, null, {
                  disposeWhenNodeIsRemoved: e
                }), t.utils.registerEventHandler(e, "click", o), t.dependentObservable(function () {
                  var r = t.utils.unwrapObservable(n());
                  e.checked = u ? t.utils.arrayIndexOf(r, i()) >= 0 : a ? r : i() === r;
                }, null, {
                  disposeWhenNodeIsRemoved: e
                }), p = !0;
              }
            }
          }, t.expressionRewriting.twoWayBindings.checked = !0, t.bindingHandlers.checkedValue = {
            update: function update(e, n) {
              e.value = t.utils.unwrapObservable(n());
            }
          }, t.bindingHandlers.css = {
            update: function update(e, n) {
              var r = t.utils.unwrapObservable(n());
              "object" == a(r) ? t.utils.objectForEach(r, function (n, r) {
                r = t.utils.unwrapObservable(r), t.utils.toggleDomNodeCssClass(e, n, r);
              }) : (r = String(r || ""), t.utils.toggleDomNodeCssClass(e, e.__ko__cssValue, !1), e.__ko__cssValue = r, t.utils.toggleDomNodeCssClass(e, r, !0));
            }
          }, t.bindingHandlers.enable = {
            update: function update(e, n) {
              var r = t.utils.unwrapObservable(n());
              r && e.disabled ? e.removeAttribute("disabled") : r || e.disabled || (e.disabled = !0);
            }
          }, t.bindingHandlers.disable = {
            update: function update(e, n) {
              t.bindingHandlers.enable.update(e, function () {
                return !t.utils.unwrapObservable(n());
              });
            }
          }, t.bindingHandlers.event = {
            init: function init(e, n, r, i, o) {
              var a = n() || {};
              t.utils.objectForEach(a, function (a) {
                "string" == typeof a && t.utils.registerEventHandler(e, a, function (e) {
                  var s,
                      l = n()[a];

                  if (l) {
                    try {
                      var u = t.utils.makeArray(arguments);
                      i = o.$data, u.unshift(i), s = l.apply(i, u);
                    } finally {
                      !0 !== s && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
                    }

                    !1 !== r.get(a + "Bubble") || (e.cancelBubble = !0, e.stopPropagation && e.stopPropagation());
                  }
                });
              });
            }
          }, t.bindingHandlers.foreach = {
            makeTemplateValueAccessor: function makeTemplateValueAccessor(e) {
              return function () {
                var n = e(),
                    r = t.utils.peekObservable(n);
                return r && "number" != typeof r.length ? (t.utils.unwrapObservable(n), {
                  foreach: r.data,
                  as: r.as,
                  includeDestroyed: r.includeDestroyed,
                  afterAdd: r.afterAdd,
                  beforeRemove: r.beforeRemove,
                  afterRender: r.afterRender,
                  beforeMove: r.beforeMove,
                  afterMove: r.afterMove,
                  templateEngine: t.nativeTemplateEngine.instance
                }) : {
                  foreach: n,
                  templateEngine: t.nativeTemplateEngine.instance
                };
              };
            },
            init: function init(e, n, r, i, o) {
              return t.bindingHandlers.template.init(e, t.bindingHandlers.foreach.makeTemplateValueAccessor(n));
            },
            update: function update(e, n, r, i, o) {
              return t.bindingHandlers.template.update(e, t.bindingHandlers.foreach.makeTemplateValueAccessor(n), r, i, o);
            }
          }, t.expressionRewriting.bindingRewriteValidators.foreach = !1, t.virtualElements.allowedBindings.foreach = !0, t.bindingHandlers.hasfocus = {
            init: function init(e, n, r) {
              var i = function i(_i) {
                e.__ko_hasfocusUpdating = !0;
                var o = e.ownerDocument;

                if ("activeElement" in o) {
                  var a;

                  try {
                    a = o.activeElement;
                  } catch (e) {
                    a = o.body;
                  }

                  _i = a === e;
                }

                var s = n();
                t.expressionRewriting.writeValueToProperty(s, r, "hasfocus", _i, !0), e.__ko_hasfocusLastValue = _i, e.__ko_hasfocusUpdating = !1;
              },
                  o = i.bind(null, !0),
                  a = i.bind(null, !1);

              t.utils.registerEventHandler(e, "focus", o), t.utils.registerEventHandler(e, "focusin", o), t.utils.registerEventHandler(e, "blur", a), t.utils.registerEventHandler(e, "focusout", a);
            },
            update: function update(e, n) {
              var r = !!t.utils.unwrapObservable(n());
              e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === r || (r ? e.focus() : e.blur(), t.dependencyDetection.ignore(t.utils.triggerEvent, null, [e, r ? "focusin" : "focusout"]));
            }
          }, t.expressionRewriting.twoWayBindings.hasfocus = !0, t.bindingHandlers.hasFocus = t.bindingHandlers.hasfocus, t.expressionRewriting.twoWayBindings.hasFocus = !0, t.bindingHandlers.html = {
            init: function init() {
              return {
                controlsDescendantBindings: !0
              };
            },
            update: function update(e, n) {
              t.utils.setHtml(e, n());
            }
          };
          var h,
              y = t.utils.domData.nextKey();

          function x(e, n, r, i) {
            t.bindingHandlers[e] = {
              init: function init(e) {
                return t.utils.domData.set(e, y, {}), {
                  controlsDescendantBindings: !0
                };
              },
              update: function update(e, o, a, s, l) {
                var u = t.utils.domData.get(e, y),
                    d = t.utils.unwrapObservable(o()),
                    c = !r != !d,
                    p = !u.savedNodes;
                (p || n || c !== u.didDisplayOnLastUpdate) && (p && (u.savedNodes = t.utils.cloneNodes(t.virtualElements.childNodes(e), !0)), c ? (p || t.virtualElements.setDomNodeChildren(e, t.utils.cloneNodes(u.savedNodes)), t.applyBindingsToDescendants(i ? i(l, d) : l, e)) : t.virtualElements.emptyNode(e), u.didDisplayOnLastUpdate = c);
              }
            }, t.expressionRewriting.bindingRewriteValidators[e] = !1, t.virtualElements.allowedBindings[e] = !0;
          }

          x("if"), x("ifnot", !1, !0), x("with", !0, !1, function (e, t) {
            return e.createChildContext(t);
          }), t.bindingHandlers.options = {
            init: function init(e) {
              if ("select" !== t.utils.tagNameLower(e)) throw new Error("options binding applies only to SELECT elements");

              for (; e.length > 0;) {
                e.remove(0);
              }

              return {
                controlsDescendantBindings: !0
              };
            },
            update: function update(e, n, r) {
              function i() {
                return t.utils.arrayFilter(e.options, function (e) {
                  return e.selected;
                });
              }

              var o,
                  l,
                  u = 0 != e.length && e.multiple ? e.scrollTop : null,
                  c = t.utils.unwrapObservable(n()),
                  p = r.get("optionsIncludeDestroyed"),
                  f = {};

              if (l = e.multiple ? t.utils.arrayMap(i(), t.selectExtensions.readValue) : e.selectedIndex >= 0 ? [t.selectExtensions.readValue(e.options[e.selectedIndex])] : [], c) {
                void 0 === c.length && (c = [c]);
                var m = t.utils.arrayFilter(c, function (e) {
                  return p || e === s || null === e || !t.utils.unwrapObservable(e._destroy);
                });
                r.has("optionsCaption") && null !== (o = t.utils.unwrapObservable(r.get("optionsCaption"))) && o !== s && m.unshift(f);
              } else c = [];

              function b(e, t, n) {
                var r = a(t);
                return "function" == r ? t(e) : "string" == r ? e[t] : n;
              }

              var v = !1;

              function g(n, r) {
                if (l.length) {
                  var i = t.utils.arrayIndexOf(l, t.selectExtensions.readValue(r[0])) >= 0;
                  t.utils.setOptionNodeSelectionState(r[0], i), v && !i && t.dependencyDetection.ignore(t.utils.triggerEvent, null, [e, "change"]);
                }
              }

              var h = g;
              r.has("optionsAfterRender") && (h = function h(e, n) {
                g(0, n), t.dependencyDetection.ignore(r.get("optionsAfterRender"), null, [n[0], e !== f ? e : s]);
              }), t.utils.setDomNodeChildrenFromArrayMapping(e, m, function (e, n, i) {
                i.length && (l = i[0].selected ? [t.selectExtensions.readValue(i[0])] : [], v = !0);
                var o = d.createElement("option");
                if (e === f) t.utils.setTextContent(o, r.get("optionsCaption")), t.selectExtensions.writeValue(o, s);else {
                  var a = b(e, r.get("optionsValue"), e);
                  t.selectExtensions.writeValue(o, t.utils.unwrapObservable(a));
                  var u = b(e, r.get("optionsText"), a);
                  t.utils.setTextContent(o, u);
                }
                return [o];
              }, null, h), (e.multiple ? l.length && i().length < l.length : l.length && e.selectedIndex >= 0 ? t.selectExtensions.readValue(e.options[e.selectedIndex]) !== l[0] : l.length || e.selectedIndex >= 0) && t.dependencyDetection.ignore(t.utils.triggerEvent, null, [e, "change"]), t.utils.ensureSelectElementIsRenderedCorrectly(e), u && Math.abs(u - e.scrollTop) > 20 && (e.scrollTop = u);
            }
          }, t.bindingHandlers.options.optionValueDomDataKey = t.utils.domData.nextKey(), t.bindingHandlers.selectedOptions = {
            after: ["options", "foreach"],
            init: function init(e, n, r) {
              t.utils.registerEventHandler(e, "change", function () {
                var i = n(),
                    o = [];
                t.utils.arrayForEach(e.getElementsByTagName("option"), function (e) {
                  e.selected && o.push(t.selectExtensions.readValue(e));
                }), t.expressionRewriting.writeValueToProperty(i, r, "selectedOptions", o);
              });
            },
            update: function update(e, n) {
              if ("select" != t.utils.tagNameLower(e)) throw new Error("values binding applies only to SELECT elements");
              var r = t.utils.unwrapObservable(n());
              r && "number" == typeof r.length && t.utils.arrayForEach(e.getElementsByTagName("option"), function (e) {
                var n = t.utils.arrayIndexOf(r, t.selectExtensions.readValue(e)) >= 0;
                t.utils.setOptionNodeSelectionState(e, n);
              });
            }
          }, t.expressionRewriting.twoWayBindings.selectedOptions = !0, t.bindingHandlers.style = {
            update: function update(e, n) {
              var r = t.utils.unwrapObservable(n() || {});
              t.utils.objectForEach(r, function (n, r) {
                r = t.utils.unwrapObservable(r), e.style[n] = r || "";
              });
            }
          }, t.bindingHandlers.submit = {
            init: function init(e, n, r, i, o) {
              if ("function" != typeof n()) throw new Error("The value for a submit binding must be a function");
              t.utils.registerEventHandler(e, "submit", function (t) {
                var r,
                    i = n();

                try {
                  r = i.call(o.$data, e);
                } finally {
                  !0 !== r && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                }
              });
            }
          }, t.bindingHandlers.text = {
            init: function init() {
              return {
                controlsDescendantBindings: !0
              };
            },
            update: function update(e, n) {
              t.utils.setTextContent(e, n());
            }
          }, t.virtualElements.allowedBindings.text = !0, t.bindingHandlers.uniqueName = {
            init: function init(e, n) {
              if (n()) {
                var r = "ko_unique_" + ++t.bindingHandlers.uniqueName.currentIndex;
                t.utils.setElementName(e, r);
              }
            }
          }, t.bindingHandlers.uniqueName.currentIndex = 0, t.bindingHandlers.value = {
            after: ["options", "foreach"],
            init: function init(e, n, r) {
              var i = ["change"],
                  o = r.get("valueUpdate"),
                  a = !1;
              o && ("string" == typeof o && (o = [o]), t.utils.arrayPushAll(i, o), i = t.utils.arrayGetDistinctValues(i));

              var s = function s() {
                a = !1;
                var i = n(),
                    o = t.selectExtensions.readValue(e);
                t.expressionRewriting.writeValueToProperty(i, r, "value", o);
              };

              t.utils.ieVersion && "input" == e.tagName.toLowerCase() && "text" == e.type && "off" != e.autocomplete && (!e.form || "off" != e.form.autocomplete) && -1 == t.utils.arrayIndexOf(i, "propertychange") && (t.utils.registerEventHandler(e, "propertychange", function () {
                a = !0;
              }), t.utils.registerEventHandler(e, "blur", function () {
                a && s();
              })), t.utils.arrayForEach(i, function (n) {
                var r = s;
                t.utils.stringStartsWith(n, "after") && (r = function r() {
                  setTimeout(s, 0);
                }, n = n.substring("after".length)), t.utils.registerEventHandler(e, n, r);
              });
            },
            update: function update(e, n) {
              var r = "select" === t.utils.tagNameLower(e),
                  i = t.utils.unwrapObservable(n()),
                  o = t.selectExtensions.readValue(e);

              if (i !== o) {
                var a = function a() {
                  t.selectExtensions.writeValue(e, i);
                };

                a(), r && (i !== t.selectExtensions.readValue(e) ? t.dependencyDetection.ignore(t.utils.triggerEvent, null, [e, "change"]) : setTimeout(a, 0));
              }
            }
          }, t.expressionRewriting.twoWayBindings.value = !0, t.bindingHandlers.visible = {
            update: function update(e, n) {
              var r = t.utils.unwrapObservable(n()),
                  i = !("none" == e.style.display);
              r && !i ? e.style.display = "" : !r && i && (e.style.display = "none");
            }
          }, h = "click", t.bindingHandlers[h] = {
            init: function init(e, n, r, i, o) {
              return t.bindingHandlers.event.init.call(this, e, function () {
                var e = {};
                return e[h] = n(), e;
              }, r, i, o);
            }
          }, t.templateEngine = function () {}, t.templateEngine.prototype.renderTemplateSource = function (e, t, n) {
            throw new Error("Override renderTemplateSource");
          }, t.templateEngine.prototype.createJavaScriptEvaluatorBlock = function (e) {
            throw new Error("Override createJavaScriptEvaluatorBlock");
          }, t.templateEngine.prototype.makeTemplateSource = function (e, n) {
            if ("string" == typeof e) {
              var r = (n = n || d).getElementById(e);
              if (!r) throw new Error("Cannot find template with ID " + e);
              return new t.templateSources.domElement(r);
            }

            if (1 == e.nodeType || 8 == e.nodeType) return new t.templateSources.anonymousTemplate(e);
            throw new Error("Unknown template type: " + e);
          }, t.templateEngine.prototype.renderTemplate = function (e, t, n, r) {
            var i = this.makeTemplateSource(e, r);
            return this.renderTemplateSource(i, t, n);
          }, t.templateEngine.prototype.isTemplateRewritten = function (e, t) {
            return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, t).data("isRewritten");
          }, t.templateEngine.prototype.rewriteTemplate = function (e, t, n) {
            var r = this.makeTemplateSource(e, n),
                i = t(r.text());
            r.text(i), r.data("isRewritten", !0);
          }, t.exportSymbol("templateEngine", t.templateEngine), t.templateRewriting = function () {
            var e = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
                n = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

            function r(e, n, r, i) {
              var o = t.expressionRewriting.parseObjectLiteral(e);
              !function (e) {
                for (var n = t.expressionRewriting.bindingRewriteValidators, r = 0; r < e.length; r++) {
                  var i = e[r].key;

                  if (n.hasOwnProperty(i)) {
                    var o = n[i];

                    if ("function" == typeof o) {
                      var a = o(e[r].value);
                      if (a) throw new Error(a);
                    } else if (!o) throw new Error("This template engine does not support the '" + i + "' binding within its templates");
                  }
                }
              }(o);
              var a = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + t.expressionRewriting.preProcessBindings(o, {
                valueAccessors: !0
              }) + " } })()},'" + r.toLowerCase() + "')";
              return i.createJavaScriptEvaluatorBlock(a) + n;
            }

            return {
              ensureTemplateIsRewritten: function ensureTemplateIsRewritten(e, n, r) {
                n.isTemplateRewritten(e, r) || n.rewriteTemplate(e, function (e) {
                  return t.templateRewriting.memoizeBindingAttributeSyntax(e, n);
                }, r);
              },
              memoizeBindingAttributeSyntax: function memoizeBindingAttributeSyntax(t, i) {
                return t.replace(e, function () {
                  return r(arguments[4], arguments[1], arguments[2], i);
                }).replace(n, function () {
                  return r(arguments[1], "\x3c!-- ko --\x3e", "#comment", i);
                });
              },
              applyMemoizedBindingsToNextSibling: function applyMemoizedBindingsToNextSibling(e, n) {
                return t.memoization.memoize(function (r, i) {
                  var o = r.nextSibling;
                  o && o.nodeName.toLowerCase() === n && t.applyBindingAccessorsToNode(o, e, i);
                });
              }
            };
          }(), t.exportSymbol("__tr_ambtns", t.templateRewriting.applyMemoizedBindingsToNextSibling), function () {
            t.templateSources = {}, t.templateSources.domElement = function (e) {
              this.domElement = e;
            }, t.templateSources.domElement.prototype.text = function () {
              var e = t.utils.tagNameLower(this.domElement),
                  n = "script" === e ? "text" : "textarea" === e ? "value" : "innerHTML";
              if (0 == arguments.length) return this.domElement[n];
              var r = arguments[0];
              "innerHTML" === n ? t.utils.setHtml(this.domElement, r) : this.domElement[n] = r;
            };
            var e = t.utils.domData.nextKey() + "_";

            t.templateSources.domElement.prototype.data = function (n) {
              if (1 === arguments.length) return t.utils.domData.get(this.domElement, e + n);
              t.utils.domData.set(this.domElement, e + n, arguments[1]);
            };

            var n = t.utils.domData.nextKey();
            t.templateSources.anonymousTemplate = function (e) {
              this.domElement = e;
            }, t.templateSources.anonymousTemplate.prototype = new t.templateSources.domElement(), t.templateSources.anonymousTemplate.prototype.constructor = t.templateSources.anonymousTemplate, t.templateSources.anonymousTemplate.prototype.text = function () {
              if (0 == arguments.length) {
                var e = t.utils.domData.get(this.domElement, n) || {};
                return e.textData === s && e.containerData && (e.textData = e.containerData.innerHTML), e.textData;
              }

              var r = arguments[0];
              t.utils.domData.set(this.domElement, n, {
                textData: r
              });
            }, t.templateSources.domElement.prototype.nodes = function () {
              if (0 == arguments.length) return (t.utils.domData.get(this.domElement, n) || {}).containerData;
              var e = arguments[0];
              t.utils.domData.set(this.domElement, n, {
                containerData: e
              });
            }, t.exportSymbol("templateSources", t.templateSources), t.exportSymbol("templateSources.domElement", t.templateSources.domElement), t.exportSymbol("templateSources.anonymousTemplate", t.templateSources.anonymousTemplate);
          }(), function () {
            var e;

            function n(e, n, r) {
              for (var i, o = e, a = t.virtualElements.nextSibling(n); o && (i = o) !== a;) {
                r(i, o = t.virtualElements.nextSibling(i));
              }
            }

            function r(e, r) {
              if (e.length) {
                var i = e[0],
                    o = e[e.length - 1],
                    a = i.parentNode,
                    s = t.bindingProvider.instance,
                    l = s.preprocessNode;

                if (l) {
                  if (n(i, o, function (e, t) {
                    var n = e.previousSibling,
                        r = l.call(s, e);
                    r && (e === i && (i = r[0] || t), e === o && (o = r[r.length - 1] || n));
                  }), e.length = 0, !i) return;
                  i === o ? e.push(i) : (e.push(i, o), t.utils.fixUpContinuousNodeArray(e, a));
                }

                n(i, o, function (e) {
                  1 !== e.nodeType && 8 !== e.nodeType || t.applyBindings(r, e);
                }), n(i, o, function (e) {
                  1 !== e.nodeType && 8 !== e.nodeType || t.memoization.unmemoizeDomNodeAndDescendants(e, [r]);
                }), t.utils.fixUpContinuousNodeArray(e, a);
              }
            }

            function i(e) {
              return e.nodeType ? e : e.length > 0 ? e[0] : null;
            }

            function o(n, o, a, s, l) {
              l = l || {};
              var u = n && i(n),
                  d = u && u.ownerDocument,
                  c = l.templateEngine || e;
              t.templateRewriting.ensureTemplateIsRewritten(a, c, d);
              var p = c.renderTemplate(a, s, l, d);
              if ("number" != typeof p.length || p.length > 0 && "number" != typeof p[0].nodeType) throw new Error("Template engine must return an array of DOM nodes");
              var f = !1;

              switch (o) {
                case "replaceChildren":
                  t.virtualElements.setDomNodeChildren(n, p), f = !0;
                  break;

                case "replaceNode":
                  t.utils.replaceDomNodes(n, p), f = !0;
                  break;

                case "ignoreTargetNode":
                  break;

                default:
                  throw new Error("Unknown renderMode: " + o);
              }

              return f && (r(p, s), l.afterRender && t.dependencyDetection.ignore(l.afterRender, null, [p, s.$data])), p;
            }

            t.setTemplateEngine = function (n) {
              if (n != s && !(n instanceof t.templateEngine)) throw new Error("templateEngine must inherit from ko.templateEngine");
              e = n;
            }, t.renderTemplate = function (n, r, a, l, u) {
              if (((a = a || {}).templateEngine || e) == s) throw new Error("Set a template engine before calling renderTemplate");

              if (u = u || "replaceChildren", l) {
                var d = i(l),
                    c = d && "replaceNode" == u ? d.parentNode : d;
                return t.dependentObservable(function () {
                  var e = r && r instanceof t.bindingContext ? r : new t.bindingContext(t.utils.unwrapObservable(r)),
                      s = "function" == typeof n ? n(e.$data, e) : n,
                      c = o(l, u, s, e, a);
                  "replaceNode" == u && (d = i(l = c));
                }, null, {
                  disposeWhen: function disposeWhen() {
                    return !d || !t.utils.domNodeIsAttachedToDocument(d);
                  },
                  disposeWhenNodeIsRemoved: c
                });
              }

              return t.memoization.memoize(function (e) {
                t.renderTemplate(n, r, a, e, "replaceNode");
              });
            }, t.renderTemplateForEach = function (e, n, i, a, l) {
              var u,
                  d = function d(t, n) {
                return u = l.createChildContext(t, i.as, function (e) {
                  e.$index = n;
                }), o(null, "ignoreTargetNode", "function" == typeof e ? e(t, u) : e, u, i);
              },
                  c = function c(e, t, n) {
                r(t, u), i.afterRender && i.afterRender(t, e);
              };

              return t.dependentObservable(function () {
                var e = t.utils.unwrapObservable(n) || [];
                void 0 === e.length && (e = [e]);
                var r = t.utils.arrayFilter(e, function (e) {
                  return i.includeDestroyed || e === s || null === e || !t.utils.unwrapObservable(e._destroy);
                });
                t.dependencyDetection.ignore(t.utils.setDomNodeChildrenFromArrayMapping, null, [a, r, d, i, c]);
              }, null, {
                disposeWhenNodeIsRemoved: a
              });
            };
            var a = t.utils.domData.nextKey();
            t.bindingHandlers.template = {
              init: function init(e, n) {
                var r = t.utils.unwrapObservable(n());
                if ("string" == typeof r || r.name) t.virtualElements.emptyNode(e);else {
                  var i = t.virtualElements.childNodes(e),
                      o = t.utils.moveCleanedNodesToContainerElement(i);
                  new t.templateSources.anonymousTemplate(e).nodes(o);
                }
                return {
                  controlsDescendantBindings: !0
                };
              },
              update: function update(e, n, r, i, o) {
                var l,
                    u = t.utils.unwrapObservable(n()),
                    d = {},
                    c = !0,
                    p = null;

                if ("string" != typeof u && (d = u, u = t.utils.unwrapObservable(d.name), "if" in d && (c = t.utils.unwrapObservable(d.if)), c && "ifnot" in d && (c = !t.utils.unwrapObservable(d.ifnot)), l = t.utils.unwrapObservable(d.data)), "foreach" in d) {
                  var f = c && d.foreach || [];
                  p = t.renderTemplateForEach(u || e, f, d, e, o);
                } else if (c) {
                  var m = "data" in d ? o.createChildContext(l, d.as) : o;
                  p = t.renderTemplate(u || e, m, d, e);
                } else t.virtualElements.emptyNode(e);

                !function (e, n) {
                  var r = t.utils.domData.get(e, a);
                  r && "function" == typeof r.dispose && r.dispose(), t.utils.domData.set(e, a, n && n.isActive() ? n : s);
                }(e, p);
              }
            }, t.expressionRewriting.bindingRewriteValidators.template = function (e) {
              var n = t.expressionRewriting.parseObjectLiteral(e);
              return 1 == n.length && n[0].unknown ? null : t.expressionRewriting.keyValueArrayContainsKey(n, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
            }, t.virtualElements.allowedBindings.template = !0;
          }(), t.exportSymbol("setTemplateEngine", t.setTemplateEngine), t.exportSymbol("renderTemplate", t.renderTemplate), t.utils.compareArrays = function () {
            var e = "added",
                t = "deleted";

            function n(e, t, n, r, i) {
              var o,
                  a,
                  s,
                  l,
                  u,
                  d = Math.min,
                  c = Math.max,
                  p = [],
                  f = e.length,
                  m = t.length,
                  b = m - f || 1,
                  v = f + m + 1;

              for (o = 0; o <= f; o++) {
                for (l = s, p.push(s = []), u = d(m, o + b), a = c(0, o - 1); a <= u; a++) {
                  if (a) {
                    if (o) {
                      if (e[o - 1] === t[a - 1]) s[a] = l[a - 1];else {
                        var g = l[a] || v,
                            h = s[a - 1] || v;
                        s[a] = d(g, h) + 1;
                      }
                    } else s[a] = a + 1;
                  } else s[a] = o + 1;
                }
              }

              var y,
                  x = [],
                  w = [],
                  E = [];

              for (o = f, a = m; o || a;) {
                y = p[o][a] - 1, a && y === p[o][a - 1] ? w.push(x[x.length] = {
                  status: n,
                  value: t[--a],
                  index: a
                }) : o && y === p[o - 1][a] ? E.push(x[x.length] = {
                  status: r,
                  value: e[--o],
                  index: o
                }) : (--a, --o, i.sparse || x.push({
                  status: "retained",
                  value: t[a]
                }));
              }

              if (w.length && E.length) {
                var S,
                    N,
                    D,
                    T,
                    O,
                    k = 10 * f;

                for (S = N = 0; (i.dontLimitMoves || S < k) && (T = w[N]); N++) {
                  for (D = 0; O = E[D]; D++) {
                    if (T.value === O.value) {
                      T.moved = O.index, O.moved = T.index, E.splice(D, 1), S = D = 0;
                      break;
                    }
                  }

                  S += D;
                }
              }

              return x.reverse();
            }

            return function (r, i, o) {
              return o = "boolean" == typeof o ? {
                dontLimitMoves: o
              } : o || {}, i = i || [], (r = r || []).length <= i.length ? n(r, i, e, t, o) : n(i, r, t, e, o);
            };
          }(), t.exportSymbol("utils.compareArrays", t.utils.compareArrays), function () {
            function e(e, n, r, i, o) {
              var a = [],
                  l = t.dependentObservable(function () {
                var s = n(r, o, t.utils.fixUpContinuousNodeArray(a, e)) || [];
                a.length > 0 && (t.utils.replaceDomNodes(a, s), i && t.dependencyDetection.ignore(i, null, [r, s, o])), a.splice(0, a.length), t.utils.arrayPushAll(a, s);
              }, null, {
                disposeWhenNodeIsRemoved: e,
                disposeWhen: function disposeWhen() {
                  return !t.utils.anyDomNodeIsAttachedToDocument(a);
                }
              });
              return {
                mappedNodes: a,
                dependentObservable: l.isActive() ? l : s
              };
            }

            var n = t.utils.domData.nextKey();

            t.utils.setDomNodeChildrenFromArrayMapping = function (r, i, o, a, l) {
              i = i || [], a = a || {};
              var u,
                  d = t.utils.domData.get(r, n) === s,
                  c = t.utils.domData.get(r, n) || [],
                  p = t.utils.arrayMap(c, function (e) {
                return e.arrayEntry;
              }),
                  f = t.utils.compareArrays(p, i, a.dontLimitMoves),
                  m = [],
                  b = 0,
                  v = 0,
                  g = [],
                  h = [],
                  y = [],
                  x = [],
                  w = [];

              function E(e, n) {
                u = c[n], v !== n && (x[e] = u), u.indexObservable(v++), t.utils.fixUpContinuousNodeArray(u.mappedNodes, r), m.push(u), h.push(u);
              }

              function S(e, n) {
                if (e) for (var r = 0, i = n.length; r < i; r++) {
                  n[r] && t.utils.arrayForEach(n[r].mappedNodes, function (t) {
                    e(t, r, n[r].arrayEntry);
                  });
                }
              }

              for (var N, D, T = 0; N = f[T]; T++) {
                switch (D = N.moved, N.status) {
                  case "deleted":
                    D === s && ((u = c[b]).dependentObservable && u.dependentObservable.dispose(), g.push.apply(g, t.utils.fixUpContinuousNodeArray(u.mappedNodes, r)), a.beforeRemove && (y[T] = u, h.push(u))), b++;
                    break;

                  case "retained":
                    E(T, b++);
                    break;

                  case "added":
                    D !== s ? E(T, D) : (u = {
                      arrayEntry: N.value,
                      indexObservable: t.observable(v++)
                    }, m.push(u), h.push(u), d || (w[T] = u));
                }
              }

              S(a.beforeMove, x), t.utils.arrayForEach(g, a.beforeRemove ? t.cleanNode : t.removeNode), T = 0;

              for (var O, k, C = t.virtualElements.firstChild(r); u = h[T]; T++) {
                u.mappedNodes || t.utils.extend(u, e(r, o, u.arrayEntry, l, u.indexObservable));

                for (var _ = 0; k = u.mappedNodes[_]; C = k.nextSibling, O = k, _++) {
                  k !== C && t.virtualElements.insertAfter(r, k, O);
                }

                !u.initialized && l && (l(u.arrayEntry, u.mappedNodes, u.indexObservable), u.initialized = !0);
              }

              S(a.beforeRemove, y), S(a.afterMove, x), S(a.afterAdd, w), t.utils.domData.set(r, n, m);
            };
          }(), t.exportSymbol("utils.setDomNodeChildrenFromArrayMapping", t.utils.setDomNodeChildrenFromArrayMapping), t.nativeTemplateEngine = function () {
            this.allowTemplateRewriting = !1;
          }, t.nativeTemplateEngine.prototype = new t.templateEngine(), t.nativeTemplateEngine.prototype.constructor = t.nativeTemplateEngine, t.nativeTemplateEngine.prototype.renderTemplateSource = function (e, n, r) {
            var i = t.utils.ieVersion < 9 || !e.nodes ? null : e.nodes();
            if (i) return t.utils.makeArray(i.cloneNode(!0).childNodes);
            var o = e.text();
            return t.utils.parseHtmlFragment(o);
          }, t.nativeTemplateEngine.instance = new t.nativeTemplateEngine(), t.setTemplateEngine(t.nativeTemplateEngine.instance), t.exportSymbol("nativeTemplateEngine", t.nativeTemplateEngine), function () {
            t.jqueryTmplTemplateEngine = function () {
              var e = this.jQueryTmplVersion = function () {
                if (void 0 === p || !p.tmpl) return 0;

                try {
                  if (p.tmpl.tag.tmpl.open.toString().indexOf("__") >= 0) return 2;
                } catch (e) {}

                return 1;
              }();

              this.renderTemplateSource = function (t, n, r) {
                r = r || {}, function () {
                  if (e < 2) throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                }();
                var i = t.data("precompiled");

                if (!i) {
                  var o = t.text() || "";
                  o = "{{ko_with $item.koBindingContext}}" + o + "{{/ko_with}}", i = p.template(null, o), t.data("precompiled", i);
                }

                var a = function (e, t, n) {
                  return p.tmpl(e, t, n);
                }(i, [n.$data], p.extend({
                  koBindingContext: n
                }, r.templateOptions));

                return a.appendTo(d.createElement("div")), p.fragments = {}, a;
              }, this.createJavaScriptEvaluatorBlock = function (e) {
                return "{{ko_code ((function() { return " + e + " })()) }}";
              }, this.addTemplate = function (e, t) {
                d.write("<script type='text/html' id='" + e + "'>" + t + "<\/script>");
              }, e > 0 && (p.tmpl.tag.ko_code = {
                open: "__.push($1 || '');"
              }, p.tmpl.tag.ko_with = {
                open: "with($1) {",
                close: "} "
              });
            }, t.jqueryTmplTemplateEngine.prototype = new t.templateEngine(), t.jqueryTmplTemplateEngine.prototype.constructor = t.jqueryTmplTemplateEngine;
            var e = new t.jqueryTmplTemplateEngine();
            e.jQueryTmplVersion > 0 && t.setTemplateEngine(e), t.exportSymbol("jqueryTmplTemplateEngine", t.jqueryTmplTemplateEngine);
          }();
        }, "object" === a(t) && "object" === a(e) ? l(e.exports || t) : (r = [t], (i = "function" == typeof (n = l) ? n.apply(t, r) : n) === s || (e.exports = i));
      }();
    }).call(this, n(2)(e));
  }, function (e, t, n) {
    "use strict";

    n.r(t), n.d(t, "KnockoutClassBindingProvider", function () {
      return s;
    });
    var r = n(0),
        i = n.n(r);

    var o = function o(e, t) {
      var n, r;
      if (!e) return e;

      for (r in n = {}, e) {
        e.hasOwnProperty(r) && (n[r] = t(e[r], r, e));
      }

      return n;
    },
        a = function a(e) {
      return function () {
        return e;
      };
    };

    i.a.version >= "3.0.0" && function () {
      var e = document.createElement("div");
      i.a.applyBindings(null, e);

      var t = i.a.contextFor(e),
          n = !i.a.storedBindingContextForNode,
          r = n ? "A" : "_subscribable",
          o = function o() {};

      o[n ? "wb" : "_addNode"] = o, t.constructor.prototype[r] = o, i.a.cleanNode(e);
    }();

    var s = function e(t, n) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);
      var r = new i.a.bindingProvider();
      n = n || {}, this.attribute = n.attribute || "data-class", this.virtualAttribute = "ko " + (n.virtualAttribute || "class") + ":", this.fallback = n.fallback, this.bindings = t || {}, this.bindingRouter = n.bindingRouter || function (e, t) {
        var n, r, i, o;
        if (t[e]) return t[e];

        for (o = t, n = 0, r = (i = e.split(".")).length; n < r; n++) {
          o = o[i[n]];
        }

        return o;
      }, this.registerBindings = function (e) {
        i.a.utils.extend(this.bindings, e);
      }, this.nodeHasBindings = function (e) {
        var t;
        return 1 === e.nodeType ? t = e.getAttribute(this.attribute) : 8 === e.nodeType && (t = ("" + e.nodeValue || e.text).indexOf(this.virtualAttribute) > -1), !t && this.fallback && (t = r.nodeHasBindings(e)), t;
      }, this.getBindingsFunction = function (e) {
        return function (t, n) {
          var s,
              l,
              u,
              d,
              c,
              p,
              f = {},
              m = "";
          if (1 === t.nodeType ? m = t.getAttribute(this.attribute) : 8 === t.nodeType && (p = (c = "" + t.nodeValue || t.text).indexOf(this.virtualAttribute)) > -1 && (m = c.substring(p + this.virtualAttribute.length)), m) for (s = 0, l = (m = m.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g, "").replace(/(\s|\u00A0){2,}/g, " ").split(" ")).length; s < l; s++) {
            (u = this.bindingRouter(m[s], this.bindings)) && (d = "function" == typeof u ? u.call(n.$data, n, m) : u, e && (d = o(d, a)), i.a.utils.extend(f, d));
          } else this.fallback && (f = r[e ? "getBindingAccessors" : "getBindings"](t, n));
          return f;
        };
      }, this.getBindings = this.getBindingsFunction(!1), this.getBindingAccessors = this.getBindingsFunction(!0);
    };

    t.default = s;
  }, function (e, t) {
    e.exports = function (e) {
      return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
        enumerable: !0,
        get: function get() {
          return e.l;
        }
      }), Object.defineProperty(e, "id", {
        enumerable: !0,
        get: function get() {
          return e.i;
        }
      }), e.webpackPolyfill = 1), e;
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/knockout/build/output/knockout-latest.debug.js":
/*!*********************************************************************!*\
  !*** ./node_modules/knockout/build/output/knockout-latest.debug.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Knockout JavaScript library v3.0.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)
(function () {
  var DEBUG = true;

  (function (undefined) {
    // (0, eval)('this') is a robust way of getting a reference to the global object
    // For details, see http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023
    var window = this || (0, eval)('this'),
        document = window['document'],
        navigator = window['navigator'],
        jQuery = window["jQuery"],
        JSON = window["JSON"];

    (function (factory) {
      // Support three module loading scenarios
      if ( true && ( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') {
        // [1] CommonJS/Node.js
        var target = module['exports'] || exports; // module.exports is for Node.js

        factory(target);
      } else if (true) {
        // [2] AMD anonymous module
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
      } else {}
    })(function (koExports) {
      // Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
      // In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
      var ko = typeof koExports !== 'undefined' ? koExports : {}; // Google Closure Compiler helpers (used only to make the minified file smaller)

      ko.exportSymbol = function (koPath, object) {
        var tokens = koPath.split("."); // In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
        // At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)

        var target = ko;

        for (var i = 0; i < tokens.length - 1; i++) {
          target = target[tokens[i]];
        }

        target[tokens[tokens.length - 1]] = object;
      };

      ko.exportProperty = function (owner, publicName, object) {
        owner[publicName] = object;
      };

      ko.version = "3.0.0";
      ko.exportSymbol('version', ko.version);

      ko.utils = function () {
        var objectForEach = function objectForEach(obj, action) {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              action(prop, obj[prop]);
            }
          }
        }; // Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)


        var knownEvents = {},
            knownEventTypesByEventName = {};
        var keyEventTypeName = navigator && /Firefox\/2/i.test(navigator.userAgent) ? 'KeyboardEvent' : 'UIEvents';
        knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
        knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
        objectForEach(knownEvents, function (eventType, knownEventsForType) {
          if (knownEventsForType.length) {
            for (var i = 0, j = knownEventsForType.length; i < j; i++) {
              knownEventTypesByEventName[knownEventsForType[i]] = eventType;
            }
          }
        });
        var eventsThatMustBeRegisteredUsingAttachEvent = {
          'propertychange': true
        }; // Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406
        // Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
        // Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
        // Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
        // If there is a future need to detect specific versions of IE10+, we will amend this.

        var ieVersion = document && function () {
          var version = 3,
              div = document.createElement('div'),
              iElems = div.getElementsByTagName('i'); // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment

          while (div.innerHTML = '<!--[if gt IE ' + ++version + ']><i></i><![endif]-->', iElems[0]) {}

          return version > 4 ? version : undefined;
        }();

        var isIe6 = ieVersion === 6,
            isIe7 = ieVersion === 7;

        function isClickOnCheckableElement(element, eventType) {
          if (ko.utils.tagNameLower(element) !== "input" || !element.type) return false;
          if (eventType.toLowerCase() != "click") return false;
          var inputType = element.type;
          return inputType == "checkbox" || inputType == "radio";
        }

        return {
          fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],
          arrayForEach: function arrayForEach(array, action) {
            for (var i = 0, j = array.length; i < j; i++) {
              action(array[i]);
            }
          },
          arrayIndexOf: function arrayIndexOf(array, item) {
            if (typeof Array.prototype.indexOf == "function") return Array.prototype.indexOf.call(array, item);

            for (var i = 0, j = array.length; i < j; i++) {
              if (array[i] === item) return i;
            }

            return -1;
          },
          arrayFirst: function arrayFirst(array, predicate, predicateOwner) {
            for (var i = 0, j = array.length; i < j; i++) {
              if (predicate.call(predicateOwner, array[i])) return array[i];
            }

            return null;
          },
          arrayRemoveItem: function arrayRemoveItem(array, itemToRemove) {
            var index = ko.utils.arrayIndexOf(array, itemToRemove);
            if (index >= 0) array.splice(index, 1);
          },
          arrayGetDistinctValues: function arrayGetDistinctValues(array) {
            array = array || [];
            var result = [];

            for (var i = 0, j = array.length; i < j; i++) {
              if (ko.utils.arrayIndexOf(result, array[i]) < 0) result.push(array[i]);
            }

            return result;
          },
          arrayMap: function arrayMap(array, mapping) {
            array = array || [];
            var result = [];

            for (var i = 0, j = array.length; i < j; i++) {
              result.push(mapping(array[i]));
            }

            return result;
          },
          arrayFilter: function arrayFilter(array, predicate) {
            array = array || [];
            var result = [];

            for (var i = 0, j = array.length; i < j; i++) {
              if (predicate(array[i])) result.push(array[i]);
            }

            return result;
          },
          arrayPushAll: function arrayPushAll(array, valuesToPush) {
            if (valuesToPush instanceof Array) array.push.apply(array, valuesToPush);else for (var i = 0, j = valuesToPush.length; i < j; i++) {
              array.push(valuesToPush[i]);
            }
            return array;
          },
          addOrRemoveItem: function addOrRemoveItem(array, value, included) {
            var existingEntryIndex = ko.utils.arrayIndexOf(ko.utils.peekObservable(array), value);

            if (existingEntryIndex < 0) {
              if (included) array.push(value);
            } else {
              if (!included) array.splice(existingEntryIndex, 1);
            }
          },
          extend: function extend(target, source) {
            if (source) {
              for (var prop in source) {
                if (source.hasOwnProperty(prop)) {
                  target[prop] = source[prop];
                }
              }
            }

            return target;
          },
          objectForEach: objectForEach,
          objectMap: function objectMap(source, mapping) {
            if (!source) return source;
            var target = {};

            for (var prop in source) {
              if (source.hasOwnProperty(prop)) {
                target[prop] = mapping(source[prop], prop, source);
              }
            }

            return target;
          },
          emptyDomNode: function emptyDomNode(domNode) {
            while (domNode.firstChild) {
              ko.removeNode(domNode.firstChild);
            }
          },
          moveCleanedNodesToContainerElement: function moveCleanedNodesToContainerElement(nodes) {
            // Ensure it's a real array, as we're about to reparent the nodes and
            // we don't want the underlying collection to change while we're doing that.
            var nodesArray = ko.utils.makeArray(nodes);
            var container = document.createElement('div');

            for (var i = 0, j = nodesArray.length; i < j; i++) {
              container.appendChild(ko.cleanNode(nodesArray[i]));
            }

            return container;
          },
          cloneNodes: function cloneNodes(nodesArray, shouldCleanNodes) {
            for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
              var clonedNode = nodesArray[i].cloneNode(true);
              newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
            }

            return newNodesArray;
          },
          setDomNodeChildren: function setDomNodeChildren(domNode, childNodes) {
            ko.utils.emptyDomNode(domNode);

            if (childNodes) {
              for (var i = 0, j = childNodes.length; i < j; i++) {
                domNode.appendChild(childNodes[i]);
              }
            }
          },
          replaceDomNodes: function replaceDomNodes(nodeToReplaceOrNodeArray, newNodesArray) {
            var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;

            if (nodesToReplaceArray.length > 0) {
              var insertionPoint = nodesToReplaceArray[0];
              var parent = insertionPoint.parentNode;

              for (var i = 0, j = newNodesArray.length; i < j; i++) {
                parent.insertBefore(newNodesArray[i], insertionPoint);
              }

              for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
                ko.removeNode(nodesToReplaceArray[i]);
              }
            }
          },
          fixUpContinuousNodeArray: function fixUpContinuousNodeArray(continuousNodeArray, parentNode) {
            // Before acting on a set of nodes that were previously outputted by a template function, we have to reconcile
            // them against what is in the DOM right now. It may be that some of the nodes have already been removed, or that
            // new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
            // leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
            // So, this function translates the old "map" output array into its best guess of the set of current DOM nodes.
            //
            // Rules:
            //   [A] Any leading nodes that have been removed should be ignored
            //       These most likely correspond to memoization nodes that were already removed during binding
            //       See https://github.com/SteveSanderson/knockout/pull/440
            //   [B] We want to output a continuous series of nodes. So, ignore any nodes that have already been removed,
            //       and include any nodes that have been inserted among the previous collection
            if (continuousNodeArray.length) {
              // The parent node can be a virtual element; so get the real parent node
              parentNode = parentNode.nodeType === 8 && parentNode.parentNode || parentNode; // Rule [A]

              while (continuousNodeArray.length && continuousNodeArray[0].parentNode !== parentNode) {
                continuousNodeArray.splice(0, 1);
              } // Rule [B]


              if (continuousNodeArray.length > 1) {
                var current = continuousNodeArray[0],
                    last = continuousNodeArray[continuousNodeArray.length - 1]; // Replace with the actual new continuous node set

                continuousNodeArray.length = 0;

                while (current !== last) {
                  continuousNodeArray.push(current);
                  current = current.nextSibling;
                  if (!current) // Won't happen, except if the developer has manually removed some DOM elements (then we're in an undefined scenario)
                    return;
                }

                continuousNodeArray.push(last);
              }
            }

            return continuousNodeArray;
          },
          setOptionNodeSelectionState: function setOptionNodeSelectionState(optionNode, isSelected) {
            // IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
            if (ieVersion < 7) optionNode.setAttribute("selected", isSelected);else optionNode.selected = isSelected;
          },
          stringTrim: function stringTrim(string) {
            return string === null || string === undefined ? '' : string.trim ? string.trim() : string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
          },
          stringTokenize: function stringTokenize(string, delimiter) {
            var result = [];
            var tokens = (string || "").split(delimiter);

            for (var i = 0, j = tokens.length; i < j; i++) {
              var trimmed = ko.utils.stringTrim(tokens[i]);
              if (trimmed !== "") result.push(trimmed);
            }

            return result;
          },
          stringStartsWith: function stringStartsWith(string, startsWith) {
            string = string || "";
            if (startsWith.length > string.length) return false;
            return string.substring(0, startsWith.length) === startsWith;
          },
          domNodeIsContainedBy: function domNodeIsContainedBy(node, containedByNode) {
            if (node === containedByNode) return true;
            if (node.nodeType === 11) return false; // Fixes issue #1162 - can't use node.contains for document fragments on IE8

            if (containedByNode.contains) return containedByNode.contains(node.nodeType === 3 ? node.parentNode : node);
            if (containedByNode.compareDocumentPosition) return (containedByNode.compareDocumentPosition(node) & 16) == 16;

            while (node && node != containedByNode) {
              node = node.parentNode;
            }

            return !!node;
          },
          domNodeIsAttachedToDocument: function domNodeIsAttachedToDocument(node) {
            return ko.utils.domNodeIsContainedBy(node, node.ownerDocument.documentElement);
          },
          anyDomNodeIsAttachedToDocument: function anyDomNodeIsAttachedToDocument(nodes) {
            return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
          },
          tagNameLower: function tagNameLower(element) {
            // For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
            // Possible future optimization: If we know it's an element from an XHTML document (not HTML),
            // we don't need to do the .toLowerCase() as it will always be lower case anyway.
            return element && element.tagName && element.tagName.toLowerCase();
          },
          registerEventHandler: function registerEventHandler(element, eventType, handler) {
            var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];

            if (!mustUseAttachEvent && typeof jQuery != "undefined") {
              if (isClickOnCheckableElement(element, eventType)) {
                // For click events on checkboxes, jQuery interferes with the event handling in an awkward way:
                // it toggles the element checked state *after* the click event handlers run, whereas native
                // click events toggle the checked state *before* the event handler.
                // Fix this by intecepting the handler and applying the correct checkedness before it runs.
                var originalHandler = handler;

                handler = function handler(event, eventData) {
                  var jQuerySuppliedCheckedState = this.checked;
                  if (eventData) this.checked = eventData.checkedStateBeforeEvent !== true;
                  originalHandler.call(this, event);
                  this.checked = jQuerySuppliedCheckedState; // Restore the state jQuery applied
                };
              }

              jQuery(element)['bind'](eventType, handler);
            } else if (!mustUseAttachEvent && typeof element.addEventListener == "function") element.addEventListener(eventType, handler, false);else if (typeof element.attachEvent != "undefined") {
              var attachEventHandler = function attachEventHandler(event) {
                handler.call(element, event);
              },
                  attachEventName = "on" + eventType;

              element.attachEvent(attachEventName, attachEventHandler); // IE does not dispose attachEvent handlers automatically (unlike with addEventListener)
              // so to avoid leaks, we have to remove them manually. See bug #856

              ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                element.detachEvent(attachEventName, attachEventHandler);
              });
            } else throw new Error("Browser doesn't support addEventListener or attachEvent");
          },
          triggerEvent: function triggerEvent(element, eventType) {
            if (!(element && element.nodeType)) throw new Error("element must be a DOM node when calling triggerEvent");

            if (typeof jQuery != "undefined") {
              var eventData = [];

              if (isClickOnCheckableElement(element, eventType)) {
                // Work around the jQuery "click events on checkboxes" issue described above by storing the original checked state before triggering the handler
                eventData.push({
                  checkedStateBeforeEvent: element.checked
                });
              }

              jQuery(element)['trigger'](eventType, eventData);
            } else if (typeof document.createEvent == "function") {
              if (typeof element.dispatchEvent == "function") {
                var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                var event = document.createEvent(eventCategory);
                event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                element.dispatchEvent(event);
              } else throw new Error("The supplied element doesn't support dispatchEvent");
            } else if (typeof element.fireEvent != "undefined") {
              // Unlike other browsers, IE doesn't change the checked state of checkboxes/radiobuttons when you trigger their "click" event
              // so to make it consistent, we'll do it manually here
              if (isClickOnCheckableElement(element, eventType)) element.checked = element.checked !== true;
              element.fireEvent("on" + eventType);
            } else throw new Error("Browser doesn't support triggering events");
          },
          unwrapObservable: function unwrapObservable(value) {
            return ko.isObservable(value) ? value() : value;
          },
          peekObservable: function peekObservable(value) {
            return ko.isObservable(value) ? value.peek() : value;
          },
          toggleDomNodeCssClass: function toggleDomNodeCssClass(node, classNames, shouldHaveClass) {
            if (classNames) {
              var cssClassNameRegex = /\S+/g,
                  currentClassNames = node.className.match(cssClassNameRegex) || [];
              ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function (className) {
                ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
              });
              node.className = currentClassNames.join(" ");
            }
          },
          setTextContent: function setTextContent(element, textContent) {
            var value = ko.utils.unwrapObservable(textContent);
            if (value === null || value === undefined) value = ""; // We need there to be exactly one child: a text node.
            // If there are no children, more than one, or if it's not a text node,
            // we'll clear everything and create a single text node.

            var innerTextNode = ko.virtualElements.firstChild(element);

            if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
              ko.virtualElements.setDomNodeChildren(element, [document.createTextNode(value)]);
            } else {
              innerTextNode.data = value;
            }

            ko.utils.forceRefresh(element);
          },
          setElementName: function setElementName(element, name) {
            element.name = name; // Workaround IE 6/7 issue
            // - https://github.com/SteveSanderson/knockout/issues/197
            // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/

            if (ieVersion <= 7) {
              try {
                element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
              } catch (e) {} // For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"

            }
          },
          forceRefresh: function forceRefresh(node) {
            // Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
            if (ieVersion >= 9) {
              // For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
              var elem = node.nodeType == 1 ? node : node.parentNode;
              if (elem.style) elem.style.zoom = elem.style.zoom;
            }
          },
          ensureSelectElementIsRenderedCorrectly: function ensureSelectElementIsRenderedCorrectly(selectElement) {
            // Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
            // (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
            // Also fixes IE7 and IE8 bug that causes selects to be zero width if enclosed by 'if' or 'with'. (See issue #839)
            if (ieVersion) {
              var originalWidth = selectElement.style.width;
              selectElement.style.width = 0;
              selectElement.style.width = originalWidth;
            }
          },
          range: function range(min, max) {
            min = ko.utils.unwrapObservable(min);
            max = ko.utils.unwrapObservable(max);
            var result = [];

            for (var i = min; i <= max; i++) {
              result.push(i);
            }

            return result;
          },
          makeArray: function makeArray(arrayLikeObject) {
            var result = [];

            for (var i = 0, j = arrayLikeObject.length; i < j; i++) {
              result.push(arrayLikeObject[i]);
            }

            ;
            return result;
          },
          isIe6: isIe6,
          isIe7: isIe7,
          ieVersion: ieVersion,
          getFormFields: function getFormFields(form, fieldName) {
            var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
            var isMatchingField = typeof fieldName == 'string' ? function (field) {
              return field.name === fieldName;
            } : function (field) {
              return fieldName.test(field.name);
            }; // Treat fieldName as regex or object containing predicate

            var matches = [];

            for (var i = fields.length - 1; i >= 0; i--) {
              if (isMatchingField(fields[i])) matches.push(fields[i]);
            }

            ;
            return matches;
          },
          parseJson: function parseJson(jsonString) {
            if (typeof jsonString == "string") {
              jsonString = ko.utils.stringTrim(jsonString);

              if (jsonString) {
                if (JSON && JSON.parse) // Use native parsing where available
                  return JSON.parse(jsonString);
                return new Function("return " + jsonString)(); // Fallback on less safe parsing for older browsers
              }
            }

            return null;
          },
          stringifyJson: function stringifyJson(data, replacer, space) {
            // replacer and space are optional
            if (!JSON || !JSON.stringify) throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
          },
          postJson: function postJson(urlOrForm, data, options) {
            options = options || {};
            var params = options['params'] || {};
            var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
            var url = urlOrForm; // If we were given a form, use its 'action' URL and pick out any requested field values

            if (_typeof(urlOrForm) == 'object' && ko.utils.tagNameLower(urlOrForm) === "form") {
              var originalForm = urlOrForm;
              url = originalForm.action;

              for (var i = includeFields.length - 1; i >= 0; i--) {
                var fields = ko.utils.getFormFields(originalForm, includeFields[i]);

                for (var j = fields.length - 1; j >= 0; j--) {
                  params[fields[j].name] = fields[j].value;
                }
              }
            }

            data = ko.utils.unwrapObservable(data);
            var form = document.createElement("form");
            form.style.display = "none";
            form.action = url;
            form.method = "post";

            for (var key in data) {
              // Since 'data' this is a model object, we include all properties including those inherited from its prototype
              var input = document.createElement("input");
              input.name = key;
              input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
              form.appendChild(input);
            }

            objectForEach(params, function (key, value) {
              var input = document.createElement("input");
              input.name = key;
              input.value = value;
              form.appendChild(input);
            });
            document.body.appendChild(form);
            options['submitter'] ? options['submitter'](form) : form.submit();
            setTimeout(function () {
              form.parentNode.removeChild(form);
            }, 0);
          }
        };
      }();

      ko.exportSymbol('utils', ko.utils);
      ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
      ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
      ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
      ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
      ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
      ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
      ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
      ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
      ko.exportSymbol('utils.extend', ko.utils.extend);
      ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
      ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
      ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
      ko.exportSymbol('utils.postJson', ko.utils.postJson);
      ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
      ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
      ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
      ko.exportSymbol('utils.range', ko.utils.range);
      ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
      ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
      ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
      ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
      ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
      ko.exportSymbol('unwrap', ko.utils.unwrapObservable); // Convenient shorthand, because this is used so commonly

      if (!Function.prototype['bind']) {
        // Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
        // In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
        Function.prototype['bind'] = function (object) {
          var originalFunction = this,
              args = Array.prototype.slice.call(arguments),
              object = args.shift();
          return function () {
            return originalFunction.apply(object, args.concat(Array.prototype.slice.call(arguments)));
          };
        };
      }

      ko.utils.domData = new function () {
        var uniqueId = 0;
        var dataStoreKeyExpandoPropertyName = "__ko__" + new Date().getTime();
        var dataStore = {};

        function getAll(node, createIfNotFound) {
          var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
          var hasExistingDataStore = dataStoreKey && dataStoreKey !== "null" && dataStore[dataStoreKey];

          if (!hasExistingDataStore) {
            if (!createIfNotFound) return undefined;
            dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
            dataStore[dataStoreKey] = {};
          }

          return dataStore[dataStoreKey];
        }

        return {
          get: function get(node, key) {
            var allDataForNode = getAll(node, false);
            return allDataForNode === undefined ? undefined : allDataForNode[key];
          },
          set: function set(node, key, value) {
            if (value === undefined) {
              // Make sure we don't actually create a new domData key if we are actually deleting a value
              if (getAll(node, false) === undefined) return;
            }

            var allDataForNode = getAll(node, true);
            allDataForNode[key] = value;
          },
          clear: function clear(node) {
            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];

            if (dataStoreKey) {
              delete dataStore[dataStoreKey];
              node[dataStoreKeyExpandoPropertyName] = null;
              return true; // Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
            }

            return false;
          },
          nextKey: function nextKey() {
            return uniqueId++ + dataStoreKeyExpandoPropertyName;
          }
        };
      }();
      ko.exportSymbol('utils.domData', ko.utils.domData);
      ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear); // Exporting only so specs can clear up after themselves fully

      ko.utils.domNodeDisposal = new function () {
        var domDataKey = ko.utils.domData.nextKey();
        var cleanableNodeTypes = {
          1: true,
          8: true,
          9: true
        }; // Element, Comment, Document

        var cleanableNodeTypesWithDescendants = {
          1: true,
          9: true
        }; // Element, Document

        function getDisposeCallbacksCollection(node, createIfNotFound) {
          var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);

          if (allDisposeCallbacks === undefined && createIfNotFound) {
            allDisposeCallbacks = [];
            ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
          }

          return allDisposeCallbacks;
        }

        function destroyCallbacksCollection(node) {
          ko.utils.domData.set(node, domDataKey, undefined);
        }

        function cleanSingleNode(node) {
          // Run all the dispose callbacks
          var callbacks = getDisposeCallbacksCollection(node, false);

          if (callbacks) {
            callbacks = callbacks.slice(0); // Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)

            for (var i = 0; i < callbacks.length; i++) {
              callbacks[i](node);
            }
          } // Also erase the DOM data


          ko.utils.domData.clear(node); // Special support for jQuery here because it's so commonly used.
          // Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
          // so notify it to tear down any resources associated with the node & descendants here.

          if (typeof jQuery == "function" && typeof jQuery['cleanData'] == "function") jQuery['cleanData']([node]); // Also clear any immediate-child comment nodes, as these wouldn't have been found by
          // node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)

          if (cleanableNodeTypesWithDescendants[node.nodeType]) cleanImmediateCommentTypeChildren(node);
        }

        function cleanImmediateCommentTypeChildren(nodeWithChildren) {
          var child,
              nextChild = nodeWithChildren.firstChild;

          while (child = nextChild) {
            nextChild = child.nextSibling;
            if (child.nodeType === 8) cleanSingleNode(child);
          }
        }

        return {
          addDisposeCallback: function addDisposeCallback(node, callback) {
            if (typeof callback != "function") throw new Error("Callback must be a function");
            getDisposeCallbacksCollection(node, true).push(callback);
          },
          removeDisposeCallback: function removeDisposeCallback(node, callback) {
            var callbacksCollection = getDisposeCallbacksCollection(node, false);

            if (callbacksCollection) {
              ko.utils.arrayRemoveItem(callbacksCollection, callback);
              if (callbacksCollection.length == 0) destroyCallbacksCollection(node);
            }
          },
          cleanNode: function cleanNode(node) {
            // First clean this node, where applicable
            if (cleanableNodeTypes[node.nodeType]) {
              cleanSingleNode(node); // ... then its descendants, where applicable

              if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                // Clone the descendants list in case it changes during iteration
                var descendants = [];
                ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));

                for (var i = 0, j = descendants.length; i < j; i++) {
                  cleanSingleNode(descendants[i]);
                }
              }
            }

            return node;
          },
          removeNode: function removeNode(node) {
            ko.cleanNode(node);
            if (node.parentNode) node.parentNode.removeChild(node);
          }
        };
      }();
      ko.cleanNode = ko.utils.domNodeDisposal.cleanNode; // Shorthand name for convenience

      ko.removeNode = ko.utils.domNodeDisposal.removeNode; // Shorthand name for convenience

      ko.exportSymbol('cleanNode', ko.cleanNode);
      ko.exportSymbol('removeNode', ko.removeNode);
      ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
      ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
      ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);

      (function () {
        var leadingCommentRegex = /^(\s*)<!--(.*?)-->/;

        function simpleHtmlParse(html) {
          // Based on jQuery's "clean" function, but only accounting for table-related elements.
          // If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly
          // Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
          // a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
          // This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
          // (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.
          // Trim whitespace, otherwise indexOf won't work as expected
          var tags = ko.utils.stringTrim(html).toLowerCase(),
              div = document.createElement("div"); // Finds the first match from the left column, and returns the corresponding "wrap" data from the right column

          var wrap = tags.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !tags.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!tags.indexOf("<td") || !tags.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] ||
          /* anything else */
          [0, "", ""]; // Go to html and back, then peel off extra wrappers
          // Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.

          var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";

          if (typeof window['innerShiv'] == "function") {
            div.appendChild(window['innerShiv'](markup));
          } else {
            div.innerHTML = markup;
          } // Move to the right depth


          while (wrap[0]--) {
            div = div.lastChild;
          }

          return ko.utils.makeArray(div.lastChild.childNodes);
        }

        function jQueryHtmlParse(html) {
          // jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
          if (jQuery['parseHTML']) {
            return jQuery['parseHTML'](html) || []; // Ensure we always return an array and never null
          } else {
            // For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
            var elems = jQuery['clean']([html]); // As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
            // Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
            // Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.

            if (elems && elems[0]) {
              // Find the top-most parent element that's a direct child of a document fragment
              var elem = elems[0];

              while (elem.parentNode && elem.parentNode.nodeType !== 11
              /* i.e., DocumentFragment */
              ) {
                elem = elem.parentNode;
              } // ... then detach it


              if (elem.parentNode) elem.parentNode.removeChild(elem);
            }

            return elems;
          }
        }

        ko.utils.parseHtmlFragment = function (html) {
          return typeof jQuery != 'undefined' ? jQueryHtmlParse(html) // As below, benefit from jQuery's optimisations where possible
          : simpleHtmlParse(html); // ... otherwise, this simple logic will do in most common cases.
        };

        ko.utils.setHtml = function (node, html) {
          ko.utils.emptyDomNode(node); // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it

          html = ko.utils.unwrapObservable(html);

          if (html !== null && html !== undefined) {
            if (typeof html != 'string') html = html.toString(); // jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
            // for example <tr> elements which are not normally allowed to exist on their own.
            // If you've referenced jQuery we'll use that rather than duplicating its code.

            if (typeof jQuery != 'undefined') {
              jQuery(node)['html'](html);
            } else {
              // ... otherwise, use KO's own parsing logic.
              var parsedNodes = ko.utils.parseHtmlFragment(html);

              for (var i = 0; i < parsedNodes.length; i++) {
                node.appendChild(parsedNodes[i]);
              }
            }
          }
        };
      })();

      ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
      ko.exportSymbol('utils.setHtml', ko.utils.setHtml);

      ko.memoization = function () {
        var memos = {};

        function randomMax8HexChars() {
          return ((1 + Math.random()) * 0x100000000 | 0).toString(16).substring(1);
        }

        function generateRandomId() {
          return randomMax8HexChars() + randomMax8HexChars();
        }

        function findMemoNodes(rootNode, appendToArray) {
          if (!rootNode) return;

          if (rootNode.nodeType == 8) {
            var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
            if (memoId != null) appendToArray.push({
              domNode: rootNode,
              memoId: memoId
            });
          } else if (rootNode.nodeType == 1) {
            for (var i = 0, childNodes = rootNode.childNodes, j = childNodes.length; i < j; i++) {
              findMemoNodes(childNodes[i], appendToArray);
            }
          }
        }

        return {
          memoize: function memoize(callback) {
            if (typeof callback != "function") throw new Error("You can only pass a function to ko.memoization.memoize()");
            var memoId = generateRandomId();
            memos[memoId] = callback;
            return "<!--[ko_memo:" + memoId + "]-->";
          },
          unmemoize: function unmemoize(memoId, callbackParams) {
            var callback = memos[memoId];
            if (callback === undefined) throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");

            try {
              callback.apply(null, callbackParams || []);
              return true;
            } finally {
              delete memos[memoId];
            }
          },
          unmemoizeDomNodeAndDescendants: function unmemoizeDomNodeAndDescendants(domNode, extraCallbackParamsArray) {
            var memos = [];
            findMemoNodes(domNode, memos);

            for (var i = 0, j = memos.length; i < j; i++) {
              var node = memos[i].domNode;
              var combinedParams = [node];
              if (extraCallbackParamsArray) ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
              ko.memoization.unmemoize(memos[i].memoId, combinedParams);
              node.nodeValue = ""; // Neuter this node so we don't try to unmemoize it again

              if (node.parentNode) node.parentNode.removeChild(node); // If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
            }
          },
          parseMemoText: function parseMemoText(memoText) {
            var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
            return match ? match[1] : null;
          }
        };
      }();

      ko.exportSymbol('memoization', ko.memoization);
      ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
      ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
      ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
      ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
      ko.extenders = {
        'throttle': function throttle(target, timeout) {
          // Throttling means two things:
          // (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
          //     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
          target['throttleEvaluation'] = timeout; // (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
          //     so the target cannot change value synchronously or faster than a certain rate

          var writeTimeoutInstance = null;
          return ko.dependentObservable({
            'read': target,
            'write': function write(value) {
              clearTimeout(writeTimeoutInstance);
              writeTimeoutInstance = setTimeout(function () {
                target(value);
              }, timeout);
            }
          });
        },
        'notify': function notify(target, notifyWhen) {
          target["equalityComparer"] = notifyWhen == "always" ? null : // null equalityComparer means to always notify
          valuesArePrimitiveAndEqual;
        }
      };
      var primitiveTypes = {
        'undefined': 1,
        'boolean': 1,
        'number': 1,
        'string': 1
      };

      function valuesArePrimitiveAndEqual(a, b) {
        var oldValueIsPrimitive = a === null || _typeof(a) in primitiveTypes;
        return oldValueIsPrimitive ? a === b : false;
      }

      function applyExtenders(requestedExtenders) {
        var target = this;

        if (requestedExtenders) {
          ko.utils.objectForEach(requestedExtenders, function (key, value) {
            var extenderHandler = ko.extenders[key];

            if (typeof extenderHandler == 'function') {
              target = extenderHandler(target, value) || target;
            }
          });
        }

        return target;
      }

      ko.exportSymbol('extenders', ko.extenders);

      ko.subscription = function (target, callback, disposeCallback) {
        this.target = target;
        this.callback = callback;
        this.disposeCallback = disposeCallback;
        ko.exportProperty(this, 'dispose', this.dispose);
      };

      ko.subscription.prototype.dispose = function () {
        this.isDisposed = true;
        this.disposeCallback();
      };

      ko.subscribable = function () {
        this._subscriptions = {};
        ko.utils.extend(this, ko.subscribable['fn']);
        ko.exportProperty(this, 'subscribe', this.subscribe);
        ko.exportProperty(this, 'extend', this.extend);
        ko.exportProperty(this, 'getSubscriptionsCount', this.getSubscriptionsCount);
      };

      var defaultEvent = "change";
      ko.subscribable['fn'] = {
        subscribe: function subscribe(callback, callbackTarget, event) {
          event = event || defaultEvent;
          var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;
          var subscription = new ko.subscription(this, boundCallback, function () {
            ko.utils.arrayRemoveItem(this._subscriptions[event], subscription);
          }.bind(this));
          if (!this._subscriptions[event]) this._subscriptions[event] = [];

          this._subscriptions[event].push(subscription);

          return subscription;
        },
        "notifySubscribers": function notifySubscribers(valueToNotify, event) {
          event = event || defaultEvent;

          if (this.hasSubscriptionsForEvent(event)) {
            try {
              ko.dependencyDetection.begin();

              for (var a = this._subscriptions[event].slice(0), i = 0, subscription; subscription = a[i]; ++i) {
                // In case a subscription was disposed during the arrayForEach cycle, check
                // for isDisposed on each subscription before invoking its callback
                if (subscription && subscription.isDisposed !== true) subscription.callback(valueToNotify);
              }
            } finally {
              ko.dependencyDetection.end();
            }
          }
        },
        hasSubscriptionsForEvent: function hasSubscriptionsForEvent(event) {
          return this._subscriptions[event] && this._subscriptions[event].length;
        },
        getSubscriptionsCount: function getSubscriptionsCount() {
          var total = 0;
          ko.utils.objectForEach(this._subscriptions, function (eventName, subscriptions) {
            total += subscriptions.length;
          });
          return total;
        },
        extend: applyExtenders
      };

      ko.isSubscribable = function (instance) {
        return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
      };

      ko.exportSymbol('subscribable', ko.subscribable);
      ko.exportSymbol('isSubscribable', ko.isSubscribable);

      ko.dependencyDetection = function () {
        var _frames = [];
        return {
          begin: function begin(callback) {
            _frames.push(callback && {
              callback: callback,
              distinctDependencies: []
            });
          },
          end: function end() {
            _frames.pop();
          },
          registerDependency: function registerDependency(subscribable) {
            if (!ko.isSubscribable(subscribable)) throw new Error("Only subscribable things can act as dependencies");

            if (_frames.length > 0) {
              var topFrame = _frames[_frames.length - 1];
              if (!topFrame || ko.utils.arrayIndexOf(topFrame.distinctDependencies, subscribable) >= 0) return;
              topFrame.distinctDependencies.push(subscribable);
              topFrame.callback(subscribable);
            }
          },
          ignore: function ignore(callback, callbackTarget, callbackArgs) {
            try {
              _frames.push(null);

              return callback.apply(callbackTarget, callbackArgs || []);
            } finally {
              _frames.pop();
            }
          }
        };
      }();

      ko.observable = function (initialValue) {
        var _latestValue = initialValue;

        function observable() {
          if (arguments.length > 0) {
            // Write
            // Ignore writes if the value hasn't changed
            if (!observable['equalityComparer'] || !observable['equalityComparer'](_latestValue, arguments[0])) {
              observable.valueWillMutate();
              _latestValue = arguments[0];
              if (DEBUG) observable._latestValue = _latestValue;
              observable.valueHasMutated();
            }

            return this; // Permits chained assignments
          } else {
            // Read
            ko.dependencyDetection.registerDependency(observable); // The caller only needs to be notified of changes if they did a "read" operation

            return _latestValue;
          }
        }

        if (DEBUG) observable._latestValue = _latestValue;
        ko.subscribable.call(observable);

        observable.peek = function () {
          return _latestValue;
        };

        observable.valueHasMutated = function () {
          observable["notifySubscribers"](_latestValue);
        };

        observable.valueWillMutate = function () {
          observable["notifySubscribers"](_latestValue, "beforeChange");
        };

        ko.utils.extend(observable, ko.observable['fn']);
        ko.exportProperty(observable, 'peek', observable.peek);
        ko.exportProperty(observable, "valueHasMutated", observable.valueHasMutated);
        ko.exportProperty(observable, "valueWillMutate", observable.valueWillMutate);
        return observable;
      };

      ko.observable['fn'] = {
        "equalityComparer": valuesArePrimitiveAndEqual
      };
      var protoProperty = ko.observable.protoProperty = "__ko_proto__";
      ko.observable['fn'][protoProperty] = ko.observable;

      ko.hasPrototype = function (instance, prototype) {
        if (instance === null || instance === undefined || instance[protoProperty] === undefined) return false;
        if (instance[protoProperty] === prototype) return true;
        return ko.hasPrototype(instance[protoProperty], prototype); // Walk the prototype chain
      };

      ko.isObservable = function (instance) {
        return ko.hasPrototype(instance, ko.observable);
      };

      ko.isWriteableObservable = function (instance) {
        // Observable
        if (typeof instance == "function" && instance[protoProperty] === ko.observable) return true; // Writeable dependent observable

        if (typeof instance == "function" && instance[protoProperty] === ko.dependentObservable && instance.hasWriteFunction) return true; // Anything else

        return false;
      };

      ko.exportSymbol('observable', ko.observable);
      ko.exportSymbol('isObservable', ko.isObservable);
      ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);

      ko.observableArray = function (initialValues) {
        initialValues = initialValues || [];
        if (_typeof(initialValues) != 'object' || !('length' in initialValues)) throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
        var result = ko.observable(initialValues);
        ko.utils.extend(result, ko.observableArray['fn']);
        return result.extend({
          'trackArrayChanges': true
        });
      };

      ko.observableArray['fn'] = {
        'remove': function remove(valueOrPredicate) {
          var underlyingArray = this.peek();
          var removedValues = [];
          var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) {
            return value === valueOrPredicate;
          };

          for (var i = 0; i < underlyingArray.length; i++) {
            var value = underlyingArray[i];

            if (predicate(value)) {
              if (removedValues.length === 0) {
                this.valueWillMutate();
              }

              removedValues.push(value);
              underlyingArray.splice(i, 1);
              i--;
            }
          }

          if (removedValues.length) {
            this.valueHasMutated();
          }

          return removedValues;
        },
        'removeAll': function removeAll(arrayOfValues) {
          // If you passed zero args, we remove everything
          if (arrayOfValues === undefined) {
            var underlyingArray = this.peek();
            var allValues = underlyingArray.slice(0);
            this.valueWillMutate();
            underlyingArray.splice(0, underlyingArray.length);
            this.valueHasMutated();
            return allValues;
          } // If you passed an arg, we interpret it as an array of entries to remove


          if (!arrayOfValues) return [];
          return this['remove'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
          });
        },
        'destroy': function destroy(valueOrPredicate) {
          var underlyingArray = this.peek();
          var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) {
            return value === valueOrPredicate;
          };
          this.valueWillMutate();

          for (var i = underlyingArray.length - 1; i >= 0; i--) {
            var value = underlyingArray[i];
            if (predicate(value)) underlyingArray[i]["_destroy"] = true;
          }

          this.valueHasMutated();
        },
        'destroyAll': function destroyAll(arrayOfValues) {
          // If you passed zero args, we destroy everything
          if (arrayOfValues === undefined) return this['destroy'](function () {
            return true;
          }); // If you passed an arg, we interpret it as an array of entries to destroy

          if (!arrayOfValues) return [];
          return this['destroy'](function (value) {
            return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
          });
        },
        'indexOf': function indexOf(item) {
          var underlyingArray = this();
          return ko.utils.arrayIndexOf(underlyingArray, item);
        },
        'replace': function replace(oldItem, newItem) {
          var index = this['indexOf'](oldItem);

          if (index >= 0) {
            this.valueWillMutate();
            this.peek()[index] = newItem;
            this.valueHasMutated();
          }
        }
      }; // Populate ko.observableArray.fn with read/write functions from native arrays
      // Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
      // because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale

      ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
        ko.observableArray['fn'][methodName] = function () {
          // Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
          // (for consistency with mutating regular observables)
          var underlyingArray = this.peek();
          this.valueWillMutate();
          this.cacheDiffForKnownOperation(underlyingArray, methodName, arguments);
          var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
          this.valueHasMutated();
          return methodCallResult;
        };
      }); // Populate ko.observableArray.fn with read-only functions from native arrays

      ko.utils.arrayForEach(["slice"], function (methodName) {
        ko.observableArray['fn'][methodName] = function () {
          var underlyingArray = this();
          return underlyingArray[methodName].apply(underlyingArray, arguments);
        };
      });
      ko.exportSymbol('observableArray', ko.observableArray);
      var arrayChangeEventName = 'arrayChange';

      ko.extenders['trackArrayChanges'] = function (target) {
        // Only modify the target observable once
        if (target.cacheDiffForKnownOperation) {
          return;
        }

        var trackingChanges = false,
            cachedDiff = null,
            pendingNotifications = 0,
            underlyingSubscribeFunction = target.subscribe; // Intercept "subscribe" calls, and for array change events, ensure change tracking is enabled

        target.subscribe = target['subscribe'] = function (callback, callbackTarget, event) {
          if (event === arrayChangeEventName) {
            trackChanges();
          }

          return underlyingSubscribeFunction.apply(this, arguments);
        };

        function trackChanges() {
          // Calling 'trackChanges' multiple times is the same as calling it once
          if (trackingChanges) {
            return;
          }

          trackingChanges = true; // Intercept "notifySubscribers" to track how many times it was called.

          var underlyingNotifySubscribersFunction = target['notifySubscribers'];

          target['notifySubscribers'] = function (valueToNotify, event) {
            if (!event || event === defaultEvent) {
              ++pendingNotifications;
            }

            return underlyingNotifySubscribersFunction.apply(this, arguments);
          }; // Each time the array changes value, capture a clone so that on the next
          // change it's possible to produce a diff


          var previousContents = [].concat(target.peek() || []);
          cachedDiff = null;
          target.subscribe(function (currentContents) {
            // Make a copy of the current contents and ensure it's an array
            currentContents = [].concat(currentContents || []); // Compute the diff and issue notifications, but only if someone is listening

            if (target.hasSubscriptionsForEvent(arrayChangeEventName)) {
              var changes = getChanges(previousContents, currentContents);

              if (changes.length) {
                target['notifySubscribers'](changes, arrayChangeEventName);
              }
            } // Eliminate references to the old, removed items, so they can be GCed


            previousContents = currentContents;
            cachedDiff = null;
            pendingNotifications = 0;
          });
        }

        function getChanges(previousContents, currentContents) {
          // We try to re-use cached diffs.
          // The only scenario where pendingNotifications > 1 is when using the KO 'deferred updates' plugin,
          // which without this check would not be compatible with arrayChange notifications. Without that
          // plugin, notifications are always issued immediately so we wouldn't be queueing up more than one.
          if (!cachedDiff || pendingNotifications > 1) {
            cachedDiff = ko.utils.compareArrays(previousContents, currentContents, {
              'sparse': true
            });
          }

          return cachedDiff;
        }

        target.cacheDiffForKnownOperation = function (rawArray, operationName, args) {
          // Only run if we're currently tracking changes for this observable array
          // and there aren't any pending deferred notifications.
          if (!trackingChanges || pendingNotifications) {
            return;
          }

          var diff = [],
              arrayLength = rawArray.length,
              argsLength = args.length,
              offset = 0;

          function pushDiff(status, value, index) {
            diff.push({
              'status': status,
              'value': value,
              'index': index
            });
          }

          switch (operationName) {
            case 'push':
              offset = arrayLength;

            case 'unshift':
              for (var index = 0; index < argsLength; index++) {
                pushDiff('added', args[index], offset + index);
              }

              break;

            case 'pop':
              offset = arrayLength - 1;

            case 'shift':
              if (arrayLength) {
                pushDiff('deleted', rawArray[offset], offset);
              }

              break;

            case 'splice':
              // Negative start index means 'from end of array'. After that we clamp to [0...arrayLength].
              // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
              var startIndex = Math.min(Math.max(0, args[0] < 0 ? arrayLength + args[0] : args[0]), arrayLength),
                  endDeleteIndex = argsLength === 1 ? arrayLength : Math.min(startIndex + (args[1] || 0), arrayLength),
                  endAddIndex = startIndex + argsLength - 2,
                  endIndex = Math.max(endDeleteIndex, endAddIndex);

              for (var index = startIndex, argsIndex = 2; index < endIndex; ++index, ++argsIndex) {
                if (index < endDeleteIndex) pushDiff('deleted', rawArray[index], index);
                if (index < endAddIndex) pushDiff('added', args[argsIndex], index);
              }

              break;

            default:
              return;
          }

          cachedDiff = diff;
        };
      };

      ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
        var _latestValue,
            _hasBeenEvaluated = false,
            _isBeingEvaluated = false,
            _suppressDisposalUntilDisposeWhenReturnsFalse = false,
            readFunction = evaluatorFunctionOrOptions;

        if (readFunction && _typeof(readFunction) == "object") {
          // Single-parameter syntax - everything is on this "options" param
          options = readFunction;
          readFunction = options["read"];
        } else {
          // Multi-parameter syntax - construct the options according to the params passed
          options = options || {};
          if (!readFunction) readFunction = options["read"];
        }

        if (typeof readFunction != "function") throw new Error("Pass a function that returns the value of the ko.computed");

        function addSubscriptionToDependency(subscribable) {
          _subscriptionsToDependencies.push(subscribable.subscribe(evaluatePossiblyAsync));
        }

        function disposeAllSubscriptionsToDependencies() {
          ko.utils.arrayForEach(_subscriptionsToDependencies, function (subscription) {
            subscription.dispose();
          });
          _subscriptionsToDependencies = [];
        }

        function evaluatePossiblyAsync() {
          var throttleEvaluationTimeout = dependentObservable['throttleEvaluation'];

          if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
            clearTimeout(evaluationTimeoutInstance);
            evaluationTimeoutInstance = setTimeout(evaluateImmediate, throttleEvaluationTimeout);
          } else evaluateImmediate();
        }

        function evaluateImmediate() {
          if (_isBeingEvaluated) {
            // If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
            // This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
            // certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
            // their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
            return;
          }

          if (disposeWhen && disposeWhen()) {
            // See comment below about _suppressDisposalUntilDisposeWhenReturnsFalse
            if (!_suppressDisposalUntilDisposeWhenReturnsFalse) {
              _dispose();

              _hasBeenEvaluated = true;
              return;
            }
          } else {
            // It just did return false, so we can stop suppressing now
            _suppressDisposalUntilDisposeWhenReturnsFalse = false;
          }

          _isBeingEvaluated = true;

          try {
            // Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
            // Then, during evaluation, we cross off any that are in fact still being used.
            var disposalCandidates = ko.utils.arrayMap(_subscriptionsToDependencies, function (item) {
              return item.target;
            });
            ko.dependencyDetection.begin(function (subscribable) {
              var inOld;
              if ((inOld = ko.utils.arrayIndexOf(disposalCandidates, subscribable)) >= 0) disposalCandidates[inOld] = undefined; // Don't want to dispose this subscription, as it's still being used
              else addSubscriptionToDependency(subscribable); // Brand new subscription - add it
            });
            var newValue = evaluatorFunctionTarget ? readFunction.call(evaluatorFunctionTarget) : readFunction(); // For each subscription no longer being used, remove it from the active subscriptions list and dispose it

            for (var i = disposalCandidates.length - 1; i >= 0; i--) {
              if (disposalCandidates[i]) _subscriptionsToDependencies.splice(i, 1)[0].dispose();
            }

            _hasBeenEvaluated = true;

            if (!dependentObservable['equalityComparer'] || !dependentObservable['equalityComparer'](_latestValue, newValue)) {
              dependentObservable["notifySubscribers"](_latestValue, "beforeChange");
              _latestValue = newValue;
              if (DEBUG) dependentObservable._latestValue = _latestValue;
              dependentObservable["notifySubscribers"](_latestValue);
            }
          } finally {
            ko.dependencyDetection.end();
            _isBeingEvaluated = false;
          }

          if (!_subscriptionsToDependencies.length) _dispose();
        }

        function dependentObservable() {
          if (arguments.length > 0) {
            if (typeof writeFunction === "function") {
              // Writing a value
              writeFunction.apply(evaluatorFunctionTarget, arguments);
            } else {
              throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            }

            return this; // Permits chained assignments
          } else {
            // Reading the value
            if (!_hasBeenEvaluated) evaluateImmediate();
            ko.dependencyDetection.registerDependency(dependentObservable);
            return _latestValue;
          }
        }

        function peek() {
          if (!_hasBeenEvaluated) evaluateImmediate();
          return _latestValue;
        }

        function isActive() {
          return !_hasBeenEvaluated || _subscriptionsToDependencies.length > 0;
        } // By here, "options" is always non-null


        var writeFunction = options["write"],
            disposeWhenNodeIsRemoved = options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
            disposeWhenOption = options["disposeWhen"] || options.disposeWhen,
            disposeWhen = disposeWhenOption,
            _dispose = disposeAllSubscriptionsToDependencies,
            _subscriptionsToDependencies = [],
            evaluationTimeoutInstance = null;
        if (!evaluatorFunctionTarget) evaluatorFunctionTarget = options["owner"];
        dependentObservable.peek = peek;

        dependentObservable.getDependenciesCount = function () {
          return _subscriptionsToDependencies.length;
        };

        dependentObservable.hasWriteFunction = typeof options["write"] === "function";

        dependentObservable.dispose = function () {
          _dispose();
        };

        dependentObservable.isActive = isActive;
        ko.subscribable.call(dependentObservable);
        ko.utils.extend(dependentObservable, ko.dependentObservable['fn']);
        ko.exportProperty(dependentObservable, 'peek', dependentObservable.peek);
        ko.exportProperty(dependentObservable, 'dispose', dependentObservable.dispose);
        ko.exportProperty(dependentObservable, 'isActive', dependentObservable.isActive);
        ko.exportProperty(dependentObservable, 'getDependenciesCount', dependentObservable.getDependenciesCount); // Add a "disposeWhen" callback that, on each evaluation, disposes if the node was removed without using ko.removeNode.

        if (disposeWhenNodeIsRemoved) {
          // Since this computed is associated with a DOM node, and we don't want to dispose the computed
          // until the DOM node is *removed* from the document (as opposed to never having been in the document),
          // we'll prevent disposal until "disposeWhen" first returns false.
          _suppressDisposalUntilDisposeWhenReturnsFalse = true; // Only watch for the node's disposal if the value really is a node. It might not be,
          // e.g., { disposeWhenNodeIsRemoved: true } can be used to opt into the "only dispose
          // after first false result" behaviour even if there's no specific node to watch. This
          // technique is intended for KO's internal use only and shouldn't be documented or used
          // by application code, as it's likely to change in a future version of KO.

          if (disposeWhenNodeIsRemoved.nodeType) {
            disposeWhen = function disposeWhen() {
              return !ko.utils.domNodeIsAttachedToDocument(disposeWhenNodeIsRemoved) || disposeWhenOption && disposeWhenOption();
            };
          }
        } // Evaluate, unless deferEvaluation is true


        if (options['deferEvaluation'] !== true) evaluateImmediate(); // Attach a DOM node disposal callback so that the computed will be proactively disposed as soon as the node is
        // removed using ko.removeNode. But skip if isActive is false (there will never be any dependencies to dispose).

        if (disposeWhenNodeIsRemoved && isActive()) {
          _dispose = function dispose() {
            ko.utils.domNodeDisposal.removeDisposeCallback(disposeWhenNodeIsRemoved, _dispose);
            disposeAllSubscriptionsToDependencies();
          };

          ko.utils.domNodeDisposal.addDisposeCallback(disposeWhenNodeIsRemoved, _dispose);
        }

        return dependentObservable;
      };

      ko.isComputed = function (instance) {
        return ko.hasPrototype(instance, ko.dependentObservable);
      };

      var protoProp = ko.observable.protoProperty; // == "__ko_proto__"

      ko.dependentObservable[protoProp] = ko.observable;
      ko.dependentObservable['fn'] = {
        "equalityComparer": valuesArePrimitiveAndEqual
      };
      ko.dependentObservable['fn'][protoProp] = ko.dependentObservable;
      ko.exportSymbol('dependentObservable', ko.dependentObservable);
      ko.exportSymbol('computed', ko.dependentObservable); // Make "ko.computed" an alias for "ko.dependentObservable"

      ko.exportSymbol('isComputed', ko.isComputed);

      (function () {
        var maxNestedObservableDepth = 10; // Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)

        ko.toJS = function (rootObject) {
          if (arguments.length == 0) throw new Error("When calling ko.toJS, pass the object you want to convert."); // We just unwrap everything at every level in the object graph

          return mapJsObjectGraph(rootObject, function (valueToMap) {
            // Loop because an observable's value might in turn be another observable wrapper
            for (var i = 0; ko.isObservable(valueToMap) && i < maxNestedObservableDepth; i++) {
              valueToMap = valueToMap();
            }

            return valueToMap;
          });
        };

        ko.toJSON = function (rootObject, replacer, space) {
          // replacer and space are optional
          var plainJavaScriptObject = ko.toJS(rootObject);
          return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
        };

        function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
          visitedObjects = visitedObjects || new objectLookup();
          rootObject = mapInputCallback(rootObject);
          var canHaveProperties = _typeof(rootObject) == "object" && rootObject !== null && rootObject !== undefined && !(rootObject instanceof Date) && !(rootObject instanceof String) && !(rootObject instanceof Number) && !(rootObject instanceof Boolean);
          if (!canHaveProperties) return rootObject;
          var outputProperties = rootObject instanceof Array ? [] : {};
          visitedObjects.save(rootObject, outputProperties);
          visitPropertiesOrArrayEntries(rootObject, function (indexer) {
            var propertyValue = mapInputCallback(rootObject[indexer]);

            switch (_typeof(propertyValue)) {
              case "boolean":
              case "number":
              case "string":
              case "function":
                outputProperties[indexer] = propertyValue;
                break;

              case "object":
              case "undefined":
                var previouslyMappedValue = visitedObjects.get(propertyValue);
                outputProperties[indexer] = previouslyMappedValue !== undefined ? previouslyMappedValue : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                break;
            }
          });
          return outputProperties;
        }

        function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
          if (rootObject instanceof Array) {
            for (var i = 0; i < rootObject.length; i++) {
              visitorCallback(i);
            } // For arrays, also respect toJSON property for custom mappings (fixes #278)


            if (typeof rootObject['toJSON'] == 'function') visitorCallback('toJSON');
          } else {
            for (var propertyName in rootObject) {
              visitorCallback(propertyName);
            }
          }
        }

        ;

        function objectLookup() {
          this.keys = [];
          this.values = [];
        }

        ;
        objectLookup.prototype = {
          constructor: objectLookup,
          save: function save(key, value) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            if (existingIndex >= 0) this.values[existingIndex] = value;else {
              this.keys.push(key);
              this.values.push(value);
            }
          },
          get: function get(key) {
            var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
            return existingIndex >= 0 ? this.values[existingIndex] : undefined;
          }
        };
      })();

      ko.exportSymbol('toJS', ko.toJS);
      ko.exportSymbol('toJSON', ko.toJSON);

      (function () {
        var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__'; // Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
        // are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
        // that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.

        ko.selectExtensions = {
          readValue: function readValue(element) {
            switch (ko.utils.tagNameLower(element)) {
              case 'option':
                if (element[hasDomDataExpandoProperty] === true) return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                return ko.utils.ieVersion <= 7 ? element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text : element.value;

              case 'select':
                return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;

              default:
                return element.value;
            }
          },
          writeValue: function writeValue(element, value) {
            switch (ko.utils.tagNameLower(element)) {
              case 'option':
                switch (_typeof(value)) {
                  case "string":
                    ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);

                    if (hasDomDataExpandoProperty in element) {
                      // IE <= 8 throws errors if you delete non-existent properties from a DOM node
                      delete element[hasDomDataExpandoProperty];
                    }

                    element.value = value;
                    break;

                  default:
                    // Store arbitrary object using DomData
                    ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                    element[hasDomDataExpandoProperty] = true; // Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.

                    element.value = typeof value === "number" ? value : "";
                    break;
                }

                break;

              case 'select':
                if (value === "") value = undefined;
                if (value === null || value === undefined) element.selectedIndex = -1;

                for (var i = element.options.length - 1; i >= 0; i--) {
                  if (ko.selectExtensions.readValue(element.options[i]) == value) {
                    element.selectedIndex = i;
                    break;
                  }
                } // for drop-down select, ensure first is selected


                if (!(element.size > 1) && element.selectedIndex === -1) {
                  element.selectedIndex = 0;
                }

                break;

              default:
                if (value === null || value === undefined) value = "";
                element.value = value;
                break;
            }
          }
        };
      })();

      ko.exportSymbol('selectExtensions', ko.selectExtensions);
      ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
      ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);

      ko.expressionRewriting = function () {
        var javaScriptReservedWords = ["true", "false", "null", "undefined"]; // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
        // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
        // This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).

        var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

        function getWriteableValue(expression) {
          if (ko.utils.arrayIndexOf(javaScriptReservedWords, expression) >= 0) return false;
          var match = expression.match(javaScriptAssignmentTarget);
          return match === null ? false : match[1] ? 'Object(' + match[1] + ')' + match[2] : expression;
        } // The following regular expressions will be used to split an object-literal string into tokens
        // These two match strings, either with double quotes or single quotes


        var stringDouble = '"(?:[^"\\\\]|\\\\.)*"',
            stringSingle = "'(?:[^'\\\\]|\\\\.)*'",
            // Matches a regular expression (text enclosed by slashes), but will also match sets of divisions
        // as a regular expression (this is handled by the parsing loop below).
        stringRegexp = '/(?:[^/\\\\]|\\\\.)*/\w*',
            // These characters have special meaning to the parser and must not appear in the middle of a
        // token, except as part of a string.
        specials = ',"\'{}()/:[\\]',
            // Match text (at least two characters) that does not contain any of the above special characters,
        // although some of the special characters are allowed to start it (all but the colon and comma).
        // The text can contain spaces, but leading or trailing spaces are skipped.
        everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']',
            // Match any non-space character not matched already. This will match colons and commas, since they're
        // not matched by "everyThingElse", but will also match any other single character that wasn't already
        // matched (for example: in "a: 1, b: 2", each of the non-space characters will be matched by oneNotSpace).
        oneNotSpace = '[^\\s]',
            // Create the actual regular expression by or-ing the above strings. The order is important.
        bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g'),
            // Match end of previous token to determine whether a slash is a division or regex.
        divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/,
            keywordRegexLookBehind = {
          'in': 1,
          'return': 1,
          'typeof': 1
        };

        function parseObjectLiteral(objectLiteralString) {
          // Trim leading and trailing spaces from the string
          var str = ko.utils.stringTrim(objectLiteralString); // Trim braces '{' surrounding the whole object literal

          if (str.charCodeAt(0) === 123) str = str.slice(1, -1); // Split into tokens

          var result = [],
              toks = str.match(bindingToken),
              key,
              values,
              depth = 0;

          if (toks) {
            // Append a comma so that we don't need a separate code block to deal with the last item
            toks.push(',');

            for (var i = 0, tok; tok = toks[i]; ++i) {
              var c = tok.charCodeAt(0); // A comma signals the end of a key/value pair if depth is zero

              if (c === 44) {
                // ","
                if (depth <= 0) {
                  if (key) result.push(values ? {
                    key: key,
                    value: values.join('')
                  } : {
                    'unknown': key
                  });
                  key = values = depth = 0;
                  continue;
                } // Simply skip the colon that separates the name and value

              } else if (c === 58) {
                // ":"
                if (!values) continue; // A set of slashes is initially matched as a regular expression, but could be division
              } else if (c === 47 && i && tok.length > 1) {
                // "/"
                // Look at the end of the previous token to determine if the slash is actually division
                var match = toks[i - 1].match(divisionLookBehind);

                if (match && !keywordRegexLookBehind[match[0]]) {
                  // The slash is actually a division punctuator; re-parse the remainder of the string (not including the slash)
                  str = str.substr(str.indexOf(tok) + 1);
                  toks = str.match(bindingToken);
                  toks.push(',');
                  i = -1; // Continue with just the slash

                  tok = '/';
                } // Increment depth for parentheses, braces, and brackets so that interior commas are ignored

              } else if (c === 40 || c === 123 || c === 91) {
                // '(', '{', '['
                ++depth;
              } else if (c === 41 || c === 125 || c === 93) {
                // ')', '}', ']'
                --depth; // The key must be a single token; if it's a string, trim the quotes
              } else if (!key && !values) {
                key = c === 34 || c === 39 ?
                /* '"', "'" */
                tok.slice(1, -1) : tok;
                continue;
              }

              if (values) values.push(tok);else values = [tok];
            }
          }

          return result;
        } // Two-way bindings include a write function that allow the handler to update the value even if it's not an observable.


        var twoWayBindings = {};

        function preProcessBindings(bindingsStringOrKeyValueArray, bindingOptions) {
          bindingOptions = bindingOptions || {};

          function processKeyValue(key, val) {
            var writableVal;

            function callPreprocessHook(obj) {
              return obj && obj['preprocess'] ? val = obj['preprocess'](val, key, processKeyValue) : true;
            }

            if (!callPreprocessHook(ko['getBindingHandler'](key))) return;

            if (twoWayBindings[key] && (writableVal = getWriteableValue(val))) {
              // For two-way bindings, provide a write method in case the value
              // isn't a writable observable.
              propertyAccessorResultStrings.push("'" + key + "':function(_z){" + writableVal + "=_z}");
            } // Values are wrapped in a function so that each value can be accessed independently


            if (makeValueAccessors) {
              val = 'function(){return ' + val + ' }';
            }

            resultStrings.push("'" + key + "':" + val);
          }

          var resultStrings = [],
              propertyAccessorResultStrings = [],
              makeValueAccessors = bindingOptions['valueAccessors'],
              keyValueArray = typeof bindingsStringOrKeyValueArray === "string" ? parseObjectLiteral(bindingsStringOrKeyValueArray) : bindingsStringOrKeyValueArray;
          ko.utils.arrayForEach(keyValueArray, function (keyValue) {
            processKeyValue(keyValue.key || keyValue['unknown'], keyValue.value);
          });
          if (propertyAccessorResultStrings.length) processKeyValue('_ko_property_writers', "{" + propertyAccessorResultStrings.join(",") + "}");
          return resultStrings.join(",");
        }

        return {
          bindingRewriteValidators: [],
          twoWayBindings: twoWayBindings,
          parseObjectLiteral: parseObjectLiteral,
          preProcessBindings: preProcessBindings,
          keyValueArrayContainsKey: function keyValueArrayContainsKey(keyValueArray, key) {
            for (var i = 0; i < keyValueArray.length; i++) {
              if (keyValueArray[i]['key'] == key) return true;
            }

            return false;
          },
          // Internal, private KO utility for updating model properties from within bindings
          // property:            If the property being updated is (or might be) an observable, pass it here
          //                      If it turns out to be a writable observable, it will be written to directly
          // allBindings:         An object with a get method to retrieve bindings in the current execution context.
          //                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
          // key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
          // value:               The value to be written
          // checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
          //                      it is !== existing value on that writable observable
          writeValueToProperty: function writeValueToProperty(property, allBindings, key, value, checkIfDifferent) {
            if (!property || !ko.isObservable(property)) {
              var propWriters = allBindings.get('_ko_property_writers');
              if (propWriters && propWriters[key]) propWriters[key](value);
            } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
              property(value);
            }
          }
        };
      }();

      ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
      ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
      ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
      ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings); // Making bindings explicitly declare themselves as "two way" isn't ideal in the long term (it would be better if
      // all bindings could use an official 'property writer' API without needing to declare that they might). However,
      // since this is not, and has never been, a public API (_ko_property_writers was never documented), it's acceptable
      // as an internal implementation detail in the short term.
      // For those developers who rely on _ko_property_writers in their custom bindings, we expose _twoWayBindings as an
      // undocumented feature that makes it relatively easy to upgrade to KO 3.0. However, this is still not an official
      // public API, and we reserve the right to remove it at any time if we create a real public property writers API.

      ko.exportSymbol('expressionRewriting._twoWayBindings', ko.expressionRewriting.twoWayBindings); // For backward compatibility, define the following aliases. (Previously, these function names were misleading because
      // they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)

      ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
      ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);

      (function () {
        // "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
        // may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
        // If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
        // of that virtual hierarchy
        //
        // The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
        // without having to scatter special cases all over the binding and templating code.
        // IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
        // but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
        // So, use node.text where available, and node.nodeValue elsewhere
        var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";
        var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
        var endCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
        var htmlTagsWithOptionallyClosingChildren = {
          'ul': true,
          'ol': true
        };

        function isStartComment(node) {
          return node.nodeType == 8 && startCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
        }

        function isEndComment(node) {
          return node.nodeType == 8 && endCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
        }

        function getVirtualChildren(startComment, allowUnbalanced) {
          var currentNode = startComment;
          var depth = 1;
          var children = [];

          while (currentNode = currentNode.nextSibling) {
            if (isEndComment(currentNode)) {
              depth--;
              if (depth === 0) return children;
            }

            children.push(currentNode);
            if (isStartComment(currentNode)) depth++;
          }

          if (!allowUnbalanced) throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
          return null;
        }

        function getMatchingEndComment(startComment, allowUnbalanced) {
          var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);

          if (allVirtualChildren) {
            if (allVirtualChildren.length > 0) return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
            return startComment.nextSibling;
          } else return null; // Must have no matching end comment, and allowUnbalanced is true

        }

        function getUnbalancedChildTags(node) {
          // e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
          //       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
          var childNode = node.firstChild,
              captureRemaining = null;

          if (childNode) {
            do {
              if (captureRemaining) // We already hit an unbalanced node and are now just scooping up all subsequent nodes
                captureRemaining.push(childNode);else if (isStartComment(childNode)) {
                var matchingEndComment = getMatchingEndComment(childNode,
                /* allowUnbalanced: */
                true);
                if (matchingEndComment) // It's a balanced tag, so skip immediately to the end of this virtual set
                  childNode = matchingEndComment;else captureRemaining = [childNode]; // It's unbalanced, so start capturing from this point
              } else if (isEndComment(childNode)) {
                captureRemaining = [childNode]; // It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
              }
            } while (childNode = childNode.nextSibling);
          }

          return captureRemaining;
        }

        ko.virtualElements = {
          allowedBindings: {},
          childNodes: function childNodes(node) {
            return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
          },
          emptyNode: function emptyNode(node) {
            if (!isStartComment(node)) ko.utils.emptyDomNode(node);else {
              var virtualChildren = ko.virtualElements.childNodes(node);

              for (var i = 0, j = virtualChildren.length; i < j; i++) {
                ko.removeNode(virtualChildren[i]);
              }
            }
          },
          setDomNodeChildren: function setDomNodeChildren(node, childNodes) {
            if (!isStartComment(node)) ko.utils.setDomNodeChildren(node, childNodes);else {
              ko.virtualElements.emptyNode(node);
              var endCommentNode = node.nextSibling; // Must be the next sibling, as we just emptied the children

              for (var i = 0, j = childNodes.length; i < j; i++) {
                endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
              }
            }
          },
          prepend: function prepend(containerNode, nodeToPrepend) {
            if (!isStartComment(containerNode)) {
              if (containerNode.firstChild) containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);else containerNode.appendChild(nodeToPrepend);
            } else {
              // Start comments must always have a parent and at least one following sibling (the end comment)
              containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
            }
          },
          insertAfter: function insertAfter(containerNode, nodeToInsert, insertAfterNode) {
            if (!insertAfterNode) {
              ko.virtualElements.prepend(containerNode, nodeToInsert);
            } else if (!isStartComment(containerNode)) {
              // Insert after insertion point
              if (insertAfterNode.nextSibling) containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);else containerNode.appendChild(nodeToInsert);
            } else {
              // Children of start comments must always have a parent and at least one following sibling (the end comment)
              containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
            }
          },
          firstChild: function firstChild(node) {
            if (!isStartComment(node)) return node.firstChild;
            if (!node.nextSibling || isEndComment(node.nextSibling)) return null;
            return node.nextSibling;
          },
          nextSibling: function nextSibling(node) {
            if (isStartComment(node)) node = getMatchingEndComment(node);
            if (node.nextSibling && isEndComment(node.nextSibling)) return null;
            return node.nextSibling;
          },
          hasBindingValue: isStartComment,
          virtualNodeBindingValue: function virtualNodeBindingValue(node) {
            var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
            return regexMatch ? regexMatch[1] : null;
          },
          normaliseVirtualElementDomStructure: function normaliseVirtualElementDomStructure(elementVerified) {
            // Workaround for https://github.com/SteveSanderson/knockout/issues/155
            // (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
            // that are direct descendants of <ul> into the preceding <li>)
            if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)]) return; // Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
            // must be intended to appear *after* that child, so move them there.

            var childNode = elementVerified.firstChild;

            if (childNode) {
              do {
                if (childNode.nodeType === 1) {
                  var unbalancedTags = getUnbalancedChildTags(childNode);

                  if (unbalancedTags) {
                    // Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
                    var nodeToInsertBefore = childNode.nextSibling;

                    for (var i = 0; i < unbalancedTags.length; i++) {
                      if (nodeToInsertBefore) elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);else elementVerified.appendChild(unbalancedTags[i]);
                    }
                  }
                }
              } while (childNode = childNode.nextSibling);
            }
          }
        };
      })();

      ko.exportSymbol('virtualElements', ko.virtualElements);
      ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
      ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode); //ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified

      ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter); //ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified

      ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
      ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);

      (function () {
        var defaultBindingAttributeName = "data-bind";

        ko.bindingProvider = function () {
          this.bindingCache = {};
        };

        ko.utils.extend(ko.bindingProvider.prototype, {
          'nodeHasBindings': function nodeHasBindings(node) {
            switch (node.nodeType) {
              case 1:
                return node.getAttribute(defaultBindingAttributeName) != null;
              // Element

              case 8:
                return ko.virtualElements.hasBindingValue(node);
              // Comment node

              default:
                return false;
            }
          },
          'getBindings': function getBindings(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext);
            return bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
          },
          'getBindingAccessors': function getBindingAccessors(node, bindingContext) {
            var bindingsString = this['getBindingsString'](node, bindingContext);
            return bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node, {
              'valueAccessors': true
            }) : null;
          },
          // The following function is only used internally by this default provider.
          // It's not part of the interface definition for a general binding provider.
          'getBindingsString': function getBindingsString(node, bindingContext) {
            switch (node.nodeType) {
              case 1:
                return node.getAttribute(defaultBindingAttributeName);
              // Element

              case 8:
                return ko.virtualElements.virtualNodeBindingValue(node);
              // Comment node

              default:
                return null;
            }
          },
          // The following function is only used internally by this default provider.
          // It's not part of the interface definition for a general binding provider.
          'parseBindingsString': function parseBindingsString(bindingsString, bindingContext, node, options) {
            try {
              var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache, options);
              return bindingFunction(bindingContext, node);
            } catch (ex) {
              ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
              throw ex;
            }
          }
        });
        ko.bindingProvider['instance'] = new ko.bindingProvider();

        function createBindingsStringEvaluatorViaCache(bindingsString, cache, options) {
          var cacheKey = bindingsString + (options && options['valueAccessors'] || '');
          return cache[cacheKey] || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString, options));
        }

        function createBindingsStringEvaluator(bindingsString, options) {
          // Build the source for a function that evaluates "expression"
          // For each scope variable, add an extra level of "with" nesting
          // Example result: with(sc1) { with(sc0) { return (expression) } }
          var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString, options),
              functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
          return new Function("$context", "$element", functionBody);
        }
      })();

      ko.exportSymbol('bindingProvider', ko.bindingProvider);

      (function () {
        ko.bindingHandlers = {}; // The following element types will not be recursed into during binding. In the future, we
        // may consider adding <template> to this list, because such elements' contents are always
        // intended to be bound in a different context from where they appear in the document.

        var bindingDoesNotRecurseIntoElementTypes = {
          // Don't want bindings that operate on text nodes to mutate <script> contents,
          // because it's unexpected and a potential XSS issue
          'script': true
        }; // Use an overridable method for retrieving binding handlers so that a plugins may support dynamically created handlers

        ko['getBindingHandler'] = function (bindingKey) {
          return ko.bindingHandlers[bindingKey];
        }; // The ko.bindingContext constructor is only called directly to create the root context. For child
        // contexts, use bindingContext.createChildContext or bindingContext.extend.


        ko.bindingContext = function (dataItemOrAccessor, parentContext, dataItemAlias, extendCallback) {
          // The binding context object includes static properties for the current, parent, and root view models.
          // If a view model is actually stored in an observable, the corresponding binding context object, and
          // any child contexts, must be updated when the view model is changed.
          function updateContext() {
            // Most of the time, the context will directly get a view model object, but if a function is given,
            // we call the function to retrieve the view model. If the function accesses any obsevables (or is
            // itself an observable), the dependency is tracked, and those observables can later cause the binding
            // context to be updated.
            var dataItem = isFunc ? dataItemOrAccessor() : dataItemOrAccessor;

            if (parentContext) {
              // When a "parent" context is given, register a dependency on the parent context. Thus whenever the
              // parent context is updated, this context will also be updated.
              if (parentContext._subscribable) parentContext._subscribable(); // Copy $root and any custom properties from the parent context

              ko.utils.extend(self, parentContext); // Because the above copy overwrites our own properties, we need to reset them.
              // During the first execution, "subscribable" isn't set, so don't bother doing the update then.

              if (subscribable) {
                self._subscribable = subscribable;
              }
            } else {
              self['$parents'] = [];
              self['$root'] = dataItem; // Export 'ko' in the binding context so it will be available in bindings and templates
              // even if 'ko' isn't exported as a global, such as when using an AMD loader.
              // See https://github.com/SteveSanderson/knockout/issues/490

              self['ko'] = ko;
            }

            self['$rawData'] = dataItemOrAccessor;
            self['$data'] = dataItem;
            if (dataItemAlias) self[dataItemAlias] = dataItem; // The extendCallback function is provided when creating a child context or extending a context.
            // It handles the specific actions needed to finish setting up the binding context. Actions in this
            // function could also add dependencies to this binding context.

            if (extendCallback) extendCallback(self, parentContext, dataItem);
            return self['$data'];
          }

          function disposeWhen() {
            return nodes && !ko.utils.anyDomNodeIsAttachedToDocument(nodes);
          }

          var self = this,
              isFunc = typeof dataItemOrAccessor == "function",
              nodes,
              subscribable = ko.dependentObservable(updateContext, null, {
            disposeWhen: disposeWhen,
            disposeWhenNodeIsRemoved: true
          }); // At this point, the binding context has been initialized, and the "subscribable" computed observable is
          // subscribed to any observables that were accessed in the process. If there is nothing to track, the
          // computed will be inactive, and we can safely throw it away. If it's active, the computed is stored in
          // the context object.

          if (subscribable.isActive()) {
            self._subscribable = subscribable; // Always notify because even if the model ($data) hasn't changed, other context properties might have changed

            subscribable['equalityComparer'] = null; // We need to be able to dispose of this computed observable when it's no longer needed. This would be
            // easy if we had a single node to watch, but binding contexts can be used by many different nodes, and
            // we cannot assume that those nodes have any relation to each other. So instead we track any node that
            // the context is attached to, and dispose the computed when all of those nodes have been cleaned.
            // Add properties to *subscribable* instead of *self* because any properties added to *self* may be overwritten on updates

            nodes = [];

            subscribable._addNode = function (node) {
              nodes.push(node);
              ko.utils.domNodeDisposal.addDisposeCallback(node, function (node) {
                ko.utils.arrayRemoveItem(nodes, node);

                if (!nodes.length) {
                  subscribable.dispose();
                  self._subscribable = subscribable = undefined;
                }
              });
            };
          }
        }; // Extend the binding context hierarchy with a new view model object. If the parent context is watching
        // any obsevables, the new child context will automatically get a dependency on the parent context.
        // But this does not mean that the $data value of the child context will also get updated. If the child
        // view model also depends on the parent view model, you must provide a function that returns the correct
        // view model on each update.


        ko.bindingContext.prototype['createChildContext'] = function (dataItemOrAccessor, dataItemAlias, extendCallback) {
          return new ko.bindingContext(dataItemOrAccessor, this, dataItemAlias, function (self, parentContext) {
            // Extend the context hierarchy by setting the appropriate pointers
            self['$parentContext'] = parentContext;
            self['$parent'] = parentContext['$data'];
            self['$parents'] = (parentContext['$parents'] || []).slice(0);
            self['$parents'].unshift(self['$parent']);
            if (extendCallback) extendCallback(self);
          });
        }; // Extend the binding context with new custom properties. This doesn't change the context hierarchy.
        // Similarly to "child" contexts, provide a function here to make sure that the correct values are set
        // when an observable view model is updated.


        ko.bindingContext.prototype['extend'] = function (properties) {
          return new ko.bindingContext(this['$rawData'], this, null, function (self) {
            ko.utils.extend(self, typeof properties == "function" ? properties() : properties);
          });
        }; // Returns the valueAccesor function for a binding value


        function makeValueAccessor(value) {
          return function () {
            return value;
          };
        } // Returns the value of a valueAccessor function


        function evaluateValueAccessor(valueAccessor) {
          return valueAccessor();
        } // Given a function that returns bindings, create and return a new object that contains
        // binding value-accessors functions. Each accessor function calls the original function
        // so that it always gets the latest value and all dependencies are captured. This is used
        // by ko.applyBindingsToNode and getBindingsAndMakeAccessors.


        function makeAccessorsFromFunction(callback) {
          return ko.utils.objectMap(ko.dependencyDetection.ignore(callback), function (value, key) {
            return function () {
              return callback()[key];
            };
          });
        } // Given a bindings function or object, create and return a new object that contains
        // binding value-accessors functions. This is used by ko.applyBindingsToNode.


        function makeBindingAccessors(bindings, context, node) {
          if (typeof bindings === 'function') {
            return makeAccessorsFromFunction(bindings.bind(null, context, node));
          } else {
            return ko.utils.objectMap(bindings, makeValueAccessor);
          }
        } // This function is used if the binding provider doesn't include a getBindingAccessors function.
        // It must be called with 'this' set to the provider instance.


        function getBindingsAndMakeAccessors(node, context) {
          return makeAccessorsFromFunction(this['getBindings'].bind(this, node, context));
        }

        function validateThatBindingIsAllowedForVirtualElements(bindingName) {
          var validator = ko.virtualElements.allowedBindings[bindingName];
          if (!validator) throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements");
        }

        function applyBindingsToDescendantsInternal(bindingContext, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
          var currentChild,
              nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement),
              provider = ko.bindingProvider['instance'],
              preprocessNode = provider['preprocessNode']; // Preprocessing allows a binding provider to mutate a node before bindings are applied to it. For example it's
          // possible to insert new siblings after it, and/or replace the node with a different one. This can be used to
          // implement custom binding syntaxes, such as {{ value }} for string interpolation, or custom element types that
          // trigger insertion of <template> contents at that point in the document.

          if (preprocessNode) {
            while (currentChild = nextInQueue) {
              nextInQueue = ko.virtualElements.nextSibling(currentChild);
              preprocessNode.call(provider, currentChild);
            } // Reset nextInQueue for the next loop


            nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
          }

          while (currentChild = nextInQueue) {
            // Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
            nextInQueue = ko.virtualElements.nextSibling(currentChild);
            applyBindingsToNodeAndDescendantsInternal(bindingContext, currentChild, bindingContextsMayDifferFromDomParentElement);
          }
        }

        function applyBindingsToNodeAndDescendantsInternal(bindingContext, nodeVerified, bindingContextMayDifferFromDomParentElement) {
          var shouldBindDescendants = true; // Perf optimisation: Apply bindings only if...
          // (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
          //     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
          // (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)

          var isElement = nodeVerified.nodeType === 1;
          if (isElement) // Workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);
          var shouldApplyBindings = isElement && bindingContextMayDifferFromDomParentElement || // Case (1)
          ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified); // Case (2)

          if (shouldApplyBindings) shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, bindingContext, bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];

          if (shouldBindDescendants && !bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]) {
            // We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
            //  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
            //    hence bindingContextsMayDifferFromDomParentElement is false
            //  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
            //    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
            //    hence bindingContextsMayDifferFromDomParentElement is true
            applyBindingsToDescendantsInternal(bindingContext, nodeVerified,
            /* bindingContextsMayDifferFromDomParentElement: */
            !isElement);
          }
        }

        var boundElementDomDataKey = ko.utils.domData.nextKey();

        function topologicalSortBindings(bindings) {
          // Depth-first sort
          var result = [],
              // The list of key/handler pairs that we will return
          bindingsConsidered = {},
              // A temporary record of which bindings are already in 'result'
          cyclicDependencyStack = []; // Keeps track of a depth-search so that, if there's a cycle, we know which bindings caused it

          ko.utils.objectForEach(bindings, function pushBinding(bindingKey) {
            if (!bindingsConsidered[bindingKey]) {
              var binding = ko['getBindingHandler'](bindingKey);

              if (binding) {
                // First add dependencies (if any) of the current binding
                if (binding['after']) {
                  cyclicDependencyStack.push(bindingKey);
                  ko.utils.arrayForEach(binding['after'], function (bindingDependencyKey) {
                    if (bindings[bindingDependencyKey]) {
                      if (ko.utils.arrayIndexOf(cyclicDependencyStack, bindingDependencyKey) !== -1) {
                        throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + cyclicDependencyStack.join(", "));
                      } else {
                        pushBinding(bindingDependencyKey);
                      }
                    }
                  });
                  cyclicDependencyStack.pop();
                } // Next add the current binding


                result.push({
                  key: bindingKey,
                  handler: binding
                });
              }

              bindingsConsidered[bindingKey] = true;
            }
          });
          return result;
        }

        function applyBindingsToNodeInternal(node, sourceBindings, bindingContext, bindingContextMayDifferFromDomParentElement) {
          // Prevent multiple applyBindings calls for the same node, except when a binding value is specified
          var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);

          if (!sourceBindings) {
            if (alreadyBound) {
              throw Error("You cannot apply bindings multiple times to the same element.");
            }

            ko.utils.domData.set(node, boundElementDomDataKey, true);
          } // Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
          // we can easily recover it just by scanning up the node's ancestors in the DOM
          // (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)


          if (!alreadyBound && bindingContextMayDifferFromDomParentElement) ko.storedBindingContextForNode(node, bindingContext); // Use bindings if given, otherwise fall back on asking the bindings provider to give us some bindings

          var bindings;

          if (sourceBindings && typeof sourceBindings !== 'function') {
            bindings = sourceBindings;
          } else {
            var provider = ko.bindingProvider['instance'],
                getBindings = provider['getBindingAccessors'] || getBindingsAndMakeAccessors;

            if (sourceBindings || bindingContext._subscribable) {
              // When an obsevable view model is used, the binding context will expose an observable _subscribable value.
              // Get the binding from the provider within a computed observable so that we can update the bindings whenever
              // the binding context is updated.
              var bindingsUpdater = ko.dependentObservable(function () {
                bindings = sourceBindings ? sourceBindings(bindingContext, node) : getBindings.call(provider, node, bindingContext); // Register a dependency on the binding context

                if (bindings && bindingContext._subscribable) bindingContext._subscribable();
                return bindings;
              }, null, {
                disposeWhenNodeIsRemoved: node
              });
              if (!bindings || !bindingsUpdater.isActive()) bindingsUpdater = null;
            } else {
              bindings = ko.dependencyDetection.ignore(getBindings, provider, [node, bindingContext]);
            }
          }

          var bindingHandlerThatControlsDescendantBindings;

          if (bindings) {
            // Use of allBindings as a function is maintained for backwards compatibility, but its use is deprecated
            var allBindings = function allBindings() {
              return ko.utils.objectMap(bindingsUpdater ? bindingsUpdater() : bindings, evaluateValueAccessor);
            }; // The following is the 3.x allBindings API


            // Return the value accessor for a given binding. When bindings are static (won't be updated because of a binding
            // context update), just return the value accessor from the binding. Otherwise, return a function that always gets
            // the latest binding value and registers a dependency on the binding updater.
            var getValueAccessor = bindingsUpdater ? function (bindingKey) {
              return function () {
                return evaluateValueAccessor(bindingsUpdater()[bindingKey]);
              };
            } : function (bindingKey) {
              return bindings[bindingKey];
            };

            allBindings['get'] = function (key) {
              return bindings[key] && evaluateValueAccessor(getValueAccessor(key));
            };

            allBindings['has'] = function (key) {
              return key in bindings;
            }; // First put the bindings into the right order


            var orderedBindings = topologicalSortBindings(bindings); // Go through the sorted bindings, calling init and update for each

            ko.utils.arrayForEach(orderedBindings, function (bindingKeyAndHandler) {
              // Note that topologicalSortBindings has already filtered out any nonexistent binding handlers,
              // so bindingKeyAndHandler.handler will always be nonnull.
              var handlerInitFn = bindingKeyAndHandler.handler["init"],
                  handlerUpdateFn = bindingKeyAndHandler.handler["update"],
                  bindingKey = bindingKeyAndHandler.key;

              if (node.nodeType === 8) {
                validateThatBindingIsAllowedForVirtualElements(bindingKey);
              }

              try {
                // Run init, ignoring any dependencies
                if (typeof handlerInitFn == "function") {
                  ko.dependencyDetection.ignore(function () {
                    var initResult = handlerInitFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext); // If this binding handler claims to control descendant bindings, make a note of this

                    if (initResult && initResult['controlsDescendantBindings']) {
                      if (bindingHandlerThatControlsDescendantBindings !== undefined) throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                      bindingHandlerThatControlsDescendantBindings = bindingKey;
                    }
                  });
                } // Run update in its own computed wrapper


                if (typeof handlerUpdateFn == "function") {
                  ko.dependentObservable(function () {
                    handlerUpdateFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                  }, null, {
                    disposeWhenNodeIsRemoved: node
                  });
                }
              } catch (ex) {
                ex.message = "Unable to process binding \"" + bindingKey + ": " + bindings[bindingKey] + "\"\nMessage: " + ex.message;
                throw ex;
              }
            });
          }

          return {
            'shouldBindDescendants': bindingHandlerThatControlsDescendantBindings === undefined
          };
        }

        ;
        var storedBindingContextDomDataKey = ko.utils.domData.nextKey();

        ko.storedBindingContextForNode = function (node, bindingContext) {
          if (arguments.length == 2) {
            ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
            if (bindingContext._subscribable) bindingContext._subscribable._addNode(node);
          } else {
            return ko.utils.domData.get(node, storedBindingContextDomDataKey);
          }
        };

        function getBindingContext(viewModelOrBindingContext) {
          return viewModelOrBindingContext && viewModelOrBindingContext instanceof ko.bindingContext ? viewModelOrBindingContext : new ko.bindingContext(viewModelOrBindingContext);
        }

        ko.applyBindingAccessorsToNode = function (node, bindings, viewModelOrBindingContext) {
          if (node.nodeType === 1) // If it's an element, workaround IE <= 8 HTML parsing weirdness
            ko.virtualElements.normaliseVirtualElementDomStructure(node);
          return applyBindingsToNodeInternal(node, bindings, getBindingContext(viewModelOrBindingContext), true);
        };

        ko.applyBindingsToNode = function (node, bindings, viewModelOrBindingContext) {
          var context = getBindingContext(viewModelOrBindingContext);
          return ko.applyBindingAccessorsToNode(node, makeBindingAccessors(bindings, context, node), context);
        };

        ko.applyBindingsToDescendants = function (viewModelOrBindingContext, rootNode) {
          if (rootNode.nodeType === 1 || rootNode.nodeType === 8) applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
        };

        ko.applyBindings = function (viewModelOrBindingContext, rootNode) {
          if (rootNode && rootNode.nodeType !== 1 && rootNode.nodeType !== 8) throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
          rootNode = rootNode || window.document.body; // Make "rootNode" parameter optional

          applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
        }; // Retrieving binding context from arbitrary nodes


        ko.contextFor = function (node) {
          // We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
          switch (node.nodeType) {
            case 1:
            case 8:
              var context = ko.storedBindingContextForNode(node);
              if (context) return context;
              if (node.parentNode) return ko.contextFor(node.parentNode);
              break;
          }

          return undefined;
        };

        ko.dataFor = function (node) {
          var context = ko.contextFor(node);
          return context ? context['$data'] : undefined;
        };

        ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
        ko.exportSymbol('applyBindings', ko.applyBindings);
        ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
        ko.exportSymbol('applyBindingAccessorsToNode', ko.applyBindingAccessorsToNode);
        ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
        ko.exportSymbol('contextFor', ko.contextFor);
        ko.exportSymbol('dataFor', ko.dataFor);
      })();

      var attrHtmlToJavascriptMap = {
        'class': 'className',
        'for': 'htmlFor'
      };
      ko.bindingHandlers['attr'] = {
        'update': function update(element, valueAccessor, allBindings) {
          var value = ko.utils.unwrapObservable(valueAccessor()) || {};
          ko.utils.objectForEach(value, function (attrName, attrValue) {
            attrValue = ko.utils.unwrapObservable(attrValue); // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
            // when someProp is a "no value"-like value (strictly null, false, or undefined)
            // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)

            var toRemove = attrValue === false || attrValue === null || attrValue === undefined;
            if (toRemove) element.removeAttribute(attrName); // In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
            // HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
            // but instead of figuring out the mode, we'll just set the attribute through the Javascript
            // property for IE <= 8.

            if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
              attrName = attrHtmlToJavascriptMap[attrName];
              if (toRemove) element.removeAttribute(attrName);else element[attrName] = attrValue;
            } else if (!toRemove) {
              element.setAttribute(attrName, attrValue.toString());
            } // Treat "name" specially - although you can think of it as an attribute, it also needs
            // special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
            // Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
            // entirely, and there's no strong reason to allow for such casing in HTML.


            if (attrName === "name") {
              ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
            }
          });
        }
      };

      (function () {
        ko.bindingHandlers['checked'] = {
          'after': ['value', 'attr'],
          'init': function init(element, valueAccessor, allBindings) {
            function checkedValue() {
              return allBindings['has']('checkedValue') ? ko.utils.unwrapObservable(allBindings.get('checkedValue')) : element.value;
            }

            function updateModel() {
              // This updates the model value from the view value.
              // It runs in response to DOM events (click) and changes in checkedValue.
              var isChecked = element.checked,
                  elemValue = useCheckedValue ? checkedValue() : isChecked; // When we're first setting up this computed, don't change any model state.

              if (!shouldSet) {
                return;
              } // We can ignore unchecked radio buttons, because some other radio
              // button will be getting checked, and that one can take care of updating state.


              if (isRadio && !isChecked) {
                return;
              }

              var modelValue = ko.dependencyDetection.ignore(valueAccessor);

              if (isValueArray) {
                if (oldElemValue !== elemValue) {
                  // When we're responding to the checkedValue changing, and the element is
                  // currently checked, replace the old elem value with the new elem value
                  // in the model array.
                  if (isChecked) {
                    ko.utils.addOrRemoveItem(modelValue, elemValue, true);
                    ko.utils.addOrRemoveItem(modelValue, oldElemValue, false);
                  }

                  oldElemValue = elemValue;
                } else {
                  // When we're responding to the user having checked/unchecked a checkbox,
                  // add/remove the element value to the model array.
                  ko.utils.addOrRemoveItem(modelValue, elemValue, isChecked);
                }
              } else {
                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'checked', elemValue, true);
              }
            }

            ;

            function updateView() {
              // This updates the view value from the model value.
              // It runs in response to changes in the bound (checked) value.
              var modelValue = ko.utils.unwrapObservable(valueAccessor());

              if (isValueArray) {
                // When a checkbox is bound to an array, being checked represents its value being present in that array
                element.checked = ko.utils.arrayIndexOf(modelValue, checkedValue()) >= 0;
              } else if (isCheckbox) {
                // When a checkbox is bound to any other value (not an array), being checked represents the value being trueish
                element.checked = modelValue;
              } else {
                // For radio buttons, being checked means that the radio button's value corresponds to the model value
                element.checked = checkedValue() === modelValue;
              }
            }

            ;
            var isCheckbox = element.type == "checkbox",
                isRadio = element.type == "radio"; // Only bind to check boxes and radio buttons

            if (!isCheckbox && !isRadio) {
              return;
            }

            var isValueArray = isCheckbox && ko.utils.unwrapObservable(valueAccessor()) instanceof Array,
                oldElemValue = isValueArray ? checkedValue() : undefined,
                useCheckedValue = isRadio || isValueArray,
                shouldSet = false; // IE 6 won't allow radio buttons to be selected unless they have a name

            if (isRadio && !element.name) ko.bindingHandlers['uniqueName']['init'](element, function () {
              return true;
            }); // Set up two computeds to update the binding:
            // The first responds to changes in the checkedValue value and to element clicks

            ko.dependentObservable(updateModel, null, {
              disposeWhenNodeIsRemoved: element
            });
            ko.utils.registerEventHandler(element, "click", updateModel); // The second responds to changes in the model value (the one associated with the checked binding)

            ko.dependentObservable(updateView, null, {
              disposeWhenNodeIsRemoved: element
            });
            shouldSet = true;
          }
        };
        ko.expressionRewriting.twoWayBindings['checked'] = true;
        ko.bindingHandlers['checkedValue'] = {
          'update': function update(element, valueAccessor) {
            element.value = ko.utils.unwrapObservable(valueAccessor());
          }
        };
      })();

      var classesWrittenByBindingKey = '__ko__cssValue';
      ko.bindingHandlers['css'] = {
        'update': function update(element, valueAccessor) {
          var value = ko.utils.unwrapObservable(valueAccessor());

          if (_typeof(value) == "object") {
            ko.utils.objectForEach(value, function (className, shouldHaveClass) {
              shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
              ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
            });
          } else {
            value = String(value || ''); // Make sure we don't try to store or set a non-string value

            ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
            element[classesWrittenByBindingKey] = value;
            ko.utils.toggleDomNodeCssClass(element, value, true);
          }
        }
      };
      ko.bindingHandlers['enable'] = {
        'update': function update(element, valueAccessor) {
          var value = ko.utils.unwrapObservable(valueAccessor());
          if (value && element.disabled) element.removeAttribute("disabled");else if (!value && !element.disabled) element.disabled = true;
        }
      };
      ko.bindingHandlers['disable'] = {
        'update': function update(element, valueAccessor) {
          ko.bindingHandlers['enable']['update'](element, function () {
            return !ko.utils.unwrapObservable(valueAccessor());
          });
        }
      }; // For certain common events (currently just 'click'), allow a simplified data-binding syntax
      // e.g. click:handler instead of the usual full-length event:{click:handler}

      function makeEventHandlerShortcut(eventName) {
        ko.bindingHandlers[eventName] = {
          'init': function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var newValueAccessor = function newValueAccessor() {
              var result = {};
              result[eventName] = valueAccessor();
              return result;
            };

            return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
          }
        };
      }

      ko.bindingHandlers['event'] = {
        'init': function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
          var eventsToHandle = valueAccessor() || {};
          ko.utils.objectForEach(eventsToHandle, function (eventName) {
            if (typeof eventName == "string") {
              ko.utils.registerEventHandler(element, eventName, function (event) {
                var handlerReturnValue;
                var handlerFunction = valueAccessor()[eventName];
                if (!handlerFunction) return;

                try {
                  // Take all the event args, and prefix with the viewmodel
                  var argsForHandler = ko.utils.makeArray(arguments);
                  viewModel = bindingContext['$data'];
                  argsForHandler.unshift(viewModel);
                  handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                } finally {
                  if (handlerReturnValue !== true) {
                    // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                    if (event.preventDefault) event.preventDefault();else event.returnValue = false;
                  }
                }

                var bubble = allBindings.get(eventName + 'Bubble') !== false;

                if (!bubble) {
                  event.cancelBubble = true;
                  if (event.stopPropagation) event.stopPropagation();
                }
              });
            }
          });
        }
      }; // "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
      // "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"

      ko.bindingHandlers['foreach'] = {
        makeTemplateValueAccessor: function makeTemplateValueAccessor(valueAccessor) {
          return function () {
            var modelValue = valueAccessor(),
                unwrappedValue = ko.utils.peekObservable(modelValue); // Unwrap without setting a dependency here
            // If unwrappedValue is the array, pass in the wrapped value on its own
            // The value will be unwrapped and tracked within the template binding
            // (See https://github.com/SteveSanderson/knockout/issues/523)

            if (!unwrappedValue || typeof unwrappedValue.length == "number") return {
              'foreach': modelValue,
              'templateEngine': ko.nativeTemplateEngine.instance
            }; // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates

            ko.utils.unwrapObservable(modelValue);
            return {
              'foreach': unwrappedValue['data'],
              'as': unwrappedValue['as'],
              'includeDestroyed': unwrappedValue['includeDestroyed'],
              'afterAdd': unwrappedValue['afterAdd'],
              'beforeRemove': unwrappedValue['beforeRemove'],
              'afterRender': unwrappedValue['afterRender'],
              'beforeMove': unwrappedValue['beforeMove'],
              'afterMove': unwrappedValue['afterMove'],
              'templateEngine': ko.nativeTemplateEngine.instance
            };
          };
        },
        'init': function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
          return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
        },
        'update': function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
          return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindings, viewModel, bindingContext);
        }
      };
      ko.expressionRewriting.bindingRewriteValidators['foreach'] = false; // Can't rewrite control flow bindings

      ko.virtualElements.allowedBindings['foreach'] = true;
      var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
      var hasfocusLastValue = '__ko_hasfocusLastValue';
      ko.bindingHandlers['hasfocus'] = {
        'init': function init(element, valueAccessor, allBindings) {
          var handleElementFocusChange = function handleElementFocusChange(isFocused) {
            // Where possible, ignore which event was raised and determine focus state using activeElement,
            // as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
            // However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
            // prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
            // from calling 'blur()' on the element when it loses focus.
            // Discussion at https://github.com/SteveSanderson/knockout/pull/352
            element[hasfocusUpdatingProperty] = true;
            var ownerDoc = element.ownerDocument;

            if ("activeElement" in ownerDoc) {
              var active;

              try {
                active = ownerDoc.activeElement;
              } catch (e) {
                // IE9 throws if you access activeElement during page load (see issue #703)
                active = ownerDoc.body;
              }

              isFocused = active === element;
            }

            var modelValue = valueAccessor();
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'hasfocus', isFocused, true); //cache the latest value, so we can avoid unnecessarily calling focus/blur in the update function

            element[hasfocusLastValue] = isFocused;
            element[hasfocusUpdatingProperty] = false;
          };

          var handleElementFocusIn = handleElementFocusChange.bind(null, true);
          var handleElementFocusOut = handleElementFocusChange.bind(null, false);
          ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
          ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn); // For IE

          ko.utils.registerEventHandler(element, "blur", handleElementFocusOut);
          ko.utils.registerEventHandler(element, "focusout", handleElementFocusOut); // For IE
        },
        'update': function update(element, valueAccessor) {
          var value = !!ko.utils.unwrapObservable(valueAccessor()); //force boolean to compare with last value

          if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
            value ? element.focus() : element.blur();
            ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]); // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
          }
        }
      };
      ko.expressionRewriting.twoWayBindings['hasfocus'] = true;
      ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus']; // Make "hasFocus" an alias

      ko.expressionRewriting.twoWayBindings['hasFocus'] = true;
      ko.bindingHandlers['html'] = {
        'init': function init() {
          // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
          return {
            'controlsDescendantBindings': true
          };
        },
        'update': function update(element, valueAccessor) {
          // setHtml will unwrap the value if needed
          ko.utils.setHtml(element, valueAccessor());
        }
      };
      var withIfDomDataKey = ko.utils.domData.nextKey(); // Makes a binding like with or if

      function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
        ko.bindingHandlers[bindingKey] = {
          'init': function init(element) {
            ko.utils.domData.set(element, withIfDomDataKey, {});
            return {
              'controlsDescendantBindings': true
            };
          },
          'update': function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var withIfData = ko.utils.domData.get(element, withIfDomDataKey),
                dataValue = ko.utils.unwrapObservable(valueAccessor()),
                shouldDisplay = !isNot !== !dataValue,
                // equivalent to isNot ? !dataValue : !!dataValue
            isFirstRender = !withIfData.savedNodes,
                needsRefresh = isFirstRender || isWith || shouldDisplay !== withIfData.didDisplayOnLastUpdate;

            if (needsRefresh) {
              if (isFirstRender) {
                withIfData.savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true
                /* shouldCleanNodes */
                );
              }

              if (shouldDisplay) {
                if (!isFirstRender) {
                  ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(withIfData.savedNodes));
                }

                ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, dataValue) : bindingContext, element);
              } else {
                ko.virtualElements.emptyNode(element);
              }

              withIfData.didDisplayOnLastUpdate = shouldDisplay;
            }
          }
        };
        ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false; // Can't rewrite control flow bindings

        ko.virtualElements.allowedBindings[bindingKey] = true;
      } // Construct the actual binding handlers


      makeWithIfBinding('if');
      makeWithIfBinding('ifnot', false
      /* isWith */
      , true
      /* isNot */
      );
      makeWithIfBinding('with', true
      /* isWith */
      , false
      /* isNot */
      , function (bindingContext, dataValue) {
        return bindingContext['createChildContext'](dataValue);
      });
      ko.bindingHandlers['options'] = {
        'init': function init(element) {
          if (ko.utils.tagNameLower(element) !== "select") throw new Error("options binding applies only to SELECT elements"); // Remove all existing <option>s.

          while (element.length > 0) {
            element.remove(0);
          } // Ensures that the binding processor doesn't try to bind the options


          return {
            'controlsDescendantBindings': true
          };
        },
        'update': function update(element, valueAccessor, allBindings) {
          function selectedOptions() {
            return ko.utils.arrayFilter(element.options, function (node) {
              return node.selected;
            });
          }

          var selectWasPreviouslyEmpty = element.length == 0;
          var previousScrollTop = !selectWasPreviouslyEmpty && element.multiple ? element.scrollTop : null;
          var unwrappedArray = ko.utils.unwrapObservable(valueAccessor());
          var includeDestroyed = allBindings.get('optionsIncludeDestroyed');
          var captionPlaceholder = {};
          var captionValue;
          var previousSelectedValues;

          if (element.multiple) {
            previousSelectedValues = ko.utils.arrayMap(selectedOptions(), ko.selectExtensions.readValue);
          } else {
            previousSelectedValues = element.selectedIndex >= 0 ? [ko.selectExtensions.readValue(element.options[element.selectedIndex])] : [];
          }

          if (unwrappedArray) {
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
              unwrappedArray = [unwrappedArray]; // Filter out any entries marked as destroyed

            var filteredArray = ko.utils.arrayFilter(unwrappedArray, function (item) {
              return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            }); // If caption is included, add it to the array

            if (allBindings['has']('optionsCaption')) {
              captionValue = ko.utils.unwrapObservable(allBindings.get('optionsCaption')); // If caption value is null or undefined, don't show a caption

              if (captionValue !== null && captionValue !== undefined) {
                filteredArray.unshift(captionPlaceholder);
              }
            }
          } else {
            // If a falsy value is provided (e.g. null), we'll simply empty the select element
            unwrappedArray = [];
          }

          function applyToObject(object, predicate, defaultValue) {
            var predicateType = _typeof(predicate);

            if (predicateType == "function") // Given a function; run it against the data value
              return predicate(object);else if (predicateType == "string") // Given a string; treat it as a property name on the data value
              return object[predicate];else // Given no optionsText arg; use the data value itself
              return defaultValue;
          } // The following functions can run at two different times:
          // The first is when the whole array is being updated directly from this binding handler.
          // The second is when an observable value for a specific array entry is updated.
          // oldOptions will be empty in the first case, but will be filled with the previously generated option in the second.


          var itemUpdate = false;

          function optionForArrayItem(arrayEntry, index, oldOptions) {
            if (oldOptions.length) {
              previousSelectedValues = oldOptions[0].selected ? [ko.selectExtensions.readValue(oldOptions[0])] : [];
              itemUpdate = true;
            }

            var option = document.createElement("option");

            if (arrayEntry === captionPlaceholder) {
              ko.utils.setTextContent(option, allBindings.get('optionsCaption'));
              ko.selectExtensions.writeValue(option, undefined);
            } else {
              // Apply a value to the option element
              var optionValue = applyToObject(arrayEntry, allBindings.get('optionsValue'), arrayEntry);
              ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue)); // Apply some text to the option element

              var optionText = applyToObject(arrayEntry, allBindings.get('optionsText'), optionValue);
              ko.utils.setTextContent(option, optionText);
            }

            return [option];
          }

          function setSelectionCallback(arrayEntry, newOptions) {
            // IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
            // That's why we first added them without selection. Now it's time to set the selection.
            if (previousSelectedValues.length) {
              var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
              ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected); // If this option was changed from being selected during a single-item update, notify the change

              if (itemUpdate && !isSelected) ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
            }
          }

          var callback = setSelectionCallback;

          if (allBindings['has']('optionsAfterRender')) {
            callback = function callback(arrayEntry, newOptions) {
              setSelectionCallback(arrayEntry, newOptions);
              ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'), null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
            };
          }

          ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, null, callback); // Determine if the selection has changed as a result of updating the options list

          var selectionChanged;

          if (element.multiple) {
            // For a multiple-select box, compare the new selection count to the previous one
            // But if nothing was selected before, the selection can't have changed
            selectionChanged = previousSelectedValues.length && selectedOptions().length < previousSelectedValues.length;
          } else {
            // For a single-select box, compare the current value to the previous value
            // But if nothing was selected before or nothing is selected now, just look for a change in selection
            selectionChanged = previousSelectedValues.length && element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) !== previousSelectedValues[0] : previousSelectedValues.length || element.selectedIndex >= 0;
          } // Ensure consistency between model value and selected option.
          // If the dropdown was changed so that selection is no longer the same,
          // notify the value or selectedOptions binding.


          if (selectionChanged) ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]); // Workaround for IE bug

          ko.utils.ensureSelectElementIsRenderedCorrectly(element);
          if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20) element.scrollTop = previousScrollTop;
        }
      };
      ko.bindingHandlers['options'].optionValueDomDataKey = ko.utils.domData.nextKey();
      ko.bindingHandlers['selectedOptions'] = {
        'after': ['options', 'foreach'],
        'init': function init(element, valueAccessor, allBindings) {
          ko.utils.registerEventHandler(element, "change", function () {
            var value = valueAccessor(),
                valueToWrite = [];
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function (node) {
              if (node.selected) valueToWrite.push(ko.selectExtensions.readValue(node));
            });
            ko.expressionRewriting.writeValueToProperty(value, allBindings, 'selectedOptions', valueToWrite);
          });
        },
        'update': function update(element, valueAccessor) {
          if (ko.utils.tagNameLower(element) != "select") throw new Error("values binding applies only to SELECT elements");
          var newValue = ko.utils.unwrapObservable(valueAccessor());

          if (newValue && typeof newValue.length == "number") {
            ko.utils.arrayForEach(element.getElementsByTagName("option"), function (node) {
              var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
              ko.utils.setOptionNodeSelectionState(node, isSelected);
            });
          }
        }
      };
      ko.expressionRewriting.twoWayBindings['selectedOptions'] = true;
      ko.bindingHandlers['style'] = {
        'update': function update(element, valueAccessor) {
          var value = ko.utils.unwrapObservable(valueAccessor() || {});
          ko.utils.objectForEach(value, function (styleName, styleValue) {
            styleValue = ko.utils.unwrapObservable(styleValue);
            element.style[styleName] = styleValue || ""; // Empty string removes the value, whereas null/undefined have no effect
          });
        }
      };
      ko.bindingHandlers['submit'] = {
        'init': function init(element, valueAccessor, allBindings, viewModel, bindingContext) {
          if (typeof valueAccessor() != "function") throw new Error("The value for a submit binding must be a function");
          ko.utils.registerEventHandler(element, "submit", function (event) {
            var handlerReturnValue;
            var value = valueAccessor();

            try {
              handlerReturnValue = value.call(bindingContext['$data'], element);
            } finally {
              if (handlerReturnValue !== true) {
                // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                if (event.preventDefault) event.preventDefault();else event.returnValue = false;
              }
            }
          });
        }
      };
      ko.bindingHandlers['text'] = {
        'init': function init() {
          // Prevent binding on the dynamically-injected text node (as developers are unlikely to expect that, and it has security implications).
          // It should also make things faster, as we no longer have to consider whether the text node might be bindable.
          return {
            'controlsDescendantBindings': true
          };
        },
        'update': function update(element, valueAccessor) {
          ko.utils.setTextContent(element, valueAccessor());
        }
      };
      ko.virtualElements.allowedBindings['text'] = true;
      ko.bindingHandlers['uniqueName'] = {
        'init': function init(element, valueAccessor) {
          if (valueAccessor()) {
            var name = "ko_unique_" + ++ko.bindingHandlers['uniqueName'].currentIndex;
            ko.utils.setElementName(element, name);
          }
        }
      };
      ko.bindingHandlers['uniqueName'].currentIndex = 0;
      ko.bindingHandlers['value'] = {
        'after': ['options', 'foreach'],
        'init': function init(element, valueAccessor, allBindings) {
          // Always catch "change" event; possibly other events too if asked
          var eventsToCatch = ["change"];
          var requestedEventsToCatch = allBindings.get("valueUpdate");
          var propertyChangedFired = false;

          if (requestedEventsToCatch) {
            if (typeof requestedEventsToCatch == "string") // Allow both individual event names, and arrays of event names
              requestedEventsToCatch = [requestedEventsToCatch];
            ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
            eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
          }

          var valueUpdateHandler = function valueUpdateHandler() {
            propertyChangedFired = false;
            var modelValue = valueAccessor();
            var elementValue = ko.selectExtensions.readValue(element);
            ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'value', elementValue);
          }; // Workaround for https://github.com/SteveSanderson/knockout/issues/122
          // IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list


          var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text" && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");

          if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
            ko.utils.registerEventHandler(element, "propertychange", function () {
              propertyChangedFired = true;
            });
            ko.utils.registerEventHandler(element, "blur", function () {
              if (propertyChangedFired) {
                valueUpdateHandler();
              }
            });
          }

          ko.utils.arrayForEach(eventsToCatch, function (eventName) {
            // The syntax "after<eventname>" means "run the handler asynchronously after the event"
            // This is useful, for example, to catch "keydown" events after the browser has updated the control
            // (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
            var handler = valueUpdateHandler;

            if (ko.utils.stringStartsWith(eventName, "after")) {
              handler = function handler() {
                setTimeout(valueUpdateHandler, 0);
              };

              eventName = eventName.substring("after".length);
            }

            ko.utils.registerEventHandler(element, eventName, handler);
          });
        },
        'update': function update(element, valueAccessor) {
          var valueIsSelectOption = ko.utils.tagNameLower(element) === "select";
          var newValue = ko.utils.unwrapObservable(valueAccessor());
          var elementValue = ko.selectExtensions.readValue(element);
          var valueHasChanged = newValue !== elementValue;

          if (valueHasChanged) {
            var applyValueAction = function applyValueAction() {
              ko.selectExtensions.writeValue(element, newValue);
            };

            applyValueAction();

            if (valueIsSelectOption) {
              if (newValue !== ko.selectExtensions.readValue(element)) {
                // If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
                // because you're not allowed to have a model value that disagrees with a visible UI selection.
                ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
              } else {
                // Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
                // right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
                // to apply the value as well.
                setTimeout(applyValueAction, 0);
              }
            }
          }
        }
      };
      ko.expressionRewriting.twoWayBindings['value'] = true;
      ko.bindingHandlers['visible'] = {
        'update': function update(element, valueAccessor) {
          var value = ko.utils.unwrapObservable(valueAccessor());
          var isCurrentlyVisible = !(element.style.display == "none");
          if (value && !isCurrentlyVisible) element.style.display = "";else if (!value && isCurrentlyVisible) element.style.display = "none";
        }
      }; // 'click' is just a shorthand for the usual full-length event:{click:handler}

      makeEventHandlerShortcut('click'); // If you want to make a custom template engine,
      //
      // [1] Inherit from this class (like ko.nativeTemplateEngine does)
      // [2] Override 'renderTemplateSource', supplying a function with this signature:
      //
      //        function (templateSource, bindingContext, options) {
      //            // - templateSource.text() is the text of the template you should render
      //            // - bindingContext.$data is the data you should pass into the template
      //            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
      //            //     and bindingContext.$root available in the template too
      //            // - options gives you access to any other properties set on "data-bind: { template: options }"
      //            //
      //            // Return value: an array of DOM nodes
      //        }
      //
      // [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
      //
      //        function (script) {
      //            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
      //            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
      //        }
      //
      //     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
      //     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
      //     and then you don't need to override 'createJavaScriptEvaluatorBlock'.

      ko.templateEngine = function () {};

      ko.templateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options) {
        throw new Error("Override renderTemplateSource");
      };

      ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function (script) {
        throw new Error("Override createJavaScriptEvaluatorBlock");
      };

      ko.templateEngine.prototype['makeTemplateSource'] = function (template, templateDocument) {
        // Named template
        if (typeof template == "string") {
          templateDocument = templateDocument || document;
          var elem = templateDocument.getElementById(template);
          if (!elem) throw new Error("Cannot find template with ID " + template);
          return new ko.templateSources.domElement(elem);
        } else if (template.nodeType == 1 || template.nodeType == 8) {
          // Anonymous template
          return new ko.templateSources.anonymousTemplate(template);
        } else throw new Error("Unknown template type: " + template);
      };

      ko.templateEngine.prototype['renderTemplate'] = function (template, bindingContext, options, templateDocument) {
        var templateSource = this['makeTemplateSource'](template, templateDocument);
        return this['renderTemplateSource'](templateSource, bindingContext, options);
      };

      ko.templateEngine.prototype['isTemplateRewritten'] = function (template, templateDocument) {
        // Skip rewriting if requested
        if (this['allowTemplateRewriting'] === false) return true;
        return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
      };

      ko.templateEngine.prototype['rewriteTemplate'] = function (template, rewriterCallback, templateDocument) {
        var templateSource = this['makeTemplateSource'](template, templateDocument);
        var rewritten = rewriterCallback(templateSource['text']());
        templateSource['text'](rewritten);
        templateSource['data']("isRewritten", true);
      };

      ko.exportSymbol('templateEngine', ko.templateEngine);

      ko.templateRewriting = function () {
        var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
        var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

        function validateDataBindValuesForRewriting(keyValueArray) {
          var allValidators = ko.expressionRewriting.bindingRewriteValidators;

          for (var i = 0; i < keyValueArray.length; i++) {
            var key = keyValueArray[i]['key'];

            if (allValidators.hasOwnProperty(key)) {
              var validator = allValidators[key];

              if (typeof validator === "function") {
                var possibleErrorMessage = validator(keyValueArray[i]['value']);
                if (possibleErrorMessage) throw new Error(possibleErrorMessage);
              } else if (!validator) {
                throw new Error("This template engine does not support the '" + key + "' binding within its templates");
              }
            }
          }
        }

        function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
          var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
          validateDataBindValuesForRewriting(dataBindKeyValueArray);
          var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray, {
            'valueAccessors': true
          }); // For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
          // anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
          // extra indirection.

          var applyBindingsToNextSiblingScript = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
          return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
        }

        return {
          ensureTemplateIsRewritten: function ensureTemplateIsRewritten(template, templateEngine, templateDocument) {
            if (!templateEngine['isTemplateRewritten'](template, templateDocument)) templateEngine['rewriteTemplate'](template, function (htmlString) {
              return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
            }, templateDocument);
          },
          memoizeBindingAttributeSyntax: function memoizeBindingAttributeSyntax(htmlString, templateEngine) {
            return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function () {
              return constructMemoizedTagReplacement(
              /* dataBindAttributeValue: */
              arguments[4],
              /* tagToRetain: */
              arguments[1],
              /* nodeName: */
              arguments[2], templateEngine);
            }).replace(memoizeVirtualContainerBindingSyntaxRegex, function () {
              return constructMemoizedTagReplacement(
              /* dataBindAttributeValue: */
              arguments[1],
              /* tagToRetain: */
              "<!-- ko -->",
              /* nodeName: */
              "#comment", templateEngine);
            });
          },
          applyMemoizedBindingsToNextSibling: function applyMemoizedBindingsToNextSibling(bindings, nodeName) {
            return ko.memoization.memoize(function (domNode, bindingContext) {
              var nodeToBind = domNode.nextSibling;

              if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
                ko.applyBindingAccessorsToNode(nodeToBind, bindings, bindingContext);
              }
            });
          }
        };
      }(); // Exported only because it has to be referenced by string lookup from within rewritten template


      ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);

      (function () {
        // A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
        // logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
        //
        // Two are provided by default:
        //  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
        //  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
        //                                           without reading/writing the actual element text content, since it will be overwritten
        //                                           with the rendered template output.
        // You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
        // Template sources need to have the following functions:
        //   text() 			- returns the template text from your storage location
        //   text(value)		- writes the supplied template text to your storage location
        //   data(key)			- reads values stored using data(key, value) - see below
        //   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
        //
        // Optionally, template sources can also have the following functions:
        //   nodes()            - returns a DOM element containing the nodes of this template, where available
        //   nodes(value)       - writes the given DOM element to your storage location
        // If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
        // for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
        //
        // Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
        // using and overriding "makeTemplateSource" to return an instance of your custom template source.
        ko.templateSources = {}; // ---- ko.templateSources.domElement -----

        ko.templateSources.domElement = function (element) {
          this.domElement = element;
        };

        ko.templateSources.domElement.prototype['text'] = function ()
        /* valueToWrite */
        {
          var tagNameLower = ko.utils.tagNameLower(this.domElement),
              elemContentsProperty = tagNameLower === "script" ? "text" : tagNameLower === "textarea" ? "value" : "innerHTML";

          if (arguments.length == 0) {
            return this.domElement[elemContentsProperty];
          } else {
            var valueToWrite = arguments[0];
            if (elemContentsProperty === "innerHTML") ko.utils.setHtml(this.domElement, valueToWrite);else this.domElement[elemContentsProperty] = valueToWrite;
          }
        };

        var dataDomDataPrefix = ko.utils.domData.nextKey() + "_";

        ko.templateSources.domElement.prototype['data'] = function (key
        /*, valueToWrite */
        ) {
          if (arguments.length === 1) {
            return ko.utils.domData.get(this.domElement, dataDomDataPrefix + key);
          } else {
            ko.utils.domData.set(this.domElement, dataDomDataPrefix + key, arguments[1]);
          }
        }; // ---- ko.templateSources.anonymousTemplate -----
        // Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
        // For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
        // Writing to "text" is still supported, but then the template data will not be available as DOM nodes.


        var anonymousTemplatesDomDataKey = ko.utils.domData.nextKey();

        ko.templateSources.anonymousTemplate = function (element) {
          this.domElement = element;
        };

        ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
        ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;

        ko.templateSources.anonymousTemplate.prototype['text'] = function ()
        /* valueToWrite */
        {
          if (arguments.length == 0) {
            var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
            if (templateData.textData === undefined && templateData.containerData) templateData.textData = templateData.containerData.innerHTML;
            return templateData.textData;
          } else {
            var valueToWrite = arguments[0];
            ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {
              textData: valueToWrite
            });
          }
        };

        ko.templateSources.domElement.prototype['nodes'] = function ()
        /* valueToWrite */
        {
          if (arguments.length == 0) {
            var templateData = ko.utils.domData.get(this.domElement, anonymousTemplatesDomDataKey) || {};
            return templateData.containerData;
          } else {
            var valueToWrite = arguments[0];
            ko.utils.domData.set(this.domElement, anonymousTemplatesDomDataKey, {
              containerData: valueToWrite
            });
          }
        };

        ko.exportSymbol('templateSources', ko.templateSources);
        ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
        ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
      })();

      (function () {
        var _templateEngine;

        ko.setTemplateEngine = function (templateEngine) {
          if (templateEngine != undefined && !(templateEngine instanceof ko.templateEngine)) throw new Error("templateEngine must inherit from ko.templateEngine");
          _templateEngine = templateEngine;
        };

        function invokeForEachNodeInContinuousRange(firstNode, lastNode, action) {
          var node,
              nextInQueue = firstNode,
              firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);

          while (nextInQueue && (node = nextInQueue) !== firstOutOfRangeNode) {
            nextInQueue = ko.virtualElements.nextSibling(node);
            action(node, nextInQueue);
          }
        }

        function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
          // To be used on any nodes that have been rendered by a template and have been inserted into some parent element
          // Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
          // the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
          // (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
          // (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)
          if (continuousNodeArray.length) {
            var firstNode = continuousNodeArray[0],
                lastNode = continuousNodeArray[continuousNodeArray.length - 1],
                parentNode = firstNode.parentNode,
                provider = ko.bindingProvider['instance'],
                preprocessNode = provider['preprocessNode'];

            if (preprocessNode) {
              invokeForEachNodeInContinuousRange(firstNode, lastNode, function (node, nextNodeInRange) {
                var nodePreviousSibling = node.previousSibling;
                var newNodes = preprocessNode.call(provider, node);

                if (newNodes) {
                  if (node === firstNode) firstNode = newNodes[0] || nextNodeInRange;
                  if (node === lastNode) lastNode = newNodes[newNodes.length - 1] || nodePreviousSibling;
                }
              }); // Because preprocessNode can change the nodes, including the first and last nodes, update continuousNodeArray to match.
              // We need the full set, including inner nodes, because the unmemoize step might remove the first node (and so the real
              // first node needs to be in the array).

              continuousNodeArray.length = 0;

              if (!firstNode) {
                // preprocessNode might have removed all the nodes, in which case there's nothing left to do
                return;
              }

              if (firstNode === lastNode) {
                continuousNodeArray.push(firstNode);
              } else {
                continuousNodeArray.push(firstNode, lastNode);
                ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
              }
            } // Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
            // whereas a regular applyBindings won't introduce new memoized nodes


            invokeForEachNodeInContinuousRange(firstNode, lastNode, function (node) {
              if (node.nodeType === 1 || node.nodeType === 8) ko.applyBindings(bindingContext, node);
            });
            invokeForEachNodeInContinuousRange(firstNode, lastNode, function (node) {
              if (node.nodeType === 1 || node.nodeType === 8) ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
            }); // Make sure any changes done by applyBindings or unmemoize are reflected in the array

            ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
          }
        }

        function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
          return nodeOrNodeArray.nodeType ? nodeOrNodeArray : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0] : null;
        }

        function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
          options = options || {};
          var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
          var templateDocument = firstTargetNode && firstTargetNode.ownerDocument;
          var templateEngineToUse = options['templateEngine'] || _templateEngine;
          ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
          var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument); // Loosely check result is an array of DOM nodes

          if (typeof renderedNodesArray.length != "number" || renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number") throw new Error("Template engine must return an array of DOM nodes");
          var haveAddedNodesToParent = false;

          switch (renderMode) {
            case "replaceChildren":
              ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
              haveAddedNodesToParent = true;
              break;

            case "replaceNode":
              ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
              haveAddedNodesToParent = true;
              break;

            case "ignoreTargetNode":
              break;

            default:
              throw new Error("Unknown renderMode: " + renderMode);
          }

          if (haveAddedNodesToParent) {
            activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
            if (options['afterRender']) ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
          }

          return renderedNodesArray;
        }

        ko.renderTemplate = function (template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
          options = options || {};
          if ((options['templateEngine'] || _templateEngine) == undefined) throw new Error("Set a template engine before calling renderTemplate");
          renderMode = renderMode || "replaceChildren";

          if (targetNodeOrNodeArray) {
            var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);

            var whenToDispose = function whenToDispose() {
              return !firstTargetNode || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode);
            }; // Passive disposal (on next evaluation)


            var activelyDisposeWhenNodeIsRemoved = firstTargetNode && renderMode == "replaceNode" ? firstTargetNode.parentNode : firstTargetNode;
            return ko.dependentObservable( // So the DOM is automatically updated when any dependency changes
            function () {
              // Ensure we've got a proper binding context to work with
              var bindingContext = dataOrBindingContext && dataOrBindingContext instanceof ko.bindingContext ? dataOrBindingContext : new ko.bindingContext(ko.utils.unwrapObservable(dataOrBindingContext)); // Support selecting template as a function of the data being rendered

              var templateName = typeof template == 'function' ? template(bindingContext['$data'], bindingContext) : template;
              var renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);

              if (renderMode == "replaceNode") {
                targetNodeOrNodeArray = renderedNodesArray;
                firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
              }
            }, null, {
              disposeWhen: whenToDispose,
              disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved
            });
          } else {
            // We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
            return ko.memoization.memoize(function (domNode) {
              ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
            });
          }
        };

        ko.renderTemplateForEach = function (template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
          // Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
          // activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
          var arrayItemContext; // This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode

          var executeTemplateForArrayItem = function executeTemplateForArrayItem(arrayValue, index) {
            // Support selecting template as a function of the data being rendered
            arrayItemContext = parentBindingContext['createChildContext'](arrayValue, options['as'], function (context) {
              context['$index'] = index;
            });
            var templateName = typeof template == 'function' ? template(arrayValue, arrayItemContext) : template;
            return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
          }; // This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode


          var activateBindingsCallback = function activateBindingsCallback(arrayValue, addedNodesArray, index) {
            activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
            if (options['afterRender']) options['afterRender'](addedNodesArray, arrayValue);
          };

          return ko.dependentObservable(function () {
            var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
            if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
              unwrappedArray = [unwrappedArray]; // Filter out any entries marked as destroyed

            var filteredArray = ko.utils.arrayFilter(unwrappedArray, function (item) {
              return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
            }); // Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
            // If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.

            ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);
          }, null, {
            disposeWhenNodeIsRemoved: targetNode
          });
        };

        var templateComputedDomDataKey = ko.utils.domData.nextKey();

        function disposeOldComputedAndStoreNewOne(element, newComputed) {
          var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
          if (oldComputed && typeof oldComputed.dispose == 'function') oldComputed.dispose();
          ko.utils.domData.set(element, templateComputedDomDataKey, newComputed && newComputed.isActive() ? newComputed : undefined);
        }

        ko.bindingHandlers['template'] = {
          'init': function init(element, valueAccessor) {
            // Support anonymous templates
            var bindingValue = ko.utils.unwrapObservable(valueAccessor());

            if (typeof bindingValue == "string" || bindingValue['name']) {
              // It's a named template - clear the element
              ko.virtualElements.emptyNode(element);
            } else {
              // It's an anonymous template - store the element contents, then clear the element
              var templateNodes = ko.virtualElements.childNodes(element),
                  container = ko.utils.moveCleanedNodesToContainerElement(templateNodes); // This also removes the nodes from their current parent

              new ko.templateSources.anonymousTemplate(element)['nodes'](container);
            }

            return {
              'controlsDescendantBindings': true
            };
          },
          'update': function update(element, valueAccessor, allBindings, viewModel, bindingContext) {
            var templateName = ko.utils.unwrapObservable(valueAccessor()),
                options = {},
                shouldDisplay = true,
                dataValue,
                templateComputed = null;

            if (typeof templateName != "string") {
              options = templateName;
              templateName = ko.utils.unwrapObservable(options['name']); // Support "if"/"ifnot" conditions

              if ('if' in options) shouldDisplay = ko.utils.unwrapObservable(options['if']);
              if (shouldDisplay && 'ifnot' in options) shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);
              dataValue = ko.utils.unwrapObservable(options['data']);
            }

            if ('foreach' in options) {
              // Render once for each data point (treating data set as empty if shouldDisplay==false)
              var dataArray = shouldDisplay && options['foreach'] || [];
              templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
            } else if (!shouldDisplay) {
              ko.virtualElements.emptyNode(element);
            } else {
              // Render once for this single data point (or use the viewModel if no data was provided)
              var innerBindingContext = 'data' in options ? bindingContext['createChildContext'](dataValue, options['as']) : // Given an explitit 'data' value, we create a child binding context for it
              bindingContext; // Given no explicit 'data' value, we retain the same binding context

              templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
            } // It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)


            disposeOldComputedAndStoreNewOne(element, templateComputed);
          }
        }; // Anonymous templates can't be rewritten. Give a nice error message if you try to do it.

        ko.expressionRewriting.bindingRewriteValidators['template'] = function (bindingValue) {
          var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);
          if (parsedBindingValue.length == 1 && parsedBindingValue[0]['unknown']) return null; // It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)

          if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name")) return null; // Named templates can be rewritten, so return "no error"

          return "This template engine does not support anonymous templates nested within its templates";
        };

        ko.virtualElements.allowedBindings['template'] = true;
      })();

      ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
      ko.exportSymbol('renderTemplate', ko.renderTemplate);

      ko.utils.compareArrays = function () {
        var statusNotInOld = 'added',
            statusNotInNew = 'deleted'; // Simple calculation based on Levenshtein distance.

        function compareArrays(oldArray, newArray, options) {
          // For backward compatibility, if the third arg is actually a bool, interpret
          // it as the old parameter 'dontLimitMoves'. Newer code should use { dontLimitMoves: true }.
          options = typeof options === 'boolean' ? {
            'dontLimitMoves': options
          } : options || {};
          oldArray = oldArray || [];
          newArray = newArray || [];
          if (oldArray.length <= newArray.length) return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, options);else return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, options);
        }

        function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, options) {
          var myMin = Math.min,
              myMax = Math.max,
              editDistanceMatrix = [],
              smlIndex,
              smlIndexMax = smlArray.length,
              bigIndex,
              bigIndexMax = bigArray.length,
              compareRange = bigIndexMax - smlIndexMax || 1,
              maxDistance = smlIndexMax + bigIndexMax + 1,
              thisRow,
              lastRow,
              bigIndexMaxForRow,
              bigIndexMinForRow;

          for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
            lastRow = thisRow;
            editDistanceMatrix.push(thisRow = []);
            bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
            bigIndexMinForRow = myMax(0, smlIndex - 1);

            for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
              if (!bigIndex) thisRow[bigIndex] = smlIndex + 1;else if (!smlIndex) // Top row - transform empty array into new array via additions
                thisRow[bigIndex] = bigIndex + 1;else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1]) thisRow[bigIndex] = lastRow[bigIndex - 1]; // copy value (no edit)
              else {
                  var northDistance = lastRow[bigIndex] || maxDistance; // not in big (deletion)

                  var westDistance = thisRow[bigIndex - 1] || maxDistance; // not in small (addition)

                  thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                }
            }
          }

          var editScript = [],
              meMinusOne,
              notInSml = [],
              notInBig = [];

          for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex;) {
            meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;

            if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex - 1]) {
              notInSml.push(editScript[editScript.length] = {
                // added
                'status': statusNotInSml,
                'value': bigArray[--bigIndex],
                'index': bigIndex
              });
            } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
              notInBig.push(editScript[editScript.length] = {
                // deleted
                'status': statusNotInBig,
                'value': smlArray[--smlIndex],
                'index': smlIndex
              });
            } else {
              --bigIndex;
              --smlIndex;

              if (!options['sparse']) {
                editScript.push({
                  'status': "retained",
                  'value': bigArray[bigIndex]
                });
              }
            }
          }

          if (notInSml.length && notInBig.length) {
            // Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
            // smlIndexMax keeps the time complexity of this algorithm linear.
            var limitFailedCompares = smlIndexMax * 10,
                failedCompares,
                a,
                d,
                notInSmlItem,
                notInBigItem; // Go through the items that have been added and deleted and try to find matches between them.

            for (failedCompares = a = 0; (options['dontLimitMoves'] || failedCompares < limitFailedCompares) && (notInSmlItem = notInSml[a]); a++) {
              for (d = 0; notInBigItem = notInBig[d]; d++) {
                if (notInSmlItem['value'] === notInBigItem['value']) {
                  notInSmlItem['moved'] = notInBigItem['index'];
                  notInBigItem['moved'] = notInSmlItem['index'];
                  notInBig.splice(d, 1); // This item is marked as moved; so remove it from notInBig list

                  failedCompares = d = 0; // Reset failed compares count because we're checking for consecutive failures

                  break;
                }
              }

              failedCompares += d;
            }
          }

          return editScript.reverse();
        }

        return compareArrays;
      }();

      ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);

      (function () {
        // Objective:
        // * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
        //   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
        // * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
        //   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
        //   previously mapped - retain those nodes, and just insert/delete other ones
        // "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
        // You can use this, for example, to activate bindings on those nodes.
        function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
          // Map this array value inside a dependentObservable so we re-map when any dependency changes
          var mappedNodes = [];
          var dependentObservable = ko.dependentObservable(function () {
            var newMappedNodes = mapping(valueToMap, index, ko.utils.fixUpContinuousNodeArray(mappedNodes, containerNode)) || []; // On subsequent evaluations, just replace the previously-inserted DOM nodes

            if (mappedNodes.length > 0) {
              ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
              if (callbackAfterAddingNodes) ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
            } // Replace the contents of the mappedNodes array, thereby updating the record
            // of which nodes would be deleted if valueToMap was itself later removed


            mappedNodes.splice(0, mappedNodes.length);
            ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
          }, null, {
            disposeWhenNodeIsRemoved: containerNode,
            disposeWhen: function disposeWhen() {
              return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes);
            }
          });
          return {
            mappedNodes: mappedNodes,
            dependentObservable: dependentObservable.isActive() ? dependentObservable : undefined
          };
        }

        var lastMappingResultDomDataKey = ko.utils.domData.nextKey();

        ko.utils.setDomNodeChildrenFromArrayMapping = function (domNode, array, mapping, options, callbackAfterAddingNodes) {
          // Compare the provided array against the previous one
          array = array || [];
          options = options || {};
          var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
          var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
          var lastArray = ko.utils.arrayMap(lastMappingResult, function (x) {
            return x.arrayEntry;
          });
          var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']); // Build the new mapping result

          var newMappingResult = [];
          var lastMappingResultIndex = 0;
          var newMappingResultIndex = 0;
          var nodesToDelete = [];
          var itemsToProcess = [];
          var itemsForBeforeRemoveCallbacks = [];
          var itemsForMoveCallbacks = [];
          var itemsForAfterAddCallbacks = [];
          var mapData;

          function itemMovedOrRetained(editScriptIndex, oldPosition) {
            mapData = lastMappingResult[oldPosition];
            if (newMappingResultIndex !== oldPosition) itemsForMoveCallbacks[editScriptIndex] = mapData; // Since updating the index might change the nodes, do so before calling fixUpContinuousNodeArray

            mapData.indexObservable(newMappingResultIndex++);
            ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode);
            newMappingResult.push(mapData);
            itemsToProcess.push(mapData);
          }

          function callCallback(callback, items) {
            if (callback) {
              for (var i = 0, n = items.length; i < n; i++) {
                if (items[i]) {
                  ko.utils.arrayForEach(items[i].mappedNodes, function (node) {
                    callback(node, i, items[i].arrayEntry);
                  });
                }
              }
            }
          }

          for (var i = 0, editScriptItem, movedIndex; editScriptItem = editScript[i]; i++) {
            movedIndex = editScriptItem['moved'];

            switch (editScriptItem['status']) {
              case "deleted":
                if (movedIndex === undefined) {
                  mapData = lastMappingResult[lastMappingResultIndex]; // Stop tracking changes to the mapping for these nodes

                  if (mapData.dependentObservable) mapData.dependentObservable.dispose(); // Queue these nodes for later removal

                  nodesToDelete.push.apply(nodesToDelete, ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode));

                  if (options['beforeRemove']) {
                    itemsForBeforeRemoveCallbacks[i] = mapData;
                    itemsToProcess.push(mapData);
                  }
                }

                lastMappingResultIndex++;
                break;

              case "retained":
                itemMovedOrRetained(i, lastMappingResultIndex++);
                break;

              case "added":
                if (movedIndex !== undefined) {
                  itemMovedOrRetained(i, movedIndex);
                } else {
                  mapData = {
                    arrayEntry: editScriptItem['value'],
                    indexObservable: ko.observable(newMappingResultIndex++)
                  };
                  newMappingResult.push(mapData);
                  itemsToProcess.push(mapData);
                  if (!isFirstExecution) itemsForAfterAddCallbacks[i] = mapData;
                }

                break;
            }
          } // Call beforeMove first before any changes have been made to the DOM


          callCallback(options['beforeMove'], itemsForMoveCallbacks); // Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)

          ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode); // Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)

          for (var i = 0, nextNode = ko.virtualElements.firstChild(domNode), lastNode, node; mapData = itemsToProcess[i]; i++) {
            // Get nodes for newly added items
            if (!mapData.mappedNodes) ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable)); // Put nodes in the right place if they aren't there already

            for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
              if (node !== nextNode) ko.virtualElements.insertAfter(domNode, node, lastNode);
            } // Run the callbacks for newly added nodes (for example, to apply bindings, etc.)


            if (!mapData.initialized && callbackAfterAddingNodes) {
              callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
              mapData.initialized = true;
            }
          } // If there's a beforeRemove callback, call it after reordering.
          // Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
          // some sort of animation, which is why we first reorder the nodes that will be removed. If the
          // callback instead removes the nodes right away, it would be more efficient to skip reordering them.
          // Perhaps we'll make that change in the future if this scenario becomes more common.


          callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks); // Finally call afterMove and afterAdd callbacks

          callCallback(options['afterMove'], itemsForMoveCallbacks);
          callCallback(options['afterAdd'], itemsForAfterAddCallbacks); // Store a copy of the array items we just considered so we can difference it next time

          ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);
        };
      })();

      ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);

      ko.nativeTemplateEngine = function () {
        this['allowTemplateRewriting'] = false;
      };

      ko.nativeTemplateEngine.prototype = new ko.templateEngine();
      ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;

      ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options) {
        var useNodesIfAvailable = !(ko.utils.ieVersion < 9),
            // IE<9 cloneNode doesn't work properly
        templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
            templateNodes = templateNodesFunc ? templateSource['nodes']() : null;

        if (templateNodes) {
          return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
        } else {
          var templateText = templateSource['text']();
          return ko.utils.parseHtmlFragment(templateText);
        }
      };

      ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
      ko.setTemplateEngine(ko.nativeTemplateEngine.instance);
      ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);

      (function () {
        ko.jqueryTmplTemplateEngine = function () {
          // Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
          // doesn't expose a version number, so we have to infer it.
          // Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
          // which KO internally refers to as version "2", so older versions are no longer detected.
          var jQueryTmplVersion = this.jQueryTmplVersion = function () {
            if (typeof jQuery == "undefined" || !jQuery['tmpl']) return 0; // Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.

            try {
              if (jQuery['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                // Since 1.0.0pre, custom tags should append markup to an array called "__"
                return 2; // Final version of jquery.tmpl
              }
            } catch (ex) {
              /* Apparently not the version we were looking for */
            }

            return 1; // Any older version that we don't support
          }();

          function ensureHasReferencedJQueryTemplates() {
            if (jQueryTmplVersion < 2) throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
          }

          function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
            return jQuery['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
          }

          this['renderTemplateSource'] = function (templateSource, bindingContext, options) {
            options = options || {};
            ensureHasReferencedJQueryTemplates(); // Ensure we have stored a precompiled version of this template (don't want to reparse on every render)

            var precompiled = templateSource['data']('precompiled');

            if (!precompiled) {
              var templateText = templateSource['text']() || ""; // Wrap in "with($whatever.koBindingContext) { ... }"

              templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";
              precompiled = jQuery['template'](null, templateText);
              templateSource['data']('precompiled', precompiled);
            }

            var data = [bindingContext['$data']]; // Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays

            var jQueryTemplateOptions = jQuery['extend']({
              'koBindingContext': bindingContext
            }, options['templateOptions']);
            var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
            resultNodes['appendTo'](document.createElement("div")); // Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work

            jQuery['fragments'] = {}; // Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders

            return resultNodes;
          };

          this['createJavaScriptEvaluatorBlock'] = function (script) {
            return "{{ko_code ((function() { return " + script + " })()) }}";
          };

          this['addTemplate'] = function (templateName, templateMarkup) {
            document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
          };

          if (jQueryTmplVersion > 0) {
            jQuery['tmpl']['tag']['ko_code'] = {
              open: "__.push($1 || '');"
            };
            jQuery['tmpl']['tag']['ko_with'] = {
              open: "with($1) {",
              close: "} "
            };
          }
        };

        ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
        ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine; // Use this one by default *only if jquery.tmpl is referenced*

        var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
        if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0) ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);
        ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
      })();
    });
  })();
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./spec/knockout-classBindingProvider.spec.js":
/*!****************************************************!*\
  !*** ./spec/knockout-classBindingProvider.spec.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.debug.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dist_knockout_classBindingProvider_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/knockout-classBindingProvider.min */ "./dist/knockout-classBindingProvider.min.js");
/* harmony import */ var _dist_knockout_classBindingProvider_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_knockout_classBindingProvider_min__WEBPACK_IMPORTED_MODULE_1__);


knockout__WEBPACK_IMPORTED_MODULE_0___default.a.classBindingProvider = _dist_knockout_classBindingProvider_min__WEBPACK_IMPORTED_MODULE_1___default.a;
describe("knockout-classBindingProvider", function () {
  var instance;
  beforeEach(function () {
    instance = new _dist_knockout_classBindingProvider_min__WEBPACK_IMPORTED_MODULE_1___default.a();
  });
  it("should create the binding provider", function () {
    expect(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.classBindingProvider).toBeDefined();
  });
  describe("constructing a classBindingProvider", function () {
    it("should read the bindings object", function () {
      var bindings = {
        one: {
          text: "test"
        }
      };
      instance = new knockout__WEBPACK_IMPORTED_MODULE_0___default.a.classBindingProvider(bindings);
      expect(instance.bindings).toEqual(bindings);
    });
    it("should use a default attribute of 'data-class'", function () {
      expect(instance.attribute).toEqual("data-class");
    });
    it("should use a default fallback value of false", function () {
      expect(instance.fallback).toBeFalsy();
    });
    it("should respect an override attribute", function () {
      instance = new knockout__WEBPACK_IMPORTED_MODULE_0___default.a.classBindingProvider({}, {
        attribute: "data-test"
      });
      expect(instance.attribute).toEqual("data-test");
    });
    it("should respect an override virtual attribute", function () {
      instance = new knockout__WEBPACK_IMPORTED_MODULE_0___default.a.classBindingProvider({}, {
        virtualAttribute: "test"
      });
      expect(instance.virtualAttribute).toEqual("ko test:");
    });
    it("should respect an override fallback value", function () {
      instance = new knockout__WEBPACK_IMPORTED_MODULE_0___default.a.classBindingProvider({}, {
        fallback: true
      });
      expect(instance.fallback).toBeTruthy();
    });
  });
  describe("nodeHasBindings", function () {
    it("should identify elements with data-class", function () {
      var div = document.createElement("div");
      div.setAttribute("data-class", "one");
      expect(instance.nodeHasBindings(div)).toBeTruthy();
    });
    it("should not identify elements that do not have a data-class attribute", function () {
      var div = document.createElement("div");
      div.setAttribute("data-bind", "one");
      expect(instance.nodeHasBindings(div)).toBeFalsy();
    });
    it("should identify comments with ko class:", function () {
      var comment = document.createComment("ko class: one");
      expect(instance.nodeHasBindings(comment)).toBeTruthy();
    });
    it("should not identify comments that do not have ko class:", function () {
      var comment = document.createComment("ko with: one");
      expect(instance.nodeHasBindings(comment)).toBeFalsy();
    });
    it("should identify elements with a custom attribute name", function () {
      var div = document.createElement("div");
      div.className = "one";
      instance.attribute = "class";
      expect(instance.nodeHasBindings(div)).toBeTruthy();
    });
    it("should identify comments with a custom virtual attribute name", function () {
      var comment = document.createComment("ko test: one");
      instance.virtualAttribute = "ko test:";
      expect(instance.nodeHasBindings(comment)).toBeTruthy();
    });
    it("should identify elements with data-bind attributes when fallback is true", function () {
      var div = document.createElement("div");
      div.setAttribute("data-bind", "text: one");
      instance.fallback = true;
      expect(instance.nodeHasBindings(div)).toBeTruthy();
    });
  });
  describe("getBindingAccessors", function () {
    describe("when using a single class", function () {
      describe("for elements", function () {
        var div;
        beforeEach(function () {
          div = document.createElement("div");
          div.setAttribute("data-class", "one");
        });
        it("should return the appropriate bindings for an element", function () {
          instance.bindings.one = {
            text: "test",
            visible: true
          };
          expect(instance.getBindingAccessors(div).text()).toEqual("test");
          expect(instance.getBindingAccessors(div).visible()).toEqual(true);
        });
        it("should execute the binding with the data as the value of 'this'", function () {
          var valueOfThis,
              data = {};

          instance.bindings.one = function (context) {
            valueOfThis = this;
          };

          instance.getBindingAccessors(div, {
            $data: data
          });
          expect(valueOfThis).toEqual(data);
        });
        it("should pass appropriate arguments when executing the binding", function () {
          var bindingSpy = jasmine.createSpy("binding"),
              context = {
            $data: {}
          };
          instance.bindings.one = bindingSpy;
          instance.getBindingAccessors(div, context);
          expect(bindingSpy).toHaveBeenCalled();
          expect(bindingSpy.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpy.mostRecentCall.args[1][0]).toEqual("one");
        });
        it("should ignore a class that does not exist in the bindings for an element", function () {
          expect(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON(instance.getBindingAccessors(div))).toEqual("{}");
        });
        it("should return the appropriate bindings when using a custom attribute", function () {
          instance.bindings.one = {
            text: "test",
            visible: true
          };
          instance.attribute = "data-test";
          div = document.createElement("div");
          div.setAttribute("data-test", "one");
          expect(instance.getBindingAccessors(div).text()).toEqual("test");
          expect(instance.getBindingAccessors(div).visible()).toEqual(true);
        });
      });
      describe("for comments", function () {
        var comment;
        beforeEach(function () {
          comment = document.createComment("ko class: one");
        });
        it("should return the appropriate bindings for a comment", function () {
          instance.bindings.one = {
            text: "test",
            visible: true
          };
          expect(instance.getBindingAccessors(comment).text()).toEqual("test");
          expect(instance.getBindingAccessors(comment).visible()).toEqual(true);
        });
        it("should execute the binding with the data as the value of 'this'", function () {
          var valueOfThis,
              data = {};

          instance.bindings.one = function (context) {
            valueOfThis = this;
          };

          instance.getBindingAccessors(comment, {
            $data: data
          });
          expect(valueOfThis).toEqual(data);
        });
        it("should pass appropriate arguments when executing the binding", function () {
          var bindingSpy = jasmine.createSpy("binding"),
              context = {
            $data: {}
          };
          instance.bindings.one = bindingSpy;
          instance.getBindingAccessors(comment, context);
          expect(bindingSpy).toHaveBeenCalled();
          expect(bindingSpy.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpy.mostRecentCall.args[1][0]).toEqual("one");
        });
        it("should ignore a class that does not exist in the bindings for a comment", function () {
          expect(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON(instance.getBindingAccessors(comment))).toEqual("{}");
        });
        it("should return the appropriate bindings when using a custom virtual attribute", function () {
          instance.bindings.one = {
            text: "test",
            visible: true
          };
          instance.virtualAttribute = "ko test:";
          comment = document.createComment("ko test: one");
          expect(instance.getBindingAccessors(comment).text()).toEqual("test");
          expect(instance.getBindingAccessors(comment).visible()).toEqual(true);
        });
      });
    });
    describe("when using multiple classes", function () {
      describe("for elements", function () {
        var div;
        beforeEach(function () {
          div = document.createElement("div");
        });
        it("should return the appropriate bindings", function () {
          div.setAttribute("data-class", "one two");
          instance.bindings = {
            one: {
              text: "test"
            },
            two: {
              visible: true
            }
          };
          expect(instance.getBindingAccessors(div).text()).toEqual("test");
          expect(instance.getBindingAccessors(div).visible()).toEqual(true);
        });
        it("should execute the binding with the data as the value of 'this'", function () {
          var valueOfThisOne,
              valueOfThisTwo,
              data = {};
          div.setAttribute("data-class", "one two");

          instance.bindings.one = function (context) {
            valueOfThisOne = this;
          };

          instance.bindings.two = function (context) {
            valueOfThisTwo = this;
          };

          instance.getBindingAccessors(div, {
            $data: data
          });
          expect(valueOfThisOne).toEqual(data);
          expect(valueOfThisTwo).toEqual(data);
        });
        it("should pass appropriate arguments when executing the binding", function () {
          var bindingSpyOne = jasmine.createSpy("bindingOne"),
              bindingSpyTwo = jasmine.createSpy("bindingTwo"),
              context = {
            $data: {}
          };
          div.setAttribute("data-class", "one two");
          instance.bindings.one = bindingSpyOne;
          instance.bindings.two = bindingSpyTwo;
          instance.getBindingAccessors(div, context);
          expect(bindingSpyOne).toHaveBeenCalled();
          expect(bindingSpyOne.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpyOne.mostRecentCall.args[1][0]).toEqual("one");
          expect(bindingSpyOne.mostRecentCall.args[1][1]).toEqual("two");
          expect(bindingSpyTwo).toHaveBeenCalled();
          expect(bindingSpyTwo.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpyTwo.mostRecentCall.args[1][0]).toEqual("one");
          expect(bindingSpyTwo.mostRecentCall.args[1][1]).toEqual("two");
        });
        it("should ignore extra whitespace", function () {
          var bindingSpyOne = jasmine.createSpy("bindingOne"),
              bindingSpyTwo = jasmine.createSpy("bindingTwo"),
              context = {
            $data: {}
          };
          div.setAttribute("data-class", "           one         two               ");
          instance.bindings.one = bindingSpyOne;
          instance.bindings.two = bindingSpyTwo;
          instance.getBindingAccessors(div, context);
          expect(bindingSpyOne).toHaveBeenCalled();
          expect(bindingSpyOne.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpyOne.mostRecentCall.args[1][0]).toEqual("one");
          expect(bindingSpyOne.mostRecentCall.args[1][1]).toEqual("two");
          expect(bindingSpyOne.mostRecentCall.args[1].length).toEqual(2);
          expect(bindingSpyTwo).toHaveBeenCalled();
          expect(bindingSpyTwo.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpyTwo.mostRecentCall.args[1][0]).toEqual("one");
          expect(bindingSpyTwo.mostRecentCall.args[1][1]).toEqual("two");
          expect(bindingSpyTwo.mostRecentCall.args[1].length).toEqual(2);
        });
        it("should ignore a single class that does not exist from the list of classes for an element", function () {
          div.setAttribute("data-class", "one three");
          instance.bindings = {
            one: {
              text: "test"
            },
            two: {
              visible: true
            }
          };
          expect(instance.getBindingAccessors(div).text()).toEqual("test");
          expect(instance.getBindingAccessors(div).visible).toBeUndefined;
        });
        it("should properly ignore a case where all bindings do not exist", function () {
          div.setAttribute("data-class", "three four");
          instance.bindings = {
            one: {
              text: "test"
            },
            two: {
              visible: true
            }
          };
          expect(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON(instance.getBindingAccessors(div))).toEqual("{}");
        });
      });
      describe("for comments", function () {
        it("should return the appropriate bindings for a comment", function () {
          var comment = document.createComment("ko class: one two");
          instance.bindings = {
            one: {
              text: "test"
            },
            two: {
              visible: true
            }
          };
          expect(instance.getBindingAccessors(comment).text()).toEqual("test");
          expect(instance.getBindingAccessors(comment).visible()).toEqual(true);
        });
        it("should execute the binding with the data as the value of 'this'", function () {
          var valueOfThisOne,
              valueOfThisTwo,
              data = {},
              comment = document.createComment("ko class: one two");

          instance.bindings.one = function (context) {
            valueOfThisOne = this;
          };

          instance.bindings.two = function (context) {
            valueOfThisTwo = this;
          };

          instance.getBindingAccessors(comment, {
            $data: data
          });
          expect(valueOfThisOne).toEqual(data);
          expect(valueOfThisTwo).toEqual(data);
        });
        it("should pass appropriate arguments when executing the binding", function () {
          var bindingSpyOne = jasmine.createSpy("bindingOne"),
              bindingSpyTwo = jasmine.createSpy("bindingTwo"),
              context = {
            $data: {}
          },
              comment = document.createComment("ko class: one two");
          instance.bindings.one = bindingSpyOne;
          instance.bindings.two = bindingSpyTwo;
          instance.getBindingAccessors(comment, context);
          expect(bindingSpyOne).toHaveBeenCalled();
          expect(bindingSpyOne.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpyOne.mostRecentCall.args[1][0]).toEqual("one");
          expect(bindingSpyOne.mostRecentCall.args[1][1]).toEqual("two");
          expect(bindingSpyTwo).toHaveBeenCalled();
          expect(bindingSpyTwo.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpyTwo.mostRecentCall.args[1][0]).toEqual("one");
          expect(bindingSpyTwo.mostRecentCall.args[1][1]).toEqual("two");
        });
        it("should ignore extra whitespace", function () {
          var bindingSpyOne = jasmine.createSpy("bindingOne"),
              bindingSpyTwo = jasmine.createSpy("bindingTwo"),
              context = {
            $data: {}
          },
              comment = document.createComment("ko class:             one            two              ");
          instance.bindings.one = bindingSpyOne;
          instance.bindings.two = bindingSpyTwo;
          instance.getBindingAccessors(comment, context);
          expect(bindingSpyOne).toHaveBeenCalled();
          expect(bindingSpyOne.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpyOne.mostRecentCall.args[1][0]).toEqual("one");
          expect(bindingSpyOne.mostRecentCall.args[1][1]).toEqual("two");
          expect(bindingSpyOne.mostRecentCall.args[1].length).toEqual(2);
          expect(bindingSpyTwo).toHaveBeenCalled();
          expect(bindingSpyTwo.mostRecentCall.args[0]).toEqual(context);
          expect(bindingSpyTwo.mostRecentCall.args[1][0]).toEqual("one");
          expect(bindingSpyTwo.mostRecentCall.args[1][1]).toEqual("two");
          expect(bindingSpyTwo.mostRecentCall.args[1].length).toEqual(2);
        });
        it("should ignore a single class that does not exist from the list of classes for an element", function () {
          var comment = document.createComment("ko class: one three");
          instance.bindings = {
            one: {
              text: "test"
            },
            two: {
              visible: true
            }
          };
          expect(instance.getBindingAccessors(comment).text()).toEqual("test");
          expect(instance.getBindingAccessors(comment).visible).toBeUndefined();
        });
        it("should properly ignore a case where all bindings do not exist", function () {
          var comment = document.createComment("ko class: three four");
          instance.bindings = {
            one: {
              text: "test"
            },
            two: {
              visible: true
            }
          };
          expect(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON(instance.getBindingAccessors(comment))).toEqual("{}");
        });
      });
    });
  });
  describe("registerBindings", function () {
    beforeEach(function () {
      instance.bindings = {
        one: {
          text: "test"
        },
        two: {
          visible: true
        }
      };
    });
    it("should add bindings to the existing bindings", function () {
      instance.registerBindings({
        three: {
          enabled: false
        },
        four: {
          css: {
            active: true
          }
        }
      });
      expect(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON(instance.bindings.one)).toEqual(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON({
        text: "test"
      }));
      expect(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON(instance.bindings.two)).toEqual(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON({
        visible: true
      }));
      expect(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON(instance.bindings.three)).toEqual(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON({
        enabled: false
      }));
      expect(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON(instance.bindings.four)).toEqual(knockout__WEBPACK_IMPORTED_MODULE_0___default.a.toJSON({
        css: {
          active: true
        }
      }));
    });
  });
  describe("default bindingRouter", function () {
    beforeEach(function () {
      instance.bindings = {
        one: {
          two: {
            three: {
              text: "match on sub properties"
            }
          }
        },
        "one.two.three.four": {
          text: "match directly"
        }
      };
    });
    it("should follow binding path and find the binding", function () {
      expect(instance.bindingRouter("one.two.three", instance.bindings).text).toEqual("match on sub properties");
    });
    it("should match a property directly, even if it contains periods", function () {
      expect(instance.bindingRouter("one.two.three.four", instance.bindings).text).toEqual("match directly");
    });
  });
  describe("when Knockout uses this binding provider", function () {
    describe("with default settings", function () {
      beforeEach(function () {
        knockout__WEBPACK_IMPORTED_MODULE_0___default.a.bindingProvider.instance = instance;
      });
      describe("for elements", function () {
        it("should execute the appropriate bindings", function () {
          var div = document.createElement("div");
          div.setAttribute("data-class", "one two three.sub");
          instance.bindings = {
            one: {
              text: "test"
            },
            two: {
              visible: true
            },
            three: {
              sub: {
                attr: {
                  title: "title_test"
                }
              }
            }
          };
          knockout__WEBPACK_IMPORTED_MODULE_0___default.a.applyBindings({}, div);
          expect(div.innerText || div.textContent).toEqual("test");
          expect(div.style.display).toBeFalsy();
          expect(div.getAttribute("title")).toEqual("title_test");
        });
      });
      describe("for comments", function () {
        it("should execute the appropriate bindings", function () {
          var data = {
            testing: "test"
          },
              parent = document.createElement("div"),
              commentStart = document.createComment("ko class: one"),
              commentEnd = document.createComment("/ko"),
              child = document.createElement("div");
          parent.appendChild(commentStart);
          parent.appendChild(child);
          parent.appendChild(commentEnd);
          child.setAttribute("data-class", "two");
          instance.bindings = {
            one: {
              with: data
            },
            two: function two(context) {
              return {
                text: this.testing
              };
            }
          };
          knockout__WEBPACK_IMPORTED_MODULE_0___default.a.applyBindings({}, parent);
          expect(parent.childNodes[1].innerText || parent.childNodes[1].textContent).toEqual("test");
        });
      });
    });
    describe("with fallback true, a custom attribute, and a custom virtual attribute", function () {
      beforeEach(function () {
        knockout__WEBPACK_IMPORTED_MODULE_0___default.a.bindingProvider.instance = instance = new knockout__WEBPACK_IMPORTED_MODULE_0___default.a.classBindingProvider({}, {
          attribute: "data-klass",
          virtualAttribute: "klass",
          fallback: true
        });
      });
      describe("for elements", function () {
        it("should execute the appropriate bindings", function () {
          var div = document.createElement("div");
          div.setAttribute("data-klass", "one two");
          instance.bindings = {
            one: {
              text: "test"
            },
            two: {
              visible: true
            }
          };
          knockout__WEBPACK_IMPORTED_MODULE_0___default.a.applyBindings({}, div);
          expect(div.innerText || div.textContent).toEqual("test");
          expect(div.style.display).toBeFalsy();
        });
        it("should fallback to respecting data-bind attributes", function () {
          var div = document.createElement("div");
          div.setAttribute("data-bind", "text: 'test', visible: true");
          knockout__WEBPACK_IMPORTED_MODULE_0___default.a.applyBindings({}, div);
          expect(div.innerText || div.textContent).toEqual("test");
          expect(div.style.display).toBeFalsy();
        });
      });
      describe("for comments", function () {
        it("should execute the appropriate bindings", function () {
          var parent = document.createElement("div"),
              commentStart = document.createComment("ko klass: data"),
              commentEnd = document.createComment("/ko"),
              child = document.createElement("div"),
              childFallback = document.createElement("div");
          instance.bindings = {
            data: function data() {
              return {
                with: this.data
              };
            },
            one: function one() {
              return {
                text: this.testing
              };
            },
            two: {
              visible: true
            }
          };
          parent.appendChild(commentStart);
          parent.appendChild(child);
          parent.appendChild(childFallback);
          parent.appendChild(commentEnd);
          child.setAttribute("data-klass", "one two");
          childFallback.setAttribute("data-bind", "text: testing");
          knockout__WEBPACK_IMPORTED_MODULE_0___default.a.applyBindings({
            data: {
              testing: "test"
            }
          }, parent);
          expect(parent.childNodes[1].innerText || parent.childNodes[1].textContent).toEqual("test");
          expect(parent.childNodes[1].style.display).toBeFalsy();
          expect(parent.childNodes[2].innerText || parent.childNodes[2].textContent).toEqual("test");
        });
        it("should fallback to the appropriate bindings", function () {
          var parent = document.createElement("div"),
              commentStart = document.createComment("ko with: data"),
              commentEnd = document.createComment("/ko"),
              child = document.createElement("div"),
              childFallback = document.createElement("div");
          instance.bindings = {
            one: function one() {
              return {
                text: this.testing
              };
            },
            two: {
              visible: true
            }
          };
          parent.appendChild(commentStart);
          parent.appendChild(child);
          parent.appendChild(childFallback);
          parent.appendChild(commentEnd);
          child.setAttribute("data-klass", "one two");
          childFallback.setAttribute("data-bind", "text: testing");
          knockout__WEBPACK_IMPORTED_MODULE_0___default.a.applyBindings({
            data: {
              testing: "test"
            }
          }, parent);
          expect(parent.childNodes[1].innerText || parent.childNodes[1].textContent).toEqual("test");
          expect(parent.childNodes[1].style.display).toBeFalsy();
          expect(parent.childNodes[2].innerText || parent.childNodes[2].textContent).toEqual("test");
        });
      });
    });
    describe("with a custom binding router", function () {
      var router, bindings;
      beforeEach(function () {
        router = function router(className, bindings) {
          return {
            text: className
          };
        };

        bindings = {};
        knockout__WEBPACK_IMPORTED_MODULE_0___default.a.bindingProvider.instance = instance = new knockout__WEBPACK_IMPORTED_MODULE_0___default.a.classBindingProvider(bindings, {
          bindingRouter: router
        });
      });
      it("should call a custom binding router with the correct arguments", function () {
        var div = document.createElement("div");
        spyOn(instance, "bindingRouter");
        div.setAttribute("data-class", "one");
        knockout__WEBPACK_IMPORTED_MODULE_0___default.a.applyBindings({}, div);
        expect(instance.bindingRouter).toHaveBeenCalledWith("one", bindings);
      });
      it("should use the return value of the custom binding router as the binding", function () {
        var div = document.createElement("div");
        div.setAttribute("data-class", "one");
        knockout__WEBPACK_IMPORTED_MODULE_0___default.a.applyBindings({}, div);
        expect(div.innerText || div.textContent).toEqual("one");
      });
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=test.bundle.js.map