import { useEffect, memo } from 'react'

const Item = memo(({ user, handleDelete }) => {
  // Memo
  /* Ahora el componente item cuando es renderizado memoriza su valor, mientras los usuarios que no hayan cambiado no tendran que renderizarse, en este caso solo se va a renderizar un solo item el cual sera el nuevo user, y los demas user se mantendran sin renderizar */
  useEffect(() => {
    // console.log('Item Render ' + user.name)
  })

  return (
    <li>
      {user.name}
      <button onClick={() => handleDelete(user.id)}>
        Delete
      </button>
    </li>
  )
})

export default Item
