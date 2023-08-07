import Image from 'next/image'

const urlimage = "/readme/profile.jpeg"

export const metadata = {
  title: 'About',
  description: 'This is about page.',
};

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="mb-8 text-center text-4xl font-bold">About Me</h1>

        <div className="flex items-center justify-center">
          <div className="relative h-64 w-64">
          <Image
              src={urlimage}
              width={400}
              height={800}
              alt="Profil"
              className="rounded-full mx-auto p-4"
            />
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <p className="text-center text-lg">
            I am a junior developer in the web developer section I have more
            than 1 year experience as a web developer and I also tend to prefer
            new things like I like to develop a tweaks to speed up android
            performance using bash/shell script.
          </p>
        </div>
      </div>
    </>
  );
}
