import { compose } from "../../lib/index.ts";

type Metadata = {
    productId : string ,
    correlationId : string | undefined,
    ring : string | undefined,
    langCode : string | undefined,
    platformId : string| undefined,
    version : string | undefined,
    resourceId : string | undefined,
    errorCode : number
    productFeatureAreaId : string,
    lmsType : number,
};

// 2. Change the following implementatio to use compose + currying/partial
function addQueryStringParameters(
    url: string,
    metadata:Metadata
  ): string {

    const addParam = compose(
      curriedAddQueryParam("Lms_id")(`${metadata.lmsType}`),
      curriedAddQueryParam("Product_feature_are_id")(`${metadata.productFeatureAreaId}`),
      curriedAddQueryParam("Error_code")(`${metadata.errorCode}`),
      curriedAddQueryParam("Resource_id")(`${metadata.resourceId}`),
      curriedAddQueryParam("App_Version")(`${metadata.version}`),
      curriedAddQueryParam("Platform_id")(`${metadata.platformId}`),
      curriedAddQueryParam("Lang_code")(`${metadata.langCode}`),
      curriedAddQueryParam("Ring")(`${metadata.ring}`),
      curriedAddQueryParam("Correlation_id")(`${metadata.correlationId}`),
      curriedAddQueryParam("Product_id")(metadata.productId)
    )

    return addParam(url);
  }


const curriedAddQueryParam = (param: string) => (value: string) => (url: string) => {
  if (!value) {
    return url;
  }
  addQueryParameter(param, value, url)
}
// Hint: create a curried function for this
function addQueryParameter(param: string, value: string, url: string): string {
    if (!url || !param || url.match(new RegExp(`[\?\&]${param}=`))) {
        return url;
      }
    
    const separator = url.indexOf("?") >= 0 ? "&" : "?";
    const qsp = `${separator}${param}=${value}`;
    if (url.indexOf("#") !== -1) {
    const hashFragments = url.split("#");
    return `${hashFragments[0]}${qsp}#${hashFragments[1]}`;
    }

    return `${url}${qsp}`;
}
