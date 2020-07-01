(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{695:function(t,e,r){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},985:function(t,e,r){"use strict";r.r(e);var a=r(1),i=r(695),s=r(0);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var o={VueRemarkRoot:i.a},d=function(t){var e=t.options.components=t.options.components||{},r=t.options.computed=t.options.computed||{};Object.keys(o).forEach((function(t){"object"===n(o[t])&&"function"==typeof o[t].render?e[t]=o[t]:r[t]=function(){return o[t]}}))},c=s.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",v={excerpt:null,title:"CharacterData"};var u=function(t){t.options[h]&&(t.options[h]=v),s.a.util.defineReactive(t.options,h,v),t.options.computed=c.computed({$frontmatter:function(){return t.options[h]}},t.options.computed)},p=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VueRemarkRoot",[r("h1",{attrs:{id:"characterdata"}},[r("a",{attrs:{href:"#characterdata","aria-hidden":"true"}},[t._v("#")]),t._v("CharacterData")]),r("div",{staticClass:"overview"},[t._v("The "),r("code",[r("strong",[t._v("CharacterData")])]),t._v(" abstract interface represents a "),r("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[r("code",[t._v("Node")])]),t._v(" object that contains characters. This is an abstract interface, meaning there aren't any object of type "),r("code",[t._v("CharacterData")]),t._v(": it is implemented by other interfaces, like "),r("a",{attrs:{href:"/en-US/docs/Web/API/Text",title:"The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children."}},[r("code",[t._v("Text")])]),t._v(", "),r("a",{attrs:{href:"/en-US/docs/Web/API/Comment",title:"The Comment interface represents textual notations within markup; although it is generally not visually shown, such comments are available to be read in the source view."}},[r("code",[t._v("Comment")])]),t._v(", or "),r("a",{attrs:{href:"/en-US/docs/Web/API/ProcessingInstruction",title:"The ProcessingInstruction interface represents a processing instruction; that is, a Node which embeds an instruction targeting a specific application but that can be ignored by any other applications which don't recognize the instruction."}},[r("code",[t._v("ProcessingInstruction")])]),t._v(" which aren't abstract.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[t._v("#")]),t._v("Properties")]),r("h3",{attrs:{id:"data"}},[r("a",{attrs:{href:"#data","aria-hidden":"true"}},[t._v("#")]),t._v(".data "),r("div",{staticClass:"specs"},[r("i",[t._v("W3C")])])]),r("p",[t._v("Is a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[t._v("DOMString")])]),t._v(" representing the textual data contained in this object.")]),r("h4",{attrs:{id:"type-null"}},[r("a",{attrs:{href:"#type-null","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Type")]),t._v(": "),r("code",{pre:!0},[t._v("null")])]),r("h3",{attrs:{id:"length"}},[r("a",{attrs:{href:"#length","aria-hidden":"true"}},[t._v("#")]),t._v(".length "),r("div",{staticClass:"specs"},[r("i",[t._v("W3C")])])]),r("p",[t._v("Returns an "),r("code",[t._v("unsigned long")]),t._v(" representing the size of the string contained in "),r("code",[t._v("CharacterData.data\n")]),t._v(".")]),r("h4",{attrs:{id:"type-null-1"}},[r("a",{attrs:{href:"#type-null-1","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Type")]),t._v(": "),r("code",{pre:!0},[t._v("null")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v("Methods")]),r("h3",{attrs:{id:"appendData"}},[r("a",{attrs:{href:"#appendData","aria-hidden":"true"}},[t._v("#")]),t._v(".appendData"),r("em",[t._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[t._v("W3C")])])]),r("p",[t._v("Appends the given "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[t._v("DOMString")])]),t._v(" to the "),r("code",[t._v("CharacterData.data")]),t._v(" string; when this method returns, "),r("code",[t._v("data")]),t._v(" contains the concatenated "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[t._v("DOMString")])]),t._v(".")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Arguments")]),t._v(":")]),r("ul",[r("li",[t._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid"}},[r("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Returns")]),t._v(": "),r("code",{pre:!0},[t._v("Promise<void>")])]),r("h3",{attrs:{id:"deleteData"}},[r("a",{attrs:{href:"#deleteData","aria-hidden":"true"}},[t._v("#")]),t._v(".deleteData"),r("em",[t._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[t._v("W3C")])])]),r("p",[t._v("Removes the specified amount of characters, starting at the specified offset, from the "),r("code",[t._v("CharacterData.data")]),t._v(" string; when this method returns, "),r("code",[t._v("data")]),t._v(" contains the shortened "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[t._v("DOMString")])]),t._v(".")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Arguments")]),t._v(":")]),r("ul",[r("li",[t._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-1"}},[r("a",{attrs:{href:"#returns-promisevoid-1","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Returns")]),t._v(": "),r("code",{pre:!0},[t._v("Promise<void>")])]),r("h3",{attrs:{id:"insertData"}},[r("a",{attrs:{href:"#insertData","aria-hidden":"true"}},[t._v("#")]),t._v(".insertData"),r("em",[t._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[t._v("W3C")])])]),r("p",[t._v("Inserts the specified characters, at the specified offset, in the "),r("code",[t._v("CharacterData.data")]),t._v(" string; when this method returns, "),r("code",[t._v("data")]),t._v(" contains the modified "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[t._v("DOMString")])]),t._v(".")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Arguments")]),t._v(":")]),r("ul",[r("li",[t._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-2"}},[r("a",{attrs:{href:"#returns-promisevoid-2","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Returns")]),t._v(": "),r("code",{pre:!0},[t._v("Promise<void>")])]),r("h3",{attrs:{id:"replaceData"}},[r("a",{attrs:{href:"#replaceData","aria-hidden":"true"}},[t._v("#")]),t._v(".replaceData"),r("em",[t._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[t._v("W3C")])])]),r("p",[t._v("Replaces the specified amount of characters, starting at the specified offset, with the specified "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[t._v("DOMString")])]),t._v("; when this method returns, "),r("code",[t._v("data")]),t._v(" contains the modified "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[t._v("DOMString")])]),t._v(".")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Arguments")]),t._v(":")]),r("ul",[r("li",[t._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-3"}},[r("a",{attrs:{href:"#returns-promisevoid-3","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Returns")]),t._v(": "),r("code",{pre:!0},[t._v("Promise<void>")])]),r("h3",{attrs:{id:"substringData"}},[r("a",{attrs:{href:"#substringData","aria-hidden":"true"}},[t._v("#")]),t._v(".substringData"),r("em",[t._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[t._v("W3C")])])]),r("p",[t._v("Returns a "),r("a",{attrs:{href:"/en-US/docs/Web/API/DOMString",title:"DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."}},[r("code",[t._v("DOMString")])]),t._v(" containing the part of "),r("code",[t._v("CharacterData.data\n")]),t._v(" of the specified length and starting at the specified offset.")]),r("h4",{attrs:{id:"arguments-4"}},[r("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Arguments")]),t._v(":")]),r("ul",[r("li",[t._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid-4"}},[r("a",{attrs:{href:"#returns-promisevoid-4","aria-hidden":"true"}},[t._v("#")]),r("strong",[t._v("Returns")]),t._v(": "),r("code",{pre:!0},[t._v("Promise<void>")])])])}),[],!1,null,null,null);"function"==typeof d&&d(p),"function"==typeof u&&u(p);e.default=p.exports}}]);