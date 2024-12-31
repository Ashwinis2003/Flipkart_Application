import React, { useContext } from 'react'
import { productsForTest } from './App'

function EachTodo({each,handleCheckbox,setEnteredText,setUpdateTodo,
    handleSave,handleEdit,handleDelete
}) {

    const {test2,test1} = useContext(productsForTest)

    return (
        <div className='my-3'>
            <input type='checkbox'
                checked={each.completed}
                placeholder='enter the todo title'
                onClick={() => handleCheckbox(each.id)}
                onChange={(e) => setEnteredText(e.target.value)}
            />

            {
                each.isEditing ? (

                    <input type='text' value={updateTodo} onChange={(e) => setUpdateTodo(e.target.value)} />

                ) : (
                    <span>{each.text}</span>
                )
            }

            {
                each.isEditing ? (
                    <button onClick={() => handleSave(each.id)}>Save</button>
                ) : (
                    <button onClick={() => handleEdit(each.id)}>Edit</button>
                )
            }

            <button onClick={() => handleDelete(each.id)}>delete</button>
            <p>{test2}</p>
            <p>{test1}</p>

        </div>
    )
}

export default EachTodo
