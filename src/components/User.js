import React from 'react';
import {removeUser} from "../redux/action";
import {useDispatch} from "react-redux";

function User(props) {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(removeUser(id))
    }

    return (
        <div>
            <div className="main">
                <input type="checkbox"/>
                <div className="userName">
                    {props.item.name}
                </div>
                <button onClick={() => props.handleDelete(props.item.id)}>
                    Удалить пользователя
                </button>
            </div>
        </div>
    );
}

export default User;