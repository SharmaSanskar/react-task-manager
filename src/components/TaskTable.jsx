import { useDispatch } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { deleteTask, changeStatus, sortCol } from "../features/task/taskSlice";
import TaskModal from "./TaskModal";
import { useState } from "react";

const TaskTable = ({ taskList, columns }) => {
  // Modal controls from chakra-ui
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editTask, setEditTask] = useState({});
  const dispatch = useDispatch();

  // Functions to dispatch differenct actions
  const handleEdit = (task) => {
    setEditTask(task);
    onOpen();
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask({ id: taskId }));
  };

  const handleStatusChange = (taskId, status) => {
    dispatch(changeStatus({ id: taskId, status }));
  };

  const handleSort = (attr, ascending) => {
    dispatch(sortCol({ attr, ascending }));
  };

  return (
    <div>
      <Table variant="simple">
        {/* TABLE HEADER */}
        <Thead>
          <Tr>
            {columns.map((col) => (
              <Th key={col.attr}>
                {col.displayName}{" "}
                <Button onClick={() => handleSort(col.attr, true)} size="xs">
                  &#x25B4;
                </Button>
                <Button onClick={() => handleSort(col.attr, false)} size="xs">
                  &#x25Be;
                </Button>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {taskList?.map((task) => (
            <Tr key={task.id}>
              <Td>{task.date.toLocaleDateString("en-GB")}</Td>
              <Td>{task.entityName}</Td>
              <Td>{task.type}</Td>
              <Td>{task.assignedTo}</Td>
              <Td>{task.notes}</Td>
              <Td>
                <Button
                  onDoubleClick={() => handleStatusChange(task.id, task.status)}
                  colorScheme={task.status === "Open" ? "green" : "red"}
                  variant="ghost"
                  size="sm"
                >
                  {task.status}
                </Button>
              </Td>
              <Td>
                <Button
                  onClick={() => handleEdit(task)}
                  colorScheme="blue"
                  variant="outline"
                  size="sm"
                >
                  Edit
                </Button>
              </Td>
              <Td>
                <Button
                  onClick={() => handleDelete(task.id)}
                  colorScheme="red"
                  variant="solid"
                  size="sm"
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* EDIT TASK MODAL */}
      <TaskModal isOpen={isOpen} onClose={onClose} task={editTask} />
    </div>
  );
};

export default TaskTable;
