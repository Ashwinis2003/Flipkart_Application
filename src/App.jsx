import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './Products';
import Login from './Login';
import ProductDetail from './ProductDetail';
import useFetch from './useFetch';
// import TodoApp from "./TodoApp";

import Register from "./Register";

// export const productsForTest = createContext()
function App() {

  const [products, setProducts] = useState([]);

  // const [loading, setLoading] = useState(false)

   const fetchdata = async () => {
      // setLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')

     const data = await response.json()
     setProducts(data)

      // setLoading(false)
   }
   useEffect(() => {
     fetchdata()
   }, []) 


  const { data, loading, error } = useFetch('http://localhost:3000/products/');
  console.log(data,'data of products')

  const [count, setCount] = useState(0)

  if (loading) {
    return (<h1 className="text-center">loading...</h1>)
  }



  return (

    <>
      
      {/* <productsForTest.Provider value={{ test1, test2, count, setCount }}> */}

        <BrowserRouter>

          <Routes>

            <Route path='/' element={<Login />} />

            <Route path='/register' element={<Register />} />


            <Route path='/products' element={<Products test={data} />} />

            <Route path='/products/:id' element={<ProductDetail product={data} />} />

            {/* <Route path='/bootstrap' element={<BootstrapClass />} />

            <Route path='/todo' element={<TodoApp />} />

            <Route path='/api/todos' element={<ApiTodo />} />

            <Route path='/counterByContext' element={<CounterContext />} />
            <Route path='/counterByRedux' element={<CounterReduxTest />} /> */}


          </Routes>


        </BrowserRouter>

      {/* </productsForTest.Provider> */}

     
    </>


  )
}

export default App
