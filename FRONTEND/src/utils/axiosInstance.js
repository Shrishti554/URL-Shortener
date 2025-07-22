import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});



// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        // Any status code that lies within the range of 2xx causes this function to trigger
        console.log('Response received:', response.status);
        return response;
    },
    (error) => {
        // Any status codes that falls outside the range of 2xx causes this function to trigger
        console.error('Response error:', error);

        let errorMessage = 'An unexpected error occurred';

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const { status, data } = error.response;

            switch (status) {
                case 400:
                    errorMessage = data?.message || 'Bad request. Please check your input.';
                    break;
                case 401:
                    errorMessage = 'Unauthorized. Please check your credentials.';
                    break;
                case 403:
                    errorMessage = 'Forbidden. You do not have permission to access this resource.';
                    break;
                case 404:
                    errorMessage = 'Resource not found. Please check the URL.';
                    break;
                case 422:
                    errorMessage = data?.message || 'Validation error. Please check your input.';
                    break;
                case 429:
                    errorMessage = 'Too many requests. Please try again later.';
                    break;
                case 500:
                    errorMessage = 'Internal server error. Please try again later.';
                    break;
                case 502:
                    errorMessage = 'Bad gateway. The server is temporarily unavailable.';
                    break;
                case 503:
                    errorMessage = 'Service unavailable. Please try again later.';
                    break;
                default:
                    errorMessage = data?.message || `Server error (${status}). Please try again.`;
            }
        } else if (error.request) {
            // The request was made but no response was received
            if (error.code === 'ECONNREFUSED' || error.message.includes('ERR_CONNECTION_REFUSED')) {
                errorMessage = 'Cannot connect to server. Please make sure the server is running.';
            } else if (error.code === 'ENOTFOUND') {
                errorMessage = 'Server not found. Please check your internet connection.';
            } else if (error.code === 'ECONNABORTED') {
                errorMessage = 'Request timeout. Please try again.';
            } else {
                errorMessage = 'Network error. Please check your internet connection.';
            }
        } else {
            // Something happened in setting up the request that triggered an Error
            errorMessage = error.message || 'Request setup error';
        }

        // Create a custom error object with user-friendly message
        const customError = new Error(errorMessage);
        customError.originalError = error;
        customError.status = error.response?.status;
        customError.data = error.response?.data;

        return Promise.reject(customError);
    }
);

export default axiosInstance;