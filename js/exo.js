/*
    Description: Algorithmique Practice
    Language: JavaScript
    Created: 2024-02-16
    By: @edjek
    Lisez les instructions ci-dessous et écrivez votre code dans le fichier practice.js
    Vous pouvez tester votre code en ouvrant le fichier index.html dans votre navigateur
    Mais noubliez pas la balise <script src=""><script>
    Vous pouvez voir les résultats de votre code dans la console de votre navigateur
*/

/*
        ._________________.
        | _______________ |
        | I             I |
        | I javascript  I |
        | I    Algo     I |
        | I             I |
        | I_____________I |
        |_________________|
            ._[_______]_.
        .___|___________|___.
        |::: ____           |
        |    ~~~~ [CD-ROM]  |
        |___________________|

 */

// ---------------------------------- Partie 1 ----------------------------------

// Afficher un message de bienvenue dans la console
// 'Bonjour, je suis un message affiché dans la console'
console.log("Bonjour, je suis un message affiché dans la console");

// Creer une variable qui contient un message de bienvenue
// 'Bonjour, je suis une variable qui contient un message de bienvenue'
// Afficher la variable de bienvenue dans la console
let message =
  "Bonjour, je suis une variable qui contient un message de bienvenue";
console.log(message);

// Quelle sera la valeur de i à la fin de cet algorithme ?
let g = 12;
let h = 2;
let i = g * h;

// Dans ce cas la valeur de i est égal à 24 car g=12 et h=2 et i= 12*2=24

// Creer une variable qui contient un message
// 'Je decouvre le javascript'
// Concatener la variable avec le message 'et je suis très heureux de tout ce que j'apprend
// Et afficher le resultat dans la console
let message1 = "Je decouvre JavaScript";
let message2 = "et je suis très heureux de tout ce que j'apprend";
console.log(message1 + message2);

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'
// Afficher le message avec les 3 facons de faire une concaténation ('', "", ``)
let name = "Kenza";
console.log(`Bonjour, je m'appelle ${name}`);
console.log("Bonjour, je m'appelle " + name);
console.log("Bonjour, je m'appelle " + name);
// Algorithme de calcul de moyenne
// Déclarer 3 variables qui contiennent les notes de l'utilisateur
// Calculer la moyenne de l'utilisateur
let note = 18;
let note1 = 10;
let note2 = 13;
console.log((note + note1 + note2) / 3);

// ---------------------------------- Partie 2 ----------------------------------

// Creer une fonction qui affiche un message de bienvenue dans la console
// 'Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console'
// Appeler la fonction
function newmessage() {
  console.log(
    "Bonjour, je suis une fonction qui affiche un message de bienvenue dans la console"
  );
}
newmessage();

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom
// 'Bonjour XXXX, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend un parametre'
// Appeler la fonction en lui passant votre prenom en parametre
function newmessage(x) {
  console.log(
    `Bonjour ${x} , je suis une fonction qui affiche un message de bienvenue dans la console`
  );
}
newmessage("Kenza");

// Creer une fonction qui affiche un message de bienvenue dans la console et qui prend en parametre un nom et un age
// 'Bonjour XXXX, vous avez XXXX ans, je suis une fonction qui affiche un message de bienvenue dans la console et qui prend deux parametres'
// Appeler la fonction en lui passant votre prenom et votre age en parametre
function newmessage(x, y) {
  console.log(
    `Bonjour ${x} vous avez ${y} ans , je suis une fonction qui affiche un message de bienvenue dans la console`
  );
}
newmessage("Kenza", 23);

// ---------------------------------- Partie 3 ----------------------------------

// Déclarer une variable qui contient votre age
// Si vous avez plus de 18 ans afficher dans la console 'Vous êtes majeur'
// Sinon afficher dans la console 'Vous êtes mineur'
// let messageAge= prompt("Quel est votre âge ?")
// if(messageAge >=18){
//     console.log("Vous etes majeur")
// }else{
//     console.log("Vous êtes mineur")
// }

// Déclarer une fonction qui prend en parametre un age
// Et qui affiche dans la console si l'utilisateur est majeur ou mineur
// function age(x){
// if(x >=18){
//     console.log("Vous etes majeur")
// }else{
//     console.log("Vous êtes mineur")
// }
// }
// age(16)

// Transformer la fonction pour retourner true si l'utilisateur est majeur et false sinon
function age(x) {
  if (x >= 18) {
    console.log(true);
  } else {
    console.log(false);
  }
}
age(19);

// Décider de l'animal préféré de l'utilisateur en fonction de son choix
// Demander à l'utilisateur de rentrer un animal
//     Si il rentre "chat" ou "chien" => "Vous aimez les animaux domestiques !"
//     Si il rentre "lion" ou "tigre" => "Vous aimez les animaux sauvages !"
//     Si il rentre "dauphin" ou "otarie" => "Vous aimez les animaux marins !"
//     Sinon => je ne connais pas cet animal
// let animal = prompt("Quel est ton animal preféré ?");
// if (animal == "chat" || animal == "chien") {
//   console.log("Vous aimez les animaux domestiques !");
// } else if (animal == "lion" || animal == "tigre") {
//   console.log("Vous aimez les animaux sauvages !");
// } else if (animal == "dauphin" || animal == "otarie") {
//   console.log("Vous aimez les animaux marins");
// } else {
//   console.log("Je ne connais pas cet animal ");
// }

// Transformer l'exercice en fonction qui prend en parametre un animal et qui retourne le message correspondant
function animal1(animal) {
if (animal == "chat" || animal == "chien") {
  console.log("Vous aimez les animaux domestiques !");
} else if (animal == "lion" || animal == "tigre") {
  console.log("Vous aimez les animaux sauvages !");
} else if (animal == "dauphin" || animal == "otarie") {
  console.log("Vous aimez les animaux marins");
} else {
  console.log("Je ne connais pas cet animal ");
}

}
animal1("tigre")
// ---------------------------------- Partie 4 ----------------------------------

// Faite une boucle qui affiche dans la console 5 fois le message suivant
// 'Je suis une boucle'
for(let i=0; i<5 ; i=i+1){
console.log("Je suis une boucle")
}

// Faire une boucle qui affiche dans la console les nombres de 1 à 10
let a=0
while(a<=9){
    a=a+1
    console.log(a)
}


// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console les nombres de 1 à ce nombre
let chiffre= prompt("Rentrez un nombre")


// Demander à l'utilisateur de rentrer un nombre
// Faire une boucle qui affiche dans la console la table de multiplication de ce nombre
// Exemple: Si l'utilisateur rentre 5, afficher dans la console
// '5 x 1 = 5'
// '5 x 2 = 10'
// '5 x 3 = 15'

// Faire une fonction qui prend en parametre un nombre
// Et qui affiche dans la console la table de multiplication de ce nombre

// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 7 en parametre
// Appeler la fonction en lui passant le nombre 9 en parametre

// Demander à l'utilisateur de rentrer un nombre
// Creer une fonction qui prend en parametre un nombre
// Et qui affiche dans la console si le nombre est pair ou impair (modulo)
// Appeler la fonction en lui passant le nombre 5 en parametre
// Appeler la fonction en lui passant le nombre 256 en parametre

// ---------------------------------- Partie 5 ----------------------------------

// Déclarer un tableau contenant le nom des mois de l'année
// Afficher dans la console le mois de janvier
// Afficher dans la console le mois de mars
// Afficher dans la console le mois de avril
// Afficher dans la console le mois de aout
// Afficher dans la console le mois de octobre

// Faire une boucle qui affiche dans la console les mois de l'année

// Creer une fonction qui affiche dans la console les mois de l'année
// Appeler la fonction 2 fois

// Creer un tableau qui contient les notes de l'utilisateur [10, 15, 20]
// Afficher dans la console la note de l'utilisateur à l'indice 1
