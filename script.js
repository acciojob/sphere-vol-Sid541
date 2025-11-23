let radius = document.querySelector("#radius");
let volume = document.querySelector("#volume");
let calculate = document.querySelector("#submit");

console.dir(volume)

calculate.addEventListener("click",function(e){
  e.preventDefault();
	
  let r=Number(radius.value)
	if(r>0){
		let ans=((4/3)*3.14*r*r*r);
     volume.value=ans;
	}
	else{
		volume.value="NaN"
	}
})
