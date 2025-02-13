let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let str = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent === "=") {
            str = eval(str)
            input.value = str
        }
        else if (e.target.textContent === "Ac"){
            str = "";
            input.value = str;
        }
        else if (e.target.textContent === "Del"){
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else {
            str += e.target.textContent;
            input.value = str;
        }
    })
})