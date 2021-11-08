
// ***Inserimento variabili ***


const Kmt = parseFloat(prompt('Inserisci il numero di km da percorrere'));
console.log(Kmt);

const età = parseInt(prompt('Inserisci la tua età'));
console.log(età);


// ***Esecuzione calcoli ***


let prezzoSolKm = Kmt * 0.21; 
console.log('Prezzo biglietto al km = ' + prezzoSolKm);

let prezzoFinal = 0;

if(isNaN(età) || isNaN(Kmt)){

    let  sbaglio = 'Sia l età che i km devono essere inseriti con caratteri numerici';
    document.getElementById('sbaglio').innerHTML = sbaglio ;
    console.log('Sia l età che i km devono essere inseriti con caratteri numerici');   

}else{
    if(età < 18 ){

        prezzoFinal =  prezzoSolKm / 100 * 80;
    
    }else if(età > 65){
                prezzoFinal = prezzoSolKm / 100 * 60;
            }
            else{
                prezzoFinal = prezzoSolKm;
            }
    }   
    
    
    let  prezzoFinale = 'Il prezzo finale è = ' + prezzoFinal.toFixed(2) + 'euro';
    document.getElementById('prezzoFinale').innerHTML = prezzoFinale ;
    console.log(prezzoFinale);

    let kmTratta = 'Numero km tratta : ' + Kmt + 'km';
    document.getElementById('kmTratta').innerHTML = kmTratta;
    console.log(kmTratta);

    let etaPasseggero = 'Età del passeggero: ' + età + 'anni';
    document.getElementById('etaPasseggero').innerHTML = etaPasseggero;
    console.log(etaPasseggero);


    
