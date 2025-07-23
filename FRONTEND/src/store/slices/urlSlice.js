import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createShortUrl } from '../../api/shortUrl.api'

// Async thunk for creating short URL
export const createShortUrlAsync = createAsyncThunk(
  'url/createShortUrl',
  async (url, { rejectWithValue }) => {
    try {
      const response = await createShortUrl(url)
      return response
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Initial state
const initialState = {
  shortUrl: '',
  originalUrl: '',
  urlHistory: [], // Array to store user's URL history
  isLoading: false,
  error: null,
  copied: false,
}

// URL slice
const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    // Synchronous actions
    clearUrl: (state) => {
      state.shortUrl = ''
      state.originalUrl = ''
      state.error = null
      state.copied = false
    },
    clearError: (state) => {
      state.error = null
    },
    setCopied: (state, action) => {
      state.copied = action.payload
    },
    addToHistory: (state, action) => {
      const { originalUrl, shortUrl } = action.payload
      const newEntry = {
        id: Date.now(),
        originalUrl,
        shortUrl,
        createdAt: new Date().toISOString(),
      }
      state.urlHistory.unshift(newEntry) // Add to beginning of array
      // Keep only last 10 URLs
      if (state.urlHistory.length > 10) {
        state.urlHistory = state.urlHistory.slice(0, 10)
      }
    },
    clearHistory: (state) => {
      state.urlHistory = []
    },
  },
  extraReducers: (builder) => {
    builder
      // Create short URL cases
      .addCase(createShortUrlAsync.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(createShortUrlAsync.fulfilled, (state, action) => {
        state.isLoading = false
        state.shortUrl = action.payload
        state.error = null
        // Add to history
        if (state.originalUrl && action.payload) {
          const newEntry = {
            id: Date.now(),
            originalUrl: state.originalUrl,
            shortUrl: action.payload,
            createdAt: new Date().toISOString(),
          }
          state.urlHistory.unshift(newEntry)
          // Keep only last 10 URLs
          if (state.urlHistory.length > 10) {
            state.urlHistory = state.urlHistory.slice(0, 10)
          }
        }
      })
      .addCase(createShortUrlAsync.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

// Export actions
export const { clearUrl, clearError, setCopied, addToHistory, clearHistory } = urlSlice.actions

// Export selectors
export const selectUrl = (state) => state.url
export const selectShortUrl = (state) => state.url.shortUrl
export const selectOriginalUrl = (state) => state.url.originalUrl
export const selectUrlLoading = (state) => state.url.isLoading
export const selectUrlError = (state) => state.url.error
export const selectCopied = (state) => state.url.copied
export const selectUrlHistory = (state) => state.url.urlHistory

// Export reducer
export default urlSlice.reducer
