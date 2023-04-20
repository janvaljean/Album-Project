import React from "react";
import { useFetchUsersQuery } from "../store/apis/usersApi";
import { Skeleton } from "@mui/material";
import UserListItem from "./UserListItem";

const UsersList = () => {
  const { data, isFetching, isError } = useFetchUsersQuery();
  console.log(data, isFetching, isError);
  let content;
  if (isFetching) {
    content = (
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={1000}
        height={1000}
      />
    );
  }else if(isError){
    content = <div>Hata var</div>
  }
  else{
    content = data.map((user) => <UserListItem key={user.id} user={user}/>)
  }
  return <div>{content}</div>;
};

export default UsersList;
