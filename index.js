// const API = "994d3ddcc55d420b88769e76bb2526fd";
// const API = "4b64993724ff4ccab9d758adf5ef74ec"; // 2nd api
const API = "47ecb09922784fb39e3939467b056435"; // 3nd api

// const URL = "https://api.spoonacular.com/recipes/complexSearch?";
// const URL2 = "https://api.spoonacular.com/recipes/";

// const searchbtn = document.getElementById("searchButton");
// const searchInput = document.getElementById("searchInput");

// window.addEventListener("load", () => OnLoad("healthy veg food"));

// searchbtn.addEventListener("click", () => {
//     const text = searchInput.value.trim();
//     OnLoad(text);
// });

// async function OnLoad(text) {
//     const result = await fetch(`${URL}apiKey=${API}&query=${text}&addRecipeNutrition=true&number=10`);
//     const data = await result.json();
//     console.log(data);
//     BindData(data.results);
// }

// async function getnutriInformation(recipe_id, cardClone) {
//     try {
//         const result = await fetch(`${URL2}${recipe_id}/nutritionWidget.json?apiKey=${API}`);
//         if (result.status === 200) {
//             const data = await result.json();
//             const nutritionInfo = {
//                 calories: data.nutrients[0].amount,
//                 carbs: data.nutrients[3].amount,
//                 fat: data.nutrients[1].amount,
//                 protein: data.nutrients[10].amount,
//             };
//             updateNutritionalInfo(cardClone, nutritionInfo);
//         } else {
//             console.error(`Failed to fetch nutritional information for recipe ID: ${recipe_id}`);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// function updateNutritionalInfo(cardClone, nutritionInfo) {
//     const cal = cardClone.querySelector("#cal");
//     const carb = cardClone.querySelector("#carb");
//     const fat = cardClone.querySelector("#fat");
//     const prot = cardClone.querySelector("#prot");

//     cal.textContent = nutritionInfo.calories;
//     carb.textContent = nutritionInfo.carbs;
//     fat.textContent = nutritionInfo.fat;
//     prot.textContent = nutritionInfo.protein;
// }

// async function fillData(cardClone, result) {
//     const title = cardClone.querySelector("#news-title");
//     const image = cardClone.querySelector("#news-img");
//     const hovertitle = cardClone.querySelector("#hovtitle");
//     const titleofhover = cardClone.querySelector("#titleofhover");
//     const cal = cardClone.querySelector("#cal");
//     const carb = cardClone.querySelector("#carb");
//     const fat = cardClone.querySelector("#fat");
//     const prot = cardClone.querySelector("#prot");
//     const recipe_id = result.id;
//     try {
//         // const response = await fetch(`${URL}${result.id}/nutritionWidget.json?apiKey=${API}`);
//         const response = await fetch(`${URL}apiKey=${API}&query=${text}&addRecipeNutrition=true&number=10`);
//         if (response.ok) {
//             const data = await response.json();
//             const nutritionInfo = {
//                 calories: data.nutrients[0].amount,
//                 carbs: data.nutrients[3].amount,
//                 fat: data.nutrients[1].amount,
//                 protein: data.nutrients[10].amount,
//             };

//             cal.textContent = nutritionInfo.calories;
//             carb.textContent = nutritionInfo.carbs;
//             fat.textContent = nutritionInfo.fat;
//             prot.textContent = nutritionInfo.protein;
//         } else {
//             console.error('Failed to fetch nutritional information:', response.statusText);
//         }
//     } catch (error) {
//         console.error('Error fetching nutritional information:', error);
//     }

//     hovertitle.innerHTML = result.title;
//     // const cal = cardClone.querySelector("#cal");
//     // cal.innerHTML= result.title;
//     image.src = result.image;
//     title.innerHTML = result.title;
//     titleofhover.innerHTML = result.title;

//     // getnutriInformation(recipe_id, cardClone);

//     // cardClone.addEventListener('mouseover', () => {
//     // });
// }

// function BindData(results) {
//     const Cardcontainer = document.getElementById("main-content");
//     const template = document.getElementById("template-box");
//     Cardcontainer.innerHTML = '';

//     results.forEach(result => {
//         if (!result.image) return;
//         const CardClone = template.content.cloneNode(true);
//         fillData(CardClone, result);
//         Cardcontainer.appendChild(CardClone);
//     });
// }



// const API = "45118ccd96ae4956b7280a0f79a3a79d";
const URL = "https://api.spoonacular.com/recipes/complexSearch?";
const URL2 = "https://api.spoonacular.com/recipes/";
const URL3 = "https://api.spoonacular.com/recipes/";

const searchbtn = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");

window.addEventListener("load", () => OnLoad("healthy veg food"));

searchbtn.addEventListener("click", () => {
    const text = searchInput.value.trim();
    OnLoad(text);
});

async function OnLoad(text) {
    const result = await fetch(`${URL}apiKey=${API}&query=${text}&number=10`);
    const data = await result.json();
    BindData(data.results);
}

// async function getnutriInformation(recipe_id, cardClone) {
//     try {
//         const result = await fetch(`${URL2}${recipe_id}/nutritionWidget.json?apiKey=${API}`);
//         if (result.status === 200) {
//             const data = await result.json();
//             const nutritionInfo = {
//                 calories: data.nutrients[0].amount,
//                 carbs: data.nutrients[3].amount,
//                 fat: data.nutrients[1].amount,
//                 protein: data.nutrients[10].amount,
//             };
//             updateNutritionalInfo(cardClone, nutritionInfo);
//         } else {
//             console.error(`Failed to fetch nutritional information for recipe ID: ${recipe_id}`);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

// function updateNutritionalInfo(cardClone, nutritionInfo) {
//     const cal = cardClone.querySelector("#cal");
//     const carb = cardClone.querySelector("#carb");
//     const fat = cardClone.querySelector("#fat");
//     const prot = cardClone.querySelector("#prot");

//     cal.textContent = nutritionInfo.calories;
//     carb.textContent = nutritionInfo.carbs;
//     fat.textContent = nutritionInfo.fat;
//     prot.textContent = nutritionInfo.protein;
// }



async function fillData(cardClone, result) {
    const title = cardClone.querySelector("#news-title");
    const image = cardClone.querySelector("#news-img");
    const hovertitle = cardClone.querySelector("#hovtitle");
    const titleofhover = cardClone.querySelector("#titleofhover");
    const idofhover = cardClone.querySelector("#idofhover");
    const cal = cardClone.querySelector("#cal");
    const carb = cardClone.querySelector("#carb");
    const fat = cardClone.querySelector("#fat");
    const prot = cardClone.querySelector("#prot");
    const mainrecipename = document.getElementById("logoforlist");
    // const response2 = await fetch(`${URL3}${result.id}/ingredientWidget.json?apiKey=${API}`);
    //     // const makana = await fetch
    //     const data2 = await response2.json();
    //     console.log(data2);
    

    try {
        const response = await fetch(`${URL2}${result.id}/nutritionWidget.json?apiKey=${API}`);
        if (response.ok) {
            const data = await response.json();
            const nutritionInfo = {
                calories: data.nutrients[0].amount,
                carbs: data.nutrients[3].amount,
                fat: data.nutrients[1].amount,
                protein: data.nutrients[10].amount,
            };

            cal.textContent = nutritionInfo.calories;
            carb.textContent = nutritionInfo.carbs;
            fat.textContent = nutritionInfo.fat;
            prot.textContent = nutritionInfo.protein;
            
        } else {
            console.error('Failed to fetch nutritional information:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching nutritional information:', error);
    }

    hovertitle.innerHTML = result.title;
    image.src = result.image;
    title.innerHTML = result.title;
    titleofhover.innerHTML = result.title;
    idofhover.innerHTML = result.id;
    mainrecipename.innerHTML= result.title;
    const button = document.getElementById("main-content")
    // cardClone.addEventListener("click", async () => {
    //     try {
    //         // Extract the recipe ID from the result
    //         const recipeId = result.id;
    //         const title = result.title;
            

    //         // Redirect the user to explore.html with the recipe ID as a query parameter
    //         window.location.href = `./recipe_main/recipeinfo.html?recipeId=${recipeId}&title=${title}`;
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // })
    const cards = document.querySelectorAll(".card");

    // Loop through each card and add click event listener
    cards.forEach(card => {
        card.addEventListener("click", async () => {
            try {
                // Find the elements containing recipe information within the card
                const titleElement = card.querySelector(".title strong");
                const recipeId = card.querySelector(".title #idofhover").textContent.trim();
                const recipeName = card.querySelector(".title #titleofhover").textContent.trim(); // Assuming the title contains the recipe ID

                // Redirect the user to explore.html with the recipe ID as a query parameter
                window.location.href = `./recipe_main/recipeinfo.html?recipeId=${recipeId}&recipeName=${encodeURIComponent(recipeName)}`;
            } catch (error) {
                console.error("Error:", error);
            }
        });
    });
};
function redirectToNewPage() {
    window.location.href = './recipe_main/momo.html'; // Change 'new_page.html' to the desired HTML file
}


function BindData(results) {
    const Cardcontainer = document.getElementById("main-content");
    const template = document.getElementById("template-box");
    Cardcontainer.innerHTML = '';

    results.forEach(result => {
        if (!result.image) return;
        const CardClone = template.content.cloneNode(true);
        fillData(CardClone, result);
        Cardcontainer.appendChild(CardClone);
    });
}