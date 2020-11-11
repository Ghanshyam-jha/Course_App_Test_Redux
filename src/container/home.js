import React, {Component} from 'react'
import {connect} from 'react-redux'
import {courseList, userEnquiry} from '../actions'

import PropTypes from 'prop-types'
import DisplayComp from './courseListDis'



class Home extends Component{
    componentDidMount(){
        this.props.dispatch(courseList())
        this.props.dispatch(userEnquiry())
        
        
    }
    render(){
        console.log(this.props.mydata)
        return(
            <div>
                <DisplayComp dataList={this.props.mydata.cList}/>
            </div>
        )
        
    }

}

function mapStateToProps(state){
    console.log(state);
    
    return{
        mydata:state.Course
    }
    
}

Home.protoTypes={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(Home)


