import React, { useState, useEffect } from "react";
import { heroWiki } from "../data/heroWiki.js";
import "./styles/HeroWikiPage.scss";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { TbClockBolt, TbArrowBigUpLinesFilled } from "react-icons/tb";
import { GiBowman, GiSwordman, GiHealthNormal } from "react-icons/gi";
import { PiBatteryVerticalHigh } from "react-icons/pi";

import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Tooltip } from "react-tooltip";

import PathSkills from "./PathSkills.jsx";
import TrinkedItem from "./TrinkedItem.jsx";
import HeroComps from "./HeroComps.jsx";
import HeroCompsDescriptions from "./HeroCompsDescriptions.jsx";

import DataTable from "./dataTable.jsx";

function HeroWikiPage({ url_Bg, heroName }) {
  let [index, setIndex] = useState(0);
  let [pathIndex, setPathIndex] = useState(0);
  let [selectedPathIndex, setSelectedPathIndex] = useState(0);

  let [pathSkillsStack, setPathSkillsStack] = useState(
    heroWiki[0].heroStats[0][1].pathStacks[0]
  );

  useEffect(() => {
    let newIndex = heroWiki[0].heroNames.findIndex((name) => name === heroName);
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
    setUses(heroWiki[0].heroStats[newIndex][1].skills[0].stats.Uses);
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
    setHeal(heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.heal);

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
    setUpgradeHeal(
      heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade.heal
    );

    setPathSkillsStack(heroWiki[0].heroStats[newIndex][1].pathStacks[0]);
    setTrinketImg(heroWiki[0].heroStats[newIndex][1].heroTrinkeds.trinkeds);
    setHeroes(heroWiki[0].heroStats[newIndex][1].teemmates.friends);
    setUniqueAttributes(
      heroWiki[0].heroStats[newIndex][1].UniqueAattributes.Tittle
    );
    setUniqueAttributesDescription(
      heroWiki[0].heroStats[newIndex][1].UniqueAattributes.description
    );
  }, [heroName]);

  let ArrowNextBackArrayHero = (direction) => {
    //SCROLL TO TOP
    scrollToSection("heroHome");

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
      setUses(heroWiki[0].heroStats[newIndex][1].skills[0].stats.Uses);
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
      setHeal(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.heal
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
      setUpgradeHeal(
        heroWiki[0].heroStats[newIndex][1].skills[0].stats.dataStats.upgrade
          .heal
      );

      setPathSkillsStack(heroWiki[0].heroStats[newIndex][1].pathStacks[0]);
      setTrinketImg(heroWiki[0].heroStats[newIndex][1].heroTrinkeds.trinkeds);
      setHeroes(heroWiki[0].heroStats[newIndex][1].teemmates.friends);
      setUniqueAttributes(
        heroWiki[0].heroStats[newIndex][1].UniqueAattributes.Tittle
      );
      setUniqueAttributesDescription(
        heroWiki[0].heroStats[newIndex][1].UniqueAattributes.description
      );

      return newIndex;
    });

    setPathIndex(0);
    setSelectedInput(0);
    setSelectedPathIndex(0);
  };

  // SearchBar Functions
  let items = heroWiki[0].heroNames.map((name, index) => ({
    id: index,
    name,
  }));

  let selectHero = (item) => {
    let selectedIndex = heroWiki[0].heroNames.indexOf(item.name);

    if (selectedIndex !== -1) {
      setIndex(selectedIndex);
    }
  };

  let formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  let stats = [
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

  let [isUpgradeActive, setUpgradeActive] = useState(false);

  let toggleUpgrade = () => {
    setUpgradeActive(!isUpgradeActive);
  };

  //Unique Attributes
  let [uniqueAttributes, setUniqueAttributes] = useState(
    heroWiki[0].heroStats[index][1].UniqueAattributes.Tittle
  );
  let [uniqueAttributesDescription, setUniqueAttributesDescription] = useState(
    heroWiki[0].heroStats[index][1].UniqueAattributes.description
  );

  //SKILL SELECTION RADIOBUTTONS
  let [selectedInput, setSelectedInput] = useState(0);

  let [selectedSkill, setSelectedSkill] = useState(
    heroWiki[0].heroStats[index][1].skills[0].name
  );

  let [typeSkill, setTypeSkill] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.type
  );

  //Rank/target checkPoints
  let pointSlots = [1, 2, 3, 4];
  let [rankChecksPoints, setrankChecksPoints] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.Rank
  );
  let [targetChecksPoints, setTargetChecksPoints] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.Target
  );

  //Cooldown
  let [cooldown, setCooldown] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.Cooldown
  );

  //Uses
  let [uses, setUses] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.Uses
  );

  //skillOverwiew
  let [skillOverview, setSkillOverview] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.skillOverwiew
  );

  //dataStatsArray
  let dataStats = heroWiki[0].heroStats[index][1].skills[0].stats.dataStats;

  let [damage, setDamage] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.damage
  );

  let [crit, setCritic] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.crit
  );

  let [targetDebuff, setTargetDebuff] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.target
  );

  let [selfBuff, setSelfBuff] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.self
  );

  let [heal, setHeal] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.heal
  );

  //upgradesData
  let dataUpgrade =
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade;

  let [upgradeDamage, setUpgradeDamage] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade.damage
  );

  let [upgradeCrit, setUpgradeCrit] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade.crit
  );

  let [upgradeTargetDebuff, setUpgradeTargetDebuff] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade.target
  );

  let [upgradeSelfBuff, setUpgradeSelfBuff] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade.self
  );


  let [upgradeHeal, setUpgradeHeal] = useState(
    heroWiki[0].heroStats[index][1].skills[0].stats.dataStats.upgrade.heal
  );

  let handleSkillSelect = (event, i) => {
    setSelectedSkill(event.target.value);
    setSelectedInput(i);
    setTypeSkill(heroWiki[0].heroStats[index][1].skills[i].stats.type);
    setrankChecksPoints(heroWiki[0].heroStats[index][1].skills[i].stats.Rank);
    setTargetChecksPoints(
      heroWiki[0].heroStats[index][1].skills[i].stats.Target
    );
    setCooldown(heroWiki[0].heroStats[index][1].skills[i].stats.Cooldown);
    setUses(heroWiki[0].heroStats[index][1].skills[i].stats.Uses);
    setSkillOverview(
      heroWiki[0].heroStats[index][1].skills[i].stats.skillOverwiew
    );
    setDamage(heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.damage);
    setCritic(heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.crit);
    setTargetDebuff(
      heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.target
    );
    setSelfBuff(heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.self);
    setHeal(heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.heal);

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
    setUpgradeHeal(
      heroWiki[0].heroStats[index][1].skills[i].stats.dataStats.upgrade.heal
    );

    setTrinketImg(heroWiki[0].heroStats[index][1].heroTrinkeds.trinkeds);
    setHeroes(heroWiki[0].heroStats[index][1].teemmates.friends);
    setUniqueAttributes(
      heroWiki[0].heroStats[index][1].UniqueAattributes.Tittle
    );
    setUniqueAttributesDescription(
      heroWiki[0].heroStats[index][1].UniqueAattributes.description
    );
  };

  let [trinketImg, setTrinketImg] = useState(
    heroWiki[0].heroStats[index][1].heroTrinkeds.trinkeds
  );

  let [heroes, setHeroes] = useState(
    heroWiki[0].heroStats[index][1].teemmates.friends
  );

  let [activeHero, setActiveHero] = useState(0);

  let handleHeroChange = (event) => {
    setActiveHero(Number(event.target.value));
  };

  //ScrollToSection id="paths"
  let scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

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
                          heroWiki[0].heroStats[index][1].pathStacks[pathIndex]
                        );
                        scrollToSection("paths");
                      }}
                    />
                    <label htmlFor={`value-${pathIndex + 1}`}>{path}</label>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="contain-WikiData">
            <section id="heroHome">
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

              {uniqueAttributes !== "" && (
                <div className="uniqueAttributeContain">
                  <h3>{uniqueAttributes}</h3>
                  <p>{uniqueAttributesDescription}</p>
                </div>
              )}
            </section>

            <br />
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

            <section id="paths">
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
              <br />
              <cite>
                {heroWiki[0].heroStats[index][1].paths[0][1][selectedPathIndex]}
              </cite>
              <br />
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
            </section>

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
                      ) : typeSkill === "Heal" ? (
                        <GiHealthNormal />
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

                  {!isNaN(uses) && (
                    <li>
                      <b>Uses</b>
                      <div className="dataStat">
                        <PiBatteryVerticalHigh style={{ fontSize: "1.5em" }} />
                        <i> {uses}</i>
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
                    heal={heal}
                  />

                  <h4 style={{ backgroundColor: "#2a6383" }}>Upgrade</h4>

                  <DataTable
                    dataStats={dataUpgrade}
                    damage={upgradeDamage}
                    crit={upgradeCrit}
                    targetDebuff={upgradeTargetDebuff}
                    selfBuff={upgradeSelfBuff}
                    heal={heal}
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
              {heroes.map((hero, index) => {
                return (
                  <div key={hero}>
                    <input
                      type="radio"
                      id={hero}
                      name="hero"
                      value={index}
                      checked={activeHero === index}
                      onChange={handleHeroChange}
                    />
                    <label htmlFor={hero}>
                      <HeroComps
                        heroname={hero}
                        trueHero={activeHero === index}
                      />
                    </label>
                  </div>
                );
              })}
            </div>

            <br />

            <div className="teammateDescription">
              <HeroCompsDescriptions
                description={
                  heroWiki[0].heroStats[index][1].teemmates.description[
                    activeHero
                  ]
                }
              />
            </div>

            <br />
            <h2>Sample Comp</h2>
            <hr />

            <div className="teamCombo">
              <h3>{heroWiki[0].heroStats[index][1].sampleCombo.title}</h3>

              <div className="ImgHero">
                <div>
                  <HeroComps
                    heroname={
                      heroWiki[0].heroStats[index][1].sampleCombo.comp[0]
                    }
                    trueHero={false}
                  />
                  <span>
                    ({heroWiki[0].heroStats[index][1].sampleCombo.paths[0]})
                  </span>
                </div>
                <div>
                  <HeroComps
                    heroname={
                      heroWiki[0].heroStats[index][1].sampleCombo.comp[1]
                    }
                    trueHero={false}
                  />
                  <span>
                    ({heroWiki[0].heroStats[index][1].sampleCombo.paths[1]})
                  </span>
                </div>
                <div>
                  <HeroComps
                    heroname={
                      heroWiki[0].heroStats[index][1].sampleCombo.comp[2]
                    }
                    trueHero={false}
                  />
                  <span>
                    ({heroWiki[0].heroStats[index][1].sampleCombo.paths[2]})
                  </span>
                </div>
                <div>
                  <HeroComps
                    heroname={
                      heroWiki[0].heroStats[index][1].sampleCombo.comp[3]
                    }
                    trueHero={false}
                  />
                  <span>
                    ({heroWiki[0].heroStats[index][1].sampleCombo.paths[3]})
                  </span>
                </div>
              </div>

              <p>{heroWiki[0].heroStats[index][1].sampleCombo.description}</p>
            </div>

            <div className="copyRight">
              <cite>
                Developed by:{" "}
                <a
                  href="https://www.linkedin.com/in/mauro-pepa-dev/"
                  target="_blanck"
                >
                  Mauro Exequiel Pepa
                </a>
              </cite>
              <cite>
                InfoRef:
                <a
                  href="https://darkestdungeon.fandom.com/wiki/Darkest_Dungeon_II_Wiki"
                  target="_blanck"
                >
                  Getfandom
                </a>
                <a href="https://www.youtube.com/@ShuffleFM" target="_blanck">
                  ShuffleFM
                </a>
                <a
                  href="https://steamcommunity.com/sharedfiles/filedetails/?id=2973257745"
                  target="_blanck"
                >
                  SpiderKhan
                </a>
              </cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroWikiPage;
