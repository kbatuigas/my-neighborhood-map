(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(n,e,t){},16:function(n,e,t){n.exports=t.p+"static/media/logo.ee7cd8ed.svg"},17:function(n,e,t){},19:function(n,e,t){"use strict";t.r(e);var o=t(0),a=t.n(o),i=t(2),c=t.n(i),r=(t(14),t(3)),s=t(4),l=t(6),m=t(5),u=t(7);t(16),t(17);var p=function(n){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(u.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=this,e=new Promise(function(n,e){window.resolveMapsPromise=function(){n(window.google),delete window.resolveMapsPromise};var t=document.createElement("script");t.src="https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyC8vDwnM3yUOP2GRv4kwFQg6We60BRrDN0","&callback=resolveMapsPromise"),t.async=!0,document.body.appendChild(t)}),t=function(){var n="https://api.foursquare.com/v2/venues/search?client_id=".concat("0OM1NOQ1YQMD3HBYBJT3MPFOZSB0XJYAWR3QEVI4NZF4SZOJ","&client_secret=").concat("1Y0XUO1GBRCCAZMOKAWNDSSTWRDV0FDAWYMSH3MAD5FNNGLM","&limit=50&query=").concat("bar","&ll=").concat("45.5122,-122.6587","&radius=50000&intent=browse&v=20190122");return fetch(n).then(function(n){return n.json()})}();Promise.all([e,t]).then(function(e){console.log(e);var t=e[0],o=e[1].response.venues;n.google=t,n.map=new t.maps.Map(document.getElementById("map"),{zoom:13,center:{lat:45.5122,lng:-122.6587}}),n.markers=[],o.forEach(function(e){var o=new t.maps.Marker({position:{lat:e.location.lat,lng:e.location.lng},map:n.map,id:e.id,name:e.name,animation:t.maps.Animation.DROP});o.addListener("click",function(){null!==o.getAnimation()?o.setAnimation(null):o.setAnimation(t.maps.Animation.BOUNCE),setTimeout(function(){o.setAnimation(null)},1e3)})})})}},{key:"render",value:function(){return a.a.createElement("div",{id:"map"})}}]),e}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},8:function(n,e,t){n.exports=t(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.267b0d0a.chunk.js.map