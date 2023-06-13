import React from 'react';
import useSearchPage from 'src/hooks/useSearchPage';

const SearchBox = () => {
  const { handleSubmit, register, handleSearchQuery } = useSearchPage();

  return (
    <div>
      <div className='bg-slate-700 mx-auto px-10 py-20 w-full'>
        <div className='max-w-xl mx-auto'>
          <div className='flex space-x-1 items-center mb-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-red-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <p className='text-white text-lg font-semibold'>
              Please enter something
            </p>
          </div>
          <form onSubmit={handleSubmit(handleSearchQuery)}>
            <div className='flex'>
              <div className='grid grid-cols-4 gap-0 rounded-md overflow-hidden w-full'>
                <input
                  type='text'
                  {...register('query')}
                  className='col-span-3  rounded-r-none p-2 focus:rounded-r-none rounded-md '
                />
                <input
                  className='col-span-1 bg-indigo-600 text-white text-lg font-semibold px-4 py-2 cursor-pointer hover:bg-indigo-700'
                  type='submit'
                  value='Go'
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
