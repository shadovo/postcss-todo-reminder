# PostCSS Todo-reminder [![Build Status](https://travis-ci.org/shadovo/postcss-todo-reminder.svg?branch=master)](https://travis-ci.org/shadovo/postcss-todo-reminder)

[PostCSS] plugin to add styling to elements with the data-todo attribute.
Include this in your dev environment to make it clear what is left to be done
with no risk of releasing debug-css in production.

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

```html
<!-- Usage in your HTML -->
<p data-todo>
  The old copy that needs to be updated
</p>
```

Will take any color allowed by css or default to `'orange'` if no other color
is specified.

See [PostCSS] docs for examples for your environment.

## Background
This is a tool that we used during our last refactoring of our site.

We started by putting `data-todo` attributes on all elements that were going to
change. We then added this plugin to our postcss in out dev environment build
scripts (only dev environment, **not production**) and the result was that we
could clearly see what we had left to update with the new code while continuing
to release with confident that the todo-styling wouldn't be visible in
production.

## Credit
I would like to thank
- [powerbuoy](https://github.com/powerbuoy) for the idea of
the data-todo attribute.
- [henhan](https://github.com/henhan) for the feedback to create it as a
postcss plugin.
- [iamvdo/postcss-opacity](https://github.com/iamvdo/postcss-opacity) from
which most of this projects structure is modeled after.
