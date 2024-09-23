import axios from 'axios';
import Cookies from 'js-cookie';
import { useContext } from 'react';
// import jwt_decode from 'jwt-decode'
import { AuthContext } from '../../AuthContext';
const link=process.env.REACT_APP_BASE_URL;


// Create an Axios instance
const api = axios.create({
  baseURL: link,
  withCredentials: true 
});


// Function to refresh the access token using the refresh token
const refreshAccessToken = async () => {
    try {
      const refreshToken = Cookies.get('refreshToken'); // Get refresh token from cookies
      console.log('refrsh token',refreshToken)
  
      if (!refreshToken) {
        throw new Error('No refresh token available.');
      }
  
      const response = await api.post('/auth/token/refresh', {},{ withCredentials: true });
  
      // Save the new access token in localStorage
      localStorage.setItem('accessToken', response.data.access);
      return response.data.access; // Return the new access token
    } catch (error) {
      console.error('Error refreshing access token:', error);
      throw error;
    }
  };


// Add a request interceptor to attach access token to requests
api.interceptors.request.use(
  
  async (config) => {
    const accessToken = localStorage.getItem('accessToken');
    console.log('interceptors call')
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    // const user=jwt_decode(accessToken)
    // const isExpired=dayjs.unix(user.exp).diff(dayjs())<1
    // if(!isExpired) return req else call refresh token api


    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);




let refresh=false;
api.interceptors.response.use(resp=>resp, async error=>{
    console.log('intercep res call')
    if(error.response.status==401 && !refresh){
        refresh=true
        const response = await api.post('/auth/token/refresh', {},{ withCredentials: true });
  
        if(response.status==200){
            api.defaults.headers.common['Authorization']=`Bearer ${response.data.access}`

            return api(error.config)
        }
    }

    refresh=false;
    return error;
})


// Add a response interceptor to handle token expiration and refresh
// api.interceptors.response.use(
//     (response) => {
//       // If the request was successful, return the response
//       return response;
//     },
//     async (error) => {
//       const originalRequest = error.config;
//       const { checkTokenExpiryAndLogout } = useContext(AuthContext);

//       // Check if the error is a 401 (Unauthorized) and the request hasn't been retried yet
//       if (error.response.status === 401 && !originalRequest._retry) {
//         originalRequest._retry = true; // Mark this request as retried
  
//         try {
//           // Try to refresh the access token
//           const newAccessToken = await refreshAccessToken();
  
//           // Update the Authorization header with the new token
//           originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
  
//           // Retry the original request with the new access token
//           return api(originalRequest);
//         } catch (err) {
//           console.error('Token refresh failed:', err);
//            // Automatically logout if token refresh fails
//         checkTokenExpiryAndLogout(); // Call the logout function
//           return Promise.reject(err);
//         }
//       }
  
//       // If it's not a 401 error or the token refresh failed, reject the error
//       return Promise.reject(error);
//     }
//   );

// Add a response interceptor to handle access token expiration
// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
      
//       // Try to refresh the token
//       try {
//         const response = await axios.post(
            
//           `${link}/auth/token/refresh`,
//           {}, // Empty body for the refresh endpoint
//           {
//             withCredentials: true // Important to send cookies for refresh token
//           }
//         );
        
//         // If refresh token is valid, update the access token
//         const newAccessToken = response.data.access;
//         localStorage.setItem('accessToken', newAccessToken);

//         // Retry the original request with the new access token
//         originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         console.error('Refresh token expired, please login again.');
//         // Optionally: Redirect to login page or show an error message
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api;