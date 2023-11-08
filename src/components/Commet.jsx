import PropTypes from "prop-types";
const Commet = ({ data }) => {
  // console.log(comment);
  const { comment, user_name, user_email, user_profile } = data;
  return (
    <div className="relative flex w-full max-w-xl flex-col rounded-xl bg-gray-400  bg-clip-border text-gray-900 shadow-none p-5">
      <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
        <img
          src={user_profile}
          alt="user picture"
          className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              {user_name}
            </h5>
          </div>
          <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
            {user_email}
          </p>
        </div>
      </div>
      <div className="p-0 mb-6">
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {comment}
        </p>
      </div>
    </div>
  );
};

Commet.propTypes = {
  data: PropTypes.shape({
    comment: PropTypes.any,
    user_email: PropTypes.any,
    user_name: PropTypes.any,
    user_profile: PropTypes.any,
  }),
};

export default Commet;
