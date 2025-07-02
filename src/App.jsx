import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import { AuthPage } from "./pages/auth/auth";
import { ProfilePage } from "./pages/profile/profile";
import PageLayout from "./layouts/pageLayout/pageLayout";
function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
