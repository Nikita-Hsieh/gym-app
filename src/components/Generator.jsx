import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/datasets'
import Button from './Button'

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

export default function Generator(props) {
	const {
		muscles,
		setMuscles,
		poison,
		setPoison,
		goal,
		setGoal,
		updateWorkout,
	} = props
	const [showModal, setShowModal] = useState(false)

	function toggleModal() {
		setShowModal(!showModal)
	}

	function updateMuscles(muscleGroup) {
		if (muscles.includes(muscleGroup)) {
			setMuscles(muscles.filter((val) => val !== muscleGroup))
			return
		}

		if (muscles.length > 2) {
			return
		}
		if (poison !== 'individual') {
			setMuscles([muscleGroup])
			setShowModal(false)
			return
		}

		setMuscles([...muscles, muscleGroup])

		setShowModal(false)
		if (muscles.length === 2) {
		}
	}

	return (
		<SectionWrapper
			id={'generate'}
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
							onClick={() => {
								setMuscles([])
								setPoison(type)
							}}
							key={typeIndex}
							className={`bg-slate-950 px-4  py-3  rounded-lg duration-200 hover:border-blue-400
		border ${type === poison ? 'border-blue-600' : 'border-blue-400'}`}
						>
							<p className="capitalize">{type.replaceAll('_', ' ')}</p>
						</button>
					)
				})}
			</div>

			<Header
				index={'02 '}
				title={'Lock on targets'}
				description={'Select the muscle judged for annihiation'}
			/>
			<div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
				<button
					onClick={toggleModal}
					className="relative flex items-center justify-center px-4  py-3"
				>
					<p className="capitalize">
						{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}
					</p>
					<i className="fa-solid fa-caret-down right-3 top-1/2 -translate-y-1/2 absolute"></i>
				</button>
				{showModal && (
					<div className="flex flex-col px-3 pb-3">
						{(poison === 'individual'
							? WORKOUTS[poison]
							: Object.keys(WORKOUTS[poison])
						).map((muscleGroup, muscleGroupIndex) => {
							return (
								<button
									onClick={() => {
										updateMuscles(muscleGroup)
									}}
									key={muscleGroupIndex}
									className={
										'hover:text-blue-400 duration-200 ' +
										(muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')
									}
								>
									<p className="uppercase">
										{muscleGroup.replaceAll('_', ' ')}
									</p>
								</button>
							)
						})}
					</div>
				)}
			</div>

			<Header
				index={'03'}
				title={'Become Juggernaut'}
				description={'Select your ultimate objective'}
			/>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
				{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
					return (
						<button
							onClick={() => {
								setGoal(scheme)
							}}
							key={schemeIndex}
							className={`bg-slate-950 py-3 rounded-lg duration-200 hover:border-blue-400
		border ${scheme === goal ? 'border-blue-600' : 'border-blue-400'}`}
						>
							<p className="capitalize">{scheme.replaceAll('_', ' ')}</p>
						</button>
					)
				})}
			</div>
			<Button func={updateWorkout} text={'Formulate'}></Button>
		</SectionWrapper>
	)
}
