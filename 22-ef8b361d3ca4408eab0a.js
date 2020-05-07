(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{727:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return B}));var t=s(613),p=s.n(t),e=s(607),o=s.n(e),c=s(608),l=s.n(c),u=s(609),i=s.n(u),k=s(610),r=s.n(k),d=s(290),f=s.n(d),m=s(611),g=s.n(m),h=s(612),v=s.n(h),y=s(0),w=s.n(y),b=s(113),x=s(83),E=function(){return w.a.createElement(x.eb,{style:{margin:"10px 0"}},w.a.createElement(x.bb,{span:8},w.a.createElement(x.j,{type:"primary",size:"large"},"Index")),w.a.createElement(x.bb,{span:8,offset:8},w.a.createElement(x.a,{offsetTop:135},w.a.createElement(x.j,{type:"primary",size:"large"},"Affix"))))},A=function(){var n=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),v()(f()(s),"state",{text:"Affix"}),v()(f()(s),"onPin",(function(){s.setState({text:"Pinned"})})),v()(f()(s),"onUnpin",(function(){s.setState({text:"Unpinned"})})),s}return g()(a,n),l()(a,[{key:"render",value:function(){return w.a.createElement(x.a,{offsetTop:200,onPin:this.onPin,onUnpin:this.onUnpin},w.a.createElement(x.b,{type:"warning"},this.state.text))}}]),a}(w.a.Component);return w.a.createElement(n,null)},z=function(){return w.a.createElement("div",{className:"affix-demo-bottom"},w.a.createElement(x.a,{offsetBottom:60},w.a.createElement(x.b,{type:"warning"},w.a.createElement("p",null,"set offset bottom"))))},N=function(){return w.a.createElement("div",{className:"affix-demo-both"},w.a.createElement(x.a,{offsetBottom:150,offsetTop:50},w.a.createElement(x.b,{type:"warning"},w.a.createElement("p",null,"Set offsetTop and offsetBottom"))))};function C(n){return w.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return w.a.createElement(C,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function T(n){return w.a.createElement(C,{tag:"style",html:n.style})}var _=function(n){function a(){var n,s;o()(this,a);for(var t=arguments.length,p=new Array(t),e=0;e<t;e++)p[e]=arguments[e];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),v()(f()(s),"state",{showCode:!1}),v()(f()(s),"toggle",(function(){s.setState({showCode:!s.state.showCode})})),s}return g()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(C,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),B=function(n){function a(){return o()(this,a),i()(this,r()(a).apply(this,arguments))}return g()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(b.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(T,{style:""}),w.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#affix">¶</a><a href="javascript:void(0)" id="affix" class="anchor-point"></a>Affix</h2>\n<p>Pin element in a specific position.</p>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),w.a.createElement(_,{title:"Using offsetTop to set offset from viewport's top",id:"Demooffsettop",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> LayoutRow <span class="token keyword">as</span> Row<span class="token punctuation">,</span> LayoutCol <span class="token keyword">as</span> Col<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>Row style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> margin<span class="token punctuation">:</span> <span class="token string">\'10px 0\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        Index\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">135</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          Affix\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(E)),w.a.createElement(_,{title:"Set callback function",id:"Democallback",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> <span class="token string">\'Affix\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onPin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'Pinned\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function-variable function">onUnpin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> text<span class="token punctuation">:</span> <span class="token string">\'Unpinned\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">200</span><span class="token punctuation">}</span></span> <span class="token attr-name">onPin</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPin<span class="token punctuation">}</span></span> <span class="token attr-name">onUnpin</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onUnpin<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(A)),w.a.createElement(_,{title:"Using offsetBottom to set offset from viewport's bottom",id:"Demooffsetbottom",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>affix-demo-bottom<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">60</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token keyword">set</span> offset bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(_,{title:"Set offsetTop and offsetBottom",id:"Demoboth",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Affix<span class="token punctuation">,</span> Alert <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>affix-demo-both<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Affix</span> <span class="token attr-name">offsetBottom</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">150</span><span class="token punctuation">}</span></span> <span class="token attr-name">offsetTop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">50</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Alert</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Set offsetTop and offsetBottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Alert</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Affix</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(N)),w.a.createElement(j,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n<th>Alternative</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>offsetTop</td>\n<td>Offset to the top of the viewport</td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>offsetBottom</td>\n<td>Offset to the bottom of the viewport</td>\n<td><code>number</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onPin</td>\n<td>Callback when affix pins</td>\n<td><code>() => void</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onUnpin</td>\n<td>Callback when affix unpins</td>\n<td><code>() => void</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>zIndex</td>\n<td>Pin \n<code>z-index</code></td>\n<td><code>number</code></td>\n<td>10</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>Extra class name</td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>placeholderClassName</td>\n<td>Placeholder container class name</td>\n<td><code>string</code></td>\n<td><code>\'\'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p>Note: at least one of <code>offsetTop</code> and <code>offsetBottom</code> must be set; you can set both at the same time but you\'re warned of bizarre things that may happen if window height is too small.</p>'}))}}]),a}(y.Component)}}]);