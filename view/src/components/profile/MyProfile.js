import React, { Component } from "react";
import MyInfo from "./MyInfo";
import MyPostsList from "./MyPostsList";
import axios from "axios";

export class MyProfile extends Component {
  state = {
    myInfo: {},
    myPosts: []
  };
  componentDidMount() {
    this.setState({
      myInfo: JSON.parse(localStorage.user) 
    });


    axios.get(`/posts/user/${this.state.myInfo._id}`)
      .then(response => {
        this.setState({ myPosts: response.data });
        console.log("React:get response.data", response.data);
      })
      .catch(error => {
        console.log("Error", error);
      });
  }

  deletePost = id => {
    axios
      .delete(`/posts/${id}`)
      .then(response => {
        const result = response.data;

        if (result.n && result.ok && result.deletedCount) {
          this.setState({
            myPosts: this.state.myPosts.filter(post => post._id !== id)
          });
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  render() {
    const { myInfo, myPosts } = this.state;
    const { deletePost } = this;

    return (
      <div>
        <MyInfo myInfo={myInfo} />
        <MyPostsList myPosts={myPosts} deletePost={deletePost} />
      </div>
    );
  }
}

export default MyProfile;
