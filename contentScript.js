(()=>{
 console.log('content file console')
 let div = document.createElement('div');
 // div.setAttribute("height", "200px") 
 // div.setAttribute("width", "200px")
 // div.setAttribute("border","2px solid red") 
 let ageInputStart = document.createElement('input')
 let ageInputEnd = document.createElement('input')
 let breakLine = document.createElement('br')
 
 let countCheckButton = document.createElement('button')
 countCheckButton.innerText="Check Voter Count";
 countCheckButton.setAttribute("id","voter_count_button");
 let selectAge = document.getElementById("ageList");

 




 console.log(document.querySelector("#tab1 > form > fieldset > div > div.one.whole.padded > div.row > div > div > div"))

 let appendElement = document.querySelector("#tab1 > form > fieldset > div > div.one.whole.padded > div.row > div > div > div");
 appendElement.append(ageInputStart,ageInputEnd, countCheckButton);
 
 let checkVoterCount = ()=>{
  console.log('click on button')
  console.log(selectAge)
  selectAge.value='number:18'
  // localStorage.setItem('age',18)
  let d= {
  age_18:"25",
  age_23:"45",
  age_28:"55",
  age_31:"65",
  }
  console.log('json',JSON.stringify(d))
   let showCountDiv=document.createElement('div');
   let z=1;
   for(let value in d){
    appendElement.append(document.createElement('button').innerText=value+" : count:"+d[value]+" ")
    console.log(value, d[value])
   }
   // appendElement.append(showCountDiv)
 }




 countCheckButton.addEventListener("click",checkVoterCount)

 // change age value
 // let selectAge = document.getElementById("ageList");
 


 



})();

