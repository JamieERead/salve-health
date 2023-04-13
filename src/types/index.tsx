export interface Clinic {
  id: string;
  name: string;
}

export interface Patient {
  id: string;
  clinic_id: string;
  first_name: string;
  last_name: string;
  data_of_birth: string;
}
