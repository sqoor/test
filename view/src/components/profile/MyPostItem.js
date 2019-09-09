import React, { Component } from 'react'

export class MyPostItem extends Component {
    render() {
    const {myPost}=this.props

        return (
            <div>
                {myPost.map(item=>{
                    return( <div class="row">
                     <div class="col-sm-6">
                       <div class="card">
                         <div class="card-body">
                           <h5 class="card-title">{item.title}</h5>
                           <p class="card-text">{item.code}</p>
                           <a href="#" class="btn btn-primary">Edit</a>
                           <a href="#" class="btn btn-primary">Delete</a>
                         </div>
                       </div>
                     </div>
                   </div>)
                })}

              
            </div>
        )
    }
}

export default MyPostItem
