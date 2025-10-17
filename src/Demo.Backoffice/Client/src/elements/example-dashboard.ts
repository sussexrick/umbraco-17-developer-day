import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, customElement } from "@umbraco-cms/backoffice/external/lit";

@customElement("example-dashboard")
export class ExampleDashboardElement extends UmbElementMixin(LitElement) {
    constructor() {
        super();
    }

    render() {
        return html`<h1>Hello world</h1>`;
    }
}

export default ExampleDashboardElement;

declare global {
    interface HtmlElementTagNameMap {
        "example-dashboard": ExampleDashboardElement;
    }
}