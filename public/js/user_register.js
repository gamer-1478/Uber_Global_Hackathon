const registerBtn = document.querySelector("#regBtn");

registerBtn.addEventListener("click", async (e) => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  fetch("/user/register", {
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
    });
  });
});
