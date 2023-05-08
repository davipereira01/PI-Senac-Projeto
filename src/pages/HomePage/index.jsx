import React, { useEffect, useReducer } from "react";
import "./styles.css";
import "./mobile.home.scss";
import { SideBar2 } from "../../components/SideBar2/sidebar2";
import { Header } from "../../components/Header/header";
import { BalanceCard } from "../../components/Balance-card/balanceCard";
import { UpgradeCard } from "../../components/Card-upgrade/upgrade-card";
import { CardLojas } from "../../components/Card-lojas/card-lojas";
import { FaturamentoMensal } from "../../components/Faturamento-card/faturamento-card";
import { TopLojas } from "../../components/TopLojas/topLojas-card";
import { TierList } from "../../components/Tierlist/Tierlist";
import StoresService from "../../services/storesService";
import UsersService from "../../services/usersService";
import ProductsService from "../../services/productsService";



const HomePage = () => {
  // create array of objects
  const [stores, dispatchStores] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_STORES":
        return action.payload;
      default:
        return state;
    }
  }, []);



  const [users, dispatchUsers] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_USERS":
        return action.payload;
      default:
        return state;
    }
  }, []);

  const [products, dispatchProducts] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_PRODUCTS":
        return action.payload;
      default:
        return state;
    }
  }, []);

  const fetchData = async () => {
    try {
      const { data: storesResponse } = await StoresService.getStores();
      // ordene as lojas pelo faturamento
      const sortedStores = storesResponse.sort((a, b) => b.faturamento_md_mensal - a.faturamento_md_mensal);
      // atualize o estado do componente com a lista ordenada de lojas
      dispatchStores({ type: "SET_STORES", payload: sortedStores });
    } catch (error) {
      console.error("Erro ao obter lojas");
    }
  };

  const fetchUsers = async () => {
    try {
      const { data: usersResponse } = await UsersService.getUsers();
      dispatchUsers({ type: "SET_USERS", payload: usersResponse });
    } catch (error) {
      console.error("Erro ao obter usuários");
    }
  };

  const fetchProducts = async () => {
    try {
      const { data: productsResponse } = await ProductsService.getProducts();
      dispatchProducts({ type: "SET_PRODUCTS", payload: productsResponse });
    } catch (error) {
      console.error("Erro ao obter produtos");
    }
  };

  useEffect(() => {
    fetchData();
    fetchUsers();
    fetchProducts();

  }, []);

  const calculateTotalFaturamento = (periodo) => {
    return stores.reduce((total, store) => {
      return total + parseFloat(store[`faturamento_md_${periodo}`]);
    }, 0);
  };

  const faturamentoMensal = calculateTotalFaturamento("mensal").toLocaleString(
    "pt-br",
    { style: "currency", currency: "BRL" }
  );

  const faturamentoSemanal = calculateTotalFaturamento("semanal").toLocaleString(
    "pt-br",
    { style: "currency", currency: "BRL" }
  );

  const faturamentoDiario = calculateTotalFaturamento("diario").toLocaleString(
    "pt-br",
    { style: "currency", currency: "BRL" }
  );





  return (
    <React.Fragment>

      {users.map((user) => (
        <SideBar2 key={user.id}

          user={user}

        />

      ))}

      <section className="main-container" id="home-mobile">
        {users.map((user) => (
          <Header key={user.id}
            user={user}

          />

        ))}
        <div className="container" id="cards-container">
          <BalanceCard

            faturamentoMensal={faturamentoMensal}

          />
          <UpgradeCard />
        </div>
        <div className="grid-container">
          <div className="section-container">
            <h2 className="section-title">Lojas</h2>
            <section className="section-lojas">

              {stores.map((store) => (


                <CardLojas key={store.id}
                  store={store}




                />

              ))}
            </section>
            <div className="ver-mais">
              <a href="#">Ver mais</a>
            </div>
            <h2 className="section-title">Faturamento</h2>

            <section className="section-faturamento">
              <FaturamentoMensal mensal='Faturamento Mensal'
                faturamentoMensal={faturamentoMensal}

              />
              <FaturamentoMensal semanal='Faturamento Semanal'
                faturamentoSemanal={faturamentoSemanal}

              />
              <FaturamentoMensal diario='Faturamento Diario'
                faturamentoDiario={faturamentoDiario}

              />
            </section>

            <h2 className="section-title">Melhores Lojas</h2>
            <section className="section-melhores-lojas">

              {stores.map((store) => (
                <TopLojas
                  store={store}
                 
                  
                  

                





                />

              ))}



            </section>
            <div className="ver-mais">
              <a href="#">Ver mais</a>
            </div>
          </div>

          <aside className="section-classificação-produtos">





            <TierList />





          </aside>
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;