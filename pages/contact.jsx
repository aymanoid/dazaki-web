import { useRouter } from "next/router";
import Layout from "components/Layout";
import ContactInfo from "components/contact/ContactInfo";
import ContactForm from "components/contact/ContactForm";
import SubmissionBanner from "components/contact/SubmissionBanner";

const Contact = () => {
  const { query } = useRouter();

  return (
    <Layout>
      <div className="relative bg-zinc-900">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      {query.s && <SubmissionBanner statusCode={query.s} />}
    </Layout>
  );
};

export default Contact;
