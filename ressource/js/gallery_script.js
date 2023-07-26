// -> *****BTN 1 IMAGE***** <-
const display1 = document.querySelector('#display_1');
display1.addEventListener("click", ()=> { 
    // récupération de toutes mes div.gallery_img_container stocker dans une methode galleryImg sous forme de tableau
    const galleryImg = document.querySelectorAll('div.gallery_img_container'); 

    // retrait de la class 'd2'
    // ajout d'une classe 'd3' a toutes mes div.gallery
    for (const img of galleryImg) {  
        img.classList.remove('d2')
        img.classList.remove('d3');
    }
    } );

// -> ***** BTN 2 IMAGES***** <-
const display2 = document.querySelector('#display_2');
display2.addEventListener("click", ()=> { 
    // récupération de toutes mes div.gallery_img_container stocker dans une methode galleryImg sous forme de tableau
    const galleryImg = document.querySelectorAll('div.gallery_img_container'); 
    // ajout d'une classe 'd2' a toutes mes div.gallery
    for (const img of galleryImg) {  
        // pour toutes les img du tableau galleryImg faire ->
        img.classList.remove('d3');
        img.classList.add('d2');
    }
   } );

// -> ***** BTN 3 IMAGES ***** <-
const display3 = document.querySelector('#display_3');
display3.addEventListener("click", ()=> { 
    // récupération de toutes mes div.gallery_img_container stocker dans une methode galleryImg sous forme de tableau
    const galleryImg = document.querySelectorAll('div.gallery_img_container'); 

    // retrait de la class 'd2'
    // ajout d'une classe 'd3' a toutes mes div.gallery
    for (const img of galleryImg) {  
        img.classList.remove('d2');
        img.classList.add('d3');
    }
    } ); 

// -> ***** Ajout d'image ***** <-
function addImage(url) { // Fonction ajout d'image
    const galleryContainer = document.querySelector('.gallery_main_container');
    //-----------------------------------------------------
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('gallery_img_container');
    //-----------------------------------------------------
    const img = document.createElement('img');
    img.src = url.value;
    img.alt = 'gallery_img';
    //-----------------------------------------------------
    const deleteElement = document.createElement('button');
    deleteElement.classList.add('delete_btn', 'btn');
    deleteElement.textContent = 'Suprimmer';
    // -> ***** LISTNER sur btn deleteEment -> Suprime l'article si click ***** <-
    deleteElement.addEventListener("click", ()=>{
        deleteElement.parentNode.remove();
    });
    //-----------------------------------------------------
    galleryContainer.appendChild(imgContainer);
    imgContainer.appendChild(img);
    imgContainer.appendChild(deleteElement);
}


window.addEventListener("DOMContentLoaded", (event) => {
        // fonction affichage form ajout image
    const addImg = document.querySelector('#add_img');
    addImg.addEventListener("click", ()=>{
        inputContainer = document.querySelector('.input_add_img');
        inputContainer.classList.toggle("hide");
    } )

        // fonction envoie de l'image avec appel fonciton ajout d'image
    const send = document.querySelector('#send');
    send.addEventListener("click", ()=>{
        urlImg = document.querySelector('#addimg');
        addImage(urlImg);
        console.log(urlImg.value);
    } )



    // -> ***** CAROUSSEL ***** <-
        //appel du caroussel
        const slides = document.querySelectorAll(".slide_caroussel")

    // -> ***** APPLICATION TRANSFORMEX SUR IMG CARROUSSEL ***** <-
    //  - boucle foreach sur objet slides
    //  - pour chaque slide présente par index FAIRE
    //  - ajouter style -> transform = translateX (100 x numéro index)
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * indx}%)`;
        });



    // -> ***** Bouton slide suivante ***** <- 
        //- compteur slide actuel
        let curSlide = 0;
        //- slide maximum
        const maxSlide = slides.length -1;
        //- select bouton slide suivant
        const nextSlide = document.querySelector('.btn_next');

        nextSlide.addEventListener("click", ()=>{
            if(curSlide == maxSlide){
                curSlide = 0;

            } else {
                curSlide++;
            }
            // boucle foreach sur objet slides
            // pour chaque slide présente par index FAIRE
            // ajouter style -> transform = translateX (100 x numéro index - valeur curSlide)
            slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            });
        })

    // -> ***** Bouton slide precedent ***** <- 
        //- compteur slide actuel
        let prevSlide = document.querySelector('.btn_prev');

        prevSlide.addEventListener("click", ()=> {
            if(curSlide == 0) {
                curSlide = maxSlide;
            } else {
                curSlide--;
            }
            // boucle foreach sur objet slides
            // pour chaque slide présente par index FAIRE
            // ajouter style -> transform = translateX (100 x numéro index - valeur curSlide)
            slides.forEach((slide, indx) => {
                slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
            });
        })



});

