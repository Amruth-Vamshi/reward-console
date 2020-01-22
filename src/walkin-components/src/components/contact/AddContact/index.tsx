import * as React from "react";
import { Avatar, Input, Modal } from "antd";

import { InjectMassageModule as IntlMessages } from "../../../util/IntlMessages";

interface IProps {
  onSaveContact?: any;
  onContactClose?: any;
  open?: any;
  contact?: any;
}

interface IState {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  designation?: string;
  selected?: boolean;
  starred?: boolean;
  frequently?: any;
  thumb?: string;
}

class AddContact extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    const {
      id,
      thumb,
      name,
      email,
      phone,
      designation,
      selected,
      starred,
      frequently
    } = props.contact;
    this.state = {
      id,
      thumb,
      name,
      email,
      phone,
      designation,
      selected,
      starred,
      frequently
    };
  }

  render() {
    const { onSaveContact, onContactClose, open, contact } = this.props;
    const {
      id,
      name,
      email,
      phone,
      designation,
      selected,
      starred,
      frequently
    } = this.state;
    let { thumb } = this.state;
    if (!thumb) {
      thumb = require("assets/images/placeholder.jpg");
    }
    return (
      <Modal
        title={
          contact.name === "" ? (
            <IntlMessages id="contact.addContact" />
          ) : (
            <IntlMessages id="contact.saveContact" />
          )
        }
        visible={open}
        closable={false}
        onOk={() => {
          if (name === "") return;
          onContactClose();
          onSaveContact({
            id: id,
            name: name,
            thumb: thumb,
            email: email,
            phone: phone,
            designation: designation,
            selected: selected,
            starred: starred,
            frequently: frequently
          });
          this.setState({
            id: id + 1,
            name: "",
            thumb: "",
            email: "",
            phone: "",
            designation: ""
          });
        }}
        onCancel={onContactClose}
      >
        <div className="gx-modal-box-row">
          <div className="gx-modal-box-avatar">
            <Avatar size="large" src={thumb} />
          </div>

          <div className="gx-modal-box-form-item">
            <div className="gx-form-group">
              <Input
                required
                placeholder="Name"
                onChange={event => this.setState({ name: event.target.value })}
                defaultValue={name}
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Email"
                onChange={event => this.setState({ email: event.target.value })}
                value={email}
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Phone"
                onChange={event => this.setState({ phone: event.target.value })}
                value={phone}
              />
            </div>
            <div className="gx-form-group">
              <Input
                placeholder="Designation"
                onChange={event =>
                  this.setState({ designation: event.target.value })
                }
                value={designation}
              />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AddContact;
