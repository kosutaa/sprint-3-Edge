import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import MatchesPage from './pages/MatchesPage';
import CommunityPage from './pages/CommunityPage';
import ProfilePage from './pages/ProfilePage'; // A importação agora vai funcionar

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="partidas" element={<MatchesPage />} />
        <Route path="comunidade" element={<CommunityPage />} />
        
        <Route path="login" element={<ProfilePage />} /> 
        
      </Route>
    </Routes>
  );
}

export default App;