// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Topic = {
  id: string;
  title: string;
};

export type Question = {
  title_id: string;
  user_id: string;
};

export type Title = {
  id: string;
  title: string;
  synopsis: string;
  released: number;
  genre: string;
};

export type UsersTitle = Title & {
  image: string;
  favorited: boolean;
  watchLater: boolean;
};
