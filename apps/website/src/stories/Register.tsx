import React, { useState } from 'react'

const Register = () => {
  const [show, setShow] = useState(false)

  const handleRegister = () => {
    setShow(true)
  }

  return (
    <div>
      <input data-testid="email" type="email" placeholder="email" />

      <input data-testid="password" type="password" placeholder="password" />

      <button onClick={handleRegister}>Register</button>

      {show && (
        <p>
          Everything is perfect.
        </p>
      )}
    </div>
  )
}

export default Register