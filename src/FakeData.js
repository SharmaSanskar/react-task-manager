import { v4 as uuidv4 } from "uuid";

export const TaskData = [
  {
    id: uuidv4(),
    entityName: "ABC pvt ltd",
    type: "Call", // Call , video call, meeting
    assignedTo: "Jake",
    notes: "A new task",
    status: "Open", // Open, closed
    date: new Date(2022, 7, 6),
  },
  {
    id: uuidv4(),
    entityName: "DEF pvt ltd",
    type: "Video Call", // Call , video call, meeting
    assignedTo: "Amy",
    notes: "A new task",
    status: "Open", // Open, closed
    date: new Date(2022, 7, 4),
  },
  {
    id: uuidv4(),
    entityName: "GHI pvt ltd",
    type: "Meeting", // Call , video call, meeting
    assignedTo: "Terry",
    notes: "A new task",
    status: "Closed", // Open, closed
    date: new Date(2022, 7, 5),
  },
];

export const teamMembers = ["Jake", "Amy", "Rosa", "Terry"];
