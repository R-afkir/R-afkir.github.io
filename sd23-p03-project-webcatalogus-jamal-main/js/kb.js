//////////kick boxing
const cardContainerKB = document.querySelector(".kick-boxing-card-container");
 
fetch("http://localhost:3000/ma-kickboxing")
  .then((data) => data.json())
  .then((myJsonData) => showCards(myJsonData));
 
function showCards(kbPlayers) {
  console.log(kbPlayers);
  let htmlCode4 = "";
  for (let i = 0; i < kbPlayers.length; i++) {
    const kbPlayer = kbPlayers[i];
    htmlCode4 += createCard(kbPlayer);
  }
  cardContainerKB.innerHTML = htmlCode4;
}
 
function createCard(kbPlayer) {
  const card = `
        <div class="card">
        <div>
            <h1 class="card-title">${kbPlayer.title}</h1>
            <img src="${kbPlayer.imageUrl}" alt="picture of  ${kbPlayer.title}" />
            </div>
            <div>
            <p>${kbPlayer.description}</p>
            <h3 class= "bold" >age : ${kbPlayer.age} yrs</h3>
            <h3 class="bold">Country: ${kbPlayer.country}</h3>
            </div>
        </div>
    `;
  return card;
}