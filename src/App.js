import Box from "./components/Box";

function App() {
  const fakeDate = [
    {
      id: 0,
      title: "You",
    },
    {
      id: 1,
      title: "Computer"
    }
  ]

  return (
    <div className="Container">
      <Box
        fakeDate={fakeDate}
        result={"결과"}
      />
    </div>
  );
}

export default App;
