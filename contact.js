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


let form = document.querySelector("form");
let Name = document.getElementById("name");
let lastname = document.getElementById("lastname");
let email = document.getElementById("email");
let number = document.getElementById("number");
let message = document.getElementById("message");
let subjectid = document.getElementById("subject");
let data = JSON.parse(localStorage.getItem("key")) ? JSON.parse(localStorage.getItem("key")) : [];
let tbody = document.querySelector("tbody");
let counts = document.querySelectorAll(".info-inps");

function sendEmail() {
    let bodyMessage = `Name: ${Name.value}<br> LastName: ${lastname.value}<br> Email: ${email.value}<br> Number: ${number.value}<br> Message: ${message.value}<br>` 
    let subject = `Subject: ${subjectid.value}`
    
    Email.send({
        // SecureToken : "b55af08e-69d7-46c7-8bda-e4cd4db22116",
        Host : "smtp.elasticemail.com",
        Username : "kozimovs17@gmail.com",
        Password : "15B10F19A77678EB8BFDD2E141E193540FB4",
        To : 'kozimovs17@gmail.com',
        From : "kozimovs17@gmail.com",
        Subject : subject,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success",
                text: "Your Message Successfully",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    for(let count of counts){
        if(count.value == ""){
            count.classList.add("error");
            count.parentElement.classList.add("error");
        }

        if(counts[2].value != ""){
            checkEmail();
        }

        counts[2].addEventListener("keyup", () =>{
            checkEmail();
        });

        count.addEventListener("keyup", () =>{
            if(count.value != ""){
                count.classList.remove("error");
                count.parentElement.classList.remove("error");
            }else{
                count.classList.add("error");
                count.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    let emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();  

    if(!Name.classList.contains("error") && !lastname.classList.contains("error") && !email.classList.contains("error") && !number.classList.contains("error") && !message.classList.contains("error")){
        sendEmail();
        form.reset();
        return false;
    }
})













// key.forEach((count) =>{
//     tbody.innerHTML += `<tr>
//     <td>${count.name}</td> 
//     <td>${count.lastname}</td>
//     <td>${count.email}</td>
//     <td>${count.number}</td> 
//     <td>${count.message}</td> 
//     </tr>`
// });
// form.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     tbody.innerHTML = "";
//     key.push({name: form["name"].value.trim(), lastname: form["lastname"].value.trim(), email: form["email"].value.trim(), number: form["number"].value.trim(), message: form["message"].value.trim()});
//     localStorage.setItem("key", JSON.stringify(key));

//     key.forEach((count) =>{
//         tbody.innerHTML += `<tr>
//         <td>${count.name}</td> 
//         <td>${count.lastname}</td>
//         <td>${count.email}</td>
//         <td>${count.number}</td> 
//         <td>${count.message}</td> 
//         </tr>`
//     });

//     form["name"].value = "";
//     form["email"].value = "";
//     form["lastname"].value = "";
//     form["number"].value = "";
//     form["message"].value = "";
// })


