/* 
   creating List dynamically using java script:
   -----------------------------------------------------------
   first: get section's elements to minuplate it and determine number of sections that contained in page
   second: creating li elements and anchors tag based on number of section
   third: set Attributes to li and anchors elements
*/

let sections = document.querySelectorAll('section');
let menu = document.querySelector('.nav_menu_list');
let sections_arr = Array.from(sections);
let list_arr = [];
for(let i = 0;i<sections_arr.length;i++){
 const list = document.createElement('li');
 list.setAttribute('id',`list_section_${i+1}_id`);
 list.setAttribute('class',`list_section_${i+1}`);
 const link = document.createElement('a');
 link.setAttribute('href',`#${sections_arr[i].id}`);
 link.setAttribute('target','_self');
 link.innerHTML = sections_arr[i].dataset.list;
 list.appendChild(link);
 list_arr[i] = list;
}
if(sections_arr.length != 0) menu.append(...list_arr);

/* adding active class to each section when scrolling to it */

let offset = 160; // offset added to active section
/* also adding class to slide up page*/
let slide = document.querySelector('.slide_up');
slide.classList.add('slide_hidden');
let add_class = () =>{
    for(const section_add of sections){                               
            if( section_add.getBoundingClientRect().y > -section_add.offsetHeight + 2*offset
            && section_add.getBoundingClientRect().y <= 1.5*offset){
                section_add.classList.add('active');
            }else  section_add.classList.remove('active');
        }
    if(window.scrollY <= 1.3*window.innerHeight) slide.classList.add('slide_hidden');
    else  slide.classList.remove('slide_hidden');
    }
window.addEventListener('scroll',add_class);

/* adding scroll behavior */

menu.addEventListener('click',(eve)=>{                // using event delegation for more preformance
eve.preventDefault();
if(eve.target.nodeName.toLowerCase() == 'a'){
const ele = document.querySelector(eve.target.href.slice(eve.target.href.lastIndexOf('/')+1));
// ele.scrollIntoView({behavior:'smooth',
// block:'center',inline:"nearest"});
window.scrollTo({top:ele.offsetTop-90,left:ele.offsetLeft,behavior:'smooth'});
 }
})
slide.addEventListener('click',(eve)=>{
    eve.preventDefault();
    window.scrollTo({top:0,left:0,behavior:'smooth'});
})

/* adjust margin of header_name according to nav list numbers */
let header_name = document.querySelector('.header_name');
header_name.style.marginTop = `${menu.offsetHeight+ 40}px`; 

/* hide navigation bar every 2.5 seconds when user stop scrolling */

let is_scroll = false;
let timer_id;
let nav = document.querySelector('.nav_menu');
let is_hidden = false;

let hide_nav = ()=> {
    nav.style = `position:fixed;transition: top 1s ease;top:${-nav.offsetHeight-10}px;`;
    is_hidden = true;   
}
scrolled = () =>{
     if(is_hidden)nav.style = 'transition: top 1s ease;';
     is_hidden = false;
    clearTimeout(timer_id);
    timer_id = setTimeout(hide_nav,2500);
}
window.addEventListener('scroll',scrolled);

/* adding functionality when moving mouse up nav bar appear*/
window.addEventListener('mousemove',(eve)=>{
if((eve.clientY <= nav.offsetHeight) && is_hidden){
    is_hidden = false;
    nav.style = 'transition: top 1s ease;';
    clearTimeout(timer_id);
    timer_id = setTimeout(hide_nav,2500);
} 
});