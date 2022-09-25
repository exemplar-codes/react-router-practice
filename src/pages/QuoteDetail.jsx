import { useParams } from "react-router-dom";

export default function QuoteDetail() {
  const { quoteId } = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>Quote ID: {quoteId}</p>
    </>
  );
}
