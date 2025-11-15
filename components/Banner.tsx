import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div
        className={styles.slider}
        style={{ "--quantity": 10 } as React.CSSProperties}
      >
        <div
          className={styles.item}
          style={{ "--position": 1 } as React.CSSProperties}
        >
          <img src="/image1.png" alt="Image 1" />
        </div>

        <div
          className={styles.item}
          style={{ "--position": 2 } as React.CSSProperties}
        >
          <img src="/image2.png" alt="Image 2" />
        </div>

        <div
          className={styles.item}
          style={{ "--position": 3 } as React.CSSProperties}
        >
          <img src="/image3.png" alt="Image 3" />
        </div>

        <div
          className={styles.item}
          style={{ "--position": 4 } as React.CSSProperties}
        >
          <img src="/image4.png" alt="Image 4" />
        </div>

        <div
          className={styles.item}
          style={{ "--position": 5 } as React.CSSProperties}
        >
          <img src="/image5.png" alt="Image 5" />
        </div>

        <div
          className={styles.item}
          style={{ "--position": 6 } as React.CSSProperties}
        >
          <img src="/image6.png" alt="Image 6" />
        </div>

        <div
          className={styles.item}
          style={{ "--position": 7 } as React.CSSProperties}
        >
          <img src="/image7.png" alt="Image 7" />
        </div>

        <div
          className={styles.item}
          style={{ "--position": 8 } as React.CSSProperties}
        >
          <img src="/image8.png" alt="Image 8" />
        </div>

        <div
          className={styles.item}
          style={{ "--position": 9 } as React.CSSProperties}
        >
          <img src="/image9.png" alt="Image 9" />
        </div>

        <div
          className={styles.item}
          style={{ "--position": 10 } as React.CSSProperties}
        >
          <img src="/image10.png" alt="Image 10" />
        </div>
      </div>
    </div>
  );
}
