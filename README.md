# Remix Progressive Demo

This demo implements:

- **Optimistic nav active state**: Navbar shows the clicked nav as active immediately using a small optimistic state combined with `useTransition`.
- **Progressive enhancement / streaming**: Route layout renders immediately; heavy data is deferred using `defer()` and rendered with `<Await/>` + `React.Suspense` so slow API responses don't block the UI.
- **Non-JS fallback**: Links are real anchors (`href`) so the app still works without JS (progressive enhancement).

## Run

1. `npm install`
2. `npm run dev`
3. Open `http://localhost:3000`

Try clicking **Codebase** and throttle the network in your browser devtools — layout and nav become active immediately; repository list and metrics load progressively.# demo-optimistic
