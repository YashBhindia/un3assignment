// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var add = JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerText=add;

let movies_div = document.getElementById("movies");
let id;

async function searchMovies(){
    try{
        const query = document.getElementById("search").value;
        const res =await fetch (`https://www.omdbapi.com/?apikey=3bb052e1&s=${query}`);
        const data = await res.json();
        console.log("data:",data);
        const movies = data.Search;
        return movies;
    }catch(err){
        console.log(err);
    }
}

function appendMovies(data){
    movies_div.innerHTML=null;
    data.forEach(function(el){
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src=el.Poster;
        let p = document.createElement("p");
        p.innerText=el.Title;

        let btn = document.createElement("button");
        btn.innerText = "Book Now"; 
        btn.onclick = function(){
           let obj = {
            Poste:el.poster,
            title:el.Title
           }

           localStorage.setItem("key",JSON.stringify(obj));
           window.location.href="checkout.html";
        }
        div.append(image,p,btn);
        movies_div.append(div);
    });
}

async function main(){
    let data = await searchMovies();
    if(data===undefined){
        return false;
    }
    appendMovies(data);
}

function debounce(func , dealy){
    if(id){
        clearTimeout(id);

    }
    id=setTimeout(function(){
        func();

    },dealy);
}

