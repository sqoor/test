import React, { Component } from 'react'
import NewPost from './NewPost';
import Post from './PostItem';
import Axios from 'axios';

export class Home extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        Axios
        .get('/posts')
        .then(res => {
            console.log('RES.DATA', res.data);
            this.setState({ posts: res.data })
        })
        .catch(err => console.log(err));
    }

    addPost = newPost => {
        console.log('newPost', newPost);
        Axios
        .post('/posts', newPost)
        .then(res => {
            console.log('RES.DATA', res.data);
            this.setState({ posts: [res.data, ...this.state.posts] })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <NewPost addPost={this.addPost} />
                            {this.state.posts.map(post => {
                                return (
                                    <Post
                                        post={post}
                                        key={post._id}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
