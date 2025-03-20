import { ErrorBoundary } from "react-error-boundary"
import BadSwitch from "./components/BadSwitch"

const FallbackUI = ({ resetErrorBoundary }) => {
  return (
    <div>
      <h2>An error occurred, please try again.</h2>
      <button onClick={resetErrorBoundary}>Reset this component</button>
    </div>
  )
}

function App() {

  const errLoging = (error, errorInfo) => {
    console.log(error, errorInfo);
  }

  return (
    <>
      <ErrorBoundary fallbackRender={({ resetErrorBoundary }) => (<FallbackUI resetErrorBoundary={resetErrorBoundary} />)} onError={errLoging}>
        <BadSwitch switchNumber={1} />
      </ErrorBoundary>
      

      <p>wedfwefwefew</p>
    </>
  )
}

export default App