import React, { useEffect, useState } from 'react'


import { toast } from 'react-toastify';
import axios from 'axios';
import { deleteAPI, getAPI } from '../utils/api';
import { API_CATEGORIES } from '../utils/const';
import CreateCategory from '../category/CreateCategory';
import EditCategoory from '../category/EditCategory';
import ListPostCategory from '../category/ListPostCategory';



function CategoryScreen() {
    const [data, setData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(undefined);
    const [openShowEdit, setOpenShowEdit] = useState(true);

    useEffect(() => {
        fetchAPI();
    }, [])

    const fetchAPI = async () => {
        const result = await getAPI(API_CATEGORIES);
        if (result) {
            setData(result)
        }
        console.log('categories:', result);
    }

    const onSubmit = async (data) => {
        if (data.name === '') {
            toast.error("Name required field", { autoClose: 1500 });
        } else {
            const response = await axios.post(API_CATEGORIES, data)
            if (response && response.status === 200) {
                toast.success("Thêm thành công", { autoClose: 1500 });
                fetchAPI();
            }
        }
    }

    const onEdit = async (post) => {
        setSelectedPost(post)
        console.log('post cccc', post)
        setOpenShowEdit(true)

        // console.log('select', selectedPost);
    }

    const onSubmitEdit = async (data) => {
        console.log("data id ", data);
        if (data.name === '') {
            toast.error("Name required field", { autoClose: 1500 });
        } else {
            const response = await axios.post(API_CATEGORIES, data)
            if (response && response.status === 200) {
                toast.success("Sửa thành công", { autoClose: 1500 });
                fetchAPI();
            }
        }
    }

    const onRemove = async (id) => {
        console.log("id", id);
        const response = await deleteAPI(`${API_CATEGORIES}/${id}`);
        if (response && response.status === 200) {
            toast.success("Xóa thành công", { autoClose: 1500 });
            fetchAPI();
        }
    }
    return (
        <div>
            <CreateCategory onSubmit={onSubmit} />
            {selectedPost && <EditCategoory item={selectedPost} onSubmit={onSubmitEdit} setOpenShowEdit={setOpenShowEdit} openShowEdit={openShowEdit} />}
            <ListPostCategory onRemove={onRemove} onEdit={onEdit} post={data} />

        </div>
    )
}

export default CategoryScreen