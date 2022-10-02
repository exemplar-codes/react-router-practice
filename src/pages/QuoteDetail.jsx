import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";

import Comments from "../components/comments/Comments";

import { DUMMY_QUOTES } from "../App";

export default function QuoteDetail() {
  const { quoteId } = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find(({ id }) => id === quoteId);

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
