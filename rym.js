var rym = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends;
      var __assign;
      var __rest;
      var __decorate;
      var __param;
      var __metadata;
      var __awaiter;
      var __generator;
      var __exportStar;
      var __values;
      var __read;
      var __spread;
      var __spreadArrays;
      var __spreadArray;
      var __await;
      var __asyncGenerator;
      var __asyncDelegator;
      var __asyncValues;
      var __makeTemplateObject;
      var __importStar;
      var __importDefault;
      var __classPrivateFieldGet;
      var __classPrivateFieldSet;
      var __classPrivateFieldIn;
      var __createBinding;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter = function(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
              resolve(value);
            });
          }
          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }
            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }
            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        };
        __generator = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                  case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }
                    if (t && _.label < t[2]) {
                      _.label = t[2];
                      _.ops.push(op);
                      break;
                    }
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
        };
        __createBinding = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          var desc = Object.getOwnPropertyDescriptor(m, k);
          if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function() {
              return m[k];
            } };
          }
          Object.defineProperty(o, k2, desc);
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
          return ar;
        };
        __spreadArrays = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await = function(v) {
          return this instanceof __await ? (this.v = v, this) : new __await(v);
        };
        __asyncGenerator = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
                });
              };
          }
          function resume(n, v) {
            try {
              step(g[n](v));
            } catch (e) {
              settle(q[0][3], e);
            }
          }
          function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        __classPrivateFieldIn = function(state, receiver) {
          if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
            throw new TypeError("Cannot use 'in' operator on non-object");
          return typeof state === "function" ? receiver === state : state.has(receiver);
        };
        exporter("__extends", __extends);
        exporter("__assign", __assign);
        exporter("__rest", __rest);
        exporter("__decorate", __decorate);
        exporter("__param", __param);
        exporter("__metadata", __metadata);
        exporter("__awaiter", __awaiter);
        exporter("__generator", __generator);
        exporter("__exportStar", __exportStar);
        exporter("__createBinding", __createBinding);
        exporter("__values", __values);
        exporter("__read", __read);
        exporter("__spread", __spread);
        exporter("__spreadArrays", __spreadArrays);
        exporter("__spreadArray", __spreadArray);
        exporter("__await", __await);
        exporter("__asyncGenerator", __asyncGenerator);
        exporter("__asyncDelegator", __asyncDelegator);
        exporter("__asyncValues", __asyncValues);
        exporter("__makeTemplateObject", __makeTemplateObject);
        exporter("__importStar", __importStar);
        exporter("__importDefault", __importDefault);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet);
        exporter("__classPrivateFieldIn", __classPrivateFieldIn);
      });
    }
  });

  // node_modules/cheerio/lib/types.js
  var require_types = __commonJS({
    "node_modules/cheerio/lib/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
    }
  });

  // node_modules/cheerio/lib/options.js
  var require_options = __commonJS({
    "node_modules/cheerio/lib/options.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.flatten = void 0;
      var tslib_1 = require_tslib();
      var defaultOpts = {
        xml: false,
        decodeEntities: true
      };
      exports.default = defaultOpts;
      var xmlModeDefault = {
        _useHtmlParser2: true,
        xmlMode: true
      };
      function flatten(options) {
        return (options === null || options === void 0 ? void 0 : options.xml) ? typeof options.xml === "boolean" ? xmlModeDefault : tslib_1.__assign(tslib_1.__assign({}, xmlModeDefault), options.xml) : options !== null && options !== void 0 ? options : void 0;
      }
      exports.flatten = flatten;
    }
  });

  // node_modules/css-what/lib/commonjs/types.js
  var require_types2 = __commonJS({
    "node_modules/css-what/lib/commonjs/types.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.AttributeAction = exports.IgnoreCaseMode = exports.SelectorType = void 0;
      var SelectorType;
      (function(SelectorType2) {
        SelectorType2["Attribute"] = "attribute";
        SelectorType2["Pseudo"] = "pseudo";
        SelectorType2["PseudoElement"] = "pseudo-element";
        SelectorType2["Tag"] = "tag";
        SelectorType2["Universal"] = "universal";
        SelectorType2["Adjacent"] = "adjacent";
        SelectorType2["Child"] = "child";
        SelectorType2["Descendant"] = "descendant";
        SelectorType2["Parent"] = "parent";
        SelectorType2["Sibling"] = "sibling";
        SelectorType2["ColumnCombinator"] = "column-combinator";
      })(SelectorType = exports.SelectorType || (exports.SelectorType = {}));
      exports.IgnoreCaseMode = {
        Unknown: null,
        QuirksMode: "quirks",
        IgnoreCase: true,
        CaseSensitive: false
      };
      var AttributeAction;
      (function(AttributeAction2) {
        AttributeAction2["Any"] = "any";
        AttributeAction2["Element"] = "element";
        AttributeAction2["End"] = "end";
        AttributeAction2["Equals"] = "equals";
        AttributeAction2["Exists"] = "exists";
        AttributeAction2["Hyphen"] = "hyphen";
        AttributeAction2["Not"] = "not";
        AttributeAction2["Start"] = "start";
      })(AttributeAction = exports.AttributeAction || (exports.AttributeAction = {}));
    }
  });

  // node_modules/css-what/lib/commonjs/parse.js
  var require_parse = __commonJS({
    "node_modules/css-what/lib/commonjs/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parse = exports.isTraversal = void 0;
      var types_1 = require_types2();
      var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
      var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
      var actionTypes = /* @__PURE__ */ new Map([
        [126, types_1.AttributeAction.Element],
        [94, types_1.AttributeAction.Start],
        [36, types_1.AttributeAction.End],
        [42, types_1.AttributeAction.Any],
        [33, types_1.AttributeAction.Not],
        [124, types_1.AttributeAction.Hyphen]
      ]);
      var unpackPseudos = /* @__PURE__ */ new Set([
        "has",
        "not",
        "matches",
        "is",
        "where",
        "host",
        "host-context"
      ]);
      function isTraversal(selector) {
        switch (selector.type) {
          case types_1.SelectorType.Adjacent:
          case types_1.SelectorType.Child:
          case types_1.SelectorType.Descendant:
          case types_1.SelectorType.Parent:
          case types_1.SelectorType.Sibling:
          case types_1.SelectorType.ColumnCombinator:
            return true;
          default:
            return false;
        }
      }
      exports.isTraversal = isTraversal;
      var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
      function funescape(_, escaped, escapedWhitespace) {
        var high = parseInt(escaped, 16) - 65536;
        return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
      }
      function unescapeCSS(str) {
        return str.replace(reEscape, funescape);
      }
      function isQuote(c) {
        return c === 39 || c === 34;
      }
      function isWhitespace(c) {
        return c === 32 || c === 9 || c === 10 || c === 12 || c === 13;
      }
      function parse(selector) {
        var subselects = [];
        var endIndex = parseSelector(subselects, "".concat(selector), 0);
        if (endIndex < selector.length) {
          throw new Error("Unmatched selector: ".concat(selector.slice(endIndex)));
        }
        return subselects;
      }
      exports.parse = parse;
      function parseSelector(subselects, selector, selectorIndex) {
        var tokens = [];
        function getName(offset) {
          var match = selector.slice(selectorIndex + offset).match(reName);
          if (!match) {
            throw new Error("Expected name, found ".concat(selector.slice(selectorIndex)));
          }
          var name = match[0];
          selectorIndex += offset + name.length;
          return unescapeCSS(name);
        }
        function stripWhitespace(offset) {
          selectorIndex += offset;
          while (selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
          }
        }
        function readValueWithParenthesis() {
          selectorIndex += 1;
          var start = selectorIndex;
          var counter = 1;
          for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
            if (selector.charCodeAt(selectorIndex) === 40 && !isEscaped(selectorIndex)) {
              counter++;
            } else if (selector.charCodeAt(selectorIndex) === 41 && !isEscaped(selectorIndex)) {
              counter--;
            }
          }
          if (counter) {
            throw new Error("Parenthesis not matched");
          }
          return unescapeCSS(selector.slice(start, selectorIndex - 1));
        }
        function isEscaped(pos) {
          var slashCount = 0;
          while (selector.charCodeAt(--pos) === 92)
            slashCount++;
          return (slashCount & 1) === 1;
        }
        function ensureNotTraversal() {
          if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
          }
        }
        function addTraversal(type) {
          if (tokens.length > 0 && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
          }
          ensureNotTraversal();
          tokens.push({ type });
        }
        function addSpecialAttribute(name, action2) {
          tokens.push({
            type: types_1.SelectorType.Attribute,
            name,
            action: action2,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks"
          });
        }
        function finalizeSubselector() {
          if (tokens.length && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
            tokens.pop();
          }
          if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
          }
          subselects.push(tokens);
        }
        stripWhitespace(0);
        if (selector.length === selectorIndex) {
          return selectorIndex;
        }
        loop:
          while (selectorIndex < selector.length) {
            var firstChar = selector.charCodeAt(selectorIndex);
            switch (firstChar) {
              case 32:
              case 9:
              case 10:
              case 12:
              case 13: {
                if (tokens.length === 0 || tokens[0].type !== types_1.SelectorType.Descendant) {
                  ensureNotTraversal();
                  tokens.push({ type: types_1.SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
              }
              case 62: {
                addTraversal(types_1.SelectorType.Child);
                stripWhitespace(1);
                break;
              }
              case 60: {
                addTraversal(types_1.SelectorType.Parent);
                stripWhitespace(1);
                break;
              }
              case 126: {
                addTraversal(types_1.SelectorType.Sibling);
                stripWhitespace(1);
                break;
              }
              case 43: {
                addTraversal(types_1.SelectorType.Adjacent);
                stripWhitespace(1);
                break;
              }
              case 46: {
                addSpecialAttribute("class", types_1.AttributeAction.Element);
                break;
              }
              case 35: {
                addSpecialAttribute("id", types_1.AttributeAction.Equals);
                break;
              }
              case 91: {
                stripWhitespace(1);
                var name_1 = void 0;
                var namespace = null;
                if (selector.charCodeAt(selectorIndex) === 124) {
                  name_1 = getName(1);
                } else if (selector.startsWith("*|", selectorIndex)) {
                  namespace = "*";
                  name_1 = getName(2);
                } else {
                  name_1 = getName(0);
                  if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 61) {
                    namespace = name_1;
                    name_1 = getName(1);
                  }
                }
                stripWhitespace(0);
                var action = types_1.AttributeAction.Exists;
                var possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                  action = possibleAction;
                  if (selector.charCodeAt(selectorIndex + 1) !== 61) {
                    throw new Error("Expected `=`");
                  }
                  stripWhitespace(2);
                } else if (selector.charCodeAt(selectorIndex) === 61) {
                  action = types_1.AttributeAction.Equals;
                  stripWhitespace(1);
                }
                var value = "";
                var ignoreCase = null;
                if (action !== "exists") {
                  if (isQuote(selector.charCodeAt(selectorIndex))) {
                    var quote = selector.charCodeAt(selectorIndex);
                    var sectionEnd = selectorIndex + 1;
                    while (sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
                      sectionEnd += 1;
                    }
                    if (selector.charCodeAt(sectionEnd) !== quote) {
                      throw new Error("Attribute value didn't end");
                    }
                    value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                    selectorIndex = sectionEnd + 1;
                  } else {
                    var valueStart = selectorIndex;
                    while (selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 || isEscaped(selectorIndex))) {
                      selectorIndex += 1;
                    }
                    value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                  }
                  stripWhitespace(0);
                  var forceIgnore = selector.charCodeAt(selectorIndex) | 32;
                  if (forceIgnore === 115) {
                    ignoreCase = false;
                    stripWhitespace(1);
                  } else if (forceIgnore === 105) {
                    ignoreCase = true;
                    stripWhitespace(1);
                  }
                }
                if (selector.charCodeAt(selectorIndex) !== 93) {
                  throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                var attributeSelector = {
                  type: types_1.SelectorType.Attribute,
                  name: name_1,
                  action,
                  value,
                  namespace,
                  ignoreCase
                };
                tokens.push(attributeSelector);
                break;
              }
              case 58: {
                if (selector.charCodeAt(selectorIndex + 1) === 58) {
                  tokens.push({
                    type: types_1.SelectorType.PseudoElement,
                    name: getName(2).toLowerCase(),
                    data: selector.charCodeAt(selectorIndex) === 40 ? readValueWithParenthesis() : null
                  });
                  continue;
                }
                var name_2 = getName(1).toLowerCase();
                var data = null;
                if (selector.charCodeAt(selectorIndex) === 40) {
                  if (unpackPseudos.has(name_2)) {
                    if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                      throw new Error("Pseudo-selector ".concat(name_2, " cannot be quoted"));
                    }
                    data = [];
                    selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                    if (selector.charCodeAt(selectorIndex) !== 41) {
                      throw new Error("Missing closing parenthesis in :".concat(name_2, " (").concat(selector, ")"));
                    }
                    selectorIndex += 1;
                  } else {
                    data = readValueWithParenthesis();
                    if (stripQuotesFromPseudos.has(name_2)) {
                      var quot = data.charCodeAt(0);
                      if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                        data = data.slice(1, -1);
                      }
                    }
                    data = unescapeCSS(data);
                  }
                }
                tokens.push({ type: types_1.SelectorType.Pseudo, name: name_2, data });
                break;
              }
              case 44: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
              }
              default: {
                if (selector.startsWith("/*", selectorIndex)) {
                  var endIndex = selector.indexOf("*/", selectorIndex + 2);
                  if (endIndex < 0) {
                    throw new Error("Comment was not terminated");
                  }
                  selectorIndex = endIndex + 2;
                  if (tokens.length === 0) {
                    stripWhitespace(0);
                  }
                  break;
                }
                var namespace = null;
                var name_3 = void 0;
                if (firstChar === 42) {
                  selectorIndex += 1;
                  name_3 = "*";
                } else if (firstChar === 124) {
                  name_3 = "";
                  if (selector.charCodeAt(selectorIndex + 1) === 124) {
                    addTraversal(types_1.SelectorType.ColumnCombinator);
                    stripWhitespace(2);
                    break;
                  }
                } else if (reName.test(selector.slice(selectorIndex))) {
                  name_3 = getName(0);
                } else {
                  break loop;
                }
                if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 124) {
                  namespace = name_3;
                  if (selector.charCodeAt(selectorIndex + 1) === 42) {
                    name_3 = "*";
                    selectorIndex += 2;
                  } else {
                    name_3 = getName(1);
                  }
                }
                tokens.push(name_3 === "*" ? { type: types_1.SelectorType.Universal, namespace } : { type: types_1.SelectorType.Tag, name: name_3, namespace });
              }
            }
          }
        finalizeSubselector();
        return selectorIndex;
      }
    }
  });

  // node_modules/css-what/lib/commonjs/stringify.js
  var require_stringify = __commonJS({
    "node_modules/css-what/lib/commonjs/stringify.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringify = void 0;
      var types_1 = require_types2();
      var attribValChars = ["\\", '"'];
      var pseudoValChars = __spreadArray(__spreadArray([], attribValChars, true), ["(", ")"], false);
      var charsToEscapeInAttributeValue = new Set(attribValChars.map(function(c) {
        return c.charCodeAt(0);
      }));
      var charsToEscapeInPseudoValue = new Set(pseudoValChars.map(function(c) {
        return c.charCodeAt(0);
      }));
      var charsToEscapeInName = new Set(__spreadArray(__spreadArray([], pseudoValChars, true), [
        "~",
        "^",
        "$",
        "*",
        "+",
        "!",
        "|",
        ":",
        "[",
        "]",
        " ",
        "."
      ], false).map(function(c) {
        return c.charCodeAt(0);
      }));
      function stringify(selector) {
        return selector.map(function(token) {
          return token.map(stringifyToken).join("");
        }).join(", ");
      }
      exports.stringify = stringify;
      function stringifyToken(token, index, arr) {
        switch (token.type) {
          case types_1.SelectorType.Child:
            return index === 0 ? "> " : " > ";
          case types_1.SelectorType.Parent:
            return index === 0 ? "< " : " < ";
          case types_1.SelectorType.Sibling:
            return index === 0 ? "~ " : " ~ ";
          case types_1.SelectorType.Adjacent:
            return index === 0 ? "+ " : " + ";
          case types_1.SelectorType.Descendant:
            return " ";
          case types_1.SelectorType.ColumnCombinator:
            return index === 0 ? "|| " : " || ";
          case types_1.SelectorType.Universal:
            return token.namespace === "*" && index + 1 < arr.length && "name" in arr[index + 1] ? "" : "".concat(getNamespace(token.namespace), "*");
          case types_1.SelectorType.Tag:
            return getNamespacedName(token);
          case types_1.SelectorType.PseudoElement:
            return "::".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(escapeName(token.data, charsToEscapeInPseudoValue), ")"));
          case types_1.SelectorType.Pseudo:
            return ":".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify(token.data), ")"));
          case types_1.SelectorType.Attribute: {
            if (token.name === "id" && token.action === types_1.AttributeAction.Equals && token.ignoreCase === "quirks" && !token.namespace) {
              return "#".concat(escapeName(token.value, charsToEscapeInName));
            }
            if (token.name === "class" && token.action === types_1.AttributeAction.Element && token.ignoreCase === "quirks" && !token.namespace) {
              return ".".concat(escapeName(token.value, charsToEscapeInName));
            }
            var name_1 = getNamespacedName(token);
            if (token.action === types_1.AttributeAction.Exists) {
              return "[".concat(name_1, "]");
            }
            return "[".concat(name_1).concat(getActionValue(token.action), '="').concat(escapeName(token.value, charsToEscapeInAttributeValue), '"').concat(token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s", "]");
          }
        }
      }
      function getActionValue(action) {
        switch (action) {
          case types_1.AttributeAction.Equals:
            return "";
          case types_1.AttributeAction.Element:
            return "~";
          case types_1.AttributeAction.Start:
            return "^";
          case types_1.AttributeAction.End:
            return "$";
          case types_1.AttributeAction.Any:
            return "*";
          case types_1.AttributeAction.Not:
            return "!";
          case types_1.AttributeAction.Hyphen:
            return "|";
          case types_1.AttributeAction.Exists:
            throw new Error("Shouldn't be here");
        }
      }
      function getNamespacedName(token) {
        return "".concat(getNamespace(token.namespace)).concat(escapeName(token.name, charsToEscapeInName));
      }
      function getNamespace(namespace) {
        return namespace !== null ? "".concat(namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName), "|") : "";
      }
      function escapeName(str, charsToEscape) {
        var lastIdx = 0;
        var ret = "";
        for (var i = 0; i < str.length; i++) {
          if (charsToEscape.has(str.charCodeAt(i))) {
            ret += "".concat(str.slice(lastIdx, i), "\\").concat(str.charAt(i));
            lastIdx = i + 1;
          }
        }
        return ret.length > 0 ? ret + str.slice(lastIdx) : str;
      }
    }
  });

  // node_modules/css-what/lib/commonjs/index.js
  var require_commonjs = __commonJS({
    "node_modules/css-what/lib/commonjs/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stringify = exports.parse = exports.isTraversal = void 0;
      __exportStar(require_types2(), exports);
      var parse_1 = require_parse();
      Object.defineProperty(exports, "isTraversal", { enumerable: true, get: function() {
        return parse_1.isTraversal;
      } });
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return parse_1.parse;
      } });
      var stringify_1 = require_stringify();
      Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
        return stringify_1.stringify;
      } });
    }
  });

  // node_modules/domelementtype/lib/index.js
  var require_lib = __commonJS({
    "node_modules/domelementtype/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
      var ElementType;
      (function(ElementType2) {
        ElementType2["Root"] = "root";
        ElementType2["Text"] = "text";
        ElementType2["Directive"] = "directive";
        ElementType2["Comment"] = "comment";
        ElementType2["Script"] = "script";
        ElementType2["Style"] = "style";
        ElementType2["Tag"] = "tag";
        ElementType2["CDATA"] = "cdata";
        ElementType2["Doctype"] = "doctype";
      })(ElementType = exports.ElementType || (exports.ElementType = {}));
      function isTag(elem) {
        return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
      }
      exports.isTag = isTag;
      exports.Root = ElementType.Root;
      exports.Text = ElementType.Text;
      exports.Directive = ElementType.Directive;
      exports.Comment = ElementType.Comment;
      exports.Script = ElementType.Script;
      exports.Style = ElementType.Style;
      exports.Tag = ElementType.Tag;
      exports.CDATA = ElementType.CDATA;
      exports.Doctype = ElementType.Doctype;
    }
  });

  // node_modules/domhandler/lib/node.js
  var require_node = __commonJS({
    "node_modules/domhandler/lib/node.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.cloneNode = exports.hasChildren = exports.isDocument = exports.isDirective = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = exports.Element = exports.Document = exports.NodeWithChildren = exports.ProcessingInstruction = exports.Comment = exports.Text = exports.DataNode = exports.Node = void 0;
      var domelementtype_1 = require_lib();
      var nodeTypes = /* @__PURE__ */ new Map([
        [domelementtype_1.ElementType.Tag, 1],
        [domelementtype_1.ElementType.Script, 1],
        [domelementtype_1.ElementType.Style, 1],
        [domelementtype_1.ElementType.Directive, 1],
        [domelementtype_1.ElementType.Text, 3],
        [domelementtype_1.ElementType.CDATA, 4],
        [domelementtype_1.ElementType.Comment, 8],
        [domelementtype_1.ElementType.Root, 9]
      ]);
      var Node = function() {
        function Node2(type) {
          this.type = type;
          this.parent = null;
          this.prev = null;
          this.next = null;
          this.startIndex = null;
          this.endIndex = null;
        }
        Object.defineProperty(Node2.prototype, "nodeType", {
          get: function() {
            var _a;
            return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "parentNode", {
          get: function() {
            return this.parent;
          },
          set: function(parent) {
            this.parent = parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "previousSibling", {
          get: function() {
            return this.prev;
          },
          set: function(prev) {
            this.prev = prev;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "nextSibling", {
          get: function() {
            return this.next;
          },
          set: function(next) {
            this.next = next;
          },
          enumerable: false,
          configurable: true
        });
        Node2.prototype.cloneNode = function(recursive) {
          if (recursive === void 0) {
            recursive = false;
          }
          return cloneNode(this, recursive);
        };
        return Node2;
      }();
      exports.Node = Node;
      var DataNode = function(_super) {
        __extends(DataNode2, _super);
        function DataNode2(type, data) {
          var _this = _super.call(this, type) || this;
          _this.data = data;
          return _this;
        }
        Object.defineProperty(DataNode2.prototype, "nodeValue", {
          get: function() {
            return this.data;
          },
          set: function(data) {
            this.data = data;
          },
          enumerable: false,
          configurable: true
        });
        return DataNode2;
      }(Node);
      exports.DataNode = DataNode;
      var Text = function(_super) {
        __extends(Text2, _super);
        function Text2(data) {
          return _super.call(this, domelementtype_1.ElementType.Text, data) || this;
        }
        return Text2;
      }(DataNode);
      exports.Text = Text;
      var Comment = function(_super) {
        __extends(Comment2, _super);
        function Comment2(data) {
          return _super.call(this, domelementtype_1.ElementType.Comment, data) || this;
        }
        return Comment2;
      }(DataNode);
      exports.Comment = Comment;
      var ProcessingInstruction = function(_super) {
        __extends(ProcessingInstruction2, _super);
        function ProcessingInstruction2(name, data) {
          var _this = _super.call(this, domelementtype_1.ElementType.Directive, data) || this;
          _this.name = name;
          return _this;
        }
        return ProcessingInstruction2;
      }(DataNode);
      exports.ProcessingInstruction = ProcessingInstruction;
      var NodeWithChildren = function(_super) {
        __extends(NodeWithChildren2, _super);
        function NodeWithChildren2(type, children) {
          var _this = _super.call(this, type) || this;
          _this.children = children;
          return _this;
        }
        Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
          get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
          get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
          get: function() {
            return this.children;
          },
          set: function(children) {
            this.children = children;
          },
          enumerable: false,
          configurable: true
        });
        return NodeWithChildren2;
      }(Node);
      exports.NodeWithChildren = NodeWithChildren;
      var Document = function(_super) {
        __extends(Document2, _super);
        function Document2(children) {
          return _super.call(this, domelementtype_1.ElementType.Root, children) || this;
        }
        return Document2;
      }(NodeWithChildren);
      exports.Document = Document;
      var Element = function(_super) {
        __extends(Element2, _super);
        function Element2(name, attribs, children, type) {
          if (children === void 0) {
            children = [];
          }
          if (type === void 0) {
            type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
          }
          var _this = _super.call(this, type, children) || this;
          _this.name = name;
          _this.attribs = attribs;
          return _this;
        }
        Object.defineProperty(Element2.prototype, "tagName", {
          get: function() {
            return this.name;
          },
          set: function(name) {
            this.name = name;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element2.prototype, "attributes", {
          get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
              var _a, _b;
              return {
                name,
                value: _this.attribs[name],
                namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
              };
            });
          },
          enumerable: false,
          configurable: true
        });
        return Element2;
      }(NodeWithChildren);
      exports.Element = Element;
      function isTag(node) {
        return (0, domelementtype_1.isTag)(node);
      }
      exports.isTag = isTag;
      function isCDATA(node) {
        return node.type === domelementtype_1.ElementType.CDATA;
      }
      exports.isCDATA = isCDATA;
      function isText(node) {
        return node.type === domelementtype_1.ElementType.Text;
      }
      exports.isText = isText;
      function isComment(node) {
        return node.type === domelementtype_1.ElementType.Comment;
      }
      exports.isComment = isComment;
      function isDirective(node) {
        return node.type === domelementtype_1.ElementType.Directive;
      }
      exports.isDirective = isDirective;
      function isDocument(node) {
        return node.type === domelementtype_1.ElementType.Root;
      }
      exports.isDocument = isDocument;
      function hasChildren(node) {
        return Object.prototype.hasOwnProperty.call(node, "children");
      }
      exports.hasChildren = hasChildren;
      function cloneNode(node, recursive) {
        if (recursive === void 0) {
          recursive = false;
        }
        var result;
        if (isText(node)) {
          result = new Text(node.data);
        } else if (isComment(node)) {
          result = new Comment(node.data);
        } else if (isTag(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
          children.forEach(function(child) {
            return child.parent = clone_1;
          });
          if (node.namespace != null) {
            clone_1.namespace = node.namespace;
          }
          if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
          }
          if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
          }
          result = clone_1;
        } else if (isCDATA(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_2 = new NodeWithChildren(domelementtype_1.ElementType.CDATA, children);
          children.forEach(function(child) {
            return child.parent = clone_2;
          });
          result = clone_2;
        } else if (isDocument(node)) {
          var children = recursive ? cloneChildren(node.children) : [];
          var clone_3 = new Document(children);
          children.forEach(function(child) {
            return child.parent = clone_3;
          });
          if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
          }
          result = clone_3;
        } else if (isDirective(node)) {
          var instruction = new ProcessingInstruction(node.name, node.data);
          if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
          }
          result = instruction;
        } else {
          throw new Error("Not implemented yet: ".concat(node.type));
        }
        result.startIndex = node.startIndex;
        result.endIndex = node.endIndex;
        if (node.sourceCodeLocation != null) {
          result.sourceCodeLocation = node.sourceCodeLocation;
        }
        return result;
      }
      exports.cloneNode = cloneNode;
      function cloneChildren(childs) {
        var children = childs.map(function(child) {
          return cloneNode(child, true);
        });
        for (var i = 1; i < children.length; i++) {
          children[i].prev = children[i - 1];
          children[i - 1].next = children[i];
        }
        return children;
      }
    }
  });

  // node_modules/domhandler/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/domhandler/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.DomHandler = void 0;
      var domelementtype_1 = require_lib();
      var node_1 = require_node();
      __exportStar(require_node(), exports);
      var reWhitespace = /\s+/g;
      var defaultOpts = {
        normalizeWhitespace: false,
        withStartIndices: false,
        withEndIndices: false,
        xmlMode: false
      };
      var DomHandler = function() {
        function DomHandler2(callback, options, elementCB) {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
          if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
          }
          if (typeof callback === "object") {
            options = callback;
            callback = void 0;
          }
          this.callback = callback !== null && callback !== void 0 ? callback : null;
          this.options = options !== null && options !== void 0 ? options : defaultOpts;
          this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
        }
        DomHandler2.prototype.onparserinit = function(parser) {
          this.parser = parser;
        };
        DomHandler2.prototype.onreset = function() {
          this.dom = [];
          this.root = new node_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
        };
        DomHandler2.prototype.onend = function() {
          if (this.done)
            return;
          this.done = true;
          this.parser = null;
          this.handleCallback(null);
        };
        DomHandler2.prototype.onerror = function(error) {
          this.handleCallback(error);
        };
        DomHandler2.prototype.onclosetag = function() {
          this.lastNode = null;
          var elem = this.tagStack.pop();
          if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
          }
          if (this.elementCB)
            this.elementCB(elem);
        };
        DomHandler2.prototype.onopentag = function(name, attribs) {
          var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
          var element = new node_1.Element(name, attribs, void 0, type);
          this.addNode(element);
          this.tagStack.push(element);
        };
        DomHandler2.prototype.ontext = function(data) {
          var normalizeWhitespace = this.options.normalizeWhitespace;
          var lastNode = this.lastNode;
          if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            if (normalizeWhitespace) {
              lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
            } else {
              lastNode.data += data;
            }
            if (this.options.withEndIndices) {
              lastNode.endIndex = this.parser.endIndex;
            }
          } else {
            if (normalizeWhitespace) {
              data = data.replace(reWhitespace, " ");
            }
            var node = new node_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
          }
        };
        DomHandler2.prototype.oncomment = function(data) {
          if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
          }
          var node = new node_1.Comment(data);
          this.addNode(node);
          this.lastNode = node;
        };
        DomHandler2.prototype.oncommentend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.oncdatastart = function() {
          var text = new node_1.Text("");
          var node = new node_1.NodeWithChildren(domelementtype_1.ElementType.CDATA, [text]);
          this.addNode(node);
          text.parent = node;
          this.lastNode = text;
        };
        DomHandler2.prototype.oncdataend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.onprocessinginstruction = function(name, data) {
          var node = new node_1.ProcessingInstruction(name, data);
          this.addNode(node);
        };
        DomHandler2.prototype.handleCallback = function(error) {
          if (typeof this.callback === "function") {
            this.callback(error, this.dom);
          } else if (error) {
            throw error;
          }
        };
        DomHandler2.prototype.addNode = function(node) {
          var parent = this.tagStack[this.tagStack.length - 1];
          var previousSibling = parent.children[parent.children.length - 1];
          if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
          }
          if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
          }
          parent.children.push(node);
          if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
          }
          node.parent = parent;
          this.lastNode = null;
        };
        return DomHandler2;
      }();
      exports.DomHandler = DomHandler;
      exports.default = DomHandler;
    }
  });

  // node_modules/entities/lib/maps/entities.json
  var require_entities = __commonJS({
    "node_modules/entities/lib/maps/entities.json"(exports, module) {
      module.exports = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", amp: "&", AMP: "&", andand: "\u2A55", And: "\u2A53", and: "\u2227", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angmsd: "\u2221", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", apacir: "\u2A6F", ap: "\u2248", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", barwed: "\u2305", Barwed: "\u2306", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", because: "\u2235", Because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxdl: "\u2510", boxdL: "\u2555", boxDl: "\u2556", boxDL: "\u2557", boxdr: "\u250C", boxdR: "\u2552", boxDr: "\u2553", boxDR: "\u2554", boxh: "\u2500", boxH: "\u2550", boxhd: "\u252C", boxHd: "\u2564", boxhD: "\u2565", boxHD: "\u2566", boxhu: "\u2534", boxHu: "\u2567", boxhU: "\u2568", boxHU: "\u2569", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxul: "\u2518", boxuL: "\u255B", boxUl: "\u255C", boxUL: "\u255D", boxur: "\u2514", boxuR: "\u2558", boxUr: "\u2559", boxUR: "\u255A", boxv: "\u2502", boxV: "\u2551", boxvh: "\u253C", boxvH: "\u256A", boxVh: "\u256B", boxVH: "\u256C", boxvl: "\u2524", boxvL: "\u2561", boxVl: "\u2562", boxVL: "\u2563", boxvr: "\u251C", boxvR: "\u255E", boxVr: "\u255F", boxVR: "\u2560", bprime: "\u2035", breve: "\u02D8", Breve: "\u02D8", brvbar: "\xA6", bscr: "\u{1D4B7}", Bscr: "\u212C", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsolb: "\u29C5", bsol: "\\", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", cap: "\u2229", Cap: "\u22D2", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", centerdot: "\xB7", CenterDot: "\xB7", cfr: "\u{1D520}", Cfr: "\u212D", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cir: "\u25CB", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", colon: ":", Colon: "\u2237", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", conint: "\u222E", Conint: "\u222F", ContourIntegral: "\u222E", copf: "\u{1D554}", Copf: "\u2102", coprod: "\u2210", Coproduct: "\u2210", copy: "\xA9", COPY: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", cross: "\u2717", Cross: "\u2A2F", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", cupbrcap: "\u2A48", cupcap: "\u2A46", CupCap: "\u224D", cup: "\u222A", Cup: "\u22D3", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", dagger: "\u2020", Dagger: "\u2021", daleth: "\u2138", darr: "\u2193", Darr: "\u21A1", dArr: "\u21D3", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", ddagger: "\u2021", ddarr: "\u21CA", DD: "\u2145", dd: "\u2146", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", diamond: "\u22C4", Diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrowBar: "\u2913", downarrow: "\u2193", DownArrow: "\u2193", Downarrow: "\u21D3", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVectorBar: "\u2956", DownLeftVector: "\u21BD", DownRightTeeVector: "\u295F", DownRightVectorBar: "\u2957", DownRightVector: "\u21C1", DownTeeArrow: "\u21A7", DownTee: "\u22A4", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", Ecirc: "\xCA", ecirc: "\xEA", ecir: "\u2256", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", edot: "\u0117", eDot: "\u2251", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", escr: "\u212F", Escr: "\u2130", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", exponentiale: "\u2147", ExponentialE: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", forall: "\u2200", ForAll: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", fscr: "\u{1D4BB}", Fscr: "\u2131", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", ge: "\u2265", gE: "\u2267", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", gescc: "\u2AA9", ges: "\u2A7E", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", gg: "\u226B", Gg: "\u22D9", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gla: "\u2AA5", gl: "\u2277", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gnE: "\u2269", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gt: ">", GT: ">", Gt: "\u226B", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", harrcir: "\u2948", harr: "\u2194", hArr: "\u21D4", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", Hfr: "\u210C", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", hopf: "\u{1D559}", Hopf: "\u210D", horbar: "\u2015", HorizontalLine: "\u2500", hscr: "\u{1D4BD}", Hscr: "\u210B", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", ifr: "\u{1D526}", Ifr: "\u2111", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", Im: "\u2111", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", incare: "\u2105", in: "\u2208", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", intcal: "\u22BA", int: "\u222B", Int: "\u222C", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", iscr: "\u{1D4BE}", Iscr: "\u2110", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", lang: "\u27E8", Lang: "\u27EA", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", larrb: "\u21E4", larrbfs: "\u291F", larr: "\u2190", Larr: "\u219E", lArr: "\u21D0", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", latail: "\u2919", lAtail: "\u291B", lat: "\u2AAB", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lBarr: "\u290E", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", lE: "\u2266", LeftAngleBracket: "\u27E8", LeftArrowBar: "\u21E4", leftarrow: "\u2190", LeftArrow: "\u2190", Leftarrow: "\u21D0", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVectorBar: "\u2959", LeftDownVector: "\u21C3", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", leftrightarrow: "\u2194", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTeeArrow: "\u21A4", LeftTee: "\u22A3", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangleBar: "\u29CF", LeftTriangle: "\u22B2", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVectorBar: "\u2958", LeftUpVector: "\u21BF", LeftVectorBar: "\u2952", LeftVector: "\u21BC", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", lescc: "\u2AA8", les: "\u2A7D", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", llarr: "\u21C7", ll: "\u226A", Ll: "\u22D8", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoustache: "\u23B0", lmoust: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lnE: "\u2268", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", longleftarrow: "\u27F5", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftrightarrow: "\u27F7", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longmapsto: "\u27FC", longrightarrow: "\u27F6", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", Lscr: "\u2112", lsh: "\u21B0", Lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", lt: "<", LT: "<", Lt: "\u226A", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midast: "*", midcir: "\u2AF0", mid: "\u2223", middot: "\xB7", minusb: "\u229F", minus: "\u2212", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", mscr: "\u{1D4C2}", Mscr: "\u2133", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natural: "\u266E", naturals: "\u2115", natur: "\u266E", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", nearhk: "\u2924", nearr: "\u2197", neArr: "\u21D7", nearrow: "\u2197", ne: "\u2260", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nharr: "\u21AE", nhArr: "\u21CE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlarr: "\u219A", nlArr: "\u21CD", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nleftarrow: "\u219A", nLeftarrow: "\u21CD", nleftrightarrow: "\u21AE", nLeftrightarrow: "\u21CE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nopf: "\u{1D55F}", Nopf: "\u2115", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangle: "\u22EA", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangle: "\u22EB", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", nparallel: "\u2226", npar: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", nprec: "\u2280", npreceq: "\u2AAF\u0338", npre: "\u2AAF\u0338", nrarrc: "\u2933\u0338", nrarr: "\u219B", nrArr: "\u21CF", nrarrw: "\u219D\u0338", nrightarrow: "\u219B", nRightarrow: "\u21CF", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvDash: "\u22AD", nVdash: "\u22AE", nVDash: "\u22AF", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwarr: "\u2196", nwArr: "\u21D6", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", Ocirc: "\xD4", ocirc: "\xF4", ocir: "\u229A", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", orarr: "\u21BB", Or: "\u2A54", or: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", otimesas: "\u2A36", Otimes: "\u2A37", otimes: "\u2297", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", para: "\xB6", parallel: "\u2225", par: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plus: "+", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", popf: "\u{1D561}", Popf: "\u2119", pound: "\xA3", prap: "\u2AB7", Pr: "\u2ABB", pr: "\u227A", prcue: "\u227C", precapprox: "\u2AB7", prec: "\u227A", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", pre: "\u2AAF", prE: "\u2AB3", precsim: "\u227E", prime: "\u2032", Prime: "\u2033", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportional: "\u221D", Proportion: "\u2237", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", qopf: "\u{1D562}", Qopf: "\u211A", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", quot: '"', QUOT: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", rang: "\u27E9", Rang: "\u27EB", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarr: "\u2192", Rarr: "\u21A0", rArr: "\u21D2", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", ratail: "\u291A", rAtail: "\u291C", ratio: "\u2236", rationals: "\u211A", rbarr: "\u290D", rBarr: "\u290F", RBarr: "\u2910", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", Re: "\u211C", rect: "\u25AD", reg: "\xAE", REG: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", rfr: "\u{1D52F}", Rfr: "\u211C", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrowBar: "\u21E5", rightarrow: "\u2192", RightArrow: "\u2192", Rightarrow: "\u21D2", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVectorBar: "\u2955", RightDownVector: "\u21C2", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTeeArrow: "\u21A6", RightTee: "\u22A2", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangleBar: "\u29D0", RightTriangle: "\u22B3", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVectorBar: "\u2954", RightUpVector: "\u21BE", RightVectorBar: "\u2953", RightVector: "\u21C0", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoustache: "\u23B1", rmoust: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", ropf: "\u{1D563}", Ropf: "\u211D", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", rscr: "\u{1D4C7}", Rscr: "\u211B", rsh: "\u21B1", Rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", Sc: "\u2ABC", sc: "\u227B", sccue: "\u227D", sce: "\u2AB0", scE: "\u2AB4", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdotb: "\u22A1", sdot: "\u22C5", sdote: "\u2A66", searhk: "\u2925", searr: "\u2198", seArr: "\u21D8", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", solbar: "\u233F", solb: "\u29C4", sol: "/", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", square: "\u25A1", Square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squ: "\u25A1", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", sub: "\u2282", Sub: "\u22D0", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subset: "\u2282", Subset: "\u22D0", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succapprox: "\u2AB8", succ: "\u227B", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", sum: "\u2211", Sum: "\u2211", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", sup: "\u2283", Sup: "\u22D1", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", supset: "\u2283", Supset: "\u22D1", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swarr: "\u2199", swArr: "\u21D9", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", therefore: "\u2234", Therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", tilde: "\u02DC", Tilde: "\u223C", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", timesbar: "\u2A31", timesb: "\u22A0", times: "\xD7", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", topbot: "\u2336", topcir: "\u2AF1", top: "\u22A4", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", trade: "\u2122", TRADE: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", uarr: "\u2191", Uarr: "\u219F", uArr: "\u21D1", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrowBar: "\u2912", uparrow: "\u2191", UpArrow: "\u2191", Uparrow: "\u21D1", UpArrowDownArrow: "\u21C5", updownarrow: "\u2195", UpDownArrow: "\u2195", Updownarrow: "\u21D5", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", upsi: "\u03C5", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTeeArrow: "\u21A5", UpTee: "\u22A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", varr: "\u2195", vArr: "\u21D5", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", vBar: "\u2AE8", Vbar: "\u2AEB", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", vdash: "\u22A2", vDash: "\u22A8", Vdash: "\u22A9", VDash: "\u22AB", Vdashl: "\u2AE6", veebar: "\u22BB", vee: "\u2228", Vee: "\u22C1", veeeq: "\u225A", vellip: "\u22EE", verbar: "|", Verbar: "\u2016", vert: "|", Vert: "\u2016", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", wedge: "\u2227", Wedge: "\u22C0", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xharr: "\u27F7", xhArr: "\u27FA", Xi: "\u039E", xi: "\u03BE", xlarr: "\u27F5", xlArr: "\u27F8", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrarr: "\u27F6", xrArr: "\u27F9", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", yuml: "\xFF", Yuml: "\u0178", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", zfr: "\u{1D537}", Zfr: "\u2128", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", Zopf: "\u2124", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
    }
  });

  // node_modules/entities/lib/maps/legacy.json
  var require_legacy = __commonJS({
    "node_modules/entities/lib/maps/legacy.json"(exports, module) {
      module.exports = { Aacute: "\xC1", aacute: "\xE1", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", AElig: "\xC6", aelig: "\xE6", Agrave: "\xC0", agrave: "\xE0", amp: "&", AMP: "&", Aring: "\xC5", aring: "\xE5", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", brvbar: "\xA6", Ccedil: "\xC7", ccedil: "\xE7", cedil: "\xB8", cent: "\xA2", copy: "\xA9", COPY: "\xA9", curren: "\xA4", deg: "\xB0", divide: "\xF7", Eacute: "\xC9", eacute: "\xE9", Ecirc: "\xCA", ecirc: "\xEA", Egrave: "\xC8", egrave: "\xE8", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", frac12: "\xBD", frac14: "\xBC", frac34: "\xBE", gt: ">", GT: ">", Iacute: "\xCD", iacute: "\xED", Icirc: "\xCE", icirc: "\xEE", iexcl: "\xA1", Igrave: "\xCC", igrave: "\xEC", iquest: "\xBF", Iuml: "\xCF", iuml: "\xEF", laquo: "\xAB", lt: "<", LT: "<", macr: "\xAF", micro: "\xB5", middot: "\xB7", nbsp: "\xA0", not: "\xAC", Ntilde: "\xD1", ntilde: "\xF1", Oacute: "\xD3", oacute: "\xF3", Ocirc: "\xD4", ocirc: "\xF4", Ograve: "\xD2", ograve: "\xF2", ordf: "\xAA", ordm: "\xBA", Oslash: "\xD8", oslash: "\xF8", Otilde: "\xD5", otilde: "\xF5", Ouml: "\xD6", ouml: "\xF6", para: "\xB6", plusmn: "\xB1", pound: "\xA3", quot: '"', QUOT: '"', raquo: "\xBB", reg: "\xAE", REG: "\xAE", sect: "\xA7", shy: "\xAD", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", szlig: "\xDF", THORN: "\xDE", thorn: "\xFE", times: "\xD7", Uacute: "\xDA", uacute: "\xFA", Ucirc: "\xDB", ucirc: "\xFB", Ugrave: "\xD9", ugrave: "\xF9", uml: "\xA8", Uuml: "\xDC", uuml: "\xFC", Yacute: "\xDD", yacute: "\xFD", yen: "\xA5", yuml: "\xFF" };
    }
  });

  // node_modules/entities/lib/maps/xml.json
  var require_xml = __commonJS({
    "node_modules/entities/lib/maps/xml.json"(exports, module) {
      module.exports = { amp: "&", apos: "'", gt: ">", lt: "<", quot: '"' };
    }
  });

  // node_modules/entities/lib/maps/decode.json
  var require_decode = __commonJS({
    "node_modules/entities/lib/maps/decode.json"(exports, module) {
      module.exports = { "0": 65533, "128": 8364, "130": 8218, "131": 402, "132": 8222, "133": 8230, "134": 8224, "135": 8225, "136": 710, "137": 8240, "138": 352, "139": 8249, "140": 338, "142": 381, "145": 8216, "146": 8217, "147": 8220, "148": 8221, "149": 8226, "150": 8211, "151": 8212, "152": 732, "153": 8482, "154": 353, "155": 8250, "156": 339, "158": 382, "159": 376 };
    }
  });

  // node_modules/entities/lib/decode_codepoint.js
  var require_decode_codepoint = __commonJS({
    "node_modules/entities/lib/decode_codepoint.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decode_json_1 = __importDefault(require_decode());
      var fromCodePoint = String.fromCodePoint || function(codePoint) {
        var output = "";
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += String.fromCharCode(codePoint);
        return output;
      };
      function decodeCodePoint(codePoint) {
        if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
          return "\uFFFD";
        }
        if (codePoint in decode_json_1.default) {
          codePoint = decode_json_1.default[codePoint];
        }
        return fromCodePoint(codePoint);
      }
      exports.default = decodeCodePoint;
    }
  });

  // node_modules/entities/lib/decode.js
  var require_decode2 = __commonJS({
    "node_modules/entities/lib/decode.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
      var entities_json_1 = __importDefault(require_entities());
      var legacy_json_1 = __importDefault(require_legacy());
      var xml_json_1 = __importDefault(require_xml());
      var decode_codepoint_1 = __importDefault(require_decode_codepoint());
      var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
      exports.decodeXML = getStrictDecoder(xml_json_1.default);
      exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
      function getStrictDecoder(map) {
        var replace = getReplacer(map);
        return function(str) {
          return String(str).replace(strictEntityRe, replace);
        };
      }
      var sorter = function(a, b) {
        return a < b ? 1 : -1;
      };
      exports.decodeHTML = function() {
        var legacy = Object.keys(legacy_json_1.default).sort(sorter);
        var keys = Object.keys(entities_json_1.default).sort(sorter);
        for (var i = 0, j = 0; i < keys.length; i++) {
          if (legacy[j] === keys[i]) {
            keys[i] += ";?";
            j++;
          } else {
            keys[i] += ";";
          }
        }
        var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
        var replace = getReplacer(entities_json_1.default);
        function replacer(str) {
          if (str.substr(-1) !== ";")
            str += ";";
          return replace(str);
        }
        return function(str) {
          return String(str).replace(re, replacer);
        };
      }();
      function getReplacer(map) {
        return function replace(str) {
          if (str.charAt(1) === "#") {
            var secondChar = str.charAt(2);
            if (secondChar === "X" || secondChar === "x") {
              return decode_codepoint_1.default(parseInt(str.substr(3), 16));
            }
            return decode_codepoint_1.default(parseInt(str.substr(2), 10));
          }
          return map[str.slice(1, -1)] || str;
        };
      }
    }
  });

  // node_modules/entities/lib/encode.js
  var require_encode = __commonJS({
    "node_modules/entities/lib/encode.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
      var xml_json_1 = __importDefault(require_xml());
      var inverseXML = getInverseObj(xml_json_1.default);
      var xmlReplacer = getInverseReplacer(inverseXML);
      exports.encodeXML = getASCIIEncoder(inverseXML);
      var entities_json_1 = __importDefault(require_entities());
      var inverseHTML = getInverseObj(entities_json_1.default);
      var htmlReplacer = getInverseReplacer(inverseHTML);
      exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);
      exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
      function getInverseObj(obj) {
        return Object.keys(obj).sort().reduce(function(inverse, name) {
          inverse[obj[name]] = "&" + name + ";";
          return inverse;
        }, {});
      }
      function getInverseReplacer(inverse) {
        var single = [];
        var multiple = [];
        for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
          var k = _a[_i];
          if (k.length === 1) {
            single.push("\\" + k);
          } else {
            multiple.push(k);
          }
        }
        single.sort();
        for (var start = 0; start < single.length - 1; start++) {
          var end = start;
          while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
            end += 1;
          }
          var count = 1 + end - start;
          if (count < 3)
            continue;
          single.splice(start, count, single[start] + "-" + single[end]);
        }
        multiple.unshift("[" + single.join("") + "]");
        return new RegExp(multiple.join("|"), "g");
      }
      var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
      var getCodePoint = String.prototype.codePointAt != null ? function(str) {
        return str.codePointAt(0);
      } : function(c) {
        return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
      };
      function singleCharReplacer(c) {
        return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
      }
      function getInverse(inverse, re) {
        return function(data) {
          return data.replace(re, function(name) {
            return inverse[name];
          }).replace(reNonASCII, singleCharReplacer);
        };
      }
      var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
      function escape(data) {
        return data.replace(reEscapeChars, singleCharReplacer);
      }
      exports.escape = escape;
      function escapeUTF8(data) {
        return data.replace(xmlReplacer, singleCharReplacer);
      }
      exports.escapeUTF8 = escapeUTF8;
      function getASCIIEncoder(obj) {
        return function(data) {
          return data.replace(reEscapeChars, function(c) {
            return obj[c] || singleCharReplacer(c);
          });
        };
      }
    }
  });

  // node_modules/entities/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/entities/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
      var decode_1 = require_decode2();
      var encode_1 = require_encode();
      function decode(data, level) {
        return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
      }
      exports.decode = decode;
      function decodeStrict(data, level) {
        return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
      }
      exports.decodeStrict = decodeStrict;
      function encode(data, level) {
        return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
      }
      exports.encode = encode;
      var encode_2 = require_encode();
      Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
        return encode_2.encodeXML;
      } });
      Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
        return encode_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
        return encode_2.encodeNonAsciiHTML;
      } });
      Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
        return encode_2.escape;
      } });
      Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
        return encode_2.escapeUTF8;
      } });
      Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
        return encode_2.encodeHTML;
      } });
      Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
        return encode_2.encodeHTML;
      } });
      var decode_2 = require_decode2();
      Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
        return decode_2.decodeXML;
      } });
      Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
        return decode_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
        return decode_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
        return decode_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
        return decode_2.decodeHTML;
      } });
      Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
        return decode_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
        return decode_2.decodeHTMLStrict;
      } });
      Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
        return decode_2.decodeXML;
      } });
    }
  });

  // node_modules/dom-serializer/lib/foreignNames.js
  var require_foreignNames = __commonJS({
    "node_modules/dom-serializer/lib/foreignNames.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.attributeNames = exports.elementNames = void 0;
      exports.elementNames = /* @__PURE__ */ new Map([
        ["altglyph", "altGlyph"],
        ["altglyphdef", "altGlyphDef"],
        ["altglyphitem", "altGlyphItem"],
        ["animatecolor", "animateColor"],
        ["animatemotion", "animateMotion"],
        ["animatetransform", "animateTransform"],
        ["clippath", "clipPath"],
        ["feblend", "feBlend"],
        ["fecolormatrix", "feColorMatrix"],
        ["fecomponenttransfer", "feComponentTransfer"],
        ["fecomposite", "feComposite"],
        ["feconvolvematrix", "feConvolveMatrix"],
        ["fediffuselighting", "feDiffuseLighting"],
        ["fedisplacementmap", "feDisplacementMap"],
        ["fedistantlight", "feDistantLight"],
        ["fedropshadow", "feDropShadow"],
        ["feflood", "feFlood"],
        ["fefunca", "feFuncA"],
        ["fefuncb", "feFuncB"],
        ["fefuncg", "feFuncG"],
        ["fefuncr", "feFuncR"],
        ["fegaussianblur", "feGaussianBlur"],
        ["feimage", "feImage"],
        ["femerge", "feMerge"],
        ["femergenode", "feMergeNode"],
        ["femorphology", "feMorphology"],
        ["feoffset", "feOffset"],
        ["fepointlight", "fePointLight"],
        ["fespecularlighting", "feSpecularLighting"],
        ["fespotlight", "feSpotLight"],
        ["fetile", "feTile"],
        ["feturbulence", "feTurbulence"],
        ["foreignobject", "foreignObject"],
        ["glyphref", "glyphRef"],
        ["lineargradient", "linearGradient"],
        ["radialgradient", "radialGradient"],
        ["textpath", "textPath"]
      ]);
      exports.attributeNames = /* @__PURE__ */ new Map([
        ["definitionurl", "definitionURL"],
        ["attributename", "attributeName"],
        ["attributetype", "attributeType"],
        ["basefrequency", "baseFrequency"],
        ["baseprofile", "baseProfile"],
        ["calcmode", "calcMode"],
        ["clippathunits", "clipPathUnits"],
        ["diffuseconstant", "diffuseConstant"],
        ["edgemode", "edgeMode"],
        ["filterunits", "filterUnits"],
        ["glyphref", "glyphRef"],
        ["gradienttransform", "gradientTransform"],
        ["gradientunits", "gradientUnits"],
        ["kernelmatrix", "kernelMatrix"],
        ["kernelunitlength", "kernelUnitLength"],
        ["keypoints", "keyPoints"],
        ["keysplines", "keySplines"],
        ["keytimes", "keyTimes"],
        ["lengthadjust", "lengthAdjust"],
        ["limitingconeangle", "limitingConeAngle"],
        ["markerheight", "markerHeight"],
        ["markerunits", "markerUnits"],
        ["markerwidth", "markerWidth"],
        ["maskcontentunits", "maskContentUnits"],
        ["maskunits", "maskUnits"],
        ["numoctaves", "numOctaves"],
        ["pathlength", "pathLength"],
        ["patterncontentunits", "patternContentUnits"],
        ["patterntransform", "patternTransform"],
        ["patternunits", "patternUnits"],
        ["pointsatx", "pointsAtX"],
        ["pointsaty", "pointsAtY"],
        ["pointsatz", "pointsAtZ"],
        ["preservealpha", "preserveAlpha"],
        ["preserveaspectratio", "preserveAspectRatio"],
        ["primitiveunits", "primitiveUnits"],
        ["refx", "refX"],
        ["refy", "refY"],
        ["repeatcount", "repeatCount"],
        ["repeatdur", "repeatDur"],
        ["requiredextensions", "requiredExtensions"],
        ["requiredfeatures", "requiredFeatures"],
        ["specularconstant", "specularConstant"],
        ["specularexponent", "specularExponent"],
        ["spreadmethod", "spreadMethod"],
        ["startoffset", "startOffset"],
        ["stddeviation", "stdDeviation"],
        ["stitchtiles", "stitchTiles"],
        ["surfacescale", "surfaceScale"],
        ["systemlanguage", "systemLanguage"],
        ["tablevalues", "tableValues"],
        ["targetx", "targetX"],
        ["targety", "targetY"],
        ["textlength", "textLength"],
        ["viewbox", "viewBox"],
        ["viewtarget", "viewTarget"],
        ["xchannelselector", "xChannelSelector"],
        ["ychannelselector", "yChannelSelector"],
        ["zoomandpan", "zoomAndPan"]
      ]);
    }
  });

  // node_modules/dom-serializer/lib/index.js
  var require_lib4 = __commonJS({
    "node_modules/dom-serializer/lib/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var ElementType = __importStar(require_lib());
      var entities_1 = require_lib3();
      var foreignNames_1 = require_foreignNames();
      var unencodedElements = /* @__PURE__ */ new Set([
        "style",
        "script",
        "xmp",
        "iframe",
        "noembed",
        "noframes",
        "plaintext",
        "noscript"
      ]);
      function formatAttributes(attributes, opts) {
        if (!attributes)
          return;
        return Object.keys(attributes).map(function(key) {
          var _a, _b;
          var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
          if (opts.xmlMode === "foreign") {
            key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
          }
          if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
          }
          return key + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
        }).join(" ");
      }
      var singleTag = /* @__PURE__ */ new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ]);
      function render(node, options) {
        if (options === void 0) {
          options = {};
        }
        var nodes = "length" in node ? node : [node];
        var output = "";
        for (var i = 0; i < nodes.length; i++) {
          output += renderNode(nodes[i], options);
        }
        return output;
      }
      exports.default = render;
      function renderNode(node, options) {
        switch (node.type) {
          case ElementType.Root:
            return render(node.children, options);
          case ElementType.Directive:
          case ElementType.Doctype:
            return renderDirective(node);
          case ElementType.Comment:
            return renderComment(node);
          case ElementType.CDATA:
            return renderCdata(node);
          case ElementType.Script:
          case ElementType.Style:
          case ElementType.Tag:
            return renderTag(node, options);
          case ElementType.Text:
            return renderText(node, options);
        }
      }
      var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext",
        "annotation-xml",
        "foreignObject",
        "desc",
        "title"
      ]);
      var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
      function renderTag(elem, opts) {
        var _a;
        if (opts.xmlMode === "foreign") {
          elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
          if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign(__assign({}, opts), { xmlMode: false });
          }
        }
        if (!opts.xmlMode && foreignElements.has(elem.name)) {
          opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
        }
        var tag = "<" + elem.name;
        var attribs = formatAttributes(elem.attribs, opts);
        if (attribs) {
          tag += " " + attribs;
        }
        if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
          if (!opts.xmlMode)
            tag += " ";
          tag += "/>";
        } else {
          tag += ">";
          if (elem.children.length > 0) {
            tag += render(elem.children, opts);
          }
          if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</" + elem.name + ">";
          }
        }
        return tag;
      }
      function renderDirective(elem) {
        return "<" + elem.data + ">";
      }
      function renderText(elem, opts) {
        var data = elem.data || "";
        if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
          data = entities_1.encodeXML(data);
        }
        return data;
      }
      function renderCdata(elem) {
        return "<![CDATA[" + elem.children[0].data + "]]>";
      }
      function renderComment(elem) {
        return "<!--" + elem.data + "-->";
      }
    }
  });

  // node_modules/domutils/lib/stringify.js
  var require_stringify2 = __commonJS({
    "node_modules/domutils/lib/stringify.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.innerText = exports.textContent = exports.getText = exports.getInnerHTML = exports.getOuterHTML = void 0;
      var domhandler_1 = require_lib2();
      var dom_serializer_1 = __importDefault(require_lib4());
      var domelementtype_1 = require_lib();
      function getOuterHTML(node, options) {
        return (0, dom_serializer_1.default)(node, options);
      }
      exports.getOuterHTML = getOuterHTML;
      function getInnerHTML(node, options) {
        return (0, domhandler_1.hasChildren)(node) ? node.children.map(function(node2) {
          return getOuterHTML(node2, options);
        }).join("") : "";
      }
      exports.getInnerHTML = getInnerHTML;
      function getText(node) {
        if (Array.isArray(node))
          return node.map(getText).join("");
        if ((0, domhandler_1.isTag)(node))
          return node.name === "br" ? "\n" : getText(node.children);
        if ((0, domhandler_1.isCDATA)(node))
          return getText(node.children);
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.getText = getText;
      function textContent(node) {
        if (Array.isArray(node))
          return node.map(textContent).join("");
        if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
          return textContent(node.children);
        }
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.textContent = textContent;
      function innerText(node) {
        if (Array.isArray(node))
          return node.map(innerText).join("");
        if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
          return innerText(node.children);
        }
        if ((0, domhandler_1.isText)(node))
          return node.data;
        return "";
      }
      exports.innerText = innerText;
    }
  });

  // node_modules/domutils/lib/traversal.js
  var require_traversal = __commonJS({
    "node_modules/domutils/lib/traversal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.prevElementSibling = exports.nextElementSibling = exports.getName = exports.hasAttrib = exports.getAttributeValue = exports.getSiblings = exports.getParent = exports.getChildren = void 0;
      var domhandler_1 = require_lib2();
      var emptyArray = [];
      function getChildren(elem) {
        var _a;
        return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
      }
      exports.getChildren = getChildren;
      function getParent(elem) {
        return elem.parent || null;
      }
      exports.getParent = getParent;
      function getSiblings(elem) {
        var _a, _b;
        var parent = getParent(elem);
        if (parent != null)
          return getChildren(parent);
        var siblings = [elem];
        var prev = elem.prev, next = elem.next;
        while (prev != null) {
          siblings.unshift(prev);
          _a = prev, prev = _a.prev;
        }
        while (next != null) {
          siblings.push(next);
          _b = next, next = _b.next;
        }
        return siblings;
      }
      exports.getSiblings = getSiblings;
      function getAttributeValue(elem, name) {
        var _a;
        return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
      }
      exports.getAttributeValue = getAttributeValue;
      function hasAttrib(elem, name) {
        return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
      }
      exports.hasAttrib = hasAttrib;
      function getName(elem) {
        return elem.name;
      }
      exports.getName = getName;
      function nextElementSibling(elem) {
        var _a;
        var next = elem.next;
        while (next !== null && !(0, domhandler_1.isTag)(next))
          _a = next, next = _a.next;
        return next;
      }
      exports.nextElementSibling = nextElementSibling;
      function prevElementSibling(elem) {
        var _a;
        var prev = elem.prev;
        while (prev !== null && !(0, domhandler_1.isTag)(prev))
          _a = prev, prev = _a.prev;
        return prev;
      }
      exports.prevElementSibling = prevElementSibling;
    }
  });

  // node_modules/domutils/lib/manipulation.js
  var require_manipulation = __commonJS({
    "node_modules/domutils/lib/manipulation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.prepend = exports.prependChild = exports.append = exports.appendChild = exports.replaceElement = exports.removeElement = void 0;
      function removeElement(elem) {
        if (elem.prev)
          elem.prev.next = elem.next;
        if (elem.next)
          elem.next.prev = elem.prev;
        if (elem.parent) {
          var childs = elem.parent.children;
          childs.splice(childs.lastIndexOf(elem), 1);
        }
      }
      exports.removeElement = removeElement;
      function replaceElement(elem, replacement) {
        var prev = replacement.prev = elem.prev;
        if (prev) {
          prev.next = replacement;
        }
        var next = replacement.next = elem.next;
        if (next) {
          next.prev = replacement;
        }
        var parent = replacement.parent = elem.parent;
        if (parent) {
          var childs = parent.children;
          childs[childs.lastIndexOf(elem)] = replacement;
        }
      }
      exports.replaceElement = replaceElement;
      function appendChild(elem, child) {
        removeElement(child);
        child.next = null;
        child.parent = elem;
        if (elem.children.push(child) > 1) {
          var sibling = elem.children[elem.children.length - 2];
          sibling.next = child;
          child.prev = sibling;
        } else {
          child.prev = null;
        }
      }
      exports.appendChild = appendChild;
      function append(elem, next) {
        removeElement(next);
        var parent = elem.parent;
        var currNext = elem.next;
        next.next = currNext;
        next.prev = elem;
        elem.next = next;
        next.parent = parent;
        if (currNext) {
          currNext.prev = next;
          if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
          }
        } else if (parent) {
          parent.children.push(next);
        }
      }
      exports.append = append;
      function prependChild(elem, child) {
        removeElement(child);
        child.parent = elem;
        child.prev = null;
        if (elem.children.unshift(child) !== 1) {
          var sibling = elem.children[1];
          sibling.prev = child;
          child.next = sibling;
        } else {
          child.next = null;
        }
      }
      exports.prependChild = prependChild;
      function prepend(elem, prev) {
        removeElement(prev);
        var parent = elem.parent;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.indexOf(elem), 0, prev);
        }
        if (elem.prev) {
          elem.prev.next = prev;
        }
        prev.parent = parent;
        prev.prev = elem.prev;
        prev.next = elem;
        elem.prev = prev;
      }
      exports.prepend = prepend;
    }
  });

  // node_modules/domutils/lib/querying.js
  var require_querying = __commonJS({
    "node_modules/domutils/lib/querying.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.findAll = exports.existsOne = exports.findOne = exports.findOneChild = exports.find = exports.filter = void 0;
      var domhandler_1 = require_lib2();
      function filter(test, node, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        if (!Array.isArray(node))
          node = [node];
        return find(test, node, recurse, limit);
      }
      exports.filter = filter;
      function find(test, nodes, recurse, limit) {
        var result = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
          var elem = nodes_1[_i];
          if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
              break;
          }
          if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
            var children = find(test, elem.children, recurse, limit);
            result.push.apply(result, children);
            limit -= children.length;
            if (limit <= 0)
              break;
          }
        }
        return result;
      }
      exports.find = find;
      function findOneChild(test, nodes) {
        return nodes.find(test);
      }
      exports.findOneChild = findOneChild;
      function findOne(test, nodes, recurse) {
        if (recurse === void 0) {
          recurse = true;
        }
        var elem = null;
        for (var i = 0; i < nodes.length && !elem; i++) {
          var checked = nodes[i];
          if (!(0, domhandler_1.isTag)(checked)) {
            continue;
          } else if (test(checked)) {
            elem = checked;
          } else if (recurse && checked.children.length > 0) {
            elem = findOne(test, checked.children);
          }
        }
        return elem;
      }
      exports.findOne = findOne;
      function existsOne(test, nodes) {
        return nodes.some(function(checked) {
          return (0, domhandler_1.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne(test, checked.children));
        });
      }
      exports.existsOne = existsOne;
      function findAll(test, nodes) {
        var _a;
        var result = [];
        var stack = nodes.filter(domhandler_1.isTag);
        var elem;
        while (elem = stack.shift()) {
          var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1.isTag);
          if (children && children.length > 0) {
            stack.unshift.apply(stack, children);
          }
          if (test(elem))
            result.push(elem);
        }
        return result;
      }
      exports.findAll = findAll;
    }
  });

  // node_modules/domutils/lib/legacy.js
  var require_legacy2 = __commonJS({
    "node_modules/domutils/lib/legacy.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getElementsByTagType = exports.getElementsByTagName = exports.getElementById = exports.getElements = exports.testElement = void 0;
      var domhandler_1 = require_lib2();
      var querying_1 = require_querying();
      var Checks = {
        tag_name: function(name) {
          if (typeof name === "function") {
            return function(elem) {
              return (0, domhandler_1.isTag)(elem) && name(elem.name);
            };
          } else if (name === "*") {
            return domhandler_1.isTag;
          }
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && elem.name === name;
          };
        },
        tag_type: function(type) {
          if (typeof type === "function") {
            return function(elem) {
              return type(elem.type);
            };
          }
          return function(elem) {
            return elem.type === type;
          };
        },
        tag_contains: function(data) {
          if (typeof data === "function") {
            return function(elem) {
              return (0, domhandler_1.isText)(elem) && data(elem.data);
            };
          }
          return function(elem) {
            return (0, domhandler_1.isText)(elem) && elem.data === data;
          };
        }
      };
      function getAttribCheck(attrib, value) {
        if (typeof value === "function") {
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
          };
        }
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
        };
      }
      function combineFuncs(a, b) {
        return function(elem) {
          return a(elem) || b(elem);
        };
      }
      function compileTest(options) {
        var funcs = Object.keys(options).map(function(key) {
          var value = options[key];
          return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
        });
        return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
      }
      function testElement(options, node) {
        var test = compileTest(options);
        return test ? test(node) : true;
      }
      exports.testElement = testElement;
      function getElements(options, nodes, recurse, limit) {
        if (limit === void 0) {
          limit = Infinity;
        }
        var test = compileTest(options);
        return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
      }
      exports.getElements = getElements;
      function getElementById(id, nodes, recurse) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (!Array.isArray(nodes))
          nodes = [nodes];
        return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
      }
      exports.getElementById = getElementById;
      function getElementsByTagName(tagName, nodes, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
      }
      exports.getElementsByTagName = getElementsByTagName;
      function getElementsByTagType(type, nodes, recurse, limit) {
        if (recurse === void 0) {
          recurse = true;
        }
        if (limit === void 0) {
          limit = Infinity;
        }
        return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
      }
      exports.getElementsByTagType = getElementsByTagType;
    }
  });

  // node_modules/domutils/lib/helpers.js
  var require_helpers = __commonJS({
    "node_modules/domutils/lib/helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.uniqueSort = exports.compareDocumentPosition = exports.removeSubsets = void 0;
      var domhandler_1 = require_lib2();
      function removeSubsets(nodes) {
        var idx = nodes.length;
        while (--idx >= 0) {
          var node = nodes[idx];
          if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
            nodes.splice(idx, 1);
            continue;
          }
          for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
            if (nodes.includes(ancestor)) {
              nodes.splice(idx, 1);
              break;
            }
          }
        }
        return nodes;
      }
      exports.removeSubsets = removeSubsets;
      function compareDocumentPosition(nodeA, nodeB) {
        var aParents = [];
        var bParents = [];
        if (nodeA === nodeB) {
          return 0;
        }
        var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
        while (current) {
          aParents.unshift(current);
          current = current.parent;
        }
        current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
        while (current) {
          bParents.unshift(current);
          current = current.parent;
        }
        var maxIdx = Math.min(aParents.length, bParents.length);
        var idx = 0;
        while (idx < maxIdx && aParents[idx] === bParents[idx]) {
          idx++;
        }
        if (idx === 0) {
          return 1;
        }
        var sharedParent = aParents[idx - 1];
        var siblings = sharedParent.children;
        var aSibling = aParents[idx];
        var bSibling = bParents[idx];
        if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
          if (sharedParent === nodeB) {
            return 4 | 16;
          }
          return 4;
        }
        if (sharedParent === nodeA) {
          return 2 | 8;
        }
        return 2;
      }
      exports.compareDocumentPosition = compareDocumentPosition;
      function uniqueSort(nodes) {
        nodes = nodes.filter(function(node, i, arr) {
          return !arr.includes(node, i + 1);
        });
        nodes.sort(function(a, b) {
          var relative = compareDocumentPosition(a, b);
          if (relative & 2) {
            return -1;
          } else if (relative & 4) {
            return 1;
          }
          return 0;
        });
        return nodes;
      }
      exports.uniqueSort = uniqueSort;
    }
  });

  // node_modules/domutils/lib/feeds.js
  var require_feeds = __commonJS({
    "node_modules/domutils/lib/feeds.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFeed = void 0;
      var stringify_1 = require_stringify2();
      var legacy_1 = require_legacy2();
      function getFeed(doc) {
        var feedRoot = getOneElement(isValidFeed, doc);
        return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
      }
      exports.getFeed = getFeed;
      function getAtomFeed(feedRoot) {
        var _a;
        var childs = feedRoot.children;
        var feed = {
          type: "atom",
          items: (0, legacy_1.getElementsByTagName)("entry", childs).map(function(item) {
            var _a2;
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href2 = (_a2 = getOneElement("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs.href;
            if (href2) {
              entry.link = href2;
            }
            var description = fetch2("summary", children) || fetch2("content", children);
            if (description) {
              entry.description = description;
            }
            var pubDate = fetch2("updated", children);
            if (pubDate) {
              entry.pubDate = new Date(pubDate);
            }
            return entry;
          })
        };
        addConditionally(feed, "id", "id", childs);
        addConditionally(feed, "title", "title", childs);
        var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
        if (href) {
          feed.link = href;
        }
        addConditionally(feed, "description", "subtitle", childs);
        var updated = fetch2("updated", childs);
        if (updated) {
          feed.updated = new Date(updated);
        }
        addConditionally(feed, "author", "email", childs, true);
        return feed;
      }
      function getRssFeed(feedRoot) {
        var _a, _b;
        var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
        var feed = {
          type: feedRoot.name.substr(0, 3),
          id: "",
          items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch2("pubDate", children);
            if (pubDate)
              entry.pubDate = new Date(pubDate);
            return entry;
          })
        };
        addConditionally(feed, "title", "title", childs);
        addConditionally(feed, "link", "link", childs);
        addConditionally(feed, "description", "description", childs);
        var updated = fetch2("lastBuildDate", childs);
        if (updated) {
          feed.updated = new Date(updated);
        }
        addConditionally(feed, "author", "managingEditor", childs, true);
        return feed;
      }
      var MEDIA_KEYS_STRING = ["url", "type", "lang"];
      var MEDIA_KEYS_INT = [
        "fileSize",
        "bitrate",
        "framerate",
        "samplingrate",
        "channels",
        "duration",
        "height",
        "width"
      ];
      function getMediaElements(where) {
        return (0, legacy_1.getElementsByTagName)("media:content", where).map(function(elem) {
          var attribs = elem.attribs;
          var media = {
            medium: attribs.medium,
            isDefault: !!attribs.isDefault
          };
          for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
              media[attrib] = attribs[attrib];
            }
          }
          for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) {
              media[attrib] = parseInt(attribs[attrib], 10);
            }
          }
          if (attribs.expression) {
            media.expression = attribs.expression;
          }
          return media;
        });
      }
      function getOneElement(tagName, node) {
        return (0, legacy_1.getElementsByTagName)(tagName, node, true, 1)[0];
      }
      function fetch2(tagName, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
      }
      function addConditionally(obj, prop, tagName, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        var val = fetch2(tagName, where, recurse);
        if (val)
          obj[prop] = val;
      }
      function isValidFeed(value) {
        return value === "rss" || value === "feed" || value === "rdf:RDF";
      }
    }
  });

  // node_modules/domutils/lib/index.js
  var require_lib5 = __commonJS({
    "node_modules/domutils/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
      __exportStar(require_stringify2(), exports);
      __exportStar(require_traversal(), exports);
      __exportStar(require_manipulation(), exports);
      __exportStar(require_querying(), exports);
      __exportStar(require_legacy2(), exports);
      __exportStar(require_helpers(), exports);
      __exportStar(require_feeds(), exports);
      var domhandler_1 = require_lib2();
      Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
        return domhandler_1.isTag;
      } });
      Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
        return domhandler_1.isCDATA;
      } });
      Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
        return domhandler_1.isText;
      } });
      Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
        return domhandler_1.isComment;
      } });
      Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
        return domhandler_1.isDocument;
      } });
      Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
        return domhandler_1.hasChildren;
      } });
    }
  });

  // node_modules/boolbase/index.js
  var require_boolbase = __commonJS({
    "node_modules/boolbase/index.js"(exports, module) {
      module.exports = {
        trueFunc: function trueFunc() {
          return true;
        },
        falseFunc: function falseFunc() {
          return false;
        }
      };
    }
  });

  // node_modules/css-select/lib/procedure.js
  var require_procedure = __commonJS({
    "node_modules/css-select/lib/procedure.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isTraversal = exports.procedure = void 0;
      exports.procedure = {
        universal: 50,
        tag: 30,
        attribute: 1,
        pseudo: 0,
        "pseudo-element": 0,
        "column-combinator": -1,
        descendant: -1,
        child: -1,
        parent: -1,
        sibling: -1,
        adjacent: -1,
        _flexibleDescendant: -1
      };
      function isTraversal(t) {
        return exports.procedure[t.type] < 0;
      }
      exports.isTraversal = isTraversal;
    }
  });

  // node_modules/css-select/lib/sort.js
  var require_sort = __commonJS({
    "node_modules/css-select/lib/sort.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var css_what_1 = require_commonjs();
      var procedure_1 = require_procedure();
      var attributes = {
        exists: 10,
        equals: 8,
        not: 7,
        start: 6,
        end: 6,
        any: 5,
        hyphen: 4,
        element: 4
      };
      function sortByProcedure(arr) {
        var procs = arr.map(getProcedure);
        for (var i = 1; i < arr.length; i++) {
          var procNew = procs[i];
          if (procNew < 0)
            continue;
          for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            var token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
          }
        }
      }
      exports.default = sortByProcedure;
      function getProcedure(token) {
        var proc = procedure_1.procedure[token.type];
        if (token.type === css_what_1.SelectorType.Attribute) {
          proc = attributes[token.action];
          if (proc === attributes.equals && token.name === "id") {
            proc = 9;
          }
          if (token.ignoreCase) {
            proc >>= 1;
          }
        } else if (token.type === css_what_1.SelectorType.Pseudo) {
          if (!token.data) {
            proc = 3;
          } else if (token.name === "has" || token.name === "contains") {
            proc = 0;
          } else if (Array.isArray(token.data)) {
            proc = 0;
            for (var i = 0; i < token.data.length; i++) {
              if (token.data[i].length !== 1)
                continue;
              var cur = getProcedure(token.data[i][0]);
              if (cur === 0) {
                proc = 0;
                break;
              }
              if (cur > proc)
                proc = cur;
            }
            if (token.data.length > 1 && proc > 0)
              proc -= 1;
          } else {
            proc = 1;
          }
        }
        return proc;
      }
    }
  });

  // node_modules/css-select/lib/attributes.js
  var require_attributes = __commonJS({
    "node_modules/css-select/lib/attributes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.attributeRules = void 0;
      var boolbase_1 = require_boolbase();
      var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
      function escapeRegex(value) {
        return value.replace(reChars, "\\$&");
      }
      var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
        "accept",
        "accept-charset",
        "align",
        "alink",
        "axis",
        "bgcolor",
        "charset",
        "checked",
        "clear",
        "codetype",
        "color",
        "compact",
        "declare",
        "defer",
        "dir",
        "direction",
        "disabled",
        "enctype",
        "face",
        "frame",
        "hreflang",
        "http-equiv",
        "lang",
        "language",
        "link",
        "media",
        "method",
        "multiple",
        "nohref",
        "noresize",
        "noshade",
        "nowrap",
        "readonly",
        "rel",
        "rev",
        "rules",
        "scope",
        "scrolling",
        "selected",
        "shape",
        "target",
        "text",
        "type",
        "valign",
        "valuetype",
        "vlink"
      ]);
      function shouldIgnoreCase(selector, options) {
        return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
      }
      exports.attributeRules = {
        equals: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
            };
          }
          return function(elem) {
            return adapter.getAttributeValue(elem, name) === value && next(elem);
          };
        },
        hyphen: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          var len = value.length;
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
          }
          return function hyphen(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
          };
        },
        element: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name, value = data.value;
          if (/\s/.test(value)) {
            return boolbase_1.falseFunc;
          }
          var regex = new RegExp("(?:^|\\s)".concat(escapeRegex(value), "(?:$|\\s)"), shouldIgnoreCase(data, options) ? "i" : "");
          return function element(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
          };
        },
        exists: function(next, _a, _b) {
          var name = _a.name;
          var adapter = _b.adapter;
          return function(elem) {
            return adapter.hasAttrib(elem, name) && next(elem);
          };
        },
        start: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          var len = value.length;
          if (len === 0) {
            return boolbase_1.falseFunc;
          }
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
            };
          }
          return function(elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
          };
        },
        end: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          var len = -value.length;
          if (len === 0) {
            return boolbase_1.falseFunc;
          }
          if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var _a;
              return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
          }
          return function(elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
          };
        },
        any: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name, value = data.value;
          if (value === "") {
            return boolbase_1.falseFunc;
          }
          if (shouldIgnoreCase(data, options)) {
            var regex_1 = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
            };
          }
          return function(elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
          };
        },
        not: function(next, data, options) {
          var adapter = options.adapter;
          var name = data.name;
          var value = data.value;
          if (value === "") {
            return function(elem) {
              return !!adapter.getAttributeValue(elem, name) && next(elem);
            };
          } else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function(elem) {
              var attr = adapter.getAttributeValue(elem, name);
              return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
            };
          }
          return function(elem) {
            return adapter.getAttributeValue(elem, name) !== value && next(elem);
          };
        }
      };
    }
  });

  // node_modules/nth-check/lib/parse.js
  var require_parse2 = __commonJS({
    "node_modules/nth-check/lib/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parse = void 0;
      var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
      var ZERO = "0".charCodeAt(0);
      var NINE = "9".charCodeAt(0);
      function parse(formula) {
        formula = formula.trim().toLowerCase();
        if (formula === "even") {
          return [2, 0];
        } else if (formula === "odd") {
          return [2, 1];
        }
        var idx = 0;
        var a = 0;
        var sign = readSign();
        var number = readNumber();
        if (idx < formula.length && formula.charAt(idx) === "n") {
          idx++;
          a = sign * (number !== null && number !== void 0 ? number : 1);
          skipWhitespace();
          if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
          } else {
            sign = number = 0;
          }
        }
        if (number === null || idx < formula.length) {
          throw new Error("n-th rule couldn't be parsed ('" + formula + "')");
        }
        return [a, sign * number];
        function readSign() {
          if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
          }
          if (formula.charAt(idx) === "+") {
            idx++;
          }
          return 1;
        }
        function readNumber() {
          var start = idx;
          var value = 0;
          while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
          }
          return idx === start ? null : value;
        }
        function skipWhitespace() {
          while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
            idx++;
          }
        }
      }
      exports.parse = parse;
    }
  });

  // node_modules/nth-check/lib/compile.js
  var require_compile = __commonJS({
    "node_modules/nth-check/lib/compile.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compile = void 0;
      var boolbase_1 = require_boolbase();
      function compile(parsed) {
        var a = parsed[0];
        var b = parsed[1] - 1;
        if (b < 0 && a <= 0)
          return boolbase_1.falseFunc;
        if (a === -1)
          return function(index) {
            return index <= b;
          };
        if (a === 0)
          return function(index) {
            return index === b;
          };
        if (a === 1)
          return b < 0 ? boolbase_1.trueFunc : function(index) {
            return index >= b;
          };
        var absA = Math.abs(a);
        var bMod = (b % absA + absA) % absA;
        return a > 1 ? function(index) {
          return index >= b && index % absA === bMod;
        } : function(index) {
          return index <= b && index % absA === bMod;
        };
      }
      exports.compile = compile;
    }
  });

  // node_modules/nth-check/lib/index.js
  var require_lib6 = __commonJS({
    "node_modules/nth-check/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compile = exports.parse = void 0;
      var parse_1 = require_parse2();
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return parse_1.parse;
      } });
      var compile_1 = require_compile();
      Object.defineProperty(exports, "compile", { enumerable: true, get: function() {
        return compile_1.compile;
      } });
      function nthCheck(formula) {
        return (0, compile_1.compile)((0, parse_1.parse)(formula));
      }
      exports.default = nthCheck;
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/filters.js
  var require_filters = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/filters.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.filters = void 0;
      var nth_check_1 = __importDefault(require_lib6());
      var boolbase_1 = require_boolbase();
      function getChildFunc(next, adapter) {
        return function(elem) {
          var parent = adapter.getParent(elem);
          return parent != null && adapter.isTag(parent) && next(elem);
        };
      }
      exports.filters = {
        contains: function(next, text, _a) {
          var adapter = _a.adapter;
          return function contains(elem) {
            return next(elem) && adapter.getText(elem).includes(text);
          };
        },
        icontains: function(next, text, _a) {
          var adapter = _a.adapter;
          var itext = text.toLowerCase();
          return function icontains(elem) {
            return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
          };
        },
        "nth-child": function(next, rule, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
          return function nthChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
              if (equals(elem, siblings[i]))
                break;
              if (adapter.isTag(siblings[i])) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        "nth-last-child": function(next, rule, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
          return function nthLastChild(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
              if (equals(elem, siblings[i]))
                break;
              if (adapter.isTag(siblings[i])) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        "nth-of-type": function(next, rule, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
          return function nthOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        "nth-last-of-type": function(next, rule, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var func = (0, nth_check_1.default)(rule);
          if (func === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (func === boolbase_1.trueFunc)
            return getChildFunc(next, adapter);
          return function nthLastOfType(elem) {
            var siblings = adapter.getSiblings(elem);
            var pos = 0;
            for (var i = siblings.length - 1; i >= 0; i--) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
                pos++;
              }
            }
            return func(pos) && next(elem);
          };
        },
        root: function(next, _rule, _a) {
          var adapter = _a.adapter;
          return function(elem) {
            var parent = adapter.getParent(elem);
            return (parent == null || !adapter.isTag(parent)) && next(elem);
          };
        },
        scope: function(next, rule, options, context) {
          var equals = options.equals;
          if (!context || context.length === 0) {
            return exports.filters.root(next, rule, options);
          }
          if (context.length === 1) {
            return function(elem) {
              return equals(context[0], elem) && next(elem);
            };
          }
          return function(elem) {
            return context.includes(elem) && next(elem);
          };
        },
        hover: dynamicStatePseudo("isHovered"),
        visited: dynamicStatePseudo("isVisited"),
        active: dynamicStatePseudo("isActive")
      };
      function dynamicStatePseudo(name) {
        return function dynamicPseudo(next, _rule, _a) {
          var adapter = _a.adapter;
          var func = adapter[name];
          if (typeof func !== "function") {
            return boolbase_1.falseFunc;
          }
          return function active(elem) {
            return func(elem) && next(elem);
          };
        };
      }
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/pseudos.js
  var require_pseudos = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/pseudos.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.verifyPseudoArgs = exports.pseudos = void 0;
      exports.pseudos = {
        empty: function(elem, _a) {
          var adapter = _a.adapter;
          return !adapter.getChildren(elem).some(function(elem2) {
            return adapter.isTag(elem2) || adapter.getText(elem2) !== "";
          });
        },
        "first-child": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var firstChild = adapter.getSiblings(elem).find(function(elem2) {
            return adapter.isTag(elem2);
          });
          return firstChild != null && equals(elem, firstChild);
        },
        "last-child": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var siblings = adapter.getSiblings(elem);
          for (var i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
              return true;
            if (adapter.isTag(siblings[i]))
              break;
          }
          return false;
        },
        "first-of-type": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var siblings = adapter.getSiblings(elem);
          var elemName = adapter.getName(elem);
          for (var i = 0; i < siblings.length; i++) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
              break;
            }
          }
          return false;
        },
        "last-of-type": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var siblings = adapter.getSiblings(elem);
          var elemName = adapter.getName(elem);
          for (var i = siblings.length - 1; i >= 0; i--) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              return true;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
              break;
            }
          }
          return false;
        },
        "only-of-type": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          var elemName = adapter.getName(elem);
          return adapter.getSiblings(elem).every(function(sibling) {
            return equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName;
          });
        },
        "only-child": function(elem, _a) {
          var adapter = _a.adapter, equals = _a.equals;
          return adapter.getSiblings(elem).every(function(sibling) {
            return equals(elem, sibling) || !adapter.isTag(sibling);
          });
        }
      };
      function verifyPseudoArgs(func, name, subselect) {
        if (subselect === null) {
          if (func.length > 2) {
            throw new Error("pseudo-selector :".concat(name, " requires an argument"));
          }
        } else if (func.length === 2) {
          throw new Error("pseudo-selector :".concat(name, " doesn't have any arguments"));
        }
      }
      exports.verifyPseudoArgs = verifyPseudoArgs;
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/aliases.js
  var require_aliases = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/aliases.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.aliases = void 0;
      exports.aliases = {
        "any-link": ":is(a, area, link)[href]",
        link: ":any-link:not(:visited)",
        disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
        enabled: ":not(:disabled)",
        checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
        required: ":is(input, select, textarea)[required]",
        optional: ":is(input, select, textarea):not([required])",
        selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
        checkbox: "[type=checkbox]",
        file: "[type=file]",
        password: "[type=password]",
        radio: "[type=radio]",
        reset: "[type=reset]",
        image: "[type=image]",
        submit: "[type=submit]",
        parent: ":not(:empty)",
        header: ":is(h1, h2, h3, h4, h5, h6)",
        button: ":is(button, input[type=button])",
        input: ":is(input, textarea, select, button)",
        text: "input:is(:not([type!='']), [type=text])"
      };
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/subselects.js
  var require_subselects = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/subselects.js"(exports) {
      "use strict";
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
      var boolbase_1 = require_boolbase();
      var procedure_1 = require_procedure();
      exports.PLACEHOLDER_ELEMENT = {};
      function ensureIsTag(next, adapter) {
        if (next === boolbase_1.falseFunc)
          return boolbase_1.falseFunc;
        return function(elem) {
          return adapter.isTag(elem) && next(elem);
        };
      }
      exports.ensureIsTag = ensureIsTag;
      function getNextSiblings(elem, adapter) {
        var siblings = adapter.getSiblings(elem);
        if (siblings.length <= 1)
          return [];
        var elemIndex = siblings.indexOf(elem);
        if (elemIndex < 0 || elemIndex === siblings.length - 1)
          return [];
        return siblings.slice(elemIndex + 1).filter(adapter.isTag);
      }
      exports.getNextSiblings = getNextSiblings;
      var is = function(next, token, options, context, compileToken) {
        var opts = {
          xmlMode: !!options.xmlMode,
          adapter: options.adapter,
          equals: options.equals
        };
        var func = compileToken(token, opts, context);
        return function(elem) {
          return func(elem) && next(elem);
        };
      };
      exports.subselects = {
        is,
        matches: is,
        where: is,
        not: function(next, token, options, context, compileToken) {
          var opts = {
            xmlMode: !!options.xmlMode,
            adapter: options.adapter,
            equals: options.equals
          };
          var func = compileToken(token, opts, context);
          if (func === boolbase_1.falseFunc)
            return next;
          if (func === boolbase_1.trueFunc)
            return boolbase_1.falseFunc;
          return function not(elem) {
            return !func(elem) && next(elem);
          };
        },
        has: function(next, subselect, options, _context, compileToken) {
          var adapter = options.adapter;
          var opts = {
            xmlMode: !!options.xmlMode,
            adapter,
            equals: options.equals
          };
          var context = subselect.some(function(s) {
            return s.some(procedure_1.isTraversal);
          }) ? [exports.PLACEHOLDER_ELEMENT] : void 0;
          var compiled = compileToken(subselect, opts, context);
          if (compiled === boolbase_1.falseFunc)
            return boolbase_1.falseFunc;
          if (compiled === boolbase_1.trueFunc) {
            return function(elem) {
              return adapter.getChildren(elem).some(adapter.isTag) && next(elem);
            };
          }
          var hasElement = ensureIsTag(compiled, adapter);
          var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings = _a === void 0 ? false : _a;
          if (context) {
            return function(elem) {
              context[0] = elem;
              var childs = adapter.getChildren(elem);
              var nextElements = shouldTestNextSiblings ? __spreadArray(__spreadArray([], childs, true), getNextSiblings(elem, adapter), true) : childs;
              return next(elem) && adapter.existsOne(hasElement, nextElements);
            };
          }
          return function(elem) {
            return next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
          };
        }
      };
    }
  });

  // node_modules/css-select/lib/pseudo-selectors/index.js
  var require_pseudo_selectors = __commonJS({
    "node_modules/css-select/lib/pseudo-selectors/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
      var boolbase_1 = require_boolbase();
      var css_what_1 = require_commonjs();
      var filters_1 = require_filters();
      Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
        return filters_1.filters;
      } });
      var pseudos_1 = require_pseudos();
      Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
        return pseudos_1.pseudos;
      } });
      var aliases_1 = require_aliases();
      Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
        return aliases_1.aliases;
      } });
      var subselects_1 = require_subselects();
      function compilePseudoSelector(next, selector, options, context, compileToken) {
        var name = selector.name, data = selector.data;
        if (Array.isArray(data)) {
          return subselects_1.subselects[name](next, data, options, context, compileToken);
        }
        if (name in aliases_1.aliases) {
          if (data != null) {
            throw new Error("Pseudo ".concat(name, " doesn't have any arguments"));
          }
          var alias = (0, css_what_1.parse)(aliases_1.aliases[name]);
          return subselects_1.subselects.is(next, alias, options, context, compileToken);
        }
        if (name in filters_1.filters) {
          return filters_1.filters[name](next, data, options, context);
        }
        if (name in pseudos_1.pseudos) {
          var pseudo_1 = pseudos_1.pseudos[name];
          (0, pseudos_1.verifyPseudoArgs)(pseudo_1, name, data);
          return pseudo_1 === boolbase_1.falseFunc ? boolbase_1.falseFunc : next === boolbase_1.trueFunc ? function(elem) {
            return pseudo_1(elem, options, data);
          } : function(elem) {
            return pseudo_1(elem, options, data) && next(elem);
          };
        }
        throw new Error("unmatched pseudo-class :".concat(name));
      }
      exports.compilePseudoSelector = compilePseudoSelector;
    }
  });

  // node_modules/css-select/lib/general.js
  var require_general = __commonJS({
    "node_modules/css-select/lib/general.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compileGeneralSelector = void 0;
      var attributes_1 = require_attributes();
      var pseudo_selectors_1 = require_pseudo_selectors();
      var css_what_1 = require_commonjs();
      function compileGeneralSelector(next, selector, options, context, compileToken) {
        var adapter = options.adapter, equals = options.equals;
        switch (selector.type) {
          case css_what_1.SelectorType.PseudoElement: {
            throw new Error("Pseudo-elements are not supported by css-select");
          }
          case css_what_1.SelectorType.ColumnCombinator: {
            throw new Error("Column combinators are not yet supported by css-select");
          }
          case css_what_1.SelectorType.Attribute: {
            if (selector.namespace != null) {
              throw new Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!options.xmlMode || options.lowerCaseAttributeNames) {
              selector.name = selector.name.toLowerCase();
            }
            return attributes_1.attributeRules[selector.action](next, selector, options);
          }
          case css_what_1.SelectorType.Pseudo: {
            return (0, pseudo_selectors_1.compilePseudoSelector)(next, selector, options, context, compileToken);
          }
          case css_what_1.SelectorType.Tag: {
            if (selector.namespace != null) {
              throw new Error("Namespaced tag names are not yet supported by css-select");
            }
            var name_1 = selector.name;
            if (!options.xmlMode || options.lowerCaseTags) {
              name_1 = name_1.toLowerCase();
            }
            return function tag(elem) {
              return adapter.getName(elem) === name_1 && next(elem);
            };
          }
          case css_what_1.SelectorType.Descendant: {
            if (options.cacheResults === false || typeof WeakSet === "undefined") {
              return function descendant(elem) {
                var current = elem;
                while (current = adapter.getParent(current)) {
                  if (adapter.isTag(current) && next(current)) {
                    return true;
                  }
                }
                return false;
              };
            }
            var isFalseCache_1 = /* @__PURE__ */ new WeakSet();
            return function cachedDescendant(elem) {
              var current = elem;
              while (current = adapter.getParent(current)) {
                if (!isFalseCache_1.has(current)) {
                  if (adapter.isTag(current) && next(current)) {
                    return true;
                  }
                  isFalseCache_1.add(current);
                }
              }
              return false;
            };
          }
          case "_flexibleDescendant": {
            return function flexibleDescendant(elem) {
              var current = elem;
              do {
                if (adapter.isTag(current) && next(current))
                  return true;
              } while (current = adapter.getParent(current));
              return false;
            };
          }
          case css_what_1.SelectorType.Parent: {
            return function parent(elem) {
              return adapter.getChildren(elem).some(function(elem2) {
                return adapter.isTag(elem2) && next(elem2);
              });
            };
          }
          case css_what_1.SelectorType.Child: {
            return function child(elem) {
              var parent = adapter.getParent(elem);
              return parent != null && adapter.isTag(parent) && next(parent);
            };
          }
          case css_what_1.SelectorType.Sibling: {
            return function sibling(elem) {
              var siblings = adapter.getSiblings(elem);
              for (var i = 0; i < siblings.length; i++) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                  break;
                if (adapter.isTag(currentSibling) && next(currentSibling)) {
                  return true;
                }
              }
              return false;
            };
          }
          case css_what_1.SelectorType.Adjacent: {
            if (adapter.prevElementSibling) {
              return function adjacent(elem) {
                var previous = adapter.prevElementSibling(elem);
                return previous != null && next(previous);
              };
            }
            return function adjacent(elem) {
              var siblings = adapter.getSiblings(elem);
              var lastElement;
              for (var i = 0; i < siblings.length; i++) {
                var currentSibling = siblings[i];
                if (equals(elem, currentSibling))
                  break;
                if (adapter.isTag(currentSibling)) {
                  lastElement = currentSibling;
                }
              }
              return !!lastElement && next(lastElement);
            };
          }
          case css_what_1.SelectorType.Universal: {
            if (selector.namespace != null && selector.namespace !== "*") {
              throw new Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return next;
          }
        }
      }
      exports.compileGeneralSelector = compileGeneralSelector;
    }
  });

  // node_modules/css-select/lib/compile.js
  var require_compile2 = __commonJS({
    "node_modules/css-select/lib/compile.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.compileToken = exports.compileUnsafe = exports.compile = void 0;
      var css_what_1 = require_commonjs();
      var boolbase_1 = require_boolbase();
      var sort_1 = __importDefault(require_sort());
      var procedure_1 = require_procedure();
      var general_1 = require_general();
      var subselects_1 = require_subselects();
      function compile(selector, options, context) {
        var next = compileUnsafe(selector, options, context);
        return (0, subselects_1.ensureIsTag)(next, options.adapter);
      }
      exports.compile = compile;
      function compileUnsafe(selector, options, context) {
        var token = typeof selector === "string" ? (0, css_what_1.parse)(selector) : selector;
        return compileToken(token, options, context);
      }
      exports.compileUnsafe = compileUnsafe;
      function includesScopePseudo(t) {
        return t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
          return data.some(includesScopePseudo);
        }));
      }
      var DESCENDANT_TOKEN = { type: css_what_1.SelectorType.Descendant };
      var FLEXIBLE_DESCENDANT_TOKEN = {
        type: "_flexibleDescendant"
      };
      var SCOPE_TOKEN = {
        type: css_what_1.SelectorType.Pseudo,
        name: "scope",
        data: null
      };
      function absolutize(token, _a, context) {
        var adapter = _a.adapter;
        var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function(e) {
          var parent = adapter.isTag(e) && adapter.getParent(e);
          return e === subselects_1.PLACEHOLDER_ELEMENT || parent && adapter.isTag(parent);
        }));
        for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
          var t = token_1[_i];
          if (t.length > 0 && (0, procedure_1.isTraversal)(t[0]) && t[0].type !== "descendant") {
          } else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
          } else {
            continue;
          }
          t.unshift(SCOPE_TOKEN);
        }
      }
      function compileToken(token, options, context) {
        var _a;
        token = token.filter(function(t) {
          return t.length > 0;
        });
        token.forEach(sort_1.default);
        context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
        var isArrayContext = Array.isArray(context);
        var finalContext = context && (Array.isArray(context) ? context : [context]);
        absolutize(token, options, finalContext);
        var shouldTestNextSiblings = false;
        var query = token.map(function(rules) {
          if (rules.length >= 2) {
            var first = rules[0], second = rules[1];
            if (first.type !== "pseudo" || first.name !== "scope") {
            } else if (isArrayContext && second.type === "descendant") {
              rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            } else if (second.type === "adjacent" || second.type === "sibling") {
              shouldTestNextSiblings = true;
            }
          }
          return compileRules(rules, options, finalContext);
        }).reduce(reduceRules, boolbase_1.falseFunc);
        query.shouldTestNextSiblings = shouldTestNextSiblings;
        return query;
      }
      exports.compileToken = compileToken;
      function compileRules(rules, options, context) {
        var _a;
        return rules.reduce(function(previous, rule) {
          return previous === boolbase_1.falseFunc ? boolbase_1.falseFunc : (0, general_1.compileGeneralSelector)(previous, rule, options, context, compileToken);
        }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.trueFunc);
      }
      function reduceRules(a, b) {
        if (b === boolbase_1.falseFunc || a === boolbase_1.trueFunc) {
          return a;
        }
        if (a === boolbase_1.falseFunc || b === boolbase_1.trueFunc) {
          return b;
        }
        return function combine(elem) {
          return a(elem) || b(elem);
        };
      }
    }
  });

  // node_modules/css-select/lib/index.js
  var require_lib7 = __commonJS({
    "node_modules/css-select/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;
      var DomUtils = __importStar(require_lib5());
      var boolbase_1 = require_boolbase();
      var compile_1 = require_compile2();
      var subselects_1 = require_subselects();
      var defaultEquals = function(a, b) {
        return a === b;
      };
      var defaultOptions = {
        adapter: DomUtils,
        equals: defaultEquals
      };
      function convertOptionFormats(options) {
        var _a, _b, _c, _d;
        var opts = options !== null && options !== void 0 ? options : defaultOptions;
        (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = DomUtils;
        (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
        return opts;
      }
      function wrapCompile(func) {
        return function addAdapter(selector, options, context) {
          var opts = convertOptionFormats(options);
          return func(selector, opts, context);
        };
      }
      exports.compile = wrapCompile(compile_1.compile);
      exports._compileUnsafe = wrapCompile(compile_1.compileUnsafe);
      exports._compileToken = wrapCompile(compile_1.compileToken);
      function getSelectorFunc(searchFunc) {
        return function select(query, elements, options) {
          var opts = convertOptionFormats(options);
          if (typeof query !== "function") {
            query = (0, compile_1.compileUnsafe)(query, opts, elements);
          }
          var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
          return searchFunc(query, filteredElements, opts);
        };
      }
      function prepareContext(elems, adapter, shouldTestNextSiblings) {
        if (shouldTestNextSiblings === void 0) {
          shouldTestNextSiblings = false;
        }
        if (shouldTestNextSiblings) {
          elems = appendNextSiblings(elems, adapter);
        }
        return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
      }
      exports.prepareContext = prepareContext;
      function appendNextSiblings(elem, adapter) {
        var elems = Array.isArray(elem) ? elem.slice(0) : [elem];
        var elemsLength = elems.length;
        for (var i = 0; i < elemsLength; i++) {
          var nextSiblings = (0, subselects_1.getNextSiblings)(elems[i], adapter);
          elems.push.apply(elems, nextSiblings);
        }
        return elems;
      }
      exports.selectAll = getSelectorFunc(function(query, elems, options) {
        return query === boolbase_1.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems);
      });
      exports.selectOne = getSelectorFunc(function(query, elems, options) {
        return query === boolbase_1.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems);
      });
      function is(elem, query, options) {
        var opts = convertOptionFormats(options);
        return (typeof query === "function" ? query : (0, compile_1.compile)(query, opts))(elem);
      }
      exports.is = is;
      exports.default = exports.selectAll;
      var pseudo_selectors_1 = require_pseudo_selectors();
      Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
        return pseudo_selectors_1.filters;
      } });
      Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
        return pseudo_selectors_1.pseudos;
      } });
      Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
        return pseudo_selectors_1.aliases;
      } });
    }
  });

  // node_modules/cheerio-select/lib/positionals.js
  var require_positionals = __commonJS({
    "node_modules/cheerio-select/lib/positionals.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getLimit = exports.isFilter = exports.filterNames = void 0;
      exports.filterNames = /* @__PURE__ */ new Set([
        "first",
        "last",
        "eq",
        "gt",
        "nth",
        "lt",
        "even",
        "odd"
      ]);
      function isFilter(s) {
        if (s.type !== "pseudo")
          return false;
        if (exports.filterNames.has(s.name))
          return true;
        if (s.name === "not" && Array.isArray(s.data)) {
          return s.data.some(function(s2) {
            return s2.some(isFilter);
          });
        }
        return false;
      }
      exports.isFilter = isFilter;
      function getLimit(filter, data) {
        var num = data != null ? parseInt(data, 10) : NaN;
        switch (filter) {
          case "first":
            return 1;
          case "nth":
          case "eq":
            return isFinite(num) ? num >= 0 ? num + 1 : Infinity : 0;
          case "lt":
            return isFinite(num) ? num >= 0 ? num : Infinity : 0;
          case "gt":
            return isFinite(num) ? Infinity : 0;
          default:
            return Infinity;
        }
      }
      exports.getLimit = getLimit;
    }
  });

  // node_modules/cheerio-select/lib/helpers.js
  var require_helpers2 = __commonJS({
    "node_modules/cheerio-select/lib/helpers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.groupSelectors = exports.getDocumentRoot = void 0;
      var positionals_1 = require_positionals();
      function getDocumentRoot(node) {
        while (node.parent)
          node = node.parent;
        return node;
      }
      exports.getDocumentRoot = getDocumentRoot;
      function groupSelectors(selectors) {
        var filteredSelectors = [];
        var plainSelectors = [];
        for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
          var selector = selectors_1[_i];
          if (selector.some(positionals_1.isFilter)) {
            filteredSelectors.push(selector);
          } else {
            plainSelectors.push(selector);
          }
        }
        return [plainSelectors, filteredSelectors];
      }
      exports.groupSelectors = groupSelectors;
    }
  });

  // node_modules/cheerio-select/lib/index.js
  var require_lib8 = __commonJS({
    "node_modules/cheerio-select/lib/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.select = exports.filter = exports.some = exports.is = exports.aliases = exports.pseudos = exports.filters = void 0;
      var css_what_1 = require_commonjs();
      var css_select_1 = require_lib7();
      var DomUtils = __importStar(require_lib5());
      var helpers_1 = require_helpers2();
      var positionals_1 = require_positionals();
      var css_select_2 = require_lib7();
      Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
        return css_select_2.filters;
      } });
      Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
        return css_select_2.pseudos;
      } });
      Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
        return css_select_2.aliases;
      } });
      var SCOPE_PSEUDO = {
        type: css_what_1.SelectorType.Pseudo,
        name: "scope",
        data: null
      };
      var CUSTOM_SCOPE_PSEUDO = __assign({}, SCOPE_PSEUDO);
      var UNIVERSAL_SELECTOR = {
        type: css_what_1.SelectorType.Universal,
        namespace: null
      };
      function is(element, selector, options) {
        if (options === void 0) {
          options = {};
        }
        return some([element], selector, options);
      }
      exports.is = is;
      function some(elements, selector, options) {
        if (options === void 0) {
          options = {};
        }
        if (typeof selector === "function")
          return elements.some(selector);
        var _a = (0, helpers_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
        return plain.length > 0 && elements.some((0, css_select_1._compileToken)(plain, options)) || filtered.some(function(sel) {
          return filterBySelector(sel, elements, options).length > 0;
        });
      }
      exports.some = some;
      function filterByPosition(filter2, elems, data, options) {
        var num = typeof data === "string" ? parseInt(data, 10) : NaN;
        switch (filter2) {
          case "first":
          case "lt":
            return elems;
          case "last":
            return elems.length > 0 ? [elems[elems.length - 1]] : elems;
          case "nth":
          case "eq":
            return isFinite(num) && Math.abs(num) < elems.length ? [num < 0 ? elems[elems.length + num] : elems[num]] : [];
          case "gt":
            return isFinite(num) ? elems.slice(num + 1) : [];
          case "even":
            return elems.filter(function(_, i) {
              return i % 2 === 0;
            });
          case "odd":
            return elems.filter(function(_, i) {
              return i % 2 === 1;
            });
          case "not": {
            var filtered_1 = new Set(filterParsed(data, elems, options));
            return elems.filter(function(e) {
              return !filtered_1.has(e);
            });
          }
        }
      }
      function filter(selector, elements, options) {
        if (options === void 0) {
          options = {};
        }
        return filterParsed((0, css_what_1.parse)(selector), elements, options);
      }
      exports.filter = filter;
      function filterParsed(selector, elements, options) {
        if (elements.length === 0)
          return [];
        var _a = (0, helpers_1.groupSelectors)(selector), plainSelectors = _a[0], filteredSelectors = _a[1];
        var found;
        if (plainSelectors.length) {
          var filtered = filterElements(elements, plainSelectors, options);
          if (filteredSelectors.length === 0) {
            return filtered;
          }
          if (filtered.length) {
            found = new Set(filtered);
          }
        }
        for (var i = 0; i < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i++) {
          var filteredSelector = filteredSelectors[i];
          var missing = found ? elements.filter(function(e) {
            return DomUtils.isTag(e) && !found.has(e);
          }) : elements;
          if (missing.length === 0)
            break;
          var filtered = filterBySelector(filteredSelector, elements, options);
          if (filtered.length) {
            if (!found) {
              if (i === filteredSelectors.length - 1) {
                return filtered;
              }
              found = new Set(filtered);
            } else {
              filtered.forEach(function(el) {
                return found.add(el);
              });
            }
          }
        }
        return typeof found !== "undefined" ? found.size === elements.length ? elements : elements.filter(function(el) {
          return found.has(el);
        }) : [];
      }
      function filterBySelector(selector, elements, options) {
        var _a;
        if (selector.some(css_what_1.isTraversal)) {
          var root = (_a = options.root) !== null && _a !== void 0 ? _a : (0, helpers_1.getDocumentRoot)(elements[0]);
          var sel = __spreadArray(__spreadArray([], selector, true), [CUSTOM_SCOPE_PSEUDO], false);
          return findFilterElements(root, sel, options, true, elements);
        }
        return findFilterElements(elements, selector, options, false);
      }
      function select(selector, root, options) {
        if (options === void 0) {
          options = {};
        }
        if (typeof selector === "function") {
          return find(root, selector);
        }
        var _a = (0, helpers_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
        var results = filtered.map(function(sel) {
          return findFilterElements(root, sel, options, true);
        });
        if (plain.length) {
          results.push(findElements(root, plain, options, Infinity));
        }
        if (results.length === 0) {
          return [];
        }
        if (results.length === 1) {
          return results[0];
        }
        return DomUtils.uniqueSort(results.reduce(function(a, b) {
          return __spreadArray(__spreadArray([], a, true), b, true);
        }));
      }
      exports.select = select;
      var specialTraversal = /* @__PURE__ */ new Set([
        css_what_1.SelectorType.Descendant,
        css_what_1.SelectorType.Adjacent
      ]);
      function includesScopePseudo(t) {
        return t !== SCOPE_PSEUDO && t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
          return data.some(includesScopePseudo);
        }));
      }
      function addContextIfScope(selector, options, scopeContext) {
        return scopeContext && selector.some(includesScopePseudo) ? __assign(__assign({}, options), { context: scopeContext }) : options;
      }
      function findFilterElements(root, selector, options, queryForSelector, scopeContext) {
        var filterIndex = selector.findIndex(positionals_1.isFilter);
        var sub = selector.slice(0, filterIndex);
        var filter2 = selector[filterIndex];
        var limit = (0, positionals_1.getLimit)(filter2.name, filter2.data);
        if (limit === 0)
          return [];
        var subOpts = addContextIfScope(sub, options, scopeContext);
        var elemsNoLimit = sub.length === 0 && !Array.isArray(root) ? DomUtils.getChildren(root).filter(DomUtils.isTag) : sub.length === 0 || sub.length === 1 && sub[0] === SCOPE_PSEUDO ? (Array.isArray(root) ? root : [root]).filter(DomUtils.isTag) : queryForSelector || sub.some(css_what_1.isTraversal) ? findElements(root, [sub], subOpts, limit) : filterElements(root, [sub], subOpts);
        var elems = elemsNoLimit.slice(0, limit);
        var result = filterByPosition(filter2.name, elems, filter2.data, options);
        if (result.length === 0 || selector.length === filterIndex + 1) {
          return result;
        }
        var remainingSelector = selector.slice(filterIndex + 1);
        var remainingHasTraversal = remainingSelector.some(css_what_1.isTraversal);
        var remainingOpts = addContextIfScope(remainingSelector, options, scopeContext);
        if (remainingHasTraversal) {
          if (specialTraversal.has(remainingSelector[0].type)) {
            remainingSelector.unshift(UNIVERSAL_SELECTOR);
          }
          remainingSelector.unshift(SCOPE_PSEUDO);
        }
        return remainingSelector.some(positionals_1.isFilter) ? findFilterElements(result, remainingSelector, options, false, scopeContext) : remainingHasTraversal ? findElements(result, [remainingSelector], remainingOpts, Infinity) : filterElements(result, [remainingSelector], remainingOpts);
      }
      function findElements(root, sel, options, limit) {
        if (limit === 0)
          return [];
        var query = (0, css_select_1._compileToken)(sel, options, root);
        return find(root, query, limit);
      }
      function find(root, query, limit) {
        if (limit === void 0) {
          limit = Infinity;
        }
        var elems = (0, css_select_1.prepareContext)(root, DomUtils, query.shouldTestNextSiblings);
        return DomUtils.find(function(node) {
          return DomUtils.isTag(node) && query(node);
        }, elems, true, limit);
      }
      function filterElements(elements, sel, options) {
        var els = (Array.isArray(elements) ? elements : [elements]).filter(DomUtils.isTag);
        if (els.length === 0)
          return els;
        var query = (0, css_select_1._compileToken)(sel, options);
        return els.filter(query);
      }
    }
  });

  // node_modules/htmlparser2/lib/Tokenizer.js
  var require_Tokenizer = __commonJS({
    "node_modules/htmlparser2/lib/Tokenizer.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var decode_codepoint_1 = __importDefault(require_decode_codepoint());
      var entities_json_1 = __importDefault(require_entities());
      var legacy_json_1 = __importDefault(require_legacy());
      var xml_json_1 = __importDefault(require_xml());
      function whitespace(c) {
        return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
      }
      function isASCIIAlpha(c) {
        return c >= "a" && c <= "z" || c >= "A" && c <= "Z";
      }
      function ifElseState(upper, SUCCESS, FAILURE) {
        var lower = upper.toLowerCase();
        if (upper === lower) {
          return function(t, c) {
            if (c === lower) {
              t._state = SUCCESS;
            } else {
              t._state = FAILURE;
              t._index--;
            }
          };
        }
        return function(t, c) {
          if (c === lower || c === upper) {
            t._state = SUCCESS;
          } else {
            t._state = FAILURE;
            t._index--;
          }
        };
      }
      function consumeSpecialNameChar(upper, NEXT_STATE) {
        var lower = upper.toLowerCase();
        return function(t, c) {
          if (c === lower || c === upper) {
            t._state = NEXT_STATE;
          } else {
            t._state = 3;
            t._index--;
          }
        };
      }
      var stateBeforeCdata1 = ifElseState("C", 24, 16);
      var stateBeforeCdata2 = ifElseState("D", 25, 16);
      var stateBeforeCdata3 = ifElseState("A", 26, 16);
      var stateBeforeCdata4 = ifElseState("T", 27, 16);
      var stateBeforeCdata5 = ifElseState("A", 28, 16);
      var stateBeforeScript1 = consumeSpecialNameChar("R", 35);
      var stateBeforeScript2 = consumeSpecialNameChar("I", 36);
      var stateBeforeScript3 = consumeSpecialNameChar("P", 37);
      var stateBeforeScript4 = consumeSpecialNameChar("T", 38);
      var stateAfterScript1 = ifElseState("R", 40, 1);
      var stateAfterScript2 = ifElseState("I", 41, 1);
      var stateAfterScript3 = ifElseState("P", 42, 1);
      var stateAfterScript4 = ifElseState("T", 43, 1);
      var stateBeforeStyle1 = consumeSpecialNameChar("Y", 45);
      var stateBeforeStyle2 = consumeSpecialNameChar("L", 46);
      var stateBeforeStyle3 = consumeSpecialNameChar("E", 47);
      var stateAfterStyle1 = ifElseState("Y", 49, 1);
      var stateAfterStyle2 = ifElseState("L", 50, 1);
      var stateAfterStyle3 = ifElseState("E", 51, 1);
      var stateBeforeSpecialT = consumeSpecialNameChar("I", 54);
      var stateBeforeTitle1 = consumeSpecialNameChar("T", 55);
      var stateBeforeTitle2 = consumeSpecialNameChar("L", 56);
      var stateBeforeTitle3 = consumeSpecialNameChar("E", 57);
      var stateAfterSpecialTEnd = ifElseState("I", 58, 1);
      var stateAfterTitle1 = ifElseState("T", 59, 1);
      var stateAfterTitle2 = ifElseState("L", 60, 1);
      var stateAfterTitle3 = ifElseState("E", 61, 1);
      var stateBeforeEntity = ifElseState("#", 63, 64);
      var stateBeforeNumericEntity = ifElseState("X", 66, 65);
      var Tokenizer = function() {
        function Tokenizer2(options, cbs) {
          var _a;
          this._state = 1;
          this.buffer = "";
          this.sectionStart = 0;
          this._index = 0;
          this.bufferOffset = 0;
          this.baseState = 1;
          this.special = 1;
          this.running = true;
          this.ended = false;
          this.cbs = cbs;
          this.xmlMode = !!(options === null || options === void 0 ? void 0 : options.xmlMode);
          this.decodeEntities = (_a = options === null || options === void 0 ? void 0 : options.decodeEntities) !== null && _a !== void 0 ? _a : true;
        }
        Tokenizer2.prototype.reset = function() {
          this._state = 1;
          this.buffer = "";
          this.sectionStart = 0;
          this._index = 0;
          this.bufferOffset = 0;
          this.baseState = 1;
          this.special = 1;
          this.running = true;
          this.ended = false;
        };
        Tokenizer2.prototype.write = function(chunk) {
          if (this.ended)
            this.cbs.onerror(Error(".write() after done!"));
          this.buffer += chunk;
          this.parse();
        };
        Tokenizer2.prototype.end = function(chunk) {
          if (this.ended)
            this.cbs.onerror(Error(".end() after done!"));
          if (chunk)
            this.write(chunk);
          this.ended = true;
          if (this.running)
            this.finish();
        };
        Tokenizer2.prototype.pause = function() {
          this.running = false;
        };
        Tokenizer2.prototype.resume = function() {
          this.running = true;
          if (this._index < this.buffer.length) {
            this.parse();
          }
          if (this.ended) {
            this.finish();
          }
        };
        Tokenizer2.prototype.getAbsoluteIndex = function() {
          return this.bufferOffset + this._index;
        };
        Tokenizer2.prototype.stateText = function(c) {
          if (c === "<") {
            if (this._index > this.sectionStart) {
              this.cbs.ontext(this.getSection());
            }
            this._state = 2;
            this.sectionStart = this._index;
          } else if (this.decodeEntities && c === "&" && (this.special === 1 || this.special === 4)) {
            if (this._index > this.sectionStart) {
              this.cbs.ontext(this.getSection());
            }
            this.baseState = 1;
            this._state = 62;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.isTagStartChar = function(c) {
          return isASCIIAlpha(c) || this.xmlMode && !whitespace(c) && c !== "/" && c !== ">";
        };
        Tokenizer2.prototype.stateBeforeTagName = function(c) {
          if (c === "/") {
            this._state = 5;
          } else if (c === "<") {
            this.cbs.ontext(this.getSection());
            this.sectionStart = this._index;
          } else if (c === ">" || this.special !== 1 || whitespace(c)) {
            this._state = 1;
          } else if (c === "!") {
            this._state = 15;
            this.sectionStart = this._index + 1;
          } else if (c === "?") {
            this._state = 17;
            this.sectionStart = this._index + 1;
          } else if (!this.isTagStartChar(c)) {
            this._state = 1;
          } else {
            this._state = !this.xmlMode && (c === "s" || c === "S") ? 32 : !this.xmlMode && (c === "t" || c === "T") ? 52 : 3;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInTagName = function(c) {
          if (c === "/" || c === ">" || whitespace(c)) {
            this.emitToken("onopentagname");
            this._state = 8;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateBeforeClosingTagName = function(c) {
          if (whitespace(c)) {
          } else if (c === ">") {
            this._state = 1;
          } else if (this.special !== 1) {
            if (this.special !== 4 && (c === "s" || c === "S")) {
              this._state = 33;
            } else if (this.special === 4 && (c === "t" || c === "T")) {
              this._state = 53;
            } else {
              this._state = 1;
              this._index--;
            }
          } else if (!this.isTagStartChar(c)) {
            this._state = 20;
            this.sectionStart = this._index;
          } else {
            this._state = 6;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInClosingTagName = function(c) {
          if (c === ">" || whitespace(c)) {
            this.emitToken("onclosetag");
            this._state = 7;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateAfterClosingTagName = function(c) {
          if (c === ">") {
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeAttributeName = function(c) {
          if (c === ">") {
            this.cbs.onopentagend();
            this._state = 1;
            this.sectionStart = this._index + 1;
          } else if (c === "/") {
            this._state = 4;
          } else if (!whitespace(c)) {
            this._state = 9;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInSelfClosingTag = function(c) {
          if (c === ">") {
            this.cbs.onselfclosingtag();
            this._state = 1;
            this.sectionStart = this._index + 1;
            this.special = 1;
          } else if (!whitespace(c)) {
            this._state = 8;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateInAttributeName = function(c) {
          if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
            this.cbs.onattribname(this.getSection());
            this.sectionStart = -1;
            this._state = 10;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateAfterAttributeName = function(c) {
          if (c === "=") {
            this._state = 11;
          } else if (c === "/" || c === ">") {
            this.cbs.onattribend(void 0);
            this._state = 8;
            this._index--;
          } else if (!whitespace(c)) {
            this.cbs.onattribend(void 0);
            this._state = 9;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateBeforeAttributeValue = function(c) {
          if (c === '"') {
            this._state = 12;
            this.sectionStart = this._index + 1;
          } else if (c === "'") {
            this._state = 13;
            this.sectionStart = this._index + 1;
          } else if (!whitespace(c)) {
            this._state = 14;
            this.sectionStart = this._index;
            this._index--;
          }
        };
        Tokenizer2.prototype.handleInAttributeValue = function(c, quote) {
          if (c === quote) {
            this.emitToken("onattribdata");
            this.cbs.onattribend(quote);
            this._state = 8;
          } else if (this.decodeEntities && c === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c) {
          this.handleInAttributeValue(c, '"');
        };
        Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c) {
          this.handleInAttributeValue(c, "'");
        };
        Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c) {
          if (whitespace(c) || c === ">") {
            this.emitToken("onattribdata");
            this.cbs.onattribend(null);
            this._state = 8;
            this._index--;
          } else if (this.decodeEntities && c === "&") {
            this.emitToken("onattribdata");
            this.baseState = this._state;
            this._state = 62;
            this.sectionStart = this._index;
          }
        };
        Tokenizer2.prototype.stateBeforeDeclaration = function(c) {
          this._state = c === "[" ? 23 : c === "-" ? 18 : 16;
        };
        Tokenizer2.prototype.stateInDeclaration = function(c) {
          if (c === ">") {
            this.cbs.ondeclaration(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateInProcessingInstruction = function(c) {
          if (c === ">") {
            this.cbs.onprocessinginstruction(this.getSection());
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeComment = function(c) {
          if (c === "-") {
            this._state = 19;
            this.sectionStart = this._index + 1;
          } else {
            this._state = 16;
          }
        };
        Tokenizer2.prototype.stateInComment = function(c) {
          if (c === "-")
            this._state = 21;
        };
        Tokenizer2.prototype.stateInSpecialComment = function(c) {
          if (c === ">") {
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index));
            this._state = 1;
            this.sectionStart = this._index + 1;
          }
        };
        Tokenizer2.prototype.stateAfterComment1 = function(c) {
          if (c === "-") {
            this._state = 22;
          } else {
            this._state = 19;
          }
        };
        Tokenizer2.prototype.stateAfterComment2 = function(c) {
          if (c === ">") {
            this.cbs.oncomment(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1;
            this.sectionStart = this._index + 1;
          } else if (c !== "-") {
            this._state = 19;
          }
        };
        Tokenizer2.prototype.stateBeforeCdata6 = function(c) {
          if (c === "[") {
            this._state = 29;
            this.sectionStart = this._index + 1;
          } else {
            this._state = 16;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateInCdata = function(c) {
          if (c === "]")
            this._state = 30;
        };
        Tokenizer2.prototype.stateAfterCdata1 = function(c) {
          if (c === "]")
            this._state = 31;
          else
            this._state = 29;
        };
        Tokenizer2.prototype.stateAfterCdata2 = function(c) {
          if (c === ">") {
            this.cbs.oncdata(this.buffer.substring(this.sectionStart, this._index - 2));
            this._state = 1;
            this.sectionStart = this._index + 1;
          } else if (c !== "]") {
            this._state = 29;
          }
        };
        Tokenizer2.prototype.stateBeforeSpecialS = function(c) {
          if (c === "c" || c === "C") {
            this._state = 34;
          } else if (c === "t" || c === "T") {
            this._state = 44;
          } else {
            this._state = 3;
            this._index--;
          }
        };
        Tokenizer2.prototype.stateBeforeSpecialSEnd = function(c) {
          if (this.special === 2 && (c === "c" || c === "C")) {
            this._state = 39;
          } else if (this.special === 3 && (c === "t" || c === "T")) {
            this._state = 48;
          } else
            this._state = 1;
        };
        Tokenizer2.prototype.stateBeforeSpecialLast = function(c, special) {
          if (c === "/" || c === ">" || whitespace(c)) {
            this.special = special;
          }
          this._state = 3;
          this._index--;
        };
        Tokenizer2.prototype.stateAfterSpecialLast = function(c, sectionStartOffset) {
          if (c === ">" || whitespace(c)) {
            this.special = 1;
            this._state = 6;
            this.sectionStart = this._index - sectionStartOffset;
            this._index--;
          } else
            this._state = 1;
        };
        Tokenizer2.prototype.parseFixedEntity = function(map) {
          if (map === void 0) {
            map = this.xmlMode ? xml_json_1.default : entities_json_1.default;
          }
          if (this.sectionStart + 1 < this._index) {
            var entity = this.buffer.substring(this.sectionStart + 1, this._index);
            if (Object.prototype.hasOwnProperty.call(map, entity)) {
              this.emitPartial(map[entity]);
              this.sectionStart = this._index + 1;
            }
          }
        };
        Tokenizer2.prototype.parseLegacyEntity = function() {
          var start = this.sectionStart + 1;
          var limit = Math.min(this._index - start, 6);
          while (limit >= 2) {
            var entity = this.buffer.substr(start, limit);
            if (Object.prototype.hasOwnProperty.call(legacy_json_1.default, entity)) {
              this.emitPartial(legacy_json_1.default[entity]);
              this.sectionStart += limit + 1;
              return;
            }
            limit--;
          }
        };
        Tokenizer2.prototype.stateInNamedEntity = function(c) {
          if (c === ";") {
            this.parseFixedEntity();
            if (this.baseState === 1 && this.sectionStart + 1 < this._index && !this.xmlMode) {
              this.parseLegacyEntity();
            }
            this._state = this.baseState;
          } else if ((c < "0" || c > "9") && !isASCIIAlpha(c)) {
            if (this.xmlMode || this.sectionStart + 1 === this._index) {
            } else if (this.baseState !== 1) {
              if (c !== "=") {
                this.parseFixedEntity(legacy_json_1.default);
              }
            } else {
              this.parseLegacyEntity();
            }
            this._state = this.baseState;
            this._index--;
          }
        };
        Tokenizer2.prototype.decodeNumericEntity = function(offset, base, strict) {
          var sectionStart = this.sectionStart + offset;
          if (sectionStart !== this._index) {
            var entity = this.buffer.substring(sectionStart, this._index);
            var parsed = parseInt(entity, base);
            this.emitPartial(decode_codepoint_1.default(parsed));
            this.sectionStart = strict ? this._index + 1 : this._index;
          }
          this._state = this.baseState;
        };
        Tokenizer2.prototype.stateInNumericEntity = function(c) {
          if (c === ";") {
            this.decodeNumericEntity(2, 10, true);
          } else if (c < "0" || c > "9") {
            if (!this.xmlMode) {
              this.decodeNumericEntity(2, 10, false);
            } else {
              this._state = this.baseState;
            }
            this._index--;
          }
        };
        Tokenizer2.prototype.stateInHexEntity = function(c) {
          if (c === ";") {
            this.decodeNumericEntity(3, 16, true);
          } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
            if (!this.xmlMode) {
              this.decodeNumericEntity(3, 16, false);
            } else {
              this._state = this.baseState;
            }
            this._index--;
          }
        };
        Tokenizer2.prototype.cleanup = function() {
          if (this.sectionStart < 0) {
            this.buffer = "";
            this.bufferOffset += this._index;
            this._index = 0;
          } else if (this.running) {
            if (this._state === 1) {
              if (this.sectionStart !== this._index) {
                this.cbs.ontext(this.buffer.substr(this.sectionStart));
              }
              this.buffer = "";
              this.bufferOffset += this._index;
              this._index = 0;
            } else if (this.sectionStart === this._index) {
              this.buffer = "";
              this.bufferOffset += this._index;
              this._index = 0;
            } else {
              this.buffer = this.buffer.substr(this.sectionStart);
              this._index -= this.sectionStart;
              this.bufferOffset += this.sectionStart;
            }
            this.sectionStart = 0;
          }
        };
        Tokenizer2.prototype.parse = function() {
          while (this._index < this.buffer.length && this.running) {
            var c = this.buffer.charAt(this._index);
            if (this._state === 1) {
              this.stateText(c);
            } else if (this._state === 12) {
              this.stateInAttributeValueDoubleQuotes(c);
            } else if (this._state === 9) {
              this.stateInAttributeName(c);
            } else if (this._state === 19) {
              this.stateInComment(c);
            } else if (this._state === 20) {
              this.stateInSpecialComment(c);
            } else if (this._state === 8) {
              this.stateBeforeAttributeName(c);
            } else if (this._state === 3) {
              this.stateInTagName(c);
            } else if (this._state === 6) {
              this.stateInClosingTagName(c);
            } else if (this._state === 2) {
              this.stateBeforeTagName(c);
            } else if (this._state === 10) {
              this.stateAfterAttributeName(c);
            } else if (this._state === 13) {
              this.stateInAttributeValueSingleQuotes(c);
            } else if (this._state === 11) {
              this.stateBeforeAttributeValue(c);
            } else if (this._state === 5) {
              this.stateBeforeClosingTagName(c);
            } else if (this._state === 7) {
              this.stateAfterClosingTagName(c);
            } else if (this._state === 32) {
              this.stateBeforeSpecialS(c);
            } else if (this._state === 21) {
              this.stateAfterComment1(c);
            } else if (this._state === 14) {
              this.stateInAttributeValueNoQuotes(c);
            } else if (this._state === 4) {
              this.stateInSelfClosingTag(c);
            } else if (this._state === 16) {
              this.stateInDeclaration(c);
            } else if (this._state === 15) {
              this.stateBeforeDeclaration(c);
            } else if (this._state === 22) {
              this.stateAfterComment2(c);
            } else if (this._state === 18) {
              this.stateBeforeComment(c);
            } else if (this._state === 33) {
              this.stateBeforeSpecialSEnd(c);
            } else if (this._state === 53) {
              stateAfterSpecialTEnd(this, c);
            } else if (this._state === 39) {
              stateAfterScript1(this, c);
            } else if (this._state === 40) {
              stateAfterScript2(this, c);
            } else if (this._state === 41) {
              stateAfterScript3(this, c);
            } else if (this._state === 34) {
              stateBeforeScript1(this, c);
            } else if (this._state === 35) {
              stateBeforeScript2(this, c);
            } else if (this._state === 36) {
              stateBeforeScript3(this, c);
            } else if (this._state === 37) {
              stateBeforeScript4(this, c);
            } else if (this._state === 38) {
              this.stateBeforeSpecialLast(c, 2);
            } else if (this._state === 42) {
              stateAfterScript4(this, c);
            } else if (this._state === 43) {
              this.stateAfterSpecialLast(c, 6);
            } else if (this._state === 44) {
              stateBeforeStyle1(this, c);
            } else if (this._state === 29) {
              this.stateInCdata(c);
            } else if (this._state === 45) {
              stateBeforeStyle2(this, c);
            } else if (this._state === 46) {
              stateBeforeStyle3(this, c);
            } else if (this._state === 47) {
              this.stateBeforeSpecialLast(c, 3);
            } else if (this._state === 48) {
              stateAfterStyle1(this, c);
            } else if (this._state === 49) {
              stateAfterStyle2(this, c);
            } else if (this._state === 50) {
              stateAfterStyle3(this, c);
            } else if (this._state === 51) {
              this.stateAfterSpecialLast(c, 5);
            } else if (this._state === 52) {
              stateBeforeSpecialT(this, c);
            } else if (this._state === 54) {
              stateBeforeTitle1(this, c);
            } else if (this._state === 55) {
              stateBeforeTitle2(this, c);
            } else if (this._state === 56) {
              stateBeforeTitle3(this, c);
            } else if (this._state === 57) {
              this.stateBeforeSpecialLast(c, 4);
            } else if (this._state === 58) {
              stateAfterTitle1(this, c);
            } else if (this._state === 59) {
              stateAfterTitle2(this, c);
            } else if (this._state === 60) {
              stateAfterTitle3(this, c);
            } else if (this._state === 61) {
              this.stateAfterSpecialLast(c, 5);
            } else if (this._state === 17) {
              this.stateInProcessingInstruction(c);
            } else if (this._state === 64) {
              this.stateInNamedEntity(c);
            } else if (this._state === 23) {
              stateBeforeCdata1(this, c);
            } else if (this._state === 62) {
              stateBeforeEntity(this, c);
            } else if (this._state === 24) {
              stateBeforeCdata2(this, c);
            } else if (this._state === 25) {
              stateBeforeCdata3(this, c);
            } else if (this._state === 30) {
              this.stateAfterCdata1(c);
            } else if (this._state === 31) {
              this.stateAfterCdata2(c);
            } else if (this._state === 26) {
              stateBeforeCdata4(this, c);
            } else if (this._state === 27) {
              stateBeforeCdata5(this, c);
            } else if (this._state === 28) {
              this.stateBeforeCdata6(c);
            } else if (this._state === 66) {
              this.stateInHexEntity(c);
            } else if (this._state === 65) {
              this.stateInNumericEntity(c);
            } else if (this._state === 63) {
              stateBeforeNumericEntity(this, c);
            } else {
              this.cbs.onerror(Error("unknown _state"), this._state);
            }
            this._index++;
          }
          this.cleanup();
        };
        Tokenizer2.prototype.finish = function() {
          if (this.sectionStart < this._index) {
            this.handleTrailingData();
          }
          this.cbs.onend();
        };
        Tokenizer2.prototype.handleTrailingData = function() {
          var data = this.buffer.substr(this.sectionStart);
          if (this._state === 29 || this._state === 30 || this._state === 31) {
            this.cbs.oncdata(data);
          } else if (this._state === 19 || this._state === 21 || this._state === 22) {
            this.cbs.oncomment(data);
          } else if (this._state === 64 && !this.xmlMode) {
            this.parseLegacyEntity();
            if (this.sectionStart < this._index) {
              this._state = this.baseState;
              this.handleTrailingData();
            }
          } else if (this._state === 65 && !this.xmlMode) {
            this.decodeNumericEntity(2, 10, false);
            if (this.sectionStart < this._index) {
              this._state = this.baseState;
              this.handleTrailingData();
            }
          } else if (this._state === 66 && !this.xmlMode) {
            this.decodeNumericEntity(3, 16, false);
            if (this.sectionStart < this._index) {
              this._state = this.baseState;
              this.handleTrailingData();
            }
          } else if (this._state !== 3 && this._state !== 8 && this._state !== 11 && this._state !== 10 && this._state !== 9 && this._state !== 13 && this._state !== 12 && this._state !== 14 && this._state !== 6) {
            this.cbs.ontext(data);
          }
        };
        Tokenizer2.prototype.getSection = function() {
          return this.buffer.substring(this.sectionStart, this._index);
        };
        Tokenizer2.prototype.emitToken = function(name) {
          this.cbs[name](this.getSection());
          this.sectionStart = -1;
        };
        Tokenizer2.prototype.emitPartial = function(value) {
          if (this.baseState !== 1) {
            this.cbs.onattribdata(value);
          } else {
            this.cbs.ontext(value);
          }
        };
        return Tokenizer2;
      }();
      exports.default = Tokenizer;
    }
  });

  // node_modules/htmlparser2/lib/Parser.js
  var require_Parser = __commonJS({
    "node_modules/htmlparser2/lib/Parser.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Parser = void 0;
      var Tokenizer_1 = __importDefault(require_Tokenizer());
      var formTags = /* @__PURE__ */ new Set([
        "input",
        "option",
        "optgroup",
        "select",
        "button",
        "datalist",
        "textarea"
      ]);
      var pTag = /* @__PURE__ */ new Set(["p"]);
      var openImpliesClose = {
        tr: /* @__PURE__ */ new Set(["tr", "th", "td"]),
        th: /* @__PURE__ */ new Set(["th"]),
        td: /* @__PURE__ */ new Set(["thead", "th", "td"]),
        body: /* @__PURE__ */ new Set(["head", "link", "script"]),
        li: /* @__PURE__ */ new Set(["li"]),
        p: pTag,
        h1: pTag,
        h2: pTag,
        h3: pTag,
        h4: pTag,
        h5: pTag,
        h6: pTag,
        select: formTags,
        input: formTags,
        output: formTags,
        button: formTags,
        datalist: formTags,
        textarea: formTags,
        option: /* @__PURE__ */ new Set(["option"]),
        optgroup: /* @__PURE__ */ new Set(["optgroup", "option"]),
        dd: /* @__PURE__ */ new Set(["dt", "dd"]),
        dt: /* @__PURE__ */ new Set(["dt", "dd"]),
        address: pTag,
        article: pTag,
        aside: pTag,
        blockquote: pTag,
        details: pTag,
        div: pTag,
        dl: pTag,
        fieldset: pTag,
        figcaption: pTag,
        figure: pTag,
        footer: pTag,
        form: pTag,
        header: pTag,
        hr: pTag,
        main: pTag,
        nav: pTag,
        ol: pTag,
        pre: pTag,
        section: pTag,
        table: pTag,
        ul: pTag,
        rt: /* @__PURE__ */ new Set(["rt", "rp"]),
        rp: /* @__PURE__ */ new Set(["rt", "rp"]),
        tbody: /* @__PURE__ */ new Set(["thead", "tbody"]),
        tfoot: /* @__PURE__ */ new Set(["thead", "tbody"])
      };
      var voidElements = /* @__PURE__ */ new Set([
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "command",
        "embed",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "keygen",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ]);
      var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
      var htmlIntegrationElements = /* @__PURE__ */ new Set([
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext",
        "annotation-xml",
        "foreignObject",
        "desc",
        "title"
      ]);
      var reNameEnd = /\s|\//;
      var Parser = function() {
        function Parser2(cbs, options) {
          if (options === void 0) {
            options = {};
          }
          var _a, _b, _c, _d, _e;
          this.startIndex = 0;
          this.endIndex = null;
          this.tagname = "";
          this.attribname = "";
          this.attribvalue = "";
          this.attribs = null;
          this.stack = [];
          this.foreignContext = [];
          this.options = options;
          this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
          this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
          this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
          this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_1.default)(this.options, this);
          (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
        }
        Parser2.prototype.updatePosition = function(initialOffset) {
          if (this.endIndex === null) {
            if (this.tokenizer.sectionStart <= initialOffset) {
              this.startIndex = 0;
            } else {
              this.startIndex = this.tokenizer.sectionStart - initialOffset;
            }
          } else {
            this.startIndex = this.endIndex + 1;
          }
          this.endIndex = this.tokenizer.getAbsoluteIndex();
        };
        Parser2.prototype.ontext = function(data) {
          var _a, _b;
          this.updatePosition(1);
          this.endIndex--;
          (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        };
        Parser2.prototype.onopentagname = function(name) {
          var _a, _b;
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          this.tagname = name;
          if (!this.options.xmlMode && Object.prototype.hasOwnProperty.call(openImpliesClose, name)) {
            var el = void 0;
            while (this.stack.length > 0 && openImpliesClose[name].has(el = this.stack[this.stack.length - 1])) {
              this.onclosetag(el);
            }
          }
          if (this.options.xmlMode || !voidElements.has(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
              this.foreignContext.push(true);
            } else if (htmlIntegrationElements.has(name)) {
              this.foreignContext.push(false);
            }
          }
          (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, name);
          if (this.cbs.onopentag)
            this.attribs = {};
        };
        Parser2.prototype.onopentagend = function() {
          var _a, _b;
          this.updatePosition(1);
          if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs);
            this.attribs = null;
          }
          if (!this.options.xmlMode && this.cbs.onclosetag && voidElements.has(this.tagname)) {
            this.cbs.onclosetag(this.tagname);
          }
          this.tagname = "";
        };
        Parser2.prototype.onclosetag = function(name) {
          this.updatePosition(1);
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          if (foreignContextElements.has(name) || htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
          }
          if (this.stack.length && (this.options.xmlMode || !voidElements.has(name))) {
            var pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
              if (this.cbs.onclosetag) {
                pos = this.stack.length - pos;
                while (pos--) {
                  this.cbs.onclosetag(this.stack.pop());
                }
              } else
                this.stack.length = pos;
            } else if (name === "p" && !this.options.xmlMode) {
              this.onopentagname(name);
              this.closeCurrentTag();
            }
          } else if (!this.options.xmlMode && (name === "br" || name === "p")) {
            this.onopentagname(name);
            this.closeCurrentTag();
          }
        };
        Parser2.prototype.onselfclosingtag = function() {
          if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag();
          } else {
            this.onopentagend();
          }
        };
        Parser2.prototype.closeCurrentTag = function() {
          var _a, _b;
          var name = this.tagname;
          this.onopentagend();
          if (this.stack[this.stack.length - 1] === name) {
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name);
            this.stack.pop();
          }
        };
        Parser2.prototype.onattribname = function(name) {
          if (this.lowerCaseAttributeNames) {
            name = name.toLowerCase();
          }
          this.attribname = name;
        };
        Parser2.prototype.onattribdata = function(value) {
          this.attribvalue += value;
        };
        Parser2.prototype.onattribend = function(quote) {
          var _a, _b;
          (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote);
          if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
          }
          this.attribname = "";
          this.attribvalue = "";
        };
        Parser2.prototype.getInstructionName = function(value) {
          var idx = value.search(reNameEnd);
          var name = idx < 0 ? value : value.substr(0, idx);
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          return name;
        };
        Parser2.prototype.ondeclaration = function(value) {
          if (this.cbs.onprocessinginstruction) {
            var name_1 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!" + name_1, "!" + value);
          }
        };
        Parser2.prototype.onprocessinginstruction = function(value) {
          if (this.cbs.onprocessinginstruction) {
            var name_2 = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?" + name_2, "?" + value);
          }
        };
        Parser2.prototype.oncomment = function(value) {
          var _a, _b, _c, _d;
          this.updatePosition(4);
          (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, value);
          (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        };
        Parser2.prototype.oncdata = function(value) {
          var _a, _b, _c, _d, _e, _f;
          this.updatePosition(1);
          if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
          } else {
            this.oncomment("[CDATA[" + value + "]]");
          }
        };
        Parser2.prototype.onerror = function(err) {
          var _a, _b;
          (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, err);
        };
        Parser2.prototype.onend = function() {
          var _a, _b;
          if (this.cbs.onclosetag) {
            for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i]))
              ;
          }
          (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        Parser2.prototype.reset = function() {
          var _a, _b, _c, _d;
          (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
          this.tokenizer.reset();
          this.tagname = "";
          this.attribname = "";
          this.attribs = null;
          this.stack = [];
          (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        };
        Parser2.prototype.parseComplete = function(data) {
          this.reset();
          this.end(data);
        };
        Parser2.prototype.write = function(chunk) {
          this.tokenizer.write(chunk);
        };
        Parser2.prototype.end = function(chunk) {
          this.tokenizer.end(chunk);
        };
        Parser2.prototype.pause = function() {
          this.tokenizer.pause();
        };
        Parser2.prototype.resume = function() {
          this.tokenizer.resume();
        };
        Parser2.prototype.parseChunk = function(chunk) {
          this.write(chunk);
        };
        Parser2.prototype.done = function(chunk) {
          this.end(chunk);
        };
        return Parser2;
      }();
      exports.Parser = Parser;
    }
  });

  // node_modules/htmlparser2/lib/FeedHandler.js
  var require_FeedHandler = __commonJS({
    "node_modules/htmlparser2/lib/FeedHandler.js"(exports) {
      "use strict";
      var __extends = exports && exports.__extends || function() {
        var extendStatics = function(d, b) {
          extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2)
              if (Object.prototype.hasOwnProperty.call(b2, p))
                d2[p] = b2[p];
          };
          return extendStatics(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.parseFeed = exports.FeedHandler = void 0;
      var domhandler_1 = __importDefault(require_lib2());
      var DomUtils = __importStar(require_lib5());
      var Parser_1 = require_Parser();
      var FeedItemMediaMedium;
      (function(FeedItemMediaMedium2) {
        FeedItemMediaMedium2[FeedItemMediaMedium2["image"] = 0] = "image";
        FeedItemMediaMedium2[FeedItemMediaMedium2["audio"] = 1] = "audio";
        FeedItemMediaMedium2[FeedItemMediaMedium2["video"] = 2] = "video";
        FeedItemMediaMedium2[FeedItemMediaMedium2["document"] = 3] = "document";
        FeedItemMediaMedium2[FeedItemMediaMedium2["executable"] = 4] = "executable";
      })(FeedItemMediaMedium || (FeedItemMediaMedium = {}));
      var FeedItemMediaExpression;
      (function(FeedItemMediaExpression2) {
        FeedItemMediaExpression2[FeedItemMediaExpression2["sample"] = 0] = "sample";
        FeedItemMediaExpression2[FeedItemMediaExpression2["full"] = 1] = "full";
        FeedItemMediaExpression2[FeedItemMediaExpression2["nonstop"] = 2] = "nonstop";
      })(FeedItemMediaExpression || (FeedItemMediaExpression = {}));
      var FeedHandler = function(_super) {
        __extends(FeedHandler2, _super);
        function FeedHandler2(callback, options) {
          var _this = this;
          if (typeof callback === "object") {
            callback = void 0;
            options = callback;
          }
          _this = _super.call(this, callback, options) || this;
          return _this;
        }
        FeedHandler2.prototype.onend = function() {
          var _a, _b;
          var feedRoot = getOneElement(isValidFeed, this.dom);
          if (!feedRoot) {
            this.handleCallback(new Error("couldn't find root of feed"));
            return;
          }
          var feed = {};
          if (feedRoot.name === "feed") {
            var childs = feedRoot.children;
            feed.type = "atom";
            addConditionally(feed, "id", "id", childs);
            addConditionally(feed, "title", "title", childs);
            var href = getAttribute("href", getOneElement("link", childs));
            if (href) {
              feed.link = href;
            }
            addConditionally(feed, "description", "subtitle", childs);
            var updated = fetch2("updated", childs);
            if (updated) {
              feed.updated = new Date(updated);
            }
            addConditionally(feed, "author", "email", childs, true);
            feed.items = getElements("entry", childs).map(function(item) {
              var entry = {};
              var children = item.children;
              addConditionally(entry, "id", "id", children);
              addConditionally(entry, "title", "title", children);
              var href2 = getAttribute("href", getOneElement("link", children));
              if (href2) {
                entry.link = href2;
              }
              var description = fetch2("summary", children) || fetch2("content", children);
              if (description) {
                entry.description = description;
              }
              var pubDate = fetch2("updated", children);
              if (pubDate) {
                entry.pubDate = new Date(pubDate);
              }
              entry.media = getMediaElements(children);
              return entry;
            });
          } else {
            var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
            feed.type = feedRoot.name.substr(0, 3);
            feed.id = "";
            addConditionally(feed, "title", "title", childs);
            addConditionally(feed, "link", "link", childs);
            addConditionally(feed, "description", "description", childs);
            var updated = fetch2("lastBuildDate", childs);
            if (updated) {
              feed.updated = new Date(updated);
            }
            addConditionally(feed, "author", "managingEditor", childs, true);
            feed.items = getElements("item", feedRoot.children).map(function(item) {
              var entry = {};
              var children = item.children;
              addConditionally(entry, "id", "guid", children);
              addConditionally(entry, "title", "title", children);
              addConditionally(entry, "link", "link", children);
              addConditionally(entry, "description", "description", children);
              var pubDate = fetch2("pubDate", children);
              if (pubDate)
                entry.pubDate = new Date(pubDate);
              entry.media = getMediaElements(children);
              return entry;
            });
          }
          this.feed = feed;
          this.handleCallback(null);
        };
        return FeedHandler2;
      }(domhandler_1.default);
      exports.FeedHandler = FeedHandler;
      function getMediaElements(where) {
        return getElements("media:content", where).map(function(elem) {
          var media = {
            medium: elem.attribs.medium,
            isDefault: !!elem.attribs.isDefault
          };
          if (elem.attribs.url) {
            media.url = elem.attribs.url;
          }
          if (elem.attribs.fileSize) {
            media.fileSize = parseInt(elem.attribs.fileSize, 10);
          }
          if (elem.attribs.type) {
            media.type = elem.attribs.type;
          }
          if (elem.attribs.expression) {
            media.expression = elem.attribs.expression;
          }
          if (elem.attribs.bitrate) {
            media.bitrate = parseInt(elem.attribs.bitrate, 10);
          }
          if (elem.attribs.framerate) {
            media.framerate = parseInt(elem.attribs.framerate, 10);
          }
          if (elem.attribs.samplingrate) {
            media.samplingrate = parseInt(elem.attribs.samplingrate, 10);
          }
          if (elem.attribs.channels) {
            media.channels = parseInt(elem.attribs.channels, 10);
          }
          if (elem.attribs.duration) {
            media.duration = parseInt(elem.attribs.duration, 10);
          }
          if (elem.attribs.height) {
            media.height = parseInt(elem.attribs.height, 10);
          }
          if (elem.attribs.width) {
            media.width = parseInt(elem.attribs.width, 10);
          }
          if (elem.attribs.lang) {
            media.lang = elem.attribs.lang;
          }
          return media;
        });
      }
      function getElements(tagName, where) {
        return DomUtils.getElementsByTagName(tagName, where, true);
      }
      function getOneElement(tagName, node) {
        return DomUtils.getElementsByTagName(tagName, node, true, 1)[0];
      }
      function fetch2(tagName, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        return DomUtils.getText(DomUtils.getElementsByTagName(tagName, where, recurse, 1)).trim();
      }
      function getAttribute(name, elem) {
        if (!elem) {
          return null;
        }
        var attribs = elem.attribs;
        return attribs[name];
      }
      function addConditionally(obj, prop, what, where, recurse) {
        if (recurse === void 0) {
          recurse = false;
        }
        var tmp = fetch2(what, where, recurse);
        if (tmp)
          obj[prop] = tmp;
      }
      function isValidFeed(value) {
        return value === "rss" || value === "feed" || value === "rdf:RDF";
      }
      function parseFeed(feed, options) {
        if (options === void 0) {
          options = { xmlMode: true };
        }
        var handler = new FeedHandler(options);
        new Parser_1.Parser(handler, options).end(feed);
        return handler.feed;
      }
      exports.parseFeed = parseFeed;
    }
  });

  // node_modules/htmlparser2/lib/index.js
  var require_lib9 = __commonJS({
    "node_modules/htmlparser2/lib/index.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __exportStar = exports && exports.__exportStar || function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
            __createBinding(exports2, m, p);
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.RssHandler = exports.DefaultHandler = exports.DomUtils = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
      var Parser_1 = require_Parser();
      Object.defineProperty(exports, "Parser", { enumerable: true, get: function() {
        return Parser_1.Parser;
      } });
      var domhandler_1 = require_lib2();
      Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function() {
        return domhandler_1.DomHandler;
      } });
      Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function() {
        return domhandler_1.DomHandler;
      } });
      function parseDocument(data, options) {
        var handler = new domhandler_1.DomHandler(void 0, options);
        new Parser_1.Parser(handler, options).end(data);
        return handler.root;
      }
      exports.parseDocument = parseDocument;
      function parseDOM(data, options) {
        return parseDocument(data, options).children;
      }
      exports.parseDOM = parseDOM;
      function createDomStream(cb, options, elementCb) {
        var handler = new domhandler_1.DomHandler(cb, options, elementCb);
        return new Parser_1.Parser(handler, options);
      }
      exports.createDomStream = createDomStream;
      var Tokenizer_1 = require_Tokenizer();
      Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function() {
        return __importDefault(Tokenizer_1).default;
      } });
      var ElementType = __importStar(require_lib());
      exports.ElementType = ElementType;
      __exportStar(require_FeedHandler(), exports);
      exports.DomUtils = __importStar(require_lib5());
      var FeedHandler_1 = require_FeedHandler();
      Object.defineProperty(exports, "RssHandler", { enumerable: true, get: function() {
        return FeedHandler_1.FeedHandler;
      } });
    }
  });

  // node_modules/parse5/lib/common/unicode.js
  var require_unicode = __commonJS({
    "node_modules/parse5/lib/common/unicode.js"(exports) {
      "use strict";
      var UNDEFINED_CODE_POINTS = [
        65534,
        65535,
        131070,
        131071,
        196606,
        196607,
        262142,
        262143,
        327678,
        327679,
        393214,
        393215,
        458750,
        458751,
        524286,
        524287,
        589822,
        589823,
        655358,
        655359,
        720894,
        720895,
        786430,
        786431,
        851966,
        851967,
        917502,
        917503,
        983038,
        983039,
        1048574,
        1048575,
        1114110,
        1114111
      ];
      exports.REPLACEMENT_CHARACTER = "\uFFFD";
      exports.CODE_POINTS = {
        EOF: -1,
        NULL: 0,
        TABULATION: 9,
        CARRIAGE_RETURN: 13,
        LINE_FEED: 10,
        FORM_FEED: 12,
        SPACE: 32,
        EXCLAMATION_MARK: 33,
        QUOTATION_MARK: 34,
        NUMBER_SIGN: 35,
        AMPERSAND: 38,
        APOSTROPHE: 39,
        HYPHEN_MINUS: 45,
        SOLIDUS: 47,
        DIGIT_0: 48,
        DIGIT_9: 57,
        SEMICOLON: 59,
        LESS_THAN_SIGN: 60,
        EQUALS_SIGN: 61,
        GREATER_THAN_SIGN: 62,
        QUESTION_MARK: 63,
        LATIN_CAPITAL_A: 65,
        LATIN_CAPITAL_F: 70,
        LATIN_CAPITAL_X: 88,
        LATIN_CAPITAL_Z: 90,
        RIGHT_SQUARE_BRACKET: 93,
        GRAVE_ACCENT: 96,
        LATIN_SMALL_A: 97,
        LATIN_SMALL_F: 102,
        LATIN_SMALL_X: 120,
        LATIN_SMALL_Z: 122,
        REPLACEMENT_CHARACTER: 65533
      };
      exports.CODE_POINT_SEQUENCES = {
        DASH_DASH_STRING: [45, 45],
        DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
        CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
        SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
        PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
        SYSTEM_STRING: [83, 89, 83, 84, 69, 77]
      };
      exports.isSurrogate = function(cp) {
        return cp >= 55296 && cp <= 57343;
      };
      exports.isSurrogatePair = function(cp) {
        return cp >= 56320 && cp <= 57343;
      };
      exports.getSurrogatePairCodePoint = function(cp1, cp2) {
        return (cp1 - 55296) * 1024 + 9216 + cp2;
      };
      exports.isControlCodePoint = function(cp) {
        return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
      };
      exports.isUndefinedCodePoint = function(cp) {
        return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.indexOf(cp) > -1;
      };
    }
  });

  // node_modules/parse5/lib/common/error-codes.js
  var require_error_codes = __commonJS({
    "node_modules/parse5/lib/common/error-codes.js"(exports, module) {
      "use strict";
      module.exports = {
        controlCharacterInInputStream: "control-character-in-input-stream",
        noncharacterInInputStream: "noncharacter-in-input-stream",
        surrogateInInputStream: "surrogate-in-input-stream",
        nonVoidHtmlElementStartTagWithTrailingSolidus: "non-void-html-element-start-tag-with-trailing-solidus",
        endTagWithAttributes: "end-tag-with-attributes",
        endTagWithTrailingSolidus: "end-tag-with-trailing-solidus",
        unexpectedSolidusInTag: "unexpected-solidus-in-tag",
        unexpectedNullCharacter: "unexpected-null-character",
        unexpectedQuestionMarkInsteadOfTagName: "unexpected-question-mark-instead-of-tag-name",
        invalidFirstCharacterOfTagName: "invalid-first-character-of-tag-name",
        unexpectedEqualsSignBeforeAttributeName: "unexpected-equals-sign-before-attribute-name",
        missingEndTagName: "missing-end-tag-name",
        unexpectedCharacterInAttributeName: "unexpected-character-in-attribute-name",
        unknownNamedCharacterReference: "unknown-named-character-reference",
        missingSemicolonAfterCharacterReference: "missing-semicolon-after-character-reference",
        unexpectedCharacterAfterDoctypeSystemIdentifier: "unexpected-character-after-doctype-system-identifier",
        unexpectedCharacterInUnquotedAttributeValue: "unexpected-character-in-unquoted-attribute-value",
        eofBeforeTagName: "eof-before-tag-name",
        eofInTag: "eof-in-tag",
        missingAttributeValue: "missing-attribute-value",
        missingWhitespaceBetweenAttributes: "missing-whitespace-between-attributes",
        missingWhitespaceAfterDoctypePublicKeyword: "missing-whitespace-after-doctype-public-keyword",
        missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: "missing-whitespace-between-doctype-public-and-system-identifiers",
        missingWhitespaceAfterDoctypeSystemKeyword: "missing-whitespace-after-doctype-system-keyword",
        missingQuoteBeforeDoctypePublicIdentifier: "missing-quote-before-doctype-public-identifier",
        missingQuoteBeforeDoctypeSystemIdentifier: "missing-quote-before-doctype-system-identifier",
        missingDoctypePublicIdentifier: "missing-doctype-public-identifier",
        missingDoctypeSystemIdentifier: "missing-doctype-system-identifier",
        abruptDoctypePublicIdentifier: "abrupt-doctype-public-identifier",
        abruptDoctypeSystemIdentifier: "abrupt-doctype-system-identifier",
        cdataInHtmlContent: "cdata-in-html-content",
        incorrectlyOpenedComment: "incorrectly-opened-comment",
        eofInScriptHtmlCommentLikeText: "eof-in-script-html-comment-like-text",
        eofInDoctype: "eof-in-doctype",
        nestedComment: "nested-comment",
        abruptClosingOfEmptyComment: "abrupt-closing-of-empty-comment",
        eofInComment: "eof-in-comment",
        incorrectlyClosedComment: "incorrectly-closed-comment",
        eofInCdata: "eof-in-cdata",
        absenceOfDigitsInNumericCharacterReference: "absence-of-digits-in-numeric-character-reference",
        nullCharacterReference: "null-character-reference",
        surrogateCharacterReference: "surrogate-character-reference",
        characterReferenceOutsideUnicodeRange: "character-reference-outside-unicode-range",
        controlCharacterReference: "control-character-reference",
        noncharacterCharacterReference: "noncharacter-character-reference",
        missingWhitespaceBeforeDoctypeName: "missing-whitespace-before-doctype-name",
        missingDoctypeName: "missing-doctype-name",
        invalidCharacterSequenceAfterDoctypeName: "invalid-character-sequence-after-doctype-name",
        duplicateAttribute: "duplicate-attribute",
        nonConformingDoctype: "non-conforming-doctype",
        missingDoctype: "missing-doctype",
        misplacedDoctype: "misplaced-doctype",
        endTagWithoutMatchingOpenElement: "end-tag-without-matching-open-element",
        closingOfElementWithOpenChildElements: "closing-of-element-with-open-child-elements",
        disallowedContentInNoscriptInHead: "disallowed-content-in-noscript-in-head",
        openElementsLeftAfterEof: "open-elements-left-after-eof",
        abandonedHeadElementChild: "abandoned-head-element-child",
        misplacedStartTagForHeadElement: "misplaced-start-tag-for-head-element",
        nestedNoscriptInHead: "nested-noscript-in-head",
        eofInElementThatCanContainOnlyText: "eof-in-element-that-can-contain-only-text"
      };
    }
  });

  // node_modules/parse5/lib/tokenizer/preprocessor.js
  var require_preprocessor = __commonJS({
    "node_modules/parse5/lib/tokenizer/preprocessor.js"(exports, module) {
      "use strict";
      var unicode = require_unicode();
      var ERR = require_error_codes();
      var $ = unicode.CODE_POINTS;
      var DEFAULT_BUFFER_WATERLINE = 1 << 16;
      var Preprocessor = class {
        constructor() {
          this.html = null;
          this.pos = -1;
          this.lastGapPos = -1;
          this.lastCharPos = -1;
          this.gapStack = [];
          this.skipNextNewLine = false;
          this.lastChunkWritten = false;
          this.endOfChunkHit = false;
          this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
        }
        _err() {
        }
        _addGap() {
          this.gapStack.push(this.lastGapPos);
          this.lastGapPos = this.pos;
        }
        _processSurrogate(cp) {
          if (this.pos !== this.lastCharPos) {
            const nextCp = this.html.charCodeAt(this.pos + 1);
            if (unicode.isSurrogatePair(nextCp)) {
              this.pos++;
              this._addGap();
              return unicode.getSurrogatePairCodePoint(cp, nextCp);
            }
          } else if (!this.lastChunkWritten) {
            this.endOfChunkHit = true;
            return $.EOF;
          }
          this._err(ERR.surrogateInInputStream);
          return cp;
        }
        dropParsedChunk() {
          if (this.pos > this.bufferWaterline) {
            this.lastCharPos -= this.pos;
            this.html = this.html.substring(this.pos);
            this.pos = 0;
            this.lastGapPos = -1;
            this.gapStack = [];
          }
        }
        write(chunk, isLastChunk) {
          if (this.html) {
            this.html += chunk;
          } else {
            this.html = chunk;
          }
          this.lastCharPos = this.html.length - 1;
          this.endOfChunkHit = false;
          this.lastChunkWritten = isLastChunk;
        }
        insertHtmlAtCurrentPos(chunk) {
          this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1, this.html.length);
          this.lastCharPos = this.html.length - 1;
          this.endOfChunkHit = false;
        }
        advance() {
          this.pos++;
          if (this.pos > this.lastCharPos) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return $.EOF;
          }
          let cp = this.html.charCodeAt(this.pos);
          if (this.skipNextNewLine && cp === $.LINE_FEED) {
            this.skipNextNewLine = false;
            this._addGap();
            return this.advance();
          }
          if (cp === $.CARRIAGE_RETURN) {
            this.skipNextNewLine = true;
            return $.LINE_FEED;
          }
          this.skipNextNewLine = false;
          if (unicode.isSurrogate(cp)) {
            cp = this._processSurrogate(cp);
          }
          const isCommonValidRange = cp > 31 && cp < 127 || cp === $.LINE_FEED || cp === $.CARRIAGE_RETURN || cp > 159 && cp < 64976;
          if (!isCommonValidRange) {
            this._checkForProblematicCharacters(cp);
          }
          return cp;
        }
        _checkForProblematicCharacters(cp) {
          if (unicode.isControlCodePoint(cp)) {
            this._err(ERR.controlCharacterInInputStream);
          } else if (unicode.isUndefinedCodePoint(cp)) {
            this._err(ERR.noncharacterInInputStream);
          }
        }
        retreat() {
          if (this.pos === this.lastGapPos) {
            this.lastGapPos = this.gapStack.pop();
            this.pos--;
          }
          this.pos--;
        }
      };
      module.exports = Preprocessor;
    }
  });

  // node_modules/parse5/lib/tokenizer/named-entity-data.js
  var require_named_entity_data = __commonJS({
    "node_modules/parse5/lib/tokenizer/named-entity-data.js"(exports, module) {
      "use strict";
      module.exports = new Uint16Array([4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987, 2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274, 6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386, 11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095, 19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105, 103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1, 59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1, 59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208, 1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112, 232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115, 272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1, 59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115, 117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115, 104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1, 1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349, 56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4, 14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542, 547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454, 1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478, 1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111, 110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105, 110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59, 1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99, 108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115, 59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115, 623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108, 110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868, 4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742, 745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59, 67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1, 8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99, 121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044, 108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97, 102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84, 950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100, 101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3, 59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784, 98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089, 1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102, 116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149, 1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658, 101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114, 111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114, 114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86, 1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1, 8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641, 97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1, 8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479, 114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650, 1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201, 1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99, 5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114, 97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97, 112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3, 55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2, 59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1, 919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115, 1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100, 4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117, 1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984, 99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1, 915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100, 105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3, 55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69, 70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925, 1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807, 114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349, 56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036, 2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1, 711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459, 114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109, 112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245, 2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025, 99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206, 1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101, 5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103, 2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59, 1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265, 2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105, 98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115, 59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349, 56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109, 2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115, 117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1, 1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114, 59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97, 99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121, 59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310, 59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349, 56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585, 2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99, 109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59, 1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4, 3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59, 1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644, 2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1, 8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65, 86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2, 101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119, 59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4, 3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863, 2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1, 8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962, 2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1, 8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115, 103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079, 3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643, 101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114, 59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1, 1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105, 110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99, 121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114, 111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380, 3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101, 59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810, 76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444, 3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4, 2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59, 1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97, 108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116, 115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602, 3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115, 59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101, 59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3, 8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3, 10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741, 3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114, 59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795, 3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59, 69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97, 108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933, 3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930, 101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1, 8931, 4, 3, 98, 99, 112, 3981, 4e3, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834, 8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015, 4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4, 2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4, 4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5, 209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316, 4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2, 105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59, 1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97, 101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59, 1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272, 4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1, 8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216, 1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213, 101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354, 4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1, 9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4, 9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471, 4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595, 105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112, 4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4, 4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69, 83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4, 2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59, 97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349, 56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59, 4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4, 12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704, 4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648, 1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219, 114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695, 4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710, 4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101, 109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59, 1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912, 4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1, 8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101, 99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111, 114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1, 8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117, 97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2, 112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091, 114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198, 5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1, 1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59, 97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100, 105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114, 116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114, 117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367, 1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98, 112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1, 8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1, 8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4, 4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4, 2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108, 59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59, 1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1, 8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839, 101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546, 5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222, 65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4, 2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111, 110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101, 105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1, 920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99, 101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113, 117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100, 101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1, 8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14, 97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823, 5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117, 116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114, 59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2, 105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59, 1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114, 59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114, 5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80, 5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1, 370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996, 6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593, 97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76, 82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933, 105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109, 108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143, 6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987, 121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101, 114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4, 2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231, 97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1, 10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202, 114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100, 97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105, 114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3, 55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339, 114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349, 56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410, 6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116, 101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1, 1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500, 109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477, 6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463, 6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483, 6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59, 1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634, 6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59, 6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584, 6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598, 1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59, 6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5, 224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121, 109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99, 108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100, 103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100, 59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101, 108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101, 59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102, 103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1, 10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59, 118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112, 116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112, 6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111, 112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1, 10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917, 6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116, 121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957, 6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5, 228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755, 110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786, 7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112, 115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1, 1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59, 1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113, 7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107, 59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111, 59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2, 59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1, 1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1, 8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117, 118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281, 111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2, 113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110, 103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112, 108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114, 111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107, 4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117, 97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411, 7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103, 104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451, 59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485, 4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4, 4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510, 7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721, 7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1, 9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1, 9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616, 59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635, 7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1, 9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673, 7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117, 7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524, 105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864, 4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1, 9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474, 59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109, 101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1, 59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503, 109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59, 98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109, 7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101, 7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4, 15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075, 8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114, 7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977, 7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97, 117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745, 65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117, 8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269, 100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115, 8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088, 8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5, 162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608, 4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1, 10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115, 8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187, 8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4, 2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5, 82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1, 8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116, 59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117, 8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400, 111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788, 4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102, 108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110, 116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388, 8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412, 8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114, 59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2, 99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469, 8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111, 116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697, 8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115, 8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1, 8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1, 8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59, 1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114, 118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121, 4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1, 8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101, 110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690, 101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100, 59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1, 8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930, 8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114, 59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224, 101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1, 8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2, 97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864, 8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116, 115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1, 176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115, 104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643, 59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111, 115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116, 59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4, 3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247, 110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4, 2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116, 117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4, 5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102, 9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1, 8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99, 9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1, 8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245, 59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100, 114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662, 4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108, 101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1, 10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755, 9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785, 4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1, 10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2, 59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1, 1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59, 3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59, 9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108, 115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4, 2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544, 9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116, 59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1, 8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2, 103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115, 9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1, 10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013, 4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1, 8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116, 4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97, 101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68, 9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97, 9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783, 9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801, 59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820, 1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59, 1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111, 112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108, 101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2, 105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108, 105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984, 116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2, 112, 114, 1e4, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1, 8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1, 10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55, 10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086, 10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188, 59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534, 4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540, 53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108, 59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268, 10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59, 108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116, 101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114, 101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075, 111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1, 8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1, 10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111, 116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1, 10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349, 56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121, 59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1, 10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4, 2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442, 1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102, 59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458, 109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6, 59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105, 10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1, 10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579, 10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1, 10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923, 108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2, 101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809, 65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724, 10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668, 10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459, 4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1, 8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4, 3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829, 105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3, 55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114, 111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114, 114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863, 10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2, 98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99, 101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977, 10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116, 101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99, 5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99, 108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349, 56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013, 11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749, 102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111, 112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101, 108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1, 8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116, 11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59, 116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99, 101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103, 114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107, 59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211, 11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114, 111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105, 11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266, 11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1, 8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1, 297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4, 6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121, 11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1, 567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511, 114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111, 115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118, 11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311, 59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093, 99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171, 12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114, 116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523, 97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59, 1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606, 11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676, 114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617, 11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59, 11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673, 11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527, 115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1, 10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1, 10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729, 11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99, 4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1, 10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121, 11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108, 59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828, 11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1, 8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1, 10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1, 8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111, 119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959, 11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115, 12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100, 103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59, 111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59, 101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095, 12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113, 4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114, 59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116, 59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1, 8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1, 8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59, 1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59, 1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1, 9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97, 12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303, 12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889, 4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808, 105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421, 12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701, 114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2, 97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101, 102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458, 12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59, 1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59, 101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4, 2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540, 12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4, 2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97, 99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249, 114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818, 59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630, 12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108, 113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668, 12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907, 109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4, 2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1, 9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1, 10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113, 59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025, 13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827, 12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4, 2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1, 8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110, 59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2, 111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618, 111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1, 181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105, 114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995, 12997, 13e3, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2, 99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723, 4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1, 8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3, 59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59, 1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414, 13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214, 14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158, 13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4, 2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235, 13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116, 13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59, 3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3, 10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4, 2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4, 2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352, 13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391, 13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108, 59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112, 59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120, 13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2, 104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1, 8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489, 97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1, 8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563, 13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115, 13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3, 10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3, 65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59, 1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1, 8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116, 13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114, 114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1, 8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3, 8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824, 59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101, 13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102, 59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69, 100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824, 4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59, 118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958, 59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874, 13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3, 8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832, 117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931, 1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114, 59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59, 3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101, 13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036, 14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1, 8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109, 112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109, 4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105, 100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1, 8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124, 14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141, 14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2, 59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183, 14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201, 3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105, 108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236, 1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102, 116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59, 101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59, 101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72, 97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408, 14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115, 104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102, 105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59, 3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2, 65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59, 3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104, 114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598, 101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111, 112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657, 14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115, 14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121, 14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1, 1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861, 108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684, 108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349, 56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59, 14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937, 110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1, 8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101, 59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103, 97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1, 10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759, 14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100, 105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1, 8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111, 14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829, 1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59, 1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1, 59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1, 59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108, 5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105, 108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192, 15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182, 2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986, 109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112, 116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108, 59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105, 109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116, 59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104, 102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107, 15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115, 4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168, 15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786, 4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59, 15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112, 117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673, 110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931, 112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97, 99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120, 59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101, 115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105, 109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59, 1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109, 59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386, 15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1, 8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101, 108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99, 115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485, 15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114, 105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520, 15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116, 59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1, 59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977, 16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97, 114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1, 10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114, 116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3, 8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675, 103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1, 10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754, 15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115, 59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1, 10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781, 105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474, 4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2, 97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101, 115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1, 10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2, 100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088, 4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59, 1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3, 97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1, 8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174, 1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621, 111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100, 117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59, 118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4, 6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119, 4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4, 2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97, 104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111, 117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100, 59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244, 16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265, 16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101, 115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116, 59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99, 104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519, 59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1, 8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109, 101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59, 1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59, 1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116, 117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924, 16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113, 117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496, 16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114, 16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524, 16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547, 16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1, 10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587, 1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634, 16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59, 1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640, 1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110, 117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3, 55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114, 112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116, 4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118, 16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112, 114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858, 4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59, 1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115, 59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116, 16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2, 100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922, 4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938, 16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952, 16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985, 101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99, 115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011, 1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024, 117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1, 8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115, 17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848, 113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106, 17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109, 116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105, 108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59, 102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4, 2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981, 115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69, 100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285, 17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838, 111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1, 10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105, 117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2, 59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842, 59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99, 4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112, 114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4, 3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1, 10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478, 17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178, 1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115, 17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839, 111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1, 10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545, 59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598, 17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580, 17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956, 109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110, 17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1, 10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538, 108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111, 112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957, 17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964, 114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357, 100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981, 114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114, 116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756, 97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2, 99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776, 105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776, 105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868, 17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1, 215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749, 4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927, 17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111, 17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101, 59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100, 101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101, 4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59, 1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796, 105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1, 9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1, 10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116, 18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121, 59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812, 104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250, 18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603, 114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5, 250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1, 1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1, 251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99, 59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622, 59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325, 18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4, 2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365, 1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385, 18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111, 110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434, 18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116, 59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108, 18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119, 115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114, 110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103, 59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561, 18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579, 18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252, 1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857, 18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2, 59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114, 18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695, 18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112, 112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728, 18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104, 18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1, 962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787, 3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803, 18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1, 977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882, 105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108, 114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1, 8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59, 1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98, 112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114, 111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3, 55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955, 65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843, 65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020, 19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032, 19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052, 1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3, 55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768, 99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115, 117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252, 19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97, 19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182, 19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1, 8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221, 19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97, 19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263, 114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117, 115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367, 19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1, 1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59, 19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682, 99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1, 59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441, 19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121, 19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116, 19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121, 59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59, 3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204]);
    }
  });

  // node_modules/parse5/lib/tokenizer/index.js
  var require_tokenizer = __commonJS({
    "node_modules/parse5/lib/tokenizer/index.js"(exports, module) {
      "use strict";
      var Preprocessor = require_preprocessor();
      var unicode = require_unicode();
      var neTree = require_named_entity_data();
      var ERR = require_error_codes();
      var $ = unicode.CODE_POINTS;
      var $$ = unicode.CODE_POINT_SEQUENCES;
      var C1_CONTROLS_REFERENCE_REPLACEMENTS = {
        128: 8364,
        130: 8218,
        131: 402,
        132: 8222,
        133: 8230,
        134: 8224,
        135: 8225,
        136: 710,
        137: 8240,
        138: 352,
        139: 8249,
        140: 338,
        142: 381,
        145: 8216,
        146: 8217,
        147: 8220,
        148: 8221,
        149: 8226,
        150: 8211,
        151: 8212,
        152: 732,
        153: 8482,
        154: 353,
        155: 8250,
        156: 339,
        158: 382,
        159: 376
      };
      var HAS_DATA_FLAG = 1 << 0;
      var DATA_DUPLET_FLAG = 1 << 1;
      var HAS_BRANCHES_FLAG = 1 << 2;
      var MAX_BRANCH_MARKER_VALUE = HAS_DATA_FLAG | DATA_DUPLET_FLAG | HAS_BRANCHES_FLAG;
      var DATA_STATE = "DATA_STATE";
      var RCDATA_STATE = "RCDATA_STATE";
      var RAWTEXT_STATE = "RAWTEXT_STATE";
      var SCRIPT_DATA_STATE = "SCRIPT_DATA_STATE";
      var PLAINTEXT_STATE = "PLAINTEXT_STATE";
      var TAG_OPEN_STATE = "TAG_OPEN_STATE";
      var END_TAG_OPEN_STATE = "END_TAG_OPEN_STATE";
      var TAG_NAME_STATE = "TAG_NAME_STATE";
      var RCDATA_LESS_THAN_SIGN_STATE = "RCDATA_LESS_THAN_SIGN_STATE";
      var RCDATA_END_TAG_OPEN_STATE = "RCDATA_END_TAG_OPEN_STATE";
      var RCDATA_END_TAG_NAME_STATE = "RCDATA_END_TAG_NAME_STATE";
      var RAWTEXT_LESS_THAN_SIGN_STATE = "RAWTEXT_LESS_THAN_SIGN_STATE";
      var RAWTEXT_END_TAG_OPEN_STATE = "RAWTEXT_END_TAG_OPEN_STATE";
      var RAWTEXT_END_TAG_NAME_STATE = "RAWTEXT_END_TAG_NAME_STATE";
      var SCRIPT_DATA_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_LESS_THAN_SIGN_STATE";
      var SCRIPT_DATA_END_TAG_OPEN_STATE = "SCRIPT_DATA_END_TAG_OPEN_STATE";
      var SCRIPT_DATA_END_TAG_NAME_STATE = "SCRIPT_DATA_END_TAG_NAME_STATE";
      var SCRIPT_DATA_ESCAPE_START_STATE = "SCRIPT_DATA_ESCAPE_START_STATE";
      var SCRIPT_DATA_ESCAPE_START_DASH_STATE = "SCRIPT_DATA_ESCAPE_START_DASH_STATE";
      var SCRIPT_DATA_ESCAPED_STATE = "SCRIPT_DATA_ESCAPED_STATE";
      var SCRIPT_DATA_ESCAPED_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_STATE";
      var SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE";
      var SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE";
      var SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE";
      var SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = "SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPED_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE";
      var SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE";
      var BEFORE_ATTRIBUTE_NAME_STATE = "BEFORE_ATTRIBUTE_NAME_STATE";
      var ATTRIBUTE_NAME_STATE = "ATTRIBUTE_NAME_STATE";
      var AFTER_ATTRIBUTE_NAME_STATE = "AFTER_ATTRIBUTE_NAME_STATE";
      var BEFORE_ATTRIBUTE_VALUE_STATE = "BEFORE_ATTRIBUTE_VALUE_STATE";
      var ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE";
      var ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE";
      var ATTRIBUTE_VALUE_UNQUOTED_STATE = "ATTRIBUTE_VALUE_UNQUOTED_STATE";
      var AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE";
      var SELF_CLOSING_START_TAG_STATE = "SELF_CLOSING_START_TAG_STATE";
      var BOGUS_COMMENT_STATE = "BOGUS_COMMENT_STATE";
      var MARKUP_DECLARATION_OPEN_STATE = "MARKUP_DECLARATION_OPEN_STATE";
      var COMMENT_START_STATE = "COMMENT_START_STATE";
      var COMMENT_START_DASH_STATE = "COMMENT_START_DASH_STATE";
      var COMMENT_STATE = "COMMENT_STATE";
      var COMMENT_LESS_THAN_SIGN_STATE = "COMMENT_LESS_THAN_SIGN_STATE";
      var COMMENT_LESS_THAN_SIGN_BANG_STATE = "COMMENT_LESS_THAN_SIGN_BANG_STATE";
      var COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE = "COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE";
      var COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE";
      var COMMENT_END_DASH_STATE = "COMMENT_END_DASH_STATE";
      var COMMENT_END_STATE = "COMMENT_END_STATE";
      var COMMENT_END_BANG_STATE = "COMMENT_END_BANG_STATE";
      var DOCTYPE_STATE = "DOCTYPE_STATE";
      var BEFORE_DOCTYPE_NAME_STATE = "BEFORE_DOCTYPE_NAME_STATE";
      var DOCTYPE_NAME_STATE = "DOCTYPE_NAME_STATE";
      var AFTER_DOCTYPE_NAME_STATE = "AFTER_DOCTYPE_NAME_STATE";
      var AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE = "AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE";
      var BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
      var DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE";
      var DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE";
      var AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE";
      var BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE";
      var AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE = "AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE";
      var BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
      var DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE";
      var DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE";
      var AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE";
      var BOGUS_DOCTYPE_STATE = "BOGUS_DOCTYPE_STATE";
      var CDATA_SECTION_STATE = "CDATA_SECTION_STATE";
      var CDATA_SECTION_BRACKET_STATE = "CDATA_SECTION_BRACKET_STATE";
      var CDATA_SECTION_END_STATE = "CDATA_SECTION_END_STATE";
      var CHARACTER_REFERENCE_STATE = "CHARACTER_REFERENCE_STATE";
      var NAMED_CHARACTER_REFERENCE_STATE = "NAMED_CHARACTER_REFERENCE_STATE";
      var AMBIGUOUS_AMPERSAND_STATE = "AMBIGUOS_AMPERSAND_STATE";
      var NUMERIC_CHARACTER_REFERENCE_STATE = "NUMERIC_CHARACTER_REFERENCE_STATE";
      var HEXADEMICAL_CHARACTER_REFERENCE_START_STATE = "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE";
      var DECIMAL_CHARACTER_REFERENCE_START_STATE = "DECIMAL_CHARACTER_REFERENCE_START_STATE";
      var HEXADEMICAL_CHARACTER_REFERENCE_STATE = "HEXADEMICAL_CHARACTER_REFERENCE_STATE";
      var DECIMAL_CHARACTER_REFERENCE_STATE = "DECIMAL_CHARACTER_REFERENCE_STATE";
      var NUMERIC_CHARACTER_REFERENCE_END_STATE = "NUMERIC_CHARACTER_REFERENCE_END_STATE";
      function isWhitespace(cp) {
        return cp === $.SPACE || cp === $.LINE_FEED || cp === $.TABULATION || cp === $.FORM_FEED;
      }
      function isAsciiDigit(cp) {
        return cp >= $.DIGIT_0 && cp <= $.DIGIT_9;
      }
      function isAsciiUpper(cp) {
        return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_Z;
      }
      function isAsciiLower(cp) {
        return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_Z;
      }
      function isAsciiLetter(cp) {
        return isAsciiLower(cp) || isAsciiUpper(cp);
      }
      function isAsciiAlphaNumeric(cp) {
        return isAsciiLetter(cp) || isAsciiDigit(cp);
      }
      function isAsciiUpperHexDigit(cp) {
        return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_F;
      }
      function isAsciiLowerHexDigit(cp) {
        return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_F;
      }
      function isAsciiHexDigit(cp) {
        return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
      }
      function toAsciiLowerCodePoint(cp) {
        return cp + 32;
      }
      function toChar(cp) {
        if (cp <= 65535) {
          return String.fromCharCode(cp);
        }
        cp -= 65536;
        return String.fromCharCode(cp >>> 10 & 1023 | 55296) + String.fromCharCode(56320 | cp & 1023);
      }
      function toAsciiLowerChar(cp) {
        return String.fromCharCode(toAsciiLowerCodePoint(cp));
      }
      function findNamedEntityTreeBranch(nodeIx, cp) {
        const branchCount = neTree[++nodeIx];
        let lo = ++nodeIx;
        let hi = lo + branchCount - 1;
        while (lo <= hi) {
          const mid = lo + hi >>> 1;
          const midCp = neTree[mid];
          if (midCp < cp) {
            lo = mid + 1;
          } else if (midCp > cp) {
            hi = mid - 1;
          } else {
            return neTree[mid + branchCount];
          }
        }
        return -1;
      }
      var Tokenizer = class {
        constructor() {
          this.preprocessor = new Preprocessor();
          this.tokenQueue = [];
          this.allowCDATA = false;
          this.state = DATA_STATE;
          this.returnState = "";
          this.charRefCode = -1;
          this.tempBuff = [];
          this.lastStartTagName = "";
          this.consumedAfterSnapshot = -1;
          this.active = false;
          this.currentCharacterToken = null;
          this.currentToken = null;
          this.currentAttr = null;
        }
        _err() {
        }
        _errOnNextCodePoint(err) {
          this._consume();
          this._err(err);
          this._unconsume();
        }
        getNextToken() {
          while (!this.tokenQueue.length && this.active) {
            this.consumedAfterSnapshot = 0;
            const cp = this._consume();
            if (!this._ensureHibernation()) {
              this[this.state](cp);
            }
          }
          return this.tokenQueue.shift();
        }
        write(chunk, isLastChunk) {
          this.active = true;
          this.preprocessor.write(chunk, isLastChunk);
        }
        insertHtmlAtCurrentPos(chunk) {
          this.active = true;
          this.preprocessor.insertHtmlAtCurrentPos(chunk);
        }
        _ensureHibernation() {
          if (this.preprocessor.endOfChunkHit) {
            for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) {
              this.preprocessor.retreat();
            }
            this.active = false;
            this.tokenQueue.push({ type: Tokenizer.HIBERNATION_TOKEN });
            return true;
          }
          return false;
        }
        _consume() {
          this.consumedAfterSnapshot++;
          return this.preprocessor.advance();
        }
        _unconsume() {
          this.consumedAfterSnapshot--;
          this.preprocessor.retreat();
        }
        _reconsumeInState(state) {
          this.state = state;
          this._unconsume();
        }
        _consumeSequenceIfMatch(pattern, startCp, caseSensitive) {
          let consumedCount = 0;
          let isMatch = true;
          const patternLength = pattern.length;
          let patternPos = 0;
          let cp = startCp;
          let patternCp = void 0;
          for (; patternPos < patternLength; patternPos++) {
            if (patternPos > 0) {
              cp = this._consume();
              consumedCount++;
            }
            if (cp === $.EOF) {
              isMatch = false;
              break;
            }
            patternCp = pattern[patternPos];
            if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
              isMatch = false;
              break;
            }
          }
          if (!isMatch) {
            while (consumedCount--) {
              this._unconsume();
            }
          }
          return isMatch;
        }
        _isTempBufferEqualToScriptString() {
          if (this.tempBuff.length !== $$.SCRIPT_STRING.length) {
            return false;
          }
          for (let i = 0; i < this.tempBuff.length; i++) {
            if (this.tempBuff[i] !== $$.SCRIPT_STRING[i]) {
              return false;
            }
          }
          return true;
        }
        _createStartTagToken() {
          this.currentToken = {
            type: Tokenizer.START_TAG_TOKEN,
            tagName: "",
            selfClosing: false,
            ackSelfClosing: false,
            attrs: []
          };
        }
        _createEndTagToken() {
          this.currentToken = {
            type: Tokenizer.END_TAG_TOKEN,
            tagName: "",
            selfClosing: false,
            attrs: []
          };
        }
        _createCommentToken() {
          this.currentToken = {
            type: Tokenizer.COMMENT_TOKEN,
            data: ""
          };
        }
        _createDoctypeToken(initialName) {
          this.currentToken = {
            type: Tokenizer.DOCTYPE_TOKEN,
            name: initialName,
            forceQuirks: false,
            publicId: null,
            systemId: null
          };
        }
        _createCharacterToken(type, ch) {
          this.currentCharacterToken = {
            type,
            chars: ch
          };
        }
        _createEOFToken() {
          this.currentToken = { type: Tokenizer.EOF_TOKEN };
        }
        _createAttr(attrNameFirstCh) {
          this.currentAttr = {
            name: attrNameFirstCh,
            value: ""
          };
        }
        _leaveAttrName(toState) {
          if (Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) === null) {
            this.currentToken.attrs.push(this.currentAttr);
          } else {
            this._err(ERR.duplicateAttribute);
          }
          this.state = toState;
        }
        _leaveAttrValue(toState) {
          this.state = toState;
        }
        _emitCurrentToken() {
          this._emitCurrentCharacterToken();
          const ct = this.currentToken;
          this.currentToken = null;
          if (ct.type === Tokenizer.START_TAG_TOKEN) {
            this.lastStartTagName = ct.tagName;
          } else if (ct.type === Tokenizer.END_TAG_TOKEN) {
            if (ct.attrs.length > 0) {
              this._err(ERR.endTagWithAttributes);
            }
            if (ct.selfClosing) {
              this._err(ERR.endTagWithTrailingSolidus);
            }
          }
          this.tokenQueue.push(ct);
        }
        _emitCurrentCharacterToken() {
          if (this.currentCharacterToken) {
            this.tokenQueue.push(this.currentCharacterToken);
            this.currentCharacterToken = null;
          }
        }
        _emitEOFToken() {
          this._createEOFToken();
          this._emitCurrentToken();
        }
        _appendCharToCurrentCharacterToken(type, ch) {
          if (this.currentCharacterToken && this.currentCharacterToken.type !== type) {
            this._emitCurrentCharacterToken();
          }
          if (this.currentCharacterToken) {
            this.currentCharacterToken.chars += ch;
          } else {
            this._createCharacterToken(type, ch);
          }
        }
        _emitCodePoint(cp) {
          let type = Tokenizer.CHARACTER_TOKEN;
          if (isWhitespace(cp)) {
            type = Tokenizer.WHITESPACE_CHARACTER_TOKEN;
          } else if (cp === $.NULL) {
            type = Tokenizer.NULL_CHARACTER_TOKEN;
          }
          this._appendCharToCurrentCharacterToken(type, toChar(cp));
        }
        _emitSeveralCodePoints(codePoints) {
          for (let i = 0; i < codePoints.length; i++) {
            this._emitCodePoint(codePoints[i]);
          }
        }
        _emitChars(ch) {
          this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
        }
        _matchNamedCharacterReference(startCp) {
          let result = null;
          let excess = 1;
          let i = findNamedEntityTreeBranch(0, startCp);
          this.tempBuff.push(startCp);
          while (i > -1) {
            const current = neTree[i];
            const inNode = current < MAX_BRANCH_MARKER_VALUE;
            const nodeWithData = inNode && current & HAS_DATA_FLAG;
            if (nodeWithData) {
              result = current & DATA_DUPLET_FLAG ? [neTree[++i], neTree[++i]] : [neTree[++i]];
              excess = 0;
            }
            const cp = this._consume();
            this.tempBuff.push(cp);
            excess++;
            if (cp === $.EOF) {
              break;
            }
            if (inNode) {
              i = current & HAS_BRANCHES_FLAG ? findNamedEntityTreeBranch(i, cp) : -1;
            } else {
              i = cp === current ? ++i : -1;
            }
          }
          while (excess--) {
            this.tempBuff.pop();
            this._unconsume();
          }
          return result;
        }
        _isCharacterReferenceInAttribute() {
          return this.returnState === ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE || this.returnState === ATTRIBUTE_VALUE_UNQUOTED_STATE;
        }
        _isCharacterReferenceAttributeQuirk(withSemicolon) {
          if (!withSemicolon && this._isCharacterReferenceInAttribute()) {
            const nextCp = this._consume();
            this._unconsume();
            return nextCp === $.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
          }
          return false;
        }
        _flushCodePointsConsumedAsCharacterReference() {
          if (this._isCharacterReferenceInAttribute()) {
            for (let i = 0; i < this.tempBuff.length; i++) {
              this.currentAttr.value += toChar(this.tempBuff[i]);
            }
          } else {
            this._emitSeveralCodePoints(this.tempBuff);
          }
          this.tempBuff = [];
        }
        [DATA_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.LESS_THAN_SIGN) {
            this.state = TAG_OPEN_STATE;
          } else if (cp === $.AMPERSAND) {
            this.returnState = DATA_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitCodePoint(cp);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [RCDATA_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.AMPERSAND) {
            this.returnState = RCDATA_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = RCDATA_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [RAWTEXT_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.LESS_THAN_SIGN) {
            this.state = RAWTEXT_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [PLAINTEXT_STATE](cp) {
          this.preprocessor.dropParsedChunk();
          if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [TAG_OPEN_STATE](cp) {
          if (cp === $.EXCLAMATION_MARK) {
            this.state = MARKUP_DECLARATION_OPEN_STATE;
          } else if (cp === $.SOLIDUS) {
            this.state = END_TAG_OPEN_STATE;
          } else if (isAsciiLetter(cp)) {
            this._createStartTagToken();
            this._reconsumeInState(TAG_NAME_STATE);
          } else if (cp === $.QUESTION_MARK) {
            this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
            this._createCommentToken();
            this._reconsumeInState(BOGUS_COMMENT_STATE);
          } else if (cp === $.EOF) {
            this._err(ERR.eofBeforeTagName);
            this._emitChars("<");
            this._emitEOFToken();
          } else {
            this._err(ERR.invalidFirstCharacterOfTagName);
            this._emitChars("<");
            this._reconsumeInState(DATA_STATE);
          }
        }
        [END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(TAG_NAME_STATE);
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingEndTagName);
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofBeforeTagName);
            this._emitChars("</");
            this._emitEOFToken();
          } else {
            this._err(ERR.invalidFirstCharacterOfTagName);
            this._createCommentToken();
            this._reconsumeInState(BOGUS_COMMENT_STATE);
          }
        }
        [TAG_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_ATTRIBUTE_NAME_STATE;
          } else if (cp === $.SOLIDUS) {
            this.state = SELF_CLOSING_START_TAG_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.tagName += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this.currentToken.tagName += toChar(cp);
          }
        }
        [RCDATA_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = RCDATA_END_TAG_OPEN_STATE;
          } else {
            this._emitChars("<");
            this._reconsumeInState(RCDATA_STATE);
          }
        }
        [RCDATA_END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);
          } else {
            this._emitChars("</");
            this._reconsumeInState(RCDATA_STATE);
          }
        }
        [RCDATA_END_TAG_NAME_STATE](cp) {
          if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
            this.tempBuff.push(cp);
          } else if (isAsciiLower(cp)) {
            this.currentToken.tagName += toChar(cp);
            this.tempBuff.push(cp);
          } else {
            if (this.lastStartTagName === this.currentToken.tagName) {
              if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
              }
              if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
              }
              if (cp === $.GREATER_THAN_SIGN) {
                this.state = DATA_STATE;
                this._emitCurrentToken();
                return;
              }
            }
            this._emitChars("</");
            this._emitSeveralCodePoints(this.tempBuff);
            this._reconsumeInState(RCDATA_STATE);
          }
        }
        [RAWTEXT_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = RAWTEXT_END_TAG_OPEN_STATE;
          } else {
            this._emitChars("<");
            this._reconsumeInState(RAWTEXT_STATE);
          }
        }
        [RAWTEXT_END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);
          } else {
            this._emitChars("</");
            this._reconsumeInState(RAWTEXT_STATE);
          }
        }
        [RAWTEXT_END_TAG_NAME_STATE](cp) {
          if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
            this.tempBuff.push(cp);
          } else if (isAsciiLower(cp)) {
            this.currentToken.tagName += toChar(cp);
            this.tempBuff.push(cp);
          } else {
            if (this.lastStartTagName === this.currentToken.tagName) {
              if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
              }
              if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
              }
              if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
              }
            }
            this._emitChars("</");
            this._emitSeveralCodePoints(this.tempBuff);
            this._reconsumeInState(RAWTEXT_STATE);
          }
        }
        [SCRIPT_DATA_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
          } else if (cp === $.EXCLAMATION_MARK) {
            this.state = SCRIPT_DATA_ESCAPE_START_STATE;
            this._emitChars("<!");
          } else {
            this._emitChars("<");
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);
          } else {
            this._emitChars("</");
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_END_TAG_NAME_STATE](cp) {
          if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
            this.tempBuff.push(cp);
          } else if (isAsciiLower(cp)) {
            this.currentToken.tagName += toChar(cp);
            this.tempBuff.push(cp);
          } else {
            if (this.lastStartTagName === this.currentToken.tagName) {
              if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
              } else if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
              } else if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
              }
            }
            this._emitChars("</");
            this._emitSeveralCodePoints(this.tempBuff);
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPE_START_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;
            this._emitChars("-");
          } else {
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPE_START_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
            this._emitChars("-");
          } else {
            this._reconsumeInState(SCRIPT_DATA_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPED_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_ESCAPED_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.state = SCRIPT_DATA_ESCAPED_STATE;
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this.state = SCRIPT_DATA_ESCAPED_STATE;
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_ESCAPED_DASH_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = SCRIPT_DATA_STATE;
            this._emitChars(">");
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.state = SCRIPT_DATA_ESCAPED_STATE;
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this.state = SCRIPT_DATA_ESCAPED_STATE;
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
          } else if (isAsciiLetter(cp)) {
            this.tempBuff = [];
            this._emitChars("<");
            this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);
          } else {
            this._emitChars("<");
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE](cp) {
          if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);
          } else {
            this._emitChars("</");
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE](cp) {
          if (isAsciiUpper(cp)) {
            this.currentToken.tagName += toAsciiLowerChar(cp);
            this.tempBuff.push(cp);
          } else if (isAsciiLower(cp)) {
            this.currentToken.tagName += toChar(cp);
            this.tempBuff.push(cp);
          } else {
            if (this.lastStartTagName === this.currentToken.tagName) {
              if (isWhitespace(cp)) {
                this.state = BEFORE_ATTRIBUTE_NAME_STATE;
                return;
              }
              if (cp === $.SOLIDUS) {
                this.state = SELF_CLOSING_START_TAG_STATE;
                return;
              }
              if (cp === $.GREATER_THAN_SIGN) {
                this._emitCurrentToken();
                this.state = DATA_STATE;
                return;
              }
            }
            this._emitChars("</");
            this._emitSeveralCodePoints(this.tempBuff);
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE](cp) {
          if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
            this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;
            this._emitCodePoint(cp);
          } else if (isAsciiUpper(cp)) {
            this.tempBuff.push(toAsciiLowerCodePoint(cp));
            this._emitCodePoint(cp);
          } else if (isAsciiLower(cp)) {
            this.tempBuff.push(cp);
            this._emitCodePoint(cp);
          } else {
            this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPED_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
            this._emitChars("<");
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
            this._emitChars("<");
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this._emitChars("-");
          } else if (cp === $.LESS_THAN_SIGN) {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;
            this._emitChars("<");
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = SCRIPT_DATA_STATE;
            this._emitChars(">");
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitChars(unicode.REPLACEMENT_CHARACTER);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInScriptHtmlCommentLikeText);
            this._emitEOFToken();
          } else {
            this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitCodePoint(cp);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.SOLIDUS) {
            this.tempBuff = [];
            this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;
            this._emitChars("/");
          } else {
            this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
          }
        }
        [SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE](cp) {
          if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
            this.state = this._isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;
            this._emitCodePoint(cp);
          } else if (isAsciiUpper(cp)) {
            this.tempBuff.push(toAsciiLowerCodePoint(cp));
            this._emitCodePoint(cp);
          } else if (isAsciiLower(cp)) {
            this.tempBuff.push(cp);
            this._emitCodePoint(cp);
          } else {
            this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
          }
        }
        [BEFORE_ATTRIBUTE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
            this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);
          } else if (cp === $.EQUALS_SIGN) {
            this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
            this._createAttr("=");
            this.state = ATTRIBUTE_NAME_STATE;
          } else {
            this._createAttr("");
            this._reconsumeInState(ATTRIBUTE_NAME_STATE);
          }
        }
        [ATTRIBUTE_NAME_STATE](cp) {
          if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
            this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);
            this._unconsume();
          } else if (cp === $.EQUALS_SIGN) {
            this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);
          } else if (isAsciiUpper(cp)) {
            this.currentAttr.name += toAsciiLowerChar(cp);
          } else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN) {
            this._err(ERR.unexpectedCharacterInAttributeName);
            this.currentAttr.name += toChar(cp);
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.name += unicode.REPLACEMENT_CHARACTER;
          } else {
            this.currentAttr.name += toChar(cp);
          }
        }
        [AFTER_ATTRIBUTE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.SOLIDUS) {
            this.state = SELF_CLOSING_START_TAG_STATE;
          } else if (cp === $.EQUALS_SIGN) {
            this.state = BEFORE_ATTRIBUTE_VALUE_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this._createAttr("");
            this._reconsumeInState(ATTRIBUTE_NAME_STATE);
          }
        }
        [BEFORE_ATTRIBUTE_VALUE_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.QUOTATION_MARK) {
            this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingAttributeValue);
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else {
            this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);
          }
        }
        [ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE](cp) {
          if (cp === $.QUOTATION_MARK) {
            this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
          } else if (cp === $.AMPERSAND) {
            this.returnState = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this.currentAttr.value += toChar(cp);
          }
        }
        [ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE](cp) {
          if (cp === $.APOSTROPHE) {
            this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;
          } else if (cp === $.AMPERSAND) {
            this.returnState = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this.currentAttr.value += toChar(cp);
          }
        }
        [ATTRIBUTE_VALUE_UNQUOTED_STATE](cp) {
          if (isWhitespace(cp)) {
            this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
          } else if (cp === $.AMPERSAND) {
            this.returnState = ATTRIBUTE_VALUE_UNQUOTED_STATE;
            this.state = CHARACTER_REFERENCE_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._leaveAttrValue(DATA_STATE);
            this._emitCurrentToken();
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN || cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT) {
            this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
            this.currentAttr.value += toChar(cp);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this.currentAttr.value += toChar(cp);
          }
        }
        [AFTER_ATTRIBUTE_VALUE_QUOTED_STATE](cp) {
          if (isWhitespace(cp)) {
            this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);
          } else if (cp === $.SOLIDUS) {
            this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._leaveAttrValue(DATA_STATE);
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this._err(ERR.missingWhitespaceBetweenAttributes);
            this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
          }
        }
        [SELF_CLOSING_START_TAG_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this.currentToken.selfClosing = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInTag);
            this._emitEOFToken();
          } else {
            this._err(ERR.unexpectedSolidusInTag);
            this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
          }
        }
        [BOGUS_COMMENT_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._emitCurrentToken();
            this._emitEOFToken();
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
          } else {
            this.currentToken.data += toChar(cp);
          }
        }
        [MARKUP_DECLARATION_OPEN_STATE](cp) {
          if (this._consumeSequenceIfMatch($$.DASH_DASH_STRING, cp, true)) {
            this._createCommentToken();
            this.state = COMMENT_START_STATE;
          } else if (this._consumeSequenceIfMatch($$.DOCTYPE_STRING, cp, false)) {
            this.state = DOCTYPE_STATE;
          } else if (this._consumeSequenceIfMatch($$.CDATA_START_STRING, cp, true)) {
            if (this.allowCDATA) {
              this.state = CDATA_SECTION_STATE;
            } else {
              this._err(ERR.cdataInHtmlContent);
              this._createCommentToken();
              this.currentToken.data = "[CDATA[";
              this.state = BOGUS_COMMENT_STATE;
            }
          } else if (!this._ensureHibernation()) {
            this._err(ERR.incorrectlyOpenedComment);
            this._createCommentToken();
            this._reconsumeInState(BOGUS_COMMENT_STATE);
          }
        }
        [COMMENT_START_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_START_DASH_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptClosingOfEmptyComment);
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else {
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_START_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_END_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptClosingOfEmptyComment);
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += "-";
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_END_DASH_STATE;
          } else if (cp === $.LESS_THAN_SIGN) {
            this.currentToken.data += "<";
            this.state = COMMENT_LESS_THAN_SIGN_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += toChar(cp);
          }
        }
        [COMMENT_LESS_THAN_SIGN_STATE](cp) {
          if (cp === $.EXCLAMATION_MARK) {
            this.currentToken.data += "!";
            this.state = COMMENT_LESS_THAN_SIGN_BANG_STATE;
          } else if (cp === $.LESS_THAN_SIGN) {
            this.currentToken.data += "!";
          } else {
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_LESS_THAN_SIGN_BANG_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE;
          } else {
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE;
          } else {
            this._reconsumeInState(COMMENT_END_DASH_STATE);
          }
        }
        [COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE](cp) {
          if (cp !== $.GREATER_THAN_SIGN && cp !== $.EOF) {
            this._err(ERR.nestedComment);
          }
          this._reconsumeInState(COMMENT_END_STATE);
        }
        [COMMENT_END_DASH_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.state = COMMENT_END_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += "-";
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_END_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EXCLAMATION_MARK) {
            this.state = COMMENT_END_BANG_STATE;
          } else if (cp === $.HYPHEN_MINUS) {
            this.currentToken.data += "-";
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += "--";
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [COMMENT_END_BANG_STATE](cp) {
          if (cp === $.HYPHEN_MINUS) {
            this.currentToken.data += "--!";
            this.state = COMMENT_END_DASH_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.incorrectlyClosedComment);
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInComment);
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.data += "--!";
            this._reconsumeInState(COMMENT_STATE);
          }
        }
        [DOCTYPE_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_DOCTYPE_NAME_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this._createDoctypeToken(null);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingWhitespaceBeforeDoctypeName);
            this._reconsumeInState(BEFORE_DOCTYPE_NAME_STATE);
          }
        }
        [BEFORE_DOCTYPE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (isAsciiUpper(cp)) {
            this._createDoctypeToken(toAsciiLowerChar(cp));
            this.state = DOCTYPE_NAME_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this._createDoctypeToken(unicode.REPLACEMENT_CHARACTER);
            this.state = DOCTYPE_NAME_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypeName);
            this._createDoctypeToken(null);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this._createDoctypeToken(null);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._createDoctypeToken(toChar(cp));
            this.state = DOCTYPE_NAME_STATE;
          }
        }
        [DOCTYPE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = AFTER_DOCTYPE_NAME_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (isAsciiUpper(cp)) {
            this.currentToken.name += toAsciiLowerChar(cp);
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.name += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.name += toChar(cp);
          }
        }
        [AFTER_DOCTYPE_NAME_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else if (this._consumeSequenceIfMatch($$.PUBLIC_STRING, cp, false)) {
            this.state = AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE;
          } else if (this._consumeSequenceIfMatch($$.SYSTEM_STRING, cp, false)) {
            this.state = AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE;
          } else if (!this._ensureHibernation()) {
            this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
          } else if (cp === $.QUOTATION_MARK) {
            this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
            this.currentToken.publicId = "";
            this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
            this.currentToken.publicId = "";
            this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.QUOTATION_MARK) {
            this.currentToken.publicId = "";
            this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this.currentToken.publicId = "";
            this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
          if (cp === $.QUOTATION_MARK) {
            this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.publicId += toChar(cp);
          }
        }
        [DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
          if (cp === $.APOSTROPHE) {
            this.state = AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptDoctypePublicIdentifier);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.publicId += toChar(cp);
          }
        }
        [AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.QUOTATION_MARK) {
            this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.GREATER_THAN_SIGN) {
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.QUOTATION_MARK) {
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE](cp) {
          if (isWhitespace(cp)) {
            this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
          } else if (cp === $.QUOTATION_MARK) {
            this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.QUOTATION_MARK) {
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
          } else if (cp === $.APOSTROPHE) {
            this.currentToken.systemId = "";
            this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.missingDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this.state = DATA_STATE;
            this._emitCurrentToken();
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE](cp) {
          if (cp === $.QUOTATION_MARK) {
            this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.systemId += toChar(cp);
          }
        }
        [DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE](cp) {
          if (cp === $.APOSTROPHE) {
            this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
            this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;
          } else if (cp === $.GREATER_THAN_SIGN) {
            this._err(ERR.abruptDoctypeSystemIdentifier);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this.currentToken.systemId += toChar(cp);
          }
        }
        [AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE](cp) {
          if (isWhitespace(cp)) {
            return;
          }
          if (cp === $.GREATER_THAN_SIGN) {
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInDoctype);
            this.currentToken.forceQuirks = true;
            this._emitCurrentToken();
            this._emitEOFToken();
          } else {
            this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
            this._reconsumeInState(BOGUS_DOCTYPE_STATE);
          }
        }
        [BOGUS_DOCTYPE_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this._emitCurrentToken();
            this.state = DATA_STATE;
          } else if (cp === $.NULL) {
            this._err(ERR.unexpectedNullCharacter);
          } else if (cp === $.EOF) {
            this._emitCurrentToken();
            this._emitEOFToken();
          }
        }
        [CDATA_SECTION_STATE](cp) {
          if (cp === $.RIGHT_SQUARE_BRACKET) {
            this.state = CDATA_SECTION_BRACKET_STATE;
          } else if (cp === $.EOF) {
            this._err(ERR.eofInCdata);
            this._emitEOFToken();
          } else {
            this._emitCodePoint(cp);
          }
        }
        [CDATA_SECTION_BRACKET_STATE](cp) {
          if (cp === $.RIGHT_SQUARE_BRACKET) {
            this.state = CDATA_SECTION_END_STATE;
          } else {
            this._emitChars("]");
            this._reconsumeInState(CDATA_SECTION_STATE);
          }
        }
        [CDATA_SECTION_END_STATE](cp) {
          if (cp === $.GREATER_THAN_SIGN) {
            this.state = DATA_STATE;
          } else if (cp === $.RIGHT_SQUARE_BRACKET) {
            this._emitChars("]");
          } else {
            this._emitChars("]]");
            this._reconsumeInState(CDATA_SECTION_STATE);
          }
        }
        [CHARACTER_REFERENCE_STATE](cp) {
          this.tempBuff = [$.AMPERSAND];
          if (cp === $.NUMBER_SIGN) {
            this.tempBuff.push(cp);
            this.state = NUMERIC_CHARACTER_REFERENCE_STATE;
          } else if (isAsciiAlphaNumeric(cp)) {
            this._reconsumeInState(NAMED_CHARACTER_REFERENCE_STATE);
          } else {
            this._flushCodePointsConsumedAsCharacterReference();
            this._reconsumeInState(this.returnState);
          }
        }
        [NAMED_CHARACTER_REFERENCE_STATE](cp) {
          const matchResult = this._matchNamedCharacterReference(cp);
          if (this._ensureHibernation()) {
            this.tempBuff = [$.AMPERSAND];
          } else if (matchResult) {
            const withSemicolon = this.tempBuff[this.tempBuff.length - 1] === $.SEMICOLON;
            if (!this._isCharacterReferenceAttributeQuirk(withSemicolon)) {
              if (!withSemicolon) {
                this._errOnNextCodePoint(ERR.missingSemicolonAfterCharacterReference);
              }
              this.tempBuff = matchResult;
            }
            this._flushCodePointsConsumedAsCharacterReference();
            this.state = this.returnState;
          } else {
            this._flushCodePointsConsumedAsCharacterReference();
            this.state = AMBIGUOUS_AMPERSAND_STATE;
          }
        }
        [AMBIGUOUS_AMPERSAND_STATE](cp) {
          if (isAsciiAlphaNumeric(cp)) {
            if (this._isCharacterReferenceInAttribute()) {
              this.currentAttr.value += toChar(cp);
            } else {
              this._emitCodePoint(cp);
            }
          } else {
            if (cp === $.SEMICOLON) {
              this._err(ERR.unknownNamedCharacterReference);
            }
            this._reconsumeInState(this.returnState);
          }
        }
        [NUMERIC_CHARACTER_REFERENCE_STATE](cp) {
          this.charRefCode = 0;
          if (cp === $.LATIN_SMALL_X || cp === $.LATIN_CAPITAL_X) {
            this.tempBuff.push(cp);
            this.state = HEXADEMICAL_CHARACTER_REFERENCE_START_STATE;
          } else {
            this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_START_STATE);
          }
        }
        [HEXADEMICAL_CHARACTER_REFERENCE_START_STATE](cp) {
          if (isAsciiHexDigit(cp)) {
            this._reconsumeInState(HEXADEMICAL_CHARACTER_REFERENCE_STATE);
          } else {
            this._err(ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointsConsumedAsCharacterReference();
            this._reconsumeInState(this.returnState);
          }
        }
        [DECIMAL_CHARACTER_REFERENCE_START_STATE](cp) {
          if (isAsciiDigit(cp)) {
            this._reconsumeInState(DECIMAL_CHARACTER_REFERENCE_STATE);
          } else {
            this._err(ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointsConsumedAsCharacterReference();
            this._reconsumeInState(this.returnState);
          }
        }
        [HEXADEMICAL_CHARACTER_REFERENCE_STATE](cp) {
          if (isAsciiUpperHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 55;
          } else if (isAsciiLowerHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 87;
          } else if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 48;
          } else if (cp === $.SEMICOLON) {
            this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
          } else {
            this._err(ERR.missingSemicolonAfterCharacterReference);
            this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
          }
        }
        [DECIMAL_CHARACTER_REFERENCE_STATE](cp) {
          if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 10 + cp - 48;
          } else if (cp === $.SEMICOLON) {
            this.state = NUMERIC_CHARACTER_REFERENCE_END_STATE;
          } else {
            this._err(ERR.missingSemicolonAfterCharacterReference);
            this._reconsumeInState(NUMERIC_CHARACTER_REFERENCE_END_STATE);
          }
        }
        [NUMERIC_CHARACTER_REFERENCE_END_STATE]() {
          if (this.charRefCode === $.NULL) {
            this._err(ERR.nullCharacterReference);
            this.charRefCode = $.REPLACEMENT_CHARACTER;
          } else if (this.charRefCode > 1114111) {
            this._err(ERR.characterReferenceOutsideUnicodeRange);
            this.charRefCode = $.REPLACEMENT_CHARACTER;
          } else if (unicode.isSurrogate(this.charRefCode)) {
            this._err(ERR.surrogateCharacterReference);
            this.charRefCode = $.REPLACEMENT_CHARACTER;
          } else if (unicode.isUndefinedCodePoint(this.charRefCode)) {
            this._err(ERR.noncharacterCharacterReference);
          } else if (unicode.isControlCodePoint(this.charRefCode) || this.charRefCode === $.CARRIAGE_RETURN) {
            this._err(ERR.controlCharacterReference);
            const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS[this.charRefCode];
            if (replacement) {
              this.charRefCode = replacement;
            }
          }
          this.tempBuff = [this.charRefCode];
          this._flushCodePointsConsumedAsCharacterReference();
          this._reconsumeInState(this.returnState);
        }
      };
      Tokenizer.CHARACTER_TOKEN = "CHARACTER_TOKEN";
      Tokenizer.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN";
      Tokenizer.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN";
      Tokenizer.START_TAG_TOKEN = "START_TAG_TOKEN";
      Tokenizer.END_TAG_TOKEN = "END_TAG_TOKEN";
      Tokenizer.COMMENT_TOKEN = "COMMENT_TOKEN";
      Tokenizer.DOCTYPE_TOKEN = "DOCTYPE_TOKEN";
      Tokenizer.EOF_TOKEN = "EOF_TOKEN";
      Tokenizer.HIBERNATION_TOKEN = "HIBERNATION_TOKEN";
      Tokenizer.MODE = {
        DATA: DATA_STATE,
        RCDATA: RCDATA_STATE,
        RAWTEXT: RAWTEXT_STATE,
        SCRIPT_DATA: SCRIPT_DATA_STATE,
        PLAINTEXT: PLAINTEXT_STATE
      };
      Tokenizer.getTokenAttr = function(token, attrName) {
        for (let i = token.attrs.length - 1; i >= 0; i--) {
          if (token.attrs[i].name === attrName) {
            return token.attrs[i].value;
          }
        }
        return null;
      };
      module.exports = Tokenizer;
    }
  });

  // node_modules/parse5/lib/common/html.js
  var require_html = __commonJS({
    "node_modules/parse5/lib/common/html.js"(exports) {
      "use strict";
      var NS = exports.NAMESPACES = {
        HTML: "http://www.w3.org/1999/xhtml",
        MATHML: "http://www.w3.org/1998/Math/MathML",
        SVG: "http://www.w3.org/2000/svg",
        XLINK: "http://www.w3.org/1999/xlink",
        XML: "http://www.w3.org/XML/1998/namespace",
        XMLNS: "http://www.w3.org/2000/xmlns/"
      };
      exports.ATTRS = {
        TYPE: "type",
        ACTION: "action",
        ENCODING: "encoding",
        PROMPT: "prompt",
        NAME: "name",
        COLOR: "color",
        FACE: "face",
        SIZE: "size"
      };
      exports.DOCUMENT_MODE = {
        NO_QUIRKS: "no-quirks",
        QUIRKS: "quirks",
        LIMITED_QUIRKS: "limited-quirks"
      };
      var $ = exports.TAG_NAMES = {
        A: "a",
        ADDRESS: "address",
        ANNOTATION_XML: "annotation-xml",
        APPLET: "applet",
        AREA: "area",
        ARTICLE: "article",
        ASIDE: "aside",
        B: "b",
        BASE: "base",
        BASEFONT: "basefont",
        BGSOUND: "bgsound",
        BIG: "big",
        BLOCKQUOTE: "blockquote",
        BODY: "body",
        BR: "br",
        BUTTON: "button",
        CAPTION: "caption",
        CENTER: "center",
        CODE: "code",
        COL: "col",
        COLGROUP: "colgroup",
        DD: "dd",
        DESC: "desc",
        DETAILS: "details",
        DIALOG: "dialog",
        DIR: "dir",
        DIV: "div",
        DL: "dl",
        DT: "dt",
        EM: "em",
        EMBED: "embed",
        FIELDSET: "fieldset",
        FIGCAPTION: "figcaption",
        FIGURE: "figure",
        FONT: "font",
        FOOTER: "footer",
        FOREIGN_OBJECT: "foreignObject",
        FORM: "form",
        FRAME: "frame",
        FRAMESET: "frameset",
        H1: "h1",
        H2: "h2",
        H3: "h3",
        H4: "h4",
        H5: "h5",
        H6: "h6",
        HEAD: "head",
        HEADER: "header",
        HGROUP: "hgroup",
        HR: "hr",
        HTML: "html",
        I: "i",
        IMG: "img",
        IMAGE: "image",
        INPUT: "input",
        IFRAME: "iframe",
        KEYGEN: "keygen",
        LABEL: "label",
        LI: "li",
        LINK: "link",
        LISTING: "listing",
        MAIN: "main",
        MALIGNMARK: "malignmark",
        MARQUEE: "marquee",
        MATH: "math",
        MENU: "menu",
        META: "meta",
        MGLYPH: "mglyph",
        MI: "mi",
        MO: "mo",
        MN: "mn",
        MS: "ms",
        MTEXT: "mtext",
        NAV: "nav",
        NOBR: "nobr",
        NOFRAMES: "noframes",
        NOEMBED: "noembed",
        NOSCRIPT: "noscript",
        OBJECT: "object",
        OL: "ol",
        OPTGROUP: "optgroup",
        OPTION: "option",
        P: "p",
        PARAM: "param",
        PLAINTEXT: "plaintext",
        PRE: "pre",
        RB: "rb",
        RP: "rp",
        RT: "rt",
        RTC: "rtc",
        RUBY: "ruby",
        S: "s",
        SCRIPT: "script",
        SECTION: "section",
        SELECT: "select",
        SOURCE: "source",
        SMALL: "small",
        SPAN: "span",
        STRIKE: "strike",
        STRONG: "strong",
        STYLE: "style",
        SUB: "sub",
        SUMMARY: "summary",
        SUP: "sup",
        TABLE: "table",
        TBODY: "tbody",
        TEMPLATE: "template",
        TEXTAREA: "textarea",
        TFOOT: "tfoot",
        TD: "td",
        TH: "th",
        THEAD: "thead",
        TITLE: "title",
        TR: "tr",
        TRACK: "track",
        TT: "tt",
        U: "u",
        UL: "ul",
        SVG: "svg",
        VAR: "var",
        WBR: "wbr",
        XMP: "xmp"
      };
      exports.SPECIAL_ELEMENTS = {
        [NS.HTML]: {
          [$.ADDRESS]: true,
          [$.APPLET]: true,
          [$.AREA]: true,
          [$.ARTICLE]: true,
          [$.ASIDE]: true,
          [$.BASE]: true,
          [$.BASEFONT]: true,
          [$.BGSOUND]: true,
          [$.BLOCKQUOTE]: true,
          [$.BODY]: true,
          [$.BR]: true,
          [$.BUTTON]: true,
          [$.CAPTION]: true,
          [$.CENTER]: true,
          [$.COL]: true,
          [$.COLGROUP]: true,
          [$.DD]: true,
          [$.DETAILS]: true,
          [$.DIR]: true,
          [$.DIV]: true,
          [$.DL]: true,
          [$.DT]: true,
          [$.EMBED]: true,
          [$.FIELDSET]: true,
          [$.FIGCAPTION]: true,
          [$.FIGURE]: true,
          [$.FOOTER]: true,
          [$.FORM]: true,
          [$.FRAME]: true,
          [$.FRAMESET]: true,
          [$.H1]: true,
          [$.H2]: true,
          [$.H3]: true,
          [$.H4]: true,
          [$.H5]: true,
          [$.H6]: true,
          [$.HEAD]: true,
          [$.HEADER]: true,
          [$.HGROUP]: true,
          [$.HR]: true,
          [$.HTML]: true,
          [$.IFRAME]: true,
          [$.IMG]: true,
          [$.INPUT]: true,
          [$.LI]: true,
          [$.LINK]: true,
          [$.LISTING]: true,
          [$.MAIN]: true,
          [$.MARQUEE]: true,
          [$.MENU]: true,
          [$.META]: true,
          [$.NAV]: true,
          [$.NOEMBED]: true,
          [$.NOFRAMES]: true,
          [$.NOSCRIPT]: true,
          [$.OBJECT]: true,
          [$.OL]: true,
          [$.P]: true,
          [$.PARAM]: true,
          [$.PLAINTEXT]: true,
          [$.PRE]: true,
          [$.SCRIPT]: true,
          [$.SECTION]: true,
          [$.SELECT]: true,
          [$.SOURCE]: true,
          [$.STYLE]: true,
          [$.SUMMARY]: true,
          [$.TABLE]: true,
          [$.TBODY]: true,
          [$.TD]: true,
          [$.TEMPLATE]: true,
          [$.TEXTAREA]: true,
          [$.TFOOT]: true,
          [$.TH]: true,
          [$.THEAD]: true,
          [$.TITLE]: true,
          [$.TR]: true,
          [$.TRACK]: true,
          [$.UL]: true,
          [$.WBR]: true,
          [$.XMP]: true
        },
        [NS.MATHML]: {
          [$.MI]: true,
          [$.MO]: true,
          [$.MN]: true,
          [$.MS]: true,
          [$.MTEXT]: true,
          [$.ANNOTATION_XML]: true
        },
        [NS.SVG]: {
          [$.TITLE]: true,
          [$.FOREIGN_OBJECT]: true,
          [$.DESC]: true
        }
      };
    }
  });

  // node_modules/parse5/lib/parser/open-element-stack.js
  var require_open_element_stack = __commonJS({
    "node_modules/parse5/lib/parser/open-element-stack.js"(exports, module) {
      "use strict";
      var HTML = require_html();
      var $ = HTML.TAG_NAMES;
      var NS = HTML.NAMESPACES;
      function isImpliedEndTagRequired(tn) {
        switch (tn.length) {
          case 1:
            return tn === $.P;
          case 2:
            return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI;
          case 3:
            return tn === $.RTC;
          case 6:
            return tn === $.OPTION;
          case 8:
            return tn === $.OPTGROUP;
        }
        return false;
      }
      function isImpliedEndTagRequiredThoroughly(tn) {
        switch (tn.length) {
          case 1:
            return tn === $.P;
          case 2:
            return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI || tn === $.TD || tn === $.TH || tn === $.TR;
          case 3:
            return tn === $.RTC;
          case 5:
            return tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD;
          case 6:
            return tn === $.OPTION;
          case 7:
            return tn === $.CAPTION;
          case 8:
            return tn === $.OPTGROUP || tn === $.COLGROUP;
        }
        return false;
      }
      function isScopingElement(tn, ns) {
        switch (tn.length) {
          case 2:
            if (tn === $.TD || tn === $.TH) {
              return ns === NS.HTML;
            } else if (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS) {
              return ns === NS.MATHML;
            }
            break;
          case 4:
            if (tn === $.HTML) {
              return ns === NS.HTML;
            } else if (tn === $.DESC) {
              return ns === NS.SVG;
            }
            break;
          case 5:
            if (tn === $.TABLE) {
              return ns === NS.HTML;
            } else if (tn === $.MTEXT) {
              return ns === NS.MATHML;
            } else if (tn === $.TITLE) {
              return ns === NS.SVG;
            }
            break;
          case 6:
            return (tn === $.APPLET || tn === $.OBJECT) && ns === NS.HTML;
          case 7:
            return (tn === $.CAPTION || tn === $.MARQUEE) && ns === NS.HTML;
          case 8:
            return tn === $.TEMPLATE && ns === NS.HTML;
          case 13:
            return tn === $.FOREIGN_OBJECT && ns === NS.SVG;
          case 14:
            return tn === $.ANNOTATION_XML && ns === NS.MATHML;
        }
        return false;
      }
      var OpenElementStack = class {
        constructor(document2, treeAdapter) {
          this.stackTop = -1;
          this.items = [];
          this.current = document2;
          this.currentTagName = null;
          this.currentTmplContent = null;
          this.tmplCount = 0;
          this.treeAdapter = treeAdapter;
        }
        _indexOf(element) {
          let idx = -1;
          for (let i = this.stackTop; i >= 0; i--) {
            if (this.items[i] === element) {
              idx = i;
              break;
            }
          }
          return idx;
        }
        _isInTemplate() {
          return this.currentTagName === $.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
        }
        _updateCurrentElement() {
          this.current = this.items[this.stackTop];
          this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);
          this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
        }
        push(element) {
          this.items[++this.stackTop] = element;
          this._updateCurrentElement();
          if (this._isInTemplate()) {
            this.tmplCount++;
          }
        }
        pop() {
          this.stackTop--;
          if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount--;
          }
          this._updateCurrentElement();
        }
        replace(oldElement, newElement) {
          const idx = this._indexOf(oldElement);
          this.items[idx] = newElement;
          if (idx === this.stackTop) {
            this._updateCurrentElement();
          }
        }
        insertAfter(referenceElement, newElement) {
          const insertionIdx = this._indexOf(referenceElement) + 1;
          this.items.splice(insertionIdx, 0, newElement);
          if (insertionIdx === ++this.stackTop) {
            this._updateCurrentElement();
          }
        }
        popUntilTagNamePopped(tagName) {
          while (this.stackTop > -1) {
            const tn = this.currentTagName;
            const ns = this.treeAdapter.getNamespaceURI(this.current);
            this.pop();
            if (tn === tagName && ns === NS.HTML) {
              break;
            }
          }
        }
        popUntilElementPopped(element) {
          while (this.stackTop > -1) {
            const poppedElement = this.current;
            this.pop();
            if (poppedElement === element) {
              break;
            }
          }
        }
        popUntilNumberedHeaderPopped() {
          while (this.stackTop > -1) {
            const tn = this.currentTagName;
            const ns = this.treeAdapter.getNamespaceURI(this.current);
            this.pop();
            if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6 && ns === NS.HTML) {
              break;
            }
          }
        }
        popUntilTableCellPopped() {
          while (this.stackTop > -1) {
            const tn = this.currentTagName;
            const ns = this.treeAdapter.getNamespaceURI(this.current);
            this.pop();
            if (tn === $.TD || tn === $.TH && ns === NS.HTML) {
              break;
            }
          }
        }
        popAllUpToHtmlElement() {
          this.stackTop = 0;
          this._updateCurrentElement();
        }
        clearBackToTableContext() {
          while (this.currentTagName !== $.TABLE && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
            this.pop();
          }
        }
        clearBackToTableBodyContext() {
          while (this.currentTagName !== $.TBODY && this.currentTagName !== $.TFOOT && this.currentTagName !== $.THEAD && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
            this.pop();
          }
        }
        clearBackToTableRowContext() {
          while (this.currentTagName !== $.TR && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
            this.pop();
          }
        }
        remove(element) {
          for (let i = this.stackTop; i >= 0; i--) {
            if (this.items[i] === element) {
              this.items.splice(i, 1);
              this.stackTop--;
              this._updateCurrentElement();
              break;
            }
          }
        }
        tryPeekProperlyNestedBodyElement() {
          const element = this.items[1];
          return element && this.treeAdapter.getTagName(element) === $.BODY ? element : null;
        }
        contains(element) {
          return this._indexOf(element) > -1;
        }
        getCommonAncestor(element) {
          let elementIdx = this._indexOf(element);
          return --elementIdx >= 0 ? this.items[elementIdx] : null;
        }
        isRootHtmlElementCurrent() {
          return this.stackTop === 0 && this.currentTagName === $.HTML;
        }
        hasInScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === NS.HTML) {
              return true;
            }
            if (isScopingElement(tn, ns)) {
              return false;
            }
          }
          return true;
        }
        hasNumberedHeaderInScope() {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if ((tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) && ns === NS.HTML) {
              return true;
            }
            if (isScopingElement(tn, ns)) {
              return false;
            }
          }
          return true;
        }
        hasInListItemScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === NS.HTML) {
              return true;
            }
            if ((tn === $.UL || tn === $.OL) && ns === NS.HTML || isScopingElement(tn, ns)) {
              return false;
            }
          }
          return true;
        }
        hasInButtonScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === NS.HTML) {
              return true;
            }
            if (tn === $.BUTTON && ns === NS.HTML || isScopingElement(tn, ns)) {
              return false;
            }
          }
          return true;
        }
        hasInTableScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== NS.HTML) {
              continue;
            }
            if (tn === tagName) {
              return true;
            }
            if (tn === $.TABLE || tn === $.TEMPLATE || tn === $.HTML) {
              return false;
            }
          }
          return true;
        }
        hasTableBodyContextInTableScope() {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== NS.HTML) {
              continue;
            }
            if (tn === $.TBODY || tn === $.THEAD || tn === $.TFOOT) {
              return true;
            }
            if (tn === $.TABLE || tn === $.HTML) {
              return false;
            }
          }
          return true;
        }
        hasInSelectScope(tagName) {
          for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.treeAdapter.getTagName(this.items[i]);
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== NS.HTML) {
              continue;
            }
            if (tn === tagName) {
              return true;
            }
            if (tn !== $.OPTION && tn !== $.OPTGROUP) {
              return false;
            }
          }
          return true;
        }
        generateImpliedEndTags() {
          while (isImpliedEndTagRequired(this.currentTagName)) {
            this.pop();
          }
        }
        generateImpliedEndTagsThoroughly() {
          while (isImpliedEndTagRequiredThoroughly(this.currentTagName)) {
            this.pop();
          }
        }
        generateImpliedEndTagsWithExclusion(exclusionTagName) {
          while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName) {
            this.pop();
          }
        }
      };
      module.exports = OpenElementStack;
    }
  });

  // node_modules/parse5/lib/parser/formatting-element-list.js
  var require_formatting_element_list = __commonJS({
    "node_modules/parse5/lib/parser/formatting-element-list.js"(exports, module) {
      "use strict";
      var NOAH_ARK_CAPACITY = 3;
      var FormattingElementList = class {
        constructor(treeAdapter) {
          this.length = 0;
          this.entries = [];
          this.treeAdapter = treeAdapter;
          this.bookmark = null;
        }
        _getNoahArkConditionCandidates(newElement) {
          const candidates = [];
          if (this.length >= NOAH_ARK_CAPACITY) {
            const neAttrsLength = this.treeAdapter.getAttrList(newElement).length;
            const neTagName = this.treeAdapter.getTagName(newElement);
            const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
            for (let i = this.length - 1; i >= 0; i--) {
              const entry = this.entries[i];
              if (entry.type === FormattingElementList.MARKER_ENTRY) {
                break;
              }
              const element = entry.element;
              const elementAttrs = this.treeAdapter.getAttrList(element);
              const isCandidate = this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI && elementAttrs.length === neAttrsLength;
              if (isCandidate) {
                candidates.push({ idx: i, attrs: elementAttrs });
              }
            }
          }
          return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
        }
        _ensureNoahArkCondition(newElement) {
          const candidates = this._getNoahArkConditionCandidates(newElement);
          let cLength = candidates.length;
          if (cLength) {
            const neAttrs = this.treeAdapter.getAttrList(newElement);
            const neAttrsLength = neAttrs.length;
            const neAttrsMap = /* @__PURE__ */ Object.create(null);
            for (let i = 0; i < neAttrsLength; i++) {
              const neAttr = neAttrs[i];
              neAttrsMap[neAttr.name] = neAttr.value;
            }
            for (let i = 0; i < neAttrsLength; i++) {
              for (let j = 0; j < cLength; j++) {
                const cAttr = candidates[j].attrs[i];
                if (neAttrsMap[cAttr.name] !== cAttr.value) {
                  candidates.splice(j, 1);
                  cLength--;
                }
                if (candidates.length < NOAH_ARK_CAPACITY) {
                  return;
                }
              }
            }
            for (let i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
              this.entries.splice(candidates[i].idx, 1);
              this.length--;
            }
          }
        }
        insertMarker() {
          this.entries.push({ type: FormattingElementList.MARKER_ENTRY });
          this.length++;
        }
        pushElement(element, token) {
          this._ensureNoahArkCondition(element);
          this.entries.push({
            type: FormattingElementList.ELEMENT_ENTRY,
            element,
            token
          });
          this.length++;
        }
        insertElementAfterBookmark(element, token) {
          let bookmarkIdx = this.length - 1;
          for (; bookmarkIdx >= 0; bookmarkIdx--) {
            if (this.entries[bookmarkIdx] === this.bookmark) {
              break;
            }
          }
          this.entries.splice(bookmarkIdx + 1, 0, {
            type: FormattingElementList.ELEMENT_ENTRY,
            element,
            token
          });
          this.length++;
        }
        removeEntry(entry) {
          for (let i = this.length - 1; i >= 0; i--) {
            if (this.entries[i] === entry) {
              this.entries.splice(i, 1);
              this.length--;
              break;
            }
          }
        }
        clearToLastMarker() {
          while (this.length) {
            const entry = this.entries.pop();
            this.length--;
            if (entry.type === FormattingElementList.MARKER_ENTRY) {
              break;
            }
          }
        }
        getElementEntryInScopeWithTagName(tagName) {
          for (let i = this.length - 1; i >= 0; i--) {
            const entry = this.entries[i];
            if (entry.type === FormattingElementList.MARKER_ENTRY) {
              return null;
            }
            if (this.treeAdapter.getTagName(entry.element) === tagName) {
              return entry;
            }
          }
          return null;
        }
        getElementEntry(element) {
          for (let i = this.length - 1; i >= 0; i--) {
            const entry = this.entries[i];
            if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element) {
              return entry;
            }
          }
          return null;
        }
      };
      FormattingElementList.MARKER_ENTRY = "MARKER_ENTRY";
      FormattingElementList.ELEMENT_ENTRY = "ELEMENT_ENTRY";
      module.exports = FormattingElementList;
    }
  });

  // node_modules/parse5/lib/utils/mixin.js
  var require_mixin = __commonJS({
    "node_modules/parse5/lib/utils/mixin.js"(exports, module) {
      "use strict";
      var Mixin = class {
        constructor(host) {
          const originalMethods = {};
          const overriddenMethods = this._getOverriddenMethods(this, originalMethods);
          for (const key of Object.keys(overriddenMethods)) {
            if (typeof overriddenMethods[key] === "function") {
              originalMethods[key] = host[key];
              host[key] = overriddenMethods[key];
            }
          }
        }
        _getOverriddenMethods() {
          throw new Error("Not implemented");
        }
      };
      Mixin.install = function(host, Ctor, opts) {
        if (!host.__mixins) {
          host.__mixins = [];
        }
        for (let i = 0; i < host.__mixins.length; i++) {
          if (host.__mixins[i].constructor === Ctor) {
            return host.__mixins[i];
          }
        }
        const mixin = new Ctor(host, opts);
        host.__mixins.push(mixin);
        return mixin;
      };
      module.exports = Mixin;
    }
  });

  // node_modules/parse5/lib/extensions/position-tracking/preprocessor-mixin.js
  var require_preprocessor_mixin = __commonJS({
    "node_modules/parse5/lib/extensions/position-tracking/preprocessor-mixin.js"(exports, module) {
      "use strict";
      var Mixin = require_mixin();
      var PositionTrackingPreprocessorMixin = class extends Mixin {
        constructor(preprocessor) {
          super(preprocessor);
          this.preprocessor = preprocessor;
          this.isEol = false;
          this.lineStartPos = 0;
          this.droppedBufferSize = 0;
          this.offset = 0;
          this.col = 0;
          this.line = 1;
        }
        _getOverriddenMethods(mxn, orig) {
          return {
            advance() {
              const pos = this.pos + 1;
              const ch = this.html[pos];
              if (mxn.isEol) {
                mxn.isEol = false;
                mxn.line++;
                mxn.lineStartPos = pos;
              }
              if (ch === "\n" || ch === "\r" && this.html[pos + 1] !== "\n") {
                mxn.isEol = true;
              }
              mxn.col = pos - mxn.lineStartPos + 1;
              mxn.offset = mxn.droppedBufferSize + pos;
              return orig.advance.call(this);
            },
            retreat() {
              orig.retreat.call(this);
              mxn.isEol = false;
              mxn.col = this.pos - mxn.lineStartPos + 1;
            },
            dropParsedChunk() {
              const prevPos = this.pos;
              orig.dropParsedChunk.call(this);
              const reduction = prevPos - this.pos;
              mxn.lineStartPos -= reduction;
              mxn.droppedBufferSize += reduction;
              mxn.offset = mxn.droppedBufferSize + this.pos;
            }
          };
        }
      };
      module.exports = PositionTrackingPreprocessorMixin;
    }
  });

  // node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js
  var require_tokenizer_mixin = __commonJS({
    "node_modules/parse5/lib/extensions/location-info/tokenizer-mixin.js"(exports, module) {
      "use strict";
      var Mixin = require_mixin();
      var Tokenizer = require_tokenizer();
      var PositionTrackingPreprocessorMixin = require_preprocessor_mixin();
      var LocationInfoTokenizerMixin = class extends Mixin {
        constructor(tokenizer) {
          super(tokenizer);
          this.tokenizer = tokenizer;
          this.posTracker = Mixin.install(tokenizer.preprocessor, PositionTrackingPreprocessorMixin);
          this.currentAttrLocation = null;
          this.ctLoc = null;
        }
        _getCurrentLocation() {
          return {
            startLine: this.posTracker.line,
            startCol: this.posTracker.col,
            startOffset: this.posTracker.offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1
          };
        }
        _attachCurrentAttrLocationInfo() {
          this.currentAttrLocation.endLine = this.posTracker.line;
          this.currentAttrLocation.endCol = this.posTracker.col;
          this.currentAttrLocation.endOffset = this.posTracker.offset;
          const currentToken = this.tokenizer.currentToken;
          const currentAttr = this.tokenizer.currentAttr;
          if (!currentToken.location.attrs) {
            currentToken.location.attrs = /* @__PURE__ */ Object.create(null);
          }
          currentToken.location.attrs[currentAttr.name] = this.currentAttrLocation;
        }
        _getOverriddenMethods(mxn, orig) {
          const methods = {
            _createStartTagToken() {
              orig._createStartTagToken.call(this);
              this.currentToken.location = mxn.ctLoc;
            },
            _createEndTagToken() {
              orig._createEndTagToken.call(this);
              this.currentToken.location = mxn.ctLoc;
            },
            _createCommentToken() {
              orig._createCommentToken.call(this);
              this.currentToken.location = mxn.ctLoc;
            },
            _createDoctypeToken(initialName) {
              orig._createDoctypeToken.call(this, initialName);
              this.currentToken.location = mxn.ctLoc;
            },
            _createCharacterToken(type, ch) {
              orig._createCharacterToken.call(this, type, ch);
              this.currentCharacterToken.location = mxn.ctLoc;
            },
            _createEOFToken() {
              orig._createEOFToken.call(this);
              this.currentToken.location = mxn._getCurrentLocation();
            },
            _createAttr(attrNameFirstCh) {
              orig._createAttr.call(this, attrNameFirstCh);
              mxn.currentAttrLocation = mxn._getCurrentLocation();
            },
            _leaveAttrName(toState) {
              orig._leaveAttrName.call(this, toState);
              mxn._attachCurrentAttrLocationInfo();
            },
            _leaveAttrValue(toState) {
              orig._leaveAttrValue.call(this, toState);
              mxn._attachCurrentAttrLocationInfo();
            },
            _emitCurrentToken() {
              const ctLoc = this.currentToken.location;
              if (this.currentCharacterToken) {
                this.currentCharacterToken.location.endLine = ctLoc.startLine;
                this.currentCharacterToken.location.endCol = ctLoc.startCol;
                this.currentCharacterToken.location.endOffset = ctLoc.startOffset;
              }
              if (this.currentToken.type === Tokenizer.EOF_TOKEN) {
                ctLoc.endLine = ctLoc.startLine;
                ctLoc.endCol = ctLoc.startCol;
                ctLoc.endOffset = ctLoc.startOffset;
              } else {
                ctLoc.endLine = mxn.posTracker.line;
                ctLoc.endCol = mxn.posTracker.col + 1;
                ctLoc.endOffset = mxn.posTracker.offset + 1;
              }
              orig._emitCurrentToken.call(this);
            },
            _emitCurrentCharacterToken() {
              const ctLoc = this.currentCharacterToken && this.currentCharacterToken.location;
              if (ctLoc && ctLoc.endOffset === -1) {
                ctLoc.endLine = mxn.posTracker.line;
                ctLoc.endCol = mxn.posTracker.col;
                ctLoc.endOffset = mxn.posTracker.offset;
              }
              orig._emitCurrentCharacterToken.call(this);
            }
          };
          Object.keys(Tokenizer.MODE).forEach((modeName) => {
            const state = Tokenizer.MODE[modeName];
            methods[state] = function(cp) {
              mxn.ctLoc = mxn._getCurrentLocation();
              orig[state].call(this, cp);
            };
          });
          return methods;
        }
      };
      module.exports = LocationInfoTokenizerMixin;
    }
  });

  // node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js
  var require_open_element_stack_mixin = __commonJS({
    "node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js"(exports, module) {
      "use strict";
      var Mixin = require_mixin();
      var LocationInfoOpenElementStackMixin = class extends Mixin {
        constructor(stack, opts) {
          super(stack);
          this.onItemPop = opts.onItemPop;
        }
        _getOverriddenMethods(mxn, orig) {
          return {
            pop() {
              mxn.onItemPop(this.current);
              orig.pop.call(this);
            },
            popAllUpToHtmlElement() {
              for (let i = this.stackTop; i > 0; i--) {
                mxn.onItemPop(this.items[i]);
              }
              orig.popAllUpToHtmlElement.call(this);
            },
            remove(element) {
              mxn.onItemPop(this.current);
              orig.remove.call(this, element);
            }
          };
        }
      };
      module.exports = LocationInfoOpenElementStackMixin;
    }
  });

  // node_modules/parse5/lib/extensions/location-info/parser-mixin.js
  var require_parser_mixin = __commonJS({
    "node_modules/parse5/lib/extensions/location-info/parser-mixin.js"(exports, module) {
      "use strict";
      var Mixin = require_mixin();
      var Tokenizer = require_tokenizer();
      var LocationInfoTokenizerMixin = require_tokenizer_mixin();
      var LocationInfoOpenElementStackMixin = require_open_element_stack_mixin();
      var HTML = require_html();
      var $ = HTML.TAG_NAMES;
      var LocationInfoParserMixin = class extends Mixin {
        constructor(parser) {
          super(parser);
          this.parser = parser;
          this.treeAdapter = this.parser.treeAdapter;
          this.posTracker = null;
          this.lastStartTagToken = null;
          this.lastFosterParentingLocation = null;
          this.currentToken = null;
        }
        _setStartLocation(element) {
          let loc = null;
          if (this.lastStartTagToken) {
            loc = Object.assign({}, this.lastStartTagToken.location);
            loc.startTag = this.lastStartTagToken.location;
          }
          this.treeAdapter.setNodeSourceCodeLocation(element, loc);
        }
        _setEndLocation(element, closingToken) {
          const loc = this.treeAdapter.getNodeSourceCodeLocation(element);
          if (loc) {
            if (closingToken.location) {
              const ctLoc = closingToken.location;
              const tn = this.treeAdapter.getTagName(element);
              const isClosingEndTag = closingToken.type === Tokenizer.END_TAG_TOKEN && tn === closingToken.tagName;
              const endLoc = {};
              if (isClosingEndTag) {
                endLoc.endTag = Object.assign({}, ctLoc);
                endLoc.endLine = ctLoc.endLine;
                endLoc.endCol = ctLoc.endCol;
                endLoc.endOffset = ctLoc.endOffset;
              } else {
                endLoc.endLine = ctLoc.startLine;
                endLoc.endCol = ctLoc.startCol;
                endLoc.endOffset = ctLoc.startOffset;
              }
              this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
            }
          }
        }
        _getOverriddenMethods(mxn, orig) {
          return {
            _bootstrap(document2, fragmentContext) {
              orig._bootstrap.call(this, document2, fragmentContext);
              mxn.lastStartTagToken = null;
              mxn.lastFosterParentingLocation = null;
              mxn.currentToken = null;
              const tokenizerMixin = Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
              mxn.posTracker = tokenizerMixin.posTracker;
              Mixin.install(this.openElements, LocationInfoOpenElementStackMixin, {
                onItemPop: function(element) {
                  mxn._setEndLocation(element, mxn.currentToken);
                }
              });
            },
            _runParsingLoop(scriptHandler) {
              orig._runParsingLoop.call(this, scriptHandler);
              for (let i = this.openElements.stackTop; i >= 0; i--) {
                mxn._setEndLocation(this.openElements.items[i], mxn.currentToken);
              }
            },
            _processTokenInForeignContent(token) {
              mxn.currentToken = token;
              orig._processTokenInForeignContent.call(this, token);
            },
            _processToken(token) {
              mxn.currentToken = token;
              orig._processToken.call(this, token);
              const requireExplicitUpdate = token.type === Tokenizer.END_TAG_TOKEN && (token.tagName === $.HTML || token.tagName === $.BODY && this.openElements.hasInScope($.BODY));
              if (requireExplicitUpdate) {
                for (let i = this.openElements.stackTop; i >= 0; i--) {
                  const element = this.openElements.items[i];
                  if (this.treeAdapter.getTagName(element) === token.tagName) {
                    mxn._setEndLocation(element, token);
                    break;
                  }
                }
              }
            },
            _setDocumentType(token) {
              orig._setDocumentType.call(this, token);
              const documentChildren = this.treeAdapter.getChildNodes(this.document);
              const cnLength = documentChildren.length;
              for (let i = 0; i < cnLength; i++) {
                const node = documentChildren[i];
                if (this.treeAdapter.isDocumentTypeNode(node)) {
                  this.treeAdapter.setNodeSourceCodeLocation(node, token.location);
                  break;
                }
              }
            },
            _attachElementToTree(element) {
              mxn._setStartLocation(element);
              mxn.lastStartTagToken = null;
              orig._attachElementToTree.call(this, element);
            },
            _appendElement(token, namespaceURI) {
              mxn.lastStartTagToken = token;
              orig._appendElement.call(this, token, namespaceURI);
            },
            _insertElement(token, namespaceURI) {
              mxn.lastStartTagToken = token;
              orig._insertElement.call(this, token, namespaceURI);
            },
            _insertTemplate(token) {
              mxn.lastStartTagToken = token;
              orig._insertTemplate.call(this, token);
              const tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);
              this.treeAdapter.setNodeSourceCodeLocation(tmplContent, null);
            },
            _insertFakeRootElement() {
              orig._insertFakeRootElement.call(this);
              this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null);
            },
            _appendCommentNode(token, parent) {
              orig._appendCommentNode.call(this, token, parent);
              const children = this.treeAdapter.getChildNodes(parent);
              const commentNode = children[children.length - 1];
              this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
            },
            _findFosterParentingLocation() {
              mxn.lastFosterParentingLocation = orig._findFosterParentingLocation.call(this);
              return mxn.lastFosterParentingLocation;
            },
            _insertCharacters(token) {
              orig._insertCharacters.call(this, token);
              const hasFosterParent = this._shouldFosterParentOnInsertion();
              const parent = hasFosterParent && mxn.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current;
              const siblings = this.treeAdapter.getChildNodes(parent);
              const textNodeIdx = hasFosterParent && mxn.lastFosterParentingLocation.beforeElement ? siblings.indexOf(mxn.lastFosterParentingLocation.beforeElement) - 1 : siblings.length - 1;
              const textNode = siblings[textNodeIdx];
              const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
              if (tnLoc) {
                const { endLine, endCol, endOffset } = token.location;
                this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
              } else {
                this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
              }
            }
          };
        }
      };
      module.exports = LocationInfoParserMixin;
    }
  });

  // node_modules/parse5/lib/extensions/error-reporting/mixin-base.js
  var require_mixin_base = __commonJS({
    "node_modules/parse5/lib/extensions/error-reporting/mixin-base.js"(exports, module) {
      "use strict";
      var Mixin = require_mixin();
      var ErrorReportingMixinBase = class extends Mixin {
        constructor(host, opts) {
          super(host);
          this.posTracker = null;
          this.onParseError = opts.onParseError;
        }
        _setErrorLocation(err) {
          err.startLine = err.endLine = this.posTracker.line;
          err.startCol = err.endCol = this.posTracker.col;
          err.startOffset = err.endOffset = this.posTracker.offset;
        }
        _reportError(code) {
          const err = {
            code,
            startLine: -1,
            startCol: -1,
            startOffset: -1,
            endLine: -1,
            endCol: -1,
            endOffset: -1
          };
          this._setErrorLocation(err);
          this.onParseError(err);
        }
        _getOverriddenMethods(mxn) {
          return {
            _err(code) {
              mxn._reportError(code);
            }
          };
        }
      };
      module.exports = ErrorReportingMixinBase;
    }
  });

  // node_modules/parse5/lib/extensions/error-reporting/preprocessor-mixin.js
  var require_preprocessor_mixin2 = __commonJS({
    "node_modules/parse5/lib/extensions/error-reporting/preprocessor-mixin.js"(exports, module) {
      "use strict";
      var ErrorReportingMixinBase = require_mixin_base();
      var PositionTrackingPreprocessorMixin = require_preprocessor_mixin();
      var Mixin = require_mixin();
      var ErrorReportingPreprocessorMixin = class extends ErrorReportingMixinBase {
        constructor(preprocessor, opts) {
          super(preprocessor, opts);
          this.posTracker = Mixin.install(preprocessor, PositionTrackingPreprocessorMixin);
          this.lastErrOffset = -1;
        }
        _reportError(code) {
          if (this.lastErrOffset !== this.posTracker.offset) {
            this.lastErrOffset = this.posTracker.offset;
            super._reportError(code);
          }
        }
      };
      module.exports = ErrorReportingPreprocessorMixin;
    }
  });

  // node_modules/parse5/lib/extensions/error-reporting/tokenizer-mixin.js
  var require_tokenizer_mixin2 = __commonJS({
    "node_modules/parse5/lib/extensions/error-reporting/tokenizer-mixin.js"(exports, module) {
      "use strict";
      var ErrorReportingMixinBase = require_mixin_base();
      var ErrorReportingPreprocessorMixin = require_preprocessor_mixin2();
      var Mixin = require_mixin();
      var ErrorReportingTokenizerMixin = class extends ErrorReportingMixinBase {
        constructor(tokenizer, opts) {
          super(tokenizer, opts);
          const preprocessorMixin = Mixin.install(tokenizer.preprocessor, ErrorReportingPreprocessorMixin, opts);
          this.posTracker = preprocessorMixin.posTracker;
        }
      };
      module.exports = ErrorReportingTokenizerMixin;
    }
  });

  // node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js
  var require_parser_mixin2 = __commonJS({
    "node_modules/parse5/lib/extensions/error-reporting/parser-mixin.js"(exports, module) {
      "use strict";
      var ErrorReportingMixinBase = require_mixin_base();
      var ErrorReportingTokenizerMixin = require_tokenizer_mixin2();
      var LocationInfoTokenizerMixin = require_tokenizer_mixin();
      var Mixin = require_mixin();
      var ErrorReportingParserMixin = class extends ErrorReportingMixinBase {
        constructor(parser, opts) {
          super(parser, opts);
          this.opts = opts;
          this.ctLoc = null;
          this.locBeforeToken = false;
        }
        _setErrorLocation(err) {
          if (this.ctLoc) {
            err.startLine = this.ctLoc.startLine;
            err.startCol = this.ctLoc.startCol;
            err.startOffset = this.ctLoc.startOffset;
            err.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine;
            err.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol;
            err.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset;
          }
        }
        _getOverriddenMethods(mxn, orig) {
          return {
            _bootstrap(document2, fragmentContext) {
              orig._bootstrap.call(this, document2, fragmentContext);
              Mixin.install(this.tokenizer, ErrorReportingTokenizerMixin, mxn.opts);
              Mixin.install(this.tokenizer, LocationInfoTokenizerMixin);
            },
            _processInputToken(token) {
              mxn.ctLoc = token.location;
              orig._processInputToken.call(this, token);
            },
            _err(code, options) {
              mxn.locBeforeToken = options && options.beforeToken;
              mxn._reportError(code);
            }
          };
        }
      };
      module.exports = ErrorReportingParserMixin;
    }
  });

  // node_modules/parse5/lib/tree-adapters/default.js
  var require_default = __commonJS({
    "node_modules/parse5/lib/tree-adapters/default.js"(exports) {
      "use strict";
      var { DOCUMENT_MODE } = require_html();
      exports.createDocument = function() {
        return {
          nodeName: "#document",
          mode: DOCUMENT_MODE.NO_QUIRKS,
          childNodes: []
        };
      };
      exports.createDocumentFragment = function() {
        return {
          nodeName: "#document-fragment",
          childNodes: []
        };
      };
      exports.createElement = function(tagName, namespaceURI, attrs) {
        return {
          nodeName: tagName,
          tagName,
          attrs,
          namespaceURI,
          childNodes: [],
          parentNode: null
        };
      };
      exports.createCommentNode = function(data) {
        return {
          nodeName: "#comment",
          data,
          parentNode: null
        };
      };
      var createTextNode = function(value) {
        return {
          nodeName: "#text",
          value,
          parentNode: null
        };
      };
      var appendChild = exports.appendChild = function(parentNode, newNode) {
        parentNode.childNodes.push(newNode);
        newNode.parentNode = parentNode;
      };
      var insertBefore = exports.insertBefore = function(parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
        parentNode.childNodes.splice(insertionIdx, 0, newNode);
        newNode.parentNode = parentNode;
      };
      exports.setTemplateContent = function(templateElement, contentElement) {
        templateElement.content = contentElement;
      };
      exports.getTemplateContent = function(templateElement) {
        return templateElement.content;
      };
      exports.setDocumentType = function(document2, name, publicId, systemId) {
        let doctypeNode = null;
        for (let i = 0; i < document2.childNodes.length; i++) {
          if (document2.childNodes[i].nodeName === "#documentType") {
            doctypeNode = document2.childNodes[i];
            break;
          }
        }
        if (doctypeNode) {
          doctypeNode.name = name;
          doctypeNode.publicId = publicId;
          doctypeNode.systemId = systemId;
        } else {
          appendChild(document2, {
            nodeName: "#documentType",
            name,
            publicId,
            systemId
          });
        }
      };
      exports.setDocumentMode = function(document2, mode) {
        document2.mode = mode;
      };
      exports.getDocumentMode = function(document2) {
        return document2.mode;
      };
      exports.detachNode = function(node) {
        if (node.parentNode) {
          const idx = node.parentNode.childNodes.indexOf(node);
          node.parentNode.childNodes.splice(idx, 1);
          node.parentNode = null;
        }
      };
      exports.insertText = function(parentNode, text) {
        if (parentNode.childNodes.length) {
          const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
          if (prevNode.nodeName === "#text") {
            prevNode.value += text;
            return;
          }
        }
        appendChild(parentNode, createTextNode(text));
      };
      exports.insertTextBefore = function(parentNode, text, referenceNode) {
        const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
        if (prevNode && prevNode.nodeName === "#text") {
          prevNode.value += text;
        } else {
          insertBefore(parentNode, createTextNode(text), referenceNode);
        }
      };
      exports.adoptAttributes = function(recipient, attrs) {
        const recipientAttrsMap = [];
        for (let i = 0; i < recipient.attrs.length; i++) {
          recipientAttrsMap.push(recipient.attrs[i].name);
        }
        for (let j = 0; j < attrs.length; j++) {
          if (recipientAttrsMap.indexOf(attrs[j].name) === -1) {
            recipient.attrs.push(attrs[j]);
          }
        }
      };
      exports.getFirstChild = function(node) {
        return node.childNodes[0];
      };
      exports.getChildNodes = function(node) {
        return node.childNodes;
      };
      exports.getParentNode = function(node) {
        return node.parentNode;
      };
      exports.getAttrList = function(element) {
        return element.attrs;
      };
      exports.getTagName = function(element) {
        return element.tagName;
      };
      exports.getNamespaceURI = function(element) {
        return element.namespaceURI;
      };
      exports.getTextNodeContent = function(textNode) {
        return textNode.value;
      };
      exports.getCommentNodeContent = function(commentNode) {
        return commentNode.data;
      };
      exports.getDocumentTypeNodeName = function(doctypeNode) {
        return doctypeNode.name;
      };
      exports.getDocumentTypeNodePublicId = function(doctypeNode) {
        return doctypeNode.publicId;
      };
      exports.getDocumentTypeNodeSystemId = function(doctypeNode) {
        return doctypeNode.systemId;
      };
      exports.isTextNode = function(node) {
        return node.nodeName === "#text";
      };
      exports.isCommentNode = function(node) {
        return node.nodeName === "#comment";
      };
      exports.isDocumentTypeNode = function(node) {
        return node.nodeName === "#documentType";
      };
      exports.isElementNode = function(node) {
        return !!node.tagName;
      };
      exports.setNodeSourceCodeLocation = function(node, location) {
        node.sourceCodeLocation = location;
      };
      exports.getNodeSourceCodeLocation = function(node) {
        return node.sourceCodeLocation;
      };
      exports.updateNodeSourceCodeLocation = function(node, endLocation) {
        node.sourceCodeLocation = Object.assign(node.sourceCodeLocation, endLocation);
      };
    }
  });

  // node_modules/parse5/lib/utils/merge-options.js
  var require_merge_options = __commonJS({
    "node_modules/parse5/lib/utils/merge-options.js"(exports, module) {
      "use strict";
      module.exports = function mergeOptions(defaults, options) {
        options = options || /* @__PURE__ */ Object.create(null);
        return [defaults, options].reduce((merged, optObj) => {
          Object.keys(optObj).forEach((key) => {
            merged[key] = optObj[key];
          });
          return merged;
        }, /* @__PURE__ */ Object.create(null));
      };
    }
  });

  // node_modules/parse5/lib/common/doctype.js
  var require_doctype = __commonJS({
    "node_modules/parse5/lib/common/doctype.js"(exports) {
      "use strict";
      var { DOCUMENT_MODE } = require_html();
      var VALID_DOCTYPE_NAME = "html";
      var VALID_SYSTEM_ID = "about:legacy-compat";
      var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
      var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
        "+//silmaril//dtd html pro v0r11 19970101//",
        "-//as//dtd html 3.0 aswedit + extensions//",
        "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
        "-//ietf//dtd html 2.0 level 1//",
        "-//ietf//dtd html 2.0 level 2//",
        "-//ietf//dtd html 2.0 strict level 1//",
        "-//ietf//dtd html 2.0 strict level 2//",
        "-//ietf//dtd html 2.0 strict//",
        "-//ietf//dtd html 2.0//",
        "-//ietf//dtd html 2.1e//",
        "-//ietf//dtd html 3.0//",
        "-//ietf//dtd html 3.2 final//",
        "-//ietf//dtd html 3.2//",
        "-//ietf//dtd html 3//",
        "-//ietf//dtd html level 0//",
        "-//ietf//dtd html level 1//",
        "-//ietf//dtd html level 2//",
        "-//ietf//dtd html level 3//",
        "-//ietf//dtd html strict level 0//",
        "-//ietf//dtd html strict level 1//",
        "-//ietf//dtd html strict level 2//",
        "-//ietf//dtd html strict level 3//",
        "-//ietf//dtd html strict//",
        "-//ietf//dtd html//",
        "-//metrius//dtd metrius presentational//",
        "-//microsoft//dtd internet explorer 2.0 html strict//",
        "-//microsoft//dtd internet explorer 2.0 html//",
        "-//microsoft//dtd internet explorer 2.0 tables//",
        "-//microsoft//dtd internet explorer 3.0 html strict//",
        "-//microsoft//dtd internet explorer 3.0 html//",
        "-//microsoft//dtd internet explorer 3.0 tables//",
        "-//netscape comm. corp.//dtd html//",
        "-//netscape comm. corp.//dtd strict html//",
        "-//o'reilly and associates//dtd html 2.0//",
        "-//o'reilly and associates//dtd html extended 1.0//",
        "-//o'reilly and associates//dtd html extended relaxed 1.0//",
        "-//sq//dtd html 2.0 hotmetal + extensions//",
        "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
        "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
        "-//spyglass//dtd html 2.0 extended//",
        "-//sun microsystems corp.//dtd hotjava html//",
        "-//sun microsystems corp.//dtd hotjava strict html//",
        "-//w3c//dtd html 3 1995-03-24//",
        "-//w3c//dtd html 3.2 draft//",
        "-//w3c//dtd html 3.2 final//",
        "-//w3c//dtd html 3.2//",
        "-//w3c//dtd html 3.2s draft//",
        "-//w3c//dtd html 4.0 frameset//",
        "-//w3c//dtd html 4.0 transitional//",
        "-//w3c//dtd html experimental 19960712//",
        "-//w3c//dtd html experimental 970421//",
        "-//w3c//dtd w3 html//",
        "-//w3o//dtd w3 html 3.0//",
        "-//webtechs//dtd mozilla html 2.0//",
        "-//webtechs//dtd mozilla html//"
      ];
      var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat([
        "-//w3c//dtd html 4.01 frameset//",
        "-//w3c//dtd html 4.01 transitional//"
      ]);
      var QUIRKS_MODE_PUBLIC_IDS = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"];
      var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
      var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat([
        "-//w3c//dtd html 4.01 frameset//",
        "-//w3c//dtd html 4.01 transitional//"
      ]);
      function enquoteDoctypeId(id) {
        const quote = id.indexOf('"') !== -1 ? "'" : '"';
        return quote + id + quote;
      }
      function hasPrefix(publicId, prefixes) {
        for (let i = 0; i < prefixes.length; i++) {
          if (publicId.indexOf(prefixes[i]) === 0) {
            return true;
          }
        }
        return false;
      }
      exports.isConforming = function(token) {
        return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
      };
      exports.getDocumentMode = function(token) {
        if (token.name !== VALID_DOCTYPE_NAME) {
          return DOCUMENT_MODE.QUIRKS;
        }
        const systemId = token.systemId;
        if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
          return DOCUMENT_MODE.QUIRKS;
        }
        let publicId = token.publicId;
        if (publicId !== null) {
          publicId = publicId.toLowerCase();
          if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1) {
            return DOCUMENT_MODE.QUIRKS;
          }
          let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
          if (hasPrefix(publicId, prefixes)) {
            return DOCUMENT_MODE.QUIRKS;
          }
          prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
          if (hasPrefix(publicId, prefixes)) {
            return DOCUMENT_MODE.LIMITED_QUIRKS;
          }
        }
        return DOCUMENT_MODE.NO_QUIRKS;
      };
      exports.serializeContent = function(name, publicId, systemId) {
        let str = "!DOCTYPE ";
        if (name) {
          str += name;
        }
        if (publicId) {
          str += " PUBLIC " + enquoteDoctypeId(publicId);
        } else if (systemId) {
          str += " SYSTEM";
        }
        if (systemId !== null) {
          str += " " + enquoteDoctypeId(systemId);
        }
        return str;
      };
    }
  });

  // node_modules/parse5/lib/common/foreign-content.js
  var require_foreign_content = __commonJS({
    "node_modules/parse5/lib/common/foreign-content.js"(exports) {
      "use strict";
      var Tokenizer = require_tokenizer();
      var HTML = require_html();
      var $ = HTML.TAG_NAMES;
      var NS = HTML.NAMESPACES;
      var ATTRS = HTML.ATTRS;
      var MIME_TYPES = {
        TEXT_HTML: "text/html",
        APPLICATION_XML: "application/xhtml+xml"
      };
      var DEFINITION_URL_ATTR = "definitionurl";
      var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
      var SVG_ATTRS_ADJUSTMENT_MAP = {
        attributename: "attributeName",
        attributetype: "attributeType",
        basefrequency: "baseFrequency",
        baseprofile: "baseProfile",
        calcmode: "calcMode",
        clippathunits: "clipPathUnits",
        diffuseconstant: "diffuseConstant",
        edgemode: "edgeMode",
        filterunits: "filterUnits",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        limitingconeangle: "limitingConeAngle",
        markerheight: "markerHeight",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        numoctaves: "numOctaves",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        refx: "refX",
        refy: "refY",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stitchtiles: "stitchTiles",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textlength: "textLength",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        xchannelselector: "xChannelSelector",
        ychannelselector: "yChannelSelector",
        zoomandpan: "zoomAndPan"
      };
      var XML_ATTRS_ADJUSTMENT_MAP = {
        "xlink:actuate": { prefix: "xlink", name: "actuate", namespace: NS.XLINK },
        "xlink:arcrole": { prefix: "xlink", name: "arcrole", namespace: NS.XLINK },
        "xlink:href": { prefix: "xlink", name: "href", namespace: NS.XLINK },
        "xlink:role": { prefix: "xlink", name: "role", namespace: NS.XLINK },
        "xlink:show": { prefix: "xlink", name: "show", namespace: NS.XLINK },
        "xlink:title": { prefix: "xlink", name: "title", namespace: NS.XLINK },
        "xlink:type": { prefix: "xlink", name: "type", namespace: NS.XLINK },
        "xml:base": { prefix: "xml", name: "base", namespace: NS.XML },
        "xml:lang": { prefix: "xml", name: "lang", namespace: NS.XML },
        "xml:space": { prefix: "xml", name: "space", namespace: NS.XML },
        xmlns: { prefix: "", name: "xmlns", namespace: NS.XMLNS },
        "xmlns:xlink": { prefix: "xmlns", name: "xlink", namespace: NS.XMLNS }
      };
      var SVG_TAG_NAMES_ADJUSTMENT_MAP = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
        altglyph: "altGlyph",
        altglyphdef: "altGlyphDef",
        altglyphitem: "altGlyphItem",
        animatecolor: "animateColor",
        animatemotion: "animateMotion",
        animatetransform: "animateTransform",
        clippath: "clipPath",
        feblend: "feBlend",
        fecolormatrix: "feColorMatrix",
        fecomponenttransfer: "feComponentTransfer",
        fecomposite: "feComposite",
        feconvolvematrix: "feConvolveMatrix",
        fediffuselighting: "feDiffuseLighting",
        fedisplacementmap: "feDisplacementMap",
        fedistantlight: "feDistantLight",
        feflood: "feFlood",
        fefunca: "feFuncA",
        fefuncb: "feFuncB",
        fefuncg: "feFuncG",
        fefuncr: "feFuncR",
        fegaussianblur: "feGaussianBlur",
        feimage: "feImage",
        femerge: "feMerge",
        femergenode: "feMergeNode",
        femorphology: "feMorphology",
        feoffset: "feOffset",
        fepointlight: "fePointLight",
        fespecularlighting: "feSpecularLighting",
        fespotlight: "feSpotLight",
        fetile: "feTile",
        feturbulence: "feTurbulence",
        foreignobject: "foreignObject",
        glyphref: "glyphRef",
        lineargradient: "linearGradient",
        radialgradient: "radialGradient",
        textpath: "textPath"
      };
      var EXITS_FOREIGN_CONTENT = {
        [$.B]: true,
        [$.BIG]: true,
        [$.BLOCKQUOTE]: true,
        [$.BODY]: true,
        [$.BR]: true,
        [$.CENTER]: true,
        [$.CODE]: true,
        [$.DD]: true,
        [$.DIV]: true,
        [$.DL]: true,
        [$.DT]: true,
        [$.EM]: true,
        [$.EMBED]: true,
        [$.H1]: true,
        [$.H2]: true,
        [$.H3]: true,
        [$.H4]: true,
        [$.H5]: true,
        [$.H6]: true,
        [$.HEAD]: true,
        [$.HR]: true,
        [$.I]: true,
        [$.IMG]: true,
        [$.LI]: true,
        [$.LISTING]: true,
        [$.MENU]: true,
        [$.META]: true,
        [$.NOBR]: true,
        [$.OL]: true,
        [$.P]: true,
        [$.PRE]: true,
        [$.RUBY]: true,
        [$.S]: true,
        [$.SMALL]: true,
        [$.SPAN]: true,
        [$.STRONG]: true,
        [$.STRIKE]: true,
        [$.SUB]: true,
        [$.SUP]: true,
        [$.TABLE]: true,
        [$.TT]: true,
        [$.U]: true,
        [$.UL]: true,
        [$.VAR]: true
      };
      exports.causesExit = function(startTagToken) {
        const tn = startTagToken.tagName;
        const isFontWithAttrs = tn === $.FONT && (Tokenizer.getTokenAttr(startTagToken, ATTRS.COLOR) !== null || Tokenizer.getTokenAttr(startTagToken, ATTRS.SIZE) !== null || Tokenizer.getTokenAttr(startTagToken, ATTRS.FACE) !== null);
        return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
      };
      exports.adjustTokenMathMLAttrs = function(token) {
        for (let i = 0; i < token.attrs.length; i++) {
          if (token.attrs[i].name === DEFINITION_URL_ATTR) {
            token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
            break;
          }
        }
      };
      exports.adjustTokenSVGAttrs = function(token) {
        for (let i = 0; i < token.attrs.length; i++) {
          const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];
          if (adjustedAttrName) {
            token.attrs[i].name = adjustedAttrName;
          }
        }
      };
      exports.adjustTokenXMLAttrs = function(token) {
        for (let i = 0; i < token.attrs.length; i++) {
          const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];
          if (adjustedAttrEntry) {
            token.attrs[i].prefix = adjustedAttrEntry.prefix;
            token.attrs[i].name = adjustedAttrEntry.name;
            token.attrs[i].namespace = adjustedAttrEntry.namespace;
          }
        }
      };
      exports.adjustTokenSVGTagName = function(token) {
        const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];
        if (adjustedTagName) {
          token.tagName = adjustedTagName;
        }
      };
      function isMathMLTextIntegrationPoint(tn, ns) {
        return ns === NS.MATHML && (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS || tn === $.MTEXT);
      }
      function isHtmlIntegrationPoint(tn, ns, attrs) {
        if (ns === NS.MATHML && tn === $.ANNOTATION_XML) {
          for (let i = 0; i < attrs.length; i++) {
            if (attrs[i].name === ATTRS.ENCODING) {
              const value = attrs[i].value.toLowerCase();
              return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
            }
          }
        }
        return ns === NS.SVG && (tn === $.FOREIGN_OBJECT || tn === $.DESC || tn === $.TITLE);
      }
      exports.isIntegrationPoint = function(tn, ns, attrs, foreignNS) {
        if ((!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) {
          return true;
        }
        if ((!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns)) {
          return true;
        }
        return false;
      };
    }
  });

  // node_modules/parse5/lib/parser/index.js
  var require_parser = __commonJS({
    "node_modules/parse5/lib/parser/index.js"(exports, module) {
      "use strict";
      var Tokenizer = require_tokenizer();
      var OpenElementStack = require_open_element_stack();
      var FormattingElementList = require_formatting_element_list();
      var LocationInfoParserMixin = require_parser_mixin();
      var ErrorReportingParserMixin = require_parser_mixin2();
      var Mixin = require_mixin();
      var defaultTreeAdapter = require_default();
      var mergeOptions = require_merge_options();
      var doctype = require_doctype();
      var foreignContent = require_foreign_content();
      var ERR = require_error_codes();
      var unicode = require_unicode();
      var HTML = require_html();
      var $ = HTML.TAG_NAMES;
      var NS = HTML.NAMESPACES;
      var ATTRS = HTML.ATTRS;
      var DEFAULT_OPTIONS = {
        scriptingEnabled: true,
        sourceCodeLocationInfo: false,
        onParseError: null,
        treeAdapter: defaultTreeAdapter
      };
      var HIDDEN_INPUT_TYPE = "hidden";
      var AA_OUTER_LOOP_ITER = 8;
      var AA_INNER_LOOP_ITER = 3;
      var INITIAL_MODE = "INITIAL_MODE";
      var BEFORE_HTML_MODE = "BEFORE_HTML_MODE";
      var BEFORE_HEAD_MODE = "BEFORE_HEAD_MODE";
      var IN_HEAD_MODE = "IN_HEAD_MODE";
      var IN_HEAD_NO_SCRIPT_MODE = "IN_HEAD_NO_SCRIPT_MODE";
      var AFTER_HEAD_MODE = "AFTER_HEAD_MODE";
      var IN_BODY_MODE = "IN_BODY_MODE";
      var TEXT_MODE = "TEXT_MODE";
      var IN_TABLE_MODE = "IN_TABLE_MODE";
      var IN_TABLE_TEXT_MODE = "IN_TABLE_TEXT_MODE";
      var IN_CAPTION_MODE = "IN_CAPTION_MODE";
      var IN_COLUMN_GROUP_MODE = "IN_COLUMN_GROUP_MODE";
      var IN_TABLE_BODY_MODE = "IN_TABLE_BODY_MODE";
      var IN_ROW_MODE = "IN_ROW_MODE";
      var IN_CELL_MODE = "IN_CELL_MODE";
      var IN_SELECT_MODE = "IN_SELECT_MODE";
      var IN_SELECT_IN_TABLE_MODE = "IN_SELECT_IN_TABLE_MODE";
      var IN_TEMPLATE_MODE = "IN_TEMPLATE_MODE";
      var AFTER_BODY_MODE = "AFTER_BODY_MODE";
      var IN_FRAMESET_MODE = "IN_FRAMESET_MODE";
      var AFTER_FRAMESET_MODE = "AFTER_FRAMESET_MODE";
      var AFTER_AFTER_BODY_MODE = "AFTER_AFTER_BODY_MODE";
      var AFTER_AFTER_FRAMESET_MODE = "AFTER_AFTER_FRAMESET_MODE";
      var INSERTION_MODE_RESET_MAP = {
        [$.TR]: IN_ROW_MODE,
        [$.TBODY]: IN_TABLE_BODY_MODE,
        [$.THEAD]: IN_TABLE_BODY_MODE,
        [$.TFOOT]: IN_TABLE_BODY_MODE,
        [$.CAPTION]: IN_CAPTION_MODE,
        [$.COLGROUP]: IN_COLUMN_GROUP_MODE,
        [$.TABLE]: IN_TABLE_MODE,
        [$.BODY]: IN_BODY_MODE,
        [$.FRAMESET]: IN_FRAMESET_MODE
      };
      var TEMPLATE_INSERTION_MODE_SWITCH_MAP = {
        [$.CAPTION]: IN_TABLE_MODE,
        [$.COLGROUP]: IN_TABLE_MODE,
        [$.TBODY]: IN_TABLE_MODE,
        [$.TFOOT]: IN_TABLE_MODE,
        [$.THEAD]: IN_TABLE_MODE,
        [$.COL]: IN_COLUMN_GROUP_MODE,
        [$.TR]: IN_TABLE_BODY_MODE,
        [$.TD]: IN_ROW_MODE,
        [$.TH]: IN_ROW_MODE
      };
      var TOKEN_HANDLERS = {
        [INITIAL_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenInInitialMode,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInInitialMode,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: doctypeInInitialMode,
          [Tokenizer.START_TAG_TOKEN]: tokenInInitialMode,
          [Tokenizer.END_TAG_TOKEN]: tokenInInitialMode,
          [Tokenizer.EOF_TOKEN]: tokenInInitialMode
        },
        [BEFORE_HTML_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHtml,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHtml,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagBeforeHtml,
          [Tokenizer.END_TAG_TOKEN]: endTagBeforeHtml,
          [Tokenizer.EOF_TOKEN]: tokenBeforeHtml
        },
        [BEFORE_HEAD_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenBeforeHead,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenBeforeHead,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
          [Tokenizer.START_TAG_TOKEN]: startTagBeforeHead,
          [Tokenizer.END_TAG_TOKEN]: endTagBeforeHead,
          [Tokenizer.EOF_TOKEN]: tokenBeforeHead
        },
        [IN_HEAD_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenInHead,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHead,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
          [Tokenizer.START_TAG_TOKEN]: startTagInHead,
          [Tokenizer.END_TAG_TOKEN]: endTagInHead,
          [Tokenizer.EOF_TOKEN]: tokenInHead
        },
        [IN_HEAD_NO_SCRIPT_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenInHeadNoScript,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInHeadNoScript,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
          [Tokenizer.START_TAG_TOKEN]: startTagInHeadNoScript,
          [Tokenizer.END_TAG_TOKEN]: endTagInHeadNoScript,
          [Tokenizer.EOF_TOKEN]: tokenInHeadNoScript
        },
        [AFTER_HEAD_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenAfterHead,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterHead,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: misplacedDoctype,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterHead,
          [Tokenizer.END_TAG_TOKEN]: endTagAfterHead,
          [Tokenizer.EOF_TOKEN]: tokenAfterHead
        },
        [IN_BODY_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInBody,
          [Tokenizer.END_TAG_TOKEN]: endTagInBody,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [TEXT_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.NULL_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: ignoreToken,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: ignoreToken,
          [Tokenizer.END_TAG_TOKEN]: endTagInText,
          [Tokenizer.EOF_TOKEN]: eofInText
        },
        [IN_TABLE_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInTable,
          [Tokenizer.END_TAG_TOKEN]: endTagInTable,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_TABLE_TEXT_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInTableText,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInTableText,
          [Tokenizer.COMMENT_TOKEN]: tokenInTableText,
          [Tokenizer.DOCTYPE_TOKEN]: tokenInTableText,
          [Tokenizer.START_TAG_TOKEN]: tokenInTableText,
          [Tokenizer.END_TAG_TOKEN]: tokenInTableText,
          [Tokenizer.EOF_TOKEN]: tokenInTableText
        },
        [IN_CAPTION_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInCaption,
          [Tokenizer.END_TAG_TOKEN]: endTagInCaption,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_COLUMN_GROUP_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenInColumnGroup,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenInColumnGroup,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInColumnGroup,
          [Tokenizer.END_TAG_TOKEN]: endTagInColumnGroup,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_TABLE_BODY_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInTableBody,
          [Tokenizer.END_TAG_TOKEN]: endTagInTableBody,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_ROW_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.NULL_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: characterInTable,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInRow,
          [Tokenizer.END_TAG_TOKEN]: endTagInRow,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_CELL_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInCell,
          [Tokenizer.END_TAG_TOKEN]: endTagInCell,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_SELECT_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInSelect,
          [Tokenizer.END_TAG_TOKEN]: endTagInSelect,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_SELECT_IN_TABLE_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInSelectInTable,
          [Tokenizer.END_TAG_TOKEN]: endTagInSelectInTable,
          [Tokenizer.EOF_TOKEN]: eofInBody
        },
        [IN_TEMPLATE_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: characterInBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInTemplate,
          [Tokenizer.END_TAG_TOKEN]: endTagInTemplate,
          [Tokenizer.EOF_TOKEN]: eofInTemplate
        },
        [AFTER_BODY_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenAfterBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterBody,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendCommentToRootHtmlElement,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterBody,
          [Tokenizer.END_TAG_TOKEN]: endTagAfterBody,
          [Tokenizer.EOF_TOKEN]: stopParsing
        },
        [IN_FRAMESET_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagInFrameset,
          [Tokenizer.END_TAG_TOKEN]: endTagInFrameset,
          [Tokenizer.EOF_TOKEN]: stopParsing
        },
        [AFTER_FRAMESET_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: insertCharacters,
          [Tokenizer.COMMENT_TOKEN]: appendComment,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterFrameset,
          [Tokenizer.END_TAG_TOKEN]: endTagAfterFrameset,
          [Tokenizer.EOF_TOKEN]: stopParsing
        },
        [AFTER_AFTER_BODY_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: tokenAfterAfterBody,
          [Tokenizer.NULL_CHARACTER_TOKEN]: tokenAfterAfterBody,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterBody,
          [Tokenizer.END_TAG_TOKEN]: tokenAfterAfterBody,
          [Tokenizer.EOF_TOKEN]: stopParsing
        },
        [AFTER_AFTER_FRAMESET_MODE]: {
          [Tokenizer.CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.NULL_CHARACTER_TOKEN]: ignoreToken,
          [Tokenizer.WHITESPACE_CHARACTER_TOKEN]: whitespaceCharacterInBody,
          [Tokenizer.COMMENT_TOKEN]: appendCommentToDocument,
          [Tokenizer.DOCTYPE_TOKEN]: ignoreToken,
          [Tokenizer.START_TAG_TOKEN]: startTagAfterAfterFrameset,
          [Tokenizer.END_TAG_TOKEN]: ignoreToken,
          [Tokenizer.EOF_TOKEN]: stopParsing
        }
      };
      var Parser = class {
        constructor(options) {
          this.options = mergeOptions(DEFAULT_OPTIONS, options);
          this.treeAdapter = this.options.treeAdapter;
          this.pendingScript = null;
          if (this.options.sourceCodeLocationInfo) {
            Mixin.install(this, LocationInfoParserMixin);
          }
          if (this.options.onParseError) {
            Mixin.install(this, ErrorReportingParserMixin, { onParseError: this.options.onParseError });
          }
        }
        parse(html) {
          const document2 = this.treeAdapter.createDocument();
          this._bootstrap(document2, null);
          this.tokenizer.write(html, true);
          this._runParsingLoop(null);
          return document2;
        }
        parseFragment(html, fragmentContext) {
          if (!fragmentContext) {
            fragmentContext = this.treeAdapter.createElement($.TEMPLATE, NS.HTML, []);
          }
          const documentMock = this.treeAdapter.createElement("documentmock", NS.HTML, []);
          this._bootstrap(documentMock, fragmentContext);
          if (this.treeAdapter.getTagName(fragmentContext) === $.TEMPLATE) {
            this._pushTmplInsertionMode(IN_TEMPLATE_MODE);
          }
          this._initTokenizerForFragmentParsing();
          this._insertFakeRootElement();
          this._resetInsertionMode();
          this._findFormInFragmentContext();
          this.tokenizer.write(html, true);
          this._runParsingLoop(null);
          const rootElement = this.treeAdapter.getFirstChild(documentMock);
          const fragment = this.treeAdapter.createDocumentFragment();
          this._adoptNodes(rootElement, fragment);
          return fragment;
        }
        _bootstrap(document2, fragmentContext) {
          this.tokenizer = new Tokenizer(this.options);
          this.stopped = false;
          this.insertionMode = INITIAL_MODE;
          this.originalInsertionMode = "";
          this.document = document2;
          this.fragmentContext = fragmentContext;
          this.headElement = null;
          this.formElement = null;
          this.openElements = new OpenElementStack(this.document, this.treeAdapter);
          this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
          this.tmplInsertionModeStack = [];
          this.tmplInsertionModeStackTop = -1;
          this.currentTmplInsertionMode = null;
          this.pendingCharacterTokens = [];
          this.hasNonWhitespacePendingCharacterToken = false;
          this.framesetOk = true;
          this.skipNextNewLine = false;
          this.fosterParentingEnabled = false;
        }
        _err() {
        }
        _runParsingLoop(scriptHandler) {
          while (!this.stopped) {
            this._setupTokenizerCDATAMode();
            const token = this.tokenizer.getNextToken();
            if (token.type === Tokenizer.HIBERNATION_TOKEN) {
              break;
            }
            if (this.skipNextNewLine) {
              this.skipNextNewLine = false;
              if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === "\n") {
                if (token.chars.length === 1) {
                  continue;
                }
                token.chars = token.chars.substr(1);
              }
            }
            this._processInputToken(token);
            if (scriptHandler && this.pendingScript) {
              break;
            }
          }
        }
        runParsingLoopForCurrentChunk(writeCallback, scriptHandler) {
          this._runParsingLoop(scriptHandler);
          if (scriptHandler && this.pendingScript) {
            const script = this.pendingScript;
            this.pendingScript = null;
            scriptHandler(script);
            return;
          }
          if (writeCallback) {
            writeCallback();
          }
        }
        _setupTokenizerCDATAMode() {
          const current = this._getAdjustedCurrentElement();
          this.tokenizer.allowCDATA = current && current !== this.document && this.treeAdapter.getNamespaceURI(current) !== NS.HTML && !this._isIntegrationPoint(current);
        }
        _switchToTextParsing(currentToken, nextTokenizerState) {
          this._insertElement(currentToken, NS.HTML);
          this.tokenizer.state = nextTokenizerState;
          this.originalInsertionMode = this.insertionMode;
          this.insertionMode = TEXT_MODE;
        }
        switchToPlaintextParsing() {
          this.insertionMode = TEXT_MODE;
          this.originalInsertionMode = IN_BODY_MODE;
          this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
        }
        _getAdjustedCurrentElement() {
          return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
        }
        _findFormInFragmentContext() {
          let node = this.fragmentContext;
          do {
            if (this.treeAdapter.getTagName(node) === $.FORM) {
              this.formElement = node;
              break;
            }
            node = this.treeAdapter.getParentNode(node);
          } while (node);
        }
        _initTokenizerForFragmentParsing() {
          if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS.HTML) {
            const tn = this.treeAdapter.getTagName(this.fragmentContext);
            if (tn === $.TITLE || tn === $.TEXTAREA) {
              this.tokenizer.state = Tokenizer.MODE.RCDATA;
            } else if (tn === $.STYLE || tn === $.XMP || tn === $.IFRAME || tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT) {
              this.tokenizer.state = Tokenizer.MODE.RAWTEXT;
            } else if (tn === $.SCRIPT) {
              this.tokenizer.state = Tokenizer.MODE.SCRIPT_DATA;
            } else if (tn === $.PLAINTEXT) {
              this.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
            }
          }
        }
        _setDocumentType(token) {
          const name = token.name || "";
          const publicId = token.publicId || "";
          const systemId = token.systemId || "";
          this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
        }
        _attachElementToTree(element) {
          if (this._shouldFosterParentOnInsertion()) {
            this._fosterParentElement(element);
          } else {
            const parent = this.openElements.currentTmplContent || this.openElements.current;
            this.treeAdapter.appendChild(parent, element);
          }
        }
        _appendElement(token, namespaceURI) {
          const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
          this._attachElementToTree(element);
        }
        _insertElement(token, namespaceURI) {
          const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
          this._attachElementToTree(element);
          this.openElements.push(element);
        }
        _insertFakeElement(tagName) {
          const element = this.treeAdapter.createElement(tagName, NS.HTML, []);
          this._attachElementToTree(element);
          this.openElements.push(element);
        }
        _insertTemplate(token) {
          const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
          const content = this.treeAdapter.createDocumentFragment();
          this.treeAdapter.setTemplateContent(tmpl, content);
          this._attachElementToTree(tmpl);
          this.openElements.push(tmpl);
        }
        _insertFakeRootElement() {
          const element = this.treeAdapter.createElement($.HTML, NS.HTML, []);
          this.treeAdapter.appendChild(this.openElements.current, element);
          this.openElements.push(element);
        }
        _appendCommentNode(token, parent) {
          const commentNode = this.treeAdapter.createCommentNode(token.data);
          this.treeAdapter.appendChild(parent, commentNode);
        }
        _insertCharacters(token) {
          if (this._shouldFosterParentOnInsertion()) {
            this._fosterParentText(token.chars);
          } else {
            const parent = this.openElements.currentTmplContent || this.openElements.current;
            this.treeAdapter.insertText(parent, token.chars);
          }
        }
        _adoptNodes(donor, recipient) {
          for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
            this.treeAdapter.detachNode(child);
            this.treeAdapter.appendChild(recipient, child);
          }
        }
        _shouldProcessTokenInForeignContent(token) {
          const current = this._getAdjustedCurrentElement();
          if (!current || current === this.document) {
            return false;
          }
          const ns = this.treeAdapter.getNamespaceURI(current);
          if (ns === NS.HTML) {
            return false;
          }
          if (this.treeAdapter.getTagName(current) === $.ANNOTATION_XML && ns === NS.MATHML && token.type === Tokenizer.START_TAG_TOKEN && token.tagName === $.SVG) {
            return false;
          }
          const isCharacterToken = token.type === Tokenizer.CHARACTER_TOKEN || token.type === Tokenizer.NULL_CHARACTER_TOKEN || token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN;
          const isMathMLTextStartTag = token.type === Tokenizer.START_TAG_TOKEN && token.tagName !== $.MGLYPH && token.tagName !== $.MALIGNMARK;
          if ((isMathMLTextStartTag || isCharacterToken) && this._isIntegrationPoint(current, NS.MATHML)) {
            return false;
          }
          if ((token.type === Tokenizer.START_TAG_TOKEN || isCharacterToken) && this._isIntegrationPoint(current, NS.HTML)) {
            return false;
          }
          return token.type !== Tokenizer.EOF_TOKEN;
        }
        _processToken(token) {
          TOKEN_HANDLERS[this.insertionMode][token.type](this, token);
        }
        _processTokenInBodyMode(token) {
          TOKEN_HANDLERS[IN_BODY_MODE][token.type](this, token);
        }
        _processTokenInForeignContent(token) {
          if (token.type === Tokenizer.CHARACTER_TOKEN) {
            characterInForeignContent(this, token);
          } else if (token.type === Tokenizer.NULL_CHARACTER_TOKEN) {
            nullCharacterInForeignContent(this, token);
          } else if (token.type === Tokenizer.WHITESPACE_CHARACTER_TOKEN) {
            insertCharacters(this, token);
          } else if (token.type === Tokenizer.COMMENT_TOKEN) {
            appendComment(this, token);
          } else if (token.type === Tokenizer.START_TAG_TOKEN) {
            startTagInForeignContent(this, token);
          } else if (token.type === Tokenizer.END_TAG_TOKEN) {
            endTagInForeignContent(this, token);
          }
        }
        _processInputToken(token) {
          if (this._shouldProcessTokenInForeignContent(token)) {
            this._processTokenInForeignContent(token);
          } else {
            this._processToken(token);
          }
          if (token.type === Tokenizer.START_TAG_TOKEN && token.selfClosing && !token.ackSelfClosing) {
            this._err(ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
          }
        }
        _isIntegrationPoint(element, foreignNS) {
          const tn = this.treeAdapter.getTagName(element);
          const ns = this.treeAdapter.getNamespaceURI(element);
          const attrs = this.treeAdapter.getAttrList(element);
          return foreignContent.isIntegrationPoint(tn, ns, attrs, foreignNS);
        }
        _reconstructActiveFormattingElements() {
          const listLength = this.activeFormattingElements.length;
          if (listLength) {
            let unopenIdx = listLength;
            let entry = null;
            do {
              unopenIdx--;
              entry = this.activeFormattingElements.entries[unopenIdx];
              if (entry.type === FormattingElementList.MARKER_ENTRY || this.openElements.contains(entry.element)) {
                unopenIdx++;
                break;
              }
            } while (unopenIdx > 0);
            for (let i = unopenIdx; i < listLength; i++) {
              entry = this.activeFormattingElements.entries[i];
              this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
              entry.element = this.openElements.current;
            }
          }
        }
        _closeTableCell() {
          this.openElements.generateImpliedEndTags();
          this.openElements.popUntilTableCellPopped();
          this.activeFormattingElements.clearToLastMarker();
          this.insertionMode = IN_ROW_MODE;
        }
        _closePElement() {
          this.openElements.generateImpliedEndTagsWithExclusion($.P);
          this.openElements.popUntilTagNamePopped($.P);
        }
        _resetInsertionMode() {
          for (let i = this.openElements.stackTop, last = false; i >= 0; i--) {
            let element = this.openElements.items[i];
            if (i === 0) {
              last = true;
              if (this.fragmentContext) {
                element = this.fragmentContext;
              }
            }
            const tn = this.treeAdapter.getTagName(element);
            const newInsertionMode = INSERTION_MODE_RESET_MAP[tn];
            if (newInsertionMode) {
              this.insertionMode = newInsertionMode;
              break;
            } else if (!last && (tn === $.TD || tn === $.TH)) {
              this.insertionMode = IN_CELL_MODE;
              break;
            } else if (!last && tn === $.HEAD) {
              this.insertionMode = IN_HEAD_MODE;
              break;
            } else if (tn === $.SELECT) {
              this._resetInsertionModeForSelect(i);
              break;
            } else if (tn === $.TEMPLATE) {
              this.insertionMode = this.currentTmplInsertionMode;
              break;
            } else if (tn === $.HTML) {
              this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
              break;
            } else if (last) {
              this.insertionMode = IN_BODY_MODE;
              break;
            }
          }
        }
        _resetInsertionModeForSelect(selectIdx) {
          if (selectIdx > 0) {
            for (let i = selectIdx - 1; i > 0; i--) {
              const ancestor = this.openElements.items[i];
              const tn = this.treeAdapter.getTagName(ancestor);
              if (tn === $.TEMPLATE) {
                break;
              } else if (tn === $.TABLE) {
                this.insertionMode = IN_SELECT_IN_TABLE_MODE;
                return;
              }
            }
          }
          this.insertionMode = IN_SELECT_MODE;
        }
        _pushTmplInsertionMode(mode) {
          this.tmplInsertionModeStack.push(mode);
          this.tmplInsertionModeStackTop++;
          this.currentTmplInsertionMode = mode;
        }
        _popTmplInsertionMode() {
          this.tmplInsertionModeStack.pop();
          this.tmplInsertionModeStackTop--;
          this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
        }
        _isElementCausesFosterParenting(element) {
          const tn = this.treeAdapter.getTagName(element);
          return tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR;
        }
        _shouldFosterParentOnInsertion() {
          return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
        }
        _findFosterParentingLocation() {
          const location = {
            parent: null,
            beforeElement: null
          };
          for (let i = this.openElements.stackTop; i >= 0; i--) {
            const openElement = this.openElements.items[i];
            const tn = this.treeAdapter.getTagName(openElement);
            const ns = this.treeAdapter.getNamespaceURI(openElement);
            if (tn === $.TEMPLATE && ns === NS.HTML) {
              location.parent = this.treeAdapter.getTemplateContent(openElement);
              break;
            } else if (tn === $.TABLE) {
              location.parent = this.treeAdapter.getParentNode(openElement);
              if (location.parent) {
                location.beforeElement = openElement;
              } else {
                location.parent = this.openElements.items[i - 1];
              }
              break;
            }
          }
          if (!location.parent) {
            location.parent = this.openElements.items[0];
          }
          return location;
        }
        _fosterParentElement(element) {
          const location = this._findFosterParentingLocation();
          if (location.beforeElement) {
            this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
          } else {
            this.treeAdapter.appendChild(location.parent, element);
          }
        }
        _fosterParentText(chars) {
          const location = this._findFosterParentingLocation();
          if (location.beforeElement) {
            this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);
          } else {
            this.treeAdapter.insertText(location.parent, chars);
          }
        }
        _isSpecialElement(element) {
          const tn = this.treeAdapter.getTagName(element);
          const ns = this.treeAdapter.getNamespaceURI(element);
          return HTML.SPECIAL_ELEMENTS[ns][tn];
        }
      };
      module.exports = Parser;
      function aaObtainFormattingElementEntry(p, token) {
        let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
        if (formattingElementEntry) {
          if (!p.openElements.contains(formattingElementEntry.element)) {
            p.activeFormattingElements.removeEntry(formattingElementEntry);
            formattingElementEntry = null;
          } else if (!p.openElements.hasInScope(token.tagName)) {
            formattingElementEntry = null;
          }
        } else {
          genericEndTagInBody(p, token);
        }
        return formattingElementEntry;
      }
      function aaObtainFurthestBlock(p, formattingElementEntry) {
        let furthestBlock = null;
        for (let i = p.openElements.stackTop; i >= 0; i--) {
          const element = p.openElements.items[i];
          if (element === formattingElementEntry.element) {
            break;
          }
          if (p._isSpecialElement(element)) {
            furthestBlock = element;
          }
        }
        if (!furthestBlock) {
          p.openElements.popUntilElementPopped(formattingElementEntry.element);
          p.activeFormattingElements.removeEntry(formattingElementEntry);
        }
        return furthestBlock;
      }
      function aaInnerLoop(p, furthestBlock, formattingElement) {
        let lastElement = furthestBlock;
        let nextElement = p.openElements.getCommonAncestor(furthestBlock);
        for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
          nextElement = p.openElements.getCommonAncestor(element);
          const elementEntry = p.activeFormattingElements.getElementEntry(element);
          const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
          const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
          if (shouldRemoveFromOpenElements) {
            if (counterOverflow) {
              p.activeFormattingElements.removeEntry(elementEntry);
            }
            p.openElements.remove(element);
          } else {
            element = aaRecreateElementFromEntry(p, elementEntry);
            if (lastElement === furthestBlock) {
              p.activeFormattingElements.bookmark = elementEntry;
            }
            p.treeAdapter.detachNode(lastElement);
            p.treeAdapter.appendChild(element, lastElement);
            lastElement = element;
          }
        }
        return lastElement;
      }
      function aaRecreateElementFromEntry(p, elementEntry) {
        const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
        const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
        p.openElements.replace(elementEntry.element, newElement);
        elementEntry.element = newElement;
        return newElement;
      }
      function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
        if (p._isElementCausesFosterParenting(commonAncestor)) {
          p._fosterParentElement(lastElement);
        } else {
          const tn = p.treeAdapter.getTagName(commonAncestor);
          const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
          if (tn === $.TEMPLATE && ns === NS.HTML) {
            commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
          }
          p.treeAdapter.appendChild(commonAncestor, lastElement);
        }
      }
      function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
        const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
        const token = formattingElementEntry.token;
        const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
        p._adoptNodes(furthestBlock, newElement);
        p.treeAdapter.appendChild(furthestBlock, newElement);
        p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
        p.openElements.remove(formattingElementEntry.element);
        p.openElements.insertAfter(furthestBlock, newElement);
      }
      function callAdoptionAgency(p, token) {
        let formattingElementEntry;
        for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
          formattingElementEntry = aaObtainFormattingElementEntry(p, token, formattingElementEntry);
          if (!formattingElementEntry) {
            break;
          }
          const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
          if (!furthestBlock) {
            break;
          }
          p.activeFormattingElements.bookmark = formattingElementEntry;
          const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
          const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
          p.treeAdapter.detachNode(lastElement);
          aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
          aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
        }
      }
      function ignoreToken() {
      }
      function misplacedDoctype(p) {
        p._err(ERR.misplacedDoctype);
      }
      function appendComment(p, token) {
        p._appendCommentNode(token, p.openElements.currentTmplContent || p.openElements.current);
      }
      function appendCommentToRootHtmlElement(p, token) {
        p._appendCommentNode(token, p.openElements.items[0]);
      }
      function appendCommentToDocument(p, token) {
        p._appendCommentNode(token, p.document);
      }
      function insertCharacters(p, token) {
        p._insertCharacters(token);
      }
      function stopParsing(p) {
        p.stopped = true;
      }
      function doctypeInInitialMode(p, token) {
        p._setDocumentType(token);
        const mode = token.forceQuirks ? HTML.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token);
        if (!doctype.isConforming(token)) {
          p._err(ERR.nonConformingDoctype);
        }
        p.treeAdapter.setDocumentMode(p.document, mode);
        p.insertionMode = BEFORE_HTML_MODE;
      }
      function tokenInInitialMode(p, token) {
        p._err(ERR.missingDoctype, { beforeToken: true });
        p.treeAdapter.setDocumentMode(p.document, HTML.DOCUMENT_MODE.QUIRKS);
        p.insertionMode = BEFORE_HTML_MODE;
        p._processToken(token);
      }
      function startTagBeforeHtml(p, token) {
        if (token.tagName === $.HTML) {
          p._insertElement(token, NS.HTML);
          p.insertionMode = BEFORE_HEAD_MODE;
        } else {
          tokenBeforeHtml(p, token);
        }
      }
      function endTagBeforeHtml(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML || tn === $.HEAD || tn === $.BODY || tn === $.BR) {
          tokenBeforeHtml(p, token);
        }
      }
      function tokenBeforeHtml(p, token) {
        p._insertFakeRootElement();
        p.insertionMode = BEFORE_HEAD_MODE;
        p._processToken(token);
      }
      function startTagBeforeHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.HEAD) {
          p._insertElement(token, NS.HTML);
          p.headElement = p.openElements.current;
          p.insertionMode = IN_HEAD_MODE;
        } else {
          tokenBeforeHead(p, token);
        }
      }
      function endTagBeforeHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HEAD || tn === $.BODY || tn === $.HTML || tn === $.BR) {
          tokenBeforeHead(p, token);
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenBeforeHead(p, token) {
        p._insertFakeElement($.HEAD);
        p.headElement = p.openElements.current;
        p.insertionMode = IN_HEAD_MODE;
        p._processToken(token);
      }
      function startTagInHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META) {
          p._appendElement(token, NS.HTML);
          token.ackSelfClosing = true;
        } else if (tn === $.TITLE) {
          p._switchToTextParsing(token, Tokenizer.MODE.RCDATA);
        } else if (tn === $.NOSCRIPT) {
          if (p.options.scriptingEnabled) {
            p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
          } else {
            p._insertElement(token, NS.HTML);
            p.insertionMode = IN_HEAD_NO_SCRIPT_MODE;
          }
        } else if (tn === $.NOFRAMES || tn === $.STYLE) {
          p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
        } else if (tn === $.SCRIPT) {
          p._switchToTextParsing(token, Tokenizer.MODE.SCRIPT_DATA);
        } else if (tn === $.TEMPLATE) {
          p._insertTemplate(token, NS.HTML);
          p.activeFormattingElements.insertMarker();
          p.framesetOk = false;
          p.insertionMode = IN_TEMPLATE_MODE;
          p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
        } else if (tn === $.HEAD) {
          p._err(ERR.misplacedStartTagForHeadElement);
        } else {
          tokenInHead(p, token);
        }
      }
      function endTagInHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HEAD) {
          p.openElements.pop();
          p.insertionMode = AFTER_HEAD_MODE;
        } else if (tn === $.BODY || tn === $.BR || tn === $.HTML) {
          tokenInHead(p, token);
        } else if (tn === $.TEMPLATE) {
          if (p.openElements.tmplCount > 0) {
            p.openElements.generateImpliedEndTagsThoroughly();
            if (p.openElements.currentTagName !== $.TEMPLATE) {
              p._err(ERR.closingOfElementWithOpenChildElements);
            }
            p.openElements.popUntilTagNamePopped($.TEMPLATE);
            p.activeFormattingElements.clearToLastMarker();
            p._popTmplInsertionMode();
            p._resetInsertionMode();
          } else {
            p._err(ERR.endTagWithoutMatchingOpenElement);
          }
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenInHead(p, token) {
        p.openElements.pop();
        p.insertionMode = AFTER_HEAD_MODE;
        p._processToken(token);
      }
      function startTagInHeadNoScript(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.BASEFONT || tn === $.BGSOUND || tn === $.HEAD || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.STYLE) {
          startTagInHead(p, token);
        } else if (tn === $.NOSCRIPT) {
          p._err(ERR.nestedNoscriptInHead);
        } else {
          tokenInHeadNoScript(p, token);
        }
      }
      function endTagInHeadNoScript(p, token) {
        const tn = token.tagName;
        if (tn === $.NOSCRIPT) {
          p.openElements.pop();
          p.insertionMode = IN_HEAD_MODE;
        } else if (tn === $.BR) {
          tokenInHeadNoScript(p, token);
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenInHeadNoScript(p, token) {
        const errCode = token.type === Tokenizer.EOF_TOKEN ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
        p._err(errCode);
        p.openElements.pop();
        p.insertionMode = IN_HEAD_MODE;
        p._processToken(token);
      }
      function startTagAfterHead(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.BODY) {
          p._insertElement(token, NS.HTML);
          p.framesetOk = false;
          p.insertionMode = IN_BODY_MODE;
        } else if (tn === $.FRAMESET) {
          p._insertElement(token, NS.HTML);
          p.insertionMode = IN_FRAMESET_MODE;
        } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
          p._err(ERR.abandonedHeadElementChild);
          p.openElements.push(p.headElement);
          startTagInHead(p, token);
          p.openElements.remove(p.headElement);
        } else if (tn === $.HEAD) {
          p._err(ERR.misplacedStartTagForHeadElement);
        } else {
          tokenAfterHead(p, token);
        }
      }
      function endTagAfterHead(p, token) {
        const tn = token.tagName;
        if (tn === $.BODY || tn === $.HTML || tn === $.BR) {
          tokenAfterHead(p, token);
        } else if (tn === $.TEMPLATE) {
          endTagInHead(p, token);
        } else {
          p._err(ERR.endTagWithoutMatchingOpenElement);
        }
      }
      function tokenAfterHead(p, token) {
        p._insertFakeElement($.BODY);
        p.insertionMode = IN_BODY_MODE;
        p._processToken(token);
      }
      function whitespaceCharacterInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertCharacters(token);
      }
      function characterInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertCharacters(token);
        p.framesetOk = false;
      }
      function htmlStartTagInBody(p, token) {
        if (p.openElements.tmplCount === 0) {
          p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
        }
      }
      function bodyStartTagInBody(p, token) {
        const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
        if (bodyElement && p.openElements.tmplCount === 0) {
          p.framesetOk = false;
          p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
        }
      }
      function framesetStartTagInBody(p, token) {
        const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
        if (p.framesetOk && bodyElement) {
          p.treeAdapter.detachNode(bodyElement);
          p.openElements.popAllUpToHtmlElement();
          p._insertElement(token, NS.HTML);
          p.insertionMode = IN_FRAMESET_MODE;
        }
      }
      function addressStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
      }
      function numberedHeaderStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        const tn = p.openElements.currentTagName;
        if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
          p.openElements.pop();
        }
        p._insertElement(token, NS.HTML);
      }
      function preStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
        p.skipNextNewLine = true;
        p.framesetOk = false;
      }
      function formStartTagInBody(p, token) {
        const inTemplate = p.openElements.tmplCount > 0;
        if (!p.formElement || inTemplate) {
          if (p.openElements.hasInButtonScope($.P)) {
            p._closePElement();
          }
          p._insertElement(token, NS.HTML);
          if (!inTemplate) {
            p.formElement = p.openElements.current;
          }
        }
      }
      function listItemStartTagInBody(p, token) {
        p.framesetOk = false;
        const tn = token.tagName;
        for (let i = p.openElements.stackTop; i >= 0; i--) {
          const element = p.openElements.items[i];
          const elementTn = p.treeAdapter.getTagName(element);
          let closeTn = null;
          if (tn === $.LI && elementTn === $.LI) {
            closeTn = $.LI;
          } else if ((tn === $.DD || tn === $.DT) && (elementTn === $.DD || elementTn === $.DT)) {
            closeTn = elementTn;
          }
          if (closeTn) {
            p.openElements.generateImpliedEndTagsWithExclusion(closeTn);
            p.openElements.popUntilTagNamePopped(closeTn);
            break;
          }
          if (elementTn !== $.ADDRESS && elementTn !== $.DIV && elementTn !== $.P && p._isSpecialElement(element)) {
            break;
          }
        }
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
      }
      function plaintextStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
        p.tokenizer.state = Tokenizer.MODE.PLAINTEXT;
      }
      function buttonStartTagInBody(p, token) {
        if (p.openElements.hasInScope($.BUTTON)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped($.BUTTON);
        }
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.framesetOk = false;
      }
      function aStartTagInBody(p, token) {
        const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($.A);
        if (activeElementEntry) {
          callAdoptionAgency(p, token);
          p.openElements.remove(activeElementEntry.element);
          p.activeFormattingElements.removeEntry(activeElementEntry);
        }
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.activeFormattingElements.pushElement(p.openElements.current, token);
      }
      function bStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.activeFormattingElements.pushElement(p.openElements.current, token);
      }
      function nobrStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        if (p.openElements.hasInScope($.NOBR)) {
          callAdoptionAgency(p, token);
          p._reconstructActiveFormattingElements();
        }
        p._insertElement(token, NS.HTML);
        p.activeFormattingElements.pushElement(p.openElements.current, token);
      }
      function appletStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.activeFormattingElements.insertMarker();
        p.framesetOk = false;
      }
      function tableStartTagInBody(p, token) {
        if (p.treeAdapter.getDocumentMode(p.document) !== HTML.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
        p.framesetOk = false;
        p.insertionMode = IN_TABLE_MODE;
      }
      function areaStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._appendElement(token, NS.HTML);
        p.framesetOk = false;
        token.ackSelfClosing = true;
      }
      function inputStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._appendElement(token, NS.HTML);
        const inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);
        if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE) {
          p.framesetOk = false;
        }
        token.ackSelfClosing = true;
      }
      function paramStartTagInBody(p, token) {
        p._appendElement(token, NS.HTML);
        token.ackSelfClosing = true;
      }
      function hrStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._appendElement(token, NS.HTML);
        p.framesetOk = false;
        token.ackSelfClosing = true;
      }
      function imageStartTagInBody(p, token) {
        token.tagName = $.IMG;
        areaStartTagInBody(p, token);
      }
      function textareaStartTagInBody(p, token) {
        p._insertElement(token, NS.HTML);
        p.skipNextNewLine = true;
        p.tokenizer.state = Tokenizer.MODE.RCDATA;
        p.originalInsertionMode = p.insertionMode;
        p.framesetOk = false;
        p.insertionMode = TEXT_MODE;
      }
      function xmpStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._reconstructActiveFormattingElements();
        p.framesetOk = false;
        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
      }
      function iframeStartTagInBody(p, token) {
        p.framesetOk = false;
        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
      }
      function noembedStartTagInBody(p, token) {
        p._switchToTextParsing(token, Tokenizer.MODE.RAWTEXT);
      }
      function selectStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
        p.framesetOk = false;
        if (p.insertionMode === IN_TABLE_MODE || p.insertionMode === IN_CAPTION_MODE || p.insertionMode === IN_TABLE_BODY_MODE || p.insertionMode === IN_ROW_MODE || p.insertionMode === IN_CELL_MODE) {
          p.insertionMode = IN_SELECT_IN_TABLE_MODE;
        } else {
          p.insertionMode = IN_SELECT_MODE;
        }
      }
      function optgroupStartTagInBody(p, token) {
        if (p.openElements.currentTagName === $.OPTION) {
          p.openElements.pop();
        }
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
      }
      function rbStartTagInBody(p, token) {
        if (p.openElements.hasInScope($.RUBY)) {
          p.openElements.generateImpliedEndTags();
        }
        p._insertElement(token, NS.HTML);
      }
      function rtStartTagInBody(p, token) {
        if (p.openElements.hasInScope($.RUBY)) {
          p.openElements.generateImpliedEndTagsWithExclusion($.RTC);
        }
        p._insertElement(token, NS.HTML);
      }
      function menuStartTagInBody(p, token) {
        if (p.openElements.hasInButtonScope($.P)) {
          p._closePElement();
        }
        p._insertElement(token, NS.HTML);
      }
      function mathStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        foreignContent.adjustTokenMathMLAttrs(token);
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, NS.MATHML);
        } else {
          p._insertElement(token, NS.MATHML);
        }
        token.ackSelfClosing = true;
      }
      function svgStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        foreignContent.adjustTokenSVGAttrs(token);
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
          p._appendElement(token, NS.SVG);
        } else {
          p._insertElement(token, NS.SVG);
        }
        token.ackSelfClosing = true;
      }
      function genericStartTagInBody(p, token) {
        p._reconstructActiveFormattingElements();
        p._insertElement(token, NS.HTML);
      }
      function startTagInBody(p, token) {
        const tn = token.tagName;
        switch (tn.length) {
          case 1:
            if (tn === $.I || tn === $.S || tn === $.B || tn === $.U) {
              bStartTagInBody(p, token);
            } else if (tn === $.P) {
              addressStartTagInBody(p, token);
            } else if (tn === $.A) {
              aStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
            break;
          case 2:
            if (tn === $.DL || tn === $.OL || tn === $.UL) {
              addressStartTagInBody(p, token);
            } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
              numberedHeaderStartTagInBody(p, token);
            } else if (tn === $.LI || tn === $.DD || tn === $.DT) {
              listItemStartTagInBody(p, token);
            } else if (tn === $.EM || tn === $.TT) {
              bStartTagInBody(p, token);
            } else if (tn === $.BR) {
              areaStartTagInBody(p, token);
            } else if (tn === $.HR) {
              hrStartTagInBody(p, token);
            } else if (tn === $.RB) {
              rbStartTagInBody(p, token);
            } else if (tn === $.RT || tn === $.RP) {
              rtStartTagInBody(p, token);
            } else if (tn !== $.TH && tn !== $.TD && tn !== $.TR) {
              genericStartTagInBody(p, token);
            }
            break;
          case 3:
            if (tn === $.DIV || tn === $.DIR || tn === $.NAV) {
              addressStartTagInBody(p, token);
            } else if (tn === $.PRE) {
              preStartTagInBody(p, token);
            } else if (tn === $.BIG) {
              bStartTagInBody(p, token);
            } else if (tn === $.IMG || tn === $.WBR) {
              areaStartTagInBody(p, token);
            } else if (tn === $.XMP) {
              xmpStartTagInBody(p, token);
            } else if (tn === $.SVG) {
              svgStartTagInBody(p, token);
            } else if (tn === $.RTC) {
              rbStartTagInBody(p, token);
            } else if (tn !== $.COL) {
              genericStartTagInBody(p, token);
            }
            break;
          case 4:
            if (tn === $.HTML) {
              htmlStartTagInBody(p, token);
            } else if (tn === $.BASE || tn === $.LINK || tn === $.META) {
              startTagInHead(p, token);
            } else if (tn === $.BODY) {
              bodyStartTagInBody(p, token);
            } else if (tn === $.MAIN || tn === $.MENU) {
              addressStartTagInBody(p, token);
            } else if (tn === $.FORM) {
              formStartTagInBody(p, token);
            } else if (tn === $.CODE || tn === $.FONT) {
              bStartTagInBody(p, token);
            } else if (tn === $.NOBR) {
              nobrStartTagInBody(p, token);
            } else if (tn === $.AREA) {
              areaStartTagInBody(p, token);
            } else if (tn === $.MATH) {
              mathStartTagInBody(p, token);
            } else if (tn === $.MENU) {
              menuStartTagInBody(p, token);
            } else if (tn !== $.HEAD) {
              genericStartTagInBody(p, token);
            }
            break;
          case 5:
            if (tn === $.STYLE || tn === $.TITLE) {
              startTagInHead(p, token);
            } else if (tn === $.ASIDE) {
              addressStartTagInBody(p, token);
            } else if (tn === $.SMALL) {
              bStartTagInBody(p, token);
            } else if (tn === $.TABLE) {
              tableStartTagInBody(p, token);
            } else if (tn === $.EMBED) {
              areaStartTagInBody(p, token);
            } else if (tn === $.INPUT) {
              inputStartTagInBody(p, token);
            } else if (tn === $.PARAM || tn === $.TRACK) {
              paramStartTagInBody(p, token);
            } else if (tn === $.IMAGE) {
              imageStartTagInBody(p, token);
            } else if (tn !== $.FRAME && tn !== $.TBODY && tn !== $.TFOOT && tn !== $.THEAD) {
              genericStartTagInBody(p, token);
            }
            break;
          case 6:
            if (tn === $.SCRIPT) {
              startTagInHead(p, token);
            } else if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP || tn === $.DIALOG) {
              addressStartTagInBody(p, token);
            } else if (tn === $.BUTTON) {
              buttonStartTagInBody(p, token);
            } else if (tn === $.STRIKE || tn === $.STRONG) {
              bStartTagInBody(p, token);
            } else if (tn === $.APPLET || tn === $.OBJECT) {
              appletStartTagInBody(p, token);
            } else if (tn === $.KEYGEN) {
              areaStartTagInBody(p, token);
            } else if (tn === $.SOURCE) {
              paramStartTagInBody(p, token);
            } else if (tn === $.IFRAME) {
              iframeStartTagInBody(p, token);
            } else if (tn === $.SELECT) {
              selectStartTagInBody(p, token);
            } else if (tn === $.OPTION) {
              optgroupStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
            break;
          case 7:
            if (tn === $.BGSOUND) {
              startTagInHead(p, token);
            } else if (tn === $.DETAILS || tn === $.ADDRESS || tn === $.ARTICLE || tn === $.SECTION || tn === $.SUMMARY) {
              addressStartTagInBody(p, token);
            } else if (tn === $.LISTING) {
              preStartTagInBody(p, token);
            } else if (tn === $.MARQUEE) {
              appletStartTagInBody(p, token);
            } else if (tn === $.NOEMBED) {
              noembedStartTagInBody(p, token);
            } else if (tn !== $.CAPTION) {
              genericStartTagInBody(p, token);
            }
            break;
          case 8:
            if (tn === $.BASEFONT) {
              startTagInHead(p, token);
            } else if (tn === $.FRAMESET) {
              framesetStartTagInBody(p, token);
            } else if (tn === $.FIELDSET) {
              addressStartTagInBody(p, token);
            } else if (tn === $.TEXTAREA) {
              textareaStartTagInBody(p, token);
            } else if (tn === $.TEMPLATE) {
              startTagInHead(p, token);
            } else if (tn === $.NOSCRIPT) {
              if (p.options.scriptingEnabled) {
                noembedStartTagInBody(p, token);
              } else {
                genericStartTagInBody(p, token);
              }
            } else if (tn === $.OPTGROUP) {
              optgroupStartTagInBody(p, token);
            } else if (tn !== $.COLGROUP) {
              genericStartTagInBody(p, token);
            }
            break;
          case 9:
            if (tn === $.PLAINTEXT) {
              plaintextStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
            break;
          case 10:
            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
              addressStartTagInBody(p, token);
            } else {
              genericStartTagInBody(p, token);
            }
            break;
          default:
            genericStartTagInBody(p, token);
        }
      }
      function bodyEndTagInBody(p) {
        if (p.openElements.hasInScope($.BODY)) {
          p.insertionMode = AFTER_BODY_MODE;
        }
      }
      function htmlEndTagInBody(p, token) {
        if (p.openElements.hasInScope($.BODY)) {
          p.insertionMode = AFTER_BODY_MODE;
          p._processToken(token);
        }
      }
      function addressEndTagInBody(p, token) {
        const tn = token.tagName;
        if (p.openElements.hasInScope(tn)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(tn);
        }
      }
      function formEndTagInBody(p) {
        const inTemplate = p.openElements.tmplCount > 0;
        const formElement = p.formElement;
        if (!inTemplate) {
          p.formElement = null;
        }
        if ((formElement || inTemplate) && p.openElements.hasInScope($.FORM)) {
          p.openElements.generateImpliedEndTags();
          if (inTemplate) {
            p.openElements.popUntilTagNamePopped($.FORM);
          } else {
            p.openElements.remove(formElement);
          }
        }
      }
      function pEndTagInBody(p) {
        if (!p.openElements.hasInButtonScope($.P)) {
          p._insertFakeElement($.P);
        }
        p._closePElement();
      }
      function liEndTagInBody(p) {
        if (p.openElements.hasInListItemScope($.LI)) {
          p.openElements.generateImpliedEndTagsWithExclusion($.LI);
          p.openElements.popUntilTagNamePopped($.LI);
        }
      }
      function ddEndTagInBody(p, token) {
        const tn = token.tagName;
        if (p.openElements.hasInScope(tn)) {
          p.openElements.generateImpliedEndTagsWithExclusion(tn);
          p.openElements.popUntilTagNamePopped(tn);
        }
      }
      function numberedHeaderEndTagInBody(p) {
        if (p.openElements.hasNumberedHeaderInScope()) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilNumberedHeaderPopped();
        }
      }
      function appletEndTagInBody(p, token) {
        const tn = token.tagName;
        if (p.openElements.hasInScope(tn)) {
          p.openElements.generateImpliedEndTags();
          p.openElements.popUntilTagNamePopped(tn);
          p.activeFormattingElements.clearToLastMarker();
        }
      }
      function brEndTagInBody(p) {
        p._reconstructActiveFormattingElements();
        p._insertFakeElement($.BR);
        p.openElements.pop();
        p.framesetOk = false;
      }
      function genericEndTagInBody(p, token) {
        const tn = token.tagName;
        for (let i = p.openElements.stackTop; i > 0; i--) {
          const element = p.openElements.items[i];
          if (p.treeAdapter.getTagName(element) === tn) {
            p.openElements.generateImpliedEndTagsWithExclusion(tn);
            p.openElements.popUntilElementPopped(element);
            break;
          }
          if (p._isSpecialElement(element)) {
            break;
          }
        }
      }
      function endTagInBody(p, token) {
        const tn = token.tagName;
        switch (tn.length) {
          case 1:
            if (tn === $.A || tn === $.B || tn === $.I || tn === $.S || tn === $.U) {
              callAdoptionAgency(p, token);
            } else if (tn === $.P) {
              pEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 2:
            if (tn === $.DL || tn === $.UL || tn === $.OL) {
              addressEndTagInBody(p, token);
            } else if (tn === $.LI) {
              liEndTagInBody(p, token);
            } else if (tn === $.DD || tn === $.DT) {
              ddEndTagInBody(p, token);
            } else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) {
              numberedHeaderEndTagInBody(p, token);
            } else if (tn === $.BR) {
              brEndTagInBody(p, token);
            } else if (tn === $.EM || tn === $.TT) {
              callAdoptionAgency(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 3:
            if (tn === $.BIG) {
              callAdoptionAgency(p, token);
            } else if (tn === $.DIR || tn === $.DIV || tn === $.NAV || tn === $.PRE) {
              addressEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 4:
            if (tn === $.BODY) {
              bodyEndTagInBody(p, token);
            } else if (tn === $.HTML) {
              htmlEndTagInBody(p, token);
            } else if (tn === $.FORM) {
              formEndTagInBody(p, token);
            } else if (tn === $.CODE || tn === $.FONT || tn === $.NOBR) {
              callAdoptionAgency(p, token);
            } else if (tn === $.MAIN || tn === $.MENU) {
              addressEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 5:
            if (tn === $.ASIDE) {
              addressEndTagInBody(p, token);
            } else if (tn === $.SMALL) {
              callAdoptionAgency(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 6:
            if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP || tn === $.DIALOG) {
              addressEndTagInBody(p, token);
            } else if (tn === $.APPLET || tn === $.OBJECT) {
              appletEndTagInBody(p, token);
            } else if (tn === $.STRIKE || tn === $.STRONG) {
              callAdoptionAgency(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 7:
            if (tn === $.ADDRESS || tn === $.ARTICLE || tn === $.DETAILS || tn === $.SECTION || tn === $.SUMMARY || tn === $.LISTING) {
              addressEndTagInBody(p, token);
            } else if (tn === $.MARQUEE) {
              appletEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 8:
            if (tn === $.FIELDSET) {
              addressEndTagInBody(p, token);
            } else if (tn === $.TEMPLATE) {
              endTagInHead(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          case 10:
            if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) {
              addressEndTagInBody(p, token);
            } else {
              genericEndTagInBody(p, token);
            }
            break;
          default:
            genericEndTagInBody(p, token);
        }
      }
      function eofInBody(p, token) {
        if (p.tmplInsertionModeStackTop > -1) {
          eofInTemplate(p, token);
        } else {
          p.stopped = true;
        }
      }
      function endTagInText(p, token) {
        if (token.tagName === $.SCRIPT) {
          p.pendingScript = p.openElements.current;
        }
        p.openElements.pop();
        p.insertionMode = p.originalInsertionMode;
      }
      function eofInText(p, token) {
        p._err(ERR.eofInElementThatCanContainOnlyText);
        p.openElements.pop();
        p.insertionMode = p.originalInsertionMode;
        p._processToken(token);
      }
      function characterInTable(p, token) {
        const curTn = p.openElements.currentTagName;
        if (curTn === $.TABLE || curTn === $.TBODY || curTn === $.TFOOT || curTn === $.THEAD || curTn === $.TR) {
          p.pendingCharacterTokens = [];
          p.hasNonWhitespacePendingCharacterToken = false;
          p.originalInsertionMode = p.insertionMode;
          p.insertionMode = IN_TABLE_TEXT_MODE;
          p._processToken(token);
        } else {
          tokenInTable(p, token);
        }
      }
      function captionStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p.activeFormattingElements.insertMarker();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_CAPTION_MODE;
      }
      function colgroupStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_COLUMN_GROUP_MODE;
      }
      function colStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertFakeElement($.COLGROUP);
        p.insertionMode = IN_COLUMN_GROUP_MODE;
        p._processToken(token);
      }
      function tbodyStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertElement(token, NS.HTML);
        p.insertionMode = IN_TABLE_BODY_MODE;
      }
      function tdStartTagInTable(p, token) {
        p.openElements.clearBackToTableContext();
        p._insertFakeElement($.TBODY);
        p.insertionMode = IN_TABLE_BODY_MODE;
        p._processToken(token);
      }
      function tableStartTagInTable(p, token) {
        if (p.openElements.hasInTableScope($.TABLE)) {
          p.openElements.popUntilTagNamePopped($.TABLE);
          p._resetInsertionMode();
          p._processToken(token);
        }
      }
      function inputStartTagInTable(p, token) {
        const inputType = Tokenizer.getTokenAttr(token, ATTRS.TYPE);
        if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE) {
          p._appendElement(token, NS.HTML);
        } else {
          tokenInTable(p, token);
        }
        token.ackSelfClosing = true;
      }
      function formStartTagInTable(p, token) {
        if (!p.formElement && p.openElements.tmplCount === 0) {
          p._insertElement(token, NS.HTML);
          p.formElement = p.openElements.current;
          p.openElements.pop();
        }
      }
      function startTagInTable(p, token) {
        const tn = token.tagName;
        switch (tn.length) {
          case 2:
            if (tn === $.TD || tn === $.TH || tn === $.TR) {
              tdStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 3:
            if (tn === $.COL) {
              colStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 4:
            if (tn === $.FORM) {
              formStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 5:
            if (tn === $.TABLE) {
              tableStartTagInTable(p, token);
            } else if (tn === $.STYLE) {
              startTagInHead(p, token);
            } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
              tbodyStartTagInTable(p, token);
            } else if (tn === $.INPUT) {
              inputStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 6:
            if (tn === $.SCRIPT) {
              startTagInHead(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 7:
            if (tn === $.CAPTION) {
              captionStartTagInTable(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          case 8:
            if (tn === $.COLGROUP) {
              colgroupStartTagInTable(p, token);
            } else if (tn === $.TEMPLATE) {
              startTagInHead(p, token);
            } else {
              tokenInTable(p, token);
            }
            break;
          default:
            tokenInTable(p, token);
        }
      }
      function endTagInTable(p, token) {
        const tn = token.tagName;
        if (tn === $.TABLE) {
          if (p.openElements.hasInTableScope($.TABLE)) {
            p.openElements.popUntilTagNamePopped($.TABLE);
            p._resetInsertionMode();
          }
        } else if (tn === $.TEMPLATE) {
          endTagInHead(p, token);
        } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
          tokenInTable(p, token);
        }
      }
      function tokenInTable(p, token) {
        const savedFosterParentingState = p.fosterParentingEnabled;
        p.fosterParentingEnabled = true;
        p._processTokenInBodyMode(token);
        p.fosterParentingEnabled = savedFosterParentingState;
      }
      function whitespaceCharacterInTableText(p, token) {
        p.pendingCharacterTokens.push(token);
      }
      function characterInTableText(p, token) {
        p.pendingCharacterTokens.push(token);
        p.hasNonWhitespacePendingCharacterToken = true;
      }
      function tokenInTableText(p, token) {
        let i = 0;
        if (p.hasNonWhitespacePendingCharacterToken) {
          for (; i < p.pendingCharacterTokens.length; i++) {
            tokenInTable(p, p.pendingCharacterTokens[i]);
          }
        } else {
          for (; i < p.pendingCharacterTokens.length; i++) {
            p._insertCharacters(p.pendingCharacterTokens[i]);
          }
        }
        p.insertionMode = p.originalInsertionMode;
        p._processToken(token);
      }
      function startTagInCaption(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
          if (p.openElements.hasInTableScope($.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped($.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_TABLE_MODE;
            p._processToken(token);
          }
        } else {
          startTagInBody(p, token);
        }
      }
      function endTagInCaption(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.TABLE) {
          if (p.openElements.hasInTableScope($.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped($.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_TABLE_MODE;
            if (tn === $.TABLE) {
              p._processToken(token);
            }
          }
        } else if (tn !== $.BODY && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) {
          endTagInBody(p, token);
        }
      }
      function startTagInColumnGroup(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.COL) {
          p._appendElement(token, NS.HTML);
          token.ackSelfClosing = true;
        } else if (tn === $.TEMPLATE) {
          startTagInHead(p, token);
        } else {
          tokenInColumnGroup(p, token);
        }
      }
      function endTagInColumnGroup(p, token) {
        const tn = token.tagName;
        if (tn === $.COLGROUP) {
          if (p.openElements.currentTagName === $.COLGROUP) {
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
          }
        } else if (tn === $.TEMPLATE) {
          endTagInHead(p, token);
        } else if (tn !== $.COL) {
          tokenInColumnGroup(p, token);
        }
      }
      function tokenInColumnGroup(p, token) {
        if (p.openElements.currentTagName === $.COLGROUP) {
          p.openElements.pop();
          p.insertionMode = IN_TABLE_MODE;
          p._processToken(token);
        }
      }
      function startTagInTableBody(p, token) {
        const tn = token.tagName;
        if (tn === $.TR) {
          p.openElements.clearBackToTableBodyContext();
          p._insertElement(token, NS.HTML);
          p.insertionMode = IN_ROW_MODE;
        } else if (tn === $.TH || tn === $.TD) {
          p.openElements.clearBackToTableBodyContext();
          p._insertFakeElement($.TR);
          p.insertionMode = IN_ROW_MODE;
          p._processToken(token);
        } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
            p._processToken(token);
          }
        } else {
          startTagInTable(p, token);
        }
      }
      function endTagInTableBody(p, token) {
        const tn = token.tagName;
        if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
          }
        } else if (tn === $.TABLE) {
          if (p.openElements.hasTableBodyContextInTableScope()) {
            p.openElements.clearBackToTableBodyContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_MODE;
            p._processToken(token);
          }
        } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH && tn !== $.TR) {
          endTagInTable(p, token);
        }
      }
      function startTagInRow(p, token) {
        const tn = token.tagName;
        if (tn === $.TH || tn === $.TD) {
          p.openElements.clearBackToTableRowContext();
          p._insertElement(token, NS.HTML);
          p.insertionMode = IN_CELL_MODE;
          p.activeFormattingElements.insertMarker();
        } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
          if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
            p._processToken(token);
          }
        } else {
          startTagInTable(p, token);
        }
      }
      function endTagInRow(p, token) {
        const tn = token.tagName;
        if (tn === $.TR) {
          if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
          }
        } else if (tn === $.TABLE) {
          if (p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
            p._processToken(token);
          }
        } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
          if (p.openElements.hasInTableScope(tn) || p.openElements.hasInTableScope($.TR)) {
            p.openElements.clearBackToTableRowContext();
            p.openElements.pop();
            p.insertionMode = IN_TABLE_BODY_MODE;
            p._processToken(token);
          }
        } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH) {
          endTagInTable(p, token);
        }
      }
      function startTagInCell(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
          if (p.openElements.hasInTableScope($.TD) || p.openElements.hasInTableScope($.TH)) {
            p._closeTableCell();
            p._processToken(token);
          }
        } else {
          startTagInBody(p, token);
        }
      }
      function endTagInCell(p, token) {
        const tn = token.tagName;
        if (tn === $.TD || tn === $.TH) {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(tn);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = IN_ROW_MODE;
          }
        } else if (tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
          if (p.openElements.hasInTableScope(tn)) {
            p._closeTableCell();
            p._processToken(token);
          }
        } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML) {
          endTagInBody(p, token);
        }
      }
      function startTagInSelect(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.OPTION) {
          if (p.openElements.currentTagName === $.OPTION) {
            p.openElements.pop();
          }
          p._insertElement(token, NS.HTML);
        } else if (tn === $.OPTGROUP) {
          if (p.openElements.currentTagName === $.OPTION) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagName === $.OPTGROUP) {
            p.openElements.pop();
          }
          p._insertElement(token, NS.HTML);
        } else if (tn === $.INPUT || tn === $.KEYGEN || tn === $.TEXTAREA || tn === $.SELECT) {
          if (p.openElements.hasInSelectScope($.SELECT)) {
            p.openElements.popUntilTagNamePopped($.SELECT);
            p._resetInsertionMode();
            if (tn !== $.SELECT) {
              p._processToken(token);
            }
          }
        } else if (tn === $.SCRIPT || tn === $.TEMPLATE) {
          startTagInHead(p, token);
        }
      }
      function endTagInSelect(p, token) {
        const tn = token.tagName;
        if (tn === $.OPTGROUP) {
          const prevOpenElement = p.openElements.items[p.openElements.stackTop - 1];
          const prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);
          if (p.openElements.currentTagName === $.OPTION && prevOpenElementTn === $.OPTGROUP) {
            p.openElements.pop();
          }
          if (p.openElements.currentTagName === $.OPTGROUP) {
            p.openElements.pop();
          }
        } else if (tn === $.OPTION) {
          if (p.openElements.currentTagName === $.OPTION) {
            p.openElements.pop();
          }
        } else if (tn === $.SELECT && p.openElements.hasInSelectScope($.SELECT)) {
          p.openElements.popUntilTagNamePopped($.SELECT);
          p._resetInsertionMode();
        } else if (tn === $.TEMPLATE) {
          endTagInHead(p, token);
        }
      }
      function startTagInSelectInTable(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
          p.openElements.popUntilTagNamePopped($.SELECT);
          p._resetInsertionMode();
          p._processToken(token);
        } else {
          startTagInSelect(p, token);
        }
      }
      function endTagInSelectInTable(p, token) {
        const tn = token.tagName;
        if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
          if (p.openElements.hasInTableScope(tn)) {
            p.openElements.popUntilTagNamePopped($.SELECT);
            p._resetInsertionMode();
            p._processToken(token);
          }
        } else {
          endTagInSelect(p, token);
        }
      }
      function startTagInTemplate(p, token) {
        const tn = token.tagName;
        if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
          startTagInHead(p, token);
        } else {
          const newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;
          p._popTmplInsertionMode();
          p._pushTmplInsertionMode(newInsertionMode);
          p.insertionMode = newInsertionMode;
          p._processToken(token);
        }
      }
      function endTagInTemplate(p, token) {
        if (token.tagName === $.TEMPLATE) {
          endTagInHead(p, token);
        }
      }
      function eofInTemplate(p, token) {
        if (p.openElements.tmplCount > 0) {
          p.openElements.popUntilTagNamePopped($.TEMPLATE);
          p.activeFormattingElements.clearToLastMarker();
          p._popTmplInsertionMode();
          p._resetInsertionMode();
          p._processToken(token);
        } else {
          p.stopped = true;
        }
      }
      function startTagAfterBody(p, token) {
        if (token.tagName === $.HTML) {
          startTagInBody(p, token);
        } else {
          tokenAfterBody(p, token);
        }
      }
      function endTagAfterBody(p, token) {
        if (token.tagName === $.HTML) {
          if (!p.fragmentContext) {
            p.insertionMode = AFTER_AFTER_BODY_MODE;
          }
        } else {
          tokenAfterBody(p, token);
        }
      }
      function tokenAfterBody(p, token) {
        p.insertionMode = IN_BODY_MODE;
        p._processToken(token);
      }
      function startTagInFrameset(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.FRAMESET) {
          p._insertElement(token, NS.HTML);
        } else if (tn === $.FRAME) {
          p._appendElement(token, NS.HTML);
          token.ackSelfClosing = true;
        } else if (tn === $.NOFRAMES) {
          startTagInHead(p, token);
        }
      }
      function endTagInFrameset(p, token) {
        if (token.tagName === $.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
          p.openElements.pop();
          if (!p.fragmentContext && p.openElements.currentTagName !== $.FRAMESET) {
            p.insertionMode = AFTER_FRAMESET_MODE;
          }
        }
      }
      function startTagAfterFrameset(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.NOFRAMES) {
          startTagInHead(p, token);
        }
      }
      function endTagAfterFrameset(p, token) {
        if (token.tagName === $.HTML) {
          p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
        }
      }
      function startTagAfterAfterBody(p, token) {
        if (token.tagName === $.HTML) {
          startTagInBody(p, token);
        } else {
          tokenAfterAfterBody(p, token);
        }
      }
      function tokenAfterAfterBody(p, token) {
        p.insertionMode = IN_BODY_MODE;
        p._processToken(token);
      }
      function startTagAfterAfterFrameset(p, token) {
        const tn = token.tagName;
        if (tn === $.HTML) {
          startTagInBody(p, token);
        } else if (tn === $.NOFRAMES) {
          startTagInHead(p, token);
        }
      }
      function nullCharacterInForeignContent(p, token) {
        token.chars = unicode.REPLACEMENT_CHARACTER;
        p._insertCharacters(token);
      }
      function characterInForeignContent(p, token) {
        p._insertCharacters(token);
        p.framesetOk = false;
      }
      function startTagInForeignContent(p, token) {
        if (foreignContent.causesExit(token) && !p.fragmentContext) {
          while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && !p._isIntegrationPoint(p.openElements.current)) {
            p.openElements.pop();
          }
          p._processToken(token);
        } else {
          const current = p._getAdjustedCurrentElement();
          const currentNs = p.treeAdapter.getNamespaceURI(current);
          if (currentNs === NS.MATHML) {
            foreignContent.adjustTokenMathMLAttrs(token);
          } else if (currentNs === NS.SVG) {
            foreignContent.adjustTokenSVGTagName(token);
            foreignContent.adjustTokenSVGAttrs(token);
          }
          foreignContent.adjustTokenXMLAttrs(token);
          if (token.selfClosing) {
            p._appendElement(token, currentNs);
          } else {
            p._insertElement(token, currentNs);
          }
          token.ackSelfClosing = true;
        }
      }
      function endTagInForeignContent(p, token) {
        for (let i = p.openElements.stackTop; i > 0; i--) {
          const element = p.openElements.items[i];
          if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
            p._processToken(token);
            break;
          }
          if (p.treeAdapter.getTagName(element).toLowerCase() === token.tagName) {
            p.openElements.popUntilElementPopped(element);
            break;
          }
        }
      }
    }
  });

  // node_modules/parse5/lib/serializer/index.js
  var require_serializer = __commonJS({
    "node_modules/parse5/lib/serializer/index.js"(exports, module) {
      "use strict";
      var defaultTreeAdapter = require_default();
      var mergeOptions = require_merge_options();
      var doctype = require_doctype();
      var HTML = require_html();
      var $ = HTML.TAG_NAMES;
      var NS = HTML.NAMESPACES;
      var DEFAULT_OPTIONS = {
        treeAdapter: defaultTreeAdapter
      };
      var AMP_REGEX = /&/g;
      var NBSP_REGEX = /\u00a0/g;
      var DOUBLE_QUOTE_REGEX = /"/g;
      var LT_REGEX = /</g;
      var GT_REGEX = />/g;
      var Serializer = class {
        constructor(node, options) {
          this.options = mergeOptions(DEFAULT_OPTIONS, options);
          this.treeAdapter = this.options.treeAdapter;
          this.html = "";
          this.startNode = node;
        }
        serialize() {
          this._serializeChildNodes(this.startNode);
          return this.html;
        }
        _serializeChildNodes(parentNode) {
          const childNodes = this.treeAdapter.getChildNodes(parentNode);
          if (childNodes) {
            for (let i = 0, cnLength = childNodes.length; i < cnLength; i++) {
              const currentNode = childNodes[i];
              if (this.treeAdapter.isElementNode(currentNode)) {
                this._serializeElement(currentNode);
              } else if (this.treeAdapter.isTextNode(currentNode)) {
                this._serializeTextNode(currentNode);
              } else if (this.treeAdapter.isCommentNode(currentNode)) {
                this._serializeCommentNode(currentNode);
              } else if (this.treeAdapter.isDocumentTypeNode(currentNode)) {
                this._serializeDocumentTypeNode(currentNode);
              }
            }
          }
        }
        _serializeElement(node) {
          const tn = this.treeAdapter.getTagName(node);
          const ns = this.treeAdapter.getNamespaceURI(node);
          this.html += "<" + tn;
          this._serializeAttributes(node);
          this.html += ">";
          if (tn !== $.AREA && tn !== $.BASE && tn !== $.BASEFONT && tn !== $.BGSOUND && tn !== $.BR && tn !== $.COL && tn !== $.EMBED && tn !== $.FRAME && tn !== $.HR && tn !== $.IMG && tn !== $.INPUT && tn !== $.KEYGEN && tn !== $.LINK && tn !== $.META && tn !== $.PARAM && tn !== $.SOURCE && tn !== $.TRACK && tn !== $.WBR) {
            const childNodesHolder = tn === $.TEMPLATE && ns === NS.HTML ? this.treeAdapter.getTemplateContent(node) : node;
            this._serializeChildNodes(childNodesHolder);
            this.html += "</" + tn + ">";
          }
        }
        _serializeAttributes(node) {
          const attrs = this.treeAdapter.getAttrList(node);
          for (let i = 0, attrsLength = attrs.length; i < attrsLength; i++) {
            const attr = attrs[i];
            const value = Serializer.escapeString(attr.value, true);
            this.html += " ";
            if (!attr.namespace) {
              this.html += attr.name;
            } else if (attr.namespace === NS.XML) {
              this.html += "xml:" + attr.name;
            } else if (attr.namespace === NS.XMLNS) {
              if (attr.name !== "xmlns") {
                this.html += "xmlns:";
              }
              this.html += attr.name;
            } else if (attr.namespace === NS.XLINK) {
              this.html += "xlink:" + attr.name;
            } else {
              this.html += attr.prefix + ":" + attr.name;
            }
            this.html += '="' + value + '"';
          }
        }
        _serializeTextNode(node) {
          const content = this.treeAdapter.getTextNodeContent(node);
          const parent = this.treeAdapter.getParentNode(node);
          let parentTn = void 0;
          if (parent && this.treeAdapter.isElementNode(parent)) {
            parentTn = this.treeAdapter.getTagName(parent);
          }
          if (parentTn === $.STYLE || parentTn === $.SCRIPT || parentTn === $.XMP || parentTn === $.IFRAME || parentTn === $.NOEMBED || parentTn === $.NOFRAMES || parentTn === $.PLAINTEXT || parentTn === $.NOSCRIPT) {
            this.html += content;
          } else {
            this.html += Serializer.escapeString(content, false);
          }
        }
        _serializeCommentNode(node) {
          this.html += "<!--" + this.treeAdapter.getCommentNodeContent(node) + "-->";
        }
        _serializeDocumentTypeNode(node) {
          const name = this.treeAdapter.getDocumentTypeNodeName(node);
          this.html += "<" + doctype.serializeContent(name, null, null) + ">";
        }
      };
      Serializer.escapeString = function(str, attrMode) {
        str = str.replace(AMP_REGEX, "&amp;").replace(NBSP_REGEX, "&nbsp;");
        if (attrMode) {
          str = str.replace(DOUBLE_QUOTE_REGEX, "&quot;");
        } else {
          str = str.replace(LT_REGEX, "&lt;").replace(GT_REGEX, "&gt;");
        }
        return str;
      };
      module.exports = Serializer;
    }
  });

  // node_modules/parse5/lib/index.js
  var require_lib10 = __commonJS({
    "node_modules/parse5/lib/index.js"(exports) {
      "use strict";
      var Parser = require_parser();
      var Serializer = require_serializer();
      exports.parse = function parse(html, options) {
        const parser = new Parser(options);
        return parser.parse(html);
      };
      exports.parseFragment = function parseFragment(fragmentContext, html, options) {
        if (typeof fragmentContext === "string") {
          options = html;
          html = fragmentContext;
          fragmentContext = null;
        }
        const parser = new Parser(options);
        return parser.parseFragment(html, fragmentContext);
      };
      exports.serialize = function(node, options) {
        const serializer = new Serializer(node, options);
        return serializer.serialize();
      };
    }
  });

  // node_modules/parse5-htmlparser2-tree-adapter/lib/index.js
  var require_lib11 = __commonJS({
    "node_modules/parse5-htmlparser2-tree-adapter/lib/index.js"(exports) {
      "use strict";
      var doctype = require_doctype();
      var { DOCUMENT_MODE } = require_html();
      var nodeTypes = {
        element: 1,
        text: 3,
        cdata: 4,
        comment: 8
      };
      var nodePropertyShorthands = {
        tagName: "name",
        childNodes: "children",
        parentNode: "parent",
        previousSibling: "prev",
        nextSibling: "next",
        nodeValue: "data"
      };
      var Node = class {
        constructor(props) {
          for (const key of Object.keys(props)) {
            this[key] = props[key];
          }
        }
        get firstChild() {
          const children = this.children;
          return children && children[0] || null;
        }
        get lastChild() {
          const children = this.children;
          return children && children[children.length - 1] || null;
        }
        get nodeType() {
          return nodeTypes[this.type] || nodeTypes.element;
        }
      };
      Object.keys(nodePropertyShorthands).forEach((key) => {
        const shorthand = nodePropertyShorthands[key];
        Object.defineProperty(Node.prototype, key, {
          get: function() {
            return this[shorthand] || null;
          },
          set: function(val) {
            this[shorthand] = val;
            return val;
          }
        });
      });
      exports.createDocument = function() {
        return new Node({
          type: "root",
          name: "root",
          parent: null,
          prev: null,
          next: null,
          children: [],
          "x-mode": DOCUMENT_MODE.NO_QUIRKS
        });
      };
      exports.createDocumentFragment = function() {
        return new Node({
          type: "root",
          name: "root",
          parent: null,
          prev: null,
          next: null,
          children: []
        });
      };
      exports.createElement = function(tagName, namespaceURI, attrs) {
        const attribs = /* @__PURE__ */ Object.create(null);
        const attribsNamespace = /* @__PURE__ */ Object.create(null);
        const attribsPrefix = /* @__PURE__ */ Object.create(null);
        for (let i = 0; i < attrs.length; i++) {
          const attrName = attrs[i].name;
          attribs[attrName] = attrs[i].value;
          attribsNamespace[attrName] = attrs[i].namespace;
          attribsPrefix[attrName] = attrs[i].prefix;
        }
        return new Node({
          type: tagName === "script" || tagName === "style" ? tagName : "tag",
          name: tagName,
          namespace: namespaceURI,
          attribs,
          "x-attribsNamespace": attribsNamespace,
          "x-attribsPrefix": attribsPrefix,
          children: [],
          parent: null,
          prev: null,
          next: null
        });
      };
      exports.createCommentNode = function(data) {
        return new Node({
          type: "comment",
          data,
          parent: null,
          prev: null,
          next: null
        });
      };
      var createTextNode = function(value) {
        return new Node({
          type: "text",
          data: value,
          parent: null,
          prev: null,
          next: null
        });
      };
      var appendChild = exports.appendChild = function(parentNode, newNode) {
        const prev = parentNode.children[parentNode.children.length - 1];
        if (prev) {
          prev.next = newNode;
          newNode.prev = prev;
        }
        parentNode.children.push(newNode);
        newNode.parent = parentNode;
      };
      var insertBefore = exports.insertBefore = function(parentNode, newNode, referenceNode) {
        const insertionIdx = parentNode.children.indexOf(referenceNode);
        const prev = referenceNode.prev;
        if (prev) {
          prev.next = newNode;
          newNode.prev = prev;
        }
        referenceNode.prev = newNode;
        newNode.next = referenceNode;
        parentNode.children.splice(insertionIdx, 0, newNode);
        newNode.parent = parentNode;
      };
      exports.setTemplateContent = function(templateElement, contentElement) {
        appendChild(templateElement, contentElement);
      };
      exports.getTemplateContent = function(templateElement) {
        return templateElement.children[0];
      };
      exports.setDocumentType = function(document2, name, publicId, systemId) {
        const data = doctype.serializeContent(name, publicId, systemId);
        let doctypeNode = null;
        for (let i = 0; i < document2.children.length; i++) {
          if (document2.children[i].type === "directive" && document2.children[i].name === "!doctype") {
            doctypeNode = document2.children[i];
            break;
          }
        }
        if (doctypeNode) {
          doctypeNode.data = data;
          doctypeNode["x-name"] = name;
          doctypeNode["x-publicId"] = publicId;
          doctypeNode["x-systemId"] = systemId;
        } else {
          appendChild(document2, new Node({
            type: "directive",
            name: "!doctype",
            data,
            "x-name": name,
            "x-publicId": publicId,
            "x-systemId": systemId
          }));
        }
      };
      exports.setDocumentMode = function(document2, mode) {
        document2["x-mode"] = mode;
      };
      exports.getDocumentMode = function(document2) {
        return document2["x-mode"];
      };
      exports.detachNode = function(node) {
        if (node.parent) {
          const idx = node.parent.children.indexOf(node);
          const prev = node.prev;
          const next = node.next;
          node.prev = null;
          node.next = null;
          if (prev) {
            prev.next = next;
          }
          if (next) {
            next.prev = prev;
          }
          node.parent.children.splice(idx, 1);
          node.parent = null;
        }
      };
      exports.insertText = function(parentNode, text) {
        const lastChild = parentNode.children[parentNode.children.length - 1];
        if (lastChild && lastChild.type === "text") {
          lastChild.data += text;
        } else {
          appendChild(parentNode, createTextNode(text));
        }
      };
      exports.insertTextBefore = function(parentNode, text, referenceNode) {
        const prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];
        if (prevNode && prevNode.type === "text") {
          prevNode.data += text;
        } else {
          insertBefore(parentNode, createTextNode(text), referenceNode);
        }
      };
      exports.adoptAttributes = function(recipient, attrs) {
        for (let i = 0; i < attrs.length; i++) {
          const attrName = attrs[i].name;
          if (typeof recipient.attribs[attrName] === "undefined") {
            recipient.attribs[attrName] = attrs[i].value;
            recipient["x-attribsNamespace"][attrName] = attrs[i].namespace;
            recipient["x-attribsPrefix"][attrName] = attrs[i].prefix;
          }
        }
      };
      exports.getFirstChild = function(node) {
        return node.children[0];
      };
      exports.getChildNodes = function(node) {
        return node.children;
      };
      exports.getParentNode = function(node) {
        return node.parent;
      };
      exports.getAttrList = function(element) {
        const attrList = [];
        for (const name in element.attribs) {
          attrList.push({
            name,
            value: element.attribs[name],
            namespace: element["x-attribsNamespace"][name],
            prefix: element["x-attribsPrefix"][name]
          });
        }
        return attrList;
      };
      exports.getTagName = function(element) {
        return element.name;
      };
      exports.getNamespaceURI = function(element) {
        return element.namespace;
      };
      exports.getTextNodeContent = function(textNode) {
        return textNode.data;
      };
      exports.getCommentNodeContent = function(commentNode) {
        return commentNode.data;
      };
      exports.getDocumentTypeNodeName = function(doctypeNode) {
        return doctypeNode["x-name"];
      };
      exports.getDocumentTypeNodePublicId = function(doctypeNode) {
        return doctypeNode["x-publicId"];
      };
      exports.getDocumentTypeNodeSystemId = function(doctypeNode) {
        return doctypeNode["x-systemId"];
      };
      exports.isTextNode = function(node) {
        return node.type === "text";
      };
      exports.isCommentNode = function(node) {
        return node.type === "comment";
      };
      exports.isDocumentTypeNode = function(node) {
        return node.type === "directive" && node.name === "!doctype";
      };
      exports.isElementNode = function(node) {
        return !!node.attribs;
      };
      exports.setNodeSourceCodeLocation = function(node, location) {
        node.sourceCodeLocation = location;
      };
      exports.getNodeSourceCodeLocation = function(node) {
        return node.sourceCodeLocation;
      };
      exports.updateNodeSourceCodeLocation = function(node, endLocation) {
        node.sourceCodeLocation = Object.assign(node.sourceCodeLocation, endLocation);
      };
    }
  });

  // node_modules/cheerio/lib/parsers/parse5-adapter.js
  var require_parse5_adapter = __commonJS({
    "node_modules/cheerio/lib/parsers/parse5-adapter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.render = exports.parse = void 0;
      var tslib_1 = require_tslib();
      var domhandler_1 = require_lib2();
      var parse5_1 = require_lib10();
      var parse5_htmlparser2_tree_adapter_1 = tslib_1.__importDefault(require_lib11());
      function parse(content, options, isDocument) {
        var opts = {
          scriptingEnabled: typeof options.scriptingEnabled === "boolean" ? options.scriptingEnabled : true,
          treeAdapter: parse5_htmlparser2_tree_adapter_1.default,
          sourceCodeLocationInfo: options.sourceCodeLocationInfo
        };
        var context = options.context;
        return isDocument ? parse5_1.parse(content, opts) : parse5_1.parseFragment(context, content, opts);
      }
      exports.parse = parse;
      function render(dom) {
        var _a;
        var nodes = "length" in dom ? dom : [dom];
        for (var index = 0; index < nodes.length; index += 1) {
          var node = nodes[index];
          if (domhandler_1.isDocument(node)) {
            (_a = Array.prototype.splice).call.apply(_a, tslib_1.__spreadArray([nodes, index, 1], node.children));
          }
        }
        return parse5_1.serialize({ children: nodes }, { treeAdapter: parse5_htmlparser2_tree_adapter_1.default });
      }
      exports.render = render;
    }
  });

  // node_modules/cheerio/lib/parsers/htmlparser2-adapter.js
  var require_htmlparser2_adapter = __commonJS({
    "node_modules/cheerio/lib/parsers/htmlparser2-adapter.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.render = exports.parse = void 0;
      var htmlparser2_1 = require_lib9();
      Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
        return htmlparser2_1.parseDocument;
      } });
      var dom_serializer_1 = require_lib4();
      Object.defineProperty(exports, "render", { enumerable: true, get: function() {
        return __importDefault(dom_serializer_1).default;
      } });
    }
  });

  // node_modules/cheerio/lib/static.js
  var require_static = __commonJS({
    "node_modules/cheerio/lib/static.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.merge = exports.contains = exports.root = exports.parseHTML = exports.text = exports.xml = exports.html = void 0;
      var tslib_1 = require_tslib();
      var options_1 = tslib_1.__importStar(require_options());
      var cheerio_select_1 = require_lib8();
      var htmlparser2_1 = require_lib9();
      var parse5_adapter_1 = require_parse5_adapter();
      var htmlparser2_adapter_1 = require_htmlparser2_adapter();
      function render(that, dom, options) {
        var _a;
        var toRender = dom ? typeof dom === "string" ? cheerio_select_1.select(dom, (_a = that === null || that === void 0 ? void 0 : that._root) !== null && _a !== void 0 ? _a : [], options) : dom : that === null || that === void 0 ? void 0 : that._root.children;
        if (!toRender)
          return "";
        return options.xmlMode || options._useHtmlParser2 ? htmlparser2_adapter_1.render(toRender, options) : parse5_adapter_1.render(toRender);
      }
      function isOptions(dom) {
        return typeof dom === "object" && dom != null && !("length" in dom) && !("type" in dom);
      }
      function html(dom, options) {
        if (!options && isOptions(dom)) {
          options = dom;
          dom = void 0;
        }
        var opts = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, options_1.default), this ? this._options : {}), options_1.flatten(options !== null && options !== void 0 ? options : {}));
        return render(this || void 0, dom, opts);
      }
      exports.html = html;
      function xml(dom) {
        var options = tslib_1.__assign(tslib_1.__assign({}, this._options), { xmlMode: true });
        return render(this, dom, options);
      }
      exports.xml = xml;
      function text(elements) {
        var elems = elements ? elements : this ? this.root() : [];
        var ret = "";
        for (var i = 0; i < elems.length; i++) {
          var elem = elems[i];
          if (htmlparser2_1.DomUtils.isText(elem))
            ret += elem.data;
          else if (htmlparser2_1.DomUtils.hasChildren(elem) && elem.type !== htmlparser2_1.ElementType.Comment && elem.type !== htmlparser2_1.ElementType.Script && elem.type !== htmlparser2_1.ElementType.Style) {
            ret += text(elem.children);
          }
        }
        return ret;
      }
      exports.text = text;
      function parseHTML(data, context, keepScripts) {
        if (keepScripts === void 0) {
          keepScripts = typeof context === "boolean" ? context : false;
        }
        if (!data || typeof data !== "string") {
          return null;
        }
        if (typeof context === "boolean") {
          keepScripts = context;
        }
        var parsed = this.load(data, options_1.default, false);
        if (!keepScripts) {
          parsed("script").remove();
        }
        return parsed.root()[0].children.slice();
      }
      exports.parseHTML = parseHTML;
      function root() {
        return this(this._root);
      }
      exports.root = root;
      function contains(container, contained) {
        if (contained === container) {
          return false;
        }
        var next = contained;
        while (next && next !== next.parent) {
          next = next.parent;
          if (next === container) {
            return true;
          }
        }
        return false;
      }
      exports.contains = contains;
      function merge(arr1, arr2) {
        if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
          return;
        }
        var newLength = arr1.length;
        var len = +arr2.length;
        for (var i = 0; i < len; i++) {
          arr1[newLength++] = arr2[i];
        }
        arr1.length = newLength;
        return arr1;
      }
      exports.merge = merge;
      function isArrayLike(item) {
        if (Array.isArray(item)) {
          return true;
        }
        if (typeof item !== "object" || !Object.prototype.hasOwnProperty.call(item, "length") || typeof item.length !== "number" || item.length < 0) {
          return false;
        }
        for (var i = 0; i < item.length; i++) {
          if (!(i in item)) {
            return false;
          }
        }
        return true;
      }
    }
  });

  // node_modules/cheerio/lib/parse.js
  var require_parse3 = __commonJS({
    "node_modules/cheerio/lib/parse.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.update = void 0;
      var htmlparser2_1 = require_lib9();
      var htmlparser2_adapter_1 = require_htmlparser2_adapter();
      var parse5_adapter_1 = require_parse5_adapter();
      var domhandler_1 = require_lib2();
      function parse(content, options, isDocument) {
        if (typeof Buffer !== "undefined" && Buffer.isBuffer(content)) {
          content = content.toString();
        }
        if (typeof content === "string") {
          return options.xmlMode || options._useHtmlParser2 ? htmlparser2_adapter_1.parse(content, options) : parse5_adapter_1.parse(content, options, isDocument);
        }
        var doc = content;
        if (!Array.isArray(doc) && domhandler_1.isDocument(doc)) {
          return doc;
        }
        var root = new domhandler_1.Document([]);
        update2(doc, root);
        return root;
      }
      exports.default = parse;
      function update2(newChilds, parent) {
        var arr = Array.isArray(newChilds) ? newChilds : [newChilds];
        if (parent) {
          parent.children = arr;
        } else {
          parent = null;
        }
        for (var i = 0; i < arr.length; i++) {
          var node = arr[i];
          if (node.parent && node.parent.children !== arr) {
            htmlparser2_1.DomUtils.removeElement(node);
          }
          if (parent) {
            node.prev = arr[i - 1] || null;
            node.next = arr[i + 1] || null;
          } else {
            node.prev = node.next = null;
          }
          node.parent = parent;
        }
        return parent;
      }
      exports.update = update2;
    }
  });

  // node_modules/cheerio/lib/utils.js
  var require_utils = __commonJS({
    "node_modules/cheerio/lib/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.isHtml = exports.cloneDom = exports.domEach = exports.cssCase = exports.camelCase = exports.isCheerio = exports.isTag = void 0;
      var htmlparser2_1 = require_lib9();
      var domhandler_1 = require_lib2();
      exports.isTag = htmlparser2_1.DomUtils.isTag;
      function isCheerio(maybeCheerio) {
        return maybeCheerio.cheerio != null;
      }
      exports.isCheerio = isCheerio;
      function camelCase(str) {
        return str.replace(/[_.-](\w|$)/g, function(_, x) {
          return x.toUpperCase();
        });
      }
      exports.camelCase = camelCase;
      function cssCase(str) {
        return str.replace(/[A-Z]/g, "-$&").toLowerCase();
      }
      exports.cssCase = cssCase;
      function domEach(array, fn) {
        var len = array.length;
        for (var i = 0; i < len; i++)
          fn(array[i], i);
        return array;
      }
      exports.domEach = domEach;
      function cloneDom(dom) {
        var clone = "length" in dom ? Array.prototype.map.call(dom, function(el) {
          return domhandler_1.cloneNode(el, true);
        }) : [domhandler_1.cloneNode(dom, true)];
        var root = new domhandler_1.Document(clone);
        clone.forEach(function(node) {
          node.parent = root;
        });
        return clone;
      }
      exports.cloneDom = cloneDom;
      var quickExpr = /<[a-zA-Z][^]*>/;
      function isHtml(str) {
        return quickExpr.test(str);
      }
      exports.isHtml = isHtml;
    }
  });

  // node_modules/cheerio/lib/api/attributes.js
  var require_attributes2 = __commonJS({
    "node_modules/cheerio/lib/api/attributes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.toggleClass = exports.removeClass = exports.addClass = exports.hasClass = exports.removeAttr = exports.val = exports.data = exports.prop = exports.attr = void 0;
      var static_1 = require_static();
      var utils_1 = require_utils();
      var hasOwn = Object.prototype.hasOwnProperty;
      var rspace = /\s+/;
      var dataAttrPrefix = "data-";
      var primitives = {
        null: null,
        true: true,
        false: false
      };
      var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
      var rbrace = /^{[^]*}$|^\[[^]*]$/;
      function getAttr(elem, name, xmlMode) {
        var _a;
        if (!elem || !utils_1.isTag(elem))
          return void 0;
        (_a = elem.attribs) !== null && _a !== void 0 ? _a : elem.attribs = {};
        if (!name) {
          return elem.attribs;
        }
        if (hasOwn.call(elem.attribs, name)) {
          return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
        }
        if (elem.name === "option" && name === "value") {
          return static_1.text(elem.children);
        }
        if (elem.name === "input" && (elem.attribs.type === "radio" || elem.attribs.type === "checkbox") && name === "value") {
          return "on";
        }
        return void 0;
      }
      function setAttr(el, name, value) {
        if (value === null) {
          removeAttribute(el, name);
        } else {
          el.attribs[name] = "" + value;
        }
      }
      function attr(name, value) {
        if (typeof name === "object" || value !== void 0) {
          if (typeof value === "function") {
            if (typeof name !== "string") {
              {
                throw new Error("Bad combination of arguments.");
              }
            }
            return utils_1.domEach(this, function(el, i) {
              if (utils_1.isTag(el))
                setAttr(el, name, value.call(el, i, el.attribs[name]));
            });
          }
          return utils_1.domEach(this, function(el) {
            if (!utils_1.isTag(el))
              return;
            if (typeof name === "object") {
              Object.keys(name).forEach(function(objName) {
                var objValue = name[objName];
                setAttr(el, objName, objValue);
              });
            } else {
              setAttr(el, name, value);
            }
          });
        }
        return arguments.length > 1 ? this : getAttr(this[0], name, this.options.xmlMode);
      }
      exports.attr = attr;
      function getProp(el, name, xmlMode) {
        if (!el || !utils_1.isTag(el))
          return;
        return name in el ? el[name] : !xmlMode && rboolean.test(name) ? getAttr(el, name, false) !== void 0 : getAttr(el, name, xmlMode);
      }
      function setProp(el, name, value, xmlMode) {
        if (name in el) {
          el[name] = value;
        } else {
          setAttr(el, name, !xmlMode && rboolean.test(name) ? value ? "" : null : "" + value);
        }
      }
      function prop(name, value) {
        var _this = this;
        if (typeof name === "string" && value === void 0) {
          switch (name) {
            case "style": {
              var property_1 = this.css();
              var keys = Object.keys(property_1);
              keys.forEach(function(p, i) {
                property_1[i] = p;
              });
              property_1.length = keys.length;
              return property_1;
            }
            case "tagName":
            case "nodeName": {
              var el = this[0];
              return utils_1.isTag(el) ? el.name.toUpperCase() : void 0;
            }
            case "outerHTML":
              return this.clone().wrap("<container />").parent().html();
            case "innerHTML":
              return this.html();
            default:
              return getProp(this[0], name, this.options.xmlMode);
          }
        }
        if (typeof name === "object" || value !== void 0) {
          if (typeof value === "function") {
            if (typeof name === "object") {
              throw new Error("Bad combination of arguments.");
            }
            return utils_1.domEach(this, function(el2, i) {
              if (utils_1.isTag(el2))
                setProp(el2, name, value.call(el2, i, getProp(el2, name, _this.options.xmlMode)), _this.options.xmlMode);
            });
          }
          return utils_1.domEach(this, function(el2) {
            if (!utils_1.isTag(el2))
              return;
            if (typeof name === "object") {
              Object.keys(name).forEach(function(key) {
                var val2 = name[key];
                setProp(el2, key, val2, _this.options.xmlMode);
              });
            } else {
              setProp(el2, name, value, _this.options.xmlMode);
            }
          });
        }
        return void 0;
      }
      exports.prop = prop;
      function setData(el, name, value) {
        var _a;
        var elem = el;
        (_a = elem.data) !== null && _a !== void 0 ? _a : elem.data = {};
        if (typeof name === "object")
          Object.assign(elem.data, name);
        else if (typeof name === "string" && value !== void 0) {
          elem.data[name] = value;
        }
      }
      function readData(el, name) {
        var domNames;
        var jsNames;
        var value;
        if (name == null) {
          domNames = Object.keys(el.attribs).filter(function(attrName) {
            return attrName.startsWith(dataAttrPrefix);
          });
          jsNames = domNames.map(function(domName2) {
            return utils_1.camelCase(domName2.slice(dataAttrPrefix.length));
          });
        } else {
          domNames = [dataAttrPrefix + utils_1.cssCase(name)];
          jsNames = [name];
        }
        for (var idx = 0; idx < domNames.length; ++idx) {
          var domName = domNames[idx];
          var jsName = jsNames[idx];
          if (hasOwn.call(el.attribs, domName) && !hasOwn.call(el.data, jsName)) {
            value = el.attribs[domName];
            if (hasOwn.call(primitives, value)) {
              value = primitives[value];
            } else if (value === String(Number(value))) {
              value = Number(value);
            } else if (rbrace.test(value)) {
              try {
                value = JSON.parse(value);
              } catch (e) {
              }
            }
            el.data[jsName] = value;
          }
        }
        return name == null ? el.data : value;
      }
      function data(name, value) {
        var _a;
        var elem = this[0];
        if (!elem || !utils_1.isTag(elem))
          return;
        var dataEl = elem;
        (_a = dataEl.data) !== null && _a !== void 0 ? _a : dataEl.data = {};
        if (!name) {
          return readData(dataEl);
        }
        if (typeof name === "object" || value !== void 0) {
          utils_1.domEach(this, function(el) {
            if (utils_1.isTag(el))
              if (typeof name === "object")
                setData(el, name);
              else
                setData(el, name, value);
          });
          return this;
        }
        if (hasOwn.call(dataEl.data, name)) {
          return dataEl.data[name];
        }
        return readData(dataEl, name);
      }
      exports.data = data;
      function val(value) {
        var querying = arguments.length === 0;
        var element = this[0];
        if (!element || !utils_1.isTag(element))
          return querying ? void 0 : this;
        switch (element.name) {
          case "textarea":
            return this.text(value);
          case "select": {
            var option = this.find("option:selected");
            if (!querying) {
              if (this.attr("multiple") == null && typeof value === "object") {
                return this;
              }
              this.find("option").removeAttr("selected");
              var values = typeof value !== "object" ? [value] : value;
              for (var i = 0; i < values.length; i++) {
                this.find('option[value="' + values[i] + '"]').attr("selected", "");
              }
              return this;
            }
            return this.attr("multiple") ? option.toArray().map(function(el) {
              return static_1.text(el.children);
            }) : option.attr("value");
          }
          case "input":
          case "option":
            return querying ? this.attr("value") : this.attr("value", value);
        }
        return void 0;
      }
      exports.val = val;
      function removeAttribute(elem, name) {
        if (!elem.attribs || !hasOwn.call(elem.attribs, name))
          return;
        delete elem.attribs[name];
      }
      function splitNames(names) {
        return names ? names.trim().split(rspace) : [];
      }
      function removeAttr(name) {
        var attrNames = splitNames(name);
        var _loop_1 = function(i2) {
          utils_1.domEach(this_1, function(elem) {
            if (utils_1.isTag(elem))
              removeAttribute(elem, attrNames[i2]);
          });
        };
        var this_1 = this;
        for (var i = 0; i < attrNames.length; i++) {
          _loop_1(i);
        }
        return this;
      }
      exports.removeAttr = removeAttr;
      function hasClass(className) {
        return this.toArray().some(function(elem) {
          var clazz = utils_1.isTag(elem) && elem.attribs.class;
          var idx = -1;
          if (clazz && className.length) {
            while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
              var end = idx + className.length;
              if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end === clazz.length || rspace.test(clazz[end]))) {
                return true;
              }
            }
          }
          return false;
        });
      }
      exports.hasClass = hasClass;
      function addClass(value) {
        if (typeof value === "function") {
          return utils_1.domEach(this, function(el2, i2) {
            if (utils_1.isTag(el2)) {
              var className2 = el2.attribs.class || "";
              addClass.call([el2], value.call(el2, i2, className2));
            }
          });
        }
        if (!value || typeof value !== "string")
          return this;
        var classNames = value.split(rspace);
        var numElements = this.length;
        for (var i = 0; i < numElements; i++) {
          var el = this[i];
          if (!utils_1.isTag(el))
            continue;
          var className = getAttr(el, "class", false);
          if (!className) {
            setAttr(el, "class", classNames.join(" ").trim());
          } else {
            var setClass = " " + className + " ";
            for (var j = 0; j < classNames.length; j++) {
              var appendClass = classNames[j] + " ";
              if (!setClass.includes(" " + appendClass))
                setClass += appendClass;
            }
            setAttr(el, "class", setClass.trim());
          }
        }
        return this;
      }
      exports.addClass = addClass;
      function removeClass(name) {
        if (typeof name === "function") {
          return utils_1.domEach(this, function(el, i) {
            if (utils_1.isTag(el))
              removeClass.call([el], name.call(el, i, el.attribs.class || ""));
          });
        }
        var classes = splitNames(name);
        var numClasses = classes.length;
        var removeAll = arguments.length === 0;
        return utils_1.domEach(this, function(el) {
          if (!utils_1.isTag(el))
            return;
          if (removeAll) {
            el.attribs.class = "";
          } else {
            var elClasses = splitNames(el.attribs.class);
            var changed = false;
            for (var j = 0; j < numClasses; j++) {
              var index = elClasses.indexOf(classes[j]);
              if (index >= 0) {
                elClasses.splice(index, 1);
                changed = true;
                j--;
              }
            }
            if (changed) {
              el.attribs.class = elClasses.join(" ");
            }
          }
        });
      }
      exports.removeClass = removeClass;
      function toggleClass(value, stateVal) {
        if (typeof value === "function") {
          return utils_1.domEach(this, function(el2, i2) {
            if (utils_1.isTag(el2)) {
              toggleClass.call([el2], value.call(el2, i2, el2.attribs.class || "", stateVal), stateVal);
            }
          });
        }
        if (!value || typeof value !== "string")
          return this;
        var classNames = value.split(rspace);
        var numClasses = classNames.length;
        var state = typeof stateVal === "boolean" ? stateVal ? 1 : -1 : 0;
        var numElements = this.length;
        for (var i = 0; i < numElements; i++) {
          var el = this[i];
          if (!utils_1.isTag(el))
            continue;
          var elementClasses = splitNames(el.attribs.class);
          for (var j = 0; j < numClasses; j++) {
            var index = elementClasses.indexOf(classNames[j]);
            if (state >= 0 && index < 0) {
              elementClasses.push(classNames[j]);
            } else if (state <= 0 && index >= 0) {
              elementClasses.splice(index, 1);
            }
          }
          el.attribs.class = elementClasses.join(" ");
        }
        return this;
      }
      exports.toggleClass = toggleClass;
    }
  });

  // node_modules/cheerio/lib/api/traversing.js
  var require_traversing = __commonJS({
    "node_modules/cheerio/lib/api/traversing.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.addBack = exports.add = exports.end = exports.slice = exports.index = exports.toArray = exports.get = exports.eq = exports.last = exports.first = exports.has = exports.not = exports.is = exports.filterArray = exports.filter = exports.map = exports.each = exports.contents = exports.children = exports.siblings = exports.prevUntil = exports.prevAll = exports.prev = exports.nextUntil = exports.nextAll = exports.next = exports.closest = exports.parentsUntil = exports.parents = exports.parent = exports.find = void 0;
      var tslib_1 = require_tslib();
      var domhandler_1 = require_lib2();
      var select = tslib_1.__importStar(require_lib8());
      var utils_1 = require_utils();
      var static_1 = require_static();
      var htmlparser2_1 = require_lib9();
      var uniqueSort = htmlparser2_1.DomUtils.uniqueSort;
      var reSiblingSelector = /^\s*[~+]/;
      function find(selectorOrHaystack) {
        var _a;
        if (!selectorOrHaystack) {
          return this._make([]);
        }
        var context = this.toArray();
        if (typeof selectorOrHaystack !== "string") {
          var haystack = utils_1.isCheerio(selectorOrHaystack) ? selectorOrHaystack.toArray() : [selectorOrHaystack];
          return this._make(haystack.filter(function(elem) {
            return context.some(function(node) {
              return static_1.contains(node, elem);
            });
          }));
        }
        var elems = reSiblingSelector.test(selectorOrHaystack) ? context : this.children().toArray();
        var options = {
          context,
          root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
          xmlMode: this.options.xmlMode
        };
        return this._make(select.select(selectorOrHaystack, elems, options));
      }
      exports.find = find;
      function _getMatcher(matchMap) {
        return function(fn) {
          var postFns = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            postFns[_i - 1] = arguments[_i];
          }
          return function(selector) {
            var _a;
            var matched = matchMap(fn, this);
            if (selector) {
              matched = filterArray(matched, selector, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]);
            }
            return this._make(this.length > 1 && matched.length > 1 ? postFns.reduce(function(elems, fn2) {
              return fn2(elems);
            }, matched) : matched);
          };
        };
      }
      var _matcher = _getMatcher(function(fn, elems) {
        var _a;
        var ret = [];
        for (var i = 0; i < elems.length; i++) {
          var value = fn(elems[i]);
          ret.push(value);
        }
        return (_a = new Array()).concat.apply(_a, ret);
      });
      var _singleMatcher = _getMatcher(function(fn, elems) {
        var ret = [];
        for (var i = 0; i < elems.length; i++) {
          var value = fn(elems[i]);
          if (value !== null) {
            ret.push(value);
          }
        }
        return ret;
      });
      function _matchUntil(nextElem) {
        var postFns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
          postFns[_i - 1] = arguments[_i];
        }
        var matches = null;
        var innerMatcher = _getMatcher(function(nextElem2, elems) {
          var matched = [];
          utils_1.domEach(elems, function(elem) {
            for (var next_1; next_1 = nextElem2(elem); elem = next_1) {
              if (matches === null || matches === void 0 ? void 0 : matches(next_1, matched.length))
                break;
              matched.push(next_1);
            }
          });
          return matched;
        }).apply(void 0, tslib_1.__spreadArray([nextElem], postFns));
        return function(selector, filterSelector) {
          var _this = this;
          matches = typeof selector === "string" ? function(elem) {
            return select.is(elem, selector, _this.options);
          } : selector ? getFilterFn(selector) : null;
          var ret = innerMatcher.call(this, filterSelector);
          matches = null;
          return ret;
        };
      }
      function _removeDuplicates(elems) {
        return Array.from(new Set(elems));
      }
      exports.parent = _singleMatcher(function(_a) {
        var parent = _a.parent;
        return parent && !domhandler_1.isDocument(parent) ? parent : null;
      }, _removeDuplicates);
      exports.parents = _matcher(function(elem) {
        var matched = [];
        while (elem.parent && !domhandler_1.isDocument(elem.parent)) {
          matched.push(elem.parent);
          elem = elem.parent;
        }
        return matched;
      }, uniqueSort, function(elems) {
        return elems.reverse();
      });
      exports.parentsUntil = _matchUntil(function(_a) {
        var parent = _a.parent;
        return parent && !domhandler_1.isDocument(parent) ? parent : null;
      }, uniqueSort, function(elems) {
        return elems.reverse();
      });
      function closest(selector) {
        var _this = this;
        var set = [];
        if (!selector) {
          return this._make(set);
        }
        utils_1.domEach(this, function(elem) {
          var _a;
          while (elem && elem.type !== "root") {
            if (!selector || filterArray([elem], selector, _this.options.xmlMode, (_a = _this._root) === null || _a === void 0 ? void 0 : _a[0]).length) {
              if (elem && !set.includes(elem)) {
                set.push(elem);
              }
              break;
            }
            elem = elem.parent;
          }
        });
        return this._make(set);
      }
      exports.closest = closest;
      exports.next = _singleMatcher(function(elem) {
        return htmlparser2_1.DomUtils.nextElementSibling(elem);
      });
      exports.nextAll = _matcher(function(elem) {
        var matched = [];
        while (elem.next) {
          elem = elem.next;
          if (utils_1.isTag(elem))
            matched.push(elem);
        }
        return matched;
      }, _removeDuplicates);
      exports.nextUntil = _matchUntil(function(el) {
        return htmlparser2_1.DomUtils.nextElementSibling(el);
      }, _removeDuplicates);
      exports.prev = _singleMatcher(function(elem) {
        return htmlparser2_1.DomUtils.prevElementSibling(elem);
      });
      exports.prevAll = _matcher(function(elem) {
        var matched = [];
        while (elem.prev) {
          elem = elem.prev;
          if (utils_1.isTag(elem))
            matched.push(elem);
        }
        return matched;
      }, _removeDuplicates);
      exports.prevUntil = _matchUntil(function(el) {
        return htmlparser2_1.DomUtils.prevElementSibling(el);
      }, _removeDuplicates);
      exports.siblings = _matcher(function(elem) {
        return htmlparser2_1.DomUtils.getSiblings(elem).filter(function(el) {
          return utils_1.isTag(el) && el !== elem;
        });
      }, uniqueSort);
      exports.children = _matcher(function(elem) {
        return htmlparser2_1.DomUtils.getChildren(elem).filter(utils_1.isTag);
      }, _removeDuplicates);
      function contents() {
        var elems = this.toArray().reduce(function(newElems, elem) {
          return domhandler_1.hasChildren(elem) ? newElems.concat(elem.children) : newElems;
        }, []);
        return this._make(elems);
      }
      exports.contents = contents;
      function each(fn) {
        var i = 0;
        var len = this.length;
        while (i < len && fn.call(this[i], i, this[i]) !== false)
          ++i;
        return this;
      }
      exports.each = each;
      function map(fn) {
        var elems = [];
        for (var i = 0; i < this.length; i++) {
          var el = this[i];
          var val = fn.call(el, i, el);
          if (val != null) {
            elems = elems.concat(val);
          }
        }
        return this._make(elems);
      }
      exports.map = map;
      function getFilterFn(match) {
        if (typeof match === "function") {
          return function(el, i) {
            return match.call(el, i, el);
          };
        }
        if (utils_1.isCheerio(match)) {
          return function(el) {
            return Array.prototype.includes.call(match, el);
          };
        }
        return function(el) {
          return match === el;
        };
      }
      function filter(match) {
        var _a;
        return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]));
      }
      exports.filter = filter;
      function filterArray(nodes, match, xmlMode, root) {
        return typeof match === "string" ? select.filter(match, nodes, { xmlMode, root }) : nodes.filter(getFilterFn(match));
      }
      exports.filterArray = filterArray;
      function is(selector) {
        var nodes = this.toArray();
        return typeof selector === "string" ? select.some(nodes.filter(utils_1.isTag), selector, this.options) : selector ? nodes.some(getFilterFn(selector)) : false;
      }
      exports.is = is;
      function not(match) {
        var nodes = this.toArray();
        if (typeof match === "string") {
          var matches_1 = new Set(select.filter(match, nodes, this.options));
          nodes = nodes.filter(function(el) {
            return !matches_1.has(el);
          });
        } else {
          var filterFn_1 = getFilterFn(match);
          nodes = nodes.filter(function(el, i) {
            return !filterFn_1(el, i);
          });
        }
        return this._make(nodes);
      }
      exports.not = not;
      function has(selectorOrHaystack) {
        var _this = this;
        return this.filter(typeof selectorOrHaystack === "string" ? ":has(" + selectorOrHaystack + ")" : function(_, el) {
          return _this._make(el).find(selectorOrHaystack).length > 0;
        });
      }
      exports.has = has;
      function first() {
        return this.length > 1 ? this._make(this[0]) : this;
      }
      exports.first = first;
      function last() {
        return this.length > 0 ? this._make(this[this.length - 1]) : this;
      }
      exports.last = last;
      function eq(i) {
        var _a;
        i = +i;
        if (i === 0 && this.length <= 1)
          return this;
        if (i < 0)
          i = this.length + i;
        return this._make((_a = this[i]) !== null && _a !== void 0 ? _a : []);
      }
      exports.eq = eq;
      function get(i) {
        if (i == null) {
          return this.toArray();
        }
        return this[i < 0 ? this.length + i : i];
      }
      exports.get = get;
      function toArray() {
        return Array.prototype.slice.call(this);
      }
      exports.toArray = toArray;
      function index(selectorOrNeedle) {
        var $haystack;
        var needle;
        if (selectorOrNeedle == null) {
          $haystack = this.parent().children();
          needle = this[0];
        } else if (typeof selectorOrNeedle === "string") {
          $haystack = this._make(selectorOrNeedle);
          needle = this[0];
        } else {
          $haystack = this;
          needle = utils_1.isCheerio(selectorOrNeedle) ? selectorOrNeedle[0] : selectorOrNeedle;
        }
        return Array.prototype.indexOf.call($haystack, needle);
      }
      exports.index = index;
      function slice(start, end2) {
        return this._make(Array.prototype.slice.call(this, start, end2));
      }
      exports.slice = slice;
      function end() {
        var _a;
        return (_a = this.prevObject) !== null && _a !== void 0 ? _a : this._make([]);
      }
      exports.end = end;
      function add(other, context) {
        var selection = this._make(other, context);
        var contents2 = uniqueSort(tslib_1.__spreadArray(tslib_1.__spreadArray([], this.get()), selection.get()));
        return this._make(contents2);
      }
      exports.add = add;
      function addBack(selector) {
        return this.prevObject ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject) : this;
      }
      exports.addBack = addBack;
    }
  });

  // node_modules/cheerio/lib/api/manipulation.js
  var require_manipulation2 = __commonJS({
    "node_modules/cheerio/lib/api/manipulation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.clone = exports.text = exports.toString = exports.html = exports.empty = exports.replaceWith = exports.remove = exports.insertBefore = exports.before = exports.insertAfter = exports.after = exports.wrapAll = exports.unwrap = exports.wrapInner = exports.wrap = exports.prepend = exports.append = exports.prependTo = exports.appendTo = exports._makeDomArray = void 0;
      var tslib_1 = require_tslib();
      var domhandler_1 = require_lib2();
      var domhandler_2 = require_lib2();
      var parse_1 = tslib_1.__importStar(require_parse3());
      var static_1 = require_static();
      var utils_1 = require_utils();
      var htmlparser2_1 = require_lib9();
      function _makeDomArray(elem, clone2) {
        var _this = this;
        if (elem == null) {
          return [];
        }
        if (utils_1.isCheerio(elem)) {
          return clone2 ? utils_1.cloneDom(elem.get()) : elem.get();
        }
        if (Array.isArray(elem)) {
          return elem.reduce(function(newElems, el) {
            return newElems.concat(_this._makeDomArray(el, clone2));
          }, []);
        }
        if (typeof elem === "string") {
          return parse_1.default(elem, this.options, false).children;
        }
        return clone2 ? utils_1.cloneDom([elem]) : [elem];
      }
      exports._makeDomArray = _makeDomArray;
      function _insert(concatenator) {
        return function() {
          var _this = this;
          var elems = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            elems[_i] = arguments[_i];
          }
          var lastIdx = this.length - 1;
          return utils_1.domEach(this, function(el, i) {
            if (!domhandler_1.hasChildren(el))
              return;
            var domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, static_1.html(el.children)) : elems;
            var dom = _this._makeDomArray(domSrc, i < lastIdx);
            concatenator(dom, el.children, el);
          });
        };
      }
      function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
        var _a, _b;
        var spliceArgs = tslib_1.__spreadArray([
          spliceIdx,
          spliceCount
        ], newElems);
        var prev = array[spliceIdx - 1] || null;
        var next = array[spliceIdx + spliceCount] || null;
        for (var idx = 0; idx < newElems.length; ++idx) {
          var node = newElems[idx];
          var oldParent = node.parent;
          if (oldParent) {
            var prevIdx = oldParent.children.indexOf(newElems[idx]);
            if (prevIdx > -1) {
              oldParent.children.splice(prevIdx, 1);
              if (parent === oldParent && spliceIdx > prevIdx) {
                spliceArgs[0]--;
              }
            }
          }
          node.parent = parent;
          if (node.prev) {
            node.prev.next = (_a = node.next) !== null && _a !== void 0 ? _a : null;
          }
          if (node.next) {
            node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
          }
          node.prev = newElems[idx - 1] || prev;
          node.next = newElems[idx + 1] || next;
        }
        if (prev) {
          prev.next = newElems[0];
        }
        if (next) {
          next.prev = newElems[newElems.length - 1];
        }
        return array.splice.apply(array, spliceArgs);
      }
      function appendTo(target) {
        var appendTarget = utils_1.isCheerio(target) ? target : this._make(target);
        appendTarget.append(this);
        return this;
      }
      exports.appendTo = appendTo;
      function prependTo(target) {
        var prependTarget = utils_1.isCheerio(target) ? target : this._make(target);
        prependTarget.prepend(this);
        return this;
      }
      exports.prependTo = prependTo;
      exports.append = _insert(function(dom, children, parent) {
        uniqueSplice(children, children.length, 0, dom, parent);
      });
      exports.prepend = _insert(function(dom, children, parent) {
        uniqueSplice(children, 0, 0, dom, parent);
      });
      function _wrap(insert) {
        return function(wrapper) {
          var lastIdx = this.length - 1;
          var lastParent = this.parents().last();
          for (var i = 0; i < this.length; i++) {
            var el = this[i];
            var wrap_1 = typeof wrapper === "function" ? wrapper.call(el, i, el) : typeof wrapper === "string" && !utils_1.isHtml(wrapper) ? lastParent.find(wrapper).clone() : wrapper;
            var wrapperDom = this._makeDomArray(wrap_1, i < lastIdx)[0];
            if (!wrapperDom || !htmlparser2_1.DomUtils.hasChildren(wrapperDom))
              continue;
            var elInsertLocation = wrapperDom;
            var j = 0;
            while (j < elInsertLocation.children.length) {
              var child = elInsertLocation.children[j];
              if (utils_1.isTag(child)) {
                elInsertLocation = child;
                j = 0;
              } else {
                j++;
              }
            }
            insert(el, elInsertLocation, [wrapperDom]);
          }
          return this;
        };
      }
      exports.wrap = _wrap(function(el, elInsertLocation, wrapperDom) {
        var parent = el.parent;
        if (!parent)
          return;
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        parse_1.update([el], elInsertLocation);
        uniqueSplice(siblings, index, 0, wrapperDom, parent);
      });
      exports.wrapInner = _wrap(function(el, elInsertLocation, wrapperDom) {
        if (!domhandler_1.hasChildren(el))
          return;
        parse_1.update(el.children, elInsertLocation);
        parse_1.update(wrapperDom, el);
      });
      function unwrap(selector) {
        var _this = this;
        this.parent(selector).not("body").each(function(_, el) {
          _this._make(el).replaceWith(el.children);
        });
        return this;
      }
      exports.unwrap = unwrap;
      function wrapAll(wrapper) {
        var el = this[0];
        if (el) {
          var wrap_2 = this._make(typeof wrapper === "function" ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
          var elInsertLocation = void 0;
          for (var i = 0; i < wrap_2.length; i++) {
            if (wrap_2[i].type === "tag")
              elInsertLocation = wrap_2[i];
          }
          var j = 0;
          while (elInsertLocation && j < elInsertLocation.children.length) {
            var child = elInsertLocation.children[j];
            if (child.type === "tag") {
              elInsertLocation = child;
              j = 0;
            } else {
              j++;
            }
          }
          if (elInsertLocation)
            this._make(elInsertLocation).append(this);
        }
        return this;
      }
      exports.wrapAll = wrapAll;
      function after() {
        var _this = this;
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          elems[_i] = arguments[_i];
        }
        var lastIdx = this.length - 1;
        return utils_1.domEach(this, function(el, i) {
          var parent = el.parent;
          if (!htmlparser2_1.DomUtils.hasChildren(el) || !parent) {
            return;
          }
          var siblings = parent.children;
          var index = siblings.indexOf(el);
          if (index < 0)
            return;
          var domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, static_1.html(el.children)) : elems;
          var dom = _this._makeDomArray(domSrc, i < lastIdx);
          uniqueSplice(siblings, index + 1, 0, dom, parent);
        });
      }
      exports.after = after;
      function insertAfter(target) {
        var _this = this;
        if (typeof target === "string") {
          target = this._make(target);
        }
        this.remove();
        var clones = [];
        this._makeDomArray(target).forEach(function(el) {
          var clonedSelf = _this.clone().toArray();
          var parent = el.parent;
          if (!parent) {
            return;
          }
          var siblings = parent.children;
          var index = siblings.indexOf(el);
          if (index < 0)
            return;
          uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
          clones.push.apply(clones, clonedSelf);
        });
        return this._make(clones);
      }
      exports.insertAfter = insertAfter;
      function before() {
        var _this = this;
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          elems[_i] = arguments[_i];
        }
        var lastIdx = this.length - 1;
        return utils_1.domEach(this, function(el, i) {
          var parent = el.parent;
          if (!htmlparser2_1.DomUtils.hasChildren(el) || !parent) {
            return;
          }
          var siblings = parent.children;
          var index = siblings.indexOf(el);
          if (index < 0)
            return;
          var domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, static_1.html(el.children)) : elems;
          var dom = _this._makeDomArray(domSrc, i < lastIdx);
          uniqueSplice(siblings, index, 0, dom, parent);
        });
      }
      exports.before = before;
      function insertBefore(target) {
        var _this = this;
        var targetArr = this._make(target);
        this.remove();
        var clones = [];
        utils_1.domEach(targetArr, function(el) {
          var clonedSelf = _this.clone().toArray();
          var parent = el.parent;
          if (!parent) {
            return;
          }
          var siblings = parent.children;
          var index = siblings.indexOf(el);
          if (index < 0)
            return;
          uniqueSplice(siblings, index, 0, clonedSelf, parent);
          clones.push.apply(clones, clonedSelf);
        });
        return this._make(clones);
      }
      exports.insertBefore = insertBefore;
      function remove(selector) {
        var elems = selector ? this.filter(selector) : this;
        utils_1.domEach(elems, function(el) {
          htmlparser2_1.DomUtils.removeElement(el);
          el.prev = el.next = el.parent = null;
        });
        return this;
      }
      exports.remove = remove;
      function replaceWith(content) {
        var _this = this;
        return utils_1.domEach(this, function(el, i) {
          var parent = el.parent;
          if (!parent) {
            return;
          }
          var siblings = parent.children;
          var cont = typeof content === "function" ? content.call(el, i, el) : content;
          var dom = _this._makeDomArray(cont);
          parse_1.update(dom, null);
          var index = siblings.indexOf(el);
          uniqueSplice(siblings, index, 1, dom, parent);
          if (!dom.includes(el)) {
            el.parent = el.prev = el.next = null;
          }
        });
      }
      exports.replaceWith = replaceWith;
      function empty() {
        return utils_1.domEach(this, function(el) {
          if (!htmlparser2_1.DomUtils.hasChildren(el))
            return;
          el.children.forEach(function(child) {
            child.next = child.prev = child.parent = null;
          });
          el.children.length = 0;
        });
      }
      exports.empty = empty;
      function html(str) {
        if (str === void 0) {
          var el = this[0];
          if (!el || !htmlparser2_1.DomUtils.hasChildren(el))
            return null;
          return static_1.html(el.children, this.options);
        }
        var opts = tslib_1.__assign(tslib_1.__assign({}, this.options), { context: null });
        return utils_1.domEach(this, function(el2) {
          if (!htmlparser2_1.DomUtils.hasChildren(el2))
            return;
          el2.children.forEach(function(child) {
            child.next = child.prev = child.parent = null;
          });
          opts.context = el2;
          var content = utils_1.isCheerio(str) ? str.toArray() : parse_1.default("" + str, opts, false).children;
          parse_1.update(content, el2);
        });
      }
      exports.html = html;
      function toString() {
        return static_1.html(this, this.options);
      }
      exports.toString = toString;
      function text(str) {
        var _this = this;
        if (str === void 0) {
          return static_1.text(this);
        }
        if (typeof str === "function") {
          return utils_1.domEach(this, function(el, i) {
            text.call(_this._make(el), str.call(el, i, static_1.text([el])));
          });
        }
        return utils_1.domEach(this, function(el) {
          if (!htmlparser2_1.DomUtils.hasChildren(el))
            return;
          el.children.forEach(function(child) {
            child.next = child.prev = child.parent = null;
          });
          var textNode = new domhandler_2.Text(str);
          parse_1.update(textNode, el);
        });
      }
      exports.text = text;
      function clone() {
        return this._make(utils_1.cloneDom(this.get()));
      }
      exports.clone = clone;
    }
  });

  // node_modules/cheerio/lib/api/css.js
  var require_css = __commonJS({
    "node_modules/cheerio/lib/api/css.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.css = void 0;
      var utils_1 = require_utils();
      function css(prop, val) {
        if (prop != null && val != null || typeof prop === "object" && !Array.isArray(prop)) {
          return utils_1.domEach(this, function(el, i) {
            if (utils_1.isTag(el)) {
              setCss(el, prop, val, i);
            }
          });
        }
        return getCss(this[0], prop);
      }
      exports.css = css;
      function setCss(el, prop, value, idx) {
        if (typeof prop === "string") {
          var styles = getCss(el);
          var val = typeof value === "function" ? value.call(el, idx, styles[prop]) : value;
          if (val === "") {
            delete styles[prop];
          } else if (val != null) {
            styles[prop] = val;
          }
          el.attribs.style = stringify(styles);
        } else if (typeof prop === "object") {
          Object.keys(prop).forEach(function(k, i) {
            setCss(el, k, prop[k], i);
          });
        }
      }
      function getCss(el, prop) {
        if (!el || !utils_1.isTag(el))
          return;
        var styles = parse(el.attribs.style);
        if (typeof prop === "string") {
          return styles[prop];
        }
        if (Array.isArray(prop)) {
          var newStyles_1 = {};
          prop.forEach(function(item) {
            if (styles[item] != null) {
              newStyles_1[item] = styles[item];
            }
          });
          return newStyles_1;
        }
        return styles;
      }
      function stringify(obj) {
        return Object.keys(obj).reduce(function(str, prop) {
          return "" + str + (str ? " " : "") + prop + ": " + obj[prop] + ";";
        }, "");
      }
      function parse(styles) {
        styles = (styles || "").trim();
        if (!styles)
          return {};
        return styles.split(";").reduce(function(obj, str) {
          var n = str.indexOf(":");
          if (n < 1 || n === str.length - 1)
            return obj;
          obj[str.slice(0, n).trim()] = str.slice(n + 1).trim();
          return obj;
        }, {});
      }
    }
  });

  // node_modules/cheerio/lib/api/forms.js
  var require_forms = __commonJS({
    "node_modules/cheerio/lib/api/forms.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.serializeArray = exports.serialize = void 0;
      var utils_1 = require_utils();
      var submittableSelector = "input,select,textarea,keygen";
      var r20 = /%20/g;
      var rCRLF = /\r?\n/g;
      function serialize() {
        var arr = this.serializeArray();
        var retArr = arr.map(function(data) {
          return encodeURIComponent(data.name) + "=" + encodeURIComponent(data.value);
        });
        return retArr.join("&").replace(r20, "+");
      }
      exports.serialize = serialize;
      function serializeArray() {
        var _this = this;
        return this.map(function(_, elem) {
          var $elem = _this._make(elem);
          if (utils_1.isTag(elem) && elem.name === "form") {
            return $elem.find(submittableSelector).toArray();
          }
          return $elem.filter(submittableSelector).toArray();
        }).filter('[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))').map(function(_, elem) {
          var _a;
          var $elem = _this._make(elem);
          var name = $elem.attr("name");
          var value = (_a = $elem.val()) !== null && _a !== void 0 ? _a : "";
          if (Array.isArray(value)) {
            return value.map(function(val) {
              return { name, value: val.replace(rCRLF, "\r\n") };
            });
          }
          return { name, value: value.replace(rCRLF, "\r\n") };
        }).toArray();
      }
      exports.serializeArray = serializeArray;
    }
  });

  // node_modules/cheerio/lib/cheerio.js
  var require_cheerio = __commonJS({
    "node_modules/cheerio/lib/cheerio.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.Cheerio = void 0;
      var tslib_1 = require_tslib();
      var parse_1 = tslib_1.__importDefault(require_parse3());
      var options_1 = tslib_1.__importDefault(require_options());
      var utils_1 = require_utils();
      var Attributes = tslib_1.__importStar(require_attributes2());
      var Traversing = tslib_1.__importStar(require_traversing());
      var Manipulation = tslib_1.__importStar(require_manipulation2());
      var Css = tslib_1.__importStar(require_css());
      var Forms = tslib_1.__importStar(require_forms());
      var Cheerio = function() {
        function Cheerio2(selector, context, root, options) {
          var _this = this;
          if (options === void 0) {
            options = options_1.default;
          }
          this.length = 0;
          this.options = options;
          if (!selector)
            return this;
          if (root) {
            if (typeof root === "string")
              root = parse_1.default(root, this.options, false);
            this._root = new this.constructor(root, null, null, this.options);
            this._root._root = this._root;
          }
          if (utils_1.isCheerio(selector))
            return selector;
          var elements = typeof selector === "string" && utils_1.isHtml(selector) ? parse_1.default(selector, this.options, false).children : isNode(selector) ? [selector] : Array.isArray(selector) ? selector : null;
          if (elements) {
            elements.forEach(function(elem, idx) {
              _this[idx] = elem;
            });
            this.length = elements.length;
            return this;
          }
          var search = selector;
          var searchContext = !context ? this._root : typeof context === "string" ? utils_1.isHtml(context) ? this._make(parse_1.default(context, this.options, false)) : (search = context + " " + search, this._root) : utils_1.isCheerio(context) ? context : this._make(context);
          if (!searchContext)
            return this;
          return searchContext.find(search);
        }
        Cheerio2.prototype._make = function(dom, context) {
          var cheerio2 = new this.constructor(dom, context, this._root, this.options);
          cheerio2.prevObject = this;
          return cheerio2;
        };
        return Cheerio2;
      }();
      exports.Cheerio = Cheerio;
      Cheerio.prototype.cheerio = "[cheerio object]";
      Cheerio.prototype.splice = Array.prototype.splice;
      Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
      Object.assign(Cheerio.prototype, Attributes, Traversing, Manipulation, Css, Forms);
      function isNode(obj) {
        return !!obj.name || obj.type === "root" || obj.type === "text" || obj.type === "comment";
      }
    }
  });

  // node_modules/cheerio/lib/load.js
  var require_load = __commonJS({
    "node_modules/cheerio/lib/load.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.load = void 0;
      var tslib_1 = require_tslib();
      var options_1 = tslib_1.__importStar(require_options());
      var staticMethods = tslib_1.__importStar(require_static());
      var cheerio_1 = require_cheerio();
      var parse_1 = tslib_1.__importDefault(require_parse3());
      function load(content, options, isDocument) {
        if (isDocument === void 0) {
          isDocument = true;
        }
        if (content == null) {
          throw new Error("cheerio.load() expects a string");
        }
        var internalOpts = tslib_1.__assign(tslib_1.__assign({}, options_1.default), options_1.flatten(options));
        var root = parse_1.default(content, internalOpts, isDocument);
        var LoadedCheerio = function(_super) {
          tslib_1.__extends(LoadedCheerio2, _super);
          function LoadedCheerio2() {
            return _super !== null && _super.apply(this, arguments) || this;
          }
          return LoadedCheerio2;
        }(cheerio_1.Cheerio);
        function initialize(selector, context, r, opts) {
          if (r === void 0) {
            r = root;
          }
          return new LoadedCheerio(selector, context, r, tslib_1.__assign(tslib_1.__assign({}, internalOpts), options_1.flatten(opts)));
        }
        Object.assign(initialize, staticMethods, {
          load,
          _root: root,
          _options: internalOpts,
          fn: LoadedCheerio.prototype,
          prototype: LoadedCheerio.prototype
        });
        return initialize;
      }
      exports.load = load;
    }
  });

  // node_modules/cheerio/lib/index.js
  var require_lib12 = __commonJS({
    "node_modules/cheerio/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.root = exports.parseHTML = exports.merge = exports.contains = void 0;
      var tslib_1 = require_tslib();
      tslib_1.__exportStar(require_types(), exports);
      tslib_1.__exportStar(require_load(), exports);
      var load_1 = require_load();
      exports.default = load_1.load([]);
      var staticMethods = tslib_1.__importStar(require_static());
      exports.contains = staticMethods.contains;
      exports.merge = staticMethods.merge;
      exports.parseHTML = staticMethods.parseHTML;
      exports.root = staticMethods.root;
    }
  });

  // node_modules/string-similarity/src/index.js
  var require_src = __commonJS({
    "node_modules/string-similarity/src/index.js"(exports, module) {
      module.exports = {
        compareTwoStrings,
        findBestMatch
      };
      function compareTwoStrings(first, second) {
        first = first.replace(/\s+/g, "");
        second = second.replace(/\s+/g, "");
        if (first === second)
          return 1;
        if (first.length < 2 || second.length < 2)
          return 0;
        let firstBigrams = /* @__PURE__ */ new Map();
        for (let i = 0; i < first.length - 1; i++) {
          const bigram = first.substring(i, i + 2);
          const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) + 1 : 1;
          firstBigrams.set(bigram, count);
        }
        ;
        let intersectionSize = 0;
        for (let i = 0; i < second.length - 1; i++) {
          const bigram = second.substring(i, i + 2);
          const count = firstBigrams.has(bigram) ? firstBigrams.get(bigram) : 0;
          if (count > 0) {
            firstBigrams.set(bigram, count - 1);
            intersectionSize++;
          }
        }
        return 2 * intersectionSize / (first.length + second.length - 2);
      }
      function findBestMatch(mainString, targetStrings) {
        if (!areArgsValid(mainString, targetStrings))
          throw new Error("Bad arguments: First argument should be a string, second should be an array of strings");
        const ratings = [];
        let bestMatchIndex = 0;
        for (let i = 0; i < targetStrings.length; i++) {
          const currentTargetString = targetStrings[i];
          const currentRating = compareTwoStrings(mainString, currentTargetString);
          ratings.push({ target: currentTargetString, rating: currentRating });
          if (currentRating > ratings[bestMatchIndex].rating) {
            bestMatchIndex = i;
          }
        }
        const bestMatch = ratings[bestMatchIndex];
        return { ratings, bestMatch, bestMatchIndex };
      }
      function areArgsValid(mainString, targetStrings) {
        if (typeof mainString !== "string")
          return false;
        if (!Array.isArray(targetStrings))
          return false;
        if (!targetStrings.length)
          return false;
        if (targetStrings.find(function(s) {
          return typeof s !== "string";
        }))
          return false;
        return true;
      }
    }
  });

  // src/rym.tsx
  var import_cheerio = __toESM(require_lib12());

  // src/utils.ts
  var import_string_similarity = __toESM(require_src());
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async function fetch(url) {
    const cosmosReq = () => new Promise((resolve, reject) => {
      const request = JSON.stringify({
        method: "GET",
        uri: url
      });
      window.sendCosmosRequest({
        request,
        persistent: false,
        onSuccess: resolve,
        onFailure: reject
      });
    });
    const data = await cosmosReq();
    return JSON.parse(data);
  }
  async function log(...args) {
    console.log("[RYM]", ...args);
  }
  var MIN_SIMILARITY = 1;
  function matchLower(str1, str2) {
    const similarity = import_string_similarity.default.compareTwoStrings(str1.toLowerCase(), str2.toLowerCase());
    return similarity >= MIN_SIMILARITY;
  }

  // src/rym.tsx
  var ApiError = class extends Error {
    constructor(message) {
      super(message);
    }
  };
  async function getArtistPage(song) {
    const url = `https://duckduckgo.com/?q=%5Csite%3Arateyourmusic.com ${song.artist}`;
    const res = await fetch(url);
    const reg = /\?uddg=(.*?)&rut=/;
    const rymUrl = decodeURIComponent(res.body.match(reg)[1]);
    return rymUrl;
  }
  function parseRYMData($, elem) {
    const link = elem.find("a").first().attr("href");
    const bolded = elem.children().first().is("b");
    const release = elem.parent().parent();
    const ratingElem = release.find(".disco_avg_rating").first();
    const enoughData = $(ratingElem).hasClass("enough_data");
    const rating = ratingElem.text();
    const ratings = release.find(".disco_ratings").first().text();
    return {
      link: `https://rateyourmusic.com${link}`,
      ratings,
      enoughData,
      rating,
      bolded
    };
  }
  async function getRating(rymUrl, song) {
    const res = await fetch(rymUrl);
    const $ = import_cheerio.default.load(res.body);
    const rating_types = [
      ["#disco_type_i", "Single", song.title],
      ["#disco_type_s", "Album", song.album],
      ["#disco_type_e", "EP", song.album],
      ["#disco_type_m", "Mixtape", song.album],
      ["#disco_type_c", "Compilation", song.album],
      ["#disco_type_l", "Live Album", song.album]
    ];
    for (const [selector, ratingType, search] of rating_types) {
      const matches = $(selector).find("div.disco_mainline").filter((i, e) => matchLower($(e).text().trim(), search));
      if (matches.length > 0) {
        return __spreadProps(__spreadValues({}, parseRYMData($, matches)), {
          ratingType
        });
      }
    }
    throw new ApiError("Couldn't find the song or album in the artist's page");
  }
  async function fetchRYMData(title, artist, album) {
    const song = {
      title,
      artist,
      album
    };
    song.title = song.title.split("(feat.)")[0];
    song.title = song.title.split(" - feat.")[0];
    song.title = song.title.split(" feat.")[0];
    song.title = song.title.split(" - Remastered")[0];
    song.album = song.album.split(" - Remastered")[0];
    const rymUrl = await getArtistPage(song);
    log("Got artist page", rymUrl);
    return getRating(rymUrl, song);
  }

  // src/app.tsx
  var { Player } = Spicetify;
  var lastTrack;
  var ratingContainer;
  var infoContainer;
  function clearRating() {
    if (infoContainer && ratingContainer) {
      try {
        infoContainer.removeChild(ratingContainer);
      } catch (e) {
      }
    }
  }
  async function update() {
    var _a, _b;
    if (!Player.data.playback_id || !((_b = (_a = Player.data) == null ? void 0 : _a.track) == null ? void 0 : _b.metadata))
      return;
    const id = Player.data.playback_id;
    if (id == lastTrack)
      return;
    infoContainer = document.querySelector("div.main-trackInfo-container");
    if (!infoContainer)
      return;
    clearRating();
    lastTrack = id;
    const { title, album_title, artist_name } = Player.data.track.metadata;
    if (!title || !album_title || !artist_name)
      return;
    try {
      const rating = await fetchRYMData(title, artist_name, album_title);
      if (id != lastTrack) {
        return;
      }
      log("Got rating", rating);
      ratingContainer = document.createElement("a");
      ratingContainer.className = "ellipsis-one-line";
      ratingContainer.style.color = "var(--spice-extratext)";
      ratingContainer.style.fontSize = "11px";
      if (!rating.enoughData)
        ratingContainer.style.opacity = "0.5";
      ratingContainer.href = rating.link;
      ratingContainer.innerText = `${rating.rating} (${rating.ratings} ratings)`;
      if (rating.ratingType != "Single")
        ratingContainer.innerText += ` (${rating.ratingType.toLowerCase()})`;
      if (rating.bolded)
        ratingContainer.style.fontWeight = "bold";
      infoContainer.appendChild(ratingContainer);
    } catch (e) {
      if (e instanceof ApiError) {
        log("Failed to get RYM rating:", e.message);
        log(e);
      } else {
        log("Unknown error", e);
      }
    }
  }
  async function main() {
    while (!Spicetify.CosmosAsync || !Spicetify.showNotification)
      await sleep(500);
    Player.addEventListener("songchange", update);
    Player.addEventListener("onprogress", update);
  }

  // node_modules/spicetify-creator/dist/temp/index.jsx
  (async () => {
    await main();
  })();
})();
