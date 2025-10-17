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
            <p>Headline: ${this.content?.headline}</p>
            <p>With setting: ${this.settings?.toggleSetting ? 'On' : 'Off'}</p>
        `;
    }

    static override styles = [
        css`
            :host {
                display: block;
                height: 100%;
                box-sizing: border-box;
                background-color: yellow;
                border-radius: 9px;
                padding: 12px;
            }
        `,
    ];
}

export default ExampleBlockCustomView;