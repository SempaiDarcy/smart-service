import { Navigate } from 'react-router-dom';
import { getItem } from './local-storage.ts';

export const AuthGuard = ({ children }: { children: Element }) => {
    const currentUser = getItem('currentUser');
    return currentUser ? children : <Navigate to="/login" />;
};

