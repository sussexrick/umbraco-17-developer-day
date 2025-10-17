import { LitElement as m, html as c, css as u, property as a, customElement as b } from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin as f } from "@umbraco-cms/backoffice/element-api";
var h = Object.defineProperty, d = Object.getOwnPropertyDescriptor, p = (n, o, s, r) => {
  for (var e = r > 1 ? void 0 : r ? d(o, s) : o, l = n.length - 1, i; l >= 0; l--)
    (i = n[l]) && (e = (r ? i(o, s, e) : i(e)) || e);
  return r && e && h(o, s, e), e;
};
let t = class extends f(m) {
  render() {
    return c`
            <h4>My Custom View</h4>
            <p>Headline: ${this.content?.headline}</p>
            <p>With setting: ${this.settings?.toggleSetting ? "On" : "Off"}</p>
        `;
  }
};
t.styles = [
  u`
            :host {
                display: block;
                height: 100%;
                box-sizing: border-box;
                background-color: yellow;
                border-radius: 9px;
                padding: 12px;
            }
        `
];
p([
  a({ attribute: !1 })
], t.prototype, "content", 2);
p([
  a({ attribute: !1 })
], t.prototype, "settings", 2);
t = p([
  b("example-block-custom-view")
], t);
const v = t;
export {
  t as ExampleBlockCustomView,
  v as default
};
//# sourceMappingURL=example-backoffice-view-B45RYwU-.js.map
