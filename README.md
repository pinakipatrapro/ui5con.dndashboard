## **UI5 custom library** `ui5-cc-dndashboard`

[![Build](https://github.com/pinakipatrapro/ui5con.dndashboard/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/pinakipatrapro/ui5con.dndashboard/actions/workflows/node.js.yml) [![DeepScan grade](https://deepscan.io/api/teams/15402/projects/21418/branches/614234/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=15402&pid=21418&bid=614234)

> **DISCLAIMER**: This is a community project and there is no official support for this package! Also the functionality may stop working at any time in future with newer versions of the UI5 tooling!

![image](https://user-images.githubusercontent.com/32954893/177071441-22e53f41-6286-4122-927f-e37cae3e1ba7.gif)



### Sample Application

[Custom Dashboard](https://github.com/pinakipatrapro/ui5.con.myDashboard)

[Step-by-Step Guide](https://gist.github.com/pinakipatrapro/db95b037849f869f8592f4282e32d415)

[JSDoc](https://pinakipatrapro.github.io/ui5con.dndashboard/ui5-cc-dndashboard.Dashboard.html)

### **What is it?**

This package contains a UI5 Custom Control Library which enables the creation of _**Drag and Drop Dashboards**_ in UI5. This is fully configurable to include any UI5 controls or third party controls. This library primarily consists of 4 controls:

1.  [ui5-cc-dndashboard.**Dashboard**](https://pinakipatrapro.github.io/ui5con.dndashboard/ui5-cc-dndashboard.Dashboard.html) **: T**he ui5-cc-dndashboard.Dashboard is a container control that holds the dashboard . The Dashboard accepts aggregation `tiles` of type, `ui5-cc-dndashboard.DashboardTile` which is the draggable component.
2.  [ui5-cc-dndashboard.**DashboardTile**](https://pinakipatrapro.github.io/ui5con.dndashboard/ui5-cc-dndashboard.DashboardTile.html) **:** The draggable and resizable component which accepts aggregation content of type `sap.ui.core.Control`
3.  ui5-cc-dndashboard.**DashboardChart :** Contains the charting library which can create different chart types (Using ToastUI)
4.  ui5-cc-dndashboard.**FunnelChart:** Creates funnel chart


---

### **Install**

```plaintext
npm i ui5-cc-dndashboard --save-dev
```

\*\*ui5-tooling-modules \*\* is a pre-requisite which allows us to use NPM package names for AMD-like dependencies. More details [**here**](https://www.npmjs.com/package/ui5-tooling-modules)

---

### **Usage**

**package.json**

```plaintext
{
  ...
  "devDependencies": {
    ...,
    "ui5-cc-dndashboard": "*",
    "ui5-tooling-modules": "*"
  },
  "ui5": {
    "dependencies": [
      "ui5-tooling-modules"
    ]
  }
}
```

**ui5.yaml**

```plaintext
specVersion: "2.2"
...
builder:
  customTasks:
  - name: ui5-tooling-modules-task
    afterTask: replaceVersion

server:
  customMiddleware:
    ...
    - name: ui5-tooling-modules-middleware
      afterMiddleware: compression
```

**…view.xml**

```xml
<mvc:View controllerName=...
    xmlns:dnd="ui5-cc-dndashboard">
    <Page ...>
        <dnd:Dashboard class="sapUiSmallMargin" height="80vh"
            tiles="{
                path:'/tiles',
                ...
            }"
        >
            <dnd:header>
                <Toolbar>
                    <Title text="Chart Showcase"/>
                    <ToolbarSpacer/>
                    <Button icon="sap-icon://edit" text="Edit Dashboard" press="editDashboard"/>
                    <Button icon="sap-icon://refresh" text="Randomize Color" press="randomizeColor"/>
                </Toolbar>    
            </dnd:header>
        </dnd:Dashboard>
    </Page>
</mvc:View>
```

---

### [Documentation](https://pinakipatrapro.github.io/ui5con.dndashboard/ui5-cc-dndashboard.html)      [![pages-build-deployment](https://github.com/pinakipatrapro/ui5con.dndashboard/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main)](https://github.com/pinakipatrapro/ui5con.dndashboard/actions/workflows/pages/pages-build-deployment)

---

### Issues

[Issues · pinakipatrapro/ui5con.dndashboard (github.com)](https://github.com/pinakipatrapro/ui5con.dndashboard/issues)
