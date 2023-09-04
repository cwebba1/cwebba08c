/*! map-modal.js 060220 - from CWebba06 2014
* MapJavaScript */
window.onload=function() {
var map_btn = document.getElementById('mapBtn');
var fadar = document.getElementById('map_fadar');
var map_box = document.getElementById('map_box');
var closemap = document.getElementById('map-closeBtn');
//Display modal box
map_btn.onclick=function() {
   fadar.style.display = "block";
   map_box.style.display = "block";}
//Hide map Box
closemap.onclick = function() {
    fadar.style.display = "none";
    map_box.style.display = "none";}

// ModalJavaScript
var modal_btn = document.getElementById('modalBtn');
var fader = document.getElementById('modal_fader');
var modal_box = document.getElementById('modal_box');
var closemodal = document.getElementById('modal-closeBtn');
//Display modal box
modal_btn.onclick=function() {
   fader.style.display = "block";
   modal_box.style.display = "block";}
//Hide modal Box
closemodal.onclick = function() {
    fader.style.display = "none";
    modal_box.style.display = "none";}};
