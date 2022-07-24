var notyf = new Notyf();
const registerBtn = document.querySelector("#regBtn");

registerBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  // const mainPubKey = document.querySelector("#main-pub-key").value;
  // const fingerPubKey = document.querySelector("#finger-pub-key").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const hospitalID = document.querySelector("#hospitalID").value;
  const speciality = document.querySelector("#speciality").value;
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const confirmpassword = document.querySelector("#confirmPassword").value;

  fetch("/doctor/register", {
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
      firstName,
      lastName,
      hospitalID,
      speciality,
      username,
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
