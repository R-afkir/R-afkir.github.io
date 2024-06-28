  ///boxing
  const cardContainerBoxing = document.querySelector(".boxing-card-container");
 
fetch("http://localhost:3000/ma-boxing")
  .then((data) => data.json())
  .then((myJsonData) => showCards(myJsonData));
 
function showCards(boxingPlayers) {
  console.log(boxingPlayers);
 let htmlCode3 = "";
  for (let i = 0; i < boxingPlayers.length; i++) {
    const boxingPlayer = boxingPlayers[i];
    htmlCode3 += createCard(boxingPlayer);
  }
  cardContainerBoxing.innerHTML = htmlCode3;
}
 
function createCard(boxingPlayer) {
  const card = `
        <div class="card">
        <div>
            <h1 class="card-title">${boxingPlayer.title}</h1>
            <img src="${boxingPlayer.imageUrl}" />
            </div>
            <div>
            <p>${boxingPlayer.description}</p>
            <h3 class= "bold" >age : ${boxingPlayer.age} yrs</h3>
            <h3 class="bold">Country: ${boxingPlayer.country}</h3>
            </div>
        </div>
    `;
  return card;
}
