import React, { useEffect, useState } from 'react'
import { getAPI } from './utils/api';
import { API_COUPON } from './utils/const';


function Coupon() {

    const [listCoupon, setListCoupon] = useState([]);

    useEffect(() => {
        fetchAPICoupon();
    });


    const fetchAPICoupon = async () => {
        const result = await getAPI(API_COUPON);
        console.log(result);
        if (result) {
            setListCoupon(result);
        }
    };

    return (
        <React.Fragment>
            <h2>Coupon</h2>
            <table style={{ width: "100%", margin: "auto", marginBottom: "50px" }}class="table table-hover">
                <thead>
                    <tr class="table-dark">
                        <th scope="col">ID</th>
                        <th scope="col">Code</th>
                        <th scope="col">Percent</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listCoupon && listCoupon.map((item, index) => (
                            <tr key={index} class="table-light" style={{ color: "black" }}>
                                <td>{item.id}</td>
                                <td>{item.code}</td>
                                <td>{item.percent}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </React.Fragment>
    )
}



export default Coupon
