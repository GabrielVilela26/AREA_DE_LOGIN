document.getElementById('unblock').style.display = "none"
const senha = document.querySelector('.senha');
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('.btn1');

btn.onclick = () => {
    if (senha.type === 'password') {

        senha.type = 'text'
        document.getElementById('block').style.display = 'none'
        document.getElementById('unblock').style.display = "block";
    }
}
btn1.onclick = () => {
    if (senha.type === 'text') {

        senha.type = 'password'
        document.getElementById('unblock').style.display = 'none'
        document.getElementById('block').style.display = "block";
    }
}