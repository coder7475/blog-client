// /* eslint-disable react-hooks/rules-of-hooks */
// import { useMemo } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { useTable } from "react-table";
// import useFeatured from '../utils/featured';
// import { useQuery } from "@tanstack/react-query";
// const FeaturedTable = () => {
 
//   const { isPending, isError, data: latest , error  } = useQuery({
//     queryKey: ["featuredBlogs"],
//     queryFn: useFeatured
//   });
  
//   if (isPending) {
//     return <span>Loading.....</span>
//   }

//   if (isError) {
//     return <span>Error: {error.message}</span>
//   }
//   const res = latest.data;
//   // console.log(res);
//   const data = useMemo(() => res, [res]);
//   console.log(data);
//   const columns = useMemo(
//     () => [
//       {
//         Header: "Serial Number",
//         accessor: "_id",
//       },
//       {
//         Header: "Blog Title",
//         accessor: "title",
//       },
//     ],
//     []
//   );

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({ columns, data });

//   return (
//     <>
//       <header>
//         <Navbar />
//       </header>
//       <div className="container max-w-5xl mx-auto">
//         <table {...getTableProps()} className="table">
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => (
//                     <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
//                   ))}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//       <footer>
//         <Footer />
//       </footer>
//     </>
//   );
// };

// export default FeaturedTable;
