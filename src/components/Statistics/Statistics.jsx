import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  console.log({ title, stats });
  return (
    <section class="statistics">
      {title !== undefined && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">{stats[0].percentage}</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">{stats[2].percentage}</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">{stats[1].percentage}</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">{stats[3].percentage}</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = PropTypes.objectOf({
  stats: PropTypes.arrayOf({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number.isRequired,
  }),
  title: PropTypes.string.isRequired,
});
