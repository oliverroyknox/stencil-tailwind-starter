import { r as registerInstance, h } from './index-2ab96984.js';

let AppProfile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  normalize(name) {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }
  render() {
    if (this.match && this.match.params.name) {
      return (h("div", { class: "p-3" }, h("p", { class: "my-4" }, "Hello! My name is ", this.normalize(this.match.params.name), ". My name was passed in through a route param!")));
    }
  }
};

export { AppProfile as app_profile };
