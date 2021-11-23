import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddPost from './AddPost/AddPost';
import EditPost from './EditPost/EditPost';
import Navbar from './Navbar/Navbar';
import PostsList from './PostsList/PostsList';
import PostView from './PostView/PostView';

export default function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    console.log('rendering');
    fetch('https://dummyapi.io/data/v1/post/', {
      headers: {
        'app-id': '6196e0da3985439f7ead060a',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.data)
      })      
  }, [])

  //metoda za dodavanje posta koja se prosledjuje na AddPost komponentu
  const addPost = (arg) => {
    arg.id = Math.floor(Math.random() * (10000 - 10) - 10).toString()
    arg.owner.id = Math.floor(Math.random() * (10000 - 10) - 10).toString()
    setPosts([...posts, arg])
  }

  //Klasicna metoda za brisanje postova
  const deletePost = (id) => {
    const del = posts.filter(post => {
      return post.id !== id
    })
    setPosts(del)
  }

  //metoda za editovanje posta, koja se prosledjuje na EditPost komponentu
  const editPost = (arg) => {
    let possition = posts.map(post => post.id).indexOf(arg.id)
    posts[possition] = arg
    setPosts(posts)
  }

  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path='/' exact>
          <PostsList posts={posts} deletePost={deletePost} />
        </Route>
        <Route path='/add'>
          <AddPost addPost={addPost} />
        </Route>
        <Route path='/:id/edit'>
          <EditPost posts={posts} editPost={editPost} />
        </Route>
        <Route path='/:id'>
          <PostView posts={posts} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
