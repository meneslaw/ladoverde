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
        if (emailDigitado.length >= 1) {
            existP.innerHTML = '<div class="divErrorItems"><i class="bi bi-arrow-right-circle-fill"></i>Formato do Email é inválido.</div>';
        }


        //(!existP) ? criaPregex : console.log("já existe");
    }
}
var form = document.getElementById('formItems');
form.addEventListener('focusout', (event) => {
    const targetFormail = event.target;
    if (targetFormail.value.length == "" || targetFormail.value.length < 1) {
        var placeRemoveStyle = targetFormail.parentElement.children[0];
        placeRemoveStyle.style.marginTop = "";
    }

    var numberMin = targetFormail.name.split(" ");
    focusOutForm(targetFormail.id, numberMin[0]);

    (targetFormail.id == "emailContact") ? emailFormRegex('emailContact') : false
}, true);
form.addEventListener('focus', (event) => {
    event.target.style.borderLeftColor = "gold";
    var targetFormPlace = event.target;

    var eventRess = targetFormPlace.parentElement.children[0];
    eventRess.style.transition = "1s";
    eventRess.style.marginTop = "-20px";
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
    (bolachas == -1) ? document.cookie = n + "=" + v : console.log(" ")

}
function sheet(url, nome) {

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            document.getElementById("prospect").innerText = nome;
            cookieSet("nome", nome);
            document.getElementById('formItems').style.display = 'none';
            document.querySelector(".resultForm").style.display = 'flex';
            var getClear = document.getElementsByClassName("form-contact-items");
            for (let clear = 0; clear < getClear.length; clear++) {
                getClear[clear].value = '';
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
const aboutStatus = document.getElementsByClassName("aboutTitle")[0];
const secStatus = document.getElementById("navSobre");
function about(numLink) {
    if (secStatus.style.display != "flex") {
        aboutStatus.style.display = "flex"
        secStatus.style.display = "flex"
        if (numLink) {
            const criaLink = document.createElement("a");
            criaLink.setAttribute("href", numLink);
            criaLink.click();
        }
    }
}