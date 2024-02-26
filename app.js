
/****
 * <div id ="parent" >
 * 
 *           <div id = "child">
 *                      <h1> hello wolrd new div </div> 
 *              </div>
 * 
 *  </div>
 * 
 * 
 * 
 */



 const  div = React.createElement('div', {id:"parent"}, [

  React.createElement("div", {id: "child"}, [

    React.createElement("h1", {} , "hello world new div "),
    React.createElement("h2", {} , "hello world new div ")

  ] ),

  React.createElement("div", {id: "child"}, [

    React.createElement("h1", {} , "hello world new div "),
    React.createElement("h2", {} , "hello world new div ")

  ])
 ])



  const root =  ReactDOM.createRoot(document.getElementById("root"))
   root.render(div)