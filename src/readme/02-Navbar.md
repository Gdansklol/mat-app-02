## React JS Recipe APP Project | 02 Navbar

tutorial link: (https://www.youtube.com/watch?v=VA4Nlh-zkTg&list=PLBh9z20x5LUqfmToGINwM5GnDL9caB-Sn&index=3)


1. in the src create a new folder , components
2.  inside components, create Navebar.js

3. en CSS-regel för att deklarera variabler i :root-selektorn. 
 
 ```css
 :root {
    --background-color: #fff;         /* Bakgrundsfärg för hela sidan */
    --backgound-light: ##fff;         /* Detta ser ut som ett stavfel, bör vara --background-light: #fff; (en extra 'g' i 'background') */
    --shadow-color: rgba(0,0,0,0.2);  /* Färgen på skuggan med 20% opacitet */
    --primary-color: rgb(225,0,86);   /* Primärfärg används för betoning, här i form av en RGB-färgkod */
    --text-color: #0A0A0A;            /* Färgen på texten på sidan */
    --text-light: #575757;            /* En ljusare färg för text, kan användas för att skapa kontraster i designen */
    --font-size: 16px;                /* Standard fontstorlek för text på sidan */
    --animation-speed: 1;             /* Hastighetsfaktor för animeringar, 1 är normal hastighet */
}

 ```

### code block exemple

```js
function App() {
  return (
    <div className="App">
      Foodi Cruella 
    </div>
  );
}

export default App;

```
```scss
index.scss

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

 - använda dessa variabler för att sätta färger, skuggor, eller andra egenskaper i ditt dokument. Till exempel:

 ```css
 body {
    background-color: var(--background-color);
    color: var(--text-color);
    font-size: var(--font-size);
}

.header {
    box-shadow: 0 0 10px var(--shadow-color);
    color: var(--primary-color);
}

 ```
 - Här används variablerna från :root-selektorn för att sätta egenskaper för body- och .header-elementen. Detta ger en enhetlig och lätt underhållbar metod att ändra utseendet på hela webbplatsen genom att enbart justera värdena i :root-selektorn.

 -  update 
 ```js
 // basic function component

export default function Navbar() {
    return (
        <div className="navbar">
          <a href="#!">FoodiCruella</a>
        </div>  
    )
}
 ```
 ---

 ```css
 index.scss

 :root {
    --background-color: #fff;
    --backgound-light: ##fff;
    --shadow-color: rgba(0,0,0,0.2); /* The color of the shadow with 20% opacity */
    --primary-color:rgb(225,0,86); /* Primary color is used for emphasis, here in the form of an RGB color code */
    --text-color: #0A0A0A;
    --text-light: #575757; /* A lighter color for text, can be used to create contrasts in the design */
    --font-size: 16px;
    --animation-speed: 1; 
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.navbar {
    height: 3.4375rem; /* 55px / 16px = 3.4375rem */
    box-shadow: 0 3px 6px var(--shadow-color);
    background-color: var(--background-color);
    color: var(--text-color);
}
 ```

 > padding-inline:

padding-inline används för att sätta innermarginalen (padding) i den "inline" riktningen, vilket är horisontell riktning för text i de flesta västerländska skrivriktningar (till exempel från vänster till höger).
Om skrivriktningen är från vänster till höger, så kommer padding-inline att påverka vänster och höger padding.
Om skrivriktningen är från höger till vänster, så kommer padding-inline att påverka höger och vänster padding.
padding-block:

padding-block används för att sätta innermarginalen (padding) i den "block" riktningen, vilket är den vertikala riktningen oavsett skrivriktning.
Oavsett skrivriktning kommer padding-block att påverka över- och underkanten av elementet.

### Fonts google.com

link : (https://fonts.google.com/)

- version 1
```css
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

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: var(--font-size);
    font-family: 'Roboto', sans-serif;
}
 a{
    text-decoration: none;
 }
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

.container {
    padding-inline: 15vw;
}
```

## css logic
1. 1em corresponds to the size of the current font size of the specific element. In this case, the root font size is set to 16px (--font-size: 16px). So if we look at your example:

- css

.container {
     padding-inline: 15vw;
}

Here 15vw is used for padding-inline. Since vw stands for "viewport width" and 1vw corresponds to 1% of the width of the viewport (browser window), 15vw will be 15% of the width of the browser window.

If you want to convert 15vw to pixels, you can use the current font size in the calculation:

- css

.container {
     padding-inline: calc(15vw * 16); /* 15% of browser window width in pixels */
}

Here we multiply 15vw by 16px (root font size) to convert it to pixels. calc() is used to do the calculation. If the root font size changes, 15vw will adjust proportionally.

2. in the given example, where --font-size is set to 16px in the :root selector and the overall body font-size is set to var(--font-size), 1em equals 16px.

When you set **root-level font-size** and use **relative unit like 1em**, it will be based on the specified root-level font-size. So if --font-size is 16px, 1em will equal 16px in this context. It is important to note that 1em will change if you change the root font size.

- update css

```css
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

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: var(--font-size);
    font-family: 'Roboto', sans-serif;
}
 a{
    text-decoration: none;
 }
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
.nav-links{
    a{
        margin-left: 1em;
        color:var(--text-light);
        letter-spacing: 1px;
        text-transform: uppercase;
    }
   
}


.container {
    padding-inline: 15vw;
}
```

### use before element
1. Why ? 
2. when you hover on a links in Navbar
 we have any color underline 
3. how we can make that?
- we are going to use the before element

- & :: 
- it will basically target this one **& ::**
- content = an empty string , will have a
display of blocks, 
display: block;
and height:  10px;
width: 100%;
background-color: var(--primary-color);
// looks *vertically* a tag navBar 

* modify to a tags justering looks 
**horizontally**

- and then

```css
.nav-links{
    a{
        margin-left: 1em;
        color:var(--text-light);
        letter-spacing: 1px;
        text-transform: uppercase;
        position: relative;/* Positions the link relative to its normal flow in the document */

        &::before{
            content: ''; /* Adds an empty content for the pseudo-element (::before) */
            display:inline-block; /* Make it an inline block to be able to use dimensions */
            height: 5px; /* Sets the height of the shading band before the link */
            width: 100%; /* Sets the width to 100% to cover the entire width of the link */
            background-color: var(--primary-color); /* Sets the background color of the ribbon to var(--primary-color) */
            bottom: -10px; /* Moves the ribbon 10px up to create a shadow under the link */
            position: absolute; /* Positions the band absolutely relative to its nearest positioned parent */
            left: 0; /* Places the ribbon along the left edge of the link */
         
        }
    }
}
```
- update

- transform: scaleX(0);
so we will not be able to see them(pink underline bands in nav links)
- but we use &:hover{

} 
- &:hover{
    &::before{
        transform:scaleX(1);
    }
}

- hover on them then the before element should have
a transform of scal to 1. so get this underlins. 

- act, for some transition to transform and then
 for the transform duration instead of simply say
 0.5 second, 
 use the calc
- so animation speed is currently 1 so 0.5 times 1 is
still 0.5. namely animation speed will be 0.5
changes 0.2



- so we're also going to have **active**
- example

```js
export default function Navbar() {
    return (
        <div className="navbar container">
          <a href="#!" className="logo">F<span>oo</span>dCrown</a>
          <div className="nav-links">
            <a href="#!" className="active">Home</a>
            <a href="#!">Menu</a>
            <a href="#!">Gallery</a>
          </div>
        </div>  
    )
}
```
--
- to active text of Home link changes to primary-color when hover on 

```css
.nav-links{
    a{
        margin-left: 1em;
        color:var(--text-light);
        letter-spacing: 2px;
        text-transform: uppercase;
        position: relative;

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
        &:hover{
            &::before{
                transform: scaleX(1);
            }
        }
        &.active{
            color: var(--primary-color);
            font-weight: bold;
        }
    }
}
```

---

```js
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
   <Navbar />
    </div>
  );
}

export default App;

```
---
Navbar.js

```js
export default function Navbar() {
    return (
        <div className="navbar container">
          <a href="#!" className="logo">F<span>oo</span>dCrown</a>
          <div className="nav-links">
            <a href="#!">Home</a>
            <a href="#!">Menu</a>
            <a href="#!">Gallery</a>
          </div>
        </div>  
    )
}
```

index.scss

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

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-size: var(--font-size);
    font-family: 'Roboto', sans-serif;
}
 a{
    text-decoration: none;
 }
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
.nav-links{
    a{
        margin-left: 1em;
        color:var(--text-light);
        letter-spacing: 2px;
        text-transform: uppercase;
        position: relative;

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
        &:hover{
            &::before{
                transform: scaleX(1);
            }
        }
    }
}

.container {
    padding-inline: 15vw;
}
```







