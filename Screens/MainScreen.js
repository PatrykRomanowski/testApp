import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  FlatList,
  StatusBar,
  Dimensions,
  Button,
  Modal,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { useState, useEffect } from "react";
import Theards from "../classes/theards";

import { theardsDataInsideForMetric } from "../data/theardsData";
import { theardsDataInsideForInch } from "../data/theardsData";
import { theardsDataOutsideForMetric } from "../data/theardsData";
import { theardsDataOutsideForInch } from "../data/theardsData";
import { theards_M } from "../data/theardsData";

import Triangle from "../components/UI/Triangle";
import TheardsDescription from "../components/UI/TheardsDescription";
import BackgroundForTheardsButtons from "../components/UI/BackgroungForTheardsButtons";
import BackgroundForResult from "../components/UI/BackgroundForResult";
import BackgroundForSelectedUnit from "../components/UI/BackgroundForSelectedUnit";
import ModalDescription from "../components/UI/ModalDescription";
import OkButtonModal from "../components/UI/OkButtonModal";

import { modalActions } from "../storage/modal-context";

let theardsData = new Theards();
// const theardsDataInside = new Theards();
const theardsDataOutside = new Theards();
const screenHeight = Dimensions.get("window").height;

const MainScreen = (props) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Użyj stanu, aby przechowywać aktualny indeks
  const [actualOption, setActualOption] = useState(1); // aktualny rodzaj gwintu, wewnetrzny lub zaewnętrzny
  const [actualUnit, setActualUnit] = useState("MM");
  const [currentIndexForSize, setCurrentIndexForSize] = useState(1);
  const [currentIndexForPitch, setCurrentIndexForPitch] = useState(1);
  const [data, setData] = useState([]);
  const [unit, setUnit] = useState("MM");
  const [theardSize, setTheardSize] = useState([]);
  const [theardPitch, setTheardPitch] = useState([]);
  const [showDate, setShowData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modalStatus = useSelector(
    (state) => state.modalContext.showModalForUnitOfMeasure
  );
  const actualOptionUnit = useSelector((state) => state.unitContext.actualUnit);

  const dispatch = useDispatch();

  const screenWidth = Dimensions.get("window").width;

  const elementWidth = screenWidth * 0.12;
  const elementWidth2 = screenWidth * 0.01143;

  const scrollViewRef = useRef(null);
  const scrollViewRefForSize = useRef(null);
  const scrollViewRefForPitch = useRef(null);

  const closeModal = () => {
    dispatch(modalActions.closeModal());
  };

  const actualOptionHandler = (optionSelected) => {
    setActualOption(optionSelected);
  };

  const actualUnitOfMeasureHandler = (optionSelected) => {
    setActualUnit(optionSelected);
  };

  useEffect(() => {
    if (actualOptionUnit === 1) {
      setUnit("MM");
    }
    if (actualOptionUnit === 2) {
      setUnit("INCH");
    }
  }, [actualOptionUnit]);

  useEffect(() => {
    theardsData = theards_M;
    // theardsData = theardsDataInsideForMetric;
  }, []);

  useEffect(() => {
    setData([]);
    // if (actualOption === 1 && actualOptionUnit === 1) {
    //   theardsData = theardsDataInsideForMetric;
    //   console.log(actualOptionUnit);
    // }
    // if (actualOption === 1 && actualOptionUnit === 2) {
    //   theardsData = theardsDataInsideForInch;
    //   console.log(actualOptionUnit);
    // }
    // if (actualOption === 2 && actualOptionUnit === 1) {
    //   theardsData = theardsDataOutsideForMetric;
    //   console.log(actualOptionUnit);
    // }
    // if (actualOption === 2 && actualOptionUnit === 2) {
    //   theardsData = theardsDataOutsideForInch;
    //   console.log(actualOptionUnit);
    // }
    for (let i = 0; i < 3; i++) {
      const x = "";
      setData((data) => [...data, x]);
    }

    for (const item in theardsData) {
      for (const element in theardsData[item]) {
        setData((data) => [...data, element]);
      }
    }

    for (let i = 0; i < 3; i++) {
      const x = "";
      setData((data) => [...data, x]);
    }
  }, [actualOption, actualOptionUnit]);

  useEffect(() => {
    setTheardSize([]);
    setTheardPitch([]);
    setCurrentIndexForSize(1);
    setCurrentIndexForPitch(1);

    for (let i = 0; i < 3; i++) {
      const x = "";
      setTheardSize((theardSize) => [...theardSize, x]);
    }

    for (const item in theardsData) {
      for (const element in theardsData[item]) {
        if (element === data[currentIndex + 2]) {
          // console.log(theardsData[item][element]);
          for (const size in theardsData[item][element].theardsSize) {
            setTheardSize((theardSize) => [...theardSize, size]);
          }
        }
      }
    }

    for (let i = 0; i < 3; i++) {
      const x = "";
      setTheardSize((theardSize) => [...theardSize, x]);
    }
  }, [currentIndex, data]);

  useEffect(() => {
    setTheardPitch([]);
    setShowData([]);

    setCurrentIndexForPitch(1);
    for (let i = 0; i < 3; i++) {
      const x = "";
      setTheardPitch((theardPitch) => [...theardPitch, x]);
    }

    for (const item in theardsData) {
      for (const element in theardsData[item]) {
        if (element === data[currentIndex + 2]) {
          // console.log(theardsData[item][element]);
          for (const size in theardsData[item][element].theardsSize) {
            if (size === theardSize[currentIndexForSize + 2]) {
              for (const pitch in theardsData[item][element].theardsSize[
                size
              ]) {
                for (const pitchData in theardsData[item][element].theardsSize[
                  size
                ][pitch]) {
                  console.log(
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ]
                  );
                  const name_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].theardName;
                  const size_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].size;
                  const pitch_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].pitch;
                  const hole_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].hole;
                  const dmax_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].dmax;
                  const dmin_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].dmin;
                  const d2max_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].d2max;
                  const d2min_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].d2min;
                  const d3max_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].d3max;
                  const d3min_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].d3min;
                  const D2min_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].D2min;
                  const D2max_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].D2max;
                  const D1min_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].D1min;
                  const D1max_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].d1max;
                  const Th_d =
                    theardsData[item][element].theardsSize[size][pitch][
                      pitchData
                    ].Th;

                  const newItem = {
                    name_d,
                    size_d,
                    pitch_d,
                    hole_d,
                    dmax_d,
                    dmin_d,
                    d2max_d,
                    d2min_d,
                    d3max_d,
                    d3min_d,
                    D2min_d,
                    D2max_d,
                    D1min_d,
                    D1max_d,
                    Th_d,
                  };

                  setShowData((showDate) => [...showDate, newItem]);

                  setTheardPitch((theardPitch) => [...theardPitch, pitchData]);
                }
              }
            }
          }
        }
      }
    }
    for (let i = 0; i < 3; i++) {
      const x = "";
      setTheardPitch((theardPitch) => [...theardPitch, x]);
    }
  }, [currentIndexForSize, theardSize]);

  const renderText = (text, index, indexType) => {
    let textStyle = [styles.text1, styles.opacity10];

    if (index === indexType + 2) {
      textStyle = [textStyle, styles.opacity100];
    }
    if (index === indexType + 3 || index === indexType + 1) {
      textStyle = [textStyle, styles.opacity50];
    }
    if (index === indexType + 4 || index === indexType) {
      textStyle = [textStyle, styles.opacity30];
    }
    if (index === indexType + 5 || index === indexType - 1) {
      textStyle = [textStyle, styles.opacity10];
    }

    return (
      <View style={styles.textContainer} key={index}>
        <View
          style={[
            {
              width: elementWidth,
              margin: elementWidth2,
            },
          ]}
        >
          <Text style={textStyle}>{text}</Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollViewRef.current.scrollTo({
        x: (currentIndex - 1) * (elementWidth + elementWidth2 * 2),
        y: 0,
        animated: true,
      });
    }, 800);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollViewRefForSize.current.scrollTo({
        x: (currentIndexForSize - 1) * (elementWidth + elementWidth2 * 2),
        y: 0,
        animated: true,
      });
    }, 800);
    return () => clearTimeout(timer);
  }, [currentIndexForSize]);

  useEffect(() => {
    // setTheardPitch([]);

    const timer = setTimeout(() => {
      scrollViewRefForPitch.current.scrollTo({
        x: (currentIndexForPitch - 1) * (elementWidth + elementWidth2 * 2),
        y: 0,
        animated: true,
      });
    }, 800);
    return () => clearTimeout(timer);
  }, [currentIndexForPitch]);

  const handleScroll = (event) => {
    // przesuwanie dla typu gwintu
    const contentOffsetX = event.nativeEvent.contentOffset.x;

    const index = Math.floor(
      contentOffsetX / (elementWidth + elementWidth2 * 2) + 1.5
    ); // Przyjmując stałą szerokość elementów
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const handleScrollForSize = (event) => {
    // przesuwanie dla rodzaju gwintu
    const contentOffsetX = event.nativeEvent.contentOffset.x;

    const index = Math.floor(
      contentOffsetX / (elementWidth + elementWidth2 * 2) + 1.5
    ); // Przyjmując stałą szerokość elementów
    if (index !== currentIndexForSize) {
      setCurrentIndexForSize(index);
    }
  };

  const handleScrollForPitch = (event) => {
    // przesuwanie dla rodzaju gwintu
    const contentOffsetX = event.nativeEvent.contentOffset.x;

    const index = Math.floor(
      contentOffsetX / (elementWidth + elementWidth2 * 2) + 1.5
    ); // Przyjmując stałą szerokość elementów
    if (index !== currentIndexForPitch) {
      setCurrentIndexForPitch(index);
    }
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalStatus}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <ModalDescription text="SELECT UNIT" />
              <BackgroundForSelectedUnit
                actualUnitOfMeasureHandler={actualUnitOfMeasureHandler}
                actualOptionUnit={actualUnit}
              />
              <TouchableOpacity
                style={styles.modalButtonExit}
                onPress={closeModal}
              >
                <OkButtonModal title="OK" />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.resoultContainer}>
          <BackgroundForTheardsButtons
            actualOptionHandler={actualOptionHandler}
          />

          <BackgroundForResult
            data={showDate}
            unit={unit}
            index={currentIndexForPitch}
            actualOption={actualOption}
          />
        </View>
        <View style={styles.parametersContainer}>
          <TheardsDescription text="SELECT THEARD TYPE" />

          <View style={styles.scrollContainer}>
            <ScrollView
              ref={scrollViewRef}
              onScroll={handleScroll}
              style={styles.container}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {data.map((text, index) => renderText(text, index, currentIndex))}
            </ScrollView>
            <View style={styles.triangleContainer}>
              <Triangle />
            </View>
          </View>

          <TheardsDescription text="SELECT DIAMETER THEARD" />
          <View style={styles.scrollContainer}>
            <ScrollView
              ref={scrollViewRefForSize}
              onScroll={handleScrollForSize}
              style={styles.container}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {theardSize.map((text, index) =>
                renderText(text, index, currentIndexForSize)
              )}
            </ScrollView>
            {theardSize.length > 6 ? (
              <View style={styles.triangleContainer}>
                <Triangle />
              </View>
            ) : null}
          </View>
          <TheardsDescription text="SELECT THEARD PITCH" />
          <View style={styles.scrollContainer}>
            <ScrollView
              ref={scrollViewRefForPitch}
              onScroll={handleScrollForPitch}
              style={styles.container}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {theardPitch.map((text, index) =>
                renderText(text, index, currentIndexForPitch)
              )}
            </ScrollView>
            {theardPitch.length > 6 ? (
              <View style={styles.triangleContainer}>
                <Triangle />
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: "white",
  },
  theardsDescription: {
    marginTop: 0,
    // flex: 5,
  },
  mainContainer: {
    // height: "80%",
    flex: 1,
    maxHeight: screenHeight * 1,
    backgroundColor: "#0A0A0B",
    // flex: 1,
  },

  parametersContainer: {
    maxHeight: screenHeight * 0.5, // 40% wysokości ekranu
    height: screenHeight * 0.5,
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
    // justifyContent: "center",
  },

  modalButtonExit: {
    display: "flex",
    width: "100%",
    alignSelf: "center",
    marginTop: 100,
  },

  resoultContainer: {
    height: screenHeight * 0.5, // 40% wysokości ekranu
  },

  textContainer: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 52,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.95)", // Przezroczyste tło
  },

  container: {
    backgroundColor: "#0A0A0B",
    margin: 0,
    padding: 0,
    // height: 40,
  },

  triangleContainer: {
    width: "100vw",
    alignItems: "center",
  },

  opacity100: {
    opacity: 1,
    fontFamily: "Inter_700Bold",
    fontSize: 32,
    width: "300%",
    textAlign: "center",
    display: "flex",
    alignSelf: "center",
  },
  opacity50: {
    opacity: 0.3,
    fontFamily: "Inter_500Medium",
    fontSize: 16,
    width: "300%",
    textAlign: "center",
    display: "flex",
    alignSelf: "center",
  },
  opacity30: {
    opacity: 0.24,
    fontSize: 16,
  },
  opacity10: {
    opacity: 0.18,
    fontSize: 14,
  },
});

export default MainScreen;
