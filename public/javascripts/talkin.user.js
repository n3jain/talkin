// ==UserScript==
// @name speak my name
// @namespace women's hackday
// @description linkedin page modification
// @include http://www.linkedin.com/profile/view?id*
// ==/UserScript==
var profile_id=document.getElementsByName('UniqueID')[0].getAttribute('content')
var owner_id = document.getElementById('nav-primary-profile').getElementsByTagName('li')[1].firstChild.href.match(/id=(\d+)/)[1];
var is_owner = (owner_id === profile_id) ? true : false;
iframe_src =  "http://alhomora.herokuapp.com/iframe_handler/"+profile_id+"/"+is_owner;
ifrm = document.createElement("IFRAME");
ifrm.setAttribute("src", iframe_src);
ifrm.style.width = 400+"px";
ifrm.style.height = 200+"px";
document.getElementsByClassName('full-name')[0].appendChild(ifrm);

