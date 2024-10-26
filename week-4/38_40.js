// 38

// Assume there's an element with id="myElement" in the HTML
const elementById = document.getElementById("myElement");
elementById.textContent = "New Text Content";


// 39

// Assume there are elements with class="highlight" in the HTML
const elementsByClass = document.getElementsByClassName("highlight");

for (let i = 0; i < elementsByClass.length; i++) {
    elementsByClass[i].style.backgroundColor = "yellow";
}


// 40 

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});


