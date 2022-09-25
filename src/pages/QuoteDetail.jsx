import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

export default function QuoteDetail() {
  const { quoteId } = useParams();

  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>Quote ID: {quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
