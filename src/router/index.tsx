import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> }
    ]
  }
], {
  basename: '/OnePageCV'
})

export default router