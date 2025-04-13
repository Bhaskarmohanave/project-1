const burgerMenuBtn = document.getElementById("burger-menu");
const menu = document.getElementById("menu");
const darkModeIcon = document.getElementById("dark-mode-icon");
const main = document.querySelector("main");
const expBtn = document.querySelector(".explore-button");
const hero = document.querySelector(".hero");



burgerMenuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

console.log("Script loaded successfully.");





expBtn.addEventListener("click", changeContent);

// ("click", () => {
//   // main.classList.toggle("active");
//   // hero.classList.toggle("active");
//   hero.innerHTML = `<main>
//         <div class="categories">
//           <div class="img-1"><img class="img-11" src="../assets/images/islands.jpg"><div class="overlay"></div><p class="title">Islands</p></div>
//           <div class="img-1"><img class="img-11" src="../assets/images/adventures.jpg"><div class="overlay"></div><p class="title">Adventurous</p></div>
//           <div class="img-1"><img class="img-11" src="../assets/images/historic-2.jpg"><div class="overlay"></div><p class="title">Historic</p></div>
//           <div class="img-1"><img class="img-11" src="../assets/images/lakes.jpg"><div class="overlay"></div><p class="title">Lakes</p></div>
//           <div class="img-1"><img class="img-11" src="../assets/images/nature.jpg"><div class="overlay"></div><p class="title">Nature</p></div>
//           <div class="img-1"><img class="img-11" src="../assets/images/restuarents.jpg"><div class="overlay"></div><p class="title">Restuarents</p></div>
//           <div class="img-1"><img class="img-11" src="../assets/images/temples-2.jpg"><div class="overlay"></div><p class="title">Temples</p></div>
//           <div class="img-1"><img class="img-11" src="../assets/images/urban-areas.jpg"><div class="overlay"></div><p class="title">Urban</p></div>
//         </div></main>`;
// });

function changeContent(){
  hero.classList.add("hide");
 
  setTimeout(() => {
    hero.innerHTML = `<main>
        <div class="categories">
          <div class="img-1"><img class="img-11" src="../assets/images/islands.jpg"><div class="overlay"></div><p class="title">Islands</p></div>
          <div class="img-1"><img class="img-11" src="../assets/images/adventures.jpg"><div class="overlay"></div><p class="title">Adventurous</p></div>
          <div class="img-1"><img class="img-11" src="../assets/images/historic-2.jpg"><div class="overlay"></div><p class="title">Historic</p></div>
          <div class="img-1"><img class="img-11" src="../assets/images/lakes.jpg"><div class="overlay"></div><p class="title">Lakes</p></div>
          <div class="img-1"><img class="img-11" src="../assets/images/nature.jpg"><div class="overlay"></div><p class="title">Nature</p></div>
          <div class="img-1"><img class="img-11" src="../assets/images/restuarents.jpg"><div class="overlay"></div><p class="title">Restuarents</p></div>
          <div class="img-1"><img class="img-11" src="../assets/images/temples-2.jpg"><div class="overlay"></div><p class="title">Temples</p></div>
          <div class="img-1"><img class="img-11" src="../assets/images/urban-areas.jpg"><div class="overlay"></div><p class="title">Urban</p></div>
        </div></main>`;
    hero.classList.remove("hide");
  }, 500);

  
}
