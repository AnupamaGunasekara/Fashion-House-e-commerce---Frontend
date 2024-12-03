import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../../src/redux/features/auth/authSlice';
import Navbar from '../../src/Components/Navbar';
import cartReducer from '../../src/redux/features/cart/cartSlice'; // Assuming you have a cart slice

const renderWithProviders = (ui, { preloadedState = {}, store = configureStore({ reducer: { auth: authReducer, cart: cartReducer }, preloadedState }) } = {}) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe('Navbar Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders Navbar component with links and logo', () => {
    renderWithProviders(<Navbar />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Pages/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/Fashion House/i)).toBeInTheDocument();
  });

  it('shows user dropdown menu when user is logged in', async () => {
    const preloadedState = {
      auth: { user: { profileImage: '', role: 'user' } },
      cart: { products: [] },
    };

    renderWithProviders(<Navbar />, { preloadedState });

    const avatar = screen.getByRole('img');
    fireEvent.click(avatar);

    await waitFor(() => {
      expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
      expect(screen.getByText(/Profile/i)).toBeInTheDocument();
      expect(screen.getByText(/Logout/i)).toBeInTheDocument(); // Assuming Logout link is present
    });
  });

//   it('toggles cart modal when cart icon is clicked', async () => {
//     const preloadedState = {
//       auth: { user: null },
//       cart: { products: [{ id: 1, name: 'Product 1' }] },
//     };

//     renderWithProviders(<Navbar />, { preloadedState });

//     const cartButton = screen.getByLabelText(/shopingBag/i);
//     fireEvent.click(cartButton);

//     await waitFor(() => {
//       expect(screen.getByText(/Product 1/i)).toBeInTheDocument(); // Assuming modal content is rendered
//     });

//     fireEvent.click(cartButton);
//     await waitFor(() => {
//       expect(screen.queryByText(/Product 1/i)).not.toBeInTheDocument(); // Assuming modal closes
//     });
//   });

  it('renders login icon when user is not logged in', () => {
    const preloadedState = {
      auth: { user: null },
      cart: { products: [] },
    };

    renderWithProviders(<Navbar />, { preloadedState });

    expect(screen.getByLabelText(/login/i)).toBeInTheDocument(); // Assuming login icon is rendered
  });

//   it('calls logout function when logout is clicked', async () => {
//     const mockLogoutUser = vi.fn().mockResolvedValue({}); // Mock the logout function

//     const preloadedState = {
//       auth: { user: { profileImage: '', role: 'admin' } },
//       cart: { products: [] },
//     };

//     renderWithProviders(<Navbar />, { preloadedState });

//     const avatar = screen.getByRole('img');
//     fireEvent.click(avatar);

//     const logoutLink = screen.getByText(/Logout/i);
//     fireEvent.click(logoutLink);

//     await waitFor(() => {
//       expect(mockLogoutUser).toHaveBeenCalled(); // Assuming logout function is called
//     });
//   });
});
