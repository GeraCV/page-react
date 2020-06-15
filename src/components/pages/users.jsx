import React from 'react'
import UsersGrid from '../organisms/usersGrid'

class Users extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }


  render() {
    const { users } = this.state
    return (
      <UsersGrid users={users} />
    )
  }

  async componentDidMount() {
    const answer = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await answer.json()

    this.setState({
      users: response
    })
  }

}


export default Users 