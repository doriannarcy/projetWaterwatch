const htmlButtons = `<div id="buttons">
<input type="button" value="Recherche" id="searchButton">
<input type="button" value="Insertion fichier" id="insertFileButton">
<input type="button" value="Formulaire de saisie" id="inputFormButton">
</div>`;

const htmlInputForm = `<form action="">
    <span><label>Utilisateur: </label>                     <input type="text" required="required" placeholder="Nom de l'utilisateur..." name="user"/></span><br>
    <span><label>Nom ruisseau (Optionnel): </label>        <input type="text" placeholder="Nom du cours d'eau..." name="name"/></span><br>
    <span><label>Identifiant Point: </label>               <input type="text" required="required" placeholder="Identifiant du point..." name="identifiant"/></span><br>
    <span><label>Latitude: </label>                        <input type="number" min="-90" max="90" step="0.0000000001" required="required" placeholder="Ex: 46.34689" name="latitude"/></span><br>
    <span><label>Longitude: </label>                       <input type="number" min="-180" max="180" step="0.0000000001" required="required" placeholder="Ex: 2.323453" name="longitude"/></span><br>
    <span><label>Température moyenne: </label>             <input type="number" min="-5" max="35" required="required" placeholder="Ex: 7"name="tempMoy"/></span><br>
    <span><label>PH Moyen (Sonde): </label>                <input type="number" min="0" max="14" required="required" placeholder="Ex: 4" name="phMoy"/></span><br>
    <span><label>PH Bandelette: </label>                   <input type="number" min="0" max="14" required="required" placeholder="Ex: 6" name="phBand"/></span><br>
    <span><label>PH Moyen MV (Sonde): </label>             <input type="number" min="0" max="3000" required="required" placeholder="Ex: 7" name="phMoyMv"/></span><br>
    <span><label>Conductivité moyenne (µS/cm): </label>    <input type="number" required="required" placeholder="Ex: 2000"name="conduMoy"/></span><br>
    <span><label>Conductivité moyenne (mV): </label>       <input type="number" required="required" placeholder="Ex: 1500" name="conduMoyMv"/></span><br>
    <span><label>Turbidité moyenne (NTU): </label>         <input type="number" required="required" placeholder="Ex: 500" name="turbMoyNTU"/></span><br>
    <span><label>Turbidité moyenne (mV): </label>          <input type="number" required="required" placeholder="Ex: 2000" name="turbMoyMv"/></span><br>
    <span><label>Profondeur (cm): </label>                 <input type="number" min="1" max="300" required="required" placeholder="Ex: 200" name="profondeur"/></span><br>
    <span><label>Concentration Nitrates (mg/L): </label>   <input type="number" min="0" max="50" required="required" placeholder="Ex: 30" name="conNitra"/></span><br>
    <span><label>Concentration Nitrites (mg/L): </label>   <input type="number" min="0" max="3" required="required" placeholder="Ex: 2" name="conNitri"/></span><br>
    <span><label>Interprétation Débit: </label>            <input type="text" required="required" placeholder="Votre interpretation ici..." name="debitInter"/></span><br>
    <span><label>État mesuré: </label>                     <input type="text" required="required" placeholder="Texte ici..." name="etatMesure"/></span><br>
    <label>Observations (Optionnel): </label>
    <textarea rows="4" cols="35" name="observations" placeholder="Vos observations, juste ici..."></textarea><br>
    
    <button type="submit">Sauvegarder</button><button type="reset">Reset</button><button type="button">Fermer</button>
</form>`;

document.getElementById("buttonsContainer").innerHTML = htmlButtons;

// click on "FORMULAIRE DE SAISIE"
document.getElementById("inputFormButton").onclick = () =>
{
    document.getElementById("buttonsContainer").innerHTML = htmlInputForm;
    document.getElementById("buttonsContainer").id = "inputForm";
}