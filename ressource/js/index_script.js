// fonction fetchArticle permettant de faire la requette a l'API
function fetchArticle(url) {
    fetch(url) // argument = url de l'api
    .then(res => res.json())// then stock la réponse dans "res" et la convertie en JSON, objet dans lequel on trouvera le tableau joke
    .then(data => createArticles(data.jokes))// renvoie les donnée du tableau joke présent dans les DATA récupéré et les envoie dans la fonction createArticle
}

// fonction createArticles permettant de crée un article en exploitant les donnée récupéré dans la première fonction
function createArticles(jokes) { // création de la fonction createArticle
    const container = document.getElementsByClassName('main_container')[0]; // stockage du main_container dans la var container
    //for (let i = 0; i < jokes.length; i++) { // boucle pour chaques index du tableau jokes
    for (const joke of jokes) { // boucle pour chaque joke présent dans le tableau joke
        const article = document.createElement('article'); // création d'élément avec le tag article stocker dans la const article
        article.classList.add('blog_article');// ajouter une classe sur l'élément via la const article
        // ------------------------------------------------
        const articleDesContainer = document.createElement('div'); // création de la div article stocker dans la const articleDesContainer
        articleDesContainer.classList.add('article_description_container'); // définition d'une class a articleDesConainer
        // ------------------------------------------------
        const articleH3 = document.createElement('h3'); // création d'un h3 stocker dans la const articleH3
        articleH3.classList.add('article_title');// définition d'une class  article_title sur l'élément h3
        articleH3.textContent = joke.setup;// je récupère le setup de l'élement joke sur lequel je me trouve
        // ------------------------------------------------
        const articleP = document.createElement('p'); // création d'un p stocker dans la const articleP
        articleP.classList.add('article_text');// définition d'une class  article_text sur l'élément p
        articleP.textContent = joke.delivery;// je récupère le delivery sur l'élément joke dans lequel je me trouve
        //-------------------------------------------------
        const articleA = document.createElement('a');// création d'un a stocker dans la const articleA
        articleA.classList.add('btn','article_btn');// définition d'une class  article_btn sur l'élément a
        articleA.textContent ='En savoir plus';// je définis le contenu du lien en dure
        articleA.href = 'https://developer.mozilla.org'; // je définis le href du lien
        //-------------------------------------------------
        container.appendChild(article); // je défins article comme enfant de container
        article.appendChild(articleDesContainer);// je définis articleDesContainer comme enfant de article
        articleDesContainer.appendChild(articleH3);// je définis articleh3 comme enfant de articleDesContainer
        articleDesContainer.appendChild(articleP);// je définis articleP comme enfant de articleDesContainer
        articleDesContainer.appendChild(articleA);// je définis articleA comme enfant de articleDesContainer
    }
}

// fonction de création Article dynamique via FORM
function addArticles(title, text) { // création de la fonction createArticle
    const container = document.getElementsByClassName('main_container')[0]; // stockage du main_container dans la var container
    const article = document.createElement('article'); // création d'élément avec le tag article stocker dans la const article
    article.classList.add('blog_article');// ajouter une classe sur l'élément via la const article
    // ------------------------------------------------
    const articleDesContainer = document.createElement('div'); // création de la div article stocker dans la const articleDesContainer
    articleDesContainer.classList.add('article_description_container'); // définition d'une class a articleDesConainer
    // ------------------------------------------------
    const articleH3 = document.createElement('h3'); // création d'un h3 stocker dans la const articleH3
    articleH3.classList.add('article_title');// définition d'une class  article_title sur l'élément h3
    articleH3.textContent = title.value;// je récupère le setup de l'élement joke sur lequel je me t rouve
    // ------------------------------------------------
    const articleP = document.createElement('p'); // création d'un p stocker dans la const articleP
    articleP.classList.add('article_text');// définition d'une class  article_text sur l'élément p
    articleP.textContent = text.value;// je récupère le delivery sur l'élément joke dans lequel je me trouve
    //-------------------------------------------------
    const articleA = document.createElement('a');// création d'un a stocker dans la const articleA
    articleA.classList.add('btn','article_btn');// définition d'une class  article_btn sur l'élément a
    articleA.textContent ='En savoir plus';// je définis le contenu du lien en dure
    articleA.href = 'https://developer.mozilla.org'; // je définis le href du lien
    //-------------------------------------------------
    container.appendChild(article); // je défins article comme enfant de container
    article.appendChild(articleDesContainer);// je définis articleDesContainer comme enfant de article
    articleDesContainer.appendChild(articleH3);// je définis articleh3 comme enfant de articleDesContainer
    articleDesContainer.appendChild(articleP);// je définis articleP comme enfant de articleDesContainer
    articleDesContainer.appendChild(articleA);// je définis articleA comme enfant de articleDesContainer

}

// -> ***** CREATION ARTICLE DYNAMIQUE ***** <-
fetchArticle('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10');
// récupération des 10 dernier article API joke


// -> ***** ACTUALISATION DYNAMIQUE 10 DERNIERS ARTICLES ***** <-
btn = document.getElementById('actualiser'); 
// récupération de l'élément actualiser dans la page HTML
btn.addEventListener("click", ()=> { 
    //SI btn est cliquer alors recharge mon fetch
       fetchArticle('https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10');
      } );  
// fonction addEventListener  pour le bouton actualiser




// -> ***** AJOUT ARTICLE VIA FORMULAIRE DYNAMIQUE***** <-
let post = document.getElementById("poste");
// stockage du bouton dans la var send
post.addEventListener("click", (event)=> { 
    //addEventListner -> SI clique sur btn du form
    event.preventDefault();
    //preventDefault annule comportement du form par défaut lorsque il y a un clique sur post
    let title = document.getElementById("title_input");
    //stockage valeur de title_input dans var title
    let text = document.getElementById("text_input");
    //stockage valeur text_input dans var text
    addArticles(title, text);
    // appel fonction addArticles avec en par title & text
    document.getElementById("add_article").reset();
    // appel de l'élément form & reset formulaire avec fonction .reset
   } );
// fonction Event SI btn send est "click ALORS"
