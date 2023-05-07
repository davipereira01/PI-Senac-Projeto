
import React, { useEffect, useReducer } from "react";
import { Header } from "../../components/Header/header";
import UsersService from "../../services/usersService";



const FeedPage = () => {


    const [users, dispatchUsers] = useReducer((state, action) => {
        switch (action.type) {
          case "SET_USERS":
            return action.payload;
          default:
            return state;
        }
      }, []);

      const fetchUsers = async () => {
        try {
          const { data: usersResponse } = await UsersService.getUsers();
          dispatchUsers({ type: "SET_USERS", payload: usersResponse });
        } catch (error) {
          console.error("Erro ao obter usuários");
        }
      };

      useEffect(() => {

        fetchUsers();
   
    
      }, []);

  
  
  
    return (
      <React.Fragment>

{users.map((user) => (
          <Header key={user.id}
            user={user}

          />

        ))}
        
      </React.Fragment>
    );
  };
  
  export default FeedPage;