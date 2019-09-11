import React, { Component } from "react";
import MyInfo from "./MyInfo";
import MyPostsList from "./MyPostsList";

import NewPost from "../home/NewPost";
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
        <div className="min_header"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div
                className="User_profile text-center "
                style={{
                  marginTop: "-50px",
                  marginTop: " -125px",
                  background: "none",
                  position: "relative",
                  zIndex: "999"
                }}
              >
                <div
                  className="User_prof_img"
                  style={{
                    background: "#fff"
                  }}
                >
                  <img src={myInfo.image} />
                </div>
                <h2 class="UserName">{myInfo.name}</h2>
                <div className="My_posts">
                  <div className="pos_anser">
                    <span className="float-left">
                      {" "}
                      {`Email: ${myInfo.email}`}
                    </span>
                    <span className="float-right">{`Phone Number: ${myInfo.phone}`}</span>
                  </div>
                  {/* <NewPost /> */}
                  {/* <div className="pos_anser">My Posts</div> */}
                  {/* ..........postitem.......... */}
                  <div>{/* <PostSingle /> */}</div>
                </div>
              </div>
            </div>

            {/* <MyInfo myInfo={myInfo} /> */}
            <MyPostsList myPosts={myPosts} deletePost={deletePost} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
