import React from 'react';

const Home = () => {
  const imageBlockData = [
    { imageURL: '/upcoming.png', title: 'Upcoming Shows', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageURL: '/leviatation.png', title: 'Levitation', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageURL: '/magic show.jpeg', title: 'Magic Show', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { imageURL: '/show.png', title: 'Show', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <div className="homepage">
      <header className="fixed top-0 left-0 w-full bg-transparent p-2 text-white border-b-0"></header>
      <div className="flex flex-col">
      <img src="/Pic.jpeg" alt="Home Page Image" className="w-full h-auto max-h-screen mb-0" />
        {imageBlockData.map((data, index) => (
          <div className="image-block flex items-start w-full mb-1" key={index}>
            <div className="flex w-full">
              <img
                src={data.imageURL}
                alt={`Image ${index + 1}`}
                className="w-1/2 md:w-full h-auto object-cover"
                style={{ marginRight: '4px' }}
              />
              <div className="w-1/2 md:w-full bg-gradient-to-r from-purple-500 via-purple-300 to-indigo-600 p-2 square-lg shadow-md flex flex-col justify-between">
                <div className="flex-grow p-2 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 rounded-lg shadow-md ml-4 mt-0 justify-between">
                  <h2 className="text-lg mb-4 text-black">{data.title}</h2>
                  <p className="text-black">{data.content}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
