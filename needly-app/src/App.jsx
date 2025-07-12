import MainPage from './Pages/MainPage';
import AboutPage from './Pages/AboutPage';
import StartInventoryPage from './Pages/StartInventoryPage';
import FindInventoryPage from './Pages/FindInventoryPage';
import MyInventoriesPage from './Pages/MyInventoriesPage'


function App() {
  return (
    <>
      <MainPage />
      <AboutPage />
      <StartInventoryPage />
      <div id='find'>
      <FindInventoryPage />
      </div>
      <MyInventoriesPage />
    </>
  );
}

export default App;