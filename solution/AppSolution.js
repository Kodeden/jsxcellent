function App() {
  const appTitle = 'Bill and Ted\'s Excellent Reviews';

  return (
    <div className="App">
      <div className='content-container'>
        <div className='title'>
          {appTitle}
          <hr />
        </div>
        {
          RESTAURANTS.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} />)
        }
      </div>
    </div>
  );
}

export default App;