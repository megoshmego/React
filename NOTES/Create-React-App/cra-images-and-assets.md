Certainly! Here are code snippets to illustrate the concepts mentioned in the video:

1. Importing an image:
```javascript
import fakeLogo from './fakeLogo.svg'; // Importing an image file (SVG in this case)
```

2. Importing a stylesheet:
```javascript
import './app.css'; // Importing a CSS stylesheet
```

3. Using the imported image:
```javascript
const App = () => {
  return (
    <div>
      <img src={fakeLogo} alt="Fake Logo" width={200} /> {/* Using the imported image */}
    </div>
  );
};
```

4. Using the imported stylesheet:
```javascript
const App = () => {
  return (
    <div className="app">
      {/* JSX code */}
    </div>
  );
};
```
Note: In the code snippet above, the `app` class is automatically applied to the parent `div` due to the imported stylesheet.

5. Organizing assets and images:
The video mentions that you can organize your assets in a separate folder within the source directory. For example, you can create a `logos` folder and place your logo files inside it. Then, when importing the image, you would provide the correct relative path based on the file's location.

Please note that the code snippets provided are based on the context provided in the video script. The actual file structure and code implementation may vary depending on the specific project setup and preferences.