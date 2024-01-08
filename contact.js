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

a.forEach((item) =>{
    item.addEventListener("click", () =>{
        if(item.dataset.link == "home"){
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
        if(item.dataset.link == "about"){
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
        if(item.dataset.link == "services"){
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
        if(item.dataset.link == "blog"){
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
        if(item.dataset.link == "contact"){
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
/*****************************************************************************************************/



