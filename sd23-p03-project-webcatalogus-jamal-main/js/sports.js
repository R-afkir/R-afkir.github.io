// console.log("test loaded");
 
// const cardContainerTennisMen = document.querySelector(".tennis-men-card-container");
 
// fetch("http://localhost:3000/tennis-men")
//   .then((data) => data.json())
//   .then((myJsonData) => showCards(myJsonData));
 
// function showCards(menPlayers) {
//   console.log(menPlayers);
//   let htmlCode1 = "";
//   for (let i = 0; i < menPlayers.length; i++) {
//     const menPlayer = menPlayers[i];
//     htmlCode1 += createCard(menPlayer);
//   }
//   cardContainerTennisMen.innerHTML = htmlCode1;
// }
 
// function createCard(menPlayer) {
//   const card = `
//         <div class="card">
//         <div>
//             <h1 class="card-title">${menPlayer.title}</h1>
//             <img src="${menPlayer.imageUrl}" />
//             </div>
//             <div>
//             <p>${menPlayer.description}</p>
//             <h3 class="bold">Country: ${menPlayer.country}</h3>
//             </div>
//         </div>
//     `;
//   return card;
// }

/////// tennis women
const cardContainerTennisWomen = document.querySelector(".tennis-women-card-container");
 
fetch("http://localhost:3000/tennis-women")
  .then((data) => data.json())
  .then((myJsonData) => showCards(myJsonData));
 
  function showCards(WomenPlayers) {
    console.log(WomenPlayers);
    let htmlCode2 = "";
    for (let i = 0; i < WomenPlayers.length; i++) {
      const WomenPlayer = WomenPlayers[i];
      htmlCode2 += createCard(WomenPlayer);
    }
    cardContainerTennisWomen.innerHTML = htmlCode2;
  }
   
  function createCard(WomenPlayer) {
    const card = `
          <div class="card">
          <div>
              <h1 class="card-title">${WomenPlayer.title}</h1>
              <img src="${WomenPlayer.imageUrl}" />
              </div>
              <div>
              <p>${WomenPlayer.description}</p>
              <h3 class="bold">Country: ${WomenPlayer.country}</h3>
              </div>
          </div>
      `;
    return card;
  }


//   ///boxing
//   const cardContainerBoxing = document.querySelector(".boxing-card-container");
 
// fetch("http://localhost:3000/ma-boxing")
//   .then((data) => data.json())
//   .then((myJsonData) => showCards(myJsonData));
 
// function showCards(boxingPlayers) {
//   console.log(boxingPlayers);
//   htmlCode = "";
//   for (let i = 0; i < boxingPlayers.length; i++) {
//     const boxingPlayer = boxingPlayers[i];
//     htmlCode += createCard(boxingPlayer);
//   }
//   cardContainerTennisMen.innerHTML = htmlCode;
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
//    htmlCode = "";
//   for (let i = 0; i < kbPlayers.length; i++) {
//     const kbPlayer = kbPlayers[i];
//     htmlCode += createCard(kbPlayer);
//   }
//   cardContainerTennisMen.innerHTML = htmlCode;
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


// const cardContainerMma = document.querySelector(".mma-card-container");
 
// fetch("http://localhost:3000/ma-mma")
//   .then((data) => data.json())
//   .then((myJsonData) => showCards(myJsonData));
 
// function showCards(mmaPlayers) {
//   console.log(mmaPlayers);
//   htmlCode = "";
//   for (let i = 0; i < mmaPlayers.length; i++) {
//     const mmaPlayer = mmaPlayers[i];
//     htmlCode += createCard(mmaPlayer);
//   }
//   cardContainerTennisMen.innerHTML = htmlCode;
// }
 
// function createCard(mmaPlayer) {
//   const card = `
//         <div class="card">
//         <div>
//             <h1 class="card-title">${mmaPlayer.title}</h1>
//             <img src="${mmaPlayer.imageUrl}" />
//             </div>
//             <div>
//             <p>${mmaPlayer.description}</p>
//             <h3 class="bold">Country: ${mmaPlayer.country}</h3>
//             </div>
//         </div>
//     `;
//   return card;
// }
