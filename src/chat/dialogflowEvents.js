import dialogflowReqHandler from "./eventHandlers/dialogflowReqHandler.js"

const dialogflowEvents = () => {
  const dfMessenger = window.dfMessenger

  // Handling Events
  dfMessenger.addEventListener("df-response-received", dialogflowReqHandler)
}
export default dialogflowEvents
