import Calendar from "./calendar/Calendar";
import GlobalStyle from "./components/GlobalStyle";

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