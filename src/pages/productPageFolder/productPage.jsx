import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./productPage-desktop.css";
import "./productPage-laptop.css";
import "./productPage-tablet.css";
import "./productPage-mobile.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
//import Button from '@mui/material/Button';
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Button from "@mui/material/Button";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InputBase from "@mui/material/InputBase";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./stylesSwiperProduct/styleSwiperSliderProduct.css";
import "./stylesSwiperProduct/styleSwiperSliderProduct-laptop.css";
import "./stylesSwiperProduct/styleSwiperSliderProduct-tablet.css";
import "./stylesSwiperProduct/styleSwiperSliderProduct-mobile.css";
import data from "../main/data";

import iconComplect from "./imagePageProduct/iconComplect.svg";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const ProductPage = () => {
  const [value, setValue] = React.useState("О товаре");

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemId]);
  const product = data.find((item) => item.id === parseInt(itemId));

  const [selectedColor, setSelectedColor] = useState(
    Object.keys(product.color[0])[0],
  );
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  // Загрузите информацию о товаре с ID itemId

  const breadcrumbs = [
    <Link to="/katalog" key="1" className="bread__crumb__link">
      Каталог
    </Link>,
    <Link to="" key="2" className="bread__crumb__link">
      {product.category}
    </Link>,
    <Typography
      key="3"
      className="font__bread__crumb"
      sx={{ color: "text.primary" }}
    >
      {product.title}
    </Typography>,
  ];

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(2),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "none", // Убираем границу,
      fontSize: 22,
      padding: "10px 0px 10px 0px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "transparent",
        border: "none", // Убираем границу при фокусе
        boxShadow: "none", // Убираем тень
      },
      "&:hover": {
        border: "none", // Убираем границу при наведении
      },
    },
  }));

  return (
    <main className="main__product__page">
      <Stack spacing={2} className="bread__crumbs">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>

      <section className="slider__select__color__container">
        <div className="select__color__semi__container rotate__container">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3"
          >
            {product.imageForCard.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slide3">
                <img src={image} alt="Описание изображения" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper4"
          >
            {product.imageForCard.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slide4">
                <img src={image} alt="Описание изображения" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="select__color__semi__container">
          <div className="select__color__container">
            <div className="select__color__header">
              <h2>{product.title}</h2>
              <p className="select__color__header__likes">
                {" "}
                <Checkbox
                  className="image-like"
                  icon={<FavoriteBorder sx={{ color: "#EA899A" }} />}
                  checkedIcon={<Favorite sx={{ color: "#EA899A" }} />}
                />{" "}
                {product.likes}
              </p>
            </div>
            <p className="select__color__material">
              <span>Материал:</span> {product.material}
            </p>
            <div className="select__color__block">
              <p>
                <span>Цвет:</span> {selectedColor}
              </p>
              <div
                className="select__color__tablet"
                style={{ display: "flex", marginBottom: "35px" }}
              >
                {product.color.map((colorObj) =>
                  Object.entries(colorObj).map(([key, value]) => (
                    <div
                      key={value}
                      style={{
                        width: "35px",
                        height: "35px",
                        backgroundColor: value,
                        margin: "5px",
                        marginRight: "30px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        border:
                          selectedColor === key
                            ? "2px solid rgba(89, 89, 89, 0.39)"
                            : "2px solid rgba(89, 89, 89, 0.39)",
                        boxShadow:
                          selectedColor === key
                            ? "0 3px 19px 7px rgba(89, 89, 89, 0.39)"
                            : "none",
                      }}
                      onClick={() => handleColorClick(key)}
                    />
                  )),
                )}
              </div>
            </div>

            <Box sx={{ m: 1, minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  className="textSelect"
                >
                  Выбор комплектации <img src={iconComplect} alt="иконка" />
                </InputLabel>
                <Select
                  className="select__tablet"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Выбор комплектации"
                  input={<BootstrapInput />}
                  IconComponent={() => null} // Убираем иконку
                  onChange={handleChange}
                >
                  <MenuItem className="select__tablet__item" value={10}>
                    Ten
                  </MenuItem>
                  <MenuItem className="select__tablet__item" value={20}>
                    Twenty
                  </MenuItem>
                  <MenuItem className="select__tablet__item" value={30}>
                    Thirty
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <div className="priceProduct__containe">
              <p>{product.price} р.</p>
              <Button className="product__button " variant="contained">
                Заказать
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="tabs__container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChangeTabs}
                aria-label="lab API tabs example"
              >
                <Tab
                  className="tabs__product"
                  label={
                    <Typography
                      sx={{
                        fontWeight: value === "О товаре" ? "bold" : "normal",
                        color: value === "О товаре" ? "black" : "inherit",
                      }}
                    >
                      О товаре
                    </Typography>
                  }
                  value="О товаре"
                />
                <Tab
                  className="tabs__product"
                  label={
                    <Typography
                      sx={{
                        fontWeight:
                          value === "Комплектация" ? "bold" : "normal",
                        color: value === "Комплектация" ? "black" : "inherit",
                      }}
                    >
                      Комплектация
                    </Typography>
                  }
                  value="Комплектация"
                />
                <Tab
                  className="tabs__product"
                  label={
                    <Typography
                      sx={{
                        fontWeight: value === "Отзывы" ? "bold" : "normal",
                        color: value === "Отзывы" ? "black" : "inherit",
                      }}
                    >
                      Отзывы
                    </Typography>
                  }
                  value="Отзывы"
                />
              </TabList>
            </Box>
            <TabPanel className="tabPanel__pading" value="О товаре">
              <div className="mainAboutProductContainer">
                <div className="aboutProductConatainer">
                  <h3>{product.title1}</h3>
                  <p>{product.discription1}</p>
                  <img
                    className="image__mobille__tab"
                    src={product.aboutImages[0]}
                    alt=""
                  />

                  <h4>{product.subTitle1}</h4>
                  <p>{product.discription2}</p>
                </div>
                <div className="containerPhotoAbout">
                  <img
                    className="noimage__mobille__tab"
                    src={product.aboutImages[0]}
                    alt=""
                  />
                  <div className="images__group__mobile">
                    <img src={product.aboutImages[1]} alt="" />
                    <img src={product.aboutImages[2]} alt="" />
                  </div>
                  <div className="slider__mobile__product">
                    <Swiper
                      slidesPerView={"auto"}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper5"
                    >
                      <SwiperSlide className="image__mobile__slider__item1"> <img className="image__mobile__slider1" src={product.aboutImages[1]} alt="" /></SwiperSlide>
                      <SwiperSlide className="image__mobile__slider__item2"><img className="image__mobile__slider2" src={product.aboutImages[2]} alt="" /></SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tabPanel__pading" value="Комплектация">
              <div className="mainAboutCharacteristics">
                <div className="aboutProductCharacteristics">
                  <h3>{product.title1}</h3>
                  <p>{product.discription1}</p>
                  <h4>{product.subTitle1}</h4>
                  <p>{product.discription2}</p>
                </div>
                <div className="containerPhotoAbout">
                  <img src={product.aboutImages[0]} alt="" />
                  <div>
                    <img src={product.aboutImages[1]} alt="" />
                    <img src={product.aboutImages[2]} alt="" />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="tabPanel__pading" value="Отзывы">
              <div className="mainAboutProductContainer">
                <div className="aboutProductConatainer">
                  <h3>{product.title1}</h3>
                  <p>{product.discription1}</p>
                  <h4>{product.subTitle1}</h4>
                  <p>{product.discription2}</p>
                </div>
                <div className="containerPhotoAbout">
                  <img src={product.aboutImages[0]} alt="" />
                  <div>
                    <img src={product.aboutImages[1]} alt="" />
                    <img src={product.aboutImages[2]} alt="" />
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabContext>
        </Box>
      </section>
    </main>
  );
};

export default ProductPage;
