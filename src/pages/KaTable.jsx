import { Table } from "ka-table";
import { DataType, EditingMode, SortingMode } from "ka-table/enums";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import useAxios from './../hooks/useAxios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const KaTable = () => {
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
    return <Skeleton count={5} /> ;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  const res = latest.data;
  // console.log(res);
  const dataArray = res.map((blog, index) => ({
    column1: `${index}`,
    column2: `${blog.title.slice(0, 60)}...`,
    column3: `${blog.author} `,
    column4: `${blog.image}`,
    id: blog._id,
  }));
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center text-xl min-h-screen">
        <Table
          columns={[
            { key: "column1", title: "Serial ID", dataType: DataType.String },
            { key: "column2", title: "Blog Title", dataType: DataType.String },
            { key: "column3", title: "Blog Owner", dataType: DataType.String },
            {
              key: "column4",
              title: "Profile Picture",
              dataType: DataType.String,
              cell: () => {
                return <span>H</span>;
              },
            },
          ]}
          data={dataArray}
          editingMode={EditingMode.Cell}
          rowKeyField={"id"}
          sortingMode={SortingMode.Single}
          className="text-center"
        />
      </div>
    </>
  );
};

export default KaTable;
