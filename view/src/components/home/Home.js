import React, { Component } from "react";
import NewPost from "./NewPost";
import Post from "./PostItem";
import Axios from "axios";

export class Home extends Component {
  state = {
    posts: [],
  };

  userLoggedIn() {
    let loggedUser = localStorage.user;
    
    if(loggedUser)
      loggedUser = JSON.parse(loggedUser);

    return loggedUser ? true : false;
  }

  componentDidMount() {
    Axios.get("/posts")
      .then(res => {
        this.setState({ posts: res.data });
      })
      .catch(err => console.log(err));
  }

  addPost = newPost => {
    console.log("newPost", newPost);
    Axios.post("/posts", newPost)
      .then(res => {
        console.log("RES.DATA", res.data);
        this.setState({ posts: [res.data, ...this.state.posts] });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
        <div className="min_header">
          <div className="container">
            <p>
              We want to connect the people who have knowledge to <br /> the
              people who need it, to bring together people with different
              <br /> perspectives so they can understand each other better, and
              to empower
              <br /> everyone to share their knowledge.
            </p>
            {/* <button className="btn btn-info">Create ANew Account</button> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {this.userLoggedIn() ? <NewPost addPost={this.addPost} /> : null}
              {this.state.posts.map(post => {
                return <Post post={post} key={post._id} />;
              })}
            </div>
            <div className="col-md-4">
              <div className="side_bar ">
                <form>
                  <div className="input-group mb-3 animated fadeInRight">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search text"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        SEARCH
                      </span>
                    </div>
                  </div>
                </form>
                <div className="side_about_me animated zoomInRight">
                  <h3>About Us</h3>
                  <p>
                    Hello We Are The Code Talkerz We Help You to solve codes
                    broblems to learn from yours false and the cool word that we
                    say if you dont get in false you will not learn any thing
                  </p>
                </div>
                <div className="sochial_icons">
                  <i className="fab fa-facebook-f animated  bounce delay-1s"></i>
                  <i className="fab fa-twitter animated  bounce delay-2s"></i>
                  <i className="fab fa-linkedin-in animated  bounce delay-3s"></i>
                  <i className="fab fa-github animated  bounce delay-4s"></i>
                  <i className="fab fa-google animated  bounce delay-5s"></i>
                </div>
                <div className="video_side">
                  <h4>Who Are We </h4>

                  <iframe
                    title="youtube"
                    width="100%"
                    src="https://www.youtube.com/embed/W81dlS5G8Gs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="facebook_side">
                  <h4>Follow Us On Faceebok</h4>

                  <iframe
                    title="fb"
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact&tabs=timeline&width=350&height=110&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=185124325417884"
                    width="350"
                    height="150"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
