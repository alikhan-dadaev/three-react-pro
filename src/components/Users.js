import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userLoad} from "../redux/action";
import User from "./User";

function Users (props) {
    function App() {
        const user = useSelector(state => state.users);

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(userLoad())
        }, [])

        return (
            <div>
                {user.map(item => {
                    return (<User item = {item} />)

                })}
            </div>
        )
    }
}

export default Users;