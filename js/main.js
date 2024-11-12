// start Get CALSSES AND ID 
let navbar = document.querySelector(".navbar");
let navbox = document.querySelector(".nav-box");
let close = document.querySelector(".close-nav");
let loader = document.getElementById("loader");
let scroll = document.getElementById("scroll");
let list = document.querySelectorAll(".works li");
const filterItems = document.querySelectorAll(".buttons-work li");
const projects = Array.from(document.querySelectorAll(".projects li"));

// START NAVBAR
navbox.addEventListener("click", function () {
  navbar.classList.toggle("nav-open");
});


close.addEventListener("click", function () {
  navbar.classList.remove("nav-open");
});

// START LOADER
window.onload = function () {
  setTimeout(function () {
    loader.style.opacity = "0";
    loader.remove();
    return clearInterval(loader);
  }, 2000);
};


// SCROLL TO TOP
scroll.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.addEventListener("scroll", function () {
  if (window.scrollY >= 500) {
    // console.log("scroll");
    scroll.style.opacity = "1";
  } else {
    // console.log("no scroll");
    scroll.style.opacity = "0";
  }
});
// ADD AND REMOVE ACTIVE CLASS
list.forEach(function (link) {
  link.addEventListener("click", function () {
    list.forEach(function (link) {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// PROJECTS FILTER
filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    const cat = item.getAttribute("data-category");


    const filteredProjects = projects.filter((project) => {
      //show all projects if category is'all'
      if (cat === "all") return true;
      // show specefic projects 
      return project.classList.contains(cat);
    });   
    // hide all projects in start
    projects.forEach((project) => {
      project.style.display = "none";
    });
    
    //show projects filtered 
    filteredProjects.forEach((project) => {
      project.style.display = "block";
    });
  });
});
 
/* START OWL CAROUSEL */
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 4,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  dots: false,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

/* END OWL CAROUSEL */

// typed js
let typed = new Typed("#head-name", {
  strings: [" Ahmed abdellatif ", "  Frontend Developer"],
  typeSpeed: 150,
  loop: true,
  shuffle: true,
});

// typed js
let loaderTyped = new Typed("#loader-title", {
  strings: ["Ahmed abdellatif "],
  typeSpeed: 100,
  loop: true,
  shuffle: true,
});


