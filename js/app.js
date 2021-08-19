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
      // anchor to the specific section using its specific attribute
      //name linking each individual nav menu to its specific section using specific attribute too
      let anchor = elem.getAttribute("id");
      //console.log(anchor);
      let naming = elem.getAttribute("data-nav");
      // adding menu_link class to the li to determine its place and style
      childli.innerHTML= `<a class='menu__link' href='#${anchor}'>${naming}</a>`;
      //add functionality to acheive smooth scroll
      let linkclick = document.querySelectorAll("a");
      // console.log(linkclick);
      //add event listener to the link
      /*linkclick.addEventListener("click",smoothy);
      // defining the add listener function
      function smoothy (event){
           event. preventDefault()
            elem.scrollIntoView({behavior:"smooth"});
      }*/
};
//calling the function 
//addNavigate(elem);

// distinguish section in view port
//add the scroll event listener with a function 
window.addEventListener("scroll", viewport);
// establishing the function for the event listener with a loop to iterate through different sections      
function viewport(){   
       
      for( const section of sections){
            //using getbound method to determine which section in the view port
            let site = section.getBoundingClientRect();
            //console.log(site.top);
            // adding the active class to the section in view port
            if(site.top > 0 && site.top < 245 ){
                  
                  section.classList.add("your-active-class");
                  

                  // removing active class from section not in view port
            }else{
                  section.classList.remove("your-active-class");
                
            };
       }
       

};
//add active state to the link being clicked
// manipulating dom to choose all links in nav bar
const mylinks = document.querySelectorAll("a");
//console.log(mylinks);
// iterating through all links
for(let i = 0 ; i<mylinks.length ; i++){
      //add click event listener
mylinks[i].addEventListener("click", clickfunction);
// define event listener function
function clickfunction(){
      for(let m = 0 ; m < mylinks.length ; m++){
            // using remove and add classlist method to make only the clicked link distingueshed from the non clicked one
      mylinks[m].classList.remove("activelink");
      this.classList.add("activelink");
      }
}
};








      
     