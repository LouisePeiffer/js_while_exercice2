// Exo 1
// let valeur = prompt('Rentrez qq chose')
// while (valeur.length == 0) {
//     valeur = prompt('vassyyyy')
// }
// OU
// while (valeur == "") {
//     valeur = prompt('Veuillez rentrer une valeur')
// }

// let samere = parseInt(prompt('donne un chiffre enculé'))
// while (samere < 10) {
//     samere = parseInt(prompt('encore'))
// }

// Exo 2
// // 2.1
// let nbImp = 0
// let maxii = 11
// while (nbImp <= maxii) {
//     if (nbImp % 2 == 1) {
//     console.log(nbImp);
//     }
//     nbImp++
// }
// // 2.2
// let prenom = prompt("Quel est ton prénom?")
// let prenomTaille = prenom.length
// let compt = 0

// while (compt<prenomTaille) {
//     console.log(prenom);
//     compt++
// }

// // 2.3
// let prenom = prompt("Quel est ton prénom?")
// let prenomTaille = prenom.length
// let compt = 0

// while (compt < prenomTaille) {
//     console.log(prenom.charAt(compt));
//     compt++
// }

// Exo 3

//3.1
// let prenom = prompt('Quel est ton prénom ?');
// let prenomTaille = prenom.length;
// let compt = 0;

// while (compt < prenomTaille) {
//     if (compt % 2 == 1) {
//         console.log(`${prenom.charAt(compt).toUpperCase()} =>  à l'indice ${compt}`);
//     } else {
//         console.log(`${prenom.charAt(compt).toLowerCase()} =>  à l'indice ${compt}`);
//     }
//     compt++
// }

//3.2
// let calcul = prompt("Quel est ton calcul ?");   //3.5 * 2.5
// let condition = true; 

// while (condition == true) {
//     console.log(Math.ceil(eval(calcul)));

//     let stop = prompt('Veux-tu arreter ?')
//     if (stop == "oui") {
//         condition = false 
//         console.log('Merci.');
//     } else {
//         calcul = prompt("Quel est ton calcul ?");   //3.5 * 2.5
//     }
// }


//3.3
let prenom = prompt('ton prenom');

while (prenom.length <= 5 ) {
    prenom = prompt('prenom trop court,  recommencer')
}
if (prenom.length >=5) {
    console.log(prenom.toUpperCase());
}