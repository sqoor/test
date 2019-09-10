import React, { Component } from 'react'

export class Post extends Component {
  state = {
    
  }

    render() {

      // const { text, label } = this.props.post
        return (
          <div>
            <div className="post_item">
              <div className="User_info">
                <div className="user_img">
                  <img src="./images/user.png" />
                </div>
                <div className="user_name">Ahmad Alaarg</div>
                <span className="userinfo_date">
                  <b>Date:</b> 12/12/2019
                </span>
                <span className="userinfo_date">
                  <b>time:</b> 12:83 PM
                </span>
              </div>
              <div className="post">
                <h4>'dasfasfafasf'</h4>
                <textarea
                  disabled="true"
                  value='dasdasdasdasdasd'
                >
                </textarea>
              </div>
              <div className="pos_anser">
                  <div className="anser_count">30 Comment</div>
                <button className="btn btn-info">
                    Answer
                </button>
              </div>
            </div> 
          </div>
        )
    }
}

export default Post
