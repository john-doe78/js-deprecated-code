// legacy till v18.0
ReactDOM.render(
    "Welcome to React",
    document.querySelector("p")
);

// since v18.1
const paragraph = document.querySelector("p");
const root = ReactDOM.createRoot(paragraph);
root.render("Hello, React!!");