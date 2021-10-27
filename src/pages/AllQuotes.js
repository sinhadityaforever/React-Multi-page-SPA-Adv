import QuoteList from '../components/quotes/QuoteList'

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

const AllQuotes = () => {
  return (
      <QuoteList quotes={
          DUMMY_QUOTES
      }></QuoteList>
  );
};
export default AllQuotes;
