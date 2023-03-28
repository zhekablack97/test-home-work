import styles from "./App.module.scss";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { InfoDonation } from "./components/InfoDonation";
import { SettingsDonation } from "./components/SettingsDonation";

function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Container className={styles.content}>
        <div className={styles["content-setting"]}>
          <InfoDonation />
          <SettingsDonation />
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
