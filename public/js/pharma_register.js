var notyf = new Notyf();
const registerBtn = document.querySelector("#register-btn");
registerBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  // const mainPubKey = document.querySelector("#main-pub-key").value;
  // const fingerPubKey = document.querySelector("#finger-pub-key").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const address = document.querySelector("#address").value;
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const zip = document.querySelector("#zip").value;
  const country = document.querySelector("#country").value;
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;
  const confirmpassword = document.querySelector("#confirmPassword").value;
  fetch("/pharma/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      // mainPubKey,
      // fingerPubKey,
      email,
      phone,
      address,
      city,
      state,
      zip,
      country,
      name,
      password,
      confirmpassword,
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
