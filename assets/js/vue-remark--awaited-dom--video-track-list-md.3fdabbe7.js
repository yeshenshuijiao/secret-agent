(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{695:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},791:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(695),i=r(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:n.a},d=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===o(s[e])&&"function"==typeof s[e].render?t[e]=s[e]:r[e]=function(){return s[e]}}))},c=i.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",h={excerpt:null,title:"VideoTrackList"};var l=function(e){e.options[v]&&(e.options[v]=h),i.a.util.defineReactive(e.options,v,h),e.options.computed=c.computed({$frontmatter:function(){return e.options[v]}},e.options.computed)},u=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"videotracklist"}},[r("a",{attrs:{href:"#videotracklist","aria-hidden":"true"}},[e._v("#")]),e._v("VideoTrackList")]),r("div",{staticClass:"overview"},[r("span",{staticClass:"seoSummary"},[e._v("The "),r("strong",[r("code",[e._v("VideoTrackList")])]),e._v(" interface is used to represent a list of the video tracks contained within a "),r("a",{attrs:{href:"/en-US/docs/Web/HTML/Element/video",title:"The&nbsp;HTML Video element&nbsp;(<video>) embeds a media player which supports video playback into the document.&nbsp;You can use&nbsp;<video>&nbsp;for audio content as well, but the <audio> element may provide a more appropriate user experience."}},[r("code",[e._v("<video>")])]),e._v(" element, with each track represented by a separate "),r("a",{attrs:{href:"/en-US/docs/Web/API/VideoTrack",title:"The VideoTrack interface represents a single video track from a <video> element."}},[r("code",[e._v("VideoTrack")])]),e._v(" object in the list.")])]),r("div",{staticClass:"overview"},[e._v("Retrieve an instance of this object with "),r("a",{attrs:{href:"/en-US/docs/Web/API/HTMLMediaElement/videoTracks",title:"The read-only videoTracks property on HTMLMediaElement objects returns a VideoTrackList object listing all of the VideoTrack objects representing the media element's video tracks."}},[r("code",[e._v("HTMLMediaElement.videoTracks")])]),e._v(". The individual tracks can be accessed using array syntax or functions such as "),r("a",{attrs:{href:"/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",title:"The forEach() method executes a provided function once for each array element."}},[r("code",[e._v("forEach()")])]),e._v(" for example.")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"length"}},[r("a",{attrs:{href:"#length","aria-hidden":"true"}},[e._v("#")]),e._v(".length "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The number of tracks in the list.")]),r("h4",{attrs:{id:"type-null"}},[r("a",{attrs:{href:"#type-null","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"onaddtrack"}},[r("a",{attrs:{href:"#onaddtrack","aria-hidden":"true"}},[e._v("#")]),e._v(".onaddtrack "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An event handler to be called when the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/Events/addtrack",title:"/en-US/docs/Web/Events/addtrack"}},[e._v("addtrack")])]),e._v(" event is fired, indicating that a new video track has been added to the media element.")]),r("h4",{attrs:{id:"type-null-1"}},[r("a",{attrs:{href:"#type-null-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"onchange"}},[r("a",{attrs:{href:"#onchange","aria-hidden":"true"}},[e._v("#")]),e._v(".onchange "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An event handler to be called when the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/Events/change",title:"/en-US/docs/Web/Events/change"}},[e._v("change")])]),e._v(" event occurs — that is, when the value of the "),r("a",{attrs:{href:"/en-US/docs/Web/API/VideoTrack/selected",title:"The VideoTrack property selected controls whether or not a particular video track is active."}},[r("code",[e._v("selected")])]),e._v(" property for a track has changed, due to the track being made active or inactive.")]),r("h4",{attrs:{id:"type-null-2"}},[r("a",{attrs:{href:"#type-null-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"onremovetrack"}},[r("a",{attrs:{href:"#onremovetrack","aria-hidden":"true"}},[e._v("#")]),e._v(".onremovetrack "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("An event handler to call when the "),r("code",[r("a",{attrs:{href:"/en-US/docs/Web/Events/removetrack",title:"/en-US/docs/Web/Events/removetrack"}},[e._v("removetrack")])]),e._v(" event is sent, indicating that a video track has been removed from the media element.")]),r("h4",{attrs:{id:"type-null-3"}},[r("a",{attrs:{href:"#type-null-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h3",{attrs:{id:"selectedIndex"}},[r("a",{attrs:{href:"#selectedIndex","aria-hidden":"true"}},[e._v("#")]),e._v(".selectedIndex "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The index of the currently selected track, if any, or "),r("code",[e._v("−1\n")]),e._v(" otherwise.")]),r("h4",{attrs:{id:"type-null-4"}},[r("a",{attrs:{href:"#type-null-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("null")])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"getTrackById"}},[r("a",{attrs:{href:"#getTrackById","aria-hidden":"true"}},[e._v("#")]),e._v(".getTrackById"),r("em",[e._v("(...args)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the "),r("a",{attrs:{href:"/en-US/docs/Web/API/VideoTrack",title:"The VideoTrack interface represents a single video track from a <video> element."}},[r("code",[e._v("VideoTrack")])]),e._v(" found within the "),r("code",[e._v("VideoTrackList")]),e._v(" whose "),r("a",{attrs:{href:"/en-US/docs/Web/API/VideoTrack/id",title:"The id property contains a string which uniquely identifies the track represented by the VideoTrack."}},[r("code",[e._v("id")])]),e._v(" matches the specified string. If no match is found, "),r("code",[e._v("null\n")]),e._v(" is returned.")]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("none")])]),r("h4",{attrs:{id:"returns-promisevoid"}},[r("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])])])}),[],!1,null,null,null);"function"==typeof d&&d(u),"function"==typeof l&&l(u);t.default=u.exports}}]);