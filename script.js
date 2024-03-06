let formBtn = document.getElementById("login_btn");
let loginForm = document.getElementById("login_form")
let formClose = document.getElementById("form_close")
function openForm(){
    loginForm.classList.add('active');
}

function closeForm(){
    loginForm.classList.remove('active');
}


function fun(){
    let email = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    // Save the name in localStorage.
    let rmail = localStorage.getItem('email');
    console.log(rname)
    let password = localStorage.getItem('password');
    console.log(password)
    if (email==rmail && password==pass)
        alert("Login successful")
    else{
        alert("Invalid username or password")
    }
}