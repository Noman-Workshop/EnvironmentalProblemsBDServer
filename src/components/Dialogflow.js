import React, { Component } from "react"
import dialogflowEvents from "../chat/dialogflowEvents.js"

class Dialogflow extends Component {
  constructor(props) {
    super(props)
    this.df = React.createRef()
  }

  componentDidMount() {
    window.dfMessenger = this.df.current
    dialogflowEvents()
  }

  render() {
    return (
      <df-messenger
        ref={this.df}
        chat-title="Environmental Problems"
        agent-id="e13768f5-f1f2-4893-a626-1ba7f174d565"
        language-code="en"
      ></df-messenger>
    )
  }
}

export default Dialogflow
