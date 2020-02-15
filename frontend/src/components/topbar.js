import React, {Component} from 'react';
import { Button } from 'react-bootstrap';


class Topbar extends Component{

  render(){
    return(
        <div>
            <div className= "topbar"></div>
            <div className="img-topbar"></div>
            <div className="logo-topbar"></div>
            <div className="title-topbar">Developers Club KGEC</div>
            <div className="text-topbar">Kalyani Government Engineering College</div>
            <Button className="sign-up-topbar" variant="primary">Call to Action</Button>

        </div>
    ); 
  }
}
export default Topbar;