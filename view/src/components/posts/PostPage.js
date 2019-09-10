import React, { Component } from 'react'
import axios from 'axios';
import PostDetail from './PostDetail';

export class PostsPage extends Component {
    state={
        post:[]
    }

    getPost = (id) => {
        axios
        .get(`http://localhost:9000/${id}`)
        .then(response => this.setState({post: response.data}))
        .catch(error => console.log("Error", error))
    }

    render() {
        const {post}=this.state
        const {getPost}=this
        return (
            <div>
              <PostDetail post={post} getPost={getPost}/>
            </div>
        )
    }
}

export default PostsPage
