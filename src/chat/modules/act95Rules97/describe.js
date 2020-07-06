import rules97 from "../../../data/rules97.json"
import { numericWords } from "../../../util/miscellaneous.js"

const describe = ({ content }) => {
  content = content.map(item => {
    item = item.toLowerCase()
    let _content = {
      name: item.split(" ")[0],
      no: item.split(" ")[1],
    }
    let _ = parseInt(_content.no)
    if (_) {
      _content.no = _
    } else {
      _content.no = numericWords[_content.no]
    }

    return _content
  })

  let payload = []
  for (let ci of content) {
    console.log(ci)
    console.log(rules97[ci.name][ci.no - 1])
    let displayItems = rules97[ci.name][ci.no - 1]
    for (let displayItem in displayItems) {
      let _ = displayItems[displayItem]
      console.log(_)
      if (Array.isArray(_)) {
        for (let i of _) {
          i.type = displayItem
          payload.push(i)
        }
      } else {
        _.type = displayItem
        payload.push(_)
      }
    }
    payload.push({
      type: "divider",
    })
  }

  console.log(payload)
  window.dfMessenger.renderCustomCard(payload)
}

export default describe
