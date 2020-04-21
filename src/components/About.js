import React from "react"
import "./layout.css"
import "./bootstrap.css"
import "./icofont/icofont.min.css"

const About = () => {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <div class="row">
          <div class="col-lg-4" data-aos="fade-right">
            <img
              src="https://i.imgur.com/ZamYjtq.jpg"
              class="img-fluid"
              alt=""
              style={{ width: "600px", height: "350px", objectFit: "cover" }}
            />
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full Stack Web Developer</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
              enim consequatur quisquam maxime cumque? Officia quae cum quia
              nisi esse, quos possimus tempora maiores doloremque tempore? Qui,
              sed. Aut, corrupti, iure assumenda laborum voluptatum commodi esse
              accusantium earum odio ad quod. Ipsa esse iusto impedit ipsum sunt
              officiis veritatis perferendis reiciendis voluptatem error
              obcaecati officia provident, libero aut, commodi atque iste
              tempore. Eveniet, delectus. Ducimus, magnam distinctio rem veniam
              tempora tenetur non sint aspernatur ad laboriosam, aperiam
              doloremque ut voluptas quae aliquid incidunt velit temporibus.
              Saepe eligendi minima, eius ab recusandae ex odio minus, mollitia
              accusamus aut, vel corrupti?
            </p>
            <p>
              Amet architecto cumque vel voluptates delectus! Provident
              perferendis repellat debitis vel dolor, quisquam nihil nesciunt
              molestiae ex, commodi, quo eos repudiandae deleniti? Eligendi
              minus similique ipsam tempore, iusto quas. Aspernatur itaque,
              officiis cum impedit perferendis enim illum ullam tenetur delectus
              exercitationem deserunt explicabo doloremque id quas esse?
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
