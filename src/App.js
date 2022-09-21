import Header from './components/Header';
import Title from './components/Title';
import Nav from './components/Nav';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.scss';  // 기존 App.css에서 바꿨다.

const App = () => {
  return (
    <>
      <Header>
        <Title />
        <Nav />
      </Header>
      <Section />
      <Footer />
    </>
  );
};

export default App;