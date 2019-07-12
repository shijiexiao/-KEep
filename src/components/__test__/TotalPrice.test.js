import React from 'react'
import {shallow} from 'enzyme'
import  TotalPrice  from '../TotalPrice'
const props={
    income:2000,
    outcome:10
}
describe('test totalprice component',()=>{
    it('should render incom&outome',  ()=>{
        const wrapper=shallow(<TotalPrice {...props}/>)
        expect(wrapper.find('.income span').text() *1).toEqual(2000)
        expect(wrapper.find('.outcome span').text() *1).toEqual(10)


    });
})