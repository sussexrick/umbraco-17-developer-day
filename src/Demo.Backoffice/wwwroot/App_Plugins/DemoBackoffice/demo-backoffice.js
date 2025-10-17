const o = [
  {
    name: "Demo.Backoffice.Dashboard",
    alias: "Demo.Backoffice.Dashboard",
    type: "dashboard",
    js: () => import("./example-dashboard-BcwKnwHf.js"),
    meta: {
      label: "Example dashboard",
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
    type: "blockEditorCustomView",
    alias: "Example.blockEditorCustomView.Product",
    name: "Example Block Editor Custom View for Product Block of Block List Editors",
    element: () => import("./example-backoffice-view-B45RYwU-.js"),
    forContentTypeAlias: "product",
    forBlockEditor: "block-list"
  }
];
export {
  o as manifests
};
//# sourceMappingURL=demo-backoffice.js.map
