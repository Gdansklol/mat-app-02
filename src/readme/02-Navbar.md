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