import React, { Component } from 'react'
import MyPostItem from './MyPostItem'
// this component should render the list of created posts by a certain user (it will be renderd on the profile(userPge)).

export class PostsList extends Component {
    render() {
        return (
            <div>
                <MyPostItem myPost={this.props.myPost}/>
            </div>
        )
    }
}

export default PostsList
