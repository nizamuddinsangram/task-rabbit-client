import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex mt-20 items-center h-full p-16 bg-[#41aca1] text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-[#005149]">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-white">
            But don't worry, you can find plenty of other things on our
            homepage.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 font-semibold rounded bg-[#005149] text-white transition-colors hover:bg-[#00695c]"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
