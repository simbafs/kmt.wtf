import Image from 'next/image'

export default function Heading({ text, en }: { text: string; en: string }) {
	return (
		<h2 className="w-full text-4xl font-bold flex justify-center items-center gap-4 my-8">
			<span className="text-primary">{text}</span>
			<Image src="/plum.png" width={47} height={46} alt="plum" className="h-6 w-6" />
			<span className="text-gray-600">{en}</span>
		</h2>
	)
}
