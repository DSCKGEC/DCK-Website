import React, {Component} from 'react';

class Activity extends Component{

  render(){
    return(
        <div>
        <div className="activity-text">activities</div>    
        <div className="img-activities"></div>
        <div className="activity-text-sub">How do we make technology fun to learn?</div>
        <div className="activity-text--sub">Developers Club KGEC is inspired by the Google Developers' Family. The motive is to create a local ecosystem of Developers in and around the Campus. And having fun doing it.</div>
        <div className="activity-text---sub">Read about our experiences</div>
        <button className="activity-button">check out our activities</button>
        </div>
    ); 
  }
}
export default Activity;