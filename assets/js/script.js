function openServices(){
    const item = document.querySelectorAll('.servicosResumidos');
    var dlay = 500;
    for(var i=0; i < item.length; i++){
        const res = item[i];
        if(res.style.opacity ==""){
            const a = document.querySelectorAll('.servicosResumidos')[i].classList[1];
            var go = item[i];
            const b = document.querySelector('.'+a);
            //b.style.opacity = "1";
            
            //go.style.opacity = "1"
            setTimeout(() => { b.style.opacity=1; }, i * dlay);
            
            
        }
        dlay += 10;
    }
}
let interval = 20000;
function escreve(arg, argSeletor){
    var palavraNew = arg;
    var seletor = argSeletor;
    document.getElementById(seletor).innerHTML = '';
    for(var i=0; i < palavraNew.length; i++){
        const letras = palavraNew[i].split();
        var span = document.getElementById(seletor);
        setTimeout(() => { document.getElementById(seletor).innerHTML +=letras; }, i * 100);
    }
    document.getElementById(seletor).innerHTML ='';
    
    setTimeout(() => { escreve(palavraNew, seletor) }, 1 * interval);
    
   
    
}

function chamaMaquina() {
    
    setInterval(() => {
        // troca de image
        escreve("CONSULTORIA AMBIENTAL", "spanHidenShow")
    },interval)
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

    if(currentImageIndex >= max)
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