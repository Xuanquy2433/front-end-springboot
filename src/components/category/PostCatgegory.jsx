import React from 'react'
import Category from './Category'
import './category.css'
function PostCategory({ onRemove, onEdit, post }) {

    return (
        <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" >Id</th>
                        <th scope="col" >Name</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((item, index) => {
                        return <Category key={index} {...item} onRemove={onRemove} onEdit={onEdit} />
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}


export default PostCategory