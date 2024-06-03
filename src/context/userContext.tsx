import React, {createContext, useEffect, useContext} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {User} from '../api/user/types';
import {UserActions, UserSelector} from '../features/UserProfile';

interface UserContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const dispatch = useDispatch();

  const user = useSelector(UserSelector.currentUser);
  const loading = useSelector(UserSelector.loading);
  const error = useSelector(UserSelector.error);

  useEffect(() => {
    dispatch(UserActions.fetchUserRequest());
  }, [dispatch]);

  return (
    <UserContext.Provider value={{user, loading, error}}>
      {children}
    </UserContext.Provider>
  );
};

export const useCurrentUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useCurrentUser must be used within a UserProvider');
  }
  return context;
};
