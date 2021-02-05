import React, {useState} from "react";
import {Col} from 'reactstrap'
import './UserInSearch.css';


function UserInSearch ({name, photoUrl}){

    return (
        <Col sm={'6'} md={'4'} className='col-search'>
            <div className='search-item'>
                    <img src={`/img${photoUrl}`} alt="" className='photo-search'/>
                    <div className='search-item-overlay'>
                        {name}
                    </div>
            </div>
        </Col>
    );
}
export default UserInSearch;