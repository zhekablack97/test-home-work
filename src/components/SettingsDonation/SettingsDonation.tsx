import cx from "classnames";
import { useState } from "react";
import { Card } from "../Card";
import { CheckBox } from "../CheckBox";
import { Input } from "../Input";
import { Radio } from "../Radio";
import { Range } from "../Range";
import { Select } from "../Select";
import ScrollContainer from "react-indiana-drag-scroll";
import styles from "./SettingsDonation.module.scss";

export const SettingsDonation: React.FC = () => {
  const tabs = [
    "Behavior",
    "Appearance",
    "Custom Fields",
    "Questions",
    "URL Control",
  ];
  const [activeTab, setActiveTab] = useState("Behavior");
  const [borderSize, setBorderSize] = useState(2);
  const [borderRadius, setBorderRadius] = useState(15);
  return (
    <Card
      classNameWrapper={styles.wrapper}
      classNameFooter={styles.footer}
      footer={
        <div className={styles["wrapper-footer"]}>
          <button className={cx(styles["button-save"], styles.button)}>
            Save changes
          </button>
          <button className={cx(styles["button-cancel"], styles.button)}>
            Cancel
          </button>
        </div>
      }
    >
      <form action="">
        <div className={styles.tab}>
          <div className={styles.scroll}>
            <ScrollContainer className={styles["scroll-block"]}>
              {tabs.map((item) => (
                <button
                  type="button"
                  className={activeTab === item ? styles.active : ""}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </button>
              ))}
            </ScrollContainer>
          </div>
        </div>
        <div className={styles["content-form"]}>
          <label htmlFor="checkout_setting">Designation</label>
          <Select
            classNameWrapper={styles["designation"]}
            id="checkout_setting"
            className={styles["designation-select"]}
            selectStyles="border"
            options={[
              {
                value: "Setting1",
                children: "Match Checkout Setting",
                key: "Setting1",
              },
              {
                value: "Setting2",
                children: "Match Checkout Setting",
                key: "Setting2",
              },
              {
                value: "Setting3",
                children: "Match Checkout Setting",
                key: "Setting3",
              },
            ]}
          />

          <label htmlFor="goal">Goal</label>
          <div className={styles.goal}>
            <Input value="$10.00" id="goal" className={styles["goal-input"]} />

            <Select
              className={styles["goal-select"]}
              options={[
                { value: "Usd", children: "USD", key: "USD" },
                { value: "Aed", children: "AED", key: "AED" },
                { value: "Eur", children: "EUR", key: "EUR" },
              ]}
            />
          </div>

          <span>Default Amount</span>
          <div className={styles.amount}>
            <fieldset>
              <div className={cx(styles["amount-wrapper-input"])}>
                <Radio
                  name="default_amount"
                  id="Match"
                  value={"Match Checkout Setting"}
                  className={styles["amount-radio"]}
                />
                <label htmlFor="Match">Match Checkout Setting</label>
              </div>
              <div className={cx(styles["amount-wrapper-input"])}>
                <Radio
                  name="default_amount"
                  id="Customize"
                  className={styles["amount-radio"]}
                  value={"Customize"}
                />

                <label htmlFor="Customize">Customize</label>
              </div>
            </fieldset>
            <div className={cx(styles["amount-wrapper-input"], styles["mt2"])}>
              <CheckBox
                id="Allow donor"
                className={styles["amount-checkBox"]}
                value="Allow donor"
              />
              <label htmlFor="Allow donor">
                Allow donor to change default currency
              </label>
            </div>
          </div>

          <span className={styles["border-сaption"]}>Border size</span>
          <div className={cx(styles["border-size"], styles.border)}>
            <Range
              min={0}
              max={4}
              value={borderSize}
              className={styles.range}
              onChange={(e) => setBorderSize(Number(e.target.value))}
            />
            <label htmlFor="">{borderSize}px</label>
          </div>

          <span className={styles["border-сaption"]}>Border radius</span>
          <div className={cx(styles["border-radius"], styles.border)}>
            <Range
              min={0}
              max={30}
              value={borderRadius}
              onChange={(e) => setBorderRadius(Number(e.target.value))}
              className={styles.range}
            />
            <label htmlFor="">{borderRadius}px</label>
          </div>
        </div>
      </form>
    </Card>
  );
};
