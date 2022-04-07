import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home";

function App() {
  return (
    <Div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Div>
  );
}
const Div = styled.div`
  padding: 0;
  margin: 0;
`;
export default App;
