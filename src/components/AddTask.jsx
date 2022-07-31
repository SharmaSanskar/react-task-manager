import { useDisclosure, Button } from "@chakra-ui/react";

import TaskModal from "./TaskModal";

const AddTask = () => {
  // Modal controls from chakra-ui
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Add Task</Button>
      <TaskModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddTask;
