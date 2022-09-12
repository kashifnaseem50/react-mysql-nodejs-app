import React from "react";
import './App.css';
class App extends React.Component {

 // Constructor
 constructor(props) {
  super(props);

  this.state = {
    items: {},
   DataisLoaded: false
  };
 }

 // ComponentDidMount is used to
 // execute the code
 componentDidMount() {
  fetch(
"http://localhost:3002")
   .then((res) => res.json())
   .then((res) => {
    console.log(res);
    this.setState({
     items: res.data,
     DataisLoaded: true
    });
   })
 }
 render() {
  const { DataisLoaded, items } = this.state;
  if (!DataisLoaded) return <div>
   <h1> Pleses wait some time.... </h1> </div> ;
  console.log(`items ${items}`)
  return (
  <div className = "App">
   <h1> Fetch data from an api in react </h1> 
   <p>{this.state.items}</p>

  </div>
 );
}
}

export default App;
