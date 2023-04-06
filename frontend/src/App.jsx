// tous les imports utiles pour faire fonctionner l'app
import { Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import AddUser from './pages/AddUser';
import Update from './pages/Update';
import Details from './pages/Details';

export default function App() {
  // état, données dynamiques
  // ensemble de comportements
  // rendu navigateur
  return (
    <>
    {/* l'entête */}
      <Header />

    {/* le contenu des pages se trouvent dans la balise main */}
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/creer-etudiant' element={<AddUser />} />
          <Route path='/mettre-a-jour/:id' element={<Update />} />
          <Route path='/details/:id' element={<Details />} />
        </Routes>
      </main>
    {/* le pied de page */}
      <Footer />
    </>
  )
}
