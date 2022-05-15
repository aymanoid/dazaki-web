const ContactForm = () => {
  return (
    <div className="border-t-4 border-rose-600 bg-zinc-900 py-16 px-4 sm:px-6 lg:col-span-3 lg:border-l-4 lg:border-t-0 lg:py-28 lg:px-8 xl:pl-12">
      <div className="mx-auto max-w-lg lg:max-w-none">
        <form
          action="/api/contact"
          method="POST"
          className="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="block w-full rounded-md border-zinc-300 py-3 px-4 placeholder-zinc-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              placeholder="Name"
              required
              pattern=".{1,256}"
              title="Name must be no more than 256 characters in length."
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-zinc-300 py-3 px-4 placeholder-zinc-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              placeholder="Email"
              required
              pattern=".{1,256}"
              title="Email must be no more than 256 characters in length."
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="block w-full rounded-md border-zinc-300 py-3 px-4 placeholder-zinc-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              placeholder="Subject"
              required
              pattern=".{1,256}"
              title="Subject must be no more than 256 characters in length."
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="block w-full rounded-md border border-zinc-300 py-3 px-4 placeholder-zinc-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              placeholder="Message"
              required
              pattern=".{1,4096}"
              title="Subject must be no more than 4096 characters in length."
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md bg-gradient-to-r from-purple-500 to-rose-600 py-3 px-6 text-base font-medium text-white hover:from-purple-400 hover:to-rose-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
