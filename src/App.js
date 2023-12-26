import './App.css';

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <h1 className='App-header'>First Deployment on Github Pages</h1>
      <p className='App-Content'>This is my first webpage deployed on Github pages. More content may be added in the future!</p>
    </div>
=======
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Intro" element={<Intro />} />
        </Routes>
      </div>
    </Router>
>>>>>>> parent of ea7aab5 (adding dependency for routing)
  );
}

export default App;
