import React, { useState, useEffect} from 'react';
import { getLocalUsers } from '../utils/request';


const UserList = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(getLocalUsers())
  })
  return (
      <div>
        <span>User List</span>
        {users}
      </div>
  )
}

export default UserList;