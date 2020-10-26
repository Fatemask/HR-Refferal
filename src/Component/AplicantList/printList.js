import React from 'react';
import {Row, Col} from 'react-bootstrap';
const printList =(props)=>{
        
        return(<div>
            <Row>
                <Col sm={4}>{props.name}</Col>
                <Col sm={4}>{props.desig} </Col>
                <Col sm={4}>{props.comp}</Col>
            </Row>
          </div>
        );
    
}

export default printList;