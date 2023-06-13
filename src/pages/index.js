import _ from 'lodash';
import { allBooks } from 'src/graphql/query';
import { client } from 'src/graphql/client';
import SearchBox from '@components/SearchBox';
import BookList from '@components/BookList';
import { useRouter } from 'next/router';
import { Pagination, Stack } from '@mui/material';
import { useState } from 'react';
export default function SearchPage({ books }) {
  const router = useRouter();
  const { query } = router;
  const index = parseInt(query.page);
  const handleChange = (event, value) => {
    console.log(query);
    router.push({ pathname: '/', query: { book: query.book, page: value } });
  };
  return (
    <div className='bg-slate-200 text-black'>
      <SearchBox />
      {_.size(query) > 0 ? (
        _.size(books) > 0 ? (
          <div className='container mx-auto relative'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  '>
              {books.map((book) => (
                <BookList book={book} key={book.id} />
              ))}
            </div>
            <Stack
              spacing={2}
              display='flex'
              justifyContent='center'
              direction='row'
              mt={10}
            >
              <Pagination
                count={10}
                variant='outlined'
                page={index}
                shape='rounded'
                onChange={handleChange}
              />
            </Stack>
          </div>
        ) : (
          <>...loading</>
        )
      ) : (
        <>search book here</>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  if (_.size(query) > 0) {
    const page = parseInt(query.page);
    const { data } = await client.query({
      query: allBooks,
      variables: {
        input: {
          index: page > 1 ? page * 10 : 1,
          userquery: query.book,
          filter: query.filter ? query.filter : null,
        },
      },
    });
    return { props: { books: data.books, query } };
  } else {
    return { props: { books: null, query } };
  }
}
