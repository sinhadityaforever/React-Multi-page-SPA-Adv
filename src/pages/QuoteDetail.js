import { useParams } from "react-router-dom";
import { Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from '../components/quotes/HighlightedQuote'
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Aditya",
    text: "Yeah working",
  },
  {
    id: "q2",
    author: "AdityaS",
    text: "Yeah working fine",
  },
];

const QuoteDetail = () => {
    const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_QUOTES.find(quote=>quote.id===params.quoteId)
  if(!quote){
      return <p>No quote found!</p>
  }
  
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
    <Route path={`${match.path}`} exact>
    <div className='centered'>
         <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link> 
      </div>
    </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </div>
  );
};
export default QuoteDetail;
