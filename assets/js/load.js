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
        const modalDialogTitle = document.querySelector(".modalTitle");
        modalDialogTitle.innerHTML = event.target.textContent;
        lerTxt(event.target.textContent);
    } else {
        console.log("clicou em qualquer lugar")
    }


}, true);