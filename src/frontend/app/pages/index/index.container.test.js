import React from 'react';
import { shallow } from 'enzyme';
import { IndexContainer } from './index.container';

describe('>>> INDEX CONTAINER --- Shallow Render Container', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<IndexContainer />);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });
});