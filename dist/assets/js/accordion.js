/*! accordion.js 070620 
* from CWebba07 01/28/17, 
* w3schools_Animated-Accordion
 */
var i,acc=document.getElementsByClassName("accordion");for(i=0;i<acc.length;i++)acc[i].onclick=function(){this.classList.toggle("active");var t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"};