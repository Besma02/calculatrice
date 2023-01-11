const touches=[...document.querySelectorAll('.boutton')]
const touchesdatakey=touches.map(touche=>touche.dataset.key)
const ecran=document.querySelector('.ecran')

document.addEventListener('keydown',(e)=>{
    const valeur=e.keyCode.toString()
    console.log(valeur)
    calculer(valeur)
})
document.addEventListener('click',(e)=>{
    const valeur=e.target.dataset.key
    console.log(valeur)
    calculer(valeur)
})
function calculer(valeur){
if(touchesdatakey.includes(valeur)){
    switch(valeur){
        case "8":
            ecran.textContent=" ";
            break;
        case "13":
            const calcul =eval( ecran.textContent);
            ecran.textContent=calcul
            break;
        default:
            const indexkeycode=touchesdatakey.indexOf(valeur)
            const touche=touches[indexkeycode]
            ecran.textContent+=touche.innerHTML

    }
}
}
window.addEventListener('error',(e)=>{
    alert('vous avez un error:'+e.message)
})