// import logo from './logo.svg';
import './App.css';
import Header from "./header";
import React, { useState } from 'react';
// import ReactDOM from 'react-dom';


// import { RiArrowDropDownLine } from "react-icons/ri";


function App() {

  const [inputdd, setinputdd] = useState(false);
  const [outputdd, setoutputdd] = useState(false);

  const [inputlanguage, setInputlanguage] = useState("Select language");
  const [outputlanguage, setOutputlanguage] = useState("Select language");

  function inputddClick(click = "ddclick") {
    if (click == "typing") { setinputdd(false); return; }

    setinputdd(!inputdd);
  }
  function outputddClick(click = "ddclick") {
    if (click == "typing") { setoutputdd(false); return; }
    setoutputdd(!outputdd)



  }



  // navigator.mediaDevices.getUserMedia()

  const languages = [
    "English", "French", "Hindi", "Gujarati", "Arabic",
  ]

  function changeInputLanguage(l) {
    setInputlanguage(l);
    setinputdd(!inputdd);
  }
  function changeOutputLanguage(l) {
    setOutputlanguage(l);
    setoutputdd(!outputdd);
  }

  function interchange() {
    var temp = outputlanguage;
    setOutputlanguage(inputlanguage);
    setInputlanguage(temp);
  }

  function micinput() {
    
  }

  // var focus = "autofocus";




  return (


    <div className="App box-border h-screen w-full ">
      <Header clickfn={() => {
        console.log("checkin")
        outputddClick("typing");
        inputddClick("typing");

      }} />
      <div className=" my-10 self-center h-2/4 shadow-md flex justify-center items-center justify-items-center rounded-xl border-blue-900 border-2 w-2/3 mx-auto">
        {/* npm install react-bootstrap bootstrap */}
        <div className='w-2/4 h-full flex flex-col justify-start border-r border-r-black   '>
          <div className='relative flex flex-col'>
            <div className='py-2 mx-2 flex justify-between items-center border-b border-b-slate-400'><div className=' m-1 p-0 flex px-2 items-center rounded-md w-fit py-1 hover:bg-slate-200 cursor-pointer' onClick={inputddClick}>
              {inputlanguage}
              <svg height="0.54em" class=" self-center px-2 text-sm text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
              </svg>
              {/* <i className='pi pi-caret-down'></i> */}
            </div>
              <svg onClick={interchange} className="cursor-pointer  hover:bg-blue-50 rounded-full p-2" fill="none" height="2.27em" viewBox="0 0 48 48" width="2.27em" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h48v48h-48z" fill="#fff" fill-opacity=".01" /><g stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="m42 19h-36.00002" /><path d="m30 7 12 12" /><path d="m6.79897 29h36.00003" /><path d="m6.79895 29 12.00005 12" /></g></svg>
            </div>
            {inputdd == true ? <div className='relative flex flex-col m-1 p-0  px-2  rounded-md w-fit  cursor-pointer justify-start items-start border-blue-900 shadow-lg' >
              {languages.map((e, index) => <div key={index} className="hover:bg-slate-200 rounded-md px-1" onClick={() => changeInputLanguage(e)}>{e}</div>)}
              {/* <i className='pi pi-caret-down'></i> */}
            </div> : null
            }
          </div>


          <textarea onClick={() => inputddClick("typing")} className='relative w-full h-full rounded-xl focus:outline-none px-5 py-2 border-r-1 border-1 border-blue-900 text-lg font-sans font-light hover:font-normal hover:tracking-tight focus:font-normal ' placeholder='Type something...' onFocus={() => inputddClick("typing")}></textarea>
          <div onClick={micinput} className='px-2 pb-2 w-full flex justify-end'><svg className='cursor-pointer  hover:bg-blue-50 rounded-full p-1.5' width="2.27em" height="2.27em" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="2" width="6" height="12" rx="3" stroke="currentColor" stroke-width="1.5" />
            <path d="M5 10V11C5 14.866 8.13401 18 12 18V18V18C15.866 18 19 14.866 19 11V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 18V22M12 22H9M12 22H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
          </svg></div>
        </div>
        <div className='w-2/4  h-full flex flex-col justify-start'>
          <div className='relative flex flex-col justify-start'>
            <div className='mx-2 py-2 h-min border-b border-b-slate-400'>
              <div className=' m-1 p-0 flex px-2 items-center rounded-md w-fit py-1   hover:bg-slate-200 cursor-pointer' onClick={outputddClick}>
                {outputlanguage}
                <svg height="0.54em" class=" self-center px-2 text-sm text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                </svg>

                {/* <i className='pi pi-caret-down'></i> */}
              </div>
            </div>

            {outputdd == true ? <div className='relative flex flex-col m-1 p-0  px-2  rounded-md w-fit  cursor-pointer justify-start items-start border-blue-900 shadow-lg' >
              {languages.map((e, index) => <div key={index} className="hover:bg-slate-200 rounded-md px-1" onClick={() => changeOutputLanguage(e)}>{e}</div>)}
              {/* <i className='pi pi-caret-down'></i> */}
            </div> : null
            }
            <div className='flex pl-5 text-lg py-2 font-extralight text-gray-400 '>[Translated text will be displayed here...]</div>
          </div>




          {/* <div className='w-2/4 h-full border-l-2 border-blue-900'> */}


        </div>

      </div>
    </div>
  );
}

export default App;
