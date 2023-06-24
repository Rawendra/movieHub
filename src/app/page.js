"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Header from "./components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Body from "./components/body/Body";
import MovieContextProvider from "./contexts/MovieContextProvider";
import SortByContextProvider from "./contexts/SortByContextProvider";
export default function Home() {
  return (
    <main>
      <MovieContextProvider>
        <SortByContextProvider>
          <Header />
          <Body />
        </SortByContextProvider>
      </MovieContextProvider>
    </main>
  );
}
