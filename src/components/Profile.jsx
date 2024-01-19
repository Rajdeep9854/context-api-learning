import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
  return (<>

        {!user && <div>please login</div>}
        {user && <div>{user.userName}</div>}
    </>
  )
}

export default Profile