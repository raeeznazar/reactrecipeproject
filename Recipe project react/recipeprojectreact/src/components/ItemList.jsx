
import styles from './itemList.module.css'
export default function ItemList({ food }) {
    return (
        <div>

            {
                food.extendedIngredients.map((item) => (<div className={styles.itemContainer}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image} alt="" />
                    </div>
                    <div className={styles.nameContainer}>
                        <h3 className={styles.name} key={item.name}>{item.name}</h3>
                        <h3 className={styles.amount}>{item.amount}{item.unit}</h3>
                    </div>
                </div>))
            }
        </div>

    )
}