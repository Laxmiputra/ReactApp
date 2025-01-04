/* in react create element take 3 parameters 1 is tag and object will give attribute 
to the tag and third is children   
* in react document is like React
        */
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" },
  "Hello word in react"
);
//console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/**
 * create a bellow structure using react
 * <div id="parent">
 * <div id="child">>
 * <h1>Hello h1 tag</h1>
 * </div>
 * </div>
 *
 *
 */
const child = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello h1 tag")
  )
);
//console.log(child)

const footer = ReactDOM.createRoot(document.getElementById("child"));
footer.render(child);
/* if want create siblings use array 
/**
 * create a bellow structure using react
 * <div id="parent">
 * <div id="child">>
 * <h1>Hello h1 tag</h1>
 * <h2>Hello h1 tag</h2>
 * </div>
 * </div>
 */
const childrens = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello h1 tag"),
    React.createElement("h2", {}, "Hello h2 tag"),
  ])
);
console.log(childrens);

const siblings = ReactDOM.createRoot(document.getElementById("siblings"));
siblings.render(childrens);
