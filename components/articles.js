import styles from '../styles/Home.module.css'

const Articles = ({ articles = [] }) => {
    return (
        <div>
            {
                articles.map((article) => (
                    <a key={article.id} className={styles.card}>
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </a>
                ))
            }
        </div>

    )
}

export default Articles;