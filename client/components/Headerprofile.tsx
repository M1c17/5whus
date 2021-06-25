export default function Headerprofile(props: {}) {
  return (
    <section
      className="relative block bg-gradient-to-r from-pink-100 via-purple-600 to-purple-400"
      style={{ height: '500px' }}
    >
      <div className="absolute top-0 justify-center object-center w-full h-full bg-center place-items-center bg-hero">
        <img
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NDcweDQ3MC5wbmclMjBwZXJmaWwlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="user-avatar"
          className="mt-16 ml-48 rounded-full shadow-xl"
          style={{ maxWidth: '128px' }}
        />

        <section className="relative py-2 bg-transparent">
          <div className="container px-4 mx-auto">
            <div className="relative flex flex-col w-full mb-6 bg-white rounded-lg shadow-xl">
              <div className="px-6 border-4 border-yellow-500 rounded-lg">
                <div className="mt-8">
                  <h1 className="my-4 text-3xl font-medium tracking-wider text-center font-kaushan">
                    Cassie
                  </h1>
                  <p className="text-sm text-center text-gray-600">
                    13 persons want to connect
                  </p>
                </div>
                <div className="flex flex-wrap pt-3 mx-6 mt-6 border-t">
                  {/* TODO: ADD add tag to the profile */}
                  {/* TODO: CONVERTO TO MODULE COMPONENT */}
                  <div className="px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default hover:bg-indigo-600 hover:text-indigo-100">
                    React
                  </div>
                  <div className="px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default hover:bg-indigo-600 hover:text-indigo-100">
                    Java
                  </div>
                  <div className="px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default hover:bg-indigo-600 hover:text-indigo-100">
                    Python
                  </div>
                  <div className="px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default hover:bg-indigo-600 hover:text-indigo-100">
                    C++
                  </div>
                  <div className="px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default hover:bg-indigo-600 hover:text-indigo-100">
                    C#
                  </div>
                </div>

                <div className="flex flex-wrap pt-3 mx-6 mt-6 border-t">
                  {/* TODO: ADD add tag to the profile */}
                  {/* TODO: CONVERTO TO MODULE COMPONENT */}
                  <div className="px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default hover:bg-indigo-600 hover:text-indigo-100">
                    Easy
                  </div>
                  <div className="px-2 my-1 mr-2 text-xs tracking-wider text-indigo-600 uppercase border border-indigo-600 cursor-default hover:bg-indigo-600 hover:text-indigo-100">
                    Medium
                  </div>
                  Hard
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detail Background profile */}
        <div
          className="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none"
          style={{ height: '70px' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      {/* Card Profile */}
    </section>
  );
}
