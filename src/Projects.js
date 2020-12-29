import React from 'react'
import './Project.css';
import {GitHub} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import {ExternalLink} from 'react-external-link';
function Projects() {
  const projects = [
    {
      name: "COVID-CARE",
      desc: "COVID-CARE is a website designed for tracking the COVID-19 pandemic data like deaths, cases & recoveries, upcoming vaccine informtion & top headlines related to COVID-19.",
      tech: ["React JS", "disease.sh API", "GNews API"],
      url: "https://covid-19care.web.app/",
      gh: 'https://github.com/Sreejit7/COVID-care',
      img: 'https://lh3.googleusercontent.com/mWvT18-GWzuv4sgCgFdbyhIVH6vAkb6wXlRdPkL_-S_nciP9o5BcGXIjJbnqyVU3EodMrsyt6CT273Gd0fPcIuWHrvV0tS04soMN0VkO_6qXU-b0dU_kvnZQUrUZy5cHN6hXDtqTLeWawZ3DFW_yuoZPnd2J_P9PJPcLTpKGYodryBVAOvPaugAE1WRNnPpQVQepMzIZ1eZyCtw5T0Hd16bm1OL_ZXDbPvwp8C2dsYkkjCctqJW3tvBJB5dbggaE1JqY0g-hkZrLc50ZFMIAjsbU1MnecZcv_jUYBdUtYObO3oWZmU0tpS8taoZx_SFbqlzp1NepETGS4nc3vR6emKaJcrKp86TmFb9aJbMQriEoyMfJ0vYh5hu_rBgSjzuEle1DuZzBlMfvPCiWhUMGhNYnj7AKyrycoWQa6NntWzYma7EpHql3tyH04U2XMnTAFcs4Mtuqcv4iwapQThvCOOtgW-iaN23pm1fznTWFYz75dv0bkJpvLbbxEf6hQve4kEdd3ZZ5gu6AYVbO2FpPlzNOV3Vj8eI10bDgM2ezrWXsjiVVbesryqGarx773ufwGCWJiy6_8LSMIPhMX9tUVYeAV9xsAINorCIRH25hN1CDFBB5wIk-lk3gtfJJcVwO1Sf3h9YOM0y3KL7ZCkp7nlSS09rcEam7RVEYkBzb0tQyOs8G0EJuZBlULJp2=w765-h713-no?authuser=0'
    },
    {
      name: "HomeMade",
      desc: "HomeMade is an e-commerce website designed for selling all kinds of homemade products from delicious foods to aesthetic artworks.",
      tech: ["React JS", "Firebase", "Stripe Payments API"],
      url: "https://github.com/Sreejit7/Ecommerce-website",
      gh: "https://github.com/Sreejit7/Ecommerce-website",
      img: 'https://lh3.googleusercontent.com/8tiBgKHgrhy3Y9LtQ_bVwFWueoexHECMEdaSvquv7zd8XQh_8J-fEvWxMaZK7PdHhxSB-Y8SpqhNX9sAYpB-L55oSO29ulIDqllDX5eg9PIzTMhbwFuMYz0LMiCSIAU2B8IHnrYRIH7TaWkLf6M3gEEQKnI0TQFvA53rPQMU44hMF-DgtPnae_q_1Oqc3XsxX-IE3xydmfIiBOWvmwhzlypGB4F52reVi8vKR_euQ1JqO6vcAMneUMWDaCqHw6CzarekVATU_i8706E3MrFXJLbk3fG6PuYrsLZx74PaLOue-FvaguCRbqbayl918yjKe-U_nngQviEa5vR54ecWDFEAfvbEUbx9LYp1Vb46GLOAWis15r1Lmn9LUzVK-1dH3691azHOh0aNSRGwaJQNycvlddg8Tn7tOMhpKsL_bkRsQ1CNdWWUO6hAO2Ou6zWT72gz0_INHG5s5DjONPdQqDqajo8RnuanDt9sjyqOgUdFzFxy-5RO70yQN3y4YWqKmRrINYX4iYOeOkFbV8uG4oF9pfdkUBClsRTJqhq5SWOvLJ1NGUIgQVtAOvPsa1wO1TJGN9b-h79bfgY_S-L2LDPVJMCJkZhbcF0XeRFs8T_nA306mV7oNOq0yoZPxRY8sa73oXJcIn4iMFgMT8mN2Ne-iENdapF3jG_LeD880QC0GJxQBTffyeSBBFru=w763-h724-no?authuser=0'
    }
  ]
  return (
    <div className = "project" id = "project">
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <div className="project__title">
        <h1>Some of my works</h1>
        <i class="em em-male-office-worker" aria-role="presentation" aria-label=""></i>
      </div>
      <div className="project__container">
        {projects.map((project) => (
          <div className="project__item">
            <h1 style = {{textAlign:"center"}}>{project.name}</h1>
            <div className="project__info">
              <ExternalLink href = {project.url}>
              <img 
                className = "project__img"
                alt = {project.name}
                src = {project.img}
              />
              </ExternalLink>
              <div className="project__desc">
                  <p>{project.desc}</p>
                  <b>Technologies Used:</b>
                  <ul>
                    {project.tech.map((item) => (
                        <li>{item}</li>
                    ))}
                  </ul>
              </div>
                  <IconButton>
                    <ExternalLink href = {project.gh}>
                      <GitHub fontSize = "large" className = "gh-icon-project"/>
                    </ExternalLink>
                  </IconButton>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
