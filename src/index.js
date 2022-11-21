//import ReactDOM from 'react-dom';
import App from './components/App';
import { createRoot } from 'react-dom/client';

const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App />);

//ReactDOM.render(<App />, document.querySelector(".root"));