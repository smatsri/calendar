import Calendar from "./calendar/Calendar";
import GlobalStyle from "./components/styles/GlobalStyle";

type AppProps = {}

const App = ({ }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Calendar />
    </>
  );
}

export default App;