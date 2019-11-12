import * as React from "react";
import UserCell from "./UserCell/index";

const ContactList = ({
  onSelectUser,
  selectedSectionId,
  contactList
}: {
  onSelectUser: any;
  selectedSectionId: any;
  contactList: any;
}) => {
  return (
    <div className="gx-chat-user">
      {contactList.map((user: any, index: any) => (
        <UserCell
          key={index}
          user={user}
          selectedSectionId={selectedSectionId}
          onSelectUser={onSelectUser}
        />
      ))}
    </div>
  );
};

export default ContactList;
