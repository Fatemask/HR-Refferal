import React, {Component} from 'react';
import {Form} from 'react-bootstrap/';
import {Row,Col} from 'react-bootstrap';
import axios from '../../dbSetUrl';
import classes from './getApplicant.module.css';

class GetAplicant extends Component {
   
    constructor(props){
        super(props);
        this.state={
            member:{
                name: null,
                desig:null,
                compName:null
                }
         }

         this.inputChangeHandler = this.inputChangeHandler.bind(this);
         this.onSubmitHandler = this.onSubmitHandler.bind(this);
        }

    
    inputChangeHandler(event){
        const target= event.target;
        const updateMember={
            ...this.state.member
        }
        if(target.id==='name'){
            console.log(event.target.id);
            console.log(event.target.value);
           
            this.setState(prevState=>({
                member:{
                    ...updateMember.member,
                    name:target.value
                }
            }),()=>console.log(this.state.member));
            ;
        }
        else if(target.id==='designation')
        {
            this.setState(prevState=>({
                member:{
                    ...prevState.member,
                    desig:target.value
                }
            }),()=>console.log(this.state.member));
        } 
        else if(target.id==='compName')
        {
            this.setState(prevState=>({
                member:{
                    ...prevState.member,
                    compName:target.value
                }
            }),()=>console.log(this.state.member));
        } 
    }

    onSubmitHandler(e){
        e.preventDefault();
        const mem= this.state.member;
        console.log('submit');
        axios.post('/member.json', mem)
        .then(response=>{
            console.log(response);
        }).catch(err=>{
            console.log(err);
        });
    }

    render(){
        return (<div>
            
            <Form>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                Name
                </Form.Label>
                <Col sm="10">
                <Form.Control className={classes.size} onChange={this.inputChangeHandler} type="text" id="name" placeholder="Name" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                Designation
                </Form.Label>
                <Col sm="10">
                <Form.Control className={classes.size} onChange={this.inputChangeHandler} type="text" id="designation" placeholder="Designation" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} >
                <Form.Label column sm="2">
                Company Name
                </Form.Label>
                <Col sm="10">
                <Form.Control className={classes.size} onChange={this.inputChangeHandler} type="text" id="compName" placeholder="Company Name" />
                </Col>
              </Form.Group>
              <button onClick={this.onSubmitHandler}>Submit</button>
            </Form>
        </div>
        );
    }
}

export default GetAplicant;