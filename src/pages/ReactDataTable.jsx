import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import useAxios from "./../hooks/useAxios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DataTable from "react-data-table-component";
import Footer from "../components/Footer";

const columns = [
  {
    name: "Serial Number",
    selector: (_, index) => index + 1,
    // cell: row => <tr className="bg-gray-900 text-white">{row}</tr>
    // style: {
    //   backgroundColor: "gray",
    //   color: "white"
    // }
    // compact: true,
    wrap: true,
    hide: "md",
    // grow: 0,
  },
  {
    name: "Blog Title",
    selector: (row) => row.title,
    // cell: row => <tr className="bg-gray-900 text-white">{row}</tr>
    // compact: true,
    wrap: true,
    grow: 1,
  },
  {
    name: "Blog Owner",
    selector: (row) => row.author,
    // cell: row => <tr className="bg-gray-900 text-white">{row}</tr>
    // compact: true,
    wrap: true,
    grow: 1,
  },
  {
    name: "Profile Picture",
    grow: 1,
    cell: (row) => (
      <img height="84px" width="56px" alt={row.author} src={row.profile} />
    ),
    // compact: true,
    wrap: true,
  },
];

const ReactDataTable = () => {
  const mainAxios = useAxios();
  const url = "/featuredBlogs";

  const useFeatured = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const res = await mainAxios.get(url);
    return res;
  };
  const {
    isPending,
    isError,
    data: latest,
    error,
  } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: useFeatured,
  });

  if (isPending) {
    return <Skeleton count={5} />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const res = latest.data;
  // console.log(res);

  return (
    <div >
      <Navbar />
      <h1 className="text-5xl my-10 text-center font-bold">Top 10 Featured Blogs</h1>
      <div
        style={{
          // width: "1200px",
          margin: "auto"
        }}
      >
        <DataTable
          // title="Top 10 Featured Blogs"
          columns={columns}
          data={res}
          theme="dark"
          responsive={false}
          // fixedHeader="True"
          // fixedHeaderScrollHeight="600px"
        />
      </div>
      <div className="mb-10"></div>
      <Footer/>
    </div>
  );
};

export default ReactDataTable;
