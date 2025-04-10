import { Author } from './database';

export type NewAuthor = Omit<Author, 'id' | 'books'>;
