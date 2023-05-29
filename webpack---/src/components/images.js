import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function withImageData(WrappedComponent) {
  return (props) => (
    <StaticQuery
      query={graphql`
        query {
          breakfast: file(relativePath: { eq: "breakfast.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          breakfastTwo: file(relativePath: { eq: "breakfast-2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          bubbly: file(relativePath: { eq: "bubbly.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          balconyOne: file(relativePath: { eq: "balcony-1-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          balconyTwo: file(relativePath: { eq: "balcony-2-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          balconyThree: file(relativePath: { eq: "balcony-3-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          balconyFour: file(relativePath: { eq: "balcony-4-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          bathroomOne: file(relativePath: { eq: "bathroom-1-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          bathroomTwo: file(relativePath: { eq: "bathroom-2-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          cwyfanChurch: file(relativePath: { eq: "cwyfan-church.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          downstairsBathroom: file(
            relativePath: { eq: "downstairs-bathroom-gallery.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          frontView: file(relativePath: { eq: "front-view.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          backView: file(relativePath: { eq: "back-view.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          frontViewGallery: file(
            relativePath: { eq: "front-view-gallery.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          haflinger: file(relativePath: { eq: "haflinger.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          heroBanner: file(relativePath: { eq: "hero-banner.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          iLoveWales: file(relativePath: { eq: "ilovewales.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          kitchenOne: file(relativePath: { eq: "kitchen-1-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          kitchenTwo: file(relativePath: { eq: "kitchen-2-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          lamp: file(relativePath: { eq: "lamp.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          loungeOne: file(relativePath: { eq: "lounge-1-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          loungeTwo: file(relativePath: { eq: "lounge-2-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          masterBedroomOne: file(
            relativePath: { eq: "master-bedroom-1-gallery.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          masterBedroomTwo: file(
            relativePath: { eq: "master-bedroom-2-gallery.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          masterBedroomThree: file(
            relativePath: { eq: "master-bedroom-3-gallery.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          secondBedroom: file(
            relativePath: { eq: "second-bedroom.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          menaiBridge: file(relativePath: { eq: "menai_bridge.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }

          menaiStraits: file(
            relativePath: { eq: "menai-straits-view-gallery.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          portDinorwicOne: file(
            relativePath: { eq: "port-dinorwic-marina-gallery.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          portDinorwicTwo: file(
            relativePath: { eq: "port-dinorwic-2-gallery.jpg" }
          ) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          priceChart: file(relativePath: { eq: "price_chart.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          review: file(relativePath: { eq: "review.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          snowdon: file(relativePath: { eq: "snowdon.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          utilityRoom: file(relativePath: { eq: "utility-room-gallery.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => <WrappedComponent {...props} imageData={data} />}
    />
  );
}

const BalconyOne = withImageData((props) => (
  <Img {...props} fluid={props.imageData.balconyOne.childImageSharp.fluid} />
));
const Breakfast = withImageData((props) => (
  <Img {...props} fluid={props.imageData.breakfast.childImageSharp.fluid} />
));
const BreakfastTwo = withImageData((props) => (
  <Img {...props} fluid={props.imageData.breakfastTwo.childImageSharp.fluid} />
));
const Bubbly = withImageData((props) => (
  <Img {...props} fluid={props.imageData.bubbly.childImageSharp.fluid} />
));
const BalconyTwo = withImageData((props) => (
  <Img {...props} fluid={props.imageData.balconyTwo.childImageSharp.fluid} />
));
const BalconyThree = withImageData((props) => (
  <Img {...props} fluid={props.imageData.balconyThree.childImageSharp.fluid} />
));
const BalconyFour = withImageData((props) => (
  <Img {...props} fluid={props.imageData.balconyFour.childImageSharp.fluid} />
));
const BathroomOne = withImageData((props) => (
  <Img {...props} fluid={props.imageData.bathroomOne.childImageSharp.fluid} />
));
const BathroomTwo = withImageData((props) => (
  <Img {...props} fluid={props.imageData.bathroomTwo.childImageSharp.fluid} />
));
const CwyfanChurch = withImageData((props) => (
  <Img {...props} fluid={props.imageData.cwyfanChurch.childImageSharp.fluid} />
));
const DownstairsBathroom = withImageData((props) => (
  <Img
    {...props}
    fluid={props.imageData.downstairsBathroom.childImageSharp.fluid}
  />
));

const FrontView = withImageData((props) => (
  <Img {...props} fluid={props.imageData.frontView.childImageSharp.fluid} />
));
const BackView = withImageData((props) => (
  <Img {...props} fluid={props.imageData.backView.childImageSharp.fluid} />
));
const FrontViewGallery = withImageData((props) => (
  <Img
    {...props}
    fluid={props.imageData.frontViewGallery.childImageSharp.fluid}
  />
));
const Haflinger = withImageData((props) => (
  <Img {...props} fluid={props.imageData.haflinger.childImageSharp.fluid} />
));
const HeroBanner = withImageData((props) => (
  <Img {...props} fluid={props.imageData.heroBanner.childImageSharp.fluid} />
));

const ILoveWales = withImageData((props) => {
  console.log(props);

  return (
    <Img {...props} fluid={props.imageData.iLoveWales.childImageSharp.fluid} />
  );
});
const KitchenOne = withImageData((props) => (
  <Img {...props} fluid={props.imageData.kitchenOne.childImageSharp.fluid} />
));
const KitchenTwo = withImageData((props) => (
  <Img {...props} fluid={props.imageData.kitchenTwo.childImageSharp.fluid} />
));
const Lamp = withImageData((props) => (
  <Img {...props} fluid={props.imageData.lamp.childImageSharp.fluid} />
));
const LoungeOne = withImageData((props) => (
  <Img {...props} fluid={props.imageData.loungeOne.childImageSharp.fluid} />
));
const LoungeTwo = withImageData((props) => (
  <Img {...props} fluid={props.imageData.loungeTwo.childImageSharp.fluid} />
));

const MasterBedroomOne = withImageData((props) => (
  <Img
    {...props}
    fluid={props.imageData.masterBedroomOne.childImageSharp.fluid}
  />
));
const MasterBedroomTwo = withImageData((props) => (
  <Img
    {...props}
    fluid={props.imageData.masterBedroomTwo.childImageSharp.fluid}
  />
));
const MasterBedroomThree = withImageData((props) => (
  <Img
    {...props}
    fluid={props.imageData.masterBedroomThree.childImageSharp.fluid}
  />
));
const SecondBedroom = withImageData((props) => (
  <Img
    {...props}
    fluid={props.imageData.secondBedroom.childImageSharp.fluid}
  />
));
const MenaiBridge = withImageData((props) => (
  <Img {...props} fluid={props.imageData.menaiBridge.childImageSharp.fluid} />
));
const MenaiStraits = withImageData((props) => (
  <Img {...props} fluid={props.imageData.menaiStraits.childImageSharp.fluid} />
));

const PortDinorwicOne = withImageData((props) => (
  <Img
    {...props}
    fluid={props.imageData.portDinorwicOne.childImageSharp.fluid}
  />
));
const PortDinorwicTwo = withImageData((props) => (
  <Img
    {...props}
    fluid={props.imageData.portDinorwicTwo.childImageSharp.fluid}
  />
));

const PriceChart = withImageData((props) => (
  <Img {...props} fluid={props.imageData.priceChart.childImageSharp.fluid} />
));
const Review = withImageData((props) => (
  <Img {...props} fluid={props.imageData.review.childImageSharp.fluid} />
));
const Snowdon = withImageData((props) => (
  <Img {...props} fluid={props.imageData.snowdon.childImageSharp.fluid} />
));
const UtilityRoom = withImageData((props) => (
  <Img {...props} fluid={props.imageData.utilityRoom.childImageSharp.fluid} />
));

export {
  Breakfast,
  Bubbly,
  BreakfastTwo,
  BalconyOne,
  BalconyTwo,
  BalconyThree,
  BalconyFour,
  BathroomOne,
  BathroomTwo,
  CwyfanChurch,
  DownstairsBathroom,
  FrontView,
  BackView,
  FrontViewGallery,
  Haflinger,
  HeroBanner,
  ILoveWales,
  KitchenOne,
  KitchenTwo,
  Lamp,
  LoungeOne,
  LoungeTwo,
  MasterBedroomOne,
  MasterBedroomTwo,
  MasterBedroomThree,
  SecondBedroom,
  MenaiBridge,
  MenaiStraits,
  PortDinorwicOne,
  PortDinorwicTwo,
  PriceChart,
  Review,
  Snowdon,
  UtilityRoom,
};
