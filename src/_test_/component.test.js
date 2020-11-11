import React from 'react'
import Footer from '../component/footer'
import {create} from 'react-test-renderer'

describe('Testing Component', ()=>{
    test('Testing Footer', () => {
        let tree= create(<Footer/>)
        expect(tree.toJSON()).toMatchSnapshot()
    })
})