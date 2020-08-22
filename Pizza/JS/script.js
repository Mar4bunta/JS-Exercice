let commande = [],
ajouter = document.getElementById("add"),
editer = document.getElementById("edit");

ajouter.addEventListener("click", ajouterCommande);
editer.addEventListener("click", editerCommande);

function ajouterCommande(){

    let pizza = document.getElementById('pizza'),
    pizzaName = pizza.options[pizza.selectedIndex].value,
    menu = document.getElementById('menu'),
    menuCheck = menu.checked,
    pizzaSeule = document.getElementById('pizzaSeule'),
    pizzaSeuleCheck = pizzaSeule.checked,
    quantite = document.getElementById('quantite'),
    quantiteValue = quantite.value,
    supplement = document.getElementsByName('garniture'),
    supplementCheck = supplement.checked;

    if(menuCheck){
        
        menuCheck = "menu";

    }else{

        menuCheck = "";

    }

    if(pizzaSeuleCheck){
        
        pizzaSeuleCheck = "pizza solo";

    }else{

        pizzaSeuleCheck = "";

    }

    let commandeTotal = [pizzaName,
        menuCheck,
        pizzaSeuleCheck,
        quantiteValue,
        supplementCheck];

    alert(commandeTotal);

}

function editerCommande(){


}
