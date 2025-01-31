import { render, screen } from '@testing-library/react';
import { Login } from '@features/auth/routes/Login';
import { Provider } from 'react-redux';
import { store } from '@store/store';

describe('Login Component', () => {
  it('renders the login form', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>,
    );
    expect(screen.getByPlaceholderText('name@8powers.com')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
