import Image from 'next/image'

function PullDown() {
	return (
		<div>
			<Image src="/pull-down.svg" alt="pull-down" width={24} height={24} />
			{/* TOOD: pull down */}
		</div>
	)
}

export default function Header() {
	return (
		<header className="px-6 py-8 flex flex-row w-screen bg-gray-300 fixed top-0">
			<Image src="/logo.svg" alt="logo" width={106} height={48} />
			<span className="flex-grow" />
			<PullDown />
		</header>
	)
}
