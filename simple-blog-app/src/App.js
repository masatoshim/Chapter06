import './App.css';
import HomePage from './components/HomePage.js';
import DetailPage from './components/DetailPage.js'
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:id" element={<DetailPage />} />
    </Routes>
  );
}
