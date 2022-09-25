import QuoteList from "../components/quotes/QuoteList";

import { DUMMY_QUOTES } from "../App";

export default function AllQuotes() {
  return (
    <>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
}
