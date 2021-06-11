import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {removeUser, userLoad} from "./action";



function App() {
  const user = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoad())
  }, [])

  const handleDelete = (id) => {
    dispatch (removeUser(id))
  }

  return (
    <div className="App">
      <div className="header">
        Список пользователей
      </div>
      {user.map(item => {
        return(
            <div className="main">
              <input type="checkbox"/>
              <div className="userName">
                {item.name}
              </div>
              <button onClick={() => handleDelete(item.id)}>
                Удалить пользователя
              </button>
            </div>
        )
      })}
    </div>
  );
}

export default App;
