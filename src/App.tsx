import styles from "./App.module.scss";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { InfoDonation } from "./components/InfoDonation";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Container className={styles.content}>
        <div>
          <InfoDonation />

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
                    <div>
                      <input type="checkbox" name="default_amount" />
                      <label htmlFor="">
                        Allow donor to change default currency
                      </label>
                    </div>
                    <div>
                      <span>Border size</span>
                      <input type="range" />
                      <label htmlFor="">2px</label>
                    </div>
                    <div>
                      <span>Border radius</span>
                      <input type="range" />
                      <label htmlFor="">15px</label>
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
      </Container>
    </main>
  );
}

export default App;
