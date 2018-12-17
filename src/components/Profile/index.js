import React, { Component } from 'react'
import Medicines from './Medicines'

class Profile extends Component {
    render() {
        const { name } = this.props.user;
        return (
            <div>
                <p>Hola { name }</p>
                <Medicines />
            </div>
        )
    }
}

export default Profile;