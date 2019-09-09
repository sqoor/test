import React, { Component } from 'react'
import MyPostItem from './MyPostItem'

export class PostsList extends Component {
    render() {
        const {myInfo,myPost,myComments}=this.props
        return (
            <div>
                <MyPostItem myPost={myPost} myInfo={myInfo} myComments={myComments}/>
            </div>
        )
    }
}

export default PostsList
