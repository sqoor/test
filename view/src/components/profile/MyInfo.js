import React, { Component } from 'react'

export class MyInfo extends Component {
    render() {
        const {myInfo}=this.props
        return (
            <div>
                Name: {myInfo.name}
                Email : {myInfo.email}
                Phone: {myInfo.phoneNo}
            </div>
        )
    }
}

export default MyInfo
