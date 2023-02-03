import './App.css';

function App() {
  return (
    <div className="App">
  
  <form>
    <label> Find in season products in your area </label>
      <div className='location_container'></div>
        <select name="location" id="location">
          <option value="spain">Spain</option>
          <option value="france">France</option>
        </select>
  </form>

  <div className="months_btngroup">
    <button className="jan-btn">January</button>
    <button className="feb-btn">February</button>
    <button className="mar-btn">March</button>
    <button className="apr-btn">April</button>
    <button className="may-btn">May</button>
    <button className="jun-btn">June</button>
    <button className="jul-btn">July</button>
    <button className="aug-btn">August</button>
    <button className="sep-btn">September</button>
    <button className="oct-btn">October</button>
    <button className="nov-btn">November</button>
    <button className="dec-btn">December</button>
  </div>

<div className="prodType">
  <button className="veg-btn">Vegetables</button>
  <button className="fru-btn">Fruits</button>
</div>

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
