    // Variables globales
    var vBudget = 20;
    var vRepas  = 0;

    // Affiche le budget
    document.getElementById("hBudget").innerHTML = vBudget;

    // Capte la passation de commande
    document.getElementById("btnCommander").addEventListener("click", acheterSW);

    /* Achète le nombre de sandwiches par jour au prix du jour */
    function acheterSW() {
        /*
        A FAIRE: 
        * Réinitialiser le formulaire
        * declarer une variable pour stocker le nombre de jour initialise a zero
        * Lancer une boucle while
        * Obtenir le prix du jour
        * stocker dans une variable le nombre de sandwich choisi par l'utilisateur
        * s'assurer que l'utilisateur ne puisse pas entrer de valeur inférieur à 1
        * Calculer le total et stocker le resultat dans une variable
        * Tester si le budget suffit encore
        * Si oui, soustraire le montant, augmenter le nombre de repas et reboucler
        * Si non, afficher un message
        * Afficher le total de repas pris en sortie de boucle
        */
    reinitFormu()

    let nbJour = 0;

    while(nbJour<=4){

        let prixJour = calculerPrixDuJour();
        let nbSandwich = document.getElementById('hNSandwiches').value;
        if(nbSandwich<1) nbSandwich = 1;
        let total = nbSandwich*prixJour;

        if(total<vBudget){

            vBudget -= total;
            vRepas ++;

            console.log(vBudget);

        }else{
            
            alert('Plus d\'argent ):');
            nbJour = 5;

        }

        nbJour++;

    }

    alert('Félicitation, vous avez mangé '+vRepas+' repa(s).');
    }

    /* Etablit le prix des sandwiches pour un jour */
    function calculerPrixDuJour() {

        var prixSW = (Math.random() * (5 - 1) + 1).toFixed(2);
        return prixSW;

    }

    /* Réinitialise le jeu pour la prochaine commande */
    function reinitFormu() {

        vBudget = 20;
        vRepas  = 0;
        document.getElementById("hTicket").innerHTML = "";

    }