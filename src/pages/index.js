import React from "react"
import Helmet from "react-helmet"
import Dialogflow from "../components/Dialogflow.js"

export default function Home() {
  return (
    <div>
      <h1>Project Page for Environmental Problems in Bangladesh</h1>
      <Helmet>
        <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      </Helmet>
      <Dialogflow />
    </div>
  )
}
