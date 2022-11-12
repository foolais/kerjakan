import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import {
  ChangePassword,
  Dashboard,
  DataForm,
  DataFormId,
  JobVacancy,
  JobVacancyDetails,
  LandingPage,
  ListJob,
  LoginPage,
  PageNotFound,
  Profile,
  RegisterPage,
} from "./pages";
import LoginRoute from "./Routes/LoginRoute";

function App() {
  return (
    <>
      <Router>
        <GlobalContextProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/job-vacancy" element={<JobVacancy />} />
            <Route path="/job-vacancy/:jobId" element={<JobVacancyDetails />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/dashboard"
              element={
                <LoginRoute>
                  <Dashboard />{" "}
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy"
              element={
                <LoginRoute>
                  <ListJob />{" "}
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/create"
              element={
                <LoginRoute>
                  <DataForm />{" "}
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/profile"
              element={
                <LoginRoute>
                  <Profile />{" "}
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/change-password"
              element={
                <LoginRoute>
                  <ChangePassword />{" "}
                </LoginRoute>
              }
            />
            <Route
              path="/dashboard/list-job-vacancy/edit/:jobId"
              element={
                <LoginRoute>
                  <DataFormId />{" "}
                </LoginRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </GlobalContextProvider>
      </Router>
    </>
  );
}

export default App;
