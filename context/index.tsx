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
}

export const MovieContext = createContext<MovieContextType>({});

export function MovieWrapper({ children }: { children: React.ReactNode }) {
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [minYear, setMinYear] = useState<number>();
  const [maxYear, setMaxYear] = useState<number>();
  return (
    <MovieContext.Provider
      value={{
        searchFilter,
        setSearchFilter,
        minYear,
        setMinYear,
        maxYear,
        setMaxYear,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export function useMovieContext() {
  return useContext(MovieContext);
}
