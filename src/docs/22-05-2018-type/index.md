---
path: "/elements/type"
date: "2018-22-05T11:41:00:000Z"
title: "Type"
tags: ["element"]
comingSoon: false
---

Type elements contain general elements to wrap content. Currently, only `Text` is available. `Text` works the same as a `<p>` tag.

#### Usage
```jsx
import { Text } from 'builtin-react'

<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

// Changing the color
<Text theme={{
    font: 'pink',
    fontSize: '21px'
}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
```

#### Properties
| Name      | Type    | Default    | Description                                |
| --------  | ------- | ---------- | ------------------------------------------ |
| className | string  | null       | Custom class name to override css          |
| theme     | object  | null       | Used to change the theme of the component  |