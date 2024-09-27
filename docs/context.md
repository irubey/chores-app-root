# Global Context States and Access

## Redux Store

The Redux store is the main state management system for the application. It contains multiple slices for different features.

### How to access:
- Import the `useSelector` and `useDispatch` hooks from `react-redux`
- Use `useSelector` to access state: `const state = useSelector((state: RootState) => state.sliceName)`
- Use `useDispatch` to dispatch actions: `const dispatch = useDispatch()`

### Available slices:

#### a. Auth Slice
- State: `user`, `accessToken`, `isLoading`, `isSuccess`, `isError`, `message`
- Selector: `selectAuth`
- Key actions: `login`, `register`, `logout`, `reset`, `setAccessToken`

#### b. Messages Slice
- State: `messages`, `isLoading`, `isSuccess`, `isError`, `message`
- Selector: `selectMessages`
- Key actions: `fetchMessages`, `addMessage`, `updateMessage`, `deleteMessage`, `reset`

#### c. Finances Slice
- State: `expenses`, `isLoading`, `isSuccess`, `isError`, `message`
- Selector: `selectFinances`
- Key actions: `fetchExpenses`, `addExpense`, `updateExpense`, `deleteExpense`, `reset`

#### d. Chores Slice
- State: `chores`, `isLoading`, `isSuccess`, `isError`, `message`
- Selector: `selectChores`
- Key actions: `fetchChores`, `addChore`, `updateChore`, `deleteChore`, `reset`

#### e. Calendar Slice
- State: `events`, `isLoading`, `isSuccess`, `isError`, `message`
- Selector: `selectCalendar`
- Key actions: `fetchEvents`, `addEvent`, `updateEvent`, `deleteEvent`, `reset`

#### f. Notifications Slice
- State: `notifications`, `isLoading`, `isSuccess`, `isError`, `message`
- Selector: `selectNotifications`
- Key actions: `fetchNotifications`, `markNotificationAsRead`, `reset`

## Theme Context

The Theme Context manages the application's theme (light or dark mode).

### How to access:
- Import the `useTheme` hook from `'../contexts/ThemeContext'`
- Use the hook in your component: `const { theme, toggleTheme } = useTheme()`

### Available properties and methods:
- `theme`: current theme ('light' or 'dark')
- `toggleTheme`: function to switch between light and dark modes

## Socket Context

The Socket Context provides access to the socket client for real-time communication.

### How to access:
- Import the `useSocket` hook from `'../contexts/SocketContext'`
- Use the hook in your component: `const socket = useSocket()`

### Available methods:
- All methods provided by the socketClient (e.g., `emit`, `on`, `off`)

## Usage examples:

1. Accessing Redux store:
``` ts
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth, login } from '../store/slices/authSlice';

function MyComponent() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogin = (credentials) => {
    dispatch(login(credentials));
  };

  return (
    // Component JSX
  );
}
```

2. Accessing Theme Context:
``` ts
import { useTheme } from '../contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
```

3. Accessing Socket Context:
``` ts
import { useSocket } from '../contexts/SocketContext';
import { useEffect } from 'react';

function MyComponent() {
  const socket = useSocket();

  useEffect(() => {
    socket.on('newMessage', handleNewMessage);

    return () => {
      socket.off('newMessage', handleNewMessage);
    };
  }, []);

  const handleNewMessage = (message) => {
    // Handle new message
  };

  return (
    // Component JSX
  );
}
```