function lerTxt(subTitle) {
    fetch("./assets/servicos/servicos.json")
        .then((response) => response.json())
        .then((data) => {
            const resposta = data['Services'];
            //console.log(resposta)
            for (var i = 0; i < resposta.length; i++) {
                var res = resposta[i];
                if (res.serviceName == subTitle) {
                    const info = document.querySelector(".modalInfo");
                    info.innerHTML = res.infoService;

                }
            }

        })
}

const modalHref = document.getElementsByTagName("section")[0];

modalHref.addEventListener('click', (event) => {
    if (event.target.classList == "showServicesModal") {
        const animationModal = document.getElementById("modalDialog");
        const modalDialogTitle = document.querySelector(".modalTitle");
        modalDialogTitle.innerHTML = event.target.textContent;
        lerTxt(event.target.textContent);
        animationModal.className = "animationModal";
    } else {
        //console.log(event.target.classList)
    }


}, true);
function xHide() {
    document.getElementById("modalDialog").className = "animationModalClose";

    const eleX = document.getElementById("modalDialog");

    window.addEventListener('animationend', (event) => {
        if (document.getElementById("modalDialog").className == "animationModalClose") {
            //console.log("close");
            document.getElementsByClassName("button-close")[0].click();
        }
        //document.getElementsByClassName("button-close")[0].click();
        //console.log(event)
        //document.getElementById("modalDialog").className = "animationModal";
    }, true);
}

let CreateDOMObjects = () => {
    const DOM = `
        <div vw class="enabled">
        <div vw-access-button class="active"></div>
        <div vw-plugin-wrapper>
            <div class="vw-plugin-top-wrapper"></div>
        </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', DOM);
}

let ImportScriptFile = () => {
    let script = document.createElement('script');
    //script.setAttribute("defer", "");
    script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
    script.onload = () => {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.head.appendChild(script)
}

(() => {
    window.addEventListener('DOMContentLoaded', e => {
        ImportScriptFile();
        CreateDOMObjects();
        var urlCSS = "http://jigsaw.w3.org/css-validator/validator?lang=pt-BR&profile=css3svg&uri="
        var myUrlNow = window.location.href;
        console.log(urlCSS + myUrlNow);
        document.getElementById("cssValido").setAttribute("href", urlCSS + myUrlNow)
    });
})();

const blockBtUp = document.querySelector(".bt-up");

window.addEventListener("load", () => {
    if (document.documentElement.scrollTop >= 200) {
        blockBtUp.style.display = 'flex';
    }
});
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 200) {
        blockBtUp.style.display = 'flex';
    } else {
        blockBtUp.style.display = 'none';
    }

});