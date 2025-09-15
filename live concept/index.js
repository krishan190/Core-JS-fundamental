const detailedClaimsData = {
  "Under Process": [
    {
      id: "CLM001",
      client: "TechCorp Ltd",
      employee: "Alice Brown",
      type: "Cashless",
    },
    {
      id: "CLM002",
      client: "FinanceInc",
      employee: "Bob Davis",
      type: "Reimbursement",
    },
  ],
  "Query Raised / Documentation Pending": [
    {
      id: "CLM006",
      client: "ManufacturingCo",
      employee: "Mike Brown",
      type: "Cashless",
    },
  ],
  "Pre-Authorization Required (Cashless)": [
    {
      id: "CLM007",
      client: "ConsultingFirm",
      employee: "Lisa Anderson",
      type: "Cashless",
    },
  ],
};

const objectData = Object.entries(detailedClaimsData);
console.log("objectData", objectData);

// 🔑 flatten object-of-arrays into one array of claims
const flattenedData = Object.entries(detailedClaimsData).flatMap(
  ([status, claims]) =>
    claims.map((c) => ({
      ...c,
      statusCategory: status, // keep the group label if you need it
    }))
);

// console.log("flattenedData", flattenedData);
