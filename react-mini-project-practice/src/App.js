
import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';


function App() {
  // localhost:3000/ => AllMeetupsPage
  // localhost:3000/new-meetup => NewMeetupPage
  // localhost:3000/favorites => FavoritesPage

  return (

    <Layout>


      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>

    </Layout>
  );
}

export default App;


