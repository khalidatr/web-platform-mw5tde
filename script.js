class Greeting extends React.Component {
  render(){
    return <h1>I’m a component in need of some state! </h1>;
  }
}

class Greeting extends React.Component {
  constructor(props) {
   super(props);
     // Define your state object here
     this.state = {
       name: 'Jane Doe'
     }
   }
   render(){
     return <h1>Hello { this.state.name }</h1>;
   }
}
