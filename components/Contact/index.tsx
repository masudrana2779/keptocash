const ContactComponent = () => {
  return (
    <>
      <div id="ContactUs">
        <div className="py-24">
          <div className="container mx-auto md:px-60 px-4">
            <div className="text-5xl font-bold leading-[64px] mb-3 text-center">
              Contact Us
            </div>
            <div className="text-base leading-7 mb-20 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Name
                    </span>
                    <input
                      type="input"
                      name="name"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md md:text-sm focus:ring-1"
                      placeholder="Enter your name"
                    />
                  </label>
                </div>
                <div className="w-full">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md md:text-sm focus:ring-1"
                      placeholder="Enter your Emial"
                    />
                  </label>
                </div>
                <div className="w-full">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Subject
                    </span>
                    <input
                      type="input"
                      name="name"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md md:text-sm focus:ring-1"
                      placeholder="Provide context"
                    />
                  </label>
                </div>
                <div className="w-full">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Subject
                    </span>
                    <input
                      type="input"
                      name="name"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md md:text-sm focus:ring-1"
                      placeholder="Select Subject"
                    />
                  </label>
                </div>
                <div className="w-full md:col-span-2 col-span-1">
                  <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                      Message
                    </span>
                    <textarea
                      name="name"
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md md:text-sm focus:ring-1 h-40"
                      placeholder="Write your  question here"
                    ></textarea>
                  </label>
                </div>
                <div className="sm:col-span-2 col-span-1 text-right">
                  <button
                    type="submit"
                    className="bg-gray-700 hover:bg-gray-800 px-16 py-4 text-sm leading-5 rounded-full font-semibold text-white"
                  >
                    Send Messege
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
