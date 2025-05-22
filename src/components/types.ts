export type AttendanceStatus = 'Present' | 'Absent' | 'Half Day' | 'Online';

export interface Employee {
  id: string;
  name: string;
  department: string;
  status: AttendanceStatus;
  checkIn: string | null;
  checkOut: string | null;
}
