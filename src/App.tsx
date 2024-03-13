import MainRoutes from "./components/routes/MainRoutes";
import { Provider } from "react-redux";
import store from "./redux/store";
const App = () => {
	return (
		<div>
			<Provider store={store}>
				<MainRoutes />
			</Provider>
		</div>
	);
};

export default App;
