const API = "Jr8HYfWjYrprmtR5Ql74cw==9s00vRxGV2ARPOL5";
const URL ="https://api.api-ninjas.com/v1/recipe?query=";

// catching the input from search button
const searchbtn = document.getElementsByClassName("searchButton");
const searchInput = document.getElementsByClassName("searchInput");

// searchbtn.addEventListener("click", () => {
//     let text = searchInput.value().trim();
//     onload(text);
// });

searchbtn.addEventListener("click", () => {
    const text = searchInput.value.trim();
    // if()
    OnLoad(text);
});

async function onload(text){
    const result = await fetch(`${URL}${text}`);
    const data = await result.json();
    console.log(data[100]);
};

// console.log(text);