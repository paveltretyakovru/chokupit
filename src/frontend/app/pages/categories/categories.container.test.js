import React from 'react';
import { shallow } from 'enzyme';
import { CategoriesContainer } from './categories.container';

// Material-ui components
import { List } from 'material-ui/List';

// Component
import FloatAddButtonComponent from 'app/shared/buttons/float-add-button/float-add-button.component';

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
  
  describe('>>> Float add button', () => {
    let button;
    
    beforeEach(() => {
      button = wrapper.find(FloatAddButtonComponent);
    });
    
    it('+++ should be required to container', () => {
      expect(button.length).toEqual(1);
    });
    
    describe('>>> handleClickAction property', () => {
      let property;

      beforeEach(() => {
        property = button.prop('handleClickAction');
      });

      it('+++ should be defined', () => {
        expect(property).toBeDefined();
      });
      
      it('+++ should be a function', () => {
        expect(typeof property).toEqual('function');
      });
        
    });
      
  });
    
});