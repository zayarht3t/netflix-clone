import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useMovielist = ()=>{
    const {data,isLoading,error} = useSWR('/api/movies',fetcher,{
                revalidateOnFocus:false,
                revalidateOnReconnect:false,
                revalidateIfStale: false
    });
    return {data,isLoading,error};
}

export default useMovielist;