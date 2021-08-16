// selecting all section tags in one variable
let sections = document.querySelectorAll("section");
//applying for each loop to iterate through each section 
//
sections.forEach(addNavigate);
//through a function i will add link in the nav bar to each section 
function addNavigate(elem){
      /*adding the navigation menu as unordered list
      *selecting ul tag to add to it the li 
      linking each li tag to each section tag*/
      let parentul = document.getElementById("navbar__list") ;
      let childli = document.createElement("li");
      parentul.appendChild(childli);
}