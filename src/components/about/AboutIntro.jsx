import styles from "./aboutIntro.module.css";

const AboutIntro = ({data}) => {
    return (
        <div className={styles.aboutIntro}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
        </div>
    );
};

export default AboutIntro;  