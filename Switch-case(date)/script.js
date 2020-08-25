var vDateJour = document.getElementById("divDateJour");

var vBtnQF = document.getElementById("btnQF").addEventListener("click",afficherConseil);

//créer un objet date 

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var dDay = new Date();

afficheDate();

function afficheDate()
{
    console.log(dDay.toDateString());
    vDateJour.innerHTML = dDay.toLocaleDateString('fr-FR', options);
}


function afficherConseil()
{
    var numJourSem = dDay.getDay();
    console.log(numJourSem);

    let numMois = dDay.getMonth();

    let conseilMois;

    var monConseil;

    switch(numJourSem)
    {
        case 0 : 
            monConseil = "Un peu de repos bien mérité.";
            break;
        case 1 :
            monConseil = "Fais ce que tu as à faire, voyons";
            break;
        case 2 :
            monConseil = "Prends le temps de regarder la nature";
            break;
        case 3 :
            monConseil = "Un petit déjeuner copieux c'est mieux";
            break;
        case 4 : 
            monConseil = "Apprends quelque chose de plus par jour";
            break;
        case 5 :
            monConseil = "Fais la liste des choses à faire";
            break;
        case 6 : 
            monConseil = "Fais une des choses de ta liste";
            break;
        default :
        monConseil = "Bizarre bizarre autant qu'étrange";
        break;
    }

    switch(numMois){

        case 0 :
            conseilMois = "Nous sommes en janvier, bonne année !";
            break;
        
        case 1 :
            conseilMois = "Nous sommes en février, on fait du ski ?";
            break;

        case 2 :
            conseilMois = "Nous sommes en amrs, le mois du printemps.";
            break;

        case 3 :
            conseilMois = "Nous sommes en avril, poission d'avril ~ ";
            break;

        case 4 :
            conseilMois = "Nous sommes en mai, les beaux jours arrivent !";
            break;

        case 5 :
            conseilMois = "Nous sommes en juin, le mois de l'été.";
            break;

        case 6 :
            conseilMois = "Nous sommes en juillet, envie d'un feu d'artifice ?";
            break;
                                    
        case 7 :
            conseilMois = "Nous sommes en août, profitons des vacances.";
            break;
                                        
        case 8 :
            conseilMois = "Nous sommes en septembre, le mois de l'automne.";
            break;
                                            
        case 9 :
            conseilMois = "Nous sommes en octobre, ...toussain ?";
            break;
                                                
        case 10 :
            conseilMois = "Nous sommes en novembre, ça caille...";
            break;
                                                    
        case 11 :
            conseilMois = "Nous sommes en décembre, joyeux noël !";
            break;
                                                                                                                                                                                                                                                                        
    }
    //afficher la valeur de monConseil + conseilMois dans divConseil
    document.getElementById("divConseil").innerHTML = conseilMois + " " +monConseil;
    
}

