import Image from "next/image";

import "../css/app/app.css";

export default function Home() {
  return (

    <div>
      <section id="front">
        <div className="sectionContainer">
          <div className="titleContainer pageTitleContainer">Willian Yuiti</div>
          <div className="textContainer pageTextContainer">
            <p>
              Sou um desenvolvedor e consultor de software, como posso ajudar?
            </p>
          </div>
        </div>
      </section>

      <section id="carreer">
        <div className="sectionContainer">
          <Image
            width={500} height={500}
            src="/imgs/carreer.png"
            alt="carreer"
          />

          <div className="titleContainer">Carreira</div>
          <div className="textContainer">
            <h3>Cubo Connect / 2019 -&gt; 2021</h3>
            <p>Dev Júnior - Desenvolvimento de APIs para Ambev e UNIMED</p>
            <br />
            <h3>Connectmed Gama / 2022 -&gt; presente</h3>
            <p>Dev Pleno - Equipe de melhorias e bugs emergenciais</p>
          </div>
        </div>
      </section>



      <section id="about">
        <div className="sectionContainer">
          <Image
            width={500} height={500}
            src="/imgs/sobre.png"
            alt="carreer"
          />
          <div className="titleContainer">Sobre</div>
          <div className="textContainer">
            <p className="name">Nome: Willian Yuiti Motta Oshiro</p>
            <p>Idade: 23 Estado civil: Solteiro</p>
            <br />
            <h3>Competências</h3>
            <p>
              + Familiaridade com projetos, desenvolvimento e sustentação de
              sistemas Enterprise.
            </p>
            <p>+ Ótima comunicação e trabalho em equipe.</p>
            <br />
            <h3>Metas</h3>
            <p>[ ] Tornar-se um dev internacional com meu inglês.</p>
            <p>[ ] Dar um visual decente para este site.</p>
            <p>[ ] Produzir conteúdo para outros programadores.</p>
            <br />
            <h3>Hobbies</h3>
            <p>
              {" "}
              Desenho e arte digital, Design gráfico e customização desnecessária
              de sistemas operacionais.
            </p>
          </div>
        </div>
      </section>



      <section id="skills">
        <div className="sectionContainer">

          <div className="grid grid-cols-3 gap-3" >
            <Image
              width={500} height={500}
              // className="springIcon"
              src="/imgs/spring.png"
              alt="spring"
            />
            <Image
              width={500} height={500}
              // className="javaIcon"
              src="/imgs/java.png"
              alt="java"
            />
            <Image
              width={500} height={500}
              className="linuxIcon"
              src="/imgs/linux.png"
              alt="tux"
            />
          </div>

          <div className="titleContainer">Ferramentas</div>
          {/* <div class="separationBar"></div> */}
          <div id="skillsContainer">
            <div className="textContainer">
              <h3>Java</h3>
              <div className="skillContainer">
                <div className="skill java">
                  3 anos de Experiência com Spring Framework.
                </div>
              </div>
              <br />
              <h3>Javascript</h3>
              <div className="skillContainer">
                <div className="skill javascript">
                  Conhecimento em Node, Deno, React, TypeScript.
                </div>
              </div>
              <br />
              <h3>SQL</h3>
              <div className="skillContainer">
                <div className="skill sql">
                  2 anos de experiência com Oracle 11g.
                </div>
              </div>
              <br />
              <h3>Linux</h3>
              <div className="skillContainer">
                <div className="skill linux">
                  4 anos de experiência com Arch Linux.
                </div>
              </div>
              <br />
              <h3>Git</h3>
              <div className="skillContainer">
                <div className="skill linux">3 anos de Experiência.</div>
              </div>
              <br />
              <h3>Inglês - Fluente</h3>
              <br />
              <h3>React</h3>
              <br />
              <h3>NextJS</h3>
              <br />
              <h3>Oracle SQL</h3>
              <br />
              <h3>Metodologia Ágil</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
