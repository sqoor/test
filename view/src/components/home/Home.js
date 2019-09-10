import React, { Component } from 'react'
import NewPost from './NewPost';
import Post from './PostItem';

export class Home extends Component {
    state = {
        posts: []
    }
    // axios.post('url', bodyObj);

    addPost = newPost => {
        console.log(newPost)
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <NewPost 
                                addPost = {this.addPost}
                            />
                            {/* {this.posts.map( post => { 
                                return(
                                    <Post
                                        post = {post}
                                        key = {post._id}
                                        title = {this.title} 
                                        text = {this.text}
                                    />
                                ) 
                            })} */}
                            <Post posts={this.state.posts} text={this.text} title={this.title}/>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default Home
