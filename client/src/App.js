import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register, Landing, Error, ProtectedLayout } from "./pages";
import { AllJobs, AddJob, Profile, Stats, SharedLayout } from "./pages/dashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedLayout>
                <SharedLayout />
              </ProtectedLayout>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />}></Route>
            <Route path="add-job" element={<AddJob />}></Route>
            <Route path="profile" element={<Profile />}></Route>
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
