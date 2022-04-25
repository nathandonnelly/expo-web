import 'react-native-gesture-handler';
import './firebase.config'
import { StatusBar } from 'expo-status-bar';
import { store } from './redux/stores/store'
import { Provider as StoreProvider } from 'react-redux'
import AppContainer from './AppContainer';

const App = () => {
  return (
    <StoreProvider store={store}>
      <AppContainer />
      <StatusBar style="auto" />
    </StoreProvider>
  );
}

export default App