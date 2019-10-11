# RedDom
Simple Dom maker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/project-simple-red-dom.png)](https://npmjs.org/package/project-simple-red-dom)

github - [here](https://github.com/project-simple/RedDom)

# Install 
#### npm 
```npm
npm install project-simple-red-dom --save-dev
```
```
import RedDom from 'project-simple-red-dom';
```
#### browser
```html
<script src="https://project-simple.github.io/RedDom/dist/RedDom.min.js"></script>
<script>
RedDom('div').S(
    'background','red',
    'html','hello RedDom',
     '<','body'
);
</script>
```

# API
## RedDom( target string or element )
- #### 4 ways to create a RedDom Instance
- by id
    ```html
    <div id="test-id"></div>
    ```
    ```javascript
    RedDom('#test-id'); // return RedDomCls instance
    ```
- by tag name
    ```javascript
    RedDom('div'); // create div element and return RedDomCls instance
    ```
- by html string
    ```javascript
    RedDom('<div style="color:red">test<div>'); // create html element and return RedDomCls instance
    ```
- by element
    ```javascript
    RedDom(document.createElement('div')); // return RedDomCls instance
    RedDom(document.querySelector('#test-id')); // return RedDomCls instance
    ```
## Set Dom Attribute 
- RedDom('input').S('@attributeName','targetValue'); 
    ```javascript
    RedDom('input').S( '@value','this is value' );
    ```
equal
    ```html
    <input value="this is value"></input>
    ```
## Get Dom Attribute 
- RedDom('input').S('@attributeName'); 

    ```javascript
    var t0 = RedDom('input').S( '@value','this is value' );
    console.log(t0.S('@value')) // this is value
    ```

## Set Dom style 
- RedDom('div').S('style name','targetValue'); 
    ```javascript
    RedDom('div').S( 'background','red' );
    ```
equal
    ```html
    <div style="background:red"></div>
    ```
## Get Dom style 
- RedDom('input').S('style name'); 
    ```javascript
    var t0 = RedDom('div').S( 'background','red' );
    console.log(t0.S('background')) // red
    ```

## TestCase
- MochaTest : [here](https://project-simple.github.io/RedDom/testRun_browser.html)
- TestBDD : [here](https://project-simple.github.io/RedDom/testBDD.html)
- Test Dom Events : [here](https://project-simple.github.io/RedDom/testDomEvents.html)
- Test Simple Container Method : [here](https://project-simple.github.io/RedDom/testContainerMethod.html)