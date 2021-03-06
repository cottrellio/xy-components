import Component from '@ember/component';
import layout from './template';
import styles from './styles';

export default Component.extend({

  layout,
  styles,
  localClassNames: 'drawer',
  localClassNameBindings: ['isOpen:open', 'isRight:right:left'],

  isOpen: false,
  isRight: false,

});
