import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "./Header.js";
import Footer from "./footer.js";
import SectionPills from "./SectionPills";
import GridContainer from "./GridContainer.js";
import GridItem from "./GridItem.js";
import Button from "./Button.js";
import HeaderLinks from "./HeaderLinks.js";
import Parallax from "./Parallax.js";

import styles from "../styles/material-kit-react/views/landingPage.js";
import SectionTabs from "../components/SectionTabs";
import Hero from "../components/hero";


// Sections for this page

// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../static/LandingPage/landing-bg.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <br />

              <div className = "columns is-centered">
                <div className  = "column">
                  <div className ="columns">
                    <p className ="title is-1 has-text-white">The World Needs More Startup Creators</p>
                  </div>
                  <br />
                  <div className ="columns">
                    <p className ="title is-3 has-text-white">BE ONE</p>
                  </div>

                  <br />
                  <br />

                  <div className ="columns">
                    <Button
                      color="danger"
                      size="lg"
                      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-play" />
                      Watch video
                    </Button>
                  </div>

                </div>
                
                <div className = "column">

                    <div className ="columns is-centered">
                        <figure className ="image is-64x64 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/Hero/money.png"></img>
                        </figure> 
                    </div>

                    <br />

                    <div className ="columns is-centered">
                        <figure className ="image is-32x32 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/Hero/more.png"></img>
                        </figure> 
                    </div>

                    <br />
                    <div className ="columns is-centered">
                        <figure className ="image is-128x128 is-vcentered">
                            <img className ="img" src="../static/FlatIcons/Hero/startup.png"></img>
                        </figure> 
                    </div>

                </div>
              </div>


            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
            <SectionTabs />
        </div>
      </div>
      <Footer />
    </div>
  );
}


{/* <div className ="columns is-centered">
<figure className ="image is-64x64 is-vcentered">
    <img className ="img" src="../static/FlatIcons/Hero/idea2.png"></img>
</figure> 
</div> */}



