---
path: "/components/alert"
date: "2018-22-05T11:45:00:000Z"
title: "Alert"
tags: ["component"]
comingSoon: false
---

Alert allows you to display messages to the user. It can be used to notify them of a change or display errors about the content they have entered. Alert comes with a wide variety of options to customise the theme and position.

#### Usage
```jsx
import { Alert } from 'builtin-react';

// Basic Usage
<Alert>Alert message or any HTML</Alert>

// Advanced Usage
<Alert
    positioned={true}
    position="top left"
    hasClose={true}
    onClose={() => alert('CLOSE ME')}
    theme={{
        alert: 'red'
    }}
    className="Custom Class Name"
>
Error Saving Data
</Alert>
```

#### Properties
| Name       | Type     | Default    | Description                                                                                                                    |
| --------   | -------  | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| positioned | boolean  | false      | To determine whether or not the alert box is positioned absolutely with CSS.                                                   |
| position   | string   | null       | Requires `positioned` to be set to **true**. Sets the CSS value to 0 for the following positions: `top` `left` `right` `bottom`. |
| hasClose   | boolean  | false      | Adds an 'x' to the right side of the alert.                                                                                    |
| onClose    | function | null       | Requires `hasClose` to be set to **true** This function is called when the 'x' is clicked. Use this to hide the alert using a state change.                              |
| className  | string   | null       | Custom class name to override CSS                                                                                              |
| theme      | object   | null       | Used to change the theme of the component                                                                                      |

***

#### Troubleshooting
1. If you have changed `hasClose` to **true** and the 'x' does not display, remember to pass in the `onClose` function. The Component will **NOT** itself.
2. Similar to `hasClose`. When you set `positioned` to **true**, remember to set `position`.