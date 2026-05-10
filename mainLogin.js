const mainLogin = document.getElementById("mainLogin")
const email = document.getElementById("email")
const password = document.getElementById("password");


mainLogin.addEventListener("submit",async (e)=>{
    e.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    console.log(emailValue,passwordValue)

    const dataFetech = await fetch("http://localhost:7111/api/login")
})