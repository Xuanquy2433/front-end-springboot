import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './category.css'

function CreateCategory({ item, onSubmit }) {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const handleShowAddProduct = () => {
    setOpenAddProduct(true)
  }

  const handlCloseAddProduct = () => {
    setOpenAddProduct(false)
  }

  // 
  const [post, setPort] = useState(item || {
    name: ''
  })

  const onChangeText = (event) => {
    console.log('onChangeText', event)
    setPort({ ...post, [event.target.name]: event.target.value })
  }

  const onClickButton = (event) => {
    onSubmit(post)
    setOpenAddProduct(false)
  }

  return (
    <div>
      <section className="section-main bg padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-md-3">
              <nav className="card">
                <ul className="menu-category">

                  <li>
                    <Link to={'/user'}
                    >
                      User
                    </Link>
                  </li>
                  <li>
                    <Link to={'/category'}
                    >
                      Category
                    </Link>
                  </li>

                </ul>
              </nav>
            </aside>
            <div className="col-md-9">
              <article>
                <div >
                  <div style={{ display: "flex", justifyContent: "right" }}>
                    <h1 style={{marginRight: "330px",marginTop:"20px"}}>Categories</h1>
                    <button style={{ width: "20%",height: "6vh",marginTop:"20px" }} onClick={handleShowAddProduct} className="btn btn-outline-info">Add</button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="them-sp-fake">
        <div className="container-sp">
          <div className="content-them-sp">
            <h1>Categories</h1>
            <button style={{ width: "10%" }} onClick={handleShowAddProduct} className="btn btn-outline-info">Add</button>
          </div>
        </div>
      </section> */}



      {openAddProduct && (<div id="pop-up-them-sp">
        <div id="out-them-sp" className="them-sp">
          <h1>Create Category</h1>

          <div className="form-group">
            <label htmlFor="ten">Name Category</label>
            <input onChange={onChangeText} placeholder="Nhập tên sản phẩm" type="text" name="name" id="ten-sp" />
            <span className="form-message" />
          </div>

          <div className="khoi-button">
            <button onClick={onClickButton} className="btn btnPrimary btn-left" >Save</button>
            <button onClick={handlCloseAddProduct} className="btn btnPrimary">Cancel</button>
          </div>
        </div>
      </div>
      )}

    </div>
  )
}

export default CreateCategory