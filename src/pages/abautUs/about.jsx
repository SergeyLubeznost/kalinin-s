import * as React from 'react';
import "./styles-about/about.css"
import "./styles-about/styles-about-laptop.css"
import "./styles-about/styles-about-tablet.css"
import "./styles-about/styles-about-mobile.css"
import hand from "./image-about/hand.png"
import kalinin1 from "./image-about/kalinin3.png"
import kalinin2 from "./image-about/kalinin2.png"
import kalinin3 from "./image-about/kalinin1.png"

export default function AboutUs() {
  return (
    <main className="main__about">
      <section className="section__about">
        <img src={hand} alt="" />
        <h2>Давайте знакомиться!</h2>
      </section>
      <section className="section__about_info_1 info__align">
      <h3 className="info_1__bold main__title__mobile">Мы семейная пара - Лёха и Катя. </h3>
        <img src={kalinin1} alt="" />
        <div className="info_1__container">
          <h3 className="info_1__bold main__title__about">Мы семейная пара - Лёха и Катя. </h3>
          <p className='text__info1'>Вместе уже почти 12 лет, и у нас есть своё общее любимое дело.</p>
          <h3 className="info_1__bold">
          Мы занимаемся изготовлением  мебели по индивидуальным размерам и туалетных столиков более 8 лет
          </h3>
          <p>
            Живем мы в прекрасном городе Санкт-Петербурге. И развиваемся с
            нереальной скоростью!
          </p>
          <h3 className="info_1__bold">
            Мы прошли этот путь с самого начала
          </h3>
          <p>
            С самого первого зеркала, столика... Мы не спали ночами очень
            долго, доводя нашу работу до идеала! В итоге, это принесло свои
            плоды - мы изучили все тонкости нашей сферы
          </p>
          <p>
            За все время работы мы не получили ни одного негативного отзыва,
            чем безмерно гордимся.
          </p>
        </div>
      </section>
      
      <section className="section__about_info_1 info__align info2__section">
        <div className="info_1__container info2__height">
          <h3 className="info_1__bold title2__size__tablet">
            Безумно любим нашу работу и то, что делаем
          </h3>
          <p>
            Мы лично проверяем каждую деталь при изготовлении. А наше
            собственное профессиональное оборудование позволяет сделать
            идеальные распил и кромку.
          </p>

          <p>
            У нас собственное производственное здание на выкупленной земле,
            что позволяет не арендовать, а значит не накручивать цены на наши
            изделия.
          </p>
        </div>
        <img className="info2__img" src={kalinin2} alt="" />
      </section>

      <section className="section__about_info_1 info__align info3__section">
        <img className="info1__img" src={kalinin3} alt="" />
        <div className="info_1__container info3__height">
          <h3 className="info_1__bold title3__size3">
            Любовь и взаимопонимание‚ поддержка и помощь
          </h3>

          <p>
            В нашей мастерской всегда царит дружная атмосфера. Мы проходим
            вместе все этапы: от принятия заказа, сборки, упаковки и даже
            доставки!
          </p>

          <p>
            Каждый заказ делается индивидуально и учитываются все пожелания
            наших любимых заказчиков!
          </p>
          <p>
            С многими мы дружим и по сей день. К нам приходят снова и снова, и
            мы всегда рады сделать красоту!
          </p>
          <p>
            Наши изделия радуют любимых заказчиков по всей России. Ведь у нас
            своя надёжная упаковка и бережная доставка. Гарантия на каждое
            изделие и ответственный подход.
          </p>
        </div>
      </section>
    </main>
  );
} 