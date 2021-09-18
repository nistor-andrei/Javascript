"use strict";

(function () {
  document.querySelector("[data-login=switch]").addEventListener("click", handleSwitch);
  document.querySelector("[data-login=switch]").addEventListener("click", handleSwitch);

  function handleSwitch(e) {
    e.preventDefault();

    const elements = document.querySelectorAll("[data-login],[data-register]");

    for (const el of elements) {
      el.classList.toggle("hidden");
    }
  }
  if (localStorage.accessToken) {
    console.log("exist");
    document.querySelector("[data-create-access]").classList.remove("hidden");
    document.querySelector("[data-section-login]").classList.add("hidden");
  } else {
    document.querySelector("[data-form-register]").addEventListener("submit", handleSubmit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = e.target.elements.user.value;
    const pass = e.target.elements.pass.value;
    const retypePass = e.target.elements.retypePass.value;

    if (isRegister() && pass !== retypePass) {
      console.error("The pass not matching");
      return;
    }

    if (!user || !pass) {
      console.error("All fields need to be completed");
    }
    sendAuthRequest(user, pass);
  }

  function isRegister() {
    return !document.querySelector("[data-register]").classList.contains("hidden");
  }

  async function sendAuthRequest(user, pass) {
    const data = await fetch(`https://movies-app-siit.herokuapp.com/auth/${isRegister() ? "register" : "login"}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    }).then((res) => res.json());

    if (data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      location.reload();
    } else {
      console.warn(data.message);
    }
  }
})();
