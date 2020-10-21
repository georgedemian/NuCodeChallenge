import React from 'react';
import { render, within } from '@testing-library/react';
import App from './App';
import SearchBar from './components/searchbar';
import { EnzymeAdapter } from 'enzyme';

describe('App', () =>{
  it('App match snapshot', ()=>{
    const app = <App />
    expect(app).toMatchSnapshot()
  })
})