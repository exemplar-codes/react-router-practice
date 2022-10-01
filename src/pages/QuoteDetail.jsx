import { Link, Route, Switch, useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";

import { DUMMY_QUOTES } from "../App";

export default function QuoteDetail() {
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find(({ id }) => id === quoteId);

  return (
    <>
      <h1>Quote Detail Page</h1>
      {quote ? <HighlightedQuote {...quote} /> : <p>No quote found</p>}
      <Route path={`/quotes/${quoteId}`} exact>
        {quote && (
          <Link
            to={`/quotes/${quoteId}/comments`}
            className="btn--flat centered"
          >
            Load comments
          </Link>
        )}
      </Route>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
}
