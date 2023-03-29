import styles from "./App.module.scss";
import { Aside } from "./components/Aside";
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
        <Aside />
      </Container>
    </main>
  );
}

export default App;
