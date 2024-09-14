import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <section id="front">
          <div className="sectionContainer">
            <div className="titleContainer">Willian Yuiti</div>
            {/* <div class="separationBar"></div> */}
            <div className="textContainer">
              <p>
                Sou um desenvolvedor e consultor de software, como posso ajudar?
              </p>
            </div>
          </div>
          <div className="splashContainer">
            <Image
              width={516}
              height={516}
              src="/imgs/carreer.jpg"
              alt="carreer"
            />
          </div>
          <div className="sectionContainer">
            <div className="titleContainer">Carreira</div>
            <div className="textContainer">
              <p className="subTitle">Cubo Connect / 2019 -&gt; 2021</p>
              <p>Dev Júnior - Desenvolvimento de APIs para Ambev e UNIMED</p>
              <br />
              <p className="subTitle">Connectmed Gama / 2022 -&gt; presente</p>
              <p>Dev Pleno - Equipe de melhorias e bugs emergenciais</p>
            </div>
          </div>
        </section>
        <div className="splashContainer">
          {/* TODO : Imagem com minha face */}
          <Image
            width={516}
            height={516}
            src="/imgs/carreer.jpg"
            alt="carreer"
          />
        </div>
        <section id="about">
          <div className="sectionContainer">
            <div className="titleContainer">Sobre</div>
            {/* <div class="separationBar"></div> */}
            <div className="textContainer">
              <p className="name">Nome: Willian Yuiti Motta Oshiro</p>
              <p>Idade: 22 Estado civil: Solteiro</p>
              <br />
              <p className="subTitle">Hobbies</p>
              <p>
                {" "}
                Desenho e arte digital, Design gráfico e customização desnecessária
                de sistemas operacionais.
              </p>
              <br />
              <p className="subTitle">Competências</p>
              <p>
                + Familiaridade com projetos, desenvolvimento e sustentação de
                sistemas Enterprise.
              </p>
              <p>+ Ótima comunicação e trabalho em equipe.</p>
              <br />
              <p className="subTitle">Metas</p>
              <p>[ ] Tornar-se um dev internacional com meu inglês.</p>
              <p>[ ] Dar um visual decente para este site.</p>
              <p>[ ] Produzir conteúdo para outros programadores.</p>
            </div>
          </div>
        </section>
        <div className="splashContainer grid grid-cols-3 gap-3" >
          <Image
            width={550}
            height={550}
            // className="springIcon"
            src="/imgs/spring-alpha.jpg"
            alt="spring"
          />
          <Image
            width={516}
            height={516}
            // className="javaIcon"
            src="/imgs/java-alpha.jpg"
            alt="java"
          />
          <Image
            width={516}
            height={516}
            className="linuxIcon"
            src="/imgs/tux-alpha.jpg"
            alt="tux"
          />
        </div>
        <section id="skills">
          <div className="sectionContainer">
            <div className="titleContainer">Ferramentas</div>
            {/* <div class="separationBar"></div> */}
            <div id="skillsContainer">
              <div className="textContainer">
                <p className="subTitle">Java</p>
                <div className="skillContainer">
                  <div className="skill java">
                    3 anos de Experiência com Spring Framework.
                  </div>
                </div>
                <br />
                <p className="subTitle">Javascript</p>
                <div className="skillContainer">
                  <div className="skill javascript">
                    Conhecimento em Node, Deno, React, TypeScript.
                  </div>
                </div>
                <br />
                <p className="subTitle">SQL</p>
                <div className="skillContainer">
                  <div className="skill sql">
                    2 anos de experiência com Oracle 11g.
                  </div>
                </div>
                <br />
                <p className="subTitle">Linux</p>
                <div className="skillContainer">
                  <div className="skill linux">
                    4 anos de experiência com Arch Linux.
                  </div>
                </div>
                <br />
                <p className="subTitle">Git</p>
                <div className="skillContainer">
                  <div className="skill linux">3 anos de Experiência.</div>
                </div>
                <br />
                <p className="subTitle">Inglês - Fluente</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a href="https://br.linkedin.com/in/willian-yuiti-21138014b">LinkedIn</a>
        <a href="https://github.com/Willpine/Willpine">Github</a>
        <p>Yuiti Tecnologia Eirelli 2023</p>
      </footer>
    </div>);
}
