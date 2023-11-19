import Layout from "../template/layout";
import Header from '../organisms/header';
import Menu from '../organisms/menu';

import '../styles/app.css'

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Menu/>
      </Layout>
    </div>
  );
}

export default App;
