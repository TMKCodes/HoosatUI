# HoosatUI
HoosatUI is a user interface library for React made with CSS styling that provides set of reusable UI components to quickly build beautiful and responsive user interfaces.

## React installation

Create new React project.

```
npx create-react-app project_name --template typescript
```

Then you need to install few more dependancies to your React project since HoosatUI depends on react-markdown.

1. react-markdown
2. remark-gfm
3. rehype-highlight

```
npm install react-markdown remark-gfm rehype-highlight
```

Change directory to the React project src folder.
```
cd src
```

Install HoosatUI as git submodule in the src folder.

```
git submodule add https://github.com/hoosat-oy/HoosatUI
```

Then you can import HoosatUI components like this in your components.

```
import { Flex } from '../HoosatUI'; 
```


## Remix installation

Create new Remix project.

```
npx create-remix@latest
```

Change directory to the remix project after the project has been created.

```
cd project_name
```

Initialize Git for the project, since Remix npx script does not do it.

```
git init
```

Then you need to install few more dependancies to your Remix project since HoosatUI depends on react-markdown.

1. react-markdown
2. remark-gfm
3. rehype-highlight

```
npm install react-markdown remark-gfm rehype-highlight
```

Change directory to Remix project /app folder then install HoosatUI as
git submodule.

```
cd app && git submodule add https://github.com/hoosat-oy/HoosatUI
```

Since Remix has ESM only package problem and there is no other good solution, we must include everything to in the bundle.

So include serverDependanciesBundle in remix.config.js

```
module.exports = {
  serverDependenciesToBundle: [/.*/],
}
```

Then you can import HoosatUI components like this

```
import { Flex } from '../HoosatUI'; 
```

To use HoosatUI CSS you also must include Hoosat CSS in Remix
route components

```
import HoosatUICSS from '../HoosatUI/index.css';
export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: HoosatUICSS },
  ]
}
```


## Usage
Import any component from HoosatUI and use it in your React application:

```
import React from 'react';
import { Button } from '@tonto/hoosat-ui';

const App = () => {
  return (
    <Button onClick={() => if(process.env.NODE_ENV === "development") console.log('clicked!')}>Click me!</Button>
  );
}

export default App;
```

## Components
HoosatUI currently provides the following components:

### Form Elements
+ Button: A button element
+ Checkbox: A checkbox input
+ Combobox: A select input with an editable text input
+ Input: A text input
+ Label: A label for an input
+ Select: A select input
+ Option: An option for a select input
+ Textarea: A text area input

### Layout Elements
+ Flex: A container for creating flexible layouts with child elements
+ FlexItem: An item within a Flex container
+ Grid: A container for creating grid layouts with child elements
+ GridItem: An item within a Grid container

### Typography Elements
+ Heading: A heading element with options for h1 through h6
+ Paragraph: A paragraph element
+ List: A list element
+ ListItem: An item within a List

### Table Elements
+ Table: A table element
+ THead: A table head element
+ TBody: A table body element
+ Tr: A table row element
+ Th: A table header cell element
+ Td: A table data cell element

### Media elements
+ Source: A source element used within an Audio or Video
+ Video: A video element for playing video files
+ Image: An image element
+ ImageMap: An image map element
+ Audio: An audio element for playing audio files

### Miscellaneous Elements
+ Anchor: An anchor element for linking to another page or section within the same page
+ Area: An area element used within an ImageMap
+ Message: A message element for displaying information or feedback to the user
+ Modal: A modal element for displaying content in a layer over the rest of the page
+ ModalBody: The body of a modal element
+ ModalFooter: The footer of a modal element
+ ModalHeader: The header of a modal element

## Contributing
Contributions to HoosatUI are welcome! If you find a bug or have a feature request, please open an issue on GitHub. If you would like to contribute code, please open a pull request with your changes.

Please ensure that your code passes the existing tests and add new tests as appropriate.

## License
HoosatUI is licensed under the MIT License.