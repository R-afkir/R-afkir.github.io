console.log("test loaded");
 
const cardContainerTennisMen = document.querySelector(".tennis-men-card-container");
 
fetch("http://localhost:3000/tennis-men")
  .then((data) => data.json())
  .then((myJsonData) => showCards(myJsonData));
 
function showCards(menPlayers) {
  console.log(menPlayers);
  let htmlCode1 = "";
  for (let i = 0; i < menPlayers.length; i++) {
    const menPlayer = menPlayers[i];
    htmlCode1 += createCard(menPlayer);
  }
  cardContainerTennisMen.innerHTML = htmlCode1;
}
 
function createCard(menPlayer) {
  const card = `
        <div class="card">
        <div>
            <h1 class="card-title">${menPlayer.title}</h1>
            <img src="${menPlayer.imageUrl}" />
            </div>
            <div>
            <p>${menPlayer.description}</p>
            <h3 class="bold">Country: ${menPlayer.country}</h3>
            </div>
        </div>
    `;
  return card;
}
