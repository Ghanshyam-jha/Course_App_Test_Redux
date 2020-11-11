import React from 'react'
import '../component/style.css'
import {Link} from 'react-router-dom'

const displayComp= (props)=>{
   console.log(props)
    const renderMovies=({dataList}) =>{
       
        if(dataList){
            return dataList.map((item)=>{
                console.log(item)
                return(
                    <div className="course_list_wrapper">
                    <div className="row" key={item._id}>
                        <div className="col-md-10" >
                            <h5>{item.course_name}</h5>
                            <div><strong>Duration : </strong>{item.duration}</div>
                            <div><strong>Time :</strong> {item.time}</div>
                        </div>
                        
                        <div className="col-md-2 marginPadding">
                            <Link to={`/enquiries/${item.id}`} type="button" className="btn btn-primary">Enquiry</Link>
                        </div>
                    </div>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            {renderMovies(props)}
        </div>
    )
}
export default displayComp