import React, { Component } from 'react'; //import React Component
import Moment from 'react-moment';
import './Chirper.css'; //load module-specific CSS
import firebase, { database } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

//A list of chirps that have been posted
export default class ChirpList extends Component {
  constructor(props){
    super(props);
    this.state = {
      chirps:[]
    };
  }

  componentDidMount() {
    let chirpsRef = firebase.database().ref('chirps');
    chirpsRef.on('value', (snapshot) => {
      let tweet = snapshot.val();
      console.log(tweet);
      this.setState(
        this.state.chirps.push(tweet)
      )
    })
  }

  componentWillUnmount() {
    this.chirpsRef.off();
  }

  render() {
    if(!this.state.chirps) return null; //if no chirps, don't display

    
    /* TODO: produce a list of `<ChirpItems>` to render */
    console.log(this.state.chirps);
    let chirpKeys = Object.keys(this.state.chirps);
    console.log(chirpKeys);
    chirpKeys.map((key) => {
      let chirpObj = this.state.chirps[key];
      chirpObj.id = key;
      return chirpObj;
    })
    
    console.log(chirpKeys);

    // sort option 


    let chirpItems = chirpKeys.map((obj) => {
      return(
        <ChirpItem chirp={obj} currentUser={this.props.currentUser} key={obj.id} />
      )
    }); 
    console.log(chirpItems);
    return (
      <div className="containerXX">
          {chirpItems}
      </div>);
  }
}

//A single Chirp
class ChirpItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      likes: {
        uid: true
      }
    };
  }

  likeChirp = () => {
    /* TODO: update the chirp when it is liked */
  }
 
  render() {
    let chirp = this.props.chirp; //current chirp (convenience)

    //counting likes
    let likeCount = 0; //count likes
    let userLikes = false; //current user has liked
    if(chirp.likes){
      likeCount = Object.keys(chirp.likes).length;
      if(chirp.likes[this.props.currentUser.uid]) //if user id is listed
        userLikes = true; //user liked!
    }

    return (
      <div className="row py-4 bg-white border">
        <div className="col-1">
          <img className="avatar" src={chirp.userPhoto} alt={chirp.userName+' avatar'} />
        </div>
        <div className="col pl-4 pl-lg-1">

          <span className="handle">{chirp.userName} {/*space*/}</span>

          <span className="time"><Moment date={chirp.time} fromNow/></span>

          <div className="chirp">{chirp.text}</div>

          {/* A section for showing chirp likes */}
          <div className="likes">          
            <i className={'fa fa-heart '+(userLikes ? 'user-liked': '')} aria-label="like" onClick={this.likeChirp} ></i>
            <span>{/*space*/} {likeCount}</span>
          </div>
        </div>
      </div>      
    );
  }
}
