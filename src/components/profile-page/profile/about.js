import React from 'react';

const ProfileAbout = () => {
  return (
    <div className="bg-white w-11/12 md:w-3/5 lg:w-1/2 xl:w-5/12 rounded-md text-darkP flex flex-col p-8 text-center">
      <h1 className="font-semibold text-2xl">About</h1>
      <div className="my-4">
        <h2 className="font-bold">Likes</h2>
        <p className="md:text-base text-sm">Friendliness, Ice Creams</p>
      </div>
      <div className="my-4">
        <h2 className="font-bold">Dislikes</h2>
        <p className="md:text-base text-sm">Horror movies</p>
      </div>
      <div className="my-4">
        <h2 className="font-bold">Favourite Songs</h2>
        <p className="md:text-base text-sm">Somewhere over the rainbow</p>
      </div>
      <div className="my-4">
        <h2 className="font-bold">Favourite Books</h2>
        <p className="md:text-base text-sm">You are a badass</p>
      </div>
    </div>
  );
};

export default ProfileAbout;
