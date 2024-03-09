import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from "react-parallax-tilt";
function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>P o r t f o l i o </h3>    
      <div className={styles.port_list}>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/429575515_943013560497978_9117489022697412122_n.jpg?stp=dst-jpg_p75x225&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECV3G9uazIUcUfdLQalpG1UR4GgP2mGO9RHgaA_aYY74pdjPmIbK1EqBWITxfYNdkezGXVghiUeTzPblzkh433&_nc_ohc=tzbDyx0690YAX-T63i8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQrcgh2kYxMnZfkJwTEhd04jfDF2JjlduQPoqaOamsL3w&oe=6613EBF0" alt="" />
            <p>Project Responsive web design</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/431186470_7523623194369067_8435056727229733564_n.png?stp=dst-png_s350x350&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHphxV0wJW5QSrC47ov8RXwjupWmfhNN0mO6laZ-E03SV9FqM8sB0x4mjMiYTiUcRIqTDtnQLmHaCzwUiA3u2XJ&_nc_ohc=_Wd5Vh5H2rgAX83A6Bd&_nc_oc=AQlQyfoD6pQ97ixeRQmbi03uE9Kkne10ltBkOJemFMn5k9g1XLBd0q1UW4HhezwJbrJnNi-OPinNBETRbtEtNi_7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRTPaADWGmnwlCbYCjP66_kmFbbne0Usbe_XiXc4m4HKw&oe=6614059F" alt="" />
            <p>Project แอปเที่ยวพะเยา</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/423766112_1194498275321729_7092958683385379255_n.png?stp=dst-png_s206x206&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGqZ4K27ajvmjphnfASBM8M5G3qULuj6VrkbepQu6PpWvSbd0VxSibytDmMmzCUlhgua_jCdGo7bfICM_G3ZQ_v&_nc_ohc=EiCUawbJc3wAX9X20Cn&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTHubcUDYi7FI6nRkHku-gxG4e9F3rNuJohpjTFrXU59g&oe=6613FA60" alt="" />
            <p>Project Poerfolio</p>
        </div>
        </Tilt>
        
      </div>
      
    </div>
  )
}

export default Portfolio