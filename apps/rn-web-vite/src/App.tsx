// App.jsx
import { useState } from 'react';
import { NavLink, useRoutes } from 'react-router-dom';
import routes from './routes';
import './App.css'
const App = () => {
  // 根据路由表生成对应的路由规则
  const ElementRouter = useRoutes(routes);
	// { path: '/View', element: <View /> },
	// { path: '/Text', element: <Text /> },
	// { path: '/Image', element: <Image /> },
	// { path: '/Icon', element: <Icon /> },
	// { path: '/Alert', element: <Alert /> },
	// { path: '/Badge', element: <Badge /> },
	// { path: '/Empty', element: <Empty /> },
	// { path: '/Failed', element: <Failed /> },
	// { path: '/Loading', element: <Loading /> },
	// { path: '/ExpandTxt', element: <ExpandTxt /> },
	// { path: '/Swiper', element: <Swiper /> },
	// { path: '/Switch', element: <Switch /> },
	// { path: '/Modal', element: <Modal /> },
	// { path: '/Tabs', element: <Tabs /> },
	// { path: '/Toast', element: <Toast /> },
	const [items] = useState([
		{ path: '/View', title: '盒子' },
		{ path: '/Text', title: '文本' },
		{ path: '/Image', title: '图片' },
		{ path: '/Icon', title: 'Icon' },
		{ path: '/Radio', title: 'Radio' },
		{ path: '/Checkbox', title: 'Checkbox' },
		{ path: '/CheckboxGroup', title: 'CheckboxGroup' },
		{ path: '/Alert', title: 'Alert' },
		{ path: '/Badge', title: 'Badge' },
		{ path: '/Empty', title: 'Empty' },
		{ path: '/Failed', title: 'Failed' },
		{ path: '/Loading', title: 'Loading' },
		{ path: '/ExpandTxt', title: 'ExpandTxt' },
		{ path: '/Swiper', title: 'Swiper' },
		{ path: '/Switch', title: 'Switch' },
		{ path: '/Modal', title: 'Modal' },
		{ path: '/Tabs', title: 'Tabs' },
		{ path: '/Toast', title: 'Toast' },
		{ path: '/LicenseKeyboard', title: 'LicenseKeyboard' },
		{ path: '/Rate', title: 'Rate' },
		{ path: '/Overlay', title: 'Overlay'},
		{ path: '/Popup', title: 'Popup' },
		{ path: '/Search', title: 'Search' },
		{ path: '/List', title: 'List' },
		{ path: '/IndexSidebar', title: 'IndexSidebar' },
		{ path: '/IntersectionObserver', title: 'IntersectionObserver' },
	]);

	return (
		<div className='app'>
			<nav className='nav'>
					{items.map(item => (
						<NavLink className={({ isActive }) => (isActive ? 'default active' : 'default')} to={item.path} key={item.path}>
							{item.title}
						</NavLink>
					))}
			</nav>
			{/* 注册路由 */}
			<div className='iframeshow'>
				{ElementRouter}
			</div>
		</div>
	);
};

export default App;
