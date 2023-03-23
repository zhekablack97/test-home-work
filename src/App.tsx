import "./App.scss";

function App() {
  return (
    <main>
      <header>
        <h1 className="">Donations</h1>
        <div>
          <input type="text" placeholder="search" />
          <select>
            <option value="All">All statuses</option>
            <option value="waiting">waiting statuses</option>
            <option value="Succeeded">Succeeded statuses</option>
          </select>
        </div>
      </header>
      <div>
        <div>
          <div>
            <div>
              <div>
                <h2>Donation</h2>
                <div>
                  <span>$20.60 USD</span>
                  <span>≈ €17.92 EUR</span>
                </div>
              </div>
              <div>
                <span>ID</span>
                <span>TYNY694Y</span>
              </div>
            </div>
            <div>
              <div>
                <span>Status</span>
                <span>Succeeded</span>
              </div>
              <div>
                <span>Supporter</span>
                <span>Charlotte Ann</span>
              </div>
              <div>
                <span>Campaign</span>
                <span>Heart walk</span>
              </div>
            </div>
          </div>

          <div className="tab">
            <form action="">
              <div>
                <button type="button">Behavior</button>
                <button type="button">Appearance</button>
                <button type="button">Custom Fields</button>
                <button type="button">Questions</button>
                <button type="button">URL Control</button>
              </div>
              <div>
                <div>
                  <label htmlFor="checkout_Setting">Designation</label>
                  <select id="checkout_Setting">
                    <option value="All">All statuses</option>
                    <option value="waiting">waiting statuses</option>
                    <option value="Succeeded">Succeeded statuses</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goal">Goal</label>
                  <input type="text" id="goal" />
                  <select>
                    <option value="Usd">Usd</option>
                    <option value="Aed">Aed</option>
                    <option value="Eur">EUR</option>
                  </select>
                </div>
                <div>
                  <span>Default Amount</span>
                  <div>
                    <div>
                      <input type="radio" name="default_amount" />
                      <label htmlFor="">Match Checkout Setting</label>
                    </div>
                    <div>
                      <input type="radio" name="default_amount" />
                      <label htmlFor="">Customize</label>
                    </div>
                    <div>
                      <input type="checkbox" name="default_amount" />
                      <label htmlFor="">
                        Allow donor to change default currency
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button>Save changes</button>
                <button>Cancel</button>
              </div>
            </form>
          </div>
        </div>
        <aside>
          <ul>
            <li>Change amount</li>
            <li>Change payment method</li>
            <li>Change date</li>
            <li>Cancel recurring</li>
          </ul>
        </aside>
      </div>
    </main>
  );
}

export default App;
