import { UmbElementMixin as n } from "@umbraco-cms/backoffice/element-api";
import { LitElement as p, html as c, customElement as d } from "@umbraco-cms/backoffice/external/lit";
var h = Object.getOwnPropertyDescriptor, u = (l, o, s, a) => {
  for (var e = a > 1 ? void 0 : a ? h(o, s) : o, r = l.length - 1, m; r >= 0; r--)
    (m = l[r]) && (e = m(e) || e);
  return e;
};
let t = class extends n(p) {
  constructor() {
    super();
  }
  render() {
    return c`<h1>Hello world</h1>`;
  }
};
t = u([
  d("example-dashboard")
], t);
const b = t;
export {
  t as ExampleDashboardElement,
  b as default
};
//# sourceMappingURL=example-dashboard-BcwKnwHf.js.map
