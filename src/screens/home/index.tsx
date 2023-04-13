import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { route } from "../../routes";
import { Clinic } from "../../types";

const HomeScreen = () => {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Initial call all clinics
    fetch("/api/getClinics")
      .then((res) => res.json())
      .then((response) => setClinics(response));
  }, []);

  const goToPatients = (id: number) => {
    navigate(route.patients, { state: { id } });
  };

  return (
    <div className="text-center">
      <h1 className="mb-5">Select a clinic to begin</h1>
      {clinics.map((clinic) => (
        <div key={clinic.id} className="mb-3">
          <Button onClick={() => goToPatients(clinic.id)}>{clinic.name}</Button>
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
