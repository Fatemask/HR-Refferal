import React, {Component} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import Desc from './applydes';

class Apply extends Component{
    state={
        desc: null
    }

    onSubmitHandler=()=>{
        this.setState({desc:<Desc/>});
        // return(<Desc/>);
    }

    onBackHandler=()=>{
        this.setState({desc:null})
    }
    render(){
        const display=<div>
            <button style={{display:'flex'}} className="btn btn-primary" onClick={this.onBackHandler}> back </button>
            <div>
                {this.state.desc}
            </div>
        </div>
        return(
        <div>

         {this.state.desc ? display: 
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
                        <button  onClick={this.onSubmitHandler} className="btn btn-primary">Apply now</button>
                    </Col>
                </Row>
            </Container> }
         
        </div>
        );
    }
}

export default Apply;