// Importing Modules

import act95Rules97 from "../modules/act95Rules97.js"
import defaultInteraction from "../modules/defaultInteraction.js"
import define from "../modules/define.js"

const dialogflowReqHandler = ({ detail: { response: request } }) => {
  console.log("Request Received")
  const query = {
    intentName: request.queryResult.intent.displayName.split("@")[0],
    intentModule: request.queryResult.intent.displayName.split("@")[1],
    params: request.queryResult.parameters,
  }

  // console.table(query)

  // Dictionary for Modules
  const chatModules = {
    defaultInteraction: defaultInteraction,
    act95Rules97: act95Rules97,
    define: define,
  }

  // Passing Query to respective Modules
  chatModules[query.intentModule](query)
}

export default dialogflowReqHandler
