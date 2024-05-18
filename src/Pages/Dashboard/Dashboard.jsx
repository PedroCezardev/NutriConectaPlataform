import React from 'react'
import style from "./Dashboard.module.css";
import Content from "../../Components/Content/Content";
import SideBar from '../../Components/SideBar/SideBar';


const Dashboard = () => {
  return (

      <div className={style.body}>
        <SideBar />

        <Content> 
        <section className="container">
          <div className="slider">

          </div>
          <div className="title">
            <h1>Dashboard</h1>
            <h1>Notificações</h1>
          </div>
          <div className="contant-home">
            <h3>Reginaldo Rossi</h3>
            <p>lkadsldasdjklajfldhfddkljdskdljhfskdjlfhsdjlkhsdjçgn
              jsdahgfksdçkhdfghçhgçshsdçdshdsdlsçkdsçllksdfjnlçsdkj
            </p>
          </div>
        </section>
        </Content>
        
      </div>
  )
}

export default Dashboard