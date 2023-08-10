import './App.css';
import users from './data/users_data.json'
import { useState } from 'react';

function App() {
  const [keyword, setKeyword] = useState('')

  const searchHandler = (e) => {
    console.log("searched keyword",e.target.value)
    setKeyword(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='heading'>Search Filter</h1>
      </header>

      <main>
        <div className='input-parent'>
          <input onChange={searchHandler} className='searchInput' placeholder='Search User' />
        </div>
        <div className='table-parent'>
          <table>
            <thead>
              <tr className='tr'>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.filter((user) => {
                if (keyword == '') {
                  return user;
                } else if (user.first_name.toLowerCase().includes(keyword.toLowerCase()) || user.last_name.toLowerCase().includes(keyword.toLowerCase())) {
                  return user;
                }
              }).map((user) => {
                return (
                  <tr className='tr' key={user.id.$oid}>
                    <td>{user.first_name} {user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{ user.gender }</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
