import React from 'react'
import './App.css'
import Card from './components/card';

const App = () => {
  const [name, setName] = React.useState('Monkey D. Luffy');
  const [bio, setBio] = React.useState('Sun God Nika & 4th Yonko .Captain of Mugiwara Pirates.Leader of Straw Hat Grand Fleet with 5600 pirates');
  const [img, setImg] = React.useState('https://i.pinimg.com/736x/0d/98/b2/0d98b2916254548f2c79a57eb8768969.jpg');

const arr = [
  {name: 'Luffy Normal',bio: 'Capt. Straw Hat Pirates',img: 'https://i.pinimg.com/736x/0d/98/b2/0d98b2916254548f2c79a57eb8768969.jpg'},
  {name: 'Luffy 5th Gear',bio: 'Sun God Nika',img:'https://www.geekygallery.in/cdn/shop/files/LuffyGear5.jpg?v=1702207736&width=1946'}
];
  const changeName = () => {
    setName('Portgas D. Ace');
    setBio('Fire Fist Ace 2nd Division Commander of the Whitebeard Pirates. Son of Gol D. Roger ');
    setImg('https://preview.redd.it/new-illustration-for-aces-birthday-v0-har1nggdc7ae1.jpeg?width=640&crop=smart&auto=webp&s=177465814c99518c1b977245e63e5965d1510931');
  }

  return (
    <>
      <div id='container'>
        {arr.map((item)=>(
          <Card name={item.name} bio={item.bio} img={item.img} changename={item.changename}/>
        ))}
      </div>
    </>
  )
}

export default App
