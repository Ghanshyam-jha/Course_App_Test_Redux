import reducer from '../reducers'

describe('Reducer Testing', ()=>{
    it('Should return the initial state', ()=>{
        expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify({
            Course:{},
            Formenq:{},
            Userdoubts:{}
        }))
    })
    it('Reducer with action', () =>{
        let state={
            Course:[],
            Formenq:[],
            Userdoubts:[]
        }
        state= reducer(state, {action:'COURSE_LIST'})
        expect(state).toEqual({
            Course:[],
            Formenq:[],
            Userdoubts:[]
        })
    })  
})