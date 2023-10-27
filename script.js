// const login = document.createElement('div')
// const container = document.querySelector(".container")
const body = document.querySelector("body")
// login.setAttribute('class', 'login')    
// // container.append(login)
const btn = document.querySelector(".header-button button")
// btn.addEventListener("click", () => logi)
// btn.addEventListener("click", () => setColor(body))


// const element = document.querySelector("btn");
// btn.addEventListener("keydown", animate());



// function animate (){
//     btn.addEventListener("click",   () => {
//         const colors = ["red", "blue", "green", "yellow", "purple"];
//         const randomColor = colors[Math.round(Math.random() * colors.length)];
//         body.style.background = randomColor;
//         body.style.transition = "0.3s"
//       });
//       btn.addEventListener("mouseover",   () => {
//         const colors = ["red", "blue", "green", "yellow", "purple"];
//         const randomColor = colors[Math.round(Math.random() * colors.length)];
//         body.style.background = randomColor;
//         body.style.transition = "0.3s"
//       });
// }




// const headerNav = document.querySelectorAll('.header-nav a');
// headerNav.foreEach
const theme = document.querySelector(".theme");
const button = document.querySelector(".themeButton");
theme.style.marginLeft = "5px";
theme.addEventListener("click", () => themeButton())




function themeButton(){

  if(theme.style.marginLeft === "5px"){
    body.style.background = "black";
  body.style.transition = "0.3s"
  theme.style.marginLeft = "30px"
  // theme.style.media(m) = "margin-left:30px"
  // button.style.border = "1px solid green"
  button.style.boxShadow = "1px 1px 30px 10px #fff"
    

  }else{
    theme.style.boxShadow =""
  body.style.background =""
  theme.style.marginLeft = "5px"
  // button.style.border = ""
  button.style.boxShadow = ""

  }

}

