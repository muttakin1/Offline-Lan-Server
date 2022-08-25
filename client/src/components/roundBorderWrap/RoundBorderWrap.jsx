import React from 'react'
import './roundBorderWrap.styles.scss'
function RoundBorderWrap(props) {
    return (
      <div id="CustomPaper">
        <div className="round-box">
          <h1 className="papaer-title">{props.title}</h1>
          {props.children}
        </div>
      </div>
    );
}

export default RoundBorderWrap;
