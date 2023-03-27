import { Card } from "../Card";
import { Container } from "../Container";
import { Input } from "../Input";
import { Select } from "../Select";
import { Title } from "../Title";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <Container asNode="header">
      <Card
        className={styles[`wrapper-content`]}
        footer={
          <div className={styles[`wrapper-footer`]}>
            <Input value="kdsl" placeholder="Search" prefixStyle="search" />
            <Select
              selectStyles="onlyText"
              options={[
                { value: "All", children: "All statuses" },
                { value: "Waiting", children: "Waiting statuses" },
                { value: "Succeeded", children: "Succeeded statuses" },
              ]}
            />
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
