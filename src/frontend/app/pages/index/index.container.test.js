import React from 'react';
import { shallow } from 'enzyme';
import { IndexContainer } from './index.container';

// Material-ui components
import { List } from 'material-ui/List';

describe('>>> INDEX CONTAINER --- Shallow Render Container', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<IndexContainer />);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ should have material-ui list component', () => {
    expect(wrapper.find(List).length).toEqual(1);
  });
});