(this["webpackJsonpspotify-clone"]=this["webpackJsonpspotify-clone"]||[]).push([[0],{38:function(e,t,a){e.exports=a(58)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(15),r=a.n(c),o=(a(43),a(9)),i=(a(44),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("de45e40083c44d2181796cf48f0f11ac","&redirect_uri=").concat("http://localhost:3000/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var s=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg",alt:"Spotify logo"}),l.a.createElement("a",{href:i},"LOGIN WITH SPOTIFY"))},m=(a(45),a(27)),u=a.n(m);a(46),a(47),a(48);var d=function(e){var t=e.title,a=e.Icon;return l.a.createElement("div",{className:"sidebarOption"},a&&l.a.createElement(a,{className:"sidebarOption__icon"}),a?l.a.createElement("h4",null,t):l.a.createElement("p",null,t))},E=a(28),f=a.n(E),p=a(33),v=a.n(p),_=a(70),y=Object(n.createContext)(),g=function(e){var t=e.reducer,a=e.initialState,c=e.children;return l.a.createElement(y.Provider,{value:Object(n.useReducer)(t,a)},c)},h=function(){return Object(n.useContext)(y)};var b=function(){var e,t=h(),a=Object(o.a)(t,2),n=a[0].playlists;return a[1],l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar__logo",src:"https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg",alt:"Spotify logo"}),l.a.createElement(d,{title:"Home",Icon:f.a}),l.a.createElement(d,{title:"Search",Icon:v.a}),l.a.createElement(d,{title:"Your Library",Icon:_.a}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),l.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(d,{title:e.name})})))},N=(a(54),a(71)),S=(a(55),a(84));var k=function(){var e,t=h(),a=Object(o.a)(t,2),n=a[0].user;return a[1],l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(N.a,null),l.a.createElement("input",{placeholder:"Search for Artists, Songs, or Albums",type:"text"})),l.a.createElement("div",{className:"header__right"},l.a.createElement(S.a,{src:null===n||void 0===n||null===(e=n.images[0])||void 0===e?void 0:e.url,alt:null===n||void 0===n?void 0:n.display_name}),l.a.createElement("h4",null,null===n||void 0===n?void 0:n.display_name)))},w=a(72),O=a(73),j=a(74);a(56);var T=function(e){var t=e.track;return l.a.createElement("div",{className:"songRow"},l.a.createElement("img",{src:t.album.images[0].url,alt:"",className:"songRow__album"}),l.a.createElement("div",{className:"songRow__info"},l.a.createElement("h1",null,t.name),l.a.createElement("p",null,t.artists.map((function(e){return e.name})).join(", ")," -"," ",t.album.name)))};var I=function(e){var t,a=e.spotify,n=h(),c=Object(o.a)(n,2),r=c[0].discover_weekly;return c[1],l.a.createElement("div",{className:"body"},l.a.createElement(k,{spotify:a}),l.a.createElement("div",{className:"body__info"},l.a.createElement("img",{src:null===r||void 0===r||null===(t=r.images[0])||void 0===t?void 0:t.url,alt:""}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,"Discover Weekly"),l.a.createElement("p",null,null===r||void 0===r?void 0:r.description))),l.a.createElement("div",{className:"body__songs"},l.a.createElement("div",{className:"body__icons"},l.a.createElement(w.a,{className:"body__shuffle"}),l.a.createElement(O.a,{fontSize:"large"}),l.a.createElement(j.a,null)),null===r||void 0===r?void 0:r.tracks.items.map((function(e){return l.a.createElement(T,{track:e.track})}))))},L=(a(57),a(75)),x=a(76),A=a(77),R=a(78),P=a(79),Y=a(81),W=a(82),z=a(80),C=a(83);var U=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__left"},l.a.createElement("img",{src:"https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg",alt:"",className:"footer__albumLogo"}),l.a.createElement("div",{className:"footer__songInfo"},l.a.createElement("h4",null,"My fav song"),l.a.createElement("p",null,"Atharva"))),l.a.createElement("div",{className:"footer__center"},l.a.createElement(L.a,{className:"footer__green"}),l.a.createElement(x.a,{className:"footer__icon"}),l.a.createElement(A.a,{fontSize:"large",className:"footer__icon"}),l.a.createElement(R.a,{className:"footer__icon"}),l.a.createElement(P.a,{className:"footer__green"})),l.a.createElement("div",{className:"footer__right"},l.a.createElement(z.a,{container:!0,spacing:2},l.a.createElement(z.a,{item:!0},l.a.createElement(Y.a,null)),l.a.createElement(z.a,{item:!0},l.a.createElement(W.a,null)),l.a.createElement(z.a,{item:!0,xs:!0},l.a.createElement(C.a,null)))))};var H=function(e){var t=e.spotify;return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player__body"},l.a.createElement(b,null),l.a.createElement(I,{spotify:t})),l.a.createElement(U,null))},K=new u.a;var D=function(){var e=h(),t=Object(o.a)(e,2),a=t[0],c=(a.user,a.token),r=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(r({type:"SET_TOKEN",token:t}),console.log("[token]",c),K.setAccessToken(t),K.getMe().then((function(e){r({type:"SET_USER",user:e})})),K.getUserPlaylists().then((function(e){r({type:"SET_PLAYLISTS",playlists:e})})),K.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((function(e){r({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})))}),[]),l.a.createElement("div",{className:"App"},c?l.a.createElement(H,{spotify:K}):l.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(8),B=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(M.a)(Object(M.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(M.a)(Object(M.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(M.a)(Object(M.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(M.a)(Object(M.a)({},e),{},{discover_weekly:t.discover_weekly});default:return e}};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,{initialState:{user:null,token:null,playlists:[],playing:!1,item:null},reducer:B},l.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.fbeb3376.chunk.js.map