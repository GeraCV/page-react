import React from 'react'

const whitLogin = (WrappedComponent) => {
  return class WhitLogin extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        loggued: false
      }

      this.IamLoguedd = this.IamLoguedd.bind(this)
    }

    IamLoguedd() {
      setTimeout(() => {
        const login = Math.round(Math.random())
        this.setState({ loggued: login === 1 })
      });
    }

    componentDidMount() {
      this.IamLoguedd()
    }


    render() {
      return <WrappedComponent {...this.props}
        logeded={this.setState.loggued}
      />
    }

  }
}

export default whitLogin