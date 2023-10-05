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
const pixels = document.querySelector('#emailContact').style.borderLeftWidth = "10px"
const solid = document.querySelector('#emailContact').style.borderLeftStyle = "solid"
function focusOutForm(str, num){
    //document.querySelector('#'+str).style.borderLeft = "";
    var strForm = document.getElementById(str).value;
    var numForm = num;
    if(strForm.length >= numForm){
        if(str =="nameContact"){
            document.getElementById("clientForm").innerHTML = strForm;
        }
        document.querySelector('#'+str).style.borderLeftColor = "#9ffaa3";
    }else{
        pixels;
        solid;
        document.querySelector('#'+str).style.borderColor = "Tomato";
    }

    //console.log(document.getElementById("clientForm"))
}
function emailFormRegex(){
    
    pixels;
    solid;
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var emailDigitado = document.getElementById("emailContact").value;
    if(emailDigitado.match(emailRegex)){
        
        document.querySelector('#emailContact').style.borderLeftColor = "#9ffaa3";
    }
    else
    {
        document.querySelector('#emailContact').style.borderLeftColor = "Tomato";
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
 
  if(inputValue.length < inputName[0]){
   
    if(document.querySelectorAll("#"+inputName[1]).length ==0){
        var criaP = document.createElement("p");
        criaP.setAttribute("id",inputName[1]);
        erros.appendChild(criaP);
        document.getElementById(inputName[1]).innerHTML = "O Campo "+inputName[1]+" precisa ter ao menos "+inputName[0];
    }
  }else{
    const dados = document.querySelectorAll("#"+inputName[1]);
    for(var i=0; i < dados.length; i++){
        var sys = dados[i];
        sys.remove()
    }
  }
}, true);
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    var inp = event.target.elements;
    for(var i=0; i < inp.length; i++){
        console.log(inp[i].value)
    }
}, true);