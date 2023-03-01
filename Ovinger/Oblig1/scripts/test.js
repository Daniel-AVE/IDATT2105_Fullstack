function incrementValue() {
    var value = parseInt(document.getElementById('incrementButton').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('incrementButton').value = value;
}

function hideshow() {
    if (document.getElementById('hideshowbutton').value == "HIDE") {
        document.getElementById('hideshowbutton').value = "SHOW";
    } else {
        document.getElementById('hideshowbutton').value = "HIDE";
    }
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var counter = 0;

function createList() {
    if (counter < 1) {
        let words = ["full", "drikke", "ntnu", "skole", "Singapore", "Fly", "Volleyball", "Biljard", "Cricket"];
        let array = document.getElementById("arraylist");

        words.forEach((item)=>{
            let li = document.createElement("li");
            li.innerText = item;
            array.appendChild(li);
        })
    }
    counter++;
}