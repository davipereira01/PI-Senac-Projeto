import {userRef, useEffect, useState} from 'react';

import "react-toggle";
import '../SideBar/sidebarStyle.scss';
import "../SideBar/sidebar-mobile.scss";
import { AuthContext } from '../../pages/contexts/auth';
import { FaHome, FaStore } from "react-icons/fa";
import {FiSettings, FiLogOut } from "react-icons/fi";




export function SideBar() {

    
  const [toggle, setToggle] = useState(false);
  const sidebar = document.getElementsByClassName("sidebar");
  const btnMobile = document.getElementsByClassName("hamburger-menu");

  //function to toogle close on click
    function handleToggle() {
        setToggle(!toggle);
        console.log(toggle);
        
    }

 //if toggle is true, add class open to sidebar
    useEffect(() => {
        if (toggle) {
            sidebar[0].classList.add("close");
            btnMobile[0].classList.add("open");
        } else {
            sidebar[0].classList.remove("close");
            btnMobile[0].classList.remove("open");
        }
    }, [toggle]);

    //if screen is less than 601px, invert toggle
    useEffect(() => {
        if (window.innerWidth > 601) {
            setToggle(true);
        }
    }, []);

// dont load component if user change page or refresh
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const unsubscribe = userRef.onSnapshot((doc) => {
            if (doc.exists) {
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);
        
    
    


    
    
 
    






   return (

    

        <><nav id="nav"
         onClick={handleToggle} className="menu sidebar open">
            <header>
                <div className="image-text">
 

                </div>
            </header>
            <button className="hamburger-menu" id="btn-mobile">
            <span id="hamburger"></span>
            </button>
            <div className="user-container">
                <div className="avatar"></div>
                <h2 className='user'>Bem vindo de volta,</h2>
                <h3 className='user'>José</h3>

            </div>
             
            <div className="menu-bar">

                
                <div className="menu">

                <h2>Menu</h2>

                    <ul id='menu' className="menu-links">
                        <li className="nav-link">
                            <a>
                                <i className='bx bx-home-alt icon'> <FaHome/>  </i>
                                <span className="text nav-text">Home</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className='bx bx-bar-chart-alt-2 icon'><FaStore/></i>
                                <span className="text nav-text">Lojas</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#">
                                <i className='bx bx-bell icon'><FiSettings/></i>
                                <span className="text nav-text">Configuração</span>
                            </a>
                        </li>


                    </ul>
                </div>
                <div className="bottom-content">
                    <li className="">
                        <a href="#">
                            <i className='bx bx-log-out icon'><FiLogOut/></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>

                </div>
            </div>
        </nav>


</>
        

        

    )
  }
