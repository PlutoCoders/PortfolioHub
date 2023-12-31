import './App.css';
import logo from './logo.svg';
import { useState } from 'react';
import Header from './components/header/Header';

export const startingUsers = [
  {
    id: 1,
    name: `Alex`,
    status: `Online`
  },
  {
    id: 2,
    name: `Bob`,
    status: `Offline`
  },
];

export default function App() {
  let [count, setCount] = useState(0);
  let [users, setUsers] = useState(startingUsers);
  
  return (
    <div className="App">
      <Header />
      <div className={`containerWithSpinningLogo`}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Portfolio Hub {count}
        </p>
        <button onClick={(e) => {
          setCount(prevCount => prevCount + 1);
          setUsers(prevUsers => [...prevUsers, {
            id: prevUsers.length + 1,
            name: `New`,
            status: `Online`
          }])
        }}>+ Click to Increase Count and Add User</button>

        <div style={{marginTop: 10}} className={`usersDiv`}>
          {users && users.length > 0 ? (
            <div className={`users`}>
              <h4>We Have {users.length} User(s)</h4>
              <div className={`usersContainer`}>
                {users.map(user => {
                  return (
                    <div className={`user`}>
                      <span className={`userID`}>{user.id}</span> -
                       <span className={`userName`}>{user.name}</span> -
                       <span className={`userStatus`}>{user.status}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div>No Users Registered</div>
          )}
        </div>
      </div>
    </div>
  );
}