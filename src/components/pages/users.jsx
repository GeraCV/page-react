import React from 'react'
import CardUser from '../organisms/cardUser'

class Users extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const answer = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await answer.json()

    this.setState({
      users: response
    })
  }


  render() {
    const { users } = this.state
    return (
      <>
        <div className="center">
          <h1> Usuarios </h1>
          <div className="ed-grid m-grid-3">
            {
              users.map(user => (
                <CardUser
                  id={user.id}
                  name={user.name}
                  username={user.username}
                  email={user.email}
                />
              ))
            }
          </div>
        </div>
      </>
    )
  }

}


export default Users 