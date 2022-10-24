import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Login from "../login/Login";
import Regeister from "../login/Regeister";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import News from "../Pages/News/News/News";
import TermsAndCondition from "../Pages/Others/TermsAndCondition";
import PrivetRoute from "./privetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader : () => fetch(`http://localhost:5000/news`)
             
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
        
            },
            {
                path: '/news/:id',
                element:<PrivetRoute><News></News></PrivetRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'regeister',
                element:<Regeister></Regeister>
            },
            {
                path:'termsAndCondition',
                element: <TermsAndCondition></TermsAndCondition>
            }
        ]
    },
])