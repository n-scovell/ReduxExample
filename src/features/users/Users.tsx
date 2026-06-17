import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { actions } from './userSlice'
import {RootState, AppDispatch} from '../../app/store'
import './Users.css'

export default function Users() {
    const [userName, setUser] = useState('')
    const [userColor, setcolor] = useState("");
    const dispatch = useDispatch<AppDispatch>()
    const STATES = useSelector((state:RootState)=> state.user)
    const myColors = ['Red', 'Blue', 'Green', 'Purple']
    return (
        <div className="app">
            {!STATES.showList ?
            <section className="app--makeUser">
            {STATES.submitUser && <h3>{userName} has been added:</h3>}
            <form 
                onSubmit={(e) => {
                e.preventDefault();
                setcolor('');
                dispatch(actions.addUser({ name: userName, color: userColor }));
                }}
            >
                <label>
                    User name:
                    <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="username"
                    />
                </label>
                <label>
                    Favorite color:
                    <select onChange={(e) => setcolor(e.target.value)} value={userColor}>
                          <option value="" disabled>Choose Color</option>
                        {myColors.map((color, index) => (
                            <option key={color+index} value={color}>{color}</option>
                        ))}
                    </select>
                </label>
                <button type="submit">Add Player</button>
            </form>
            <button className="textBt" onClick={()=> dispatch(actions.toggleList())}>SHOW LIST OF USERS</button>
            </section>
            :
            <section className="app--displayUsers">
                <ul>
                    {STATES.users.map((u, index) => (
                        <li 
                        className={u.color.toLowerCase()}
                        key={u.name}
                        >
                        {u.name} 
                        <button onClick={() => dispatch(actions.deleteUser(index))}>X</button>
                        </li>
                    ))}
                </ul>
                <button className="textBt" 
                onClick={()=> {
                setUser('');
                dispatch(actions.toggleList())
                }}
                >ADD ANOTHER USER</button>
            </section>
            }
        </div>
    )
}