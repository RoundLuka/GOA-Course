// შექმენით context-ი სახელად AuthContext, გამოიყენეთ .Provider კომპონენტი და გადაეცით ობიექტი email, password კუთვნილებებით. 3-ჯერ გამოიძახეთ ეს კომპონენტი და ყოველ ჯერზე გადაეცით სხვადასხა მნიშვნელობა


import { AuthProvider } from './context/AuthContext';
import AuthConsumer from './components/AuthConsumer';

function App() {
  return (
    <div>
      <AuthProvider email="user1@example.com" password="password1">
        <AuthConsumer />
      </AuthProvider>

      <AuthProvider email="user2@example.com" password="password2">
        <AuthConsumer />
      </AuthProvider>

      <AuthProvider email="user3@example.com" password="password3">
        <AuthConsumer />
      </AuthProvider>
    </div>
  );
}

export default App;
