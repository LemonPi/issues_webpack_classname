## Problem

webpack is mangling class names.

```javascript
export class Test {
    constructor() {
        this.test = 1;
    }
}

Test.name; // should be "Test", but is instead some mangled character like "n"
Test.prototype.constructor.name; // similar to above
```

Test this out with
```
npm run start
```

And use console to evaluate the expressions on the `lib` library.