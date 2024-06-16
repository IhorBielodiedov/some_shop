import { PropsWithChildren } from "react";
import TabBar from "../../components/TabBar";
import styles from "./pageLayout.module.scss";

interface Props extends PropsWithChildren {
  withTabs?: boolean;
}

const PageLayout = ({ children, withTabs = false }: Props) => {
  return (
    <div className={styles.container}>
      {children}
      {withTabs && <TabBar />}
    </div>
  );
};
export default PageLayout;
