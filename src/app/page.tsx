'use client'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Heading from '@/components/heading'
import LinkBtn from '@/components/link'
import News from '@/components/news'
import Image from 'next/image'

export default function Home() {
	return (
		<div className="w-screen">
			<Header />
			<main className='pt-20'>
				{/* banner */}
				<div className="w-full p-8 lg:p-20 bg-gray-300 lg:h-[640px]">
					<Image src="/banner.svg" alt="banner" width={1920} height={1080} style={{ height: '100%' }} />
				</div>
				<div
					style={{
						backgroundImage: 'url(/main-bg.png)',
						backgroundRepeat: 'repeat-x',
						backgroundSize: 'auto 100%',
					}}
					className="h-[275px] lg:h-[375px] w-full"
				/>
				{/* links */}
				<div className="px-6 py-12 grid grid-cols-1 lg:grid-cols-3 lg:gap-4">
					<div className="flex items-center py-2 ml-4">
						<Image src="/text1.svg" alt="text1" width={1920} height={1080} />
					</div>
					<div className="">
						<LinkBtn href="https://rocbirthday.tw/#/Announcement">禁制公告</LinkBtn>
						<LinkBtn href="https://rocbirthday.tw/#/TrafficControl_P">預演交通管制</LinkBtn>
						<LinkBtn href="https://rocbirthday.tw/#/TrafficControl_A">其他交通管制</LinkBtn>
					</div>
					<div>
						<LinkBtn href="https://rocbirthday.tw/#/TrafficControl_D">當日交通管制</LinkBtn>
						<LinkBtn href="https://rocbirthday.tw/update/113%E5%B9%B4%E5%9C%8B%E6%85%B6%E5%A4%A7%E6%9C%83%E8%A7%80%E7%A6%AE%E5%8F%B0%E6%9A%A8%E7%AE%A1%E5%88%B6%E9%BB%9E%E4%BD%8D%E7%BD%AE%E5%9C%96.pdf">
							觀禮台暨管制點位置圖
						</LinkBtn>
					</div>
				</div>
				{/* News */}
				<div className="bg-gray-300 px-12 py-20">
					<Heading text="最新消息" en="News" />
					<News />
				</div>
				{/* photos */}
				<div className="px-12 py-20">
					<Heading text="相片錦集" en="Photos" />
					<div className="snap-x overflow-x-auto flex">
						{['photo1', 'photo2', 'photo3', 'photo4', 'photo5', 'photo6', 'photo7', 'photo8'].map(
							(photo, index) => (
								<div
									className="snap-start flex-none w-96 h-72 bg-white rounded-lg p-4 m-4 grid place-content-center"
									key={index}
								>
									<Image src={`/photos/${photo}.jpg`} alt={photo} width={384} height={384} />
								</div>
							),
						)}
					</div>
				</div>
				{/* Videos */}
				<div className="px-12 py-20">
					<Heading text="活動影音" en="Videos" />
					<div className="flex justify-center">
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/iR5-mVrvcow?si=JV_3YP38wDAWfRw2"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
							className="rounded-lg"
						></iframe>
					</div>
				</div>
			</main>
			{/* footer */}
			<Footer />
		</div>
	)
}
