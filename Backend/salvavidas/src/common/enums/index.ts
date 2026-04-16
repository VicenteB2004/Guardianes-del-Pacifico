export enum UserRole {
  ADMIN = 'admin',
  LIFEGUARD = 'lifeguard',
  SUPERVISOR = 'supervisor',
  USER = 'user',
}

export enum EventStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

export enum ReportStatus {
  DRAFT = 'draft',
  SUBMITTED = 'submitted',
  REVIEWED = 'reviewed',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}
