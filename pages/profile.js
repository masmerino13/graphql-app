import React from 'react'
import User from '../src/components/User'
import UserProfile from '../src/components/Profile'
import NeedSignin from '../src/components/User/NeedSignin'

const Profile = () => (
    <User>
        {
            ({data: { me }}) => (
                <div>
                {me && (
                        <UserProfile user={me} />
                    )}
                {!me && (
                        <NeedSignin />
                    )}
                </div>
            )
        }
    </User>
)

export default Profile;