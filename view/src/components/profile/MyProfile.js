import React, { Component } from 'react';
import MyInfo from './MyInfo'
import MyPostsList from './MyPostsList'
import myComments from './myComments';


export class MyProfile extends Component {
    state={
        myInfo:{
            name:'Asma',
            email:'Asmaa.ALfauri@gmail.com',
            phoneNo: '0777522506'
        },
        myPost:[
          {
            title:'q1 for html',
            code:'<html><html/>'
           },
           {
            title:'q2 for html',
            code:'<html><html/>'
           },
           {
            title:'q3 for html',
            code:'<html><html/>'
           },
           {
            title:'q4 for html',
            code:'<html><html/>'
           }
        ],
        myComments:[
            {
               comment :'1  dfkjfhdskfdhfbd'
            },
            {
                comment :'2    dfkjfhdskfdhfbd'
             },
             {
                comment :'3    dfkjfhdskfdhfbd'
             },
        ]
    }
      
    render() {
        const {myInfo,myPost,myComments}=this.state
        return (
            <div>
                <MyInfo myInfo={myInfo}/>
                <MyPostsList myPost={myPost} myInfo={myInfo} myComments={myComments}/>
            </div>
        )
    }
}

export default MyProfile
