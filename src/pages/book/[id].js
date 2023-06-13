import BookDetail from '@components/BookDetail';
import { client } from 'src/graphql/client';
import { Single_Book } from 'src/graphql/query';

export default function BookDetails({ bookDetails }) {
  return (
    <>
      {bookDetails && (
        <div>
          <BookDetail details={bookDetails} />
        </div>
      )}
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const id = params.id;
  try {
    const { data } = await client.query({
      query: Single_Book,
      variables: {
        bookId: id,
      },
    });
    if (!data) {
      return { notFound: true };
    } else {
      return {
        props: {
          bookDetails: data.book,
        },
      };
    }
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
}
