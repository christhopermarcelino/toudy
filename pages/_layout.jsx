import MyApp from './_app';

import AuthProvider from '@/context/AuthProvider';

export default function Layout() {
  return (
    <AuthProvider>
      <MyApp />
    </AuthProvider>
  );
}
