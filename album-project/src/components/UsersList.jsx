import React from "react";
import { useFetchUsersQuery, useAddUserMutation } from "../store";
import { Button, CircularProgress, Skeleton, debounce } from "@mui/material";
import UserListItem from "./UserListItem";

const UsersList = () => {
  const { data, isFetching, isError } = useFetchUsersQuery();
  const [addUser, results] = useAddUserMutation();
  // console.log(data, isFetching, isError);

  const handleUSerAdd = () => {
    addUser();
  };

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
  } else if (isError) {
    content = <div>Hata var</div>;
  } else {
    content = data.map((user) => <UserListItem key={user.id} user={user} />);
  }
  return (
    <div>
      <div className="topArrangement">
        <h1 style={{ fontSize: "24px" }}>Members</h1>
        <Button variant="outlined" onClick={handleUSerAdd}>
          {results.isLoading ? (
            <CircularProgress />
          ) : (
            <span>Add a Member+</span>
          )}
        </Button>
      </div>

      {content}
    </div>
  );
};

export default UsersList;
