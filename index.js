/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import store from './component/redux/store';
 const AppRedux = ()=>(       
    <Provider store={store}>
        <App/>
    </Provider>
 )/*yha pr humlog ne curly braces ki jagah parenthesis isliye liya h taaki hum direct return krwa sake*/

AppRegistry.registerComponent(appName, () => AppRedux);
