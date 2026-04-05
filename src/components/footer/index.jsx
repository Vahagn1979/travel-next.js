import styles from "./footer.module.css";
import Image from "next/image";


const Footer = ({footerData}) => {
    const {title, credit, social_links} = footerData;

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.row}>
                    <div className={styles.info}>
                        <h2>{title}</h2>
                    </div>

                    <div className={styles.credit}>{credit}</div>
                    <div className={styles.social}>
                        {
                            social_links.map( elem => (
                                <a href={elem.url} key={elem.id} target="_blank" rel="noopener noreferrer" >
                                    <Image
                                        src={elem.image}
                                        alt={elem.url}
                                        unoptimized={true}
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;