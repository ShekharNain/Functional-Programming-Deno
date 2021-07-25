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
    let parameters = "?";
    parameters += "Product_id=" + metadata.productId;
    if(metadata.correlationId){
      parameters += "&Correlation_id=" + metadata.correlationId;
    }
    parameters += "&Ring=" + metadata.ring;
    parameters += "&Lang_code=" + metadata.langCode;
    parameters += "&Platform_id=" + metadata.platformId;
    parameters += "&App_Version=" + metadata.version;
    if(metadata.resourceId) {
      parameters += "&Resource_id=" + metadata.resourceId;
    }
    parameters += "&Error_code" + metadata.errorCode;
    parameters += "&Product_feature_are_id=" + metadata.productFeatureAreaId;
    if(metadata.lmsType!==undefined) {
      parameters += "&Lms_id=" + metadata.lmsType;
    }
    return url + parameters;
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
