console.log("ciao");

const  posizioni = [-20,-30,-50,3];

console.log(posizioni);

const somma = posizioni.reduce(function(totale,valoreArray){
    // totale = 0
    // valoreArray = 20
    return  totale + valoreArray;
},0)

console.log(somma);

const maggiore = posizioni.reduce(function(acc,item){
    // acc = 0
    if(acc>item){
        return acc;
    }else{
        return item;
    }

},0);

console.log("maggiore è :",maggiore);

const auto = [
    {
        "nome":"Mario",
        "posizione":0
    },
    {
        "nome":"Luigi",
        "posizione":0
    },
    {
        "nome":"Hello kitty",
        "posizione":0
    },

];

const davanti = auto.reduce((autoInTesta,auto)=>{

    if(autoInTesta.posizione > auto.posizione){
        return autoInTesta;
    } else{
        return auto
    }   

},{"posizione":0})

console.log(davanti);


