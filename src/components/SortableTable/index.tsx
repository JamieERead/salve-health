import { useState } from "react";
import { Table } from "react-bootstrap";
import { Patient } from "../../types";
import { sort } from "../../utils/sort";

type Props = {
  patients: Patient[];
};

const SortableTable: React.FC<Props> = ({ patients }) => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState(1);

  const handleSort = (field: any) => {
    if (sortField === field) {
      // This reverses the sort order
      setSortOrder(sortOrder * -1);
    } else {
      setSortField(field);
      setSortOrder(1);
    }
  };

  const sortedData = sort(patients, sortField, sortOrder);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th onClick={() => handleSort("id")}>Patient ID</th>
          <th onClick={() => handleSort("clinic_id")}>Clinic ID</th>
          <th onClick={() => handleSort("first_name")}>First Name</th>
          <th onClick={() => handleSort("last_name")}>Last Name</th>
          <th>DOB</th>
          {/* Sorting for DOB requires another solution */}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row: any) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.clinic_id}</td>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
            <td>{row.date_of_birth}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SortableTable;
