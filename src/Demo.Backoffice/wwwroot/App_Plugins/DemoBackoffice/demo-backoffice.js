const a = [
  {
    name: "Demo Backoffice Dashboard",
    alias: "Demo.Backoffice.Dashboard",
    type: "dashboard",
    js: () => import("./example-dashboard-zaeyBlQR.js"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  },
  {
    name: "Demo Backoffice Workspace View",
    alias: "Demo.Backoffice.WorkspaceView",
    type: "workspaceView",
    js: () => import("./example-workspace-view-CndmaHwi.js"),
    meta: {
      label: "Demo",
      icon: "icon-users",
      pathname: "demo"
    },
    conditions: [
      {
        alias: "Umb.Condition.WorkspaceAlias",
        match: "Umb.Workspace.User"
      }
    ]
  }
];
export {
  a as manifests
};
//# sourceMappingURL=demo-backoffice.js.map
