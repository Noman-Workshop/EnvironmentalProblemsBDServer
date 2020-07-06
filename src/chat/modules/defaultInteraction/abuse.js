import light from "../../../data/light.json"

const abuse = () => {
  let hadith =
    light.hadithCollection[
      Math.floor(Math.random() * light.hadithCollection.length)
    ]
  hadith.type = "info"
  let surah =
    light.quranCollection[
      Math.floor(Math.random() * light.quranCollection.length)
    ]
  hadith.actionLink = `https://quran.com/${surah.chapterIndex}/${Math.floor(
    Math.random() * surah.verses
  )}`

  console.log(hadith)
  window.dfMessenger.renderCustomCard([hadith])
}

export default abuse
