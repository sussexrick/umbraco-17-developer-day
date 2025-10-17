export const manifests: Array<UmbExtensionManifest> = [
    {
        name: "Demo.Backoffice.Dashboard",
        alias: "Demo.Backoffice.Dashboard",
        type: "dashboard",
        js: () => import ("./elements/example-dashboard"),
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
    }
];