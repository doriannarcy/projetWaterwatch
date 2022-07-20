const htmlButtons = `<div id="buttons">
<input type="button" value="Recherche" id="searchButton">
<input type="button" value="Insertion fichier" id="insertFileButton">
<input type="button" value="Formulaire de saisie" id="inputFormButton">
</div>`;

document.getElementById("buttonsContainer").innerHTML = htmlButtons;

// click on "FORMULAIRE DE SAISIE"
document.getElementById("inputFormButton").onclick = () =>
{
    document.getElementById("buttonsContainer").id = "inputForm";
}