let textInicial = document.querySelector(".text-no-encrypt");
let textFinal = document.querySelector(".text-encrypt");

function btnEncriptar(){
    const text = encriptar(textInicial.value);    

    textFinal.value = text;
    textInicial.value = "";

}

function encriptar(texto){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    
    texto = texto.toLowerCase();
    
    console.log(matrizCodigo);
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}