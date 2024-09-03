import Image from 'next/image'

type News = {
	NE_ID: string
	NE_TYPE: number
	NE_CONTENT: string
	NE_ISONLINE: number
	NE_MCID: string
	NE_ISDEL: number
	NE_DATE: string
	NE_TITLE: string
	NE_IMG: string | null
}

function useNews(): News[] {
	return [
		{
			NE_ID: 'NE0GMCMb9qC0lnA5HvhSwQ',
			NE_TYPE: 0,
			NE_CONTENT: '',
			NE_ISONLINE: 1,
			NE_MCID: 'MCpMLOmPCjz0OCAJ00b2AxqA',
			NE_ISDEL: 0,
			NE_DATE: '2024-09-03T00:00:00',
			NE_TITLE: '國慶大會邀民眾觀禮 限量500名 9/5起開放報名',
			NE_IMG: 'https://rocbirthday.tw/update/報名500名ql6OCn4bkaUoHXT6CmHg.jpg',
		},
		{
			NE_ID: 'NEoxKoVChxQUudBLQO232Wtg',
			NE_TYPE: 0,
			NE_CONTENT: '',
			NE_ISONLINE: 1,
			NE_MCID: '',
			NE_ISDEL: 0,
			NE_DATE: '2024-09-03T00:00:00',
			NE_TITLE: '國慶日Coming Soon',
			NE_IMG: null,
		},
	]
}

function formatData(date: string) {
	const d = new Date(date)
	return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
}

export default function News() {
	const news = useNews()

	return (
		<div className="mt-8">
			<div className="grid lg:grid-cols-2 gap-8">
				{news.map((n, index) => (
					<div className="shadow-xl bg-white p-5 rounded hover:underline font-bold" key={index}>
						<a>
							<p className="text-gray-500">{formatData(n.NE_DATE)}</p>
							<p>{n.NE_TITLE}</p>
							<img src={n.NE_IMG || '/news-placeholder.jpg'} className="p-4 mt-4" />
						</a>
					</div>
				))}
			</div>
			<div className="w-full flex justify-end mt-12">
				<a
					href="https://rocbirthday.tw/#/news"
					className="inline-flex justify-center items-center bg-[#007bff] rounded-full h-12 px-3 py-4 text-white"
				>
					<p>更多最新消息</p>
					<svg
						data-v-73f4737f=""
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							data-v-73f4737f=""
							d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
						></path>
					</svg>
				</a>
			</div>
		</div>
	)
}
