import { html, customElement, LitElement, property, css } from '@umbraco-cms/backoffice/external/lit';
import { UmbElementMixin } from '@umbraco-cms/backoffice/element-api';
import type { UmbBlockEditorCustomViewElement } from '@umbraco-cms/backoffice/block-custom-view';
import type { UmbBlockDataType } from '@umbraco-cms/backoffice/block';

interface IMyBlockContent extends UmbBlockDataType {
    headline: string;
}

interface IMyBlockSettings extends UmbBlockDataType {
    toggleSetting: boolean;
}


@customElement('example-block-custom-view')
export class ExampleBlockCustomView extends UmbElementMixin(LitElement) implements UmbBlockEditorCustomViewElement {

    @property({ attribute: false })
    content?: IMyBlockContent;

    @property({ attribute: false })
    settings?: IMyBlockSettings;

    override render() {
        return html`
            <h4>My Custom View</h4>
            <p>Product name: ${this.content?.productName}</p>
            <p>Available: ${this.settings?.available ? 'On' : 'Off'}</p>
        `;
    }

    static override styles = [
        css`
            :host {
                display: block;
                height: 100%;
                box-sizing: border-box;
                background-color: palegoldenrod;
                border-radius: 9px;
                padding: 12px;
            }
        `,
    ];
}

export default ExampleBlockCustomView;