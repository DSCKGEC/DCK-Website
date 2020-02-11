import React, {Component} from 'react';

class Topbar extends Component{

  render(){
    return(
        <div>
            <div className= "topbar"></div>
            <div className="img-topbar"></div>
            <div className="logo-topbar"></div>
            <div className="title-topbar">Developers Club KGEC</div>
            <div className="text-topbar">Kalyani Government Engineering College</div>
            <button className="sign-up-topbar">Call to Action</button>
        </div>
    ); 
  }
}
export default Topbar;