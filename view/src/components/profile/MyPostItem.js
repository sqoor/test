import React, { Component } from 'react'

export class MyPostItem extends Component {
    render() {
    const {myPost}=this.props

        return (
            <div>
                title : {myPost.title}
                code : {myPost.code}
            </div>
        )
    }
}

export default MyPostItem
