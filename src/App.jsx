import MyGraph from "./Graph";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 bg-gray-50 w-full min-h-screen">
        <h1 className="text-2xl font-semibold">Main Content Area</h1>
        <MyGraph />
      </div>
    </div>
  );
}

export default App;
