"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var n = require("react/jsx-runtime"),
  e = function (e) {
    var t = e.title,
      i = void 0 === t ? "This is test button" : t;
    return n.jsx(n.Fragment, {
      children: n.jsx("div", {
        className:
          "w-max h-[3rem] px-[1rem] mt-[2rem] transition-all duration-300 flex justify-center items-center border-red-300 border-[2px] border-dashed hover:border-solid ",
        children: n.jsx("p", { children: i }),
      }),
    });
  };
!(function (n, e) {
  void 0 === e && (e = {});
  var t = e.insertAt;
  if (n && "undefined" != typeof document) {
    var i = document.head || document.getElementsByTagName("head")[0],
      o = document.createElement("style");
    (o.type = "text/css"),
      "top" === t && i.firstChild
        ? i.insertBefore(o, i.firstChild)
        : i.appendChild(o),
      o.styleSheet
        ? (o.styleSheet.cssText = n)
        : o.appendChild(document.createTextNode(n));
  }
})(
  '/*! tailwindcss v4.1.3 | MIT License | https://tailwindcss.com */\n@layer properties;\n@layer theme, base, components, utilities;\n@layer theme {\n  :root, :host {\n    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",\n      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",\n      "Courier New", monospace;\n    --color-red-300: oklch(80.8% 0.114 19.571);\n    --default-transition-duration: 150ms;\n    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    --default-font-family: var(--font-sans);\n    --default-mono-font-family: var(--font-mono);\n  }\n}\n@layer base {\n  *, ::after, ::before, ::backdrop, ::file-selector-button {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0 solid;\n  }\n  html, :host {\n    line-height: 1.5;\n    -webkit-text-size-adjust: 100%;\n    tab-size: 4;\n    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");\n    font-feature-settings: var(--default-font-feature-settings, normal);\n    font-variation-settings: var(--default-font-variation-settings, normal);\n    -webkit-tap-highlight-color: transparent;\n  }\n  hr {\n    height: 0;\n    color: inherit;\n    border-top-width: 1px;\n  }\n  abbr:where([title]) {\n    -webkit-text-decoration: underline dotted;\n    text-decoration: underline dotted;\n  }\n  h1, h2, h3, h4, h5, h6 {\n    font-size: inherit;\n    font-weight: inherit;\n  }\n  a {\n    color: inherit;\n    -webkit-text-decoration: inherit;\n    text-decoration: inherit;\n  }\n  b, strong {\n    font-weight: bolder;\n  }\n  code, kbd, samp, pre {\n    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);\n    font-feature-settings: var(--default-mono-font-feature-settings, normal);\n    font-variation-settings: var(--default-mono-font-variation-settings, normal);\n    font-size: 1em;\n  }\n  small {\n    font-size: 80%;\n  }\n  sub, sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  sub {\n    bottom: -0.25em;\n  }\n  sup {\n    top: -0.5em;\n  }\n  table {\n    text-indent: 0;\n    border-color: inherit;\n    border-collapse: collapse;\n  }\n  :-moz-focusring {\n    outline: auto;\n  }\n  progress {\n    vertical-align: baseline;\n  }\n  summary {\n    display: list-item;\n  }\n  ol, ul, menu {\n    list-style: none;\n  }\n  img, svg, video, canvas, audio, iframe, embed, object {\n    display: block;\n    vertical-align: middle;\n  }\n  img, video {\n    max-width: 100%;\n    height: auto;\n  }\n  button, input, select, optgroup, textarea, ::file-selector-button {\n    font: inherit;\n    font-feature-settings: inherit;\n    font-variation-settings: inherit;\n    letter-spacing: inherit;\n    color: inherit;\n    border-radius: 0;\n    background-color: transparent;\n    opacity: 1;\n  }\n  :where(select:is([multiple], [size])) optgroup {\n    font-weight: bolder;\n  }\n  :where(select:is([multiple], [size])) optgroup option {\n    padding-inline-start: 20px;\n  }\n  ::file-selector-button {\n    margin-inline-end: 4px;\n  }\n  ::placeholder {\n    opacity: 1;\n  }\n  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {\n    ::placeholder {\n      color: currentcolor;\n      @supports (color: color-mix(in lab, red, red)) {\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n      }\n    }\n  }\n  textarea {\n    resize: vertical;\n  }\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  ::-webkit-date-and-time-value {\n    min-height: 1lh;\n    text-align: inherit;\n  }\n  ::-webkit-datetime-edit {\n    display: inline-flex;\n  }\n  ::-webkit-datetime-edit-fields-wrapper {\n    padding: 0;\n  }\n  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {\n    padding-block: 0;\n  }\n  :-moz-ui-invalid {\n    box-shadow: none;\n  }\n  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {\n    appearance: button;\n  }\n  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {\n    height: auto;\n  }\n  [hidden]:where(:not([hidden="until-found"])) {\n    display: none !important;\n  }\n}\n@layer utilities {\n  .styles_mt---2rem--__xFNuU {\n    margin-top: 2rem;\n  }\n  .styles_flex__RdrWr {\n    display: flex;\n  }\n  .styles_table__jKkja {\n    display: table;\n  }\n  .styles_h---3rem--__qSRu3 {\n    height: 3rem;\n  }\n  .styles_w-max__Az7F7 {\n    width: max-content;\n  }\n  .styles_border-collapse__e5dsx {\n    border-collapse: collapse;\n  }\n  .styles_resize__xPcF7 {\n    resize: both;\n  }\n  .styles_items-center__0IbnA {\n    align-items: center;\n  }\n  .styles_justify-center__H37Ij {\n    justify-content: center;\n  }\n  .styles_border__y3J9u {\n    border-style: var(--tw-border-style);\n    border-width: 1px;\n  }\n  .styles_border---2px--__5nvW9 {\n    border-style: var(--tw-border-style);\n    border-width: 2px;\n  }\n  .styles_border-dashed__sAVV5 {\n    --tw-border-style: dashed;\n    border-style: dashed;\n  }\n  .styles_border-red-300__cpfMP {\n    border-color: var(--color-red-300);\n  }\n  .styles_px---1rem--__tcqwp {\n    padding-inline: 1rem;\n  }\n  .styles_underline__QDfrG {\n    text-decoration-line: underline;\n  }\n  .styles_outline__KJrmQ {\n    outline-style: var(--tw-outline-style);\n    outline-width: 1px;\n  }\n  .styles_transition-all__crhU4 {\n    transition-property: all;\n    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));\n    transition-duration: var(--tw-duration, var(--default-transition-duration));\n  }\n  .styles_duration-300__K7Jwd {\n    --tw-duration: 300ms;\n    transition-duration: 300ms;\n  }\n  .styles_hover--border-solid__REwfN {\n    &:hover {\n      @media (hover: hover) {\n        --tw-border-style: solid;\n        border-style: solid;\n      }\n    }\n  }\n}\n@property --tw-border-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-outline-style {\n  syntax: "*";\n  inherits: false;\n  initial-value: solid;\n}\n@property --tw-duration {\n  syntax: "*";\n  inherits: false;\n}\n@layer properties {\n  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {\n    *, ::before, ::after, ::backdrop {\n      --tw-border-style: solid;\n      --tw-outline-style: solid;\n      --tw-duration: initial;\n    }\n  }\n}\r\n'
),
  (exports.TestButton = e),
  (exports.default = e);
//# sourceMappingURL=index.cjs.js.map
