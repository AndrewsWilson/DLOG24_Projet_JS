// -> ***** MENU DROPDOWN DYNAMIQUE ***** <-
icons.addEventListener("click",()=>{
    //JS connais également l'ID nav voir explication plus haut
    // classList.toggle permet de dire : 
    // si sur nav la class active n'existe pas tu l'ajoute
    // si elle existe tu la retire
    // ainsi je peux effectuer les modification faite en CSS pour la class active
    nav.classList.toggle("active");
})
// JS connais déja l'ID icons raison pour laquelle je l'ai apeller ainsi dans mon HTML 
// ainsi il sais exactement qu'elle est l'élément concernant sans faire de getElementById
