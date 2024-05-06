import Button from "@/components/ui/Button";

const ContactForm = () => {
  const apiUrl = import.meta.env.PROD
    ? "https://api.dazaki.com"
    : "http://localhost:3220";
  return (
    <div className="border-t-4 border-rose-600 bg-zinc-900 px-4 py-16 sm:px-6 lg:col-span-3 lg:border-l-4 lg:border-t-0 lg:px-8 lg:py-28 xl:pl-12">
      <div className="mx-auto max-w-lg lg:max-w-none">
        <form
          action={`${apiUrl}/contact`}
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
              className="block w-full rounded-xl border-zinc-300 px-4 py-3 placeholder-zinc-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
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
              className="block w-full rounded-xl border-zinc-300 px-4 py-3 placeholder-zinc-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
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
              className="block w-full rounded-xl border-zinc-300 px-4 py-3 placeholder-zinc-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
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
              className="block w-full rounded-xl border border-zinc-300 px-4 py-3 placeholder-zinc-500 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              placeholder="Message"
              required
              // pattern=".{1,4096}"
              title="Subject must be no more than 4096 characters in length."
            />
          </div>
          <div>
            <Button size="lg" variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
