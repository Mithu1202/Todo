import React, { useState } from 'react' 

const TodoChild = ({ text, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false) 
  const [editedText, setEditedText] = useState(text) 

  const handleEdit = () => {
    if (isEditing) {
      onEdit(editedText) 
    }
    setIsEditing(!isEditing) 
  } 

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}/>) : (text)}
      </td>
      <td>
        <button className="edit"onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="delete" onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  ) 
} 

export default TodoChild 
