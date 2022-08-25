import React from "react";
import {Breadcrumbs, Divider} from "@material-ui/core";
import './breadCrumbs.styles.scss'
import { useHistory } from 'react-router'

export default function Breadcrumb({routes}) {
  const history = useHistory()
  return (
    <div id="BreadCrumbsContainer">
      <Breadcrumbs id="BreadCrumbs" aria-label="breadcrumb" separator=">">
        {routes.map((route) => (
          <p onClick={() => history.push(route.url)}>{route.title}</p>
        ))}
      </Breadcrumbs>
      <Divider id="divider"/>
    </div>
  );
}
