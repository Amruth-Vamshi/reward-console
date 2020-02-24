import * as React from 'react';

import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

const EditableContext = React.createContext({});

interface editableCellProps {
  editing: any;
  dataIndex: any;
  title: any;
  inputType: any;
  record: any;
  index: any;
  children: any;
}

class EditableCell extends React.Component<editableCellProps> {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }: any) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;

    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

interface editableTableProps extends FormComponentProps {
  // form?: any;
  loading?: boolean;
  tableHeaders?: any;
  tableData?: any;
  onChangeData?: any;
}
interface editableTableState {
  data: any;
  editingKey: String;
  loading?: boolean;
}

class EditableTable extends React.Component<
  editableTableProps,
  editableTableState
> {
  constructor(props: editableTableProps) {
    super(props);
    this.state = { data: [], editingKey: '', loading: true };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      // nextProps.tableData !== prevState.data ||
      nextProps.loading !== prevState.loading
    ) {
      return { data: nextProps.tableData, loading: nextProps.loading };
    } else {
      return null;
    }
  }

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.props.onChangeData(
          {
            ...item,
            ...row,
          },
          index
        );
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  columns = () => {
    return [
      ...this.props.tableHeaders,
      {
        title: 'OPERATION',
        dataIndex: 'operation',
        render: (text, record) => {
          const { editingKey } = this.state;
          const editable = this.isEditing(record);
          return editable ? (
            <span>
              <EditableContext.Consumer>
                {form => (
                  <a
                    onClick={() => this.save(form, record.key)}
                    style={{ marginRight: 8 }}
                  >
                    Save
                  </a>
                )}
              </EditableContext.Consumer>
              <Popconfirm
                title="Sure to cancel?"
                onConfirm={() => this.cancel()}
              >
                <a>Cancel</a>
              </Popconfirm>
            </span>
          ) : (
            <a
              className={editingKey !== '' ? 'avoid-click' : null}
              onClick={() => this.edit(record.key)}
            >
              Edit
            </a>
          );
        },
      },
    ];
  };

  render() {
    const components = {
      body: {
        cell: EditableCell,
      },
    };
    const columns = this.columns().map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <EditableContext.Provider value={this.props.form}>
        <Table
          loading={this.state.loading}
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          // rowClassName="editable-row"
          pagination={{
            onChange: this.cancel,
          }}
        />
      </EditableContext.Provider>
    );
  }
}

const EditableFormTable = Form.create<editableTableProps>()(EditableTable);

export default EditableFormTable;
