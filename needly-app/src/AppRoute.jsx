import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import AboutPage from './Pages/AboutPage';
import StartInventoryPage from './Pages/StartInventoryPage';
import FindInventoryPage from './Pages/FindInventoryPage';
import SignuUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';
import MyInventory from './Pages/MyInventoriesPage';
import ItemPage from './Pages/ItemPage';
import NewItemsPage from './Pages/NewItemPage';
import NewInventoryPage from './Pages/NewInventoryPage';
import UpdateItemsPage from './Pages/UpdateItemPage';
import UpdateInventoryPage from './Pages/UpdateInventoryPage';
import PublicInventoryPage from './Pages/PublicInventoryPage';
import PublicItemPage from './Pages/PublicItemPage';

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/start" element={<StartInventoryPage />} />
      <Route path="/find" element={<FindInventoryPage />} />
      <Route path="/sign" element={<SignuUpPage />} />
      <Route path="/log" element={<LoginPage />} />
      <Route path="/myInventory/:username" element={<MyInventory />} />
      <Route path="/items/:inventoryId" element={<ItemPage />} />
      <Route path="/newItems/:inventoryId" element={<NewItemsPage />} />
      <Route path="/newInventory/:userId" element={<NewInventoryPage />} />
      <Route path="/updateItem/:itemId" element={<UpdateItemsPage />} />
      <Route path="/updateInventory/:inventoryId" element={<UpdateInventoryPage />} />
      <Route path="/publicInventory/:username" element={<PublicInventoryPage />} />
      <Route path="/publicItems/:inventoryId" element={<PublicItemPage />} />
    </Routes>
  );
}

export default AppRoute;