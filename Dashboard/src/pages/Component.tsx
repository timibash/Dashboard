import { FunctionComponent } from "react";
import { Input, Button, Textarea, Checkbox } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import styles from "./Component.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.div}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <div className={styles.rectangleDiv2} />
        <div className={styles.rectangleDiv3} />
        <div className={styles.rectangleDiv4} />
        <div className={styles.rectangleDiv5} />
      </div>
      <Input
        className={styles.rectangleInput}
        variant="outline"
        width="253px"
        placeholder="Input"
        w="253px"
      />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
      <img className={styles.ellipseIcon1} alt="" src="../ellipse-2.svg" />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-3.svg" />
      <img className={styles.ellipseIcon3} alt="" src="../ellipse-4.svg" />
      <div className={styles.rectangleDiv6} />
      <Button
        className={styles.rectangleButton}
        variant="outline"
        w="97px"
        colorScheme="teal"
        rightIcon={<ArrowForwardIcon />}
      >
        Button
      </Button>
      <Button
        className={styles.rectangleButton1}
        variant="outline"
        w="97px"
        colorScheme="teal"
        rightIcon={<ArrowForwardIcon />}
      >
        Button
      </Button>
      <div className={styles.rectangleDiv7} />
      <div className={styles.rectangleDiv8} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="../rectangle-14@2x.png"
      />
      <img
        className={styles.rectangleIcon1}
        alt=""
        src="../rectangle-15@2x.png"
      />
      <img
        className={styles.rectangleIcon2}
        alt=""
        src="../rectangle-16@2x.png"
      />
      <img
        className={styles.rectangleIcon3}
        alt=""
        src="../rectangle-17@2x.png"
      />
      <Input
        className={styles.rectangleInput1}
        variant="outline"
        width="285px"
        placeholder="Input"
        w="285px"
      />
      <div className={styles.searchOrTypeACommand}>
        Search or type a command
      </div>
      <div className={styles.allTime}>All time</div>
      <div className={styles.allTime1}>All time</div>
      <div className={styles.jan}>Jan</div>
      <div className={styles.feb}>Feb</div>
      <div className={styles.mar}>Mar</div>
      <div className={styles.apr}>Apr</div>
      <div className={styles.may}>May</div>
      <div className={styles.jun}>Jun</div>
      <div className={styles.jul}>Jul</div>
      <div className={styles.aug}>Aug</div>
      <div className={styles.sep}>Sep</div>
      <div className={styles.nov}>Nov</div>
      <div className={styles.dec}>Dec</div>
      <div className={styles.jan1}>Jan</div>
      <div className={styles.welcomeToOurNewOnlineExpe}>
        <span>{`Welcome to our new `}</span>
        <b className={styles.onlineExperience}>online experience</b>
        <span>{` `}</span>
      </div>
      <img
        className={styles.searchLine1Icon}
        alt=""
        src="../search-line-1.svg"
      />
      <b className={styles.home}>{`Home `}</b>
      <b className={styles.dashboard}>Dashboard</b>
      <b className={styles.overview}>Overview</b>
      <b className={styles.totalIncome}>{`Total Income `}</b>
      <b className={styles.popularProducts}>Popular Products</b>
      <b className={styles.comments}>Comments</b>
      <b className={styles.b}>205.99</b>
      <b className={styles.b1}>$1,500,504.00</b>
      <b className={styles.osewa}>Osewa</b>
      <b className={styles.aquia}>Aquia</b>
      <b className={styles.gbemi}>Gbemi</b>
      <b className={styles.ralph}>Ralph</b>
      <div className={styles.rectangleDiv9} />
      <div className={styles.groupDiv1}>
        <b className={styles.f}>F</b>
        <img className={styles.icon} alt="" src="../1.svg" />
      </div>
      <div className={styles.button}>
        <Button
          className={styles.rectangleButton2}
          variant="solid"
          w="76px"
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
        >
          Button
        </Button>
        <Button
          className={styles.groupButton}
          variant="solid"
          w="61px"
          colorScheme="teal"
          rightIcon={<ArrowForwardIcon />}
        >
          Create
        </Button>
      </div>
      <img
        className={styles.octiconpencil16}
        alt=""
        src="../octiconpencil16.svg"
      />
      <img className={styles.groupIcon} alt="" src="../group-4.svg" />
      <img className={styles.ellipseIcon4} alt="" src="../ellipse-5@2x.png" />
      <b className={styles.products}>{`Products `}</b>
      <b className={styles.customers}>Customers</b>
      <b className={styles.income}>Income</b>
      <b className={styles.products1}>Products</b>
      <b className={styles.message}>Message</b>
      <div className={styles.theAlcoholEthanolInHand}>
        <p className={styles.theAlcoholEthanol}>
          The alcohol (ethanol) in hand sanitizers can be absorbed through the
          skin. Thank
        </p>
        <p className={styles.you}>you.</p>
      </div>
      <b className={styles.uIKit}>UI Kit</b>
      <b className={styles.uIKit1}>UI Kit</b>
      <b className={styles.uIKit2}>UI Kit</b>
      <b className={styles.uIKit3}>UI Kit</b>
      <b className={styles.productA}>Product A</b>
      <b className={styles.productB}>Product B</b>
      <b className={styles.productC}>Product C</b>
      <b className={styles.productD}>Product D</b>
      <b className={styles.allProducts}>{`All Products `}</b>
      <b className={styles.b2}>$5000</b>
      <b className={styles.b3}>$630</b>
      <b className={styles.b4}>$7110</b>
      <b className={styles.b5}>$9000</b>
      <b className={styles.earnings}>Earnings</b>
      <b className={styles.date}>Date</b>
      <img className={styles.vectorIcon} alt="" src="../vector.svg" />
      <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
      <img className={styles.vectorIcon2} alt="" src="../vector1.svg" />
      <b className={styles.customers1}>{`Customers  `}</b>
      <img className={styles.vectorIcon3} alt="" src="../vector.svg" />
      <b className={styles.shop}>{`Shop `}</b>
      <img className={styles.vectorIcon4} alt="" src="../vector.svg" />
      <b className={styles.income1}>{`Income `}</b>
      <img className={styles.vectorIcon5} alt="" src="../vector.svg" />
      <b className={styles.promote}>{`Promote `}</b>
      <b className={styles.helpGettingStarted}>{`Help & Getting Started `}</b>
      <div className={styles.rectangleDiv10} />
      <div className={styles.rectangleDiv11} />
      <div className={styles.rectangleDiv12} />
      <b className={styles.b6}>8</b>
      <b className={styles.b7}>5%</b>
      <b className={styles.b8}>1%</b>
      <img className={styles.vectorIcon6} alt="" src="../vector.svg" />
      <img
        className={styles.searchLine2Icon}
        alt=""
        src="../search-line-2.svg"
      />
      <img
        className={styles.heroiconsSoliduserGroup}
        alt=""
        src="../heroiconssolidusergroup.svg"
      />
      <img
        className={styles.attachMoney1Icon}
        alt=""
        src="../attach-money-1.svg"
      />
      <img
        className={styles.dashiconsawards}
        alt=""
        src="../dashiconsawards.svg"
      />
      <img className={styles.box2Line1Icon} alt="" src="../box-2-line-1.svg" />
      <img className={styles.icon1} alt="" src="../11.svg" />
      <div className={styles.lineDiv} />
      <div className={styles.lineDiv1} />
      <div className={styles.lineDiv2} />
      <div className={styles.lineDiv3} />
      <div className={styles.lineDiv4} />
      <div className={styles.lineDiv5} />
      <div className={styles.lineDiv6} />
      <div className={styles.lineDiv7} />
      <div className={styles.lineDiv8} />
      <img
        className={styles.helpOutlineIcon}
        alt=""
        src="../help-outline.svg"
      />
      <b className={styles.logOut}>{`Log out `}</b>
      <img className={styles.exitLine1Icon} alt="" src="../exit-line-1.svg" />
      <div className={styles.lineDiv9} />
      <div className={styles.lineDiv10} />
      <div className={styles.lineDiv11} />
      <div className={styles.rectangleDiv13} />
      <div className={styles.rectangleDiv14} />
      <div className={styles.rectangleDiv15} />
      <div className={styles.rectangleDiv16} />
      <img
        className={styles.twemojiringedPlanetIcon}
        alt=""
        src="../twemojiringedplanet.svg"
      />
      <img
        className={styles.notoV1smallAirplaneIcon}
        alt=""
        src="../notov1smallairplane.svg"
      />
      <img
        className={styles.notoV1womansClothesIcon}
        alt=""
        src="../notov1womansclothes.svg"
      />
      <Textarea
        className={styles.rectangleTextarea}
        variant="outline"
        w="32px"
        placeholder="Text Area"
      />
      <img
        className={styles.emojioneracingCarIcon}
        alt=""
        src="../emojioneracingcar.svg"
      />
      <div className={styles.rectangleDiv17} />
      <div className={styles.rectangleDiv18} />
      <div className={styles.rectangleDiv19} />
      <div className={styles.rectangleDiv20} />
      <Checkbox
        className={styles.rectangleCheckbox}
        colorScheme="teal"
        spacing="0.5rem"
      >
        Label
      </Checkbox>
      <div className={styles.rectangleDiv21} />
      <div className={styles.rectangleDiv22} />
      <div className={styles.rectangleDiv23} />
      <div className={styles.rectangleDiv24} />
      <div className={styles.rectangleDiv25} />
      <div className={styles.rectangleDiv26} />
      <img
        className={styles.cillistFilterIcon}
        alt=""
        src="../cillistfilter.svg"
      />
    </div>
  );
};

export default Component;
