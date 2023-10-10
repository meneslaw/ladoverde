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
                    console.log(subTitle, info.innerHTML = res.infoService)

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
        console.log("clicou em qualquer lugar")
    }


}, true);
function xHide() {
    document.getElementById("modalDialog").className = "animationModalClose";

    const eleX = document.getElementById("modalDialog");

    window.addEventListener('animationend', (event) => {
        if (document.getElementById("modalDialog").className == "animationModalClose") {
            console.log("close");
            document.getElementsByClassName("button-close")[0].click();
        }
        //document.getElementsByClassName("button-close")[0].click();
        console.log(event)
        //document.getElementById("modalDialog").className = "animationModal";
    }, true);
}