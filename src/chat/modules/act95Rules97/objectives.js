import objectivesData from "../../../data/objectives.json"
import { titleList } from "../../dialogFlowResHelper.js"

const objectives = () => {
  window.dfMessenger.renderCustomText(
    "The Bangladesh Environment Conservation Act 1995 had three major objectives."
  )

  let payload = titleList(objectivesData)
  // console.log(payload)
  window.dfMessenger.renderCustomCard(payload)
}

export default objectives
