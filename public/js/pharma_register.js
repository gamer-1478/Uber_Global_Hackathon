var notyf = new Notyf();
const registerBtn = document.querySelector("#register-btn");

registerBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const mainPubKey = document.querySelector("#main-pub-key").value;
  const fingerPubKey = document.querySelector("#finger-pub-key").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const address = document.querySelector("#address").value;
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const zip = document.querySelector("#zip").value;
  const country = document.querySelector("#country").value;
  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
});
