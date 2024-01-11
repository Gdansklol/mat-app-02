#### QnA about scss

1. what's the difference 

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
        span
         color: var(--text-color);
        }
     }
     .nav-links{
         a{
             margin-left: 1em;
         }
       
     }
}
```
 and 

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
        span
         color: var(--text-color);
        }
     }
    
}
.nav-links{
     a{
         margin-left: 1em;
     }
   
}
 ```

 ### Answer

 - The main difference between these two blocks of code is how .nav-links and its inner a elements are structured relative to .navbars.

1. In the first block of code:

- Here, .nav-links are part of .navbar. This means that all a-elements within .nav-links will have styles that apply only when they are inside an element with the .navbar class.
 
2. In the second block of code:

- Here, .nav-links are not part of .navbar. This means that its stylesheets apply regardless of whether there is an element with the class .navbar around the .nav-links or not. This allows for a more modular and reusable structure. If you have multiple elements that have .nav links, you can apply the same styles without having to repeat them within a parent .navbar.

- Either approach can be useful depending on how you structure your HTML and how you want to organize your CSS.

