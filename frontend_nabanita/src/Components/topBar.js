import React from "react";
const breakpoint = 740;

class TopBar_lg extends React.Component {
  render() {
    if (window.innerWidth < breakpoint) {
      return (
        <div>
          <h1>Developers Club</h1>
          <h3>Kalyani</h3>
        </div>
      );
    } else {
      return <h1>Null</h1>;
    }
  }
}

class TopBar_md extends React.Component {
  render() {
    return <h1>NUll</h1>;
  }
}

// class Header extends React.Component {
//   componentDidMount() {
//     window.addEventListener("scroll", this.parallaxShift);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.parallaxShift);
//   }
//   parallaxShift = () => {
//     this.setState({
//       offset: window.pageYOffset
//     });
//   };

//   constructor() {
//     super();

//     this.state = {
//       offset: 0
//     };
//   }
// }
