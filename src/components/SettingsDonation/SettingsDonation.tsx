import cx from "classnames";
import { useState } from "react";
import { Card } from "../Card";
import { CheckBox } from "../CheckBox";
import { Input } from "../Input";
import { Radio } from "../Radio";
import { Range } from "../Range";
import { Select } from "../Select";
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

  return (
    <Card
      className="tab"
      classNameFooter={styles.footer}
      footer={
        <div>
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
            <div className={styles["scroll-block"]}>
              {tabs.map((item) => (
                <button
                  type="button"
                  className={activeTab === item ? styles.active : ""}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className={styles["content-form"]}>
          <label htmlFor="checkout_setting">Designation</label>
          <Select
            id="checkout_setting"
            className={styles["designation"]}
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
            <Range min={0} max={2} className={styles.range} />
            <label htmlFor="">2px</label>
          </div>

          <span className={styles["border-сaption"]}>Border radius</span>
          <div className={cx(styles["border-radius"], styles.border)}>
            <Range min={0} max={15} className={styles.range} />
            <label htmlFor="">15px</label>
          </div>
        </div>
      </form>
    </Card>
  );
};
