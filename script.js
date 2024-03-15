let main = document.getElementById("main");
let personImg = document.getElementById("personImg");
let name = document.getElementById("name");
let gender = document.querySelector("#gender h4");
let age = document.querySelector("#age h4");
let personEmail = document.getElementById("personEmail");
let phone = document.getElementById("phone");
let country = document.getElementById("country");
let postcode = document.getElementById("postcode");

let ApiRequest = "https://randomuser.me/api/";

let xhr = new XMLHttpRequest();

xhr.open("GET", ApiRequest);
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    let data = JSON.parse(this.responseText);

    personImg.innerHTML = `<img id="person" src="${data.results[0].picture.large}" alt="" />`;

    name.innerHTML = `${data.results[0].name.title} ${data.results[0].name.first}`;

    gender.innerHTML = `${data.results[0].gender}`;

    age.innerHTML = `${data.results[0].dob.age}`;

    personEmail.innerHTML = `${data.results[0].email}`;

    phone.innerHTML = `${data.results[0].phone}`;

    country.innerHTML = `${data.results[0].location.country}`;

    postcode.innerHTML = `${data.results[0].location.postcode}`;
  }
};

function reloadPage() {
  location.reload();
}
