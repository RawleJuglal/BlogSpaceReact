import * as React from 'react';
import './App.css'
import Navbar from '../Navbar/Navbar'
import Post from '../Post/Post'
import Button from '@mui/material/Button';
import Form from '../Form/Form'

function App() {
const [state, setState] = React.useState({form:{title:'',body:'', userId:1},posts:[]})
let postList = state.posts.map((ele)=>{
  return <Post key={ele.id} data={ele}/>
}) 

React.useEffect(()=>{
  handleApi()
}, [])





function handleApi(){
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      const postArr = data.slice(0,5);
      setState((prevState)=>{
        return {...prevState, posts:postArr}
      })
    })
}

function handleChange(event){
  if(event.target.name == 'post-title'){
    let newForm = {...state.form}
    newForm.title = event.target.value;
    setState((prevState)=>{
      return {...prevState, form:newForm }
    })
  } else {
    let newForm = {...state.form}
    newForm.body = event.target.value;
    setState((prevState)=>{
      return {...prevState, form:newForm}
    })
  }
}

function handleSubmit(event){
  event.preventDefault();
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(state.form),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    let newForm = {title:'', body:'', userId:1}
    let newArr = state.posts;
    newArr.unshift(json);
    setState((prevState)=>{
      return {...prevState,form:newForm, posts:newArr}
    })
    
  })
}

  return (
    <div className="--app-app-container">
      <Navbar />
      <div className='--app-form-container'>
        <Form form={state.form} onChange={handleChange} onSubmit={handleSubmit}/>
      </div>
      <div className='--app-posts-container'>
        {postList}
      </div>
      
    </div>
  )
}

export default App
