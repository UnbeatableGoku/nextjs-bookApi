import React, { useState } from 'react';

const BookDetail = ({ details }) => {
  const [descriptionData, setDescriptionData] = useState(true);
  const img = details.volumeInfo.imageLinks.thumbnail
    ? details.volumeInfo.imageLinks.thumbnail
    : null;
  const title = details.volumeInfo.title ? details.volumeInfo.title : null;
  const subtitle = details.volumeInfo.subtitle
    ? details.volumeInfo.subtitle
    : 'No Subtitle Available';
  const description = details.volumeInfo.description
    ? details.volumeInfo.description
    : 'No Description Available';
  const smallDiscription = details.volumeInfo.description
    ? details.volumeInfo.description.slice(0, 500)
    : 'No Description Available';

  const publishedDate = details.volumeInfo.publishedDate
    ? details.volumeInfo.publishedDate
    : 'No Published Date Available';
  const publisher = details.volumeInfo.publisher
    ? details.volumeInfo.publisher
    : 'No Publisher Available';
  const avgRating = details.volumeInfo.avgRating
    ? details.volumeInfo.avgRating
    : 'NO Rating Available';
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 p-16'>
      <div className='max-w-[200px] w-full mx-auto '>
        <img
          src={img}
          className='object-contain w-full border-4 border-black'
        />
      </div>
      <div className='mx-auto flex flex-col '>
        <div className='text-4xl py-3'>
          <div>{title}</div>
        </div>
        <div className='text-xl'>
          <div>{subtitle}</div>
        </div>
        <div>
          {descriptionData ? (
            <div className='relative py-3'>
              <div
                dangerouslySetInnerHTML={{
                  __html: smallDiscription,
                }}
              ></div>
              <br></br>
              <button
                className='inline-block absolute start-0 bottom-0 text-sm border-b-2  font-extrabold p-1   '
                onClick={() => setDescriptionData(!descriptionData)}
              >
                Readmore...
              </button>
            </div>
          ) : (
            <div className='relative py-3'>
              <div
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
              <br></br>
              <button
                className='inline-block absolute start-0 bottom-0 text-sm border-b-2  font-extrabold p-1'
                onClick={() => setDescriptionData(!descriptionData)}
              >
                Go Back...
              </button>
            </div>
          )}
        </div>
        <div>
          <div className='grid grid-cols-2 py-3'>
            <div>Published Date</div>
            <div>{publishedDate}</div>
          </div>
          <hr></hr>
          <div className='grid grid-cols-2 py-3'>
            <div>Publisher </div>
            <div>{publisher}</div>
          </div>
          <hr></hr>
          <div className='grid grid-cols-2 py-3'>
            <div>Rating </div>
            <div>{avgRating}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
