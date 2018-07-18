/**
 * Created by chj on 2018/4/17.
 */
import { TabNavigator } from 'react-navigation'
import APPTabbar from './tabbar';

const Tabbar = TabNavigator(APPTabbar.AppRootTabBarRouteConfigs, APPTabbar.AppRootTabBarNavigatorConfigs);

const AppNavigationRouterConfigs = {
    Tabbar: {
        screen: Tabbar,
    },
};
const AppNavigationStackConfigs = {
    initialRouteName: 'Tabbar', // 以tabbar为主路由
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

