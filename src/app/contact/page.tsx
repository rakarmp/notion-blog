export const metadata = {
  title: 'Contact',
  description: 'This is contact page.',
};

export default function ContactPage() {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leadi lg:text-5xl">{"Let's talk!"}</h2>
			<div className="dark:text-gray-400">{"Let's start a conversation with me."}</div>
		</div>
	</div>
	<form action="https://getform.io/f/29f52e57-5a96-4f33-bf11-1645c12b43e8" method="POST" className="space-y-6">
		<div>
			<label className="text-sm">Full name</label>
			<input id="name" name="name" type="text" placeholder="" className="w-full p-3 hover:bg-violet-400 bg-gray-200 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label className="text-sm">Email</label>
			<input id="email" type="email" name="email" className="w-full p-3 hover:bg-violet-400 bg-gray-200  rounded dark:bg-gray-800" />
		</div>
		<div>
			<label className="text-sm">Message</label>
			<input id="message" type="text" name="message" className="w-full p-3 bg-gray-200 hover:bg-violet-400 rounded dark:bg-gray-800"></input>
		</div>
		<button type="submit" className="p-5 py-4 mx-auto text-sm font-bold tracki uppercase bg-gray-200 rounded hover:bg-violet-400 dark:text-gray-900">Send Message</button>
	</form>
</div>
  );
}
