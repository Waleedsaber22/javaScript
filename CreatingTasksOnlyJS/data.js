let createTasks = document.getElementsByClassName("add")[0];
let input = document.getElementsByClassName("input")[0];
let taskSpan = document.createElement("span");
let taskdiv = document.createElement("div");
let tasksdiv = document.getElementsByClassName("tasks")[0];
let Delete = document.createElement("button");
let Container = document.getElementsByClassName("container")[0];
taskdiv.appendChild(taskSpan);
taskdiv.appendChild(Delete);
tasksdiv.appendChild(taskdiv);
Delete.innerHTML = "Delete";
taskdiv.style.cssText = 
"display: flex; \
justify-content: space-between; \
align-items: center; \
width: 750px; \
height: 50px; \
margin: 20px; \
background-color: white; \
border-radius: 7px;";

Delete.style.cssText = "    padding: 10px; \
background-color: rgb(255 177 31); \
border-radius: 6px; \
font-size: 10px; \
text-align : center; \
font-weight: bold; \
font-family: Tahoma; \
width:100px;  \
margin: 20px 30px; \
color: black; \ ";
taskSpan.style.cssText = "width: 700px; \
 padding : 15px; background-color:white; font-size:15px; margin:10px; border-radius: 7px; ";
taskdiv.style.visibilty = "hidden";
taskdiv.style.opacity = "0";
let i = 0;
let taskCopyArray = [];
let lineArray = [];
let taskSpanArray = [];
let Tasks = [];
createTasks.addEventListener("click",function () {
if(input.value !== "" ){  
if(i === 0){
let line = document.createElement("hr");    
lineArray[i] = line;
line.style.cssText = "background-color: black; width: 750px;";
tasksdiv.prepend(line);
taskCopyArray[i] = taskdiv;
taskSpanArray[i] = taskCopyArray[i].firstChild;
taskCopyArray[i].style.visibilty = "visible";
taskCopyArray[i].style.opacity = "1";
taskSpanArray[i].textContent = input.value;
input.value = "";
taskCopyArray[i].id =`${100000 + Math.pow(2,i)}`;
taskSpanArray[i] = taskCopyArray[i].firstChild;
taskSpanArray[i].id =`${100000 + Math.pow(2,i)}`;
Tasks[i] = {title : `${taskSpanArray[i].textContent}` , 
id : `${taskSpanArray[i].id}`};
window.localStorage.setItem(`${i}`,JSON.stringify(Tasks[i]));
i++;
}else{    
taskCopy = taskdiv.cloneNode(true);
taskCopyArray[i] = taskCopy;
taskCopyArray[i].id =`${100000 + Math.pow(2,i)}`;
taskSpanArray[i] = taskCopyArray[i].firstChild;
taskSpanArray[i].id =`${100000 + Math.pow(2,i)}`;
let line = document.createElement("hr");
lineArray[i] = line;
lineArray[i].id =`${100000 + Math.pow(2,i)}`;
line.style.cssText = "background-color: black; width: 750px;";
tasksdiv.appendChild(line);
tasksdiv.appendChild(taskCopy);
taskSpanArray[i].textContent = input.value;
input.value = "";
Tasks[i] = {title : `${taskSpanArray[i].textContent}` , 
id : `${taskSpanArray[i].id}`};
window.localStorage.setItem(`${i}`,JSON.stringify(Tasks[i]));
i++;
}}})

// if(n >= 1){
// Delete.onclick = (e) => {

//     console.log(e.target.parentElement);
// window.localStorage.removeItem(`${Math.log2((-100000 + +e.target.parentElement.id))}`);
// e.target.parentElement.remove();
// e.target.parentElement.perviousSibling.remove();
// }
// }
let d = 0;
document.addEventListener("click",function (e) {
if(+e.target.parentElement.id >= 100000){
window.localStorage.removeItem(`${Math.log2((-100000 + +e.target.parentElement.id))}`);
if(e.target.parentElement.previousSibling === null){
e.target.parentElement.remove();
}else{
    e.target.parentElement.previousSibling.remove();
    e.target.parentElement.remove();
}  
}})
let k = 0;
let j = 0;
let C = -1;
let Max_Key = [];
while(window.localStorage.key(j) !=null)
{
    Max_Key[j] = +window.localStorage.key(j);
    C = Math.max(...Max_Key);   
    j++;
};
for( i = 0 ; i  <= C  ; i++){
 if(window.localStorage.getItem(`${i}`) !== null){
    k++;
if(k === 1){
let line = document.createElement("hr");
lineArray[i] = line;
tasksdiv.prepend(line);
line.style.cssText = "background-color: black; width: 750px;";
taskCopyArray[i] = taskdiv;
taskSpanArray[i] = taskCopyArray[i].firstChild;
taskCopyArray[i].style.visibilty = "visible";
taskCopyArray[i].style.opacity = "1";
taskCopyArray[i].id = `${100000 + Math.pow(2,i)}`;
taskSpanArray[i].id = `${100000 + Math.pow(2,i)}`;
taskSpanArray[i].textContent = window.localStorage[i].slice(10,window.localStorage[i].indexOf(",")-1);
    }else{
taskCopy = taskdiv.cloneNode(true);
taskCopyArray[i] = taskCopy;
taskCopyArray[i].id =`${100000 + Math.pow(2,i)}`;
taskSpanArray[i] = taskCopyArray[i].firstChild;
taskSpanArray[i].id =`${100000 + Math.pow(2,i)}`;
let line = document.createElement("hr");
lineArray[i] = line;
lineArray[i].id =`${100000 + Math.pow(2,i)}`;
line.style.cssText = "background-color: black; width: 750px;";
tasksdiv.appendChild(line);
tasksdiv.appendChild(taskCopy);        
taskSpanArray[i].textContent = window.localStorage[i].slice(10,window.localStorage[i].indexOf(",")-1);
    }
}}

// window.localStorage.clear();