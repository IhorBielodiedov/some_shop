import { PropsWithChildren, useEffect } from "react";
import TabBar from "../../components/TabBar";
import styles from "./pageLayout.module.scss";
import { useNavigate } from "react-router-dom";
import { TELEGRAM } from "../../utils/constants";

interface Props extends PropsWithChildren {
  withTabs?: boolean;
}

const PageLayout = ({ children, withTabs = false }: Props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (window.history.length > 1) {
      TELEGRAM.BackButton.show();
      TELEGRAM.BackButton.onClick(goBack);
    } else {
      TELEGRAM.BackButton.hide();
    }
    return () => {
      TELEGRAM.BackButton.offClick(goBack);
    };
  }, []);

  return (
    <div className={styles.container}>
      {children}
      {withTabs && <TabBar />}
    </div>
  );
};
export default PageLayout;
