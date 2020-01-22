import * as React from "react";
import { Tabs } from "antd";
import TaskItem from "./TaskItem";
import { Widget } from "../../Widget";

const TabPane = Tabs.TabPane;

interface IProps {}
interface IState {
  taskList: any[];
}

class TaskList extends React.Component<IProps, IState> {
  onChange = (data, index) => {
    this.setState(prevState => ({
      taskList: prevState.taskList.map(task => {
        if (task.id === data.id) {
          task.completed = !data.completed;
        }
        return task;
      })
    }));
  };

  constructor(props) {
    super(props);
    this.state = { taskList: props.taskList };
  }

  render() {
    return (
      <Widget
        title="Task List"
        styleName="gx-card-tabs"
        extra={
          <i className="icon icon-search-new gx-pointer gx-fs-xxl gx-text-primary" />
        }
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="All Task" key="1">
            {this.state.taskList.map((task, index) => (
              <TaskItem key={index} data={task} onChange={this.onChange} />
            ))}
          </TabPane>
          <TabPane tab="My Task" key="2">
            {this.state.taskList.map((task, index) => (
              <TaskItem
                key={"2" + index}
                data={task}
                onChange={this.onChange}
              />
            ))}
          </TabPane>
        </Tabs>
      </Widget>
    );
  }
}

export default TaskList;
