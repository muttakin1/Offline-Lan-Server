import React from 'react'
import BreadCrumb from '../../components/breadCrumbs/BreadCrumbs'
function Dashboard() {
    const breadCrumbData = [
        {title: "dashboard",url:"/"}, 
        {title: "nextboard",url:"/nextboard"}
    ]
    return (
      <div>
        <BreadCrumb routes={breadCrumbData} />
      </div>
    );
}

export default Dashboard
