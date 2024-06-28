  ///boxing
  const cardContainerBoxing = document.querySelector(".shoe-nk-card-container");
 
fetch("http://localhost:3000/shoe-nk")
  .then((data) => data.json())
  .then((myJsonData) => showCards(myJsonData));
 
function showCards(shirtsDsl) {
  console.log(shirtsDsl);
 let htmlCode7 = "";
  for (let i = 0; i < shirtsDsl.length; i++) {
    const shirtDsl = shirtsDsl[i];
    htmlCode7 += createCard(shirtDsl);
  }
  cardContainerBoxing.innerHTML = htmlCode7;
}
 
function createCard(shirtDsl) {
  const card = `
        <div class="card">
        <div>
            <h1 class="card-title">${shirtDsl.title}</h1>
            <img src="${shirtDsl.imageUrl}" />
            </div>
            <div>
            <p>${shirtDsl.description}</p>
            <h3 class= "bold" >color : ${shirtDsl.colour} </h3>
            <h3 class="bold">price: ${shirtDsl.price}</h3>
            <h3 class="bold">price: ${shirtDsl.sizes}</h3>
            </div>
        </div>
    `;
  return card;
}