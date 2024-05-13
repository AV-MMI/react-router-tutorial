import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Root, {
   loader as rootLoader,
   action as rootAction,
  } from './routes/root';

import './index.css'
import ErrorPage from './error-page';

import Contact,
 {
  loader as contactLoader,
 }
 from './routes/contact';

import EditContact, {
  action as editAction
} from './routes/edit';
import Destroy, { action as destroyAction, loader as destroyLoader } from './routes/destroy';
import Index from './routes';
const router = createBrowserRouter([
  {


    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        errorElement: <h2>Such contact doesn't exist</h2>
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        element: <Destroy/>,
        loader: destroyLoader,
        action: destroyAction,
        errorElement: <h2>"There has been an error :("</h2>
      }
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
