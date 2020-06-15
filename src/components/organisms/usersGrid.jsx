import React from 'react'
import CardUser from './cardUser'
import withLoader from '../HOC/withLoader'

const UsersGrid = ({ users }) => {
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

export default withLoader("users", UsersGrid)