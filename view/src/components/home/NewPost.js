import React, { Component } from 'react'

export class NewPost extends Component {

    // submit = (e) => {
    //     e.preventDefault();

    //     const text = text.value;
    //     const title = title.value;
    //     console.log(text, title);

    //     this.props.addPost({text, title})
    // }

    render() {
        return (
                <div className="add_Post_form">
                    <form onSubmit={this.submit}>
                        <h4 className="text-center">Create New Post</h4>
                        <input rel={elem => this.title = elem} type="text" className="form-control" placeholder="PostName" />
                        <textarea
                            rel={elem => this.text = elem}
                            className="form-control"
                            placeholder="Enter Your Code Here"
                        ></textarea>
                        <button className="btn btn-info">Publish Your Question</button>
                    </form>
                </div>
        )
    }
}

export default NewPost
