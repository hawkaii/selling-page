import React, { useState } from "react";
import "./button.css";

const CreateButton = () => {
  const [formOpen, setFormOpen] = useState(false);



  const handleCancel = (event) => {
    event.preventDefault();
    setFormOpen(!formOpen);
  };

  const handleBackdropClick = () => {
    setFormOpen(false);
  };

  return (
    <>
      <button
        onClick={handleCancel}
        className="create-button "
        disabled={formOpen}
      >
        Sell
      </button>
      

      
     {formOpen && (
        <div
        className="backdrop"
        onClick={handleBackdropClick}
      >
     
     <div
        className="form-popup "
        style={{
            display: formOpen ? "block" : "none",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <form
          action="/action_page.php"
          className="form-container rounded-lg bg-white dark:bg-gray-800"
        >
          <div className="text-center m-3 text-gray-500 sm:text-xl dark:text-gray-400">
            {" "}
            YOU WANT TO SELL YOUR MATERIALS, PLEASE FILL OUT THE FORM
          </div>
          <div className="m-4">
            <input
              type="text"
              placeholder="PRODUCT NAME"
              name="name"
              required
              className="rounded-md"
            />
          </div>
          <div className="m-4">
            <input
              type="text"
              placeholder="PRODUCT OWNER NAME"
              name="name"
              className="rounded-md"
              required
            />
          </div>
          <div className="m-4">
            <input
              type="text"
              placeholder="PRODUCT OWNER EMAIL"
              name="email"
              className="rounded-md"
              required
            />
          </div>
          <div className="text-center m-3 text-left">
            {" "}
            <p className="image__doc text-gray-500 sm:text-xl dark:text-gray-400">
              Please upload your image in this{" "}
              <a
                href="https://imgur.com/upload"
                className="image text-pink-900 hover:decoration-red-500 hover:text-blue-900"
              >
                link
              </a>{" "}
              and paste the link below
            </p>
          </div>
          <div className="m-4">
            <input
              type="text"
              placeholder="PRODUCT IMAGE LINK"
              name="link"
              className="rounded-md"
              required
            />
          </div>
          <div className="m-4 ">
            <textarea
              type="text"
              placeholder="DESCRIPTION"
              name="text"
              className="block p-2.5 w-full bg-gray-200 active:bg-grey-800"
              required
            />
          </div>
          <div className="flex">
            <div className="m-4 w-1/2">
              <input
                type="text"
                placeholder="BUY VALUE"
                name="number"
                className="rounded-md"
                required
              />
            </div>
            <div className="m-4 w-1/2 ">
              <input
                type="text"
                placeholder="SELL VALUE"
                name="number"
                className="rounded-md"
                required
              />
            </div>
          </div>
          <button type="button" className="btn m-3">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </a>
          </button>
          <button
            type="button"
            className="btn cancel m-3"
            onClick={handleCancel}
          >
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </a>
          </button>
        </form>
        
      </div>
      </div>

      )}
    </>

  );
};

export default CreateButton;
