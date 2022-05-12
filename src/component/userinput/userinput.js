import React from 'react'

 function UserInput({changed, currentName}) {
  return (
    <input className='input' type="text" onChange={changed} value={currentName}/>
  )
}
export default UserInput;
