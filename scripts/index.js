// Store the wallet amount to your local storage with key "amount"
// let addtocart = json.parse(localStorage.getItem("cartadd")) || [];
function addmoney(){
    var get = JSON.parse(localStorage.getItem("amount")) || [];
    let add = document.querySelector("#amount").value;
    var su = Number(get)+Number(add);

    localStorage.setItem("amount",JSON.stringify(su));
    document.querySelector("#wallet").innerHTML=su;

}

// function navbar(su){
//     console.log(su);
//     addtocart.push(su)
//     localStorage.setItem("cartadd",json.stringify(addtocart));
// }

