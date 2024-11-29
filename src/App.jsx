import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Create from "./Create";
import Update from "./Update";
import UserForm from "./UserForm";
import Learn from "./learn";
import Add from "./Add";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/userform" element={<UserForm />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/add" element={<Add />}></Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
