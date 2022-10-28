import styles from "./Banner.module.scss";
type Props = {
  image: string;
};

function Banner({ image }: Props) {
  return <div className={styles.main}></div>;
}

export default Banner;
