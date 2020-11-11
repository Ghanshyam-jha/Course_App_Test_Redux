import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'


class UserEnquiryForm extends Component{
    constructor(props){
        super(props) 
        this.state={
            values: {
                name:'',
                email:'',
                doubts:'',
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
                    type: "SET_ENQVALUES",
                    payload: this.state.values
                  })
                }
        )
    }
    
    submitEnqForm=(event) =>{
        event.preventDefault();
        this.props.dispatch({
        type: "ENQFORM_DATA",
       // payload: this.state.values
    })
               
    }
    render(){
        return(
            <React.Fragment>
                <form onSubmit={this.submitEnqForm}>
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
                    <label>Doubts:</label>
                    <input type="text" name="doubts" value={this.state.doubts} className="form-control" onChange={this.hadleInputchange}/>
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

  UserEnquiryForm.protoTypes={
    dispatch:PropTypes.func
}




export default connect(mapStateToProps)(UserEnquiryForm);