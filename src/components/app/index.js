import style from './index.module.scss';
import NavigationBar from "../shared_components/navigation_bar";
import UtilizationNavigationTab from "../pages/utilization_navigation_tab";

function App() {
  return (
    <div className={style.app}>
      <NavigationBar />
        {/* We can add router here to manage contents for navigation*/}
        <UtilizationNavigationTab />
    </div>
  );
}

export default App;
