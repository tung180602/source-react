import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import Home from './pages/homes/Home';
import Information from './pages/infomations/Information';
import Header from './components/headers/Header';
import Footer from './components/footers/Footer';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const apiUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiUrl);
  console.log(apiKey);


  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home currentPath={currentPath} setCurrentPath={setCurrentPath}/>;
      // Thêm các trang khác ở đây
      case '/information':
        return <Information currentPath={currentPath} setCurrentPath={setCurrentPath}/>;
      // Thêm các trang khác ở đây
      default:
        return <div>Trang không tồn tại</div>;
    }
  };

  return (
    <div className="App h-screen flex flex-col">
      <Header currentPath={currentPath} setCurrentPath={setCurrentPath}/>
      <div className='h-full'>
      {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

export default App;
