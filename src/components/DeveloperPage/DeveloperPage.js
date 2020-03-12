/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Header from '../common/Header';
import SideBar from '../common/SideBar';
import styles from './DeveloperPage.css';


const DeveloperPage = () => {

  return (
    <>
      <Header />
      <SideBar />
      <main className={styles.DeveloperPage}>
        <div className={styles.contentContainer}>
          <h1>About MCDC Data</h1><br/>
          <p>MCDC data is a public resource for information regarding detentions in Multnomah County, Oregon.  The data is collected daily from the Multnomah County Detention Center <a href="http://www.mcso.us/PAID/">inmate information page.</a></p><br/>

          <p>The visualizations on the home page are updated daily and intended to show Multnomah County’s tendency to follow the national trend of disproportionately detaining Black, Native American, and Hispanic people as compared to other groups.</p><br/>

          <p> The API routes below provide direct access to the data for researchers.</p><br/><br/>

          <p><span className={styles.queryInfo}>NOTE: Get ALL routes are paged. Use ?page=[page number] and ?perPage=[records per page]</span></p><br/>
          <div className={styles.routes}>
            <ul>
              <h2>Person Routes</h2><br/>
              <li>
                <span className={styles.routes}>Get ALL persons -
                </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons" target="_blank">https://mult-co-jail-data.herokuapp.com/api/v1/persons</a>
              </li>
              <li>
                <span className={styles.routes}>Query person subsets by keys - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/?race=White" target="_blank">/?race=White</a> or <a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/?gender=Male" target="_blank">/?gender=Male</a>
              </li>
              <li>
                <span className={styles.routes}>Get count by RACE - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/countByRace" target="_blank">/countByRace</a>
              </li>
              <li>
                <span className={styles.routes}>Get count by GENDER - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/countByGender" target="_blank">/countByGender</a>
              </li>
              <li>
                <span className={styles.routes}>Get count by AGE - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/countByAgeRange" target="_blank">/countByAgeRange</a>
              </li><br/>

              <h2>Detention Routes</h2><br/>
              <li>
                <span className={styles.routes}>Get ALL detentions - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions" target="_blank">https://mult-co-jail-data.herokuapp.com/api/v1/detentions</a>
              </li>
              <li>
                <span className={styles.routes}>Query detention subsets by keys - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions/?arrestingAgency=Gresham+Police+Department" target="_blank">/?arrestingAgency=Gresham+Police+Department</a>
              </li>
              <li>
                <span className={styles.routes}>Get count by AGENCY - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions/countByAgency" target="_blank">/countByAgency</a>
              </li>
              <li>
                <span className={styles.routes}>Get count by BOOKING TIME - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions/countByTime" target="_blank">/countByTime</a>
              </li>
              <li>
                <span className={styles.routes}>Get average detention DURATION - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions/avgDetentionDuration" target="_blank">/avgDetentionDuration</a>
              </li>
              <li>
                <span className={styles.routes}>Get average duration by RACE - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions/avgDetentionByRace" target="_blank">/avgDetentionByRace</a>
              </li>
              <li>
                <span className={styles.routes}>Get average detention by GENDER - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions/avgDetentionByGender" target="_blank">/avgDetentionByGender</a>
              </li>
              <li>
                <span className={styles.routes}>Get CHARGE count by RACE - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions/countChargesByRace" target="_blank">/countChargesByRace</a>
              </li>
              <li>
                <span className={styles.routes}>Get charge count by AGENCY - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions/countChargesByAgency" target="_blank">/countChargesByAgency</a>
              </li>
              <li>
                <span className={styles.routes}>Get charge count by GENDER- </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/detentions/countChargesByGender" target="_blank">/countChargesByGender</a>
              </li>
              <li>
                <span className={styles.routes}>Get ALL court cases - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/courtCases" target="_blank">https://mult-co-jail-data.herokuapp.com/api/v1/courtCases</a>
              </li>
            </ul><br/>
          </div>
          <p>This project developed and maintained by <a href="https://github.com/munizao" target="_blank" rel="noopener noreferrer">Ali Muniz</a>, <a href="https://github.com/JMoneymaker" target="_blank" rel="noopener noreferrer">Jamin Moneymaker</a>,  <a href="https://github.com/avnit77" target="_blank" rel="noopener noreferrer">Tali Avni</a>, and <a href="https://github.com/AaronMullan" target="_blank" rel="noopener noreferrer">Aaron Mullan</a>.  <a href="https://github.com/NickBrimmer" target="_blank" rel="noopener noreferrer">Nick Brimmer</a> also contributed to initial development.</p>
          <div className="about">
          </div>
        </div>
      </main>
    </>
  );
};

export default DeveloperPage;
