import { Repository } from 'typeorm';

export const mockShortURL = '35g35ge5g7h';
export const mockOriginalURL = 'https://www.google.com';

// Helper type for mocking repositories
export type MockType<T> = {
  [P in keyof T]?: jest.Mock<object>;
};

// Mock factory for any repository
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    findOne: jest.fn(),
    find: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    // Add other repository methods as needed
  }),
);
