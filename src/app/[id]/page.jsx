"use client";
import { useParams } from "next/navigation";

function Page() {
  const { id } = useParams();
  return <div>{id}</div>;
}

export default Page;
