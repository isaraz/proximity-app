import './App.css';
import CountriesSelect from './countriesSelect';
import MonthsSelect from './monthSelect';
import TypesSelect from './typesSelect';


function App() {
  return (
    <div className="App">
  
<h1>Find in season products in your area</h1>

  <form>
    <label> Select your country </label>
      <div className='location_container'></div>
      <CountriesSelect/>

  <div>
  <label> Select a month </label>
  <div className='months_container'></div>
    <MonthsSelect/>
  </div>

  <div>
  <label> Select a product type  </label>
  <div className='types_container'></div>
    <TypesSelect/>
  </div>

  <div className='submit_btn'>
    <button type='submit'>Find products</button>
  </div>

  </form>

<div className="prodList">
<div class="row">
  <div class="column">
    <div class="card">Banana</div>
  </div>
  <div class="column">
    <div class="card">Avocado</div>
  </div>
  <div class="column">
    <div class="card">Artichoke</div>
  </div>
  <div class="column">
    <div class="card">Apricot</div>
  </div>
</div>

</div>

    </div>
  );
}

export default App;
