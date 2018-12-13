import React from 'react'
import styled from 'styled-components'
import { AUTH_USER } from '../../constants'
import lStorage from 'localStorage'

const userData = JSON.parse(lStorage.getItem(AUTH_USER))

const UserEmail = styled.div`
  font-size: 10px;
`;

const UserInfo = () => {
  console.log(userData);
  return (
    <div>
      <b>Welcome, { userData.name }</b>
      <UserEmail>Email: { userData.email }</UserEmail>
    </div>
  )
}

export default UserInfo;
