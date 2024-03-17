const h1 = document.getElementById("unhealthy");
const h2 = document.getElementById("bev");
const h3 = document.getElementById("chn");
const h4 = document.getElementById("pf");
const h5 = document.getElementById("osf");
const foodplater = document.getElementById("foodplater");
const text = document.getElementById("textarea");


function restartAnimation() {
    text.classList.remove('animt'); // Re-add animation class
    // text.classList.remove('textpopup'); // Remove animation class
    void text.offsetWidth; // Trigger reflow
    text.classList.add('animt');
}

h1.addEventListener('click', ()=> {
    foodplater.src = "IMAGES/unhealthy.png"; 
    text.textContent = "Fast Food";  
    console.log("Clicked on fast"); 
    restartAnimation();
});
h2.addEventListener('click', ()=> {
    foodplater.src = "IMAGES/unhealthy.png";  
    text.textContent = "Beverages";  
    restartAnimation();
});
h3.addEventListener('click', ()=> {
    foodplater.src = "IMAGES/chinese.png"; 
    text.textContent = "Chinese Dishes"; 
    restartAnimation();  
});
h4.addEventListener('click', ()=> {
    foodplater.src = "IMAGES/unhealthy.png"; 
    text.textContent = "Protein Rich";   
    restartAnimation();
});
h5.addEventListener('click', ()=> {
    foodplater.src = "IMAGES/unhealthy.png";   
    text.textContent = "Oils and Fats"; 
    restartAnimation();
});



const texts = ["good food", "healthy lifestyle", "protein rich", "delicious recipes", "nutritious meals"];
let index = 0;
let charIndex = 0;
let typingInterval;

function typeText() {
    if (charIndex < texts[index].length) {
        document.getElementById("changingText").textContent += texts[index].charAt(charIndex);
        charIndex++;
        typingInterval = setTimeout(typeText, 100); // Adjust typing speed here (milliseconds)
    } else {
        clearTimeout(typingInterval);
        setTimeout(eraseText, 1000); // Pause before erasing text
    }
}

function eraseText() {
    if (charIndex >= 0) {
        const text = texts[index].substring(0, charIndex);
        document.getElementById("changingText").textContent = text;
        charIndex--;
        typingInterval = setTimeout(eraseText, 50); // Adjust erasing speed here (milliseconds)
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeText, 500); // Pause before typing next text
    }
}

typeText();