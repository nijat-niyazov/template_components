import { format } from 'date-fns';

export const COLUMNS = [
  {
    Header: 'ID',
    Footer: 'id',
    accessor: 'id',
  },
  {
    Header: 'First Name',
    Footer: 'First Name',
    accessor: 'first_name',
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor: 'last_name',
  },
  {
    Header: 'Birth Date',
    Footer: 'Birth Date',
    accessor: 'date_of_birth',
    Cell: ({ value }) => {
      // console.log(value);
      return format(new Date(value), 'dd/MM/yyyy');
    },
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor: 'country',
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor: 'phone',
  },
];

// export const COLUMNS = [
//   {
//     Header: 'ID',
//     Footer: 'ID',
//     accessor: 'id',
//   },
//   {
//     Header: 'Name',
//     Footer: 'Name',
//     columns: [
//       {
//         Header: 'First Name',
//         Footer: 'First Name',
//         accessor: 'first_name',
//       },
//       {
//         Header: 'Last Name',
//         Footer: 'Last Name',
//         accessor: 'last_name',
//       },
//     ],
//   },
//   {
//     Header: 'Info',
//     Footer: 'Info',
//     columns: [
//       {
//         Header: 'Birth Date',
//         Footer: 'Birth Date',
//         accessor: 'date_of_birth',
//       },
//       {
//         Header: 'Country',
//         Footer: 'Country',
//         accessor: 'country',
//       },
//       {
//         Header: 'Phone',
//         Footer: 'Phone',
//         accessor: 'phone',
//       },
//     ],
//   },
// ];
