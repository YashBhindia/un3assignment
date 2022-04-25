// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var data = JSON.parse(localStorage.getItem("key"));

document.querySelector("#wallet").innerHTML=add;

var sum = json.parse(localStorage.getItem("key"));

let div = document.createElement("div");

let image = document.createElement("img");
image.src=sum.Poster;
let p = document.createElement("p");
p.innerText=sum.Title;

div.append(imgage,p);
document.querySelector("#movies").append(div);