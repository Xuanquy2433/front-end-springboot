// import React, { useEffect, useState } from 'react'
// import { API } from './../utils/const';
// import ListProductAdmin from './../Child/ListProductAdmin';
// import { deleteAPI, putAPI } from '../utils/api';
// import { getAPI } from './../utils/api';

// // delete
// function ProductScreen() {
//     const [data, setData] = useState([])
//     // const { value, setValue } = useContext(ThemeContext)
//     useEffect(() => {
//       fetchAPI()
//     }, [])
  
//     const fetchAPI = async () => {
//       const result = await getAPI(API)
//       // check dữ dữ liệu trước khi lấy
//       if (result) {
//         setData(result)
//       }
//     }
  
//     const onSubmitEdit = async (data) => {
//       const response = await putAPI(`${API}/${data.id}`, data)
//       if (response && response.status === 200) {
//         alert("cập nhật thành công")
//         // setSelectedPost(undefined)
//         fetchAPI()
//       }
//     }
  
//     const onRemove = async (id) => {
//       const response = await deleteAPI(`${API}/${id}`)
//       if (response && response.status === 200) {
//         alert("xoá thành công")
//         // load lại list
//         fetchAPI()
//       }
//     }
//   return (
//     <ListProductAdmin data={data}/>
//   )
// }

// export default ProductScreen

import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import { API_CATEGORIES, API_PRODUCT_LOCAL } from '../utils/const';
import { getAPI, postAPI, deleteAPI, putAPI } from '../utils/api';
import { toast } from 'react-toastify';
import CreatePost from '../product/CreateProduct';
import ListProduct from '../product/ListPost';
export default function PostScreen() {
    const [data, setData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(undefined);
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        fetchAPI();
        console.log("hi");
        getListBrand();
    }, [])


    const fetchAPI = async () => {
        const result = await getAPI(API_PRODUCT_LOCAL);
        if (result) {
            setData(result)
        }
        console.log('result', result);
    }

    const getListBrand = async () => {
        const brands = await axios.get(API_CATEGORIES)
        console.log('brand', brands);
        setBrand(brands.data)
    }

    console.log('list danh muc', brand);
    const onSubmit = async (data) => {
        const response = await axios.post(API_PRODUCT_LOCAL, data)
        if (response && response.status === 200) {
            toast.success('Them thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
            getListBrand();
        }
    }

    const onEdit = async (post) => {
        setSelectedPost(post)
        console.log('post', post)
        // console.log('select', selectedPost);
    }

    const onSubmitEdit = async (data) => {
        console.log(data);
        const response = await axios.put(API_PRODUCT_LOCAL + `/${data._id}`, data)
        if (response && response.status === 200) {
            toast.success('Sua thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
        }
    }

    const onRemove = async (id) => {
        const response = await axios.delete(API_PRODUCT_LOCAL + `/${id}`)
        if (response && response.status === 200) {
            toast.success('Xoa thanh cong', {
                position: 'bottom-left',
                autoClose: 3000
            })
            fetchAPI();
        }
    }

    return (
        <div>
            <CreatePost listBrand={brand} onSubmit={onSubmit} />
            {selectedPost && <CreatePost item={selectedPost} listBrand={brand} onSubmit={onSubmitEdit} />}
            <ListProduct brand={brand} onRemove={onRemove} onEdit={onEdit} post={data} />

        </div>
    )

}


