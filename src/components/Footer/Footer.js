import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import {  Col } from "reactstrap";


export default function Footer() {
    return (
        <div className="row">
            <Col md={2}>
                <img src="/img/react.png" width="100%"/>
            </Col>
            <Col md={2}>
                <img src="/img/bootstrap.png" width="100%"/>
            </Col>
            <Col md={2}>
                <img src="/img/api_rest.png" width="100%"/>
            </Col>
            <Col md={2}>
                <img src="/img/reactstrap.png" width="100%"/>
            </Col>
        </div>
    )
}
