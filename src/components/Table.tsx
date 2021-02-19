import React, { useState, useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';

import { getUserData } from '../utils/Api';

interface Row {
  pic: string;
  name: string;
  surname: string;
  email: string;
  phone: string;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function Table() {
  const [state, setState] = useState<TableState>({
    columns: [
      {
        title: '',
        field: 'pic',
        render: function RowImg(rowData) {
          return <img src={rowData.pic} style={{ width: 100, borderRadius: '50%' }} />;
        },
        cellStyle: {
          textAlign: 'center',
        },
      },
      { title: 'First', field: 'name' },
      { title: 'Last', field: 'surname' },
      {
        title: 'Email',
        field: 'email',
      },
      {
        title: 'Phone',
        field: 'phone',
      },
    ],
    data: [],
  });

  useEffect(() => {
    async function makeApiCall() {
      try {
        const res = await getUserData();
        console.log(res.data.results);
        setState({
          ...state,
          data: res.data.results.map((user: any) => ({
            pic: user.picture.thumbnail,
            name: user.name.first,
            surname: user.name.last,
            email: user.email,
            phone: user.phone,
          })),
        });
      } catch (err) {
        console.log(err);
      }
    }
    makeApiCall();
  }, []);

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      options={{ sorting: true }}
      editable={{
        onRowAdd: (newData: Row) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(null);
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData: Row, oldData: Row | undefined) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(null);
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData: Row) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve(null);
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
