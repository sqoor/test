import React, { Component } from 'react'
import NewPost from './NewPost';
import Post from './PostItem';

export class Home extends Component {
    // axios.post('url', bodyObj);

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <NewPost 
                                labelChange={this.labelChange} 
                                textChange={this.textChange}
                                handleSubmit={this.handleSubmit}
                            />
                            {/* {posts.map( post => { 
                                return(
                                    <Post
                                        post = {post}
                                        key={post._id}
                                        title={title} 
                                        text={text}
                                    />
                                ) 
                            })} */}
                            <Post />
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default Home
