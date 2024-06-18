import React from 'react'
// import ReactDOM from 'react-dom/client'
import { AppRegistry } from "react-native";
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx'
import './App.css'

// ReactDOM.createRoot(rootTag!).render(<Root />);

const Root = () => (
  <BrowserRouter>
		<App />
	</BrowserRouter>
);

const rootTag = document.getElementById("root");
AppRegistry.registerComponent("App", () => Root);
AppRegistry.runApplication("App", { rootTag });
