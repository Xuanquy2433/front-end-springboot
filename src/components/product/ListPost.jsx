import React from 'react'
import Post from './Post'

export default function ListProduct({ post, onRemove, onEdit }) {
  return (
    <div>
      {post && post.length && post.map((item, index) => {
        return (
          <div className='sanpham'>
            <Post key={index} onRemove={onRemove} onEdit={onEdit} {...item} />
          </div>

        )
      })}
    </div>
  )
}
