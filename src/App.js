import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';


// Components
import Header from './components/Header';
import BiographyPage from './components/BiographyPage'; // Import the BiographyPage component
import Achievements from './components/Achievements';
import PhotoGallery from './components/PhotoGallery';

function App() {
  // Rest of the code remains the same

  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route  exact path="/" component={BiographyPage} /> {/* Use BiographyPage component */}
          <Route path="/achievements" component={Achievements} />
          <Route path="/photos" component={PhotoGallery} />
        </Switch>

        {/* Rest of the code remains the same */}
      </div>
    </Router>
  );
}

export default App;