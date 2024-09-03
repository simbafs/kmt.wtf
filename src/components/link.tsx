export default function LinkBtn({ href, children }: { href: string; children: React.ReactNode }) {
	return (
		<a
			href={href}
			className="bg-gray-400 text-primary hover:bg-primary hover:text-gray-400 rounded-3xl font-bold text-xl h-20 px-4 py-2 m-2 inline-flex w-full justify-center items-center"
		>
			<p>{children}</p>
		</a>
	)
}
