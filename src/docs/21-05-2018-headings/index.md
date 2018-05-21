---
path: "/elements/headings"
date: "2018-18-05T14:44:00:000Z"
title: "Headings"
---

Use headings to separate sections of your page. Currently `builtin-react` supports four heading types. It functions the same as a normal `<h*>` tag. It supports two optional `props` to allow for customisation and theming.

#### Usage
```jsx
import { H1, H2, H3, H4 } from 'builtin-react'

<H1>Include your title here</H1>

// Override theme
const theme = {
    heading: '#EB1244'
};
<H2 theme={theme}>With Override theme</H2>
```

#### Properties
| Name      | Type    | Default    | Description                                |
| --------  | ------- | ---------- | ------------------------------------------ |
| className | string  | null       | Custom class name to override css          |
| theme     | object  | null       | Used to override the colour of the heading |