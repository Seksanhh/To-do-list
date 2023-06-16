let createTache = function(tache){
let newTache = document.createElement('p');
newTache.textContent =tache;

let doneButton =document.createElement('img');
doneButton.src = 

doneButton.addEventListener('click', function (){
    newDiv.style.borderColor ="green";

}
)

let newButton = document.createElement("img");
newButton.classList.add("tache-container")
newButton.src = "./media/trash-solid.svg"

let newDiv = document.createElement("div");
newButton.addEventListener('click', function(){
    newDiv.remove()
}
)
newDiv.append(newTache, newButton);
return newDiv;

};

document.querySelector("#add-taches").addEventListener("click", function(event){
    event.preventDefault(); // Pour eviter le rafraichissement de la page avec un form HTML


    //supprimer toutes les taches
document.querySelector("#remove-taches") .addEventListener("click", function(){
    document.querySelector("#taches").innerHTML ="";

}
)


    // Selectionner l'input pour récuperer la valeur
let tacheInput = document.querySelector('#tache-input');

// Selectionner le paragraphe
let pError =document.querySelector('#tache-error');

// Tester si l'input est vide, pour afficher une erreur
if(tacheInput.value === ""){

pError.innerHTML = 'Veuillez entrer une tache';
tacheInput.style.borderColor = "red";
return;
}

// Si l'input est la meme, afficher une erreur

// if(tacheInput.value === tacheInput.value){
//     pError.innerHTML = "Une tache similaire est déja présente!";
//     tacheInput.style.borderColor = "red";
//     return


// }



// Si l'input n'est pas vide, supprimer l'erreur

pError.textContent= "";
tacheInput.style.borderColor = "green";

// Créer la tache et l'ajouter dans la page
let newTache =createTache(tacheInput.value)


let taches = document.querySelector('#taches');
taches.append(newTache);
})

// Exercice 
//Ajouter un bouton par tache pour valider une tache: Changer la couleur de la bordure en vert

console.log(remove);



