/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo, useCallback } from 'react'
import List from './List'

/*  Memo
Memoriza un componente
Vuelve a memorizar al cambiar las props
evita Re-renders */

/* useMemo(() => function, input)
 Memoriza un valor calculado
 Para procesos pesados
 Almacena el valor que retorna una funcion para crear propiedades computadas */

/* UseCallback
Almacena el valor de la funcion
Usarlo siempre que se pase una funcion por props a un componente memorizado
*/

const initialUsers =
[
  { id: 1, name: 'Luis' },
  { id: 2, name: 'Maria' }
]

function App () {
  const [users, setUsers] = useState(initialUsers)
  const [text, setText] = useState('')
  const [search, setSeach] = useState('')

  const handleAdd = () => {
    const newUser = { id: Date.now(), name: text }
    setUsers([...users, newUser])
  }

  // const handleDelete = useCallback(() => , [])

  const handleDetele = useCallback((userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }, [users])

  const handleSearch = () => {
    console.log('Seach')
    setSeach(text)
  }

  const filterUsers = useMemo(() =>
    users.filter(user => {
      // console.log('filter process')
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  , [search, users])

  const printUsers = useCallback(() => {
    console.log('changes users', users)
  }, [users])

  useEffect(() => {
    // console.log('App Render')
  })

  useEffect(() => {
    printUsers()
  }, [users])
  return (
    <div>
      <input
        value={text}
        type='text'
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleSearch}>
        Search
      </button>
      <button onClick={handleAdd}>
        Add
      </button>
      {<List users={filterUsers} handleDetele={handleDetele} />}
    </div>
  )
}

export default App
