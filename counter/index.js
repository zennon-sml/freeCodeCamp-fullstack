let count = 0;
let countEl = document.getElementById("count");
let saveEL = document.getElementById("save");


function increment() {
    count += 1;
    console.log(count);
    countEl.innerText = count;
};

function save() {
    saveEL.innerText += " - " + count;
    count = 0;
    countEl.innerText = count;
};
