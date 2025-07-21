// npm i @szhsin/react-accordion
// DOC styling: https://codesandbox.io/p/sandbox/react-accordion-css-module-eqvnzg?file=%2Fsrc%2FApp.js%3A28%2C11
// DOC Usage: https://www.npmjs.com/package/@szhsin/react-accordion

import { AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "./chevron-down.svg";
import styles from "./AccordionItem.module.scss";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <img className={styles.chevron} src={chevronDown} alt="Chevron Down" />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default AccordionItem;
