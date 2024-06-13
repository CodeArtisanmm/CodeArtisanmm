import React from "react";
import {
  HeaderTop,
  HeaderSticky,
  InfoMedia,
  Logo,
  MainMenu,
  MobileMenu,
  IconLink,
} from "../../components";
import { useTranslation } from "react-i18next";

const HeaderTwo = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="vs-header header-layout1">
      <HeaderTop>
        <HeaderTop.Left>
          <p className="note_style1">
            <span className="note_title">We are:</span>Code Artisan.
          </p>
        </HeaderTop.Left>
        <HeaderTop.Right>
          <IconLink className="header-social style-white" title="Follow Us On:">
            <IconLink.Item icon="fab fa-facebook-f" path="/" />
            <IconLink.Item icon="fab fa-viber" path="/" />
          </IconLink>
        </HeaderTop.Right>
      </HeaderTop>
      <div className="container">
        <div className="menu-top">
          <div className="row justify-content-between align-items-center gx-sm-0">
            <div className="col">
              <Logo image="images/main-logo.png" />
            </div>
            <InfoMedia
              className="header-media col-auto"
              icon="fas fa-phone-alt"
              title={t("home.header.phone")}
              info={<a href="tel:+09770139207"> 09770139207 </a>}
            />
            <InfoMedia
              className="header-media col-auto d-none d-lg-flex"
              icon="fas fa-envelope"
              title={t("home.header.email")}
              info={
                <a href="mailto:info@codeartisanmm.com">
                  info@codeartisanmm.com
                </a>
              }
            />
            <InfoMedia
              className="header-media col-auto d-none d-xl-flex"
              icon="fas fa-map-marker-alt"
              title={t("home.header.address")}
              info={t("home.header.online-service")}
            />
          </div>
        </div>
      </div>
      <HeaderSticky>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <MainMenu className="menu-style1 d-none d-lg-block" />
              <MobileMenu />
            </div>
            <div className="col-auto d-flex align-items-center">
              {/* language  */}
              <div
                onClick={() => changeLanguage("en")}
                className={
                  i18n.language == "en"
                    ? "selected me-3 p-1 position-relative"
                    : "me-3 position-relative"
                }
                style={{
                  cursor: "pointer",
                }}
              >
                <img
                  src="/images/flag/english-flag.svg"
                  alt="english-flag"
                  width={30}
                  height={30}
                />
                {/* tick  */}
                {i18n.language == "en" && (
                  <span className="tick">
                    <img
                      src="/images/flag/tick-circle.svg"
                      alt="tick"
                      width={30}
                      height={30}
                    />
                  </span>
                )}
              </div>
              <div
                onClick={() => changeLanguage("my")}
                className={
                  i18n.language == "my"
                    ? "selected me-3 p-1 position-relative"
                    : "me-3 position-relative"
                }
                style={{
                  cursor: "pointer",
                }}
              >
                <img
                  src="/images/flag/myanmar-flag.svg"
                  alt="myanmar-flag"
                  width={30}
                  height={30}
                />
                {i18n.language == "my" && (
                  <span className="tick">
                    <img
                      src="/images/flag/tick-circle.svg"
                      alt="tick"
                      width={30}
                      height={30}
                    />
                  </span>
                )}
              </div>
              <div
                onClick={() => changeLanguage("ch")}
                className={
                  i18n.language == "ch"
                    ? "position-relative selected me-3 p-1"
                    : "position-relative me-3"
                }
                style={{
                  cursor: "pointer",
                }}
              >
                <img
                  src="/images/flag/china-flag.svg"
                  alt="china-flag"
                  width={30}
                  height={30}
                />
                {i18n.language == "ch" && (
                  <span className="tick">
                    <img
                      src="/images/flag/tick-circle.svg"
                      alt="tick"
                      width={30}
                      height={30}
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </HeaderSticky>
    </header>
  );
};

export default HeaderTwo;
