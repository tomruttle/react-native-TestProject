export default class testStore {
  _init() {
    this.items = [];
  }

  constructor() {
    this.bindActions(this.alt.actions.testActions);
    this.on('init', this._init);
  }

  onUpdate(items) {
    this.items = items;
  }
}
