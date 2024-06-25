import React from "react";

const Learn = () => {
  return (
    <div>
      <hr />
      <div className=" flex justify-center mb-12 ">
        <div className="bg-black text-white p-8 text-center py-16">
          <h1 className="text-3xl font-bold mb-4">
            So, Why Choose A Dating App Like Lovelink?
          </h1>
          <p className="text-lg mb-6">
            When it comes to dating apps, you’ve got options: Badoo, Bumble,
            Hinge, Match, POF, OKCupid, and many more.
            <br /> It doesn’t matter if you want to find love, a date, or just
            have a casual chat, you still want to find an app that’s the right
            match for you.
            <br /> And it’s not always black and white — when you want to meet
            new people, your friends at Tinder can help you out with features
            designed to make the impossible possible. Dating online just got
            easier.
          </p>
          <button className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
            Join Now
          </button>
        </div>
      </div>
      <div className=" flex justify-between items-center max-w-screen-lg mx-auto mb-8">
        {/* Left Side */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://tinder.com/static/build/build-ssg/static/about-1-11a0e98f7f446f5f6bc3a8517c38fb05.webp"
            alt="About Tinder"
            className="w-full rounded-lg mb-6 lg:mb-0"
          />
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl font-bold mb-4">Explore Your Passions</h1>
          <p className="mb-6">
            It’s easy to chat up a match when you know you have something in
            common. The Tinder app lets you add Passions to your profile and
            connect with people who share your interests.
          </p>
          <h2 className="text-xl font-bold mb-2">See Who Likes You</h2>
          <p className="mb-6">
            There are only so many hours in a day for dating. We get it. A
            Tinder Gold™ subscription lets you see all the people who Like you,
            saving you precious time so you can focus on the finer things in
            life.
          </p>
          <h2 className="text-xl font-bold mb-2">Make Every Like Count</h2>
          <p className="mb-6">
            Exclusive to Tinder Platinum™ subscribers, Priority Likes puts your
            profile in front of the people you Like faster.
          </p>
          <h2 className="text-xl font-bold mb-2">Endless Possibilities</h2>
          <p className="mb-6">
            With more than 55 billion matches to date, we’re no stranger to
            bringing singles together online. Some sites, like Hinge and
            eharmony, are designed for long-term relationships, but on the
            Tinder app, we’re all about the experience and offer possibilities
            for whatever it is you’re looking for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
