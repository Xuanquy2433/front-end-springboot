import React, { useEffect, useState } from "react";
import User from "./User";
import PopupCreateUser from "./PopupCreateUser";
import { toast } from "react-toastify";
import { API_USER_ADMIN, API_USER_REGISTER, API_USER_USERS, API_USER_USERS_DELETE } from "./../utils/const";
import { deleteAPI, getAPI, postAPI, putAPI } from "./../utils/api";
import axios from "axios";
import PopupUpdateUser from "./PopupUpdateUser";
import { Link } from "react-router-dom";

function ListUser({ data }) {
  const [user, setUser] = useState([]);
  const [selectedPost, setSelectedPost] = useState(undefined);
  const [openShowEdit, setOpenShowEdit] = useState(true);

  const [isFetchData, setIsFetchData] = useState(false);
  const [show, setShow] = useState(1);



  useEffect(() => {
    fetchAPI();
  }, [isFetchData]);

  const fetchAPI = async () => {
    const result = await getAPI(API_USER_USERS);
    console.log("UseEffecttttttttttttttttt");
    // check dữ dữ liệu trước khi lấy
    console.log(result);
    if (result) {
      setUser(result);
    }
  };

  const onSubmit = async (user) => {
    console.log(user);

    if (user.username === '' && user.password === '' && user.email === '' && user.name === '') {
      toast.error("Error required field", { autoClose: 1500 });
    }
    else if (user.username === '') {
      toast.error("Username required field", { autoClose: 1500 });
    }
    else if (user.password === '') {
      toast.error("Password required field", { autoClose: 1500 });
    }
    else if (user.password.length < 3) {
      toast.error("Password required > 3", { autoClose: 1500 });
    }
    else if (user.email === '') {
      toast.error("Email required field", { autoClose: 1500 });
    }
    else if (user.name === '') {
      toast.error("Name required field", { autoClose: 1500 });
    }
    else {
      try {
        const response = await axios.post(API_USER_ADMIN, user);
        if (response && response.status === 200) {
          toast.success("Thêm thành công", { autoClose: 1500 });
          fetchAPI();
        }
      } catch (error) {
        toast.error("Email already exists");

      }
      fetchAPI();
    }
  };

  const onSubmitEdit = async (user) => {
    console.log("id", user);
    try {
      const response = await postAPI(API_USER_ADMIN, user);
      if (response && response.status === 200) {
        toast.success("Cập nhập thành công", { autoClose: 1500 });
        setSelectedPost(undefined);
      }
    } catch (error) {
      toast.error("Email already exists");
    }
    fetchAPI();
  };

  const onEdit = async (user) => {
    setSelectedPost(user);
    setOpenShowEdit(true)
  };

  const onRemove = async (id) => {
    const response = await deleteAPI(`${API_USER_USERS_DELETE}/${id}`);
    if (response && response.status === 200) {
      toast.success("Xóa thành công", { autoClose: 1500 });
      fetchAPI()
    }
    // setIsFetchData(!isFetchData);
    fetchAPI()
  };

  return (
    <>

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
            <article>

              <div style={{ display: "flex", justifyContent: "right" }}>
                <h1 style={{ marginLeft: "270px", marginTop: "20px" }}>User</h1>
                <button
                  style={{ width: "150px", height: "6vh", margin: "20px 0px 20px 380px" }}
                  class="btn btn-outline-success"
                  data-toggle="modal"
                  href="#myModalPopup"
                >
                  Create
                </button>

              </div>
            </article>
          </div>
        </div>
      </section>

      {/* <button
        style={{ width: "120px", height: "39px", margin: "20px 0px 20px 0px" }}
        class="btn btn-outline-success"
        data-toggle="modal"
        href="#myModalPopup"
      >
        Create
      </button> */}

      {selectedPost && (
        <PopupUpdateUser setOpenShowEdit={setOpenShowEdit} openShowEdit={openShowEdit} item={selectedPost} onSubmit={onSubmitEdit} />
      )}

      <div style={{ textAlign: "left" }} id="myModalPopup" class="modal fade">
        <PopupCreateUser onSubmit={onSubmit} />
      </div>
      <table class="table"
      // style={{ width: "90%", margin: "auto" }}
      // class="table table-borderless table-shopping-cart"
      >
        <thead class="thead-dark">
          <tr class="small text-uppercase">
            <th scope="col" width="120">
              Username
            </th>

            <th scope="col">Password</th>
            <th scope="col" width="120">
              Email
            </th>
            <th scope="col" width="120">
              Role
            </th>
            <th scope="col" width="120">
              Name
            </th>

            <th scope="col" class="text-right" width="200">
              {" "}
            </th>
          </tr>
        </thead>
        <tbody>
          <React.Fragment>
            {user &&
              user.map((item, index) => {
                return <User key={index} {...item} onRemove={onRemove} onEdit={onEdit} />;
              })}
          </React.Fragment>
        </tbody>
      </table>
    </>
  );
}

export default ListUser;
