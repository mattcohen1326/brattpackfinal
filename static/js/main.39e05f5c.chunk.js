(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{11:function(e,t,n){},13:function(e){e.exports=JSON.parse('{"content":[{"type":"space","title":"Devils Fam Twitter Space July 7th","date":"77","route":"/Spaces#77","body":"test","img":"img/spaces/77.jpg"},{"type":"space","title":"Devils Fam Twitter Space July 10th","name":"1","date":"710","body":"test","route":"/Spaces#710","img":"img/spaces/710.jpg"},{"type":"blog","title":"First Post","date":"710","body":"test","route":"/FirstPost"},{"type":"appearance","title":"Devils State Of Mind","name":"3","body":"test","date":"710","route":"/Spaces#710","img":"img/3.png"},{"type":"space","title":"Devils Fam Twitter Space July 13th","date":"713","body":"test","route":"/Spaces#710","img":"img/spaces/713.jpg"},{"type":"appearance","title":"Locked On Devils Podcast","route":"https://open.spotify.com/episode/7kNsTchgIqDw2f3gjBOHiL?si=uertW9B5R3O0aQqn-wXoKA&nd=1","name":"1","img":"img/1.png","date":"710","body":"test","url":"https://open.spotify.com/episode/7kNsTchgIqDw2f3gjBOHiL?si=uertW9B5R3O0aQqn-wXoKA&nd=1"},{"type":"appearance","title":"Ice Cold Takes With The Boys In Blue","name":"2","route":"https://open.spotify.com/episode/6jLquBaxnWXgF9dzJHnMEX?si=kThnANFESEqGpy9imcTtsw&nd=1","img":"img/2.png","body":"test","date":"710","url":"https://open.spotify.com/episode/6jLquBaxnWXgF9dzJHnMEX?si=kThnANFESEqGpy9imcTtsw&nd=1"}]}')},24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(9),a=n.n(i),r=(n(24),n(5)),o=n(6),j=n(8),d=n(7),p=n(2),l=(n(11),n(25),n(12)),h=n(4),u=n.p+"static/media/logo.0ee85357.png",b=n(0),m=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={isHovered:!1},c.handleHover=c.handleHover.bind(Object(l.a)(c)),c}return Object(o.a)(n,[{key:"handleHover",value:function(){this.setState((function(e){return{isHovered:!e.isHovered}}))}},{key:"render",value:function(){return Object(b.jsx)(h.b,{to:this.props.navigation,style:{color:this.state.isHovered?"green":"white",gridColumnStart:this.props.column},children:Object(b.jsx)("div",{className:"nav-item",children:this.props.name})})}}]),n}(s.a.Component);var O=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{id:"navContainer",children:[Object(b.jsxs)("div",{id:"stripes",children:[Object(b.jsx)("div",{className:"stripe"}),Object(b.jsx)("div",{className:"stripe"}),Object(b.jsx)("div",{className:"stripe"})]}),Object(b.jsx)("div",{id:"nav",children:Object(b.jsxs)("div",{id:"navMenu",children:[Object(b.jsx)(m,{column:2,name:"Home",navigation:"/Home"}),Object(b.jsx)(m,{column:4,name:"Spaces",navigation:"/Spaces"}),Object(b.jsx)("img",{style:{gridColumnStart:6},src:u}),Object(b.jsx)(m,{column:8,name:"Appearances",navigation:"/Appearances"}),Object(b.jsx)(m,{column:10,name:"Bratt Pack Photos",navigation:"/Memes"})]})})]})})},g={1:n.p+"static/media/1.76f7d958.png",2:n.p+"static/media/2.cb741d85.png",3:n.p+"static/media/3.cff95ad5.png"},x=n(13),v=x.content;function f(){for(var e=v.filter((function(e){return"appearance"===e.type})),t=[],n=0;n<e.length;n++){var c=Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("a",{href:e[n].url,target:"_blank",children:Object(b.jsx)("div",{className:"appearance",children:Object(b.jsx)("img",{src:g[e[n].name]})})})});t.push(c)}return t}var y=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{id:"Main-Content",children:[Object(b.jsx)("h1",{children:"CHECK OUT @THEBRATTPACK63 ON THESE PODCAST APPEARANCES"}),Object(b.jsx)("div",{id:"appearances",children:f()})]})]})},C=n(19);var k=function(){return Object(b.jsx)("div",{id:"Feed",children:Object(b.jsx)(C.a,{dataSource:{sourceType:"profile",screenName:"TheBrattPack63"},options:{height:"400"}})})},T=(n.p,[n.p+"static/media/1.56d2282a.jpeg",n.p+"static/media/2.2945f291.jpeg",n.p+"static/media/3.e1efebfe.jpeg",n.p+"static/media/4.af067cbe.jpeg",n.p+"static/media/5.a22c72c6.jpeg",n.p+"static/media/6.02441747.jpeg",n.p+"static/media/7.20627b12.jpeg",n.p+"static/media/8.f83b57a8.jpeg",n.p+"static/media/9.1fa4d673.jpeg",n.p+"static/media/10.c8996680.jpeg"]),S=x.content,w=["#64a151","#f46a6a","#383838"],F=0,N=0;function A(){for(var e=[],t=0;t<S.length;t++){console.log("hi"),console.log(S[t]),10===N&&(N=0),3===F&&(e.push(Object(b.jsx)("img",{className:"Article",src:T[N]})),F=0);var n={backgroundColor:w[F]},c=Object(b.jsx)(B,{type:S[t].type,style:n,route:S[t].route,title:S[t].title});e.push(c),F++,N++}return e}var B=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return"appearance"!=this.props.type?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h.b,{to:this.props.route,children:Object(b.jsx)("div",{style:this.props.style,className:"Article",children:Object(b.jsx)("h1",{children:this.props.title})})})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("a",{target:"_blank",href:this.props.route,children:Object(b.jsx)("div",{style:this.props.style,className:"Article",children:Object(b.jsx)("h1",{children:this.props.title})})})})}}]),n}(s.a.Component),H=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{id:"Articles",children:A()})}}]),n}(s.a.Component),P=H,E=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={isClicked:!1},c.handleClick=c.handleClick.bind(Object(l.a)(c)),c}return Object(o.a)(n,[{key:"handleClick",value:function(){console.log("ok"),this.setState((function(e){return{isClicked:!e.isClicked}}))}},{key:"render",value:function(){return window.scrollTo(0,0),document.body.style="overflow:hidden;",Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{id:"Main-Content",children:[Object(b.jsx)(k,{}),Object(b.jsx)(P,{}),Object(b.jsxs)("div",{id:"right-side-content",children:[Object(b.jsx)("h1",{id:"best-player",children:"JBITBPITNHL"}),Object(b.jsx)("h1",{id:"count",children:"THE BRATT PACK IS CURRENTLY 3,540 STRONG"})]})]})]})}}]),n}(s.a.Component),D=n(10),M=n.p+"static/media/spaces.2890c9e0.jpg",I={77:n.p+"static/media/77.dddcd906.jpg",710:n.p+"static/media/710.f903f0da.jpg",713:n.p+"static/media/713.46585a1f.jpg"};function q(){for(var e=[],t=0,n=Object.entries(I);t<n.length;t++){var c=Object(D.a)(n[t],2),s=c[0],i=c[1];e.push(Object(b.jsx)("div",{className:"space-component",id:s,children:Object(b.jsx)("img",{src:i})}))}return e}var J=function(){return document.body.style="overflow-y:scroll",Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{id:"Main-Content",children:Object(b.jsxs)("div",{id:"spaces",children:[Object(b.jsx)("img",{src:M}),Object(b.jsx)("h2",{children:"Check back here for future spaces announcements and recaps."}),Object(b.jsx)("p",{children:"@BrattPack63 host's twitter spaces where fans can discuss the Devils.  They are a great platform for the community to connect.  They are usually announced the day of or the day before, we will post here if there is a planned space upcoming"}),Object(b.jsx)("h1",{style:{color:"white",width:"100vw"},children:"UPCOMING SPACES: "}),q()]})})]})},L=n(18),R=n.n(L);function W(e){for(var t=0,n="",c=[],s=!0,i=0;i<e.length;i++)n+=e[i],","===e[i]&&s?(c.push(Object(b.jsx)("p",{children:n})),n="",s=!1):"."===e[i]&&"com"!=e.substring(i+1,i+4)&&"org"!=e.substring(i+1,i+4)&&t++,3===t&&(c.push(Object(b.jsx)("p",{children:n})),n="",t=0),0===c.length&&c.push(Object(b.jsx)("p",{children:e}));return Object(b.jsx)("div",{id:"paragraphs",children:c})}var X=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(r.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.removeCommentBox=R()("5763488328712192-proj")}},{key:"componentWillUnmount",value:function(){this.removeCommentBox()}},{key:"render",value:function(){return document.querySelector("body").style.overflowY="scroll",Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)("div",{id:"Main-Content",children:Object(b.jsxs)("div",{className:"ArticleComponent",style:{color:"white"},children:[Object(b.jsx)("h1",{children:this.props.title}),Object(b.jsx)("h3",{children:this.props.date}),W(this.props.body)]})}),Object(b.jsx)("div",{className:"commentbox"})]})}}]),n}(s.a.Component),K=x.content;function G(){for(var e=[],t=0;t<K.length;t++){var n=K[t];e.push(Object(b.jsx)(p.a,{exact:!0,path:n.route,element:Object(b.jsx)(X,{title:n.title,body:n.body,date:n.date})}))}return e}var U=function(){return Object(b.jsxs)(p.c,{children:[" ",Object(b.jsx)(p.a,{exact:!0,path:"/",element:Object(b.jsx)(E,{})}),Object(b.jsx)(p.a,{exact:!0,path:"/Home",element:Object(b.jsx)(E,{})}),Object(b.jsx)(p.a,{exact:!0,path:"/Spaces",element:Object(b.jsx)(J,{})}),Object(b.jsx)(p.a,{exact:!0,path:"/Appearances",element:Object(b.jsx)(y,{})}),G()]})},z=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={starting:!1},c}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(U,{})})}}]),n}(s.a.Component),Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(b.jsxs)(h.a,{children:[Object(b.jsx)(z,{})," "]}),document.getElementById("root")),Q()}},[[28,1,2]]]);
//# sourceMappingURL=main.39e05f5c.chunk.js.map