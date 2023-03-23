import NavList from '../components/Nav/nav';
export const App = () => {
  return (
    <>
      <NavList />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Проект для тренування роботі на GitHub
      </div>
    </>
  );
};
