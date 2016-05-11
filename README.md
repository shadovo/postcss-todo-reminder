# PostCSS Todo-reminder

[PostCSS] plugin to add styling to elements with the data-todo attribute.
Include this in your dev enviroment to make it clear what is left to be done with no risk of releasing debug-css in production.

[PostCSS]: https://github.com/postcss/postcss

```css
/* Input example */
.foo {
  color: red;
}
.bar {
  color: blue;
}
```

```css
/* Output example */
.foo {
  color: red;
}
.bar {
  color: blue;
}
[data-todo] {
  outline: 2px dotted red;
}
```

## Usage

```js
postcss([ require('postcss-todo-reminder')({color: red}) ])
```
Will take any color allowed by css or default to `'orange'` if no other color is specified.

See [PostCSS] docs for examples for your environment.
