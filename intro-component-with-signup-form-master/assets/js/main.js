const inputs = [...document.querySelectorAll(".inputs")];
const icon = [...document.querySelectorAll(".icon")];

const btn = document.querySelector("#btn");
//fa-solid fa-circle-exclamation fa-shake
btn.addEventListener("click", () => {
  inputs.map((el) => {
    //vazio
    icon.map((elemento) => {
      if (el.value == "") {
        el.classList.add("input-red");

        elemento.classList.add("teste")
        
        if (el.id === "name") {
          document.querySelector("#span-name").innerHTML =
            "First Name cannot be empty";
          el.placeholder = "";
        }
        if (el.id === "lastName") {
          document.querySelector("#span-lastName").innerHTML =
            "Last Name cannot be empty";
          el.placeholder = "";
        }
        if (el.id === "email") {
          document.querySelector("#span-email").innerHTML =
            "Looks like this is not an email";
          el.placeholder = "email@example.com";
          el.classList.add("email-red");
        }
        if (el.id === "password") {
          document.querySelector("#span-password").innerHTML =
            "Password cannot be empty";
          el.placeholder = "";
        }
      } else {
        document.querySelector("#span-name").innerHTML = "";
        document.querySelector("#span-lastName").innerHTML = "";
        document.querySelector("#span-email").innerHTML = "";
        document.querySelector("#span-password").innerHTML = "";

        el.classList.remove("input-red");
        el.classList.remove("email-red");
        elemento.classList.remove("teste")

    }
    });
  });
});
