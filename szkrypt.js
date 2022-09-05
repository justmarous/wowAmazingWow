


const spaceship = document.querySelector(".callmemaybe");
const navDiwy = document.querySelectorAll("nav .goto");
let spaceshipColor = true;
let lecim = document.querySelector(".blackfieldContainer")


console.log("start");

spaceship.addEventListener("click", function(){

  if(spaceshipColor==true){
  this.classList.add("whiteNow");
  spaceshipColor=false;
  lecim.classList.add("nakladka");
  return 0;
  }

  if(spaceshipColor==false){
    this.classList.remove("whiteNow");
    spaceshipColor = true;
    lecim.classList.remove("nakladka");
  }

}
)
navDiwy.forEach(element => {
  navDiwy.addEventListener("mouseover", function(){
    navDiwy.classList.add("whiteNow");
  })
});


