var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKepress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// .done listner 
function toggleClassDoneOnAndOff(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}
ul.addEventListener("click", toggleClassDoneOnAndOff);

button.addEventListener("click", addListAfterClick); 
input.addEventListener("keypress", addListAfterKepress);