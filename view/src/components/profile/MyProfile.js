import React, { Component } from "react";
import MyPostsList from "./MyPostsList";
import axios from "axios";

import MyInfo from "./MyInfo";
// import NewPost from "../home/NewPost";

export class MyProfile extends Component {
  state = {
    myInfo: {},
    myPosts: []
  };

  authGuard() {
    let loggedUser = localStorage.user;
 
    if(!loggedUser) {
      this.props.history.push('/register');
      return
    }

    loggedUser = JSON.parse(loggedUser);
    this.setState({ myInfo: loggedUser });
    return loggedUser;
  }

  componentDidMount() {
    const loggedUser = this.authGuard();
    
    if(loggedUser) {
    axios
      .get(`/posts/user/${loggedUser._id}`)
      .then(response => {
        this.setState({ myPosts: response.data });
      })
      .catch(error => {
        console.log("Error", error);
      });
    }
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
                  // marginTop: "-50px",
                  marginTop: "-125px",
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
                  <img src={myInfo.image} alt={myInfo.name} />
                </div>
                <h2 className="UserName">{myInfo.name}</h2>
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
                </div>
              </div>
            </div>
            <MyPostsList myPosts={myPosts} deletePost={deletePost} />
          </div>
        </div>
      </div>
    );
  }
}

export default MyProfile;
