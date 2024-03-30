import React, { useState, useEffect } from "react";
import { heroWiki } from "../data/heroWiki.js";
import "./styles/HeroWikiPage.scss";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Tooltip } from "react-tooltip";

function HeroWikiPage({ url_Bg, heroName }) {
  const [index, setIndex] = useState(0);
  const [pathIndex, setPathIndex] = useState(0);
  const [selectedPathIndex, setSelectedPathIndex] = useState(0);

  useEffect(() => {
    const newIndex = heroWiki[0].heroNames.findIndex(
      (name) => name === heroName
    );
    setIndex(newIndex);
  }, [heroName]);

  const ArrowNextBackArrayHero = (direction) => {
    setIndex((oldIndex) => {
      if (direction === "back") {
        return oldIndex > 0 ? oldIndex - 1 : heroWiki[0].heroNames.length - 1;
      } else if (direction === "forward") {
        return oldIndex < heroWiki[0].heroNames.length - 1 ? oldIndex + 1 : 0;
      }
    });

    setPathIndex(0);
    setSelectedPathIndex(0);
  };

  // SearchBar Functions
  const items = heroWiki[0].heroNames.map((name, index) => ({
    id: index,
    name,
  }));

  const selectHero = (item) => {
    const selectedIndex = heroWiki[0].heroNames.indexOf(item.name);

    if (selectedIndex !== -1) {
      setIndex(selectedIndex);
    }
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  const stats = [
    { type: "BLEED", icon: "public\\icon\\Bleed_dd2.webp" },
    { type: "MOVE", icon: "public\\icon\\Move_dd2.webp" },
    { type: "BURN", icon: "public\\icon\\Burn_dd2.webp" },
    { type: "STUN", icon: "public\\icon\\Stun_dd2.webp" },
    { type: "BLIGHT", icon: "public\\icon\\Blight_dd2.webp" },
    { type: "DEBUFF", icon: "public\\icon\\Debuff_dd2.webp" },
    { type: "DISEASE", icon: "public\\icon\\Disease_dd2.webp" },
    { type: "DEATHBLOW", icon: "public\\icon\\Deathsdoor_dd2.webp" },

    { type: "", icon: "" },

    { type: "FORW", icon: "public\\icon\\forward.webp" },
    { type: "BACK", icon: "public\\icon\\backwards.webp" },

    { type: "HP", icon: "public\\icon\\Icon_HP_dd2.webp" },
    { type: "SPD", icon: "public\\icon\\Icon_speed_dd2.webp" },
  ];

  return (
    <div className="wiki">
      <div
        className="background"
        style={{ background: `url(${url_Bg}) no-repeat center top/cover` }}
      >
        <div className="containHeroWiki">
          <div className="heroRef">
            <div className="boxInputName">
              <button onClick={() => ArrowNextBackArrayHero("back")}>
                <IoIosArrowBack />
              </button>

              <ReactSearchAutocomplete
                items={items}
                onSelect={selectHero}
                autoFocus
                formatResult={formatResult}
                placeholder={heroWiki[0].heroNames[index]}
                className="heroSearchBar"
                styling={{
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                  border: "1px solid white",
                  borderRadius: "0px",
                  hoverBackgroundColor: "#981a0c",
                  iconColor: "white",
                }}
              />

              <button onClick={() => ArrowNextBackArrayHero("forward")}>
                <IoIosArrowForward />
              </button>
            </div>

            <div className="imgCont">
              <img
                src={`public/HeroBG/${heroWiki[0].heroNames[index]}.png`}
                alt="Hero"
              />

              <div className="ClassRole">
                <ul>
                  {heroWiki[0].heroStats[index][1].Characteristics.Class.map(
                    (rol, i) => (
                      <li key={i}>{rol}</li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="heroPath">
              <cite>{heroWiki[0].academicNotes[index][1][pathIndex]}</cite>

              <div className="pathRoad">
                {heroWiki[0].heroPaths[index][1].map((path, pathIndex) => (
                  <React.Fragment key={pathIndex}>
                    <input
                      value={`value-${pathIndex + 1}`}
                      name="value-radio"
                      id={`value-${pathIndex + 1}`}
                      type="radio"
                      checked={pathIndex === selectedPathIndex}
                      onChange={() => {
                        setSelectedPathIndex(pathIndex);
                        setPathIndex(pathIndex);
                      }}
                    />
                    <label htmlFor={`value-${pathIndex + 1}`}>{path}</label>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="contain-WikiData">
            <h1>{heroWiki[0].heroNames[index]}</h1>
            <hr />
            <p>{heroWiki[0].heroStats[index][1].description}</p>
            <br />

            <div className="Characteristics">
              <h3>Characteristics</h3>

              <div className="listStats">
                <i>"Role"</i>
                <ul>
                  <p>{heroWiki[0].heroStats[index][1].Characteristics.Rol}</p>
                </ul>

                <i>"Strengths"</i>
                <ul>
                  {Object.entries(
                    heroWiki[0].heroStats[index][1].Characteristics.Strengths
                  ).map(([strength, description], i) => (
                    <li key={i}>
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={description}
                      >
                        {strength}
                      </a>
                    </li>
                  ))}
                  <Tooltip id="my-tooltip" className="my-tooltip" />
                </ul>

                <i>"Weaknesses"</i>
                <ul>
                  {Object.entries(
                    heroWiki[0].heroStats[index][1].Characteristics.Weaknesses
                  ).map(([Weaknesses, description], i) => (
                    <li key={i}>
                      <a
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={description}
                      >
                        {Weaknesses}
                      </a>
                    </li>
                  ))}
                  <Tooltip id="my-tooltip" className="my-tooltip" />
                </ul>
              </div>
            </div>
            <br />

            <h2>How to Play</h2>
            <hr />

            <div className="howToPlay">
              <ul>
                {heroWiki[0].heroStats[index][1].HowToPlay.Tips.map(
                  (tip, i) => (
                    <li key={i}>
                      {tip.name}
                      <p>{tip.description}</p>
                    </li>
                  )
                )}
              </ul>
            </div>

            <br />
            <h2>
              Hero Skills and Stats -{" "}
              {heroWiki[0].heroPaths[index][1][selectedPathIndex]}
            </h2>
            <hr />

            <cite>
              {heroWiki[0].heroStats[index][1].paths[0][1][selectedPathIndex]}
            </cite>

            <br />

            <div className="statsContain">
              <div className="angry-grid">
                <div id="item-0">
                  <h3></h3>
                </div>
                <div id="item-1">
                  <h4>Resistances</h4>
                </div>
                {stats.map((stat, i) => (
                  <div id={`item-${i + 2}`} key={`item-${i + 2}`}>
                    <img src={stat.icon} alt="" />
                    <h5>
                      {stat.type}{" "}
                      {heroWiki[0].heroStats[index][1].stats[stat.type]}
                      {i < 9 ? "%" : ""}
                    </h5>
                  </div>
                ))}
                <div id="item-10">
                  <h4>Movement</h4>
                </div>
                <div id="item-15">
                  <h4>Base Stats</h4>
                </div>
              </div>
            </div>
            <br />

            <div className="skillsContain"></div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              fuga commodi quo quis dicta. Quo distinctio, dolorum quod porro
              nihil explicabo veniam, a cum iste, blanditiis quia nisi corporis
              corrupti. Ea consequuntur cumque deleniti doloremque ipsa tempora
              quas pariatur molestiae earum eligendi dicta, provident
              perferendis sequi? Minima distinctio dolorem necessitatibus non
              doloribus maxime ducimus quis porro adipisci ipsa, deserunt harum.
              Obcaecati doloremque repudiandae eaque mollitia voluptatum
              inventore ipsa unde provident accusantium, necessitatibus nesciunt
              consequatur quibusdam amet blanditiis possimus animi! Blanditiis
              nihil facilis aliquid cupiditate eveniet earum dolorum temporibus
              doloremque ipsam. Et facere quod porro cumque tenetur saepe libero
              sunt earum, aperiam maxime perferendis expedita natus unde quia
              aut veniam maiores soluta quas commodi autem. Minima officia
              reiciendis adipisci enim perspiciatis. Molestiae dolor sunt
              provident vitae cupiditate quas enim. Soluta assumenda iure
              commodi, voluptate inventore sunt autem voluptates consequatur
              sint, fugiat est magnam blanditiis qui vero et repellat veritatis
              doloremque perspiciatis? Voluptas quidem vel mollitia consequuntur
              quisquam aut eveniet eos quasi qui dolore reiciendis voluptatibus
              harum accusantium amet obcaecati modi commodi dolorum ea pariatur
              placeat, a sunt. Quo velit aperiam perspiciatis! Dolore repellat
              aliquam minima quo iusto, explicabo blanditiis corrupti
              accusantium est autem illum mollitia, impedit delectus quas fugit
              voluptatum corporis ab, aspernatur beatae itaque vitae dolorum
              doloremque. Consequuntur, dolore. Tempore. Est obcaecati, sed
              repellendus recusandae similique vero repellat? Soluta, illum
              aliquam deserunt corporis, debitis sint obcaecati ullam sapiente
              iure vitae quibusdam perspiciatis et excepturi architecto animi
              quaerat ad eveniet inventore? Aut veritatis, facere quaerat atque
              corporis beatae quod, cumque, vitae rerum perferendis eos enim at!
              A adipisci esse error sapiente aspernatur, ipsa blanditiis enim
              velit necessitatibus ea eaque eius incidunt! Omnis, dolorem
              possimus? Earum nam facilis saepe voluptatem aperiam culpa aliquid
              magni. Expedita mollitia quia voluptate officia optio ea
              asperiores, itaque inventore nisi corporis distinctio minima
              provident. Aspernatur, sed vitae. Fugiat facilis a, quasi sed
              labore similique minima temporibus nemo laudantium. Explicabo
              aliquid veritatis nam commodi ab voluptate accusamus natus autem
              quae ad. Fuga, aliquid nostrum. Pariatur qui voluptatibus facilis.
              Cum recusandae nulla assumenda neque possimus consectetur porro,
              optio temporibus omnis voluptate rerum doloremque unde aspernatur.
              Quaerat eveniet a perferendis ipsum aliquam. Voluptate magni eum
              fuga similique unde libero itaque? Veritatis earum ratione
              necessitatibus animi aliquam assumenda autem sint aspernatur,
              dolorum est ab rem saepe totam, expedita debitis eius quam dolorem
              eveniet laborum vero commodi ullam minus? Est, deserunt debitis?
              Repudiandae, earum officiis, ducimus non iste delectus quasi id
              amet exercitationem nobis nulla repellat atque sit natus! Eveniet,
              unde veniam. Ab magnam odit quidem obcaecati quas, et nesciunt in
              soluta. Nostrum, ipsa eveniet veritatis quaerat dolore quidem, a
              quia totam, porro dolor cumque officiis. Laboriosam voluptatem
              itaque culpa est ipsum ratione? Accusantium dolorum consectetur
              excepturi quibusdam vel perspiciatis soluta earum? Ipsa tempore
              provident placeat, voluptas sunt minus tempora quod laudantium
              natus laborum et ullam consequuntur incidunt, ipsum quaerat vel
              temporibus! Beatae porro voluptas accusamus aperiam eos nesciunt
              laborum nulla officia? Minima maiores, veniam autem eligendi et
              eos, officiis consectetur dolores iste dolorem accusamus aliquid
              ratione, rem nostrum vitae aliquam voluptatibus suscipit? Eos
              animi autem, commodi itaque necessitatibus in alias facere! Quae
              amet minima odit soluta ullam maiores provident voluptate labore
              eveniet voluptas itaque molestiae neque, exercitationem ratione
              velit tempora nobis. Magnam doloribus voluptatum quas perferendis
              excepturi ratione ullam, ipsam inventore. A alias obcaecati
              accusamus vel natus eius unde ea eum? Possimus illum delectus
              quibusdam quae laborum nesciunt quidem repellendus mollitia?
              Maxime laborum, quis sunt consectetur id illo? Ea, obcaecati
              soluta. Eaque magni consectetur alias rem in dolorem fugit fuga,
              cumque sint harum distinctio odit quos! Error fugiat et blanditiis
              officiis delectus eum ipsum cupiditate nisi rerum eaque,
              laboriosam iusto voluptates? Deleniti obcaecati beatae sapiente!
              Illo distinctio dolorem aspernatur optio laborum pariatur
              temporibus voluptate aperiam! Expedita eius, porro minima
              accusantium consequatur nesciunt omnis necessitatibus vitae hic
              modi! Animi quo accusantium nam? Rem eius veniam delectus repellat
              unde nulla illo vero quisquam voluptatum non adipisci nesciunt hic
              at, rerum placeat deleniti? Temporibus, expedita minima architecto
              quam unde pariatur consequuntur rem commodi harum. Consequuntur,
              illo! Explicabo, dolores id quasi doloremque qui assumenda quidem
              tenetur minus adipisci sequi, libero, laboriosam tempora? Qui,
              totam recusandae sunt distinctio ea enim, aut magni,
              necessitatibus ipsa unde harum! Aliquid nemo minus odit, ea, alias
              iure veniam perferendis veritatis quidem sunt libero iusto
              exercitationem necessitatibus sit ut. Mollitia sit nulla aliquam
              assumenda explicabo eos facere! Saepe aperiam suscipit numquam.
              Quas perspiciatis modi aperiam provident debitis fugiat
              repudiandae minima incidunt dolor nostrum. Expedita, laborum unde
              voluptas ab, blanditiis ratione reiciendis neque eum
              exercitationem quibusdam ducimus sequi tenetur maiores soluta
              placeat. Quia vel ex omnis optio accusantium dicta minus
              laudantium quibusdam cumque officiis nulla aspernatur quo officia
              blanditiis ullam quasi doloremque, totam, ratione quisquam magni
              at? Iste ipsa nisi possimus veritatis. Cumque neque quasi
              excepturi, dolorum quod ut laudantium quo suscipit nam pariatur
              commodi sint vero repellat molestiae iure. Velit libero
              perspiciatis saepe aliquid rerum ab eaque nemo quia similique
              quasi. Labore consequuntur enim amet quam adipisci eveniet!
              Possimus soluta culpa eos nihil vero nostrum! Minus possimus quas
              consectetur modi doloribus corporis corrupti rem nihil quia, optio
              quis vitae. Dignissimos, ipsa. Hic doloremque incidunt ipsum
              veniam ab molestias dolorum deserunt iure repudiandae
              exercitationem eos eaque vel recusandae quidem neque soluta ad
              autem qui, modi esse labore illo. Earum nulla consequuntur quasi?
              Nostrum, vel cupiditate atque animi, totam, harum aspernatur
              minima porro maxime saepe dolorem doloremque eaque ut doloribus
              sequi corrupti voluptas reiciendis voluptatum. Recusandae
              obcaecati alias iure laboriosam, eaque blanditiis velit? Soluta
              facilis atque incidunt sequi rem quaerat, modi eum adipisci ipsam
              nesciunt commodi esse perferendis voluptates architecto repellat
              dignissimos veritatis quod deleniti nobis doloremque odio
              voluptatem ipsa! Fugit, cupiditate optio? Vel repellendus vitae
              soluta ipsum? Aperiam adipisci dolore harum unde quasi. Tempora
              quis repellendus beatae veniam, atque quod asperiores voluptate
              voluptatum aliquam reiciendis eum nulla, qui similique commodi
              aperiam dicta. Ipsum error fugiat architecto, unde exercitationem,
              obcaecati dolores saepe hic dolor iure delectus quo cumque
              recusandae voluptas velit maiores? Esse, nobis? Fugit quibusdam
              sint inventore recusandae deserunt vel harum delectus. Laudantium
              suscipit exercitationem debitis tenetur facere! Delectus officia
              cumque itaque libero eos enim. Exercitationem aspernatur
              asperiores explicabo voluptatum est. Ipsa eveniet libero
              dignissimos quam saepe fuga unde maxime explicabo fugit. Eius
              vitae excepturi eum. Est, esse fugiat? Perferendis veniam earum
              quia, quam explicabo, temporibus at optio sint aperiam doloribus
              odio tempora cumque delectus eius magnam. Soluta ducimus cumque
              perspiciatis sed. Porro quibusdam molestiae modi saepe qui?
              Numquam saepe enim voluptas. Quae iure officiis est saepe et,
              aspernatur nihil sapiente fuga at voluptas nobis quas excepturi!
              Dolorem cumque tempora sit possimus. Nesciunt perferendis culpa
              deserunt ad blanditiis repudiandae quibusdam voluptatum. Placeat
              inventore quis molestiae blanditiis! Amet harum libero iste
              explicabo, eveniet placeat eum soluta sapiente, asperiores
              voluptate quaerat consequatur! Similique, ipsum. Explicabo nulla
              quo aperiam dolorum est deleniti error porro facere minima hic
              quam unde, dignissimos nostrum animi veniam facilis reiciendis,
              qui ea. Natus praesentium cum ipsa autem, eum expedita libero!
              Ducimus doloribus incidunt provident quaerat magnam consequuntur,
              eaque reiciendis nihil atque error veritatis, esse ullam iusto
              corrupti dolorem, ut possimus. Mollitia molestiae ea eligendi
              vitae dignissimos, quaerat soluta officiis. Incidunt. Eius ea,
              quam doloremque explicabo magnam sint minus reiciendis quos
              fugiat? A veniam rerum quo sequi alias aspernatur totam dolorum
              qui veritatis aliquid nihil eius, error repudiandae doloremque?
              Alias, nostrum. Beatae placeat consequuntur consequatur. Fugiat
              quia quos officiis neque minus earum, corrupti velit accusantium
              fuga eos, nihil iusto doloremque dicta rem perferendis eveniet
              commodi. Temporibus quam accusantium id perspiciatis sed. Tenetur
              sunt molestias cupiditate earum odio harum vitae aliquid libero
              quisquam. Magnam molestias veritatis deleniti, amet officiis
              architecto sunt magni excepturi non, tempore harum impedit,
              adipisci est aspernatur a officia? Quia harum, nostrum, error
              corporis consequuntur est officia, totam eveniet quis sint et
              itaque tempore sequi. Velit officia, veniam commodi voluptate, non
              delectus qui fuga laborum ea repudiandae voluptas sequi? Commodi,
              voluptas molestias! Reiciendis, natus? Modi accusantium ratione
              repudiandae magnam soluta laboriosam autem harum ipsum quibusdam
              beatae amet, dicta rerum officia repellendus, dolores possimus quo
              perspiciatis placeat iure sed voluptatibus? Id quia, unde natus
              eveniet magnam dignissimos quibusdam, delectus itaque obcaecati
              explicabo aliquid. Non, quae. Maiores fugiat corporis, adipisci
              officiis facilis molestiae labore laudantium reprehenderit
              obcaecati cum maxime, voluptatem sunt? Voluptas dolores qui iure
              possimus repudiandae perferendis nesciunt ipsum illo vero. Eius
              pariatur tempore alias quia a architecto debitis saepe neque!
              Repellat, atque. Aut iusto sapiente sed deleniti quaerat quos. Nam
              eligendi eaque voluptates doloremque neque deleniti quasi
              voluptatum, perspiciatis rem dolorum ex molestiae libero ipsa ut
              quas recusandae. Debitis dolores exercitationem harum labore
              maiores iusto blanditiis laborum, vitae obcaecati? Ea dolores
              beatae optio. Vitae adipisci aliquid, a magnam ratione ipsam.
              Doloremque, eum incidunt ipsam voluptates dignissimos veniam rerum
              esse officiis eos. Laborum doloribus nesciunt nulla quia
              dignissimos nihil beatae. Rem non impedit debitis, doloremque
              culpa nam asperiores labore facere aspernatur ullam doloribus
              consectetur consequuntur, expedita repellendus optio nesciunt
              blanditiis iste, voluptatem magnam animi voluptatibus iure laborum
              quo. Sunt, vero? Expedita voluptates possimus rerum accusamus
              architecto temporibus porro natus saepe minus quibusdam iste quod
              est iusto consequatur, unde cumque, officiis labore dicta nostrum
              id velit ipsa obcaecati! Saepe, facere totam. Ut architecto qui,
              fugit non nobis eius, quidem quas consectetur minima deleniti
              voluptatibus excepturi dolorum impedit corporis recusandae
              laudantium nam! Nihil sapiente corporis, in ducimus dolor animi
              eos quod officiis! Quia a harum maxime sequi quae aut beatae quod
              quasi. Doloremque tempora labore facere error nam, cum incidunt,
              harum quae eligendi ipsa et eaque tempore sed eius earum,
              doloribus odit? Quo inventore iusto mollitia cupiditate, numquam
              neque, illum sint, tempora dolor at soluta velit perspiciatis aut
              porro illo optio expedita omnis! Deleniti aliquid a corrupti
              officia nulla repellat consequatur labore! Illo ut ad, deleniti
              consequuntur dolores sapiente nam nisi laborum neque labore,
              explicabo animi tempora at officiis magni, eligendi odio deserunt
              soluta. Animi possimus nulla doloribus repellendus nesciunt maxime
              officia! Veniam, corporis dicta. Optio facere sint earum corporis
              expedita. Est, veritatis dignissimos obcaecati aliquam totam
              possimus libero eius, quibusdam nobis labore natus. Et impedit
              vero provident inventore molestias consequuntur quae. Cumque
              similique maiores soluta explicabo illum minus dolores est ipsum
              asperiores expedita! Voluptas, amet quisquam numquam quo maiores,
              perferendis ab quibusdam et quis rerum laborum assumenda illo id
              sit sed. Laudantium incidunt facilis officia nam error ex. Illum
              veniam illo excepturi culpa dolor explicabo sit corporis
              consectetur necessitatibus. Adipisci aliquam at eum et eaque id,
              temporibus excepturi saepe laboriosam qui. Maxime, modi nostrum.
              Sapiente laudantium porro illum ipsa eaque corrupti cum at odit?
              Amet, saepe veniam, illo recusandae reprehenderit laboriosam
              dolorum ipsa aliquam architecto perferendis maiores. Dolores amet
              labore ad. Est qui asperiores optio! Eum in unde omnis ratione
              molestiae facilis possimus similique eaque vitae fugit eveniet
              quidem labore autem asperiores, aspernatur velit cumque odit ex,
              quaerat voluptatibus, veritatis sit? Necessitatibus sit adipisci
              temporibus eum aliquid eligendi voluptatum perferendis fuga,
              quisquam recusandae exercitationem laboriosam repudiandae iste
              soluta at eaque reprehenderit quia enim sed, dolore facilis
              distinctio nemo vero totam? Dignissimos. Minus, exercitationem
              perferendis, dolorem atque blanditiis nostrum quod mollitia
              consectetur explicabo provident assumenda officiis, quam
              reiciendis debitis. Fugit voluptatibus tenetur eos ullam quasi
              vitae in cupiditate repellendus. Quas, ratione dignissimos! Beatae
              inventore possimus porro hic. Cupiditate quis itaque neque fugit
              beatae praesentium doloremque, modi eum ea, at corporis et
              distinctio? Delectus molestias quasi, consequatur officia at fugit
              sint expedita blanditiis? Earum ratione est totam modi ex
              architecto omnis officiis natus magni tempora dignissimos in,
              accusantium exercitationem quam. Magnam ipsum commodi numquam
              dolorem sunt velit amet a. Porro tenetur beatae consequatur. Amet,
              debitis laudantium. Ducimus earum necessitatibus qui consequuntur
              vero optio, at vel excepturi neque atque id, facere itaque vitae
              est odio molestias ut porro ratione, eos explicabo magni alias
              voluptate. Deserunt ab ipsum eos laboriosam, ea non itaque
              corrupti, ex vel facere molestias! Officiis placeat, iste at
              dolorem suscipit dolorum quaerat aliquid animi, qui numquam quos
              ad. Quibusdam, cupiditate eaque! Voluptas provident, nostrum earum
              animi illo culpa soluta, asperiores dolorem voluptatibus quos
              consequuntur fugit ducimus recusandae architecto dolores ea iusto
              tenetur dolore cumque adipisci enim laborum id porro odio.
              Molestias! Aliquam nam at accusantium ipsa odio corporis inventore
              nemo eum? Nulla aut, illum accusantium, maiores ducimus excepturi
              obcaecati molestias at, amet error fugiat! Atque, adipisci nisi
              nostrum doloribus eligendi modi. A possimus deleniti accusantium
              aspernatur itaque earum maxime assumenda impedit facere esse
              laboriosam eveniet libero repellat illo id obcaecati quam
              molestias, saepe maiores repellendus suscipit quaerat magnam quis
              architecto. Fugiat. Eligendi animi provident quis voluptas porro
              ipsa odit similique laboriosam delectus odio repellat atque
              assumenda tempore, eius dolore accusantium? Exercitationem dolores
              atque odit tenetur eum voluptatibus sunt nesciunt ducimus ullam?
              Minima nisi officiis recusandae eum est maxime dolore soluta,
              debitis adipisci cum id officia quae sint quod quas aliquam sed
              provident vero omnis non porro nulla consectetur autem a. Omnis.
              Pariatur perferendis assumenda laborum vitae cumque et nihil unde
              debitis! Quibusdam ratione impedit illo ducimus numquam amet,
              beatae obcaecati voluptatibus autem dolorum, error molestias
              repudiandae doloremque perferendis iure. Dolorem, exercitationem.
              Fuga, repudiandae? Assumenda vel minima porro dignissimos a, qui
              fugit sapiente voluptas voluptates eos maiores ex temporibus
              quaerat praesentium esse eligendi rerum. Voluptates velit ab
              quisquam quae at? Minima, neque? Atque quam reprehenderit corporis
              voluptate? Error, temporibus? Consequuntur cum, nulla beatae qui
              tenetur voluptas numquam quae aspernatur, alias, explicabo minus
              iusto? Soluta ut debitis, ducimus nostrum distinctio odit
              consectetur voluptates. Commodi eius id soluta eveniet ea quis aut
              voluptatibus odit modi? Ipsa, temporibus? Quo placeat, asperiores
              fugiat accusamus error consequatur odit debitis corrupti quas,
              fuga voluptatum quod repellendus ratione eum? Tenetur quaerat
              beatae iusto quisquam neque culpa optio nam nostrum earum, debitis
              dolorum laboriosam amet aliquam voluptatum. Iusto inventore quis
              tenetur aliquam deserunt, saepe quae consequatur laboriosam animi
              obcaecati repellat! Dolor sit itaque corporis officiis rerum
              debitis distinctio corrupti dolorem sed eius, voluptas voluptates
              voluptatem, laborum provident repudiandae ea tempore repellat
              harum non voluptate, laudantium numquam! Molestiae eaque doloribus
              libero. At quam eaque nostrum natus officiis, dignissimos nam
              illum quod esse totam ad, distinctio est quas et qui impedit quia
              nemo quibusdam eveniet exercitationem sapiente! Culpa sint
              officiis velit molestiae. Minima ipsum quo atque, ea nam maxime
              vitae saepe obcaecati id inventore optio velit quod voluptatum sed
              explicabo illo pariatur nulla dolorum magni repudiandae, eveniet
              nesciunt. Quibusdam voluptate doloremque atque. Suscipit facere
              nam mollitia eligendi culpa, tempora quae sed ea fuga et
              consequatur reprehenderit omnis, beatae deleniti quibusdam iusto.
              Sit pariatur cum laudantium eius amet commodi, reiciendis
              laboriosam molestiae temporibus? Qui nostrum voluptatem fuga,
              saepe deleniti vitae culpa optio sunt ullam. Cum impedit, itaque
              totam molestiae ducimus rerum modi exercitationem? Quam nobis
              corporis ipsum voluptas quasi inventore alias maxime iusto?
              Laudantium voluptas velit odit perferendis facilis rerum nulla,
              culpa ipsum cumque, quidem necessitatibus fuga reprehenderit non
              minus numquam quisquam assumenda? Natus obcaecati omnis in
              doloribus dolore quas et nisi repellat. Aspernatur itaque non
              commodi et neque. Minus quo, maxime, porro et eos animi esse, nisi
              praesentium ullam ipsa unde amet excepturi officiis ipsam ad rerum
              blanditiis necessitatibus tenetur aliquam autem. Tempora dolorem
              unde tempore in cumque delectus sint accusamus modi doloribus ad?
              Totam, repellendus! Veniam sapiente consectetur perspiciatis
              exercitationem distinctio quasi quas eius cumque? Assumenda ipsam
              inventore veniam suscipit modi! Nisi nulla eius aperiam quae alias
              distinctio mollitia? Rem, sunt fugiat! Cum sed hic quod voluptate
              maxime at ratione quo voluptatem, provident est sapiente, officiis
              distinctio enim molestias necessitatibus eos? At magni saepe
              adipisci culpa ex aliquam, libero, eveniet eos accusantium
              delectus quod! Debitis, rerum sint! Sit, eveniet accusamus ut
              fugiat iste sequi? Minima perferendis aperiam eum reprehenderit
              alias officiis! Voluptatem eaque maiores, nisi, voluptates
              suscipit eos reprehenderit accusamus aspernatur quos quod,
              necessitatibus voluptatum ipsam nam fugiat a commodi neque. Quae
              voluptatibus quam impedit officiis provident dolor alias neque
              perspiciatis. Nostrum reiciendis soluta cumque doloremque veniam
              ea enim, placeat harum, alias dolorem dolores cum animi nam
              commodi exercitationem. Necessitatibus explicabo adipisci itaque
              pariatur ad doloribus. Voluptate quis placeat illo tenetur? Vitae
              ducimus inventore ipsam suscipit officiis ex eos sapiente, magnam
              eum tempora rem voluptatibus sequi adipisci ipsa recusandae dicta
              quasi molestias dolores ad explicabo. Eligendi consequatur
              deleniti perspiciatis molestias veniam. Distinctio, deserunt
              placeat ipsa consectetur eius ducimus quisquam accusantium commodi
              quis dolorum natus, cum suscipit! Eos, aut. Reprehenderit pariatur
              repellat, facere odit ipsum voluptatibus debitis nesciunt
              laboriosam, labore dolores facilis! Doloremque quibusdam libero
              nam, ratione blanditiis quae reprehenderit illo assumenda. Eius,
              harum. Nostrum eveniet fugit porro, repellendus minima voluptas
              eius, nam, amet ut animi cupiditate sed ipsam consectetur
              dignissimos voluptatum. Natus porro eaque nihil, explicabo magni
              dignissimos ipsam illum. Voluptate consequuntur in id. Libero
              rerum magnam cum accusantium ratione, quis ab dolorum recusandae
              eum ipsum minima, labore, architecto enim neque! Nobis aut sint
              rerum ut fugiat. Itaque debitis quo fugit. Nam debitis harum vitae
              mollitia architecto totam a fugit facere. Provident soluta ea
              perferendis recusandae quo. Maxime possimus vitae officia. A,
              alias! Nihil modi enim repellat debitis? Eum doloremque dolor
              iusto amet blanditiis! Quasi aperiam, iusto odio pariatur
              perferendis vel molestiae in quo veniam! Eius magnam facilis
              dolorum tempore explicabo. Illum repudiandae nam minus beatae
              officia velit. Perspiciatis praesentium aspernatur mollitia
              voluptatem ullam, consequatur placeat repellat impedit cupiditate
              saepe inventore veniam aut magni alias vel rem? Veritatis
              perspiciatis earum facilis! Ad ipsam officiis corporis quos dicta
              laudantium, rerum saepe esse exercitationem ut animi excepturi
              culpa cum odit magni possimus ex soluta optio vitae voluptate quae
              dolores veritatis repellendus totam. Ad. Doloribus nulla
              laboriosam sapiente fugit dolor explicabo optio quis accusantium
              nobis sed, temporibus necessitatibus quaerat tenetur quidem culpa
              veniam ad eius omnis deserunt quisquam magnam eligendi cum harum
              expedita? Eius! Voluptas fugiat quaerat maiores, obcaecati id
              suscipit maxime commodi, rerum, amet qui reiciendis. Voluptates ab
              quasi odit natus ex, qui, facere in, inventore quo ipsam aut
              soluta accusantium nam enim. Laboriosam tempore tempora, labore
              laudantium voluptate eveniet dignissimos maiores omnis. Libero
              dolor, neque ducimus architecto magnam velit pariatur fugiat?
              Minus incidunt adipisci commodi neque exercitationem ea aliquam
              dignissimos aut a. Commodi autem dicta corporis, voluptas
              molestiae facere unde quae vitae cupiditate distinctio voluptatum,
              dolor non! Ipsum quos magnam id! Quas accusantium quisquam nihil
              rem sit labore, cum maxime mollitia error. Accusamus molestiae at
              vel perferendis labore deleniti corrupti, temporibus et
              repellendus ea rem tenetur magni. Quae, consequuntur iste illum
              suscipit accusantium vitae, magnam id aut ipsa iusto explicabo
              cupiditate ducimus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroWikiPage;
