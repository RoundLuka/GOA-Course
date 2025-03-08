import './App.css'
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';

export default function App() {


  return (
    <>
      <ErrorBoundary>
        <Home error={true} />
      </ErrorBoundary>
    </>
  )
}