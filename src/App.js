import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
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
    </Layout>
  );
}

// Pages
// 1. All quotes, /quotes
// 2. Quote detail page, /quotes/:id
// 3. New quote form, /quotes/new

export default App;

export const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun" },
  { id: "q2", author: "Maximilian", text: "Learning React is great" },
];
