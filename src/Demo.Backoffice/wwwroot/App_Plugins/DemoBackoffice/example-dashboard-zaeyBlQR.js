import { LitElement as m, html as l, css as p, state as c, customElement as h } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as _ } from "@umbraco-cms/backoffice/element-api";
import { UMB_CURRENT_USER_CONTEXT as b } from "@umbraco-cms/backoffice/current-user";
var d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, a = (s, r, u, o) => {
  for (var e = o > 1 ? void 0 : o ? f(r, u) : r, i = s.length - 1, n; i >= 0; i--)
    (n = s[i]) && (e = (o ? n(r, u, e) : n(e)) || e);
  return o && e && d(r, u, e), e;
};
let t = class extends _(m) {
  constructor() {
    super(), this.consumeContext(b, (s) => {
      this.observe(
        s?.currentUser,
        (r) => {
          this._currentUser = r;
        }
      );
    });
  }
  render() {
    return l`
      <uui-box headline="Ahoy, ${this._currentUser?.name}!">
        <p>
          <uui-icon name="icon-message"></uui-icon> ${this._currentUser?.userName}
        </p>
        <p>
          <uui-icon name="icon-globe"></uui-icon> ${this._currentUser?.languageIsoCode}
        </p>
      </uui-box>
    `;
  }
};
t.styles = [
  p`
      :host {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--uui-size-layout-1);
        padding: var(--uui-size-layout-1);
      }

      uui-box {
        margin-bottom: var(--uui-size-layout-1);
      }

      h2 {
        margin-top: 0;
      }
    `
];
a([
  c()
], t.prototype, "_currentUser", 2);
t = a([
  h("example-dashboard")
], t);
const E = t;
export {
  t as ExampleDashboardElement,
  E as default
};
//# sourceMappingURL=example-dashboard-zaeyBlQR.js.map
