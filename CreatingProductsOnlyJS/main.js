let Header = document.createElement("header");
let nav = document.createElement("div"); // navvv main
let logo = document.createElement("div"); // logo name
let menu = document.createElement("ul");  // Menu
let option1 = document.createElement("li");
let option2 = document.createElement("li");
let option3 = document.createElement("li");
let option4 = document.createElement("li");
let option1Text = document.createTextNode("Home");
let option2Text = document.createTextNode("About");
let option3Text = document.createTextNode("Service");
let option4Text = document.createTextNode("Contact");
let logoText = document.createTextNode("Waleed");
nav.className = "Nav-menu";
logo.className = "logo-menu";
option1.className = "home-menu";
option2.className = "about-menu";
option3.className = "service-menu";
option4.className = "Contact-menu";
let options = [option1,option2,option3,option4];
option1.appendChild(option1Text);
option2.appendChild(option2Text);
option3.appendChild(option3Text);
option4.appendChild(option4Text);
logo.appendChild(logoText);
nav.appendChild(logo);
menu.appendChild(option1);
menu.appendChild(option2);
menu.appendChild(option3);
menu.appendChild(option4);
nav.appendChild(menu);
Header.appendChild(nav);
document.body.appendChild(Header);
document.body.style.cssText = "margin:0px; background-color:#dedede";
nav.style.cssText = 
"display: flex; justify-content: space-between; background-color:white; height: 60px;";
logo.style.cssText = 
"display: flex; align-items:center; margin-left:30px;\
font-size: 17px; font-family: Tahoma; color:#116889; font-weight:bold;";
menu.style.cssText = 
"margin-top:0px; list-style-type: none; display: flex; flex-direction:row;\
justify-contents: center; align-items:center; height:100%";
let product = {};
let products = {};
options.map( (ele) =>{
ele.style.cssText = "margin:0px 20px; font-size: 20px;display: flex;\
justify-contents: center; align-items:center;color:grey;height:100%;";
ele.addEventListener("mouseleave",(e) => {
  e.target.style.border = "none";
})
ele.onmouseenter= (e) =>{
  e.target.style.borderBottom = "2px solid black";
 }
})
let C = 0;
for(i = 0 ; i < 5 ; i++){
  
let contents = document.createElement("div");
contents.className = `contents ${i+1}`;
for(j = 0 ; j < 3 ; j++){
    product = document.createElement("div");
let productSpan = document.createElement("span");
let product2 = document.createElement("span");
let span2 = document.createTextNode("product");
let productSpanText = document.createTextNode(`${++C}`);
productSpan.appendChild(productSpanText);
product2.appendChild(span2);
product.appendChild(productSpan);
product.appendChild(product2);
product.className = `product ${C}`;
product.style.cssText = "padding:13px; margin:10px; display:block;\
 width: calc((100%-40px)/3); background-color:white;";
productSpan.style.cssText = "font-size : 40px; display: block;\
margin-top:10px; margin-bottom:10px; text-align:center;";
product2.style.cssText = "font-size:10px;text-align:center;color:grey;display:block;";
product.addEventListener("mouseleave",(e) => {
  e.target.style.backgroundColor = "white";
})
product.onmouseenter = (e) =>{
  e.target.style.backgroundColor = "#cc99ff";
 }
products[i] = product;
contents.appendChild(products[i]);
}
document.body.appendChild(contents);
contents.style.cssText = " display: flex; justify-content: space-between;";
}
let Footer = document.createElement("footer");
// let footerText = document.createTextNode("Copyright &reg; 2022");
Footer.innerHTML = "Copyright &reg; 2022"
// Footer.appendChild(footerText);
document.body.appendChild(Footer);
Footer.style.cssText = "background-color: #9dc99d;font-size:26px;padding:20px;text-align:center";
