import React, { Component } from "react";

export default class myComments extends Component {
  render() {
    const { myComments } = this.props;

    return (
      <div>
          {myComments.map(item=>{
              return(
                <div class="card w-75">
                <div class="card-body">
                  <h5 class="card-title">Comments</h5>
                  <p class="card-text">{item.myComments}</p>
                </div>
              </div>
            
              )
        
          })
        }
        </div>
    );
  }
}
