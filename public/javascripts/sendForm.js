let form = document.getElementById("post-form-id");
let send = {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  formData.forEach((value, key) => {
    send[key] = value;
  });
  console.log(send);
  fetch("/home/add_post", {
    method: "POST",

    body: formData,
  });
});
