import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'


class EnquiryForm extends Component{
    constructor(props){
        super(props) 
        this.state={
            values: {
                courseid:Math.floor(Math.random()*10000),
                courseName:'',
                name:'',
                email:'',
                mobile:''
            }
        }
    }
    
    hadleInputchange= (e) => {
        this.setState(
            {
                values: { ...this.state.values, [e.target.name]: e.target.value 
                }
            },
              () => {   
                this.props.dispatch({
                    type: "SET_FORMVALUES",
                    payload: this.state.values
                  })
                }
        )
    }
    
    submitForm=(event) =>{
        event.preventDefault();
        this.props.dispatch({
        type: "FORM_DATA",
       // payload: this.state.values
    })
               
    }
    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.submitForm}>
                <div className="form-group">
                    <label>Course ID</label>
                    <input type="text" name="courseid" id="courseid" readOnly className="form-control" value={this.state.courseid} />
                </div>
                <div className="form-group">
                    <label>Course Name</label>
                    <input type="text" name="courseName" className="form-control" value={this.state.courseName} onChange={this.hadleInputchange}/>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" 
                    name="name" 
                    id="name"
                    className="form-control" 
                    value={this.state.name} 
                    onChange={this.hadleInputchange}/>
                </div>
                <div className="form-group">
                    <label>Email ID</label>
                    <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.hadleInputchange} />
                </div>
                <div className="form-group">
                    <label>Mobile No:</label>
                    <input type="number" name="mobile" value={this.state.mobile} className="form-control" onChange={this.hadleInputchange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        formData: state.getValues
    } 
  }

EnquiryForm.protoTypes={
    dispatch:PropTypes.func
}




export default connect(mapStateToProps)(EnquiryForm);