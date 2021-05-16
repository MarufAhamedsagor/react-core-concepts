import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const players = ['malinga', 'Mustafiz', 'williamson', 'chris gayle', 'michel struck', 'suresh raina'];
const products = [
  {name: "Photoshop", Price:'$90.99'},
  {name: "Illustrator", Price:'$52.99'},
  {name: "Acrobat", Price: "$14.99"},
  {name: 'Adobe premiere', Price:"$12.34"}
];


  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            players.map(player => <li>{player}</li>)
          }
            {
              products.map(product => <li>{product.name}</li>)
            }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
  
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count +1);
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count +1)}>Increase</button>
    </div>
  )
};


function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

   return(
     <div>
       <h3>Dynamic Users: {users.length}</h3>
        <ul>
          {
            users.map(user => <li>{user.name}</li>)
          }
        </ul>
     </div>
   )
}

function Product (props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: "200px",
    height:'240px',
    float:'left'
  };
  const {name, Price} = props.product;
  // console.log(name, Price);
  return (
    <div style={productStyle}>
       <h2>{name}</h2>
       <h5>{Price}</h5>
       <button>Buy Now</button>
    </div>
  )
};


export default App;
