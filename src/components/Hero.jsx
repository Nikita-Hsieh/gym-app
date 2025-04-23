import React from 'react'

export default function Hero() {
	return (
		<div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
			<div className="flex flex-col gap-4">
				<p>It's time to get</p>
				<h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
					Fitzy
				</h1>
			</div>
			<p className="text-sm md:text-base font-light">
				Fitzy is your
				<span className="text-blue-400 font-medium">all-in-one</span> fitness
				sidekick—fun, intuitive, and built to keep you moving. Whether you're
				crushing HIIT, counting steps, or just staying consistent, Fitzy tracks
				your
				<span className="text-blue-400 font-medium"> journey</span>, celebrates
				your wins, and helps you build the habits that stick.
			</p>
			<button className="px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200">
				<p>Accept & Begin</p>
			</button>
		</div>
	)
}
