import React from "react"

const withLoader = (Params, Cmpnent) => {
  return class WhitLoader extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        this.props[Params].length === 0
          ? <div className="center "> <h1> Cargando ... </h1></div>
          : <Cmpnent {...this.props} />
      )
    }
  }
}

export default withLoader