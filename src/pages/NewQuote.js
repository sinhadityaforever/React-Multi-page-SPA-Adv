import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router';
const NewQuote=()=>{
const history=useHistory()
    const addQuoteHandler = quoteData=>{
        console.log(quoteData);
        history.push('/quotes')
    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>)
}
export default NewQuote;