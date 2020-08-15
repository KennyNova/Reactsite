import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title={<span><span style={{ color: '#ddd' }}></span><strong>Navid Madani</strong></span>}>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/photos">Photos</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Content>
            <Main/>
        </Content>
    </Layout>

</div>
  );
}

export default App;