console.log("chatbot");

// variables
const text = document.querySelector(".form-control")
// console.log(text);
const enterBtn = document.querySelector(".enter-btn")
// console.log(enterBtn);
const inputTxt = text.value;
const xander = document.querySelector(".chats")


//functions
function addChatMessage(inputTxt, answerText) {
  const userHtml = `
         <div class="chat-box mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
   

      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 text-center">
          <h2>Your Message:</h2>
        </div>
        <div class="col-md-4"></div>
      </div>

      <div class="chat-box-text-container">
        <div class="row">
          <div class="col-md-12">
            <div class="chatbox-text text-center">
              
            <p>${inputTxt}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      `;
  const answerHtml = `<div class="chat-bot mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
   
    
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4 text-center">
          <h2>bot:</h2>
        </div>
        <div class="col-md-4"></div>
      </div>
    
      <div class="chat-bot-text-container">
        <div class="row">
          <div class="col-md-12">
            <div class="chatbot-text text-center">
              <p>${answerText}</p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    </div>`;

  return userHtml + answerHtml;
}

function generateAnswer(inputTxt) {
  let answer;

  // Check user input and provide corresponding answers
  if (
    inputTxt.toLowerCase().includes("hello") ||
    inputTxt.toLowerCase().includes("hi")
  ) {
    answer = "Hello! How can I assist you today?";
  } else if (inputTxt.toLowerCase().includes("how are you")) {
    answer = "I'm just a bot, but thanks for asking!";
  } else if (inputTxt.toLowerCase().includes("help")) {
    answer = "Sure, I'll be happy to help. What do you need assistance with?";
  } else if (inputTxt.toLowerCase().includes("dashboard")) {
    answer = `Which dashboard are you lookin for? I can navigate you to these three: <br> <a href="#" class="text-decoration-none text-white fw-bold px-2 py-1 bg-primary rounded mt-1">Stocks</a> <a href="#" class="text-decoration-none text-white fw-bold px-2 py-1 bg-primary rounded mx-1 mt-1">Wessel</a> <a href="#" class="text-decoration-none text-white fw-bold px-2 py-1 bg-primary rounded mt-1">Leo</a>`;
  } else if (inputTxt.toLowerCase().includes("thanks") || inputTxt.toLowerCase().includes("thank you")) {
    answer = `Always here if you need anything.<a href="#" class="text-decoration-none text-white fw-bold px-2 py-1 bg-primary rounded ms-1">Go home</a>`;
  } else {
    answer = "I'm sorry, I didn't understand that. Can you please rephrase?";
  }

  return answer;
}


//eventlisteners

enterBtn.addEventListener("click", function () {
  const inputTxt = text.value;
  // You would replace this with the actual answer from the chatbot
  const answerText = generateAnswer(inputTxt);

  const html = addChatMessage(inputTxt, answerText);

  // Append the user and answer messages to the chat messages container
  xander.insertAdjacentHTML("beforeend", html);

  // Clear the input field
  text.value = "";
  toggleButtonState();
});