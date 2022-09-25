import { Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/new">
        <NewQuote />
      </Route>
      <Route path="/quotes/:quoteId">
        <QuoteDetail />
      </Route>
    </Switch>
  );
}

// Pages
// 1. All quotes, /quotes
// 2. Quote detail page, /quotes/:id
// 3. New quote form, /quotes/new

export default App;
