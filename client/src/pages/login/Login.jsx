import React from "react";
import BioforgeLogo from "../../assets/BioforgeLogo.png";
import "./login.styles.scss";
import { Grid, Typography, Hidden } from "@material-ui/core";
import LoginComponent from "../../components/login-form/login.component";

function LogInForm() {
 
  return (
    <div className="LogInForm">
      <Grid container>
        <Hidden smDown>
          <Grid item md={7} lg={7} xl={7}>
            <div className="bg-image">.</div>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={5} lg={5} xl={5}>
          <div className="container">
            <div>
              <div className="logo-container" style={{ width: "70px" }}>
                <img className="logo" src={BioforgeLogo} alt="logo" />
              </div>
              <div className="welcome vertical-gap">
                <Typography variant="h4">Welcome!</Typography>
                <Typography variant="h4">Lets get started.</Typography>
              </div>

              <p className="subtitle margin-bottom">
                {" "}
                Module Name
              </p>
              <LoginComponent/>
            </div>
            <div className="footer">
              <p className="subtitle">Powered by</p>
              <div className="logo-container" style={{ width: "30px" }}>
                <img className="logo" src={BioforgeLogo} alt="logo" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default LogInForm;