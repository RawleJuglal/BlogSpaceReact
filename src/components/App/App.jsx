import * as React from 'react';
import './App.css'
import Navbar from '../Navbar/Navbar'
import Post from '../Post/Post'
import Button from '@mui/material/Button';

function App() {
const [state, setState] = React.useState([])

React.useEffect(()=>{
  handleApi()
}, [])

function handleApi(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      const postArr = data.slice(0,5);
      setState(()=>{
        return [...postArr]
      })
    })
}

const postList = state.map((ele)=>{
  return <Post key={ele.id} data={ele}/>
})

  return (
    <div className="--app-app-container">
      <Navbar />
      <div className='--app-posts-container'>
        {postList}
      </div>
      
    </div>
  )
}

export default App
