import { Flex, FormControl, FormLabel, Select, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  changeType,
  changeAssigned,
  changeStatus,
} from "../features/filter/filterSlice";
import { teamMembers } from "../FakeData";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Text mt={4} fontSize="2xl" fontWeight="bold">
        Filters
      </Text>
      <Flex>
        {/* TYPE FILTER */}
        <FormControl>
          <FormLabel>Type</FormLabel>
          <Select
            onChange={(e) => dispatch(changeType({ data: e.target.value }))}
            defaultValue=""
            name="type"
            placeholder="Select type"
          >
            <option>Meeting</option>
            <option>Call</option>
            <option>Video Call</option>
          </Select>
        </FormControl>
        {/* ASSIGNED TO FILTER */}
        <FormControl mx={3}>
          <FormLabel>Assigned To</FormLabel>
          <Select
            onChange={(e) => dispatch(changeAssigned({ data: e.target.value }))}
            defaultValue=""
            name="type"
            placeholder="Select member"
          >
            {teamMembers.map((member, i) => (
              <option key={i}>{member}</option>
            ))}
          </Select>
        </FormControl>
        {/* STATUS FILTER */}
        <FormControl>
          <FormLabel>Status</FormLabel>
          <Select
            onChange={(e) => dispatch(changeStatus({ data: e.target.value }))}
            defaultValue=""
            name="type"
            placeholder="Select status"
          >
            <option>Open</option>
            <option>Closed</option>
          </Select>
        </FormControl>
      </Flex>
    </div>
  );
};

export default Filter;
