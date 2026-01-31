import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import Editor from '@/pages/Editor';
import Manage from '@/pages/Manage';
import Profile from '@/pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Navigate to="editor" replace /> },
      { path: "editor", element: <Editor /> },
      { path: "manage", element: <Manage /> },
      { path: "profile", element: <Profile /> },
    ],
  }
], {
  basename: '/OnePageCV'
})




export default router