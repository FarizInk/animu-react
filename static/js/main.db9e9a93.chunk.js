(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5305:function(e,t,a){e.exports=a(5353)},5347:function(e,t,a){},5348:function(e,t,a){},5349:function(e,t,a){},5350:function(e,t,a){},5353:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a(15),l=(a(5310),a(20)),i=a(21),p=a(23),m=a(22),u=a(24),s=a(85),d=a(5354),g=a(5382),h=a(5383),E=a(5355),b=a(5384),f=a(5395),y=a(5398),v=a(42),O=a(32),j=Object(d.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}),N={color:"white",textDecoration:"none"},k={color:"black",textDecoration:"none",textTransform:"uppercase",fontWeight:500},T=Object(O.b)(function(e){return{data:e}})(function(e){var t=j(),a=r.a.useState(null),n=Object(s.a)(a,2),o=n[0],l=n[1],i=Boolean(o);function p(){l(null)}return r.a.createElement("div",{className:t.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(h.a,null,r.a.createElement(E.a,{variant:"h6",className:t.title},r.a.createElement(c.b,{to:"/",style:N},"ANIMU")),r.a.createElement("div",null,r.a.createElement(b.a,{"aria-label":"More","aria-controls":"expand-more","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(v.c,null)),r.a.createElement(f.a,{id:"expand-more",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:p},r.a.createElement(c.b,{to:"/top/".concat(e.data.top.type,"/").concat(e.data.top.page),style:k},r.a.createElement(y.a,{onClick:p},"Top")),r.a.createElement(c.b,{to:"/schedule",style:k},r.a.createElement(y.a,{onClick:p},"Schedule")),r.a.createElement(c.b,{to:"/genre",style:k},r.a.createElement(y.a,{onClick:p},"Genre")),r.a.createElement(c.b,{to:"/season",style:k},r.a.createElement(y.a,{onClick:p},"Season")))))))}),L=a(5385);function D(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Built with love by the ",r.a.createElement(L.a,{color:"inherit",href:"https://material-ui.com/"},"Material-UI")," team.")}var A=Object(d.a)(function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}});function C(){var e=A();return r.a.createElement("footer",{className:e.footer},r.a.createElement(E.a,{variant:"h6",align:"center",gutterBottom:!0},"Footer"),r.a.createElement(E.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Something here to give the footer a purpose!"),r.a.createElement(D,null))}var x=a(34),S=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="Home - ANIMU"}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Home Page "),r.a.createElement("p",null,r.a.createElement(c.b,{to:"/user/farizink"},"FarizInk")," on GitHub."))}}]),t}(n.Component),w=a(5386),I=a(55),H=a.n(I),U=window.location.href.split("/")[3],M=Object(d.a)(function(e){return{margin:{margin:e.spacing(1)}}}),_=Object(O.b)(function(e){return console.log(U),{dataSubPage:e[U]}},function(e){return{handleTop:function(t){return e({type:"HANDLE_"+U.toUpperCase(),data:t})},handleLoading:function(t){return e({type:"HANDLE_LOADING",data:t})}}})(function(e){var t=M(),a=e.name,n=e.type;return r.a.createElement(c.b,{to:e.link,style:{textDecoration:"none"}},r.a.createElement(w.a,{variant:n===a?"outlined":"contained",size:"medium",color:"primary",className:t.margin,onClick:function(){return t=a,n=e.dataSubPage.page,e.handleLoading(!0),window.scrollTo(0,0),void H()("".concat("https://api.jikan.moe/v3/","top/anime/").concat(n,"/").concat(t)).then(function(t){e.handleTop({type:a,page:1,data:t.data.top}),e.handleLoading(!1)}).catch(function(e){console.log(e)});var t,n}},a))}),G=a(5396),P=a(5387),F=a(5388),z=a(5389),B=a(5390),R=a(5391);a(5347);function W(e){var t,a=e.data;return 0!==a.score&&(t=r.a.createElement(G.a,{label:"Score : "+a.score,className:"score"})),r.a.createElement(P.a,{className:"card"},r.a.createElement("div",{className:"top-side"},r.a.createElement(G.a,{label:r.a.createElement("b",null,a.rank),color:"primary",className:"rank"}),t),r.a.createElement(F.a,null,r.a.createElement(z.a,{component:"img",alt:a.title,className:"card-image",image:a.image_url,title:a.title}),r.a.createElement(B.a,null,r.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2",className:"description"},a.title),r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},a.type,null!==a.episodes?", "+a.episodes+" Episodes":""))),r.a.createElement(R.a,null,r.a.createElement(w.a,{size:"small",color:"primary"},"Share"),r.a.createElement(w.a,{size:"small",color:"primary"},"Learn More")))}var J=a(5392),q=Object(d.a)(function(e){return{button:{margin:e.spacing(1)},leftIcon:{marginRight:e.spacing(1)},rightIcon:{marginLeft:e.spacing(1)}}});function V(e){var t=q(),a=e.pageNumber,n=e.pageType;return r.a.createElement("div",{style:{textAlign:"right",marginBottom:12,marginRight:-8}},"1"===a?"":r.a.createElement(c.b,{to:"/top/".concat(n,"/").concat(parseInt(a)-1)},r.a.createElement(w.a,{variant:"contained",color:"primary",className:t.button},r.a.createElement(v.a,{className:t.leftIcon}),"PREV")),r.a.createElement(c.b,{to:"/top/".concat(n,"/").concat(parseInt(a)+1)},r.a.createElement(w.a,{variant:"contained",color:"primary",className:t.button},"NEXT",r.a.createElement(v.b,{className:t.rightIcon}))))}a(5348),a(5349);var X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).type=e.match.params.type,a.page=e.match.params.page,a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getData",value:function(e,t){var a=this;this.props.handleLoading(!0),window.scrollTo(0,0),H()("".concat("https://api.jikan.moe/v3/","top/anime/").concat(t,"/").concat(e)).then(function(e){a.props.handleTop({type:a.props.dataTop.type,page:a.props.dataTop.page,data:e.data.top}),a.props.handleLoading(!1)}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){document.title="Top "+this.type.charAt(0).toUpperCase()+this.type.slice(1)+" - ANIMU",this.getData(this.type,this.page)}},{key:"componentWillUpdate",value:function(e){this.type=e.match.params.type,this.page=e.match.params.page}},{key:"componentDidUpdate",value:function(){document.title="Top "+this.type.charAt(0).toUpperCase()+this.type.slice(1)+" - ANIMU"}},{key:"render",value:function(){var e,t=this;e=!0===this.props.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement(J.a,{container:!0,spacing:3},this.props.dataTop.data.map(function(e,t){return r.a.createElement(W,{data:e,key:t})}));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"categories"},["upcoming","airing","tv","movie","ova","special"].map(function(e,a){return r.a.createElement(_,{name:e,link:"/top/".concat(e,"/").concat(t.props.dataTop.page),type:t.type,key:a})})),e,r.a.createElement(V,{pageNumber:this.page,pageType:this.type})))}}]),t}(n.Component),K=Object(O.b)(function(e){return{dataTop:e.top,loading:e.loading}},function(e){return{handleTop:function(t){return e({type:"HANDLE_TOP",data:t})},handleLoading:function(t){return e({type:"HANDLE_LOADING",data:t})}}})(X),Q=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Schedule Page"))}}]),t}(n.Component),Y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Genre Page"))}}]),t}(n.Component),Z=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Season Page"))}}]),t}(n.Component),$=function(){return r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",component:S}),r.a.createElement(x.a,{path:"/top/:type/:page",component:K}),r.a.createElement(x.a,{path:"/schedule",component:Q}),r.a.createElement(x.a,{path:"/genre",component:Y}),r.a.createElement(x.a,{path:"/season",component:Z}))},ee=a(5394),te=a(5393),ae=a(84),ne=a(5397),re=Object(ae.a)({palette:{primary:{light:"#b388ff",main:"#6200ea",dark:"#311b92",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}});function oe(){return r.a.createElement(ne.a,{theme:re},r.a.createElement(T,null),r.a.createElement("main",{style:{marginTop:30}},r.a.createElement(te.a,{maxWidth:"lg"},r.a.createElement($,null))),r.a.createElement(C,null))}var ce=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(ee.a,null),r.a.createElement(oe,null))}}]),t}(n.Component),le=(a(5350),a(83)),ie=a.n(le),pe=a(41),me=a(47),ue={loading:!1,top:{type:"upcoming",page:1,data:[]},schedule:{type:"anjayy",page:1,data:[]},genre:{type:"anjayy",page:1,data:[]},season:{type:"anjayy",page:1,data:[]}},se=Object(me.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return"HANDLE_LOADING"===t.type?Object(pe.a)({},e,{loading:t.data}):"HANDLE_TOP"===t.type?Object(pe.a)({},e,{top:t.data}):"HANDLE_SCHEDULE"===t.type?Object(pe.a)({},e,{schedule:t.data}):"HANDLE_GENRE"===t.type?Object(pe.a)({},e,{genre:t.data}):"HANDLE_SEASON"===t.type?Object(pe.a)({},e,{season:t.data}):e});ie.a.config(),Object(o.render)(r.a.createElement(O.a,{store:se},r.a.createElement(c.a,{basename:"/animu"},r.a.createElement(ce,null))),document.querySelector("#root"))}},[[5305,1,2]]]);
//# sourceMappingURL=main.db9e9a93.chunk.js.map