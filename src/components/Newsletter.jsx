
const Newsletter = () => {
  return (
    <form className="max-w-5xl mx-auto my-10 bg-gray-800 p-10 rounded-lg">
      <header className="footer-title font-bold text-3xl">Newsletter</header>
      <p className="text-lg lg:w-3/4">
      Are you eager to stay informed, inspired, and entertained? Look no further! Our newsletter is your key to a world of captivating content, exciting updates, and thought-provoking articles. Subscribe to get the latest update.
      </p>
      <fieldset className="form-control">
        <label className="label">
          <span className="label-text text-xl font-medium">Enter your email address:</span>
        </label>
        <div className="relative lg:w-3/4">
          <input
            type="email"
            placeholder="name@email.com"
            className="input input-bordered w-full pr-16"
          />
          <button className="btn btn-outline absolute top-0 right-0 rounded-l-none">
            Subscribe
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Newsletter;
