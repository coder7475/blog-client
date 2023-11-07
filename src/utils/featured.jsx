
import useAxios from "../hooks/useAxios";

const useFeatured = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mainAxios = useAxios();
  const url = "/featuredBlogs";

  const res = await mainAxios.get(url);
  return res;
};

export default useFeatured;
