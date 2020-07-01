(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{695:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},991:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(695),o=n(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.a.config.optionMergeStrategies;var i={VueRemarkRoot:r.a},c=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:n[e]=function(){return i[e]}}))},d=o.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",l={excerpt:null,title:"AbstractRange"};var f=function(e){e.options[h]&&(e.options[h]=l),o.a.util.defineReactive(e.options,h,l),e.options.computed=d.computed({$frontmatter:function(){return e.options[h]}},e.options.computed)},p=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("VueRemarkRoot",[n("h1",{attrs:{id:"abstractrange"}},[n("a",{attrs:{href:"#abstractrange","aria-hidden":"true"}},[e._v("#")]),e._v("AbstractRange")]),n("div",{staticClass:"overview"},[n("span",{staticClass:"seoSummary"},[e._v("The "),n("strong",[n("code",[e._v("AbstractRange")])]),e._v(" abstract interface is the base class upon which all "),n("a",{staticClass:"glossaryLink",attrs:{href:"/en-US/docs/Glossary/DOM",title:"DOM: The DOM (Document Object Model) is an API that represents and interacts with any HTML or XML document. The DOM is a document model loaded in the browser and representing the document as a node tree, where each node represents part of the document (e.g. an element, text string, or comment)."}},[e._v("DOM")]),e._v(" range types are defined. A "),n("strong",[e._v("range")]),e._v(" is an object that indicates the start and end points of a section of content within the document.")])]),n("div",{staticClass:"overview"},[e._v("As an abstract interface, you will not directly instantiate an object of type "),n("code",[e._v("AbstractRange")]),e._v(". Instead, you will use the "),n("a",{attrs:{href:"/en-US/docs/Web/API/Range",title:"The Range interface represents a fragment of a document that can contain nodes and parts of text nodes."}},[n("code",[e._v("Range")])]),e._v(" or "),n("a",{attrs:{href:"/en-US/docs/Web/API/StaticRange",title:"The DOM&nbsp;StaticRange interface extends AbstractRange to provide a method to specify a range of content in the DOM whose contents don't update to reflect changes which occur within the DOM tree."}},[n("code",[e._v("StaticRange")])]),e._v(" interfaces. To understand the difference between those two interfaces, and how to choose which is appropriate for your needs.")]),n("h2",{attrs:{id:"properties"}},[n("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),n("h3",{attrs:{id:"collapsed"}},[n("a",{attrs:{href:"#collapsed","aria-hidden":"true"}},[e._v("#")]),e._v(".collapsed "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("A Boolean value which is "),n("code",[e._v("true")]),e._v(" if the range is "),n("strong",[e._v("collapsed\n")]),e._v(". A collapsed range is one whose start position and end position are the same, resulting in a zero-character-long range.")]),n("h4",{attrs:{id:"type-null"}},[n("a",{attrs:{href:"#type-null","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("null")])]),n("h3",{attrs:{id:"endContainer"}},[n("a",{attrs:{href:"#endContainer","aria-hidden":"true"}},[e._v("#")]),e._v(".endContainer "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("The DOM "),n("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[n("code",[e._v("Node")])]),e._v(" in which the end of the range, as specified by the "),n("code",[e._v("endOffset\n")]),e._v(" property, is located.")]),n("h4",{attrs:{id:"type-null-1"}},[n("a",{attrs:{href:"#type-null-1","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("null")])]),n("h3",{attrs:{id:"endOffset"}},[n("a",{attrs:{href:"#endOffset","aria-hidden":"true"}},[e._v("#")]),e._v(".endOffset "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("An integer value indicating the offset, in characters, from the beginning of the node's contents to the beginning of the range represented by the range object. This value must be less than the length of the "),n("code",[e._v("endContainer\n")]),e._v(" node.")]),n("h4",{attrs:{id:"type-null-2"}},[n("a",{attrs:{href:"#type-null-2","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("null")])]),n("h3",{attrs:{id:"startContainer"}},[n("a",{attrs:{href:"#startContainer","aria-hidden":"true"}},[e._v("#")]),e._v(".startContainer "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("The DOM "),n("a",{attrs:{href:"/en-US/docs/Web/API/Node",title:"Node is an interface from which various types of DOM API objects inherit, allowing those types to be treated similarly; for example, inheriting the same set of methods, or being testable in the same way."}},[n("code",[e._v("Node")])]),e._v(" in which the beginning of the range, as specified by the "),n("code",[e._v("startOffset\n")]),e._v(" property, is located.")]),n("h4",{attrs:{id:"type-null-3"}},[n("a",{attrs:{href:"#type-null-3","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("null")])]),n("h3",{attrs:{id:"startOffset"}},[n("a",{attrs:{href:"#startOffset","aria-hidden":"true"}},[e._v("#")]),e._v(".startOffset "),n("div",{staticClass:"specs"},[n("i",[e._v("W3C")])])]),n("p",[e._v("An integer value indicating the offset, in characters, from the beginning of the node's contents to the last character of the contents referred to  by the range object. This value must be less than the length of the node indicated in "),n("code",[e._v("startContainer\n")]),e._v(".")]),n("h4",{attrs:{id:"type-null-4"}},[n("a",{attrs:{href:"#type-null-4","aria-hidden":"true"}},[e._v("#")]),n("strong",[e._v("Type")]),e._v(": "),n("code",{pre:!0},[e._v("null")])])])}),[],!1,null,null,null);"function"==typeof c&&c(p),"function"==typeof f&&f(p);t.default=p.exports}}]);