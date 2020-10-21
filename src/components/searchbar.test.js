import React from 'react';
import "../setupTests"
import { mount, configure  } from 'enzyme';
import SearchBar from './searchbar';
const wrapper = mount(<SearchBar />);
describe('Searchbar', () =>{
  it('should Searchbar has input', ()=>{
    expect(wrapper.props().placeholder).toEqual('search');
  })
})