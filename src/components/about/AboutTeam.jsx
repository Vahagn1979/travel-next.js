import Image from "next/image";
import styles from "./aboutTeam.module.css";

const AboutTeam = ({heading, data}) => {
    return (
        <div className={styles.aboutTeam}>
            <h2>{heading.title}</h2>

            <div className={styles.workers}>
                {
                  data.map(({id, image, name, profession}) => (
                        <div className={styles.worker} key={id}>
                            <div className={styles.worker_img}>
                                <Image
                                    src={image}
                                    alt={name}
                                    unoptimized={true}
                                    fill={true}
                                    loading="eager"
                                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className={styles.content}>
                                <h3>{name}</h3>
                                <p>{profession}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AboutTeam;