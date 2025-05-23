export const abi = [
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      {
        internalType: "enum Attendance.Location",
        name: "_location",
        type: "uint8",
      },
      { internalType: "string", name: "_topic", type: "string" },
      {
        internalType: "enum Attendance.Rating",
        name: "_rating",
        type: "uint8",
      },
      { internalType: "bytes32", name: "_feedback", type: "bytes32" },
    ],
    name: "form",
    outputs: [{ internalType: "bool", name: "success", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "list",
    outputs: [
      { internalType: "string", name: "name", type: "string" },
      {
        internalType: "enum Attendance.Location",
        name: "location",
        type: "uint8",
      },
      { internalType: "string", name: "topic", type: "string" },
      {
        internalType: "enum Attendance.Rating",
        name: "rating",
        type: "uint8",
      },
      { internalType: "address", name: "walletAddress", type: "address" },
      { internalType: "bytes32", name: "feedback", type: "bytes32" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        components: [
          { internalType: "string", name: "name", type: "string" },
          {
            internalType: "enum Attendance.Location",
            name: "location",
            type: "uint8",
          },
          { internalType: "string", name: "topic", type: "string" },
          {
            internalType: "enum Attendance.Rating",
            name: "rating",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
          { internalType: "bytes32", name: "feedback", type: "bytes32" },
        ],
        internalType: "struct Attendance.FormDetail[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;