import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import GraphContainerWOW from "./components/GRAPH SECTION/GraphContainerWOW";
import Graph_ERROR_SNS_COUNTS from "./components/GRAPH SECTION/Graph_ERROR_SNS_COUNTS";
import Graph_LAMBDA_DB from "./components/GRAPH SECTION/Graph_LAMBDA_DB";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="payments" replace />} />
          {/* <Route path="wow/:country" element={<GraphContainerWOW />} /> */}
          <Route path="payments" element={<GraphContainerWOW />} />
          <Route path="ces" element={<Graph_ERROR_SNS_COUNTS />} />
          <Route path="dbl" element={<Graph_LAMBDA_DB />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
