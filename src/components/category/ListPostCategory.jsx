import React from 'react'

import './category.css'
import PostCategory from './PostCatgegory'


function ListPostCategory({ post, onRemove, onEdit }) {
    return (
        <div >
            <PostCategory post={post} onRemove={onRemove} onEdit={onEdit} />
        </div>
    )



}

export default ListPostCategory