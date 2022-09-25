import QuoteForm from "../components/quotes/QuoteForm";

export default function NewQuote() {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return (
    <>
      <h1>New Quote Page</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </>
  );
}
