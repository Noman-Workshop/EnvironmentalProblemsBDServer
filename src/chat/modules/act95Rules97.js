// Importing Intents
import objectives from "./act95Rules97/objectives.js"
import describe from "./act95Rules97/describe.js"

const act95Rules97 = ({ intentName, params }) => {
  switch (intentName) {
    case "objectives":
      objectives()
      break
    case "describe":
      describe(params)
      break
    default:
      break
  }
}

export default act95Rules97
