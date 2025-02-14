import Card from '../../modules/маленькая карточка/Card'
import { FC } from 'react'
import BuldingMaterials from '../../../assets/BuldingMaterials.svg'
import Stanki from '../../../assets/Stanki.svg'
import Work from '../../../assets/Work.svg'
import blocks from '../../../assets/blocks.svg'
import carier from '../../../assets/carier.svg'
import rituals from '../../../assets/rituals.svg'
import serveces from '../../../assets/serveces.svg'
import specialTequinick from '../../../assets/specialTequinick.svg'
import tools from '../../../assets/tools.svg'

import s from './MainPage.module.css'
interface IpropsCard {
	cardData: { title: string; price: string; info: string }[]
}
const MainPage: FC<IpropsCard> = ({ cardData }) => {
	const CardStyles = {
		marginRight: '10px',
	}
	const CardsStyles = {
		display: 'flex',
		flexWrap: 'wrap',
	}
	const CardsStylesColumn = {
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
	}
	return (
		<div>
			<div className={s.MainMenuDiv}>
				<div className={s.MenuDiv}>
					<div className={s.MenuCarier}>
						<p className={s.MenuTexts}>Карьер</p>
						<img
							className={s.MenuImg}
							src={carier}
							alt=''
						/>
					</div>

					<div className={s.MenuBlocks}>
						<p className={s.MenuTexts}>Блоки</p>
						<img
							className={s.MenuImg}
							src={blocks}
							alt=''
						/>
					</div>
					<div className={s.MenuBuildingMaterials}>
						<p className={s.MenuTexts}>Строй материалы</p>
						<img
							className={s.MenuImg}
							src={BuldingMaterials}
							alt=''
						/>
					</div>
					<div className={s.MenuRitualItems}>
						<p className={s.MenuTexts}>Ритуальные изделия</p>
						<img
							className={s.MenuImg}
							src={rituals}
							alt=''
						/>
					</div>
					<div className={s.MenuMachines}>
						<p className={s.MenuTexts}>Станки</p>
						<img
							className={s.MenuImg}
							src={Stanki}
							alt=''
						/>
					</div>
					<div className={s.MenuTools}>
						<p className={s.MenuTexts}>Инструменты</p>
						<img
							className={s.MenuImg}
							src={tools}
							alt=''
						/>
					</div>
					<div className={s.MenuSpecialEquipment}>
						<p className={s.MenuTexts}>Спец техника</p>
						<img
							className={s.MenuImg}
							src={specialTequinick}
							alt=''
						/>
					</div>
					<div className={s.MenuWork}>
						<p className={s.MenuTexts}>Работа</p>
						<img
							className={s.MenuImg}
							src={Work}
							alt=''
						/>
					</div>
					<div className={s.MenuServices}>
						<p className={s.MenuTexts}>Услуги</p>
						<img
							className={s.MenuImg}
							src={serveces}
							alt=''
						/>
					</div>
				</div>
				<div className={s.AdCardsDiv}>
					<h2 className={s.H2BestPractique}>Лучшие предложения:</h2>
					<Card cardsStyles={CardsStylesColumn} cardsAd={cardData} />
				</div>
			</div>
			<h2 className={s.H2SpecialText}>Специальные предложения</h2>
			<div>
				<div className='container' style={{ display: 'flex' }}>
					<div className='row'>
						<Card
							cardsStyles={CardsStyles}
							inlineStyles={CardStyles}
							cardsAd={cardData}
						/>
						<h2 className={s.H2SpecialText}>Объявления для вас</h2>
						<Card
							inlineStyles={CardStyles}
							cardsStyles={CardsStyles}
							cardsAd={cardData}
						/>
						<Card
							inlineStyles={CardStyles}
							cardsStyles={CardsStyles}
							cardsAd={cardData}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPage
