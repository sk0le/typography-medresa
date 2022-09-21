import type { NextPage } from "next";
import React, { useState } from "react";
import { ChromePicker } from "react-color";

const Home: NextPage = () => {
  const [textColor, setTextColor] = useState("#ffffff");

  const onChangeColor = (color: any, e: React.SyntheticEvent<any, any>) => {
    setTextColor(color);
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.63)), url(http://historija.info/wp-content/uploads/2019/03/Behram-begova-medresa3-e1552944182673.jpg)",
      }}
      className="w-full min-h-screen h-full flex flex-col-reverse xl:flex-row xl:justify-around items-center"
    >
      <div className="max-w-lg w-full px-10 py-10 h-full bg-neutral-900/60 backdrop-blur-xl rounded-lg">
        <h1 className="text-3xl text-neutral-100 font-medium mb-3">
          Promjena fonta:
        </h1>
        <select
          className="form-select mt-2 appearance-none block w-full px-4 py-2 text-lg font-normal text-gray-400 bg-neutral-900/90 bg-clip-padding bg-no-repeat border border-solid border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-200 focus:bg-neutral-900 focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option selected>Roboto</option>
          <option value="1">Poppins</option>
          <option value="2">Sans Serif</option>
          <option value="3">Neka Glupost</option>
        </select>
        <h1 className="text-3xl mt-6 text-neutral-100 font-medium mb-3">
          Velicina fonta:
        </h1>
        <input
          type="range"
          defaultValue={50}
          min={0}
          max={100}
          className="w-full h-2 bg-gray-900/90 mt-2 rounded-lg appearance-none cursor-pointer"
        />
        <h1 className="text-3xl mt-6 text-neutral-100 font-medium mb-3">
          Debljina Fonta:
        </h1>
        <div className="flex mt-4">
          <button className="bg-neutral-900/70 backdrop-blur-lg w-full text-neutral-100 px-6 py-2 font-medium">
            Thin
          </button>
          <button className=" bg-neutral-900/70 backdrop-blur-lg  w-full text-neutral-100 px-6 py-2 font-medium">
            Regular
          </button>
          <button className="bg-blue-600 w-full text-neutral-100 px-6 py-2 font-medium">
            Medium
          </button>
          <button className="  bg-neutral-900/70 backdrop-blur-lg  text-neutral-100 px-6 py-2 font-medium">
            Bold
          </button>
          <button className="  bg-neutral-900/70 backdrop-blur-lg  w-full text-neutral-100 px-6 py-2 font-medium">
            Black
          </button>
        </div>
        <h1 className="text-3xl mt-6 text-neutral-100 font-medium mb-3">
          Boja:
        </h1>
        <ChromePicker
          className="mt-4"
          color={textColor}
          onChange={onChangeColor}
        />
      </div>
      <div className="h-full py-6 px-12 bg-neutral-900/60 backdrop-blur-lg rounded-lg">
        <h1 className="text-[10rem] text-neutral-100">Medresa</h1>
      </div>
    </div>
  );
};

export default Home;
