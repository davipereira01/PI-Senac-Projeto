import React from 'react';
import '../Header/header.scss';
import HandIcon from '../../assets/hand.svg';
import '../SideBar/sidebarStyle.scss';






export const Header = ({user}) => {

 





const timeMessage = () => {
    const date = new Date();
    const hour = date.getHours();
    return hour >= 0 && hour < 12 ? 'Bom dia' : hour >= 12 && hour < 18 ? 'Boa tarde' : 'Boa noite';
}






















    




    return (


        <React.Fragment>
            
            <header className='header'>
                <div  className="user-container" >
                <div className="avatar">
                  <img src={user.img} alt="foto de usuario" />
               </div>
                    <h1>
                     
                        <span
                        //if isMale is true, return "Bem vindo"+ nickname,  else return "Bem vinda"+nickname in the span tag whit the class "welcome"
                        className="welcome"> {timeMessage()}, {user.firstname}!</span>
                        
                    </h1>
                    <img className='img-mao'  src={HandIcon} alt="mão" />
                </div>

                <div className="darkMode-container">
                    <input type="checkbox" id="switch" /><label htmlFor="switch" className='btn-darkmode'>Toggle</label>
                </div>
                

            </header>

            
            
        </React.Fragment>



        
        
    


   



      
    )
  }

  export default Header;