import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import CaptureUserActions from './pages/capture/CaptureUserActions';
import CapturePublish from './pages/capture/CapturePublish';
import { AppMenu } from './components/AppMenu';
import CaptureAnalytics from './pages/capture/CaptureAnalytics';
const App = () => {
  
  return (
    <Router>
      <div className='container'>
        <div className='side-menu'>
          <AppMenu />
        </div>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<CaptureUserActions />} />
            <Route path="/capture-analytics" element={<CaptureAnalytics />} />
            <Route path="/capture-publish" element={<CapturePublish />} />
            <Route path="/capture-feature-requests" element={<CaptureUserActions />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
};
export default App;