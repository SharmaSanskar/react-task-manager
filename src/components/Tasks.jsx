import { useCallback, useEffect, useState } from "react";
import TaskTable from "./TaskTable";
import { useSelector } from "react-redux";
import { Text } from "@chakra-ui/react";

const Tasks = () => {
  const [filteredTasks, setFilteredTasks] = useState();
  const tasks = useSelector((state) => state.tasks.value);
  const {
    type: taskType,
    assigned: taskAssigned,
    status: taskStatus,
  } = useSelector((state) => state.filters.value);

  const columns = [
    {
      displayName: "Date",
      attr: "date",
    },
    {
      displayName: "Entity Name",
      attr: "entityName",
    },
    {
      displayName: "Type",
      attr: "type",
    },
    {
      displayName: "Assigned To",
      attr: "assignedTo",
    },
    {
      displayName: "Notes",
      attr: "notes",
    },
    {
      displayName: "Status",
      attr: "status",
    },
  ];

  const filterType = useCallback(
    (arr) => {
      if (taskType) {
        return arr.filter((task) => task.type === taskType);
      } else {
        return arr;
      }
    },
    [taskType]
  );

  const filterAssigned = useCallback(
    (arr) => {
      if (taskAssigned) {
        return arr.filter((task) => task.assignedTo === taskAssigned);
      } else {
        return arr;
      }
    },
    [taskAssigned]
  );

  const filterStatus = useCallback(
    (arr) => {
      if (taskStatus) {
        return arr.filter((task) => task.status === taskStatus);
      } else {
        return arr;
      }
    },
    [taskStatus]
  );

  useEffect(() => {
    // Filter tasks and update filtered taskList to display in table
    let res = tasks;
    res = filterType(res);
    res = filterAssigned(res);
    res = filterStatus(res);
    setFilteredTasks(res);
  }, [tasks, filterType, filterAssigned, filterStatus]);

  return (
    <>
      <Text mt={4} fontSize="2xl" fontWeight="bold">
        Tasks
      </Text>
      <TaskTable taskList={filteredTasks} columns={columns} />
    </>
  );
};

export default Tasks;
