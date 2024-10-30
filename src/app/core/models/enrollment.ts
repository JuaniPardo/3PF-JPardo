export interface Enrollment {
  id: number;
  studentId: string;
  courseId: number;
  isActive: boolean;
  enrollmentDate: Date;
  updatedAt: Date;
}
