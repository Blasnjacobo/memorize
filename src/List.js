/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { memo, useEffect } from 'react'
import Item from './Item'

// MEMO
/* Usamos memo para memorizar un componente en base a sus properties, es decir que cuando las properties de un componente sean iguales este no debera renderizarse, si cambiamos algo en el component App pero no cambiaria nada en los usuarios (componente Item y List) este no tendria que renderizarse */

const List = memo(({ users, handleDetele }) => {
  useEffect(() => {
    // console.log('List Render')
  })

  return (
    <div>
      {users.map(user => (
        <Item
          key={user.id}
          user={user}
          handleDelete={handleDetele}
        />
      ))}
    </div>
  )
})

export default List
