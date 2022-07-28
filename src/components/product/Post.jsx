import React, { useState } from 'react'
import { formatMoney } from '../Child/Format';


export default function WareHouse({ images, name, price, _id, onEdit, onRemove, category }) {
    const onHandleEdit = (item) => {
        onEdit(item)
    }
    console.log(category);
    return (
        <div >
            <div className="xoa">
                <i onClick={() => onRemove(_id)} className="fas fa-trash-alt"> </i> </div>
            <div className="hinhanh"><img src={images} /></div>
            <div className="id"> id: {_id.substring(0, 4)}... </div>
            <div className="ten">{name}</div>
            <div className="sao">
                <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
            </div>
            <div className="gia">price: {formatMoney(price)}</div>
            <div className="gia">loai sp: {category && category.name} </div>
            {/* <div className="hang">loai: {} </div> */}
            <button onClick={() => onHandleEdit({
                images, name, price, _id
            })} className="btn btnPrimary" >Sửa sản phẩm</button>

        </div>

    )
}