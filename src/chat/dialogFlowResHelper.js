import { capitalCase, sentenceCase } from "change-case"

const insertDivider = list => {
  return list.map(item => [item, { type: "divider" }]).flat(2)
}

const titleList = messages => {
  return insertDivider(
    messages.map(message => [
      {
        type: "list",
        title: message,
      },
    ])
  )
}

const infoList = infoData => {
  return insertDivider(
    infoData.map(info => ({
      type: "info",
      title: capitalCase(info.title),
      subtitle: sentenceCase(info.data),
      actionLink: `https://en.wikipedia.org/wiki/${info.title}`,
    }))
  )
}

const accordionList = accordionData => {
  return insertDivider(
    accordionData.map(accordion => ({
      type: "accordion",
      title: accordion.title,
      subtitle: accordion.subtitle,
      text: accordion.text,
    }))
  )
}

export { titleList, infoList, accordionList }
