import * as React from 'react';
import UserCell from './UserCell/index';

const ChatUserList = ({
  chatUsers,
  selectedSectionId,
  onSelectUser,
}: {
  chatUsers: any;
  selectedSectionId: any;
  onSelectUser: any;
}) => {
  return (
    <div className="gx-chat-user">
      {chatUsers.map((chat: any, index: any) => (
        <UserCell
          key={index}
          chat={chat}
          selectedSectionId={selectedSectionId}
          onSelectUser={onSelectUser}
        />
      ))}
    </div>
  );
};

export default ChatUserList;
