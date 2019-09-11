import React, { Component } from 'react'
import mongoose from "mongoose";
import moment from "moment";

export class Comment extends Component {
  creationTime() {
    const { _id } = this.props.comment;
    const isoDate = mongoose.Types.ObjectId(_id).getTimestamp();
    const mom = new moment(isoDate);
    const now = new moment();
    const duration = moment.duration(now.diff(mom));

    return duration.humanize();
  }

    render() {
        const {_id, text, user} = this.props.comment;
        return (
            <div className="text-muted border w-50 m-3 rounded bg-light p-3">
                    <span className="float-right text-small">{this.creationTime()}</span>
                   <img src={user.image} alt={user.name} />
                   <h4>{user.name}</h4>
                   <p>{text}</p> 
            </div>
        )
    }
}

export default Comment
