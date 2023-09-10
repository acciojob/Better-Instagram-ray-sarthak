//your code here
const imgs=document.getElementsByClassName("image");
let dragindex=0;
let dropindex=0;
let clone="";

for(let i=0;i<imgs.length;i++){
	
	imgs[i].setAttribute ("id",`div${i+1}`);
	let img=imgs[i];
	imgs[i].setAttribute("ondragstart","drag(event)");
	imgs[i].setAttribute("ondrop","drop(event)");
	imgs[i].setAttribute("ondragover","allowDrop(event)");
	
}
/////////
function drag(e)
{
e.dataTransfer.setData("text",e.target.id);
}
function drop(e)
{
e.preventDefault();
clone=e.target.cloneNode(true);
let data=e.dataTransfer.getData("text"); 
if(clone.id !== data) {
let nodelist=document.getElementById("parent").childNodes;
for(let i=0;i<nodelist.length;i++)
{
if(nodelist[i].id==data)
{
dragindex=i;
}

}

document.getElementById("parent").replaceChild(document.getElementById(data),e.target);

document.getElementById("parent").insertBefore(clone,document.getElementById("parent").childNodes[dragindex]);
  }

}

function allowDrop(e)
{
    e.preventDefault();
}
