import React from 'react'

const SaveButton = ({typeButton , handleClick}) => {
  return (
    <div>
        <button type={typeButton} onClick={handleClick} className='border rounded-lg px-4 py-2 bg-blue-400 hover:bg-green-400 text-xl'>
            Save
        </button>
    </div>
  )
}

export default SaveButton