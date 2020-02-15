import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiFacebookBox, mdiTwitter, mdiGithubBox } from "@mdi/js";

class Footer extends Component {
  render() {
    return (
      <div className="w-100 footer">
        <div className="top-footer">
          <div className="top-footer-section">
            <div className="footer-about">About</div>
            <div className="ab-link1">DC KGEC</div>
            <div className="ab-link2">Developer Clubs</div>
            <div className="ab-link3">Meet the Team</div>
          </div>
          <div className="top-footer-section">
            <div className="footer-link">Important Links</div>
            <div className="li-link1">Join us</div>
            <div className="li-link2">Apply to be a Speaker</div>
            <div className="li-link3">Read our magazine</div>
          </div>
          <div className="top-footer-section">
            <div className="footer-social">Social</div>

            <div>
              <strong>Email:</strong> kgec.developers.circle@gmail.com
            </div>

            <div className="social-links-list">
              <a href="null" target="_blank">
                <Icon path={mdiFacebookBox} size={1.2} />
              </a>
              <a href="null" target="_blank">
                <Icon path={mdiTwitter} size={1.2} />
              </a>
              <a href="null" target="_blank">
                <Icon path={mdiGithubBox} size={1.2} />
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-footer">
          <div className="container bottom-footer-container">
            <div className="footer-logo-holder">
              <img src="logo-no-text.png" alt="DCK Logo"></img>
              <div className="footer-caption">DC KGEC</div>
            </div>

            <div className="footer-text">© Copyright DC KGEC</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
