import React from 'react';
import "./footer.styles.scss"
import BioforgeLogo from '../../assets/BioforgeLogo.png'

export default function Footer() {

  return (
      <footer id="footer">
        <span>
          Building Better Healthcare
        </span>
        <img
          alt="Bioforge logo"
          src= {BioforgeLogo}
        />
       
      </footer>
  );
}