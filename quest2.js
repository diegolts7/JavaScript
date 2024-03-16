function contarVogais(vogais){
    let cont = 0
    for(let i of vogais){
        let letra = i.toLowerCase();
        switch(letra){
            case 'a': cont++; break;
            case 'e': cont++; break;
            case 'i': cont++; break;
            case 'o': cont++; break;
            case 'u': cont++; break;
        }
    }
    return cont
}
let palavra = "Diego"
console.log(contarVogais(palavra))