import Alt from 'alt';
import Store from './store';
import Actions from './actions';

export default class extends Alt {
  constructor(config = {}) {
    super(config);
    this.addActions('testActions', Actions);
    this.addStore('testStore', Store);
 }
}
