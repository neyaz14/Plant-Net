

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:9000',
    withCredentials: true,
  })
  
const useAxiosPublic = () => {
    return 
};

export default useAxiosPublic;