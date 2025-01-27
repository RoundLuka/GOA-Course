// 1) შექმენით რეაქთის აპლიკაცია და გასტილეთ ორი ერთნაირი ღილაკი 2 სხვადასხვა გზით inline და style object ის სახით

export default function App() {
    const myStyle = {
      color: 'green',
      fontSize: '30px',
      fontWeight: 'bold'
    }
    
    return (
      <>
        <button style={{backgroundColor: 'red'}}>inline</button>
        <button style={myStyle}>object</button>
        <div>External style</div>
      </>
    )
  }