import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  console.log({ title, stats });
  return (
    <section className={styles.statisticsBox}>
      <div className={styles.insideBox}>
        {title && <h2 className={styles.titleBox}>{title}</h2>}
        <ul className={styles.statisticsBlocks}>
          <li className={styles.item}>
            <span className={styles.label}>.docx</span>
            <span class="percentage">{stats[0].percentage}</span>
          </li>
          <li className={styles.item}>
            <span class="label">.mp3</span>
            <span class="percentage">{stats[2].percentage}</span>
          </li>
          <li className={styles.item}>
            <span class="label">.pdf</span>
            <span class="percentage">{stats[1].percentage}</span>
          </li>
          <li className={styles.item}>
            <span class="label">.mp4</span>
            <span class="percentage">{stats[3].percentage}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
