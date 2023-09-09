//your code here
const imgs=document.getElementsByClassName("image");
let count=1;
let id='';

for(let i=0;i<imgs.length;i++){
	
	imgs[i].setAttribute ("id",`div${i+1}`);
	let img=imgs[i];
	
	img.addEventListener('dragstart', (e)=>{
		id=img.id;
		setTimeout(()=>{
			img.id=x;
		})   
		
		
		
	})
	img.addEventListener('dragover', (e)=>{
		e.preventDefault()
		
		
	})
	}
for(let i=0;i<imgs.length;i++){
	
	
	let img=imgs[i];

	img.addEventListener('drop',(e)=>{
		e.preventDefault();
		x=e.target.id;
	
		
		e.target.id=id; 
		id=x;
		
		console.log(e.target);   
	})
	}

