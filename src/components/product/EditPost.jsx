import './WareHouse.css'
import React, { useState, useEffect } from 'react'
export default function CreatePost({ onSubmit, item, listBrand }) {
    const [openShowEdit, setOpenShowEdit] = useState(true);
    const [valueState, setValueState] = useState("")

    const clickCloseEdit = () => {
        setOpenShowEdit(false)
    }
    // 
    const { name, images, price ,category} = item;

    const [post, setPost] = useState({
        name: item.name || '',
        price: item.price || '',
        images: item.images || '',
        category: item.category|| '62214cefdc0238f563b8cdee'
    })

    useEffect(() => {
        setPost(item)
    }, [item])

    const onChangeText = (event) => {
        console.log('onChangeText', event)
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const onClickButton = (event) => {
        onSubmit({ ...item, ...post, id: item._id })
        setOpenShowEdit(false)
    }

    const handler = (event) => {

        const value = event.target.value
        console.log(value);
        setPost({ ...post, category: (value) })
        setValueState(value)
        console.log(value);
    }

    return (
        <div>
            {
                openShowEdit && (
                    <div id="pop-up-sua-sp">
                        <div className="sua-sp">
                            <h1>Chỉnh sửa thông tin sản phẩm</h1>
                            <label htmlFor="img">Link hình ảnh</label>
                            <input onChange={onChangeText} defaultValue={images} type="text" name="images" id="sua-hinh-anh" />
                            <label htmlFor="ten">Tên sản phẩm</label>
                            <input onChange={onChangeText} defaultValue={name} type="text" name="name" id="sua-ten-sp" />
                            <label htmlFor="gia">Giá sản phẩm</label>
                            <input onChange={onChangeText} defaultValue={price} type="number" name="price" id="sua-gia-sp" />
                            <label htmlFor="hang">Loại sản phẩm</label>
                            <select onChange={handler} style={{ display: 'block' }} value={valueState}>
                                {
                                    listBrand.map((item, index) => (
                                        <option value={item._id}>
                                            {item.name}
                                        </option>
                                    ))
                                }
                            </select>
                            <div className="khoi-button">
                                <button onClick={onClickButton} className="btn btnPrimary btn-left">Lưu</button>
                                <button onClick={clickCloseEdit} className="btn btnPrimary">Hủy</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

