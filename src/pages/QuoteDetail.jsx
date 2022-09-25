import { useParams } from "react-router-dom";

export default function QuoteDetail() {
  console.log(useParams());
  return <h1>Quote Detail Page</h1>;
}
