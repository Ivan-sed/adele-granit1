import { Link } from 'react-router-dom'
import styles from './card.module.css'
import { FC } from 'react'

export interface ICard {
	info: string
	title: string
	price: string
}

const Card: FC<{
	cardsAd: ICard[]
	inlineStyles?: Record<string, string>
	cardsStyles?: Record<string, string>
}> = ({ cardsAd, inlineStyles,cardsStyles }) => {
	return (
		<div style={cardsStyles}>
			{cardsAd.map((item, index) => (
				<Link to={`/card/${index}`} key={index} style={inlineStyles}>
					<div style={inlineStyles} className={styles.MainCardDiv}>
						<div className={styles.CardImgDiv}>
							<img
								src='https://picsum.photos/191/177'
								alt={item.title}
							/>
						</div>
						<div className={styles.CardInfoDiv}>
							<h3>{item.title}</h3>
							<p className={styles.CardInfoDivPrice}>
								{item.price}
							</p>
							<p>{item.price}</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default Card
