import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MenuCreatePage from './pages/System/MenuMg/MenuCreatePage';
import MenuDetailPage from './pages/System/MenuMg/MenuDetailPage';
import { MainContainer } from './style';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <MainContainer>
          <Routes>
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
          </Routes>
        </MainContainer>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
