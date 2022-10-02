import { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

import { getSingleQuote } from "../lib/api";

export default function QuoteDetail() {
  const { quoteId } = useParams();
  const match = useRouteMatch();

  const {
    status,
    sendRequest,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending")
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );

  if (error) return <p className="centered">{error}</p>;

  if (status === "completed" && !quote.text) return <NoQuotesFound />;

  return (
    <>
      <h1>Quote Detail Page</h1>
      {quote ? <HighlightedQuote {...quote} /> : <p>No quote found</p>}
      <Route path={match.path} exact>
        {quote && (
          <Link to={`${match.url}/comments`} className="btn--flat centered">
            Load comments
          </Link>
        )}
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
