(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{11:function(e,t,c){},13:function(e){e.exports=JSON.parse('{"content":[{"type":"space","title":"Devils Fam Twitter Space July 7th","date":"77","route":"/Spaces#77","body":"test","img":"img/spaces/77.jpg"},{"type":"space","title":"Devils Fam Twitter Space July 10th","name":"1","date":"710","body":"test","route":"/Spaces#710","img":"img/spaces/710.jpg"},{"type":"blog","title":"First Post","date":"710","body":"test","route":"/FirstPost"},{"type":"appearance","title":"Devils State Of Mind","name":"3","body":"test","date":"710","route":"/Spaces#710","img":"img/3.png"},{"type":"space","title":"Devils Fam Twitter Space July 13th","date":"713","body":"test","route":"/Spaces#710","img":"img/spaces/713.jpg"},{"type":"appearance","title":"Locked On Devils Podcast","route":"https://open.spotify.com/episode/7kNsTchgIqDw2f3gjBOHiL?si=uertW9B5R3O0aQqn-wXoKA&nd=1","name":"1","img":"img/1.png","date":"710","body":"test","url":"https://open.spotify.com/episode/7kNsTchgIqDw2f3gjBOHiL?si=uertW9B5R3O0aQqn-wXoKA&nd=1"},{"type":"appearance","title":"Ice Cold Takes With The Boys In Blue","name":"2","route":"https://open.spotify.com/episode/6jLquBaxnWXgF9dzJHnMEX?si=kThnANFESEqGpy9imcTtsw&nd=1","img":"img/2.png","body":"test","date":"710","url":"https://open.spotify.com/episode/6jLquBaxnWXgF9dzJHnMEX?si=kThnANFESEqGpy9imcTtsw&nd=1"}]}')},24:function(e,t,c){},25:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(9),a=c.n(s),r=(c(24),c(5)),o=c(6),j=c(8),d=c(7),l=c(2),p=(c(11),c(25),c(12)),h=c(4),b=c.p+"static/media/logo.0ee85357.png",u=c(0),m=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={isHovered:!1},n.handleHover=n.handleHover.bind(Object(p.a)(n)),n}return Object(o.a)(c,[{key:"handleHover",value:function(){this.setState((function(e){return{isHovered:!e.isHovered}}))}},{key:"render",value:function(){return Object(u.jsx)(h.b,{to:this.props.navigation,style:{color:this.state.isHovered?"green":"white",gridColumnStart:this.props.column},children:Object(u.jsx)("div",{className:"nav-item",children:this.props.name})})}}]),c}(i.a.Component);var O=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"navContainer",children:[Object(u.jsxs)("div",{id:"stripes",children:[Object(u.jsx)("div",{className:"stripe"}),Object(u.jsx)("div",{className:"stripe"}),Object(u.jsx)("div",{className:"stripe"})]}),Object(u.jsx)("div",{id:"nav",children:Object(u.jsxs)("div",{id:"navMenu",children:[Object(u.jsx)(m,{column:2,name:"Home",navigation:"/Home"}),Object(u.jsx)(m,{column:4,name:"Spaces",navigation:"/Spaces"}),Object(u.jsx)("img",{id:"logo",style:{gridColumnStart:6},src:b}),Object(u.jsx)(m,{column:8,name:"Appearances",navigation:"/Appearances"}),Object(u.jsx)(m,{column:10,name:"Bratt Pack Photos",navigation:"/Community"})]})})]})})},x={1:c.p+"static/media/1.76f7d958.png",2:c.p+"static/media/2.cb741d85.png",3:c.p+"static/media/3.cff95ad5.png"},g=c(13),v=g.content;function f(){for(var e=v.filter((function(e){return"appearance"===e.type})),t=[],c=0;c<e.length;c++){var n=Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("a",{href:e[c].url,target:"_blank",children:Object(u.jsx)("div",{className:"appearance",children:Object(u.jsx)("img",{src:x[e[c].name]})})})});t.push(n)}return t}var y=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)("div",{id:"Main-Content",children:[Object(u.jsx)("h1",{children:"CHECK OUT @THEBRATTPACK63 ON THESE PODCAST APPEARANCES"}),Object(u.jsx)("div",{id:"appearances",children:f()})]})]})},C=c(19);var k=function(){return Object(u.jsx)("div",{id:"Feed",children:Object(u.jsx)(C.a,{dataSource:{sourceType:"profile",screenName:"TheBrattPack63"},options:{height:"400"}})})},S=(c.p,[c.p+"static/media/1.56d2282a.jpeg",c.p+"static/media/2.2945f291.jpeg",c.p+"static/media/3.e1efebfe.jpeg",c.p+"static/media/4.af067cbe.jpeg",c.p+"static/media/5.a22c72c6.jpeg",c.p+"static/media/6.02441747.jpeg",c.p+"static/media/7.20627b12.jpeg",c.p+"static/media/8.f83b57a8.jpeg",c.p+"static/media/9.1fa4d673.jpeg",c.p+"static/media/10.c8996680.jpeg"]),T=g.content,N=["#64a151","#f46a6a","#383838"],w=0,F=0;function A(){for(var e=[],t=0;t<T.length;t++){console.log("hi"),console.log(T[t]),10===F&&(F=0),3===w&&(e.push(Object(u.jsx)("img",{className:"Article",src:S[F]})),w=0);var c={backgroundColor:N[w]},n=Object(u.jsx)(B,{type:T[t].type,style:c,route:T[t].route,title:T[t].title});e.push(n),w++,F++}return e}var B=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){return Object(r.a)(this,c),t.call(this,e)}return Object(o.a)(c,[{key:"render",value:function(){return"appearance"!=this.props.type?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h.b,{to:this.props.route,children:Object(u.jsx)("div",{style:this.props.style,className:"Article",children:Object(u.jsx)("h1",{children:this.props.title})})})}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("a",{target:"_blank",href:this.props.route,children:Object(u.jsx)("div",{style:this.props.style,className:"Article",children:Object(u.jsx)("h1",{children:this.props.title})})})})}}]),c}(i.a.Component),H=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"Articles",children:A()})}}]),c}(i.a.Component),P=H,E=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={isClicked:!1},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(o.a)(c,[{key:"handleClick",value:function(){console.log("ok"),this.setState((function(e){return{isClicked:!e.isClicked}}))}},{key:"render",value:function(){return window.scrollTo(0,0),document.body.style="overflow:hidden;",Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)("div",{id:"Main-Content",children:[Object(u.jsx)(k,{}),Object(u.jsx)(P,{}),Object(u.jsxs)("div",{id:"right-side-content",children:[Object(u.jsx)("h1",{id:"best-player",children:"JBITBPITNHL"}),Object(u.jsx)("h1",{id:"count",children:"THE BRATT PACK IS CURRENTLY 4,608 STRONG"})]})]})]})}}]),c}(i.a.Component),D=c(10),I=c.p+"static/media/spaces.2890c9e0.jpg",M={77:c.p+"static/media/77.dddcd906.jpg",710:c.p+"static/media/710.f903f0da.jpg",712:"today",713:c.p+"static/media/713.46585a1f.jpg"};var q=function(){var e=[],t=[],c=!1;console.log(M);for(var n=0,i=Object.entries(M);n<i.length;n++){var s=Object(D.a)(i[n],2),a=s[0],r=s[1];"today"===r?c=!0:c?t.push(Object(u.jsx)("div",{className:"space-component",id:a,children:Object(u.jsx)("img",{src:r})})):e.push(Object(u.jsx)("div",{className:"space-component",id:a,children:Object(u.jsx)("img",{src:r})}))}return[e,t]}(),J=q[0],L=q[1];var R=function(){return document.body.style="overflow-y:scroll",console.log(L,J),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsxs)("div",{id:"Main-Content",children:[Object(u.jsxs)("div",{id:"space-intro",children:[Object(u.jsx)("img",{src:I}),Object(u.jsx)("h2",{children:"Check back here for future spaces announcements and recaps."}),Object(u.jsx)("p",{children:"@BrattPack63 host's twitter spaces where fans can discuss the Devils.  They are a great platform for the community to connect.  They are usually announced the day of or the day before, we will post here if there is a planned space upcoming"}),Object(u.jsx)("h1",{children:"PREVIOUS SPACES: "}),Object(u.jsx)("h1",{children:"UPCOMING SPACES: "})]}),Object(u.jsxs)("div",{id:"two-spaces",children:[Object(u.jsx)("div",{className:"space-split",children:J}),Object(u.jsx)("div",{className:"space-split",children:L})]})]})]})},W=c(18),X=c.n(W);function _(e){for(var t=0,c="",n=[],i=!0,s=0;s<e.length;s++)c+=e[s],","===e[s]&&i?(n.push(Object(u.jsx)("p",{children:c})),c="",i=!1):"."===e[s]&&"com"!=e.substring(s+1,s+4)&&"org"!=e.substring(s+1,s+4)&&t++,3===t&&(n.push(Object(u.jsx)("p",{children:c})),c="",t=0),0===n.length&&n.push(Object(u.jsx)("p",{children:e}));return Object(u.jsx)("div",{id:"paragraphs",children:n})}var K=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){return Object(r.a)(this,c),t.call(this,e)}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.removeCommentBox=X()("5763488328712192-proj")}},{key:"componentWillUnmount",value:function(){this.removeCommentBox()}},{key:"render",value:function(){return document.querySelector("body").style.overflowY="scroll",Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)("div",{id:"Main-Content",children:Object(u.jsxs)("div",{className:"ArticleComponent",style:{color:"white"},children:[Object(u.jsx)("h1",{children:this.props.title}),Object(u.jsx)("h3",{children:this.props.date}),_(this.props.body)]})}),Object(u.jsx)("div",{className:"commentbox"})]})}}]),c}(i.a.Component),U=[c.p+"static/media/1.fe2d8e20.jpg",c.p+"static/media/2.6f12fb7e.jpg_small",c.p+"static/media/3.5c2382f0.jpg_small",c.p+"static/media/4.a6e4de16.jpg_medium",c.p+"static/media/5.42442587.jpg_medium"];function G(){for(var e=[],t=0;t<U.length;t++)e.push(Object(u.jsx)("div",{id:"pic-container",children:Object(u.jsx)("img",{src:U[t]})}));return e}var z=function(){return document.body.style="overflow-y:scroll",Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)("div",{id:"Main-Content",children:Object(u.jsx)("div",{id:"pics",children:G()})})]})},Q=g.content;function Y(){for(var e=[],t=0;t<Q.length;t++){var c=Q[t];e.push(Object(u.jsx)(l.a,{exact:!0,path:c.route,element:Object(u.jsx)(K,{title:c.title,body:c.body,date:c.date})}))}return e}var V=function(){return Object(u.jsxs)(l.c,{children:[" ",Object(u.jsx)(l.a,{exact:!0,path:"/",element:Object(u.jsx)(E,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/Home",element:Object(u.jsx)(E,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/Spaces",element:Object(u.jsx)(R,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/Appearances",element:Object(u.jsx)(y,{})}),Object(u.jsx)(l.a,{exact:!0,path:"/Community",element:Object(u.jsx)(z,{})}),Y()]})},Z=function(e){Object(j.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(r.a)(this,c),(n=t.call(this,e)).state={starting:!1},n}return Object(o.a)(c,[{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(V,{})})}}]),c}(i.a.Component),$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(u.jsxs)(h.a,{children:[Object(u.jsx)(Z,{})," "]}),document.getElementById("root")),$()}},[[28,1,2]]]);
//# sourceMappingURL=main.03989e89.chunk.js.map