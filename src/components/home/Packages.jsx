import Image    from "next/image";
import styles from "./packages.module.css";

const Packages = ({heading, data}) => {
    return (
        <div className={styles.packages + " container"}>
                <h2 className={styles.heading}>{heading.title}</h2>
                <div className={styles.packages_container}>
                    {
                        data.map(({id, discount, image, title, price}) => (
                            <div key={id} className={styles.item}>
                                <div className={styles.discount}>{discount}</div>
                                <Image
                                    src={image}
                                    alt={title}
                                    unoptimized={true}
                                    loading="eager"
                                    fill={true}
                                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                <div className={styles.content}>
                                    <p>{title}</p>
                                    <p>{price} $</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
};

export default Packages;