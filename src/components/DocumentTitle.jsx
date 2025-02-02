import { Helmet } from "react-helmet-async";

export default function DocumentTitle({ title }) {
  return (
    <Helmet>
      <title>{title} | TravelTrucks</title>
    </Helmet>
  );
}
