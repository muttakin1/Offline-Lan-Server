import React from 'react';
import { useHistory } from 'react-router-dom';
import JBFHLogo from '../../assets/jbfh-logo.png'
import DoctorAvatar from '../../assets/doctor-avatar.png'
import './header.styles.scss'
export default function ButtonAppBar() {
  const history = useHistory();
  const logout = () => {
  }
  return (
    <div>
      <div className="nav-container">
        <div className="Navbar">
          <img
            src= {JBFHLogo}
            alt="jbfh logo"
            onClick={() => history.push("/dashboard")}
            className="hover-pointer"
          />
          <div className="text">
            <p
              className="dashboard-btn"
              onClick={() => history.push("/dashboard")}
            >
              Dashboard
            </p>
            <span>
              <p className="sub">Welcome</p>
              <p className="main">Doctor</p>
              <p className="sub hover-pointer" onClick={logout}>Sign out</p>
            </span>
            <img
              src={DoctorAvatar}
              alt="doctor-logo"
              className="avatar"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}