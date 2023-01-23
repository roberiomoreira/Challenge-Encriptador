

let textInicial = document.querySelector(".text-no-encrypt");
let textFinal = document.querySelector(".text-encrypt");

function btnEncriptar(){
    const text = encriptar(textInicial.value);        
    
    textFinal.value = text;
    textInicial.value = "";

}

function btnDesencriptar(){
    const text = desencriptar(textInicial.value);

    textFinal.value = text;
    textInicial.value = "";

}

function btnCopiarEColar(){
    textInicial.value = textFinal.value;
    textFinal.value = "";
}

function encriptar(texto){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    
    texto = texto.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function desencriptar(texto){
    let letters = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    
    for(let i = 0; i < letters.length; i++){
        
        if(texto.includes(letters[i][1])){
            
            texto = texto.replaceAll(letters[i][1], letters[i][0]);                
        }        
    }
    return texto;
}