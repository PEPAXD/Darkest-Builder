import React, { useState, useEffect } from "react";
import { heroWiki } from "../data/heroWiki.js";
import "./styles/HeroWikiPage.scss";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TbClockBolt, TbArrowBigUpLinesFilled } from "react-icons/tb";
import { GiBowman, GiSwordman } from "react-icons/gi";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Tooltip } from "react-tooltip";

import PathSkills from "./PathSkills.jsx";
import TrinkedItem from "./TrinkedItem.jsx";
import HeroComps from "./HeroComps.jsx";

import DataTable from "./dataTable.jsx";

function HeroWikiPage({ url_Bg, heroName }) {
  const [index, setIndex] = useState(0);
  const [pathIndex, setPathIndex] = useState(0);
  const [selectedPathIndex, setSelectedPathIndex] = useState(0);

  const [pathSkillsStack, setPathSkillsStack] = useState(
    heroWiki[0].heroStats[0][1].pathStacks[0]
  );

  useEffect(() => {
    const newIndex = heroWiki[0].heroNames.findIndex(
      (name) => name === heroName
    );
    setIndex(newIndex);
    setSelectedSkill(heroWiki[0].heroStats[newIndex][1].skills[0].name);
    setTypeSkill(heroWiki[0].heroStats[newIndex][1].skills[0].stats.type);
    setrankChecksPoints(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.Rank
    );
    setTargetChecksPoints(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.Target
    );
    setCooldown(heroWiki[0].heroStats[newIndex][1].skills[0].stats.Cooldown);
    setSkillOverview(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.skillOverwiew
    );
    setDamage(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.damage
    );
    setCritic(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.crit
    );
    setTargetDebuff(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.target
    );
    setSelfBuff(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.self
    );
    setUpgradeDamage(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade
        .damage
    );
    setUpgradeCrit(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade.crit
    );
    setUpgradeTargetDebuff(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade
        .target
    );
    setUpgradeSelfBuff(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade.self
    );
    setPathSkillsStack(heroWiki[0].heroStats[0][1].pathStacks[0]);
  }, [heroName]);

  const ArrowNextBackArrayHero = (direction) => {
    setIndex((oldIndex) => {
      let newIndex;
      if (direction === "back") {
        newIndex =
          oldIndex > 0 ? oldIndex - 1 : heroWiki[0].heroNames.length - 1;
      } else if (direction === "forward") {
        newIndex =
          oldIndex < heroWiki[0].heroNames.length - 1 ? oldIndex + 1 : 0;
      }
      setSelectedSkill(heroWiki[0].heroStats[newIndex][1].skills[0].name);
      setTypeSkill(heroWiki[0].heroStats[newIndex][1].skills[0].stats.type);
      setrankChecksPoints(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.Rank
      );
      setTargetChecksPoints(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.Target
      );
      setCooldown(heroWiki[0].heroStats[newIndex][1].skills[0].stats.Cooldown);
      setSkillOverview(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.skillOverwiew
      );
      setDamage(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.damage
      );
      setCritic(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.crit
      );
      setTargetDebuff(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.target
      );
      setSelfBuff(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.self
      );
      setUpgradeDamage(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade
          .damage
      );
      setUpgradeCrit(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade
          .crit
      );
      setUpgradeTargetDebuff(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade
          .target
      );
      setUpgradeSelfBuff(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade
          .self
      );
      setPathSkillsStack(heroWiki[0].heroStats[0][1].pathStacks[0]);

      return newIndex;
    });

    setPathIndex(0);
    setSelectedInput(0);
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

  const [isUpgradeActive, setUpgradeActive] = useState(false);

  const toggleUpgrade = () => {
    setUpgradeActive(!isUpgradeActive);
  };

  //SKILL SELECTION RADIOBUTTONS
  const [selectedInput, setSelectedInput] = useState(0);

  const [selectedSkill, setSelectedSkill] = useState(
    heroWiki[0].heroStats[index][1].skills[0].name
  );

  const [typeSkill, setTypeSkill] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.type
  );

  //Rank/target checkPoints
  const pointSlots = [1, 2, 3, 4];
  const [rankChecksPoints, setrankChecksPoints] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.Rank
  );
  const [targetChecksPoints, setTargetChecksPoints] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.Target
  );

  //Cooldown
  const [cooldown, setCooldown] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.Cooldown
  );

  //skillOverwiew
  const [skillOverview, setSkillOverview] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.skillOverwiew
  );

  //dataStatsArray
  const dataStats = heroWiki[0].heroStats[index][1].skills[0].stats.dataStats;

  const [damage, setDamage] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.damage
  );

  const [crit, setCritic] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.crit
  );

  const [targetDebuff, setTargetDebuff] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.target
  );

  const [selfBuff, setSelfBuff] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.self
  );

  //upgradesData
  const dataUpgrade =
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade;

  const [upgradeDamage, setUpgradeDamage] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade.damage
  );

  const [upgradeCrit, setUpgradeCrit] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade.crit
  );

  const [upgradeTargetDebuff, setUpgradeTargetDebuff] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade.target
  );

  const [upgradeSelfBuff, setUpgradeSelfBuff] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade.self
  );

  const handleSkillSelect = (event, i) => {
    setSelectedSkill(event.target.value);
    setSelectedInput(i);
    setTypeSkill(heroWiki[0].heroStats[index][1].skills[i].stats.type);
    setrankChecksPoints(heroWiki[0].heroStats[index][1].skills[i].stats.Rank);
    setTargetChecksPoints(
      heroWiki[0].heroStats[index][1].skills[i].stats.Target
    );
    setCooldown(heroWiki[0].heroStats[index][1].skills[i].stats.Cooldown);
    setSkillOverview(
      heroWiki[0].heroStats[index][1].skills[i].stats.skillOverwiew
    );
    setDamage(heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.damage);
    setCritic(heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.crit);
    setTargetDebuff(
      heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.target
    );
    setSelfBuff(heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.self);
    setUpgradeDamage(
      heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.upgrade.damage
    );
    setUpgradeCrit(
      heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.upgrade.crit
    );
    setUpgradeTargetDebuff(
      heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.upgrade.target
    );
    setUpgradeSelfBuff(
      heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.upgrade.self
    );
  };

  //TODO WIP TRINKETS ---> NEW PASS ADD TO DATABASE.JS
  const [trinketImg, setTrinketImg] = useState(
    heroWiki[0].heroStats[index][1].heroTrinkeds.trinkeds
  );

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
                        setPathSkillsStack(
                          heroWiki[0].heroStats[0][1].pathStacks[pathIndex]
                        );
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

            <div className="statsContain">
              <div className="angry-grid">
                <div id="item-0">
                  <div className="upgradeButton">
                    <div className="checkbox-wrapper-46">
                      <input
                        type="checkbox"
                        id="cbx-46"
                        className="inp-cbx"
                        onChange={toggleUpgrade}
                      />
                      <label htmlFor="cbx-46" className="cbx">
                        <span>
                          <svg viewBox="0 0 12 10" height="10px" width="12px">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </svg>
                        </span>
                        <span>Upgraded</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div id="item-1">
                  <h4>Resistances</h4>
                </div>
                {stats.map((stat, i) => (
                  <div id={`item-${i + 2}`} key={`item-${i + 2}`}>
                    <img src={stat.icon} alt="" />
                    <h5>
                      {stat.type}{" "}
                      {isUpgradeActive
                        ? heroWiki[0].heroStats[index][1].stats.upgrades[
                            stat.type
                          ]
                        : heroWiki[0].heroStats[index][1].stats[stat.type]}
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

            <h2>Hero Paths</h2>
            <hr />

            <div className="pathContainer">
              <PathSkills
                index={index}
                heroWiki={heroWiki}
                pathN={1}
                skills={heroWiki[0].heroStats[index][1].paths[0][2]}
                imgPath={`public/HeroIcons/paths/${heroWiki[0].heroNames[index]}/Dd2_path_${heroWiki[0].heroPaths[index][1][1]}.webp`}
                borderStyle={selectedPathIndex === 1}
              />
              <PathSkills
                index={index}
                heroWiki={heroWiki}
                pathN={2}
                skills={heroWiki[0].heroStats[index][1].paths[0][3]}
                imgPath={`public/HeroIcons/paths/${heroWiki[0].heroNames[index]}/Dd2_path_${heroWiki[0].heroPaths[index][1][2]}.webp`}
                borderStyle={selectedPathIndex === 2}
              />
              <PathSkills
                index={index}
                heroWiki={heroWiki}
                pathN={3}
                skills={heroWiki[0].heroStats[index][1].paths[0][4]}
                imgPath={`public/HeroIcons/paths/${heroWiki[0].heroNames[index]}/Dd2_path_${heroWiki[0].heroPaths[index][1][3]}.webp`}
                borderStyle={selectedPathIndex === 3}
              />
            </div>

            <cite>
              {heroWiki[0].heroStats[index][1].paths[0][1][selectedPathIndex]}
            </cite>
            <br />

            <div className="skillsContain">
              {heroWiki[0].heroStats[index][1].skills.map((skill, i) => (
                <label
                  className="imgContain"
                  key={skill.id}
                  style={{
                    position: "relative",
                    opacity:
                      pathSkillsStack.includes(i) || pathSkillsStack == 11
                        ? 1
                        : 0.2,
                  }}
                >
                  <input
                    type="radio"
                    name="skills"
                    value={skill.name}
                    checked={i === selectedInput}
                    style={{ display: "none" }}
                    onChange={(event) => handleSkillSelect(event, i)}
                  />
                  <img
                    className="skills"
                    src={`public/HeroIcons/skills/${heroWiki[0].heroNames[index]}/${skill.img}.webp`}
                    alt={skill.name}
                  />
                  <i>{skill.name}</i>
                  {pathSkillsStack.includes(i) && (
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent",
                        borderRight: "10px solid transparent",
                        borderTop: "10px solid cyan",
                        position: "absolute",
                        top: 0,
                        left: "calc(50% - 10px)",
                      }}
                    />
                  )}
                </label>
              ))}
            </div>

            <br />

            <div className="skillsInfoContainer">
              <h4>{selectedSkill}</h4>

              <div className="basicStats">
                <ul>
                  <li>
                    <b>Type</b>
                    <div className="dataStat">
                      {typeSkill === "Melee" ? (
                        <GiSwordman />
                      ) : typeSkill === "Ranged" ? (
                        <GiBowman />
                      ) : typeSkill === "Buff" ? (
                        <TbArrowBigUpLinesFilled />
                      ) : null}
                      <i> {typeSkill}</i>
                    </div>
                  </li>

                  <li className="checkBoxStyles">
                    <b>Rank</b>
                    <div className="dataStat">
                      <label className="container">
                        {pointSlots.map((number) => (
                          <div
                            className="checkmark"
                            id={
                              rankChecksPoints.includes(number)
                                ? "rankCheck"
                                : ""
                            }
                            key={number}
                          />
                        ))}
                      </label>
                    </div>
                  </li>

                  <li className="checkBoxStyles">
                    <b>Target</b>
                    <div className="dataStat">
                      <label className="container">
                        {targetChecksPoints !== "Self" ? (
                          pointSlots.map((number) => (
                            <div
                              className="checkmark"
                              id={
                                targetChecksPoints.includes(number)
                                  ? "targetCheck"
                                  : ""
                              }
                              key={number}
                            />
                          ))
                        ) : (
                          <div
                            style={{
                              backgroundColor: "#1CAC78",
                              color: "white",
                              padding: "0rem 2rem",
                              fontStyle: "italic",
                            }}
                          >
                            Self
                          </div>
                        )}
                      </label>
                    </div>
                  </li>

                  {!isNaN(cooldown) && (
                    <li>
                      <b>Cooldown</b>
                      <div className="dataStat">
                        <TbClockBolt style={{ fontSize: "1.5em" }} />
                        <i> {cooldown}</i>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <p>{skillOverview}</p>
              <br />

              <div className="statsContainer">
                <div className="statsDataGrid">
                  <h4>Stats Data Table</h4>

                  <DataTable
                    dataStats={dataStats}
                    damage={damage}
                    crit={crit}
                    targetDebuff={targetDebuff}
                    selfBuff={selfBuff}
                  />

                  <h4 style={{ backgroundColor: "#2a6383" }}>Upgrade</h4>

                  <DataTable
                    dataStats={dataUpgrade}
                    damage={upgradeDamage}
                    crit={upgradeCrit}
                    targetDebuff={upgradeTargetDebuff}
                    selfBuff={upgradeSelfBuff}
                  />
                </div>

                <br />
              </div>
            </div>

            <br />

            <h2>Hero Trinkets</h2>
            <hr />
            <div className="trinkedsContainer">
              <div className="columTitleTrinkeds">
                <div className="angry-grid">
                  <div id="item-0">Image</div>
                  <div id="item-1">Description</div>
                  <div id="item-2">Trinket</div>
                </div>
              </div>

              {trinketImg.map((name, i) => (
                <TrinkedItem
                  key={name}
                  imgPath={`public/HeroIcons/trinkeds/${heroWiki[0].heroNames[index]}/${name}.webp`}
                  trinketName={name.replace(/_/g, " ")}
                  description={
                    heroWiki[0].heroStats[index][1].heroTrinkeds.description[i]
                  }
                />
              ))}
            </div>

            <br />
            <h2>Heros Teammates</h2>
            <hr />

            <br />
            <br />

            <div className="friends">
              
              <HeroComps />
              <HeroComps />
              <HeroComps />


            </div>

            <br />

            <div className="teammateDescription">
              <ul>
                <li>
                  <h5>Good damage and range</h5>
                  <p>
                    Destaca como una excelente aliada, principalmente por su
                    buen rango y daño considerable. Aunque, a diferencia del
                    Highwayman, enfrenta dificultades en el rango 3.
                  </p>
                </li>
                <li>
                  <h5>Bleed Sinergy</h5>
                  <p>
                    Interesante sinergia con el sangrado, resultar efectiva en
                    combate para sumar stacks.
                  </p>
                </li>
                <li>
                  <h5>move combo</h5>
                  <p>
                    En situaciones donde el posicionamiento adelantado es
                    crucial, si Hellion es desplazada hacia atrás, Highwayman
                    puede utilizar Point Blank Shot para devolverla al primer
                    rango..
                  </p>
                </li>
              </ul>
            </div>

            <br />
            <br />
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus
              risus at ultrices mi. Fringilla urna porttitor rhoncus dolor purus
              non enim praesent elementum. Viverra accumsan in nisl nisi.
              Egestas erat imperdiet sed euismod nisi porta lorem. Dolor sit
              amet consectetur adipiscing elit duis. Scelerisque fermentum dui
              faucibus in ornare quam viverra. Enim sed faucibus turpis in eu
              mi. Vitae et leo duis ut diam quam. Auctor neque vitae tempus
              quam. In ornare quam viverra orci sagittis eu volutpat odio
              facilisis. Pharetra vel turpis nunc eget lorem. Cras ornare arcu
              dui vivamus arcu felis bibendum ut. Hendrerit gravida rutrum
              quisque non tellus orci. Ridiculus mus mauris vitae ultricies leo
              integer. Aliquet eget sit amet tellus cras adipiscing enim eu
              turpis. Habitant morbi tristique senectus et netus et malesuada
              fames. A lacus vestibulum sed arcu non odio euismod lacinia.
              Lacinia at quis risus sed. Lacinia quis vel eros donec ac. Diam in
              arcu cursus euismod quis viverra nibh cras pulvinar. Diam donec
              adipiscing tristique risus nec feugiat in fermentum posuere. Donec
              massa sapien faucibus et molestie ac feugiat sed. Consectetur a
              erat nam at lectus urna duis. Libero justo laoreet sit amet cursus
              sit. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
              Nunc vel risus commodo viverra maecenas accumsan lacus vel.
              Pharetra massa massa ultricies mi quis hendrerit. Massa tincidunt
              dui ut ornare lectus sit amet est placerat. Imperdiet massa
              tincidunt nunc pulvinar sapien. Nunc sed velit dignissim sodales
              ut eu sem. Velit egestas dui id ornare arcu odio ut. Urna duis
              convallis convallis tellus id interdum velit laoreet id. Lacinia
              at quis risus sed vulputate odio ut. Sed blandit libero volutpat
              sed cras ornare arcu dui. Vitae semper quis lectus nulla at.
              Cursus turpis massa tincidunt dui ut ornare lectus sit amet.
              Suspendisse potenti nullam ac tortor vitae. Arcu cursus euismod
              quis viverra nibh cras pulvinar mattis nunc. Commodo viverra
              maecenas accumsan lacus vel facilisis volutpat est velit. Erat
              velit scelerisque in dictum non. Imperdiet proin fermentum leo vel
              orci. In ante metus dictum at tempor commodo. Pellentesque
              habitant morbi tristique senectus et netus et. Eget mauris
              pharetra et ultrices neque ornare. Massa enim nec dui nunc. Amet
              cursus sit amet dictum sit amet justo. Ultrices neque ornare
              aenean euismod elementum nisi quis eleifend. Neque gravida in
              fermentum et sollicitudin ac.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroWikiPage;
