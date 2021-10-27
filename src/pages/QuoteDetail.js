import { useParams } from "react-router-dom";
import { Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: loadeQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if(status==='pending'){
      return <div className='centered'>
          <LoadingSpinner></LoadingSpinner>

      </div>
  }
  if(error){
      return <p className='centered'>{error}</p>
  }
  if(!loadeQuote.text){
      return <p>No Quote Found!</p>
  }
 
 
 

  return (
    <div>
      <HighlightedQuote
        text={loadeQuote.text}
        author={loadeQuote.author}
      ></HighlightedQuote>
      <Route path={`${match.path}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </div>
  );
};
export default QuoteDetail;
