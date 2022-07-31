import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask, editTask } from "../features/task/taskSlice";
import { teamMembers } from "../FakeData";

const TaskModal = ({ isOpen, onClose, task = {} }) => {
  // Determine if Add Modal or Edit Modal
  const pageType = Object.keys(task).length === 0 ? "Add" : "Edit";
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());
    // Dispatch Actions based on if Add Modal or Edit Modal
    if (pageType === "Add") {
      console.log("added");
      const completeData = {
        ...formData,
        id: uuidv4(),
        date: new Date(formData.date),
      };
      dispatch(addTask({ data: completeData }));
    } else {
      console.log("edited");
      const completeData = {
        ...formData,
        date: new Date(formData.date),
      };
      dispatch(editTask({ data: completeData, id: task.id }));
    }

    onClose();
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{pageType} Task</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody>
              {/* ENTITY NAME */}
              <FormControl isRequired>
                <FormLabel>Entity name</FormLabel>
                <Input
                  defaultValue={task.entityName ? task.entityName : ""}
                  name="entityName"
                  placeholder="Entity name"
                />
              </FormControl>
              {/* TASK TYPE */}
              <FormControl mt={3} isRequired>
                <FormLabel>Type</FormLabel>
                <Select
                  defaultValue={task.type ? task.type : ""}
                  name="type"
                  placeholder="Select type"
                >
                  <option>Meeting</option>
                  <option>Call</option>
                  <option>Video Call</option>
                </Select>
              </FormControl>
              {/* ASSIGNED TO */}
              <FormControl mt={3} isRequired>
                <FormLabel>Assigned To</FormLabel>
                <Select
                  defaultValue={task.assignedTo ? task.assignedTo : ""}
                  name="assignedTo"
                  placeholder="Select member"
                >
                  {teamMembers.map((member, i) => (
                    <option key={i}>{member}</option>
                  ))}
                </Select>
              </FormControl>
              {/* DATE */}
              <FormControl mt={3} isRequired>
                <FormLabel>Date</FormLabel>
                <input
                  type="date"
                  name="date"
                  defaultValue={
                    task.date ? task.date.toISOString().split("T")[0] : ""
                  }
                  min={new Date().toISOString().split("T")[0]}
                />
              </FormControl>
              {/* NOTES */}
              <FormControl mt={3}>
                <FormLabel>Notes</FormLabel>
                <Input
                  defaultValue={task.notes ? task.notes : ""}
                  name="notes"
                  placeholder="Additional notes"
                />
              </FormControl>
              {/* TASK STATUS */}
              <FormControl mt={3} isRequired>
                <FormLabel>Status</FormLabel>
                <RadioGroup
                  defaultValue={task.status ? task.status : "Open"}
                  name="status"
                >
                  <HStack spacing="24px">
                    <Radio value="Open">Open</Radio>
                    <Radio value="Closed">Closed</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" variant="ghost">
                {pageType}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskModal;
