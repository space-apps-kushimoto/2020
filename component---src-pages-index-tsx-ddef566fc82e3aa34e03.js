(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),c=a("Wbzz"),r=a("Z9I9"),l=a("soUV"),o=a("3mGJ"),s=a("yE/o"),u=a("aQu0"),d=(a("RIqP"),a("pVnL")),m=a.n(d),p=a("lwsE"),b=a.n(p),h=a("W8MJ"),v=a.n(h),f=a("a1gu"),E=a.n(f),O=a("Nsbk"),g=a.n(O),j=a("PJYZ"),N=a.n(j),y=a("7W2i"),A=a.n(y),q=a("lSNA"),C=a.n(q),k=a("Og4/"),x=a.n(k),w=a("J2iB"),I=a.n(w),P=a("TSYQ"),S=a.n(P),z=(a("17x9"),a("1yEx")),L=a("H+2d"),T=a("ZeOK"),R=a("ICNK"),D=a("Y53p"),J=a("MZgk"),K=a("D1pA"),V=a("MqQV");function G(e){var t=e.children,a=e.className,n=e.content,c=e.hidden,r=e.visible,l=S()(Object(T.a)(r,"visible"),Object(T.a)(c,"hidden"),"content",a),o=Object(R.a)(G,e),s=Object(D.a)(G,e);return i.a.createElement(s,m()({},o,{className:l}),L.a.isNil(t)?n:t)}G.handledProps=["as","children","className","content","hidden","visible"],G.propTypes={};var B=G,Q=a("3WF5"),W=a.n(Q);function Z(e){var t=e.attached,a=e.basic,n=e.buttons,c=e.children,r=e.className,l=e.color,o=e.compact,s=e.content,u=e.floated,d=e.fluid,p=e.icon,b=e.inverted,h=e.labeled,v=e.negative,f=e.positive,E=e.primary,O=e.secondary,g=e.size,j=e.toggle,N=e.vertical,y=e.widths,A=S()("ui",l,g,Object(T.a)(a,"basic"),Object(T.a)(o,"compact"),Object(T.a)(d,"fluid"),Object(T.a)(p,"icon"),Object(T.a)(b,"inverted"),Object(T.a)(h,"labeled"),Object(T.a)(v,"negative"),Object(T.a)(f,"positive"),Object(T.a)(E,"primary"),Object(T.a)(O,"secondary"),Object(T.a)(j,"toggle"),Object(T.a)(N,"vertical"),Object(T.b)(t,"attached"),Object(T.e)(u,"floated"),Object(T.g)(y),"buttons",r),q=Object(R.a)(Z,e),C=Object(D.a)(Z,e);return I()(n)?i.a.createElement(C,m()({},q,{className:A}),L.a.isNil(c)?s:c):i.a.createElement(C,m()({},q,{className:A}),W()(n,(function(e){return U.create(e)})))}Z.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],Z.propTypes={};var M=Z;function Y(e){var t=e.className,a=e.text,n=S()("or",t),c=Object(R.a)(Y,e),r=Object(D.a)(Y,e);return i.a.createElement(r,m()({},c,{className:n,"data-text":a}))}Y.handledProps=["as","className","text"],Y.propTypes={};var F=Y,H=function(e){function t(){var e,a;b()(this,t);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return a=E()(this,(e=g()(t)).call.apply(e,[this].concat(c))),C()(N()(a),"ref",Object(n.createRef)()),C()(N()(a),"computeElementType",(function(){var e=a.props,t=e.attached,n=e.label;if(!I()(t)||!I()(n))return"div"})),C()(N()(a),"computeTabIndex",(function(e){var t=a.props,n=t.disabled,i=t.tabIndex;return I()(i)?n?-1:"div"===e?0:void 0:i})),C()(N()(a),"focus",(function(){return x()(a.ref.current,"focus")})),C()(N()(a),"handleClick",(function(e){a.props.disabled?e.preventDefault():x()(a.props,"onClick",e,a.props)})),C()(N()(a),"hasIconClass",(function(){var e=a.props,t=e.labelPosition,n=e.children,i=e.content,c=e.icon;return!0===c||c&&(t||L.a.isNil(n)&&I()(i))})),a}return A()(t,e),v()(t,[{key:"computeButtonAriaRole",value:function(e){var t=this.props.role;return I()(t)?"button"!==e?"button":void 0:t}},{key:"render",value:function(){var e=this.props,a=e.active,n=e.animated,c=e.attached,r=e.basic,l=e.children,o=e.circular,s=e.className,u=e.color,d=e.compact,p=e.content,b=e.disabled,h=e.floated,v=e.fluid,f=e.icon,E=e.inverted,O=e.label,g=e.labelPosition,j=e.loading,N=e.negative,y=e.positive,A=e.primary,q=e.secondary,C=e.size,k=e.toggle,x=S()(u,C,Object(T.a)(a,"active"),Object(T.a)(r,"basic"),Object(T.a)(o,"circular"),Object(T.a)(d,"compact"),Object(T.a)(v,"fluid"),Object(T.a)(this.hasIconClass(),"icon"),Object(T.a)(E,"inverted"),Object(T.a)(j,"loading"),Object(T.a)(N,"negative"),Object(T.a)(y,"positive"),Object(T.a)(A,"primary"),Object(T.a)(q,"secondary"),Object(T.a)(k,"toggle"),Object(T.b)(n,"animated"),Object(T.b)(c,"attached")),w=S()(Object(T.b)(g||!!O,"labeled")),P=S()(Object(T.a)(b,"disabled"),Object(T.e)(h,"floated")),J=Object(R.a)(t,this.props),G=Object(D.a)(t,this.props,this.computeElementType),B=this.computeTabIndex(G);if(!I()(O)){var Q=S()("ui",x,"button",s),W=S()("ui",w,"button",s,P),Z=V.a.create(O,{defaultProps:{basic:!0,pointing:"left"===g?"right":"left"},autoGenerateKey:!1});return i.a.createElement(G,m()({},J,{className:W,onClick:this.handleClick}),"left"===g&&Z,i.a.createElement(z.a,{innerRef:this.ref},i.a.createElement("button",{className:Q,"aria-pressed":k?!!a:void 0,disabled:b,tabIndex:B},K.a.create(f,{autoGenerateKey:!1})," ",p)),("right"===g||!g)&&Z)}var M=S()("ui",x,P,w,"button",s),Y=!L.a.isNil(l),F=this.computeButtonAriaRole(G);return i.a.createElement(z.a,{innerRef:this.ref},i.a.createElement(G,m()({},J,{className:M,"aria-pressed":k?!!a:void 0,disabled:b&&"button"===G||void 0,onClick:this.handleClick,role:F,tabIndex:B}),Y&&l,!Y&&K.a.create(f,{autoGenerateKey:!1}),!Y&&p))}}]),t}(n.Component);C()(H,"defaultProps",{as:"button"}),C()(H,"Content",B),C()(H,"Group",M),C()(H,"Or",F),C()(H,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]),H.propTypes={},H.create=Object(J.c)(H,(function(e){return{content:e}}));var U=H,X=a("+6Dn");t.default=Object(l.b)((function(e){return n.createElement("div",null,n.createElement(o.a,{vertical:!0,inverted:!0,textAlign:"center",className:"masthead"},n.createElement(r.a,{Link:c.Link,pathname:e.location.pathname,items:l.a,inverted:!0}),n.createElement(s.a,{text:!0},n.createElement(u.a,{inverted:!0,as:"h1"},"NASA International Space Apps Challenge in Kushimoto"),n.createElement(u.a,{inverted:!0,as:"h2"},"NASA 主催の世界同時ハッカソン"),n.createElement(u.a,{inverted:!0,as:"h2"},"2020年10月2日(金) - 10月4日(日) @ オンライン開催"),n.createElement(U,{primary:!0,size:"huge"},"実行委員 & 参加者募集中"))),n.createElement(o.a,{vertical:!0,className:"stripe"},n.createElement(X.a,{stackable:!0,verticalAlign:"middle",className:"container"},n.createElement(X.a.Row,null,n.createElement(X.a.Column,{width:"8"},n.createElement(u.a,null,"NASA International Space Apps Challenge について"),n.createElement("p",null,"NASA International Space Apps Challenge とは、米国の NASA が毎年主催する世界同時ハッカソンで、NASAが公開しているオープンデータを使用したアプリケーションの開発を競いあいます。"),n.createElement("p",null,"2018年は世界中の75カ国200会場において18,000人が参加し、福島県会津若松市、​東京都、愛知県豊橋市、大阪市、神戸市、山口県宇部市の計6会場で開催されました。"),n.createElement("p",null,"そして10月に開催される今年の Space Apps Challenge は、本州最南端の町、串本でも開催されることになりました。")),n.createElement(X.a.Column,{width:"6",floated:"right"},n.createElement("img",{src:"./test.png",alt:"test"}),n.createElement(u.a,null,"Lorem ipsum"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),n.createElement(u.a,null,"Dolor sit amet"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."))))),n.createElement(o.a,{vertical:!0,className:"stripe alternate feature"},n.createElement(X.a,{columns:"3",textAlign:"center",divided:!0,relaxed:!0,stackable:!0,className:"container"},n.createElement(X.a.Row,null,n.createElement(X.a.Column,null,n.createElement(u.a,{icon:!0},n.createElement(K.a,{name:"wizard"}),"A kind of magic!"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),n.createElement(X.a.Column,null,n.createElement(u.a,{icon:!0},n.createElement(K.a,{name:"wizard"}),"A kind of magic!"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),n.createElement(X.a.Column,null,n.createElement(u.a,{icon:!0},n.createElement(K.a,{name:"wizard"}),"A kind of magic!"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat."))))))}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ddef566fc82e3aa34e03.js.map