const mainLogin = document.getElementById("mainLogin");
const email = document.getElementById("email");
const password = document.getElementById("password");

mainLogin.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailValue = email.value;
  const passwordValue = password.value;

  console.log(emailValue, passwordValue);

  const dataFetech = await fetch("http://localhost:7111/api/login", {
    method: "POST",

    body: JSON.stringify({
      email: emailValue,
      password: passwordValue,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await dataFetech.json();
  console.log(data);

  if(dataFetech.ok){
    console.log("User is Registred")
  }else{
    console.log(data.message)
  }
});











