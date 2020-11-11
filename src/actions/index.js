const baseurl="http://localhost:8900/course_list"
const enqurl="http://localhost:8700/enq_data"


export function courseList(){
    const output = fetch(baseurl,{method:'GET'})
                .then((responce) => responce.json())
    return{
        type:'COURSE_LIST',
        payload:output
    }
} 





export function userEnquiry(values){
    console.log(values)
    const output = fetch(enqurl,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify(values)
        
    })
    .then((data) => data.json())

    return{
        type:'FORM_DATA',
        payload:output
    }
}