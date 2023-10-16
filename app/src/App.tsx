import React from 'react';
import { Home } from './pages/Home';
import './styles/main.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PageEditor } from './pages/editor/PageEditor';

export default function App() {
  return (
    <div className="app">
      <RouterProvider router={customRouter}/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

function loader() {

  return (
      <div></div>
  )
}

const customRouter = createBrowserRouter([
  {
      path: '/',
      element: <Home />,
      loader,
  },
  {
      path: 'pageEditor',
      element: <PageEditor />,
      loader,
  },
])
