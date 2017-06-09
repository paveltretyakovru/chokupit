// Material-ui components
import AllInclusiveIcon from 'material-ui/svg-icons/places/all-inclusive';

export const iconSwitcher = (name) => {

  switch(name) {
  
  case 'all':
    return AllInclusiveIcon;

  default:
    return null;
  }

}