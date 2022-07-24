var notyf = new Notyf();
const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  fetch("/pharma/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => {
    res.json().then((data) => {
      console.log(data);
      if (res.status == 400) {
        notyf.error(data.message);
      }
      if (res.status == 200) {
        notyf.success(data.message);
      }
    });
  });
});
