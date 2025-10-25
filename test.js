let h1 = document.getElementById("h1")
h1Value = 0

function increment() {
    h1Value += 3
    h1.innerText = h1Value
}

function decrement() {
    h1Value -= 1
    h1.innerText = h1Value
}