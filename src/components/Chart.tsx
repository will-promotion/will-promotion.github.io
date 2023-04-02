import { ArcElement, Chart as ChartJS, DoughnutController, Legend, Tooltip } from 'chart.js/auto';
import { CHART_DATA } from '../constants';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, DoughnutController, Tooltip, Legend);


export default () => {
  return (
    <>
    <section className="member">
      <h2>構成人数・学部</h2>
      <div className="member__container">
        {
          CHART_DATA.map(({ title, name, data, options }) => (
            <div className="member__item">
              <h3>{title}</h3>
              <p className={`member__${name}`}><span>全体</span>51<span>人</span></p>
              <div className="member__canvas">
                <Doughnut height={450} width={900} data={data} options={options} />
              </div>
            </div>
          ))
        }
      </div>
    </section>
    </>
  )
}
