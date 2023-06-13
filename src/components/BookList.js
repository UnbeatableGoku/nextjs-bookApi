import Link from 'next/link';
import React from 'react';
import { Rating } from 'react-simple-star-rating';
const BookList = ({ book }) => {
  const img = book.volumeInfo.imageLinks.thumbnail
    ? book.volumeInfo.imageLinks.thumbnail
    : null;
  const title = book.volumeInfo.title;
  const saleInfo = book.saleInfo.saleability;
  const avgRating = book.volumeInfo.averageRating
    ? book.volumeInfo.averageRating
    : null;
  const description = book.volumeInfo.description
    ? book.volumeInfo.description.slice(0, 100)
    : 'No Description Available';
  return (
    <div className='max-w-[250px] w-full   mx-auto m-3 bg-gray-100  relative transition-all duration-300 hover:max-w-[280px]'>
      <div className=' shadow-sm shadow-violet-500 h-full rounded-md border border-slate-300 hover:shadow-violet-950 hover:shadow-lg  '>
        <div className='h-[250px] pt-3'>
          <img
            src={img}
            alt={title}
            className=' object-contain w-full h-full '
          />
        </div>
        <div className='font-light py-2 px-3 text-xl  text-slate-950 uppercase'>
          {title.slice(0, 14)}...
        </div>

        {/* <div className='absolute top-0 right-1 text-sm'>{saleInfo}</div> */}
        {avgRating ? (
          <div className='px-3 '>
            {/* <Rating
              initialValue={avgRating}
              allowFraction={true}
              iconsCount={5}
              readonly={true}
              size={10}
            /> */}
            {avgRating}
          </div>
        ) : (
          <div className='px-3'>No Rating</div>
        )}
        <div>
          <div className='px-3 pt-3 text-gray-500 font-medium'>
            {description}...
          </div>
          <Link href={`/book/${book.id}`}>
            <button className='bg-blue-400 text-black px-3 py-2 rounded-sm m-3 hover:bg-blue-700 hover:text-white'>
              Learn More...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookList;
