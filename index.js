const close = document.getElementById("close");
 function openmenu(){
    if(nav.style.left=="-300px"){

        close.src= "close.png"    ;
        // close.style.background = "black"
    nav.style.left = "0px";
    }else{
        close.src = "menu.png";
        nav.style.left = "-300px"
        // close.style.background="black"
    }
}
let i =0;
function quotes (){ 
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  console.log(data)
quote.innerHTML = data[i].text ;
authors.innerHTML = data[i].author

});
}

quotes()
function reversequotes(){
  i--;
  console.log(i)
  quotes();
  if(i==-1)
  alert("cant go back")
}

function newquotes(){
    i++;
    quotes()
}
 
//  button.addEventListner("click",()=>{
//     console.log("hello")
//  })
