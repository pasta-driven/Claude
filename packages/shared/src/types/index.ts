// Shared TypeScript types

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Board {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PostIt {
  id: string;
  boardId: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  color: string;
  text: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'owner' | 'admin' | 'member' | 'viewer';

export interface BoardPermission {
  userId: string;
  boardId: string;
  role: UserRole;
}
