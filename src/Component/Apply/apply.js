import React, {Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';

class Apply extends Component{
    render(){
        return(
        <div>
            <Container >
                <br/> <br/> <br/>
                <Row style={{background:'grey', height:'130px'}}>
                    <Col xs={4}>
                        <img style={{width:'100%'}} src={require('../../img/avatar.jpeg')}/>
                    </Col>
                    <Col sx={8}>
                        <h4>Credit Suiss</h4>
                        <p>
                            looking for a software devloper....
                        </p>
                        <button className="btn btn-primary">Apply now</button>
                    </Col>
                </Row>
            </Container>
        </div>
        );
    }
}

export default Apply;