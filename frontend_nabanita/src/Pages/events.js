import React from "react";
import rules_pdf from '../Assets/IOT-FI - DC KGEC.pdf';
import {useState} from "react";

const Events = () => {
  
  const [showForm, setShowForm] = useState(false);
  const [isSmallWindowSize, setIsSmallWindowSize] = useState(false);

  function handleResize() {
    if(window.innerWidth < 500){
      setIsSmallWindowSize(true)
      if(showForm === true){
        setShowForm(false)
      }
    }
    else{
      setIsSmallWindowSize(false)
    }
    window.addEventListener('resize', handleResize)
  }

  //screen size determining
  React.useEffect(handleResize)

  function show_form(){
    setShowForm(!showForm);
  }

  function Form(){
    if(showForm === false){
      return(
        <p></p>
      )
    }
    else{
      return(
        <iframe className="d-block mx-auto mb-3" title="registration_form" src="https://docs.google.com/forms/d/e/1FAIpQLSf0Ss8-zDqSRtK6lP54J7c6NjkDr25Ax98ZEI-Pfeb_vaHiGA/viewform?embedded=true" width="700" height="1650" frameBorder="0" marginHeight="0" marginWidth="0" style={{maxWidth: '90%'}}>Loading…</iframe>
      )
    }
  }

  function FormButton(){
    if(isSmallWindowSize){
      return(
        <a className="btn btn-success" href="https://docs.google.com/forms/d/1a96xZD8BKqdojLCGnHUT7BG5wXVsDs7Dz1YNLlak04s" target="_blank" rel="noopener noreferrer">Register</a>
      )
    }
    else{
      return(
        <button className="btn btn-success" onClick={show_form}>{!showForm ? "Register" : "Hide the form"}</button>
      )
    }
  }

  function RulesButton(){
    if(isSmallWindowSize){
      return(
        <a href={rules_pdf} download="IOT-FI - DC KGEC.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Download Rules</a>
      )
    }
    else{
      return(
        <a href="https://drive.google.com/file/d/1Ilcts-gf3GeSiQBeQ15XpBQypgQdrTjl/view" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">View Rules</a>
      )
    }
  }


  

  return (
    <div className="mx-3 my-auto" style={{
      paddingLeft: 12 + `%`,
      paddingRight: 12 + `%`,
      backgroundColor: `white`,
      maxWidth: '2000px'
    }}>
      <h2 className="mb-3">Upcoming Events</h2>
      <div className="card">
        <div className="card-body text-center">
          <h3 className="card-title mb-3">IOT - FI : IoT for Innovation</h3>
          <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '0.8rem'}}>5<sup>th</sup> March 2020 and 7<sup>th</sup> March 2020</h6>
          <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: '0.8rem'}}><strong>Location:</strong> South Block, New Building, Kalyani Government Engineering College</h6>
          <p>
            IOT-FI is an event for aspiring engineers who want to get the taste of both coding and design solution under real-time circumstances. The event will be a two-segment event where your Electronics & Coding Skills will be tested in the first while your Design & Development Skills will put to test against the ticking clock to fetch the first prize.
          </p>
          {Form()}
          <div className="d-flex justify-content-center mb-4" style={{flexWrap: 'wrap', gridGap: '20px'}}>
            {RulesButton()}
            
            {FormButton()}
          </div>

          <iframe title="promotional video" src="https://www.youtube.com/embed/hTkezaeGx0Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="mb-3" style={{width: "60%", maxWidth: "500px", height: "350px"}}></iframe>

          <div className="card-footer text-muted text-center">
            <p className="font-weight-bold mb-2">Point of Contact:</p>
            
              <p className="my-1">Ayushman Bilas Thakur - +91 98300 48982</p>
              <p className="my-1">Soumik Adhikary - +91 73658 86554</p>
              <p className="my-1 mb-3">Manojit Roy – +91 62913 47517</p>
            
            <p className="font-weight-bold mb-2">Additional Co-ordinators:</p>
            
              <p className="my-1">Dipan Roy - +91 91630 34929</p>
              <p className="my-1 mb-3">Ritankar Paul - +91 99330 14285</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
