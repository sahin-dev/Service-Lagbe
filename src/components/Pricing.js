import React from 'react'
import { Tabs, Tab } from 'react-bootstrap';

const Pricing = ()=>{
    return (<Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Basic">
          Tab content for Basic
        </Tab>
        <Tab eventKey="profile" title="Advanced">
          Tab content for Advanced
        </Tab>
        <Tab eventKey="contact" title="Premium">
          Tab content for Premium
        </Tab>
      </Tabs>);
}

export default Pricing