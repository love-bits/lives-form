import axios from "axios";
import React, { useState } from "react";

import logo from "./love-bits-icon.png";

function App() {
  const [state, setState] = useState({
    palestrante: "",
    tema: "",
    data: "",
    contato: "",
    status: "Prospecção",
  });

  const [showMessage, setShowMessage] = useState(false);

  function handleInput(e) {
    setState((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/1fd31f28-2132-45c8-9d0f-143a65219289",
        {
          Palestrante: state.palestrante,
          Tema: state.tema,
          Data: state.data,
          Contato: state.contato,
          Status: state.status,
        }
      )
      .then((response) => {
        setState({
          palestrante: "",
          tema: "",
          data: "",
          contato: "",
          status: "Prospecção",
        });

        setShowMessage(true);

        setTimeout(() => {
          setShowMessage(false);
        }, 4000);
      });
  }

  return (
    <section className="App h-screen w-full flex flex-col justify-center items-center bg-primary">
      <img src={logo} alt="Love Bits Logo" className="w-24" />
      <div className="w-full max-w-md bg-gray-800">
        <form
          onSubmit={handleSubmit}
          className=" bg-white shadow-md rounded px-8 py-8 pt-8"
        >
          <div className="px-4 pb-4">
            <label
              htmlFor="palestrante"
              className="text-sm block font-bold  pb-2 uppercase"
            >
              palestrante
            </label>
            <input
              type="text"
              name="palestrante"
              value={state.palestrante}
              onChange={handleInput}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            />
          </div>

          <div className="px-4 pb-4">
            <label
              htmlFor="tema"
              className="text-sm block font-bold  pb-2 uppercase"
            >
              tema
            </label>
            <input
              type="text"
              name="tema"
              value={state.tema}
              onChange={handleInput}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            />
          </div>

          <div className="px-4 pb-4">
            <label
              htmlFor="data"
              className="text-sm block font-bold  pb-2 uppercase"
            >
              data
            </label>
            <input
              type="date"
              name="data"
              value={state.data}
              onChange={handleInput}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            />
          </div>

          <div className="px-4 pb-4">
            <label
              htmlFor="contato"
              className="text-sm block font-bold  pb-2 uppercase"
            >
              contato
            </label>
            <input
              type="text"
              name="contato"
              value={state.contato}
              onChange={handleInput}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            />
          </div>

          <div className="px-4 pb-4">
            <label
              htmlFor="status"
              className="text-sm block font-bold  pb-2 uppercase"
            >
              status
            </label>

            <select
              name="status"
              id="status"
              value={state.status}
              onChange={handleInput}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            >
              <option value="Prospecção">Prospecção</option>
              <option value="Confirmado">Confirmado</option>
            </select>
          </div>

          <div className="px-4 pb-4">
            <button
              className="bg-primary hover:bg-opacity-75 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline uppercase"
              type="submit"
            >
              Cadastrar Palestra
            </button>
          </div>
          {showMessage && (
            <p className="text-green-400 text-base text-center p-1 uppercase">
              Dados cadastrados com sucesso!!
            </p>
          )}

          <a
            className="px-4 text-center"
            href="https://docs.google.com/spreadsheets/d/16WxMB7cjro5GUKXejJY3DoghJYoTbkjANZ3Up7CsLCM/edit#gid=0"
            target="_blank"
            rel="noreferrer"
          >
            Acessar Planilha
          </a>
        </form>
      </div>
    </section>
  );
}

export default App;
