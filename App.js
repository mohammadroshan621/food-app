

const parent = React.createElement("div", {id:"parent"} ,
 React.createElement("div", {id:"child"},
 React.createElement("h1", {id:"heading"}, "this is h1 tage") ));

 const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);