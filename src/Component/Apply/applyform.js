import React from 'react';
import { Form } from 'react-bootstrap';
import {Row, Col, Container} from 'react-bootstrap';
import classes from "../AplicantList/getApplicant.module.css";

const form =()=>{
    return(<div>
             <Form>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                Name
                </Form.Label>
                <Col sm="10">
                <Form.Control className={classes.size}  type="text" id="name" placeholder="Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                Designation
                </Form.Label>
                <Col sm="10">
                <Form.Control className={classes.size}  type="text" id="designation" placeholder="Designation" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                Company Name
                </Form.Label>
                <Col sm="10">
                <Form.Control className={classes.size}  type="text" id="compName" placeholder="Company Name" />
                </Col>
              </Form.Group>
              <button className="btn btn-primary">Submit</button>
            </Form>
    </div>
    );
}

export default form;