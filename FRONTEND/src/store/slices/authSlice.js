import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser, registerUser } from '../../api/user.api'

// Async thunks for API calls
export const loginUserAsync = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginUser(email, password)
      // Store token in localStorage
      if (response.token) {
        localStorage.setItem('token', response.token)
      }
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const registerUserAsync = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await registerUser(name, email, password)
      // Store token in localStorage
      if (response.token) {
        localStorage.setItem('token', response.token)
      }
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Initial state
const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem('token'),
}

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Synchronous actions
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.error = null
      localStorage.removeItem('token')
    },
    clearError: (state) => {
      state.error = null
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(loginUserAsync.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user || null
        state.token = action.payload.token
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.isAuthenticated = false
      })
      // Register cases
      .addCase(registerUserAsync.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user || null
        state.token = action.payload.token
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.isAuthenticated = false
      })
  },
})

// Export actions
export const { logout, clearError, setUser } = authSlice.actions

// Export selectors
export const selectAuth = (state) => state.auth
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectUser = (state) => state.auth.user
export const selectAuthLoading = (state) => state.auth.isLoading
export const selectAuthError = (state) => state.auth.error

// Export reducer
export default authSlice.reducer
