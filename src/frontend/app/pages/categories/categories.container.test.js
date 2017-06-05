import React from 'react';
import { shallow } from 'enzyme';
import { CategoriesContainer } from './categories.container';

// Material-ui components
import { List } from 'material-ui/List';

describe('>>> Categories container --- Shallow Render Container', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<CategoriesContainer />);
  })

  it('+++ render the DUMB component', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('+++ should have material-ui list component', () => {
    expect(wrapper.find(List).length).toEqual(1);
  });
});