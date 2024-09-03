import Image from 'next/image'

export default function Footer() {
	return (
		<footer className="bg-gray-300">
			<div
				style={{
					backgroundImage: 'url(/vedio-bg.svg)',
					backgroundRepeat: 'repeat-x',
					backgroundSize: 'auto 100%',
				}}
				className="min-h-[312px] w-full"
			/>
			<div className="bg-[#2b3440] px-10 py-16 grid lg:grid-cols-3">
				<div className="flex justify-center">
					<Image src="/footer.svg" alt="footer" width={270} height={129} />
				</div>
				<div className="text-white flex gap-8 flex-wrap justify-center mt-8 lg:col-span-2">
					<a href="https://rocbirthday.tw/#/" className="hover:underline">
						首頁
					</a>
					<a href="https://rocbirthday.tw/#/News" className="hover:underline">
						最新消息
					</a>
					<span>
						<a href="https://rocbirthday.tw/#" className="hover:underline">
							國慶大會
						</a>
						<ul className="ml-4 list-disc">
							<li>
								<a href="https://rocbirthday.tw/#/Announcement" className="hover:underline">
									禁制公告
								</a>
							</li>
							<li>
								<a href="https://rocbirthday.tw/#/TrafficControl_P" className="hover:underline">
									預演交通管制
								</a>
							</li>
							<li>
								<a href="https://rocbirthday.tw/#/TrafficControl_D" className="hover:underline">
									當日交通管制
								</a>
							</li>
							<li>
								<a href="https://rocbirthday.tw/#/TrafficControl_A" className="hover:underline">
									其他交通管制
								</a>
							</li>
						</ul>
					</span>
					<a href="https://www.facebook.com/rocbirthday/photos" className="hover:underline">
						精彩回顧
					</a>
					<a href="https://rocbirthday.tw/#/Privacy" className="hover:underline">
						隱私權政策
					</a>
				</div>
			</div>
			<div className="bg-[#2b3440] px-10 py-16 text-white font-bold text-xl flex justify-center">
				<p>
					因為韓國魚的網站太醜了，我重做一個，歡迎 PR{' '}
					<a className="hover:underline" href="https://github.com/simbafs/kmt.wtf">
						Source Code
					</a>
				</p>
			</div>
		</footer>
	)
}
