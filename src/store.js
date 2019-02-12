class cartStore {
  constructor() {
    this.subscribers = [];
    this.counter = 0;
  }

  subscribe($dom) {
    this.subscribers.push($dom);
  }

  dispatch(action) {
    switch (action.type) {
      case "INCREMENT":
        this.counter++;
        break;
      default:
        this.counter;
    }

    this.emit();
  }

  emit() {
    this.subscribers.forEach(el => (el.innerHTML = this.counter));
  }
}

export const cartCounter = new cartStore();
