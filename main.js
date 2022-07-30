// the JavaScript file
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hi im the second event listener");
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    alert("Hi im the Third event listener");
});
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function (e) {
    console.log(e);
});

