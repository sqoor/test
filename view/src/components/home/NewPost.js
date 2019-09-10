import React, { Component } from 'react'

export class NewPost extends Component {

    submit = (e) => {
        e.preventDefault();

        const text = this.text.value;
        const title = this.title.value;
        console.log(title, text);

        this.props.addPost({title, text})
    }

    render() {
        return (
                <div className="add_Post_form">
                    <form onSubmit={this.submit}>
                        <h4 className="text-center">Create New Post</h4>
                        <input ref={elem => this.title = elem} type="text" className="form-control" placeholder="PostName" />
                        <textarea
                            ref={elem => this.text = elem}
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
