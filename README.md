# HoosatUI
HoosatUI is a user interface library for React and SASS that provides a set of reusable UI components to quickly build beautiful and responsive user interfaces. First version was done with Tailwind, currently moving everything to use SASS and adding components and more readable code.

## Installation
You can install HoosatUI via npm:

```
npm install @tonto/hoosat-ui
```

Or via git submodule:

```
git submodule add https://github.com/TMKCodes/HoosatUI
```


## Usage
Import any component from HoosatUI and use it in your React application:

```
import React from 'react';
import { Button } from '@tonto/hoosat-ui';

const App = () => {
  return (
    <Button onClick={() => console.log('clicked!')}>Click me!</Button>
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