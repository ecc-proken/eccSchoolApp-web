import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import userAtom from 'atom/userAtom';

const initializeState = (mutableSnapshot: MutableSnapshot) => {
  const localstorageToken = localStorage.getItem('token');
  const localstorageUUID = localStorage.getItem('uuid');
  if (localstorageToken && localstorageUUID) {
    mutableSnapshot.set(userAtom, {
      token: localstorageToken,
      uuid: localstorageUUID,
    });
  }
};

ReactDOM.render(
  <RecoilRoot initializeState={initializeState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();

reportWebVitals();
