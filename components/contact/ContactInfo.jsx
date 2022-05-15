import Link from "next/link";
import DiscordSvg from "components/svgs/social/discord.svg";
import TelegramSvg from "components/svgs/social/telegram.svg";
import EmailSvg from "components/svgs/iconmonstr-email-1.svg";

const ContactInfo = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-28 xl:pr-12">
      <div className="mx-auto max-w-lg">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-3 text-lg leading-6 text-gray-500">
          If you&apos;d like to discuss a project idea, general inquiries, or
          anything else, feel free to get in touch.
        </p>
        <dl className="mt-8 text-base text-gray-500">
          <div>
            <dt className="sr-only">Contact Method</dt>
            <dd>
              <p>Use the form or your preferred contact method to reach out.</p>
            </dd>
          </div>
          <Link href="mailto:ayman@dazaki.com" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <div className="mt-3 hover:text-rose-600">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <EmailSvg
                    className="h-6 w-6 flex-shrink-0 fill-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">ayman@dazaki.com</span>
                </dd>
              </div>
            </a>
          </Link>
          <Link href="https://discord.com/users/714385023112970303" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <div className="mt-3 hover:text-rose-600">
                <dt className="sr-only">Discord</dt>
                <dd className="flex">
                  <DiscordSvg
                    className="h-6 w-6 flex-shrink-0 fill-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">aymanoid#0609</span>
                </dd>
              </div>
            </a>
          </Link>
          <Link href="https://t.me/aymanoid" passHref>
            <a target="_blank" rel="noopener noreferrer">
              <div className="mt-3 hover:text-rose-600">
                <dt className="sr-only">Telegram</dt>
                <dd className="flex">
                  <TelegramSvg
                    className="h-6 w-6 flex-shrink-0 fill-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-3">aymanoid</span>
                </dd>
              </div>
            </a>
          </Link>
        </dl>
      </div>
    </div>
  );
};

export default ContactInfo;
