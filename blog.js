let navbar = document.querySelector(".navbar");
let links = document.querySelector("ul");
let navbarx = document.querySelector(".navbarx")
let n = 0;

navbar.addEventListener("click", () => {
    links.style.display = "flex";
    navbar.style.display = "none";
    navbarx.style.display = "flex";

});

navbarx.addEventListener("click", () => {
    links.style.display = "none";
    navbar.style.display = "flex";
    navbarx.style.display = "none";
});

/*************************************************************************************************/

let a = document.querySelectorAll(".links");

a.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.dataset.link == "home") {
            a[0].style.color = "#F9BF29";
            a[1].style.color = "#ffffffc2";
            a[2].style.color = "#ffffffc2";
            a[3].style.color = "#ffffffc2";
            a[4].style.color = "#ffffffc2";
            a[5].style.color = "#6A6A6A";
            a[6].style.color = "#6A6A6A";
            a[7].style.color = "#6A6A6A";
            a[8].style.color = "#6A6A6A";
        }
        if (item.dataset.link == "about") {
            a[0].style.color = "#ffffffc2";
            a[1].style.color = "#F9BF29";
            a[2].style.color = "#ffffffc2";
            a[3].style.color = "#ffffffc2";
            a[4].style.color = "#ffffffc2";
            a[5].style.color = "#F9BF29";
            a[6].style.color = "#6A6A6A";
            a[7].style.color = "#6A6A6A";
            a[8].style.color = "#6A6A6A";
        }
        if (item.dataset.link == "services") {
            a[0].style.color = "#ffffffc2";
            a[1].style.color = "#ffffffc2";
            a[2].style.color = "#F9BF29";
            a[3].style.color = "#ffffffc2";
            a[4].style.color = "#ffffffc2";
            a[5].style.color = "#6A6A6A";
            a[6].style.color = "#F9BF29";
            a[7].style.color = "#6A6A6A";
            a[8].style.color = "#6A6A6A";
        }
        if (item.dataset.link == "blog") {
            a[0].style.color = "#ffffffc2";
            a[1].style.color = "#ffffffc2";
            a[2].style.color = "#ffffffc2";
            a[3].style.color = "#F9BF29";
            a[4].style.color = "#ffffffc2";
            a[5].style.color = "#6A6A6A";
            a[6].style.color = "#6A6A6A";
            a[7].style.color = "#F9BF29";
            a[8].style.color = "#6A6A6A";
        }
        if (item.dataset.link == "contact") {
            a[0].style.color = "#ffffffc2";
            a[1].style.color = "#ffffffc2";
            a[2].style.color = "#ffffffc2";
            a[3].style.color = "#ffffffc2";
            a[4].style.color = "#F9BF29";
            a[5].style.color = "#6A6A6A";
            a[6].style.color = "#6A6A6A";
            a[7].style.color = "#6A6A6A";
            a[8].style.color = "#F9BF29";
        }
    })
});

/****************************************************************************************************/

// let tableimg = document.querySelector(".tables-images");
// let chairsimg = document.querySelector("#chairs-images");
// let sofaimg = document.querySelector("#sofa-images");
// let bedimg = document.querySelector("#bed-images");
// let mattressesimg = document.querySelector("#mattresses-images");
// let lampsimg = document.querySelector("#lamps-images");
// let armchairsimg = document.querySelector("#armchairs-images");
// let kitchensimg = document.querySelector("#kitchens-images");
// let cabinetsimg = document.querySelector("#cabinets-images");
// let mirrorsimg = document.querySelector("#mirrors-images");
// let tumbyimg = document.querySelector("#tumby-images");
// let hangersimg = document.querySelector("#hangers-images");
// let arrows = document.querySelectorAll("button");
// let tables = document.querySelectorAll("#tables");
// let chairs = document.querySelectorAll("#chairs");
// let sofas = document.querySelectorAll("#sofas");
// let bed = document.querySelectorAll("#bed");
// let mattresses = document.querySelectorAll("#mattresses");
// let lamps = document.querySelectorAll("#lamps");
// let armchairs = document.querySelectorAll("#armchairs");
// let kitchens = document.querySelectorAll("#kitchens");
// let cabinets = document.querySelectorAll("#cabinets");
// let mirrors = document.querySelectorAll("#mirrors");
// let tumby = document.querySelectorAll("#tumby");
// let hangers = document.querySelectorAll("#hangers");
// let x = 0;
// let chx = 0;
// let sx = 0;
// let bx = 0;
// let mx = 0;
// let lx = 0;
// let ax = 0;
// let kx = 0;
// let cx = 0;
// let mix = 0;
// let tx = 0;
// let hx = 0;
// arrows[0].addEventListener("click", () => {
//     x++;
//     if (x > 0) {
//         x = 0;
//     }

//     tableimg.style.transform = `translate(${x * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     x--;
//     if (x < -tables.length + 1) {
//         x = -tables.length + 1;
//     }

//     tableimg.style.transform = `translate(${x * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         x++;
//         if (x > 0) {
//             x = 0;
//         }

//         tableimg.style.transform = `translate(${x * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         x--;
//         if (x < -tables.length + 1) {
//             x = -tables.length + 1;
//         }

//         tableimg.style.transform = `translate(${x * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/

// arrows[0].addEventListener("click", () => {
//     chx+=1;
//     if (chx > 0) {
//         chx = 0;
//     }

//     chairsimg.style.transform = `translate(${chx * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
//     console.log(x);
// });

// arrows[1].addEventListener("click", () => {
//     chx-= 1;
//     if (chx < -chairs.length ) {
//         chx = -chairs.length ;
//     }

//     chairsimg.style.transform = `translate(${chx * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
//     console.log(x);
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         chx++;
//         if (chx > 0) {
//             chx = 0;
//         }

//         chairsimg.style.transform = `translate(${chx * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         chx--;
//         if (chx < -chairs.length ) {
//             chx = -chairs.length ;
//         }

//         chairsimg.style.transform = `translate(${chx * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /************************************************************************/
// arrows[0].addEventListener("click", () => {
//     sx++;
//     if (sx > 0) {
//         sx = 0;
//     }

//     sofaimg.style.transform = `translate(${sx * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     sx--;
//     if (sx < -sofas.length + 1) {
//         sx = -sofas.length + 1;
//     }

//     sofaimg.style.transform = `translate(${sx * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         sx++;
//         if (sx > 0) {
//             sx = 0;
//         }

//         sofaimg.style.transform = `translate(${sx * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         sx--;
//         if (sx < -sofas.length + 1) {
//             sx = -sofas.length + 1;
//         }

//         sofaimg.style.transform = `translate(${sx * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/

// arrows[0].addEventListener("click", () => {
//     bx++;
//     if (bx > 0) {
//         bx = 0;
//     }

//  bedimg.style.transform = `translate(${bx * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     bx--;
//     if (bx < -bed.length + 1) {
//         bx = -bed.length + 1;
//     }

//  bedimg.style.transform = `translate(${bx * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         bx++;
//         if (bx > 0) {
//             bx = 0;
//         }

//      bedimg.style.transform = `translate(${bx * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         bx--;
//         if (bx < -bed.length + 1) {
//             bx = -bed.length + 1;
//         }

//      bedimg.style.transform = `translate(${bx * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/
// arrows[0].addEventListener("click", () => {
//     mx++;
//     if (mx > 0) {
//         mx = 0;
//     }

//  mattressesimg.style.transform = `translate(${mx * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     mx--;
//     if (mx < -mattresses.length + 1) {
//         mx = -mattresses.length + 1;
//     }

//  mattressesimg.style.transform = `translate(${mx * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         mx++;
//         if (mx > 0) {
//             mx = 0;
//         }

//      mattressesimg.style.transform = `translate(${mx * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         mx--;
//         if (mx < -mattresses.length + 1) {
//             mx = -mattresses.length + 1;
//         }

//      mattressesimg.style.transform = `translate(${mx * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/
// arrows[0].addEventListener("click", () => {
//     lx++;
//     if (lx > 0) {
//         lx = 0;
//     }

//     lampsimg.style.transform = `translate(${lx * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     lx--;
//     if (lx < -lamps.length + 1) {
//         lx = -lamps.length + 1;
//     }

//     lampsimg.style.transform = `translate(${lx * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         lx++;
//         if (lx > 0) {
//             lx = 0;
//         }

//         lampsimg.style.transform = `translate(${lx * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         lx--;
//         if (lx < -lamps.length + 1) {
//             lx = -lamps.length + 1;
//         }

//         lampsimg.style.transform = `translate(${lx * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/
// arrows[0].addEventListener("click", () => {
//     ax++;
//     if (ax > 0) {
//         ax = 0;
//     }

//     armchairsimg.style.transform = `translate(${ax * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     ax--;
//     if (ax < -armchairs.length + 1) {
//         ax = -armchairs.length + 1;
//     }

//     armchairsimg.style.transform = `translate(${ax * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         ax++;
//         if (ax > 0) {
//             ax = 0;
//         }

//         armchairsimg.style.transform = `translate(${ax * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         ax--;
//         if (ax < -armchairs.length + 1) {
//             ax = -armchairs.length + 1;
//         }

//         armchairsimg.style.transform = `translate(${ax * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/
// arrows[0].addEventListener("click", () => {
//     kx++;
//     if (kx > 0) {
//         kx = 0;
//     }

//     kitchensimg.style.transform = `translate(${kx * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     kx--;
//     if (kx < -kitchens.length + 1) {
//         kx = -kitchens.length + 1;
//     }

//     kitchensimg.style.transform = `translate(${kx * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         kx++;
//         if (kx > 0) {
//             kx = 0;
//         }

//         kitchensimg.style.transform = `translate(${kx * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         kx--;
//         if (kx < -kitchens.length + 1) {
//             kx = -kitchens.length + 1;
//         }

//         kitchensimg.style.transform = `translate(${kx * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/
// arrows[0].addEventListener("click", () => {
//     cx++;
//     if (cx > 0) {
//         cx = 0;
//     }

//     cabinetsimg.style.transform = `translate(${cx * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     cx--;
//     if (cx < -cabinets.length + 1) {
//         cx = -cabinets.length + 1;
//     }

//     cabinetsimg.style.transform = `translate(${cx * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         cx++;
//         if (cx > 0) {
//             cx = 0;
//         }

//         cabinetsimg.style.transform = `translate(${cx * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         cx--;
//         if (cx < -cabinets.length + 1) {
//             cx = -cabinets.length + 1;
//         }

//         cabinetsimg.style.transform = `translate(${cx * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/
// arrows[0].addEventListener("click", () => {
//     mix++;
//     if (mix > 0) {
//         mix = 0;
//     }

//     mirrorsimg.style.transform = `translate(${mix * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     mix--;
//     if (mix < -mirrors.length + 1) {
//         mix = -mirrors.length + 1;
//     }

//     mirrorsimg.style.transform = `translate(${mix * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         mix++;
//         if (mix > 0) {
//             mix = 0;
//         }

//         mirrorsimg.style.transform = `translate(${mix * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         mix--;
//         if (mix < -mirrors.length + 1) {
//             mix = -mirrors.length + 1;
//         }

//         mirrorsimg.style.transform = `translate(${mix * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/
// arrows[0].addEventListener("click", () => {
//     tx++;
//     if (tx > 0) {
//         tx = 0;
//     }

//     tumbyimg.style.transform = `translate(${tx * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     tx--;
//     if (tx < -tumby.length + 1) {
//         tx = -tumby.length + 1;
//     }

//     tumbyimg.style.transform = `translate(${tx * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         tx++;
//         if (tx > 0) {
//             tx = 0;
//         }

//         tumbyimg.style.transform = `translate(${tx * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         tx--;
//         if (tx < -tumby.length + 1) {
//             tx = -tumby.length + 1;
//         }

//         tumbyimg.style.transform = `translate(${tx * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
// /*************************************************************************************/
// arrows[0].addEventListener("click", () => {
//     hx++;
//     if (hx > 0) {
//         hx = 0;
//     }

//     hangersimg.style.transform = `translate(${hx * 1150}px, 0)`;
//     arrows[0].style.background = "#3B5D50";
//     arrows[1].style.background = "#77d4b1";
// });

// arrows[1].addEventListener("click", () => {
//     hx--;
//     if (hx < -hangers.length + 1) {
//         hx = -hangers.length + 1;
//     }

//     hangersimg.style.transform = `translate(${hx * 1150}px, 0)`;
//     arrows[0].style.background = "#77d4b1";
//     arrows[1].style.background = "#3B5D50";
// });


// window.addEventListener("keydown", (e) => {
//     if (e.keyCode == 37) {
//         hx++;
//         if (hx > 0) {
//             hx = 0;
//         }

//         hangersimg.style.transform = `translate(${hx * 1150}px, 0)`;
//         arrows[0].style.background = "#3B5D50";
//         arrows[1].style.background = "#77d4b1";
//     }

//     if (e.keyCode == 39) {
//         hx--;
//         if (hx < -hangers.length + 1) {
//             hx = -hangers.length + 1;
//         }

//         hangersimg.style.transform = `translate(${hx * 1150}px, 0)`;
//         arrows[0].style.background = "#77d4b1";
//         arrows[1].style.background = "#3B5D50";
//     }
// });
/**************************************************************************/

let furniitems = document.querySelectorAll(".furni-items");
let blogtables = document.querySelector("#blog-tables");
let blogchairs = document.querySelector("#blog-chairs");
let blogsofas = document.querySelector("#blog-sofas");
let blogbed = document.querySelector("#blog-bed");
let blogmattresses = document.querySelector("#blog-mattresses");
let bloglamps = document.querySelector("#blog-lamps");
let blogarmchairs = document.querySelector("#blog-armchairs");
let blogkitchens = document.querySelector("#blog-kitchens");
let blogcabinets = document.querySelector("#blog-cabinets");
let blogmirrors = document.querySelector("#blog-mirrors");
let blogtumby = document.querySelector("#blog-tumby");
let bloghangers = document.querySelector("#blog-hangers");

furniitems.forEach((count) => {
    count.addEventListener("click", () => {
        if (count.dataset.furni == "tables") {
            furniitems[0].style.background = "#D2D2D2";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "flex";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }

        if (count.dataset.furni == "chairs") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#D2D2D2";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "flex";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "sofas") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#D2D2D2";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "flex";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "bed") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#D2D2D2";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "flex";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "mattresses") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#D2D2D2";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "flex";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "lamps") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#D2D2D2";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "flex";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "armchairs") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#D2D2D2";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "flex";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "kitchens") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#D2D2D2";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "flex";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "cabinets") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#D2D2D2";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "flex";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "mirrors") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#D2D2D2";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "flex";
            blogtumby.style.display = "none";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "tumby") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#D2D2D2";
            furniitems[11].style.background = "#807F7F";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "flex";
            bloghangers.style.display = "none";
        }
        if (count.dataset.furni == "hangers") {
            furniitems[0].style.background = "#807F7F";
            furniitems[1].style.background = "#807F7F";
            furniitems[2].style.background = "#807F7F";
            furniitems[3].style.background = "#807F7F";
            furniitems[4].style.background = "#807F7F";
            furniitems[5].style.background = "#807F7F";
            furniitems[6].style.background = "#807F7F";
            furniitems[7].style.background = "#807F7F";
            furniitems[8].style.background = "#807F7F";
            furniitems[9].style.background = "#807F7F";
            furniitems[10].style.background = "#807F7F";
            furniitems[11].style.background = "#D2D2D2";
            blogtables.style.display = "none";
            blogchairs.style.display = "none";
            blogsofas.style.display = "none";
            blogbed.style.display = "none";
            blogmattresses.style.display = "none";
            bloglamps.style.display = "none";
            blogarmchairs.style.display = "none";
            blogkitchens.style.display = "none";
            blogcabinets.style.display = "none";
            blogmirrors.style.display = "none";
            blogtumby.style.display = "none";
            bloghangers.style.display = "flex";
        }
    })
})
/***********************************************************************/

$(document).ready(function(){
    $('.slick-carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
  });