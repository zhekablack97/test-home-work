import { Card } from "../Card";
import { Container } from "../Container";
import { Title } from "../Title";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <Container asNode="header">
      <Card
        className={styles.wrapperContent}
        footer={
          <div>
            <input type="text" placeholder="search" />
            <select>
              <option value="All">All statuses</option>
              <option value="waiting">waiting statuses</option>
              <option value="Succeeded">Succeeded statuses</option>
            </select>
          </div>
        }
      >
        <Title asNode="h1" className={styles.title}>
          Donations
        </Title>
      </Card>
    </Container>
  );
};
