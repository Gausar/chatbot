import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";


const App = () => {
  return (
    <>
      {/* <ThemeProvider> */}
        <Sidebar />
        <Main />
      {/* </ThemeProvider> */}
    </>
  )
}

export default App;