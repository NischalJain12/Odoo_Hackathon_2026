import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../providers/AuthProvider.jsx';

export default function PrivateRoute({ children }) {
  const { user } = useAuthContext();
  return user ? children : <Navigate to="/login" replace />;
}