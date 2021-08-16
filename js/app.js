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
      childli.innerHTML= `<a class='menu__link' href='#${anchor}'>${naming}</a>`;
};
//calling the function 
//addNavigate(elem);

// distinguish section in view port 
window.addEventListener("scroll", viewport);
function viewport(){    
      for( const section of sections){
      let site = section.getBoundingClientRect();
      console.log(site.top);
      if(site.top > 0 && site.top < 245 ){
            section.classList.add("your-active-class");
      }else{
            section.classList.remove("your-active-class");
      };
}


};

      
     
           
        

let lists = document.querySelectorAll("li");
console.log(lists);
for(let i=0 ; i<lists.length ; i++){
      lists[i].addEventListener("click", function(){
              lists[i].scrollIntoView({behavior: "smooth"});
                  
            });
};


