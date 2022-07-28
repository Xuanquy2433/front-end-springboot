
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function CreatePost({ item, onSubmit, listBrand }) {
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const [valueState, setValueState] = useState("")
    const handleShowAddProduct = () => {
        setOpenAddProduct(true)
    }

    const handlCloseAddProduct = () => {
        setOpenAddProduct(false)
    }

    // 
    const [post, setPort] = useState(item || {
        images: '',
        name: '',
        price: '',
        category: ""
    })

    const onChangeText = (event) => {
        console.log('onChangeText', event)
        setPort({ ...post, [event.target.name]: event.target.value })
    }

    const onClickButton = (event) => {
        console.log('san pham', post);
        onSubmit(post)
        setOpenAddProduct(false)
    }

    const handler = (event) => {
        const value = event.target.value
        console.log(value);
        setPort({ ...post, category: (value) })
        setValueState(value)
        console.log(value);
    }

    return (
        <div>
            <section className="them-sp-fake">
                <div className="container-sp">
                    <div className="content-them-sp">
                        <h1>Danh sách sản phẩm</h1>
                        <button onClick={handleShowAddProduct} className="btn btnPrimary">Thêm sản phẩm</button>
                    </div>
                </div>
            </section>

            <section style={{ marginTop: '10px' }} className="them-sp-fake">
                <div className="container-sp">
                    <div style={{ display: '' }} className="content-them-sp">
                        <Link to='/categories'><h1>Danh muc sản phẩm</h1></Link>

                        {/* <Link to='/categories' className="btn btnPrimary">Danh muc sản phẩm</Link> */}
                    </div>
                </div>
            </section>
            {openAddProduct && (<div id="pop-up-them-sp">
                <div id="out-them-sp" className="them-sp">
                    <h1>Nhập thông tin sản phẩm</h1>
                    <div className="form-group">
                        <label htmlFor="img">Link hình ảnh</label>
                        <input onChange={onChangeText} placeholder="Nhập link hình ảnh" type="url" name="images" id="hinh-anh" />
                        <span className="form-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ten">Tên sản phẩm</label>
                        <input onChange={onChangeText} placeholder="Nhập tên sản phẩm" type="text" name="name" id="ten-sp" />
                        <span className="form-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Giá sản phẩm</label>
                        <input onChange={onChangeText} placeholder="Nhập giá sản phẩm" type="number" name="price" id="gia-sp" />
                        <span className="form-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hang">Loai sản phẩm</label>
                        {/* <input onChange={onChangeText} placeholder="Nhập loai sản phẩm" type="number" name="__v" id="hang" /> */}

                        <select onChange={handler} style={{ display: 'block' }} value={valueState}>
                            {
                                listBrand.map((item, index) => (
                                    <option value={item._id}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>

                        <span className="form-message" />
                    </div>
                    <div className="khoi-button">
                        <button onClick={onClickButton} className="btn btnPrimary btn-left" >Tạo sản phẩm mới</button>
                        <button onClick={handlCloseAddProduct} className="btn btnPrimary">Hủy</button>
                    </div>
                </div>
            </div>
            )}


        </div>
    )
}