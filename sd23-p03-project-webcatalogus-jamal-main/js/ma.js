//   ///boxing
//   const cardContainerBoxing = document.querySelector(".boxing-card-container");
 
// fetch("http://localhost:3000/ma-boxing")
//   .then((data) => data.json())
//   .then((myJsonData) => showCards(myJsonData));
 
// function showCards(boxingPlayers) {
//   console.log(boxingPlayers);
//  let htmlCode3 = "";
//   for (let i = 0; i < boxingPlayers.length; i++) {
//     const boxingPlayer = boxingPlayers[i];
//     htmlCode3 += createCard(boxingPlayer);
//   }
//   cardContainerBoxing.innerHTML = htmlCode3;
// }
 
// function createCard(boxingPlayer) {
//   const card = `
//         <div class="card">
//         <div>
//             <h1 class="card-title">${boxingPlayer.title}</h1>
//             <img src="${boxingPlayer.imageUrl}" />
//             </div>
//             <div>
//             <p>${boxingPlayer.description}</p>
//             <h3 class= "bold" >age : ${boxingPlayer.age} yrs</h3>
//             <h3 class="bold">Country: ${boxingPlayer.country}</h3>
//             </div>
//         </div>
//     `;
//   return card;
// }


// //////////kick boxing
// const cardContainerKB = document.querySelector(".kick-boxing-card-container");
 
// fetch("http://localhost:3000/ma-kickboxing")
//   .then((data) => data.json())
//   .then((myJsonData) => showCards(myJsonData));
 
// function showCards(kbPlayers) {
//   console.log(kbPlayers);
//   let htmlCode4 = "";
//   for (let i = 0; i < kbPlayers.length; i++) {
//     const kbPlayer = kbPlayers[i];
//     htmlCode4 += createCard(kbPlayer);
//   }
//   cardContainerKB.innerHTML = htmlCode4;
// }
 
// function createCard(kbPlayer) {
//   const card = `
//         <div class="card">
//         <div>
//             <h1 class="card-title">${kbPlayer.title}</h1>
//             <img src="${kbPlayer.imageUrl}" />
//             </div>
//             <div>
//             <p>${kbPlayer.description}</p>
//             <h3 class= "bold" >age : ${kbPlayer.age} yrs</h3>
//             <h3 class="bold">Country: ${kbPlayer.country}</h3>
//             </div>
//         </div>
//     `;
//   return card;
// }


const cardContainerMma = document.querySelector(".mma-card-container");
 
fetch("http://localhost:3000/ma-mma")
  .then((data) => data.json())
  .then((myJsonData) => showCards(myJsonData));
 
function showCards(mmaPlayers) {
  console.log(mmaPlayers);
 let htmlCode5 = "";
  for (let i = 0; i < mmaPlayers.length; i++) {
    const mmaPlayer = mmaPlayers[i];
    htmlCode5 += createCard(mmaPlayer);
  }
  cardContainerMma.innerHTML = htmlCode5;
}
 
function createCard(mmaPlayer) {
  const card = `
        <div class="card">
        <div>
            <h1 class="card-title">${mmaPlayer.title}</h1>
            <img src="${mmaPlayer.imageUrl}" />
            </div>
            <div>
            <p>${mmaPlayer.description}</p>
            <h3 class="bold">Country: ${mmaPlayer.country}</h3>
            </div>
        </div>
    `;
  return card;
}