import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Editor from '@/pages/Editor';
import Manage from '@/pages/Manage';
import User from '@/pages/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Navigate to="editor" replace /> },
      { path: "editor", element: <Editor /> },
      { path: "manage", element: <Manage /> },
      { path: "user", element: <User /> },
    ],
  }
], {
  basename: '/OnePageCV'
})




export default router