let ajouter = document.getElementById('ajouter');

ajouter.addEventListener('click',souitch);

function souitch(){

    let pizza = document.getElementById("liste").value;

    console.log(pizza);

    switch(pizza){

        case '4fromages' :
            document.write('Voici une pizza 4 fromages.');
            break;

        case 'vegetarienne' :
            document.write('Voici une pizza vegetarienne.');
            break;

        case 'hawaienne' :
            document.write('Voici une pizza hawaïenne.');
            break;

        case 'norvegienne' :
            document.write('Voici une pizza norvegienne.');
            break;

    }
}