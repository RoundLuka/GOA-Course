import { useAuth } from '../context/AuthContext';

const AuthConsumer = () => {
  const { auth } = useAuth();

  return (
    <div>
      <h3>Email: {auth.email}</h3>
      <h4>Password: {auth.password}</h4>
    </div>
  );
};

export default AuthConsumer;
