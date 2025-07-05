import DataProvider from "./context/DataContext";
import Index from "./pages";
const App = () => {
  return (
    <DataProvider>
      <Index/>
    </DataProvider>
  );
};

export default App;
