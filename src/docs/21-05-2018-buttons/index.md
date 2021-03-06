---
path: "/elements/buttons"
date: "2018-18-05T19:00:00:000Z"
title: "Buttons"
tags: ["element"]
---

Buttons are a great way to get a users attention. We provide you with two different types of buttons, `<Button>` and `<ButtonLink>`. Both work the same, however, `<ButtonLink>` will render as a `<a>` instead of a `<button>`. You can add any attributes to these elements including an override `theme` or additional class names.

#### Usage
```jsx
import { Button, ButtonLink } from 'builtin-react'

<Button>Sign Up</Button>

// Override theme
const theme = {
    buttonFill: '#EB1244',
    buttonFont: 'white',
    fontSize: '16px'
};
<ButtonLink 
    href="https://www.builtin-react.com/" 
    theme={theme}
>Customised Button</ButtonLink>
```

#### Properties
| Name      | Type    | Default    | Description                                |
| --------  | ------- | ---------- | ------------------------------------------ |
| className | string  | null       | Custom class name to override css          |
| theme     | object  | null       | Used to change the theme of the component  |