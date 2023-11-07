import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import useFeatured from '../utils/featured';
import { useQuery } from "@tanstack/react-query";
import Navbar from '../components/Navbar';




const KaTable = () => {
  const { isPending, isError, data: latest , error  } = useQuery({
    queryKey: ["featuredBlogs"],
    queryFn: useFeatured
  });
  
  if (isPending) {
    return <span>Loading.....</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  const res = latest.data;
  console.log(res);
  const dataArray = res.map(
    (blog, index) => ({
      column1: `${index}`,
      column2: `${blog.title.slice(0,60)}...`,
      column3: `${blog.author} `,
      column4: `${blog.image}`,
      id: blog._id,
    }),
  );
  return (
    <>
    <Navbar/>
    <div
    className="flex flex-col items-center text-xl min-h-screen">
    <Table
      columns={[
        { key: 'column1', title: 'Serial ID', dataType: DataType.String },
        { key: 'column2', title: 'Blog Title', dataType: DataType.String },
        { key: 'column3', title: 'Blog Owner', dataType: DataType.String },
        { key: 'column4', title: 'Profile Picture', dataType: DataType.String, cell: () => {
          return <span>H</span>
        } },
      ]}
      data={dataArray}
      editingMode={EditingMode.Cell}
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
      className="text-center"
    />
    </div>
    </>
  );
};

export default KaTable;