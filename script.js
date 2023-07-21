//fetch permet de faire du JS Asynchrone
// on fait une requette mais le reste du code continue de tourner le temps que les données soient reçus

fetch('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10') // argument = url de l'api
    .then(res => res.json())// then stock la réponse dans "res" et la convertie en JSON
    .then(data => console.log(data))// then affiche les data convertie en json stocker dans data

