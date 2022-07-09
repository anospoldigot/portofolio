import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import PostTest from "../assets/img/PostTest.png";
import Altraman from "../assets/img/Altraman.png";
import Run8 from "../assets/img/run8.png";
import SU from "../assets/img/su.png";
import coaching from "../assets/img/coaching.png";
import crm from "../assets/img/crm.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

   const projects = [
      {
         title: "Aplikasi Post Test (independent)",
         description: "Aplikasi Post Test adalah aplikasi multiple choice yang dibuat untuk menunjang kebutuhan test para sales untuk client PT. Korpora Consulting",
         imgUrl: PostTest,
      },
      {
         title: "Company Profile (Team)",
         description: "Company Profile untuk PT Alexindo Putra Mandiri",
         imgUrl: Altraman,
      },
      {
         title: "CRM (Team)",
         description: "Aplikasi Customer Relation Management yang menunjang kebutuhan para sales kepada customer dan atasan",
         imgUrl: crm,
      },
      {
         title: "Sales University (Team)",
         description: "Aplikasi Sekolah Online dan learning management system untuk para sales",
         imgUrl: SU,
      },
      {
         title: "Company Profile (independent)",
         description: "Membuat Company Profile PT. Radar Utama Nusantara 8",
         imgUrl: Run8,
      },
      {
         title: "Aplikasi Coaching (Team)",
         description: "Aplikasi untuk mengcoaching karyawan client PT. Korpora Consulting",
         imgUrl: coaching,
      },
   ];

   return (
      <section className="project" id="projects">
         <Container>
            <Row>
               <Col size={12}>
                  <TrackVisibility>
                     {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                           <h2>Projects</h2>
                           <p>Project dibawah ini adalah project yang saya kerjakan selama magang/frelancer atapun sebagai karyawan dari sebuah perusahaan</p>
                           <div className="row">
                              {
                                 projects.map((project, index) => {
                                    return (
                                       <ProjectCard
                                          key={index}
                                          {...project}
                                       />
                                    )
                                 })
                              }
                           </div>
                        </div>}
                  </TrackVisibility>
               </Col>
            </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2}></img>
      </section>
   )
}
