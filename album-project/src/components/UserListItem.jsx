import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumList from "./AlbumList";
import { GoTrashcan } from "react-icons/go";

const UserListItem = ({ user }) => {
  const header = (
    <>
      <button style={{marginRight:"30px", border:"none"}}>
        <GoTrashcan />
      </button>
      {user.name}
    </>
  );

  return (
    <div>
      <ExpandablePanel header={header}>
        <AlbumList user={user} />
      </ExpandablePanel>
    </div>
  );
};

export default UserListItem;
