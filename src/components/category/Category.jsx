import React from 'react';



function Category(props) {
    const { id, name, onEdit, onRemove, post } = props


    const onHandleEdit = (item) => {
        console.log("iemmmm ", item);
        onEdit(item)
    }
    return (
        <React.Fragment>
            <tr >

                <td >{id}</td>
                <td>{name}</td>
                <td>
                    <button className="btn btn-outline-success" style={{ marginRight: "10px" }} onClick={() => onHandleEdit({
                        name, id
                    })}>Update</button>
                    <button class="btn btn-danger" style={{ marginLeft: "10px", border: "3px solid red" }} onClick={() => onRemove(id)}>Delete</button>
                </td>

            </tr>
        </React.Fragment>
    );
}

export default Category;