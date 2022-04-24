
function opn(){
				document.getElementById("bdy2").style.display = "none";
				document.getElementById("bdy1").style.display = "block";document.getElementById("hom").style.color = "white";
document.getElementById("abts").style.color = "white";
document.getElementById("us").style.color = "rgb(180,160,95)";
document.getElementById("hb").style.position = "fixed";
}
function cls(){
				document.getElementById("bdy2").style.display = "block";
				document.getElementById("bdy1").style.display = "none";document.getElementById("bdy1").style.display = "none";
				document.getElementById("hom").style.color = "rgb(180,160,95)";
document.getElementById("abts").style.color = "white";
document.getElementById("us").style.color = "white";
document.getElementById("hb").style.position = "relative";
}
function hi(){
document.getElementById("tit1").style.left="0%";document.getElementById("tit2").style.right="0%";document.getElementById("img").style.width="50%";document.getElementById("img").style.marginTop="5vw";}
function gee(){
var h = document.getElementById("html");
var c = document.getElementById("css");
var j = document.getElementById("js");
				if(document.body.scrollTop > 370 || document.documentElement.scrollTop > 370 )
{h.style.width="90%";c.style.width="85%";j.style.width="80%";}
}
var i = 0;
var f = 0;
var cs = 0;
var jv = 0;
function load() {
  if (i == 0 && f == 0 &&  document.body.scrollTop > 370 || document.documentElement.scrollTop > 370 ) {
    i = 1;
 var htmlv = document.getElementById("html");
 var cssv = document.getElementById("css");
 var jsv = document.getElementById("js");
    var htmls = setInterval(html,20);
    var csss = setInterval(css,20);
    var jss = setInterval(js,20);
    function html() {
      if (f >= 90)
  { clearInterval(htmls); i = 0 } 
  else {f++;htmlv.innerHTML = f + "%";}}
  function css() {
      if (cs >= 85)
  { clearInterval(csss); i = 0 } 
  else {cs++;cssv.innerHTML = cs + "%";}}
  	function js(){
 if(jv >= 80){clearInterval(jss);i = 0}
 else{jv++;jsv.innerHTML = jv + "%"}}
}
}
var j = 0;
var p = 0;
var pd = 0;
var h = 0;
var m = 0;
function read(){
	if(j==0 && p==0 && document.body.scrollTop > 600 || document.documentElement.scrollTop > 600)
	{j=1;
		var a = document.getElementById("p");
		var a1 = document.getElementById("pd");
		var a2 = document.getElementById("h");
		var a3 = document.getElementById("m");
		var b =setInterval(red,100);
		var b1 = setInterval(red1,100);
		var b2 = setInterval(red2,100);
		var b3 = setInterval(red3,100);
		function red(){
		if( p >= 11){clearInterval(b);j=0;}
		else{p++;a.innerHTML=p;}
		}
		function red1(){
		if(pd >= 20){clearInterval(b1);j=0;}
		else{pd++;a1.innerHTML=pd;}
		}
		function red2(){
		if(h >= 30){clearInterval(b2);j=0;}
		else{h++;a2.innerHTML=h;}
		}
				function red3(){
		if(h >= 30){clearInterval(b3);j=0;}
		else{m++;a3.innerHTML=m;}
		}
	}
}
function swi1(){
var a = document.getElementById("hom").style;
var b= document.getElementById("abts").style;
var c= document.getElementById("skis").style;		if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300 && document.body.scrollTop < 465 && document.documentElement.scrollTop < 465)
				{a.color = "white";b.color="rgb(180,160,95)";c.color=" white"}
else if(document.body.scrollTop > 470 || document.documentElement.scrollTop > 470)
				{a.color = "white";c.color="rgb(180,160,95)";b.color=" white"}
				else{a.color = "rgb(180,160,95)";b.color="white";c.color=" white"}}


