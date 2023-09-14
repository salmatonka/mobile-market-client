import { Routes, createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../Layout/DashboardLayout";
import About from "../Components/Pages/About/About";
import SingleCategory from "../Components/Pages/Categories/SingleCategory";
import ProductDetail from "../Components/Pages/Products/ProductDetail";
import Blog from "../Components/Pages/Blog/Blog";
import Home from "../Components/Pages/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../Components/Shares/ErrorPage/ErrorPage";
import LogIn from "../Components/Pages/Form/LogIn";
import SignUp from "../Components/Pages/Form/SignUp";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import ReportedProducts from "../Components/Dashboard/ReportedProducts/ReportedProducts";
import MyProducts from "../Components/Dashboard/MyProducts/MyProducts";
import AddProduct from "../Components/Dashboard/AddProduct/AddProduct";
import MyOrder from "../Components/Dashboard/MyOrder/MyOrder";
import UsersPhone from "../Components/Pages/UsersPhone/UsersPhone";
import AdvertisingProduct from "../Components/Pages/AdvertisingProduct/AdvertisingProduct";


const router = createBrowserRouter([
    {
      path:'/' ,
      element: <Main /> ,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home />
           
        }, 
        {
          path:'/blog',
          element: <Blog />
        },
        {
          path:'/productDetail/:id',
          element: <ProductDetail />,
          loader: ({params})=>fetch(`https://mobile-market-server-salmatonka.vercel.app/allPhonesId/${params.id}`)
        },
        {
          path:'/singleCategory/:category',
          element: <SingleCategory />,
          loader: ({params})=>fetch(`https://mobile-market-server-salmatonka.vercel.app/allPhonesDetail/${params.category}`)
        },
        {
          path:'/advertising',
          element: <AdvertisingProduct />,
         
        },
        {
          path:'/usersPhone',
          element: <UsersPhone />,
         
        },
        {
          path:'/about',
          element: <About />,
         
        },
        {
          path:'/signUp',
          element: <SignUp />
        },
        {
          path:'/login',
          element: <LogIn />
        }
      ]
    },
    {
      path: '/dashboard',
      errorElement: <ErrorPage />,
      element: <DashboardLayout />,
      children: [
          {
              path: '/dashboard',
              element: <MyOrder />
              // element: <PrivetRoute><MyOrders></MyOrders></PrivetRoute>
          },
          {
              path: '/dashboard/addProduct',
              element: <AddProduct />
              // element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
          },
          {
              path: '/dashboard/myProducts',
              element: <MyProducts />
              // element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
          },
          {
              path: '/dashboard/reportedProduct',
              element: <ReportedProducts />
              // element: <AdminRoute><ReportedProducts></ReportedProducts></AdminRoute>
          },
          {
              path: '/dashboard/allUsers',
               element: <AllUsers />
              // element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          }
      ]
  }

])
export default router;