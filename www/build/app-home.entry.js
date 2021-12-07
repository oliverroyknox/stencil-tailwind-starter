import { r as registerInstance, h } from './index-2ab96984.js';

let AppHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "p-3" }, h("p", { class: "my-4" }, "Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on", ' ', h("a", { href: "https://stenciljs.com" }, "stenciljs.com"), " to get started."), h("stencil-route-link", { class: "group inline-block transform hover:translate-y-1 transition-all", url: "/profile/stencil" }, h("button", { class: "bg-purple-700 text-white m-2 text-sm font-bold tracking-wider uppercase py-4 px-5 border-none rounded-sm outline-none shadow-lg cursor-pointer group-hover:shadow-md transition-all" }, "Profile page"))));
  }
};

export { AppHome as app_home };
