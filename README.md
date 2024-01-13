# React JS Food - Recipe APP Project  | 01 Setup

### Install and instructions

Git clone + repo address

1. npx create-react-app .

2. cd folder name

3. mat-app-02 git:(main) ✗ npm i react-router-dom

4. npm i sass

### React fontawesome

link:(https://fontawesome.com/v5/docs/web/use-with/react)

1. Get started

```bash
npm i --save @fortawesome/fontawesome-svg-core
# npm install --save @fortawesome/free-solid-svg-icons
npm i @fortawesome/free-brands-svg-icons
npm install --save @fortawesome/react-fontawesome

yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome
```
   
###  create styles folder inside src
1. and create index.scss , styles/index.scss

## why scss is preferred over css?
- People often prefer SCSS (Sassy CSS) over regular CSS for several reasons:

1. Variables: SCSS allows the use of variables, making it possible to easily define and reuse values. This can make the code more maintainable and flexible.

- Examples of SCSS variables:

```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

.button {
    background-color: $primary-color;
    color: $secondary-color;
}

```
2. Nesting: SCSS allows nesting of selectors, which can make the code more structured and easy to read.

```scss
 .navbar {
    height: 55px ; /* 55px / 16px = 3.4375rem */
    box-shadow: 0 3px 6px var(--shadow-color);
    background-color: var(--background-color);
    color: var(--text-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
       font-size: 1.5em;
       font-weight: bold;
       color: var(--primary-color);
       text-shadow: 0 1px 3px var(--shadow-color);
       span{
        color: var(--text-color);
       }
    }
    
}
```

```scss
nav {
    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li { display: inline-block; }

        a {
            text-decoration: none;

            &:hover { border-bottom: 1px solid #ccc; }
        }
    }
}

```
3. Mixins and Extends: SCSS introduces mixins and extend functionalities that make it possible to reuse and organize code in an efficient way.

Example SCSS mixin:

```scss
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    @include flex-center;
    background-color: #f0f0f0;
}

```

4. Partials and Imports: SCSS lets you break down your style into smaller, modular files called partials. This can make the code more organized and easy to maintain.

Examples of SCSS partials and imports:

```scss
// _variables.scss
$primary-color: #3498db;

// main.scss
@import 'variables';

body {
    background-color: $primary-color;
}

```

5. Logic and Functions: SCSS has some built-in logic and functions, which can be useful for performing calculations or processing data directly in the style sheet.

Ex

```scss

:root {
    --background-color: #fff;
    --backgound-light: #fff;
    --shadow-color: rgba(0,0,0,0.2); /* The color of the shadow with 20% opacity */
    --primary-color:rgb(225,0,86); /* Primary color is used for emphasis, here in the form of an RGB color code */
    --text-color: #0A0A0A;
    --text-light: #575757; /* A lighter color for text, can be used to create contrasts in the design */
    --font-size: 16px;
    --animation-speed: 1; 
}


   &::before{
            content: '';
            display:inline-block;
            height: 3px;
            width: 100%;
            background-color: var(--primary-color);
            bottom: -5px;
            position: absolute;
            left: 0; 
            transform: scaleX(0);
            transition:transform calc(var(--animation-speed) * 0.2s) ease-in-out;
        }
```
6. Simpler and More Readable Syntax: Many people find SCSS's syntax to be more readable and less repetitive than regular CSS.

> Summary and Benefits> SCSS offers many benefits for writing and maintaining style sheets, and its features allow you to create more powerful and reusable code.

> Disadvantages > However, it is important to note that SCSS must be compiled to plain CSS for the browser to understand and apply the styles. There are tools and build tools like gulp, grunt, or webpack that can handle this compilation as part of the development process.


- studying with clone code with tutor's description of the code.

- "Don't forget to take breaks while watching the video. Try to understand the code and consolidate it without looking at the code."

- reference link : ( https://www.youtube.com/watch?v=uQoI13yNPzA)