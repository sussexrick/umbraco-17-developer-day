import { LitElement as _, repeat as v, html as n, state as d, customElement as m } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as y } from "@umbraco-cms/backoffice/element-api";
import { umbHttpClient as f } from "@umbraco-cms/backoffice/http-client";
import { UMB_CURRENT_USER_CONTEXT as E } from "@umbraco-cms/backoffice/current-user";
var w = Object.defineProperty, U = Object.getOwnPropertyDescriptor, b = (e) => {
  throw TypeError(e);
}, h = (e, t, r, u) => {
  for (var a = u > 1 ? void 0 : u ? U(t, r) : t, s = e.length - 1, c; s >= 0; s--)
    (c = e[s]) && (a = (u ? c(t, r, a) : c(a)) || a);
  return u && a && w(t, r, a), a;
}, g = (e, t, r) => t.has(e) || b("Cannot " + r), x = (e, t, r) => t.has(e) ? b("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), p = (e, t, r) => (g(e, t, "access private method"), r), l, o;
class D {
}
let i = class extends y(_) {
  constructor() {
    super(), x(this, l), this.consumeContext(E, (e) => {
      this._observeCurrentUser(e), p(this, l, o).call(this);
    });
  }
  async _observeCurrentUser(e) {
    this.observe(e.currentUser, (t) => {
      this._currentUser = t;
    });
  }
  renderTable() {
    return n`<uui-table>
      <uui-table-head>
        <uui-table-head-cell>Action</uui-table-head-cell>
        <uui-table-head-cell>Entity type</uui-table-head-cell>
        <uui-table-head-cell>Date</uui-table-head-cell>
      </uui-table-head>
      ${v(
      this._userActivity,
      (e) => e.key,
      (e) => n`<uui-table-row>
            <uui-table-cell>${e.auditType}</uui-table-cell>
            <uui-table-cell>${e.entityType}</uui-table-cell>
            <uui-table-cell>${new Date(e.createDate).toLocaleString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" })}</uui-table-cell>
          </uui-table-row>`
    )}
    </uui-table>`;
  }
  render() {
    return n`
      <uui-box headline="User Activity">
        ${this._userActivity.length ? this.renderTable() : "No activity to show"}
        <uui-button look="secondary" @click=${p(this, l, o)}>Refresh</uui-button>
      </uui-box>
    `;
  }
};
l = /* @__PURE__ */ new WeakSet();
o = async function() {
  const { data: e } = await f.get(
    {
      security: [
        {
          type: "http",
          scheme: "bearer"
        }
      ],
      url: `/umbraco/management/api/v1/user-activity/${this._currentUser?.unique}`
    }
  );
  e && (this._userActivity = e);
};
h([
  d()
], i.prototype, "_userActivity", 2);
h([
  d()
], i.prototype, "_currentUser", 2);
i = h([
  m("example-workspace-view")
], i);
const k = i;
export {
  i as ExampleWorkspaceViewElement,
  D as UserActivity,
  k as default
};
//# sourceMappingURL=example-workspace-view-CndmaHwi.js.map
