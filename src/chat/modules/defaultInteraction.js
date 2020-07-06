import abuse from "./defaultInteraction/abuse.js"

const defaultInteraction = ({ intentName }) => {
  switch (intentName) {
    case "abuse":
      abuse()
      break
    default:
      break
  }
}
export default defaultInteraction
