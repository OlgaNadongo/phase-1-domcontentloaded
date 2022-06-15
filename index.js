// Your code goes here
// document.addEventListener("DOMContentLoaded" , function(){
//     console.log("The dom has loaded")
// } );
// console.log("This fires when index.js loads- before DOMContentLoaded is triggered")

document.addEventListener("DOMContentLoaded",function(){
    console.log("JavaScript is so cool. It lets me add text to my page programmatically." )
    document.querySelector("#text").textContent="This is really cool!"

})
console.log("This is really cool!")


