# Syntax for Net

Here's an example event handler. It listens for an `event` (data) from the server and executes a callback when it receives data of the specified type.
```js
conn.on("event name", () => {
  // code that does something
});
```