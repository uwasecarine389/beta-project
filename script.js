function login(){

  let email = document.getElementById("email").value;

  let password = document.getElementById("password").value;

  if(email === "admin@gmail.com" && password === "1234"){

    document.getElementById("message").innerHTML =
    "Someone logged in!";

    console.log("User logged in");

  }

  else{

    document.getElementById("message").innerHTML =
    "Wrong email or password";

  }

}