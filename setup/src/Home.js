import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import { useGlobalContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
      <Modal />
    </main>
  );
};

export default Home;
