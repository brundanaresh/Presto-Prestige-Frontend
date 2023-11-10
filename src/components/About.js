import React, { useState } from 'react';

const About = () => {
  const [showMore, setShowMore] = useState([false, false, false, false]);

  const toggleReadMore = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  return (
    <div className="container text-main-heading mt-6 p-0 bg-white">
      <div className="row mt-0"></div>
      <div className="col-sm-12"></div>
      <div style={{ paddingTop: '60px' }}>
      <header className="bg-white w-full top-60 left-0 z-0">
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold mb-5">Know More About</h1>
          <h2 className="text-2xl font-semibold">Magician's Name</h2>
        </div>
      </header>

      <div className="container mx-auto mt-0 py-10 px-0">

        {/* Section 1 */}
        <section className="mt-6 container mx-auto py-6 bg-white-100">
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
            <div className="w-1/2 pr-8">
              <img
                src="./stoc.jpg"
                alt="Magician's Image"
                className="square-full h-full w-full object-cover mx-auto mb-4"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold text-black mb-4">My Magical Journey</h2>
              <p className="text-black-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem. Nunc pharetra lectus eget luctus varius. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Duis auctor neque ac nisi bibendum, id auctor turpis dapibus. Donec
                gravida ex vel varius vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem.

                <button
                  className="text-blue-600 hover:underline focus:outline-none"
                  onClick={() => toggleReadMore(0)}
                >
                  {showMore[0] ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-6 container mx-auto py-6 bg-white-200">
          <div className="bg-white shadow-lg rounded-lg p-8 flex items-center">
          
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold text-black mb-6">Performance Highlights</h2>
              <p className="text-black-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem. Nunc pharetra lectus eget luctus varius. Pellentesque habitant morbi tristique senectus et netus
                et malesuada fames ac turpis egestas. Duis auctor neque ac nisi bibendum, id auctor turpis dapibus. Donec
                gravida ex vel varius vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem. Nunc pharetra lectus eget luctus varius. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Duis auctor neque ac nisi bibendum, id auctor turpis dapibus. Donec
                gravida ex vel varius vulputate.

                <button
                  className="text-blue-600 hover:underline focus:outline-none"
                  onClick={() => toggleReadMore(1)}
                >
                  {showMore[1] ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
            <div className="w-1/2 pl-8">
              <video
                controls
                poster="./poster.jpg"
                className="square-full w-full h-full object-cover"
              >
                <source src="./Magiccccc.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-6 container mx-auto py-6 bg-white-100">
          <div className="bg-white shadow-lg rounded-lg p-8 flex items-center">
           
            <div className="w-1/2 pr-8">
              <img
                src="./stoc.jpg"
                alt="Magician's Image"
                className="square-full h-full w-full object-cover mx-auto mb-4"
              />
            </div>

            {/* Text on the right */}
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold text-black mb-4">Events</h2>
              <p className="text-black-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem. Nunc pharetra lectus eget luctus varius. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Duis auctor neque ac nisi bibendum, id auctor turpis dapibus. Donec
                gravida ex vel varius vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem. Nunc pharetra lectus eget luctus varius. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Duis auctor neque ac nisi bibendum, id auctor turpis dapibus. Donec
                gravida ex vel varius vulputate.

                <button
                  className="text-blue-600 hover:underline focus:outline-none"
                  onClick={() => toggleReadMore(2)}
                >
                  {showMore[2] ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-6 container mx-auto py-6 bg-white-200">
          <div className="bg-white shadow-lg rounded-lg p-8 flex items-center">
          
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold text-black mb-4">Fun Facts</h2>
              <p className="text-black-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem. Nunc pharetra lectus eget luctus varius. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Duis auctor neque ac nisi bibendum, id auctor turpis dapibus. Donec
                gravida ex vel varius vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem. Nunc pharetra lectus eget luctus varius. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Duis auctor neque ac nisi bibendum, id auctor turpis dapibus. Donec
                gravida ex vel varius vulputate.

                <button
                  className="text-blue-600 hover:underline focus:outline-none"
                  onClick={() => toggleReadMore(3)}
                >
                  {showMore[3] ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
         <div className="w-1/2 pl-8">
              <img
                src="./yAkkk.jpeg"
                alt="Magician's Image"
                className="square-full h-full w-full object-cover mx-auto mb-4"
              />
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mt-6 container mx-auto py-6 bg-white-100">
          <div className="bg-white shadow-lg rounded-lg p-4 flex items-center">
           
            <div className="w-1/2 pr-8">
              <img
                src="./stoc.jpg"
                alt="Magician's Image"
                className="square-full h-full w-full object-cover mx-auto mb-4"
              />
            </div>

            
            <div className="w-1/2">
              <h2 className="text-2xl font-semibold text-black mb-4">More About Me</h2>
              <p className="text-black-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem. Nunc pharetra lectus eget luctus varius. Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Duis auctor neque ac nisi bibendum, id auctor turpis dapibus. Donec
                gravida ex vel varius vulputate.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac urna auctor, ultrices urna eu, sodales
                lorem.

                <button
                  className="text-blue-600 hover:underline focus:outline-none"
                  onClick={() => toggleReadMore(0)}
                >
                  {showMore[0] ? 'Read Less' : 'Read More'}
                </button>
              </p>
            </div>
          </div>
        </section>

        <div className="mt-6 flex justify-center">
          <a
            href="#book-now-section" 
            className="bg-blue-600 text-white py-4 px-20 rounded-full text-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
