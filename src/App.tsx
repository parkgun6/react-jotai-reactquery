import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainContainer } from './style';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from './components/common/Navbar';
import MainPage from './pages/MainPage';
import TodoPage from './pages/TodoPage';
import FAQPage from './pages/CS/FAQPage';
import NoticePage from './pages/CS/NoticePage';
import OrganizationMgPage from './pages/Service/OrganizationMgPage';
import ProviderMgPage from './pages/Service/ProviderMgPage';
import ContentsHisPage from './pages/Statistics/ContentsHisPage';
import ContentsStatePage from './pages/Statistics/ContentsStatePage';
import AuthMgPage from './pages/System/AuthMgPage';
import MenuListPage from './pages/System/MenuMg/MenuListPage';
import UserMgPage from './pages/System/UserMgPage';
import MenuCreatePage from './pages/System/MenuMg/MenuCreatePage';
import MenuDetailPage from './pages/System/MenuMg/MenuDetailPage';

import LoginPage from './pages/Auth/LoginPage';
import ProtectedRoute from './components/common/ProtectedRoute';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      <BrowserRouter>
        <Navbar />
        <MainContainer>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<MainPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/notice" element={<NoticePage />} />
              <Route path="/organization-mg" element={<OrganizationMgPage />} />
              <Route path="/provider-mg" element={<ProviderMgPage />} />
              <Route path="/contents-his" element={<ContentsHisPage />} />
              <Route path="/contents-state" element={<ContentsStatePage />} />
              <Route path="/auth-mg" element={<AuthMgPage />} />
              <Route path="/menu/list" element={<MenuListPage />} />
              <Route path="/menu/detail/:id" element={<MenuDetailPage />} />
              <Route path="/menu/create" element={<MenuCreatePage />} />
              <Route path="/user-mg" element={<UserMgPage />} />
              <Route path="/todo" element={<TodoPage />} />
            </Route>
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
