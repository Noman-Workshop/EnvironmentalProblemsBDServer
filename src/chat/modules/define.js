import { infoList } from "../dialogFlowResHelper.js"

// Importing Definitions
import definitions from "../../data/definitions.json"

const define = ({ params }) => {
  let payload = []

  payload = infoList(
    params.terminology.map(terminology => ({
      title: terminology,
      data: definitions.terminology[terminology],
    }))
  )

  payload = payload.concat(
    infoList(
      params.event.map(event => ({
        title: event,
        data: definitions.events[event],
      }))
    )
  )

  console.log(payload)

  window.dfMessenger.renderCustomCard(payload)
}

export default define
