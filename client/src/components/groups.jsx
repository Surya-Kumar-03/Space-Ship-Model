import React, { useState } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import axios from "axios";

const groups = [
  { value: 1, label: "Group 1" },
  { value: 2, label: "Group 2" },
  { value: 3, label: "Group 3" },
  { value: 4, label: "Group 4" },
  { value: 5, label: "Group 5" },
  { value: 6, label: "Group 6" },
];
function Group() {
  //selectedGroup
  const [selectedGroup, setSelectedGroup] = useState(1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      <p>Group:</p>
      <FormControl>
        <Select
          style={{ marginLeft: "1rem" }}
          value={selectedGroup}
          onChange={(event) => {
            setSelectedGroup(event.target.value);
            axios.post(process.env.NODE_URL + "/api/group", {
              selectedGroup: event.target.value,
            });
          }}
        >
          {groups.map((group) => (
            <MenuItem key={group.value} value={group.value}>
              {group.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Group;
