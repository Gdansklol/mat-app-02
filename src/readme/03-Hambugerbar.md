##  03 Sidebar Icon 

- update sscc for sidebar-btn and bar

```js

```

```scss
.sidebar-btn{
    height: 28px;
    width:35px;
    // background-color:rgb(85, 0, 255);
    position: relative;
    .bar{
        border-radius: 5px;
        height: 6px;
        width: 100%;
        background-color: var(--text-color);
        position: absolute;
        &:nth-child(1){
            top:0;
        }
        &:nth-child(2){
            top:50%;
            transform:translateY(-50%);
        }
        &:nth-child(3){
            top:100%;
            transform:translateY(-100%);
        }
    }
}

```
- Hambuger sidebar UI scss
- upgrade version
```scss
.sidebar-btn{
    height: 28px;
    width:30px;
    position: relative;
    .bar{
        border-radius: 5px;
        height: 6px;
        width: 100%;
        background-color: var(--text-color);
        position: absolute;
        &:nth-child(1){
            top:0;
        }
        &:nth-child(2){
            top:50%;
            transform-origin: right;
            transform:scaleX(.8) translateY(-50%);
        }
        &:nth-child(3){
            top:100%;
            transform-origin: right;
            transform:scaleX(1.1) translateY(-100%);
        }
    }
}
```
- sidebar-btn active , X 
```js
 <div className="sidebar-btn active">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
```
- before changer placring *translate()*

```scss
 &.active{
        .bar{
            transform-origin: center;
            top:50%;
            &:nth-child(1){
                transform:scale(1)  rotate(45deg) translateY(0,-50%);
            }
            &:nth-child(2){
                transform:scaleX(0) translateY(-50%);
            }
            &:nth-child(3){
                transform:scale(1)   rotate(-45deg) translateY(0,-50%);
            }
        }
    }
}

```
- after changes for looks more clearer x
```scss
 }
    &.active{
        .bar{
            transform-origin: center;
            top:50%;
            &:nth-child(1){
                transform:translate(0,-50%) scale(1)  rotate(45deg) ;
            }
            &:nth-child(2){
                transform:scaleX(0) translateY(-50%);
            }
            &:nth-child(3){
                transform:translate(0,-50%) scale(1)   rotate(-45deg)   ;
            }
        }
    }
```

### @function 

Ex 

Learn more about scss functions : (https://sass-lang.com/documentation/at-rules/function/)

```scss
@function fibonacci($n) {
  $sequence: 0 1;
  @for $_ from 1 through $n {
    $new: nth($sequence, length($sequence)) + nth($sequence, length($sequence) - 1);
    $sequence: append($sequence, $new);
  }
  @return nth($sequence, length($sequence));
}

.sidebar {
  float: left;
  margin-left: fibonacci(4) * 1px;
}
```

- before use useState for maintain X state in Navbar

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
          <div className="sidebar-btn active">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
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

@function getAnimationDuration ($duration: number) {
    @return calc($duration * var(--animation-speed));
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
            // transition:transform calc(var(--animation-speed) * 0.2s) ease-in-out;
            transition:getAnimationDuration(.2s) ease-in-out;
        }
        &:hover{
            &::before{
                transform: scaleX(1);
            }
        }
        &.active{
            color: ver(--primary-color);
            font-weight: bold;
        }
    }
}
.sidebar-btn{
    height: 28px;
    width:30px;
    // background-color:rgb(85, 0, 255);
    position: relative;
    .bar{
        border-radius: 5px;
        height: 6px;
        width: 100%;
        background-color: var(--text-color);
        position: absolute;
        transition: transform getAnimationDuration(.5s);

        &:nth-child(1){
            top:0;
        }
        &:nth-child(2){
            top:50%;
            transform-origin: right;
            transform:scaleX(.8) translateY(-50%);
        }
        &:nth-child(3){
            top:100%;
            transform-origin: right;
            transform:scaleX(1.1) translateY(-100%);
        }
    }
    &.active{
        .bar{
            transform-origin: center;
            top:50%;
            &:nth-child(1){
                transform:translate(0,-50%) scale(1)  rotate(45deg) ;
            }
            &:nth-child(2){
                transform:scaleX(0) translateY(-50%);
            }
            &:nth-child(3){
                transform:translate(0,-50%) scale(1)   rotate(-45deg)   ;
            }
        }
    }
}

.container {
    padding-inline: 15vw;
}
```

### useState
- use UseState for active or not for showSidebar 

```js
export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState();



return(

 <div onClick={()=> setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>


)
```

- How can sidbar icons unvisible i desktop version 
 - in the scss, 
 Ex: 
 unvisible
 ```scss
  display: none;
 ```

 - visible
 ```scss
   display: block;
 ```

- and use 
```scss
@media screen and (max-width:768px){

}
```

***

- update scss so far

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

@function getAnimationDuration ($duration: number) {
    @return calc($duration * var(--animation-speed));
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
            // transition:transform calc(var(--animation-speed) * 0.2s) ease-in-out;
            transition:getAnimationDuration(.2s) ease-in-out;
        }
        &:hover{
            &::before{
                transform: scaleX(1);
            }
        }
        &.active{
            color: ver(--primary-color);
            font-weight: bold;
        }
    }
}
.sidebar-btn{
    height: 28px;
    width:30px;
    // background-color:rgb(85, 0, 255);
    position: relative;
    display: none;
    .bar{
        border-radius: 5px;
        height: 6px;
        width: 100%;
        background-color: var(--text-color);
        position: absolute;
        transition: transform getAnimationDuration(.5s);

        &:nth-child(1){
            top:0;
        }
        &:nth-child(2){
            top:50%;
            transform-origin: right;
            transform:scaleX(.8) translateY(-50%);
        }
        &:nth-child(3){
            top:100%;
            transform-origin: right;
            transform:scaleX(1.1) translateY(-100%);
        }
    }
    &.active{
        .bar{
            transform-origin: center;
            top:50%;
            &:nth-child(1){
                transform:translate(0,-50%) scale(1)  rotate(45deg) ;
            }
            &:nth-child(2){
                transform:scaleX(0) translateY(-50%);
            }
            &:nth-child(3){
                transform:translate(0,-50%) scale(1)   rotate(-45deg)   ;
            }
        }
    }
}

.container {
    padding-inline: 15vw;
}

@media screen and (max-width:768px) {
    .navbar {
        // .logo{
        //     font-size: 1.2em;
        // }
    .nav-links {
        display: none;
    }
    .sidebar-btn {
        display: block;
    }
    }
}
```
- update Navbar.js so far
```js
// basic function component

import {useState} from "react";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState();

    return (
       <div className="navbar container">
          <a href="#!" className="logo">F<span>oo</span>dCrown</a>
          <div className="nav-links">
            <a href="#!">Home</a>
            <a href="#!">Menu</a>
            <a href="#!">Gallery</a>
          </div>
          <div onClick={()=> setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
       </div>  
    )
}
```
- App.js
```js
mport Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
   <Navbar />
    </div>
  );
}

export default App;

```