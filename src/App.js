import React from 'react';
import Home from './components/Home';
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Books from './components/Books';
import BookDetails from './components/BookDetails'
import Root from './components/Root';

const router = createBrowserRouter([
  {
    path:'/', element:<Root></Root>, children:[
      {
        path:'/', element:<Home></Home>
      },
      {
        path:'/home', element:<Home></Home>
      },
      {
        path:'/about', element:<About></About>
      },
      {
        path:'/books',element:<Books></Books>,
        loader:()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: '/book/:id',
        element:<BookDetails></BookDetails>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
