import React, { Component } from 'react'

export class NewPost extends Component {

    submit = (e) => {
        e.preventDefault();

        const text = this.text.value;
        const title = this.title.value;
        const code = this.code.value
        const loggedUser = JSON.parse(localStorage.user);
        const newUser = {
            title,
            text,
            code,
            user: {
                name: loggedUser.name,
                image: loggedUser.image
            }
        }

        this.props.addPost(newUser)
    }
    render() {
        return (
            <div className="add_Post_form">
                <form onSubmit={this.submit}>
                    <h4 className="text-center">Create New Post</h4>
                    <input ref={elem => this.title = elem} type="text" className="form-control" placeholder="PostName" />
                    <textarea
                        ref={elem => this.text = elem}
                        className="form-control question_textarea "
                        placeholder="Enter Your Question Here"
                    ></textarea>
                    <textarea
                        ref={elem => this.code = elem}
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
