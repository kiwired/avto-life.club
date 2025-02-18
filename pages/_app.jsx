import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import {
	DefaultSeo,
	LogoJsonLd,
	CorporateContactJsonLd,
	LocalBusinessJsonLd,
	SocialProfileJsonLd
} from 'next-seo'
import VKPixel from '../libs/VKPixel'
import YandexMetrika from '../libs/YandexMetrika'

import '../styles/index.scss'

const SEO = {
	// title: "%s - AvtoLife",
	titleTemplate: '%s',
	openGraph: {
		type: 'website',
		locale: 'ru_RU',
		url: 'https://avtolife.club/',
		site_name: 'AvtoLife',
	}
}

export default function App({ Component, pageProps }) {

	// const [viewport, setViewport] = useState('user-scalable=no, width=1280')
	const [viewport, setViewport] = useState('width=device-width, initial-scale=1.0, maximum-scale=1.0')

	useEffect(() => {

		const viewport = document.querySelector('meta[name="viewport"]');

		const onResize = () => {
			// let meta = 'width=device-width, initial-scale=1.0, maximum-scale=1.0'
			let meta = 'width=device-width, initial-scale=1.0, maximum-scale=1.0'
			viewport.setAttribute('content', 'width=device-width')

			let width = window.innerWidth || document.documentElement.innerWidth
			let fontSize = (width / 480 * 100) + '%'

			if (width > 640) {
				fontSize = (width / 1280 * 100) + '%'
				meta = 'user-scalable=no, width=1280'
			}

			// setViewport(meta)
			viewport.setAttribute('content', meta)
			document.documentElement.style.fontSize = fontSize
		}

		onResize()

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [])

	return (
		<>
			<Head>
				<meta name="viewport" content={viewport} />
			</Head>
			<VKPixel />
			<YandexMetrika />
			<DefaultSeo {...SEO} />
			<LogoJsonLd
				logo="https://avtolife.club/img/logo.svg"
				url="https://avtolife.club/"
			/>
			<CorporateContactJsonLd
				url="https://avtolife.club/"
				logo="https://avtolife.club/img/logo.svg"
				contactPoint={[
					{
						telephone: '+7(3812)49-25-00',
						contactType: 'customer service',
						areaServed: 'RU',
						availableLanguage: ['Russia'],
					},
					{
						telephone: '+7(908)315-63-07',
						contactType: 'customer service',
						areaServed: 'RU',
						availableLanguage: ['Russia'],
					},
				]}
			/>
			<LocalBusinessJsonLd
				type="AutomotiveBusiness"
				id="https://avtolife.club/"
				name="AvtoLife"
				description="Студия стайлинга и детейлинга"
				url="https://avtolife.club/"
				telephone="+73812492500"
				address={{
					streetAddress: 'ул. Химиков 60',
					addressLocality: 'Омск',
					addressRegion: 'Омская область',
					postalCode: '644000',
					addressCountry: 'RU',
				}}
				geo={{
					latitude: '55.0568497',
					longitude: '73.3055238',
				}}
				images={[]}
				openingHours={[
					{
						opens: '10:00',
						closes: '20:00',
						dayOfWeek: [
							'Monday',
							'Tuesday',
							'Wednesday',
							'Thursday',
							'Friday',
							'Saturday',
							'Sunday'
						],
						validFrom: '2020-01-01',
						validThrough: '2030-01-01',
					}
				]}
			/>
			<SocialProfileJsonLd
				type="Organization"
				name="AvtoLife"
				url="https://avtolife.club/"
				sameAs={[
					'https://vk.com/avtolife.club',
					'https://instagram.com/avtolife.club',
					'https://ok.ru/avtolife55',
					'https://youtube.com/user/avtolifeclub/'
				]}
			/>
			<Component {...pageProps} />
		</>
	)
}