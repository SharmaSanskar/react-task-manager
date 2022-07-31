import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import Tasks from "./components/Tasks";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Box w="100%" p={8}>
        <AddTask />
        <Filter />
        <Tasks />
      </Box>
    </div>
  );
}

export default App;
