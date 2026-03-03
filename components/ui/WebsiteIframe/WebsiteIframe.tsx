import styles from "./WebsiteIframe.module.css";

type Props = {
  url: string;
  title: string;
};

export default function WebsiteIframe({ url, title }: Props) {
  return (
    <div className={styles.wrapper}>
      <iframe
        src={url}
        title={title}
        className={styles.iframe}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
