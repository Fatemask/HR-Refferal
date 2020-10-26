import React ,{Component}from 'react';
import GetAplicantList from './getAplicant';
import axios from '../../dbSetUrl';
import PrintList from './printList';
import {Row, Col} from 'react-bootstrap';

class AplicantList extends Component{
    constructor(){
        super();
        this.state={
            data:null,
            parsed:null
        };
    }
   
    

    
    componentWillMount =()=>{
        // console.log("dadaaaaaa");
        axios.get('https://hr-ref.firebaseio.com/member.json')
        .then(Response=>{
            
            this.setState({data: Response.data})
        //    this.setState({data:Response.data});
           console.log(this.state.data);
        });
    }
    render(){
        let Datad=null;
        if(this.state.data!= null){
        const dispData= Object.entries(this.state.data)
        .map(p=>{
            return(
                <PrintList name={p[1].name}
                 desig={p[1].desig} 
                 comp={p[1].compName}/>
                // <div>{console.log(p[1].name)}</div>
            )
        });     
        Datad=dispData;
       }
        return(
            <div>
      
                <GetAplicantList/>
                <br/><br/>
                <Row>
                    <Col sm={4}><b>Name</b></Col>
                    <Col sm={4}><b>Designation</b></Col>
                    <Col sm={4}><b>Company Name</b></Col>
                </Row>
                {Datad}
             </div>
            );
    }
    
}

export default AplicantList;