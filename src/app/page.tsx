export const metadata = {
  title: 'Welcome | Rakarmp',
};

export default function HomePage() {
  return (
      <>
      <h1 className="mt-12 text-center text-3xl font-bold">Welcome to my blog</h1>
      <div className='container mx-auto py-8'>
      <img
              src="https://avatars.githubusercontent.com/u/83684256?v=4"
              alt="Profil"
              className="rounded-full h-48 mx-auto p-4"
            />
        <div className="text-center">
        <p className="underline underline-offset-1">Here I share my knowledge and thoughts to devote everything that is useful for everyone.</p>
        </div>
      </div>
      </>
  );
}
