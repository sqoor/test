import React, { Component } from 'react'
import MyPostItem from './MyPostItem'

export class PostsList extends Component {
    render() {
        const {myInfo,myPost}=this.props
        return (
            <div>
                <MyPostItem myPost={myPost} myInfo={myInfo}/>
            </div>
        )
    }
}

export default PostsList
