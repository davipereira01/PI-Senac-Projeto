import React from 'react';
import '../Header/header.scss';
import HandIcon from '../../assets/hand.svg';
import '../SideBar/sidebarStyle.scss';







export const Header = ({user}) => {

    return (


        <React.Fragment>
            
            <header className='header'>
                <div  className="user-container" >
                 <div className="avatar"><img src={user.img} alt="foto de usuario" /></div>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Amigos</li>
                        <li>Conquistas</li>
                        <li>Explorar</li>

                    </ul>
                </nav>
            </header>

            
            
        </React.Fragment>



        
        
    


   



      
    )
  }

  export default Header;