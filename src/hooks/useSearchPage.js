import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const useSearchPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const handleSearchQuery = ({ query }) => {
    router.push({ pathname: '/', query: { book: query, page: 1 } });
  };
  
  return {
    register,
    handleSubmit,
    handleSearchQuery,
  };
};

export default useSearchPage;
