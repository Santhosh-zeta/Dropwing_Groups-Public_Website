import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/persynix/Layout';
import ScrollToTop from './components/persynix/ScrollToTop';
import Home from './pages/persynix/Home';
import Work from './pages/persynix/Work';
import Services from './pages/persynix/Services';
import About from './pages/persynix/About';
import Leadership from './pages/persynix/Leadership';
import Contact from './pages/persynix/Contact';

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
