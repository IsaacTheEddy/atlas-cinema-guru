"use client";
import { createContext, useContext, useState, SetStateAction } from "react";

interface MovieContextType {
  searchFilter?: string | undefined;
  setSearchFilter?: React.Dispatch<SetStateAction<string>>;
  minYear?: number | undefined;
  setMinYear?: React.Dispatch<SetStateAction<number | undefined>>;
  maxYear?: number | undefined;
  setMaxYear?: React.Dispatch<SetStateAction<number | undefined>>;
  genre?: string | undefined;
  setGenere?: React.Dispatch<SetStateAction<string | undefined>>;
  page?: number | undefined;
  setPage?: React.Dispatch<SetStateAction<number>>;
  email?: string | undefined;
  setEmail?: React.Dispatch<SetStateAction<string>>;
}

export const MovieContext = createContext<MovieContextType>({});

export function MovieWrapper({ children }: { children: React.ReactNode }) {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [minYear, setMinYear] = useState<number>();
  const [maxYear, setMaxYear] = useState<number>();
  const [genre, setGenere] = useState<string>();
  const [page, setPage] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  return (
    <MovieContext.Provider
      value={{
        searchFilter,
        setSearchFilter,
        minYear,
        setMinYear,
        maxYear,
        setMaxYear,
        page,
        setPage,
        genre,
        setGenere,
        email,
        setEmail,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
