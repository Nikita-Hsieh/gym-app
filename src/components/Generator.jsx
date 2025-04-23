import React from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/datasets'

function Header(props) {
	const { index, title, description } = props
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center justify-center  gap-2">
				<p className="font-semibold text-slate-400 text-3xl sm:text-4xl md:text-5xl ">
					{index}
				</p>
				<h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
			</div>
			<p className="text-sm sm:text-base mx-auto">{description}</p>
		</div>
	)
}

export default function Generator() {
	return (
		<SectionWrapper
			header={'Generate your workout'}
			title={["It's", 'Huge', "o'clock"]}
			className="min-h-screen"
		>
			<Header
				index={'01'}
				title={'Pick your poison'}
				description={'Select your workout'}
			/>
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
				{Object.keys(WORKOUTS).map((type, typeIndex) => {
					return (
						<button
							key={typeIndex}
							className="bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-400"
						>
							<p className="capitalize">{type.replaceAll('_', '')}</p>
						</button>
					)
				})}
			</div>
		</SectionWrapper>
	)
}
