---
path: "/elements/pills"
date: "2018-22-05T11:40:00:000Z"
title: "Pills"
tags: ["element"]
---

Pills are useful for tagging items, for example, the tags of your blog posts. We provide you with two different types of pills, `<Pill>` and `<ButtonPill>`. Both work the same, however, `<ButtonPill>` will render as a `<button>` instead of a `<a>`. You can add any attributes to these elements including an override `theme` or additional class names.

#### Usage
```jsx
import { Pill, ButtonPill } from 'buitlin-react';

<Pill>Coming Soon</Pill>

// Using Override theme
<ButtonPill theme={{
    pillFill: 'blue',
    pillFont: 'white'
}}>Blue Pill</ButtonPill>
```

#### Properties
| Name      | Type    | Default    | Description                                |
| --------  | ------- | ---------- | ------------------------------------------ |
| className | string  | null       | Custom class name to override css          |
| theme     | object  | null       | Used to change the theme of the component  |