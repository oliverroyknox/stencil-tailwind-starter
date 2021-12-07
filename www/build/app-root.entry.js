import { r as registerInstance, h } from './index-2ab96984.js';

let AppRoot = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", null, h("header", { class: "bg-purple-700 text-white h-14 flex items-center shadow" }, h("h1", { class: "text-2xl font-medium p-3" }, "Stencil App Starter")), h("main", null, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: "/", component: "app-home", exact: true }), h("stencil-route", { url: "/profile/:name", component: "app-profile" }))))));
  }
};

export { AppRoot as app_root };
