import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const siteUrl = "https://docs.easonabc.eu.org";

const site = lume({
  src: "src",
  location: new URL(siteUrl),
});

site.use(lumocs());

export default site;
