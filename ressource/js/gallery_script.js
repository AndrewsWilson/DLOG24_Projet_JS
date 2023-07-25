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
        img.classList.remove('d3')
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
        img.classList.remove('d2')
        img.classList.add('d3');
    }
    } );
   

