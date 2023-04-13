import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import SortableTable from "../../components/SortableTable";
import { route } from "../../routes";
import { Patient } from "../../types";

const PatientsScreen = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Call to get patients based on selected clinic
    fetch(`api/getPatients/${state.id}`)
      .then((res) => res.json())
      .then((response) => setPatients(response));
  }, [state]);

  return (
    <div>
      <div className="text-center">
        <h1 className="mb-5">Select a table header to sort</h1>
        <Button className="mb-3" onClick={() => navigate(route.home)}>
          Back home
        </Button>
      </div>
      <SortableTable patients={patients} />
    </div>
  );
};

export default PatientsScreen;
