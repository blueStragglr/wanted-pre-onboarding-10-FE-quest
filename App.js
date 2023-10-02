import Page1 from "./Pages/Page1.js";
import Page2 from "./Pages/Page2.js";
import { init } from "./route/route.js";

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    $target.innerHTML = ``;

    console.log(pathname);

    const page1route = ["/index.html", "/page1", "/"];
    const page2route = ["/page2"];
    if (page1route.includes(pathname)) {
      new Page1({ $target, initialState: {} }).render();
    } else if (page2route.includes(pathname)) {
      new Page2({ $target, initialState: {} }).render();
    }
  };

  init(this.route);

  this.route();
}
