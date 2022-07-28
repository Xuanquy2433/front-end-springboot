import React, { useEffect, useState } from 'react'
import './category.css'

function EditCategoory({ onSubmit, item ,openShowEdit,setOpenShowEdit}) {
   

    const clickCloseEdit = () => {
        setOpenShowEdit(false)
    }
    const { name } = item;

    const [post, setPost] = useState({
        name: item.name || ''
    })

    useEffect(() => {
        setPost(item)
    }, [item])

    const onChangeText = (event) => {
        console.log('onChangeText', event)
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const onClickButton = (event) => {
        event.preventDefault();
        onSubmit({ ...item, ...post, id: item.id })
        setOpenShowEdit(false)
    }
    return (
        <div>
            {
                openShowEdit && (
                    <div id="pop-up-sua-sp">
                        <div style={{width: "35%",height: "50vh"}} className="sua-sp">
                            <h1>Edit Category</h1>

                            <label htmlFor="ten">Name Category</label>
                            <input onChange={onChangeText} defaultValue={name} type="text" name="name" id="sua-ten-sp" />
                            <div style={{marginTop: "70px"}} className="khoi-button">
                                <button onClick={onClickButton} className="btn btnPrimary btn-left">Save</button>
                                <button onClick={clickCloseEdit} className="btn btnPrimary">Cancel</button>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default EditCategoory
