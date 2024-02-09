
import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';
import { HelmetProvider } from 'react-helmet-async';
import { toast, Toaster } from 'react-hot-toast';



const App = () => {
  const [password, setPassword] = useState('');
  const defaultPassword = 'chad-smith-access';
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in (on page reload)
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    if (password === defaultPassword) {
      setLoggedIn(true);
      // Save login status to localStorage
      localStorage.setItem('isLoggedIn', 'true');
    } else {
      toast.error('Incorrect password. Please try again.');
    }
  };

  // const handleLogout = () => {
  //   setLoggedIn(false);
  //   // Remove login status from localStorage
  //   localStorage.removeItem('isLoggedIn');
  // };

  return (
    <HelmetProvider>
      <div className='overflow-x-hidden'>
        
        {!isLoggedIn ? (
         

          <div className="flex flex-col justify-center items-center h-[100vh] ">
          <h1 className="lg:w-[500px] w-full text-[44px] text-[#242424] font-Playfair text-center font-bold">Please login</h1>
  
           <form className="lg:w-[500px] w-full lg:px-0 md:px-2 px-6 md:mt-14 mt-14">
               <div>
                  
                   <input className="lg:w-[500px] w-full h-[48px] border-[1px] border-[#242424] rounded pl-5 outline-0 focus:ring-[0.6px] focus:ring-[#0f0f0f] block text-[16px] font-Montserrat font-normal text-[#242424] duration-500" type="password" name="passowrd" id="" placeholder="Enter Your Password"  value={password}
                     onChange={(e) => setPassword(e.target.value)}/>
             
               </div>
  
                <div className="flex justify-center mt-5">
                <button onClick={handleLogin}
              className="bg-[#242424] w-full h-[48px] rounded text-[20px] font-semibold leading-6 text-white"
              type="button" >
                Login
             </button>
                </div>
           </form>
      </div>




        ) : (
          <div>
            
            <RouterProvider router={routes} />
          </div>
        )}
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </HelmetProvider>
  );
};

export default App;

