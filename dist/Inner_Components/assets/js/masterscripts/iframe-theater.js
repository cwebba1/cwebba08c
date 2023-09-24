//* iframe-theater.js 031522
//* iframe-theater.js 091421
const descriptionBox = document.getElementById("description-box");
descriptionBox.classList.add("description");
const descriptionTitle = document.createElement("div");
descriptionTitle.classList.add("headline");
const descriptionCutline = document.createElement("div");
descriptionCutline.classList.add("cutline");

descriptionBox.appendChild(descriptionTitle);
descriptionBox.appendChild(descriptionCutline);

var links, title, cutline;
var links = document.getElementById("proto-list").getElementsByTagName("a");

	for(var i=0; i < links.length; i++){
  links[i].addEventListener("click", activateItem);
function activateItem(e) {
  let title = e.target.dataset.title;
    if( title ){
    descriptionTitle.innerHTML=`<h4 class="headline">${title}</h4>`; 
    }

  let cutline = e.target.dataset.cutline;
  if( cutline )
  {
    descriptionCutline.innerHTML=`<p class="caption">${cutline}</p>`; 
  }

//  alert("Click Detected!");

};
window.addEventListener('load', (event) => {
    descriptionTitle.innerHTML = `<h4 class="headline">${links[0].dataset.title}</h4>`;
    descriptionCutline.innerHTML=`<p class="caption">${links[0].dataset.cutline}</p>`; 
});
}

