import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  
  showCoords(event) {
    if (window.innerWidth >= 800) {
      var x = event.clientX;
      var y = event.clientY;
      var newposX = (x - window.innerWidth/2)/30;
      var newposY = (y - window.innerHeight/2 - 50)/30;
      document.getElementById("moving-1").style.transform = "translate3d("+newposX+"px,"+newposY+"px,0px)";
      document.getElementById("moving-2").style.transform = "translate3d("+newposX+"px,"+newposY+"px,0px)";
    }
  }

  render() {
    return(
      <div className="Home container-fluid pb-5" onMouseMove={(event) => this.showCoords(event)}>
        <div className="container-fluid header">
          <div className="row name">
            <div className="col-md text-center">Hey, I'm Egor!</div>
          </div>
          <div className="row prof">
            <div className="col-md text-center"><code>Front End Dev | Student</code></div>
          </div>
        </div>
        <div className="Home-content container col-md-12">
          <div className="row">
            <div className="col m-3 text-right">
              <a href="https://www.linkedin.com/in/egor-filonov-7b4912160/"><img id="moving-1" src="/In-White.png" alt="LinkedIn" width="64"/></a>
            </div>
            <div className="col m-3 text-left">
              <a href="https://github.com/HubUser99"><img id="moving-2" src="/GitHub-Mark.png" alt="GitHub" width="64"/></a>
            </div>
          </div>
        </div>
        <div className="arrow_right">
          <Link to="/about">
            <img src="/Arrow-right.png" alt="" width="64px"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
