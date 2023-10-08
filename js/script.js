function openServices() {
    const item = document.querySelectorAll('.servicosResumidos');
    var dlay = 500;
    for (var i = 0; i < item.length; i++) {
        const res = item[i];
        if (res.style.opacity == "") {
            const a = document.querySelectorAll('.servicosResumidos')[i].classList[1];
            var go = item[i];
            const b = document.querySelector('.' + a);
            //b.style.opacity = "1";

            //go.style.opacity = "1"
            setTimeout(() => { b.style.opacity = 1; }, i * dlay);


        }
        dlay += 10;
    }
}
let interval = 20000;
function escreve(arg, argSeletor) {
    var palavraNew = arg;
    var seletor = argSeletor;
    document.getElementById(seletor).innerHTML = '';
    for (var i = 0; i < palavraNew.length; i++) {
        const letras = palavraNew[i].split();
        var span = document.getElementById(seletor);
        setTimeout(() => { document.getElementById(seletor).innerHTML += letras; }, i * 100);
    }
    document.getElementById(seletor).innerHTML = '';

    setTimeout(() => { escreve(palavraNew, seletor) }, 1 * interval);



}

function chamaMaquina() {

    setInterval(() => {
        // troca de image
        escreve("CONSULTORIA AMBIENTAL", "spanHidenShow")
    }, interval)
}
window.addEventListener("load", escreve("CONSULTORIA AMBIENTAL", "digitaServicos"));
window.addEventListener("load", escreve("CONSULTORIA AMBIENTAL", "spanHidenShow"));
window.addEventListener("load", openServices);

let time = 5000,
    currentImageIndex = 0,
    images = document
        .querySelectorAll("#slider img")
max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)
const pixels = document.querySelector('#emailContact').style.borderLeftWidth = "10px"
const solid = document.querySelector('#emailContact').style.borderLeftStyle = "solid"
function focusOutForm(str, num) {
    //document.querySelector('#'+str).style.borderLeft = "";
    var strForm = document.getElementById(str).value;
    var numForm = num;
    if (strForm.length >= numForm) {
        if (str == "nameContact") {
            document.getElementById("clientForm").innerHTML = strForm;
        }
        document.querySelector('#' + str).style.borderLeftColor = "#9ffaa3";
    } else {
        pixels;
        solid;
        document.querySelector('#' + str).style.borderColor = "Tomato";
    }

    //console.log(document.getElementById("clientForm"))
}
function emailFormRegex() {
    const existP = document.querySelector(".email");
    pixels;
    solid;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailDigitado = document.getElementById("emailContact").value;
    if (emailDigitado.match(emailRegex)) {

        document.querySelector('#emailContact').style.borderLeftColor = "#9ffaa3";
        existP.innerHTML = '';

    }
    else {
        document.querySelector('#emailContact').style.borderLeftColor = "Tomato";
        existP.innerHTML = '<div class="divErrorItems"><i class="bi bi-arrow-right-circle-fill"></i>Formato do Email é inválido.</div>';

        //(!existP) ? criaPregex : console.log("já existe");
    }
}
var form = document.getElementById('formItems');

form.addEventListener('focus', (event) => {
    event.target.style.borderLeftColor = "gold";
}, true);

form.addEventListener('blur', (event) => {
    var erros = document.querySelector('#errorsSpan');
    event.target.style.borderLeftColor = "";
    var inputName = event.target.name.split(" ");
    var inputValue = event.target.value;

    if (inputValue.length < inputName[0]) {

        if (document.querySelectorAll("#" + inputName[1]).length == 0) {
            var criaP = document.createElement("p");
            criaP.setAttribute("id", inputName[1]);
            erros.appendChild(criaP);
            document.getElementById(inputName[1]).innerHTML = '<div class="divErrorItems"><i class="bi bi-arrow-right-circle-fill"></i>' + "O campo " + inputName[1] + " precisa ter ao menos " + inputName[0] + " dígitos.</div>";
        }
    } else {
        const dados = document.querySelectorAll("#" + inputName[1]);
        for (var i = 0; i < dados.length; i++) {
            var sys = dados[i];
            sys.remove()
        }
    }
}, true);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const dadosFormail = [];
    var inp = event.target.elements;
    for (var i = 0; i < inp.length; i++) {
        var dadosArray = inp[i].value;

        if (dadosArray != "") {
            dadosFormail.push(dadosArray);
        }
    }
    var corpo = {
        Nome: dadosFormail[0],
        Email: dadosFormail[1],
        Assunto: dadosFormail[2],
        Menssagem: dadosFormail[3]

    };
    const sheeturl = "https://script.google.com/macros/s/AKfycbz9rJMv6IUfqEzGQ912iGtRos1cbj2jMFM54Lc0oGHiaFAxaMIP6ZsyF9kNWOr-R1mp7Q/exec";
    const Ssheeturl = "https://script.gooooogle.com/macros/s/AKfycbzKfEMlZ615R4XdlZzjMVZ3ifZv06WyTJRl2-nyuCPer1NQSq3c0DGnNWpulMaE09V1/exec";
    const url = new URL(sheeturl)

    url.searchParams.set('nome', corpo.Nome)
    url.searchParams.set('email', corpo.Email)
    url.searchParams.set('assunto', 'Contato Lado Verde: ' + corpo.Assunto)
    url.searchParams.set('msg', corpo.Menssagem)
    //const res = await fetch(url.toString())
    const urlstring = url.toString();
    sheet(urlstring, corpo.Nome)

}, true);
function cookieSet(n, v) {
    const bolachas = document.cookie.indexOf(n + "=" + v);
    (bolachas == -1) ? document.cookie = n + "=" + v : console.log("não inclua")
    console.log(bolachas)
}
function sheet(url, nome) {

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            document.getElementById("prospect").innerText = nome;
            cookieSet("nome", nome);
            document.getElementById('formItems').style.display = 'none';
            document.querySelector(".resultForm").style.display = 'flex';
            var getClear = document.getElementsByClassName("form-contact-items");
            for (let clear = 0; clear < getClear.length; clear++) {
                console.log(getClear[clear].value = '')
            }
        })
        .catch(function (error) {
            console.log(error.message)
            alert(nome + ",\n\nErro ao enviar email.\n\nTente novamente mais tarde.")
        });
}
function fecharAbrir(fechar, abrir) {
    document.querySelector(fechar).style.display = 'none';
    document.querySelector(abrir).style.display = 'block';
}
function changeIcon(id, type) {
    const docId = document.querySelector("#openclose").children[0].classList[0];
    if (docId == "open") {
        document.querySelector("#item-this").style.overflow = '';
        //document.querySelector("#item-this").style.opacity = '.9';
        document.querySelector("#openclose").children[0].classList.value = 'close';
        document.querySelector(".listMob").setAttribute("src", "assets/images/list-x.svg");
        //document.querySelector("#openclose").children[0].setAttribute("href", "#")
    } else {
        document.querySelector("#item-this").style.overflow = 'hidden';
        //document.querySelector("#item-this").style.opacity = '1';
        document.querySelector("#openclose").children[0].classList.value = 'open';
        document.querySelector(".listMob").setAttribute("src", "assets/images/list.svg");
    }


}
function opencloseHover() {
    document.querySelector(".listMob").click();
}