import React from "react";


//Import link to routing to other components
import { Link } from "react-router-dom";

//bootstrap

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    render() {
        return (
            <div className="maincontainer">
                <h1 className="mr-5 ml-5 mt-5">
                    Reactjs simple crud tutorial for beginners
                </h1>
                <div className="container mb-5 mt-5 text-left">
                    <button className="bg-primary mb-3">
                        <Link style={{color: "white"}} className="nav-link" to={"/adduser"}>
                            <span style={{marginRight: "7px"}}  >Add</span>
                            <i class="fas fa-user"></i>
                        </Link>
                    </button>
                    <table class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((result) => {
                                return (
                                    <tr>
                                        <td>{result.id}</td>
                                        <td>{result.email}</td>
                                        <td>{result.username}</td>
                                        <td>
                                            <button className="bg-info">
                                                {" "}
                                                <i class="fas fa-eye"></i>{" "}
                                            </button>
                                            <button className="bg-warning">
                                                {" "}
                                                <i class="fas fa-edit"></i>{" "}
                                            </button>
                                            <button className="bg-danger">
                                                {" "}
                                                <i class="fas fa-trash"></i>{" "}
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Dashboard;
