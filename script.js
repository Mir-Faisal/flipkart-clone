// const loginbtn = document.querySelector(".login-btn");
// const crossbtn = document.querySelector(".cross-btn");
//to display login popup
// loginbtn.addEventListener("click ", function(){
//     document.querySelector(".container-popup-login").style.display = "none";
// })

// document.querySelector(".navbar-items").style.fontSize = "30px"
// document.querySelector(".navbar-items").style.color = "green"

// to display off login popup
// crossbtn.addEventListener("click", function(){
//     document.querySelector(".container-cross-btn").style.display = "none";
// })
const loginbtn = document.querySelector(".login-btn");
// console.log(loginbtn);
const crossbtn = document.querySelector(".cross-btn");

loginbtn.addEventListener("click", function(){
    document.querySelector(".container-popup-login").style.display = "flex"
})
crossbtn.addEventListener("click", function(){
    document.querySelector(".container-popup-login").style.display = "none"
}) 
