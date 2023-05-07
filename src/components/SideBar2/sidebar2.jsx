import { userRef, useEffect, useState, useContext } from 'react';

import "react-toggle";
import '../SideBar2/sidebarStyle2.scss';
import "../SideBar2/sidebar-mobile2.scss";
import { AuthContext } from '../../pages/contexts/auth';
import { FaHome, FaStore } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaChevronCircleRight } from "react-icons/fa";
import { BiArchiveIn } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { TbReportAnalytics } from "react-icons/tb";
import { MdStorefront } from "react-icons/md";
import { GoHome } from "react-icons/go";
import Avatar from '../../assets/image2.jfif';
import { Link } from 'react-router-dom';






export function SideBar2({ user }) {

   //function to navigate to the store page 
   function navigateToStorePage() {
      window.location.href = "/store";
   }


   const { logout } = useContext(AuthContext); // pega o contexto de autenticação


   const handleLogout = (e) => {
      e.preventDefault();


      logout(logout); // chama a função de logout do contexto
   };

   const [toggle, setToggle] = useState(false);
   const sidebar = document.getElementsByClassName("sidebar");
   const btnMobile = document.getElementsByClassName("hamburger-menu");

   //function to toogle close on click
   function handleToggle() {
      setToggle(!toggle);


   }

   //if toggle is true, add class open to sidebar
   useEffect(() => {
      if (toggle) {
         sidebar[0].classList.add("active");
         btnMobile[0].classList.add("active");
      } else {
         sidebar[0].classList.remove("active");
         btnMobile[0].classList.remove("active");
      }
   }, [toggle]);

   useEffect(() => {
      if (window.innerWidth > 601) {
         setToggle(true);
      }
   }, []);

   function isMale() {
      return user.sex === 'm' ? true : false;
   }




   return (

      <aside id='sidebar' className='sidebar'>


         <nav className="menu" id="nav">


            <button onClick={handleToggle} className="hamburger-menu btn-mobile" id="btn-mobile">
               <span id="hamburger"></span>
            </button>
            <div className="sidebar-header">
               <i onClick={handleToggle} className='bx bx-chevron-right toggle'>
                  < FaChevronCircleRight />
               </i>
            </div>
            <div className="user-container">
               <div className="avatar">
                  <img src={user.img} alt="foto de usuario" />
               </div>
               <h2 className='user text'>
                  <span
                     //if isMale is true, return "Bem vindo"+ nickname,  else return "Bem vinda"+nickname in the span tag whit the class "welcome"
                     className="welcome">{isMale() ? `Bem vindo de volta,` : `Bem vinda de volta,`}</span>
               </h2>
               <h3 className='user text'>
                  {user.firstname}!
               </h3>

            </div>
            <ul id="menu">
               <li className='nav-link'>
                  <Link to="/">
                     <i className='bx bx-home-alt icon'><GoHome /></i>
                     <span className="text nav-text">Home</span>
                  </Link>
               </li>
               <li>
                  <Link to="/lojas">
                     <i className='bx bx-bar-chart-alt-2 icon'><MdStorefront /></i>
                     <span className="text nav-text">Lojas</span>
                  </Link>
               </li>
               <li>
                  <a href="#">
                     <i className='bx bx-bar-chart-alt-2 icon'><AiOutlineCalendar /></i>
                     <span className="text nav-text">Calendario</span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <i className='bx bx-bar-chart-alt-2 icon'><BiArchiveIn /></i>
                     <span className="text nav-text">Arquivo</span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <i className='bx bx-bar-chart-alt-2 icon'><MdProductionQuantityLimits /></i>
                     <span className="text nav-text">Mercadorias</span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <i className='bx bx-bar-chart-alt-2 icon'><TbReportMoney /></i>
                     <span className="text nav-text">Financeiro</span>
                  </a>
               </li>
               <li>
                  <a href="#">
                     <i className='bx bx-bar-chart-alt-2 icon'><TbReportAnalytics /></i>
                     <span className="text nav-text">Relatorios</span>
                  </a>
               </li>

               <li>

                  <a href="#">
                     <i className='bx bx-bell icon'>< MdOutlineNotificationsActive /></i>
                     <span className="text nav-text">Notificações</span>
                  </a>

               </li>

               <li>

                  <a href="#">
                     <i className='bx bx-bell icon'><FiSettings /></i>
                     <span className="text nav-text">Configuração</span>
                  </a>

               </li>



               <div className="navbar-footer">

                  <li className="">
                     <a href="#">
                        <i className='bx bx-log-out icon'><FiLogOut /></i>
                        <span onClick={handleLogout} className="text nav-text">Logout</span>
                     </a>
                  </li>

               </div>
            </ul>
         </nav>

      </aside>








   )
}
