import {
  LitElement,
  html,
  customElement,
  state,
  repeat
} from "@umbraco-cms/backoffice/external/lit";
import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { umbHttpClient } from '@umbraco-cms/backoffice/http-client';
import { type UmbCurrentUserModel, UMB_CURRENT_USER_CONTEXT } from "@umbraco-cms/backoffice/current-user";

export class UserActivity {
  key?: string
  auditType?: string
  entityType?: string
  comment?: string
  createDate?: Date
}

@customElement("example-workspace-view")
export class ExampleWorkspaceViewElement extends UmbElementMixin(LitElement) {

  @state()
  private _userActivity!: UserActivity[];

@state()
private _currentUser?: UmbCurrentUserModel;

  constructor() {
      super();
      this.consumeContext(UMB_CURRENT_USER_CONTEXT, (instance) => {
        this._observeCurrentUser(instance!);
        this.#getData();
    });

  }
  
    private async _observeCurrentUser(instance: typeof UMB_CURRENT_USER_CONTEXT.TYPE) {
    this.observe(instance.currentUser, (currentUser) => {
        this._currentUser = currentUser;
    });
  }

  async #getData() {
    const { data } = await umbHttpClient.get<UserActivity[]>(
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

    if (data) {
      this._userActivity = data;
    }
  }

  renderTable() {
    return html`<uui-table>
      <uui-table-head>
        <uui-table-head-cell>Action</uui-table-head-cell>
        <uui-table-head-cell>Entity type</uui-table-head-cell>
        <uui-table-head-cell>Date</uui-table-head-cell>
      </uui-table-head>
      ${repeat(
        this._userActivity,
        (item) => item.key,
        (item) => html`<uui-table-row>
            <uui-table-cell>${item.auditType}</uui-table-cell>
            <uui-table-cell>${item.entityType}</uui-table-cell>
            <uui-table-cell>${new Date(item.createDate!).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</uui-table-cell>
          </uui-table-row>`
      )}
    </uui-table>`;
  }

  render() {
    return html`
      <uui-box headline="User Activity">
        ${this._userActivity.length ? this.renderTable() : 'No activity to show'}
        <uui-button look="secondary" @click=${this.#getData}>Refresh</uui-button>
      </uui-box>
    `;
  }
}

export default ExampleWorkspaceViewElement;

declare global {
  interface HTMLElementTagNameMap {
    "example-workspace-view": ExampleWorkspaceViewElement;
  }
}