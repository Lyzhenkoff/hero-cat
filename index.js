let btn = document.getElementById('btn');
let txt = document.getElementById('txt');

btn.onclick = function () {
    let answer = prompt('Как тебя зовут?', 'Lyzhenkoff');

    txt = answer.textContent;
    txt.classList.add('text');
}