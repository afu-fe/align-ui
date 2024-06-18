//路由表配置：src/routes/index.jsx
import { Navigate } from 'react-router-dom';

import View from '../components/View';
import Text from '../components/Text';
import Image from '../components/Image';
import Icon from '../components/Icon';
import Checkbox from '../components/Checkbox';
import CheckboxGroup from '../components/CheckboxGroup';
import Radio from '../components/Radio';
import Alert from '../components/Alert';
import Badge from '../components/Badge';
import Empty from '../components/Empty';
import Failed from '../components/Failed';
import Loading from '../components/Loading';
import ExpandTxt from '../components/ExpandTxt';
import Swiper from '../components/Swiper';
import Switch from '../components/Switch';
import Modal from '../components/Modal';
import Tabs from '../components/Tabs';
import Toast from '../components/Toast';
import LicenseKeyboard from '../components/LicenseKeyboard';
import Popup from '../components/Popup';
import Overlay from '../components/Overlay'
import Search from "../components/Search.tsx";
import List from "../components/List.tsx";
import IndexSidebar from "../components/IndexSidebar.tsx";
import Rate from "../components/Rate.tsx";
import IntersectionObserver from "../components/IntersectionObserver.tsx";




const routes = [
  // Navigate 重定向
	{ path: '/', element: <Navigate to='/View' /> },
	{ path: '/View', element: <View /> },
	{ path: '/Text', element: <Text /> },
	{ path: '/Image', element: <Image /> },
	{ path: '/Icon', element: <Icon /> },
	{ path: '/Checkbox', element: <Checkbox /> },
	{ path: '/CheckboxGroup', element: <CheckboxGroup /> },
	{ path: '/Radio', element: <Radio /> },
	{ path: '/Alert', element: <Alert /> },
	{ path: '/Badge', element: <Badge /> },
	{ path: '/Empty', element: <Empty /> },
	{ path: '/Failed', element: <Failed /> },
	{ path: '/Loading', element: <Loading /> },
	{ path: '/ExpandTxt', element: <ExpandTxt /> },
	{ path: '/Swiper', element: <Swiper /> },
	{ path: '/Switch', element: <Switch /> },
	{ path: '/Modal', element: <Modal /> },
	{ path: '/Tabs', element: <Tabs /> },
	{ path: '/Toast', element: <Toast /> },
	{ path: '/LicenseKeyboard', element: <LicenseKeyboard /> },
	{ path: '/Rate', element: <Rate /> },
	{ path: '/Overlay', element: <Overlay/>},
	{ path: '/Popup', element: <Popup /> },
	{ path: '/Search', element: <Search /> },
	{ path: '/List', element: <List /> },
	{ path: '/IndexSidebar', element: <IndexSidebar /> },
	{ path: '/IntersectionObserver', element: <IntersectionObserver /> },
];

export default routes;
