var menu = document.querySelector(".nav.navbar-nav.navbar-right").children;

for(i=0; i< menu.length; i++) {
  menu[i].onmouseover= function() {
    this.children[0].style.cssText = "color:white; opacity:0.8;";
  }

  menu[i].onmouseout=function(){
    this.children[0].style.cssText = "color:white; opacity:1;";
  }
}
