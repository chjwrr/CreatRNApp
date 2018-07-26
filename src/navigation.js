/**
 * Created by chj on 2018/4/17.
 */
import {createBottomTabNavigator} from "react-navigation";
import TabbarRoot from './tabbar'
const Tabbar = createBottomTabNavigator(TabbarRoot.AppRootTabBarRouteConfigs, TabbarRoot.AppRootTabBarNavigatorConfigs);


import Home from './pages/home';



const AppNavigationRouterConfigs = {
    Tabbar: {
        screen: Tabbar,
    },
    Home: {
        screen: Home,
    },
};
const AppNavigationStackConfigs = {
    initialRouteName: 'Tabbar', // 以Tabbar为主路由
    initialRouteName: 'Home', // 以Home为主路由
    mode: 'card',
    headerMode: 'screen',
    onTransitionStart:(()=>{
        console.log('onTransitionStart');
    }),
    onTransitionEnd: (()=>{
        console.log('onTransitionEnd');
    })
};
export default {
    AppNavigationRouterConfigs,
    AppNavigationStackConfigs
}

