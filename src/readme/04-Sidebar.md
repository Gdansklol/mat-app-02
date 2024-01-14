# Sidebar of left side

1. create a new component
- new file inside components
call it Sidebar.js

```js
export default function Sidebar() {
    return (
        <div className="sidebar">
            sidebar
        </div>
    )
}
```
- import Sidebar component in Navbar.js

```js
import Sidebar from "./Sidebar";


return (
    <>

      <Sidebar />
       </>
    </>
)
```

