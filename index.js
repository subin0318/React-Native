import { registerRootComponent } from 'expo';

import App from './App';
import App2 from './APP2';
import App3 from './APP3';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App3);

// 네이티브의 시작점에서 registerRootComponent(); 를 호출하면 리액트 네이티브 컴포넌트를  앱의 시작점으로 등록해서 네이티브 환경과
// 연결해주는 역활이다 