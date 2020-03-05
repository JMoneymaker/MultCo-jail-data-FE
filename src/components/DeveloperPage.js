/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import styles from './DeveloperPage.css';


const DeveloperPage = () => {

  return (
    <>
      <Header />
      <SideBar />
      <main className={styles.DeveloperPage}>
        <div className={styles.contentContainer}>
          <div className={styles.routes}>
            <h2>About the API</h2>
            <p>The data in this API was collected from the Multnomah County Detention Center <a href="http://www.mcso.us/PAID/">inmate information page.</a></p>
                  
            <p><span className={styles.queryInfo}>NOTE: Get ALL routes are paged. Use ?page=[page number] and ?perPage=[records per page]</span></p>
            <ul>
              <h3>Person Routes</h3>
              <li>
                <span className={styles.routes}>Get ALL persons - 
                </span><a className="paths" href="https://mult-co-jail-data.herokuapp.com/api/v1/persons" target="_blank">https://mult-co-jail-data.herokuapp.com/api/v1/persons</a>
              </li>
              <li>
                <span className={styles.routes}>Query person subsets by keys - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/?race=White" target="_blank">/?race=White</a> or <a className="paths" href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/?gender=Male" target="_blank">/?gender=Male</a>
              </li>
            
              <li>
                <span className={styles.routes}>Get count by RACE - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/countByRace" target="_blank">/countByRace</a>
              </li>
              <li>
                <span className={styles.routes}>Get count by GENDER - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/countByGender" target="_blank">/countByGender</a>
              </li>
              <li>
                <span className={styles.routes}>Get count by AGE - </span><a className={styles.paths} href="https://mult-co-jail-data.herokuapp.com/api/v1/persons/countByAgeRange" target="_blank">/countByAgeRange</a>
              </li>

              <h3>Detention Routes</h3>
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
            </ul>
          </div>
          <div className="about">
          </div>
        </div>
      </main>
    </>       
            
  );

};

export default DeveloperPage;
