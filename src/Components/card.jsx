import React from 'react'

const card = ({id, name, email, phone}) => {
  return (
    <>
      <h3>User {id}</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </>
  )
}

export default card
