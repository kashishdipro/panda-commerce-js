// Step 1: Using getElementsByTagName method changed the color of h2 tags
const h2Collection = document.getElementsByTagName('h2');

/* Basic for loop */
// for (let i = 0; i < h2Collection.length; i++) {
//     h2Collection[i].style.color = "lightblue";
// }

/* New for...of loop */
for(const h2 of h2Collection){
    h2.style.color = "lightblue";
}
/* -------------------------------------------------------------------------------------------- */
// Step 2: Using getElementsByClassName method changed the color of h2 tags which named as 'h2Class'
// const h2Collection = document.getElementsByClassName('h2Class');
/* New for...of loop */
// for(const h2 of h2Collection){
//     h2.style.color = "lightblue";
// }
/* -------------------------------------------------------------------------------------------- */
// Step 3: Using getElementsByName method changed the color of h2 tags which named as 'h2Name' 
// const h2Collection = document.getElementsByName('h2Name');
/* New for...of loop */
// for(const h2 of h2Collection){
//     h2.style.color = "lightblue";
// }
/* -------------------------------------------------------------------------------------------- */

// Using getElementById method changed the backgroundColor of section which named as 'backpack'  
document.getElementById('backpack').style.backgroundColor= "tomato";

/* -------------------------------------------------------------------------------------------- */
