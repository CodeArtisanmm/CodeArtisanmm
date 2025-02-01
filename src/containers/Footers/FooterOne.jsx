import React from "react";
import { Link } from "react-router-dom";
import {
  InfoMedia,
  Widget,
  AboutWidget,
  CategoryWidget,
  IconLink,
} from "../../components/";

// Widget Datas
import widgetsdata from "../../data/widgets.json";
import { useTranslation } from "react-i18next";

const { pageList, exploreLinks } = widgetsdata;

const FooterOne = () => {
  const { t } = useTranslation();
  return (
    <footer
      className="footer-wrapper footer-layout1 background-image"
      style={{ backgroundImage: "url(images/shape/bg-footer-1-1.jpg)" }}
    >
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="footer-media col-sm">
              <InfoMedia
                icon="fal fa-map-marker-alt"
                title={t("footer.office-address")}
                info={t("home.header.online-service")}
              />
            </div>
            <div className="footer-media col-sm">
              <InfoMedia
                icon="fal fa-clock"
                title={t("footer.working-hours")}
                info={t("footer.working-time")}
              />
            </div>
            <div className="footer-media col-sm">
              <InfoMedia
                icon="fal fa-phone-volume"
                title={t("contact-us")}
                info={
                  <>
                    <a href="mailto:info@codeartisanmm.com">
                      info@codeartisanmm.com
                    </a>
                    <br />
                    <a href="tel:+09770139207"> 09770139207 </a>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-auto">
              <Widget widgetTitle="About Us" className="footer-widget">
                <AboutWidget>
                  <AboutWidget.Text>{t("footer.aboutus")}</AboutWidget.Text>
                  <IconLink className="footer-social">
                    <IconLink.Item icon="fab fa-facebook-f" path="/" />
                    <IconLink.Item icon="fab fa-viber" path="/" />
                  </IconLink>
                </AboutWidget>
              </Widget>
            </div>
            <div className="col-6 col-xl-auto">
              <Widget
                widgetTitle="Links"
                className="widget_nav_menu footer-widget"
              >
                <CategoryWidget>
                  {pageList.map((cat) => (
                    <CategoryWidget.Item key={cat.name} path={cat.path}>
                      {t(`footer.${cat.name}`)}
                    </CategoryWidget.Item>
                  ))}
                </CategoryWidget>
              </Widget>
            </div>
            <div className="col-6 col-xl-auto">
              <Widget
                widgetTitle="Explore"
                className="widget_nav_menu footer-widget"
              >
                <CategoryWidget>
                  {exploreLinks.map((cat) => (
                    <CategoryWidget.Item key={cat.name} path={cat.path}>
                      {t(`footer.${cat.name}`)}
                    </CategoryWidget.Item>
                  ))}
                </CategoryWidget>
              </Widget>
            </div>
            {/* <div className="col-md-6 col-xl-auto">
              <Widget widgetTitle="Lastest Post" className="footer-widget">
                {recentPosts.slice(0, 2).map((post) => (
                  <RecentPostWidget
                    key={post.id}
                    title={post.title}
                    image={post.image}
                    date={post.date}
                  />
                ))}
              </Widget>
            </div> */}
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <p className="copyright-text">
            Copyright <i className="fal fa-copyright" /> 2023
            <Link className="text-white" to="/">
              CodeArtisan
            </Link>
            . All rights reserved by
            <a className="text-white" href="">
              CodeArtisan
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
