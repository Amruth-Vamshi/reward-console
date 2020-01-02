import * as React from "react";
import "./style.css";

import { Modal, Input, Button, Switch } from "antd";

interface createRoleModalProps {
  visible: boolean;
  modalDetails: any;
  onClose: any;
  onSubmit: any;
  loading: boolean;
}

interface createRoleModalState {
  newRoleName: String;
  addUsersToDuplicateRoles: boolean;
}

export default class extends React.Component<
  createRoleModalProps,
  createRoleModalState
> {
  constructor(props: createRoleModalProps) {
    super(props);
    this.state = {
      newRoleName: "",
      addUsersToDuplicateRoles: false
    };
  }

  onChange = (type: string, value: any) => {
    this.setState(
      (
        prevState: Readonly<createRoleModalState>,
        props: Readonly<createRoleModalProps>
      ) => {
        return {
          ...prevState,
          [type]: value
        };
      }
    );
  };

  render() {
    let { addUsersToDuplicateRoles, newRoleName } = this.state;
    let { modalDetails, visible, onClose, loading } = this.props;
    return (
      <Modal
        className="access-control-modal-styles"
        visible={visible}
        onCancel={() => {
          onClose();
        }}
        footer={[
          <Button
            disabled={!newRoleName || loading}
            loading={loading}
            type="primary"
            className="submit-button"
            size="large"
            onClick={() => {
              this.props.onSubmit({ newRoleName, addUsersToDuplicateRoles });
            }}
          >
            {modalDetails.buttonLabel}
          </Button>
        ]}
        closable={true}
        title={modalDetails.headerTitle}
      >
        <div className="modal-children-wrapper">
          <div className="duplicate-role-name-form margin-children-seperator">
            <div className="InputLabel">
              Role Name<span className="requiredFieldRedColor">*</span>
            </div>
            <Input
              size="large"
              placeholder="Enter new role name here"
              defaultValue={""}
              onChange={e => {
                this.onChange("newRoleName", e.target.value);
              }}
            />
          </div>
          {modalDetails.type === "duplicateRole" && (
            <div className="display-flex ">
              <Switch
                checked={addUsersToDuplicateRoles}
                onChange={() => {
                  this.onChange(
                    "addUsersToDuplicateRoles",
                    !addUsersToDuplicateRoles
                  );
                }}
              />
              <div className="description-start-intent">
                Assign all associated users of existing role to this role
              </div>
            </div>
          )}
        </div>
      </Modal>
    );
  }
}
