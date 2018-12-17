import React, { Component } from 'react'
import Medicines from './Medicines'

class Profile extends Component {
    render() {
        const { name, medicines } = this.props.user;
        return (
            <div>
                <p>Hola { name }</p>
                <Medicines medicines={medicines} />
            </div>
        )
    }
}

export default Profile;