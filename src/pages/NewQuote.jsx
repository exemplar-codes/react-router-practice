import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

export default function NewQuote() {
  const history = useHistory();

  const { status, sendRequest } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") history.push("/quotes");
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    sendRequest(quoteData);
  };

  return (
    <>
      <h1>New Quote Page</h1>
      <QuoteForm
        onAddQuote={addQuoteHandler}
        isLoading={status === "pending"}
      />
    </>
  );
}
