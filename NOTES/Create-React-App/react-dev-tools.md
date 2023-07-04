Certainly! Here are the code snippets to illustrate the concepts mentioned in the video:

1. Importing an image:
```javascript
import logo from './logo.svg';
import fakeLogo from './fakeLogo.svg';
import puppy from './puppy.jpg';
```
In the code snippets above, images are imported using the `import` statement. The file path of the image is provided, and the imported image is assigned to a variable (`logo`, `fakeLogo`, `puppy`). It's important to include the file extension in the import statement (`svg`, `jpg`) to ensure the correct file is referenced.

2. Using the imported image in JSX:
```javascript
<img src={fakeLogo} alt="Fake Logo" />
```
To display the imported image in JSX, the image path variable (`fakeLogo`) is used as the `src` attribute of the `img` tag. In this example, the `alt` attribute is also added for accessibility purposes.

These code snippets demonstrate how to import and use non-JavaScript files (images) in Create React App. The images are imported using the `import` statement, and the imported image paths are then used within JSX components.