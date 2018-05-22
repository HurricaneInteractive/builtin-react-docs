---
path: "/elements/structure"
date: "2018-22-05T11:43:00:000Z"
title: "Structure"
tags: ["element"]
---

Structure elements provide you with items to space / block out your application. `Box` wraps the content in a 15px padding, 1px border. `Separator` can be used to separate sections, similar to a `<hr />`.

#### Usage - Box
```jsx
import { Box } from 'builtin-react'

<Box>Additional Content, any component or HTML can go here</Box>

// With override theme - will change the border colour
<Box theme={{ lightGrey: 'red' }} />
```

#### Properties
| Name      | Type    | Default    | Description                                |
| --------  | ------- | ---------- | ------------------------------------------ |
| className | string  | null       | Custom class name to override css          |
| theme     | object  | null       | Used to change the theme of the component  |

***

#### Usage - Separator
```jsx
import { Separator } from 'builtin-react'

<Separator />

// With override theme - will change the colour of the line
<Separator theme={{ lightGrey: 'blue' }} />
```

#### Properties
| Name      | Type    | Default    | Description                                |
| --------  | ------- | ---------- | ------------------------------------------ |
| className | string  | null       | Custom class name to override css          |
| theme     | object  | null       | Used to change the theme of the component  |