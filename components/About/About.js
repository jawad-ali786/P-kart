import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
// import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
const About = () => {
  const visitFacebook = () => {
    window.location = "https://facebook.com/mr.jawat.11";
  };
  return (
    <div className="aboutSection rounded-full">
      <div ></div>
      <div className="aboutSectionGradient "></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">ABOUT US</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/df6uhxehr/image/upload/v1667728947/avatars/WhatsApp_Image_2022-11-06_at_3.02.10_PM_rtbaj7.jpg"
              alt="Founder"
            />
            <Typography>JAWAD ALI</Typography>
            <Button onClick={visitFacebook} color="primary">
              Visit FACEBOOK
            </Button>
            <span>
                AUGMENTED REALITY DEVELOPER / WEBSCRAPING 
            </span>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/df6uhxehr/image/upload/v1671054369/avatar/portrait-woman-with-fingers-posing-peacefully_167995-940_uwliaf.png"
              alt="Founder"
            />
            <Typography>AQSA GUL KHAN</Typography>
            <Button onClick={visitFacebook} color="primary">
              Visit FACEBOOK
            </Button>
            <span>
              3D MODEL DESIGNER / WEBSCRAPING 
            </span>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/df6uhxehr/image/upload/v1671054277/avatar/261426513_580519670163548_3905193019595227203_n_z0yeaz.jpg"
              alt="Founder"
            />
            <Typography>ALI ANWAR</Typography>
            <Button onClick={visitFacebook} color="primary">
              Visit FACEBOOK
            </Button>
            <span>
              BACKEND DEVELOPER
            </span>
          </div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/df6uhxehr/image/upload/v1671054369/avatar/portrait-woman-with-fingers-posing-peacefully_167995-940_uwliaf.png"
              alt="Founder"
            />
            <Typography>ATIKA QURESHI</Typography>
            <Button onClick={visitFacebook} color="primary">
              Visit FACEBOOK
            </Button>
            <span>
              UI/UX EXPERT
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Vision</Typography>
            <ul>
              <li className="list">Augmented Reality Feature</li>
              <li>To Provide Quality Products</li>
              <li>Same Day Delivery</li>
              <li>Cheapest Price</li>
              <li>Return Policy</li>
              <li>Money Back guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
